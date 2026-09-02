/**
 * Types for the JavaScript Output-Based Questions feature.
 */

export type OutputQuestionDifficulty = 'easy' | 'medium' | 'hard';

export interface OutputQuestion {
  /** Unique question ID (1–100) */
  id: number;
  /** Difficulty level */
  difficulty: OutputQuestionDifficulty;
  /** Topic category (e.g. "Closures", "Event Loop") */
  topic: string;
  /** The question prompt text */
  question: string;
  /** JavaScript code snippet */
  code: string;
  /** Four multiple-choice answer options */
  options: string[];
  /** 0-based index of the correct option */
  correctIndex: number;
  /** Explanation of the correct answer */
  explanation: string;
}

export interface OutputQuestionUserState {
  /** Map of questionId → selected option index (0-based) */
  answers: Record<number, number>;
  /** Set of question IDs the user has answered */
  answered: number[];
}

export type OutputQuestionFilter = 'all' | OutputQuestionDifficulty;
