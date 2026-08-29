import React, { useEffect, useRef } from 'react';

export interface ContextMenuItem {
  id?: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  action: () => void;
  danger?: boolean;
  divider?: boolean;
}

interface ContextMenuProps {
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
}

export function ContextMenu({ x, y, items, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Constrain inside viewport
  const adjustedX = Math.min(x, window.innerWidth - 200);
  const adjustedY = Math.min(y, window.innerHeight - 240);

  return (
    <div
      ref={menuRef}
      style={{ top: `${adjustedY}px`, left: `${adjustedX}px` }}
      className="fixed z-50 min-w-[170px] rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] p-1 text-xs shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100 select-none"
    >
      {items.map((item, idx) => {
        if (item.divider) {
          return (
            <div
              key={idx}
              className="my-1 border-t border-[var(--border-subtle)]"
            />
          );
        }

        return (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              item.action();
              onClose();
            }}
            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left transition-colors cursor-pointer ${
              item.danger
                ? 'text-red-500 hover:bg-red-500/10'
                : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            <div className="flex items-center gap-2">
              {item.icon && (
                <span className="w-3.5 h-3.5 flex items-center justify-center opacity-70">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </div>
            {item.shortcut && (
              <span className="text-[10px] text-[var(--text-muted)] font-mono">
                {item.shortcut}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
