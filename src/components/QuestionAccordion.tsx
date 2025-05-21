import { useRef } from 'react';
import { IQuestionAccordion } from '../utils/interface';
import CodeSnippet from './CodeSnippet';

function QuestionAccordion({
  data,
  questionNumber,
  isOpened,
  changeActiveQuestion,
}: IQuestionAccordion) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    changeActiveQuestion();
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  return (
    <div className="my-3">
      <details
        ref={detailsRef}
        open={isOpened}
        className="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          onClick={handleToggle}
          className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 cursor-pointer"
        >
          <h2 className="text-lg font-semibold">{`${questionNumber + 1}. ${data.question}`}</h2>
          <svg
            className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div className="px-4 pt-4 text-gray-900">
          {data.answer.map((block, i) => (
            <div key={i}>
              {block.type === 'para' && (
                <p className="my-2">{block.data.join(' ')}</p>
              )}
              {block.type === 'heading' && (
                <h3 className="font-semibold my-2.5">{block.data.join(' ')}</h3>
              )}
              {block.type === 'points' && (
                <ul className="list-disc pl-5 my-1.5">
                  {block.data.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              )}
              {block.type === 'code' && (
                <CodeSnippet
                  height={`${block.data.length * 22}px`}
                  code={block.data.join('\n')}
                />
              )}
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

export default QuestionAccordion;
