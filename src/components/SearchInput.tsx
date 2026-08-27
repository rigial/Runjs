import { memo } from 'react';
import { Link } from 'react-router';
import { ISearchInput } from '../utils/interface';
import { Search, Plus, Star, Trash2, X } from 'lucide-react';

function SearchInput({
  showFavourite,
  isFavouriteSelected,
  dialogRef,
  onInputChange,
  searchTerm,
  setIsFavouriteSelected,
}: ISearchInput) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between my-4">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <label htmlFor="search-playgrounds" className="sr-only">
          Search playgrounds
        </label>

        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
          <Search className="w-4 h-4" />
        </div>

        <input
          id="search-playgrounds"
          type="text"
          value={searchTerm}
          onChange={(e) => onInputChange(e.target.value.toLowerCase())}
          placeholder="Search by file name or tag..."
          className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 focus:border-[var(--border-focus)] transition-all shadow-xs"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => onInputChange('')}
            className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Favorite Filter Toggle */}
        {!showFavourite && (
          <button
            type="button"
            title={
              isFavouriteSelected ? 'Show all playgrounds' : 'Show starred only'
            }
            onClick={() => setIsFavouriteSelected((prev) => !prev)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 ${
              isFavouriteSelected
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-600 dark:text-amber-400 font-semibold shadow-xs'
                : 'bg-[var(--bg-surface)] border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <Star
              className={`w-4 h-4 ${
                isFavouriteSelected
                  ? 'fill-amber-500 text-amber-500'
                  : 'text-[var(--text-secondary)]'
              }`}
            />
            <span className="hidden sm:inline">
              {isFavouriteSelected ? 'Starred' : 'Favorites'}
            </span>
          </button>
        )}

        {/* Bin Link */}
        <Link
          to="/bin"
          title="Recently deleted items"
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline">Bin</span>
        </Link>

        {/* Create New Playground Button */}
        <button
          type="button"
          onClick={() => dialogRef?.current?.open()}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black shadow-sm transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>New Playground</span>
        </button>
      </div>
    </div>
  );
}

export default memo(SearchInput);
