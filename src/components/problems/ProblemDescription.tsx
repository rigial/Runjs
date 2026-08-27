import { memo, useState } from 'react';
import { Problem, SubmissionResult } from '../../problem-engine/types';
import SubmissionHistory from './SubmissionHistory';
import {
  FileText,
  Lightbulb,
  BookCheck,
  History,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  HardDrive,
} from 'lucide-react';

interface ProblemDescriptionProps {
  problem: Problem;
  submissions: SubmissionResult[];
  onLoadCodeIntoEditor?: (code: string) => void;
}

function ProblemDescription({
  problem,
  submissions,
  onLoadCodeIntoEditor,
}: ProblemDescriptionProps) {
  const [activeTab, setActiveTab] = useState<
    'description' | 'hints' | 'solution' | 'submissions'
  >('description');
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({
    0: true, // Reveal first hint by default
  });
  const [copiedSolution, setCopiedSolution] = useState(false);

  function toggleHint(index: number) {
    setRevealedHints((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function handleCopySolution() {
    if (problem.solution?.code) {
      navigator.clipboard.writeText(problem.solution.code);
      setCopiedSolution(true);
      setTimeout(() => setCopiedSolution(false), 2000);
    }
  }

  return (
    <div className="h-full w-full flex flex-col bg-[var(--bg-app)] overflow-hidden text-xs">
      {/* Tab Navigation Header */}
      <div className="flex items-center gap-1 px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0 overflow-x-auto scrollbar-none">
        {/* Description Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('description')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
            activeTab === 'description'
              ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-blue-500" />
          <span>Description</span>
        </button>

        {/* Hints Tab */}
        {problem.hints && problem.hints.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveTab('hints')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'hints'
                ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Hints</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500/15 text-amber-600 dark:text-amber-400">
              {problem.hints.length}
            </span>
          </button>
        )}

        {/* Solution Tab */}
        {problem.solution && (
          <button
            type="button"
            onClick={() => setActiveTab('solution')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'solution'
                ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <BookCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Solution</span>
          </button>
        )}

        {/* Submissions Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('submissions')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
            activeTab === 'submissions'
              ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          <History className="w-3.5 h-3.5 text-purple-500" />
          <span>Submissions</span>
          {submissions.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] border border-[var(--border-default)]">
              {submissions.length}
            </span>
          )}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6 leading-relaxed text-[var(--text-primary)]">
        {/* Description View */}
        {activeTab === 'description' && (
          <div className="space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  #{problem.id}
                </span>
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  {problem.title}
                </h2>
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {problem.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-default)]"
                  >
                    {t}
                  </span>
                ))}
                <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-default)]">
                  Acceptance: {problem.acceptanceRate}
                </span>
              </div>
            </div>

            {/* Description Text */}
            <div className="prose prose-sm dark:prose-invert max-w-none text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 whitespace-pre-line">
              {problem.description}
            </div>

            {/* Examples */}
            {problem.examples && problem.examples.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Examples
                </h3>

                {problem.examples.map((example, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3.5 sm:p-4 space-y-3 font-mono text-xs shadow-2xs"
                  >
                    <div className="text-xs font-bold text-[var(--text-primary)] font-sans">
                      Example {i + 1}
                    </div>

                    <div className="space-y-2.5 text-xs">
                      {/* Input */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-3">
                        <span className="text-[var(--text-muted)] font-semibold sm:w-24 shrink-0 font-mono text-[11px] pt-1">
                          Input:
                        </span>
                        <div className="text-amber-500 bg-[var(--bg-app)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] flex-1 break-all select-text font-mono">
                          {example.input}
                        </div>
                      </div>

                      {/* Output */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-3">
                        <span className="text-[var(--text-muted)] font-semibold sm:w-24 shrink-0 font-mono text-[11px] pt-1">
                          Output:
                        </span>
                        <div className="text-emerald-500 bg-[var(--bg-app)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] flex-1 break-all select-text font-mono">
                          {example.output}
                        </div>
                      </div>

                      {/* Explanation */}
                      {example.explanation && (
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-3 pt-0.5 font-sans text-xs text-[var(--text-secondary)]">
                          <span className="text-[var(--text-muted)] font-semibold sm:w-24 shrink-0 font-mono text-[11px] pt-0.5">
                            Explanation:
                          </span>
                          <div className="flex-1 text-[var(--text-secondary)] leading-relaxed pl-1 sm:pl-0">
                            {example.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Constraints */}
            {problem.constraints && problem.constraints.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Constraints
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-secondary)] font-mono">
                  {problem.constraints.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Hints View */}
        {activeTab === 'hints' && problem.hints && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-default)]">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                Progressive Hints
              </h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Try solving step-by-step. Reveal hints only when you get stuck to
              exercise your problem-solving muscles!
            </p>

            <div className="space-y-3">
              {problem.hints.map((hint, i) => {
                const isRevealed = Boolean(revealedHints[i]);
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleHint(i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-xs text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 text-[11px] font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span>Hint {i + 1}</span>
                      </div>
                      {isRevealed ? (
                        <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
                      )}
                    </button>

                    {isRevealed && (
                      <div className="px-4 pb-4 pt-1 text-xs text-[var(--text-secondary)] border-t border-[var(--border-subtle)] bg-[var(--bg-app)]/50 leading-relaxed">
                        {hint}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Solution View */}
        {activeTab === 'solution' && problem.solution && (
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-default)]">
              <div className="flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-emerald-500" />
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  Reference Solution & Analysis
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCopySolution}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs text-[var(--text-secondary)] transition-colors"
              >
                {copiedSolution ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Complexity Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Time Complexity</span>
                </div>
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  {problem.solution.complexity.time}
                </div>
              </div>

              <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-secondary)] mb-1">
                  <HardDrive className="w-3.5 h-3.5 text-blue-500" />
                  <span>Space Complexity</span>
                </div>
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  {problem.solution.complexity.space}
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Approach Explanation
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {problem.solution.explanation}
              </p>
            </div>

            {/* Solution Code Block */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Implementation
                </h4>

                {onLoadCodeIntoEditor && (
                  <button
                    type="button"
                    onClick={() =>
                      problem.solution?.code &&
                      onLoadCodeIntoEditor(problem.solution.code)
                    }
                    className="text-[11px] text-amber-500 hover:underline font-medium"
                  >
                    Load Solution into Editor
                  </button>
                )}
              </div>

              <pre className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] font-mono text-xs text-[var(--text-primary)] overflow-x-auto shadow-2xs">
                <code>{problem.solution.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Submissions View */}
        {activeTab === 'submissions' && (
          <SubmissionHistory
            submissions={submissions}
            onLoadCodeIntoEditor={onLoadCodeIntoEditor}
          />
        )}
      </div>
    </div>
  );
}

export default memo(ProblemDescription);
