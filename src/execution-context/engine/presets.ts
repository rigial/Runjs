import { ContextPreset } from './types';

export const CONTEXT_PRESETS: ContextPreset[] = [
  {
    id: 'function-invocation-square',
    title: 'Function Execution Context & Call Stack',
    category: 'Fundamentals',
    description:
      'The foundational Execution Context example: watch how square(n) creates a Function Execution Context, allocates local memory, returns a value, and pops off the Call Stack.',
    code: `var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

console.log('Result 1:', square2);
console.log('Result 2:', square4);
`,
    keyTakeaway:
      'Every function call in JavaScript creates a brand new Function Execution Context with its own isolated Memory Component (Variable Environment) and Thread of Execution. When the function returns, its execution context is completely popped off the Call Stack and cleaned up.',
  },
  {
    id: 'hoisting-var-function',
    title: 'Hoisting: var vs Function Declarations',
    category: 'Hoisting',
    description:
      'Understand why function declarations can be called before their definition, while var variables evaluate to undefined during Phase 1 (Memory Allocation).',
    code: `console.log('x before declaration:', x);
getName();

var x = 7;

function getName() {
  console.log('Hello from getName!');
}

console.log('x after declaration:', x);
`,
    keyTakeaway:
      'During Phase 1 (Memory Allocation Phase), the JavaScript engine allocates variables declared with var and assigns them "undefined". Function declarations, however, are allocated with their complete function definition, allowing them to be called before their position in code.',
  },
  {
    id: 'nested-call-stack',
    title: 'Nested Function Calls & Call Stack Depth',
    category: 'Functions',
    description:
      'Observe the Call Stack push multiple Function Execution Contexts as first() invokes second() which invokes third(), following LIFO order.',
    code: `var globalMessage = 'JavaScript Engine';

function first() {
  var a = 1;
  second();
}

function second() {
  var b = 2;
  third();
}

function third() {
  var c = 3;
  console.log('Deepest frame reached:', globalMessage, c);
}

first();
`,
    keyTakeaway:
      'The Call Stack maintains the execution state of all active functions. When first() calls second(), second() is pushed on top of first(). The top frame is always the currently running execution context.',
  },
  {
    id: 'temporal-dead-zone-tdz',
    title: 'Temporal Dead Zone (TDZ): let & const',
    category: 'Hoisting',
    description:
      'See how let and const are allocated in memory as <uninitialized> during Phase 1, creating the Temporal Dead Zone (TDZ).',
    code: `var a = 10;
let b = 20;
const c = 30;

console.log('a (var):', a);
console.log('b (let):', b);
console.log('c (const):', c);
`,
    keyTakeaway:
      'Unlike var (which is initialized with "undefined" during the Memory Allocation Phase), variables declared with let and const are stored as <uninitialized> in the Temporal Dead Zone (TDZ) until their declaration line is executed.',
  },
  {
    id: 'variable-shadowing',
    title: 'Variable Shadowing & Scope Chain',
    category: 'Fundamentals',
    description:
      'Watch how local variables in a Function Execution Context shadow global variables with the same name, and how the engine searches the scope chain.',
    code: `var count = 100;
var label = 'global';

function update() {
  var count = 10; // shadows global count
  console.log('Inside function count:', count);
  console.log('Inside function label:', label); // accesses global via scope chain
}

update();
console.log('Outside function count:', count);
`,
    keyTakeaway:
      'When resolving an identifier, the JavaScript engine looks at the active Function Execution Context first. If the variable is defined locally, it shadows outer variables of the same name. If not found locally, the engine traverses the scope chain up to the Global Execution Context.',
  },
  {
    id: 'function-expression-vs-declaration',
    title: 'Function Declaration vs Function Expression',
    category: 'Functions',
    description:
      'Contrast how function declarations are hoisted with their bodies, while function expressions assigned to var are initialized to undefined.',
    code: `console.log('typeof sayHello:', typeof sayHello);
console.log('typeof sayGoodbye:', typeof sayGoodbye);

function sayHello() {
  console.log('Hello!');
}

var sayGoodbye = function() {
  console.log('Goodbye!');
};

sayHello();
sayGoodbye();
`,
    keyTakeaway:
      'Function declarations are hoisted into memory with their full body during Phase 1. Function expressions (var sayGoodbye = function() {}) are treated as regular variables and initialized to undefined until line execution.',
  },
  {
    id: 'recursive-factorial',
    title: 'Recursion & Call Stack Frames',
    category: 'Advanced',
    description:
      'Trace a recursive factorial(3) computation as multiple Function Execution Contexts stack up and then unwind with return values.',
    code: `function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  var result = n * factorial(n - 1);
  return result;
}

var output = factorial(3);
console.log('Factorial of 3:', output);
`,
    keyTakeaway:
      'Each recursive call creates an independent Function Execution Context on the Call Stack with its own parameter n. The base case (n <= 1) stops recursion, after which each frame returns its value and pops off the stack sequentially.',
  },
  {
    id: 'parameter-mapping',
    title: 'Parameter Binding & Arguments',
    category: 'Fundamentals',
    description:
      'Inspect how arguments passed during function invocation are bound to parameters in the Function Execution Context memory.',
    code: `function calculateTotal(price, taxRate, discount) {
  var tax = price * taxRate;
  var subtotal = price + tax;
  var finalTotal = subtotal - discount;
  return finalTotal;
}

var total = calculateTotal(100, 0.1, 15);
console.log('Final Total:', total);
`,
    keyTakeaway:
      'During the creation of a Function Execution Context, parameters are allocated as local variables and initialized with the concrete values passed in the invocation arguments.',
  },
];
