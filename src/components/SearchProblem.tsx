import { memo } from 'react';
import { Search } from 'lucide-react';

function SearchProblem() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
        <Search className="w-4 h-4" />
      </div>

      <label htmlFor="Search" className="sr-only">
        Search for problem by title or tag
      </label>
      <input
        type="text"
        id="Search"
        placeholder="Search for problem by title or tag..."
        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 focus:border-[var(--border-focus)] transition-all shadow-xs"
      />
    </div>
  );
}

export default memo(SearchProblem);
