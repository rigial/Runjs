import type { Lesson } from '../types';
import { part1Lessons } from './lessons/part1-language-fundamentals';
import { part2Lessons } from './lessons/part2-objects-and-types';
import { part3Lessons } from './lessons/part3-functions-and-prototypes';
import { part4Lessons } from './lessons/part4-classes-errors-async';
import { part5Lessons } from './lessons/part5-generators-modules-misc';
import { part6Lessons } from './lessons/part6-browser-document';
import { part7Lessons } from './lessons/part7-browser-events-forms';
import { part8Lessons } from './lessons/part8-network-storage-binary';
import { part9Lessons } from './lessons/part9-animation-regex-components';

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
for (const lesson of allLessons) {
  lessonMap.set(lesson.slug, lesson);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessonMap.get(slug);
}

export function getAllLessons(): Lesson[] {
  return allLessons;
}

export function getTotalExerciseCount(): number {
  return allLessons.reduce(
    (acc, lesson) => acc + (lesson.exercises?.length || 0),
    0
  );
}
