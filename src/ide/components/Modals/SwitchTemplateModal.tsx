import { memo, useEffect, useRef } from 'react';
import { ArrowRightLeft, X, AlertTriangle } from 'lucide-react';
import { ProjectTemplate } from '../../templates/defaultTemplates';

interface SwitchTemplateModalProps {
  isOpen: boolean;
  targetTemplate: ProjectTemplate | null;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
}

function SwitchTemplateModal({
  isOpen,
  targetTemplate,
  onClose,
  onConfirm,
}: SwitchTemplateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        cancelButtonRef.current?.focus();
      }, 0);

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

  if (!isOpen || !targetTemplate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="switch-template-modal-title"
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
          <div className="flex items-center gap-2.5 text-cyan-500">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="switch-template-modal-title"
                className="text-sm font-bold text-[var(--text-primary)]"
              >
                Switch Project Template
              </h2>
              <p className="text-[11px] text-[var(--text-muted)]">
                Change playground runtime template
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Switch to{' '}
            <span className="font-semibold text-[var(--text-primary)]">
              "{targetTemplate.name}"
            </span>
            ?
          </p>

          {/* Template Details Card */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-default)]">
            <div className="text-2xl select-none">{targetTemplate.icon}</div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-[var(--text-primary)]">
                {targetTemplate.name}
              </div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-relaxed">
                {targetTemplate.description}
              </div>
            </div>
          </div>

          {/* Warning Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs leading-relaxed">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              Current unsaved changes and modified files will be replaced with
              the new template files. This action cannot be undone.
            </div>
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
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-black shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Switch Template</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(SwitchTemplateModal);
