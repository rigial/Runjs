import { memo, useEffect, useRef } from 'react';
import type { OutputQuestion } from '../../data/output-questions-types';
import { X, CheckCircle2, XCircle, HelpCircle, Trophy } from 'lucide-react';

interface QuestionPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: OutputQuestion[];
  currentIndex: number;
  onSelectQuestion: (index: number) => void;
  answers: Record<number, number>;
  activeDifficultyFilter: string;
  onFilterChange: (filter: 'all' | 'easy' | 'medium' | 'hard') => void;
}

function QuestionPaletteModal({
  isOpen,
  onClose,
  questions,
  currentIndex,
  onSelectQuestion,
  answers,
  activeDifficultyFilter,
  onFilterChange,
}: QuestionPaletteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentQuestion = questions[currentIndex];
  const totalAnswered = Object.keys(answers).length;
  const totalCorrect = questions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="question-palette-title"
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] shrink-0">
          <div>
            <h2
              id="question-palette-title"
              className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Question Navigator</span>
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Jump to any of the 100 interview output questions
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigator"
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Summary */}
        <div className="px-5 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Difficulty Filters */}
          <div className="flex items-center gap-1">
            {(
              [
                { label: 'All (100)', value: 'all' },
                { label: 'Easy (35)', value: 'easy' },
                { label: 'Medium (40)', value: 'medium' },
                { label: 'Hard (25)', value: 'hard' },
              ] as const
            ).map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => onFilterChange(f.value)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition-all cursor-pointer ${
                  activeDifficultyFilter === f.value
                    ? 'border border-amber-500 bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold shadow-2xs'
                    : 'border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {totalCorrect} Correct
            </span>
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <HelpCircle className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              {totalAnswered}/100 Answered
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="px-5 py-2 text-[11px] text-[var(--text-muted)] flex items-center gap-4 flex-wrap border-b border-[var(--border-subtle)] select-none shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>Incorrect</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-amber-500 bg-amber-500/20" />
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--bg-surface-active)] border border-[var(--border-default)]" />
            <span>Unanswered</span>
          </div>
        </div>

        {/* Question Grid */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {questions.map((q, idx) => {
              const hasAnswered = answers[q.id] !== undefined;
              const isCorrect = hasAnswered && answers[q.id] === q.correctIndex;
              const isCurrent = currentQuestion && q.id === currentQuestion.id;

              let btnClasses =
                'border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]';

              if (hasAnswered) {
                if (isCorrect) {
                  btnClasses =
                    'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold';
                } else {
                  btnClasses =
                    'border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400 font-semibold';
                }
              }

              if (isCurrent) {
                btnClasses += ' ring-2 ring-amber-500 font-black shadow-xs';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    onSelectQuestion(idx);
                    onClose();
                  }}
                  className={`relative flex flex-col items-center justify-center h-11 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${btnClasses}`}
                  title={`Q${q.id}: ${q.topic} (${q.difficulty})`}
                >
                  <span>{q.id}</span>
                  {hasAnswered && (
                    <span className="absolute bottom-1">
                      {isCorrect ? (
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                      ) : (
                        <XCircle className="w-2.5 h-2.5 text-red-500" />
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs text-[var(--text-secondary)] shrink-0">
          <span>Click any question number to view</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-medium hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(QuestionPaletteModal);
