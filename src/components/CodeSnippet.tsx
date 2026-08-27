import { Editor, Monaco } from '@monaco-editor/react';
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

function CodeSnippet({ code, height }: { code: string; height: string }) {
  const { resolvedTheme } = useTheme();
  const monacoInstanceRef = useRef<Monaco | null>(null);
  const emmetDisposerRef = useRef<(() => void) | null>(null);
  const { copied, copy } = useCopyToClipboard();

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
    copy(code);
  };

  return (
    <div className="my-3 rounded-lg border border-[var(--border-default)] overflow-hidden bg-[var(--bg-surface)] shadow-xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--bg-surface-muted)] border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-medium">
        <div className="flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-amber-500" />
          <span>JavaScript</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
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

      {/* Editor Snippet */}
      <Editor
        loading={<AppLoading freeLoading={true} />}
        onMount={(editor, monaco) => {
          monacoInstanceRef.current = monaco;
          registerMonacoThemes(monaco);
          monaco.editor.setTheme(getMonacoThemeName(resolvedTheme));
          editor.getAction('editor.action.formatDocument')?.run();
        }}
        beforeMount={(monaco) => {
          registerMonacoThemes(monaco);
          emmetJSX(monaco, ['javascript']);
        }}
        height={height}
        theme={getMonacoThemeName(resolvedTheme)}
        width="100%"
        defaultLanguage="javascript"
        defaultValue={code}
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
