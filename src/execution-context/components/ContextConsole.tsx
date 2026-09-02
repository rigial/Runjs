import { memo } from 'react';
import {
  Terminal,
  Trash2,
  AlertCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { ContextConsoleLog } from '../engine/types';

interface ContextConsoleProps {
  logs: ContextConsoleLog[];
  onClear?: () => void;
}

function ContextConsole({ logs, onClear }: ContextConsoleProps) {
  return (
    <div className="flex flex-col h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] shrink-0 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Console Output
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-[var(--bg-surface-active)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
            {logs.length} entries
          </span>
          {onClear && logs.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              title="Clear console"
              className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Log Entries */}
      <div className="flex-1 p-3 overflow-y-auto font-mono text-xs flex flex-col gap-1.5 bg-[var(--bg-app)]/40">
        {logs.length === 0 ? (
          <div className="h-full min-h-[100px] flex flex-col items-center justify-center text-center p-4 text-[var(--text-muted)] select-none">
            <p className="text-[11px]">No console output at this step.</p>
          </div>
        ) : (
          logs.map((entry, idx) => {
            let icon = (
              <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            );
            let textClass = 'text-[var(--text-primary)]';
            let bgClass =
              'bg-[var(--bg-surface)] border-[var(--border-subtle)]';

            if (entry.type === 'warn') {
              icon = (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              );
              textClass = 'text-amber-600 dark:text-amber-400';
              bgClass = 'bg-amber-500/5 border-amber-500/20';
            } else if (entry.type === 'error') {
              icon = (
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
              );
              textClass = 'text-rose-600 dark:text-rose-400';
              bgClass = 'bg-rose-500/5 border-rose-500/20';
            }

            return (
              <div
                key={entry.id || idx}
                className={`flex items-start gap-2 p-2 rounded-md border ${bgClass} text-xs transition-colors`}
              >
                {icon}
                <div className="flex-1 min-w-0 flex items-baseline justify-between gap-2">
                  <span
                    className={`${textClass} break-all font-mono text-[11px] leading-relaxed`}
                  >
                    {entry.args.join(' ')}
                  </span>
                  {entry.line && (
                    <span className="text-[9px] text-[var(--text-muted)] shrink-0 font-mono">
                      :{entry.line}
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default memo(ContextConsole);
