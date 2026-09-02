import { memo } from 'react';
import { Code2 } from 'lucide-react';

function PageSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading page..."
      className="min-h-screen w-full flex flex-col bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors"
    >
      {/* Skeleton Navbar */}
      <div className="h-14 border-b border-[var(--border-default)] px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 animate-pulse flex items-center justify-center">
            <Code2 className="w-4 h-4 text-amber-500" />
          </div>
          <div className="w-20 h-4 rounded-md bg-[var(--border-default)] animate-pulse" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-7 rounded-lg bg-[var(--border-default)] animate-pulse hidden sm:block" />
          <div className="w-16 h-7 rounded-lg bg-[var(--border-default)] animate-pulse hidden sm:block" />
          <div className="w-8 h-8 rounded-lg bg-[var(--border-default)] animate-pulse" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="w-48 h-6 rounded-md bg-[var(--border-default)] animate-pulse" />
          <div className="w-80 max-w-full h-4 rounded-md bg-[var(--border-default)]/60 animate-pulse" />
        </div>

        <div className="flex-1 min-h-[350px] w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 flex flex-col gap-4 animate-pulse">
          <div className="w-1/3 h-4 rounded-md bg-[var(--border-default)]" />
          <div className="w-2/3 h-4 rounded-md bg-[var(--border-default)]/60" />
          <div className="w-1/2 h-4 rounded-md bg-[var(--border-default)]/40" />
          <div className="w-3/4 h-4 rounded-md bg-[var(--border-default)]/60" />
          <div className="w-2/5 h-4 rounded-md bg-[var(--border-default)]/40" />
        </div>
      </div>
    </div>
  );
}

export default memo(PageSkeleton);
