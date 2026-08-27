import { memo } from 'react';
import { ITerminal } from '../utils/interface';
import { Terminal as TerminalIcon, Trash2 } from 'lucide-react';

function Terminal({ consoleRef, clearTerminal }: ITerminal) {
  return (
    <section className="h-full w-full flex flex-col bg-[var(--bg-app)]">
      {/* Terminal Tab Header */}
      <div className="w-full flex items-center justify-between px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-default)] no-select text-xs font-medium">
        <div className="flex items-center gap-2 text-[var(--text-primary)]">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
          <span>Console</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={clearTerminal}
            title="Clear console"
            aria-label="Clear console"
            className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--border-focus)]"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div
        className="h-full w-full overflow-auto p-2 bg-[var(--bg-app)] text-[var(--text-primary)] font-mono text-xs no-select"
        ref={consoleRef}
      />
    </section>
  );
}

export default memo(Terminal);
