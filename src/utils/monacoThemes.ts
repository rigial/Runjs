import type { Monaco } from '@monaco-editor/react';
import IDETheme from './IDETheme.json';
import { CustomIStandaloneThemeData } from './interface';

export const darkMonacoTheme: CustomIStandaloneThemeData = {
  ...(IDETheme as CustomIStandaloneThemeData),
  base: 'vs-dark',
  inherit: true,
  colors: {
    ...((IDETheme as CustomIStandaloneThemeData).colors || {}),
    'editor.background': '#0e1117',
    'editorGutter.background': '#0e1117',
    'editorLineNumber.foreground': '#484f58',
    'editorLineNumber.activeForeground': '#f0f6fc',
    'editor.lineHighlightBackground': '#161b2255',
    'editor.selectionBackground': '#264f7866',
    'editorCursor.foreground': '#58a6ff',
    'editorIndentGuide.background': '#21262d',
    'editorIndentGuide.activeBackground': '#30363d',
    'scrollbarSlider.background': '#30363d40',
    'scrollbarSlider.hoverBackground': '#484f5870',
    'scrollbarSlider.activeBackground': '#58a6ff60',
  },
};

export const lightMonacoTheme: CustomIStandaloneThemeData = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: '', foreground: '24292f' },
    { token: 'comment', foreground: '6e7781', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'cf222e', fontStyle: 'bold' },
    { token: 'keyword.control', foreground: 'cf222e' },
    { token: 'operator', foreground: '0550ae' },
    { token: 'string', foreground: '0a3069' },
    { token: 'string.escape', foreground: '116329' },
    { token: 'number', foreground: '953800' },
    { token: 'regexp', foreground: '116329' },
    { token: 'type', foreground: '953800' },
    { token: 'identifier', foreground: '116329' },
    { token: 'type.identifier', foreground: '953800' },
    { token: 'function', foreground: '8250df' },
    { token: 'entity.name.function', foreground: '8250df' },
    { token: 'variable', foreground: '24292f' },
    { token: 'variable.parameter', foreground: '24292f' },
    { token: 'variable.predefined', foreground: '0550ae' },
    { token: 'constant', foreground: '0550ae' },
    { token: 'tag', foreground: '116329' },
    { token: 'tag.id', foreground: '0550ae' },
    { token: 'tag.class', foreground: '0550ae' },
    { token: 'attribute.name', foreground: '0550ae' },
    { token: 'attribute.value', foreground: '0a3069' },
  ],
  colors: {
    'editor.background': '#ffffff',
    'editor.foreground': '#24292f',
    'editorGutter.background': '#ffffff',
    'editorLineNumber.foreground': '#8c959f',
    'editorLineNumber.activeForeground': '#24292f',
    'editor.lineHighlightBackground': '#f6f8fa80',
    'editor.selectionBackground': '#b6e3ff70',
    'editorCursor.foreground': '#0969da',
    'editorIndentGuide.background': '#d0d7de70',
    'editorIndentGuide.activeBackground': '#8c959f',
    'scrollbarSlider.background': '#8c959f33',
    'scrollbarSlider.hoverBackground': '#8c959f66',
    'scrollbarSlider.activeBackground': '#8c959f99',
  },
};

export const registerMonacoThemes = (monaco: Monaco) => {
  monaco.editor.defineTheme(
    'runjs-dark',
    darkMonacoTheme as CustomIStandaloneThemeData
  );
  monaco.editor.defineTheme(
    'runjs-light',
    lightMonacoTheme as CustomIStandaloneThemeData
  );
};

export const getMonacoThemeName = (resolvedTheme: 'dark' | 'light'): string => {
  return resolvedTheme === 'dark' ? 'runjs-dark' : 'runjs-light';
};
