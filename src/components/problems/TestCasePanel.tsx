import { memo, useState } from 'react';
import { TestCase } from '../../problem-engine/types';
import { formatValueForDisplay } from '../../problem-engine/evaluator';
import { Plus, Trash2, CheckCircle2 } from 'lucide-react';

interface TestCasePanelProps {
  testCases: TestCase[];
  customTestCases: TestCase[];
  onAddCustomTestCase: (tc: TestCase) => void;
  onRemoveCustomTestCase: (index: number) => void;
  selectedCaseIndex: number;
  onSelectCaseIndex: (index: number) => void;
}

function TestCasePanel({
  testCases,
  customTestCases,
  onAddCustomTestCase,
  onRemoveCustomTestCase,
  selectedCaseIndex,
  onSelectCaseIndex,
}: TestCasePanelProps) {
  const allCases = [...testCases, ...customTestCases];
  const [customInputText, setCustomInputText] = useState(
    '[\n  [2, 7, 11, 15],\n  9\n]'
  );
  const [customExpectedText, setCustomExpectedText] = useState('[0, 1]');
  const [isAdding, setIsAdding] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);

  const currentCase = allCases[selectedCaseIndex] || allCases[0];

  function handleSaveCustom() {
    try {
      setParseError(null);
      const parsedInput = JSON.parse(customInputText);
      const parsedExpected = JSON.parse(customExpectedText);

      const newCase: TestCase = {
        name: `Custom ${customTestCases.length + 1}`,
        input: Array.isArray(parsedInput) ? parsedInput : [parsedInput],
        expected: parsedExpected,
        isCustom: true,
      };

      onAddCustomTestCase(newCase);
      setIsAdding(false);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Invalid JSON syntax in custom test case';
      setParseError(message);
    }
  }

  return (
    <div className="h-full w-full flex flex-col bg-[var(--bg-app)] overflow-hidden text-xs">
      {/* Test Case Selection Tabs */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0 overflow-x-auto scrollbar-none">
        {allCases.map((tc, idx) => {
          const isSelected = idx === selectedCaseIndex && !isAdding;
          const isCustom = idx >= testCases.length;

          return (
            <div key={idx} className="flex items-center">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  onSelectCaseIndex(idx);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs border border-[var(--border-subtle)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                }`}
              >
                {tc.name || `Case ${idx + 1}`}
              </button>

              {isCustom && (
                <button
                  type="button"
                  title="Delete custom case"
                  aria-label="Delete custom case"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveCustomTestCase(idx - testCases.length);
                    onSelectCaseIndex(0);
                  }}
                  className="p-1 text-[var(--text-muted)] hover:text-rose-500 rounded transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-dashed transition-colors ${
            isAdding
              ? 'border-amber-500 text-amber-500 bg-amber-500/10'
              : 'border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
          }`}
        >
          <Plus className="w-3 h-3" />
          <span>Custom</span>
        </button>
      </div>

      {/* Test Case Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
        {isAdding ? (
          /* Custom Test Case Creator */
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-[var(--text-primary)]">
                Add Custom Test Case
              </h4>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                Cancel
              </button>
            </div>

            {parseError && (
              <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/20 text-xs">
                {parseError}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-[var(--text-secondary)]">
                Arguments Array (JSON format e.g. [[1,2,3], 5])
              </label>
              <textarea
                value={customInputText}
                onChange={(e) => setCustomInputText(e.target.value)}
                rows={4}
                className="w-full p-2.5 font-mono text-xs rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] focus:ring-1 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-[var(--text-secondary)]">
                Expected Return Value (JSON format)
              </label>
              <input
                type="text"
                value={customExpectedText}
                onChange={(e) => setCustomExpectedText(e.target.value)}
                className="w-full p-2 font-mono text-xs rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] focus:ring-1 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSaveCustom}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black text-xs font-semibold shadow-xs transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Save & Select Case</span>
            </button>
          </div>
        ) : currentCase ? (
          /* Selected Test Case Inspector */
          <div className="space-y-3">
            {/* Input Arguments */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-[var(--text-muted)] font-sans uppercase tracking-wider">
                Input Arguments
              </div>
              <div className="space-y-1.5">
                {Array.isArray(currentCase.input) ? (
                  currentCase.input.map((arg, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] whitespace-pre-wrap break-all"
                    >
                      <div className="text-[10px] text-[var(--text-muted)] font-sans mb-1">
                        Arg {idx + 1}:
                      </div>
                      <code>{formatValueForDisplay(arg)}</code>
                    </div>
                  ))
                ) : (
                  <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] whitespace-pre-wrap break-all">
                    <code>{formatValueForDisplay(currentCase.input)}</code>
                  </div>
                )}
              </div>
            </div>

            {/* Expected Output */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-[var(--text-muted)] font-sans uppercase tracking-wider">
                Expected Output
              </div>
              <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-emerald-600 dark:text-emerald-400 whitespace-pre-wrap break-all">
                <code>{formatValueForDisplay(currentCase.expected)}</code>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default memo(TestCasePanel);
