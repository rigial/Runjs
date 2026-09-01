// Auto-generated rewritten beginner-friendly curriculum for RunJS
import type { Lesson } from '../../types';

export const part3Lessons: Lesson[] = [
  {
    "slug": "recursion",
    "title": "Recursion and Stack",
    "description": "Learn how functions call themselves to solve sub-problems, the base condition, and execution context limits.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "What is Recursion?",
        "paragraphs": [
          "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.",
          "Every recursive function requires two things: a Base Case (which stops the recursion) and a Recursive Step (which reduces the input toward the base case)."
        ],
        "codeExamples": [
          {
            "title": "Factorial and Countdown",
            "code": "function factorial(n) {\n  // 1. Base case:\n  if (n <= 1) return 1;\n  // 2. Recursive step:\n  return n * factorial(n - 1);\n}\n\nconsole.log('5! =', factorial(5)); // 120",
            "output": "5! = 120",
            "explanation": "factorial(5) evaluates to 5 * 4 * 3 * 2 * 1 by unwinding the call stack."
          }
        ],
        "callout": {
          "type": "warning",
          "text": "Always ensure your base case is reachable! A recursive function without a base case causes an infinite loop that crashes with 'Maximum call stack size exceeded'."
        }
      }
    ],
    "exercises": [
      {
        "title": "Recursive Sum of Array",
        "description": "Write a recursive function sumTo(n) that sums all numbers from 1 to n (e.g. sumTo(4) = 4 + 3 + 2 + 1 = 10).",
        "starterCode": "function sumTo(n) {\n  if (n <= 1) return n;\n  return n + sumTo(n - 1);\n}\n\nconsole.log(sumTo(4));",
        "solution": "function sumTo(n) {\n  if (n <= 1) return n;\n  return n + sumTo(n - 1);\n}\nconsole.log(sumTo(4));",
        "hints": [
          "Base case: if (n <= 1) return n; otherwise return n + sumTo(n - 1)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens if a recursive function never reaches its base case?",
        "options": [
          "It exhausts memory and throws a RangeError: Maximum call stack size exceeded",
          "The browser reboots the computer",
          "It converts to a while loop automatically",
          "It returns null"
        ],
        "correctIndex": 0,
        "explanation": "Each recursive call adds a frame to the execution stack; exceeding the engine limit triggers a stack overflow RangeError."
      }
    ],
    "keyTakeaways": [
      "Recursion breaks complex tasks into simpler self-similar steps.",
      "Always define a clear base case to terminate execution safely.",
      "Iterative loops use less memory than deep recursive call stacks."
    ],
    "tags": [
      "recursion",
      "call-stack",
      "algorithms",
      "functions"
    ]
  },
  {
    "slug": "rest-parameters-spread",
    "title": "Rest Parameters and Spread Syntax",
    "description": "Gather arbitrary arguments into an array with ...rest and expand arrays or objects into elements with ...spread.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Rest (...) vs Spread (...)",
        "paragraphs": [
          "The three dots (...) serve two complementary purposes in modern JavaScript:",
          "1. Rest Parameters: Gathers multiple function arguments into a single real array parameter.",
          "2. Spread Syntax: Expands an iterable (like an array or string) or object into individual elements or properties."
        ],
        "codeExamples": [
          {
            "title": "Rest and Spread in Action",
            "code": "// Rest parameters gather arguments:\nfunction sumAll(...numbers) {\n  return numbers.reduce((sum, n) => sum + n, 0);\n}\nconsole.log('Sum:', sumAll(1, 2, 3, 4, 5)); // 15\n\n// Spread syntax expands elements:\nconst nums1 = [1, 2];\nconst nums2 = [3, 4];\nconst merged = [...nums1, ...nums2, 5];\nconsole.log('Merged:', merged); // [1, 2, 3, 4, 5]",
            "output": "Sum: 15\nMerged: [\n  1,\n  2,\n  3,\n  4,\n  5\n]",
            "explanation": "Rest gathers elements when declaring functions; spread expands elements when calling or building structures."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Combine Arrays with Spread",
        "description": "Given const front = ['HTML', 'CSS'] and const back = ['Node.js'], merge them into fullStack using spread. Log fullStack.",
        "starterCode": "const front = ['HTML', 'CSS'];\nconst back = ['Node.js'];\nconst fullStack = [...front, ...back];\nconsole.log(fullStack);",
        "solution": "const front = ['HTML', 'CSS'];\nconst back = ['Node.js'];\nconst fullStack = [...front, ...back];\nconsole.log(fullStack);",
        "hints": [
          "Use [...front, ...back]."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Where must the rest parameter (...rest) be placed in a function signature?",
        "options": [
          "At the very end of the parameter list",
          "At the beginning",
          "Anywhere in the parameter list",
          "Inside curly braces"
        ],
        "correctIndex": 0,
        "explanation": "Rest parameters collect all remaining arguments, so they must always be the final parameter in the signature."
      }
    ],
    "keyTakeaways": [
      "Use ...rest to accept an arbitrary number of arguments as a real array.",
      "Use ...spread to clone or merge arrays and objects without mutating originals."
    ],
    "tags": [
      "rest",
      "spread",
      "es6",
      "parameters",
      "arrays"
    ]
  },
  {
    "slug": "closure",
    "title": "Variable Scope & Closures",
    "description": "Demystify JavaScript closures: how inner functions remember and access outer variables even after the outer function finishes.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "What is a Closure?",
        "paragraphs": [
          "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment).",
          "In JavaScript, functions retain access to variables declared in their outer scope, even after that outer function has executed and returned."
        ],
        "codeExamples": [
          {
            "title": "Creating a Counter with Closure",
            "code": "function createCounter(initialValue = 0) {\n  let count = initialValue;\n  \n  return {\n    increment() {\n      count++;\n      return count;\n    },\n    getCount() {\n      return count;\n    }\n  };\n}\n\nconst counter1 = createCounter(10);\nconsole.log(counter1.increment()); // 11\nconsole.log(counter1.increment()); // 12\n\nconst counter2 = createCounter(0);\nconsole.log(counter2.increment()); // 1 (Independent closure!)",
            "output": "11\n12\n1",
            "explanation": "count is a private variable safely encapsulated inside the closure of createCounter."
          }
        ],
        "bulletPoints": [
          "Closures enable data privacy and encapsulation without classes.",
          "Every function in JavaScript forms a closure over its outer lexical environment."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a Greeting Maker",
        "description": "Write a function makeGreeting(salutation) that returns an inner function taking a name and returning `${salutation}, ${name}!`. Test with 'Hello'.",
        "starterCode": "function makeGreeting(salutation) {\n  return function(name) {\n    return `${salutation}, ${name}!`;\n  };\n}\n\nconst sayHello = makeGreeting('Hello');\nconsole.log(sayHello('David'));",
        "solution": "function makeGreeting(salutation) {\n  return function(name) {\n    return `${salutation}, ${name}!`;\n  };\n}\nconst sayHello = makeGreeting('Hello');\nconsole.log(sayHello('David'));",
        "hints": [
          "The inner function retains access to salutation."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why can the inner function inside a closure access variables from an outer function after the outer function has returned?",
        "options": [
          "Because the function retains a hidden reference to the outer Lexical Environment record in memory",
          "Because all variables are secretly global",
          "Because the browser re-executes the outer function on every call",
          "Due to strict mode"
        ],
        "correctIndex": 0,
        "explanation": "Functions in JavaScript hold a reference to the Lexical Environment in which they were defined, keeping those variables alive in memory."
      }
    ],
    "keyTakeaways": [
      "A closure gives a function access to its outer scope.",
      "Closures allow creating private state and function factories.",
      "Used extensively in React hooks (useState, useEffect) and event listeners."
    ],
    "tags": [
      "closures",
      "scope",
      "lexical-environment",
      "encapsulation"
    ]
  },
  {
    "slug": "var",
    "title": "The Old 'var' Keyword & Hoisting Gotchas",
    "description": "Understand legacy var behaviors: lack of block scope, variable hoisting to function tops, and why modern code uses let/const.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Why 'var' is Legacy",
        "paragraphs": [
          "Before ES6 (2015), var was the only way to declare variables in JavaScript. However, var has two major issues:",
          "1. No block scope: var ignores { } blocks (like if statements or for loops) and is scoped only to functions.",
          "2. Hoisting: var declarations are hoisted to the top of the function and initialized as undefined before assignment."
        ],
        "codeExamples": [
          {
            "title": "var Leaking from Block Scope",
            "code": "if (true) {\n  var leaked = 'I am visible outside the if block!';\n  let secure = 'I am safely blocked.';\n}\n\nconsole.log(leaked); // 'I am visible outside the if block!'\n// console.log(secure); // ReferenceError: secure is not defined",
            "output": "I am visible outside the if block!",
            "explanation": "var ignores block boundaries, potentially polluting outer scopes and overwriting variables."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Convert var to Block-Scoped let",
        "description": "Replace var with let so that index is strictly scoped to the for loop.",
        "starterCode": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        "solution": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        "hints": [
          "Use let instead of var in loop declarations."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What scope does a variable declared with 'var' have inside an if statement?",
        "options": [
          "Function scope (or global scope if outside any function), ignoring the if block",
          "Block scope restricted to the if block",
          "Module scope only",
          "No scope"
        ],
        "correctIndex": 0,
        "explanation": "var variables do not have block scope; they are scoped to the nearest enclosing function or the global scope."
      }
    ],
    "keyTakeaways": [
      "var declarations lack block scoping and can lead to accidental leaks and bugs.",
      "Always use const and let in modern JavaScript projects."
    ],
    "tags": [
      "var",
      "hoisting",
      "legacy",
      "scope"
    ]
  },
  {
    "slug": "global-object",
    "title": "The Global Object: window, global, globalThis",
    "description": "Explore the global namespace across environments: window in browsers, global in Node.js, and standardized globalThis.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Standardizing the Global Object",
        "paragraphs": [
          "The global object provides variables and functions that are available everywhere. In browsers, it is named window; in Node.js, it is named global.",
          "To unify this across all JavaScript runtimes, ECMAScript standardized globalThis, which reliably points to the global object in any environment."
        ],
        "codeExamples": [
          {
            "title": "Using globalThis",
            "code": "// globalThis works across browsers, Node.js, and web workers:\nconsole.log(typeof globalThis.Promise); // 'function'\nconsole.log(typeof globalThis.Math);    // 'object'",
            "output": "function\nobject",
            "explanation": "globalThis provides a universal reference to the top-level execution scope."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Verify Built-in via globalThis",
        "description": "Check if globalThis has the JSON property and log the boolean result.",
        "starterCode": "const hasJSON = 'JSON' in globalThis;\nconsole.log(hasJSON);",
        "solution": "const hasJSON = 'JSON' in globalThis;\nconsole.log(hasJSON);",
        "hints": [
          "Use 'JSON' in globalThis."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is globalThis?",
        "options": [
          "The standardized universal identifier pointing to the global object across all JavaScript runtimes",
          "A variable containing the current date",
          "A CSS media query",
          "A plugin for Vue.js"
        ],
        "correctIndex": 0,
        "explanation": "globalThis provides a universal reference to the global object, replacing window, self, and global."
      }
    ],
    "keyTakeaways": [
      "The global object houses built-in APIs (Math, Promise, JSON, etc.).",
      "Use globalThis for cross-environment compatibility between browser and server code."
    ],
    "tags": [
      "globalThis",
      "window",
      "environment",
      "globals"
    ]
  },
  {
    "slug": "function-object",
    "title": "Function Objects: 'name' and 'length'",
    "description": "Learn how JavaScript functions are objects with built-in properties like name, length, and custom properties.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Functions are Callable Objects",
        "paragraphs": [
          "In JavaScript, functions are first-class objects. In addition to being callable, they have properties:",
          "1. func.name: The name of the function.",
          "2. func.length: The number of declared parameters (excluding rest parameters).",
          "3. Custom properties: You can attach custom properties and counters to functions."
        ],
        "codeExamples": [
          {
            "title": "Function Properties and Custom Counters",
            "code": "function processData(a, b, c = 0) {}\nconsole.log('Function name:', processData.name);   // 'processData'\nconsole.log('Parameter length:', processData.length); // 2 (defaults excluded)\n\n// Custom function properties (cache or counter):\nfunction counter() {\n  counter.invocations++;\n  return counter.invocations;\n}\ncounter.invocations = 0;\n\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
            "output": "Function name: processData\nParameter length: 2\n1\n2",
            "explanation": "Functions can hold their own properties like any other object."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Inspect Function Length",
        "description": "Write a function add(x, y) and log its length property.",
        "starterCode": "function add(x, y) {\n  return x + y;\n}\n\nconsole.log(add.length);",
        "solution": "function add(x, y) {\n  return x + y;\n}\nconsole.log(add.length);",
        "hints": [
          "Read add.length."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the .length property of a function indicate?",
        "options": [
          "The number of declared parameters in the function definition",
          "The number of lines of source code",
          "The execution time in milliseconds",
          "The character length of the function name"
        ],
        "correctIndex": 0,
        "explanation": "func.length returns the number of formal parameters declared before the first default parameter or rest parameter."
      }
    ],
    "keyTakeaways": [
      "Functions are objects in JavaScript with built-in properties like name and length.",
      "Custom properties can be attached to functions for caching and state tracking."
    ],
    "tags": [
      "functions",
      "objects",
      "reflection",
      "properties"
    ]
  },
  {
    "slug": "new-function",
    "title": "The 'new Function' Syntax",
    "description": "Dynamically construct functions from strings at runtime and understand its global lexical scope behavior.",
    "difficulty": "advanced",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Compiling Functions from Strings",
        "paragraphs": [
          "The new Function('arg1', 'arg2', 'return arg1 + arg2') syntax dynamically compiles a function from string arguments at runtime.",
          "Unlike standard closures, functions created with new Function have their [[Environment]] bound to the global lexical scope, not the current local scope."
        ],
        "codeExamples": [
          {
            "title": "new Function Usage",
            "code": "const multiply = new Function('a', 'b', 'return a * b');\nconsole.log('Product:', multiply(6, 7)); // 42",
            "output": "Product: 42",
            "explanation": "Constructs a callable function dynamically from string parameters."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Build a Dynamic Adder",
        "description": "Use new Function to create a function that takes 'x' and returns 'x + 10'. Call it with 5.",
        "starterCode": "const addTen = new Function('x', 'return x + 10');\nconsole.log(addTen(5));",
        "solution": "const addTen = new Function('x', 'return x + 10');\nconsole.log(addTen(5));",
        "hints": [
          "new Function('x', 'return x + 10');"
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What scope do functions created with new Function reference?",
        "options": [
          "The global scope, rather than their local creation scope",
          "Only their immediate block scope",
          "They have no scope",
          "They run in a Web Worker"
        ],
        "correctIndex": 0,
        "explanation": "Functions created via new Function look up outer variables in the global scope, protecting them from minifier variable renaming issues."
      }
    ],
    "keyTakeaways": [
      "new Function creates functions dynamically from string code.",
      "Useful in templating engines and runtime code compilers."
    ],
    "tags": [
      "new-function",
      "dynamic",
      "compilation",
      "advanced"
    ]
  },
  {
    "slug": "settimeout-setinterval",
    "title": "Scheduling: setTimeout and setInterval",
    "description": "Schedule timed tasks with setTimeout, repeated intervals with setInterval, and recursive timeouts.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Scheduling Code Execution",
        "paragraphs": [
          "JavaScript allows you to schedule execution for a later time using two built-in timers:",
          "1. setTimeout(func, delay, ...args): Runs a function once after delay milliseconds.",
          "2. setInterval(func, delay, ...args): Runs a function repeatedly at fixed intervals until cancelled with clearInterval()."
        ],
        "codeExamples": [
          {
            "title": "Timers and Cancellation",
            "code": "// Schedule execution after 100ms:\nconst timerId = setTimeout(() => {\n  console.log('Action performed after delay');\n}, 100);\n\n// Cancel timer if needed:\n// clearTimeout(timerId);",
            "output": "Action performed after delay",
            "explanation": "setTimeout schedules a task in the browser's timer queue."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Schedule a Timeout",
        "description": "Use setTimeout to log 'Delayed log' after 50 milliseconds.",
        "starterCode": "setTimeout(() => {\n  console.log('Delayed log');\n}, 50);",
        "solution": "setTimeout(() => {\n  console.log('Delayed log');\n}, 50);",
        "hints": [
          "Pass a callback and delay in milliseconds to setTimeout."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "How do you stop a running interval created with setInterval?",
        "options": [
          "clearInterval(intervalId)",
          "stopInterval()",
          "interval.cancel()",
          "break"
        ],
        "correctIndex": 0,
        "explanation": "Pass the numeric timer identifier returned by setInterval to clearInterval(timerId)."
      }
    ],
    "keyTakeaways": [
      "setTimeout runs a callback once after a delay; setInterval runs repeatedly.",
      "Always store timer IDs to clean them up with clearTimeout / clearInterval to prevent memory leaks."
    ],
    "tags": [
      "timers",
      "setTimeout",
      "setInterval",
      "async"
    ]
  },
  {
    "slug": "call-apply-decorators",
    "title": "Decorators and Forwarding: call and apply",
    "description": "Borrow methods, set explicit 'this' contexts with call() and apply(), and build caching decorators.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Explicit 'this' with call and apply",
        "paragraphs": [
          "Functions normally determine 'this' at invocation time based on the calling object. However, you can explicitly set 'this' using .call() and .apply().",
          "func.call(context, arg1, arg2) passes arguments individually. func.apply(context, [args]) passes arguments as an array."
        ],
        "codeExamples": [
          {
            "title": "call vs apply",
            "code": "function introduce(greeting, punctuation) {\n  return `${greeting}, my name is ${this.name}${punctuation}`;\n}\n\nconst user = { name: 'Elena' };\n\n// Using .call():\nconsole.log(introduce.call(user, 'Hello', '!'));\n\n// Using .apply():\nconsole.log(introduce.apply(user, ['Hi', '.']));",
            "output": "Hello, my name is Elena!\nHi, my name is Elena.",
            "explanation": "Both set the 'this' context explicitly, differing only in how arguments are formatted."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Borrow a Method with call",
        "description": "Given person = { name: 'Lucas' } and function sayName() { return this.name; }, call sayName on person using .call.",
        "starterCode": "const person = { name: 'Lucas' };\nfunction sayName() {\n  return this.name;\n}\n\nconsole.log(sayName.call(person));",
        "solution": "const person = { name: 'Lucas' };\nfunction sayName() {\n  return this.name;\n}\nconsole.log(sayName.call(person));",
        "hints": [
          "sayName.call(person) sets this to person."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the difference between func.call() and func.apply()?",
        "options": [
          ".call() takes arguments as a comma-separated list, whereas .apply() takes arguments as an array",
          ".call() is asynchronous; .apply() is synchronous",
          ".apply() only works with strings",
          "There is no difference"
        ],
        "correctIndex": 0,
        "explanation": "func.call(ctx, 1, 2) passes arguments individually; func.apply(ctx, [1, 2]) accepts an array."
      }
    ],
    "keyTakeaways": [
      "Use .call() and .apply() to explicitly set the 'this' binding during function execution.",
      "Enables method borrowing and transparent caching decorators."
    ],
    "tags": [
      "call",
      "apply",
      "this",
      "decorators",
      "functions"
    ]
  },
  {
    "slug": "bind",
    "title": "Function Binding: bind()",
    "description": "Permanently lock a function's 'this' context and pre-fill arguments with partial function application.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Permanently Fixing 'this'",
        "paragraphs": [
          "When passing object methods as callbacks (like in setTimeout or event listeners), the method often loses its original 'this' context.",
          "The .bind(context) method creates an exotic bound function wrapper with 'this' permanently locked to the provided object."
        ],
        "codeExamples": [
          {
            "title": "Binding Methods and Partial Application",
            "code": "const user = {\n  name: 'Marcus',\n  sayHi() {\n    return `Hi, I am ${this.name}!`;\n  }\n};\n\n// Losing context:\nconst loose = user.sayHi;\n// loose(); // In strict mode: TypeError (this is undefined)\n\n// Binding context:\nconst bound = user.sayHi.bind(user);\nconsole.log(bound()); // 'Hi, I am Marcus!'\n\n// Partial function application:\nfunction multiply(a, b) {\n  return a * b;\n}\nconst double = multiply.bind(null, 2);\nconsole.log('Double 8:', double(8)); // 16",
            "output": "Hi, I am Marcus!\nDouble 8: 16",
            "explanation": "bind locks the context and allows pre-setting initial arguments."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Bind an Object Method",
        "description": "Bind the method greeter.greet to greeter so that calling unboundGreet() correctly outputs 'Hello, ' + greeter.name.",
        "starterCode": "const greeter = {\n  name: 'Sam',\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n};\n\nconst boundGreet = greeter.greet.bind(greeter);\nconsole.log(boundGreet());",
        "solution": "const greeter = {\n  name: 'Sam',\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n};\nconst boundGreet = greeter.greet.bind(greeter);\nconsole.log(boundGreet());",
        "hints": [
          "Use greeter.greet.bind(greeter)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Can a function bound with func.bind(obj1) be re-bound to obj2 with a subsequent .bind(obj2)?",
        "options": [
          "No, once a function is bound, its context is permanently locked",
          "Yes, the latest bind call always wins",
          "Only inside classes",
          "Only in non-strict mode"
        ],
        "correctIndex": 0,
        "explanation": "A bound function cannot be re-bound; subsequent calls to bind are ignored."
      }
    ],
    "keyTakeaways": [
      "Use .bind(context) to permanently fix 'this' when passing methods as callbacks.",
      "Use .bind() for partial function application (currying fixed initial parameters)."
    ],
    "tags": [
      "bind",
      "this",
      "callbacks",
      "partial-application"
    ]
  },
  {
    "slug": "arrow-functions",
    "title": "Arrow Functions Revisited: Lexical 'this'",
    "description": "Master the advanced mechanics of arrow functions: no 'this', no 'arguments', and cannot be used as constructors.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Lexical 'this' and No 'arguments'",
        "paragraphs": [
          "Arrow functions are not just syntactic sugar for shorter syntax; they behave fundamentally differently from traditional functions:",
          "1. No 'this': Arrow functions do not bind a 'this' of their own. 'this' is resolved lexically from the outer enclosing scope.",
          "2. No 'arguments': They do not have their own arguments object (use ...rest instead).",
          "3. Cannot be called with 'new': They lack a [[Construct]] method and have no prototype property."
        ],
        "codeExamples": [
          {
            "title": "Lexical 'this' in Callbacks",
            "code": "const team = {\n  title: 'Frontend Engineers',\n  members: ['Maya', 'Liam', 'Zoe'],\n  showMembers() {\n    // Arrow function preserves outer 'this' without needing .bind(this)!\n    this.members.forEach(member => {\n      console.log(`${member} is on the ${this.title} team`);\n    });\n  }\n};\n\nteam.showMembers();",
            "output": "Maya is on the Frontend Engineers team\nLiam is on the Frontend Engineers team\nZoe is on the Frontend Engineers team",
            "explanation": "The arrow function seamlessly accesses this.title from showMembers()."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Preserve 'this' in Timer",
        "description": "Write an object timer with seconds = 0 and start() method using an arrow function inside setTimeout to increment this.seconds.",
        "starterCode": "const timer = {\n  seconds: 0,\n  tick() {\n    // Arrow function keeps lexical this\n    const update = () => {\n      this.seconds++;\n      console.log('Seconds:', this.seconds);\n    };\n    update();\n  }\n};\n\ntimer.tick();",
        "solution": "const timer = {\n  seconds: 0,\n  tick() {\n    const update = () => {\n      this.seconds++;\n      console.log('Seconds:', this.seconds);\n    };\n    update();\n  }\n};\ntimer.tick();",
        "hints": [
          "Arrow functions inherit 'this' from their lexical enclosing scope."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens if you try to invoke an arrow function with the 'new' keyword?",
        "options": [
          "It throws a TypeError (function is not a constructor)",
          "It creates a new empty array",
          "It returns the window object",
          "It runs in strict mode automatically"
        ],
        "correctIndex": 0,
        "explanation": "Arrow functions do not possess a [[Construct]] method and cannot be instantiated with new."
      }
    ],
    "keyTakeaways": [
      "Arrow functions inherit 'this' lexically from where they are defined.",
      "They do not have their own arguments object or prototype.",
      "Ideal for inline callbacks and array transformation pipelines."
    ],
    "tags": [
      "arrow-functions",
      "this",
      "lexical-scope",
      "callbacks"
    ]
  },
  {
    "slug": "property-descriptors",
    "title": "Property Flags and Descriptors",
    "description": "Configure low-level property attributes: writable, enumerable, configurable, and seal/freeze objects.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "The 3 Property Flags",
        "paragraphs": [
          "Object properties in JavaScript have three hidden configuration flags in addition to their value:",
          "1. writable: If true, the value can be changed; otherwise it is read-only.",
          "2. enumerable: If true, it is listed in loops (for...in, Object.keys).",
          "3. configurable: If true, the property can be deleted and its flags modified."
        ],
        "codeExamples": [
          {
            "title": "Object.defineProperty",
            "code": "const user = {};\n\n// Define a read-only, non-enumerable property:\nObject.defineProperty(user, 'id', {\n  value: 9999,\n  writable: false,     // Cannot be overwritten!\n  enumerable: false,   // Hidden from Object.keys!\n  configurable: false  // Cannot be deleted!\n});\n\nconsole.log(user.id);             // 9999\nconsole.log(Object.keys(user));   // [] (hidden)\n// user.id = 123; // In strict mode: TypeError!",
            "output": "9999\n[]",
            "explanation": "Object.defineProperty grants precise control over object property behaviors."
          }
        ]
      },
      {
        "heading": "Object.freeze and Object.seal",
        "paragraphs": [
          "Object.freeze(obj) makes an entire object completely immutable: no properties can be added, deleted, or changed.",
          "Object.seal(obj) prevents adding or deleting properties, but allows modifying existing writable properties."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Freeze an Object",
        "description": "Create an object config = { api: 'https://api.com' }. Freeze it using Object.freeze and check with Object.isFrozen.",
        "starterCode": "const config = { api: 'https://api.com' };\nObject.freeze(config);\nconsole.log(Object.isFrozen(config));",
        "solution": "const config = { api: 'https://api.com' };\nObject.freeze(config);\nconsole.log(Object.isFrozen(config));",
        "hints": [
          "Call Object.freeze(config)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does setting 'enumerable: false' on a property descriptor accomplish?",
        "options": [
          "It hides the property from for...in loops and Object.keys()",
          "It deletes the property completely",
          "It makes the property asynchronous",
          "It prevents the property from being read"
        ],
        "correctIndex": 0,
        "explanation": "Non-enumerable properties exist on the object and can be read directly, but are skipped during property enumeration."
      }
    ],
    "keyTakeaways": [
      "Property descriptors control writable, enumerable, and configurable flags.",
      "Use Object.freeze() to enforce shallow object immutability.",
      "Object.defineProperty() is widely used in reactive frameworks like Vue and MobX."
    ],
    "tags": [
      "descriptors",
      "freeze",
      "seal",
      "defineProperty",
      "immutability"
    ]
  },
  {
    "slug": "property-accessors",
    "title": "Property Getters and Setters",
    "description": "Create calculated and validated properties using get and set accessor keywords.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Accessor Properties: get and set",
        "paragraphs": [
          "In JavaScript, object properties can be data properties (storing a value) or accessor properties (functions that execute when reading or writing a value).",
          "Getters (get prop()) return a computed value, while Setters (set prop(val)) validate and store incoming values."
        ],
        "codeExamples": [
          {
            "title": "Getters and Setters in Action",
            "code": "const person = {\n  firstName: 'John',\n  lastName: 'Doe',\n  \n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n  \n  set fullName(value) {\n    [this.firstName, this.lastName] = value.split(' ');\n  }\n};\n\nconsole.log(person.fullName); // 'John Doe'\nperson.fullName = 'Alice Smith';\nconsole.log(person.firstName); // 'Alice'",
            "output": "John Doe\nAlice",
            "explanation": "fullName looks and behaves like an ordinary property, but executes getter/setter logic behind the scenes."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a Validated Age Setter",
        "description": "Create an object profile with _age and a setter age(val) that only updates _age if val >= 0. Test with age = 25.",
        "starterCode": "const profile = {\n  _age: 0,\n  get age() { return this._age; },\n  set age(val) {\n    if (val >= 0) this._age = val;\n  }\n};\n\nprofile.age = 25;\nconsole.log(profile.age);",
        "solution": "const profile = {\n  _age: 0,\n  get age() { return this._age; },\n  set age(val) {\n    if (val >= 0) this._age = val;\n  }\n};\nprofile.age = 25;\nconsole.log(profile.age);",
        "hints": [
          "Use set age(val) { if (val >= 0) this._age = val; }."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "How do you access a getter property on an object (e.g. get fullName())?",
        "options": [
          "Like an ordinary property: person.fullName",
          "As a function call: person.fullName()",
          "Using person.get('fullName')",
          "Via a Promise"
        ],
        "correctIndex": 0,
        "explanation": "Accessor properties are accessed without parentheses, syntactically identical to standard data properties."
      }
    ],
    "keyTakeaways": [
      "Getters compute and return values on the fly.",
      "Setters validate, transform, and guard incoming data assignments.",
      "Accessors provide encapsulation without breaking public API contracts."
    ],
    "tags": [
      "getters",
      "setters",
      "accessors",
      "objects"
    ]
  },
  {
    "slug": "prototype-inheritance",
    "title": "Prototypal Inheritance & [[Prototype]]",
    "description": "Understand how JavaScript objects inherit properties from prototype objects via the prototype chain.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "The [[Prototype]] Chain",
        "paragraphs": [
          "In JavaScript, objects have a hidden internal property called [[Prototype]], which can be null or a reference to another object.",
          "When you read a property from an object and it is missing, JavaScript automatically searches for it on the object's prototype, following the prototype chain."
        ],
        "codeExamples": [
          {
            "title": "Prototypal Inheritance with Object.create",
            "code": "const animal = {\n  eats: true,\n  walk() {\n    return 'Animal walking';\n  }\n};\n\n// Create rabbit with animal as its prototype:\nconst rabbit = Object.create(animal);\nrabbit.jumps = true;\n\nconsole.log(rabbit.jumps); // true (own property)\nconsole.log(rabbit.eats);  // true (inherited from animal!)\nconsole.log(rabbit.walk()); // 'Animal walking' (inherited method!)",
            "output": "true\ntrue\nAnimal walking",
            "explanation": "rabbit delegates missing properties and methods to animal via the prototype chain."
          }
        ],
        "callout": {
          "type": "tip",
          "text": "Always use Object.create(proto) or Object.getPrototypeOf/setPrototypeOf rather than the legacy __proto__ accessor."
        }
      }
    ],
    "exercises": [
      {
        "title": "Inherit via Object.create",
        "description": "Create a parent object vehicle with wheels = 4. Create car using Object.create(vehicle). Log car.wheels.",
        "starterCode": "const vehicle = { wheels: 4 };\nconst car = Object.create(vehicle);\nconsole.log(car.wheels);",
        "solution": "const vehicle = { wheels: 4 };\nconst car = Object.create(vehicle);\nconsole.log(car.wheels);",
        "hints": [
          "Object.create(vehicle) sets vehicle as car's prototype."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens when you write to an inherited property (e.g. rabbit.eats = false)?",
        "options": [
          "A new own property 'eats' is created on rabbit, leaving animal.eats unchanged",
          "The prototype's property is modified for all instances",
          "An error is thrown",
          "The prototype chain is deleted"
        ],
        "correctIndex": 0,
        "explanation": "In JavaScript, property writing and deletion operations operate directly on the target object, never modifying prototypes."
      }
    ],
    "keyTakeaways": [
      "JavaScript uses prototype delegation for code reuse.",
      "The prototype chain is traversed when reading missing properties.",
      "Writes are performed directly on the instance, shadowing prototype properties."
    ],
    "tags": [
      "prototypes",
      "inheritance",
      "object-create",
      "oop"
    ]
  },
  {
    "slug": "function-prototype",
    "title": "Constructor 'F.prototype' Property",
    "description": "Learn how constructor functions use their .prototype property to assign [[Prototype]] to newly created instances.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "How F.prototype Works with 'new'",
        "paragraphs": [
          "Every regular function in JavaScript automatically has a prototype property (an object containing a constructor property pointing back to the function).",
          "When new F() is invoked, the newly created object's internal [[Prototype]] is assigned to F.prototype."
        ],
        "codeExamples": [
          {
            "title": "Shared Methods on F.prototype",
            "code": "function User(name) {\n  this.name = name;\n}\n\n// Attaching methods to prototype saves memory across instances:\nUser.prototype.greet = function() {\n  return `Hello, I am ${this.name}`;\n};\n\nconst u1 = new User('Oliver');\nconst u2 = new User('Amelia');\n\nconsole.log(u1.greet()); // 'Hello, I am Oliver'\nconsole.log(u1.greet === u2.greet); // true (Shared single function instance in memory!)",
            "output": "Hello, I am Oliver\ntrue",
            "explanation": "Methods on User.prototype are shared across all instances, saving memory."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Add a Method to Prototype",
        "description": "Given constructor Dog(name), add bark() to Dog.prototype that returns `${this.name} says woof!`. Test with new Dog('Buddy').",
        "starterCode": "function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() {\n  return `${this.name} says woof!`;\n};\n\nconst pet = new Dog('Buddy');\nconsole.log(pet.bark());",
        "solution": "function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() {\n  return `${this.name} says woof!`;\n};\nconst pet = new Dog('Buddy');\nconsole.log(pet.bark());",
        "hints": [
          "Assign Dog.prototype.bark = function() { ... }."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why is it better to attach methods to F.prototype instead of defining them inside the constructor function?",
        "options": [
          "Because prototype methods are shared in memory by all instances rather than re-created per instance",
          "Because constructor methods cannot access 'this'",
          "Because prototype methods run faster in browsers",
          "Because classes require it"
        ],
        "correctIndex": 0,
        "explanation": "Placing methods on the prototype allocates a single shared function in memory for all instances."
      }
    ],
    "keyTakeaways": [
      "F.prototype defines the prototype assigned to instances created with new F().",
      "Shared methods on F.prototype conserve memory.",
      "ES6 classes use this exact mechanism under the hood."
    ],
    "tags": [
      "prototypes",
      "constructors",
      "new",
      "memory"
    ]
  },
  {
    "slug": "native-prototypes",
    "title": "Native Prototypes: Object, Array, Function",
    "description": "Explore how built-in objects share methods via Object.prototype and Array.prototype, and why modifying them is risky.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The Built-in Prototype Hierarchy",
        "paragraphs": [
          "All built-in JavaScript objects rely on prototypes. When you create an array [1, 2], its prototype is Array.prototype, which in turn inherits from Object.prototype.",
          "This is why arrays have access to array methods (push, map) as well as object methods (hasOwnProperty)."
        ],
        "codeExamples": [
          {
            "title": "Inspecting Native Prototypes",
            "code": "const nums = [1, 2, 3];\nconsole.log(nums.__proto__ === Array.prototype);          // true\nconsole.log(Array.prototype.__proto__ === Object.prototype); // true\nconsole.log(Object.prototype.__proto__);                   // null (Top of the chain!)",
            "output": "true\ntrue\nnull",
            "explanation": "All prototypes eventually link back to Object.prototype, whose prototype is null."
          }
        ],
        "callout": {
          "type": "warning",
          "text": "Monkey-patching (modifying native prototypes like Array.prototype) is considered dangerous practice because it causes global namespace conflicts."
        }
      }
    ],
    "exercises": [
      {
        "title": "Check Prototype Relationship",
        "description": "Verify that Object.getPrototypeOf([]) strictly equals Array.prototype and log the result.",
        "starterCode": "const isArrayProto = Object.getPrototypeOf([]) === Array.prototype;\nconsole.log(isArrayProto);",
        "solution": "const isArrayProto = Object.getPrototypeOf([]) === Array.prototype;\nconsole.log(isArrayProto);",
        "hints": [
          "Use Object.getPrototypeOf([]) === Array.prototype."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What lies at the very top of the JavaScript prototype chain?",
        "options": [
          "null (as the prototype of Object.prototype)",
          "window",
          "Function.prototype",
          "undefined"
        ],
        "correctIndex": 0,
        "explanation": "The chain ends at Object.prototype, whose [[Prototype]] is null."
      }
    ],
    "keyTakeaways": [
      "All JavaScript objects inherit from Object.prototype at the top of the chain.",
      "Avoid mutating native prototypes in production code to prevent collisions."
    ],
    "tags": [
      "prototypes",
      "native",
      "object-prototype",
      "array-prototype"
    ]
  },
  {
    "slug": "prototype-methods",
    "title": "Modern Prototype Methods & Objects Without __proto__",
    "description": "Master modern prototype management: Object.create, Object.getPrototypeOf, Object.setPrototypeOf, and clean dictionary objects.",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Modern Prototype Utilities",
        "paragraphs": [
          "The __proto__ property is a legacy browser getter/setter. In modern JavaScript, use standard static methods:",
          "1. Object.create(proto, [descriptors]): Creates an empty object with the specified prototype.",
          "2. Object.getPrototypeOf(obj): Returns the [[Prototype]] of obj.",
          "3. Object.setPrototypeOf(obj, proto): Changes the [[Prototype]] of obj."
        ],
        "codeExamples": [
          {
            "title": "Pure Dictionary Objects with No Prototype",
            "code": "// Object with NO prototype (no Object.prototype methods, immune to prototype pollution):\nconst cleanDict = Object.create(null);\ncleanDict['toString'] = 'Pure custom data';\n\nconsole.log(cleanDict.toString); // 'Pure custom data'\nconsole.log(Object.getPrototypeOf(cleanDict)); // null",
            "output": "Pure custom data\nnull",
            "explanation": "Object.create(null) creates an ultra-light dictionary with no inherited properties."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a Prototype-Free Map",
        "description": "Create a dictionary using Object.create(null). Add key 'app' = 'RunJS' and log the property.",
        "starterCode": "const map = Object.create(null);\nmap.app = 'RunJS';\nconsole.log(map.app);",
        "solution": "const map = Object.create(null);\nmap.app = 'RunJS';\nconsole.log(map.app);",
        "hints": [
          "Use Object.create(null)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why are objects created with Object.create(null) called 'very plain' or dictionary objects?",
        "options": [
          "Because they do not inherit from Object.prototype, meaning they have no built-in methods (like toString or hasOwnProperty)",
          "Because they cannot store numbers",
          "Because they cannot be logged",
          "Because they only work in strict mode"
        ],
        "correctIndex": 0,
        "explanation": "An object created with Object.create(null) has null as its prototype, preventing accidental property collisions."
      }
    ],
    "keyTakeaways": [
      "Use Object.create, Object.getPrototypeOf, and Object.setPrototypeOf instead of __proto__.",
      "Use Object.create(null) for secure dictionary maps immune to prototype pollution."
    ],
    "tags": [
      "prototypes",
      "object-create",
      "prototype-methods",
      "security"
    ]
  }
];
