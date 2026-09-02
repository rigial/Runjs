import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import LunaConsole from 'luna-console';
import '../../../utils/lunaStyles';
import useTheme from '../../../hook/useTheme';
import { Terminal as ConsoleIcon, Trash2, Search } from 'lucide-react';

export interface IdeConsoleRef {
  log: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  clear: () => void;
}

interface IdeConsoleProps {
  className?: string;
  onClear?: () => void;
}

export const IdeConsole = forwardRef<IdeConsoleRef, IdeConsoleProps>(
  function IdeConsole({ className = '', onClear }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lunaConsoleRef = useRef<LunaConsole | null>(null);
    const { resolvedTheme } = useTheme();

    const [filterLevel, setFilterLevel] = useState<
      'all' | 'error' | 'warn' | 'info' | 'log'
    >('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [counts, setCounts] = useState({ error: 0, warn: 0 });

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

    // Theme sync
    useEffect(() => {
      if (lunaConsoleRef.current) {
        lunaConsoleRef.current.setOption(
          'theme',
          resolvedTheme === 'dark' ? 'dark' : 'light'
        );
      }
    }, [resolvedTheme]);

    // Filter & search sync
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
        lunaConsoleRef.current?.log(...args);
      },
      info: (...args: unknown[]) => {
        lunaConsoleRef.current?.info(...args);
      },
      warn: (...args: unknown[]) => {
        setCounts((prev) => ({ ...prev, warn: prev.warn + 1 }));
        lunaConsoleRef.current?.warn(...args);
      },
      error: (...args: unknown[]) => {
        setCounts((prev) => ({ ...prev, error: prev.error + 1 }));
        lunaConsoleRef.current?.error(...args);
      },
      clear: () => {
        lunaConsoleRef.current?.clear();
        setCounts({ error: 0, warn: 0 });
      },
    }));

    const handleClear = () => {
      lunaConsoleRef.current?.clear();
      setCounts({ error: 0, warn: 0 });
      onClear?.();
    };

    return (
      <div
        className={`h-full w-full flex flex-col bg-[var(--bg-app)] border-t border-[var(--border-default)] ${className}`}
      >
        {/* Console Header Toolbar */}
        <div className="h-8 px-3 flex items-center justify-between bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0 text-xs font-medium">
          {/* Left: Filter Buttons */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-semibold shadow-2xs">
              <ConsoleIcon className="w-3.5 h-3.5 text-cyan-500" />
              <span>Console</span>
            </div>

            <div className="h-3.5 w-px bg-[var(--border-default)] mx-1" />

            {(
              [
                { id: 'all', label: 'All' },
                {
                  id: 'error',
                  label: 'Errors',
                  count: counts.error,
                  color: 'text-red-500',
                },
                {
                  id: 'warn',
                  label: 'Warnings',
                  count: counts.warn,
                  color: 'text-amber-500',
                },
                { id: 'info', label: 'Info' },
                { id: 'log', label: 'Logs' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterLevel(tab.id)}
                className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-colors ${
                  filterLevel === tab.id
                    ? 'bg-[var(--bg-surface-hover)] text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{tab.label}</span>
                {'count' in tab && tab.count > 0 && (
                  <span
                    className={`px-1 rounded-full text-[10px] font-mono font-bold ${tab.color}`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right: Search & Actions */}
          <div className="flex items-center gap-1.5">
            {/* Search Input */}
            <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-[var(--bg-surface-muted)] border border-[var(--border-default)] text-[11px]">
              <Search className="w-3 h-3 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter logs..."
                className="bg-transparent outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] w-24 text-[11px]"
              />
            </div>

            <button
              type="button"
              onClick={handleClear}
              title="Clear Console"
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>
        </div>

        {/* Luna Console Output Container */}
        <div
          ref={containerRef}
          className="flex-1 w-full p-2 bg-[var(--bg-app)] overflow-auto luna-console-container"
        />
      </div>
    );
  }
);
