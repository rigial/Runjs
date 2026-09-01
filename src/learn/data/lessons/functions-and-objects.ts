import type { Lesson } from '../../types';

export const functionsAndObjectsLessons: Lesson[] = [
  {
    slug: 'function-declarations',
    title: 'Function Declarations & Expressions',
    description: 'Learn how to define functions to group reusable blocks of code.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'What is a Function?',
        paragraphs: [
          'A function is a reusable block of code that performs a specific task. Think of it like a recipe: you write the steps once, and you can follow them whenever you want to bake a cake.',
          'In JavaScript, you can define functions in a few different ways. The most common is the function declaration.'
        ],
        codeExamples: [
          {
            title: 'Function Declaration',
            code: 'function sayHello() {\n  console.log("Hello, World!");\n}\n\nsayHello();',
            output: 'Hello, World!',
            explanation: 'We declare the function with the `function` keyword, give it a name, and then call it using parentheses.'
          }
        ]
      },
      {
        heading: 'Function Expressions',
        paragraphs: [
          'You can also store a function inside a variable. This is known as a function expression. Function expressions are often anonymous, meaning they do not have a name of their own.'
        ],
        codeExamples: [
          {
            title: 'Function Expression',
            code: 'const greet = function() {\n  console.log("Hi there!");\n};\n\ngreet();',
            output: 'Hi there!'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Greeting Function',
        description: 'Write a function expression named `welcome` that logs "Welcome to JavaScript!"',
        starterCode: '// Write your code here\n',
        solution: 'const welcome = function() {\n  console.log("Welcome to JavaScript!");\n};',
        hints: ['Use const or let to define a variable', 'Assign a function() to it'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What keyword is used to declare a standard function?',
        options: ['func', 'def', 'function', 'method'],
        correctIndex: 2,
        explanation: 'JavaScript uses the `function` keyword for standard function declarations.'
      }
    ],
    keyTakeaways: [
      'Functions group reusable code.',
      'Function declarations are hoisted, expressions are not.'
    ],
    tags: ['functions', 'basics']
  },
  {
    slug: 'parameters-and-return',
    title: 'Parameters & Return Values',
    description: 'Pass data into functions and get results back.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'Parameters and Arguments',
        paragraphs: [
          'Functions are more useful when they can accept inputs. These inputs are called parameters when you define the function, and arguments when you call it.'
        ],
        codeExamples: [
          {
            title: 'Using Parameters',
            code: 'function greet(name) {\n  console.log("Hello " + name);\n}\n\ngreet("Alice");',
            output: 'Hello Alice',
            explanation: 'The `name` parameter acts as a placeholder for the argument "Alice".'
          }
        ]
      },
      {
        heading: 'Returning Values',
        paragraphs: [
          'Instead of just printing something, functions can send data back to where they were called using the `return` keyword.'
        ],
        codeExamples: [
          {
            title: 'Returning Data',
            code: 'function add(a, b) {\n  return a + b;\n}\n\nlet sum = add(3, 4);\nconsole.log(sum);',
            output: '7'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Multiply Two Numbers',
        description: 'Create a function `multiply(x, y)` that returns the product of x and y.',
        starterCode: 'function multiply(x, y) {\n  \n}',
        solution: 'function multiply(x, y) {\n  return x * y;\n}',
        hints: ['Use the return keyword', 'The multiplication operator is *'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which keyword sends a value back from a function?',
        options: ['yield', 'send', 'return', 'output'],
        correctIndex: 2,
        explanation: 'The `return` keyword stops the function and outputs the value.'
      }
    ],
    keyTakeaways: [
      'Parameters make functions flexible.',
      'The return keyword outputs data and stops execution.'
    ],
    tags: ['functions', 'return']
  },
  {
    slug: 'arrow-functions',
    title: 'Arrow Functions',
    description: 'Learn the modern, concise syntax for writing functions.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'A Shorter Syntax',
        paragraphs: [
          'Arrow functions were introduced in ES6 to provide a more concise way to write function expressions. They omit the `function` keyword and use an arrow `=>`.'
        ],
        codeExamples: [
          {
            title: 'Basic Arrow Function',
            code: 'const add = (a, b) => {\n  return a + b;\n};\nconsole.log(add(2, 3));',
            output: '5',
            explanation: 'Notice how the `function` keyword is replaced by `=>`.'
          }
        ]
      },
      {
        heading: 'Implicit Return',
        paragraphs: [
          'If your function only has one expression, you can drop the curly braces and the `return` keyword. The value is returned automatically.'
        ],
        codeExamples: [
          {
            title: 'Implicit Return Example',
            code: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5));',
            output: '20'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Convert to Arrow Function',
        description: 'Convert the given standard function into a one-line arrow function with implicit return.',
        starterCode: 'function subtract(a, b) {\n  return a - b;\n}',
        solution: 'const subtract = (a, b) => a - b;',
        hints: ['Remove function keyword', 'Remove braces and return'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What is true about one-line arrow functions without curly braces?',
        options: ['They must return undefined', 'They explicitly need the return keyword', 'They implicitly return the evaluated expression', 'They are invalid syntax'],
        correctIndex: 2,
        explanation: 'Omitting braces enables implicit return.'
      }
    ],
    keyTakeaways: [
      'Arrow functions are concise.',
      'They support implicit returns for single expressions.'
    ],
    tags: ['functions', 'es6']
  },
  {
    slug: 'default-parameters',
    title: 'Default Parameters',
    description: 'Provide fallback values for function parameters.',
    difficulty: 'beginner',
    readingTime: 4,
    sections: [
      {
        heading: 'Setting Defaults',
        paragraphs: [
          'Sometimes you want a parameter to have a default value if the user forgets to pass one in.'
        ],
        codeExamples: [
          {
            title: 'Default Parameter Example',
            code: 'function greet(name = "Guest") {\n  console.log("Hello, " + name);\n}\n\ngreet();\ngreet("Alice");',
            output: 'Hello, Guest\nHello, Alice'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Discount Calculator',
        description: 'Write a function calculatePrice(price, discount) where discount defaults to 10.',
        starterCode: 'function calculatePrice(price, discount) {\n  return price - discount;\n}',
        solution: 'function calculatePrice(price, discount = 10) {\n  return price - discount;\n}',
        hints: ['Use the equals sign in the parameter list'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'How do you set a default parameter?',
        options: ['param : value', 'param = value', 'param -> value', 'default param value'],
        correctIndex: 1,
        explanation: 'Use the equals sign in the parameter list.'
      }
    ],
    keyTakeaways: [
      'Default parameters prevent undefined errors.',
      'They are applied if the argument is undefined or missing.'
    ],
    tags: ['functions', 'es6']
  },
  {
    slug: 'rest-parameters',
    title: 'Rest Parameters & Spread in Arguments',
    description: 'Handle unlimited arguments cleanly.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'The Rest Operator',
        paragraphs: [
          'The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. It uses three dots `...`'
        ],
        codeExamples: [
          {
            title: 'Rest Parameter',
            code: 'function sumAll(...numbers) {\n  let total = 0;\n  for(let n of numbers) total += n;\n  return total;\n}\nconsole.log(sumAll(1, 2, 3, 4));',
            output: '10'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Collect Names',
        description: 'Write a function listNames that takes a rest parameter and returns the array.',
        starterCode: 'function listNames() {\n\n}',
        solution: 'function listNames(...names) {\n  return names;\n}',
        hints: ['Use ... syntax'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which syntax represents the rest parameter?',
        options: ['*args', '...args', 'args[]', '&args'],
        correctIndex: 1,
        explanation: 'JavaScript uses `...` for rest parameters.'
      }
    ],
    keyTakeaways: [
      'Rest parameters gather remaining arguments into an array.'
    ],
    tags: ['functions', 'es6']
  },
  {
    slug: 'scope-and-closures',
    title: 'Scope & Closures',
    description: 'Understand variable visibility and how functions remember their environment.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Lexical Scope',
        paragraphs: [
          'Scope determines where variables are visible. Inner functions can see variables from outer functions.'
        ]
      },
      {
        heading: 'Closures',
        paragraphs: [
          'A closure is a function that remembers its outer variables even after the outer function has finished running.'
        ],
        codeExamples: [
          {
            title: 'Closure Example',
            code: 'function makeCounter() {\n  let count = 0;\n  return function() {\n    return count++;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter());\nconsole.log(counter());',
            output: '0\n1'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Greeting Generator',
        description: 'Create a closure that remembers a specific greeting string.',
        starterCode: 'function makeGreeter(greeting) {\n  \n}',
        solution: 'function makeGreeter(greeting) {\n  return function(name) {\n    return greeting + " " + name;\n  }\n}',
        hints: ['Return a new function taking name'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'What is a closure?',
        options: ['A closed loop', 'A function that remembers its creation environment', 'A syntax error', 'A type of string'],
        correctIndex: 1,
        explanation: 'Closures retain access to the variables of their lexical scope.'
      }
    ],
    keyTakeaways: ['Closures are powerful for data privacy.'],
    tags: ['functions', 'closures']
  },
  {
    slug: 'callback-functions',
    title: 'Callback Functions',
    description: 'Passing functions as arguments to other functions.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'What is a Callback?',
        paragraphs: [
          'A callback is a function passed into another function as an argument, which is then invoked inside the outer function.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Simple Callback',
        description: 'Execute a callback.',
        starterCode: 'function doWork(callback) {\n  // call it here\n}',
        solution: 'function doWork(callback) {\n  callback();\n}',
        hints: ['Invoke callback with parentheses'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Why do we use callbacks?',
        options: ['To delay execution', 'To style HTML', 'To create loops', 'To define numbers'],
        correctIndex: 0,
        explanation: 'Callbacks allow functions to run asynchronously or delay execution until a task completes.'
      }
    ],
    keyTakeaways: ['Callbacks are fundamental to async JS.'],
    tags: ['functions', 'callbacks']
  },
  {
    slug: 'higher-order-functions',
    title: 'Higher-Order Functions',
    description: 'Functions that operate on other functions.',
    difficulty: 'advanced',
    readingTime: 7,
    sections: [
      {
        heading: 'Definition',
        paragraphs: [
          'A higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Return a Function',
        description: 'Write a function that returns another function.',
        starterCode: 'function multiplier(factor) {\n\n}',
        solution: 'function multiplier(factor) {\n  return num => num * factor;\n}',
        hints: ['Return an arrow function'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Is map() a higher-order function?',
        options: ['Yes', 'No'],
        correctIndex: 0,
        explanation: 'Yes, because it takes a callback function.'
      }
    ],
    keyTakeaways: ['HOFs enable functional programming.'],
    tags: ['functions', 'hof']
  },
  {
    slug: 'iife-pattern',
    title: 'IIFE (Immediately Invoked Function Expressions)',
    description: 'Execute functions as soon as they are defined.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The IIFE Syntax',
        paragraphs: [
          'An IIFE runs immediately after creation. It is often used to avoid polluting the global scope.'
        ],
        codeExamples: [
          {
            title: 'IIFE Example',
            code: '(function() {\n  console.log("Ran right away!");\n})();',
            output: 'Ran right away!'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Write an IIFE',
        description: 'Create an IIFE that returns 42.',
        starterCode: '// write IIFE',
        solution: '(function() { return 42; })();',
        hints: ['Wrap function in parentheses, then call it'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Why use an IIFE?',
        options: ['Faster performance', 'Keep variables out of global scope', 'It is required for loops', 'For math'],
        correctIndex: 1,
        explanation: 'IIFEs create a private scope.'
      }
    ],
    keyTakeaways: ['IIFEs run immediately.'],
    tags: ['functions', 'iife']
  },
  {
    slug: 'recursion',
    title: 'Recursion',
    description: 'Functions that call themselves.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Base Case and Recursive Step',
        paragraphs: [
          'Recursion happens when a function calls itself. You must always have a base case to stop the loop.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Factorial',
        description: 'Write a recursive factorial function.',
        starterCode: 'function factorial(n) {\n\n}',
        solution: 'function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}',
        hints: ['Base case n <= 1'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'What is essential in a recursive function?',
        options: ['A for loop', 'A base case', 'A callback', 'An array'],
        correctIndex: 1,
        explanation: 'Without a base case, recursion leads to a stack overflow.'
      }
    ],
    keyTakeaways: ['Recursion needs a stop condition.'],
    tags: ['functions', 'recursion']
  },
  {
    slug: 'object-basics',
    title: 'Object Basics',
    description: 'Store keyed collections of data.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Creating Objects',
        paragraphs: [
          'Objects store properties as key-value pairs.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Create an Object',
        description: 'Create a user object with a name and age.',
        starterCode: 'const user = {};',
        solution: 'const user = { name: "John", age: 30 };',
        hints: ['Use key: value syntax'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'How do you access a property?',
        options: ['user(name)', 'user.name', 'user->name', 'user:name'],
        correctIndex: 1,
        explanation: 'Dot notation is used.'
      }
    ],
    keyTakeaways: ['Objects store complex data.'],
    tags: ['objects', 'basics']
  },
  {
    slug: 'object-methods-and-this',
    title: 'Object Methods & this',
    description: 'Functions inside objects.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'The this Keyword',
        paragraphs: [
          'Methods are functions inside objects. They use `this` to access the object they belong to.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Add a Method',
        description: 'Add a sayHi method to user that returns "Hi".',
        starterCode: 'const user = {\n\n};',
        solution: 'const user = { sayHi() { return "Hi"; } };',
        hints: ['Define a function as a property'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does this refer to in an object method?',
        options: ['The global window', 'The object calling the method', 'The function itself', 'Nothing'],
        correctIndex: 1,
        explanation: 'It refers to the calling object.'
      }
    ],
    keyTakeaways: ['this points to the object before the dot.'],
    tags: ['objects', 'methods']
  },
  {
    slug: 'object-destructuring',
    title: 'Object Destructuring',
    description: 'Extract properties into variables easily.',
    difficulty: 'intermediate',
    readingTime: 4,
    sections: [
      {
        heading: 'Unpacking Data',
        paragraphs: [
          'Destructuring allows you to unpack properties from objects into distinct variables.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Destructure User',
        description: 'Extract name and age from user.',
        starterCode: 'const user = {name: "Bob", age: 25};\n// destructure here',
        solution: 'const user = {name: "Bob", age: 25};\nconst { name, age } = user;',
        hints: ['Use curly braces on left side'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which syntax is valid destructuring?',
        options: ['const name, age = user;', 'const { name, age } = user;', 'const [name, age] = user;'],
        correctIndex: 1,
        explanation: 'Curly braces are used for objects.'
      }
    ],
    keyTakeaways: ['Destructuring is cleaner than repeated dot notation.'],
    tags: ['objects', 'destructuring']
  },
  {
    slug: 'spread-and-rest-objects',
    title: 'Spread & Rest with Objects',
    description: 'Copy and gather object properties.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Spread Operator',
        paragraphs: [
          'Use `...` to copy properties from one object to another.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Merge Objects',
        description: 'Merge obj1 and obj2 into merged.',
        starterCode: 'const obj1 = {a:1};\nconst obj2 = {b:2};',
        solution: 'const obj1 = {a:1};\nconst obj2 = {b:2};\nconst merged = {...obj1, ...obj2};',
        hints: ['Spread them in a new object'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does spread do in objects?',
        options: ['Creates a deep copy', 'Copies enumerable properties', 'Deletes properties'],
        correctIndex: 1,
        explanation: 'It copies over enumerable own properties.'
      }
    ],
    keyTakeaways: ['Spread is great for shallow copies.'],
    tags: ['objects', 'spread']
  },
  {
    slug: 'optional-chaining',
    title: 'Optional Chaining (?.) & Nullish Coalescing (??)',
    description: 'Safely access nested properties.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'Safe Traversal',
        paragraphs: [
          'Optional chaining `?.` prevents errors when accessing properties of undefined or null.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Safe Access',
        description: 'Safely access user.address.street.',
        starterCode: 'const user = {};\nconst street = user.address.street;',
        solution: 'const user = {};\nconst street = user?.address?.street;',
        hints: ['Add ? before the dot'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does ?. return if the object is null?',
        options: ['Error', 'null', 'undefined', 'false'],
        correctIndex: 2,
        explanation: 'It short-circuits and returns undefined.'
      }
    ],
    keyTakeaways: ['Optional chaining prevents runtime crashes.'],
    tags: ['objects', 'es2020']
  },
  {
    slug: 'object-keys-values-entries',
    title: 'Object.keys(), values(), entries()',
    description: 'Iterate over objects.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Object Iteration',
        paragraphs: [
          'These built-in methods turn objects into arrays for easy iteration.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Get Keys',
        description: 'Get an array of keys from the user object.',
        starterCode: 'const user = {a: 1, b: 2};\nconst keys = null;',
        solution: 'const user = {a: 1, b: 2};\nconst keys = Object.keys(user);',
        hints: ['Use Object.keys()'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does Object.entries() return?',
        options: ['Array of keys', 'Array of values', 'Array of [key, value] pairs'],
        correctIndex: 2,
        explanation: 'It returns a 2D array of key-value pairs.'
      }
    ],
    keyTakeaways: ['These methods are essential for looping objects.'],
    tags: ['objects', 'iteration']
  },
  {
    slug: 'array-basics',
    title: 'Array Basics',
    description: 'Store ordered lists of data.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Working with Arrays',
        paragraphs: [
          'Arrays hold lists of items. They are zero-indexed.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Create an Array',
        description: 'Create an array with three numbers.',
        starterCode: 'const nums = [];',
        solution: 'const nums = [1, 2, 3];',
        hints: ['Use square brackets'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'How do you access the first element?',
        options: ['arr[1]', 'arr[0]', 'arr.first()'],
        correctIndex: 1,
        explanation: 'Arrays are 0-indexed.'
      }
    ],
    keyTakeaways: ['Arrays maintain order.'],
    tags: ['arrays', 'basics']
  },
  {
    slug: 'array-methods-mutating',
    title: 'Mutating Array Methods',
    description: 'Methods that change the array in place.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'push, pop, splice',
        paragraphs: [
          'These methods modify the original array.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Add to Array',
        description: 'Add 4 to the end of nums.',
        starterCode: 'const nums = [1, 2, 3];',
        solution: 'const nums = [1, 2, 3];\nnums.push(4);',
        hints: ['Use push()'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What does pop() do?',
        options: ['Removes first item', 'Removes last item', 'Adds to end'],
        correctIndex: 1,
        explanation: 'pop removes and returns the last item.'
      }
    ],
    keyTakeaways: ['Be careful when mutating arrays directly.'],
    tags: ['arrays', 'methods']
  },
  {
    slug: 'array-methods-non-mutating',
    title: 'Non-Mutating Array Methods',
    description: 'Methods that return a new array.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'slice, concat',
        paragraphs: [
          'These methods return a fresh array, leaving the original intact.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Slice Array',
        description: 'Get the first two elements without modifying the array.',
        starterCode: 'const nums = [1, 2, 3, 4];',
        solution: 'const nums = [1, 2, 3, 4];\nconst firstTwo = nums.slice(0, 2);',
        hints: ['Use slice()'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Does concat() modify the array?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'Concat returns a new array.'
      }
    ],
    keyTakeaways: ['Prefer non-mutating methods for pure functions.'],
    tags: ['arrays', 'methods']
  },
  {
    slug: 'map-filter-reduce',
    title: 'map(), filter(), reduce()',
    description: 'The holy trinity of array iteration.',
    difficulty: 'intermediate',
    readingTime: 7,
    sections: [
      {
        heading: 'Functional Programming with Arrays',
        paragraphs: [
          'These powerful higher-order functions help transform, filter, and summarize data.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Double Numbers',
        description: 'Use map to double each number.',
        starterCode: 'const nums = [1, 2, 3];',
        solution: 'const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);',
        hints: ['Pass a callback to map'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which method returns a single value?',
        options: ['map', 'filter', 'reduce'],
        correctIndex: 2,
        explanation: 'reduce folds an array into a single value.'
      }
    ],
    keyTakeaways: ['These are fundamental for React and modern JS.'],
    tags: ['arrays', 'functional']
  },
  {
    slug: 'array-destructuring',
    title: 'Array Destructuring',
    description: 'Unpack array values into variables.',
    difficulty: 'intermediate',
    readingTime: 4,
    sections: [
      {
        heading: 'Positional Extraction',
        paragraphs: [
          'Unlike objects, arrays are destructured by position, not by name.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Extract Items',
        description: 'Extract the first two colors.',
        starterCode: 'const colors = ["red", "blue", "green"];',
        solution: 'const colors = ["red", "blue", "green"];\nconst [first, second] = colors;',
        hints: ['Use square brackets on left side'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'How do you skip an item?',
        options: ['Use a comma', 'Use underscore', 'Leave it blank'],
        correctIndex: 0,
        explanation: 'Extra commas skip elements: const [a, , c] = arr;'
      }
    ],
    keyTakeaways: ['Great for multiple return values.'],
    tags: ['arrays', 'destructuring']
  },
  {
    slug: 'spread-and-rest-arrays',
    title: 'Spread & Rest with Arrays',
    description: 'Copy and gather array elements.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Array Expansion',
        paragraphs: [
          'Spread syntax expands an array into individual elements.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Combine Arrays',
        description: 'Combine arr1 and arr2.',
        starterCode: 'const arr1 = [1];\nconst arr2 = [2];',
        solution: 'const arr1 = [1];\nconst arr2 = [2];\nconst combined = [...arr1, ...arr2];',
        hints: ['Use ... operator inside brackets'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Is spread array copy deep or shallow?',
        options: ['Deep', 'Shallow'],
        correctIndex: 1,
        explanation: 'Spread creates a shallow copy.'
      }
    ],
    keyTakeaways: ['Easy way to copy arrays.'],
    tags: ['arrays', 'spread']
  },
  {
    slug: 'map-and-weakmap',
    title: 'Map & WeakMap',
    description: 'Keyed collections where keys can be anything.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Maps vs Objects',
        paragraphs: [
          'Maps allow objects as keys and maintain insertion order.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Map',
        description: 'Create a map and set a key "name" to "Alice".',
        starterCode: 'const map = new Map();',
        solution: 'const map = new Map();\nmap.set("name", "Alice");',
        hints: ['Use map.set()'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Can an object be a key in a Map?',
        options: ['Yes', 'No'],
        correctIndex: 0,
        explanation: 'Yes, this is a major feature of Maps.'
      }
    ],
    keyTakeaways: ['Maps are iterable and size is easily checked.'],
    tags: ['collections', 'map']
  },
  {
    slug: 'set-and-weakset',
    title: 'Set & WeakSet',
    description: 'Store unique values of any type.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Uniqueness',
        paragraphs: [
          'Sets automatically remove duplicate values.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Remove Duplicates',
        description: 'Convert an array to a set to remove duplicates.',
        starterCode: 'const nums = [1, 1, 2, 2, 3];',
        solution: 'const nums = [1, 1, 2, 2, 3];\nconst unique = new Set(nums);',
        hints: ['Pass array to Set constructor'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'How do you check if a value exists in a Set?',
        options: ['set.contains()', 'set.includes()', 'set.has()'],
        correctIndex: 2,
        explanation: 'Sets use the has() method.'
      }
    ],
    keyTakeaways: ['Sets are perfect for unique lists.'],
    tags: ['collections', 'set']
  },
  {
    slug: 'json-essentials',
    title: 'JSON Essentials',
    description: 'Format data for the web.',
    difficulty: 'beginner',
    readingTime: 4,
    sections: [
      {
        heading: 'Parsing and Stringifying',
        paragraphs: [
          'JSON.stringify converts objects to strings, JSON.parse does the reverse.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Stringify Object',
        description: 'Convert obj to JSON string.',
        starterCode: 'const obj = {a: 1};',
        solution: 'const obj = {a: 1};\nconst json = JSON.stringify(obj);',
        hints: ['Use JSON.stringify'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Are JSON keys required to be quoted?',
        options: ['Yes, double quotes', 'Yes, single quotes', 'No'],
        correctIndex: 0,
        explanation: 'JSON requires double quotes around keys.'
      }
    ],
    keyTakeaways: ['JSON is the standard for web data exchange.'],
    tags: ['data', 'json']
  },
  {
    slug: 'date-and-time',
    title: 'Date & Time',
    description: 'Work with dates in JavaScript.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The Date Object',
        paragraphs: [
          'JavaScript provides the Date object for handling time.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Current Date',
        description: 'Get the current date.',
        starterCode: 'const now = null;',
        solution: 'const now = new Date();',
        hints: ['Instantiate new Date'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does Date.now() return?',
        options: ['Date string', 'Milliseconds since epoch', 'A Date object'],
        correctIndex: 1,
        explanation: 'It returns a timestamp integer.'
      }
    ],
    keyTakeaways: ['Dates can be tricky, use libraries if complex.'],
    tags: ['data', 'date']
  }
];
