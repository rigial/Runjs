import { memo, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ImportNotificationToastProps {
  source: string | null;
  onDismiss: () => void;
}

function ImportNotificationToast({
  source,
  onDismiss,
}: ImportNotificationToastProps) {
  useEffect(() => {
    if (!source) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 4000);
    return () => clearTimeout(timer);
  }, [source, onDismiss]);

  if (!source) return null;

  return (
    <aside
      aria-label="Code loaded notification"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-amber-500/30 bg-[var(--bg-surface-elevated)] shadow-2xl text-xs text-[var(--text-primary)] animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
      <div className="flex flex-col">
        <span className="font-semibold text-xs text-[var(--text-primary)]">
          Code Loaded Successfully
        </span>
        <span className="text-[11px] text-[var(--text-secondary)]">
          Transferred from {source}
        </span>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        title="Dismiss notification"
        className="ml-2 p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}

export default memo(ImportNotificationToast);
