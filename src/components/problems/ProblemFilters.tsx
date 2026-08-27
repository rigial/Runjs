import { memo } from 'react';
import { Difficulty, ProblemFilterStatus } from '../../problem-engine/types';
import { Search, X, Star, CheckCircle, RotateCcw } from 'lucide-react';

interface ProblemFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  difficulty: 'all' | Difficulty;
  onDifficultyChange: (diff: 'all' | Difficulty) => void;
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  status: ProblemFilterStatus;
  onStatusChange: (status: ProblemFilterStatus) => void;
  availableTopics: string[];
  totalCounts: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
    solved: number;
    starred: number;
  };
  onResetFilters: () => void;
}

function ProblemFilters({
  search,
  onSearchChange,
  difficulty,
  onDifficultyChange,
  selectedTopic,
  onTopicChange,
  status,
  onStatusChange,
  availableTopics,
  totalCounts,
  onResetFilters,
}: ProblemFiltersProps) {
  const isFiltered =
    search !== '' ||
    difficulty !== 'all' ||
    selectedTopic !== 'all' ||
    status !== 'all';

  return (
    <div className="space-y-4 my-6">
      {/* Top Search and Quick Status Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search problems by title, topic, or keyword..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/30 focus:border-[var(--border-focus)] transition-all shadow-xs"
          />
          {search && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Difficulty / Status Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {/* All */}
          <button
            type="button"
            onClick={() => {
              onDifficultyChange('all');
              onStatusChange('all');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              difficulty === 'all' && status === 'all'
                ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-xs border border-[var(--border-default)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            All Problems
            <span className="ml-1.5 text-[10px] opacity-70">
              ({totalCounts.all})
            </span>
          </button>

          {/* Easy */}
          <button
            type="button"
            onClick={() => {
              onDifficultyChange('easy');
              onStatusChange('all');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              difficulty === 'easy' && status === 'all'
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                : 'text-[var(--text-secondary)] hover:text-emerald-500 hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            Easy
            <span className="ml-1.5 text-[10px] opacity-70">
              ({totalCounts.easy})
            </span>
          </button>

          {/* Medium */}
          <button
            type="button"
            onClick={() => {
              onDifficultyChange('medium');
              onStatusChange('all');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              difficulty === 'medium' && status === 'all'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                : 'text-[var(--text-secondary)] hover:text-amber-500 hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            Medium
            <span className="ml-1.5 text-[10px] opacity-70">
              ({totalCounts.medium})
            </span>
          </button>

          {/* Hard */}
          <button
            type="button"
            onClick={() => {
              onDifficultyChange('hard');
              onStatusChange('all');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              difficulty === 'hard' && status === 'all'
                ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                : 'text-[var(--text-secondary)] hover:text-rose-500 hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            Hard
            <span className="ml-1.5 text-[10px] opacity-70">
              ({totalCounts.hard})
            </span>
          </button>

          {/* Solved */}
          <button
            type="button"
            onClick={() =>
              onStatusChange(status === 'solved' ? 'all' : 'solved')
            }
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              status === 'solved'
                ? 'bg-emerald-500 text-black shadow-xs font-bold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Solved</span>
            <span className="text-[10px] opacity-80">
              ({totalCounts.solved})
            </span>
          </button>

          {/* Starred */}
          <button
            type="button"
            onClick={() =>
              onStatusChange(status === 'starred' ? 'all' : 'starred')
            }
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              status === 'starred'
                ? 'bg-amber-500 text-black shadow-xs font-bold'
                : 'text-[var(--text-secondary)] hover:text-amber-500 hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Starred</span>
            <span className="text-[10px] opacity-80">
              ({totalCounts.starred})
            </span>
          </button>
        </div>
      </div>

      {/* Topic Tags Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
        <span className="text-[var(--text-muted)] font-medium text-[11px] uppercase tracking-wider mr-1 shrink-0">
          Topics:
        </span>

        <button
          type="button"
          onClick={() => onTopicChange('all')}
          className={`px-2.5 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${
            selectedTopic === 'all'
              ? 'bg-amber-500 text-black font-semibold shadow-xs'
              : 'bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
          }`}
        >
          All Topics
        </button>

        {availableTopics.map((topic) => {
          const isSelected = selectedTopic === topic;
          return (
            <button
              key={topic}
              type="button"
              onClick={() => onTopicChange(isSelected ? 'all' : topic)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${
                isSelected
                  ? 'bg-amber-500 text-black font-semibold shadow-xs'
                  : 'bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
              }`}
            >
              {topic}
            </button>
          );
        })}

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-rose-500 hover:bg-rose-500/10 border border-rose-500/20 shrink-0 ml-auto transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(ProblemFilters);
