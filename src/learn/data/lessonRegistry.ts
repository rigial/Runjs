import type { Lesson } from '../types';

// Import all lesson data files
import { fundamentalLessons } from './lessons/fundamentals';
import { functionsAndObjectsLessons } from './lessons/functions-and-objects';
import { intermediateLessons } from './lessons/intermediate';
import { advancedLessons } from './lessons/advanced';

/** Combined array of every lesson in the curriculum */
const allLessonsArray: Lesson[] = [
  ...fundamentalLessons,
  ...functionsAndObjectsLessons,
  ...intermediateLessons,
  ...advancedLessons,
];

/** Lookup map: slug -> Lesson for O(1) access */
const lessonMap = new Map<string, Lesson>();
for (const lesson of allLessonsArray) {
  lessonMap.set(lesson.slug, lesson);
}

/** Get a lesson by its slug */
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessonMap.get(slug);
}

/** Get all lessons */
export function getAllLessons(): Lesson[] {
  return allLessonsArray;
}

/** Get total number of exercises across all lessons */
export function getTotalExerciseCount(): number {
  return allLessonsArray.reduce(
    (sum, lesson) => sum + lesson.exercises.length,
    0
  );
}

/** Search lessons by query string */
export function searchLessons(query: string): Lesson[] {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase();
  return allLessonsArray.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(lowerQuery) ||
      lesson.description.toLowerCase().includes(lowerQuery) ||
      lesson.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      lesson.sections.some(
        (section) =>
          section.heading.toLowerCase().includes(lowerQuery) ||
          section.paragraphs.some((p) =>
            p.toLowerCase().includes(lowerQuery)
          )
      )
  );
}
