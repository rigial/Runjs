import { memo, useState, useCallback, useEffect } from 'react';
import type { Exercise } from '../types';
import { Eye, EyeOff, Lightbulb, Play, RotateCcw } from 'lucide-react';

interface ExerciseComponentProps {
  exercise: Exercise;
  exerciseNumber: number;
  onComplete: () => void;
}

function ExerciseComponent({
  exercise,
  exerciseNumber,
  onComplete,
}: ExerciseComponentProps) {
  const [code, setCode] = useState(exercise.starterCode);
  const [output, setOutput] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Reset state when exercise changes
  useEffect(() => {
    setCode(exercise.starterCode);
    setOutput(null);
    setShowSolution(false);
    setHintsRevealed(0);
    setCompleted(false);
  }, [exercise]);

  const handleRun = useCallback(() => {
    const logs: string[] = [];
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    console.log = (...args: unknown[]) => {
      logs.push(
        args
          .map((a) => {
            if (typeof a === 'object') {
              try {
                return JSON.stringify(a, null, 2);
              } catch {
                return String(a);
              }
            }
            return String(a);
          })
          .join(' ')
      );
    };
    console.warn = console.log;
    console.error = (...args: unknown[]) => {
      logs.push('Error: ' + args.map(String).join(' '));
    };

    try {
      const result = (0, eval)(code);
      if (result !== undefined && logs.length === 0) {
        logs.push(String(result));
      }
    } catch (err) {
      logs.push(
        `Error: ${err instanceof Error ? err.message : String(err)}`
      );
    } finally {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      setOutput(logs.join('\n') || 'No output');
    }
  }, [code]);

  const handleRevealHint = useCallback(() => {
    setHintsRevealed((prev) => Math.min(prev + 1, exercise.hints.length));
  }, [exercise.hints.length]);

  const handleReset = useCallback(() => {
    setCode(exercise.starterCode);
    setOutput(null);
    setShowSolution(false);
    setHintsRevealed(0);
  }, [exercise.starterCode]);

  const handleMarkComplete = useCallback(() => {
    setCompleted(true);
    onComplete();
  }, [onComplete]);

  const difficultyColors = {
    beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    advanced: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  };

  return (
    <div className="my-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-muted)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[var(--text-primary)]">
            🏋️ Exercise {exerciseNumber}
          </span>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${difficultyColors[exercise.difficulty]}`}
          >
            {exercise.difficulty}
          </span>
        </div>
        {completed && (
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
            ✓ Completed
          </span>
        )}
      </div>

      {/* Description */}
      <div className="px-4 py-3 border-b border-[var(--border-subtle)]">
        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
          {exercise.title}
        </h4>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {exercise.description}
        </p>
      </div>

      {/* Code Editor Area */}
      <div className="p-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-36 p-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-mono text-xs leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all"
          spellCheck={false}
          placeholder="Write your solution here..."
        />

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <button
            type="button"
            onClick={handleRun}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
          >
            <Play className="w-3.5 h-3.5" />
            Run Code
          </button>

          {exercise.hints.length > 0 &&
            hintsRevealed < exercise.hints.length && (
              <button
                type="button"
                onClick={handleRevealHint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                Hint ({hintsRevealed}/{exercise.hints.length})
              </button>
            )}

          <button
            type="button"
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] text-xs font-medium hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            {showSolution ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                Hide Solution
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                Show Solution
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] text-[var(--text-muted)] text-xs font-medium hover:text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>

          {!completed && (
            <button
              type="button"
              onClick={handleMarkComplete}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black text-xs font-semibold transition-colors"
            >
              Mark Complete ✓
            </button>
          )}
        </div>
      </div>

      {/* Hints */}
      {hintsRevealed > 0 && (
        <div className="px-4 pb-3">
          <div className="space-y-1.5">
            {exercise.hints.slice(0, hintsRevealed).map((hint, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 px-3 py-2 rounded-lg bg-amber-500/5 border border-amber-500/10"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {hint}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="px-4 pb-3">
          <div className="px-3 py-2 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
              Output
            </span>
            <pre className="text-xs font-mono text-[var(--text-primary)] whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <div className="px-4 pb-4">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 overflow-hidden">
            <div className="px-3 py-2 border-b border-emerald-500/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Solution
              </span>
            </div>
            <pre className="p-3 text-xs font-mono text-[var(--text-primary)] whitespace-pre-wrap overflow-x-auto">
              {exercise.solution}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(ExerciseComponent);
