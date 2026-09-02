import { memo } from 'react';

function CodeEditorSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading code editor..."
      className="h-full w-full bg-[var(--bg-app)] flex flex-col overflow-hidden font-mono text-xs select-none"
    >
      <div className="flex-1 w-full p-4 flex gap-4 overflow-hidden">
        {/* Line Numbers Gutter */}
        <div className="flex flex-col gap-2.5 text-right text-[var(--text-muted)]/40 w-6 shrink-0 select-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="leading-none text-[11px]">
              {i + 1}
            </span>
          ))}
        </div>

        {/* Shimmer Code Lines */}
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="w-1/4 h-3 rounded-xs bg-[var(--border-default)] animate-pulse" />
          <div className="w-1/2 h-3 rounded-xs bg-[var(--border-default)]/70 animate-pulse ml-4" />
          <div className="w-1/3 h-3 rounded-xs bg-[var(--border-default)]/60 animate-pulse ml-8" />
          <div className="w-2/5 h-3 rounded-xs bg-[var(--border-default)]/70 animate-pulse ml-8" />
          <div className="w-1/5 h-3 rounded-xs bg-[var(--border-default)]/50 animate-pulse ml-4" />
          <div className="w-12 h-3 rounded-xs bg-[var(--border-default)]/40 animate-pulse" />
          <div className="h-2" />
          <div className="w-1/3 h-3 rounded-xs bg-[var(--border-default)]/80 animate-pulse" />
          <div className="w-3/5 h-3 rounded-xs bg-[var(--border-default)]/60 animate-pulse ml-4" />
          <div className="w-2/5 h-3 rounded-xs bg-[var(--border-default)]/50 animate-pulse ml-4" />
          <div className="w-16 h-3 rounded-xs bg-[var(--border-default)]/40 animate-pulse" />
          <div className="h-2" />
          <div className="w-2/5 h-3 rounded-xs bg-[var(--border-default)]/70 animate-pulse" />
          <div className="w-1/2 h-3 rounded-xs bg-[var(--border-default)]/50 animate-pulse ml-4" />
          <div className="w-1/4 h-3 rounded-xs bg-[var(--border-default)]/40 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default memo(CodeEditorSkeleton);
