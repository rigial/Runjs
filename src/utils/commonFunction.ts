/**
 * Triggers a browser download for JavaScript or TypeScript source code.
 *
 * @param javascriptCode The source code content to download.
 * @param fileName The output filename (without extension).
 * @param lang File extension/language type ('js' or 'ts').
 */
export function saveJSTSFile(
  javascriptCode: string,
  fileName: string,
  lang: 'js' | 'ts'
) {
  const file = `${fileName}.${lang}`;
  const fileContent = javascriptCode;
  const blob = new Blob([fileContent], { type: 'text/javascript' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = file;
  link.click();
  URL.revokeObjectURL(link.href);
}

let initPromise: Promise<void> | null = null;

/**
 * Initializes the esbuild WebAssembly service using the matching package version from unpkg.
 * Subsequent calls reuse the existing initialization promise.
 *
 * @returns Promise that resolves once esbuild-wasm is ready for compilation.
 */
export async function loadTypscript(): Promise<void> {
  if (!initPromise) {
    initPromise = (async () => {
      try {
        const { initialize, version } = await import('esbuild-wasm');
        // Node.js environment (for automated tests and prerendering)
        if (typeof window === 'undefined') {
          try {
            await initialize({});
          } catch (nodeErr) {
            if (
              nodeErr instanceof Error &&
              nodeErr.message.includes(
                'Cannot call "initialize" more than once'
              )
            ) {
              return;
            }
            throw nodeErr;
          }
          return;
        }

        // Browser environment: Prefer local bundled wasm for offline support and zero-CDN exposure
        try {
          await initialize({
            worker: true,
            wasmURL: '/esbuild.wasm',
          });
        } catch (localErr) {
          if (
            localErr instanceof Error &&
            localErr.message.includes('Cannot call "initialize" more than once')
          ) {
            return;
          }
          // Fallback to unpkg if static asset cannot be resolved
          await initialize({
            worker: true,
            wasmURL: `https://unpkg.com/esbuild-wasm@${version}/esbuild.wasm`,
          });
        }
      } catch (error) {
        if (
          error instanceof Error &&
          error.message.includes('Cannot call "initialize" more than once')
        ) {
          return;
        }
        initPromise = null;
        console.error('Failed to initialize esbuild-wasm:', error);
        throw error;
      }
    })();
  }
  return initPromise;
}

/**
 * Determines whether a React playground project uses TypeScript (TSX) or JavaScript (JSX).
 */
export function getReactFlavor(project: {
  files?: Record<string, string>;
  activeFile?: string;
  template?: string;
  tag?: string;
  fileName?: string;
}): 'tsx' | 'jsx' {
  if (project.template === 'vite-react-ts') return 'tsx';
  if (project.template === 'vite-react') return 'jsx';
  if (
    project.tag?.toLowerCase() === 'react-ts' ||
    project.tag?.toLowerCase() === 'tsx' ||
    project.tag?.toLowerCase() === 'ts'
  ) {
    return 'tsx';
  }
  if (
    project.activeFile?.endsWith('.tsx') ||
    project.activeFile?.endsWith('.ts')
  ) {
    return 'tsx';
  }
  if (project.files) {
    if (
      '/src/App.tsx' in project.files ||
      '/src/main.tsx' in project.files ||
      '/tsconfig.json' in project.files
    ) {
      return 'tsx';
    }
    if ('/src/App.jsx' in project.files || '/src/main.jsx' in project.files) {
      return 'jsx';
    }
  }
  if (project.fileName?.endsWith('.tsx')) return 'tsx';
  return 'jsx';
}
