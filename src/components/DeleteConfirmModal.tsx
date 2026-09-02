import { memo, useEffect, useRef, useState } from 'react';
import { Trash2, X, AlertTriangle } from 'lucide-react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  projectName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteConfirmModal({
  isOpen,
  projectName,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) {
  const [confirmInput, setConfirmInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const isMatched = confirmInput.trim().toLowerCase() === 'delete';

  useEffect(() => {
    if (isOpen) {
      setConfirmInput('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isMatched) {
      onConfirm();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-confirm-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-default)] shadow-2xl overflow-hidden transition-all duration-200"
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
                id="delete-confirm-modal-title"
                className="text-sm font-bold text-[var(--text-primary)]"
              >
                Delete Playground Permanently
              </h2>
              <p className="text-[11px] text-[var(--text-muted)]">
                This action cannot be undone
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="rounded-lg bg-red-500/5 border border-red-500/15 p-3.5 space-y-1.5">
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Are you sure you want to permanently delete{' '}
              <span className="font-semibold text-[var(--text-primary)]">
                &ldquo;{projectName || 'this playground'}&rdquo;
              </span>
              ? All files and code will be permanently removed from IndexedDB.
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="delete-confirm-input"
              className="block text-xs font-medium text-[var(--text-secondary)]"
            >
              Please type{' '}
              <span className="font-mono font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                delete
              </span>{' '}
              to confirm:
            </label>
            <input
              id="delete-confirm-input"
              ref={inputRef}
              type="text"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              placeholder="Type delete"
              autoComplete="off"
              spellCheck="false"
              className="w-full px-3.5 py-2 text-sm font-mono rounded-lg bg-[var(--bg-app)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[var(--border-default)]">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-[var(--bg-surface-hover)] hover:bg-[var(--bg-surface-active)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-default)] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isMatched}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all duration-150 ${
                isMatched
                  ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-red-500/30 text-white/50 cursor-not-allowed border border-red-500/20'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete Forever</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(DeleteConfirmModal);
