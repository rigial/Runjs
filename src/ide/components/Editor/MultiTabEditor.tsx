import React, { useEffect, useRef, useState, useMemo } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import {
  getBasename,
  getLanguageFromPath,
  normalizePath,
} from '../../fs/pathUtils';
import { FileIcon } from '../FileExplorer/FileIcon';
import { ContextMenu, ContextMenuItem } from '../FileExplorer/ContextMenu';
import { emmetJSX, emmetCSS, emmetHTML } from 'emmet-monaco-es';
import useTheme from '../../../hook/useTheme';
import {
  getMonacoThemeName,
  registerMonacoThemes,
} from '../../../utils/monacoThemes';
import AppLoading from '../../../components/AppLoading';
import { X, AlignLeft, Save, ChevronRight, Code2 } from 'lucide-react';

interface MultiTabEditorProps {
  activeFile: string;
  openFiles: string[];
  dirtyFiles: Set<string>;
  content: string;
  onSelectTab: (path: string) => void;
  onCloseTab: (path: string) => void;
  onCloseOtherTabs: (path: string) => void;
  onCloseAllTabs: () => void;
  onChangeCode: (path: string, newCode: string) => void;
  onSaveFile: (path: string) => void;
  fontSize: number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  editorRef?: React.MutableRefObject<any>;
}

export function MultiTabEditor({
  activeFile,
  openFiles,
  dirtyFiles,
  content,
  onSelectTab,
  onCloseTab,
  onCloseOtherTabs,
  onCloseAllTabs,
  onChangeCode,
  onSaveFile,
  fontSize,
  editorRef: externalEditorRef,
}: MultiTabEditorProps) {
  const { resolvedTheme } = useTheme();
  const internalEditorRef = useRef<any>(null);
  const monacoInstanceRef = useRef<Monaco | null>(null);

  const [tabContextMenu, setTabContextMenu] = useState<{
    x: number;
    y: number;
    path: string;
    items: ContextMenuItem[];
  } | null>(null);

  const language = useMemo(() => getLanguageFromPath(activeFile), [activeFile]);

  // Sync theme changes
  useEffect(() => {
    if (monacoInstanceRef.current) {
      monacoInstanceRef.current.editor.setTheme(
        getMonacoThemeName(resolvedTheme)
      );
    }
  }, [resolvedTheme]);

  const handleTabContextMenu = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();

    setTabContextMenu({
      x: e.clientX,
      y: e.clientY,
      path,
      items: [
        {
          label: 'Close',
          action: () => onCloseTab(path),
        },
        {
          label: 'Close Others',
          action: () => onCloseOtherTabs(path),
        },
        {
          label: 'Close All',
          action: () => onCloseAllTabs(),
        },
        { divider: true, label: '', action: () => {} },
        {
          label: 'Save',
          shortcut: '⌘S',
          action: () => onSaveFile(path),
        },
      ],
    });
  };

  const handleFormat = () => {
    const editor = externalEditorRef?.current || internalEditorRef.current;
    if (editor) {
      editor.getAction('editor.action.formatDocument')?.run();
    }
  };

  // Build breadcrumb segments
  const breadcrumbs = useMemo(() => {
    if (!activeFile) return [];
    const norm = normalizePath(activeFile);
    return norm.split('/').filter(Boolean);
  }, [activeFile]);

  return (
    <div className="h-full w-full flex flex-col bg-[var(--bg-app)] overflow-hidden">
      {/* Tab Strip */}
      <div className="h-9 w-full flex items-center bg-[var(--bg-surface)] border-b border-[var(--border-default)] overflow-x-auto no-scrollbar shrink-0 select-none">
        {openFiles.map((path) => {
          const isActive = path === activeFile;
          const isDirty = dirtyFiles.has(path);
          const name = getBasename(path);

          return (
            <div
              key={path}
              onClick={() => onSelectTab(path)}
              onContextMenu={(e) => handleTabContextMenu(e, path)}
              className={`group h-full flex items-center gap-2 px-3 border-r border-[var(--border-default)] cursor-pointer text-xs transition-colors shrink-0 ${
                isActive
                  ? 'bg-[var(--bg-app)] text-[var(--text-primary)] font-medium border-t-2 border-t-cyan-500'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FileIcon path={path} className="w-3.5 h-3.5" />
              <span className="truncate max-w-[120px]">{name}</span>

              {/* Close or Dirty Dot */}
              <div className="flex items-center justify-center w-4 h-4 ml-0.5">
                {isDirty ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseTab(path);
                    }}
                    title="Close"
                    className="w-full h-full flex items-center justify-center rounded hover:bg-[var(--bg-surface-hover)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:hidden" />
                    <X className="w-3 h-3 hidden group-hover:block text-[var(--text-muted)] hover:text-[var(--text-primary)]" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseTab(path);
                    }}
                    title="Close"
                    className="w-full h-full flex items-center justify-center rounded hover:bg-[var(--bg-surface-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Breadcrumbs & Editor Action Toolbar */}
      <div className="h-7 px-3 flex items-center justify-between bg-[var(--bg-surface-muted)] border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] select-none shrink-0">
        {/* Left: Breadcrumbs */}
        <div className="flex items-center gap-1 font-mono truncate">
          <Code2 className="w-3 h-3 text-amber-500 shrink-0" />
          <span>project</span>
          {breadcrumbs.map((seg, i) => (
            <React.Fragment key={i}>
              <ChevronRight className="w-3 h-3 opacity-50 shrink-0" />
              <span
                className={
                  i === breadcrumbs.length - 1
                    ? 'text-[var(--text-primary)] font-medium'
                    : ''
                }
              >
                {seg}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {dirtyFiles.has(activeFile) && (
            <button
              type="button"
              onClick={() => onSaveFile(activeFile)}
              title="Save File (⌘S)"
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleFormat}
            title="Format Document (Shift+Alt+F)"
            className="flex items-center gap-1 p-0.5 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <AlignLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Monaco Editor Container */}
      <div className="flex-1 w-full overflow-hidden bg-[var(--bg-app)] relative">
        {activeFile ? (
          <Editor
            loading={<AppLoading freeLoading={true} />}
            theme={getMonacoThemeName(resolvedTheme)}
            width="100%"
            height="100%"
            language={language}
            path={activeFile}
            value={content}
            onChange={(value) => onChangeCode(activeFile, value ?? '')}
            onMount={(editor, monaco) => {
              internalEditorRef.current = editor;
              if (externalEditorRef) {
                externalEditorRef.current = editor;
              }
              monacoInstanceRef.current = monaco;
              registerMonacoThemes(monaco);
              monaco.editor.setTheme(getMonacoThemeName(resolvedTheme));

              // Add Save shortcut (Cmd+S / Ctrl+S)
              editor.addCommand(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
                () => {
                  onSaveFile(activeFile);
                }
              );
            }}
            beforeMount={(monaco) => {
              registerMonacoThemes(monaco);
              emmetJSX(monaco, ['javascript', 'typescript', 'jsx', 'tsx']);
              emmetCSS(monaco, ['css', 'scss', 'sass', 'less']);
              emmetHTML(monaco, ['html']);
            }}
            options={{
              fontSize,
              fontFamily:
                "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace",
              fontLigatures: true,
              lineHeight: 22,
              renderLineHighlight: 'all',
              cursorBlinking: 'smooth',
              cursorSmoothCaretAnimation: 'on',
              automaticLayout: true,
              minimap: { enabled: false },
              padding: { top: 10, bottom: 10 },
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
              tabSize: 2,
              wordWrap: 'off',
              bracketPairColorization: { enabled: true },
              guides: {
                bracketPairs: true,
                indentation: true,
              },
            }}
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[var(--text-muted)] select-none">
            <Code2 className="w-10 h-10 mb-2 opacity-40" />
            <p className="text-sm font-medium">No file is currently open</p>
            <p className="text-xs mt-1">
              Select a file from the explorer on the left
            </p>
          </div>
        )}
      </div>

      {/* Tab Context Menu */}
      {tabContextMenu && (
        <ContextMenu
          x={tabContextMenu.x}
          y={tabContextMenu.y}
          items={tabContextMenu.items}
          onClose={() => setTabContextMenu(null)}
        />
      )}
    </div>
  );
}
