import type { Monaco } from '@monaco-editor/react';
import { normalizePath } from '../../fs/pathUtils';
import { resolveImportPath } from '../imports/importCompletion';
import {
  PACKAGE_DECLARATIONS,
  getAllPackageVirtualFiles,
} from '../typescript/packageDefinitions';

/**
 * Searches a file's content for the declaration of a symbol (interface, type, function, class, const, default export).
 * Returns null if no explicit declaration match is found.
 */
export function findSymbolLocationInContent(
  content: string,
  symbolName: string
): { lineNumber: number; column: number; length: number } | null {
  const lines = content.split('\n');

  // Regex patterns to match definition of symbolName
  const patterns = [
    new RegExp(
      `\\bexport\\s+default\\s+(?:function|class)\\s+(${symbolName})\\b`
    ),
    new RegExp(
      `\\bexport\\s+(?:interface|type|enum|class)\\s+(${symbolName})\\b`
    ),
    new RegExp(`\\bexport\\s+(?:async\\s+)?function\\s+(${symbolName})\\b`),
    new RegExp(`\\bexport\\s+(?:const|let|var)\\s+(${symbolName})\\b`),
    new RegExp(`\\b(${symbolName}):\\s*React\\.DetailedHTMLProps`),
    new RegExp(
      `\\b(?:const|let|var|function|class|interface|type|enum)\\s+(${symbolName})\\b`
    ),
    new RegExp(`\\b(${symbolName})\\b`),
  ];

  for (const pattern of patterns) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(pattern);
      if (match && match.index !== undefined) {
        const symbolColIndex = line.indexOf(symbolName, match.index);
        const col = symbolColIndex >= 0 ? symbolColIndex + 1 : match.index + 1;
        return {
          lineNumber: i + 1,
          column: col,
          length: symbolName.length,
        };
      }
    }
  }

  return null;
}

/**
 * Finds the location of `export default` in a file's content.
 */
export function findDefaultExportLocationInContent(
  content: string
): { lineNumber: number; column: number; length: number } | null {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/\bexport\s+default\b/);
    if (match && match.index !== undefined) {
      return {
        lineNumber: i + 1,
        column: match.index + 1,
        length: 14,
      };
    }
  }
  return { lineNumber: 1, column: 1, length: 1 };
}

/**
 * Detects if a word position in a line is a JSX tag name (e.g. `<input` or `</input`).
 */
export function isJsxTagAtPosition(
  lineContent: string,
  wordStartCol: number
): boolean {
  const prefix = lineContent.substring(0, wordStartCol - 1).trimEnd();
  return prefix.endsWith('<') || prefix.endsWith('</');
}

/**
 * Searches the current file for a local declaration (useState, const, let, function, parameter, interface, etc.).
 */
export function findLocalSymbolLocation(
  content: string,
  symbolName: string
): { lineNumber: number; column: number; length: number } | null {
  const lines = content.split('\n');

  const patterns = [
    // 1. const [input, setInput] = useState(...)
    new RegExp(
      `\\b(?:const|let|var)\\s*\\[[^\\]]*?\\b(${symbolName})\\b[^\\]]*?\\]`
    ),
    // 2. const foo = ... / let foo = ...
    new RegExp(`\\b(?:const|let|var)\\s+(${symbolName})\\b`),
    // 3. function foo(...) / async function foo(...)
    new RegExp(`\\b(?:async\\s+)?function\\s+(${symbolName})\\b`),
    // 4. interface Foo / type Foo / class Foo / enum Foo
    new RegExp(`\\b(?:interface|type|class|enum)\\s+(${symbolName})\\b`),
    // 5. (input: Type) => or (e: React.FormEvent) =>
    new RegExp(`\\((?:[^)]*?\\s*)?(${symbolName})\\s*(?::|=>|,|\\))`),
    // 6. export default function Foo
    new RegExp(
      `\\bexport\\s+default\\s+(?:function|class)\\s+(${symbolName})\\b`
    ),
  ];

  for (const pattern of patterns) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(pattern);
      if (match && match.index !== undefined) {
        const symbolColIndex = line.indexOf(symbolName, match.index);
        const col = symbolColIndex >= 0 ? symbolColIndex + 1 : match.index + 1;
        return {
          lineNumber: i + 1,
          column: col,
          length: symbolName.length,
        };
      }
    }
  }

  return null;
}

export interface ImportedSymbolInfo {
  moduleSpecifier: string;
  isDefault: boolean;
  exportedName?: string;
}

/**
 * Parses all imports in a file to map imported identifier names to their source module specifier and exported symbol name.
 */
export function parseImportMap(
  content: string
): Map<string, ImportedSymbolInfo> {
  const map = new Map<string, ImportedSymbolInfo>();

  // 1. import Default, { A, B as C } from '...'
  const defaultAndNamed = content.matchAll(
    /import\s+([A-Za-z0-9_$]+)\s*,\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g
  );
  for (const m of defaultAndNamed) {
    const defName = m[1].trim();
    const namedPart = m[2];
    const mod = m[3].trim();
    if (defName) {
      map.set(defName, { moduleSpecifier: mod, isDefault: true });
    }
    if (namedPart) {
      for (const p of namedPart.split(',')) {
        const trimmed = p.trim();
        if (trimmed) {
          const parts = trimmed.split(/\s+as\s+/);
          const exportedName = parts[0].trim();
          const localName = (parts[1] || parts[0]).trim();
          map.set(localName, {
            moduleSpecifier: mod,
            isDefault: false,
            exportedName,
          });
        }
      }
    }
  }

  // 2. import { A, B as C } from '...'
  const namedOnly = content.matchAll(
    /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g
  );
  for (const m of namedOnly) {
    const namedPart = m[1];
    const mod = m[2].trim();
    for (const p of namedPart.split(',')) {
      const trimmed = p.trim();
      if (trimmed) {
        const parts = trimmed.split(/\s+as\s+/);
        const exportedName = parts[0].trim();
        const localName = (parts[1] || parts[0]).trim();
        map.set(localName, {
          moduleSpecifier: mod,
          isDefault: false,
          exportedName,
        });
      }
    }
  }

  // 3. import Default from '...'
  const defaultOnly = content.matchAll(
    /import\s+([A-Za-z0-9_$]+)\s+from\s*['"]([^'"]+)['"]/g
  );
  for (const m of defaultOnly) {
    const defName = m[1].trim();
    const mod = m[2].trim();
    if (defName) {
      map.set(defName, { moduleSpecifier: mod, isDefault: true });
    }
  }

  // 4. import * as Name from '...'
  const starOnly = content.matchAll(
    /import\s*\*\s*as\s+([A-Za-z0-9_$]+)\s+from\s*['"]([^'"]+)['"]/g
  );
  for (const m of starOnly) {
    const name = m[1].trim();
    const mod = m[2].trim();
    if (name) {
      map.set(name, { moduleSpecifier: mod, isDefault: true });
    }
  }

  return map;
}

/**
 * Resolves a module specifier (either local path or npm package) to its target file path and content.
 */
export function resolveModuleTarget(
  currentFile: string,
  moduleSpecifier: string,
  files: Record<string, string>
): { targetPath: string; content: string } | null {
  const packageVirtualFiles = getAllPackageVirtualFiles();
  const mergedFiles = { ...packageVirtualFiles, ...files };
  const availablePaths = Object.keys(mergedFiles).map((p) => normalizePath(p));

  // 1. Check if package declaration exists
  if (PACKAGE_DECLARATIONS[moduleSpecifier]) {
    const pkg = PACKAGE_DECLARATIONS[moduleSpecifier];
    return {
      targetPath: pkg.path,
      content: pkg.content,
    };
  }

  // 2. Resolve local file
  const localResolved = resolveImportPath(
    currentFile,
    moduleSpecifier,
    availablePaths
  );
  if (localResolved && mergedFiles[localResolved] !== undefined) {
    return {
      targetPath: localResolved,
      content: mergedFiles[localResolved],
    };
  }

  return null;
}

let activeGetVfsFiles: (() => Record<string, string>) | null = null;
let activeOnOpenFile:
  | ((path: string, position?: { lineNumber: number; column: number }) => void)
  | null = null;
let isRegistered = false;

/**
 * Registers Definition Provider and Document Link Provider for Ctrl/Cmd + click navigation
 * to imported files, packages, local declarations, and HTML/JSX elements.
 */
export function registerDefinitionProvider(
  monaco: Monaco,
  getVfsFiles: () => Record<string, string>,
  onOpenFile: (
    path: string,
    position?: { lineNumber: number; column: number }
  ) => void
): () => void {
  activeGetVfsFiles = getVfsFiles;
  activeOnOpenFile = onOpenFile;
  if (isRegistered) return () => {};

  const disposers: Array<{ dispose: () => void }> = [];
  const targetLanguages = ['javascript', 'typescript', 'jsx', 'tsx'];

  // Register Monaco Editor Opener for seamless navigation
  try {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const openerDisposer = (monaco.editor as any).registerEditorOpener({
      openCodeEditor(
        _source: any,
        resource: { path: string; scheme: string },
        selectionOrPosition?: any
      ): boolean {
        if (!resource || !resource.path) return false;
        const normPath = normalizePath(resource.path);
        const packageVirtualFiles = getAllPackageVirtualFiles();
        const filesGetter = activeGetVfsFiles || getVfsFiles;
        const openFileHandler = activeOnOpenFile || onOpenFile;
        const files = { ...packageVirtualFiles, ...filesGetter() };

        if (files[normPath] !== undefined) {
          let pos: { lineNumber: number; column: number } | undefined =
            undefined;
          if (selectionOrPosition) {
            if (
              'lineNumber' in selectionOrPosition &&
              'column' in selectionOrPosition
            ) {
              pos = {
                lineNumber: selectionOrPosition.lineNumber,
                column: selectionOrPosition.column,
              };
            } else if ('startLineNumber' in selectionOrPosition) {
              pos = {
                lineNumber: selectionOrPosition.startLineNumber,
                column: selectionOrPosition.startColumn,
              };
            }
          }
          openFileHandler(normPath, pos);
          return true;
        }
        return false;
      },
    });
    disposers.push(openerDisposer);
  } catch (err) {
    console.warn('Editor opener already registered or unsupported', err);
  }

  for (const lang of targetLanguages) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // 1. Definition Provider (F12 / Cmd+Click / Ctrl+Click)
    const defProvider = monaco.languages.registerDefinitionProvider(lang, {
      provideDefinition(model: any, position: any): any {
        const lineContent = model.getLineContent(position.lineNumber);
        const packageVirtualFiles = getAllPackageVirtualFiles();
        const filesGetter = activeGetVfsFiles || getVfsFiles;
        const files = { ...packageVirtualFiles, ...filesGetter() };
        const currentFile = model.uri.path || '/src/App.tsx';
        const fullContent = model.getValue();

        // 1. Check if cursor is on an import path string: e.g. import ... from 'lucide-react' or './types'
        const stringMatch = lineContent.match(/['"]([^'"]+)['"]/g);
        if (stringMatch) {
          for (const rawStr of stringMatch) {
            const innerStr = rawStr.slice(1, -1);
            const startCol = lineContent.indexOf(rawStr) + 1;
            const endCol = startCol + rawStr.length;

            if (position.column >= startCol && position.column <= endCol) {
              const target = resolveModuleTarget(currentFile, innerStr, files);
              if (target) {
                return {
                  uri: monaco.Uri.file(target.targetPath),
                  range: {
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: 1,
                    endColumn: 1,
                  },
                };
              }
            }
          }
        }

        // 2. Check if cursor is on a word/symbol
        const wordInfo = model.getWordAtPosition(position);
        if (!wordInfo) return null;

        const symbolName = wordInfo.word;

        // A. If cursor is on an HTML JSX tag (e.g. <input, <div, <button, <form, <span)
        if (
          isJsxTagAtPosition(lineContent, wordInfo.startColumn) &&
          /^[a-z]+$/.test(symbolName)
        ) {
          const reactTarget = resolveModuleTarget(currentFile, 'react', files);
          if (reactTarget) {
            const loc = findSymbolLocationInContent(
              reactTarget.content,
              symbolName
            );
            return {
              uri: monaco.Uri.file(reactTarget.targetPath),
              range: {
                startLineNumber: loc?.lineNumber || 1,
                startColumn: loc?.column || 1,
                endLineNumber: loc?.lineNumber || 1,
                endColumn: (loc?.column || 1) + (loc?.length || 1),
              },
            };
          }
        }

        // B. Check if symbol is imported from a module/package
        const importMap = parseImportMap(fullContent);
        const importedFrom = importMap.get(symbolName);
        if (importedFrom) {
          const target = resolveModuleTarget(
            currentFile,
            importedFrom.moduleSpecifier,
            files
          );

          if (target) {
            const loc = importedFrom.isDefault
              ? findDefaultExportLocationInContent(target.content) ||
                findSymbolLocationInContent(target.content, symbolName)
              : findSymbolLocationInContent(
                  target.content,
                  importedFrom.exportedName || symbolName
                );

            return {
              uri: monaco.Uri.file(target.targetPath),
              range: {
                startLineNumber: loc?.lineNumber || 1,
                startColumn: loc?.column || 1,
                endLineNumber: loc?.lineNumber || 1,
                endColumn: (loc?.column || 1) + (loc?.length || 1),
              },
            };
          }
        }

        // C. Check if symbol is defined locally in the current file
        const localLoc = findLocalSymbolLocation(fullContent, symbolName);
        if (localLoc) {
          return {
            uri: monaco.Uri.file(currentFile),
            range: {
              startLineNumber: localLoc.lineNumber,
              startColumn: localLoc.column,
              endLineNumber: localLoc.lineNumber,
              endColumn: localLoc.column + localLoc.length,
            },
          };
        }

        return null;
      },
    });
    disposers.push(defProvider);

    // 2. Document Link Provider (Underlines import paths with Ctrl/Cmd + click)
    const linkProvider = monaco.languages.registerLinkProvider(lang, {
      provideLinks(model: any): any {
        const links: any[] = [];
        const packageVirtualFiles = getAllPackageVirtualFiles();
        const filesGetter = activeGetVfsFiles || getVfsFiles;
        const files = { ...packageVirtualFiles, ...filesGetter() };
        const currentFile = model.uri.path || '/src/App.tsx';
        const lineCount = model.getLineCount();

        for (let i = 1; i <= lineCount; i++) {
          const line = model.getLineContent(i);
          const importMatches = line.matchAll(
            /(?:import\s+(?:(?:[\w*${}\s,]+)\s+from\s+)?|require\s*\(\s*)['"]([^'"]+)['"]/g
          );

          for (const m of importMatches) {
            const importSpec = m[1];
            if (importSpec) {
              const target = resolveModuleTarget(
                currentFile,
                importSpec,
                files
              );

              if (target) {
                const matchStart =
                  m.index !== undefined ? m.index : line.indexOf(m[0]);
                const quoteStart = matchStart + m[0].lastIndexOf(importSpec);
                const range = {
                  startLineNumber: i,
                  startColumn: quoteStart + 1,
                  endLineNumber: i,
                  endColumn: quoteStart + 1 + importSpec.length,
                };

                links.push({
                  range,
                  url: `file://${target.targetPath}`,
                  tooltip: `Ctrl/Cmd + Click to view '${importSpec}'`,
                });
              }
            }
          }
        }

        return { links };
      },
    });
    disposers.push(linkProvider);
  }

  isRegistered = true;

  return () => {
    disposers.forEach((d) => d.dispose());
    isRegistered = false;
  };
}
