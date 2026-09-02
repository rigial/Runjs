import { memo } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Gauge,
} from 'lucide-react';

interface ContextControlsProps {
  currentStepIndex: number;
  totalSteps: number;
  isPlaying: boolean;
  speed: number;
  onPlayToggle: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  onReset: () => void;
  onSeek: (stepIndex: number) => void;
  onSpeedChange: (speed: number) => void;
}

const SPEED_OPTIONS = [
  { label: '0.25x', value: 0.25 },
  { label: '0.5x', value: 0.5 },
  { label: '1x', value: 1 },
  { label: '1.5x', value: 1.5 },
  { label: '2x', value: 2 },
];

function ContextControls({
  currentStepIndex,
  totalSteps,
  isPlaying,
  speed,
  onPlayToggle,
  onStepForward,
  onStepBackward,
  onReset,
  onSeek,
  onSpeedChange,
}: ContextControlsProps) {
  const isAtBeginning = currentStepIndex <= 0;
  const isAtEnd = totalSteps === 0 || currentStepIndex >= totalSteps - 1;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0">
      {/* Top Row on mobile (Playback + Speed), Left/Right on desktop */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-2 shrink-0">
        {/* Step Playback Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Reset / Restart */}
          <button
            type="button"
            onClick={onReset}
            disabled={totalSteps === 0 || isAtBeginning}
            title="Restart from beginning (R)"
            className="p-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Step Backward (Prev) */}
          <button
            type="button"
            onClick={onStepBackward}
            disabled={totalSteps === 0 || isAtBeginning || isPlaying}
            title="Step Backward (Left Arrow)"
            className="p-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Play / Pause Toggle */}
          <button
            type="button"
            onClick={onPlayToggle}
            disabled={totalSteps === 0}
            title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-black" />
                <span>{isAtEnd ? 'Replay' : 'Play'}</span>
              </>
            )}
          </button>

          {/* Step Forward (Next) */}
          <button
            type="button"
            onClick={onStepForward}
            disabled={totalSteps === 0 || isAtEnd || isPlaying}
            title="Step Forward (Right Arrow)"
            className="p-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Speed Controls (Mobile position) */}
        <div className="flex sm:hidden items-center gap-1 shrink-0">
          <div className="flex items-center rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] p-0.5">
            {SPEED_OPTIONS.map((opt) => {
              const isActive = speed === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onSpeedChange(opt.value)}
                  className={`px-1.5 py-0.5 text-[10px] font-semibold rounded transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Scrubber Slider */}
      <div className="flex-1 w-full max-w-md flex items-center gap-2.5 px-1 sm:px-2">
        <span className="text-[11px] font-mono font-semibold text-[var(--text-secondary)] shrink-0 min-w-[70px]">
          Step {totalSteps > 0 ? currentStepIndex + 1 : 0} / {totalSteps}
        </span>

        <input
          type="range"
          min={0}
          max={Math.max(0, totalSteps - 1)}
          value={currentStepIndex}
          onChange={(e) => onSeek(Number(e.target.value))}
          disabled={totalSteps === 0}
          aria-label="Execution step scrubber"
          className="flex-1 h-1.5 rounded-lg bg-[var(--border-default)] accent-amber-500 cursor-pointer disabled:opacity-40"
        />
      </div>

      {/* Speed Controls (Desktop position) */}
      <div className="hidden sm:flex items-center gap-1.5 shrink-0">
        <div className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] mr-1">
          <Gauge className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Speed:</span>
        </div>

        <div className="flex items-center rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] p-0.5">
          {SPEED_OPTIONS.map((opt) => {
            const isActive = speed === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSpeedChange(opt.value)}
                className={`px-2 py-0.5 text-[10px] font-semibold rounded transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(ContextControls);
