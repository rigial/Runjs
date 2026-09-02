import { memo, useEffect, useRef, useState, useMemo } from 'react';
import type {
  JSInterviewQuestion,
  InterviewMasteryMap,
  InterviewBookmarkMap,
} from '../../utils/interface';
import {
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Bookmark,
  Search,
  BookOpen,
} from 'lucide-react';

interface InterviewNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: JSInterviewQuestion[];
  currentIndex: number;
  onSelectQuestion: (index: number) => void;
  mastery: InterviewMasteryMap;
  bookmarks: InterviewBookmarkMap;
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

type StatusFilter = 'all' | 'mastered' | 'review' | 'bookmarked' | 'unreviewed';

function InterviewNavigatorModal({
  isOpen,
  onClose,
  questions,
  currentIndex,
  onSelectQuestion,
  mastery,
  bookmarks,
  activeCategory,
  onCategoryChange,
}: InterviewNavigatorModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const [modalSearch, setModalSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onCloseRef.current();
          return;
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    questions.forEach((q) => {
      if (q.category) set.add(q.category);
    });
    return ['All', ...Array.from(set)];
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q, idx) => {
      const qId = q.id ?? idx + 1;
      const qStatus = mastery[qId];
      const isBookmarked = !!bookmarks[qId];

      // Category filter
      if (activeCategory !== 'All' && q.category !== activeCategory) {
        return false;
      }

      // Status filter
      if (statusFilter === 'mastered' && qStatus !== 'mastered') return false;
      if (statusFilter === 'review' && qStatus !== 'review') return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;
      if (statusFilter === 'unreviewed' && qStatus !== undefined) return false;

      // Search query
      if (modalSearch.trim()) {
        const query = modalSearch.toLowerCase();
        const matchesText =
          q.question.toLowerCase().includes(query) ||
          q.tags?.some((t) => t.toLowerCase().includes(query)) ||
          q.answer.some((a) =>
            a.data.some((d) => d.toLowerCase().includes(query))
          );
        if (!matchesText) return false;
      }

      return true;
    });
  }, [
    questions,
    activeCategory,
    statusFilter,
    modalSearch,
    mastery,
    bookmarks,
  ]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  const currentQId = currentQ ? (currentQ.id ?? currentIndex + 1) : 1;

  const totalMastered = Object.values(mastery).filter(
    (s) => s === 'mastered'
  ).length;
  const totalReview = Object.values(mastery).filter(
    (s) => s === 'review'
  ).length;
  const totalBookmarks = Object.values(bookmarks).filter(Boolean).length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="interview-navigator-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] shrink-0">
          <div>
            <h2
              id="interview-navigator-title"
              className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Question Navigator</span>
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Jump to any of the {questions.length} technical interview
              questions
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close question navigator"
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Search, Category & Status Pills */}
        <div className="px-5 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] space-y-2.5 shrink-0">
          {/* Search bar inside modal */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              ref={searchInputRef}
              type="text"
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
              placeholder="Search by topic, keyword, or concept (e.g. closure, fiber, jwt)..."
              className="w-full pl-8 pr-7 py-1.5 text-xs rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-amber-500/50"
            />
            {modalSearch && (
              <button
                type="button"
                onClick={() => setModalSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Category selection */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onCategoryChange(cat)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 font-bold shadow-2xs'
                      : 'border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status pills */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'mastered', label: `Mastered (${totalMastered})` },
                  { id: 'review', label: `Review (${totalReview})` },
                  { id: 'bookmarked', label: `Starred (${totalBookmarks})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                    statusFilter === tab.id
                      ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-bold border border-[var(--border-focus)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Grid */}
        <div className="flex-1 overflow-y-auto p-5">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center text-xs text-[var(--text-muted)]">
              No questions found matching your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {filteredQuestions.map((q) => {
                const originalIndex = questions.indexOf(q);
                const qId = q.id ?? originalIndex + 1;
                const isSelected = qId === currentQId;
                const status = mastery[qId];
                const isBookmarked = !!bookmarks[qId];

                let borderStyle = 'border-[var(--border-default)]';
                let bgStyle = 'bg-[var(--bg-surface)]';

                if (isSelected) {
                  borderStyle = 'border-amber-500 ring-2 ring-amber-500/20';
                  bgStyle = 'bg-amber-500/10';
                } else if (status === 'mastered') {
                  borderStyle = 'border-emerald-500/40';
                  bgStyle = 'bg-emerald-500/5 hover:bg-emerald-500/10';
                } else if (status === 'review') {
                  borderStyle = 'border-amber-500/40';
                  bgStyle = 'bg-amber-500/5 hover:bg-amber-500/10';
                } else {
                  bgStyle = 'hover:bg-[var(--bg-surface-hover)]';
                }

                return (
                  <button
                    key={qId}
                    type="button"
                    onClick={() => {
                      onSelectQuestion(originalIndex);
                      onClose();
                    }}
                    className={`group relative p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${borderStyle} ${bgStyle}`}
                  >
                    <div className="flex items-center justify-between gap-1 w-full mb-1">
                      <span className="text-xs font-bold text-[var(--text-primary)]">
                        #{qId}
                      </span>

                      <div className="flex items-center gap-1">
                        {isBookmarked && (
                          <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500" />
                        )}
                        {status === 'mastered' && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                        {status === 'review' && (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                        )}
                      </div>
                    </div>

                    <p className="text-[11px] font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] line-clamp-2 leading-snug">
                      {q.question}
                    </p>

                    <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                      <span className="truncate max-w-[80px]">
                        {q.category || 'JavaScript'}
                      </span>
                      <span
                        className={`uppercase font-semibold text-[9px] ${
                          q.difficulty === 'easy'
                            ? 'text-emerald-500'
                            : q.difficulty === 'hard'
                              ? 'text-red-500'
                              : 'text-amber-500'
                        }`}
                      >
                        {q.difficulty || 'med'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        <div className="px-5 py-3 border-t border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs text-[var(--text-muted)] shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {totalMastered} Mastered
            </span>
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {totalReview} Need Review
            </span>
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <HelpCircle className="w-3.5 h-3.5" />
              {questions.length - (totalMastered + totalReview)} Unreviewed
            </span>
          </div>

          <span className="hidden sm:inline text-[11px]">
            Showing {filteredQuestions.length} of {questions.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(InterviewNavigatorModal);
