import { memo } from 'react';
import type {
  OutputQuestion,
  OutputQuestionFilter,
  OutputQuestionDifficulty,
} from '../../data/output-questions-types';
import {
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  Target,
  Brain,
  CheckCircle2,
  Keyboard,
  Zap,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface QuizWelcomeProps {
  totalQuestions: number;
  answers: Record<number, number>;
  questions: OutputQuestion[];
  onStartQuiz: (startId?: number, difficulty?: OutputQuestionFilter) => void;
  onResetProgress: () => void;
}

const DIFFICULTY_CONFIG: Record<
  OutputQuestionDifficulty,
  {
    title: string;
    description: string;
    topics: string[];
    color: string;
    bg: string;
    border: string;
    icon: typeof Target;
  }
> = {
  easy: {
    title: 'Easy',
    description:
      'Fundamental concepts, type coercion, scoping & basic array/object methods.',
    topics: ['typeof quirks', 'coercion', 'var/let/const', 'array methods'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    icon: Target,
  },
  medium: {
    title: 'Medium',
    description:
      'Closures, prototype chain, this context, basic event loop & async/await.',
    topics: ['closures', 'this context', 'prototypes', 'promises'],
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    icon: Brain,
  },
  hard: {
    title: 'Hard',
    description:
      'Complex microtask queues, custom generators, Proxy traps & JS edge-cases.',
    topics: ['event loop', 'generators', 'Proxy/Reflect', 'TDZ nuances'],
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    icon: Trophy,
  },
};

function QuizWelcome({
  totalQuestions,
  answers,
  questions,
  onStartQuiz,
  onResetProgress,
}: QuizWelcomeProps) {
  const totalAnswered = Object.keys(answers).length;
  const isStarted = totalAnswered > 0;

  // Calculate score and accuracy
  const totalCorrect = questions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] === q.correctIndex
  ).length;
  const accuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const progressPct = Math.round((totalAnswered / totalQuestions) * 100);

  // Find next unanswered question ID
  const nextUnanswered = questions.find((q) => answers[q.id] === undefined);
  const resumeId = nextUnanswered ? nextUnanswered.id : 1;

  // Difficulty stats helper
  const getDiffStats = (diff: OutputQuestionDifficulty) => {
    const subset = questions.filter((q) => q.difficulty === diff);
    const answered = subset.filter((q) => answers[q.id] !== undefined).length;
    const correct = subset.filter(
      (q) => answers[q.id] !== undefined && answers[q.id] === q.correctIndex
    ).length;
    return { total: subset.length, answered, correct };
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Interview Arena</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
          JavaScript Output Questions
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Master 100 real-world, interview-style code prediction challenges.
          Test your deep knowledge of closures, event loops, hoisting,
          prototypes, and modern ES6+ internals.
        </p>
      </div>

      {/* Main Action Banner: Start or Resume Card */}
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-md transition-all mb-8">
        {isStarted ? (
          /* Resume Mode */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <h2 className="text-lg font-bold text-[var(--text-primary)]">
                    Welcome back! You have a quiz in progress.
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 sm:ml-8">
                  Pick up right where you left off or choose a specific
                  difficulty level below.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onResetProgress}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-red-500/20 text-xs font-semibold text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                  title="Reset all quiz answers"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Progress</span>
                </button>

                <button
                  type="button"
                  onClick={() => onStartQuiz(resumeId)}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-xs sm:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>Resume Quiz (Q#{resumeId})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar & Quick Stats */}
            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[var(--text-secondary)]">
                  Overall Completion ({totalAnswered} of {totalQuestions}{' '}
                  answered)
                </span>
                <span className="text-[var(--text-primary)] font-bold">
                  {progressPct}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2.5 rounded-full bg-[var(--bg-surface-muted)] overflow-hidden border border-[var(--border-default)]">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              {/* Score breakdown metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                    Score
                  </div>
                  <div className="text-base font-bold text-emerald-500 mt-0.5">
                    {totalCorrect}{' '}
                    <span className="text-xs font-normal text-[var(--text-muted)]">
                      / {totalAnswered}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                    Accuracy
                  </div>
                  <div className="text-base font-bold text-amber-500 mt-0.5">
                    {accuracy}%
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                    Remaining
                  </div>
                  <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">
                    {totalQuestions - totalAnswered}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                    Next Question
                  </div>
                  <div className="text-base font-bold text-[var(--text-primary)] mt-0.5">
                    #{resumeId}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Start Fresh Mode */
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                Ready to test your JavaScript knowledge?
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
                100 output prediction questions organized into 3 difficulty
                tiers. Each question includes 4 multiple-choice answers with
                comprehensive explanations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartQuiz(1)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>Start Quiz (Question #1)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Difficulty Level Cards */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Choose Difficulty
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              Practice questions categorized by technical complexity
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['easy', 'medium', 'hard'] as OutputQuestionDifficulty[]).map(
            (d) => {
              const config = DIFFICULTY_CONFIG[d];
              const DiffIcon = config.icon;
              const diffStats = getDiffStats(d);
              const isDiffStarted = diffStats.answered > 0;

              return (
                <div
                  key={d}
                  className="flex flex-col justify-between p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-[var(--border-focus)] transition-all shadow-xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 rounded-xl ${config.bg} ${config.color} border ${config.border}`}
                        >
                          <DiffIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[var(--text-primary)] capitalize">
                            {config.title} Level
                          </h3>
                          <span className="text-[11px] text-[var(--text-muted)]">
                            {diffStats.total} Questions
                          </span>
                        </div>
                      </div>

                      {isDiffStarted && (
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          {diffStats.answered}/{diffStats.total}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                      {config.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {config.topics.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[var(--bg-surface-muted)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartQuiz(undefined, d)}
                    className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isDiffStarted
                        ? 'bg-[var(--bg-surface-active)] hover:bg-amber-500 hover:text-black text-[var(--text-primary)]'
                        : 'bg-amber-500/10 hover:bg-amber-500 text-amber-600 dark:text-amber-400 hover:text-black border border-amber-500/20 hover:border-amber-500'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {isDiffStarted
                        ? `Resume ${config.title}`
                        : `Start ${config.title} (${diffStats.total} Qs)`}
                    </span>
                  </button>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] p-6">
        <h2 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
          How to make the most of this quiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-amber-500 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">
                Instant Explanations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                Learn why each code snippet produces its output immediately upon
                choosing an option.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-amber-500 shrink-0">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">
                Keyboard Shortcuts
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                Use keys 1–4 or A–D to pick answers, arrow keys to navigate, and
                Q for the question palette.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-amber-500 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">
                Auto-Saved Progress
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                Your answers are saved locally so you can pause, close your tab,
                and resume anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(QuizWelcome);
