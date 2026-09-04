import { TOOL_CONFIGS, compileTsToJs, consumeTransferredCode, saveCrossToolTransfer } from '../crossToolTransfer';
import { simulateCode } from '../../visualizer/engine/simulator';
import { simulateExecutionContext } from '../../execution-context/engine/interpreter';

async function runTests() {
  console.log('=== Testing Cross-Tool Interlinking & TypeScript Conversion ===\n');

  // 1. Tool configurations test
  console.log('1. Verifying Tool Configurations...');
  const tools = ['js', 'visualizer', 'execution-context', 'ts'] as const;
  for (const toolId of tools) {
    const config = TOOL_CONFIGS[toolId];
    if (!config) {
      throw new Error(`Missing tool config for ${toolId}`);
    }
    if (!config.path || !config.storageKey || !config.name) {
      throw new Error(`Incomplete tool config for ${toolId}`);
    }
  }
  console.log('  ✓ All 4 tools configured correctly (js, visualizer, execution-context, ts)');

  // 2. TypeScript to JavaScript compilation tests
  console.log('\n2. Verifying TypeScript-to-JavaScript Transpilation...');

  const tsSnippet1 = `
interface User {
  id: number;
  name: string;
  role?: "admin" | "user";
}

const user: User = { id: 1, name: "Alice" };
console.log(user.name);
`;
  const result1 = await compileTsToJs(tsSnippet1);
  if (result1.error) {
    throw new Error(`Failed to compile basic TS interface: ${result1.error}`);
  }
  if (result1.code.includes('interface') || result1.code.includes(': User')) {
    throw new Error(`Compiled code still contains TypeScript types: ${result1.code}`);
  }
  console.log('  ✓ Interface and type annotations cleanly stripped');

  // Test with Event Loop simulation: Promise & Microtasks with TS types
  const tsEventLoopCode = `
interface TaskResult {
  done: boolean;
  value: number;
}

console.log("Start");

Promise.resolve().then(() => {
  const res: TaskResult = { done: true, value: 42 };
  console.log("Promise resolved:", res.value);
});

console.log("End");
`;
  const eventLoopCompiled = await compileTsToJs(tsEventLoopCode);
  if (eventLoopCompiled.error) {
    throw new Error(`Failed to compile event loop TS code: ${eventLoopCompiled.error}`);
  }

  // Verify it executes cleanly in Event Loop Simulator
  const elSimResult = simulateCode(eventLoopCompiled.code);
  if (!elSimResult.success) {
    throw new Error(`Event Loop Visualizer failed to simulate compiled TS code: ${elSimResult.error}`);
  }
  if (elSimResult.steps.length < 5) {
    throw new Error(`Event Loop simulation generated too few steps: ${elSimResult.steps.length}`);
  }
  console.log(`  ✓ Compiled TS code successfully simulated in Event Loop engine (${elSimResult.steps.length} steps)`);

  // Test with Execution Context simulation: Functions, hoisting, closures with TS types
  const tsContextCode = `
interface Calculator {
  (a: number, b: number): number;
}

const add: Calculator = function(a: number, b: number): number {
  const sum: number = a + b;
  return sum;
};

const result: number = add(10, 20);
console.log("Sum is:", result);
`;
  const contextCompiled = await compileTsToJs(tsContextCode);
  if (contextCompiled.error) {
    throw new Error(`Failed to compile execution context TS code: ${contextCompiled.error}`);
  }

  // Verify it executes cleanly in Execution Context Simulator
  const ecSimResult = simulateExecutionContext(contextCompiled.code);
  if (!ecSimResult.success) {
    throw new Error(`Execution Context Visualizer failed to simulate compiled TS code: ${ecSimResult.error}`);
  }
  if (ecSimResult.steps.length < 5) {
    throw new Error(`Execution Context simulation generated too few steps: ${ecSimResult.steps.length}`);
  }
  console.log(`  ✓ Compiled TS code successfully simulated in Execution Context engine (${ecSimResult.steps.length} steps)`);

  // 3. Error Handling Test
  console.log('\n3. Verifying Error Handling with Invalid TypeScript Syntax...');
  const invalidTs = `const broken = ;`;
  const errorResult = await compileTsToJs(invalidTs);
  if (!errorResult.error) {
    throw new Error('Expected syntax error for broken TS code, but compilation succeeded.');
  }
  console.log('  ✓ Syntax error accurately caught and returned:', errorResult.error.split('\n')[0]);

  // 4. State consumption test
  console.log('\n4. Verifying saveCrossToolTransfer and consumeTransferredCode helper...');
  const mockStorage: Record<string, string> = {};
  (globalThis as unknown as { sessionStorage: unknown }).sessionStorage = {
    getItem: (k: string) => mockStorage[k] ?? null,
    setItem: (k: string, v: string) => {
      mockStorage[k] = v;
    },
    removeItem: (k: string) => {
      delete mockStorage[k];
    },
  };

  saveCrossToolTransfer('visualizer', 'const x = 1;', 'TS Playground');
  const fromStorage = consumeTransferredCode('visualizer');
  if (
    !fromStorage ||
    fromStorage.code !== 'const x = 1;' ||
    fromStorage.source !== 'TS Playground'
  ) {
    throw new Error('Failed to save or consume code via sessionStorage');
  }
  console.log(
    '  ✓ Successfully transferred code via saveCrossToolTransfer and consumeTransferredCode'
  );

  const sampleCode = 'console.log("Hello from tests");';
  const fromState = consumeTransferredCode('js', {
    code: sampleCode,
    source: 'TypeScript',
  });
  if (!fromState || fromState.code !== sampleCode || fromState.source !== 'TypeScript') {
    throw new Error('Failed to consume code from location.state');
  }
  console.log('  ✓ Successfully consumed code from location.state');

  const fromSearch = consumeTransferredCode('ts', null, `?code=${encodeURIComponent(sampleCode)}`);
  if (!fromSearch || fromSearch.code !== sampleCode) {
    throw new Error('Failed to consume code from URL query string');
  }
  console.log('  ✓ Successfully consumed code from query parameters');

  console.log(
    '\nAll Cross-Tool Interlinking and TypeScript Transpilation tests passed successfully! 🎉\n'
  );
}

void runTests();
