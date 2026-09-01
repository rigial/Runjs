import type { Lesson } from '../../types';

export const part4Lessons: Lesson[] = [
  {
    "title": "Class",
    "description": "In practice, we often need to create many objects of the same kind, like users, or goods or whatever.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In practice, we often need to create many objects of the same kind, like users, or goods or whatever.",
          "As we already know from the chapter , `new function` can help with that.",
          "But in the modern JavaScript, there's a more advanced \"class\" construct, that introduces great new features which are useful for object-oriented programming."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "In object-oriented programming, a *class* is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "The \"class\" syntax",
        "paragraphs": [
          "The basic syntax is:",
          "Then use `new MyClass()` to create a new object with all the listed methods.",
          "The `constructor()` method is called automatically by `new`, so we can initialize the object there.",
          "For example:",
          "When `new User(\"John\")` is called:"
        ],
        "codeExamples": [
          {
            "title": "The \"class\" syntax",
            "code": "class MyClass {\n  // class methods\n  constructor() { ... }\n  method1() { ... }\n  method2() { ... }\n  method3() { ... }\n  ...\n}",
            "explanation": "Example demonstrating the \"class\" syntax."
          },
          {
            "title": "The \"class\" syntax",
            "code": "class User {\n\n  constructor(name) {\n    this.name = name;\n  }\n\n  sayHi() {\n    alert(this.name);\n  }\n\n}\n\n// Usage:\nlet user = new User(\"John\");\nuser.sayHi();",
            "explanation": "Example demonstrating the \"class\" syntax."
          }
        ]
      },
      {
        "heading": "What is a class?",
        "paragraphs": [
          "So, what exactly is a `class`? That's not an entirely new language-level entity, as one might think.",
          "Let's unveil any magic and see what a class really is. That'll help in understanding many complex aspects.",
          "In JavaScript, a class is a kind of function.",
          "Here, take a look:",
          "What `class User {...}` construct really does is:"
        ],
        "codeExamples": [
          {
            "title": "What is a class?",
            "code": "class User {\n  constructor(name) { this.name = name; }\n  sayHi() { alert(this.name); }\n}\n\n// proof: User is a function\n*!*\nalert(typeof User); // function\n*/!*",
            "explanation": "Example demonstrating what is a class?."
          },
          {
            "title": "What is a class?",
            "code": "class User {\n  constructor(name) { this.name = name; }\n  sayHi() { alert(this.name); }\n}\n\n// class is a function\nalert(typeof User); // function\n\n// ...or, more precisely, the constructor method\nalert(User === User.prototype.constructor); // true\n\n// The methods are in User.prototype, e.g:\nalert(User.prototype.sayHi); // the code of the sayHi method\n\n// there are exactly two methods in the prototype\nalert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi",
            "explanation": "Example demonstrating what is a class?."
          }
        ]
      },
      {
        "heading": "Not just a syntactic sugar",
        "paragraphs": [
          "Sometimes people say that `class` is a \"syntactic sugar\" (syntax that is designed to make things easier to read, but doesn't introduce anything new), because we could actually declare the same thing without using the `class` keyword at all:",
          "The result of this definition is about the same. So, there are indeed reasons why `class` can be considered a syntactic sugar to define a constructor together with its prototype methods.",
          "Still, there are important differences.",
          "1. First, a function created by `class` is labelled by a special internal property `[[IsClassConstructor]]: true`. So it's not entirely the same as creating it manually.",
          "The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with `new`:"
        ],
        "codeExamples": [
          {
            "title": "Not just a syntactic sugar",
            "code": "// rewriting class User in pure functions\n\n// 1. Create constructor function\nfunction User(name) {\n  this.name = name;\n}\n// a function prototype has \"constructor\" property by default,\n// so we don't need to create it\n\n// 2. Add the method to prototype\nUser.prototype.sayHi = function() {\n  alert(this.name);\n};\n\n// Usage:\nlet user = new User(\"John\");\nuser.sayHi();",
            "explanation": "Example demonstrating not just a syntactic sugar."
          }
        ]
      },
      {
        "heading": "Class Expression",
        "paragraphs": [
          "Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.",
          "Here's an example of a class expression:",
          "Similar to Named Function Expressions, class expressions may have a name.",
          "If a class expression has a name, it's visible inside the class only:",
          "We can even make classes dynamically \"on-demand\", like this:"
        ],
        "codeExamples": [
          {
            "title": "Class Expression",
            "code": "let User = class {\n  sayHi() {\n    alert(\"Hello\");\n  }\n};",
            "explanation": "Example demonstrating class expression."
          },
          {
            "title": "Class Expression",
            "code": "// \"Named Class Expression\"\n// (no such term in the spec, but that's similar to Named Function Expression)\nlet User = class *!*MyClass*/!* {\n  sayHi() {\n    alert(MyClass); // MyClass name is visible only inside the class\n  }\n};\n\nnew User().sayHi(); // works, shows MyClass definition\n\nalert(MyClass); // error, MyClass name isn't visible outside of the class",
            "explanation": "Example demonstrating class expression."
          }
        ]
      },
      {
        "heading": "Getters/setters",
        "paragraphs": [
          "Just like literal objects, classes may include getters/setters, computed properties etc.",
          "Here's an example for `user.name` implemented using `get/set`:",
          "Technically, such class declaration works by creating getters and setters in `User.prototype`."
        ],
        "codeExamples": [
          {
            "title": "Getters/setters",
            "code": "class User {\n\n  constructor(name) {\n    // invokes the setter\n    this.name = name;\n  }\n\n*!*\n  get name() {\n*/!*\n    return this._name;\n  }\n\n*!*\n  set name(value) {\n*/!*\n    if (value.length < 4) {\n      alert(\"Name is too short.\");\n      return;\n    }\n    this._name = value;\n  }\n\n}\n\nlet user = new User(\"John\");\nalert(user.name); // John\n\nuser = new User(\"\"); // Name is too short.",
            "explanation": "Example demonstrating getters/setters."
          }
        ]
      },
      {
        "heading": "Computed names [...]",
        "paragraphs": [
          "Here's an example with a computed method name using brackets `[...]`:",
          "Such features are easy to remember, as they resemble that of literal objects."
        ],
        "codeExamples": [
          {
            "title": "Computed names [...]",
            "code": "class User {\n\n*!*\n  ['say' + 'Hi']() {\n*/!*\n    alert(\"Hello\");\n  }\n\n}\n\nnew User().sayHi();",
            "explanation": "Example demonstrating computed names [...]."
          }
        ]
      },
      {
        "heading": "Class fields",
        "paragraphs": [
          "Previously, our classes only had methods.",
          "\"Class fields\" is a syntax that allows to add any properties.",
          "For instance, let's add `name` property to `class User`:",
          "So, we just write \" = \" in the declaration, and that's it.",
          "The important difference of class fields is that they are set on individual objects, not `User.prototype`:"
        ],
        "codeExamples": [
          {
            "title": "Class fields",
            "code": "Class fields are a recent addition to the language.",
            "explanation": "Example demonstrating class fields."
          },
          {
            "title": "Class fields",
            "code": "class User {\n*!*\n  name = \"John\";\n*/!*\n\n  sayHi() {\n    alert(`Hello, ${this.name}!`);\n  }\n}\n\nnew User().sayHi(); // Hello, John!",
            "explanation": "Example demonstrating class fields."
          }
        ]
      },
      {
        "heading": "Making bound methods with class fields",
        "paragraphs": [
          "As demonstrated in the chapter functions in JavaScript have a dynamic `this`. It depends on the context of the call.",
          "So if an object method is passed around and called in another context, `this` won't be a reference to its object any more.",
          "For instance, this code will show `undefined`:",
          "The problem is called \"losing `this`\".",
          "There are two approaches to fixing it, as discussed in the chapter :"
        ],
        "codeExamples": [
          {
            "title": "Making bound methods with class fields",
            "code": "class Button {\n  constructor(value) {\n    this.value = value;\n  }\n\n  click() {\n    alert(this.value);\n  }\n}\n\nlet button = new Button(\"hello\");\n\n*!*\nsetTimeout(button.click, 1000); // undefined\n*/!*",
            "explanation": "Example demonstrating making bound methods with class fields."
          },
          {
            "title": "Making bound methods with class fields",
            "code": "class Button {\n  constructor(value) {\n    this.value = value;\n  }\n*!*\n  click = () => {\n    alert(this.value);\n  }\n*/!*\n}\n\nlet button = new Button(\"hello\");\n\nsetTimeout(button.click, 1000); // hello",
            "explanation": "Example demonstrating making bound methods with class fields."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The basic class syntax looks like this:",
          "`MyClass` is technically a function (the one that we provide as `constructor`), while methods, getters and setters are written to `MyClass.prototype`.",
          "In the next chapters we'll learn more about classes, including inheritance and other features."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "class MyClass {\n  prop = value; // property\n\n  constructor(...) { // constructor\n    // ...\n  }\n\n  method(...) {} // method\n\n  get something(...) {} // getter method\n  set something(...) {} // setter method\n\n  [Symbol.iterator]() {} // method with computed name (symbol here)\n  // ...\n}",
            "explanation": "Example demonstrating summary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Rewrite to class",
        "description": "The `Clock` class (see the sandbox) is written in functional style. Rewrite it in the \"class\" syntax. P.S. The clock ticks in the console, open it to see.",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Class in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for class.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Class is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Class?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Class is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying class.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "class"
    ],
    "slug": "class"
  },
  {
    "title": "Class Inheritance",
    "description": "Class inheritance is a way for one class to extend another class.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Class inheritance is a way for one class to extend another class.",
          "So we can create new functionality on top of the existing."
        ]
      },
      {
        "heading": "The \"extends\" keyword",
        "paragraphs": [
          "Let's say we have class `Animal`:",
          "Here's how we can represent `animal` object and `Animal` class graphically:",
          "![](rabbit-animal-independent-animal.svg)",
          "...And we would like to create another `class Rabbit`.",
          "As rabbits are animals, `Rabbit` class should be based on `Animal`, have access to animal methods, so that rabbits can do what \"generic\" animals can do."
        ],
        "codeExamples": [
          {
            "title": "The \"extends\" keyword",
            "code": "class Animal {\n  constructor(name) {\n    this.speed = 0;\n    this.name = name;\n  }\n  run(speed) {\n    this.speed = speed;\n    alert(`${this.name} runs with speed ${this.speed}.`);\n  }\n  stop() {\n    this.speed = 0;\n    alert(`${this.name} stands still.`);\n  }\n}\n\nlet animal = new Animal(\"My animal\");",
            "explanation": "Example demonstrating the \"extends\" keyword."
          },
          {
            "title": "The \"extends\" keyword",
            "code": "*!*\nclass Rabbit extends Animal {\n*/!*\n  hide() {\n    alert(`${this.name} hides!`);\n  }\n}\n\nlet rabbit = new Rabbit(\"White Rabbit\");\n\nrabbit.run(5); // White Rabbit runs with speed 5.\nrabbit.hide(); // White Rabbit hides!",
            "explanation": "Example demonstrating the \"extends\" keyword."
          }
        ]
      },
      {
        "heading": "Overriding a method",
        "paragraphs": [
          "Now let's move forward and override a method. By default, all methods that are not specified in `class Rabbit` are taken directly \"as is\" from `class Animal`.",
          "But if we specify our own method in `Rabbit`, such as `stop()` then it will be used instead:",
          "Usually, however, we don't want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.",
          "Classes provide `\"super\"` keyword for that.",
          "For instance, let our rabbit autohide when stopped:"
        ],
        "codeExamples": [
          {
            "title": "Overriding a method",
            "code": "class Rabbit extends Animal {\n  stop() {\n    // ...now this will be used for rabbit.stop()\n    // instead of stop() from class Animal\n  }\n}",
            "explanation": "Example demonstrating overriding a method."
          },
          {
            "title": "Overriding a method",
            "code": "class Animal {\n\n  constructor(name) {\n    this.speed = 0;\n    this.name = name;\n  }\n\n  run(speed) {\n    this.speed = speed;\n    alert(`${this.name} runs with speed ${this.speed}.`);\n  }\n\n  stop() {\n    this.speed = 0;\n    alert(`${this.name} stands still.`);\n  }\n\n}\n\nclass Rabbit extends Animal {\n  hide() {\n    alert(`${this.name} hides!`);\n  }\n\n*!*\n  stop() {\n    super.stop(); // call parent stop\n    this.hide(); // and then hide\n  }\n*/!*\n}\n\nlet rabbit = new Rabbit(\"White Rabbit\");\n\nrabbit.run(5); // White Rabbit runs with speed 5.\nrabbit.stop(); // White Rabbit stands still. White Rabbit hides!",
            "explanation": "Example demonstrating overriding a method."
          }
        ],
        "bulletPoints": [
          "`super.method(...)` to call a parent method.",
          "`super(...)` to call a parent constructor (inside our constructor only)."
        ]
      },
      {
        "heading": "Overriding constructor",
        "paragraphs": [
          "With constructors it gets a little bit tricky.",
          "Until now, `Rabbit` did not have its own `constructor`.",
          "According to the specification, if a class extends another class and has no `constructor`, then the following \"empty\" `constructor` is generated:",
          "As we can see, it basically calls the parent `constructor` passing it all the arguments. That happens if we don't write a constructor of our own.",
          "Now let's add a custom constructor to `Rabbit`. It will specify the `earLength` in addition to `name`:"
        ],
        "codeExamples": [
          {
            "title": "Overriding constructor",
            "code": "class Rabbit extends Animal {\n  // generated for extending classes without own constructors\n*!*\n  constructor(...args) {\n    super(...args);\n  }\n*/!*\n}",
            "explanation": "Example demonstrating overriding constructor."
          },
          {
            "title": "Overriding constructor",
            "code": "class Animal {\n  constructor(name) {\n    this.speed = 0;\n    this.name = name;\n  }\n  // ...\n}\n\nclass Rabbit extends Animal {\n\n*!*\n  constructor(name, earLength) {\n    this.speed = 0;\n    this.name = name;\n    this.earLength = earLength;\n  }\n*/!*\n\n  // ...\n}\n\n*!*\n// Doesn't work!\nlet rabbit = new Rabbit(\"White Rabbit\", 10); // Error: this is not defined.\n*/!*",
            "explanation": "Example demonstrating overriding constructor."
          }
        ],
        "bulletPoints": [
          "**Constructors in inheriting classes must call `super(...)`, and (!) do it before using `this`.**",
          "When a regular function is executed with `new`, it creates an empty object and assigns it to `this`.",
          "But when a derived constructor runs, it doesn't do this. It expects the parent constructor to do this job."
        ]
      },
      {
        "heading": "Overriding class fields: a tricky note",
        "paragraphs": [
          "We can override not only methods, but also class fields.",
          "Although, there's a tricky behavior when we access an overridden field in parent constructor, quite different from most other programming languages.",
          "Consider this example:",
          "Here, class `Rabbit` extends `Animal` and overrides the `name` field with its own value.",
          "There's no own constructor in `Rabbit`, so `Animal` constructor is called."
        ],
        "codeExamples": [
          {
            "title": "Overriding class fields: a tricky note",
            "code": "This note assumes you have a certain experience with classes, maybe in other programming languages.\n\nIt provides better insight into the language and also explains the behavior that might be a source of bugs (but not very often).\n\nIf you find it difficult to understand, just go on, continue reading, then return to it some time later.",
            "explanation": "Example demonstrating overriding class fields: a tricky note."
          },
          {
            "title": "Overriding class fields: a tricky note",
            "code": "class Animal {\n  name = 'animal';\n\n  constructor() {\n    alert(this.name); // (*)\n  }\n}\n\nclass Rabbit extends Animal {\n  name = 'rabbit';\n}\n\nnew Animal(); // animal\n*!*\nnew Rabbit(); // animal\n*/!*",
            "explanation": "Example demonstrating overriding class fields: a tricky note."
          }
        ],
        "bulletPoints": [
          "Before constructor for the base class (that doesn't extend anything),",
          "Immediately after `super()` for the derived class."
        ]
      },
      {
        "heading": "Super: internals, [[HomeObject]]",
        "paragraphs": [
          "Let's get a little deeper under the hood of `super`. We'll see some interesting things along the way.",
          "First to say, from all that we've learned till now, it's impossible for `super` to work at all!",
          "Yeah, indeed, let's ask ourselves, how it should technically work? When an object method runs, it gets the current object as `this`. If we call `super.method()` then, the engine needs to get the `method` from the prototype of the current object. But how?",
          "The task may seem simple, but it isn't. The engine knows the current object `this`, so it could get the parent `method` as `this.__proto__.method`. Unfortunately, such a \"naive\" solution won't work.",
          "Let's demonstrate the problem. Without classes, using plain objects for the sake of simplicity."
        ],
        "codeExamples": [
          {
            "title": "Super: internals, [[HomeObject]]",
            "code": "If you're reading the tutorial for the first time - this section may be skipped.\n\nIt's about the internal mechanisms behind inheritance and `super`.",
            "explanation": "Example demonstrating super: internals, [[homeobject]]."
          },
          {
            "title": "Super: internals, [[HomeObject]]",
            "code": "let animal = {\n  name: \"Animal\",\n  eat() {\n    alert(`${this.name} eats.`);\n  }\n};\n\nlet rabbit = {\n  __proto__: animal,\n  name: \"Rabbit\",\n  eat() {\n*!*\n    // that's how super.eat() could presumably work\n    this.__proto__.eat.call(this); // (*)\n*/!*\n  }\n};\n\nrabbit.eat(); // Rabbit eats.",
            "explanation": "Example demonstrating super: internals, [[homeobject]]."
          }
        ]
      },
      {
        "heading": "`[[HomeObject]]`",
        "paragraphs": [
          "To provide the solution, JavaScript adds one more special internal property for functions: `[[HomeObject]]`.",
          "When a function is specified as a class or object method, its `[[HomeObject]]` property becomes that object.",
          "Then `super` uses it to resolve the parent prototype and its methods.",
          "Let's see how it works, first with plain objects:",
          "It works as intended, due to `[[HomeObject]]` mechanics. A method, such as `longEar.eat`, knows its `[[HomeObject]]` and takes the parent method from its prototype. Without any use of `this`."
        ],
        "codeExamples": [
          {
            "title": "`[[HomeObject]]`",
            "code": "let animal = {\n  name: \"Animal\",\n  eat() {         // animal.eat.[[HomeObject]] == animal\n    alert(`${this.name} eats.`);\n  }\n};\n\nlet rabbit = {\n  __proto__: animal,\n  name: \"Rabbit\",\n  eat() {         // rabbit.eat.[[HomeObject]] == rabbit\n    super.eat();\n  }\n};\n\nlet longEar = {\n  __proto__: rabbit,\n  name: \"Long Ear\",\n  eat() {         // longEar.eat.[[HomeObject]] == longEar\n    super.eat();\n  }\n};\n\n*!*\n// works correctly\nlongEar.eat();  // Long Ear eats.\n*/!*",
            "explanation": "Example demonstrating `[[homeobject]]`."
          }
        ]
      },
      {
        "heading": "Methods are not \"free\"",
        "paragraphs": [
          "As we've known before, generally functions are \"free\", not bound to objects in JavaScript. So they can be copied between objects and called with another `this`.",
          "The very existence of `[[HomeObject]]` violates that principle, because methods remember their objects. `[[HomeObject]]` can't be changed, so this bond is forever.",
          "The only place in the language where `[[HomeObject]]` is used -- is `super`. So, if a method does not use `super`, then we can still consider it free and copy between objects. But with `super` things may go wrong.",
          "Here's the demo of a wrong `super` result after copying:",
          "A call to `tree.sayHi()` shows \"I'm an animal\". Definitely wrong."
        ],
        "codeExamples": [
          {
            "title": "Methods are not \"free\"",
            "code": "let animal = {\n  sayHi() {\n    alert(`I'm an animal`);\n  }\n};\n\n// rabbit inherits from animal\nlet rabbit = {\n  __proto__: animal,\n  sayHi() {\n    super.sayHi();\n  }\n};\n\nlet plant = {\n  sayHi() {\n    alert(\"I'm a plant\");\n  }\n};\n\n// tree inherits from plant\nlet tree = {\n  __proto__: plant,\n*!*\n  sayHi: rabbit.sayHi // (*)\n*/!*\n};\n\n*!*\ntree.sayHi();  // I'm an animal (?!?)\n*/!*",
            "explanation": "Example demonstrating methods are not \"free\"."
          }
        ],
        "bulletPoints": [
          "In the line `(*)`, the method `tree.sayHi` was copied from `rabbit`. Maybe we just wanted to avoid code duplication?",
          "Its `[[HomeObject]]` is `rabbit`, as it was created in `rabbit`. There's no way to change `[[HomeObject]]`.",
          "The code of `tree.sayHi()` has `super.sayHi()` inside. It goes up from `rabbit` and takes the method from `animal`."
        ]
      },
      {
        "heading": "Methods, not function properties",
        "paragraphs": [
          "`[[HomeObject]]` is defined for methods both in classes and in plain objects. But for objects, methods must be specified exactly as `method()`, not as `\"method: function()\"`.",
          "The difference may be non-essential for us, but it's important for JavaScript.",
          "In the example below a non-method syntax is used for comparison. `[[HomeObject]]` property is not set and the inheritance doesn't work:"
        ],
        "codeExamples": [
          {
            "title": "Methods, not function properties",
            "code": "let animal = {\n  eat: function() { // intentionally writing like this instead of eat() {...\n    // ...\n  }\n};\n\nlet rabbit = {\n  __proto__: animal,\n  eat: function() {\n    super.eat();\n  }\n};\n\n*!*\nrabbit.eat();  // Error calling super (because there's no [[HomeObject]])\n*/!*",
            "explanation": "Example demonstrating methods, not function properties."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "1. To extend a class: `class Child extends Parent`:",
          "2. When overriding a constructor:",
          "3. When overriding another method:",
          "4. Internals:",
          "Also:"
        ],
        "bulletPoints": [
          "That means `Child.prototype.__proto__` will be `Parent.prototype`, so methods are inherited.",
          "We must call parent constructor as `super()` in `Child` constructor before using `this`.",
          "We can use `super.method()` in a `Child` method to call `Parent` method.",
          "Methods remember their class/object in the internal `[[HomeObject]]` property. That's how `super` resolves parent methods.",
          "So it's not safe to copy a method with `super` from one object to another."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Error creating an instance",
        "description": "Here's the code with `Rabbit` extending `Animal`. Unfortunately, `Rabbit` objects can't be created. What's wrong? Fix it. ```js run class Animal { constructor(name) { this.name = name; } } class Rabbit extends Animal { constructor(name) { this.name = name; this.created = Date.now(); } } *!* let rabb",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Extended clock",
        "description": "We've got a `Clock` class. As of now, it prints the time every second. [js src=\"source.view/clock.js\"] Create a new class `ExtendedClock` that inherits from `Clock` and adds the parameter `precision` -- the number of `ms` between \"ticks\". Should be `1000` (1 second) by default. - Your code should be",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Class Inheritance in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for class inheritance.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Class Inheritance is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Class Inheritance?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Class Inheritance is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying class inheritance.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "class-inheritance"
    ],
    "slug": "class-inheritance"
  },
  {
    "title": "Static Properties Methods",
    "description": "We can also assign a method to the class as a whole. Such methods are called *static*.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We can also assign a method to the class as a whole. Such methods are called *static*.",
          "In a class declaration, they are prepended by `static` keyword, like this:",
          "That actually does the same as assigning it as a property directly:",
          "The value of `this` in `User.staticMethod()` call is the class constructor `User` itself (the \"object before dot\" rule).",
          "Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "class User {\n*!*\n  static staticMethod() {\n*/!*\n    alert(this === User);\n  }\n}\n\nUser.staticMethod(); // true",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "class User { }\n\nUser.staticMethod = function() {\n  alert(this === User);\n};\n\nUser.staticMethod(); // true",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Static properties",
        "paragraphs": [
          "[recent browser=Chrome]",
          "Static properties are also possible, they look like regular class properties, but prepended by `static`:",
          "That is the same as a direct assignment to `Article`:"
        ],
        "codeExamples": [
          {
            "title": "Static properties",
            "code": "class Article {\n  static publisher = \"Ilya Kantor\";\n}\n\nalert( Article.publisher ); // Ilya Kantor",
            "explanation": "Example demonstrating static properties."
          },
          {
            "title": "Static properties",
            "code": "Article.publisher = \"Ilya Kantor\";",
            "explanation": "Example demonstrating static properties."
          }
        ]
      },
      {
        "heading": "Inheritance of static properties and methods [#statics-and-inheritance]",
        "paragraphs": [
          "Static properties and methods are inherited.",
          "For instance, `Animal.compare` and `Animal.planet` in the code below are inherited and accessible as `Rabbit.compare` and `Rabbit.planet`:",
          "Now when we call `Rabbit.compare`, the inherited `Animal.compare` will be called.",
          "How does it work? Again, using prototypes. As you might have already guessed, `extends` gives `Rabbit` the `[[Prototype]]` reference to `Animal`.",
          "![](animal-rabbit-static.svg)"
        ],
        "codeExamples": [
          {
            "title": "Inheritance of static properties and methods [#statics-and-inheritance]",
            "code": "class Animal {\n  static planet = \"Earth\";\n\n  constructor(name, speed) {\n    this.speed = speed;\n    this.name = name;\n  }\n\n  run(speed = 0) {\n    this.speed += speed;\n    alert(`${this.name} runs with speed ${this.speed}.`);\n  }\n\n*!*\n  static compare(animalA, animalB) {\n    return animalA.speed - animalB.speed;\n  }\n*/!*\n\n}\n\n// Inherit from Animal\nclass Rabbit extends Animal {\n  hide() {\n    alert(`${this.name} hides!`);\n  }\n}\n\nlet rabbits = [\n  new Rabbit(\"White Rabbit\", 10),\n  new Rabbit(\"Black Rabbit\", 5)\n];\n\n*!*\nrabbits.sort(Rabbit.compare);\n*/!*\n\nrabbits[0].run(); // Black Rabbit runs with speed 5.\n\nalert(Rabbit.planet); // Earth",
            "explanation": "Example demonstrating inheritance of static properties and methods [#statics-and-inheritance]."
          },
          {
            "title": "Inheritance of static properties and methods [#statics-and-inheritance]",
            "code": "class Animal {}\nclass Rabbit extends Animal {}\n\n// for statics\nalert(Rabbit.__proto__ === Animal); // true\n\n// for regular methods\nalert(Rabbit.prototype.__proto__ === Animal.prototype); // true",
            "explanation": "Example demonstrating inheritance of static properties and methods [#statics-and-inheritance]."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Static methods are used for the functionality that belongs to the class \"as a whole\". It doesn't relate to a concrete class instance.",
          "For example, a method for comparison `Article.compare(article1, article2)` or a factory method `Article.createTodays()`.",
          "They are labeled by the word `static` in class declaration.",
          "Static properties are used when we'd like to store class-level data, also not bound to an instance.",
          "The syntax is:"
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "class MyClass {\n  static property = ...;\n\n  static method() {\n    ...\n  }\n}",
            "explanation": "Example demonstrating summary."
          },
          {
            "title": "Summary",
            "code": "MyClass.property = ...\nMyClass.method = ...",
            "explanation": "Example demonstrating summary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Class extends Object?",
        "description": "As we know, all objects normally inherit from `Object.prototype` and get access to \"generic\" object methods like `hasOwnProperty` etc. For instance: ```js run class Rabbit { constructor(name) { this.name = name; } } let rabbit = new Rabbit(\"Rab\"); *!* // hasOwnProperty method is from Object.prototyp",
        "starterCode": "But if we spell it out explicitly like `\"class Rabbit extends Object\"`, then the result would be different from a simple `\"class Rabbit\"`?\n\nWhat's the difference?\n\nHere's an example of such code (it doesn't work -- why? fix it?):",
        "solution": "But that's not all yet.\n\nEven after the fix, there's still an important difference between `\"class Rabbit extends Object\"` and `class Rabbit`.\n\nAs we know, the \"extends\" syntax sets up two prototypes:\n\n1. Between `\"prototype\"` of the constructor functions (for methods).\n2. Between the constructor functions themselves (for static methods).\n\nIn the case of `class Rabbit extends Object` it means:",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Static Properties Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for static properties methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Static Properties Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Static Properties Methods?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Static Properties Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying static properties methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "static-properties-methods"
    ],
    "slug": "static-properties-methods"
  },
  {
    "title": "Private Protected Properties Methods",
    "description": "One of the most important principles of object oriented programming -- delimiting internal interface from the external one.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "One of the most important principles of object oriented programming -- delimiting internal interface from the external one.",
          "That is \"a must\" practice in developing anything more complex than a \"hello world\" app.",
          "To understand this, let's break away from development and turn our eyes into the real world.",
          "Usually, devices that we're using are quite complex. But delimiting the internal interface from the external one allows to use them without problems."
        ]
      },
      {
        "heading": "A real-life example",
        "paragraphs": [
          "For instance, a coffee machine. Simple from outside: a button, a display, a few holes...And, surely, the result -- great coffee! :)",
          "![](coffee.jpg)",
          "But inside... (a picture from the repair manual)",
          "![](coffee-inside.jpg)",
          "A lot of details. But we can use it without knowing anything."
        ]
      },
      {
        "heading": "Internal and external interface",
        "paragraphs": [
          "In object-oriented programming, properties and methods are split into two groups:",
          "If we continue the analogy with the coffee machine -- what's hidden inside: a boiler tube, heating element, and so on -- is its internal interface.",
          "An internal interface is used for the object to work, its details use each other. For instance, a boiler tube is attached to the heating element.",
          "But from the outside a coffee machine is closed by the protective cover, so that no one can reach those. Details are hidden and inaccessible. We can use its features via the external interface.",
          "So, all we need to use an object is to know its external interface. We may be completely unaware how it works inside, and that's great."
        ],
        "bulletPoints": [
          "*Internal interface* -- methods and properties, accessible from other methods of the class, but not from the outside.",
          "*External interface* -- methods and properties, accessible also from outside the class.",
          "Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.",
          "Private: accessible only from inside the class. These are for the internal interface."
        ]
      },
      {
        "heading": "Protecting \"waterAmount\"",
        "paragraphs": [
          "Let's make a simple coffee machine class first:",
          "Right now the properties `waterAmount` and `power` are public. We can easily get/set them from the outside to any value.",
          "Let's change `waterAmount` property to protected to have more control over it. For instance, we don't want anyone to set it below zero.",
          "**Protected properties are usually prefixed with an underscore `_`.**",
          "That is not enforced on the language level, but there's a well-known convention between programmers that such properties and methods should not be accessed from the outside."
        ],
        "codeExamples": [
          {
            "title": "Protecting \"waterAmount\"",
            "code": "class CoffeeMachine {\n  waterAmount = 0; // the amount of water inside\n\n  constructor(power) {\n    this.power = power;\n    alert( `Created a coffee-machine, power: ${power}` );\n  }\n\n}\n\n// create the coffee machine\nlet coffeeMachine = new CoffeeMachine(100);\n\n// add water\ncoffeeMachine.waterAmount = 200;",
            "explanation": "Example demonstrating protecting \"wateramount\"."
          },
          {
            "title": "Protecting \"waterAmount\"",
            "code": "class CoffeeMachine {\n  _waterAmount = 0;\n\n  set waterAmount(value) {\n    if (value < 0) {\n      value = 0;\n    }\n    this._waterAmount = value;\n  }\n\n  get waterAmount() {\n    return this._waterAmount;\n  }\n\n  constructor(power) {\n    this._power = power;\n  }\n\n}\n\n// create the coffee machine\nlet coffeeMachine = new CoffeeMachine(100);\n\n// add water\ncoffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10",
            "explanation": "Example demonstrating protecting \"wateramount\"."
          }
        ]
      },
      {
        "heading": "Read-only \"power\"",
        "paragraphs": [
          "For `power` property, let's make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.",
          "That's exactly the case for a coffee machine: power never changes.",
          "To do so, we only need to make getter, but not the setter:",
          "class CoffeeMachine {",
          "_waterAmount = 0;"
        ],
        "codeExamples": [
          {
            "title": "Read-only \"power\"",
            "code": "class CoffeeMachine {\n  // ...\n\n  constructor(power) {\n    this._power = power;\n  }\n\n  get power() {\n    return this._power;\n  }\n\n}\n\n// create the coffee machine\nlet coffeeMachine = new CoffeeMachine(100);\n\nalert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W\n\ncoffeeMachine.power = 25; // Error (no setter)",
            "explanation": "Example demonstrating read-only \"power\"."
          },
          {
            "title": "Read-only \"power\"",
            "code": "Here we used getter/setter syntax.\n\nBut most of the time `get.../set...` functions are preferred, like this:",
            "explanation": "Example demonstrating read-only \"power\"."
          }
        ]
      },
      {
        "heading": "Private \"#waterLimit\"",
        "paragraphs": [
          "[recent browser=none]",
          "There's a finished JavaScript proposal, almost in the standard, that provides language-level support for private properties and methods.",
          "Privates should start with `#`. They are only accessible from inside the class.",
          "For instance, here's a private `#waterLimit` property and the water-checking private method `#fixWaterAmount`:",
          "On the language level, `#` is a special sign that the field is private. We can't access it from outside or from inheriting classes."
        ],
        "codeExamples": [
          {
            "title": "Private \"#waterLimit\"",
            "code": "class CoffeeMachine {\n*!*\n  #waterLimit = 200;\n*/!*\n\n*!*\n  #fixWaterAmount(value) {\n    if (value < 0) return 0;\n    if (value > this.#waterLimit) return this.#waterLimit;\n  }\n*/!*\n\n  setWaterAmount(value) {\n    this.#waterLimit = this.#fixWaterAmount(value);\n  }\n\n}\n\nlet coffeeMachine = new CoffeeMachine();\n\n*!*\n// can't access privates from outside of the class\ncoffeeMachine.#fixWaterAmount(123); // Error\ncoffeeMachine.#waterLimit = 1000; // Error\n*/!*",
            "explanation": "Example demonstrating private \"#waterlimit\"."
          },
          {
            "title": "Private \"#waterLimit\"",
            "code": "class CoffeeMachine {\n\n  #waterAmount = 0;\n\n  get waterAmount() {\n    return this.#waterAmount;\n  }\n\n  set waterAmount(value) {\n    if (value < 0) value = 0;\n    this.#waterAmount = value;\n  }\n}\n\nlet machine = new CoffeeMachine();\n\nmachine.waterAmount = 100;\nalert(machine.#waterAmount); // Error",
            "explanation": "Example demonstrating private \"#waterlimit\"."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "In terms of OOP, delimiting of the internal interface from the external one is called encapsulation).",
          "It gives the following benefits:",
          "Protection for users, so that they don't shoot themselves in the foot",
          ": Imagine, there's a team of developers using a coffee machine. It was made by the \"Best CoffeeMachine\" company, and works fine, but a protective cover was removed. So the internal interface is exposed.",
          "All developers are civilized -- they use the coffee machine as intended. But one of them, John, decided that he's the smartest one, and made some tweaks in the coffee machine internals. So the coffee machine failed two days later."
        ],
        "bulletPoints": [
          "Protected fields start with `_`. That's a well-known convention, not enforced at the language level. Programmers should only access a field starting with `_` from its class and classes inheriting from it.",
          "Private fields start with `#`. JavaScript makes sure we can only access those from inside the class."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Private Protected Properties Methods",
        "description": "Apply your understanding of Private Protected Properties Methods. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Private Protected Properties Methods\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Private Protected Properties Methods\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Private Protected Properties Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for private protected properties methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Private Protected Properties Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Private Protected Properties Methods?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Private Protected Properties Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying private protected properties methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "private-protected-properties-methods"
    ],
    "slug": "private-protected-properties-methods"
  },
  {
    "title": "Extend Natives",
    "description": "Built-in classes like Array, Map and others are extendable also.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Built-in classes like Array, Map and others are extendable also.",
          "For instance, here `PowerArray` inherits from the native `Array`:",
          "Please note a very interesting thing. Built-in methods like `filter`, `map` and others -- return new objects of exactly the inherited type `PowerArray`. Their internal implementation uses the object's `constructor` property for that.",
          "In the example above,",
          "When `arr.filter()` is called, it internally creates the new array of results using exactly `arr.constructor`, not basic `Array`. That's actually very cool, because we can keep using `PowerArray` methods further on the result."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "// add one more method to it (can do more)\nclass PowerArray extends Array {\n  isEmpty() {\n    return this.length === 0;\n  }\n}\n\nlet arr = new PowerArray(1, 2, 5, 10, 50);\nalert(arr.isEmpty()); // false\n\nlet filteredArr = arr.filter(item => item >= 10);\nalert(filteredArr); // 10, 50\nalert(filteredArr.isEmpty()); // false",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "arr.constructor === PowerArray",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "No static inheritance in built-ins",
        "paragraphs": [
          "Built-in objects have their own static methods, for instance `Object.keys`, `Array.isArray` etc.",
          "As we already know, native classes extend each other. For instance, `Array` extends `Object`.",
          "Normally, when one class extends another, both static and non-static methods are inherited. That was thoroughly explained in the article [](info:static-properties-methods#statics-and-inheritance).",
          "But built-in classes are an exception. They don't inherit statics from each other.",
          "For example, both `Array` and `Date` inherit from `Object`, so their instances have methods from `Object.prototype`. But `Array.[[Prototype]]` does not reference `Object`, so there's no, for instance, `Array.keys()` (or `Date.keys()`) static method."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Extend Natives",
        "description": "Apply your understanding of Extend Natives. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Extend Natives\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Extend Natives\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Extend Natives in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for extend natives.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Extend Natives is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Extend Natives?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Extend Natives is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying extend natives.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "extend-natives"
    ],
    "slug": "extend-natives"
  },
  {
    "title": "Instanceof",
    "description": "The `instanceof` operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The `instanceof` operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.",
          "Such a check may be necessary in many cases. For example, it can be used for building a *polymorphic* function, the one that treats arguments differently depending on their type."
        ]
      },
      {
        "heading": "The instanceof operator [#ref-instanceof]",
        "paragraphs": [
          "The syntax is:",
          "It returns `true` if `obj` belongs to the `Class` or a class inheriting from it.",
          "For instance:",
          "It also works with constructor functions:",
          "...And with built-in classes like `Array`:"
        ],
        "codeExamples": [
          {
            "title": "The instanceof operator [#ref-instanceof]",
            "code": "obj instanceof Class",
            "explanation": "Example demonstrating the instanceof operator [#ref-instanceof]."
          },
          {
            "title": "The instanceof operator [#ref-instanceof]",
            "code": "class Rabbit {}\nlet rabbit = new Rabbit();\n\n// is it an object of Rabbit class?\n*!*\nalert( rabbit instanceof Rabbit ); // true\n*/!*",
            "explanation": "Example demonstrating the instanceof operator [#ref-instanceof]."
          }
        ]
      },
      {
        "heading": "Bonus: Object.prototype.toString for the type",
        "paragraphs": [
          "We already know that plain objects are converted to string as `[object Object]`:",
          "That's their implementation of `toString`. But there's a hidden feature that makes `toString` actually much more powerful than that. We can use it as an extended `typeof` and an alternative for `instanceof`.",
          "Sounds strange? Indeed. Let's demystify.",
          "By specification, the built-in `toString` can be extracted from the object and executed in the context of any other value. And its result depends on that value.",
          "Let's demonstrate:"
        ],
        "codeExamples": [
          {
            "title": "Bonus: Object.prototype.toString for the type",
            "code": "let obj = {};\n\nalert(obj); // [object Object]\nalert(obj.toString()); // the same",
            "explanation": "Example demonstrating bonus: object.prototype.tostring for the type."
          },
          {
            "title": "Bonus: Object.prototype.toString for the type",
            "code": "// copy toString method into a variable for convenience\nlet objectToString = Object.prototype.toString;\n\n// what type is this?\nlet arr = [];\n\nalert( objectToString.call(arr) ); // [object *!*Array*/!*]",
            "explanation": "Example demonstrating bonus: object.prototype.tostring for the type."
          }
        ],
        "bulletPoints": [
          "For a number, it will be `[object Number]`",
          "For a boolean, it will be `[object Boolean]`",
          "For `null`: `[object Null]`",
          "For `undefined`: `[object Undefined]`",
          "For arrays: `[object Array]`"
        ]
      },
      {
        "heading": "Symbol.toStringTag",
        "paragraphs": [
          "The behavior of Object `toString` can be customized using a special object property `Symbol.toStringTag`.",
          "For instance:",
          "For most environment-specific objects, there is such a property. Here are some browser specific examples:",
          "As you can see, the result is exactly `Symbol.toStringTag` (if exists), wrapped into `[object ...]`.",
          "At the end we have \"typeof on steroids\" that not only works for primitive data types, but also for built-in objects and even can be customized."
        ],
        "codeExamples": [
          {
            "title": "Symbol.toStringTag",
            "code": "let user = {\n  [Symbol.toStringTag]: \"User\"\n};\n\nalert( {}.toString.call(user) ); // [object User]",
            "explanation": "Example demonstrating symbol.tostringtag."
          },
          {
            "title": "Symbol.toStringTag",
            "code": "// toStringTag for the environment-specific object and class:\nalert( window[Symbol.toStringTag]); // Window\nalert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest\n\nalert( {}.toString.call(window) ); // [object Window]\nalert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]",
            "explanation": "Example demonstrating symbol.tostringtag."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Let's summarize the type-checking methods that we know:",
          "| | works for | returns |",
          "|---------------|-------------|---------------|",
          "| `typeof` | primitives | string |",
          "| `{}.toString` | primitives, built-in objects, objects with `Symbol.toStringTag` | string |"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Strange instanceof",
        "description": "In the code below, why does `instanceof` return `true`? We can easily see that `a` is not created by `B()`. ```js run function A() {} function B() {} A.prototype = B.prototype = {}; let a = new A(); *!* alert( a instanceof B ); // true */!* ```",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Instanceof in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for instanceof.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Instanceof is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Instanceof?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Instanceof is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying instanceof.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "instanceof"
    ],
    "slug": "instanceof"
  },
  {
    "title": "Mixins",
    "description": "In JavaScript we can only inherit from a single object. There can be only one `[[Prototype]]` for an object. And a class may extend only one other class.",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In JavaScript we can only inherit from a single object. There can be only one `[[Prototype]]` for an object. And a class may extend only one other class.",
          "But sometimes that feels limiting. For instance, we have a class `StreetSweeper` and a class `Bicycle`, and want to make their mix: a `StreetSweepingBicycle`.",
          "Or we have a class `User` and a class `EventEmitter` that implements event generation, and we'd like to add the functionality of `EventEmitter` to `User`, so that our users can emit events.",
          "There's a concept that can help here, called \"mixins\".",
          "As defined in Wikipedia, a mixin is a class containing methods that can be used by other classes without a need to inherit from it."
        ]
      },
      {
        "heading": "A mixin example",
        "paragraphs": [
          "The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class.",
          "For instance here the mixin `sayHiMixin` is used to add some \"speech\" for `User`:",
          "There's no inheritance, but a simple method copying. So `User` may inherit from another class and also include the mixin to \"mix-in\" the additional methods, like this:",
          "Mixins can make use of inheritance inside themselves.",
          "For instance, here `sayHiMixin` inherits from `sayMixin`:"
        ],
        "codeExamples": [
          {
            "title": "A mixin example",
            "code": "*!*\n// mixin\n*/!*\nlet sayHiMixin = {\n  sayHi() {\n    alert(`Hello ${this.name}`);\n  },\n  sayBye() {\n    alert(`Bye ${this.name}`);\n  }\n};\n\n*!*\n// usage:\n*/!*\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// copy the methods\nObject.assign(User.prototype, sayHiMixin);\n\n// now User can say hi\nnew User(\"Dude\").sayHi(); // Hello Dude!",
            "explanation": "Example demonstrating a mixin example."
          },
          {
            "title": "A mixin example",
            "code": "class User extends Person {\n  // ...\n}\n\nObject.assign(User.prototype, sayHiMixin);",
            "explanation": "Example demonstrating a mixin example."
          }
        ]
      },
      {
        "heading": "EventMixin",
        "paragraphs": [
          "Now let's make a mixin for real life.",
          "An important feature of many browser objects (for instance) is that they can generate events. Events are a great way to \"broadcast information\" to anyone who wants it. So let's make a mixin that allows us to easily add event-related functions to any class/object.",
          "After adding the mixin, an object `user` will be able to generate an event `\"login\"` when the visitor logs in. And another object, say, `calendar` may want to listen for such events to load the calendar for the logged-in person.",
          "Or, a `menu` can generate the event `\"select\"` when a menu item is selected, and other objects may assign handlers to react on that event. And so on.",
          "Here's the code:"
        ],
        "codeExamples": [
          {
            "title": "EventMixin",
            "code": "let eventMixin = {\n  /**\n   * Subscribe to event, usage:\n   *  menu.on('select', function(item) { ... }\n  */\n  on(eventName, handler) {\n    if (!this._eventHandlers) this._eventHandlers = {};\n    if (!this._eventHandlers[eventName]) {\n      this._eventHandlers[eventName] = [];\n    }\n    this._eventHandlers[eventName].push(handler);\n  },\n\n  /**\n   * Cancel the subscription, usage:\n   *  menu.off('select', handler)\n   */\n  off(eventName, handler) {\n    let handlers = this._eventHandlers?.[eventName];\n    if (!handlers) return;\n    for (let i = 0; i < handlers.length; i++) {\n      if (handlers[i] === handler) {\n        handlers.splice(i--, 1);\n      }\n    }\n  },\n\n  /**\n   * Generate an event with the given name and data\n   *  this.trigger('select', data1, data2);\n   */\n  trigger(eventName, ...args) {\n    if (!this._eventHandlers?.[eventName]) {\n      return; // no handlers for that event name\n    }\n\n    // call the handlers\n    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));\n  }\n};",
            "explanation": "Example demonstrating eventmixin."
          },
          {
            "title": "EventMixin",
            "code": "// Make a class\nclass Menu {\n  choose(value) {\n    this.trigger(\"select\", value);\n  }\n}\n// Add the mixin with event-related methods\nObject.assign(Menu.prototype, eventMixin);\n\nlet menu = new Menu();\n\n// add a handler, to be called on selection:\n*!*\nmenu.on(\"select\", value => alert(`Value selected: ${value}`));\n*/!*\n\n// triggers the event => the handler above runs and shows:\n// Value selected: 123\nmenu.choose(\"123\");",
            "explanation": "Example demonstrating eventmixin."
          }
        ],
        "bulletPoints": [
          "The mixin will provide a method `.trigger(name, [...data])` to \"generate an event\" when something important happens to it. The `name` argument is a name of the event, optionally followed by additional arguments with event data.",
          "Also the method `.on(name, handler)` that adds `handler` function as the listener to events with the given name. It will be called when an event with the given `name` triggers, and get the arguments from the `.trigger` call.",
          "...And the method `.off(name, handler)` that removes the `handler` listener.",
          "`.on(eventName, handler)` -- assigns function `handler` to run when the event with that name occurs. Technically, there's an `_eventHandlers` property that stores an array of handlers for each event name, and it just adds it to the list.",
          "`.off(eventName, handler)` -- removes the function from the handlers list."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "*Mixin* -- is a generic object-oriented programming term: a class that contains methods for other classes.",
          "Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods into prototype.",
          "We can use mixins as a way to augment a class by adding multiple behaviors, like event-handling as we have seen above.",
          "Mixins may become a point of conflict if they accidentally overwrite existing class methods. So generally one should think well about the naming methods of a mixin, to minimize the probability of that happening."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Mixins",
        "description": "Apply your understanding of Mixins. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Mixins\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Mixins\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Mixins in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for mixins.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Mixins is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Mixins?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Mixins is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying mixins.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "mixins"
    ],
    "slug": "mixins"
  },
  {
    "title": "Try Catch",
    "description": "No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and fo...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.",
          "Usually, a script \"dies\" (immediately stops) in case of an error, printing it to console.",
          "But there's a syntax construct `try...catch` that allows us to \"catch\" errors so the script can, instead of dying, do something more reasonable."
        ]
      },
      {
        "heading": "The \"try...catch\" syntax",
        "paragraphs": [
          "The `try...catch` construct has two main blocks: `try`, and then `catch`:",
          "It works like this:",
          "1. First, the code in `try {...}` is executed.",
          "2. If there were no errors, then `catch (err)` is ignored: the execution reaches the end of `try` and goes on, skipping `catch`.",
          "3. If an error occurs, then the `try` execution is stopped, and control flows to the beginning of `catch (err)`. The `err` variable (we can use any name for it) will contain an error object with details about what happened."
        ],
        "codeExamples": [
          {
            "title": "The \"try...catch\" syntax",
            "code": "try {\n\n  // code...\n\n} catch (err) {\n\n  // error handling\n\n}",
            "explanation": "Example demonstrating the \"try...catch\" syntax."
          },
          {
            "title": "The \"try...catch\" syntax",
            "code": "For `try...catch` to work, the code must be runnable. In other words, it should be valid JavaScript.\n\nIt won't work if the code is syntactically wrong, for instance it has unmatched curly braces:",
            "explanation": "Example demonstrating the \"try...catch\" syntax."
          }
        ],
        "bulletPoints": [
          "An errorless example: shows `alert` `(1)` and `(2)`:",
          "An example with an error: shows `(1)` and `(3)`:"
        ]
      },
      {
        "heading": "Error object",
        "paragraphs": [
          "When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to `catch`:",
          "For all built-in errors, the error object has two main properties:",
          "`name`",
          ": Error name. For instance, for an undefined variable that's `\"ReferenceError\"`.",
          "`message`"
        ],
        "codeExamples": [
          {
            "title": "Error object",
            "code": "try {\n  // ...\n} catch (err) { // <-- the \"error object\", could use another word instead of err\n  // ...\n}",
            "explanation": "Example demonstrating error object."
          },
          {
            "title": "Error object",
            "code": "try {\n*!*\n  lalala; // error, variable is not defined!\n*/!*\n} catch (err) {\n  alert(err.name); // ReferenceError\n  alert(err.message); // lalala is not defined\n  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)\n\n  // Can also show an error as a whole\n  // The error is converted to string as \"name: message\"\n  alert(err); // ReferenceError: lalala is not defined\n}",
            "explanation": "Example demonstrating error object."
          }
        ]
      },
      {
        "heading": "Optional \"catch\" binding",
        "paragraphs": [
          "[recent browser=new]",
          "If we don't need error details, `catch` may omit it:"
        ],
        "codeExamples": [
          {
            "title": "Optional \"catch\" binding",
            "code": "try {\n  // ...\n} catch { // <-- without (err)\n  // ...\n}",
            "explanation": "Example demonstrating optional \"catch\" binding."
          }
        ]
      },
      {
        "heading": "Using \"try...catch\"",
        "paragraphs": [
          "Let's explore a real-life use case of `try...catch`.",
          "As we already know, JavaScript supports the JSON.parse(str) method to read JSON-encoded values.",
          "Usually it's used to decode data received over the network, from the server or another source.",
          "We receive it and call `JSON.parse` like this:",
          "You can find more detailed information about JSON in the chapter."
        ],
        "codeExamples": [
          {
            "title": "Using \"try...catch\"",
            "code": "let json = '{\"name\":\"John\", \"age\": 30}'; // data from the server\n\n*!*\nlet user = JSON.parse(json); // convert the text representation to JS object\n*/!*\n\n// now user is an object with properties from the string\nalert( user.name ); // John\nalert( user.age );  // 30",
            "explanation": "Example demonstrating using \"try...catch\"."
          },
          {
            "title": "Using \"try...catch\"",
            "code": "let json = \"{ bad json }\";\n\ntry {\n\n*!*\n  let user = JSON.parse(json); // <-- when an error occurs...\n*/!*\n  alert( user.name ); // doesn't work\n\n} catch (err) {\n*!*\n  // ...the execution jumps here\n  alert( \"Our apologies, the data has errors, we'll try to request it one more time.\" );\n  alert( err.name );\n  alert( err.message );\n*/!*\n}",
            "explanation": "Example demonstrating using \"try...catch\"."
          }
        ]
      },
      {
        "heading": "Throwing our own errors",
        "paragraphs": [
          "What if `json` is syntactically correct, but doesn't have a required `name` property?",
          "Like this:",
          "Here `JSON.parse` runs normally, but the absence of `name` is actually an error for us.",
          "To unify error handling, we'll use the `throw` operator."
        ],
        "codeExamples": [
          {
            "title": "Throwing our own errors",
            "code": "let json = '{ \"age\": 30 }'; // incomplete data\n\ntry {\n\n  let user = JSON.parse(json); // <-- no errors\n*!*\n  alert( user.name ); // no name!\n*/!*\n\n} catch (err) {\n  alert( \"doesn't execute\" );\n}",
            "explanation": "Example demonstrating throwing our own errors."
          }
        ]
      },
      {
        "heading": "\"Throw\" operator",
        "paragraphs": [
          "The `throw` operator generates an error.",
          "The syntax is:",
          "Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it's better to use objects, preferably with `name` and `message` properties (to stay somewhat compatible with built-in errors).",
          "JavaScript has many built-in constructors for standard errors: `Error`, `SyntaxError`, `ReferenceError`, `TypeError` and others. We can use them to create error objects as well.",
          "Their syntax is:"
        ],
        "codeExamples": [
          {
            "title": "\"Throw\" operator",
            "code": "throw <error object>",
            "explanation": "Example demonstrating \"throw\" operator."
          },
          {
            "title": "\"Throw\" operator",
            "code": "let error = new Error(message);\n// or\nlet error = new SyntaxError(message);\nlet error = new ReferenceError(message);\n// ...",
            "explanation": "Example demonstrating \"throw\" operator."
          }
        ]
      },
      {
        "heading": "Rethrowing",
        "paragraphs": [
          "In the example above we use `try...catch` to handle incorrect data. But is it possible that *another unexpected error* occurs within the `try {...}` block? Like a programming error (variable is not defined) or something else, not just this \"incorrect data\" thing.",
          "For example:",
          "Of course, everything's possible! Programmers do make mistakes. Even in open-source utilities used by millions for decades -- suddenly a bug may be discovered that leads to terrible hacks.",
          "In our case, `try...catch` is placed to catch \"incorrect data\" errors. But by its nature, `catch` gets *all* errors from `try`. Here it gets an unexpected error, but still shows the same `\"JSON Error\"` message. That's wrong and also makes the code more difficult to debug.",
          "To avoid such problems, we can employ the \"rethrowing\" technique. The rule is simple:"
        ],
        "codeExamples": [
          {
            "title": "Rethrowing",
            "code": "let json = '{ \"age\": 30 }'; // incomplete data\n\ntry {\n  user = JSON.parse(json); // <-- forgot to put \"let\" before user\n\n  // ...\n} catch (err) {\n  alert(\"JSON Error: \" + err); // JSON Error: ReferenceError: user is not defined\n  // (no JSON Error actually)\n}",
            "explanation": "Example demonstrating rethrowing."
          },
          {
            "title": "Rethrowing",
            "code": "try {\n  user = { /*...*/ };\n} catch (err) {\n*!*\n  if (err instanceof ReferenceError) {\n*/!*\n    alert('ReferenceError'); // \"ReferenceError\" for accessing an undefined variable\n  }\n}",
            "explanation": "Example demonstrating rethrowing."
          }
        ]
      },
      {
        "heading": "try...catch...finally",
        "paragraphs": [
          "Wait, that's not all.",
          "The `try...catch` construct may have one more code clause: `finally`.",
          "If it exists, it runs in all cases:",
          "The extended syntax looks like this:",
          "Try running this code:"
        ],
        "codeExamples": [
          {
            "title": "try...catch...finally",
            "code": "*!*try*/!* {\n   ... try to execute the code ...\n} *!*catch*/!* (err) {\n   ... handle errors ...\n} *!*finally*/!* {\n   ... execute always ...\n}",
            "explanation": "Example demonstrating try...catch...finally."
          },
          {
            "title": "try...catch...finally",
            "code": "try {\n  alert( 'try' );\n  if (confirm('Make an error?')) BAD_CODE();\n} catch (err) {\n  alert( 'catch' );\n} finally {\n  alert( 'finally' );\n}",
            "explanation": "Example demonstrating try...catch...finally."
          }
        ],
        "bulletPoints": [
          "after `try`, if there were no errors,",
          "after `catch`, if there were errors."
        ]
      },
      {
        "heading": "Global catch",
        "paragraphs": [
          "Let's imagine we've got a fatal error outside of `try...catch`, and the script died. Like a programming error or some other terrible thing.",
          "Is there a way to react on such occurrences? We may want to log the error, show something to the user (normally they don't see error messages), etc.",
          "There is none in the specification, but environments usually provide it, because it's really useful. For instance, Node.js has `process.on(\"uncaughtException\")` for that. And in the browser we can assign a function to the special window.onerror property, that will run in case of an uncaught error.",
          "The syntax:",
          "`message`"
        ],
        "codeExamples": [
          {
            "title": "Global catch",
            "code": "The information from this section is not a part of the core JavaScript.",
            "explanation": "Example demonstrating global catch."
          },
          {
            "title": "Global catch",
            "code": "window.onerror = function(message, url, line, col, error) {\n  // ...\n};",
            "explanation": "Example demonstrating global catch."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The `try...catch` construct allows to handle runtime errors. It literally allows to \"try\" running the code and \"catch\" errors that may occur in it.",
          "The syntax is:",
          "There may be no `catch` section or no `finally`, so shorter constructs `try...catch` and `try...finally` are also valid.",
          "Error objects have following properties:",
          "If an error object is not needed, we can omit it by using `catch {` instead of `catch (err) {`."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "try {\n  // run this code\n} catch (err) {\n  // if an error happened, then jump here\n  // err is the error object\n} finally {\n  // do in any case after try/catch\n}",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "`message` -- the human-readable error message.",
          "`name` -- the string with error name (error constructor name).",
          "`stack` (non-standard, but well-supported) -- the stack at the moment of error creation."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Finally or just the code?",
        "description": "Compare the two code fragments. 1. The first one uses `finally` to execute the code after `try...catch`: ```js try { work work } catch (err) { handle errors } finally { *!* cleanup the working space */!* } ``` 2. The second fragment puts the cleaning right after `try...catch`: ```js try { work work ",
        "starterCode": "try {\n      work work\n    } catch (err) {\n      handle errors\n    } finally {\n    *!*\n      cleanup the working space\n    */!*\n    }",
        "solution": "...Or when there's a `throw`, like here:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Try Catch in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for try catch.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Try Catch is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Try Catch?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Try Catch is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying try catch.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "try-catch"
    ],
    "slug": "try-catch"
  },
  {
    "title": "Custom Errors",
    "description": "When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks. For errors in network operations we may need `HttpError`, ...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks. For errors in network operations we may need `HttpError`, for database operations `DbError`, for searching operations `NotFoundError` and so on.",
          "Our errors should support basic error properties like `message`, `name` and, preferably, `stack`. But they also may have other properties of their own, e.g. `HttpError` objects may have a `statusCode` property with a value like `404` or `403` or `500`.",
          "JavaScript allows to use `throw` with any argument, so technically our custom error classes don't need to inherit from `Error`. But if we inherit, then it becomes possible to use `obj instanceof Error` to identify error objects. So it's better to inherit from it.",
          "As the application grows, our own errors naturally form a hierarchy. For instance, `HttpTimeoutError` may inherit from `HttpError`, and so on."
        ]
      },
      {
        "heading": "Extending Error",
        "paragraphs": [
          "As an example, let's consider a function `readUser(json)` that should read JSON with user data.",
          "Here's an example of how a valid `json` may look:",
          "Internally, we'll use `JSON.parse`. If it receives malformed `json`, then it throws `SyntaxError`. But even if `json` is syntactically correct, that doesn't mean that it's a valid user, right? It may miss the necessary data. For instance, it may not have `name` and `age` properties that are essential for our users.",
          "Our function `readUser(json)` will not only read JSON, but check (\"validate\") the data. If there are no required fields, or the format is wrong, then that's an error. And that's not a `SyntaxError`, because the data is syntactically correct, but another kind of error. We'll call it `ValidationError` and create a class for it. An error of that kind should also carry the information about the offending field.",
          "Our `ValidationError` class should inherit from the `Error` class."
        ],
        "codeExamples": [
          {
            "title": "Extending Error",
            "code": "let json = `{ \"name\": \"John\", \"age\": 30 }`;",
            "explanation": "Example demonstrating extending error."
          },
          {
            "title": "Extending Error",
            "code": "// The \"pseudocode\" for the built-in Error class defined by JavaScript itself\nclass Error {\n  constructor(message) {\n    this.message = message;\n    this.name = \"Error\"; // (different names for different built-in error classes)\n    this.stack = <call stack>; // non-standard, but most environments support it\n  }\n}",
            "explanation": "Example demonstrating extending error."
          }
        ]
      },
      {
        "heading": "Further inheritance",
        "paragraphs": [
          "The `ValidationError` class is very generic. Many things may go wrong. The property may be absent or it may be in a wrong format (like a string value for `age` instead of a number). Let's make a more concrete class `PropertyRequiredError`, exactly for absent properties. It will carry additional information about the property that's missing.",
          "The new class `PropertyRequiredError` is easy to use: we only need to pass the property name: `new PropertyRequiredError(property)`. The human-readable `message` is generated by the constructor.",
          "Please note that `this.name` in `PropertyRequiredError` constructor is again assigned manually. That may become a bit tedious -- to assign `this.name = ` in every custom error class. We can avoid it by making our own \"basic error\" class that assigns `this.name = this.constructor.name`. And then inherit all our custom errors from it.",
          "Let's call it `MyError`.",
          "Here's the code with `MyError` and other custom error classes, simplified:"
        ],
        "codeExamples": [
          {
            "title": "Further inheritance",
            "code": "class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = \"ValidationError\";\n  }\n}\n\n*!*\nclass PropertyRequiredError extends ValidationError {\n  constructor(property) {\n    super(\"No property: \" + property);\n    this.name = \"PropertyRequiredError\";\n    this.property = property;\n  }\n}\n*/!*\n\n// Usage\nfunction readUser(json) {\n  let user = JSON.parse(json);\n\n  if (!user.age) {\n    throw new PropertyRequiredError(\"age\");\n  }\n  if (!user.name) {\n    throw new PropertyRequiredError(\"name\");\n  }\n\n  return user;\n}\n\n// Working example with try..catch\n\ntry {\n  let user = readUser('{ \"age\": 25 }');\n} catch (err) {\n  if (err instanceof ValidationError) {\n*!*\n    alert(\"Invalid data: \" + err.message); // Invalid data: No property: name\n    alert(err.name); // PropertyRequiredError\n    alert(err.property); // name\n*/!*\n  } else if (err instanceof SyntaxError) {\n    alert(\"JSON Syntax Error: \" + err.message);\n  } else {\n    throw err; // unknown error, rethrow it\n  }\n}",
            "explanation": "Example demonstrating further inheritance."
          },
          {
            "title": "Further inheritance",
            "code": "class MyError extends Error {\n  constructor(message) {\n    super(message);\n*!*\n    this.name = this.constructor.name;\n*/!*\n  }\n}\n\nclass ValidationError extends MyError { }\n\nclass PropertyRequiredError extends ValidationError {\n  constructor(property) {\n    super(\"No property: \" + property);\n    this.property = property;\n  }\n}\n\n// name is correct\nalert( new PropertyRequiredError(\"field\").name ); // PropertyRequiredError",
            "explanation": "Example demonstrating further inheritance."
          }
        ]
      },
      {
        "heading": "Wrapping exceptions",
        "paragraphs": [
          "The purpose of the function `readUser` in the code above is \"to read the user data\". There may occur different kinds of errors in the process. Right now we have `SyntaxError` and `ValidationError`, but in the future `readUser` function may grow and probably generate other kinds of errors.",
          "The code which calls `readUser` should handle these errors. Right now it uses multiple `if`s in the `catch` block, that check the class and handle known errors and rethrow the unknown ones.",
          "The scheme is like this:",
          "In the code above we can see two types of errors, but there can be more.",
          "If the `readUser` function generates several kinds of errors, then we should ask ourselves: do we really want to check for all error types one-by-one every time?"
        ],
        "codeExamples": [
          {
            "title": "Wrapping exceptions",
            "code": "try {\n  ...\n  readUser()  // the potential error source\n  ...\n} catch (err) {\n  if (err instanceof ValidationError) {\n    // handle validation errors\n  } else if (err instanceof SyntaxError) {\n    // handle syntax errors\n  } else {\n    throw err; // unknown error, rethrow it\n  }\n}",
            "explanation": "Example demonstrating wrapping exceptions."
          },
          {
            "title": "Wrapping exceptions",
            "code": "class ReadError extends Error {\n  constructor(message, cause) {\n    super(message);\n    this.cause = cause;\n    this.name = 'ReadError';\n  }\n}\n\nclass ValidationError extends Error { /*...*/ }\nclass PropertyRequiredError extends ValidationError { /* ... */ }\n\nfunction validateUser(user) {\n  if (!user.age) {\n    throw new PropertyRequiredError(\"age\");\n  }\n\n  if (!user.name) {\n    throw new PropertyRequiredError(\"name\");\n  }\n}\n\nfunction readUser(json) {\n  let user;\n\n  try {\n    user = JSON.parse(json);\n  } catch (err) {\n*!*\n    if (err instanceof SyntaxError) {\n      throw new ReadError(\"Syntax Error\", err);\n    } else {\n      throw err;\n    }\n*/!*\n  }\n\n  try {\n    validateUser(user);\n  } catch (err) {\n*!*\n    if (err instanceof ValidationError) {\n      throw new ReadError(\"Validation Error\", err);\n    } else {\n      throw err;\n    }\n*/!*\n  }\n\n}\n\ntry {\n  readUser('{bad json}');\n} catch (e) {\n  if (e instanceof ReadError) {\n*!*\n    alert(e);\n    // Original error: SyntaxError: Unexpected token b in JSON at position 1\n    alert(\"Original error: \" + e.cause);\n*/!*\n  } else {\n    throw e;\n  }\n}",
            "explanation": "Example demonstrating wrapping exceptions."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "We can inherit from `Error` and other built-in error classes normally. We just need to take care of the `name` property and don't forget to call `super`.",
          "We can use `instanceof` to check for particular errors. It also works with inheritance. But sometimes we have an error object coming from a 3rd-party library and there's no easy way to get its class. Then `name` property can be used for such checks.",
          "Wrapping exceptions is a widespread technique: a function handles low-level exceptions and creates higher-level errors instead of various low-level ones. Low-level exceptions sometimes become properties of that object like `err.cause` in the examples above, but that's not strictly required."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Inherit from SyntaxError",
        "description": "Create a class `FormatError` that inherits from the built-in `SyntaxError` class. It should support `message`, `name` and `stack` properties. Usage example: ```js let err = new FormatError(\"formatting error\"); alert( err.message ); // formatting error alert( err.name ); // FormatError alert( err.sta",
        "starterCode": "let err = new FormatError(\"formatting error\");\n\nalert( err.message ); // formatting error\nalert( err.name ); // FormatError\nalert( err.stack ); // stack\n\nalert( err instanceof FormatError ); // true\nalert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)",
        "solution": "let err = new FormatError(\"formatting error\");\n\nalert( err.message ); // formatting error\nalert( err.name ); // FormatError\nalert( err.stack ); // stack\n\nalert( err instanceof FormatError ); // true\nalert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Custom Errors in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for custom errors.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Custom Errors is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Custom Errors?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Custom Errors is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying custom errors.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "custom-errors"
    ],
    "slug": "custom-errors"
  },
  {
    "title": "Callbacks",
    "description": "Many functions are provided by JavaScript host environments that allow you to schedule *asynchronous* actions. In other words, actions that we initiate now, but they finish later.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Many functions are provided by JavaScript host environments that allow you to schedule *asynchronous* actions. In other words, actions that we initiate now, but they finish later.",
          "For instance, one such function is the `setTimeout` function.",
          "There are other real-world examples of asynchronous actions, e.g. loading scripts and modules (we'll cover them in later chapters).",
          "Take a look at the function `loadScript(src)`, that loads a script with the given `src`:",
          "It inserts into the document a new, dynamically created, tag `` with the given `src`. The browser automatically starts loading it and executes when complete."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "To demonstrate the use of callbacks, promises and other abstract concepts, we'll be using some browser methods: specifically, loading scripts and performing simple document manipulations.\n\nIf you're not familiar with these methods, and their usage in the examples is confusing, you may want to read a few chapters from the [next part](/document) of the tutorial.\n\nAlthough, we'll try to make things clear anyway. There won't be anything really complex browser-wise.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "function loadScript(src) {\n  // creates a <script> tag and append it to the page\n  // this causes the script with given src to start loading and run when complete\n  let script = document.createElement('script');\n  script.src = src;\n  document.head.append(script);\n}",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Callback in callback",
        "paragraphs": [
          "How can we load two scripts sequentially: the first one, and then the second one after it?",
          "The natural solution would be to put the second `loadScript` call inside the callback, like this:",
          "After the outer `loadScript` is complete, the callback initiates the inner one.",
          "What if we want one more script...?",
          "So, every new action is inside a callback. That's fine for few actions, but not good for many, so we'll see other variants soon."
        ],
        "codeExamples": [
          {
            "title": "Callback in callback",
            "code": "loadScript('/my/script.js', function(script) {\n\n  alert(`Cool, the ${script.src} is loaded, let's load one more`);\n\n*!*\n  loadScript('/my/script2.js', function(script) {\n    alert(`Cool, the second script is loaded`);\n  });\n*/!*\n\n});",
            "explanation": "Example demonstrating callback in callback."
          },
          {
            "title": "Callback in callback",
            "code": "loadScript('/my/script.js', function(script) {\n\n  loadScript('/my/script2.js', function(script) {\n\n*!*\n    loadScript('/my/script3.js', function(script) {\n      // ...continue after all scripts are loaded\n    });\n*/!*\n\n  });\n\n});",
            "explanation": "Example demonstrating callback in callback."
          }
        ]
      },
      {
        "heading": "Handling errors",
        "paragraphs": [
          "In the above examples we didn't consider errors. What if the script loading fails? Our callback should be able to react on that.",
          "Here's an improved version of `loadScript` that tracks loading errors:",
          "It calls `callback(null, script)` for successful load and `callback(error)` otherwise.",
          "The usage:",
          "Once again, the recipe that we used for `loadScript` is actually quite common. It's called the \"error-first callback\" style."
        ],
        "codeExamples": [
          {
            "title": "Handling errors",
            "code": "function loadScript(src, callback) {\n  let script = document.createElement('script');\n  script.src = src;\n\n*!*\n  script.onload = () => callback(null, script);\n  script.onerror = () => callback(new Error(`Script load error for ${src}`));\n*/!*\n\n  document.head.append(script);\n}",
            "explanation": "Example demonstrating handling errors."
          },
          {
            "title": "Handling errors",
            "code": "loadScript('/my/script.js', function(error, script) {\n  if (error) {\n    // handle error\n  } else {\n    // script loaded successfully\n  }\n});",
            "explanation": "Example demonstrating handling errors."
          }
        ]
      },
      {
        "heading": "Pyramid of Doom",
        "paragraphs": [
          "At first glance, it looks like a viable approach to asynchronous coding. And indeed it is. For one or maybe two nested calls it looks fine.",
          "But for multiple asynchronous actions that follow one after another, we'll have code like this:",
          "In the code above:",
          "1. We load `1.js`, then if there's no error...",
          "2. We load `2.js`, then if there's no error..."
        ],
        "codeExamples": [
          {
            "title": "Pyramid of Doom",
            "code": "loadScript('1.js', function(error, script) {\n\n  if (error) {\n    handleError(error);\n  } else {\n    // ...\n    loadScript('2.js', function(error, script) {\n      if (error) {\n        handleError(error);\n      } else {\n        // ...\n        loadScript('3.js', function(error, script) {\n          if (error) {\n            handleError(error);\n          } else {\n  *!*\n            // ...continue after all scripts are loaded (*)\n  */!*\n          }\n        });\n\n      }\n    });\n  }\n});",
            "explanation": "Example demonstrating pyramid of doom."
          },
          {
            "title": "Pyramid of Doom",
            "code": "loadScript('1.js', step1);\n\nfunction step1(error, script) {\n  if (error) {\n    handleError(error);\n  } else {\n    // ...\n    loadScript('2.js', step2);\n  }\n}\n\nfunction step2(error, script) {\n  if (error) {\n    handleError(error);\n  } else {\n    // ...\n    loadScript('3.js', step3);\n  }\n}\n\nfunction step3(error, script) {\n  if (error) {\n    handleError(error);\n  } else {\n    // ...continue after all scripts are loaded (*)\n  }\n}",
            "explanation": "Example demonstrating pyramid of doom."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Callbacks",
        "description": "Apply your understanding of Callbacks. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Callbacks\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Callbacks\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Callbacks in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for callbacks.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Callbacks is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Callbacks?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Callbacks is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying callbacks.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "callbacks"
    ],
    "slug": "callbacks"
  },
  {
    "title": "Promise Basics",
    "description": "Imagine that you're a top singer, and fans ask day and night for your upcoming song.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Imagine that you're a top singer, and fans ask day and night for your upcoming song.",
          "To get some relief, you promise to send it to them when it's published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can't publish the song, they will still be notified.",
          "Everyone is happy: you, because the people don't crowd you anymore, and fans, because they won't miss the song.",
          "This is a real-life analogy for things we often have in programming:",
          "1. A \"producing code\" that does something and takes time. For instance, some code that loads the data over a network. That's a \"singer\"."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let promise = new Promise(function(resolve, reject) {\n  // executor (the producing code, \"singer\")\n});",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let promise = new Promise(function(resolve, reject) {\n  // the function is executed automatically when the promise is constructed\n\n  // after 1 second signal that the job is done with the result \"done\"\n  setTimeout(() => *!*resolve(\"done\")*/!*, 1000);\n});",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "`resolve(value)` \u2014 if the job is finished successfully, with result `value`.",
          "`reject(error)` \u2014 if an error has occurred, `error` is the error object.",
          "`state` \u2014 initially `\"pending\"`, then changes to either `\"fulfilled\"` when `resolve` is called or `\"rejected\"` when `reject` is called.",
          "`result` \u2014 initially `undefined`, then changes to `value` when `resolve(value)` is called or `error` when `reject(error)` is called."
        ]
      },
      {
        "heading": "Consumers: then, catch",
        "paragraphs": [
          "A Promise object serves as a link between the executor (the \"producing code\" or \"singer\") and the consuming functions (the \"fans\"), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods `.then` and `.catch`."
        ]
      },
      {
        "heading": "then",
        "paragraphs": [
          "The most important, fundamental one is `.then`.",
          "The syntax is:",
          "The first argument of `.then` is a function that runs when the promise is resolved and receives the result.",
          "The second argument of `.then` is a function that runs when the promise is rejected and receives the error.",
          "For instance, here's a reaction to a successfully resolved promise:"
        ],
        "codeExamples": [
          {
            "title": "then",
            "code": "promise.then(\n  function(result) { *!*/* handle a successful result */*/!* },\n  function(error) { *!*/* handle an error */*/!* }\n);",
            "explanation": "Example demonstrating then."
          },
          {
            "title": "then",
            "code": "let promise = new Promise(function(resolve, reject) {\n  setTimeout(() => resolve(\"done!\"), 1000);\n});\n\n// resolve runs the first function in .then\npromise.then(\n*!*\n  result => alert(result), // shows \"done!\" after 1 second\n*/!*\n  error => alert(error) // doesn't run\n);",
            "explanation": "Example demonstrating then."
          }
        ]
      },
      {
        "heading": "catch",
        "paragraphs": [
          "If we're interested only in errors, then we can use `null` as the first argument: `.then(null, errorHandlingFunction)`. Or we can use `.catch(errorHandlingFunction)`, which is exactly the same:",
          "The call `.catch(f)` is a complete analog of `.then(null, f)`, it's just a shorthand."
        ],
        "codeExamples": [
          {
            "title": "catch",
            "code": "let promise = new Promise((resolve, reject) => {\n  setTimeout(() => reject(new Error(\"Whoops!\")), 1000);\n});\n\n*!*\n// .catch(f) is the same as promise.then(null, f)\npromise.catch(alert); // shows \"Error: Whoops!\" after 1 second\n*/!*",
            "explanation": "Example demonstrating catch."
          }
        ]
      },
      {
        "heading": "Cleanup: finally",
        "paragraphs": [
          "Just like there's a `finally` clause in a regular `try {...} catch {...}`, there's `finally` in promises.",
          "The call `.finally(f)` is similar to `.then(f, f)` in the sense that `f` runs always, when the promise is settled: be it resolve or reject.",
          "The idea of `finally` is to set up a handler for performing cleanup/finalizing after the previous operations are complete.",
          "E.g. stopping loading indicators, closing no longer needed connections, etc.",
          "Think of it as a party finisher. Irresepective of whether a party was good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it."
        ],
        "codeExamples": [
          {
            "title": "Cleanup: finally",
            "code": "new Promise((resolve, reject) => {\n  /* do something that takes time, and then call resolve or maybe reject */\n})\n*!*\n  // runs when the promise is settled, doesn't matter successfully or not\n  .finally(() => stop loading indicator)\n  // so the loading indicator is always stopped before we go on\n*/!*\n  .then(result => show result, err => show error)",
            "explanation": "Example demonstrating cleanup: finally."
          },
          {
            "title": "Cleanup: finally",
            "code": "If a promise is pending, `.then/catch/finally` handlers wait for its outcome.\n\nSometimes, it might be that a promise is already settled when we add a handler to it.\n\nIn such case, these handlers just run immediately:",
            "explanation": "Example demonstrating cleanup: finally."
          }
        ],
        "bulletPoints": [
          "A `finally` handler doesn't get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.",
          "If a `finally` handler returns something, it's ignored.",
          "When `finally` throws an error, then the execution goes to the nearest error handler."
        ]
      },
      {
        "heading": "Example: loadScript [#loadscript]",
        "paragraphs": [
          "Next, let's see more practical examples of how promises can help us write asynchronous code.",
          "We've got the `loadScript` function for loading a script from the previous chapter.",
          "Here's the callback-based variant, just to remind us of it:",
          "Let's rewrite it using Promises.",
          "The new function `loadScript` will not require a callback. Instead, it will create and return a Promise object that resolves when the loading is complete. The outer code can add handlers (subscribing functions) to it using `.then`:"
        ],
        "codeExamples": [
          {
            "title": "Example: loadScript [#loadscript]",
            "code": "function loadScript(src, callback) {\n  let script = document.createElement('script');\n  script.src = src;\n\n  script.onload = () => callback(null, script);\n  script.onerror = () => callback(new Error(`Script load error for ${src}`));\n\n  document.head.append(script);\n}",
            "explanation": "Example demonstrating example: loadscript [#loadscript]."
          },
          {
            "title": "Example: loadScript [#loadscript]",
            "code": "function loadScript(src) {\n  return new Promise(function(resolve, reject) {\n    let script = document.createElement('script');\n    script.src = src;\n\n    script.onload = () => resolve(script);\n    script.onerror = () => reject(new Error(`Script load error for ${src}`));\n\n    document.head.append(script);\n  });\n}",
            "explanation": "Example demonstrating example: loadscript [#loadscript]."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Re-resolve a promise?",
        "description": "What's the output of the code below? ```js let promise = new Promise(function(resolve, reject) { resolve(1); setTimeout(() => resolve(2), 1000); }); promise.then(alert); ```",
        "starterCode": "let promise = new Promise(function(resolve, reject) {\n  resolve(1);\n\n  setTimeout(() => resolve(2), 1000);\n});\n\npromise.then(alert);",
        "solution": "let promise = new Promise(function(resolve, reject) {\n  resolve(1);\n\n  setTimeout(() => resolve(2), 1000);\n});\n\npromise.then(alert);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Delay with a promise",
        "description": "The built-in function `setTimeout` uses callbacks. Create a promise-based alternative. The function `delay(ms)` should return a promise. That promise should resolve after `ms` milliseconds, so that we can add `.then` to it, like this: ```js function delay(ms) { // your code } delay(3000).then(() => ",
        "starterCode": "function delay(ms) {\n  // your code\n}\n\ndelay(3000).then(() => alert('runs after 3 seconds'));",
        "solution": "function delay(ms) {\n  // your code\n}\n\ndelay(3000).then(() => alert('runs after 3 seconds'));",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Animated circle with promise",
        "description": "Rewrite the `showCircle` function in the solution of the task so that it returns a promise instead of accepting a callback. The new usage: ```js showCircle(150, 150, 100).then(div => { div.classList.add('message-ball'); div.append(\"Hello, world!\"); }); ``` Take the solution of the task as the base.",
        "starterCode": "showCircle(150, 150, 100).then(div => {\n  div.classList.add('message-ball');\n  div.append(\"Hello, world!\");\n});",
        "solution": "showCircle(150, 150, 100).then(div => {\n  div.classList.add('message-ball');\n  div.append(\"Hello, world!\");\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Promise Basics in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for promise basics.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Promise Basics is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Promise Basics?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Promise Basics is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying promise basics.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "promise-basics"
    ],
    "slug": "promise-basics"
  },
  {
    "title": "Promise Chaining",
    "description": "Let's return to the problem mentioned in the chapter : we have a sequence of asynchronous tasks to be performed one after another \u2014 for instance, loading scripts. How can we code i...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's return to the problem mentioned in the chapter : we have a sequence of asynchronous tasks to be performed one after another \u2014 for instance, loading scripts. How can we code it well?",
          "Promises provide a couple of recipes to do that.",
          "In this chapter we cover promise chaining.",
          "It looks like this:",
          "The idea is that the result is passed through the chain of `.then` handlers."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "new Promise(function(resolve, reject) {\n\n  setTimeout(() => resolve(1), 1000); // (*)\n\n}).then(function(result) { // (**)\n\n  alert(result); // 1\n  return result * 2;\n\n}).then(function(result) { // (***)\n\n  alert(result); // 2\n  return result * 2;\n\n}).then(function(result) {\n\n  alert(result); // 4\n  return result * 2;\n\n});",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let promise = new Promise(function(resolve, reject) {\n  setTimeout(() => resolve(1), 1000);\n});\n\npromise.then(function(result) {\n  alert(result); // 1\n  return result * 2;\n});\n\npromise.then(function(result) {\n  alert(result); // 1\n  return result * 2;\n});\n\npromise.then(function(result) {\n  alert(result); // 1\n  return result * 2;\n});",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Returning promises",
        "paragraphs": [
          "A handler, used in `.then(handler)` may create and return a promise.",
          "In that case further handlers wait until it settles, and then get its result.",
          "For instance:",
          "Here the first `.then` shows `1` and returns `new Promise(\u2026)` in the line `(*)`. After one second it resolves, and the result (the argument of `resolve`, here it's `result * 2`) is passed on to the handler of the second `.then`. That handler is in the line `(**)`, it shows `2` and does the same thing.",
          "So the output is the same as in the previous example: 1 -> 2 -> 4, but now with 1 second delay between `alert` calls."
        ],
        "codeExamples": [
          {
            "title": "Returning promises",
            "code": "new Promise(function(resolve, reject) {\n\n  setTimeout(() => resolve(1), 1000);\n\n}).then(function(result) {\n\n  alert(result); // 1\n\n*!*\n  return new Promise((resolve, reject) => { // (*)\n    setTimeout(() => resolve(result * 2), 1000);\n  });\n*/!*\n\n}).then(function(result) { // (**)\n\n  alert(result); // 2\n\n  return new Promise((resolve, reject) => {\n    setTimeout(() => resolve(result * 2), 1000);\n  });\n\n}).then(function(result) {\n\n  alert(result); // 4\n\n});",
            "explanation": "Example demonstrating returning promises."
          }
        ]
      },
      {
        "heading": "Example: loadScript",
        "paragraphs": [
          "Let's use this feature with the promisified `loadScript`, defined in the previous chapter, to load scripts one by one, in sequence:",
          "This code can be made bit shorter with arrow functions:",
          "Here each `loadScript` call returns a promise, and the next `.then` runs when it resolves. Then it initiates the loading of the next script. So scripts are loaded one after another.",
          "We can add more asynchronous actions to the chain. Please note that the code is still \"flat\" \u2014 it grows down, not to the right. There are no signs of the \"pyramid of doom\".",
          "Technically, we could add `.then` directly to each `loadScript`, like this:"
        ],
        "codeExamples": [
          {
            "title": "Example: loadScript",
            "code": "loadScript(\"/article/promise-chaining/one.js\")\n  .then(function(script) {\n    return loadScript(\"/article/promise-chaining/two.js\");\n  })\n  .then(function(script) {\n    return loadScript(\"/article/promise-chaining/three.js\");\n  })\n  .then(function(script) {\n    // use functions declared in scripts\n    // to show that they indeed loaded\n    one();\n    two();\n    three();\n  });",
            "explanation": "Example demonstrating example: loadscript."
          },
          {
            "title": "Example: loadScript",
            "code": "loadScript(\"/article/promise-chaining/one.js\")\n  .then(script => loadScript(\"/article/promise-chaining/two.js\"))\n  .then(script => loadScript(\"/article/promise-chaining/three.js\"))\n  .then(script => {\n    // scripts are loaded, we can use functions declared there\n    one();\n    two();\n    three();\n  });",
            "explanation": "Example demonstrating example: loadscript."
          }
        ]
      },
      {
        "heading": "Bigger example: fetch",
        "paragraphs": [
          "In frontend programming, promises are often used for network requests. So let's see an extended example of that.",
          "We'll use the fetch method to load the information about the user from the remote server. It has a lot of optional parameters covered in separate chapters, but the basic syntax is quite simple:",
          "This makes a network request to the `url` and returns a promise. The promise resolves with a `response` object when the remote server responds with headers, but *before the full response is downloaded*.",
          "To read the full response, we should call the method `response.text()`: it returns a promise that resolves when the full text is downloaded from the remote server, with that text as a result.",
          "The code below makes a request to `user.json` and loads its text from the server:"
        ],
        "codeExamples": [
          {
            "title": "Bigger example: fetch",
            "code": "let promise = fetch(url);",
            "explanation": "Example demonstrating bigger example: fetch."
          },
          {
            "title": "Bigger example: fetch",
            "code": "fetch('/article/promise-chaining/user.json')\n  // .then below runs when the remote server responds\n  .then(function(response) {\n    // response.text() returns a new promise that resolves with the full response text\n    // when it loads\n    return response.text();\n  })\n  .then(function(text) {\n    // ...and here's the content of the remote file\n    alert(text); // {\"name\": \"iliakan\", \"isAdmin\": true}\n  });",
            "explanation": "Example demonstrating bigger example: fetch."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "If a `.then` (or `catch/finally`, doesn't matter) handler returns a promise, the rest of the chain waits until it settles. When it does, its result (or error) is passed further.",
          "Here's a full picture:",
          "![](promise-handler-variants.svg)"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Promise: then versus catch",
        "description": "Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions? ```js promise.then(f1).catch(f2); ``` Versus: ```js promise.then(f1, f2); ```",
        "starterCode": "promise.then(f1).catch(f2);",
        "solution": "...But not here:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Promise Chaining in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for promise chaining.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Promise Chaining is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Promise Chaining?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Promise Chaining is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying promise chaining.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "promise-chaining"
    ],
    "slug": "promise-chaining"
  },
  {
    "title": "Promise Error Handling",
    "description": "Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That's very convenient in practice.",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That's very convenient in practice.",
          "For instance, in the code below the URL to `fetch` is wrong (no such site) and `.catch` handles the error:",
          "As you can see, the `.catch` doesn't have to be immediate. It may appear after one or maybe several `.then`.",
          "Or, maybe, everything is all right with the site, but the response is not valid JSON. The easiest way to catch all errors is to append `.catch` to the end of chain:",
          "Normally, such `.catch` doesn't trigger at all. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "*!*\nfetch('https://no-such-server.blabla') // rejects\n*/!*\n  .then(response => response.json())\n  .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "fetch('/article/promise-chaining/user.json')\n  .then(response => response.json())\n  .then(user => fetch(`https://api.github.com/users/${user.name}`))\n  .then(response => response.json())\n  .then(githubUser => new Promise((resolve, reject) => {\n    let img = document.createElement('img');\n    img.src = githubUser.avatar_url;\n    img.className = \"promise-avatar-example\";\n    document.body.append(img);\n\n    setTimeout(() => {\n      img.remove();\n      resolve(githubUser);\n    }, 3000);\n  }))\n*!*\n  .catch(error => alert(error.message));\n*/!*",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Implicit try..catch",
        "paragraphs": [
          "The code of a promise executor and promise handlers has an \"invisible `try..catch`\" around it. If an exception happens, it gets caught and treated as a rejection.",
          "For instance, this code:",
          "...Works exactly the same as this:",
          "The \"invisible `try..catch`\" around the executor automatically catches the error and turns it into rejected promise.",
          "This happens not only in the executor function, but in its handlers as well. If we `throw` inside a `.then` handler, that means a rejected promise, so the control jumps to the nearest error handler."
        ],
        "codeExamples": [
          {
            "title": "Implicit try..catch",
            "code": "new Promise((resolve, reject) => {\n*!*\n  throw new Error(\"Whoops!\");\n*/!*\n}).catch(alert); // Error: Whoops!",
            "explanation": "Example demonstrating implicit try..catch."
          },
          {
            "title": "Implicit try..catch",
            "code": "new Promise((resolve, reject) => {\n*!*\n  reject(new Error(\"Whoops!\"));\n*/!*\n}).catch(alert); // Error: Whoops!",
            "explanation": "Example demonstrating implicit try..catch."
          }
        ]
      },
      {
        "heading": "Rethrowing",
        "paragraphs": [
          "As we already noticed, `.catch` at the end of the chain is similar to `try..catch`. We may have as many `.then` handlers as we want, and then use a single `.catch` at the end to handle errors in all of them.",
          "In a regular `try..catch` we can analyze the error and maybe rethrow it if it can't be handled. The same thing is possible for promises.",
          "If we `throw` inside `.catch`, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful `.then` handler.",
          "In the example below the `.catch` successfully handles the error:",
          "Here the `.catch` block finishes normally. So the next successful `.then` handler is called."
        ],
        "codeExamples": [
          {
            "title": "Rethrowing",
            "code": "// the execution: catch -> then\nnew Promise((resolve, reject) => {\n\n  throw new Error(\"Whoops!\");\n\n}).catch(function(error) {\n\n  alert(\"The error is handled, continue normally\");\n\n}).then(() => alert(\"Next successful handler runs\"));",
            "explanation": "Example demonstrating rethrowing."
          },
          {
            "title": "Rethrowing",
            "code": "// the execution: catch -> catch\nnew Promise((resolve, reject) => {\n\n  throw new Error(\"Whoops!\");\n\n}).catch(function(error) { // (*)\n\n  if (error instanceof URIError) {\n    // handle it\n  } else {\n    alert(\"Can't handle such error\");\n\n*!*\n    throw error; // throwing this or another error jumps to the next catch\n*/!*\n  }\n\n}).then(function() {\n  /* doesn't run here */\n}).catch(error => { // (**)\n\n  alert(`The unknown error has occurred: ${error}`);\n  // don't return anything => execution goes the normal way\n\n});",
            "explanation": "Example demonstrating rethrowing."
          }
        ]
      },
      {
        "heading": "Unhandled rejections",
        "paragraphs": [
          "What happens when an error is not handled? For instance, we forgot to append `.catch` to the end of the chain, like here:",
          "In case of an error, the promise becomes rejected, and the execution should jump to the closest rejection handler. But there is none. So the error gets \"stuck\". There's no code to handle it.",
          "In practice, just like with regular unhandled errors in code, it means that something has gone terribly wrong.",
          "What happens when a regular error occurs and is not caught by `try..catch`? The script dies with a message in the console. A similar thing happens with unhandled promise rejections.",
          "The JavaScript engine tracks such rejections and generates a global error in that case. You can see it in the console if you run the example above."
        ],
        "codeExamples": [
          {
            "title": "Unhandled rejections",
            "code": "new Promise(function() {\n  noSuchFunction(); // Error here (no such function)\n})\n  .then(() => {\n    // successful promise handlers, one or more\n  }); // without .catch at the end!",
            "explanation": "Example demonstrating unhandled rejections."
          },
          {
            "title": "Unhandled rejections",
            "code": "*!*\nwindow.addEventListener('unhandledrejection', function(event) {\n  // the event object has two special properties:\n  alert(event.promise); // [object Promise] - the promise that generated the error\n  alert(event.reason); // Error: Whoops! - the unhandled error object\n});\n*/!*\n\nnew Promise(function() {\n  throw new Error(\"Whoops!\");\n}); // no catch to handle the error",
            "explanation": "Example demonstrating unhandled rejections."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "`.catch` handles errors in promises of all kinds: be it a `reject()` call, or an error thrown in a handler.",
          "`.then` also catches errors in the same manner, if given the second argument (which is the error handler).",
          "We should place `.catch` exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).",
          "It's ok not to use `.catch` at all, if there's no way to recover from an error.",
          "In any case we should have the `unhandledrejection` event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never \"just dies\"."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Error in setTimeout",
        "description": "What do you think? Will the `.catch` trigger? Explain your answer. ```js new Promise(function(resolve, reject) { setTimeout(() => { throw new Error(\"Whoops!\"); }, 1000); }).catch(alert); ```",
        "starterCode": "new Promise(function(resolve, reject) {\n  setTimeout(() => {\n    throw new Error(\"Whoops!\");\n  }, 1000);\n}).catch(alert);",
        "solution": "new Promise(function(resolve, reject) {\n  setTimeout(() => {\n    throw new Error(\"Whoops!\");\n  }, 1000);\n}).catch(alert);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Promise Error Handling in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for promise error handling.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Promise Error Handling is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Promise Error Handling?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Promise Error Handling is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying promise error handling.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "promise-error-handling"
    ],
    "slug": "promise-error-handling"
  },
  {
    "title": "Promise Api",
    "description": "There are 6 static methods in the `Promise` class. We'll quickly cover their use cases here.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There are 6 static methods in the `Promise` class. We'll quickly cover their use cases here."
        ]
      },
      {
        "heading": "Promise.all",
        "paragraphs": [
          "Let's say we want many promises to execute in parallel and wait until all of them are ready.",
          "For instance, download several URLs in parallel and process the content once they are all done.",
          "That's what `Promise.all` is for.",
          "The syntax is:",
          "`Promise.all` takes an iterable (usually, an array of promises) and returns a new promise."
        ],
        "codeExamples": [
          {
            "title": "Promise.all",
            "code": "let promise = Promise.all(iterable);",
            "explanation": "Example demonstrating promise.all."
          },
          {
            "title": "Promise.all",
            "code": "Promise.all([\n  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1\n  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2\n  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3\n]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member",
            "explanation": "Example demonstrating promise.all."
          }
        ]
      },
      {
        "heading": "Promise.allSettled",
        "paragraphs": [
          "[recent browser=\"new\"]",
          "`Promise.all` rejects as a whole if any promise rejects. That's good for \"all or nothing\" cases, when we need *all* results successful to proceed:",
          "`Promise.allSettled` just waits for all promises to settle, regardless of the result. The resulting array has:",
          "For example, we'd like to fetch the information about multiple users. Even if one request fails, we're still interested in the others.",
          "Let's use `Promise.allSettled`:"
        ],
        "codeExamples": [
          {
            "title": "Promise.allSettled",
            "code": "Promise.all([\n  fetch('/template.html'),\n  fetch('/style.css'),\n  fetch('/data.json')\n]).then(render); // render method needs results of all fetches",
            "explanation": "Example demonstrating promise.allsettled."
          },
          {
            "title": "Promise.allSettled",
            "code": "let urls = [\n  'https://api.github.com/users/iliakan',\n  'https://api.github.com/users/remy',\n  'https://no-such-url'\n];\n\nPromise.allSettled(urls.map(url => fetch(url)))\n  .then(results => { // (*)\n    results.forEach((result, num) => {\n      if (result.status == \"fulfilled\") {\n        alert(`${urls[num]}: ${result.value.status}`);\n      }\n      if (result.status == \"rejected\") {\n        alert(`${urls[num]}: ${result.reason}`);\n      }\n    });\n  });",
            "explanation": "Example demonstrating promise.allsettled."
          }
        ],
        "bulletPoints": [
          "`{status:\"fulfilled\", value:result}` for successful responses,",
          "`{status:\"rejected\", reason:error}` for errors."
        ]
      },
      {
        "heading": "Polyfill",
        "paragraphs": [
          "If the browser doesn't support `Promise.allSettled`, it's easy to polyfill:",
          "In this code, `promises.map` takes input values, turns them into promises (just in case a non-promise was passed) with `p => Promise.resolve(p)`, and then adds `.then` handler to every one.",
          "That handler turns a successful result `value` into `{status:'fulfilled', value}`, and an error `reason` into `{status:'rejected', reason}`. That's exactly the format of `Promise.allSettled`.",
          "Now we can use `Promise.allSettled` to get the results of *all* given promises, even if some of them reject."
        ],
        "codeExamples": [
          {
            "title": "Polyfill",
            "code": "if (!Promise.allSettled) {\n  const rejectHandler = reason => ({ status: 'rejected', reason });\n\n  const resolveHandler = value => ({ status: 'fulfilled', value });\n\n  Promise.allSettled = function (promises) {\n    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));\n    return Promise.all(convertedPromises);\n  };\n}",
            "explanation": "Example demonstrating polyfill."
          }
        ]
      },
      {
        "heading": "Promise.race",
        "paragraphs": [
          "Similar to `Promise.all`, but waits only for the first settled promise and gets its result (or error).",
          "The syntax is:",
          "For instance, here the result will be `1`:",
          "The first promise here was fastest, so it became the result. After the first settled promise \"wins the race\", all further results/errors are ignored."
        ],
        "codeExamples": [
          {
            "title": "Promise.race",
            "code": "let promise = Promise.race(iterable);",
            "explanation": "Example demonstrating promise.race."
          },
          {
            "title": "Promise.race",
            "code": "Promise.race([\n  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),\n  new Promise((resolve, reject) => setTimeout(() => reject(new Error(\"Whoops!\")), 2000)),\n  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))\n]).then(alert); // 1",
            "explanation": "Example demonstrating promise.race."
          }
        ]
      },
      {
        "heading": "Promise.any",
        "paragraphs": [
          "Similar to `Promise.race`, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with `AggregateError` - a special error object that stores all promise errors in its `errors` property.",
          "The syntax is:",
          "For instance, here the result will be `1`:",
          "The first promise here was fastest, but it was rejected, so the second promise became the result. After the first fulfilled promise \"wins the race\", all further results are ignored.",
          "Here's an example when all promises fail:"
        ],
        "codeExamples": [
          {
            "title": "Promise.any",
            "code": "let promise = Promise.any(iterable);",
            "explanation": "Example demonstrating promise.any."
          },
          {
            "title": "Promise.any",
            "code": "Promise.any([\n  new Promise((resolve, reject) => setTimeout(() => reject(new Error(\"Whoops!\")), 1000)),\n  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),\n  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))\n]).then(alert); // 1",
            "explanation": "Example demonstrating promise.any."
          }
        ]
      },
      {
        "heading": "Promise.resolve/reject",
        "paragraphs": [
          "Methods `Promise.resolve` and `Promise.reject` are rarely needed in modern code, because `async/await` syntax (we'll cover it a bit later) makes them somewhat obsolete.",
          "We cover them here for completeness and for those who can't use `async/await` for some reason."
        ]
      },
      {
        "heading": "Promise.resolve",
        "paragraphs": [
          "`Promise.resolve(value)` creates a resolved promise with the result `value`.",
          "Same as:",
          "The method is used for compatibility, when a function is expected to return a promise.",
          "For example, the `loadCached` function below fetches a URL and remembers (caches) its content. For future calls with the same URL it immediately gets the previous content from cache, but uses `Promise.resolve` to make a promise of it, so the returned value is always a promise:",
          "We can write `loadCached(url).then(\u2026)`, because the function is guaranteed to return a promise. We can always use `.then` after `loadCached`. That's the purpose of `Promise.resolve` in the line `(*)`."
        ],
        "codeExamples": [
          {
            "title": "Promise.resolve",
            "code": "let promise = new Promise(resolve => resolve(value));",
            "explanation": "Example demonstrating promise.resolve."
          },
          {
            "title": "Promise.resolve",
            "code": "let cache = new Map();\n\nfunction loadCached(url) {\n  if (cache.has(url)) {\n*!*\n    return Promise.resolve(cache.get(url)); // (*)\n*/!*\n  }\n\n  return fetch(url)\n    .then(response => response.text())\n    .then(text => {\n      cache.set(url,text);\n      return text;\n    });\n}",
            "explanation": "Example demonstrating promise.resolve."
          }
        ]
      },
      {
        "heading": "Promise.reject",
        "paragraphs": [
          "`Promise.reject(error)` creates a rejected promise with `error`.",
          "Same as:",
          "In practice, this method is almost never used."
        ],
        "codeExamples": [
          {
            "title": "Promise.reject",
            "code": "let promise = new Promise((resolve, reject) => reject(error));",
            "explanation": "Example demonstrating promise.reject."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are 6 static methods of `Promise` class:",
          "1. `Promise.all(promises)` -- waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of `Promise.all`, and all other results are ignored.",
          "2. `Promise.allSettled(promises)` (recently added method) -- waits for all promises to settle and returns their results as an array of objects with:",
          "3. `Promise.race(promises)` -- waits for the first promise to settle, and its result/error becomes the outcome.",
          "4. `Promise.any(promises)` (recently added method) -- waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, `AggregateError` becomes the error of `Promise.any`."
        ],
        "bulletPoints": [
          "`status`: `\"fulfilled\"` or `\"rejected\"`",
          "`value` (if fulfilled) or `reason` (if rejected)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Promise Api",
        "description": "Apply your understanding of Promise Api. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Promise Api\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Promise Api\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Promise Api in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for promise api.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Promise Api is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Promise Api?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Promise Api is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying promise api.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "promise-api"
    ],
    "slug": "promise-api"
  },
  {
    "title": "Promisify",
    "description": "\"Promisification\" is a long word for a simple transformation. It's the conversion of a function that accepts a callback into a function that returns a promise.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "\"Promisification\" is a long word for a simple transformation. It's the conversion of a function that accepts a callback into a function that returns a promise.",
          "Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.",
          "For better understanding, let's see an example.",
          "For instance, we have `loadScript(src, callback)` from the chapter .",
          "The function loads a script with the given `src`, and then calls `callback(err)` in case of an error, or `callback(null, script)` in case of successful loading. That's a widespread agreement for using callbacks, we saw it before."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "function loadScript(src, callback) {\n  let script = document.createElement('script');\n  script.src = src;\n\n  script.onload = () => callback(null, script);\n  script.onerror = () => callback(new Error(`Script load error for ${src}`));\n\n  document.head.append(script);\n}\n\n// usage:\n// loadScript('path/script.js', (err, script) => {...})",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let loadScriptPromise = function(src) {\n  return new Promise((resolve, reject) => {\n    loadScript(src, (err, script) => {\n      if (err) reject(err);\n      else resolve(script);\n    });\n  });\n};\n\n// usage:\n// loadScriptPromise('path/script.js').then(...)",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "When called as `promisify(f)` it should work similar to the version above.",
          "When called as `promisify(f, true)`, it should return the promise that resolves with the array of callback results. That's exactly for callbacks with many arguments."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Promisify",
        "description": "Apply your understanding of Promisify. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Promisify\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Promisify\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Promisify in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for promisify.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Promisify is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Promisify?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Promisify is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying promisify.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "promisify"
    ],
    "slug": "promisify"
  },
  {
    "title": "Microtask Queue",
    "description": "Promise handlers `.then`/`.catch`/`.finally` are always asynchronous.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Promise handlers `.then`/`.catch`/`.finally` are always asynchronous.",
          "Even when a Promise is immediately resolved, the code on the lines *below* `.then`/`.catch`/`.finally` will still execute before these handlers.",
          "Here's a demo:",
          "If you run it, you see `code finished` first, and then `promise done!`.",
          "That's strange, because the promise is definitely done from the beginning."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let promise = Promise.resolve();\n\npromise.then(() => alert(\"promise done!\"));\n\nalert(\"code finished\"); // this alert shows first",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Microtasks queue",
        "paragraphs": [
          "Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue `PromiseJobs`, more often referred to as the \"microtask queue\" (V8 term).",
          "As stated in the specification:",
          "Or, to put it more simply, when a promise is ready, its `.then/catch/finally` handlers are put into the queue; they are not executed yet. When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.",
          "That's why \"code finished\" in the example above shows first.",
          "![](promiseQueue.svg)"
        ],
        "codeExamples": [
          {
            "title": "Microtasks queue",
            "code": "Promise.resolve()\n  .then(() => alert(\"promise done!\"))\n  .then(() => alert(\"code finished\"));",
            "explanation": "Example demonstrating microtasks queue."
          }
        ],
        "bulletPoints": [
          "The queue is first-in-first-out: tasks enqueued first are run first.",
          "Execution of a task is initiated only when nothing else is running."
        ]
      },
      {
        "heading": "Unhandled rejection",
        "paragraphs": [
          "Remember the `unhandledrejection` event from the article ?",
          "Now we can see exactly how JavaScript finds out that there was an unhandled rejection.",
          "**An \"unhandled rejection\" occurs when a promise error is not handled at the end of the microtask queue.**",
          "Normally, if we expect an error, we add `.catch` to the promise chain to handle it:",
          "But if we forget to add `.catch`, then, after the microtask queue is empty, the engine triggers the event:"
        ],
        "codeExamples": [
          {
            "title": "Unhandled rejection",
            "code": "let promise = Promise.reject(new Error(\"Promise Failed!\"));\n*!*\npromise.catch(err => alert('caught'));\n*/!*\n\n// doesn't run: error handled\nwindow.addEventListener('unhandledrejection', event => alert(event.reason));",
            "explanation": "Example demonstrating unhandled rejection."
          },
          {
            "title": "Unhandled rejection",
            "code": "let promise = Promise.reject(new Error(\"Promise Failed!\"));\n\n// Promise Failed!\nwindow.addEventListener('unhandledrejection', event => alert(event.reason));",
            "explanation": "Example demonstrating unhandled rejection."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Promise handling is always asynchronous, as all promise actions pass through the internal \"promise jobs\" queue, also called \"microtask queue\" (V8 term).",
          "So `.then/catch/finally` handlers are always called after the current code is finished.",
          "If we need to guarantee that a piece of code is executed after `.then/catch/finally`, we can add it into a chained `.then` call.",
          "In most Javascript engines, including browsers and Node.js, the concept of microtasks is closely tied with the \"event loop\" and \"macrotasks\". As these have no direct relation to promises, they are covered in another part of the tutorial, in the article ."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Microtask Queue",
        "description": "Apply your understanding of Microtask Queue. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Microtask Queue\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Microtask Queue\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Microtask Queue in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for microtask queue.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Microtask Queue is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Microtask Queue?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Microtask Queue is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying microtask queue.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "microtask-queue"
    ],
    "slug": "microtask-queue"
  },
  {
    "title": "Async Await",
    "description": "There's a special syntax to work with promises in a more comfortable fashion, called \"async/await\". It's surprisingly easy to understand and use.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There's a special syntax to work with promises in a more comfortable fashion, called \"async/await\". It's surprisingly easy to understand and use."
        ]
      },
      {
        "heading": "Async functions",
        "paragraphs": [
          "Let's start with the `async` keyword. It can be placed before a function, like this:",
          "The word \"async\" before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.",
          "For instance, this function returns a resolved promise with the result of `1`; let's test it:",
          "...We could explicitly return a promise, which would be the same:",
          "So, `async` ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There's another keyword, `await`, that works only inside `async` functions, and it's pretty cool."
        ],
        "codeExamples": [
          {
            "title": "Async functions",
            "code": "async function f() {\n  return 1;\n}",
            "explanation": "Example demonstrating async functions."
          },
          {
            "title": "Async functions",
            "code": "async function f() {\n  return 1;\n}\n\nf().then(alert); // 1",
            "explanation": "Example demonstrating async functions."
          }
        ]
      },
      {
        "heading": "Await",
        "paragraphs": [
          "The syntax:",
          "The keyword `await` makes JavaScript wait until that promise settles and returns its result.",
          "Here's an example with a promise that resolves in 1 second:",
          "The function execution \"pauses\" at the line `(*)` and resumes when the promise settles, with `result` becoming its result. So the code above shows \"done!\" in one second.",
          "Let's emphasize: `await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn't cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc."
        ],
        "codeExamples": [
          {
            "title": "Await",
            "code": "// works only inside async functions\nlet value = await promise;",
            "explanation": "Example demonstrating await."
          },
          {
            "title": "Await",
            "code": "async function f() {\n\n  let promise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve(\"done!\"), 1000)\n  });\n\n*!*\n  let result = await promise; // wait until the promise resolves (*)\n*/!*\n\n  alert(result); // \"done!\"\n}\n\nf();",
            "explanation": "Example demonstrating await."
          }
        ]
      },
      {
        "heading": "Error handling",
        "paragraphs": [
          "If a promise resolves normally, then `await promise` returns the result. But in the case of a rejection, it throws the error, just as if there were a `throw` statement at that line.",
          "This code:",
          "...is the same as this:",
          "In real situations, the promise may take some time before it rejects. In that case there will be a delay before `await` throws an error.",
          "We can catch that error using `try..catch`, the same way as a regular `throw`:"
        ],
        "codeExamples": [
          {
            "title": "Error handling",
            "code": "async function f() {\n*!*\n  await Promise.reject(new Error(\"Whoops!\"));\n*/!*\n}",
            "explanation": "Example demonstrating error handling."
          },
          {
            "title": "Error handling",
            "code": "async function f() {\n*!*\n  throw new Error(\"Whoops!\");\n*/!*\n}",
            "explanation": "Example demonstrating error handling."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The `async` keyword before a function has two effects:",
          "1. Makes it always return a promise.",
          "2. Allows `await` to be used in it.",
          "The `await` keyword before a promise makes JavaScript wait until that promise settles, and then:",
          "1. If it's an error, an exception is generated \u2014 same as if `throw error` were called at that very place."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Rewrite using async/await",
        "description": "Rewrite this example code from the chapter using `async/await` instead of `.then/catch`: ```js run function loadJson(url) { return fetch(url) .then(response => { if (response.status == 200) { return response.json(); } else { throw new Error(response.status); } }); } loadJson('https://javascript.info",
        "starterCode": "// Write your code here\n",
        "solution": "Notes:\n\n1. The function `loadJson` becomes `async`.\n2. All `.then` inside are replaced with `await`.\n3. We can `return response.json()` instead of awaiting for it, like this:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Rewrite \"rethrow\" with async/await",
        "description": "Below you can find the \"rethrow\" example. Rewrite it using `async/await` instead of `.then/catch`. And get rid of the recursion in favour of a loop in `demoGithubUser`: with `async/await` that becomes easy to do. ```js run class HttpError extends Error { constructor(response) { super(`${response.sta",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Call async from non-async",
        "description": "We have a \"regular\" function called `f`. How can you call the `async` function `wait()` and use its result inside of `f`? ```js async function wait() { await new Promise(resolve => setTimeout(resolve, 1000)); return 10; } function f() { // ...what should you write here? // we need to call async wait",
        "starterCode": "async function wait() {\n  await new Promise(resolve => setTimeout(resolve, 1000));\n\n  return 10;\n}\n\nfunction f() {\n  // ...what should you write here?\n  // we need to call async wait() and wait to get 10\n  // remember, we can't use \"await\"\n}",
        "solution": "async function wait() {\n  await new Promise(resolve => setTimeout(resolve, 1000));\n\n  return 10;\n}\n\nfunction f() {\n  // ...what should you write here?\n  // we need to call async wait() and wait to get 10\n  // remember, we can't use \"await\"\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Async Await in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for async await.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Async Await is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Async Await?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Async Await is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying async await.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "async-await"
    ],
    "slug": "async-await"
  }
];
