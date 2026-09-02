import { memo } from 'react';
import { Layers, Activity, ArrowUpCircle } from 'lucide-react';
import { ContextCallStackFrame } from '../engine/types';

interface ContextCallStackProps {
  stack: ContextCallStackFrame[];
  selectedContextId: string;
  onSelectContext: (id: string) => void;
}

function ContextCallStack({
  stack,
  selectedContextId,
  onSelectContext,
}: ContextCallStackProps) {
  // Call Stack displays with top of the stack visually on top
  const reversedStack = [...stack].reverse();

  return (
    <div className="flex flex-col h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-xs">
      {/* Panel Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] shrink-0 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Call Stack
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-[var(--bg-surface-active)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
            Depth: {stack.length}
          </span>
        </div>
      </div>

      {/* Stack Frames List */}
      <div className="flex-1 p-3 overflow-y-auto flex flex-col justify-start gap-2 bg-[var(--bg-app)]/40">
        {reversedStack.length === 0 ? (
          <div className="h-full min-h-[140px] flex flex-col items-center justify-center text-center p-4 rounded-lg border border-dashed border-[var(--border-default)] text-[var(--text-muted)] select-none">
            <Activity className="w-6 h-6 mb-2 stroke-[1.5] text-[var(--text-muted)]/60" />
            <p className="text-xs font-medium text-[var(--text-secondary)]">
              Call Stack is Empty
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
              All execution contexts have finished and popped.
            </p>
          </div>
        ) : (
          reversedStack.map((frame, index) => {
            const isTop = index === 0;
            const isSelected = frame.contextId === selectedContextId;
            const isGlobal = frame.type === 'global';

            return (
              <button
                key={frame.id}
                type="button"
                onClick={() => onSelectContext(frame.contextId)}
                className={`w-full text-left flex items-center justify-between p-2.5 rounded-lg border transition-all duration-200 animate-in slide-in-from-top-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-amber-500 ring-2 ring-amber-500/30 shadow-md scale-[1.01]'
                    : isTop
                      ? 'bg-[var(--bg-surface-elevated)] border-blue-500/50 shadow-md ring-1 ring-blue-500/30'
                      : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-hover)]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isTop
                        ? 'bg-blue-500 animate-ping'
                        : 'bg-[var(--text-muted)]'
                    }`}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)] truncate">
                      {frame.name}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                      {isTop ? (
                        <span className="text-blue-500 font-semibold">
                          Active Context (Top of Stack)
                        </span>
                      ) : (
                        <span>Suspended (Awaiting callee return)</span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {frame.line !== null && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-[var(--bg-surface-active)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                      L:{frame.line}
                    </span>
                  )}
                  <span
                    className={`px-1.5 py-0.5 text-[9px] font-bold uppercase rounded border ${
                      isGlobal
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                    }`}
                  >
                    {isGlobal ? 'GEC' : 'FEC'}
                  </span>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Footer / LIFO info */}
      <div className="px-3 py-1.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-default)] text-[10px] text-[var(--text-muted)] flex items-center justify-between select-none">
        <span className="flex items-center gap-1">
          <ArrowUpCircle className="w-3 h-3 text-blue-500" />
          LIFO (Last In, First Out)
        </span>
        <span>
          {stack.length > 0 ? `${stack.length} context(s) on stack` : 'Idle'}
        </span>
      </div>
    </div>
  );
}

export default memo(ContextCallStack);
