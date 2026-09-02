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
        // Prefer local bundled wasm for offline support and zero-CDN exposure
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
