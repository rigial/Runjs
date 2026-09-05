/* eslint-disable  @typescript-eslint/no-explicit-any */
import { addInfiniteLoopProtection } from '../utils/addInfiniteLoopProtection';
import { loadTypscript } from '../utils/commonFunction';
import { Problem, TestCase, TestResult, SubmissionResult } from './types';
import { transform } from 'esbuild-wasm';

export function deepClone<T>(
  value: T,
  seen = new WeakMap<object, unknown>()
): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  if (value instanceof Promise || typeof (value as any)?.then === 'function') {
    return value;
  }
  if (
    typeof (value as any)?.constructor === 'function' &&
    (value as any).constructor !== Object &&
    (value as any).constructor !== Array &&
    !(value instanceof Date) &&
    !(value instanceof RegExp) &&
    !(value instanceof Set) &&
    !(value instanceof Map)
  ) {
    return value;
  }
  if (value instanceof Date) {
    return new Date(value.getTime()) as unknown as T;
  }
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as unknown as T;
  }
  if (Array.isArray(value)) {
    if (seen.has(value)) return seen.get(value) as T;
    const copy: unknown[] = [];
    seen.set(value, copy);
    value.forEach((item, index) => (copy[index] = deepClone(item, seen)));
    return copy as T;
  }
  if (value instanceof Set) {
    const cloneSet = new Set();
    seen.set(value, cloneSet);
    value.forEach((v) => cloneSet.add(deepClone(v, seen)));
    return cloneSet as unknown as T;
  }
  if (value instanceof Map) {
    const cloneMap = new Map();
    seen.set(value, cloneMap);
    value.forEach((v, k) =>
      cloneMap.set(deepClone(k, seen), deepClone(v, seen))
    );
    return cloneMap as unknown as T;
  }
  const copy = {} as Record<string, any>;
  if (seen.has(value as object)) return seen.get(value as object) as T;
  seen.set(value as object, copy);
  for (const key of Object.keys(value)) {
    copy[key] = deepClone((value as Record<string, any>)[key], seen);
  }
  return copy as T;
}

export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (typeof a === 'number' && typeof b === 'number') {
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    return a === b;
  }
  if (a === null || b === null || a === undefined || b === undefined) {
    return a === b;
  }
  if (typeof a !== typeof b) return false;

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.flags === b.flags;
  }

  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    const aArr = Array.from(a);
    const bArr = Array.from(b);
    return deepEqual(aArr, bArr);
  }

  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, val] of a.entries()) {
      if (!b.has(key) || !deepEqual(val, b.get(key))) return false;
    }
    return true;
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
}

export function formatValueForDisplay(val: any): string {
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';
  if (typeof val === 'function') return val.toString();
  if (typeof val === 'string') return `"${val}"`;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  try {
    return JSON.stringify(val, null, 2);
  } catch {
    return String(val);
  }
}

export function isTopologicallyValidTaskSchedule(
  input: any,
  actual: any
): boolean {
  if (!Array.isArray(input) || input.length !== 2) return false;
  const [operations, opArgs] = input;
  if (
    !Array.isArray(operations) ||
    !Array.isArray(opArgs) ||
    !Array.isArray(actual)
  ) {
    return false;
  }
  if (actual.length !== operations.length) return false;

  if (operations[operations.length - 1] !== 'execute') return false;

  for (let i = 0; i < actual.length - 1; i++) {
    if (actual[i] !== null && actual[i] !== undefined) return false;
  }

  const execResult = actual[actual.length - 1];
  if (!Array.isArray(execResult)) return false;

  const dependencies = new Map<string, string[]>();
  const allTasks = new Set<string>();

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'addTask' && Array.isArray(opArgs[i])) {
      const [taskId, deps] = opArgs[i];
      if (taskId !== undefined) {
        allTasks.add(String(taskId));
        if (!dependencies.has(String(taskId))) {
          dependencies.set(String(taskId), []);
        }
        if (Array.isArray(deps)) {
          for (const d of deps) {
            allTasks.add(String(d));
            dependencies.get(String(taskId))!.push(String(d));
          }
        }
      }
    }
  }

  if (execResult.length !== allTasks.size) return false;

  const posMap = new Map<string, number>();
  for (let i = 0; i < execResult.length; i++) {
    const task = String(execResult[i]);
    if (!allTasks.has(task) || posMap.has(task)) return false;
    posMap.set(task, i);
  }

  for (const [task, deps] of dependencies.entries()) {
    const taskIdx = posMap.get(task)!;
    for (const dep of deps) {
      const depIdx = posMap.get(dep);
      if (depIdx === undefined || depIdx >= taskIdx) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Transpiles TypeScript source code to executable JavaScript via esbuild-wasm if needed.
 *
 * @param code The input source code.
 * @param language The language of the problem submission ('javascript' | 'typescript').
 * @returns Promise resolving to transpiled JavaScript code.
 */
async function compileIfTypeScript(
  code: string,
  language: 'javascript' | 'typescript'
): Promise<string> {
  if (language === 'typescript') {
    await loadTypscript();
    const result = await transform(code, {
      loader: 'ts',
      target: 'es2022',
    });
    return result.code;
  }
  return code;
}

function isWorkerSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof Worker !== 'undefined' &&
    typeof Blob !== 'undefined' &&
    typeof URL !== 'undefined' &&
    typeof URL.createObjectURL === 'function'
  );
}

function canUseWorkerInput(val: any, seen = new WeakSet<object>()): boolean {
  if (val === null || val === undefined) return true;
  if (typeof val === 'function' || typeof val === 'symbol') return false;
  if (typeof val !== 'object') return true;
  if (seen.has(val)) return true;
  seen.add(val);
  if (val instanceof Promise || typeof val.then === 'function') return false;
  if (Array.isArray(val))
    return val.every((item) => canUseWorkerInput(item, seen));
  if (val instanceof Map)
    return [...val].every(
      ([key, value]) =>
        canUseWorkerInput(key, seen) && canUseWorkerInput(value, seen)
    );
  if (val instanceof Set)
    return [...val].every((item) => canUseWorkerInput(item, seen));
  return Object.values(val).every((item) => canUseWorkerInput(item, seen));
}

function serializeWorkerInput(val: any, seen = new WeakSet<object>()): any {
  if (val === null || val === undefined) return val;
  if (typeof val !== 'object') return val;
  if (seen.has(val)) return '[Circular]';
  seen.add(val);
  if (val instanceof Date) return { __runjsType: 'Date', value: val.getTime() };
  if (val instanceof RegExp)
    return { __runjsType: 'RegExp', source: val.source, flags: val.flags };
  if (val instanceof Error)
    return {
      __runjsType: 'Error',
      name: val.name,
      message: val.message,
      stack: val.stack,
    };
  if (ArrayBuffer.isView(val))
    return {
      __runjsType: 'TypedArray',
      name: val.constructor.name,
      values: Array.from(val as unknown as ArrayLike<number>),
    };
  if (val instanceof Map)
    return {
      __runjsType: 'Map',
      entries: [...val].map(([key, value]) => [
        serializeWorkerInput(key, seen),
        serializeWorkerInput(value, seen),
      ]),
    };
  if (val instanceof Set)
    return {
      __runjsType: 'Set',
      values: [...val].map((item) => serializeWorkerInput(item, seen)),
    };
  if (Array.isArray(val)) {
    return val.map((item) => serializeWorkerInput(item, seen));
  }
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(val)) {
    if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue;
    out[k] = serializeWorkerInput(v, seen);
  }
  return out;
}

function runInWorker(
  runnerFunctionBody: string,
  input: any,
  timeoutMs: number,
  allowPolyfill: boolean
): Promise<{ actual: any; logs: string[] }> {
  return new Promise((resolve, reject) => {
    const workerScript = `
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
      const trustedPostMessage = self.postMessage.bind(self);
      try {
        if (!ALLOW_POLYFILL) {
          Object.freeze(Object.prototype);
          Object.freeze(Array.prototype);
        }
      } catch(e) {}

      function reviveWorkerInput(val) {
        if (val === null || val === undefined) return val;
        if (typeof val === 'object') {
          if (val.__runjsType === 'Date') return new Date(val.value);
          if (val.__runjsType === 'RegExp') return new RegExp(val.source, val.flags);
          if (val.__runjsType === 'Error') { const err = new Error(val.message); err.name = val.name; err.stack = val.stack; return err; }
          if (val.__runjsType === 'Map') return new Map(val.entries.map(([key, value]) => [reviveWorkerInput(key), reviveWorkerInput(value)]));
          if (val.__runjsType === 'Set') return new Set(val.values.map(reviveWorkerInput));
          if (val.__runjsType === 'TypedArray') { const types = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array }; const Type = types[val.name]; return Type ? new Type(val.values) : val.values; }
          if (Array.isArray(val)) {
            return val.map(reviveWorkerInput);
          }
          const out = {};
          for (const k of Object.keys(val)) {
            if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue;
            out[k] = reviveWorkerInput(val[k]);
          }
          return out;
        }
        return val;
      }

      self.onmessage = async function(e) {
        const { runnerCode, input, completionToken } = e.data;
        const logs = [];
        
        function formatVal(val) {
          if (val === undefined) return 'undefined';
          if (val === null) return 'null';
          if (typeof val === 'function') return val.toString();
          if (typeof val === 'string') return '"' + val + '"';
          if (typeof val === 'number' || typeof val === 'boolean') return String(val);
          try {
            return JSON.stringify(val, null, 2);
          } catch {
            return String(val);
          }
        }

        const captureConsole = {
          log: (...args) => logs.push(args.map((a) => formatVal(a)).join(' ')),
          info: (...args) => logs.push('[INFO] ' + args.map((a) => formatVal(a)).join(' ')),
          warn: (...args) => logs.push('[WARN] ' + args.map((a) => formatVal(a)).join(' ')),
          error: (...args) => logs.push('[ERR] ' + args.map((a) => formatVal(a)).join(' ')),
        };

        try {
          const factory = new Function('console', runnerCode);
          const execute = factory(captureConsole);
          const revivedInput = reviveWorkerInput(input);
          const actual = await execute(revivedInput);
          trustedPostMessage({ completionToken, success: true, actual, logs });
        } catch (err) {
          trustedPostMessage({ completionToken, success: false, error: err?.message || String(err), logs });
        }
      };
    `.replace('ALLOW_POLYFILL', String(allowPolyfill));

    let blob: Blob | null = null;
    let url: string | null = null;
    let worker: Worker | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const cleanup = () => {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      if (worker) {
        worker.terminate();
        worker = null;
      }
      if (url) {
        URL.revokeObjectURL(url);
        url = null;
      }
    };

    try {
      blob = new Blob([workerScript], { type: 'application/javascript' });
      url = URL.createObjectURL(blob);
      worker = new Worker(url);

      timerId = setTimeout(() => {
        cleanup();
        reject(
          new Error(
            `Time Limit Exceeded: Execution took longer than ${timeoutMs}ms.`
          )
        );
      }, timeoutMs);

      const completionToken = crypto.randomUUID();
      worker.onmessage = (event: MessageEvent) => {
        const data = event.data;
        if (!data || data.completionToken !== completionToken) return;
        cleanup();
        if (data.success) {
          resolve({ actual: data.actual, logs: data.logs || [] });
        } else {
          reject(new Error(data.error || 'Execution failed'));
        }
      };

      worker.onerror = (event: ErrorEvent) => {
        const errorMsg = event.message || 'Worker execution error';
        cleanup();
        reject(new Error(errorMsg));
      };

      worker.postMessage({
        runnerCode: runnerFunctionBody,
        input,
        completionToken,
      });
    } catch (err) {
      cleanup();
      reject(err);
    }
  });
}

export async function runSingleTestCase(
  problem: Problem,
  userCode: string,
  testCase: TestCase,
  index: number,
  language: 'javascript' | 'typescript' = 'javascript',
  timeoutMs = 3000
): Promise<TestResult> {
  const logs: string[] = [];
  const captureConsole = {
    log: (...args: any[]) =>
      logs.push(args.map((a) => formatValueForDisplay(a)).join(' ')),
    info: (...args: any[]) =>
      logs.push(
        '[INFO] ' + args.map((a) => formatValueForDisplay(a)).join(' ')
      ),
    warn: (...args: any[]) =>
      logs.push(
        '[WARN] ' + args.map((a) => formatValueForDisplay(a)).join(' ')
      ),
    error: (...args: any[]) =>
      logs.push('[ERR] ' + args.map((a) => formatValueForDisplay(a)).join(' ')),
  };

  const startTime = performance.now();

  try {
    const compiled = await compileIfTypeScript(userCode, language);
    const protectedCode = addInfiniteLoopProtection(compiled);

    let runnerFunctionBody = protectedCode + '\n';

    if (problem.isClass) {
      runnerFunctionBody += `
        const TargetClass = ${problem.functionName};
        if (typeof TargetClass !== 'function') {
          throw new Error("${problem.functionName} is not defined as a class or constructor.");
        }
        
        return async function(__inputArgs) {
          let operations, opArgs;
          if (Array.isArray(__inputArgs) && __inputArgs.length === 2 && Array.isArray(__inputArgs[0]) && Array.isArray(__inputArgs[1])) {
            operations = __inputArgs[0];
            opArgs = __inputArgs[1];
          } else if (__inputArgs && __inputArgs.operations && __inputArgs.args) {
            operations = __inputArgs.operations;
            opArgs = __inputArgs.args;
          } else {
            operations = __inputArgs[0];
            opArgs = __inputArgs.slice(1);
          }

          if (!operations || operations.length === 0) return [];
          const instance = new TargetClass(...(opArgs[0] || []));
          const results = [null];

          for (let i = 1; i < operations.length; i++) {
            const op = operations[i];
            const args = opArgs[i] || [];
            if (typeof instance[op] !== 'function') {
              throw new Error("Method '" + op + "' is not defined on " + TargetClass.name);
            }
            const res = await instance[op](...args);
            if (
              res === instance ||
              (res && typeof res === 'object' && typeof res.unsubscribe === 'function')
            ) {
              results.push(null);
            } else {
              results.push(res !== undefined ? res : null);
            }
          }
          return results;
        };
      `;
    } else if (problem.isPolyfill) {
      runnerFunctionBody += `
        return async function(__inputArgs) {
          const receiver = __inputArgs[0];
          const fnArgs = __inputArgs.slice(1);
          const methodName = "${problem.functionName}";
          
          if (receiver && typeof receiver[methodName] === 'function') {
            return await receiver[methodName](...fnArgs);
          } else if (typeof globalThis[methodName] === 'function') {
            return await globalThis[methodName](...__inputArgs);
          } else if (typeof ${problem.functionName} === 'function') {
            return await ${problem.functionName}(...__inputArgs);
          } else {
            throw new Error("Polyfill method '${problem.functionName}' was not found on the object prototype.");
          }
        };
      `;
    } else {
      runnerFunctionBody += `
        if (typeof ${problem.functionName} !== 'function') {
          throw new Error("Function '${problem.functionName}' is not defined. Please ensure your solution defines '${problem.functionName}'.");
        }
        return async function(__inputArgs) {
          if ('${problem.functionName}' === 'debounce') {
            let resVal = null;
            const origFn = typeof __inputArgs[0] === 'function' ? __inputArgs[0] : (x) => x;
            const wait = typeof __inputArgs[1] === 'number' ? __inputArgs[1] : 50;
            const callArg = __inputArgs[2] !== undefined ? __inputArgs[2] : 10;
            const wrappedFn = async (...args) => {
              resVal = await origFn(...args);
            };
            const debounced = ${problem.functionName}(wrappedFn, wait);
            debounced(callArg);
            await new Promise((resolve) => setTimeout(resolve, wait + 30));
            return resVal;
          }

          if ('${problem.functionName}' === 'promiseRace') {
            const promises = (__inputArgs[0] || []).map((p) => typeof p === 'function' ? p() : p);
            return await ${problem.functionName}(promises);
          }

          let res = await ${problem.functionName}(...__inputArgs);
          if (typeof res === 'function' && __inputArgs.length > 1) {
            const extra = __inputArgs[__inputArgs.length - 1];
            if (Array.isArray(extra)) {
              let cur = await res(...extra);
              if (typeof cur === 'function') {
                cur = res;
                for (const a of extra) {
                  if (typeof cur === 'function') cur = await cur(a);
                }
              }
              return cur;
            } else {
              return await res(extra);
            }
          }
          return res;
        };
      `;
    }

    const useWorker = isWorkerSupported() && canUseWorkerInput(testCase.input);
    const clonedInput = deepClone(testCase.input);
    const workerInput = useWorker ? serializeWorkerInput(testCase.input) : null;

    let actual: any;
    if (useWorker) {
      const workerRes = await runInWorker(
        runnerFunctionBody,
        workerInput,
        timeoutMs,
        Boolean(problem.isPolyfill)
      );
      actual = workerRes.actual;
      logs.push(...workerRes.logs);
    } else {
      let timerId: ReturnType<typeof setTimeout> | undefined;
      const timeoutPromise = new Promise<never>((_, reject) => {
        timerId = setTimeout(
          () =>
            reject(
              new Error(
                `Time Limit Exceeded: Execution took longer than ${timeoutMs}ms.`
              )
            ),
          timeoutMs
        );
      });

      const executionPromise = (async () => {
        const factory = new Function('console', runnerFunctionBody);
        const execute = factory(captureConsole);
        return await execute(clonedInput);
      })();

      try {
        actual = await Promise.race([executionPromise, timeoutPromise]);
      } finally {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
      }
    }

    const runtimeMs = Math.max(
      0.1,
      Math.round((performance.now() - startTime) * 100) / 100
    );

    const passed =
      problem.functionName === 'TaskSchedulerWithDependencies'
        ? isTopologicallyValidTaskSchedule(testCase.input, actual) ||
          deepEqual(actual, testCase.expected)
        : deepEqual(actual, testCase.expected);

    return {
      testCaseIndex: index,
      name: testCase.name || `Case ${index + 1}`,
      passed,
      input: testCase.input,
      expected: testCase.expected,
      actual,
      runtimeMs,
      logs,
      isHidden: testCase.isHidden,
    };
  } catch (error: any) {
    const runtimeMs = Math.max(
      0.1,
      Math.round((performance.now() - startTime) * 100) / 100
    );
    const message = error?.message || String(error);

    return {
      testCaseIndex: index,
      name: testCase.name || `Case ${index + 1}`,
      passed: false,
      input: testCase.input,
      expected: testCase.expected,
      actual: undefined,
      runtimeMs,
      logs,
      error: message,
      isHidden: testCase.isHidden,
    };
  }
}

export async function runVisibleTestCases(
  problem: Problem,
  userCode: string,
  customTestCases: TestCase[] = [],
  language: 'javascript' | 'typescript' = 'javascript'
): Promise<TestResult[]> {
  const allVisible = [...problem.testCases, ...customTestCases];
  const results: TestResult[] = [];

  for (let i = 0; i < allVisible.length; i++) {
    const tc = allVisible[i];
    const res = await runSingleTestCase(
      problem,
      userCode,
      tc,
      i,
      language,
      3000
    );
    results.push(res);
  }

  return results;
}

export async function submitProblemSolution(
  problem: Problem,
  userCode: string,
  language: 'javascript' | 'typescript' = 'javascript'
): Promise<SubmissionResult> {
  const allCases = [...problem.testCases, ...(problem.hiddenTestCases || [])];

  const results: TestResult[] = [];
  let passedCases = 0;
  let totalRuntime = 0;
  let failedCase: TestResult | undefined;
  let verdict: SubmissionResult['status'] = 'accepted';

  for (let i = 0; i < allCases.length; i++) {
    const tc = allCases[i];
    const res = await runSingleTestCase(
      problem,
      userCode,
      tc,
      i,
      language,
      3000
    );
    results.push(res);
    totalRuntime += res.runtimeMs;

    if (res.passed) {
      passedCases++;
    } else if (!failedCase) {
      failedCase = res;
      if (res.error?.includes('Time Limit Exceeded')) {
        verdict = 'time_limit_exceeded';
      } else if (res.error) {
        verdict = 'runtime_error';
      } else {
        verdict = 'wrong_answer';
      }
    }
  }

  if (passedCases !== allCases.length && verdict === 'accepted') {
    verdict = 'wrong_answer';
  }

  const perf =
    typeof window !== 'undefined' ? (window.performance as any) : null;
  const memoryEstimate = perf?.memory?.usedJSHeapSize
    ? Math.round((perf.memory.usedJSHeapSize / (1024 * 1024)) * 10) / 10
    : undefined;
  const totalRuntimeMs = Math.max(1, Math.round(totalRuntime * 10) / 10);

  return {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    problemSlug: problem.slug,
    status: verdict,
    totalCases: allCases.length,
    passedCases,
    runtimeMs: totalRuntimeMs,
    memoryMB: memoryEstimate,
    failedCase,
    allResults: results,
    timestamp: new Date().toISOString(),
    code: userCode,
    language,
  };
}
