import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import '@xterm/xterm/css/xterm.css';
import { Shell } from '../../terminal/Shell';
import { FileSystem } from '../../fs/FileSystem';
import useTheme from '../../../hook/useTheme';
import {
  Terminal as TerminalIcon,
  Trash2,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

const DARK_TERMINAL_THEME = {
  background: '#0e1117',
  foreground: '#f0f6fc',
  cursor: '#38bdf8',
  selectionBackground: '#1e3a8a',
  black: '#161b22',
  red: '#f85149',
  green: '#3fb950',
  yellow: '#d29922',
  blue: '#58a6ff',
  magenta: '#bc8cff',
  cyan: '#39c5cf',
  white: '#b1bac4',
  brightBlack: '#6e7681',
  brightRed: '#ff7b72',
  brightGreen: '#56d364',
  brightYellow: '#e3b341',
  brightBlue: '#79c0ff',
  brightMagenta: '#d2a8ff',
  brightCyan: '#56d4dd',
  brightWhite: '#f0f6fc',
};

const LIGHT_TERMINAL_THEME = {
  background: '#ffffff',
  foreground: '#0f172a',
  cursor: '#0284c7',
  selectionBackground: '#bae6fd',
  black: '#24292f',
  red: '#cf222e',
  green: '#1a7f37',
  yellow: '#9a6700',
  blue: '#0969da',
  magenta: '#8250df',
  cyan: '#1b7c83',
  white: '#6e7781',
  brightBlack: '#57606a',
  brightRed: '#a40e26',
  brightGreen: '#116329',
  brightYellow: '#4d2d00',
  brightBlue: '#0550ae',
  brightMagenta: '#5a32a3',
  brightCyan: '#116329',
  brightWhite: '#24292f',
};

interface XtermTerminalProps {
  vfs: FileSystem;
  onDevServerRestart?: () => void;
  onOpenFile?: (path: string) => void;
  className?: string;
}

export function XtermTerminal({
  vfs,
  onDevServerRestart,
  onOpenFile,
  className = '',
}: XtermTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<XTerm | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const shellRef = useRef<Shell | null>(null);
  const { resolvedTheme } = useTheme();

  const onDevServerRestartRef = useRef(onDevServerRestart);
  const onOpenFileRef = useRef(onOpenFile);

  useEffect(() => {
    onDevServerRestartRef.current = onDevServerRestart;
  }, [onDevServerRestart]);

  useEffect(() => {
    onOpenFileRef.current = onOpenFile;
  }, [onOpenFile]);

  // Command line state
  const currentLineRef = useRef('');
  const cursorPositionRef = useRef(0);
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);

  // Initialize Shell only when vfs changes
  useEffect(() => {
    shellRef.current = new Shell({
      vfs,
      onDevServerRestart: () => onDevServerRestartRef.current?.(),
      onOpenFile: (p) => onOpenFileRef.current?.(p),
    });
  }, [vfs]);

  // Initialize xterm
  useEffect(() => {
    if (!containerRef.current) return;

    const isDark = resolvedTheme === 'dark';
    const term = new XTerm({
      cursorBlink: true,
      fontFamily:
        "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace",
      fontSize: 12,
      lineHeight: 1.35,
      theme: isDark ? DARK_TERMINAL_THEME : LIGHT_TERMINAL_THEME,
    });

    const fitAddon = new FitAddon();
    const webLinksAddon = new WebLinksAddon();

    term.loadAddon(fitAddon);
    term.loadAddon(webLinksAddon);

    term.open(containerRef.current);
    fitAddon.fit();

    terminalRef.current = term;
    fitAddonRef.current = fitAddon;

    // Welcome banner
    term.writeln('\x1b[1;36m⚛️ RunJS React + Vite In-Browser IDE Shell\x1b[0m');
    term.writeln(
      'Type \x1b[1;33mnpm install <package>\x1b[0m to install npm packages into project.'
    );
    term.writeln(
      'Type \x1b[1;33mhelp\x1b[0m to view all available commands.\r\n'
    );

    const prompt = shellRef.current?.getPrompt() || 'runjs-ide:~/project$ ';
    term.write(prompt);

    // Keystroke handler
    const disposable = term.onData(async (data) => {
      const shell = shellRef.current;
      if (!shell) return;

      const code = data.charCodeAt(0);

      if (data === '\r') {
        // Enter key
        term.writeln('');
        const line = currentLineRef.current;
        currentLineRef.current = '';
        cursorPositionRef.current = 0;

        if (line.trim()) {
          historyRef.current.push(line);
          historyIndexRef.current = historyRef.current.length;

          const output = await shell.execute(line);
          if (output) {
            term.writeln(output);
          }
        }

        term.write(shell.getPrompt());
      } else if (data === '\u007F' || code === 8) {
        // Backspace
        if (cursorPositionRef.current > 0) {
          const line = currentLineRef.current;
          const pos = cursorPositionRef.current;
          currentLineRef.current = line.slice(0, pos - 1) + line.slice(pos);
          cursorPositionRef.current = pos - 1;

          term.write('\b \b');
        }
      } else if (data === '\t') {
        // Tab autocompletion
        const line = currentLineRef.current;
        const matches = await shell.complete(line);

        if (matches.length === 1) {
          const match = matches[0];
          const words = line.split(' ');
          words[words.length - 1] = match;
          const completedLine = words.join(' ');
          const diff = completedLine.slice(line.length);

          currentLineRef.current = completedLine;
          cursorPositionRef.current = completedLine.length;
          term.write(diff);
        } else if (matches.length > 1) {
          term.writeln('');
          term.writeln(matches.join('  '));
          term.write(shell.getPrompt() + currentLineRef.current);
        }
      } else if (data === '\u001b[A') {
        // Up arrow: history back
        if (historyIndexRef.current > 0) {
          historyIndexRef.current--;
          const hist = historyRef.current[historyIndexRef.current];

          // Clear current line
          while (cursorPositionRef.current > 0) {
            term.write('\b \b');
            cursorPositionRef.current--;
          }

          currentLineRef.current = hist;
          cursorPositionRef.current = hist.length;
          term.write(hist);
        }
      } else if (data === '\u001b[B') {
        // Down arrow: history forward
        if (historyIndexRef.current < historyRef.current.length - 1) {
          historyIndexRef.current++;
          const hist = historyRef.current[historyIndexRef.current];

          while (cursorPositionRef.current > 0) {
            term.write('\b \b');
            cursorPositionRef.current--;
          }

          currentLineRef.current = hist;
          cursorPositionRef.current = hist.length;
          term.write(hist);
        } else if (historyIndexRef.current === historyRef.current.length - 1) {
          historyIndexRef.current = historyRef.current.length;
          while (cursorPositionRef.current > 0) {
            term.write('\b \b');
            cursorPositionRef.current--;
          }
          currentLineRef.current = '';
          cursorPositionRef.current = 0;
        }
      } else if (data === '\u0003') {
        // Ctrl+C
        term.writeln('^C');
        currentLineRef.current = '';
        cursorPositionRef.current = 0;
        term.write(shell.getPrompt());
      } else if (data === '\u000C') {
        // Ctrl+L
        term.write('\x1b[2J\x1b[3J\x1b[H');
        term.write(shell.getPrompt() + currentLineRef.current);
      } else if (code >= 32) {
        // Normal character
        currentLineRef.current += data;
        cursorPositionRef.current += data.length;
        term.write(data);
      }
    });

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      try {
        fitAddon.fit();
      } catch {
        // Ignore terminal resize during unmount/split
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      disposable.dispose();
      resizeObserver.disconnect();
      term.dispose();
    };
  }, []);

  // Update theme when changed
  useEffect(() => {
    if (!terminalRef.current) return;
    const isDark = resolvedTheme === 'dark';
    terminalRef.current.options.theme = isDark
      ? DARK_TERMINAL_THEME
      : LIGHT_TERMINAL_THEME;
  }, [resolvedTheme]);

  const handleClear = () => {
    if (terminalRef.current && shellRef.current) {
      terminalRef.current.write('\x1b[2J\x1b[3J\x1b[H');
      terminalRef.current.write(shellRef.current.getPrompt());
      currentLineRef.current = '';
      cursorPositionRef.current = 0;
    }
  };

  const handleRestart = () => {
    handleClear();
    onDevServerRestart?.();
    if (terminalRef.current) {
      terminalRef.current.writeln('\x1b[32m✔ Terminal shell restarted\x1b[0m');
      terminalRef.current.write(
        shellRef.current?.getPrompt() || 'runjs-ide:~/project$ '
      );
    }
  };

  return (
    <div
      className={`h-full w-full flex flex-col bg-[var(--bg-app)] border-t border-[var(--border-default)] ${className}`}
    >
      {/* Terminal Tab Header */}
      <div className="h-8 px-3 flex items-center justify-between bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0 text-xs font-medium">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-semibold shadow-2xs">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
            <span>Terminal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[var(--text-muted)] font-mono">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>npm & shell runtime</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleRestart}
            title="Restart Terminal"
            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Restart</span>
          </button>
          <button
            type="button"
            onClick={handleClear}
            title="Clear Terminal"
            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <Trash2 className="w-3 h-3" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* Terminal View Container */}
      <div
        ref={containerRef}
        className="flex-1 w-full p-2 bg-[var(--bg-app)] overflow-hidden"
      />
    </div>
  );
}
