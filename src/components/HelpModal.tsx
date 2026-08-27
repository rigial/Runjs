import { useImperativeHandle, useRef } from 'react';
import { ModalRef } from '../utils/interface';
import { Keyboard, X } from 'lucide-react';

interface HelpModalProps {
  ref?: React.Ref<ModalRef>;
}

const shortcuts = [
  {
    keys: ['Ctrl / ⌘', 'R'],
    description: 'Execute and run the code in the active editor',
  },
  {
    keys: ['Shift', 'Alt', 'F'],
    description: 'Format active document using Prettier/Monaco',
  },
  {
    keys: ['Ctrl / ⌘', '+'],
    description: 'Increase editor font size',
  },
  {
    keys: ['Ctrl / ⌘', '-'],
    description: 'Decrease editor font size',
  },
  {
    keys: ['Ctrl / ⌘', 'S'],
    description: 'Download active playground code file',
  },
  {
    keys: ['Esc'],
    description: 'Close modals and popovers',
  },
];

const HelpModal = ({ ref }: HelpModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  const handleClose = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="rounded-xl w-full max-w-lg p-0 shadow-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-default)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/60 backdrop:backdrop-blur-xs text-[var(--text-primary)]"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          handleClose();
        }
      }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[var(--text-primary)]">
                Keyboard Shortcuts
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Boost your productivity with RunJS shortcuts
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="mt-4 divide-y divide-[var(--border-subtle)]">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2.5 text-xs"
            >
              <span className="text-[var(--text-secondary)]">
                {shortcut.description}
              </span>
              <div className="flex items-center gap-1">
                {shortcut.keys.map((key, keyIndex) => (
                  <kbd
                    key={keyIndex}
                    className="inline-flex items-center justify-center min-w-[24px] px-1.5 py-0.5 text-[11px] font-mono font-medium rounded border border-[var(--border-default)] bg-[var(--bg-surface-muted)] text-[var(--text-primary)] shadow-2xs"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end pt-4 mt-2 border-t border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-default)] text-[var(--text-primary)] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default HelpModal;
