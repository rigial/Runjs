import { simulateCode } from '../simulator';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    throw new Error(`FAIL: ${msg}`);
  }
  console.log(`✓ PASS: ${msg}`);
}

console.log('=== Running Simulator Tests ===\n');

// Test 1: Classic Event Loop
const code1 = `
console.log('1: Sync Start');

setTimeout(() => {
  console.log('2: Timeout 0ms');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask Promise');
});

console.log('4: Sync End');
`;

const res1 = simulateCode(code1);
assert(res1.success, 'Test 1 should succeed');
assert(res1.steps.length > 5, 'Test 1 should generate multiple steps');

// Logs should appear in order: 1: Sync Start, 4: Sync End, 3: Microtask Promise, 2: Timeout 0ms
const finalLogs1 = res1.steps[res1.steps.length - 1].logs.map((l) => l.args[0]);
console.log('Test 1 output:', finalLogs1);
assert(finalLogs1[0] === '1: Sync Start', 'First log is 1: Sync Start');
assert(finalLogs1[1] === '4: Sync End', 'Second log is 4: Sync End');
assert(
  finalLogs1[2] === '3: Microtask Promise',
  'Third log is 3: Microtask Promise (microtask before macrotask)'
);
assert(
  finalLogs1[3] === '2: Timeout 0ms',
  'Fourth log is 2: Timeout 0ms (macrotask after microtask)'
);

// Test 2: Nested Microtasks vs setTimeout
const code2 = `
setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  Promise.resolve().then(() => {
    console.log('Promise 2 (nested)');
  });
});
`;

const res2 = simulateCode(code2);
assert(res2.success, 'Test 2 should succeed');
const finalLogs2 = res2.steps[res2.steps.length - 1].logs.map((l) => l.args[0]);
console.log('Test 2 output:', finalLogs2);
assert(finalLogs2[0] === 'Promise 1', 'Promise 1 runs first');
assert(
  finalLogs2[1] === 'Promise 2 (nested)',
  'Nested promise runs before timeout'
);
assert(finalLogs2[2] === 'Timeout', 'Timeout runs after microtasks drained');

// Test 3: Synchronous Function Calls & Recursion
const code3 = `
function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

const result = square(5);
console.log('Result:', result);
`;

const res3 = simulateCode(code3);
assert(res3.success, 'Test 3 should succeed');
const finalLogs3 = res3.steps[res3.steps.length - 1].logs.map((l) =>
  l.args.join(' ')
);
console.log('Test 3 output:', finalLogs3);
assert(finalLogs3[0] === 'Result: 25', 'Result is 25');

// Test 4: Security - Constructor Escape & Host Function Denial
const exploitCode = `
const fn = [].constructor.constructor("console.log('EXPLOIT_EXECUTED')");
fn();
`;
const resExploit = simulateCode(exploitCode);
assert(
  resExploit.success,
  'Exploit simulation should parse without fatal crash'
);
const exploitLogs = resExploit.steps[resExploit.steps.length - 1].logs.map(
  (l) => l.args.join(' ')
);
assert(
  !exploitLogs.includes('EXPLOIT_EXECUTED'),
  'Constructor chaining exploit must NOT execute host Function'
);

// Test 5: Security - Prototype Pollution via ObjectExpression
const protoPollutionCode = `
const obj = { "__proto__": { "polluted": true } };
`;
simulateCode(protoPollutionCode);
assert(
  !(Object.prototype as Record<string, unknown>).polluted,
  'Object.prototype must NOT be polluted'
);

console.log('\nAll simulator tests passed successfully!');
