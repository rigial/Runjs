import { memo } from 'react';
import { Problem } from '../../problem-engine/types';
import {
  getProblemStats,
  getAllProblemStates,
} from '../../problem-engine/storage';
import { Sparkles, Trophy, Star, Shuffle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

interface ProblemStatsBannerProps {
  problems: Problem[];
  onPickRandom?: () => void;
}

function ProblemStatsBanner({
  problems,
  onPickRandom,
}: ProblemStatsBannerProps) {
  const stats = getProblemStats(problems);

  const easyPercent =
    stats.easyTotal > 0
      ? Math.round((stats.easySolved / stats.easyTotal) * 100)
      : 0;
  const mediumPercent =
    stats.mediumTotal > 0
      ? Math.round((stats.mediumSolved / stats.mediumTotal) * 100)
      : 0;
  const hardPercent =
    stats.hardTotal > 0
      ? Math.round((stats.hardSolved / stats.hardTotal) * 100)
      : 0;

  // Find next unsolved problem for quick start
  const allStates = getAllProblemStates();
  const nextUnsolved =
    problems.find((p) => !allStates[p.slug]?.isSolved) || problems[0];

  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 sm:p-6 shadow-xs transition-all mb-6">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
        {/* Left: Overall Completion Circle & Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 shrink-0">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-black text-amber-500 leading-none">
                {stats.solved}
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-[var(--text-secondary)] mt-1">
                / {stats.total} Solved
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Your JavaScript Progress
              </h2>
              {stats.solved > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  {stats.percentage}% Done
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-md">
              Master JavaScript fundamentals, algorithms, closures, and async
              patterns with instant in-browser test feedback.
            </p>

            <div className="flex items-center gap-3 mt-2 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {stats.starredCount} Favorited
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                {stats.total - stats.solved} Remaining
              </span>
            </div>
          </div>
        </div>

        {/* Middle: Difficulty Breakdown Progress Bars */}
        <div className="flex-1 max-w-md grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {/* Easy */}
          <div className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-app)]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-emerald-500">Easy</span>
              <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                {stats.easySolved}/{stats.easyTotal}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[var(--border-default)] overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${easyPercent}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-app)]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-amber-500">Medium</span>
              <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                {stats.mediumSolved}/{stats.mediumTotal}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[var(--border-default)] overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${mediumPercent}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-app)]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-rose-500">Hard</span>
              <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                {stats.hardSolved}/{stats.hardTotal}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[var(--border-default)] overflow-hidden">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-500"
                style={{ width: `${hardPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex flex-col w-full sm:w-auto items-stretch justify-center gap-2 shrink-0">
          {nextUnsolved && (
            <Link
              to={`/problems/${nextUnsolved.slug}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-xs font-semibold shadow-xs transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Continue Solving</span>
            </Link>
          )}

          {onPickRandom && (
            <button
              type="button"
              onClick={onPickRandom}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Pick Random</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProblemStatsBanner);
