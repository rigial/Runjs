import { memo, useState, useCallback } from 'react';
import type { CodeExample as CodeExampleType } from '../types';
import { Copy, Check, Play } from 'lucide-react';

interface CodeBlockProps {
  example: CodeExampleType;
}

function CodeBlock({ example }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [example.code]);

  const handleRun = useCallback(() => {
    setIsRunning(true);
    const logs: string[] = [];
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Capture console output
    console.log = (...args: unknown[]) => {
      logs.push(args.map((a) => {
        if (typeof a === 'object') {
          try { return JSON.stringify(a, null, 2); } catch { return String(a); }
        }
        return String(a);
      }).join(' '));
    };
    console.warn = console.log;
    console.error = (...args: unknown[]) => {
      logs.push('Error: ' + args.map(String).join(' '));
    };

    try {
      // Use indirect eval to run in global scope
      const result = (0, eval)(example.code);
      if (result !== undefined && logs.length === 0) {
        logs.push(String(result));
      }
    } catch (err) {
      logs.push(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      setOutput(logs.join('\n') || 'No output');
      setIsRunning(false);
    }
  }, [example.code]);

  return (
    <div className="my-4 rounded-xl border border-[var(--border-default)] overflow-hidden">
      {/* Title bar */}
      {example.title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-surface-muted)] border-b border-[var(--border-subtle)]">
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            {example.title}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors disabled:opacity-50"
              title="Run this code"
            >
              <Play className="w-3 h-3" />
              <span>Run</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Code block */}
      <pre className="p-4 bg-[var(--bg-surface-elevated)] overflow-x-auto text-xs leading-relaxed">
        <code className="text-[var(--text-primary)] font-mono whitespace-pre">
          {example.code}
        </code>
      </pre>

      {/* Expected output or live output */}
      {(output || example.output) && (
        <div className="px-4 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-muted)]">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
              {output ? '▸ Output' : '▸ Expected Output'}
            </span>
          </div>
          <pre className="text-xs font-mono text-emerald-600 dark:text-emerald-400 whitespace-pre-wrap">
            {output ?? example.output}
          </pre>
        </div>
      )}

      {/* Explanation */}
      {example.explanation && (
        <div className="px-4 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--bg-app)]">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            💡 {example.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default memo(CodeBlock);
