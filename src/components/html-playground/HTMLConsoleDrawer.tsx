import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import LunaConsole from 'luna-console';
import useTheme from '../../hook/useTheme';
import {
  Terminal as ConsoleIcon,
  Trash2,
  Search,
  ChevronUp,
  ChevronDown,
  Maximize2,
  Minimize2,
} from 'lucide-react';

export interface HTMLConsoleRef {
  log: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  clear: () => void;
  toggleOpen: () => void;
}

interface HTMLConsoleDrawerProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
  onClear?: () => void;
  isMaximized?: boolean;
  onToggleMaximize?: () => void;
}

type FilterLevel = 'all' | 'error' | 'warn' | 'info' | 'log';

export const HTMLConsoleDrawer = forwardRef<
  HTMLConsoleRef,
  HTMLConsoleDrawerProps
>(function HTMLConsoleDrawer(
  {
    className = '',
    isOpen,
    onToggle,
    onClear,
    isMaximized = false,
    onToggleMaximize,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lunaConsoleRef = useRef<LunaConsole | null>(null);
  const { resolvedTheme } = useTheme();

  const [filterLevel, setFilterLevel] = useState<FilterLevel>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [counts, setCounts] = useState({ error: 0, warn: 0, total: 0 });

  // Initialize LunaConsole
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';
    const luna = new LunaConsole(containerRef.current, {
      theme: resolvedTheme === 'dark' ? 'dark' : 'light',
      filter: filterLevel === 'all' ? undefined : filterLevel,
    });

    lunaConsoleRef.current = luna;

    return () => {
      luna.destroy();
      lunaConsoleRef.current = null;
    };
  }, []);

  // Sync theme
  useEffect(() => {
    if (lunaConsoleRef.current) {
      lunaConsoleRef.current.setOption(
        'theme',
        resolvedTheme === 'dark' ? 'dark' : 'light'
      );
    }
  }, [resolvedTheme]);

  // Sync filter & search
  useEffect(() => {
    if (lunaConsoleRef.current) {
      lunaConsoleRef.current.setOption(
        'filter',
        searchTerm || (filterLevel === 'all' ? undefined : filterLevel)
      );
    }
  }, [filterLevel, searchTerm]);

  useImperativeHandle(ref, () => ({
    log: (...args: unknown[]) => {
      setCounts((prev) => ({ ...prev, total: prev.total + 1 }));
      lunaConsoleRef.current?.log(...args);
    },
    info: (...args: unknown[]) => {
      setCounts((prev) => ({ ...prev, total: prev.total + 1 }));
      lunaConsoleRef.current?.info(...args);
    },
    warn: (...args: unknown[]) => {
      setCounts((prev) => ({
        ...prev,
        warn: prev.warn + 1,
        total: prev.total + 1,
      }));
      lunaConsoleRef.current?.warn(...args);
    },
    error: (...args: unknown[]) => {
      setCounts((prev) => ({
        ...prev,
        error: prev.error + 1,
        total: prev.total + 1,
      }));
      lunaConsoleRef.current?.error(...args);
    },
    clear: () => {
      lunaConsoleRef.current?.clear();
      setCounts({ error: 0, warn: 0, total: 0 });
    },
    toggleOpen: () => {
      onToggle();
    },
  }));

  const handleClear = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    lunaConsoleRef.current?.clear();
    setCounts({ error: 0, warn: 0, total: 0 });
    onClear?.();
  };

  return (
    <div
      className={`relative flex flex-col bg-[var(--bg-app)] h-full w-full overflow-hidden ${className}`}
    >
      {/* Console Bar / Header */}
      <div
        onClick={onToggle}
        className="h-8 px-3 flex items-center justify-between bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0 text-xs font-medium cursor-pointer hover:bg-[var(--bg-surface-hover)] transition-colors"
      >
        {/* Left: Console Title & Badges */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
            <ConsoleIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>Console</span>
          </div>

          {counts.error > 0 && (
            <span className="flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {counts.error} error{counts.error > 1 ? 's' : ''}
            </span>
          )}

          {counts.warn > 0 && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              {counts.warn} warning{counts.warn > 1 ? 's' : ''}
            </span>
          )}

          {isOpen && (
            <div
              className="hidden sm:flex items-center gap-1 ml-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-3 w-px bg-[var(--border-default)] mx-1" />
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'error', label: 'Errors' },
                  { id: 'warn', label: 'Warn' },
                  { id: 'info', label: 'Info' },
                  { id: 'log', label: 'Logs' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterLevel(tab.id)}
                  className={`px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                    filterLevel === tab.id
                      ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div
          className="flex items-center gap-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          {isOpen && (
            <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-[var(--bg-surface-muted)] border border-[var(--border-default)] text-[10px]">
              <Search className="w-3 h-3 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter logs..."
                className="bg-transparent outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] w-20 text-[10px]"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleClear}
            title="Clear Console"
            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] transition-colors"
          >
            <Trash2 className="w-3 h-3" />
            <span className="hidden sm:inline">Clear</span>
          </button>

          {onToggleMaximize && isOpen && (
            <button
              type="button"
              onClick={onToggleMaximize}
              title={isMaximized ? 'Restore Console' : 'Maximize Console'}
              className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] transition-colors"
            >
              {isMaximized ? (
                <Minimize2 className="w-3 h-3" />
              ) : (
                <Maximize2 className="w-3 h-3" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={onToggle}
            title={isOpen ? 'Collapse Console' : 'Expand Console'}
            className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] transition-colors"
          >
            {isOpen ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Console Output Body */}
      <div
        ref={containerRef}
        className="flex-1 min-h-0 w-full relative overflow-y-auto p-1 bg-[var(--bg-app)] font-mono text-xs luna-console-container"
      />
    </div>
  );
});
