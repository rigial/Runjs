import { memo, useState } from 'react';
import { TestResult, SubmissionResult } from '../../problem-engine/types';
import { formatValueForDisplay } from '../../problem-engine/evaluator';
import {
  CheckCircle2,
  XCircle,
  Zap,
  HardDrive,
  Terminal,
  Play,
} from 'lucide-react';

interface TestResultsPanelProps {
  lastRunResults: TestResult[] | null;
  lastSubmission: SubmissionResult | null;
  activeView: 'run' | 'submit';
  onRunClick: () => void;
}

function TestResultsPanel({
  lastRunResults,
  lastSubmission,
  activeView,
  onRunClick,
}: TestResultsPanelProps) {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  if (activeView === 'submit' && lastSubmission) {
    const isAccepted = lastSubmission.status === 'accepted';
    return (
      <div className="h-full w-full flex flex-col bg-[var(--bg-app)] overflow-y-auto p-4 sm:p-5 space-y-4 text-xs">
        {/* Big Verdict Header */}
        <div
          className={`p-4 rounded-2xl border flex items-center justify-between gap-3 shadow-xs ${
            isAccepted
              ? 'border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-transparent'
              : 'border-rose-500/30 bg-gradient-to-r from-rose-500/15 via-rose-500/10 to-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                isAccepted
                  ? 'bg-emerald-500 text-black'
                  : 'bg-rose-500 text-white'
              }`}
            >
              {isAccepted ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
            </div>

            <div>
              <h3
                className={`text-base sm:text-lg font-bold ${
                  isAccepted
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {isAccepted
                  ? 'Accepted'
                  : lastSubmission.status === 'time_limit_exceeded'
                    ? 'Time Limit Exceeded'
                    : lastSubmission.status === 'runtime_error'
                      ? 'Runtime Error'
                      : 'Wrong Answer'}
              </h3>
              <p className="text-[11px] text-[var(--text-secondary)]">
                {isAccepted
                  ? 'Congratulations! All test cases passed successfully.'
                  : `Passed ${lastSubmission.passedCases} of ${lastSubmission.totalCases} test cases.`}
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
            <div className="flex items-center gap-1 text-[10px] font-semibold text-[var(--text-secondary)] mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Runtime</span>
            </div>
            <div className="font-mono text-sm font-bold text-[var(--text-primary)]">
              {lastSubmission.runtimeMs} ms
            </div>
          </div>

          <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
            <div className="flex items-center gap-1 text-[10px] font-semibold text-[var(--text-secondary)] mb-1">
              <HardDrive className="w-3.5 h-3.5 text-blue-500" />
              <span>Memory</span>
            </div>
            <div className="font-mono text-sm font-bold text-[var(--text-primary)]">
              {lastSubmission.memoryMB} MB
            </div>
          </div>

          <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
            <div className="flex items-center gap-1 text-[10px] font-semibold text-[var(--text-secondary)] mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Test Cases</span>
            </div>
            <div className="font-mono text-sm font-bold text-[var(--text-primary)]">
              {lastSubmission.passedCases} / {lastSubmission.totalCases}
            </div>
          </div>
        </div>

        {/* Failed Case Details if not accepted */}
        {!isAccepted && lastSubmission.failedCase && (
          <div className="space-y-3 pt-2 font-mono text-xs">
            <div className="text-[11px] font-bold text-[var(--text-primary)] font-sans uppercase tracking-wider">
              Failed Test Case Details
            </div>

            {lastSubmission.failedCase.error && (
              <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-500">
                <div className="font-bold font-sans text-xs mb-1">Error:</div>
                <code>{lastSubmission.failedCase.error}</code>
              </div>
            )}

            <div className="space-y-1.5">
              <div className="text-[10px] text-[var(--text-muted)] font-sans">
                Input:
              </div>
              <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] break-all">
                <code>
                  {formatValueForDisplay(lastSubmission.failedCase.input)}
                </code>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="text-[10px] text-[var(--text-muted)] font-sans">
                  Expected Output:
                </div>
                <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-emerald-600 dark:text-emerald-400 break-all">
                  <code>
                    {formatValueForDisplay(lastSubmission.failedCase.expected)}
                  </code>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] text-[var(--text-muted)] font-sans">
                  Actual Output:
                </div>
                <div className="p-2.5 rounded-lg border border-rose-500/30 bg-rose-500/5 text-rose-600 dark:text-rose-400 break-all">
                  <code>
                    {formatValueForDisplay(lastSubmission.failedCase.actual)}
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (activeView === 'run' && lastRunResults && lastRunResults.length > 0) {
    const currentCase = lastRunResults[selectedCaseIdx] || lastRunResults[0];
    const totalPassed = lastRunResults.filter((r) => r.passed).length;
    const allPassed = totalPassed === lastRunResults.length;

    return (
      <div className="h-full w-full flex flex-col bg-[var(--bg-app)] overflow-hidden text-xs">
        {/* Case Results Tabs */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {lastRunResults.map((res, idx) => {
              const isSelected = idx === selectedCaseIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs border border-[var(--border-subtle)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                  }`}
                >
                  {res.passed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 text-rose-500" />
                  )}
                  <span>{res.name || `Case ${idx + 1}`}</span>
                </button>
              );
            })}
          </div>

          <span
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              allPassed
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
            }`}
          >
            {totalPassed} / {lastRunResults.length} Passed
          </span>
        </div>

        {/* Selected Case Breakdown */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
          {/* Status badge & runtime */}
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-default)]">
            <div className="flex items-center gap-2">
              {currentCase.passed ? (
                <span className="inline-flex items-center gap-1 text-emerald-500 font-bold font-sans">
                  <CheckCircle2 className="w-4 h-4" />
                  Passed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-rose-500 font-bold font-sans">
                  <XCircle className="w-4 h-4" />
                  Failed
                </span>
              )}
            </div>

            <span className="text-[11px] text-[var(--text-muted)]">
              Runtime: {currentCase.runtimeMs}ms
            </span>
          </div>

          {currentCase.error && (
            <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-500">
              <div className="font-bold font-sans text-xs mb-1">
                Runtime Error:
              </div>
              <code>{currentCase.error}</code>
            </div>
          )}

          {/* Input */}
          <div className="space-y-1">
            <div className="text-[10px] text-[var(--text-muted)] font-sans uppercase tracking-wider">
              Input:
            </div>
            <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] break-all">
              <code>{formatValueForDisplay(currentCase.input)}</code>
            </div>
          </div>

          {/* Expected vs Actual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="text-[10px] text-[var(--text-muted)] font-sans uppercase tracking-wider">
                Expected:
              </div>
              <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-emerald-600 dark:text-emerald-400 break-all">
                <code>{formatValueForDisplay(currentCase.expected)}</code>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] text-[var(--text-muted)] font-sans uppercase tracking-wider">
                Actual Output:
              </div>
              <div
                className={`p-2.5 rounded-lg border break-all ${
                  currentCase.passed
                    ? 'border-[var(--border-default)] bg-[var(--bg-surface)] text-emerald-600 dark:text-emerald-400'
                    : 'border-rose-500/30 bg-rose-500/5 text-rose-600 dark:text-rose-400'
                }`}
              >
                <code>{formatValueForDisplay(currentCase.actual)}</code>
              </div>
            </div>
          </div>

          {/* Captured Console Logs */}
          {currentCase.logs && currentCase.logs.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-1 text-[10px] text-[var(--text-muted)] font-sans">
                <Terminal className="w-3 h-3" />
                <span>Captured stdout logs:</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] text-[11px] text-[var(--text-secondary)] space-y-0.5">
                {currentCase.logs.map((log, i) => (
                  <div key={i} className="text-amber-500/90 font-mono">
                    &gt; {log}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Initial Empty State
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[var(--bg-app)]">
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
        <Play className="w-5 h-5 fill-amber-500" />
      </div>
      <div className="space-y-1 max-w-xs">
        <h4 className="text-xs font-bold text-[var(--text-primary)]">
          Ready to Test
        </h4>
        <p className="text-[11px] text-[var(--text-secondary)]">
          Click <strong>Run</strong> to test your code against visible sample
          cases or <strong>Submit</strong> to evaluate all hidden test cases.
        </p>
      </div>
      <button
        type="button"
        onClick={onRunClick}
        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black text-xs font-semibold shadow-xs transition-colors"
      >
        Run Test Cases
      </button>
    </div>
  );
}

export default memo(TestResultsPanel);
