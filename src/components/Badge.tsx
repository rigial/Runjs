import { memo } from 'react';
import { TaggedResult } from '../utils/interface';
import { Tag as TagIcon } from 'lucide-react';

function Badge({ count, tag, setSearchTerm, searchTerm }: TaggedResult) {
  const isSelected = tag === searchTerm;

  return (
    <button
      type="button"
      onClick={() => setSearchTerm((prev) => (prev === tag ? '' : tag))}
      aria-pressed={isSelected}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-all duration-150 cursor-pointer ${
        isSelected
          ? 'bg-amber-500/15 border-amber-500/40 text-amber-600 dark:text-amber-400 shadow-xs'
          : 'bg-[var(--bg-surface)] border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)]'
      }`}
    >
      <TagIcon className="w-3 h-3 opacity-70" />
      <span>{tag}</span>
      <span
        className={`px-1.5 py-0.2 rounded-full text-[10px] ${
          isSelected
            ? 'bg-amber-500/25 text-amber-700 dark:text-amber-300 font-semibold'
            : 'bg-[var(--bg-surface-muted)] text-[var(--text-muted)]'
        }`}
      >
        {count}
      </span>
    </button>
  );
}

export default memo(Badge);
