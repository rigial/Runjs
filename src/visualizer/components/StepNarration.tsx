import { memo } from 'react';
import {
  Info,
  Terminal,
  Sparkles,
  Layers,
  ListOrdered,
  RotateCw,
} from 'lucide-react';
import { ExecutionStep } from '../engine/types';

interface StepNarrationProps {
  currentStep: ExecutionStep | null;
  code?: string;
}

function StepNarration({ currentStep, code }: StepNarrationProps) {
  if (!currentStep) {
    const isCodeEmpty = code !== undefined && code.trim() === '';
    return (
      <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] flex items-center gap-2 text-xs text-[var(--text-muted)]">
        <Info className="w-4 h-4 shrink-0 text-amber-500" />
        <span>
          {isCodeEmpty ? (
            'Code editor is empty. Enter JavaScript code or select an example above to begin.'
          ) : (
            <>
              Click <strong>Run & Visualize</strong> or press{' '}
              <strong>Play</strong> to watch the event loop execute.
            </>
          )}
        </span>
      </div>
    );
  }

  // Choose icon and color according to action type
  let ActionIcon = Info;
  let badgeColor =
    'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';

  if (currentStep.actionType.includes('STACK')) {
    ActionIcon = Layers;
    badgeColor =
      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
  } else if (currentStep.actionType.includes('MICROTASK')) {
    ActionIcon = Sparkles;
    badgeColor =
      'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
  } else if (
    currentStep.actionType.includes('TASK') ||
    currentStep.actionType.includes('WEBAPI')
  ) {
    ActionIcon = ListOrdered;
    badgeColor =
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
  } else if (currentStep.actionType.includes('LOOP')) {
    ActionIcon = RotateCw;
    badgeColor =
      'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
  } else if (currentStep.actionType.includes('CONSOLE')) {
    ActionIcon = Terminal;
    badgeColor =
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
  }

  return (
    <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 transition-all duration-150 animate-in fade-in">
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        <div className={`p-1.5 rounded-lg border shrink-0 ${badgeColor}`}>
          <ActionIcon className="w-4 h-4" />
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[var(--text-primary)]">
              {currentStep.title}
            </span>
            <span
              className={`px-1.5 py-0.2 text-[9px] font-bold uppercase rounded border ${badgeColor}`}
            >
              {currentStep.actionType.replace(/_/g, ' ')}
            </span>
            {currentStep.activeLine !== null && (
              <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Line {currentStep.activeLine}
              </span>
            )}
          </div>
          <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug line-clamp-1 sm:line-clamp-none">
            {currentStep.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(StepNarration);
