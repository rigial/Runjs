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

/**
 * Monaco code editor component with syntax highlighting, emmet expansion, and TypeScript diagnostics support.
 */
function CodeEditor({
  code,
  language,
  onChange,
  currentFontSize,
  editorRef,
  disableAutoSuggestion = false,
  path,
  onValidate,
}: ICodeEditor) {
  const { resolvedTheme } = useTheme();
  const monacoInstanceRef = useRef<Monaco | null>(null);
  const emmetDisposerRef = useRef<(() => void) | null>(null);
  const defaultPath =
    path ||
    (language === 'typescript'
      ? 'script.ts'
      : language === 'javascript'
        ? 'script.js'
        : undefined);

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

  return (
    <div className="h-full w-full bg-[var(--bg-app)] relative">
      <Editor
        loading={<AppLoading freeLoading={true} />}
        height="100%"
        theme={getMonacoThemeName(resolvedTheme)}
        language={language}
        path={defaultPath}
        value={code}
        onMount={(editor, monaco) => {
          monacoInstanceRef.current = monaco;
          registerMonacoThemes(monaco);
          monaco.editor.setTheme(getMonacoThemeName(resolvedTheme));
          editorRef.current = editor;
        }}
        onValidate={onValidate}
        beforeMount={(monaco) => {
          registerMonacoThemes(monaco);

          // Configure TypeScript language service diagnostics & compiler options
          monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false,
            noSuggestionDiagnostics: false,
          });

          monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ESNext,
            allowNonTextFiles: true,
            moduleResolution:
              monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
            jsx: monaco.languages.typescript.JsxEmit.React,
            reactNamespace: 'React',
            allowJs: true,
            strict: true,
            noImplicitAny: true,
            strictNullChecks: true,
            strictFunctionTypes: true,
            strictBindCallApply: true,
            strictPropertyInitialization: true,
            noImplicitThis: true,
            alwaysStrict: true,
          });

          if (emmetDisposerRef.current) {
            emmetDisposerRef.current();
          }
          if (!disableAutoSuggestion) {
            emmetDisposerRef.current = emmetJSX(monaco, [language]);
          }
        }}
        onChange={onChange}
        options={{
          hover: { enabled: 'on', delay: 300 },
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
          quickSuggestions: disableAutoSuggestion ? false : true,
          suggestOnTriggerCharacters: !disableAutoSuggestion,
          acceptSuggestionOnEnter: disableAutoSuggestion ? 'off' : 'on',
          acceptSuggestionOnCommitCharacter: !disableAutoSuggestion,
          tabCompletion: disableAutoSuggestion ? 'off' : 'on',
          wordBasedSuggestions: disableAutoSuggestion
            ? 'off'
            : 'matchingDocuments',
          parameterHints: { enabled: !disableAutoSuggestion },
          suggest: disableAutoSuggestion
            ? {
                showKeywords: false,
                showSnippets: false,
                showWords: false,
                showFunctions: false,
                showVariables: false,
                showClasses: false,
                showMethods: false,
                showModules: false,
                showProperties: false,
                showInterfaces: false,
                showUnits: false,
                showValues: false,
                showConstants: false,
                showEnums: false,
                showEnumMembers: false,
                showEvents: false,
                showOperators: false,
                showTypeParameters: false,
                showFields: false,
                showFiles: false,
                showFolders: false,
                showReferences: false,
                showColors: false,
                showConstructors: false,
                showStructs: false,
                showIssues: false,
                showUsers: false,
                filterGraceful: false,
                snippetsPreventQuickSuggestions: false,
              }
            : undefined,
          inlineSuggest: { enabled: !disableAutoSuggestion },
        }}
      />
    </div>
  );
}

export default memo(CodeEditor);
