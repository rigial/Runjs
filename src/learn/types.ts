// ─── Content Types ───────────────────────────────────────────────────────────

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  /** Title shown above the code block */
  title: string;
  /** The JavaScript code string */
  code: string;
  /** Expected console output (optional, shown below code) */
  output?: string;
  /** Extra explanation shown after the code block */
  explanation?: string;
}

export interface ContentSection {
  /** Heading for this section */
  heading: string;
  /** Array of content paragraphs (rendered as HTML-safe markdown-like text) */
  paragraphs: string[];
  /** Optional code examples within this section */
  codeExamples?: CodeExample[];
  /** Optional bullet points / key notes */
  bulletPoints?: string[];
  /** Optional tip/warning/note callout */
  callout?: {
    type: 'tip' | 'warning' | 'note' | 'important';
    text: string;
  };
}

export interface QuizQuestion {
  /** The question text */
  question: string;
  /** Array of answer options */
  options: string[];
  /** Index of the correct answer (0-based) */
  correctIndex: number;
  /** Explanation shown after answering */
  explanation: string;
}

export interface Exercise {
  /** Exercise title */
  title: string;
  /** Description of what the learner should do */
  description: string;
  /** Starter code provided in the editor */
  starterCode: string;
  /** One possible correct solution */
  solution: string;
  /** Hints that can be revealed one at a time */
  hints: string[];
  /** Difficulty tag */
  difficulty: DifficultyLevel;
}

export interface Lesson {
  /** URL-safe unique identifier */
  slug: string;
  /** Display title */
  title: string;
  /** Brief description shown in listings */
  description: string;
  /** Difficulty level */
  difficulty: DifficultyLevel;
  /** Estimated reading time in minutes */
  readingTime: number;
  /** The main content sections */
  sections: ContentSection[];
  /** Practice exercises */
  exercises: Exercise[];
  /** Quiz questions for self-assessment */
  quiz: QuizQuestion[];
  /** Key takeaways shown at the end */
  keyTakeaways: string[];
  /** Tags for searching/filtering */
  tags: string[];
}

// ─── Topic Structure ─────────────────────────────────────────────────────────

export interface Topic {
  /** URL-safe unique identifier */
  slug: string;
  /** Display title */
  title: string;
  /** Short description */
  description: string;
  /** Icon name from lucide-react */
  icon: string;
  /** Accent color class (e.g. 'amber', 'blue', 'emerald') */
  accentColor: string;
  /** Ordered list of lesson slugs in this topic */
  lessonSlugs: string[];
}

export interface Part {
  /** URL-safe unique identifier */
  slug: string;
  /** Display title */
  title: string;
  /** Part description */
  description: string;
  /** Sequential part number */
  partNumber: number;
  /** Ordered list of topics */
  topics: Topic[];
}

// ─── Progress Tracking ───────────────────────────────────────────────────────

export interface LessonProgress {
  /** Lesson slug */
  lessonSlug: string;
  /** Whether the lesson content has been read */
  isRead: boolean;
  /** Quiz score (percentage, 0-100) or null if not attempted */
  quizScore: number | null;
  /** Number of exercises completed */
  exercisesCompleted: number;
  /** Total exercises in the lesson */
  exercisesTotal: number;
  /** Timestamp of last interaction */
  lastAccessedAt: number;
  /** Timestamp of first access */
  firstAccessedAt: number;
}

export interface UserProgress {
  /** Map of lesson slug -> progress data */
  lessons: Record<string, LessonProgress>;
  /** The last lesson the user was reading */
  lastLessonSlug: string | null;
  /** Total time spent learning (in seconds) */
  totalTimeSpent: number;
  /** Current streak days */
  streakDays: number;
  /** Last date the user studied (YYYY-MM-DD) */
  lastStudyDate: string | null;
}

// ─── Computed Stats ──────────────────────────────────────────────────────────

export interface LearningStats {
  totalLessons: number;
  completedLessons: number;
  completionPercentage: number;
  totalExercises: number;
  completedExercises: number;
  averageQuizScore: number;
  currentStreak: number;
  totalTimeSpent: number;
}

// ─── Search ──────────────────────────────────────────────────────────────────

export interface SearchResult {
  lessonSlug: string;
  lessonTitle: string;
  topicTitle: string;
  partTitle: string;
  matchContext: string;
  matchType: 'title' | 'content' | 'tag';
}
