import { memo } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

function TerminalSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading terminal..."
      className="h-full w-full flex flex-col bg-[var(--bg-app)] overflow-hidden font-mono text-xs select-none"
    >
      {/* Terminal Tab Header */}
      <div className="h-9 px-3 flex items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
          <span className="font-semibold text-xs text-[var(--text-primary)]">
            Terminal
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-xs bg-[var(--border-default)] animate-pulse" />
          <div className="w-4 h-4 rounded-xs bg-[var(--border-default)] animate-pulse" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-3 flex flex-col gap-2 bg-[#09090b] text-emerald-400 font-mono text-xs">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-amber-400">runjs@2.0.0</span>
          <span>~</span>
          <span className="text-zinc-500">$</span>
          <span className="w-2 h-3.5 bg-emerald-400 animate-pulse" />
        </div>
        <div className="w-48 h-3 rounded-xs bg-zinc-800 animate-pulse mt-1" />
        <div className="w-64 h-3 rounded-xs bg-zinc-800/60 animate-pulse" />
      </div>
    </div>
  );
}

export default memo(TerminalSkeleton);
