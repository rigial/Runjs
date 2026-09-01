// Auto-generated rewritten beginner-friendly curriculum for RunJS
import type { Lesson } from '../../types';

export const part4Lessons: Lesson[] = [
  {
    slug: 'class',
    title: 'Class Syntax & Object-Oriented JavaScript',
    description:
      'Learn modern ES6 class syntax: constructor methods, instance fields, class methods, and class expressions.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: "The Modern 'class' Keyword",
        paragraphs: [
          'Introduced in ECMAScript 2015 (ES6), the class syntax provides a clean, modern way to practice Object-Oriented Programming (OOP) in JavaScript.',
          "Under the hood, classes are built directly on top of JavaScript's prototypal inheritance system, acting as syntactic sugar over constructor functions and prototypes.",
        ],
        codeExamples: [
          {
            title: 'Declaring and Instantiating a Class',
            code: "class User {\n  // Constructor runs when 'new User()' is called:\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  // Method added to User.prototype:\n  getProfile() {\n    return `${this.name} <${this.email}>`;\n  }\n}\n\nconst user = new User('Alex Rivera', 'alex@example.com');\nconsole.log(user.getProfile());",
            output: 'Alex Rivera <alex@example.com>',
            explanation:
              'The constructor initializes instance properties, and methods are shared on User.prototype.',
          },
        ],
        bulletPoints: [
          'Class declarations are always in strict mode by default.',
          'Classes cannot be called without the new keyword (throws a TypeError).',
          'Methods defined in classes are non-enumerable.',
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Rectangle Class',
        description:
          'Create a Rectangle class with width and height in its constructor and an area() method that returns width * height.',
        starterCode:
          'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  area() {\n    return this.width * this.height;\n  }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area());',
        solution:
          'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  area() {\n    return this.width * this.height;\n  }\n}\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area());',
        hints: ['Implement constructor(width, height) and area().'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          "What happens if you invoke a class without the 'new' keyword (e.g. User('Alex'))?",
        options: [
          "It throws a TypeError: Class constructor cannot be invoked without 'new'",
          'It silently creates a global variable',
          'It returns undefined',
          'It converts to a function declaration',
        ],
        correctIndex: 0,
        explanation:
          'JavaScript enforces the new keyword for class instantiation to prevent accidental global scope pollution.',
      },
    ],
    keyTakeaways: [
      'Classes provide clean OOP syntax over prototypal inheritance.',
      'Constructor functions initialize instance properties.',
      'Class methods live on the prototype and are shared across instances.',
    ],
    tags: ['classes', 'oop', 'es6', 'constructors'],
  },
  {
    slug: 'class-inheritance',
    title: "Class Inheritance & the 'super' Keyword",
    description:
      "Extend classes with 'extends', call parent constructors with super(), and override inherited methods.",
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: "Extending Classes with 'extends'",
        paragraphs: [
          'Class inheritance allows one class to inherit all properties and methods from another class using the extends keyword.',
          "The child class can call the parent's constructor using super(...args) and invoke parent methods using super.method().",
        ],
        codeExamples: [
          {
            title: 'Subclassing with extends and super',
            code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  makeSound() {\n    return `${this.name} makes a sound.`;\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    // Must call super() before accessing 'this':\n    super(name);\n    this.breed = breed;\n  }\n  makeSound() {\n    return `${this.name} barks loudly!`;\n  }\n}\n\nconst myDog = new Dog('Max', 'Golden Retriever');\nconsole.log(myDog.makeSound());",
            output: 'Max barks loudly!',
            explanation:
              'The Dog subclass inherits from Animal and overrides the makeSound method.',
          },
        ],
        callout: {
          type: 'important',
          text: "In derived class constructors, you MUST call super() before referencing 'this'. Failing to do so throws a ReferenceError.",
        },
      },
    ],
    exercises: [
      {
        title: 'Extend an Employee Class',
        description:
          'Create a Manager class extending Employee(name, salary) that adds a department property and calls super(name, salary).',
        starterCode:
          "class Employee {\n  constructor(name, salary) {\n    this.name = name;\n    this.salary = salary;\n  }\n}\n\nclass Manager extends Employee {\n  constructor(name, salary, department) {\n    super(name, salary);\n    this.department = department;\n  }\n}\n\nconst mgr = new Manager('Sarah', 95000, 'Engineering');\nconsole.log(mgr.name, mgr.department);",
        solution:
          "class Employee {\n  constructor(name, salary) {\n    this.name = name;\n    this.salary = salary;\n  }\n}\nclass Manager extends Employee {\n  constructor(name, salary, department) {\n    super(name, salary);\n    this.department = department;\n  }\n}\nconst mgr = new Manager('Sarah', 95000, 'Engineering');\nconsole.log(mgr.name, mgr.department);",
        hints: ['Call super(name, salary) inside the Manager constructor.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          "Why must super() be called before accessing 'this' in a derived class constructor?",
        options: [
          "Because the parent constructor creates and initializes the 'this' object in memory",
          'Because JavaScript only allows one constructor',
          'To clear the call stack',
          'It is an optional recommendation',
        ],
        correctIndex: 0,
        explanation:
          'In derived classes, the instance object is initialized by the parent constructor via super().',
      },
    ],
    keyTakeaways: [
      'Use extends to establish an inheritance relationship between classes.',
      'Always call super() first in derived constructors.',
      'Child classes can override parent methods and access them via super.method().',
    ],
    tags: ['classes', 'inheritance', 'extends', 'super', 'oop'],
  },
  {
    slug: 'static-properties-methods',
    title: 'Static Properties and Methods',
    description:
      "Attach methods and constants directly to the class constructor itself using the 'static' keyword.",
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'What are Static Members?',
        paragraphs: [
          'Static properties and methods belong to the class constructor itself rather than to individual instances of the class.',
          'They are ideal for utility functions, factory methods, and database connections.',
        ],
        codeExamples: [
          {
            title: 'Static Factory Methods',
            code: "class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  // Static utility method:\n  static distance(a, b) {\n    const dx = a.x - b.x;\n    const dy = a.y - b.y;\n    return Math.hypot(dx, dy);\n  }\n}\n\nconst p1 = new Point(0, 0);\nconst p2 = new Point(3, 4);\n\nconsole.log('Distance:', Point.distance(p1, p2)); // 5",
            output: 'Distance: 5',
            explanation:
              'Point.distance is called on Point itself, not on instance p1 or p2.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Static Math Helper',
        description:
          'Add a static method cube(n) to class MathUtil that returns n ** 3. Call MathUtil.cube(3).',
        starterCode:
          'class MathUtil {\n  static cube(n) {\n    return n ** 3;\n  }\n}\n\nconsole.log(MathUtil.cube(3));',
        solution:
          'class MathUtil {\n  static cube(n) {\n    return n ** 3;\n  }\n}\nconsole.log(MathUtil.cube(3));',
        hints: ['Declare static cube(n) { return n ** 3; }.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Can you call a static method from an instance of a class (e.g. const p = new Point(); p.distance())?',
        options: [
          'No, static methods are attached to the class constructor, not the instance',
          'Yes, instances inherit all static methods',
          'Only if declared public',
          'Only in TypeScript',
        ],
        correctIndex: 0,
        explanation:
          'Static methods are properties of the constructor function itself and cannot be called directly on instances.',
      },
    ],
    keyTakeaways: [
      'Static methods and properties belong to the class, not instances.',
      'Useful for factory constructors, math helpers, and caching singletons.',
    ],
    tags: ['classes', 'static', 'methods', 'oop', 'factories'],
  },
  {
    slug: 'private-protected-properties-methods',
    title: 'Private & Protected Fields: Encapsulation',
    description:
      "Enforce true privacy with '#' private fields and convention-based protected properties.",
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: "Private Fields with '#'",
        paragraphs: [
          'Modern JavaScript (ES2022) natively supports private class fields and methods prefixed with the hash symbol (#).',
          'Private fields are strictly encapsulated: they can only be accessed from inside the class declaration. Attempting to access them from outside throws a SyntaxError.',
        ],
        codeExamples: [
          {
            title: 'Private Fields and Encapsulation',
            code: "class BankAccount {\n  // Private field:\n  #balance = 0;\n\n  constructor(initialDeposit) {\n    this.#balance = initialDeposit;\n  }\n\n  deposit(amount) {\n    if (amount > 0) this.#balance += amount;\n  }\n\n  getBalance() {\n    return this.#balance;\n  }\n}\n\nconst account = new BankAccount(500);\naccount.deposit(200);\nconsole.log('Balance:', account.getBalance()); // 700\n// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class",
            output: 'Balance: 700',
            explanation:
              '#balance cannot be read or tampered with outside the BankAccount class.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Class with a Private Token',
        description:
          'Create a Session class with private field #token. Provide a getToken() method that returns it.',
        starterCode:
          "class Session {\n  #token;\n  constructor(token) {\n    this.#token = token;\n  }\n  getToken() {\n    return this.#token;\n  }\n}\n\nconst s = new Session('secret-123');\nconsole.log(s.getToken());",
        solution:
          "class Session {\n  #token;\n  constructor(token) {\n    this.#token = token;\n  }\n  getToken() {\n    return this.#token;\n  }\n}\nconst s = new Session('secret-123');\nconsole.log(s.getToken());",
        hints: ['Declare #token; inside the class body.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'How are private fields declared in modern JavaScript classes?',
        options: [
          "Prefixing the field name with '#' (e.g. #privateField)",
          "Using the 'private' keyword before the name",
          'Prefixing with an underscore (_)',
          'Wrapping in a Symbol',
        ],
        correctIndex: 0,
        explanation:
          "The '#' prefix is JavaScript's official language-level private identifier syntax.",
      },
    ],
    keyTakeaways: [
      'Use #field to create true language-level private properties and methods.',
      'Private fields cannot be accessed or inspected outside the class.',
      'Protects internal state and invariants.',
    ],
    tags: ['classes', 'private-fields', 'encapsulation', 'oop', 'es2022'],
  },
  {
    slug: 'extend-natives',
    title: 'Extending Built-in Classes: Array & Error',
    description:
      'Extend native JavaScript classes like Array, Map, and Error with custom methods and behaviors.',
    difficulty: 'advanced',
    readingTime: 4,
    sections: [
      {
        heading: 'Subclassing Built-ins',
        paragraphs: [
          'Built-in classes like Array, Map, Set, and Error can be extended to create specialized data structures.',
          'Array methods like map and filter automatically return instances of your subclass using Symbol.species.',
        ],
        codeExamples: [
          {
            title: 'Creating a PowerArray',
            code: "class PowerArray extends Array {\n  isEmpty() {\n    return this.length === 0;\n  }\n  first() {\n    return this[0];\n  }\n}\n\nconst arr = new PowerArray(10, 20, 30);\nconsole.log('First element:', arr.first()); // 10\nconsole.log('Is empty?', arr.isEmpty());   // false",
            output: 'First element: 10\nIs empty? false',
            explanation:
              'PowerArray inherits all native Array methods while adding custom helper methods.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Custom Collection Class',
        description:
          'Extend Array with class Stack that adds peek() returning this[this.length - 1]. Test with new Stack(1, 2, 3).',
        starterCode:
          "class Stack extends Array {\n  peek() {\n    return this[this.length - 1];\n  }\n}\n\nconst s = new Stack('a', 'b', 'c');\nconsole.log(s.peek());",
        solution:
          "class Stack extends Array {\n  peek() {\n    return this[this.length - 1];\n  }\n}\nconst s = new Stack('a', 'b', 'c');\nconsole.log(s.peek());",
        hints: ['Implement peek() { return this[this.length - 1]; }.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What does arr.filter() return when called on an instance of class PowerArray extends Array?',
        options: [
          'A new instance of PowerArray',
          'A plain Array',
          'An object',
          'undefined',
        ],
        correctIndex: 0,
        explanation:
          'Native array methods use the constructor of the caller (Symbol.species) to construct return values.',
      },
    ],
    keyTakeaways: [
      'Native classes like Array, Map, and Error can be cleanly subclassed.',
      'Useful for domain-specific collections and custom typed errors.',
    ],
    tags: ['classes', 'inheritance', 'built-ins', 'array-extension'],
  },
  {
    slug: 'instanceof',
    title: "Class Checking: The 'instanceof' Operator",
    description:
      "Verify an object's prototype hierarchy with instanceof and customize behavior via Symbol.hasInstance.",
    difficulty: 'intermediate',
    readingTime: 4,
    sections: [
      {
        heading: 'The instanceof Operator',
        paragraphs: [
          "The instanceof operator tests whether a constructor's prototype appears anywhere in the prototype chain of an object.",
          'Syntax: obj instanceof ClassConstructor returns true or false.',
        ],
        codeExamples: [
          {
            title: 'instanceof Checks',
            code: 'class Animal {}\nclass Rabbit extends Animal {}\n\nconst rabbit = new Rabbit();\n\nconsole.log(rabbit instanceof Rabbit); // true\nconsole.log(rabbit instanceof Animal); // true (Inherited prototype!)\nconsole.log(rabbit instanceof Object); // true',
            output: 'true\ntrue\ntrue',
            explanation:
              'instanceof traverses the prototype chain upwards checking for a match.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Verify Instance Type',
        description:
          'Test whether [] instanceof Array and log the boolean result.',
        starterCode: 'console.log([] instanceof Array);',
        solution: 'console.log([] instanceof Array);',
        hints: ['Use [] instanceof Array.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'How does instanceof determine if obj is an instance of Class?',
        options: [
          "It checks if Class.prototype exists anywhere in obj's prototype chain",
          'It checks if obj has the same variable names',
          'It inspects typeof obj',
          'It checks if obj was created on the same thread',
        ],
        correctIndex: 0,
        explanation:
          'instanceof inspects the prototype chain of the object against the prototype property of the constructor.',
      },
    ],
    keyTakeaways: [
      'instanceof checks prototype chain membership.',
      'Use Array.isArray() instead of instanceof for arrays across different browser iframes.',
    ],
    tags: ['instanceof', 'types', 'oop', 'prototypes'],
  },
  {
    slug: 'mixins',
    title: 'Mixins: Composing Class Capabilities',
    description:
      'Overcome single-inheritance limitations by mixing reusable methods into class prototypes with Object.assign.',
    difficulty: 'advanced',
    readingTime: 5,
    sections: [
      {
        heading: 'What is a Mixin?',
        paragraphs: [
          'JavaScript only permits single class inheritance (a class can only have one extends superclass).',
          'A Mixin is an object containing methods that can be copied into a class prototype using Object.assign, allowing classes to compose capabilities from multiple sources.',
        ],
        codeExamples: [
          {
            title: 'Implementing a SayHi Mixin',
            code: "const sayHiMixin = {\n  sayHi() {\n    return `Hello, ${this.name}`;\n  },\n  sayBye() {\n    return `Goodbye, ${this.name}`;\n  }\n};\n\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// Copy mixin methods into User.prototype:\nObject.assign(User.prototype, sayHiMixin);\n\nconst u = new User('Oliver');\nconsole.log(u.sayHi());\nconsole.log(u.sayBye());",
            output: 'Hello, Oliver\nGoodbye, Oliver',
            explanation:
              'User now has sayHi and sayBye capabilities without complex inheritance trees.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Mix in Event Logging',
        description:
          'Create a mixin loggerMixin with a log(msg) method. Copy it to class Service prototype and test.',
        starterCode:
          "const loggerMixin = {\n  log(msg) {\n    console.log(`[LOG]: ${msg}`);\n  }\n};\n\nclass Service {}\nObject.assign(Service.prototype, loggerMixin);\n\nconst s = new Service();\ns.log('Service started');",
        solution:
          "const loggerMixin = {\n  log(msg) {\n    console.log(`[LOG]: ${msg}`);\n  }\n};\nclass Service {}\nObject.assign(Service.prototype, loggerMixin);\nconst s = new Service();\ns.log('Service started');",
        hints: ['Use Object.assign(Service.prototype, loggerMixin).'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: 'What design limitation do Mixins solve in JavaScript?',
        options: [
          'The limitation that classes can only extend a single parent class',
          'The lack of numbers',
          'The requirement to use semicolons',
          'The need for HTML files',
        ],
        correctIndex: 0,
        explanation:
          'Mixins allow composing behaviors from multiple sources into a single class hierarchy.',
      },
    ],
    keyTakeaways: [
      'Mixins allow horizontal composition of behaviors.',
      'Use Object.assign(Class.prototype, mixin) to inject methods.',
    ],
    tags: ['mixins', 'composition', 'oop', 'patterns'],
  },
  {
    slug: 'try-catch',
    title: 'Error Handling: try...catch...finally',
    description:
      'Prevent script crashes by intercepting runtime exceptions with try, catch, finally, and custom throw statements.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'The try...catch Construct',
        paragraphs: [
          'Normally, a runtime error (like accessing a missing property on null) halts script execution immediately with a fatal error in the console.',
          'The try...catch construct allows your program to intercept errors gracefully, log diagnostics, and provide fallback behavior.',
        ],
        codeExamples: [
          {
            title: 'Safe JSON Parsing with try...catch',
            code: "function safeParseJSON(jsonStr) {\n  try {\n    const data = JSON.parse(jsonStr);\n    return { success: true, data };\n  } catch (error) {\n    console.warn('Parsing failed:', error.message);\n    return { success: false, data: null };\n  } finally {\n    console.log('Parse operation completed.');\n  }\n}\n\nconsole.log(safeParseJSON('{\"id\": 1}'));\nconsole.log(safeParseJSON('invalid json string'));",
            output:
              'Parse operation completed.\n{\n  "success": true,\n  "data": {\n    "id": 1\n  }\n}\nParsing failed: Unexpected token \'i\', "invalid json string" is not valid JSON\nParse operation completed.\n{\n  "success": false,\n  "data": null\n}',
            explanation:
              'finally always runs regardless of whether an error was caught or not.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Handle Division by Zero with throw',
        description:
          "Write a function divide(a, b) that throws new Error('Division by zero') if b === 0. Wrap in try/catch.",
        starterCode:
          "function divide(a, b) {\n  if (b === 0) throw new Error('Division by zero');\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 0));\n} catch (err) {\n  console.log(err.message);\n}",
        solution:
          "function divide(a, b) {\n  if (b === 0) throw new Error('Division by zero');\n  return a / b;\n}\ntry {\n  console.log(divide(10, 0));\n} catch (err) {\n  console.log(err.message);\n}",
        hints: ['Check if b === 0 and throw new Error(...).'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          "When does the 'finally' block execute in a try...catch...finally statement?",
        options: [
          'Always, whether an error occurred in try or not, even if return was called',
          'Only when an error occurs',
          'Only when no error occurs',
          'Only when the browser window closes',
        ],
        correctIndex: 0,
        explanation:
          'The finally clause always executes after try and catch, making it ideal for cleanup operations.',
      },
    ],
    keyTakeaways: [
      'try...catch handles synchronous runtime exceptions gracefully.',
      "Use throw new Error('message') to signal business logic errors.",
      'finally guarantees cleanup execution.',
    ],
    tags: ['error-handling', 'try-catch', 'finally', 'throw', 'exceptions'],
  },
  {
    slug: 'custom-errors',
    title: 'Custom Errors & Extending Error',
    description:
      'Create domain-specific error classes by extending the built-in Error class with custom error names and HTTP codes.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Creating Custom Error Classes',
        paragraphs: [
          'In real-world applications, you often need specific error types (e.g. ValidationError, NetworkError, DatabaseError) so you can catch and handle different errors differently.',
          'To create custom error classes, extend the built-in Error class and set this.name = this.constructor.name.',
        ],
        codeExamples: [
          {
            title: 'ValidationError Class',
            code: "class ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = 'ValidationError';\n    this.field = field;\n  }\n}\n\nfunction validateEmail(email) {\n  if (!email.includes('@')) {\n    throw new ValidationError('Invalid email format', 'email');\n  }\n  return true;\n}\n\ntry {\n  validateEmail('bad-address');\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.log(`Validation failed on ${err.field}: ${err.message}`);\n  } else {\n    throw err; // rethrow unknown error\n  }\n}",
            output: 'Validation failed on email: Invalid email format',
            explanation:
              'Custom error classes allow specific catch handling with instanceof checks.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a NotFoundError',
        description:
          "Create a NotFoundError class extending Error that sets this.name = 'NotFoundError' and has statusCode = 404.",
        starterCode:
          "class NotFoundError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'NotFoundError';\n    this.statusCode = 404;\n  }\n}\n\nconst err = new NotFoundError('Item not found');\nconsole.log(err.name, err.statusCode, err.message);",
        solution:
          "class NotFoundError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'NotFoundError';\n    this.statusCode = 404;\n  }\n}\nconst err = new NotFoundError('Item not found');\nconsole.log(err.name, err.statusCode, err.message);",
        hints: ['Call super(message) and set this.name and this.statusCode.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Why is it recommended to inherit from the built-in Error class when creating custom errors?',
        options: [
          'It automatically captures the call stack trace and provides standard error properties (.message, .stack)',
          'Because classes cannot exist without Error',
          'To run faster in Node.js',
          'It disables try/catch requirements',
        ],
        correctIndex: 0,
        explanation:
          'Subclassing Error inherits stack trace capture and standard error semantics.',
      },
    ],
    keyTakeaways: [
      'Extend Error to create typed application errors.',
      'Use instanceof checks in catch blocks to handle specific failure modes.',
      'Rethrow unrecognized errors to avoid swallowing fatal bugs.',
    ],
    tags: ['errors', 'custom-errors', 'inheritance', 'validation'],
  },
  {
    slug: 'callbacks',
    title: 'Asynchronous JavaScript: Callbacks',
    description:
      'Understand async programming roots: passing callback functions, error-first callback conventions, and Callback Hell.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'The Need for Asynchronous Code',
        paragraphs: [
          'JavaScript is single-threaded. If network requests or file reads were synchronous, the entire browser would freeze until data arrived.',
          'To prevent blocking, JavaScript uses asynchronous programming: you initiate an action and pass a Callback function to be executed when the action completes.',
        ],
        codeExamples: [
          {
            title: 'Error-First Callback Pattern',
            code: "function loadUserData(userId, callback) {\n  setTimeout(() => {\n    if (userId <= 0) {\n      callback(new Error('Invalid user ID'));\n      return;\n    }\n    const data = { id: userId, name: 'Lucas' };\n    callback(null, data); // null means no error\n  }, 50);\n}\n\nloadUserData(42, (err, user) => {\n  if (err) {\n    console.error(err.message);\n    return;\n  }\n  console.log('User loaded:', user.name);\n});",
            output: 'User loaded: Lucas',
            explanation:
              'The error-first pattern (err, result) was standard in early Node.js and browser libraries.',
          },
        ],
        bulletPoints: [
          'Asynchronous operations run in the background without blocking the main UI thread.',
          'Callback Hell (Pyramid of Doom): Nested callbacks become hard to read, maintain, and error-handle.',
          'Modern JavaScript replaces callbacks with Promises and async/await.',
        ],
      },
    ],
    exercises: [
      {
        title: 'Simulate Async Callback',
        description:
          "Write a function delayedGreeting(name, callback) that calls callback('Hello, ' + name) using setTimeout after 10ms.",
        starterCode:
          "function delayedGreeting(name, callback) {\n  setTimeout(() => {\n    callback(`Hello, ${name}`);\n  }, 10);\n}\n\ndelayedGreeting('Alice', (msg) => {\n  console.log(msg);\n});",
        solution:
          "function delayedGreeting(name, callback) {\n  setTimeout(() => {\n    callback(`Hello, ${name}`);\n  }, 10);\n}\ndelayedGreeting('Alice', (msg) => {\n  console.log(msg);\n});",
        hints: ['Call callback inside the setTimeout callback.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: "What is 'Callback Hell' (or the Pyramid of Doom)?",
        options: [
          'Deeply nested asynchronous callbacks that make code difficult to read, reason about, and handle errors',
          'A compiler bug in Chrome',
          'A function that calls itself in an infinite loop',
          'An error thrown when a callback is missing',
        ],
        correctIndex: 0,
        explanation:
          'Nested callbacks create triangular indented code that is notoriously brittle and error-prone.',
      },
    ],
    keyTakeaways: [
      'Callbacks are functions passed as arguments to run upon async completion.',
      'Promises were created to solve Callback Hell.',
    ],
    tags: ['async', 'callbacks', 'callback-hell', 'event-loop'],
  },
  {
    slug: 'promise-basics',
    title: 'Promises: Producing & Consuming Code',
    description:
      'Master the Promise lifecycle: pending, fulfilled, and rejected states, and consume results with .then(), .catch(), and .finally().',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'The Promise Object',
        paragraphs: [
          'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.',
          'A promise has three states: pending (working), fulfilled (resolved successfully), or rejected (failed with an error).',
        ],
        codeExamples: [
          {
            title: 'Creating and Consuming a Promise',
            code: "const checkInventory = new Promise((resolve, reject) => {\n  const inStock = true;\n  if (inStock) {\n    resolve('Items are in stock!');\n  } else {\n    reject(new Error('Out of stock'));\n  }\n});\n\ncheckInventory\n  .then(result => console.log('Success:', result))\n  .catch(err => console.error('Failed:', err.message))\n  .finally(() => console.log('Inventory check completed.'));",
            output: 'Success: Items are in stock!\nInventory check completed.',
            explanation:
              '.then handles success, .catch handles errors, and .finally always runs.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Resolved Promise',
        description:
          "Use Promise.resolve('Data ready') and log the result using .then().",
        starterCode:
          "Promise.resolve('Data ready').then(data => {\n  console.log(data);\n});",
        solution:
          "Promise.resolve('Data ready').then(data => {\n  console.log(data);\n});",
        hints: ["Call Promise.resolve('Data ready').then(...)."],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: 'What are the three states of a JavaScript Promise?',
        options: [
          'pending, fulfilled, and rejected',
          'waiting, finished, and canceled',
          'open, active, and closed',
          'started, running, and ended',
        ],
        correctIndex: 0,
        explanation:
          'A promise starts pending, then settles into either fulfilled (resolved) or rejected.',
      },
    ],
    keyTakeaways: [
      'Promises represent future asynchronous values.',
      'Consume promises using .then() for values and .catch() for errors.',
      'A promise can only settle once (either resolved or rejected).',
    ],
    tags: ['promises', 'async', 'then', 'catch', 'resolve'],
  },
  {
    slug: 'promise-chaining',
    title: 'Promise Chaining: Sequential Async Operations',
    description:
      'Chain asynchronous operations linearly by returning promises from .then() handlers.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Linear Async Pipelines',
        paragraphs: [
          'The true superpower of promises is chaining: every call to .then() returns a new promise.',
          'If a .then() handler returns a value, the next promise resolves with that value. If it returns another promise, the chain pauses until that inner promise settles.',
        ],
        codeExamples: [
          {
            title: 'Promise Chaining Pipeline',
            code: "Promise.resolve(2)\n  .then(num => {\n    console.log('Step 1:', num);\n    return num * 2; // returns 4\n  })\n  .then(num => {\n    console.log('Step 2:', num);\n    return new Promise(resolve => setTimeout(() => resolve(num * 3), 50));\n  })\n  .then(finalVal => {\n    console.log('Final result:', finalVal); // 12\n  });",
            output: 'Step 1: 2\nStep 2: 4\nFinal result: 12',
            explanation:
              'Transforms async operations into a flat, sequential, readable pipeline.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Chain Mathematical Operations',
        description:
          'Start with Promise.resolve(5), chain a .then that adds 10, then chain a .then that multiplies by 2. Log final result.',
        starterCode:
          'Promise.resolve(5)\n  .then(n => n + 10)\n  .then(n => n * 2)\n  .then(res => console.log(res));',
        solution:
          'Promise.resolve(5)\n  .then(n => n + 10)\n  .then(n => n * 2)\n  .then(res => console.log(res));',
        hints: [
          'Chain two .then handlers: .then(n => n + 10).then(n => n * 2).',
        ],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: 'What does returning a promise inside a .then() handler do?',
        options: [
          'Pauses the promise chain until the returned promise settles, passing its result to the next .then()',
          'Throws a TypeError',
          'Cancels the chain immediately',
          'Restarts the chain from the beginning',
        ],
        correctIndex: 0,
        explanation:
          'Returning a promise inside .then allows seamless sequential chaining of async operations.',
      },
    ],
    keyTakeaways: [
      'Promise chaining flattens nested callbacks into clean linear code.',
      'Always return values or promises from .then() handlers to propagate data.',
    ],
    tags: ['promises', 'chaining', 'async', 'pipeline'],
  },
  {
    slug: 'promise-error-handling',
    title: 'Error Handling with Promises',
    description:
      'Catch asynchronous errors in promise chains, handle unhandled rejections, and recover from failures.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The Catch-All .catch()',
        paragraphs: [
          'If an error occurs anywhere in a promise chain (or if a handler throws an exception), the chain skips all intermediate .then handlers and jumps directly to the nearest .catch().',
          'A .catch() handler can also recover from an error by returning a fallback value, allowing subsequent .then() handlers to continue.',
        ],
        codeExamples: [
          {
            title: 'Error Catching and Recovery',
            code: "Promise.resolve('https://invalid-api.com')\n  .then(url => {\n    throw new Error('Network timeout');\n  })\n  .catch(err => {\n    console.warn(`Recovered from: ${err.message}`);\n    return { fallbackData: true }; // Recover!\n  })\n  .then(data => {\n    console.log('App continued with data:', data);\n  });",
            output:
              'Recovered from: Network timeout\nApp continued with data: {\n  "fallbackData": true\n}',
            explanation:
              ".catch handles errors and can provide fallback data so the application doesn't crash.",
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Catch and Log Error',
        description:
          "Reject a promise with new Error('Failed to load'). Catch it and log err.message.",
        starterCode:
          "Promise.reject(new Error('Failed to load'))\n  .catch(err => {\n    console.log(err.message);\n  });",
        solution:
          "Promise.reject(new Error('Failed to load'))\n  .catch(err => {\n    console.log(err.message);\n  });",
        hints: ['Attach .catch(err => console.log(err.message)).'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What happens if a promise rejects and there is no .catch() handler attached anywhere in the chain?',
        options: [
          "The runtime emits an 'UnhandledPromiseRejection' event and error warning in the console",
          'The computer deletes the script file',
          'The browser re-runs the script in strict mode',
          'It defaults to true',
        ],
        correctIndex: 0,
        explanation:
          'Unhandled promise rejections cause console warnings and can crash Node.js processes.',
      },
    ],
    keyTakeaways: [
      'Always attach .catch() to promise chains to handle potential rejections.',
      'You can recover from errors by returning a fallback value from .catch().',
    ],
    tags: ['promises', 'error-handling', 'catch', 'rejections'],
  },
  {
    slug: 'promise-api',
    title: 'Promise API: all, allSettled, race, any',
    description:
      'Execute multiple promises concurrently using Promise.all, Promise.allSettled, Promise.race, and Promise.any.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'The 4 Concurrent Promise Combinators',
        paragraphs: [
          'When performing multiple asynchronous requests in parallel, JavaScript provides four static combinators:',
          '1. Promise.all([p1, p2]): Waits for ALL to fulfill. Fails fast if ANY promise rejects.',
          '2. Promise.allSettled([p1, p2]): Waits for ALL to settle. Returns array of { status, value/reason }.',
          '3. Promise.race([p1, p2]): Returns the result of the FIRST promise to settle (fulfill or reject).',
          '4. Promise.any([p1, p2]): Returns the FIRST fulfilled promise. Fails only if ALL reject.',
        ],
        codeExamples: [
          {
            title: 'Promise.all vs Promise.allSettled',
            code: "const p1 = Promise.resolve('User profile');\nconst p2 = Promise.resolve('Notifications');\n\nPromise.all([p1, p2]).then(results => {\n  console.log('All loaded in parallel:', results);\n});\n\n// allSettled handles mixed success/failure gracefully:\nconst pBad = Promise.reject('Analytics offline');\nPromise.allSettled([p1, pBad]).then(outcomes => {\n  console.log('Outcomes:', outcomes);\n});",
            output:
              'All loaded in parallel: [\n  "User profile",\n  "Notifications"\n]\nOutcomes: [\n  {\n    "status": "fulfilled",\n    "value": "User profile"\n  },\n  {\n    "status": "rejected",\n    "reason": "Analytics offline"\n  }\n]',
            explanation:
              'Promise.all runs requests concurrently for maximum network performance.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Fetch Multiple Resources in Parallel',
        description:
          'Combine Promise.resolve(10) and Promise.resolve(20) with Promise.all. Log the sum of the results.',
        starterCode:
          'Promise.all([Promise.resolve(10), Promise.resolve(20)]).then(([a, b]) => {\n  console.log(a + b);\n});',
        solution:
          'Promise.all([Promise.resolve(10), Promise.resolve(20)]).then(([a, b]) => {\n  console.log(a + b);\n});',
        hints: ['Destructure [a, b] in the .then callback.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Which Promise method waits for all promises to finish and returns their outcomes without failing fast if one rejects?',
        options: [
          'Promise.allSettled()',
          'Promise.all()',
          'Promise.race()',
          'Promise.any()',
        ],
        correctIndex: 0,
        explanation:
          'Promise.allSettled() never rejects; it waits for all input promises to settle and returns their status and value/reason.',
      },
    ],
    keyTakeaways: [
      'Use Promise.all() when all operations are required to succeed.',
      'Use Promise.allSettled() when you want to inspect each operation independently.',
      'Use Promise.race() for timeout races and Promise.any() for fastest-mirror requests.',
    ],
    tags: ['promises', 'promise-all', 'allSettled', 'race', 'concurrency'],
  },
  {
    slug: 'promisify',
    title: 'Promisification: Converting Callbacks to Promises',
    description:
      'Convert traditional node-style callback functions into modern Promise-returning functions.',
    difficulty: 'advanced',
    readingTime: 4,
    sections: [
      {
        heading: 'What is Promisification?',
        paragraphs: [
          'Promisification is the conversion of a function that accepts a callback into a function that returns a Promise.',
          'This allows older libraries and legacy APIs to participate in modern async/await workflows.',
        ],
        codeExamples: [
          {
            title: 'Writing a Custom promisify Helper',
            code: "function promisify(fn) {\n  return function(...args) {\n    return new Promise((resolve, reject) => {\n      fn(...args, (err, result) => {\n        if (err) return reject(err);\n        resolve(result);\n      });\n    });\n  };\n}\n\n// Legacy callback function:\nfunction oldAsyncCalc(x, cb) {\n  setTimeout(() => cb(null, x * 10), 20);\n}\n\n// Promisified version:\nconst modernCalc = promisify(oldAsyncCalc);\nmodernCalc(5).then(res => console.log('Promisified result:', res));",
            output: 'Promisified result: 50',
            explanation:
              'The wrapper intercepts the error-first callback and resolves/rejects a Promise.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Promisify a Timeout',
        description:
          'Write a function sleep(ms) that returns a Promise resolving after ms milliseconds using setTimeout.',
        starterCode:
          "function sleep(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nsleep(50).then(() => console.log('Woke up!'));",
        solution:
          "function sleep(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\nsleep(50).then(() => console.log('Woke up!'));",
        hints: ['return new Promise(resolve => setTimeout(resolve, ms));'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: 'What is the main goal of promisifying a function?',
        options: [
          'To enable the use of .then() and async/await with older callback-based APIs',
          'To make synchronous functions run slower',
          'To convert JavaScript to TypeScript',
          'To run functions on the GPU',
        ],
        correctIndex: 0,
        explanation:
          'Promisification bridges older callback APIs with modern Promise and async/await syntax.',
      },
    ],
    keyTakeaways: [
      'Promisification wraps callback APIs inside a Promise.',
      'Node.js provides a built-in util.promisify helper for standard error-first functions.',
    ],
    tags: ['promisify', 'callbacks', 'promises', 'modernization'],
  },
  {
    slug: 'microtask-queue',
    title: 'Microtasks and the Event Loop Queue',
    description:
      'Understand execution order: synchronous code vs microtasks (Promises, queueMicrotask) vs macrotasks (setTimeout).',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'The Event Loop: Microtasks vs Macrotasks',
        paragraphs: [
          'JavaScript executes code sequentially. When asynchronous tasks are scheduled, they enter queues with different priorities:',
          '1. Call Stack: Synchronous code runs first.',
          '2. Microtask Queue: Promise .then/.catch handlers and queueMicrotask(). The engine empties the ENTIRE microtask queue before rendering or moving to the next task.',
          '3. Macrotask Queue: setTimeout, setInterval, I/O, UI events.',
        ],
        codeExamples: [
          {
            title: 'Execution Priority Order',
            code: "console.log('1. Synchronous');\n\nsetTimeout(() => {\n  console.log('4. Macrotask (setTimeout)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3. Microtask (Promise)');\n});\n\nconsole.log('2. Synchronous');",
            output:
              '1. Synchronous\n2. Synchronous\n3. Microtask (Promise)\n4. Macrotask (setTimeout)',
            explanation:
              'Microtasks always run before macrotasks (even setTimeout with 0ms delay!).',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Schedule a Microtask',
        description:
          "Use queueMicrotask(() => console.log('Microtask fired')) to run after a synchronous log.",
        starterCode:
          "console.log('Sync start');\nqueueMicrotask(() => console.log('Microtask fired'));\nconsole.log('Sync end');",
        solution:
          "console.log('Sync start');\nqueueMicrotask(() => console.log('Microtask fired'));\nconsole.log('Sync end');",
        hints: ['Call queueMicrotask with an arrow function.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Which runs first: a Promise .then() callback or a setTimeout(..., 0) callback?',
        options: [
          'The Promise .then() callback (Microtask has higher priority)',
          'The setTimeout callback (Macrotask has higher priority)',
          'They run simultaneously',
          'Random order',
        ],
        correctIndex: 0,
        explanation:
          'Promise callbacks reside in the Microtask queue, which is completely emptied before any Macrotask (like setTimeout) is executed.',
      },
    ],
    keyTakeaways: [
      'Synchronous code runs to completion first.',
      'Microtasks (Promises) run immediately after synchronous execution and before any macrotasks.',
      'Macrotasks (setTimeout, setInterval) run on subsequent event loop ticks.',
    ],
    tags: ['event-loop', 'microtasks', 'macrotasks', 'promises', 'concurrency'],
  },
  {
    slug: 'async-await',
    title: 'Async/Await: Synchronous-Looking Async Code',
    description:
      'The modern pinnacle of asynchronous JavaScript: write clean, sequential asynchronous code using async and await with try/catch.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: "The 'async' and 'await' Keywords",
        paragraphs: [
          'async and await provide comfortable syntactic sugar over Promises. An async function always returns a Promise automatically.',
          'The await keyword pauses function execution until a Promise settles and returns its resolved value, allowing you to write asynchronous code that reads sequentially like synchronous code.',
        ],
        codeExamples: [
          {
            title: 'Writing Async/Await Functions',
            code: "async function fetchUserData(userId) {\n  try {\n    console.log('Fetching user...');\n    // Simulated async network delay:\n    const user = await new Promise(resolve => \n      setTimeout(() => resolve({ id: userId, name: 'Ava', verified: true }), 50)\n    );\n    \n    console.log('User received:', user.name);\n    return user;\n  } catch (err) {\n    console.error('Fetch error:', err.message);\n  }\n}\n\nfetchUserData(10);",
            output: 'Fetching user...\nUser received: Ava',
            explanation:
              'await pauses inside the async function without blocking the browser thread.',
          },
        ],
        callout: {
          type: 'tip',
          text: 'Always wrap await calls in try...catch blocks to handle network errors and rejected promises cleanly.',
        },
      },
    ],
    exercises: [
      {
        title: 'Write an Async Multiplier',
        description:
          'Write an async function getDoubled(n) that awaits Promise.resolve(n * 2) and returns it. Call and log.',
        starterCode:
          'async function getDoubled(n) {\n  const result = await Promise.resolve(n * 2);\n  return result;\n}\n\ngetDoubled(25).then(console.log);',
        solution:
          'async function getDoubled(n) {\n  const result = await Promise.resolve(n * 2);\n  return result;\n}\ngetDoubled(25).then(console.log);',
        hints: [
          'Declare async function getDoubled(n) and use await Promise.resolve(...).',
        ],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          "Can the 'await' keyword be used inside a normal, non-async function?",
        options: [
          'No, using await inside a non-async function throws a SyntaxError',
          'Yes, await works anywhere in JavaScript',
          'Only inside class constructors',
          'Only in strict mode',
        ],
        correctIndex: 0,
        explanation:
          'await is only valid inside async functions or at the top level of modern ES modules.',
      },
    ],
    keyTakeaways: [
      'async functions always return a Promise.',
      'await pauses execution until the promise settles, returning the resolved value.',
      'Handle errors naturally using standard try...catch blocks.',
    ],
    tags: ['async-await', 'promises', 'async', 'es2017', 'modern-js'],
  },
];
