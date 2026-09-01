"""
Helper utilities for curriculum authoring.
Ensures all generated lessons strictly conform to the RunJS Lesson TypeScript schema.
"""

def make_code_example(title, code, explanation=None, output=None):
    ex = {
        'title': title,
        'code': code.strip()
    }
    if output:
        ex['output'] = output.strip()
    if explanation:
        ex['explanation'] = explanation.strip()
    return ex


def make_section(heading, paragraphs, code_examples=None, bullet_points=None, callout=None):
    sec = {
        'heading': heading,
        'paragraphs': [p.strip() for p in paragraphs if p.strip()]
    }
    if code_examples:
        sec['codeExamples'] = code_examples
    if bullet_points:
        sec['bulletPoints'] = [b.strip() for b in bullet_points if b.strip()]
    if callout:
        sec['callout'] = callout
    return sec


def make_exercise(title, description, starter_code, solution, hints=None, difficulty='beginner'):
    return {
        'title': title,
        'description': description.strip(),
        'starterCode': starter_code.strip(),
        'solution': solution.strip(),
        'hints': hints if hints else ["Review the concepts and code examples in this lesson."],
        'difficulty': difficulty
    }


def make_quiz(question, options, correct_index, explanation):
    return {
        'question': question.strip(),
        'options': [opt.strip() for opt in options],
        'correctIndex': correct_index,
        'explanation': explanation.strip()
    }


def make_lesson(
    slug,
    title,
    description,
    difficulty,
    reading_time,
    sections,
    exercises,
    quiz,
    key_takeaways,
    tags
):
    return {
        'slug': slug,
        'title': title,
        'description': description,
        'difficulty': difficulty,
        'readingTime': reading_time,
        'sections': sections,
        'exercises': exercises,
        'quiz': quiz,
        'keyTakeaways': key_takeaways,
        'tags': tags
    }
