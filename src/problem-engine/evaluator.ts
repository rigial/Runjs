/* eslint-disable  @typescript-eslint/no-explicit-any */
import { addInfiniteLoopProtection } from '../utils/addInfiniteLoopProtection';
import { Problem, TestCase, TestResult, SubmissionResult } from './types';
import { transform } from 'esbuild-wasm';

export function deepClone<T>(value: T): T {
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
    return value.map((item) => deepClone(item)) as unknown as T;
  }
  if (value instanceof Set) {
    const cloneSet = new Set();
    value.forEach((v) => cloneSet.add(deepClone(v)));
    return cloneSet as unknown as T;
  }
  if (value instanceof Map) {
    const cloneMap = new Map();
    value.forEach((v, k) => cloneMap.set(deepClone(k), deepClone(v)));
    return cloneMap as unknown as T;
  }
  const copy = {} as Record<string, any>;
  for (const key of Object.keys(value)) {
    copy[key] = deepClone((value as Record<string, any>)[key]);
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

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
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

async function compileIfTypeScript(
  code: string,
  language: 'javascript' | 'typescript'
): Promise<string> {
  if (language === 'typescript') {
    try {
      const result = await transform(code, {
        loader: 'ts',
        target: 'es2022',
      });
      return result.code;
    } catch {
      return code;
    }
  }
  return code;
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
            results.push(res !== undefined ? res : null);
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
          return await ${problem.functionName}(...__inputArgs);
        };
      `;
    }

    const factory = new Function('console', runnerFunctionBody);
    const execute = factory(captureConsole);

    const clonedInput = deepClone(testCase.input);

    const executionPromise = execute(clonedInput);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              `Time Limit Exceeded: Execution took longer than ${timeoutMs}ms.`
            )
          ),
        timeoutMs
      )
    );

    const actual = await Promise.race([executionPromise, timeoutPromise]);
    const runtimeMs = Math.max(
      0.1,
      Math.round((performance.now() - startTime) * 100) / 100
    );

    const passed = deepEqual(actual, testCase.expected);

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

  const memoryEstimate = Math.round((42 + Math.random() * 8.5) * 10) / 10;
  const avgRuntime = Math.max(1, Math.round(totalRuntime));

  return {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    problemSlug: problem.slug,
    status: verdict,
    totalCases: allCases.length,
    passedCases,
    runtimeMs: avgRuntime,
    memoryMB: memoryEstimate,
    failedCase,
    allResults: results,
    timestamp: new Date().toISOString(),
    code: userCode,
    language,
  };
}
