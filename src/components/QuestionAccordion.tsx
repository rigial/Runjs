import { useRef } from 'react';
import { IQuestionAccordion } from '../utils/interface';
import CodeSnippet from './CodeSnippet';
import {
  ChevronDown,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Play,
  Copy,
  Check,
} from 'lucide-react';
import { useState } from 'react';

const DIFFICULTY_CLASSES = {
  easy: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  medium:
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  hard: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
};

interface EnhancedAccordionProps extends IQuestionAccordion {
  onPractice?: () => void;
}

function QuestionAccordion({
  data,
  questionNumber,
  isOpened,
  changeActiveQuestion,
  isMastered = false,
  isBookmarked = false,
  onToggleMastered,
  onToggleBookmark,
  onPractice,
}: EnhancedAccordionProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    changeActiveQuestion();
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'nearest',
      });
    }, 50);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullText = `${data.question}\n\n${data.answer
      .map((a) => a.data.join('\n'))
      .join('\n\n')}`;
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const difficultyClass =
    DIFFICULTY_CLASSES[data.difficulty || 'medium'] ||
    DIFFICULTY_CLASSES.medium;

  return (
    <div
      className={`my-3 rounded-2xl border transition-all overflow-hidden shadow-xs ${
        isOpened
          ? 'border-[var(--border-focus)]/50 bg-[var(--bg-surface)]'
          : isMastered
            ? 'border-emerald-500/30 bg-[var(--bg-surface)]'
            : 'border-[var(--border-default)] bg-[var(--bg-surface)]'
      }`}
    >
      <details
        ref={detailsRef}
        open={isOpened}
        className="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          onClick={handleToggle}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 text-[var(--text-primary)] cursor-pointer hover:bg-[var(--bg-surface-hover)] transition-colors select-none"
        >
          <div className="flex items-start sm:items-center gap-3 min-w-0">
            {/* Number badge */}
            <span
              className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 border transition-colors ${
                isMastered
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
              }`}
            >
              {data.id ?? questionNumber + 1}
            </span>

            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {data.category && (
                  <span className="text-[10px] font-semibold px-2 py-0.2 rounded-md border border-[var(--border-default)] bg-[var(--bg-surface-muted)] text-[var(--text-secondary)]">
                    {data.category}
                  </span>
                )}
                {data.difficulty && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.2 rounded-md uppercase tracking-wider border ${difficultyClass}`}
                  >
                    {data.difficulty}
                  </span>
                )}
                {isMastered && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Mastered</span>
                  </span>
                )}
              </div>

              <h2 className="text-sm sm:text-base font-semibold tracking-tight text-[var(--text-primary)] leading-snug">
                {data.question}
              </h2>
            </div>
          </div>

          {/* Action buttons on the right */}
          <div
            className="flex items-center gap-1.5 self-end sm:self-center shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {onPractice && (
              <button
                type="button"
                onClick={onPractice}
                title="Practice in interactive arena"
                className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-muted)] hover:bg-amber-500 hover:text-black hover:border-amber-500 text-xs font-semibold text-[var(--text-secondary)] transition-all cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Practice</span>
              </button>
            )}

            {onToggleMastered && (
              <button
                type="button"
                onClick={onToggleMastered}
                title={isMastered ? 'Mark as unmastered' : 'Mark as mastered'}
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isMastered
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500'
                    : 'border-[var(--border-default)] text-[var(--text-muted)] hover:text-emerald-500 hover:border-emerald-500/50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}

            {onToggleBookmark && (
              <button
                type="button"
                onClick={onToggleBookmark}
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'border-amber-500 bg-amber-500/10 text-amber-500'
                    : 'border-[var(--border-default)] text-[var(--text-muted)] hover:text-amber-500 hover:border-amber-500/50'
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`}
                />
              </button>
            )}

            <button
              type="button"
              onClick={handleCopy}
              title="Copy question & answer"
              className="p-1.5 rounded-lg border border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              {isCopied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={handleToggle}
              aria-label="Toggle answer accordion"
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpened ? 'rotate-180 text-amber-500' : ''
                }`}
              />
            </button>
          </div>
        </summary>

        {isOpened && (
          <div className="px-5 pb-5 pt-3 border-t border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-3.5 animate-in fade-in-50 duration-150">
            {/* Interview Tip Banner */}
            {data.tip && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-[var(--text-secondary)]">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-[var(--text-primary)]">
                    Interview Tip:
                  </strong>{' '}
                  {data.tip}
                </p>
              </div>
            )}

            {/* Answer Content Blocks */}
            {data.answer.map((block, i) => (
              <div key={i}>
                {block.type === 'para' && (
                  <p className="leading-relaxed text-[var(--text-secondary)]">
                    {block.data.join(' ')}
                  </p>
                )}
                {block.type === 'heading' && (
                  <h3 className="font-bold text-sm text-[var(--text-primary)] mt-3 mb-1.5">
                    {block.data.join(' ')}
                  </h3>
                )}
                {block.type === 'points' && (
                  <ul className="list-disc list-inside space-y-1.5 pl-2 my-2 text-[var(--text-secondary)]">
                    {block.data.map((point, j) => (
                      <li key={j} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {block.type === 'code' && (
                  <div className="my-2">
                    <CodeSnippet
                      height={`${Math.min(
                        Math.max(block.data.length * 22, 60),
                        360
                      )}px`}
                      code={block.data.join('\n')}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Tags footer */}
            {data.tags && data.tags.length > 0 && (
              <div className="pt-2 flex items-center gap-1.5 flex-wrap border-t border-[var(--border-subtle)]">
                <span className="text-[11px] font-medium text-[var(--text-muted)]">
                  Tags:
                </span>
                {data.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </details>
    </div>
  );
}

export default QuestionAccordion;
