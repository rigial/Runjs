import { transform } from 'esbuild-wasm';
import { loadTypscript } from './commonFunction';

export type ToolId = 'js' | 'visualizer' | 'execution-context' | 'ts';

export interface ToolConfig {
  id: ToolId;
  name: string;
  shortName: string;
  path: string;
  storageKey: string;
  description: string;
  badge: string;
  colorClass: string;
  bgLightClass: string;
  borderClass: string;
}

export const TOOL_CONFIGS: Record<ToolId, ToolConfig> = {
  js: {
    id: 'js',
    name: 'JavaScript Playground',
    shortName: 'JS Playground',
    path: '/js',
    storageKey: 'runjs_js_code',
    description: 'In-browser ES2024+ sandbox with Luna console',
    badge: 'JavaScript',
    colorClass: 'text-amber-500',
    bgLightClass: 'bg-amber-500/10 hover:bg-amber-500/20',
    borderClass: 'border-amber-500/30',
  },
  visualizer: {
    id: 'visualizer',
    name: 'Event Loop Visualizer',
    shortName: 'Event Loop',
    path: '/visualizer',
    storageKey: 'runjs_visualizer_code',
    description: 'Step through Call Stack, Microtasks & Timers',
    badge: 'Event Loop',
    colorClass: 'text-purple-500',
    bgLightClass: 'bg-purple-500/10 hover:bg-purple-500/20',
    borderClass: 'border-purple-500/30',
  },
  'execution-context': {
    id: 'execution-context',
    name: 'Execution Context Visualizer',
    shortName: 'Execution Context',
    path: '/execution-context',
    storageKey: 'runjs_context_visualizer_code',
    description: 'Inspect GEC, FEC, Scope Chain & Hoisting',
    badge: 'Call Stack',
    colorClass: 'text-teal-500',
    bgLightClass: 'bg-teal-500/10 hover:bg-teal-500/20',
    borderClass: 'border-teal-500/30',
  },
  ts: {
    id: 'ts',
    name: 'TypeScript Playground',
    shortName: 'TS Playground',
    path: '/ts',
    storageKey: 'runjs_ts_code',
    description: 'Static type checking, diagnostics & compilation',
    badge: 'TypeScript',
    colorClass: 'text-blue-500',
    bgLightClass: 'bg-blue-500/10 hover:bg-blue-500/20',
    borderClass: 'border-blue-500/30',
  },
};

/**
 * Compiles TypeScript source code to clean, modern JavaScript using esbuild-wasm.
 * Removes interfaces, type annotations, and TypeScript-only constructs.
 */
export async function compileTsToJs(
  tsCode: string
): Promise<{ code: string; error?: string }> {
  if (!tsCode || !tsCode.trim()) {
    return { code: tsCode || '' };
  }

  try {
    await loadTypscript();
    const result = await transform(tsCode, {
      loader: 'ts',
      target: 'es2022',
    });
    return { code: result.code };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { code: tsCode, error: message };
  }
}

/**
 * Stores code in sessionStorage for the given target tool to enable robust
 * cross-page or direct link transfer.
 */
export function saveCrossToolTransfer(
  targetTool: ToolId,
  code: string,
  sourceTitle?: string
): void {
  try {
    const config = TOOL_CONFIGS[targetTool];
    if (config) {
      sessionStorage.setItem(config.storageKey, code);
      if (sourceTitle) {
        sessionStorage.setItem(`${config.storageKey}_source`, sourceTitle);
      }
    }
  } catch {
    // sessionStorage might be disabled or restricted in private browsing mode
  }
}

/**
 * Consumes transferred code on mount/navigation from location state,
 * sessionStorage, or URL query parameters. Clears one-shot sessionStorage afterwards.
 */
export function consumeTransferredCode(
  tool: ToolId,
  locationState?: { code?: string; source?: string } | null,
  search?: string
): { code: string; source?: string } | null {
  const config = TOOL_CONFIGS[tool];
  if (!config) return null;

  let codeToLoad = locationState?.code;
  let sourceToLoad = locationState?.source;
  const sourceStorageKey = `${config.storageKey}_source`;

  try {
    if (codeToLoad === undefined || codeToLoad === null) {
      const stored = sessionStorage.getItem(config.storageKey);
      if (stored !== null) {
        codeToLoad = stored;
      }
      const storedSource = sessionStorage.getItem(sourceStorageKey);
      if (storedSource) {
        sourceToLoad = storedSource;
      }
    }
    // The navigation-state path is preferred, but its fallback must still be
    // consumed so it cannot overwrite a later visit to this tool.
    if (codeToLoad !== undefined && codeToLoad !== null) {
      sessionStorage.removeItem(config.storageKey);
      sessionStorage.removeItem(sourceStorageKey);
    }
  } catch {
    // ignore
  }

  if ((codeToLoad === undefined || codeToLoad === null) && search) {
    try {
      const searchParams = new URLSearchParams(search);
      const queryCode = searchParams.get('code');
      if (queryCode) {
        codeToLoad = queryCode;
        sourceToLoad = 'Shared Link';
      }
    } catch {
      // ignore
    }
  }

  if (codeToLoad !== undefined && codeToLoad !== null) {
    return { code: codeToLoad, source: sourceToLoad };
  }

  return null;
}
