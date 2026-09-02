import { memo } from 'react';
import {
  Boxes,
  Database,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { ExecutionContext } from '../engine/types';

interface ExecutionContextBoxProps {
  contexts: ExecutionContext[];
  activeContextId: string;
  selectedContextId: string;
  onSelectContext: (id: string) => void;
  updatedVariableName?: string;
  updatedContextId?: string;
  activeLine: number | null;
}

function ExecutionContextBox({
  contexts,
  activeContextId,
  selectedContextId,
  onSelectContext,
  updatedVariableName,
  updatedContextId,
  activeLine,
}: ExecutionContextBoxProps) {
  const currentContext =
    contexts.find((c) => c.id === selectedContextId) ||
    contexts.find((c) => c.id === activeContextId) ||
    contexts[contexts.length - 1];

  if (!currentContext) {
    return (
      <div className="flex flex-col h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-xs">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-[var(--text-muted)]">
          <Boxes className="w-8 h-8 mb-2 opacity-50" />
          <p className="text-xs font-semibold">No Active Execution Context</p>
          <p className="text-[11px] mt-1">
            Run or step through code to inspect the Execution Context.
          </p>
        </div>
      </div>
    );
  }

  const isGlobal = currentContext.type === 'global';
  const isActive = currentContext.id === activeContextId;
  const isMemoryPhase = currentContext.phase === 'creation';
  const variablesList = Object.values(currentContext.variables);

  return (
    <div className="flex flex-col h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-xs">
      {/* 1. Context Box Header */}
      <div className="flex flex-col gap-2 p-3 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] shrink-0 select-none">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-md border ${
                isGlobal
                  ? 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                  : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-xs font-bold text-[var(--text-primary)] truncate">
                {currentContext.name}
              </span>
              <span
                className={`px-1.5 py-0.2 text-[9px] font-bold uppercase rounded border ${
                  isGlobal
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                }`}
              >
                {isGlobal ? 'GEC' : 'FEC'}
              </span>
              {isActive ? (
                <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Active Frame
                </span>
              ) : (
                <span className="px-1.5 py-0.2 text-[9px] font-medium rounded bg-[var(--bg-surface-active)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  Suspended Caller
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono">
            {/* Phase Indicator Badge */}
            <span
              className={`px-2 py-0.5 rounded-full font-semibold border flex items-center gap-1 ${
                isMemoryPhase
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 animate-pulse'
                  : currentContext.phase === 'execution'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                    : 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isMemoryPhase
                    ? 'bg-amber-500'
                    : currentContext.phase === 'execution'
                      ? 'bg-emerald-500'
                      : 'bg-zinc-400'
                }`}
              />
              {isMemoryPhase
                ? 'Phase 1: Memory Creation'
                : currentContext.phase === 'execution'
                  ? 'Phase 2: Code Execution'
                  : 'Completed'}
            </span>

            {/* Scope / this Badge */}
            <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-[var(--bg-surface-active)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              this: {currentContext.thisBinding}
            </span>
          </div>
        </div>

        {/* Multi-Context Tabs (if multiple contexts exist) */}
        {contexts.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar border-t border-[var(--border-subtle)]">
            <span className="text-[10px] font-semibold text-[var(--text-muted)] shrink-0 flex items-center gap-1">
              <Layers className="w-3 h-3" /> Inspect Context:
            </span>
            {contexts.map((ctx) => {
              const isSelected = ctx.id === currentContext.id;
              const isCurrentlyActive = ctx.id === activeContextId;
              return (
                <button
                  key={ctx.id}
                  type="button"
                  onClick={() => onSelectContext(ctx.id)}
                  className={`px-2 py-0.5 text-[10px] font-mono font-medium rounded-md transition-all cursor-pointer shrink-0 border flex items-center gap-1 ${
                    isSelected
                      ? 'bg-amber-500 text-black font-bold border-amber-500 shadow-xs'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-default)] hover:bg-[var(--bg-surface-hover)]'
                  }`}
                >
                  {isCurrentlyActive && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-emerald-500'}`}
                    />
                  )}
                  <span>{ctx.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. Main Two-Column Layout (Memory Component vs Code Component) */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-default)] overflow-y-auto">
        {/* Left Column: Memory Component (Variable Environment) */}
        <div className="flex flex-col min-h-[220px] bg-[var(--bg-app)]/30 overflow-hidden">
          {/* Column Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-[var(--bg-surface)] border-b border-[var(--border-default)] shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Memory Component
              </span>
            </div>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">
              Variable Environment ({variablesList.length} items)
            </span>
          </div>

          {/* Variables Table */}
          <div className="flex-1 p-2.5 overflow-y-auto space-y-1.5">
            {variablesList.length === 0 ? (
              <div className="h-full min-h-[120px] flex items-center justify-center text-center p-4 text-[var(--text-muted)] text-[11px]">
                No variables allocated yet.
              </div>
            ) : (
              variablesList.map((memVar) => {
                const isTargetUpdated =
                  currentContext.id === updatedContextId &&
                  memVar.name === updatedVariableName;

                let kindBadgeClass =
                  'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';
                if (memVar.kind === 'var') {
                  kindBadgeClass =
                    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
                } else if (memVar.kind === 'let') {
                  kindBadgeClass =
                    'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
                } else if (memVar.kind === 'const') {
                  kindBadgeClass =
                    'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
                } else if (memVar.kind === 'function') {
                  kindBadgeClass =
                    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
                } else if (memVar.kind === 'param') {
                  kindBadgeClass =
                    'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20';
                } else if (memVar.kind === 'this') {
                  kindBadgeClass =
                    'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
                }

                const isTDZ = memVar.value === '<uninitialized>';
                const isUndefined = memVar.value === 'undefined';

                return (
                  <div
                    key={memVar.name}
                    className={`flex items-center justify-between p-2 rounded-lg border transition-all duration-200 ${
                      isTargetUpdated
                        ? 'bg-amber-500/10 border-amber-500/60 shadow-md ring-1 ring-amber-500/30 scale-[1.01]'
                        : 'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-hover)]'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`px-1.5 py-0.2 text-[9px] font-bold uppercase rounded border shrink-0 font-mono ${kindBadgeClass}`}
                      >
                        {memVar.kind}
                      </span>
                      <span className="font-mono text-xs font-bold text-[var(--text-primary)] truncate">
                        {memVar.name}
                      </span>
                      {isTargetUpdated && (
                        <span className="px-1 py-0.2 text-[8px] font-bold rounded bg-amber-500 text-black uppercase tracking-wider animate-pulse">
                          Updated
                        </span>
                      )}
                    </div>

                    {/* Value Display */}
                    <div className="flex items-center gap-1.5 shrink-0 max-w-[55%]">
                      {/* Previous value indicator if updated */}
                      {memVar.previousValue &&
                        memVar.previousValue !== memVar.value && (
                          <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)] line-through">
                            <span>{memVar.previousValue}</span>
                            <ArrowRight className="w-2.5 h-2.5 shrink-0" />
                          </div>
                        )}

                      <span
                        className={`px-2 py-0.5 text-[11px] font-mono font-semibold rounded truncate ${
                          isTDZ
                            ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                            : isUndefined
                              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                              : memVar.kind === 'function'
                                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        }`}
                        title={memVar.value}
                      >
                        {memVar.value}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="px-3 py-1.5 bg-[var(--bg-surface)] border-t border-[var(--border-default)] text-[10px] text-[var(--text-muted)] flex items-center justify-between select-none">
            <span>RAM Storage</span>
            <span>Allocates variables & functions</span>
          </div>
        </div>

        {/* Right Column: Code Component (Thread of Execution) */}
        <div className="flex flex-col min-h-[220px] bg-[var(--bg-app)]/30 overflow-hidden">
          {/* Column Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-[var(--bg-surface)] border-b border-[var(--border-default)] shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Code Component
              </span>
            </div>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">
              Thread of Execution
            </span>
          </div>

          {/* Thread Content */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col justify-between gap-3">
            <div className="space-y-2.5">
              {/* Thread Status Banner */}
              <div className="p-2.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--text-secondary)]">
                    Execution Mode:
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    Single-Threaded Synchronous
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--text-secondary)]">
                    Current Active Line:
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-500">
                    {activeLine !== null ? `Line ${activeLine}` : 'None'}
                  </span>
                </div>
              </div>

              {/* Phase Educational Explainer */}
              {isMemoryPhase ? (
                <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Memory Allocation Phase</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    The JavaScript engine skims through the code in this context
                    and allocates memory for identifiers before running a single
                    line of code. Functions are copied in full, variables are
                    set to <code className="text-amber-500">undefined</code>,
                    and let/const stay in TDZ.
                  </p>
                </div>
              ) : (
                <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Code Execution Phase</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    Statements are executed one by one from top to bottom.
                    Calculations are carried out and values in the Memory
                    Component are updated in real time.
                  </p>
                </div>
              )}

              {/* Function Return Value (if completed or returning) */}
              {currentContext.returnValue !== undefined && (
                <div className="p-2.5 rounded-lg border border-purple-500/30 bg-purple-500/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                    Function Return Value:
                  </span>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30">
                    {currentContext.returnValue}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Insight */}
            <div className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[11px] text-[var(--text-muted)] flex items-start gap-2 select-none">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-500" />
              <span>
                Everything in JavaScript happens inside an Execution Context.
              </span>
            </div>
          </div>

          <div className="px-3 py-1.5 bg-[var(--bg-surface)] border-t border-[var(--border-default)] text-[10px] text-[var(--text-muted)] flex items-center justify-between select-none">
            <span>Call Site: L:{currentContext.callLine ?? '1'}</span>
            <span>Depth: {currentContext.depth}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ExecutionContextBox);
