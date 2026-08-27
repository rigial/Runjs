import { memo, useState, useEffect, useCallback } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Loader2,
  Sparkles,
  Code2,
} from 'lucide-react';

interface CodeLine {
  indent: number;
  tokens: { text: string; color: string; bold?: boolean }[];
}

const DEMO_SNIPPET: CodeLine[] = [
  {
    indent: 0,
    tokens: [
      {
        text: '// Fibonacci with memoization',
        color: 'text-[var(--text-muted)]',
      },
    ],
  },
  {
    indent: 0,
    tokens: [
      { text: 'function ', color: 'text-purple-500 font-bold' },
      { text: 'fibonacci', color: 'text-blue-500 font-semibold' },
      { text: '(n, memo = {}) {', color: 'text-[var(--text-primary)]' },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: 'if ', color: 'text-purple-500 font-bold' },
      { text: '(n ', color: 'text-[var(--text-primary)]' },
      { text: 'in ', color: 'text-purple-500 font-bold' },
      { text: 'memo) ', color: 'text-[var(--text-primary)]' },
      { text: 'return ', color: 'text-purple-500 font-bold' },
      { text: 'memo[n];', color: 'text-[var(--text-primary)]' },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: 'if ', color: 'text-purple-500 font-bold' },
      { text: '(n <= ', color: 'text-[var(--text-primary)]' },
      { text: '2', color: 'text-amber-500 font-semibold' },
      { text: ') ', color: 'text-[var(--text-primary)]' },
      { text: 'return ', color: 'text-purple-500 font-bold' },
      { text: '1', color: 'text-amber-500 font-semibold' },
      { text: ';', color: 'text-[var(--text-primary)]' },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: 'memo[n] = ', color: 'text-[var(--text-primary)]' },
      { text: 'fibonacci', color: 'text-blue-500 font-semibold' },
      { text: '(n - ', color: 'text-[var(--text-primary)]' },
      { text: '1', color: 'text-amber-500' },
      { text: ', memo) + ', color: 'text-[var(--text-primary)]' },
      { text: 'fibonacci', color: 'text-blue-500 font-semibold' },
      { text: '(n - ', color: 'text-[var(--text-primary)]' },
      { text: '2', color: 'text-amber-500' },
      { text: ', memo);', color: 'text-[var(--text-primary)]' },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: 'return ', color: 'text-purple-500 font-bold' },
      { text: 'memo[n];', color: 'text-[var(--text-primary)]' },
    ],
  },
  {
    indent: 0,
    tokens: [{ text: '}', color: 'text-[var(--text-primary)]' }],
  },
  {
    indent: 0,
    tokens: [
      { text: 'console', color: 'text-emerald-500 font-semibold' },
      { text: '.', color: 'text-[var(--text-primary)]' },
      { text: 'log', color: 'text-blue-500 font-semibold' },
      { text: '(', color: 'text-[var(--text-primary)]' },
      { text: '"Fib(40):"', color: 'text-amber-500' },
      { text: ', ', color: 'text-[var(--text-primary)]' },
      { text: 'fibonacci', color: 'text-blue-500 font-semibold' },
      { text: '(', color: 'text-[var(--text-primary)]' },
      { text: '40', color: 'text-amber-500 font-semibold' },
      { text: '));', color: 'text-[var(--text-primary)]' },
    ],
  },
];

type Phase = 'typing' | 'compiling' | 'success';

function HomeIdeDemo() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const startAnimation = useCallback(() => {
    setCurrentLineIndex(0);
    setPhase('typing');
    setExecutionTime(null);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (currentLineIndex < DEMO_SNIPPET.length) {
        // Typing each line with variable speed for natural coding cadence
        const delay = currentLineIndex === 0 ? 300 : 220;
        timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
        }, delay);
      } else {
        // Finished typing -> trigger compiling phase
        timer = setTimeout(() => {
          setPhase('compiling');
        }, 500);
      }
    } else if (phase === 'compiling') {
      // Compiling animation duration (800ms)
      timer = setTimeout(() => {
        setExecutionTime(0.42);
        setPhase('success');
      }, 900);
    } else if (phase === 'success') {
      // Hold on success for 5 seconds before looping
      timer = setTimeout(() => {
        startAnimation();
      }, 5500);
    }

    return () => clearTimeout(timer);
  }, [phase, currentLineIndex, startAnimation]);

  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-card overflow-hidden transition-all duration-300">
      {/* Mock IDE Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-surface-muted)] border-b border-[var(--border-default)] text-xs select-none">
        <div className="flex items-center gap-3">
          {/* macOS window control buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-2xs" />
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[var(--text-secondary)] text-[11px] pl-2 border-l border-[var(--border-default)]">
            <Code2 className="w-3.5 h-3.5 text-amber-500" />
            <span>playground • algorithm-demo.js</span>
          </div>
        </div>

        {/* Dynamic Status Indicator */}
        <div className="flex items-center gap-2">
          {phase === 'typing' && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              <span>Coding...</span>
            </span>
          )}

          {phase === 'compiling' && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Compiling code...</span>
            </span>
          )}

          {phase === 'success' && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Executed in {executionTime}ms</span>
            </span>
          )}

          {/* Replay / Run Button */}
          <button
            type="button"
            onClick={startAnimation}
            title="Replay animation"
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-[11px] font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Replay</span>
          </button>
        </div>
      </div>

      {/* Editor & Console Split Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] font-mono text-xs divide-y md:divide-y-0 md:divide-x divide-[var(--border-default)]">
        {/* Code Editor Pane */}
        <div className="p-4 sm:p-5 md:col-span-7 bg-[var(--bg-app)] text-[var(--text-primary)] space-y-1.5 overflow-x-auto select-none">
          {DEMO_SNIPPET.slice(0, currentLineIndex).map((line, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[var(--text-muted)] text-[11px] w-4 text-right select-none opacity-40">
                {idx + 1}
              </span>
              <div
                style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                className="flex-1 whitespace-pre"
              >
                {line.tokens.map((tok, tIdx) => (
                  <span key={tIdx} className={tok.color}>
                    {tok.text}
                  </span>
                ))}
                {/* Active Typing Cursor on latest line */}
                {phase === 'typing' && idx === currentLineIndex - 1 && (
                  <span className="inline-block w-1.5 h-3.5 ml-1 bg-amber-500 animate-pulse align-middle" />
                )}
              </div>
            </div>
          ))}

          {/* Blinking cursor if starting */}
          {currentLineIndex === 0 && (
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-muted)] text-[11px] w-4 text-right opacity-40">
                1
              </span>
              <span className="inline-block w-1.5 h-3.5 bg-amber-500 animate-pulse" />
            </div>
          )}
        </div>

        {/* Terminal Console Pane */}
        <div className="p-4 sm:p-5 md:col-span-5 bg-[var(--bg-surface)] text-[var(--text-secondary)] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border-subtle)] text-[11px] font-semibold text-[var(--text-primary)] font-sans">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span>Output Terminal</span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                client • sandbox
              </span>
            </div>

            {/* Console Output Log States */}
            {phase === 'typing' && (
              <div className="text-[11px] text-[var(--text-muted)] italic pt-2">
                Waiting for execution...
              </div>
            )}

            {phase === 'compiling' && (
              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 text-blue-500">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Compiling TypeScript AST...</span>
                </div>
                <div className="text-[11px] text-[var(--text-muted)] pl-5">
                  Running client AST infinite-loop analyzer
                </div>
              </div>
            )}

            {phase === 'success' && (
              <div className="space-y-2 pt-1 font-mono text-xs animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold select-none">
                    &gt;
                  </span>
                  <span className="text-[var(--text-primary)] font-bold">
                    Fib(40): <span className="text-amber-500">102334155</span>
                  </span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 text-[11px] flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>
                    [Execution complete in 0.42ms • Zero server latency]
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Run CTA inside terminal footer */}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-sans">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Instant client execution</span>
            </span>
            <button
              type="button"
              onClick={startAnimation}
              className="text-amber-600 dark:text-amber-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>Run Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HomeIdeDemo);
