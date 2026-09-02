import { VisualizerPreset } from './types';

export const VISUALIZER_PRESETS: VisualizerPreset[] = [
  {
    id: 'classic-event-loop',
    title: 'Classic: Sync vs Microtask vs Task',
    category: 'Fundamentals',
    description:
      'The foundational interview question: Understand why Promises execute before zero-delay setTimeouts.',
    code: `console.log('1: Synchronous Start');

setTimeout(() => {
  console.log('2: Macrotask (setTimeout 0ms)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask (Promise.then)');
});

console.log('4: Synchronous End');
`,
    keyTakeaway:
      'Synchronous code executes first on the Call Stack. When the stack clears, the Event Loop drains the Microtask Queue (Promises) completely before processing the Task Queue (setTimeout).',
  },
  {
    id: 'microtask-priority',
    title: 'Microtask Queue Draining',
    category: 'Promises',
    description:
      'Observe how ALL waiting microtasks must be drained before the event loop turns to the next macrotask.',
    code: `console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise A');
});

Promise.resolve().then(() => {
  console.log('Promise B');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');
`,
    keyTakeaway:
      'The Event Loop will never execute a macrotask while any microtasks are waiting. Promise A and Promise B both run before Timeout 1.',
  },
  {
    id: 'nested-microtasks',
    title: 'Chained & Nested Microtasks',
    category: 'Promises',
    description:
      'What happens when a Promise creates another Promise? Does setTimeout get a chance in between?',
    code: `setTimeout(() => {
  console.log('Macrotask 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask 1');
  Promise.resolve().then(() => {
    console.log('Microtask 2 (nested)');
  });
});

setTimeout(() => {
  console.log('Macrotask 2');
}, 0);
`,
    keyTakeaway:
      'Newly scheduled microtasks inside another microtask are enqueued and drained immediately in the same cycle before the event loop advances to any Macrotask.',
  },
  {
    id: 'queue-microtask',
    title: 'Explicit queueMicrotask() API',
    category: 'Fundamentals',
    description:
      'Learn how the standard queueMicrotask() function provides direct access to the microtask queue without Promises.',
    code: `console.log('Synchronous script begins');

queueMicrotask(() => {
  console.log('queueMicrotask callback executed');
});

setTimeout(() => {
  console.log('setTimeout callback executed');
}, 0);

console.log('Synchronous script ends');
`,
    keyTakeaway:
      'queueMicrotask() provides a clean, standardized way to schedule work on the Microtask Queue without the overhead of creating or allocating a Promise.',
  },
  {
    id: 'multiple-timer-delays',
    title: 'Timer Ordering & Web APIs',
    category: 'Timers',
    description:
      'Watch Web APIs manage background timers with different delays and move them to the Task Queue in order.',
    code: `console.log('Setting timers...');

setTimeout(() => {
  console.log('Timer 1: 50ms delay');
}, 50);

setTimeout(() => {
  console.log('Timer 2: 0ms delay');
}, 0);

setTimeout(() => {
  console.log('Timer 3: 20ms delay');
}, 20);

console.log('Timers scheduled.');
`,
    keyTakeaway:
      'The browser Web API environment tracks timers concurrently. Whichever timer reaches 0ms first gets moved into the Task Queue first.',
  },
  {
    id: 'call-stack-recursion',
    title: 'Call Stack Frames & Recursion',
    category: 'Fundamentals',
    description:
      'Visualize how nested function calls push new execution frames onto the stack and pop them in LIFO order.',
    code: `function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printStats(x) {
  const sq = square(x);
  console.log('Square of', x, 'is', sq);
}

printStats(5);
`,
    keyTakeaway:
      'The Call Stack is a LIFO (Last In, First Out) data structure. When a function finishes execution, its stack frame is popped and control returns to the caller.',
  },
  {
    id: 'promise-executor-sync',
    title: 'Promise Executor is Synchronous!',
    category: 'Promises',
    description:
      'A common JavaScript misconception: The callback passed to `new Promise(...)` runs synchronously right away!',
    code: `console.log('1: Before Promise');

new Promise((resolve) => {
  console.log('2: Inside Promise Executor');
  resolve('resolved value');
}).then((val) => {
  console.log('4: Inside .then():', val);
});

console.log('3: After Promise');
`,
    keyTakeaway:
      'The executor function passed into new Promise(executor) executes immediately and synchronously on the current Call Stack. Only the .then() handler is deferred to the Microtask Queue!',
  },
  {
    id: 'factorial-callstack',
    title: 'Recursive Factorial Stack Depth',
    category: 'Advanced',
    description:
      'Watch the Call Stack grow with recursive frames until the base case is reached, then unwind.',
    code: `function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const result = factorial(4);
console.log('Factorial(4) =', result);
`,
    keyTakeaway:
      'Each recursive call creates a new execution context on the Call Stack. Too many recursive calls without a base case would cause a Stack Overflow.',
  },
];
