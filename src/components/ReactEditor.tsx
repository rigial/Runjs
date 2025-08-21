import Editor from '@monaco-editor/react';
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { memo, useMemo } from 'react';
import AppLoading from './AppLoading';
import { emmetJSX, emmetCSS, emmetHTML } from 'emmet-monaco-es';
import IDETheme from '../utils/IDETheme.json';
import { CustomIStandaloneThemeData } from '../utils/interface';
import useLocalStorageState from '../hook/useLocalStorageState';

function ReactEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const [currentFontSize] = useLocalStorageState('fontSize', '14');

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

  return (
    <SandpackStack style={{ height: '100%', margin: 0 }}>
      <FileTabs />
      <div className="flex-1">
        <Editor
          loading={<AppLoading freeLoading={true} />}
          theme={'myCustomTheme'}
          width="100%"
          height="100%"
          language={language}
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value ?? '')}
          onMount={(_, monaco) => {
            monaco.editor.setTheme('myCustomTheme');
          }}
          beforeMount={(monaco) => {
            emmetJSX(monaco, ['jsx', 'tsx']);
            emmetCSS(monaco, ['css', 'scss', 'sass']);
            emmetHTML(monaco, ['html']);
            monaco.editor.defineTheme(
              'myCustomTheme',
              IDETheme as CustomIStandaloneThemeData
            );
          }}
          options={{
            fontSize: currentFontSize,
            renderLineHighlight: 'none',
            automaticLayout: true,
          }}
        />
      </div>
    </SandpackStack>
  );
}

export default memo(ReactEditor);
