import Editor, { Monaco } from '@monaco-editor/react';
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { memo, useEffect, useMemo, useRef } from 'react';
import AppLoading from './AppLoading';
import { emmetJSX, emmetCSS, emmetHTML } from 'emmet-monaco-es';
import useTheme from '../hook/useTheme';
import {
  getMonacoThemeName,
  registerMonacoThemes,
} from '../utils/monacoThemes';
import useLocalStorageState from '../hook/useLocalStorageState';

function ReactEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const { resolvedTheme } = useTheme();
  const [currentFontSize] = useLocalStorageState('fontSize', '14');
  const monacoInstanceRef = useRef<Monaco | null>(null);

  const language = useMemo(() => {
    const fileName = sandpack.activeFile;
    const extension = fileName.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'js':
      case 'mjs':
      case 'jsx':
        return 'javascript';
      case 'ts':
      case 'tsx':
        return 'typescript';
      case 'css':
        return 'css';
      case 'scss':
      case 'sass':
        return 'scss';
      case 'html':
        return 'html';
      case 'json':
        return 'json';
      case 'md':
        return 'markdown';
      default:
        return 'javascript';
    }
  }, [sandpack.activeFile]);

  useEffect(() => {
    if (monacoInstanceRef.current) {
      monacoInstanceRef.current.editor.setTheme(
        getMonacoThemeName(resolvedTheme)
      );
    }
  }, [resolvedTheme]);

  return (
    <SandpackStack style={{ height: '100%', margin: 0 }}>
      <FileTabs />
      <div className="flex-1 bg-[var(--bg-app)]">
        <Editor
          loading={<AppLoading freeLoading={true} />}
          theme={getMonacoThemeName(resolvedTheme)}
          width="100%"
          height="100%"
          language={language}
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value ?? '')}
          onMount={(_, monaco) => {
            monacoInstanceRef.current = monaco;
            registerMonacoThemes(monaco);
            monaco.editor.setTheme(getMonacoThemeName(resolvedTheme));
          }}
          beforeMount={(monaco) => {
            registerMonacoThemes(monaco);
            emmetJSX(monaco, ['jsx', 'tsx']);
            emmetCSS(monaco, ['css', 'scss', 'sass']);
            emmetHTML(monaco, ['html']);
          }}
          options={{
            fontSize: Number(currentFontSize),
            fontFamily:
              "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace",
            fontLigatures: true,
            lineHeight: 22,
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            automaticLayout: true,
            minimap: { enabled: false },
            padding: { top: 8, bottom: 8 },
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
      </div>
    </SandpackStack>
  );
}

export default memo(ReactEditor);
