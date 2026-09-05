import { useState } from 'react';
import { SandpackPreview, useSandpack } from '@codesandbox/sandpack-react';
import {
  RotateCcw,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Globe,
} from 'lucide-react';

interface LivePreviewProps {
  onRestartDevServer?: () => void;
  className?: string;
}

type ViewportMode = 'responsive' | 'mobile' | 'tablet' | 'desktop';

export function LivePreview({
  onRestartDevServer,
  className = '',
}: LivePreviewProps) {
  const { sandpack, dispatch } = useSandpack();
  const [viewport, setViewport] = useState<ViewportMode>('responsive');

  const handleRefresh = () => {
    if (sandpack.status === 'idle') {
      if (onRestartDevServer) {
        onRestartDevServer();
      } else {
        sandpack.runSandpack();
      }
    } else {
      try {
        dispatch({ type: 'refresh' });
      } catch {
        if (onRestartDevServer) {
          onRestartDevServer();
        } else {
          sandpack.runSandpack();
        }
      }
    }
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
        return '1024px';
      default:
        return '100%';
    }
  };

  const status = sandpack.status; // 'initial' | 'idle' | 'running' | 'timeout' | 'done'
  const isCompiling = status === 'initial';
  const isRunning = status === 'running' || status === 'idle';

  return (
    <div
      className={`h-full w-full flex flex-col bg-[var(--bg-app)] border-l border-[var(--border-default)] overflow-hidden ${className}`}
    >
      {/* Top Browser Toolbar */}
      <div className="h-9 px-3 flex items-center justify-between bg-[var(--bg-surface)] border-b border-[var(--border-default)] select-none shrink-0 text-xs">
        {/* Left: Navigation & Address Bar */}
        <div className="flex items-center gap-2 flex-1 max-w-md mr-2">
          <button
            type="button"
            onClick={handleRefresh}
            title="Reload Preview"
            className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <RotateCcw
              className={`w-3.5 h-3.5 ${isCompiling ? 'animate-spin' : ''}`}
            />
          </button>

          {/* URL Bar */}
          <div className="flex-1 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[var(--bg-surface-muted)] border border-[var(--border-default)] text-[11px] font-mono text-[var(--text-secondary)]">
            <Globe className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
            <span className="truncate">http://localhost:5173</span>
            <div className="ml-auto flex items-center gap-1">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isRunning
                    ? 'bg-emerald-500 animate-pulse'
                    : isCompiling
                      ? 'bg-amber-500 animate-ping'
                      : 'bg-slate-400'
                }`}
              />
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                {isRunning ? 'HMR' : status}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Viewport Controls */}
        <div className="flex items-center gap-1">
          {/* Responsive Viewport Buttons */}
          <div className="hidden sm:flex items-center rounded-md border border-[var(--border-default)] bg-[var(--bg-surface-muted)] p-0.5">
            <button
              type="button"
              onClick={() => setViewport('responsive')}
              title="Fluid Responsive"
              className={`p-1 rounded transition-colors ${
                viewport === 'responsive'
                  ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Maximize2 className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setViewport('desktop')}
              title="Desktop (1024px)"
              className={`p-1 rounded transition-colors ${
                viewport === 'desktop'
                  ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Monitor className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setViewport('tablet')}
              title="Tablet (768px)"
              className={`p-1 rounded transition-colors ${
                viewport === 'tablet'
                  ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Tablet className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setViewport('mobile')}
              title="Mobile (375px)"
              className={`p-1 rounded transition-colors ${
                viewport === 'mobile'
                  ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Smartphone className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Viewport Canvas */}
      <div className="flex-1 w-full flex items-center justify-center bg-[var(--bg-app)] overflow-auto p-1">
        <div
          style={{
            width: getViewportWidth(),
            height: '100%',
            transition: 'width 200ms ease',
          }}
          className={`h-full relative overflow-hidden ${
            viewport !== 'responsive'
              ? 'rounded-lg border border-[var(--border-default)] shadow-lg'
              : ''
          }`}
        >
          <SandpackPreview
            showNavigator={false}
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            style={{ height: '100%', width: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
