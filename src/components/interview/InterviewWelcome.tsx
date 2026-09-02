import { memo, useMemo } from 'react';
import type {
  JSInterviewQuestion,
  InterviewMasteryMap,
  InterviewBookmarkMap,
} from '../../utils/interface';
import {
  Play,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  Sparkles,
  ArrowRight,
  Code2,
  Layers,
  FileCode,
  Server,
  BookOpen,
  ListFilter,
  Brain,
  RotateCcw,
} from 'lucide-react';

interface InterviewWelcomeProps {
  totalQuestions: number;
  questions: JSInterviewQuestion[];
  mastery: InterviewMasteryMap;
  bookmarks: InterviewBookmarkMap;
  onStartPractice: (startId?: number, category?: string) => void;
  onOpenListMode: () => void;
  onResetProgress: () => void;
}

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  JavaScript: Code2,
  React: Layers,
  TypeScript: FileCode,
  'Node.js': Server,
  Architecture: Brain,
};

function InterviewWelcome({
  totalQuestions,
  questions,
  mastery,
  bookmarks,
  onStartPractice,
  onOpenListMode,
  onResetProgress,
}: InterviewWelcomeProps) {
  const totalMastered = useMemo(() => {
    return Object.values(mastery).filter((s) => s === 'mastered').length;
  }, [mastery]);

  const totalReview = useMemo(() => {
    return Object.values(mastery).filter((s) => s === 'review').length;
  }, [mastery]);

  const totalBookmarks = useMemo(() => {
    return Object.values(bookmarks).filter(Boolean).length;
  }, [bookmarks]);

  const totalTracked = totalMastered + totalReview;
  const progressPct = Math.round((totalMastered / totalQuestions) * 100);

  // Find next unreviewed question
  const nextUnreviewed = questions.find((q, idx) => {
    const qId = q.id ?? idx + 1;
    return mastery[qId] === undefined;
  });
  const resumeId = nextUnreviewed ? (nextUnreviewed.id ?? 1) : 1;

  // Compute category statistics
  const categoryStats = useMemo(() => {
    const map = new Map<
      string,
      { total: number; mastered: number; review: number }
    >();

    questions.forEach((q, idx) => {
      const cat = q.category || 'JavaScript';
      const qId = q.id ?? idx + 1;
      const entry = map.get(cat) || { total: 0, mastered: 0, review: 0 };
      entry.total += 1;
      if (mastery[qId] === 'mastered') entry.mastered += 1;
      if (mastery[qId] === 'review') entry.review += 1;
      map.set(cat, entry);
    });

    return Array.from(map.entries()).map(([category, stats]) => ({
      category,
      ...stats,
      pct: Math.round((stats.mastered / stats.total) * 100),
      Icon: CATEGORY_ICONS[category] || Code2,
    }));
  }, [questions, mastery]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-150">
      {/* Hero Banner Card */}
      <div className="relative rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Interview Mastery</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Master Technical Interviews
            </h1>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Curated technical interview questions covering JavaScript, React,
              TypeScript, Node.js, and architecture. Practice with active
              recall, self-rate mastery, and test executable code in the
              sandbox.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onStartPractice(resumeId)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-xs sm:text-sm font-bold shadow-xs hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>
                  {totalTracked > 0
                    ? `Resume Practice (Q#${resumeId})`
                    : 'Start Practice (Q#1)'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenListMode}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] hover:bg-[var(--bg-surface-hover)] text-xs sm:text-sm font-semibold text-[var(--text-primary)] transition-all cursor-pointer"
              >
                <ListFilter className="w-4 h-4 text-amber-500" />
                <span>Study Guide (List View)</span>
              </button>

              {totalTracked > 0 && (
                <button
                  type="button"
                  onClick={onResetProgress}
                  title="Reset all tracked mastery progress"
                  className="p-2.5 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Overall Stats Ring / Progress Box */}
          <div className="w-full md:w-64 p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)] space-y-3 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                Overall Mastery
              </span>
              <span className="text-base font-extrabold text-amber-500">
                {progressPct}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-[var(--border-default)] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Micro stats */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-500 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{totalMastered}</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">
                  Mastered
                </span>
              </div>

              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center justify-center gap-1 text-[11px] text-amber-500 font-bold">
                  <AlertCircle className="w-3 h-3" />
                  <span>{totalReview}</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">
                  Review
                </span>
              </div>

              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="flex items-center justify-center gap-1 text-[11px] text-amber-400 font-bold">
                  <Bookmark className="w-3 h-3 fill-amber-400" />
                  <span>{totalBookmarks}</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">
                  Starred
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Explore by Technical Domain
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Jump into specific topic tracks and practice relevant questions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryStats.map((item) => {
            const { category, total, mastered, pct, Icon } = item;
            return (
              <div
                key={category}
                className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between shadow-xs hover:border-[var(--border-focus)] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">
                        {category}
                      </h3>
                    </div>

                    <span className="text-xs font-semibold text-[var(--text-muted)]">
                      {total} Qs
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                    {category === 'JavaScript' &&
                      'Closures, event loop, prototypes, hoisting, async/await, memory management & ES6+.'}
                    {category === 'React' &&
                      'Virtual DOM, Fiber, re-renders, useEffect, hooks, memoization & state management.'}
                    {category === 'Architecture' &&
                      'JWT auth, RBAC, 401 refresh interceptors, large-scale apps, and Spring Boot.'}
                    {category === 'TypeScript' &&
                      'Type vs interface, extends, union & intersection types, and index signatures.'}
                    {category === 'Node.js' &&
                      'Event loop phases, nextTick, setImmediate, Buffers, and EventEmitter.'}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">
                      {mastered} / {total} mastered
                    </span>
                    <span className="font-bold text-[var(--text-primary)]">
                      {pct}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[var(--bg-surface-muted)] overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartPractice(undefined, category)}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-muted)] hover:bg-amber-500 hover:text-black hover:border-amber-500 text-xs font-semibold text-[var(--text-primary)] transition-all cursor-pointer"
                  >
                    <span>Practice {category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Highlights Banner */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-2">
          <div className="flex items-center gap-2 text-amber-500">
            <Brain className="w-4 h-4" />
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Active Recall Mode
            </h4>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Formulate your response in your mind before revealing the answer.
            Tests indicate 2.5x better retention during live interviews.
          </p>
        </div>

        <div className="p-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-2">
          <div className="flex items-center gap-2 text-emerald-500">
            <Code2 className="w-4 h-4" />
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Live Playground Sandboxes
            </h4>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Every code sample includes direct links to run, inspect, and test
            live in the RunJS in-browser compiler and React sandbox.
          </p>
        </div>

        <div className="p-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-2">
          <div className="flex items-center gap-2 text-blue-500">
            <BookOpen className="w-4 h-4" />
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Spaced Repetition
            </h4>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Rate questions as 'Mastered' or 'Needs Review' to tailor your final
            preparation sessions before technical interview rounds.
          </p>
        </div>
      </section>
    </div>
  );
}

export default memo(InterviewWelcome);
