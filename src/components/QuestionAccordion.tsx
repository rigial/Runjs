import { useRef } from 'react';
import { IQuestionAccordion } from '../utils/interface';
import CodeSnippet from './CodeSnippet';
import { ChevronDown } from 'lucide-react';

function QuestionAccordion({
  data,
  questionNumber,
  isOpened,
  changeActiveQuestion,
}: IQuestionAccordion) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  return (
    <div className="my-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-xs transition-colors">
      <details
        ref={detailsRef}
        open={isOpened}
        className="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          onClick={handleToggle}
          className="flex items-center justify-between gap-3 p-4 text-[var(--text-primary)] cursor-pointer hover:bg-[var(--bg-surface-hover)] transition-colors select-none"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20 shrink-0">
              {questionNumber + 1}
            </span>
            <h2 className="text-sm sm:text-base font-semibold tracking-tight text-[var(--text-primary)]">
              {data.question}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <ChevronDown
              className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 ${
                isOpened ? 'rotate-180 text-amber-500' : ''
              }`}
            />
          </div>
        </summary>

        {isOpened && (
          <div className="px-5 pb-5 pt-2 border-t border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 animate-in fade-in-50 duration-150">
            {data.answer.map((block, i) => (
              <div key={i}>
                {block.type === 'para' && (
                  <p className="leading-relaxed">{block.data.join(' ')}</p>
                )}
                {block.type === 'heading' && (
                  <h3 className="font-semibold text-sm text-[var(--text-primary)] mt-3 mb-1">
                    {block.data.join(' ')}
                  </h3>
                )}
                {block.type === 'points' && (
                  <ul className="list-disc list-inside space-y-1.5 pl-2 my-2">
                    {block.data.map((point, j) => (
                      <li key={j} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {block.type === 'code' && (
                  <CodeSnippet
                    height={`${Math.max(block.data.length * 22, 60)}px`}
                    code={block.data.join('\n')}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </details>
    </div>
  );
}

export default QuestionAccordion;
