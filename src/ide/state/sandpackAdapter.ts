import { normalizePath } from '../fs/pathUtils';

/**
 * Prepares the file tree for Sandpack's in-browser React runtime.
 * Bridges Vite project conventions (/src/main.jsx, /index.html) with Sandpack's
 * bundler expectations, preventing phantom template files (e.g. "Hello world" /App.js)
 * from shadowing user code.
 */
export function prepareSandpackFiles(
  files: Record<string, string>,
  templateId = 'vite-react'
): Record<string, string> {
  const result: Record<string, string> = {};

  // Copy and normalize all existing project files
  for (const [rawPath, content] of Object.entries(files)) {
    const normPath = normalizePath(rawPath);
    // Exclude node_modules virtual files
    if (!normPath.startsWith('/node_modules/')) {
      result[normPath] = content;
    }
  }

  const isTypeScript =
    templateId === 'vite-react-ts' ||
    Boolean(result['/src/App.tsx']) ||
    Boolean(result['/src/main.tsx']);

  const defaultMainEntry = isTypeScript ? '/src/main.tsx' : '/src/main.jsx';
  const defaultAppEntry = isTypeScript ? '/src/App.tsx' : '/src/App.jsx';

  // 1. Determine main entry point
  let detectedEntry = defaultMainEntry;
  if (result['/package.json']) {
    try {
      const parsedPkg = JSON.parse(result['/package.json']);
      if (parsedPkg.main && result[normalizePath(parsedPkg.main)]) {
        detectedEntry = normalizePath(parsedPkg.main);
      }
    } catch {
      // Keep detectedEntry fallback
    }
  }

  // If detected entry doesn't exist in files, fallback to first available entry
  if (!result[detectedEntry]) {
    const candidates = [
      defaultMainEntry,
      defaultAppEntry,
      '/src/index.jsx',
      '/src/index.tsx',
      '/src/index.js',
      '/src/App.js',
      '/index.jsx',
      '/index.tsx',
      '/index.js',
      '/App.jsx',
      '/App.tsx',
      '/App.js',
    ];
    for (const candidate of candidates) {
      if (result[candidate]) {
        detectedEntry = candidate;
        break;
      }
    }
  }

  // 2. Ensure /package.json specifies main entry
  try {
    const currentPkg = result['/package.json']
      ? JSON.parse(result['/package.json'])
      : {};
    currentPkg.main = detectedEntry;
    result['/package.json'] = JSON.stringify(currentPkg, null, 2);
  } catch {
    // If parsing failed, set a clean package.json
    result['/package.json'] = JSON.stringify(
      {
        name: 'react-playground-app',
        private: true,
        version: '0.0.0',
        type: 'module',
        main: detectedEntry,
        dependencies: {
          react: '^19.0.0',
          'react-dom': '^19.0.0',
        },
      },
      null,
      2
    );
  }

  // 3. Ensure HTML template for CodeSandbox CRA packager
  // CodeSandbox client looks for /public/index.html or /index.html
  const htmlContent =
    result['/index.html'] ||
    result['/public/index.html'] ||
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RunJS React Preview</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  // Provide both /index.html and /public/index.html so all packager types find the template
  result['/index.html'] = htmlContent;
  result['/public/index.html'] = htmlContent;

  // 4. Provide Bridge Shims for /index.js and /App.js
  // Sandpack's built-in REACT_TEMPLATE defines:
  // - /App.js -> "<h1>Hello world</h1>"
  // - /index.js -> imports ./App
  // If the user hasn't explicitly authored their own root /index.js or /App.js,
  // we bridge them to user's actual main and App files so Sandpack's fallback resolution
  // never falls back to the default "Hello world" template!
  const hasUserAppJs = Boolean(result['/App.js']);
  const hasUserIndexJs = Boolean(result['/index.js']);

  if (!hasUserIndexJs) {
    const entryWithoutExt = detectedEntry.replace(/\.[^/.]+$/, '');
    result['/index.js'] = `// RunJS Bundler Bridge
import '.${entryWithoutExt}';
`;
  }

  if (!hasUserAppJs) {
    const appTarget = result['/src/App.tsx']
      ? './src/App'
      : result['/src/App.jsx']
        ? './src/App'
        : result['/App.tsx']
          ? './App'
          : result['/App.jsx']
            ? './App'
            : null;

    if (appTarget) {
      result['/App.js'] = `// RunJS Bundler Bridge
export { default } from '${appTarget}';
`;
    }
  }

  return result;
}
