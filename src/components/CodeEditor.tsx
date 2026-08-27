import { Editor, Monaco } from '@monaco-editor/react';
import { memo, useEffect, useRef } from 'react';
import AppLoading from './AppLoading';
import { ICodeEditor } from '../utils/interface';
import { emmetJSX } from 'emmet-monaco-es';
import useTheme from '../hook/useTheme';
import {
  getMonacoThemeName,
  registerMonacoThemes,
} from '../utils/monacoThemes';

function CodeEditor({
  code,
  language,
  onChange,
  currentFontSize,
  editorRef,
}: ICodeEditor) {
  const { resolvedTheme } = useTheme();
  const monacoInstanceRef = useRef<Monaco | null>(null);

  useEffect(() => {
    if (monacoInstanceRef.current) {
      monacoInstanceRef.current.editor.setTheme(
        getMonacoThemeName(resolvedTheme)
      );
    }
  }, [resolvedTheme]);

  return (
    <div className="h-full w-full bg-[var(--bg-app)] relative">
      <Editor
        loading={<AppLoading freeLoading={true} />}
        height="100%"
        theme={getMonacoThemeName(resolvedTheme)}
        language={language}
        value={code}
        onMount={(editor, monaco) => {
          monacoInstanceRef.current = monaco;
          registerMonacoThemes(monaco);
          monaco.editor.setTheme(getMonacoThemeName(resolvedTheme));
          editorRef.current = editor;
        }}
        beforeMount={(monaco) => {
          registerMonacoThemes(monaco);
          emmetJSX(monaco, [language]);
        }}
        onChange={onChange}
        options={{
          fontSize: currentFontSize,
          fontFamily:
            "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace",
          fontLigatures: true,
          lineHeight: 22,
          renderLineHighlight: 'all',
          renderLineHighlightOnlyWhenFocus: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          bracketPairColorization: { enabled: true },
          guides: {
            bracketPairs: true,
            indentation: true,
          },
          padding: {
            top: 12,
            bottom: 12,
          },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          automaticLayout: true,
          tabSize: 2,
          minimap: {
            enabled: false,
          },
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
        }}
      />
    </div>
  );
}

export default memo(CodeEditor);
