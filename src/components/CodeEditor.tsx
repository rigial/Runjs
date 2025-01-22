import { Editor } from '@monaco-editor/react';
import { memo } from 'react'
import AppLoading from './AppLoading';
import IDETheme from '../utils/IDETheme.json'
import { CustomIStandaloneThemeData, ICodeEditor } from '../utils/interface';
import { emmetJSX } from 'emmet-monaco-es';

function CodeEditor({ code, language, onChange, currentFontSize, editorRef }: ICodeEditor) {
    return (
        <Editor
            loading={<AppLoading freeLoading={true} />}
            height="100%"
            theme={'myCustomTheme'}
            language={language}
            value={code}
            onMount={(editor, monaco) => {
                monaco.editor.setTheme("myCustomTheme");
                editorRef.current = editor;
            }}
            beforeMount={(monaco) => {
                emmetJSX(monaco, [language])
                monaco.editor.defineTheme(
                    "myCustomTheme",
                    IDETheme as CustomIStandaloneThemeData,
                );
            }}
            onChange={onChange}
            options={{
                fontSize: currentFontSize,
                renderLineHighlight: "none",
                automaticLayout: true,
            }}
        />
    )
}

export default memo(CodeEditor)