import { initialize, version } from 'esbuild-wasm';

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

export async function loadTypscript(): Promise<void> {
  if (!initPromise) {
    initPromise = (async () => {
      try {
        await initialize({
          worker: true,
          wasmURL: `https://unpkg.com/esbuild-wasm@${version}/esbuild.wasm`,
        });
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

