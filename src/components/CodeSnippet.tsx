import { Editor, Monaco, type OnMount } from '@monaco-editor/react';
import { memo, useEffect, useRef } from 'react';
import AppLoading from './AppLoading';
import { emmetJSX } from 'emmet-monaco-es';
import useTheme from '../hook/useTheme';
import useCopyToClipboard from '../hook/useCopyToClipboard';
import {
  getMonacoThemeName,
  registerMonacoThemes,
} from '../utils/monacoThemes';
import { Check, Copy, Code2 } from 'lucide-react';

type EditorInstance = Parameters<OnMount>[0];

interface CodeSnippetProps {
  code: string;
  height?: string;
  language?: string;
  title?: string;
  actionButton?: React.ReactNode;
}

function CodeSnippet({
  code,
  height,
  language = 'javascript',
  title = 'JavaScript',
  actionButton,
}: CodeSnippetProps) {
  const { resolvedTheme } = useTheme();
  const editorRef = useRef<EditorInstance | null>(null);
  const monacoInstanceRef = useRef<Monaco | null>(null);
  const emmetDisposerRef = useRef<(() => void) | null>(null);
  const { copied, copy } = useCopyToClipboard();

  const lineCount = code ? code.split('\n').length : 1;
  const computedHeight =
    height || `${Math.min(Math.max(lineCount * 20 + 20, 80), 500)}px`;

  useEffect(() => {
    if (monacoInstanceRef.current) {
      monacoInstanceRef.current.editor.setTheme(
        getMonacoThemeName(resolvedTheme)
      );
    }
  }, [resolvedTheme]);

  useEffect(() => {
    return () => {
      if (emmetDisposerRef.current) {
        emmetDisposerRef.current();
        emmetDisposerRef.current = null;
      }
    };
  }, []);

  const handleCopy = () => {
    const textToCopy = editorRef.current?.getValue() ?? code;
    copy(textToCopy);
  };

  return (
    <div className="my-3 rounded-xl border border-[var(--border-default)] overflow-hidden bg-[var(--bg-surface)] shadow-xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--bg-surface-muted)] border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-medium select-none">
        <div className="flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-semibold text-[var(--text-primary)]">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {actionButton}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
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

      {/* Editor Snippet */}
      <Editor
        loading={<AppLoading freeLoading={true} />}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          monacoInstanceRef.current = monaco;
          registerMonacoThemes(monaco);
          monaco.editor.setTheme(getMonacoThemeName(resolvedTheme));
          try {
            editor.updateOptions({ readOnly: false });
            editor.getAction('editor.action.formatDocument')?.run();
            setTimeout(() => {
              editor.updateOptions({ readOnly: true });
            }, 60);
          } catch {
            // ignore
          }
        }}
        beforeMount={(monaco) => {
          registerMonacoThemes(monaco);
          emmetJSX(monaco, [language]);
        }}
        height={computedHeight}
        theme={getMonacoThemeName(resolvedTheme)}
        width="100%"
        defaultLanguage={language}
        language={language}
        value={code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 13,
          fontFamily:
            "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace",
          lineHeight: 20,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          renderLineHighlight: 'none',
          scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
          },
        }}
      />
    </div>
  );
}

export default memo(CodeSnippet);
