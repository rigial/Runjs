import { memo, useMemo, useState } from 'react';
import {
  SandpackProvider,
  SandpackPreview,
  SandpackConsole,
} from '@codesandbox/sandpack-react';
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer';
import Split from 'react-split';
import ReactEditor from '../components/ReactEditor';
import { fileIcon } from '../utils/folderIcons';
import { Link } from 'react-router';
import ThemeSelector from '../components/ThemeSelector';
import useTheme from '../hook/useTheme';
import useMediaQuery from '../hook/useMediaQuery';
import { ChevronLeft, Atom } from 'lucide-react';

type MobileTab = 'files' | 'code' | 'preview' | 'console';

function ReactPlayground() {
  const { resolvedTheme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTab>('code');
  const filesIcon = useMemo(
    () => (fileSuffix: string) => fileIcon(fileSuffix),
    []
  );

  return (
    <main className="h-screen w-full flex flex-col bg-[var(--bg-app)] overflow-hidden">
      {/* Top IDE Header */}
      <nav className="h-12 w-full flex items-center justify-between px-3 bg-[var(--bg-surface)] border-b border-[var(--border-default)] z-30 shrink-0 select-none">
        {/* Left: Brand & Info */}
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            title="Back to Dashboard"
            className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-cyan-500 text-black font-bold text-xs shadow-xs">
              <Atom className="w-4 h-4" />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[var(--text-primary)]">
              React Sandbox
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              Sandpack React
            </span>
          </div>
        </div>

        {/* Right: Theme Selector & Mobile Tabs */}
        <div className="flex items-center gap-2">
          {/* Mobile View Toggle */}
          <div className="flex md:hidden rounded-md border border-[var(--border-default)] bg-[var(--bg-surface-muted)] p-0.5">
            {(
              [
                { id: 'files', label: 'Files' },
                { id: 'code', label: 'Code' },
                { id: 'preview', label: 'Preview' },
                { id: 'console', label: 'Console' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeMobileTab === tab.id}
                onClick={() => setActiveMobileTab(tab.id)}
                className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                  activeMobileTab === tab.id
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xs font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <ThemeSelector compact={true} />
        </div>
      </nav>

      {/* Sandpack Workspace */}
      <div className="flex-1 w-full overflow-hidden">
        <SandpackProvider
          options={{
            recompileMode: 'delayed',
            recompileDelay: 500,
          }}
          template="react"
          theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          style={{ height: '100%' }}
        >
          {isDesktop ? (
            <Split
              className="flex h-full w-full split"
              sizes={[16, 44, 40]}
              minSize={120}
              gutterSize={6}
            >
              {/* File Explorer */}
              <div className="h-full overflow-auto bg-[var(--bg-surface)] border-r border-[var(--border-default)]">
                <SandpackFileExplorer
                  fileIcon={filesIcon}
                  style={{ height: '100%' }}
                />
              </div>

              {/* React Code Editor */}
              <div className="h-full overflow-hidden bg-[var(--bg-app)]">
                <ReactEditor />
              </div>

              {/* Preview & Console */}
              <Split
                className="flex flex-col h-full w-full"
                direction="vertical"
                sizes={[65, 35]}
                minSize={100}
                gutterSize={6}
              >
                <div className="h-full overflow-auto bg-[var(--bg-surface)]">
                  <SandpackPreview showNavigator style={{ height: '100%' }} />
                </div>
                <div className="h-full overflow-auto bg-[var(--bg-app)]">
                  <SandpackConsole
                    resetOnPreviewRestart
                    style={{ height: '100%' }}
                  />
                </div>
              </Split>
            </Split>
          ) : (
            <div className="h-full w-full overflow-hidden">
              <div
                className={`h-full overflow-auto bg-[var(--bg-surface)] ${
                  activeMobileTab === 'files' ? '' : 'hidden'
                }`}
              >
                <SandpackFileExplorer
                  fileIcon={filesIcon}
                  style={{ height: '100%' }}
                />
              </div>
              <div
                className={`h-full overflow-hidden bg-[var(--bg-app)] ${
                  activeMobileTab === 'code' ? '' : 'hidden'
                }`}
              >
                <ReactEditor />
              </div>
              <div
                className={`h-full overflow-auto bg-[var(--bg-surface)] ${
                  activeMobileTab === 'preview' ? '' : 'hidden'
                }`}
              >
                <SandpackPreview showNavigator style={{ height: '100%' }} />
              </div>
              <div
                className={`h-full overflow-auto bg-[var(--bg-app)] ${
                  activeMobileTab === 'console' ? '' : 'hidden'
                }`}
              >
                <SandpackConsole
                  resetOnPreviewRestart
                  style={{ height: '100%' }}
                />
              </div>
            </div>
          )}
        </SandpackProvider>
      </div>
    </main>
  );
}

export default memo(ReactPlayground);
