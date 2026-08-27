import { memo, useEffect, useRef } from 'react';
import { RotateCcw, X, AlertTriangle } from 'lucide-react';

interface ResetCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  problemTitle: string;
}

function ResetCodeModal({
  isOpen,
  onClose,
  onConfirm,
  problemTitle,
}: ResetCodeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      // Focus cancel button on open
      setTimeout(() => {
        cancelButtonRef.current?.focus();
      }, 0);

      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
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
      }

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl overflow-hidden transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-default)] bg-[var(--bg-app)]/50">
          <div className="flex items-center gap-2.5 text-amber-500">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2
              id="reset-modal-title"
              className="text-sm font-bold text-[var(--text-primary)]"
            >
              Reset Code to Default
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Are you sure you want to reset your solution for{' '}
            <strong className="text-[var(--text-primary)] font-semibold">
              &ldquo;{problemTitle}&rdquo;
            </strong>
            ?
          </p>
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">
            ⚠️ This will discard all your custom code changes and restore the
            original starter template. This action cannot be undone.
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-end gap-2.5 px-5 py-4 border-t border-[var(--border-default)] bg-[var(--bg-app)]/50">
          <button
            ref={cancelButtonRef}
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-default)] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ResetCodeModal);
