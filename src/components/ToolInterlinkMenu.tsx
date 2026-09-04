import { memo, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import {
  ChevronDown,
  RotateCw,
  Layers,
  ArrowRightLeft,
  Loader2,
  AlertTriangle,
  X,
  Sparkles,
} from 'lucide-react';
import {
  ToolId,
  TOOL_CONFIGS,
  compileTsToJs,
  saveCrossToolTransfer,
} from '../utils/crossToolTransfer';

interface ToolInterlinkMenuProps {
  currentTool: ToolId;
  getCode: () => string;
  className?: string;
}

function ToolInterlinkMenu({
  currentTool,
  getCode,
  className = '',
}: ToolInterlinkMenuProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [convertingTarget, setConvertingTarget] = useState<ToolId | null>(null);
  const [compileError, setCompileError] = useState<{
    target: ToolId;
    message: string;
    rawCode: string;
  } | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () =>
      document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setCompileError(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTool = useCallback(
    async (targetToolId: ToolId, forceRaw = false) => {
      const rawCode = getCode() || '';
      const sourceConfig = TOOL_CONFIGS[currentTool];
      const targetConfig = TOOL_CONFIGS[targetToolId];

      // If switching from TypeScript to JS or visualizers, compile TS to JS
      if (
        currentTool === 'ts' &&
        targetToolId !== 'ts' &&
        !forceRaw
      ) {
        setIsConverting(true);
        setConvertingTarget(targetToolId);
        setCompileError(null);

        try {
          const { code: compiledCode, error } = await compileTsToJs(rawCode);

          if (error) {
            // Compilation failed due to syntax error in TypeScript
            setIsConverting(false);
            setConvertingTarget(null);
            setCompileError({
              target: targetToolId,
              message: error,
              rawCode,
            });
            return;
          }

          setIsConverting(false);
          setConvertingTarget(null);
          setIsOpen(false);

          saveCrossToolTransfer(
            targetToolId,
            compiledCode,
            `${sourceConfig.name} (Compiled to JS)`
          );

          navigate(targetConfig.path, {
            state: {
              code: compiledCode,
              source: `${sourceConfig.name} (Transpiled to JavaScript)`,
            },
          });
          return;
        } catch (err: unknown) {
          setIsConverting(false);
          setConvertingTarget(null);
          const message = err instanceof Error ? err.message : String(err);
          setCompileError({
            target: targetToolId,
            message,
            rawCode,
          });
          return;
        }
      }

      // Standard transfer without TS compilation
      setIsOpen(false);
      setCompileError(null);
      saveCrossToolTransfer(targetToolId, rawCode, sourceConfig.name);
      navigate(targetConfig.path, {
        state: {
          code: rawCode,
          source: sourceConfig.name,
        },
      });
    },
    [currentTool, getCode, navigate]
  );

  const availableTools = (Object.keys(TOOL_CONFIGS) as ToolId[]).filter(
    (id) => id !== currentTool
  );

  const renderToolIcon = (toolId: ToolId) => {
    switch (toolId) {
      case 'js':
        return (
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-500 text-black font-bold text-xs shadow-xs shrink-0">
            JS
          </div>
        );
      case 'ts':
        return (
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-500 text-white font-bold text-xs shadow-xs shrink-0">
            TS
          </div>
        );
      case 'visualizer':
        return (
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-500/15 text-purple-500 border border-purple-500/30 shrink-0">
            <RotateCw className="w-3.5 h-3.5" />
          </div>
        );
      case 'execution-context':
        return (
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-teal-500/15 text-teal-500 border border-teal-500/30 shrink-0">
            <Layers className="w-3.5 h-3.5" />
          </div>
        );
    }
  };

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setCompileError(null);
        }}
        disabled={isConverting}
        title="Open and explore current code in other tools"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer disabled:opacity-60 shadow-xs"
      >
        {isConverting ? (
          <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
        ) : (
          <ArrowRightLeft className="w-3.5 h-3.5 text-amber-500" />
        )}
        <span className="hidden sm:inline">Open in</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-1.5 w-80 sm:w-96 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-elevated)] p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Explore Code In</span>
            </div>
            <span className="text-[10px] font-medium text-[var(--text-muted)]">
              Cross-Tool Sync
            </span>
          </div>

          {/* Compilation Error Notification */}
          {compileError && (
            <div className="m-2 p-2.5 rounded-lg border border-red-500/30 bg-red-500/10 text-xs">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>TypeScript Compilation Failed</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCompileError(null)}
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="mt-1 text-[11px] text-[var(--text-secondary)] font-mono line-clamp-2">
                {compileError.message}
              </p>
              <div className="mt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setCompileError(null)}
                  className="px-2 py-1 text-[10px] rounded border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectTool(compileError.target, true)}
                  className="px-2 py-1 text-[10px] font-semibold rounded bg-red-500 hover:bg-red-600 text-white"
                >
                  Send Raw Code Anyway
                </button>
              </div>
            </div>
          )}

          {/* Tool Options List */}
          <div className="space-y-1 p-1">
            {availableTools.map((toolId) => {
              const tool = TOOL_CONFIGS[toolId];
              const isTargetConverting =
                isConverting && convertingTarget === toolId;
              const willTranspile = currentTool === 'ts' && toolId !== 'ts';

              return (
                <button
                  key={toolId}
                  type="button"
                  disabled={isConverting}
                  onClick={() => handleSelectTool(toolId)}
                  className="w-full text-left p-2.5 rounded-lg transition-all cursor-pointer flex items-center gap-3 hover:bg-[var(--bg-surface-hover)] group border border-transparent hover:border-[var(--border-subtle)]"
                >
                  {renderToolIcon(toolId)}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">
                        {tool.name}
                      </span>
                      {willTranspile && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                          TS → JS
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">
                      {tool.description}
                    </p>
                  </div>

                  {isTargetConverting && (
                    <Loader2 className="w-4 h-4 text-blue-500 animate-spin shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {currentTool === 'ts' && (
            <div className="px-2.5 py-2 mt-1 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>
                TypeScript code is automatically converted to clean JavaScript
                before loading.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(ToolInterlinkMenu);
