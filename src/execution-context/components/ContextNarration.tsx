import { memo } from 'react';
import {
  Info,
  Database,
  Terminal,
  Sparkles,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle2,
} from 'lucide-react';
import { ContextExecutionStep } from '../engine/types';

interface ContextNarrationProps {
  currentStep: ContextExecutionStep | null;
  code?: string;
}

function ContextNarration({ currentStep, code }: ContextNarrationProps) {
  if (!currentStep) {
    const isCodeEmpty = code !== undefined && code.trim() === '';
    return (
      <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] flex items-center gap-2 text-xs text-[var(--text-muted)] select-none shrink-0">
        <Info className="w-4 h-4 shrink-0 text-amber-500" />
        <span>
          {isCodeEmpty ? (
            'Code editor is empty. Enter JavaScript code or select an example above to begin.'
          ) : (
            <>
              Click <strong>Run & Visualize</strong> or press{' '}
              <strong>Play</strong> to watch the JavaScript Execution Context in
              action.
            </>
          )}
        </span>
      </div>
    );
  }

  // Choose icon and badge color according to action type & phase
  let ActionIcon = Info;
  let badgeColor =
    'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';

  if (currentStep.actionType.startsWith('MEMORY')) {
    ActionIcon = Database;
    badgeColor =
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
  } else if (
    currentStep.actionType === 'VARIABLE_ASSIGN' ||
    currentStep.actionType === 'CODE_EXECUTE'
  ) {
    ActionIcon = Terminal;
    badgeColor =
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
  } else if (
    currentStep.actionType === 'GEC_CREATE' ||
    currentStep.actionType === 'FEC_CREATE'
  ) {
    ActionIcon = ArrowUpRight;
    badgeColor =
      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
  } else if (
    currentStep.actionType === 'FEC_POP' ||
    currentStep.actionType === 'RETURN'
  ) {
    ActionIcon = ArrowDownLeft;
    badgeColor =
      'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
  } else if (currentStep.actionType === 'CONSOLE_LOG') {
    ActionIcon = Sparkles;
    badgeColor =
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
  } else if (currentStep.actionType === 'COMPLETE') {
    ActionIcon = CheckCircle2;
    badgeColor =
      'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';
  }

  return (
    <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 transition-all duration-150 animate-in fade-in shrink-0">
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        <div className={`p-1.5 rounded-lg border shrink-0 ${badgeColor}`}>
          <ActionIcon className="w-4 h-4" />
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[var(--text-primary)]">
              {currentStep.title}
            </span>

            {/* Action Type Badge */}
            <span
              className={`px-1.5 py-0.2 text-[9px] font-bold uppercase rounded border ${badgeColor}`}
            >
              {currentStep.actionType.replace(/_/g, ' ')}
            </span>

            {/* Phase Badge */}
            <span
              className={`px-1.5 py-0.2 text-[9px] font-bold uppercase rounded border ${
                currentStep.phase === 'memory'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                  : currentStep.phase === 'execution'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                    : 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20'
              }`}
            >
              {currentStep.phase === 'memory'
                ? 'Phase 1: Memory'
                : currentStep.phase === 'execution'
                  ? 'Phase 2: Execution'
                  : 'Finished'}
            </span>

            {/* Active Line Number */}
            {currentStep.activeLine !== null && (
              <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Line {currentStep.activeLine}
              </span>
            )}
          </div>

          <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug line-clamp-2 sm:line-clamp-none">
            {currentStep.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(ContextNarration);
