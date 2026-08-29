import { memo, useState } from 'react';
import { ITerminal, ITypeScriptError } from '../utils/interface';
import {
  Terminal as TerminalIcon,
  Trash2,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

/**
 * Terminal component displaying console logs and TypeScript compilation/type diagnostics.
 */
function Terminal({
  consoleRef,
  clearTerminal,
  language,
  tsErrors = [],
  onErrorClick,
  activeTab: controlledActiveTab,
  onTabChange,
}: ITerminal) {
  const [internalTab, setInternalTab] = useState<'console' | 'tsErrors'>('console');
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalTab;

  const handleTabChange = (tab: 'console' | 'tsErrors') => {
    if (controlledActiveTab === undefined) {
      setInternalTab(tab);
    }
    onTabChange?.(tab);
  };

  const isTypeScript = language === 'typescript';
  const errorCount = tsErrors.length;

  return (
    <section className="h-full w-full flex flex-col bg-[var(--bg-app)]">
      {/* Terminal Tab Header */}
      <div className="w-full flex items-center justify-between px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-default)] no-select text-xs font-medium shrink-0">
        {/* Left: Tab Switchers */}
        <div className="flex items-center gap-1">
          {/* Console Tab Button */}
          <button
            type="button"
            onClick={() => handleTabChange('console')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === 'console'
                ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
            <span>Console</span>
            {activeTab === 'console' && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
          </button>

          {/* TypeScript Errors Tab Button (for TypeScript files) */}
          {isTypeScript && (
            <button
              type="button"
              onClick={() => handleTabChange('tsErrors')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeTab === 'tsErrors'
                  ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-2xs font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
              }`}
            >
              <AlertCircle
                className={`w-3.5 h-3.5 ${
                  errorCount > 0 ? 'text-red-500' : 'text-emerald-500'
                }`}
              />
              <span>TypeScript Errors</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-semibold border ${
                  errorCount > 0
                    ? 'bg-red-500/10 text-red-500 border-red-500/20'
                    : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                }`}
              >
                {errorCount}
              </span>
            </button>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          {activeTab === 'console' && (
            <button
              type="button"
              onClick={clearTerminal}
              title="Clear console"
              aria-label="Clear console"
              className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--border-focus)]"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Terminal Tab Contents */}
      <div className="flex-1 w-full overflow-hidden relative">
        {/* Console View */}
        <div
          className={`h-full w-full overflow-auto p-2 bg-[var(--bg-app)] text-[var(--text-primary)] font-mono text-xs no-select ${
            activeTab === 'console' ? 'block' : 'hidden'
          }`}
          ref={consoleRef}
        />

        {/* TypeScript Errors View */}
        {isTypeScript && (
          <div
            className={`h-full w-full overflow-auto p-3 bg-[var(--bg-app)] ${
              activeTab === 'tsErrors' ? 'block' : 'hidden'
            }`}
          >
            {errorCount > 0 ? (
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between px-1 pb-1 border-b border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                  <span className="font-medium text-[var(--text-primary)]">
                    {errorCount} {errorCount === 1 ? 'Error' : 'Errors'} Found
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">
                    Click any error to jump to line
                  </span>
                </div>

                {tsErrors.map((err: ITypeScriptError, idx: number) => {
                  const errorCode = err.code
                    ? typeof err.code === 'string' && err.code.startsWith('TS')
                      ? err.code
                      : `TS${err.code}`
                    : 'TS Error';

                  return (
                    <button
                      type="button"
                      key={`${err.startLineNumber}-${err.startColumn}-${idx}`}
                      onClick={() => onErrorClick?.(err)}
                      className="w-full text-left p-3 rounded-lg border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all cursor-pointer group focus:outline-none focus:ring-1 focus:ring-red-500/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30">
                            {errorCode}
                          </span>
                          <span className="text-xs font-mono text-[var(--text-secondary)]">
                            Line {err.startLineNumber}, Col {err.startColumn}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Jump to code</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>

                      <p className="mt-1.5 text-xs font-mono text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">
                        {err.message}
                      </p>

                      <div className="mt-1 text-[11px] text-[var(--text-muted)] font-mono">
                        script.ts:{err.startLineNumber}:{err.startColumn}
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[var(--text-secondary)] select-none">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  No TypeScript Errors
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm">
                  TypeScript type-checking passed cleanly. No syntax or semantic diagnostics found.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(Terminal);

