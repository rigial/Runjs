import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { UserProgress, LessonProgress, LearningStats } from '../types';

const STORAGE_KEY = 'runjs_learn_progress';

const defaultProgress: UserProgress = {
  lessons: {},
  lastLessonSlug: null,
  totalTimeSpent: 0,
  streakDays: 0,
  lastStudyDate: null,
};

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as UserProgress;
    }
  } catch {
    // ignore parse errors
  }
  return { ...defaultProgress };
}

function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore storage errors
  }
}

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

// ─── Context Type ────────────────────────────────────────────────────────────

export interface LearnProgressContextType {
  progress: UserProgress;
  markLessonRead: (lessonSlug: string) => void;
  saveQuizScore: (lessonSlug: string, score: number) => void;
  markExerciseCompleted: (lessonSlug: string, exercisesTotal: number) => void;
  setLastLesson: (lessonSlug: string) => void;
  getLessonProgress: (lessonSlug: string) => LessonProgress | null;
  getStats: (totalLessons: number, totalExercises: number) => LearningStats;
  resetProgress: () => void;
}

// ─── Context ─────────────────────────────────────────────────────────────────

const LearnProgressContext = createContext<
  LearnProgressContextType | undefined
>(undefined);

// ─── Provider ────────────────────────────────────────────────────────────────

export const LearnProgressProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  // Persist whenever progress changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Update streak on load
  useEffect(() => {
    const today = getTodayDate();
    setProgress((prev) => {
      if (prev.lastStudyDate === today) return prev;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const newStreak =
        prev.lastStudyDate === yesterdayStr ? prev.streakDays : 0;
      return { ...prev, streakDays: newStreak };
    });
  }, []);

  const ensureLessonEntry = useCallback(
    (lessonSlug: string): LessonProgress => {
      const existing = progress.lessons[lessonSlug];
      if (existing) return existing;
      return {
        lessonSlug,
        isRead: false,
        quizScore: null,
        exercisesCompleted: 0,
        exercisesTotal: 0,
        lastAccessedAt: Date.now(),
        firstAccessedAt: Date.now(),
      };
    },
    [progress.lessons]
  );

  const recordStudyActivity = useCallback(
    (prev: UserProgress): UserProgress => {
      const today = getTodayDate();
      const newStreak =
        prev.lastStudyDate === today ? prev.streakDays : prev.streakDays + 1;
      return { ...prev, streakDays: newStreak, lastStudyDate: today };
    },
    []
  );

  const markLessonRead = useCallback(
    (lessonSlug: string) => {
      setProgress((prev) => {
        const entry = ensureLessonEntry(lessonSlug);
        const updated = recordStudyActivity({
          ...prev,
          lessons: {
            ...prev.lessons,
            [lessonSlug]: {
              ...entry,
              isRead: true,
              lastAccessedAt: Date.now(),
            },
          },
          lastLessonSlug: lessonSlug,
        });
        return updated;
      });
    },
    [ensureLessonEntry, recordStudyActivity]
  );

  const saveQuizScore = useCallback(
    (lessonSlug: string, score: number) => {
      setProgress((prev) => {
        const entry = ensureLessonEntry(lessonSlug);
        const updated = recordStudyActivity({
          ...prev,
          lessons: {
            ...prev.lessons,
            [lessonSlug]: {
              ...entry,
              quizScore: Math.max(entry.quizScore ?? 0, score),
              lastAccessedAt: Date.now(),
            },
          },
        });
        return updated;
      });
    },
    [ensureLessonEntry, recordStudyActivity]
  );

  const markExerciseCompleted = useCallback(
    (lessonSlug: string, exercisesTotal: number) => {
      setProgress((prev) => {
        const entry = ensureLessonEntry(lessonSlug);
        const updated = recordStudyActivity({
          ...prev,
          lessons: {
            ...prev.lessons,
            [lessonSlug]: {
              ...entry,
              exercisesCompleted: Math.min(
                entry.exercisesCompleted + 1,
                exercisesTotal
              ),
              exercisesTotal,
              lastAccessedAt: Date.now(),
            },
          },
        });
        return updated;
      });
    },
    [ensureLessonEntry, recordStudyActivity]
  );

  const setLastLesson = useCallback((lessonSlug: string) => {
    setProgress((prev) => ({
      ...prev,
      lastLessonSlug: lessonSlug,
    }));
  }, []);

  const getLessonProgress = useCallback(
    (lessonSlug: string): LessonProgress | null => {
      return progress.lessons[lessonSlug] ?? null;
    },
    [progress.lessons]
  );

  const getStats = useCallback(
    (totalLessons: number, totalExercises: number): LearningStats => {
      const entries = Object.values(progress.lessons);
      const completedLessons = entries.filter((e) => e.isRead).length;
      const completedExercises = entries.reduce(
        (sum, e) => sum + e.exercisesCompleted,
        0
      );
      const quizScores = entries
        .filter((e) => e.quizScore !== null)
        .map((e) => e.quizScore as number);
      const averageQuizScore =
        quizScores.length > 0
          ? quizScores.reduce((a, b) => a + b, 0) / quizScores.length
          : 0;

      return {
        totalLessons,
        completedLessons,
        completionPercentage:
          totalLessons > 0
            ? Math.round((completedLessons / totalLessons) * 100)
            : 0,
        totalExercises,
        completedExercises,
        averageQuizScore: Math.round(averageQuizScore),
        currentStreak: progress.streakDays,
        totalTimeSpent: progress.totalTimeSpent,
      };
    },
    [progress]
  );

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress });
  }, []);

  const value = useMemo(
    () => ({
      progress,
      markLessonRead,
      saveQuizScore,
      markExerciseCompleted,
      setLastLesson,
      getLessonProgress,
      getStats,
      resetProgress,
    }),
    [
      progress,
      markLessonRead,
      saveQuizScore,
      markExerciseCompleted,
      setLastLesson,
      getLessonProgress,
      getStats,
      resetProgress,
    ]
  );

  return (
    <LearnProgressContext.Provider value={value}>
      {children}
    </LearnProgressContext.Provider>
  );
};

export default LearnProgressContext;
