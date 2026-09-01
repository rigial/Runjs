#!/usr/bin/env python3
"""
Master Builder for Rewritten Beginner-Friendly Curriculum.
Serializes all 175 rewritten lessons into modular TypeScript data files.
"""

import os
import json
from .part1_fundamentals import get_part1_lessons
from .part2_objects_types import get_part2_lessons
from .part3_functions_prototypes import get_part3_lessons
from .part4_classes_async import get_part4_lessons
from .part5_generators_modules import get_part5_lessons
from .part6_browser_dom import get_part6_lessons
from .part7_events_forms import get_part7_lessons
from .part8_network_storage import get_part8_lessons
from .part9_animation_regex import get_part9_lessons

OUTPUT_DIR = '/Users/kishor/Documents/Runjs/src/learn/data'
LESSONS_DIR = os.path.join(OUTPUT_DIR, 'lessons')
os.makedirs(LESSONS_DIR, exist_ok=True)

PART_FILES = [
    ("part1-language-fundamentals.ts", "part1Lessons", get_part1_lessons()),
    ("part2-objects-and-types.ts", "part2Lessons", get_part2_lessons()),
    ("part3-functions-and-prototypes.ts", "part3Lessons", get_part3_lessons()),
    ("part4-classes-errors-async.ts", "part4Lessons", get_part4_lessons()),
    ("part5-generators-modules-misc.ts", "part5Lessons", get_part5_lessons()),
    ("part6-browser-document.ts", "part6Lessons", get_part6_lessons()),
    ("part7-browser-events-forms.ts", "part7Lessons", get_part7_lessons()),
    ("part8-network-storage-binary.ts", "part8Lessons", get_part8_lessons()),
    ("part9-animation-regex-components.ts", "part9Lessons", get_part9_lessons()),
]

def build():
    total_lessons = 0
    all_slugs = set()

    for filename, var_name, lessons in PART_FILES:
        filepath = os.path.join(LESSONS_DIR, filename)
        print(f"Writing {filename} ({len(lessons)} lessons)...")
        total_lessons += len(lessons)
        
        for l in lessons:
            if l['slug'] in all_slugs:
                print(f"WARNING: Duplicate slug {l['slug']}")
            all_slugs.add(l['slug'])
        
        ts_code = f"// Auto-generated rewritten beginner-friendly curriculum for RunJS\n"
        ts_code += f"import type {{ Lesson }} from '../../types';\n\n"
        ts_code += f"export const {var_name}: Lesson[] = "
        ts_code += json.dumps(lessons, indent=2, ensure_ascii=False)
        ts_code += ";\n"
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(ts_code)

    print(f"\nAll 9 part files written successfully! Total lessons: {total_lessons}, Unique slugs: {len(all_slugs)}")

    # Write lessonRegistry.ts
    registry_path = os.path.join(OUTPUT_DIR, 'lessonRegistry.ts')
    registry_ts = f"""import type {{ Lesson }} from '../types';
import {{ part1Lessons }} from './lessons/part1-language-fundamentals';
import {{ part2Lessons }} from './lessons/part2-objects-and-types';
import {{ part3Lessons }} from './lessons/part3-functions-and-prototypes';
import {{ part4Lessons }} from './lessons/part4-classes-errors-async';
import {{ part5Lessons }} from './lessons/part5-generators-modules-misc';
import {{ part6Lessons }} from './lessons/part6-browser-document';
import {{ part7Lessons }} from './lessons/part7-browser-events-forms';
import {{ part8Lessons }} from './lessons/part8-network-storage-binary';
import {{ part9Lessons }} from './lessons/part9-animation-regex-components';

export const allLessons: Lesson[] = [
  ...part1Lessons,
  ...part2Lessons,
  ...part3Lessons,
  ...part4Lessons,
  ...part5Lessons,
  ...part6Lessons,
  ...part7Lessons,
  ...part8Lessons,
  ...part9Lessons,
];

const lessonMap = new Map<string, Lesson>();
for (const lesson of allLessons) {{
  lessonMap.set(lesson.slug, lesson);
}}

export function getLessonBySlug(slug: string): Lesson | undefined {{
  return lessonMap.get(slug);
}}

export function getAllLessons(): Lesson[] {{
  return allLessons;
}}

export function getTotalExerciseCount(): number {{
  return allLessons.reduce((acc, lesson) => acc + (lesson.exercises?.length || 0), 0);
}}
"""
    with open(registry_path, 'w', encoding='utf-8') as f:
        f.write(registry_ts)
    print("Updated lessonRegistry.ts successfully!")

if __name__ == '__main__':
    build()
