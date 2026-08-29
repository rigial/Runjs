import type { Monaco } from '@monaco-editor/react';
import { normalizePath } from '../../fs/pathUtils';
import {
  REACT_TYPES_CONTENT,
  LUCIDE_REACT_TYPES_CONTENT,
  REACT_DOM_TYPES_CONTENT,
  CANVAS_CONFETTI_TYPES_CONTENT,
  REACT_ROUTER_TYPES_CONTENT,
} from './packageDefinitions';

const GENERIC_AMBIENT_TYPES = `
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}
`;

let isConfigured = false;
const extraLibDisposers: Map<
  string,
  { tsDisposer: { dispose: () => void }; jsDisposer?: { dispose: () => void } }
> = new Map();

/**
 * Configures TypeScript & JavaScript diagnostics, compiler options, and ambient declarations in Monaco.
 */
export function setupTypeScript(monaco: Monaco): void {
  if (isConfigured) return;

  const compilerOptions: Parameters<
    typeof monaco.languages.typescript.typescriptDefaults.setCompilerOptions
  >[0] = {
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    noEmit: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    reactNamespace: 'React',
    allowJs: true,
    checkJs: false,
    strict: true,
    noImplicitAny: false,
    strictNullChecks: false,
    noUnusedLocals: false,
    noUnusedParameters: false,
    isolatedModules: true,
    baseUrl: 'file:///',
    paths: {
      '*': ['*', 'file:///*'],
    },
  };

  // Configure TypeScript language defaults
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
    noSuggestionDiagnostics: false,
  });
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
    compilerOptions
  );

  // Configure JavaScript language defaults
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
    noSuggestionDiagnostics: false,
  });
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions(
    compilerOptions
  );

  // Set eager model sync for full multi-file TypeScript validation
  monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
  monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);

  // Add global React ambient typings
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    REACT_TYPES_CONTENT,
    'file:///node_modules/@types/react/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    REACT_TYPES_CONTENT,
    'file:///node_modules/@types/react/index.d.ts'
  );

  // Add Lucide React typings
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    LUCIDE_REACT_TYPES_CONTENT,
    'file:///node_modules/lucide-react/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    LUCIDE_REACT_TYPES_CONTENT,
    'file:///node_modules/lucide-react/index.d.ts'
  );

  // Add React DOM typings
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    REACT_DOM_TYPES_CONTENT,
    'file:///node_modules/@types/react-dom/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    REACT_DOM_TYPES_CONTENT,
    'file:///node_modules/@types/react-dom/index.d.ts'
  );

  // Add Canvas Confetti typings
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    CANVAS_CONFETTI_TYPES_CONTENT,
    'file:///node_modules/canvas-confetti/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    CANVAS_CONFETTI_TYPES_CONTENT,
    'file:///node_modules/canvas-confetti/index.d.ts'
  );

  // Add React Router & React Router DOM typings
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    REACT_ROUTER_TYPES_CONTENT,
    'file:///node_modules/react-router/index.d.ts'
  );
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    REACT_ROUTER_TYPES_CONTENT,
    'file:///node_modules/react-router-dom/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    REACT_ROUTER_TYPES_CONTENT,
    'file:///node_modules/react-router/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    REACT_ROUTER_TYPES_CONTENT,
    'file:///node_modules/react-router-dom/index.d.ts'
  );

  // Add generic asset module declarations
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    GENERIC_AMBIENT_TYPES,
    'file:///node_modules/@types/ambient/index.d.ts'
  );
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    GENERIC_AMBIENT_TYPES,
    'file:///node_modules/@types/ambient/index.d.ts'
  );

  isConfigured = true;
}

/**
 * Synchronizes all files from the Virtual File System into Monaco extraLibs / models
 * so that cross-file imports (e.g. `import { TodoItem } from './types'`) resolve cleanly
 * and type errors generate accurate red error squigglies.
 */
export function syncVfsToMonacoTypeScript(
  monaco: Monaco,
  files: Record<string, string>
): void {
  // Clear obsolete extraLibs that are no longer in VFS
  for (const [filePath, disposerPair] of extraLibDisposers.entries()) {
    if (!(filePath in files)) {
      disposerPair.tsDisposer.dispose();
      disposerPair.jsDisposer?.dispose();
      extraLibDisposers.delete(filePath);
    }
  }

  // Add/Update extraLib for every file in the project
  for (const [rawPath, content] of Object.entries(files)) {
    const normPath = normalizePath(rawPath);
    // Only register JS/TS files for TypeScript cross-file type resolution
    if (
      normPath.endsWith('.ts') ||
      normPath.endsWith('.tsx') ||
      normPath.endsWith('.js') ||
      normPath.endsWith('.jsx') ||
      normPath.endsWith('.d.ts')
    ) {
      const uri = `file://${normPath}`;

      // Dispose existing extraLib for this path before re-registering
      const existing = extraLibDisposers.get(normPath);
      if (existing) {
        existing.tsDisposer.dispose();
        existing.jsDisposer?.dispose();
      }

      try {
        const tsDisposer =
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            content,
            uri
          );
        const jsDisposer =
          monaco.languages.typescript.javascriptDefaults.addExtraLib(
            content,
            uri
          );
        extraLibDisposers.set(normPath, { tsDisposer, jsDisposer });
      } catch (err) {
        console.warn('Failed to add extraLib for', normPath, err);
      }
    }
  }
}

/**
 * Clean up all registered extraLibs.
 */
export function disposeTypeScript(): void {
  for (const disposerPair of extraLibDisposers.values()) {
    disposerPair.tsDisposer.dispose();
    disposerPair.jsDisposer?.dispose();
  }
  extraLibDisposers.clear();
}
