import { memo } from 'react';
import { IAppLoading } from '../utils/interface';
import { Code2 } from 'lucide-react';

function AppLoading({ freeLoading }: IAppLoading) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`${
        freeLoading ? 'h-full' : 'min-h-screen'
      } w-full flex flex-col items-center justify-center bg-[var(--bg-app)] text-[var(--text-primary)] p-4 transition-colors`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-black shadow-md animate-pulse">
          <Code2 className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
          <span
            className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce"
            style={{ animationDelay: '0.15s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          Loading RunJS...
        </span>
      </div>
    </div>
  );
}

export default memo(AppLoading);
