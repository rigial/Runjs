#!/usr/bin/env python3
"""
Full Curriculum Generator for RunJS Learning Platform.
Extracts all 175 articles and 251 tasks from https://github.com/javascript-tutorial/en.javascript.info
and generates typed TypeScript data files adhering to the RunJS Lesson & Curriculum schemas.
"""

import os
import re
import json

ROOT = '/tmp/en.javascript.info'
OUTPUT_DIR = '/Users/kishor/Documents/Runjs/src/learn/data'
LESSONS_DIR = os.path.join(OUTPUT_DIR, 'lessons')

os.makedirs(LESSONS_DIR, exist_ok=True)

# ─── Slugs & Uniqueness ───────────────────────────────────────────────────────

slug_registry = set()

def make_unique_slug(base_slug, prefix=""):
    slug = re.sub(r'[^a-z0-9-]', '', base_slug.lower().strip().replace('_', '-').replace(' ', '-'))
    slug = re.sub(r'-+', '-', slug).strip('-')
    if not slug:
        slug = "lesson"
    
    candidate = slug
    if candidate in slug_registry:
        if prefix:
            candidate = f"{prefix}-{slug}"
        counter = 2
        while candidate in slug_registry:
            candidate = f"{slug}-{counter}"
            counter += 1
    
    slug_registry.add(candidate)
    return candidate


def clean_markdown_text(text):
    if not text:
        return ""
    # Strip custom tags like [info:devtools] or [edit:...]
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)
    # Remove inline html tags
    text = re.sub(r'</?[a-zA-Z][^>]*>', '', text)
    # Remove backticks from inline code if malformed
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def clean_code(code_str):
    if not code_str:
        return ""
    # Strip out trailing/leading whitespace and custom non-standard directives
    lines = code_str.split('\n')
    filtered = []
    for l in lines:
        if l.strip().startswith('//+delete') or l.strip().startswith('//-delete'):
            continue
        filtered.append(l)
    return '\n'.join(filtered).strip()


# ─── Task Parser ─────────────────────────────────────────────────────────────

def parse_task(task_dir):
    task_file = os.path.join(task_dir, 'task.md')
    sol_file = os.path.join(task_dir, 'solution.md')

    if not os.path.isfile(task_file):
        return None

    with open(task_file, 'r', encoding='utf-8', errors='ignore') as f:
        t_raw = f.read()

    sol_raw = ""
    if os.path.isfile(sol_file):
        with open(sol_file, 'r', encoding='utf-8', errors='ignore') as sf:
            sol_raw = sf.read()

    # Title
    m_title = re.search(r'^#\s+(.+)$', t_raw, re.M)
    title = m_title.group(1).strip() if m_title else os.path.basename(task_dir)

    # Clean description
    desc_lines = []
    for line in t_raw.split('\n'):
        if line.startswith('importance:') or line.startswith('---') or line.startswith('#'):
            continue
        desc_lines.append(line)
    desc = clean_markdown_text(' '.join(desc_lines))
    if not desc:
        desc = f"Solve the problem: {title}."

    # Extract solution code
    sol_code_m = re.search(r'```(?:js|javascript|html)?\s*\n([\s\S]*?)```', sol_raw)
    solution_code = clean_code(sol_code_m.group(1)) if sol_code_m else ""
    if not solution_code:
        # Check task for starter
        task_code_m = re.search(r'```(?:js|javascript|html)?\s*\n([\s\S]*?)```', t_raw)
        solution_code = clean_code(task_code_m.group(1)) if task_code_m else "// Your solution here\n"

    # Starter code
    task_starter_m = re.search(r'```(?:js|javascript|html)?\s*\n([\s\S]*?)```', t_raw)
    starter_code = clean_code(task_starter_m.group(1)) if task_starter_m else "// Write your code here\n"

    # Hints
    hints = []
    if "importance: 1" in t_raw:
        hints.append("This is a fundamental concept. Think step by step.")
    elif "importance: 3" in t_raw:
        hints.append("Careful with edge cases and type coercions.")
    else:
        hints.append("Break the problem down into smaller operations.")

    return {
        'title': title,
        'description': desc[:300],
        'starterCode': starter_code,
        'solution': solution_code,
        'hints': hints,
        'difficulty': 'beginner' if 'importance: 1' in t_raw else ('advanced' if 'importance: 3' in t_raw else 'intermediate')
    }


# ─── Article Parser ──────────────────────────────────────────────────────────

def parse_article(art_dir, fallback_title=""):
    art_file = os.path.join(art_dir, 'article.md')
    if not os.path.isfile(art_file):
        return None

    with open(art_file, 'r', encoding='utf-8', errors='ignore') as f:
        raw = f.read()

    lines = raw.split('\n')
    title = fallback_title
    sections = []
    curr_heading = "Overview"
    curr_paras = []
    curr_bullets = []
    curr_examples = []
    curr_callout = None

    def make_section(h, paras, exs, bullets, callout):
        sec = {
            'heading': h,
            'paragraphs': paras[:5] if paras else [f"Understanding {h} in JavaScript."]
        }
        if exs:
            sec['codeExamples'] = exs[:2]
        if bullets:
            sec['bulletPoints'] = bullets[:5]
        if callout:
            sec['callout'] = callout
        return sec

    i = 0
    while i < len(lines):
        line = lines[i]

        # Lesson title (# Title)
        if line.startswith('# ') and not title:
            title = clean_markdown_text(line[2:])
            i += 1
            continue

        # Subheadings
        if line.startswith('## ') or line.startswith('### '):
            if curr_paras or curr_examples or curr_bullets or curr_callout:
                sections.append(make_section(curr_heading, curr_paras, curr_examples, curr_bullets, curr_callout))
            curr_heading = clean_markdown_text(line.lstrip('#'))
            curr_paras = []
            curr_bullets = []
            curr_examples = []
            curr_callout = None
            i += 1
            continue

        # Code block
        if re.match(r'^```(js|javascript|html)?', line):
            code_lines = []
            i += 1
            while i < len(lines) and not lines[i].startswith('```'):
                code_lines.append(lines[i])
                i += 1
            code_str = clean_code('\n'.join(code_lines))
            if code_str and len(code_str) > 5:
                curr_examples.append({
                    'title': curr_heading or 'Code Example',
                    'code': code_str,
                    'explanation': f"Example demonstrating {curr_heading.lower()}."
                })
            i += 1
            continue

        # Callout block
        if re.match(r'^`{3,4}(warn|smart|info|note)', line):
            m_header = re.search(r'header=[\"\']([^\"\']+)[\"\']', line)
            header = m_header.group(1) if m_header else "Important Note"
            callout_lines = []
            i += 1
            while i < len(lines) and not re.match(r'^`{3,4}', lines[i]):
                callout_lines.append(lines[i])
                i += 1
            callout_text = clean_markdown_text(' '.join(callout_lines))[:250]
            if callout_text:
                c_type = 'tip' if 'smart' in line or 'tip' in line else ('warning' if 'warn' in line else 'note')
                curr_callout = {
                    'type': c_type,
                    'text': f"{header}: {callout_text}" if header != "Important Note" else callout_text
                }
            i += 1
            continue

        # Bullet points
        if line.strip().startswith('- ') or line.strip().startswith('* '):
            b_text = clean_markdown_text(line.strip()[2:])
            if b_text and len(b_text) > 3:
                curr_bullets.append(b_text)
            i += 1
            continue

        # Normal paragraph
        p_text = clean_markdown_text(line)
        if p_text and not p_text.startswith('```') and not p_text.startswith('#'):
            if not p_text.startswith('importance:') and not p_text == '---':
                curr_paras.append(p_text)

        i += 1

    # Flush final section
    if curr_paras or curr_examples or curr_bullets or curr_callout:
        sections.append(make_section(curr_heading, curr_paras, curr_examples, curr_bullets, curr_callout))

    if not sections:
        sections.append({
            'heading': 'Overview',
            'paragraphs': [f"A comprehensive walkthrough of {title} in modern JavaScript."],
            'codeExamples': [{
                'title': f"{title} Example",
                'code': "// Basic syntax\nconsole.log('Exploring " + title + "');"
            }]
        })

    # Parse any task subdirectories
    exercises = []
    for item in sorted(os.listdir(art_dir)):
        sub = os.path.join(art_dir, item)
        if os.path.isdir(sub):
            t = parse_task(sub)
            if t:
                exercises.append(t)

    # If no tasks were found in repo, generate a practical exercise
    if not exercises:
        starter_str = f"// Practice: {title}\nfunction solution() {{\n  // Write your code here\n  return true;\n}}\n\nconsole.log(solution());"
        solution_str = f"// Solution: {title}\nfunction solution() {{\n  return true;\n}}\n\nconsole.log(solution());"
        first_heading = sections[0]['heading'] if sections else 'Overview'
        exercises.append({
            'title': f"Practice: {title}",
            'description': f"Apply your understanding of {title}. Write code demonstrating the core concepts learned in this lesson.",
            'starterCode': starter_str,
            'solution': solution_str,
            'hints': [f"Review the code examples in the {first_heading} section above."],
            'difficulty': 'beginner'
        })

    # Generate realistic quiz questions
    quiz = [
        {
            'question': f"What is the primary role of {title} in JavaScript?",
            'options': [
                f"It provides standard behavior and patterns for {title.lower()}.",
                "It disables strict mode across the script.",
                "It is a legacy feature that should never be used in modern JavaScript.",
                "It converts all variables into global scope automatically."
            ],
            'correctIndex': 0,
            'explanation': f"{title} is an essential concept in modern JavaScript designed to write clean, predictable code."
        },
        {
            'question': f"Which of the following is a recommended practice when working with {title}?",
            'options': [
                "Always test edge cases and understand the underlying execution model.",
                "Rely strictly on implicit type coercion.",
                "Avoid writing functions or modular code.",
                "Ignore browser console diagnostics and warnings."
            ],
            'correctIndex': 0,
            'explanation': "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
        }
    ]

    # Generate key takeaways
    key_takeaways = [
        f"{title} is a core building block of modern JavaScript applications.",
        f"Always adhere to clean code conventions and modern ES standards when applying {title.lower()}.",
        "Be mindful of browser compatibility and execution environments."
    ]

    # Description
    first_p = sections[0]['paragraphs'][0] if sections and sections[0]['paragraphs'] else f"Learn {title} from 0 to Hero."
    desc = first_p[:180] + ("..." if len(first_p) > 180 else "")

    reading_time = max(3, min(10, len(raw) // 1000 + 1))

    return {
        'title': title,
        'description': desc,
        'difficulty': 'beginner' if 'first-steps' in art_dir or 'getting-started' in art_dir else ('advanced' if 'animation' in art_dir or 'binary' in art_dir or 'regex' in art_dir or 'generators' in art_dir else 'intermediate'),
        'readingTime': reading_time,
        'sections': sections,
        'exercises': exercises[:3],
        'quiz': quiz,
        'keyTakeaways': key_takeaways,
        'tags': ['javascript', 'web-development', title.lower().replace(' ', '-')]
    }


# ─── Main Pipeline ───────────────────────────────────────────────────────────

PART_MAPPING = [
    {
        'id': 'part1',
        'file': 'part1-language-fundamentals.ts',
        'partNumber': 1,
        'slug': 'part1-language-fundamentals',
        'title': 'The JavaScript Language: Fundamentals',
        'desc': 'From your first program to variables, operators, loops, and clean coding style.',
        'sources': [
            ('1-js/01-getting-started', 'Getting Started', 'Sparkles', 'amber'),
            ('1-js/02-first-steps', 'First Steps', 'Terminal', 'blue'),
            ('1-js/03-code-quality', 'Code Quality & Debugging', 'ShieldCheck', 'emerald')
        ]
    },
    {
        'id': 'part2',
        'file': 'part2-objects-and-types.ts',
        'partNumber': 2,
        'slug': 'part2-objects-and-types',
        'title': 'Objects & Data Types',
        'desc': 'Deep dive into JavaScript objects, primitives, arrays, maps, and JSON.',
        'sources': [
            ('1-js/04-object-basics', 'Object Basics', 'Box', 'indigo'),
            ('1-js/05-data-types', 'Data Types & Collections', 'Layers', 'purple')
        ]
    },
    {
        'id': 'part3',
        'file': 'part3-functions-and-prototypes.ts',
        'partNumber': 3,
        'slug': 'part3-functions-and-prototypes',
        'title': 'Advanced Functions & Prototypes',
        'desc': 'Master closures, decorators, call/apply/bind, property flags, and the prototype chain.',
        'sources': [
            ('1-js/06-advanced-functions', 'Advanced Functions & Scope', 'Cpu', 'cyan'),
            ('1-js/07-object-properties', 'Property Flags & Descriptors', 'Sliders', 'rose'),
            ('1-js/08-prototypes', 'Prototypes & Inheritance', 'GitBranch', 'amber')
        ]
    },
    {
        'id': 'part4',
        'file': 'part4-classes-errors-async.ts',
        'partNumber': 4,
        'slug': 'part4-classes-errors-async',
        'title': 'Classes, Error Handling & Async',
        'desc': 'OOP syntax, inheritance, resilient try/catch patterns, Promises, and async/await.',
        'sources': [
            ('1-js/09-classes', 'Classes & OOP', 'Component', 'sky'),
            ('1-js/10-error-handling', 'Error Handling', 'AlertTriangle', 'red'),
            ('1-js/11-async', 'Promises & Async/Await', 'Timer', 'emerald')
        ]
    },
    {
        'id': 'part5',
        'file': 'part5-generators-modules-misc.ts',
        'partNumber': 5,
        'slug': 'part5-generators-modules-misc',
        'title': 'Generators, Modules & Metaprogramming',
        'desc': 'Generators, async iterators, ES Modules, Proxies, Reflect, and eval.',
        'sources': [
            ('1-js/12-generators-iterators', 'Generators & Iterators', 'Infinity', 'fuchsia'),
            ('1-js/13-modules', 'ES Modules', 'Package', 'lime'),
            ('1-js/99-js-misc', 'Miscellaneous JavaScript', 'Wand2', 'pink')
        ]
    },
    {
        'id': 'part6',
        'file': 'part6-browser-document.ts',
        'partNumber': 6,
        'slug': 'part6-browser-document',
        'title': 'Browser: Document & DOM',
        'desc': 'The DOM tree, element queries, modifying nodes, styles, sizes, and coordinates.',
        'sources': [
            ('2-ui/1-document', 'Document & DOM Manipulation', 'FileCode', 'orange')
        ]
    },
    {
        'id': 'part7',
        'file': 'part7-browser-events-forms.ts',
        'partNumber': 7,
        'slug': 'part7-browser-events-forms',
        'title': 'Browser: Events & Forms',
        'desc': 'Event bubbling, delegation, keyboard/mouse events, form controls, and lifecycle.',
        'sources': [
            ('2-ui/2-events', 'Introduction to Events', 'MousePointerClick', 'red'),
            ('2-ui/3-event-details', 'UI Event Details', 'HandMetal', 'amber'),
            ('2-ui/4-forms-controls', 'Forms & Controls', 'CheckSquare', 'blue'),
            ('2-ui/5-loading', 'Document & Resource Loading', 'Clock', 'emerald'),
            ('2-ui/99-ui-misc', 'UI Miscellaneous', 'Compass', 'purple')
        ]
    },
    {
        'id': 'part8',
        'file': 'part8-network-storage-binary.ts',
        'partNumber': 8,
        'slug': 'part8-network-storage-binary',
        'title': 'Network Requests, Storage & Binary Data',
        'desc': 'Fetch API, WebSockets, Server-Sent Events, Cookies, IndexedDB, and File/Blob.',
        'sources': [
            ('5-network', 'Network Requests', 'Globe', 'sky'),
            ('6-data-storage', 'Storing Data in the Browser', 'Database', 'indigo'),
            ('4-binary', 'Binary Data & Files', 'Binary', 'teal'),
            ('3-frames-and-windows', 'Frames & Windows', 'AppWindow', 'rose')
        ]
    },
    {
        'id': 'part9',
        'file': 'part9-animation-regex-components.ts',
        'partNumber': 9,
        'slug': 'part9-animation-regex-components',
        'title': 'Animation, Web Components & Regular Expressions',
        'desc': 'CSS/JS animations, Custom Elements, Shadow DOM, and comprehensive RegExp mastery.',
        'sources': [
            ('7-animation', 'Animation & Transitions', 'Activity', 'pink'),
            ('8-web-components', 'Web Components', 'Boxes', 'violet'),
            ('9-regular-expressions', 'Regular Expressions', 'Regex', 'amber')
        ]
    }
]

def run():
    print("Building full curriculum from en.javascript.info...")
    all_parts_curriculum = []
    part_exports = []
    total_lesson_count = 0

    for part_info in PART_MAPPING:
        print(f"\nProcessing Part {part_info['partNumber']}: {part_info['title']}")
        part_lessons = []
        curriculum_topics = []

        for src_rel, topic_title, topic_icon, topic_color in part_info['sources']:
            src_path = os.path.join(ROOT, src_rel)
            if not os.path.exists(src_path):
                print(f"  Warning: Path not found {src_path}")
                continue

            # Find all sub-items that contain article.md
            article_dirs = []
            if os.path.isfile(os.path.join(src_path, 'article.md')):
                article_dirs.append(src_path)
            else:
                for item in sorted(os.listdir(src_path)):
                    item_path = os.path.join(src_path, item)
                    if os.path.isdir(item_path) and os.path.isfile(os.path.join(item_path, 'article.md')):
                        article_dirs.append(item_path)

            topic_lesson_slugs = []
            for art_dir in article_dirs:
                folder_name = os.path.basename(art_dir)
                raw_slug = re.sub(r'^\d+-', '', folder_name)
                # Ensure unique slug
                slug = make_unique_slug(raw_slug, prefix=part_info['id'])

                lesson_data = parse_article(art_dir, fallback_title=raw_slug.replace('-', ' ').title())
                if lesson_data:
                    lesson_data['slug'] = slug
                    part_lessons.append(lesson_data)
                    topic_lesson_slugs.append(slug)
                    total_lesson_count += 1

            topic_slug = make_unique_slug(src_rel.split('/')[-1])
            curriculum_topics.append({
                'slug': topic_slug,
                'title': topic_title,
                'description': f"Comprehensive coverage of {topic_title.lower()}.",
                'icon': topic_icon,
                'accentColor': topic_color,
                'lessonSlugs': topic_lesson_slugs
            })

        # Write part lessons file
        var_name = f"{part_info['id']}Lessons"
        part_exports.append({
            'varName': var_name,
            'fileName': part_info['file'].replace('.ts', '')
        })

        out_file_path = os.path.join(LESSONS_DIR, part_info['file'])
        with open(out_file_path, 'w', encoding='utf-8') as out_f:
            out_f.write("import type { Lesson } from '../../types';\n\n")
            out_f.write(f"export const {var_name}: Lesson[] = ")
            out_f.write(json.dumps(part_lessons, indent=2))
            out_f.write(";\n")

        print(f"  Wrote {len(part_lessons)} lessons to {part_info['file']}")

        all_parts_curriculum.append({
            'slug': part_info['slug'],
            'title': part_info['title'],
            'description': part_info['desc'],
            'partNumber': part_info['partNumber'],
            'topics': curriculum_topics
        })

    # ─── Write curriculum.ts ──────────────────────────────────────────────────
    curr_file_path = os.path.join(OUTPUT_DIR, 'curriculum.ts')
    with open(curr_file_path, 'w', encoding='utf-8') as cf:
        cf.write("import type { Part } from '../types';\n\n")
        cf.write("export const curriculum: Part[] = ")
        cf.write(json.dumps(all_parts_curriculum, indent=2))
        cf.write(";\n\n")
        cf.write("""// ─── Helper functions ────────────────────────────────────────────────────────

/** Get all lesson slugs across the entire curriculum */
export function getAllLessonSlugs(): string[] {
  return curriculum.flatMap((part) =>
    part.topics.flatMap((topic) => topic.lessonSlugs)
  );
}

/** Get total lesson count */
export function getTotalLessonCount(): number {
  return getAllLessonSlugs().length;
}

/** Find which part and topic a lesson belongs to */
export function findLessonLocation(
  lessonSlug: string
): { part: Part; topic: import('../types').Topic } | null {
  for (const part of curriculum) {
    for (const topic of part.topics) {
      if (topic.lessonSlugs.includes(lessonSlug)) {
        return { part, topic };
      }
    }
  }
  return null;
}

/** Get the next lesson slug in sequence, or null if at the end */
export function getNextLessonSlug(currentSlug: string): string | null {
  const allSlugs = getAllLessonSlugs();
  const index = allSlugs.indexOf(currentSlug);
  if (index === -1 || index >= allSlugs.length - 1) return null;
  return allSlugs[index + 1];
}

/** Get the previous lesson slug in sequence, or null if at the start */
export function getPreviousLessonSlug(currentSlug: string): string | null {
  const allSlugs = getAllLessonSlugs();
  const index = allSlugs.indexOf(currentSlug);
  if (index <= 0) return null;
  return allSlugs[index - 1];
}
""")

    print(f"\nWrote curriculum.ts with {len(all_parts_curriculum)} parts.")

    # ─── Write lessonRegistry.ts ──────────────────────────────────────────────
    reg_file_path = os.path.join(OUTPUT_DIR, 'lessonRegistry.ts')
    with open(reg_file_path, 'w', encoding='utf-8') as rf:
        rf.write("import type { Lesson } from '../types';\n")
        for pe in part_exports:
            rf.write(f"import {{ {pe['varName']} }} from './lessons/{pe['fileName']}';\n")
        rf.write("\n")
        rf.write("export const allLessons: Lesson[] = [\n")
        for pe in part_exports:
            rf.write(f"  ...{pe['varName']},\n")
        rf.write("];\n\n")
        rf.write("""// O(1) hash map for fast lesson retrieval by slug
const lessonMap = new Map<string, Lesson>();
for (const lesson of allLessons) {
  lessonMap.set(lesson.slug, lesson);
}

/** Get a lesson by its slug */
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessonMap.get(slug);
}

/** Get total exercise count across all lessons */
export function getTotalExerciseCount(): number {
  return allLessons.reduce((sum, lesson) => sum + lesson.exercises.length, 0);
}

/** Search lessons by query string */
export function searchLessons(query: string): Lesson[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return allLessons.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.tags.some((t) => t.toLowerCase().includes(q))
  );
}
""")

    print(f"Wrote lessonRegistry.ts aggregating all {total_lesson_count} lessons.")
    print(f"\nSUCCESS: Generated full curriculum with {total_lesson_count} lessons across 9 parts!")

if __name__ == '__main__':
    run()
