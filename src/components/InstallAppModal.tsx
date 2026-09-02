import { memo, useEffect } from 'react';
import { Download, X, Zap, Monitor, Cpu } from 'lucide-react';

export interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: () => void;
  isInstalling?: boolean;
}

function InstallAppModal({
  isOpen,
  onClose,
  onInstall,
  isInstalling = false,
}: InstallAppModalProps) {
  // Handle Escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-install-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 sm:p-6 shadow-2xl space-y-4 sm:space-y-5 animate-in zoom-in-95 duration-150 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close install dialog"
          className="absolute right-4 top-4 p-1.5 rounded-lg border border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with App Icon and Title */}
        <div className="flex items-center gap-3.5 pr-8">
          <img
            src="/RunJS-192.png"
            alt="RunJS App Icon"
            width={64}
            height={64}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md border border-amber-500/30 p-1 bg-amber-500/10 object-contain shrink-0"
          />
          <div>
            <h2
              id="pwa-install-title"
              className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight"
            >
              Install RunJS
            </h2>
            <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
              Official Desktop App
            </span>
          </div>
        </div>

        {/* Message */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          Install RunJS as an app for a faster, more convenient coding
          experience.
        </p>

        {/* Feature Benefits List */}
        <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] space-y-2">
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Instant launch from Dock, Taskbar, or Home Screen</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <Monitor className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Distraction-free standalone application window</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <Cpu className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Fast Monaco code editor with offline readiness</span>
          </div>
        </div>

        {/* Action Buttons: Cancel and Install App */}
        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 sm:py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onInstall}
            disabled={isInstalling}
            className="flex items-center justify-center gap-2 px-5 py-2 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4 text-black shrink-0" />
            <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(InstallAppModal);
