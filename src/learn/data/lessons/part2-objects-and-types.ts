// Auto-generated rewritten beginner-friendly curriculum for RunJS
import type { Lesson } from '../../types';

export const part2Lessons: Lesson[] = [
  {
    "slug": "object",
    "title": "Objects: Basics and Key-Value Pairs",
    "description": "Learn how objects store keyed collections of data, property access using dot vs bracket notation, and the in operator.",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "What is an Object?",
        "paragraphs": [
          "While primitive values store a single item of data (like a string or a number), objects store collections of related data and more complex entities.",
          "An object is written with curly braces { ... } containing comma-separated key-value pairs (properties). A key is a string (or Symbol), and the value can be anything."
        ],
        "codeExamples": [
          {
            "title": "Creating and Accessing Object Properties",
            "code": "const user = {\n  name: 'Alex',\n  age: 28,\n  isAdmin: true\n};\n\n// Dot notation:\nconsole.log(user.name); // 'Alex'\n\n// Bracket notation (useful for dynamic keys or multi-word keys):\nconst prop = 'age';\nconsole.log(user[prop]); // 28\n\n// Adding and deleting properties:\nuser.location = 'New York';\ndelete user.isAdmin;\nconsole.log(user);",
            "output": "Alex\n28\n{\n  \"name\": \"Alex\",\n  \"age\": 28,\n  \"location\": \"New York\"\n}",
            "explanation": "Dot notation is standard, while bracket notation allows dynamic expressions and special property names."
          }
        ],
        "bulletPoints": [
          "Use dot notation (user.name) for simple identifiers.",
          "Use bracket notation (user['prop']) for dynamic variable keys or spaces in names.",
          "The in operator ('key' in obj) checks if a property exists."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a Smartphone Object",
        "description": "Create an object phone with brand 'Apple', model 'iPhone 15', and storage 128. Log the brand and model.",
        "starterCode": "const phone = {\n  brand: 'Apple',\n  model: 'iPhone 15',\n  storage: 128\n};\n\nconsole.log(`${phone.brand} ${phone.model}`);",
        "solution": "const phone = {\n  brand: 'Apple',\n  model: 'iPhone 15',\n  storage: 128\n};\nconsole.log(`${phone.brand} ${phone.model}`);",
        "hints": [
          "Access properties using phone.brand and phone.model."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "When must bracket notation (obj[key]) be used instead of dot notation?",
        "options": [
          "When the property name is stored in a variable or contains spaces/hyphens",
          "Only when accessing numbers",
          "Only inside class constructors",
          "Bracket notation is always required in strict mode"
        ],
        "correctIndex": 0,
        "explanation": "Bracket notation evaluates the expression inside the brackets, allowing dynamic variables and non-standard property identifiers."
      }
    ],
    "keyTakeaways": [
      "Objects store keyed collections of properties.",
      "Use dot notation for fixed property names and bracket notation for dynamic keys.",
      "Use 'prop' in obj to safely test property existence."
    ],
    "tags": [
      "objects",
      "properties",
      "key-value",
      "basics"
    ]
  },
  {
    "slug": "object-copy",
    "title": "Object References and Copying",
    "description": "Understand how objects are stored and copied by reference, shallow cloning with spread, and structuredClone for deep copies.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Reference vs Value",
        "paragraphs": [
          "A critical difference between primitives and objects is that primitives are copied by value, whereas objects are stored and copied by reference.",
          "When you assign an object variable to another, both variables point to the exact same location in memory. Modifying one modifies the other."
        ],
        "codeExamples": [
          {
            "title": "Copy by Reference vs Shallow Copy",
            "code": "const original = { title: 'Book', count: 1 };\n\n// Reference copy:\nconst refCopy = original;\nrefCopy.count = 5;\nconsole.log(original.count); // 5 (Original was mutated!)\n\n// Shallow copy using spread operator:\nconst shallowCopy = { ...original };\nshallowCopy.count = 10;\nconsole.log(original.count); // 5 (Independent top-level copy!)\n\n// Deep copy using structuredClone (ES2022):\nconst nested = { user: { name: 'Dan' } };\nconst deepCopy = structuredClone(nested);\ndeepCopy.user.name = 'Sarah';\nconsole.log(nested.user.name); // 'Dan' (Nested property safe!)",
            "output": "5\n5\nDan",
            "explanation": "Use spread syntax { ...obj } for shallow copies and structuredClone(obj) for full deep copies."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create an Independent Copy",
        "description": "Make a shallow clone of settings = { theme: 'dark', volume: 80 } using spread syntax. Change the clone's volume to 100 without affecting settings.",
        "starterCode": "const settings = { theme: 'dark', volume: 80 };\nconst userSettings = { ...settings, volume: 100 };\n\nconsole.log('Original:', settings.volume, 'Clone:', userSettings.volume);",
        "solution": "const settings = { theme: 'dark', volume: 80 };\nconst userSettings = { ...settings, volume: 100 };\nconsole.log('Original:', settings.volume, 'Clone:', userSettings.volume);",
        "hints": [
          "Use { ...settings, volume: 100 } to clone and override."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does const b = a do if a is an object?",
        "options": [
          "Copies the memory reference so that both a and b point to the same object",
          "Creates an independent clone with duplicate values in memory",
          "Converts the object to an array",
          "Throws a TypeError"
        ],
        "correctIndex": 0,
        "explanation": "Assigning an object variable copies only the memory reference, not the underlying object data."
      }
    ],
    "keyTakeaways": [
      "Objects are copied by reference, not by value.",
      "Use Object.assign({}, obj) or { ...obj } for shallow copies.",
      "Use structuredClone(obj) for nested deep copies."
    ],
    "tags": [
      "objects",
      "references",
      "clone",
      "structuredClone",
      "spread"
    ]
  },
  {
    "slug": "garbage-collection",
    "title": "Garbage Collection & Memory Management",
    "description": "Learn how JavaScript engines automatically manage memory using reachability and mark-and-sweep algorithms.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Reachability in Memory",
        "paragraphs": [
          "In JavaScript, memory management is performed automatically and invisibly by the engine through a process called Garbage Collection (GC).",
          "The primary concept is reachability: values that are accessible or usable (roots like global variables, active function call stacks) are kept. Unreachable values are safely reclaimed."
        ],
        "codeExamples": [
          {
            "title": "Unreachable Object Reclamation",
            "code": "let user = { name: 'John' };\n// The object { name: 'John' } has a reference in 'user'.\n\nuser = null;\n// Now { name: 'John' } is unreachable and will be reclaimed by GC.",
            "explanation": "When no references point to an allocated object, the garbage collector safely frees its memory."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Sever an Object Reference",
        "description": "Create an object in cache. Set cache = null to allow garbage collection and log cache.",
        "starterCode": "let cache = { data: [1, 2, 3] };\ncache = null;\nconsole.log(cache);",
        "solution": "let cache = { data: [1, 2, 3] };\ncache = null;\nconsole.log(cache);",
        "hints": [
          "Assigning null releases the reference."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the core algorithm used by modern JavaScript engines for garbage collection?",
        "options": [
          "Mark-and-Sweep (marking reachable objects from roots, then sweeping unmarked ones)",
          "Manual malloc and free",
          "Immediate deletion on function exit",
          "FIFO queue purging"
        ],
        "correctIndex": 0,
        "explanation": "Modern engines use generational Mark-and-Sweep algorithms starting from root references."
      }
    ],
    "keyTakeaways": [
      "Memory management is automatic in JavaScript.",
      "Objects are retained as long as they are reachable from roots.",
      "Nullify references to large datasets when no longer needed to prevent memory leaks."
    ],
    "tags": [
      "memory",
      "garbage-collection",
      "performance",
      "reachability"
    ]
  },
  {
    "slug": "object-methods",
    "title": "Object Methods and 'this'",
    "description": "Attach behavior to objects with methods, and master the runtime 'this' keyword.",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Methods and 'this'",
        "paragraphs": [
          "A function stored as an object property is called a method.",
          "Inside a method, the keyword 'this' refers to the object before the dot that was used to call the method."
        ],
        "codeExamples": [
          {
            "title": "Using 'this' in a Method",
            "code": "const bankAccount = {\n  owner: 'Maria',\n  balance: 500,\n  deposit(amount) {\n    this.balance += amount;\n    console.log(`${this.owner}'s new balance: $${this.balance}`);\n  }\n};\n\nbankAccount.deposit(150);",
            "output": "Maria's new balance: $650",
            "explanation": "this.balance refers to the bankAccount object's balance property at call time."
          }
        ],
        "callout": {
          "type": "warning",
          "text": "Arrow functions do not have their own 'this'! Inside an arrow function, 'this' is lexically inherited from the enclosing scope."
        }
      }
    ],
    "exercises": [
      {
        "title": "Create a Calculator Object",
        "description": "Create a calc object with a = 10 and b = 5 and a method sum() that returns this.a + this.b.",
        "starterCode": "const calc = {\n  a: 10,\n  b: 5,\n  sum() {\n    return this.a + this.b;\n  }\n};\n\nconsole.log(calc.sum());",
        "solution": "const calc = {\n  a: 10,\n  b: 5,\n  sum() {\n    return this.a + this.b;\n  }\n};\nconsole.log(calc.sum());",
        "hints": [
          "Inside the method, use this.a and this.b."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "In obj.method(), what does 'this' point to inside the method?",
        "options": [
          "The object obj",
          "The global window object",
          "The method function itself",
          "undefined"
        ],
        "correctIndex": 0,
        "explanation": "In standard method calls (obj.method()), 'this' points to the object preceding the dot."
      }
    ],
    "keyTakeaways": [
      "Methods are functions stored as object properties.",
      "'this' is determined at call time by how the function is invoked.",
      "Arrow functions do not bind their own this."
    ],
    "tags": [
      "objects",
      "methods",
      "this",
      "oop"
    ]
  },
  {
    "slug": "constructor-new",
    "title": "Constructor Functions & the 'new' Operator",
    "description": "Learn how constructor functions instantiate multiple similar objects and how the 'new' operator works under the hood.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Constructor Functions",
        "paragraphs": [
          "Constructor functions allow you to create templates for building multiple objects with identical properties and methods.",
          "By convention, constructor functions are capitalized (e.g. User, Car) and must be invoked using the new operator."
        ],
        "codeExamples": [
          {
            "title": "Constructor with 'new'",
            "code": "function User(name, role) {\n  // 1. A new empty object is created and assigned to 'this'\n  this.name = name;\n  this.role = role;\n  this.greet = function() {\n    return `Hi, I am ${this.name} (${this.role})`;\n  };\n  // 2. 'this' is implicitly returned\n}\n\nconst user1 = new User('Chloe', 'Designer');\nconst user2 = new User('Liam', 'Engineer');\n\nconsole.log(user1.greet());\nconsole.log(user2.greet());",
            "output": "Hi, I am Chloe (Designer)\nHi, I am Liam (Engineer)",
            "explanation": "Calling new creates an empty object, binds it to this, and returns it automatically."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Build a Car Constructor",
        "description": "Create a constructor function Car(brand, speed) that assigns this.brand and this.speed. Instantiate a new Car('Tesla', 120).",
        "starterCode": "function Car(brand, speed) {\n  this.brand = brand;\n  this.speed = speed;\n}\n\nconst myCar = new Car('Tesla', 120);\nconsole.log(myCar.brand, myCar.speed);",
        "solution": "function Car(brand, speed) {\n  this.brand = brand;\n  this.speed = speed;\n}\nconst myCar = new Car('Tesla', 120);\nconsole.log(myCar.brand, myCar.speed);",
        "hints": [
          "Assign properties using this.brand = brand; and call with new Car(...)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens when a function is called with the 'new' keyword?",
        "options": [
          "A new empty object is created, 'this' is bound to it, the function body runs, and 'this' is returned",
          "The function runs twice in parallel",
          "All variables become private automatically",
          "The function becomes an asynchronous promise"
        ],
        "correctIndex": 0,
        "explanation": "The new operator creates an object, assigns it to this, runs the constructor, and returns the newly created object."
      }
    ],
    "keyTakeaways": [
      "Constructor functions act as blueprints for creating similar objects.",
      "Always capitalize constructor function names as a convention.",
      "ES6 classes are built on top of constructor functions and prototypes."
    ],
    "tags": [
      "constructors",
      "new",
      "oop",
      "prototypes"
    ]
  },
  {
    "slug": "optional-chaining",
    "title": "Optional Chaining: '?.'",
    "description": "Stop 'Cannot read property of undefined' crashes forever using optional chaining (?.) for safe deep property access.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Safe Navigation with '?.'",
        "paragraphs": [
          "Accessing nested object properties when an intermediate property might be null or undefined traditionally threw a fatal TypeError.",
          "Optional chaining (?.) stops evaluation and immediately returns undefined if the value before ?. is null or undefined, without throwing an error."
        ],
        "codeExamples": [
          {
            "title": "Optional Chaining in Action",
            "code": "const userWithAddress = {\n  name: 'Sara',\n  address: { city: 'Tokyo' }\n};\n\nconst userWithoutAddress = {\n  name: 'Bob'\n};\n\n// Safe property access:\nconsole.log(userWithAddress.address?.city);   // 'Tokyo'\nconsole.log(userWithoutAddress.address?.city); // undefined (No crash!)\n\n// Optional method calling:\nconst api = {};\nconsole.log(api.fetchData?.()); // undefined",
            "output": "Tokyo\nundefined\nundefined",
            "explanation": "Optional chaining gracefully returns undefined if intermediate properties are missing."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Safely Read Deep Property",
        "description": "Given const response = { data: null }, safely read response.data?.user?.email and store in email. Log email.",
        "starterCode": "const response = { data: null };\nconst email = response.data?.user?.email;\nconsole.log(email);",
        "solution": "const response = { data: null };\nconst email = response.data?.user?.email;\nconsole.log(email);",
        "hints": [
          "Use response.data?.user?.email."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does user?.address?.zipCode return if user is { name: 'Alice' }?",
        "options": [
          "undefined",
          "null",
          "A TypeError crash",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "Because user.address is undefined, optional chaining stops evaluation immediately and returns undefined."
      }
    ],
    "keyTakeaways": [
      "Use ?. to safely access deeply nested properties and avoid TypeError crashes.",
      "Can also be used with methods (obj.method?.()) and brackets (obj?.[key]).",
      "Do not overuse ?. where a property is required by contract."
    ],
    "tags": [
      "optional-chaining",
      "es2020",
      "safety",
      "objects"
    ]
  },
  {
    "slug": "symbol",
    "title": "The Symbol Type: Hidden Properties",
    "description": "Learn how Symbols create unique, collision-free object keys and explore well-known symbols like Symbol.iterator.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "What is a Symbol?",
        "paragraphs": [
          "A Symbol represents a unique identifier. Even if two symbols are created with the exact same description, they are completely unique and never equal.",
          "Symbols are used as 'hidden' object property keys that cannot be accidentally overwritten by other libraries or iterated by standard for...in loops."
        ],
        "codeExamples": [
          {
            "title": "Creating and Using Symbols",
            "code": "const id1 = Symbol('id');\nconst id2 = Symbol('id');\nconsole.log(id1 === id2); // false (Every Symbol is unique!)\n\nconst user = {\n  name: 'Sam',\n  [id1]: 12345 // symbol key\n};\n\nconsole.log(user[id1]); // 12345\nconsole.log(Object.keys(user)); // ['name'] (Symbols are skipped!)",
            "output": "false\n12345\n[\n  \"name\"\n]",
            "explanation": "Symbol properties are invisible to Object.keys() and for...in, keeping them private to whoever holds the symbol."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Attach a Symbol ID",
        "description": "Create a symbol const secretKey = Symbol('auth'). Attach it to an object token as a key with value 'XYZ-999' and log it.",
        "starterCode": "const secretKey = Symbol('auth');\nconst token = {\n  [secretKey]: 'XYZ-999'\n};\n\nconsole.log(token[secretKey]);",
        "solution": "const secretKey = Symbol('auth');\nconst token = {\n  [secretKey]: 'XYZ-999'\n};\nconsole.log(token[secretKey]);",
        "hints": [
          "Use bracket syntax [secretKey]: 'XYZ-999' inside the object."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Are two symbols created with the same description (e.g. Symbol('id') === Symbol('id')) equal?",
        "options": [
          "No, every Symbol() call creates a guaranteed unique primitive value",
          "Yes, symbols with identical descriptions are identical",
          "Only if created in strict mode",
          "Only if converted to strings first"
        ],
        "correctIndex": 0,
        "explanation": "Every Symbol() produces a completely distinct unique token in memory."
      }
    ],
    "keyTakeaways": [
      "Symbols are guaranteed unique primitive identifiers.",
      "They prevent property name collisions in large applications and libraries.",
      "Standard iteration methods skip symbol keys."
    ],
    "tags": [
      "symbols",
      "primitives",
      "unique",
      "metaprogramming"
    ]
  },
  {
    "slug": "object-toprimitive",
    "title": "Object to Primitive Conversion",
    "description": "Understand how JavaScript automatically converts objects to numbers or strings using Symbol.toPrimitive, valueOf, and toString.",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The Hints: 'string', 'number', 'default'",
        "paragraphs": [
          "When an object is used in an arithmetic operation (+obj, obj1 - obj2) or string context (alert(obj)), JavaScript automatically converts it to a primitive.",
          "The conversion follows three hints: 'string' (when expecting text), 'number' (when doing math), or 'default' (when the operator is unsure, like binary +)."
        ],
        "codeExamples": [
          {
            "title": "Using Symbol.toPrimitive",
            "code": "const product = {\n  name: 'Coffee Mug',\n  price: 15,\n  [Symbol.toPrimitive](hint) {\n    console.log(`Hint requested: ${hint}`);\n    return hint === 'string' ? this.name : this.price;\n  }\n};\n\nconsole.log(+product);         // 15 (number hint)\nconsole.log(`${product}`);     // 'Coffee Mug' (string hint)",
            "output": "Hint requested: number\n15\nHint requested: string\nCoffee Mug",
            "explanation": "Symbol.toPrimitive gives you full control over how an object coerces into primitive values."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Convert Object to Number",
        "description": "Create an object wallet with balance = 100 and a valueOf() method that returns this.balance. Test with +wallet.",
        "starterCode": "const wallet = {\n  balance: 100,\n  valueOf() {\n    return this.balance;\n  }\n};\n\nconsole.log(+wallet);",
        "solution": "const wallet = {\n  balance: 100,\n  valueOf() {\n    return this.balance;\n  }\n};\nconsole.log(+wallet);",
        "hints": [
          "Implement valueOf() { return this.balance; }."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Which method has the highest priority during object-to-primitive conversion?",
        "options": [
          "Symbol.toPrimitive",
          "valueOf()",
          "toString()",
          "toJSON()"
        ],
        "correctIndex": 0,
        "explanation": "If Symbol.toPrimitive is defined on an object, it is called first for all conversion hints."
      }
    ],
    "keyTakeaways": [
      "JavaScript uses hints ('string', 'number', 'default') to convert objects.",
      "Symbol.toPrimitive is the modern single method to handle all conversions."
    ],
    "tags": [
      "conversion",
      "coercion",
      "toprimitive",
      "symbols"
    ]
  },
  {
    "slug": "primitives-methods",
    "title": "Methods of Primitives & Object Wrappers",
    "description": "Discover how primitives can call methods like str.toUpperCase() using lightweight temporary object wrappers.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "The Magic of Wrapper Objects",
        "paragraphs": [
          "Primitives (strings, numbers, booleans) are fast and lightweight, yet you can call methods on them like 'hello'.toUpperCase() or (12.345).toFixed(2).",
          "When you access a property on a primitive, JavaScript creates a special temporary wrapper object (String, Number, Boolean), executes the method, and immediately destroys the wrapper object."
        ],
        "codeExamples": [
          {
            "title": "Primitive Methods",
            "code": "const greeting = 'hello world';\nconsole.log(greeting.toUpperCase()); // 'HELLO WORLD'\n\nconst pi = 3.14159;\nconsole.log(pi.toFixed(2)); // '3.14'",
            "output": "HELLO WORLD\n3.14",
            "explanation": "The engine seamlessly creates a temporary wrapper, runs the method, and returns a new primitive."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Format a Price Tag",
        "description": "Given const amount = 29.998, format it to 2 decimal places using toFixed(2).",
        "starterCode": "const amount = 29.998;\nconst formatted = amount.toFixed(2);\nconsole.log(formatted);",
        "solution": "const amount = 29.998;\nconst formatted = amount.toFixed(2);\nconsole.log(formatted);",
        "hints": [
          "Call amount.toFixed(2)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Can you permanently add new custom properties to a primitive string (e.g. str.test = 5)?",
        "options": [
          "No, the temporary wrapper object is discarded immediately, so the property is lost",
          "Yes, it stores it in localStorage",
          "Yes, all strings are mutable objects",
          "Only inside arrays"
        ],
        "correctIndex": 0,
        "explanation": "The temporary wrapper is created and immediately discarded, so custom properties on primitives disappear."
      }
    ],
    "keyTakeaways": [
      "Primitives have methods provided via temporary object wrappers.",
      "Primitives remain lightweight and immutable in memory."
    ],
    "tags": [
      "primitives",
      "wrapper-objects",
      "methods",
      "strings",
      "numbers"
    ]
  },
  {
    "slug": "number",
    "title": "Numbers in JavaScript: Math & Precision",
    "description": "Master integers, floating-point math, the 0.1 + 0.2 precision gotcha, rounding methods, and parseInt.",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "64-bit Floating Point and Precision",
        "paragraphs": [
          "In JavaScript, all regular numbers are stored in 64-bit floating point format (IEEE 754).",
          "A famous consequence of binary floating point is that fractions like 0.1 cannot be represented with exact precision in binary. Hence, 0.1 + 0.2 === 0.30000000000000004."
        ],
        "codeExamples": [
          {
            "title": "Precision and Rounding",
            "code": "// Precision issue:\nconsole.log(0.1 + 0.2); // 0.30000000000000004\n\n// Safe rounding with toFixed:\nconst sum = +(0.1 + 0.2).toFixed(2);\nconsole.log(sum); // 0.3\n\n// Parsing numbers from text:\nconsole.log(parseInt('100px'));   // 100\nconsole.log(parseFloat('19.99$')); // 19.99\nconsole.log(Math.round(4.7));     // 5",
            "output": "0.30000000000000004\n0.3\n100\n19.99\n5",
            "explanation": "Use toFixed(digits) for currency and financial calculations, and parseInt/parseFloat to parse strings."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Parse CSS Dimension",
        "description": "Parse the integer value from '240px' using parseInt and multiply it by 2. Log the result.",
        "starterCode": "const widthStr = '240px';\nconst doubled = parseInt(widthStr, 10) * 2;\nconsole.log(doubled);",
        "solution": "const widthStr = '240px';\nconst doubled = parseInt(widthStr, 10) * 2;\nconsole.log(doubled);",
        "hints": [
          "parseInt('240px', 10) extracts 240."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why does 0.1 + 0.2 not equal 0.3 exactly in JavaScript?",
        "options": [
          "Because binary floating-point numbers (IEEE 754) cannot represent fractions like 0.1 with infinite precision in base 2",
          "Because JavaScript does not have an addition operator for floats",
          "Because the browser engine rounds down automatically",
          "Because of strict mode"
        ],
        "correctIndex": 0,
        "explanation": "Binary floating point format cannot store 0.1 or 0.2 exactly, leading to minor precision rounding errors."
      }
    ],
    "keyTakeaways": [
      "Numbers are 64-bit IEEE 754 floats.",
      "Use toFixed() or integer arithmetic for currency.",
      "Use parseInt() and parseFloat() to extract numbers from formatted strings."
    ],
    "tags": [
      "numbers",
      "math",
      "precision",
      "parseint",
      "rounding"
    ]
  },
  {
    "slug": "string",
    "title": "Strings: Template Literals & Methods",
    "description": "Work with text in JavaScript: template literals, string length, searching, slicing, trimming, and casing.",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "String Basics and Methods",
        "paragraphs": [
          "Strings represent textual data. They can be enclosed in single quotes (' '), double quotes (\" \"), or backticks (` `).",
          "Backticks allow template literals with variable interpolation (${expr}) and multi-line strings."
        ],
        "codeExamples": [
          {
            "title": "Essential String Methods",
            "code": "const text = '  JavaScript is Awesome!  ';\n\n// Trimming and casing:\nconst clean = text.trim().toLowerCase();\nconsole.log(clean); // 'javascript is awesome!'\n\n// Searching:\nconsole.log(clean.includes('awesome')); // true\nconsole.log(clean.startsWith('java'));  // true\n\n// Slicing:\nconsole.log(clean.slice(0, 10)); // 'javascript'",
            "output": "javascript is awesome!\ntrue\ntrue\njavascript",
            "explanation": "Strings are immutable; string methods return new strings rather than modifying the original."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Capitalize First Letter",
        "description": "Write a function capitalize(word) that returns the word with its first character capitalized.",
        "starterCode": "function capitalize(word) {\n  return word.charAt(0).toUpperCase() + word.slice(1);\n}\n\nconsole.log(capitalize('react'));",
        "solution": "function capitalize(word) {\n  return word.charAt(0).toUpperCase() + word.slice(1);\n}\nconsole.log(capitalize('react'));",
        "hints": [
          "Combine word[0].toUpperCase() with word.slice(1)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Can you modify an existing string by assigning a new character to an index (e.g. str[0] = 'X')?",
        "options": [
          "No, JavaScript strings are immutable; index assignment silently fails or throws in strict mode",
          "Yes, strings work like arrays of characters",
          "Only if declared with let",
          "Only in Node.js"
        ],
        "correctIndex": 0,
        "explanation": "Strings in JavaScript are immutable. To change a string, create a new string using methods like slice or replace."
      }
    ],
    "keyTakeaways": [
      "Template literals (`${var}`) support multi-line strings and expression embedding.",
      "Strings are immutable; methods always return a new string.",
      "Use includes(), slice(), toLowerCase(), and trim() for clean text processing."
    ],
    "tags": [
      "strings",
      "text",
      "template-literals",
      "slice",
      "trim"
    ]
  },
  {
    "slug": "array",
    "title": "Arrays: Ordered Collections",
    "description": "Store ordered lists of elements, access items by index, and use push, pop, shift, and unshift.",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Declaring and Using Arrays",
        "paragraphs": [
          "Arrays are ordered collections of values. Each element has a numeric index starting at 0.",
          "Arrays come with built-in stack and queue methods: push adds to the end, pop removes from the end, unshift adds to the beginning, and shift removes from the beginning."
        ],
        "codeExamples": [
          {
            "title": "Array Operations",
            "code": "const fruits = ['Apple', 'Orange'];\n\n// Add to end:\nfruits.push('Banana');\nconsole.log(fruits); // ['Apple', 'Orange', 'Banana']\n\n// Remove from end:\nconst last = fruits.pop();\nconsole.log(last);   // 'Banana'\n\n// Length:\nconsole.log(fruits.length); // 2",
            "output": "[\n  \"Apple\",\n  \"Orange\",\n  \"Banana\"\n]\nBanana\n2",
            "explanation": "push/pop operate on the end of an array with high performance (O(1))."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Manage a Todo Queue",
        "description": "Given const queue = ['Task 1'], add 'Task 2' to the end and remove the first task. Log the remaining queue.",
        "starterCode": "const queue = ['Task 1'];\nqueue.push('Task 2');\nqueue.shift();\nconsole.log(queue);",
        "solution": "const queue = ['Task 1'];\nqueue.push('Task 2');\nqueue.shift();\nconsole.log(queue);",
        "hints": [
          "Use queue.push(...) and queue.shift()."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why is push/pop significantly faster than unshift/shift on large arrays?",
        "options": [
          "Because push/pop operates on the end without needing to re-index all other elements in memory",
          "Because unshift only works with strings",
          "Because push is built into the CPU",
          "Because pop does not return a value"
        ],
        "correctIndex": 0,
        "explanation": "Modifying the start of an array requires shifting all subsequent elements to new indices in memory."
      }
    ],
    "keyTakeaways": [
      "Arrays are zero-indexed ordered lists.",
      "Use push/pop for fast stack operations at the end of the array.",
      "Use array.length to get the element count."
    ],
    "tags": [
      "arrays",
      "collections",
      "push",
      "pop",
      "index"
    ]
  },
  {
    "slug": "array-methods",
    "title": "Array Methods: map, filter, and reduce",
    "description": "Master modern functional array methods: transforming with map, filtering with filter, and aggregating with reduce.",
    "difficulty": "intermediate",
    "readingTime": 7,
    "sections": [
      {
        "heading": "The Big Three: map, filter, reduce",
        "paragraphs": [
          "Modern JavaScript encourages declarative, immutable data transformations over manual for loops.",
          "map transforms each element, filter selects elements matching a condition, and reduce aggregates an entire array into a single value."
        ],
        "codeExamples": [
          {
            "title": "map, filter, reduce in Action",
            "code": "const prices = [10, 25, 40, 5, 80];\n\n// 1. Filter: items over $20\nconst expensive = prices.filter(p => p > 20);\nconsole.log('Expensive:', expensive); // [25, 40, 80]\n\n// 2. Map: apply 10% tax\nconst withTax = prices.map(p => +(p * 1.1).toFixed(2));\nconsole.log('With Tax:', withTax);\n\n// 3. Reduce: calculate total\nconst total = prices.reduce((acc, curr) => acc + curr, 0);\nconsole.log('Total sum:', total); // 160",
            "output": "Expensive: [\n  25,\n  40,\n  80\n]\nWith Tax: [\n  11,\n  27.5,\n  44,\n  5.5,\n  88\n]\nTotal sum: 160",
            "explanation": "Declarative methods produce clean, readable pipelines without mutating the original array."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Filter and Double",
        "description": "Given numbers = [1, 2, 3, 4, 5, 6], filter for even numbers and map them to their squares. Log the result.",
        "starterCode": "const numbers = [1, 2, 3, 4, 5, 6];\nconst result = numbers\n  .filter(n => n % 2 === 0)\n  .map(n => n * n);\n\nconsole.log(result);",
        "solution": "const numbers = [1, 2, 3, 4, 5, 6];\nconst result = numbers.filter(n => n % 2 === 0).map(n => n * n);\nconsole.log(result);",
        "hints": [
          "Chain .filter(n => n % 2 === 0).map(n => n * n)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the map() method return?",
        "options": [
          "A new array containing the results of calling the callback function on every element",
          "A single accumulated number",
          "A boolean indicating if all elements matched",
          "The original array mutated in place"
        ],
        "correctIndex": 0,
        "explanation": "map() creates a brand new array populated with the results of the callback on each element."
      }
    ],
    "keyTakeaways": [
      "Use map() to transform each item in an array.",
      "Use filter() to select a subset of matching items.",
      "Use reduce() to compute totals, groupings, or aggregate results.",
      "These methods do not mutate the original array."
    ],
    "tags": [
      "arrays",
      "map",
      "filter",
      "reduce",
      "functional"
    ]
  },
  {
    "slug": "iterable",
    "title": "Iterables & Symbol.iterator",
    "description": "Learn how the for...of loop iterates over strings, arrays, and custom iterable objects using Symbol.iterator.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "What Makes an Object Iterable?",
        "paragraphs": [
          "An object is iterable if it implements the Symbol.iterator method, which returns an iterator with a next() method.",
          "Iterables can be consumed by for...of loops, the spread operator [...iterable], and Array.from()."
        ],
        "codeExamples": [
          {
            "title": "Creating a Custom Range Iterable",
            "code": "const range = {\n  from: 1,\n  to: 4,\n  [Symbol.iterator]() {\n    let current = this.from;\n    const last = this.to;\n    return {\n      next() {\n        if (current <= last) {\n          return { done: false, value: current++ };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\nfor (const num of range) {\n  console.log(num); // 1, 2, 3, 4\n}",
            "output": "1\n2\n3\n4",
            "explanation": "Implementing Symbol.iterator allows custom objects to seamlessly participate in for...of loops."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Iterate over a String",
        "description": "Use a for...of loop to iterate through the string 'CODE' and log each character on a new line.",
        "starterCode": "const word = 'CODE';\nfor (const char of word) {\n  console.log(char);\n}",
        "solution": "const word = 'CODE';\nfor (const char of word) {\n  console.log(char);\n}",
        "hints": [
          "Strings are built-in iterables! Use for (const char of word)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What method must an object implement to be iterable in a for...of loop?",
        "options": [
          "Symbol.iterator",
          "Symbol.toPrimitive",
          "Symbol.toStringTag",
          "forEach()"
        ],
        "correctIndex": 0,
        "explanation": "The Symbol.iterator method returns an iterator object conforming to the iteration protocol."
      }
    ],
    "keyTakeaways": [
      "Arrays, strings, Maps, and Sets are built-in iterables.",
      "for...of iterates values, whereas for...in iterates keys.",
      "Array.from(iterable) converts any iterable into a real array."
    ],
    "tags": [
      "iterables",
      "iteration",
      "for-of",
      "symbol-iterator"
    ]
  },
  {
    "slug": "map-set",
    "title": "Map and Set: Specialized Collections",
    "description": "Learn when to use Map (keys of any type, maintains insertion order) and Set (collections of unique values).",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Map vs Plain Object",
        "paragraphs": [
          "While plain objects only allow strings and symbols as keys, a Map allows keys of ANY type, including objects, functions, and numbers.",
          "A Set is a collection of unique values: duplicate additions are automatically ignored."
        ],
        "codeExamples": [
          {
            "title": "Map and Set in Action",
            "code": "// Map with object keys:\nconst userVisits = new Map();\nconst userAlice = { name: 'Alice' };\n\nuserVisits.set(userAlice, 12);\nconsole.log(userVisits.get(userAlice)); // 12\n\n// Set to remove duplicates:\nconst tags = ['js', 'css', 'html', 'js', 'css'];\nconst uniqueTags = new Set(tags);\nconsole.log([...uniqueTags]); // ['js', 'css', 'html']",
            "output": "12\n[\n  \"js\",\n  \"css\",\n  \"html\"\n]",
            "explanation": "Map remembers insertion order and allows arbitrary key types; Set ensures uniqueness."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Deduplicate an Array with Set",
        "description": "Write a function getUnique(arr) that takes an array and returns an array of unique elements using Set.",
        "starterCode": "function getUnique(arr) {\n  return [...new Set(arr)];\n}\n\nconsole.log(getUnique([1, 2, 2, 3, 4, 4, 5]));",
        "solution": "function getUnique(arr) {\n  return [...new Set(arr)];\n}\nconsole.log(getUnique([1, 2, 2, 3, 4, 4, 5]));",
        "hints": [
          "Use [...new Set(arr)] to convert a Set back into an array."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens when you add an existing element to a Set?",
        "options": [
          "It is silently ignored; the Set preserves uniqueness",
          "A duplicate entry is added",
          "An error is thrown",
          "The Set clears itself"
        ],
        "correctIndex": 0,
        "explanation": "Sets store unique values only; attempting to add an existing value has no effect."
      }
    ],
    "keyTakeaways": [
      "Map allows keys of any type (including objects) and tracks insertion order.",
      "Set stores unique values and provides fast O(1) membership checks with set.has().",
      "Use [...new Set(array)] for fast array deduplication."
    ],
    "tags": [
      "map",
      "set",
      "collections",
      "data-structures",
      "unique"
    ]
  },
  {
    "slug": "weakmap-weakset",
    "title": "WeakMap and WeakSet: Memory-Safe Collections",
    "description": "Prevent memory leaks using WeakMap and WeakSet: collections with weakly held object keys that allow garbage collection.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Why Weak Collections Exist",
        "paragraphs": [
          "In a normal Map, keeping an object as a key prevents that object from being garbage collected, even if it is no longer used elsewhere.",
          "A WeakMap only allows objects as keys and holds them weakly. If an object has no other references in the application, the garbage collector automatically deletes it from the WeakMap."
        ],
        "codeExamples": [
          {
            "title": "Caching with WeakMap",
            "code": "const cache = new WeakMap();\n\nfunction processUser(user) {\n  if (!cache.has(user)) {\n    const computed = { visitedAt: Date.now() };\n    cache.set(user, computed);\n  }\n  return cache.get(user);\n}\n\nlet guest = { name: 'Dan' };\nconsole.log(processUser(guest));\n\n// When guest = null is executed, the cache entry is cleaned up automatically!",
            "explanation": "WeakMap prevents memory leaks by releasing entries when keys become unreachable."
          }
        ],
        "bulletPoints": [
          "WeakMap keys MUST be objects (or non-registered symbols in ES2023).",
          "WeakMap does not support iteration (.keys(), .values(), .size) because GC timing is non-deterministic.",
          "WeakSet only stores objects and supports .add(), .has(), and .delete()."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Track Active Users with WeakSet",
        "description": "Create a WeakSet activeUsers. Add a user object, check if it has the user, and log the boolean result.",
        "starterCode": "const activeUsers = new WeakSet();\nconst user = { id: 1 };\n\nactiveUsers.add(user);\nconsole.log(activeUsers.has(user));",
        "solution": "const activeUsers = new WeakSet();\nconst user = { id: 1 };\nactiveUsers.add(user);\nconsole.log(activeUsers.has(user));",
        "hints": [
          "Use activeUsers.add(user) and activeUsers.has(user)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why can you not loop over a WeakMap with for...of or read its .size?",
        "options": [
          "Because garbage collection is non-deterministic; the engine cannot guarantee exact collection timing",
          "Because WeakMap is an async API",
          "Because WeakMap was deprecated",
          "Because keys are always encrypted"
        ],
        "correctIndex": 0,
        "explanation": "Because the garbage collector can clean up keys at any unpredictable moment, iteration and size inspection are intentionally not supported."
      }
    ],
    "keyTakeaways": [
      "WeakMap and WeakSet prevent memory leaks by holding object references weakly.",
      "Ideal for secondary caching and private data storage tied to object lifecycles."
    ],
    "tags": [
      "weakmap",
      "weakset",
      "memory",
      "garbage-collection"
    ]
  },
  {
    "slug": "keys-values-entries",
    "title": "Object.keys, values, and entries",
    "description": "Extract and iterate object properties as real arrays using Object.keys(), Object.values(), and Object.entries().",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Extracting Object Data as Arrays",
        "paragraphs": [
          "JavaScript provides three convenient static methods on the Object constructor:",
          "Object.keys(obj) returns an array of property names. Object.values(obj) returns an array of property values. Object.entries(obj) returns an array of [key, value] pairs."
        ],
        "codeExamples": [
          {
            "title": "keys, values, and entries in Action",
            "code": "const userScores = {\n  Alice: 95,\n  Bob: 82,\n  Charlie: 90\n};\n\nconsole.log(Object.keys(userScores));   // ['Alice', 'Bob', 'Charlie']\nconsole.log(Object.values(userScores)); // [95, 82, 90]\n\n// Iterating with Object.entries:\nfor (const [name, score] of Object.entries(userScores)) {\n  console.log(`${name}: ${score}`);\n}",
            "output": "[\n  \"Alice\",\n  \"Bob\",\n  \"Charlie\"\n]\n[\n  95,\n  82,\n  90\n]\nAlice: 95\nBob: 82\nCharlie: 90",
            "explanation": "Object.entries transforms objects into arrays of key-value pairs suitable for iteration."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Sum Object Values",
        "description": "Given salaries = { John: 100, Ann: 160, Pete: 130 }, calculate the total sum using Object.values and reduce.",
        "starterCode": "const salaries = { John: 100, Ann: 160, Pete: 130 };\nconst total = Object.values(salaries).reduce((sum, s) => sum + s, 0);\nconsole.log(total);",
        "solution": "const salaries = { John: 100, Ann: 160, Pete: 130 };\nconst total = Object.values(salaries).reduce((sum, s) => sum + s, 0);\nconsole.log(total);",
        "hints": [
          "Pass Object.values(salaries) into reduce."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does Object.entries({ a: 1, b: 2 }) return?",
        "options": [
          "[ ['a', 1], ['b', 2] ]",
          "{ a: 1, b: 2 }",
          "['a', 'b']",
          "[1, 2]"
        ],
        "correctIndex": 0,
        "explanation": "Object.entries returns an array of two-element arrays [key, value] for each enumerable own property."
      }
    ],
    "keyTakeaways": [
      "Object.keys, values, and entries convert objects into arrays.",
      "They only return enumerable string-keyed properties, ignoring symbols."
    ],
    "tags": [
      "objects",
      "keys",
      "values",
      "entries",
      "iteration"
    ]
  },
  {
    "slug": "destructuring-assignment",
    "title": "Destructuring Assignment: Arrays & Objects",
    "description": "Unpack arrays and objects into distinct variables cleanly, with default values, renaming, and nested destructuring.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Array and Object Destructuring",
        "paragraphs": [
          "Destructuring assignment is an ES6 feature that allows you to unpack values from arrays or properties from objects into distinct variables.",
          "It dramatically reduces boilerplate code when dealing with function arguments, API responses, and configuration objects."
        ],
        "codeExamples": [
          {
            "title": "Object and Array Destructuring",
            "code": "// Array destructuring:\nconst coords = [100, 250];\nconst [x, y] = coords;\nconsole.log('x:', x, 'y:', y);\n\n// Object destructuring with renaming and default values:\nconst profile = {\n  username: 'coder42',\n  country: 'Canada'\n};\n\nconst { username: handle, country, role = 'Member' } = profile;\nconsole.log(handle, country, role);",
            "output": "x: 100 y: 250\ncoder42 Canada Member",
            "explanation": "Destructuring extracts values concisely while supporting renaming (key: newName) and fallback defaults."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Extract User Fields",
        "description": "Given const user = { name: 'Emma', age: 24 }, use object destructuring to extract name and age. Log them.",
        "starterCode": "const user = { name: 'Emma', age: 24 };\nconst { name, age } = user;\nconsole.log(name, age);",
        "solution": "const user = { name: 'Emma', age: 24 };\nconst { name, age } = user;\nconsole.log(name, age);",
        "hints": [
          "const { name, age } = user;"
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "How do you assign a default value to an object property during destructuring?",
        "options": [
          "const { prop = 'defaultValue' } = obj;",
          "const { prop: 'defaultValue' } = obj;",
          "const { prop || 'defaultValue' } = obj;",
          "const { prop ?? 'defaultValue' } = obj;"
        ],
        "correctIndex": 0,
        "explanation": "The = syntax specifies fallback default values if the unpacked property is undefined."
      }
    ],
    "keyTakeaways": [
      "Destructuring unpacks objects and arrays into distinct variables cleanly.",
      "Supports default values (=), property renaming (:), and rest patterns (...rest)."
    ],
    "tags": [
      "destructuring",
      "es6",
      "objects",
      "arrays",
      "syntax"
    ]
  },
  {
    "slug": "date",
    "title": "Date and Time in JavaScript",
    "description": "Create and format dates, parse timestamps, calculate time differences, and use Date.now() for high performance.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The Date Object",
        "paragraphs": [
          "The built-in Date object represents a single moment in time, measured as the number of milliseconds since January 1, 1970 UTC (the Unix Epoch).",
          "Use new Date() to get the current timestamp, and methods like getFullYear(), getMonth() (0-indexed!), and getDay() to read components."
        ],
        "codeExamples": [
          {
            "title": "Working with Dates",
            "code": "const now = new Date();\nconsole.log('Year:', now.getFullYear());\n\n// Milliseconds timestamp:\nconst start = Date.now();\n// Simulating an operation:\nfor (let i = 0; i < 100000; i++) {}\nconst duration = Date.now() - start;\nconsole.log(`Execution took: ${duration}ms`);",
            "explanation": "Date.now() returns current milliseconds directly without allocating a Date object."
          }
        ],
        "callout": {
          "type": "warning",
          "text": "Remember that months in JavaScript Date are 0-indexed! January is 0, February is 1, ..., December is 11."
        }
      }
    ],
    "exercises": [
      {
        "title": "Get the Current Year",
        "description": "Create a date object for the current moment and log the current full 4-digit year.",
        "starterCode": "const currentYear = new Date().getFullYear();\nconsole.log(currentYear);",
        "solution": "const currentYear = new Date().getFullYear();\nconsole.log(currentYear);",
        "hints": [
          "Call new Date().getFullYear()."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What number represents the month of January in the JavaScript Date object?",
        "options": [
          "0 (zero-indexed)",
          "1",
          "-1",
          "null"
        ],
        "correctIndex": 0,
        "explanation": "Months in JavaScript Date are zero-indexed from 0 (January) to 11 (December)."
      }
    ],
    "keyTakeaways": [
      "Date stores milliseconds elapsed since Jan 1, 1970 UTC.",
      "Months are zero-indexed (0 to 11); days of month are 1-indexed (1 to 31).",
      "Use Date.now() for high-performance benchmarking."
    ],
    "tags": [
      "date",
      "time",
      "timestamp",
      "intl"
    ]
  },
  {
    "slug": "json",
    "title": "JSON Methods: JSON.stringify and JSON.parse",
    "description": "Serialize JavaScript data to strings for APIs and parse incoming JSON data safely.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "JavaScript Object Notation (JSON)",
        "paragraphs": [
          "JSON is the standard lightweight data-interchange format across the entire web. It is language-agnostic and human-readable.",
          "JSON.stringify(obj) converts a JavaScript object into a JSON string. JSON.parse(str) converts a JSON string back into a JavaScript object."
        ],
        "codeExamples": [
          {
            "title": "JSON Serialization & Parsing",
            "code": "const user = {\n  id: 101,\n  name: 'Sophia',\n  roles: ['admin', 'editor']\n};\n\n// Serialize to string (e.g. to send over network):\nconst jsonString = JSON.stringify(user, null, 2);\nconsole.log(jsonString);\n\n// Parse back to JavaScript object:\nconst parsed = JSON.parse(jsonString);\nconsole.log('Parsed Name:', parsed.name);",
            "output": "{\n  \"id\": 101,\n  \"name\": \"Sophia\",\n  \"roles\": [\n    \"admin\",\n    \"editor\"\n  ]\n}\nParsed Name: Sophia",
            "explanation": "JSON.stringify serializes objects; JSON.parse reconstitutes them into objects in memory."
          }
        ],
        "bulletPoints": [
          "Property names in JSON MUST be enclosed in double quotes (\" \").",
          "Functions, Symbol properties, and undefined values are excluded during serialization.",
          "Circular references will throw a TypeError."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Serialize and Deserialize",
        "description": "Given const car = { model: 'Model 3', year: 2024 }, serialize it with JSON.stringify and parse it back. Log the parsed model.",
        "starterCode": "const car = { model: 'Model 3', year: 2024 };\nconst jsonStr = JSON.stringify(car);\nconst parsedCar = JSON.parse(jsonStr);\nconsole.log(parsedCar.model);",
        "solution": "const car = { model: 'Model 3', year: 2024 };\nconst jsonStr = JSON.stringify(car);\nconst parsedCar = JSON.parse(jsonStr);\nconsole.log(parsedCar.model);",
        "hints": [
          "Use JSON.stringify and JSON.parse."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens to object properties holding function values during JSON.stringify()?",
        "options": [
          "They are omitted/skipped in the resulting JSON output",
          "They are converted to executable strings",
          "They throw a SyntaxError",
          "They are replaced with null"
        ],
        "correctIndex": 0,
        "explanation": "Functions and Symbol properties are not valid JSON types and are omitted during serialization."
      }
    ],
    "keyTakeaways": [
      "JSON is the universal format for API data exchange.",
      "JSON.stringify() converts JavaScript objects to JSON text.",
      "JSON.parse() reconstructs objects from valid JSON strings."
    ],
    "tags": [
      "json",
      "serialization",
      "parse",
      "stringify",
      "api"
    ]
  }
];
