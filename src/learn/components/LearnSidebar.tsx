import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { curriculum } from '../data/curriculum';
import { useLearnProgress } from '../hooks/useLearnProgress';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  BookOpen,
  X,
  Menu,
} from 'lucide-react';

interface LearnSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function LearnSidebar({ isOpen, onClose }: LearnSidebarProps) {
  const location = useLocation();
  const { getLessonProgress } = useLearnProgress();
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    // Auto-expand the topic that contains the current lesson
    const currentSlug = location.pathname.split('/').pop();
    const expanded = new Set<string>();
    for (const part of curriculum) {
      for (const topic of part.topics) {
        if (topic.lessonSlugs.includes(currentSlug ?? '')) {
          expanded.add(topic.slug);
        }
      }
    }
    return expanded;
  });

  function toggleTopic(topicSlug: string) {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicSlug)) {
        next.delete(topicSlug);
      } else {
        next.add(topicSlug);
      }
      return next;
    });
  }

  const currentLessonSlug = location.pathname.split('/').pop();

  const sidebarClasses = `
    fixed lg:sticky top-0 left-0 z-50 lg:z-auto
    h-screen lg:h-[calc(100vh-56px)]
    w-72 lg:w-64 xl:w-72
    bg-[var(--bg-surface)] lg:bg-transparent
    border-r border-[var(--border-default)]
    overflow-y-auto
    transition-transform duration-200 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    scrollbar-none
  `;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-default)] lg:hidden">
          <span className="text-sm font-semibold text-[var(--text-primary)]">
            JavaScript Curriculum
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Header (desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)]">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
            Curriculum
          </span>
        </div>

        {/* Topic Tree */}
        <nav className="p-2">
          {curriculum.map((part) => (
            <div key={part.slug} className="mb-3">
              {/* Part Header */}
              <div className="px-2 py-1.5 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Part {part.partNumber} — {part.title}
                </span>
              </div>

              {/* Topics */}
              {part.topics.map((topic) => {
                const isExpanded = expandedTopics.has(topic.slug);
                const completedCount = topic.lessonSlugs.filter(
                  (slug) => getLessonProgress(slug)?.isRead
                ).length;
                const totalCount = topic.lessonSlugs.length;
                const allDone = completedCount === totalCount && totalCount > 0;

                return (
                  <div key={topic.slug} className="mb-0.5">
                    {/* Topic toggle */}
                    <button
                      type="button"
                      onClick={() => toggleTopic(topic.slug)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left text-xs font-medium hover:bg-[var(--bg-surface-hover)] transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                      )}
                      <span
                        className={`flex-1 ${allDone ? 'text-emerald-500' : 'text-[var(--text-primary)]'}`}
                      >
                        {topic.title}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] tabular-nums">
                        {completedCount}/{totalCount}
                      </span>
                    </button>

                    {/* Lesson links */}
                    {isExpanded && (
                      <div className="ml-4 pl-2 border-l border-[var(--border-subtle)]">
                        {topic.lessonSlugs.map((slug) => {
                          const isActive = currentLessonSlug === slug;
                          const progress = getLessonProgress(slug);
                          const isComplete = progress?.isRead ?? false;

                          return (
                            <Link
                              key={slug}
                              to={`/learn/${slug}`}
                              onClick={onClose}
                              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] transition-colors ${
                                isActive
                                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                                  : isComplete
                                    ? 'text-emerald-600 dark:text-emerald-400 hover:bg-[var(--bg-surface-hover)]'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                              }`}
                            >
                              {isComplete ? (
                                <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-500" />
                              ) : (
                                <Circle className="w-3 h-3 shrink-0 text-[var(--text-muted)]" />
                              )}
                              <span className="truncate">
                                {slug
                                  .split('-')
                                  .map(
                                    (w) =>
                                      w.charAt(0).toUpperCase() + w.slice(1)
                                  )
                                  .join(' ')}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

/** Mobile sidebar toggle button */
export function SidebarToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden p-1.5 rounded-md border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
      aria-label="Toggle curriculum sidebar"
    >
      <Menu className="w-4 h-4" />
    </button>
  );
}

export default memo(LearnSidebar);
