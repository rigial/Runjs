import type { Lesson } from '../../types';

export const intermediateLessons: Lesson[] = [
  {
    slug: 'string-methods',
    title: 'Essential String Methods',
    description: 'Learn the most common and useful methods for manipulating text in JavaScript.',
    difficulty: 'beginner',
    readingTime: 10,
    sections: [
      {
        heading: 'Transforming and Inspecting Strings',
        paragraphs: [
          'JavaScript provides built-in methods to change the case of strings and check their contents without modifying the original string (strings are immutable).'
        ],
        codeExamples: [
          {
            title: 'Case and Inclusion',
            code: `const text = "Hello World";
console.log(text.toLowerCase());
console.log(text.includes("World"));
console.log(text.startsWith("He"));`,
            output: '"hello world"\ntrue\ntrue',
            explanation: 'Methods like toLowerCase() return a new string, while includes() and startsWith() return booleans.'
          }
        ]
      },
      {
        heading: 'Extracting Parts of a String',
        paragraphs: [
          'You can extract a portion of a string using slice() or substring().'
        ],
        codeExamples: [
          {
            title: 'Using slice',
            code: `const str = "JavaScript";
console.log(str.slice(0, 4));
console.log(str.slice(-6));`,
            output: '"Java"\n"Script"',
            explanation: 'slice() takes a start index and an optional end index. Negative indices count from the end.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Extract and Lowercase',
        description: 'Extract the first 5 characters of the given string and convert them to lowercase.',
        starterCode: 'function processText(text) {\n  // your code here\n}',
        solution: 'function processText(text) {\n  return text.slice(0, 5).toLowerCase();\n}',
        hints: ['Use .slice(0, 5)', 'Chain .toLowerCase() to the result'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which method modifies the original string?',
        options: ['slice()', 'toLowerCase()', 'None of them', 'replace()'],
        correctIndex: 2,
        explanation: 'Strings in JavaScript are immutable; string methods always return a new string.'
      },
      {
        question: 'What does "Apple".includes("p") return?',
        options: ['true', 'false', '1', '2'],
        correctIndex: 0,
        explanation: 'includes() checks if a substring exists within a string and returns a boolean.'
      }
    ],
    keyTakeaways: [
      'Strings are immutable; methods return new strings.',
      'slice() is great for extracting substrings, even from the end.',
      'includes() and startsWith() are perfect for checking contents.'
    ],
    tags: ['strings', 'methods', 'basics']
  },
  {
    slug: 'template-literals',
    title: 'Template Literals & Tagged Templates',
    description: 'Discover how to easily interpolate variables and create multiline strings.',
    difficulty: 'beginner',
    readingTime: 8,
    sections: [
      {
        heading: 'Template Literals Basics',
        paragraphs: [
          'Template literals use backticks (`) instead of quotes. They allow for easy string interpolation using ${} syntax and support multiline strings natively.'
        ],
        codeExamples: [
          {
            title: 'Interpolation and Multiline',
            code: `const name = "Alice";
const greeting = \`Hello, \${name}!
Welcome to the team.\`;
console.log(greeting);`,
            output: '"Hello, Alice!\\nWelcome to the team."',
            explanation: 'Notice how the variable is seamlessly injected, and line breaks are preserved.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Bio',
        description: 'Return a string "My name is [name] and I am [age] years old." using template literals.',
        starterCode: 'function createBio(name, age) {\n  // your code here\n}',
        solution: 'function createBio(name, age) {\n  return `My name is ${name} and I am ${age} years old.`;\n}',
        hints: ['Use backticks `', 'Wrap variables in ${}'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What character is used for template literals?',
        options: ['Single quote', 'Double quote', 'Backtick', 'Tilde'],
        correctIndex: 2,
        explanation: 'Backticks (`) are used to define template literals.'
      }
    ],
    keyTakeaways: [
      'Template literals make combining strings and variables much cleaner.',
      'They natively support multiline text.',
      'Expressions inside ${} are evaluated.'
    ],
    tags: ['strings', 'es6', 'template-literals']
  },
  {
    slug: 'string-searching',
    title: 'String Searching & Pattern Matching',
    description: 'Learn how to find substrings and use Regular Expressions in strings.',
    difficulty: 'intermediate',
    readingTime: 12,
    sections: [
      {
        heading: 'Finding Index and Matching',
        paragraphs: [
          'You can find the exact position of a substring using indexOf(), or use match() with Regular Expressions for complex pattern matching.'
        ],
        codeExamples: [
          {
            title: 'indexOf and match',
            code: `const text = "The rain in Spain";
console.log(text.indexOf("rain"));
console.log(text.match(/ain/g));`,
            output: '4\n["ain", "ain"]',
            explanation: 'indexOf gives the starting position, while match returns an array of matches when using the global flag (g).'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Find Vowels',
        description: 'Return an array of all vowels (a,e,i,o,u) found in the string, using match().',
        starterCode: 'function findVowels(str) {\n  // return array of matches or null\n}',
        solution: 'function findVowels(str) {\n  return str.match(/[aeiou]/gi) || [];\n}',
        hints: ['Use /[aeiou]/gi', 'Remember to handle the case where no match is found by returning []'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does indexOf return if the substring is not found?',
        options: ['undefined', 'null', '0', '-1'],
        correctIndex: 3,
        explanation: 'indexOf returns -1 when the search string is not found.'
      }
    ],
    keyTakeaways: [
      'indexOf() is fast for simple substring searches.',
      'match() with Regex is powerful for complex pattern extraction.'
    ],
    tags: ['strings', 'regex', 'searching']
  },
  {
    slug: 'number-essentials',
    title: 'Number Essentials & Gotchas',
    description: 'Understand how numbers work in JavaScript, including common pitfalls.',
    difficulty: 'beginner',
    readingTime: 10,
    sections: [
      {
        heading: 'Floating Point Precision',
        paragraphs: [
          'JavaScript uses double-precision 64-bit floats for all numbers. This can lead to precision issues when doing decimal math.'
        ],
        codeExamples: [
          {
            title: 'The 0.1 + 0.2 Problem',
            code: `console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));`,
            output: '0.30000000000000004\n"0.30"',
            explanation: 'Floating point math isn\'t exact. Use toFixed() or multiply/divide by integers to format or calculate accurately.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Safe Addition',
        description: 'Add two numbers and return the result rounded to 2 decimal places as a number.',
        starterCode: 'function addSafe(a, b) {\n  // your code here\n}',
        solution: 'function addSafe(a, b) {\n  return Number((a + b).toFixed(2));\n}',
        hints: ['Use .toFixed(2)', 'Convert the resulting string back to a number'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What is the result of 0.1 + 0.2 === 0.3?',
        options: ['true', 'false', 'undefined', 'NaN'],
        correctIndex: 1,
        explanation: 'Due to floating point precision, 0.1 + 0.2 equals 0.30000000000000004, so the strict equality is false.'
      }
    ],
    keyTakeaways: [
      'JavaScript has only one Number type (floats).',
      'Be careful with decimal arithmetic due to precision issues.',
      'NaN represents "Not-a-Number" but its type is still "number".'
    ],
    tags: ['numbers', 'math', 'gotchas']
  },
  {
    slug: 'math-object',
    title: 'The Math Object',
    description: 'Leverage the built-in Math object for common mathematical operations.',
    difficulty: 'beginner',
    readingTime: 8,
    sections: [
      {
        heading: 'Rounding and Randomness',
        paragraphs: [
          'The Math object provides methods like Math.round(), Math.floor(), and Math.random().'
        ],
        codeExamples: [
          {
            title: 'Useful Math Methods',
            code: `console.log(Math.floor(4.9));
console.log(Math.max(10, 20, 5));
console.log(Math.random()); // between 0 and 1`,
            output: '4\n20\n[random decimal between 0 and 1)',
            explanation: 'floor rounds down, max finds the highest value, and random generates a random decimal.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Random Integer',
        description: 'Write a function that returns a random integer between 0 and max (exclusive).',
        starterCode: 'function getRandomInt(max) {\n  // your code here\n}',
        solution: 'function getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}',
        hints: ['Multiply Math.random() by max', 'Use Math.floor() to round down'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which method rounds a number to the nearest integer?',
        options: ['Math.ceil()', 'Math.floor()', 'Math.round()', 'Math.trunc()'],
        correctIndex: 2,
        explanation: 'Math.round() rounds to the nearest integer. ceil always rounds up, floor rounds down.'
      }
    ],
    keyTakeaways: [
      'The Math object has no constructor; all methods and properties are static.',
      'Math.random() is essential for generating random values.'
    ],
    tags: ['math', 'numbers', 'built-in']
  },
  {
    slug: 'bigint',
    title: 'BigInt for Large Numbers',
    description: 'Learn how to handle extremely large integers using BigInt.',
    difficulty: 'intermediate',
    readingTime: 8,
    sections: [
      {
        heading: 'Beyond MAX_SAFE_INTEGER',
        paragraphs: [
          'JavaScript numbers lose precision above Number.MAX_SAFE_INTEGER (2^53 - 1). BigInt allows you to safely store and operate on large integers.'
        ],
        codeExamples: [
          {
            title: 'Creating and using BigInt',
            code: `const huge = 9007199254740991n;
const alsoHuge = BigInt("9007199254740992");
console.log(huge + 1n === alsoHuge);`,
            output: 'true',
            explanation: 'Append "n" to an integer or use the BigInt() constructor. You cannot mix BigInts and regular Numbers in math operations.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'BigInt Addition',
        description: 'Add two BigInt strings and return the result as a BigInt.',
        starterCode: 'function addBigInts(str1, str2) {\n  // your code here\n}',
        solution: 'function addBigInts(str1, str2) {\n  return BigInt(str1) + BigInt(str2);\n}',
        hints: ['Convert strings using BigInt()', 'Add them together'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Can you add a BigInt and a regular Number directly?',
        options: ['Yes', 'No', 'Only if the number is small', 'Only in strict mode'],
        correctIndex: 1,
        explanation: 'You cannot mix BigInt and Number in operations; you must explicitly convert one to the other.'
      }
    ],
    keyTakeaways: [
      'BigInts are created by appending "n" or using the BigInt constructor.',
      'They are perfect for high-precision large integers, like IDs or cryptography.',
      'You cannot mix BigInts and standard Numbers in arithmetic operations.'
    ],
    tags: ['numbers', 'bigint', 'es2020']
  },
  {
    slug: 'prototype-basics',
    title: 'Prototype Basics',
    description: 'Understand the fundamental concept of prototypes in JavaScript.',
    difficulty: 'intermediate',
    readingTime: 12,
    sections: [
      {
        heading: 'What is a Prototype?',
        paragraphs: [
          'In JavaScript, almost every object is associated with another object, called its prototype. The object inherits properties and methods from its prototype.'
        ],
        codeExamples: [
          {
            title: 'Object.create',
            code: `const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;
console.log(rabbit.eats);`,
            output: 'true',
            explanation: 'rabbit inherits from animal. When we ask for rabbit.eats, JS cannot find it on rabbit, so it looks at the prototype (animal).'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create an Inheriting Object',
        description: 'Use Object.create to make a `car` object that inherits from `vehicle`.',
        starterCode: 'const vehicle = { hasEngine: true };\n// create car here\n',
        solution: 'const vehicle = { hasEngine: true };\nconst car = Object.create(vehicle);\ncar.wheels = 4;',
        hints: ['Use Object.create(vehicle)'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which method sets the prototype of a newly created object?',
        options: ['Object.assign', 'Object.create', 'Object.setProto', 'new Object()'],
        correctIndex: 1,
        explanation: 'Object.create(proto) creates a new object with the specified prototype.'
      }
    ],
    keyTakeaways: [
      'Prototypes allow objects to share properties and methods.',
      'Object.create() is a clean way to set up inheritance.'
    ],
    tags: ['oop', 'prototypes', 'objects']
  },
  {
    slug: 'prototype-chain',
    title: 'The Prototype Chain',
    description: 'Learn how JavaScript traverses the prototype chain to find properties.',
    difficulty: 'intermediate',
    readingTime: 10,
    sections: [
      {
        heading: 'Traversing the Chain',
        paragraphs: [
          'When you access a property, JS looks at the object. If not found, it looks at the prototype, then the prototype\'s prototype, and so on, until it reaches null.'
        ],
        codeExamples: [
          {
            title: 'Prototype Chaining',
            code: `const grandParent = { a: 1 };
const parent = Object.create(grandParent);
parent.b = 2;
const child = Object.create(parent);
child.c = 3;
console.log(child.a);`,
            output: '1',
            explanation: 'child finds "a" on the grandParent object via the prototype chain.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Shadowing Properties',
        description: 'Create an object `child` inheriting from `parent`, but give `child` its own `value` property that shadows the parent\'s.',
        starterCode: 'const parent = { value: 10 };\n// create child and shadow value',
        solution: 'const parent = { value: 10 };\nconst child = Object.create(parent);\nchild.value = 20;',
        hints: ['Create child with Object.create', 'Assign child.value directly'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What is at the very end of the prototype chain?',
        options: ['Object.prototype', 'undefined', 'null', 'Window'],
        correctIndex: 2,
        explanation: 'The end of the prototype chain is null. Object.prototype.__proto__ is null.'
      }
    ],
    keyTakeaways: [
      'The prototype chain is the mechanism for inheritance in JS.',
      'Properties on the object "shadow" or override properties on the prototype.',
      'Chain lookups end when the prototype is null.'
    ],
    tags: ['oop', 'prototypes', 'inheritance']
  },
  {
    slug: 'constructor-functions',
    title: 'Constructor Functions',
    description: 'Use functions to blueprint and create multiple instances of objects.',
    difficulty: 'intermediate',
    readingTime: 12,
    sections: [
      {
        heading: 'The `new` Keyword',
        paragraphs: [
          'Before ES6 classes, constructor functions were the primary way to create objects with a shared prototype. They are invoked with the `new` keyword.'
        ],
        codeExamples: [
          {
            title: 'Constructor and Prototype',
            code: `function User(name) {
  this.name = name;
}
User.prototype.sayHi = function() {
  console.log("Hi, I am " + this.name);
};
const bob = new User("Bob");
bob.sayHi();`,
            output: '"Hi, I am Bob"',
            explanation: 'The `new` keyword creates an object, binds `this`, and links the prototype.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Constructor',
        description: 'Create a `Dog` constructor that takes a name. Add a `bark` method to its prototype.',
        starterCode: 'function Dog(name) {\n  // code\n}\n// add bark method',
        solution: 'function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() {\n  return "Woof";\n};',
        hints: ['Assign this.name', 'Attach bark to Dog.prototype'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What happens if you call a constructor function without `new`?',
        options: ['It works normally', 'It returns null', '`this` binds to the global object (or undefined in strict mode)', 'It throws an error automatically'],
        correctIndex: 2,
        explanation: 'Without `new`, `this` is not bound to a new object, leading to global pollution or errors in strict mode.'
      }
    ],
    keyTakeaways: [
      'Constructor functions are capitalized by convention.',
      'Methods should be attached to the prototype to save memory.',
      'Always use the `new` keyword when calling them.'
    ],
    tags: ['oop', 'constructors', 'functions']
  },
  {
    slug: 'class-basics',
    title: 'Class Basics',
    description: 'Learn the modern ES6 syntax for creating objects and defining blueprints.',
    difficulty: 'beginner',
    readingTime: 10,
    sections: [
      {
        heading: 'ES6 Classes',
        paragraphs: [
          'Classes in JavaScript are primarily syntactic sugar over the existing prototype-based inheritance. They provide a much cleaner and more intuitive syntax.'
        ],
        codeExamples: [
          {
            title: 'Defining a Class',
            code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(\`Hello, I am \${this.name}\`);
  }
}
const p = new Person("Alice", 25);
p.greet();`,
            output: '"Hello, I am Alice"',
            explanation: 'The constructor method is called when `new Person()` is executed. Methods are defined directly in the class body.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Rectangle Class',
        description: 'Create a class `Rectangle` with a constructor taking width and height, and a method `getArea()`.',
        starterCode: 'class Rectangle {\n  // your code\n}',
        solution: 'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  getArea() {\n    return this.width * this.height;\n  }\n}',
        hints: ['Use constructor(width, height)', 'Define getArea() returning width * height'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'How do you initialize properties when a class instance is created?',
        options: ['In the init() method', 'In the constructor() method', 'Outside any method', 'Using set()'],
        correctIndex: 1,
        explanation: 'The constructor() method is specifically for initialization when an instance is created.'
      }
    ],
    keyTakeaways: [
      'Classes offer a cleaner syntax over constructor functions.',
      'The `constructor` method handles initialization.',
      'Classes are not hoisted like function declarations.'
    ],
    tags: ['oop', 'classes', 'es6']
  },
  {
    slug: 'class-inheritance',
    title: 'Class Inheritance (extends, super)',
    description: 'Learn how to extend classes and use the super keyword to call parent methods.',
    difficulty: 'intermediate',
    readingTime: 12,
    sections: [
      {
        heading: 'Extending Classes',
        paragraphs: [
          'The `extends` keyword allows a class to inherit from another. The `super` keyword is used to call the constructor or methods of the parent class.'
        ],
        codeExamples: [
          {
            title: 'extends and super',
            code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() { console.log(this.name + ' makes a noise.'); }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
  speak() { console.log(this.name + ' barks.'); }
}
const d = new Dog('Rex', 'Husky');
d.speak();`,
            output: '"Rex barks."',
            explanation: 'Dog extends Animal. It calls super(name) to initialize the name property, and overrides the speak method.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Inherit from Shape',
        description: 'Make `Square` extend `Shape`. Add a constructor that takes `sideLength`, passes it to `super` as `name`, and calculates area.',
        starterCode: 'class Shape {\n  constructor(name) { this.name = name; }\n}\nclass Square extends Shape {\n  // your code\n}',
        solution: 'class Shape {\n  constructor(name) { this.name = name; }\n}\nclass Square extends Shape {\n  constructor(sideLength) {\n    super("Square");\n    this.sideLength = sideLength;\n  }\n  getArea() { return this.sideLength ** 2; }\n}',
        hints: ['Call super("Square")', 'Store sideLength as a property'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What MUST be called before using `this` in a child class constructor?',
        options: ['this.init()', 'parent()', 'super()', 'Nothing'],
        correctIndex: 2,
        explanation: 'In derived classes, you must call super() before you can use the `this` keyword.'
      }
    ],
    keyTakeaways: [
      '`extends` creates an inheritance relationship.',
      '`super()` calls the parent constructor and is mandatory before using `this` in a child constructor.',
      'Child classes can override parent methods.'
    ],
    tags: ['oop', 'classes', 'inheritance']
  },
  {
    slug: 'static-and-private',
    title: 'Static & Private Members',
    description: 'Encapsulate data using private fields and define class-level methods using static.',
    difficulty: 'advanced',
    readingTime: 10,
    sections: [
      {
        heading: 'Static Methods and Private Fields',
        paragraphs: [
          'Static methods belong to the class itself, not instances. Private fields (prefix `#`) ensure variables cannot be accessed outside the class.'
        ],
        codeExamples: [
          {
            title: 'Static and Private',
            code: `class MathUtils {
  static add(a, b) { return a + b; }
}
class Wallet {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}
console.log(MathUtils.add(2, 3));
const myWallet = new Wallet();
myWallet.deposit(10);
console.log(myWallet.getBalance());`,
            output: '5\n10',
            explanation: 'MathUtils.add is called on the class. #balance is hidden and can only be accessed via methods.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Counter with Private State',
        description: 'Create a `Counter` class with a private `#count` starting at 0, and an `increment()` method.',
        starterCode: 'class Counter {\n  // your code here\n}',
        solution: 'class Counter {\n  #count = 0;\n  increment() {\n    this.#count++;\n    return this.#count;\n  }\n}',
        hints: ['Use #count = 0', 'Update it inside increment() using this.#count'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'How do you access a static method?',
        options: ['By calling it on an instance', 'By calling it on the class itself', 'Using the new keyword', 'Using the super keyword'],
        correctIndex: 1,
        explanation: 'Static methods are called on the class itself (e.g., ClassName.method()).'
      }
    ],
    keyTakeaways: [
      'Static methods are useful for utility functions.',
      'Private fields (using #) provide true encapsulation in JavaScript.',
      'Private fields cannot be accessed or modified from outside the class.'
    ],
    tags: ['oop', 'classes', 'encapsulation']
  },
  {
    slug: 'getters-and-setters',
    title: 'Getters & Setters',
    description: 'Control access to object properties using get and set keywords.',
    difficulty: 'intermediate',
    readingTime: 9,
    sections: [
      {
        heading: 'Property Accessors',
        paragraphs: [
          'Getters and setters allow you to execute code when a property is read or modified, hiding the internal implementation.'
        ],
        codeExamples: [
          {
            title: 'Using get and set',
            code: `class User {
  constructor(name) { this._name = name; }
  get name() { return this._name.toUpperCase(); }
  set name(value) {
    if (value.length < 3) throw new Error("Too short");
    this._name = value;
  }
}
const u = new User("bob");
console.log(u.name);
u.name = "alice";
console.log(u.name);`,
            output: '"BOB"\n"ALICE"',
            explanation: 'When accessing u.name, the getter runs. When assigning u.name = "alice", the setter validates and stores it.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Temperature Converter',
        description: 'Create a `Temperature` class storing `celsius`. Provide a getter and setter for `fahrenheit` (F = C * 9/5 + 32).',
        starterCode: 'class Temperature {\n  constructor(celsius) { this.celsius = celsius; }\n  // get fahrenheit...\n  // set fahrenheit...\n}',
        solution: 'class Temperature {\n  constructor(celsius) { this.celsius = celsius; }\n  get fahrenheit() { return this.celsius * 9/5 + 32; }\n  set fahrenheit(value) { this.celsius = (value - 32) * 5/9; }\n}',
        hints: ['Getter returns calculation based on celsius', 'Setter updates celsius based on passed fahrenheit value'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'How do you call a getter named "fullName"?',
        options: ['obj.fullName()', 'obj.fullName', 'obj.getFullName()', 'obj.get("fullName")'],
        correctIndex: 1,
        explanation: 'Getters are accessed like standard properties, without parentheses.'
      }
    ],
    keyTakeaways: [
      'Getters allow computed properties that look like standard properties.',
      'Setters provide a hook to validate or format data upon assignment.',
      'They provide a clean API while maintaining encapsulation.'
    ],
    tags: ['oop', 'classes', 'accessors']
  },
  {
    slug: 'try-catch-finally',
    title: 'try...catch...finally',
    description: 'Learn how to handle runtime errors gracefully without crashing your app.',
    difficulty: 'beginner',
    readingTime: 10,
    sections: [
      {
        heading: 'Catching Errors',
        paragraphs: [
          'When JavaScript encounters an error, it throws an exception. Using a try...catch block allows you to handle the error instead of letting the script crash.'
        ],
        codeExamples: [
          {
            title: 'Basic try/catch',
            code: `try {
  let result = someUndefinedVariable + 1;
} catch (error) {
  console.log("An error occurred:", error.name);
} finally {
  console.log("This runs no matter what.");
}`,
            output: '"An error occurred: ReferenceError"\n"This runs no matter what."',
            explanation: 'The code in the `try` block throws because the variable is missing. Control shifts to `catch`. `finally` executes regardless of an error.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Safe JSON Parsing',
        description: 'Write a function `parseSafe(jsonStr)` that returns the parsed object, or `null` if parsing fails.',
        starterCode: 'function parseSafe(jsonStr) {\n  // your code\n}',
        solution: 'function parseSafe(jsonStr) {\n  try {\n    return JSON.parse(jsonStr);\n  } catch (e) {\n    return null;\n  }\n}',
        hints: ['Use try block for JSON.parse', 'Return null inside the catch block'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Does the `finally` block run if the `try` block succeeds?',
        options: ['Yes, always.', 'No, only on failure.', 'Only if there is no catch block.', 'Only in strict mode.'],
        correctIndex: 0,
        explanation: 'The `finally` block is executed unconditionally after try and catch, regardless of outcome.'
      }
    ],
    keyTakeaways: [
      'Wrap risky operations in try...catch blocks.',
      'The catch block receives an error object.',
      'The finally block is excellent for cleanup tasks.'
    ],
    tags: ['errors', 'exceptions', 'basics']
  },
  {
    slug: 'error-types',
    title: 'Built-in Error Types',
    description: 'Understand the different types of standard errors in JavaScript.',
    difficulty: 'intermediate',
    readingTime: 8,
    sections: [
      {
        heading: 'Common Error Constructors',
        paragraphs: [
          'JavaScript throws specific types of errors depending on the issue: ReferenceError, TypeError, SyntaxError, and RangeError.'
        ],
        codeExamples: [
          {
            title: 'TypeError and ReferenceError',
            code: `try {
  let obj = null;
  obj.doSomething(); // TypeError
} catch (e) {
  console.log(e instanceof TypeError); // true
}`,
            output: 'true',
            explanation: 'A TypeError happens when a value is not of the expected type, like calling a method on null.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Throwing a TypeError',
        description: 'Write a function `checkString(val)` that throws a `TypeError("Not a string")` if the value is not a string.',
        starterCode: 'function checkString(val) {\n  // your code\n}',
        solution: 'function checkString(val) {\n  if (typeof val !== "string") {\n    throw new TypeError("Not a string");\n  }\n}',
        hints: ['Use typeof check', 'Use `throw new TypeError(...)`'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which error is thrown when trying to access a variable that is not declared?',
        options: ['TypeError', 'SyntaxError', 'ReferenceError', 'RangeError'],
        correctIndex: 2,
        explanation: 'A ReferenceError occurs when trying to access a non-existent variable.'
      }
    ],
    keyTakeaways: [
      'TypeError: Operation on a wrong type.',
      'ReferenceError: Accessing undeclared variables.',
      'RangeError: Number outside an allowable range (e.g. infinite recursion).'
    ],
    tags: ['errors', 'types']
  },
  {
    slug: 'custom-errors',
    title: 'Custom Error Classes',
    description: 'Learn how to extend the native Error class to create domain-specific errors.',
    difficulty: 'advanced',
    readingTime: 10,
    sections: [
      {
        heading: 'Extending the Error Class',
        paragraphs: [
          'For better error handling in large apps, create custom error classes by extending the built-in Error object.'
        ],
        codeExamples: [
          {
            title: 'ValidationError',
            code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
try {
  throw new ValidationError("Invalid email format");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}`,
            output: '"ValidationError"\n"Invalid email format"',
            explanation: 'Extending Error allows you to use `err instanceof ValidationError` inside catch blocks for precise handling.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Database Error',
        description: 'Create a custom `DatabaseError` class that takes a message and a `query` string property.',
        starterCode: 'class DatabaseError extends Error {\n  // your code\n}',
        solution: 'class DatabaseError extends Error {\n  constructor(message, query) {\n    super(message);\n    this.name = "DatabaseError";\n    this.query = query;\n  }\n}',
        hints: ['Call super(message)', 'Assign this.name', 'Assign this.query'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Why should custom errors extend the built-in Error class?',
        options: ['To automatically log to the console', 'To get a proper stack trace', 'Because otherwise `throw` won\'t work', 'To make the error asynchronous'],
        correctIndex: 1,
        explanation: 'Extending Error ensures the object behaves like a standard error and captures the call stack trace.'
      }
    ],
    keyTakeaways: [
      'Extend Error to create semantically meaningful exceptions.',
      'Always call super(message) in the constructor.',
      'Set this.name to the custom class name.'
    ],
    tags: ['errors', 'classes', 'advanced']
  },
  {
    slug: 'debugging-techniques',
    title: 'Debugging Techniques',
    description: 'Discover tools and techniques for finding and fixing bugs in your code.',
    difficulty: 'beginner',
    readingTime: 10,
    sections: [
      {
        heading: 'Console and Debugger',
        paragraphs: [
          'Beyond console.log, the console object has useful methods like .error, .table, and .time. The `debugger` statement pauses execution in developer tools.'
        ],
        codeExamples: [
          {
            title: 'Advanced Console Methods',
            code: `const users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
console.table(users);
console.time("Loop");
for(let i=0; i<1000; i++) {}
console.timeEnd("Loop");`,
            output: '[Table printed to console]\nLoop: 0.1ms',
            explanation: 'console.table formats arrays/objects nicely. console.time tracks execution duration.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Timing an Operation',
        description: 'Wrap the given slow function call with console.time("calc") and console.timeEnd("calc").',
        starterCode: '// add timing around this\nslowCalculation();',
        solution: 'console.time("calc");\nslowCalculation();\nconsole.timeEnd("calc");',
        hints: ['Ensure the label strings match exactly'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What does the `debugger` statement do?',
        options: ['It crashes the app', 'It fixes syntax errors automatically', 'It pauses code execution if dev tools are open', 'It prints the stack trace'],
        correctIndex: 2,
        explanation: 'The `debugger` keyword acts as a hardcoded breakpoint, pausing execution when dev tools are open.'
      }
    ],
    keyTakeaways: [
      'Use console.table() for easier reading of arrays and objects.',
      'Use console.time() and timeEnd() for quick performance checks.',
      'The `debugger` keyword is powerful for stepping through code.'
    ],
    tags: ['debugging', 'tools', 'console']
  },
  {
    slug: 'event-loop-explained',
    title: 'The Event Loop Explained',
    description: 'Understand how JavaScript handles asynchronous operations single-threadedly.',
    difficulty: 'advanced',
    readingTime: 12,
    sections: [
      {
        heading: 'The Call Stack and Task Queue',
        paragraphs: [
          'JavaScript executes code on a single thread via a Call Stack. Asynchronous tasks (like timers or fetches) are pushed to Web APIs, and their callbacks are moved to the Task Queue to be executed when the Call Stack is empty.'
        ],
        codeExamples: [
          {
            title: 'Execution Order',
            code: `console.log("First");
setTimeout(() => console.log("Second"), 0);
console.log("Third");`,
            output: '"First"\n"Third"\n"Second"',
            explanation: 'Even with a delay of 0, setTimeout pushes the callback to the queue, so it only runs after synchronous code finishes.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Predict Output',
        description: 'Given the code: Promise.resolve().then(() => console.log(1)); console.log(2); What is logged first?',
        starterCode: '// Think about microtasks vs sync code',
        solution: '// 2 is logged first, then 1.',
        hints: ['Synchronous code always runs before microtasks (promises)'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which queue has higher priority when the Call Stack empties?',
        options: ['The Macrotask Queue (setTimeout)', 'The Microtask Queue (Promises)', 'They have equal priority', 'The Render Queue'],
        correctIndex: 1,
        explanation: 'The microtask queue (Promises) is completely emptied before any macrotasks (setTimeout) are processed.'
      }
    ],
    keyTakeaways: [
      'JS is single-threaded and non-blocking.',
      'Synchronous code runs first.',
      'Microtasks (Promises) run before Macrotasks (setTimeout).'
    ],
    tags: ['async', 'event-loop', 'architecture']
  },
  {
    slug: 'settimeout-setinterval',
    title: 'setTimeout & setInterval',
    description: 'Learn how to schedule functions to run after a delay or repeatedly.',
    difficulty: 'beginner',
    readingTime: 8,
    sections: [
      {
        heading: 'Timers in JavaScript',
        paragraphs: [
          'setTimeout runs a function once after a delay. setInterval runs a function repeatedly with a fixed time delay.'
        ],
        codeExamples: [
          {
            title: 'Clearing Timers',
            code: `const timerId = setTimeout(() => {
  console.log("This will not run");
}, 1000);
clearTimeout(timerId); // Cancels the timer`,
            output: '[No output]',
            explanation: 'Always keep the returned ID if you might need to cancel the timer using clearTimeout or clearInterval.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Repeated Action',
        description: 'Write code to log "Tick" every 100ms, and store the ID in a variable `intervalId`.',
        starterCode: 'let intervalId;\n// your code',
        solution: 'let intervalId = setInterval(() => {\n  console.log("Tick");\n}, 100);',
        hints: ['Use setInterval', 'Pass an arrow function and 100 as arguments'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What unit of time do setTimeout and setInterval use?',
        options: ['Seconds', 'Milliseconds', 'Microseconds', 'Frames'],
        correctIndex: 1,
        explanation: 'Both functions expect the delay argument in milliseconds (1000ms = 1s).'
      }
    ],
    keyTakeaways: [
      'Timers are asynchronous.',
      'Use clearTimeout or clearInterval to cancel scheduled tasks.',
      'Delays are not guaranteed exact times, but minimum times.'
    ],
    tags: ['async', 'timers', 'basics']
  },
  {
    slug: 'callbacks-and-callback-hell',
    title: 'Callbacks & Callback Hell',
    description: 'Understand the traditional way of handling async code and its pitfalls.',
    difficulty: 'intermediate',
    readingTime: 10,
    sections: [
      {
        heading: 'The Pyramid of Doom',
        paragraphs: [
          'Callbacks are functions passed as arguments to be executed later. When multiple async operations depend on each other, nesting callbacks deeply leads to "Callback Hell".'
        ],
        codeExamples: [
          {
            title: 'Callback Hell Example',
            code: `getUser(id, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      console.log(details);
    });
  });
});`,
            output: '[Data is logged]',
            explanation: 'The deep nesting makes code hard to read and errors hard to handle. This led to the creation of Promises.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Simple Callback',
        description: 'Write a function `fetchData(cb)` that simulates an async task with setTimeout (100ms) and then calls `cb("Done")`.',
        starterCode: 'function fetchData(cb) {\n  // your code\n}',
        solution: 'function fetchData(cb) {\n  setTimeout(() => cb("Done"), 100);\n}',
        hints: ['Use setTimeout', 'Invoke the cb inside the timeout'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What is a major problem with deeply nested callbacks?',
        options: ['They are too fast', 'They cause syntax errors automatically', 'Poor readability and hard error handling', 'They run synchronously'],
        correctIndex: 2,
        explanation: 'Deep nesting makes code difficult to maintain, read, and manage errors properly.'
      }
    ],
    keyTakeaways: [
      'Callbacks are a fundamental async pattern.',
      'Callback Hell (Pyramid of Doom) reduces code readability.',
      'Error handling in nested callbacks is notoriously difficult.'
    ],
    tags: ['async', 'callbacks', 'patterns']
  },
  {
    slug: 'promise-basics',
    title: 'Promise Basics',
    description: 'Learn the modern way to handle asynchronous operations cleanly.',
    difficulty: 'intermediate',
    readingTime: 10,
    sections: [
      {
        heading: 'Creating and Consuming Promises',
        paragraphs: [
          'A Promise represents the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, or rejected.'
        ],
        codeExamples: [
          {
            title: 'Creating a Promise',
            code: `const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Operation successful!");
  else reject("Operation failed.");
});
myPromise.then(res => console.log(res)).catch(err => console.error(err));`,
            output: '"Operation successful!"',
            explanation: '`resolve` moves the promise to fulfilled, triggering `.then()`. `reject` moves it to rejected, triggering `.catch()`.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Return a Resolved Promise',
        description: 'Write a function `getHello()` that returns a promise which immediately resolves with the string "Hello".',
        starterCode: 'function getHello() {\n  // your code\n}',
        solution: 'function getHello() {\n  return Promise.resolve("Hello");\n}',
        hints: ['Use Promise.resolve()'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which of these is NOT a Promise state?',
        options: ['Pending', 'Fulfilled', 'Waiting', 'Rejected'],
        correctIndex: 2,
        explanation: 'Promises have only three states: pending, fulfilled, and rejected.'
      }
    ],
    keyTakeaways: [
      'Promises decouple async operations from callbacks.',
      '`.then()` handles success, `.catch()` handles failure.',
      'Promises flatten out the "Callback Hell" pyramid.'
    ],
    tags: ['async', 'promises', 'basics']
  },
  {
    slug: 'promise-chaining',
    title: 'Promise Chaining',
    description: 'Learn how to sequence asynchronous operations elegantly.',
    difficulty: 'intermediate',
    readingTime: 10,
    sections: [
      {
        heading: 'Returning from .then()',
        paragraphs: [
          'Every `.then()` returns a new Promise. If you return a value from a `.then()`, the next `.then()` receives it. If you return a Promise, the chain waits for it.'
        ],
        codeExamples: [
          {
            title: 'Chaining Operations',
            code: `Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num + 10)
  .then(final => console.log(final));`,
            output: '20',
            explanation: 'The value flows sequentially through the chain. 5 * 2 = 10, then 10 + 10 = 20.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Chain Calculations',
        description: 'Given a starting promise `p = Promise.resolve(10)`, write a chain that subtracts 2, then multiplies by 3.',
        starterCode: 'const p = Promise.resolve(10);\n// chain .then here',
        solution: 'p.then(n => n - 2).then(n => n * 3);',
        hints: ['Use two separate .then() calls'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'If a `.then()` block returns a normal string, what does the next `.then()` receive?',
        options: ['A Promise', 'The string', 'undefined', 'An error'],
        correctIndex: 1,
        explanation: 'Values returned from .then() are automatically wrapped in a resolved Promise, so the next block receives the value directly.'
      }
    ],
    keyTakeaways: [
      'Chaining avoids nesting (Callback Hell).',
      'Values returned in .then() are passed to the next .then().',
      'A single .catch() at the end can catch errors from anywhere in the chain.'
    ],
    tags: ['async', 'promises', 'chaining']
  },
  {
    slug: 'promise-all-race-any',
    title: 'Promise Combinators',
    description: 'Run multiple promises in parallel and combine their results.',
    difficulty: 'advanced',
    readingTime: 12,
    sections: [
      {
        heading: 'Running in Parallel',
        paragraphs: [
          'Promise.all waits for all promises to finish. Promise.race returns the first one to settle. Promise.any returns the first to fulfill. Promise.allSettled waits for all regardless of success.'
        ],
        codeExamples: [
          {
            title: 'Promise.all',
            code: `const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
Promise.all([p1, p2]).then(results => console.log(results));`,
            output: '[1, 2]',
            explanation: 'Promise.all accepts an array of promises and returns an array of their resolved values in the same order.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Fetch Two Things',
        description: 'Use `Promise.all` to await `fetchA()` and `fetchB()`, returning the array of results.',
        starterCode: 'function fetchBoth() {\n  // return Promise.all(...)\n}',
        solution: 'function fetchBoth() {\n  return Promise.all([fetchA(), fetchB()]);\n}',
        hints: ['Pass an array [fetchA(), fetchB()] to Promise.all'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What happens to Promise.all if one promise in the array rejects?',
        options: ['It waits for the others', 'The whole Promise.all rejects immediately', 'It returns null for that position', 'It throws a SyntaxError'],
        correctIndex: 1,
        explanation: 'Promise.all fails fast; if any promise rejects, the entire all() promise rejects immediately.'
      }
    ],
    keyTakeaways: [
      'Use Promise.all for parallel dependent tasks.',
      'Use Promise.allSettled when you want all results, even if some fail.',
      'Use Promise.race for timeouts.'
    ],
    tags: ['async', 'promises', 'combinators']
  },
  {
    slug: 'async-await',
    title: 'async / await',
    description: 'Write asynchronous code that looks and behaves like synchronous code.',
    difficulty: 'intermediate',
    readingTime: 10,
    sections: [
      {
        heading: 'Syntactic Sugar for Promises',
        paragraphs: [
          'Prefixing a function with `async` makes it return a Promise. The `await` keyword pauses function execution until the Promise resolves, making code much easier to read.'
        ],
        codeExamples: [
          {
            title: 'Using async and await',
            code: `async function fetchUserData() {
  const user = await Promise.resolve({name: "Alice"});
  console.log(user.name);
  return user;
}
fetchUserData();`,
            output: '"Alice"',
            explanation: '`await` unwraps the Promise value. Code reads top-to-bottom without `.then()` chains.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Convert to Async',
        description: 'Convert the function to use async/await instead of `.then()`.',
        starterCode: 'function getNumber() {\n  return fetchNumber().then(n => n * 2);\n}',
        solution: 'async function getNumber() {\n  const n = await fetchNumber();\n  return n * 2;\n}',
        hints: ['Add async keyword', 'Use await before fetchNumber()'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Where can you use the `await` keyword?',
        options: ['Anywhere in JavaScript', 'Only inside loops', 'Only inside functions marked with `async` (and top-level in modules)', 'Inside class constructors'],
        correctIndex: 2,
        explanation: '`await` can only be used inside `async` functions (or at the top level of ES modules).'
      }
    ],
    keyTakeaways: [
      '`async/await` is syntactic sugar over Promises.',
      'It drastically improves readability of sequential async operations.',
      'An `async` function always returns a Promise.'
    ],
    tags: ['async', 'await', 'modern']
  },
  {
    slug: 'error-handling-async',
    title: 'Error Handling in Async Code',
    description: 'Properly catch and handle errors when using async/await and Promises.',
    difficulty: 'intermediate',
    readingTime: 9,
    sections: [
      {
        heading: 'try...catch with await',
        paragraphs: [
          'Because async/await makes code look synchronous, you can use the standard try...catch block to catch Promise rejections.'
        ],
        codeExamples: [
          {
            title: 'Catching an async error',
            code: `async function getData() {
  try {
    const data = await Promise.reject("Network Error");
  } catch (error) {
    console.log("Caught:", error);
  }
}
getData();`,
            output: '"Caught: Network Error"',
            explanation: 'The rejected promise throws an exception inside the async function, which is caught by the catch block.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Safe Fetch',
        description: 'Write an async function `safeFetch()` that awaits `apiCall()`. If it fails, return `null`.',
        starterCode: 'async function safeFetch() {\n  // try catch\n}',
        solution: 'async function safeFetch() {\n  try {\n    return await apiCall();\n  } catch (e) {\n    return null;\n  }\n}',
        hints: ['Use try block for return await apiCall()', 'Return null in the catch block'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What happens if you do NOT catch an error in an async function?',
        options: ['The app immediately crashes', 'The returned Promise is rejected', 'It evaluates to null', 'It automatically retries'],
        correctIndex: 1,
        explanation: 'Uncaught errors in an async function result in the returned Promise being rejected with that error.'
      }
    ],
    keyTakeaways: [
      'Use try...catch blocks inside async functions to handle errors.',
      'Without a try...catch, rejected promises bubble up to the caller.',
      'This unifies error handling for sync and async code.'
    ],
    tags: ['async', 'errors', 'try-catch']
  }
];
