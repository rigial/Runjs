export type SandboxLogMethod = 'log' | 'info' | 'warn' | 'error';

export interface SandboxLogEntry {
  type: SandboxLogMethod;
  args: unknown[];
  timestamp: number;
}

export interface SandboxRunOptions {
  timeoutMs?: number;
  onLog?: (type: SandboxLogMethod, args: unknown[]) => void;
}

export interface SandboxResult {
  logs: SandboxLogEntry[];
  error?: string;
  durationMs: number;
}

const WORKER_BOOTSTRAP = `
(function() {
  // Strip sensitive host storage and network capabilities from the worker
  try { delete self.indexedDB; } catch(e) {}
  try { delete self.caches; } catch(e) {}
  try { delete self.fetch; } catch(e) {}
  try { delete self.XMLHttpRequest; } catch(e) {}
  try { delete self.importScripts; } catch(e) {}
  try { delete self.WebSocket; } catch(e) {}
  try { delete self.EventSource; } catch(e) {}
  try { delete self.BroadcastChannel; } catch(e) {}
  try { delete self.SharedWorker; } catch(e) {}

  // Freeze prototypes to prevent prototype poisoning
  try {
    Object.freeze(Object.prototype);
    Object.freeze(Array.prototype);
    Object.freeze(Function.prototype);
  } catch (e) {}

  function serializeArg(val, depth, seen) {
    if (depth === undefined) depth = 0;
    if (seen === undefined) seen = new WeakSet();
    if (depth > 3) return '[Object]';
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';

    const type = typeof val;
    if (type === 'number' || type === 'string' || type === 'boolean') return val;
    if (type === 'bigint') return val.toString() + 'n';
    if (type === 'symbol') return val.toString();
    if (type === 'function') return '[Function: ' + (val.name || 'anonymous') + ']';

    if (val instanceof Error) {
      return {
        __isError: true,
        name: val.name,
        message: val.message,
        stack: val.stack
      };
    }

    if (type === 'object') {
      if (seen.has(val)) return '[Circular]';
      seen.add(val);

      if (Array.isArray(val)) {
        return val.slice(0, 50).map(function(item) {
          return serializeArg(item, depth + 1, seen);
        });
      }

      const copy = {};
      const keys = Object.keys(val).slice(0, 50);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue;
        try {
          copy[k] = serializeArg(val[k], depth + 1, seen);
        } catch (err) {
          copy[k] = '[Unserializable]';
        }
      }
      return copy;
    }

    return String(val);
  }

  function postLog(method, args) {
    try {
      const serialized = args.map(function(a) { return serializeArg(a); });
      self.postMessage({ type: 'LOG', method: method, args: serialized });
    } catch(e) {}
  }

  const customConsole = {
    log: function() { postLog('log', Array.prototype.slice.call(arguments)); },
    info: function() { postLog('info', Array.prototype.slice.call(arguments)); },
    warn: function() { postLog('warn', Array.prototype.slice.call(arguments)); },
    error: function() { postLog('error', Array.prototype.slice.call(arguments)); },
    clear: function() { self.postMessage({ type: 'CLEAR' }); }
  };

  self.onmessage = async function(e) {
    const code = e.data && e.data.code;
    if (typeof code !== 'string') return;

    try {
      // Execute in sandboxed worker scope with shadowed console
      const runner = new Function('console', code);
      const res = await runner(customConsole);
      self.postMessage({ type: 'DONE', result: serializeArg(res) });
    } catch (err) {
      const msg = err && err.message ? err.message : String(err);
      postLog('error', [msg]);
      self.postMessage({ type: 'ERROR', error: msg });
    }
  };
})();
`;

/**
 * Executes arbitrary user JavaScript inside an isolated Web Worker sandbox with
 * stripped storage/network access and strict timeout protection.
 */
export function runInSandbox(
  code: string,
  options: SandboxRunOptions = {}
): Promise<SandboxResult> {
  const timeoutMs = options.timeoutMs ?? 5000;
  const onLog = options.onLog;

  return new Promise((resolve) => {
    const startTime = performance.now();
    const logs: SandboxLogEntry[] = [];
    let blob: Blob | null = null;
    let url: string | null = null;
    let worker: Worker | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;
    let isSettled = false;

    const cleanup = () => {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      if (worker) {
        try {
          worker.terminate();
        } catch {
          // Worker might already be terminated
        }
        worker = null;
      }
      if (url) {
        try {
          URL.revokeObjectURL(url);
        } catch {
          // URL might already be revoked
        }
        url = null;
      }
    };

    const finish = (error?: string) => {
      if (isSettled) return;
      isSettled = true;
      cleanup();
      const durationMs = Math.max(
        0.1,
        Math.round(performance.now() - startTime)
      );
      resolve({ logs, error, durationMs });
    };

    try {
      blob = new Blob([WORKER_BOOTSTRAP], { type: 'application/javascript' });
      url = URL.createObjectURL(blob);
      worker = new Worker(url);

      timerId = setTimeout(() => {
        const timeoutMsg = `Time Limit Exceeded: Execution took longer than ${timeoutMs}ms.`;
        onLog?.('error', [timeoutMsg]);
        logs.push({
          type: 'error',
          args: [timeoutMsg],
          timestamp: Date.now(),
        });
        finish(timeoutMsg);
      }, timeoutMs);

      worker.onmessage = (event: MessageEvent) => {
        const data = event.data;
        if (!data || typeof data !== 'object') return;

        if (data.type === 'LOG' && data.method && Array.isArray(data.args)) {
          const method = data.method as SandboxLogMethod;
          logs.push({
            type: method,
            args: data.args,
            timestamp: Date.now(),
          });
          onLog?.(method, data.args);
        } else if (data.type === 'DONE') {
          finish();
        } else if (data.type === 'ERROR') {
          finish(data.error);
        }
      };

      worker.onerror = (event: ErrorEvent) => {
        const errorMsg = event.message || 'Worker execution error';
        onLog?.('error', [errorMsg]);
        logs.push({
          type: 'error',
          args: [errorMsg],
          timestamp: Date.now(),
        });
        finish(errorMsg);
      };

      worker.postMessage({ code });
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      onLog?.('error', [errorMsg]);
      logs.push({
        type: 'error',
        args: [errorMsg],
        timestamp: Date.now(),
      });
      finish(errorMsg);
    }
  });
}
