import { memo, useEffect, useRef } from 'react';
import { RotateCcw, X, AlertTriangle } from 'lucide-react';

interface ResetInterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  totalTracked: number;
}

function ResetInterviewModal({
  isOpen,
  onClose,
  onConfirm,
  totalTracked,
}: ResetInterviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const timer = setTimeout(() => {
        cancelButtonRef.current?.focus();
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-interview-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-default)] shadow-2xl overflow-hidden transition-all duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)]">
          <div className="flex items-center gap-2.5 text-red-500">
            <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="reset-interview-modal-title"
                className="text-sm font-bold text-[var(--text-primary)]"
              >
                Reset Interview Progress
              </h2>
              <p className="text-[11px] text-[var(--text-muted)]">
                This action cannot be undone
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          <div className="rounded-xl bg-red-500/5 border border-red-500/15 p-3.5 space-y-1.5">
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Are you sure you want to reset all your interview mastery progress
              and bookmarks?
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              This will clear your{' '}
              <strong className="text-[var(--text-primary)]">
                {totalTracked} tracked questions
              </strong>{' '}
              and reset all mastery ratings back to unreviewed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              ref={cancelButtonRef}
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Progress</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ResetInterviewModal);
