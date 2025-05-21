import { Editor } from '@monaco-editor/react'
import AppLoading from './AppLoading';
import { emmetJSX } from 'emmet-monaco-es';
import IDETheme from '../utils/IDETheme.json'
import { CustomIStandaloneThemeData } from '../utils/interface';


export default function CodeSnippet({ code, height }: { code: string, height: string }) {

    return (
        <div className='my-2.5'>
            <Editor
                loading={<AppLoading freeLoading={true} />}
                onMount={(editor, monaco) => {
                    editor.getAction("editor.action.formatDocument")?.run();
                    monaco.editor.setTheme("myCustomTheme");
                }}
                beforeMount={(monaco) => {
                    emmetJSX(monaco, ["javascript"])
                    monaco.editor.defineTheme(
                        "myCustomTheme",
                        IDETheme as CustomIStandaloneThemeData,
                    );
                }}
                height={height}
                theme='dark'
                width="100%"
                defaultLanguage="javascript"
                defaultValue={code}
                options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                }}
            />
        </div>
    )
}
