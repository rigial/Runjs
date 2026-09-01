import type { Lesson } from '../../types';

export const advancedLessons: Lesson[] = [
  // Iterators/Generators
  {
    slug: 'iterators-and-iterables',
    title: 'Iterators & Iterables',
    description: 'Learn how to create objects that can be looped over using for...of.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'What are Iterables?',
        paragraphs: [
          'In JavaScript, an iterable is an object that allows you to loop over its elements. Arrays, Strings, and Maps are built-in iterables.',
          'Under the hood, an iterable must implement a method whose key is Symbol.iterator. This method returns an iterator object.'
        ],
        codeExamples: [
          {
            title: 'Custom Iterable',
            code: `const counter = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step <= 3) {
          return { value: step, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const num of counter) {
  console.log(num);
}`,
            output: '1\n2\n3',
            explanation: 'We defined a custom object that implements the iterator protocol, allowing it to be used in a for...of loop.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Any object can become iterable as long as it has a valid Symbol.iterator method.'
        }
      }
    ],
    exercises: [
      {
        title: 'Create an Even Number Iterator',
        description: 'Make an object that iterates over even numbers up to 6.',
        starterCode: 'const evens = {};\n// Make evens iterable',
        solution: `const evens = {
  [Symbol.iterator]() {
    let current = 0;
    return {
      next() {
        current += 2;
        if (current <= 6) return { value: current, done: false };
        return { done: true };
      }
    };
  }
};`,
        hints: ['Remember to implement Symbol.iterator', 'Return an object with a next() method.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which symbol is used to define an iterator?',
        options: ['Symbol.iterable', 'Symbol.iterator', 'Symbol.loop', 'Symbol.next'],
        correctIndex: 1,
        explanation: 'Symbol.iterator is the key used to specify the iterator method on an object.'
      },
      {
        question: 'What two properties must the object returned by next() have?',
        options: ['value and status', 'current and done', 'value and done', 'element and finish'],
        correctIndex: 2,
        explanation: 'The iterator protocol requires next() to return an object with value and done properties.'
      }
    ],
    keyTakeaways: [
      'Iterables allow you to use for...of loops.',
      'To make an object iterable, implement Symbol.iterator.',
      'The iterator returns an object with a next() function.'
    ],
    tags: ['iterators', 'es6', 'advanced']
  },
  {
    slug: 'generator-functions',
    title: 'Generator Functions',
    description: 'Pause and resume function execution using generators and the yield keyword.',
    difficulty: 'advanced',
    readingTime: 7,
    sections: [
      {
        heading: 'What is a Generator?',
        paragraphs: [
          'Generators are special functions that can pause their execution and resume later. They are defined using the function* syntax.',
          'Instead of returning a single value, generators can yield multiple values one by one.'
        ],
        codeExamples: [
          {
            title: 'Basic Generator',
            code: `function* myGenerator() {
  yield 'Hello';
  yield 'World';
}

const gen = myGenerator();
console.log(gen.next().value);
console.log(gen.next().value);`,
            output: 'Hello\nWorld',
            explanation: 'The generator pauses at each yield. Calling next() resumes execution until the next yield.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Countdown Generator',
        description: 'Create a generator that yields numbers from 3 down to 1.',
        starterCode: 'function* countdown() {}',
        solution: `function* countdown() {
  let i = 3;
  while (i > 0) {
    yield i--;
  }
}`,
        hints: ['Use a while loop inside the generator.', 'yield the current number.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'How do you define a generator function?',
        options: ['function gen()', 'function* gen()', 'generator gen()', 'async gen()'],
        correctIndex: 1,
        explanation: 'Generators are defined with an asterisk: function*.'
      },
      {
        question: 'Which keyword is used to pause a generator?',
        options: ['pause', 'stop', 'yield', 'return'],
        correctIndex: 2,
        explanation: 'yield pauses the execution and returns a value to the caller.'
      }
    ],
    keyTakeaways: [
      'Generators use function* syntax.',
      'The yield keyword pauses the function and returns a value.',
      'Generators are a great way to create custom iterables.'
    ],
    tags: ['generators', 'functions', 'advanced']
  },
  {
    slug: 'async-generators',
    title: 'Async Generators',
    description: 'Combine async/await with generators to handle streams of asynchronous data.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Asynchronous Iteration',
        paragraphs: [
          'Async generators let you use await and yield together. This is extremely useful for reading streams or paginated APIs.',
          'You can iterate over them using the for await...of loop.'
        ],
        codeExamples: [
          {
            title: 'Async Generator Example',
            code: `async function* fetchPages() {
  yield await Promise.resolve('Page 1');
  yield await Promise.resolve('Page 2');
}

(async () => {
  for await (const page of fetchPages()) {
    console.log(page);
  }
})();`,
            output: 'Page 1\nPage 2',
            explanation: 'We use for await...of to consume the async iterable yielded by the generator.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Async Number Stream',
        description: 'Create an async generator that yields numbers 1 and 2, with a fake delay.',
        starterCode: 'async function* numberStream() {}',
        solution: `async function* numberStream() {
  await new Promise(r => setTimeout(r, 10));
  yield 1;
  await new Promise(r => setTimeout(r, 10));
  yield 2;
}`,
        hints: ['Use await with a Promise and setTimeout.'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Which loop is used to consume async generators?',
        options: ['for...of', 'for await...of', 'for...in', 'while loop'],
        correctIndex: 1,
        explanation: 'for await...of is specifically designed to handle asynchronous iterables.'
      }
    ],
    keyTakeaways: [
      'Async generators are declared with async function*.',
      'They can yield promises and await asynchronous tasks.',
      'Use for await...of to iterate over them.'
    ],
    tags: ['async', 'generators', 'promises']
  },

  // Metaprogramming
  {
    slug: 'symbols',
    title: 'Symbols',
    description: 'Understand the Symbol primitive type for creating unique object properties.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Creating and Using Symbols',
        paragraphs: [
          'A Symbol is a unique and immutable primitive type introduced in ES6. They are often used as hidden keys for object properties.',
          'Even if two symbols have the same description, they are not strictly equal.'
        ],
        codeExamples: [
          {
            title: 'Unique Symbols',
            code: `const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2);

const user = {
  name: 'Alice',
  [sym1]: 1234
};
console.log(user[sym1]);`,
            output: 'false\n1234',
            explanation: 'sym1 and sym2 are distinct. The property created with sym1 is hidden from standard loops like for...in.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Add a Hidden Property',
        description: 'Add a secret property to the vault object using a Symbol.',
        starterCode: 'const vault = { public: "Coins" };\n// Add secret property',
        solution: `const secret = Symbol("secret");
const vault = {
  public: "Coins",
  [secret]: "Diamonds"
};`,
        hints: ['Create a symbol first, then use computed property syntax [symbolName].'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Are Symbols fully hidden from all object reflection methods?',
        options: ['Yes, absolutely', 'No, Object.getOwnPropertySymbols() can find them'],
        correctIndex: 1,
        explanation: 'While hidden from Object.keys() and for...in, they can be retrieved via Object.getOwnPropertySymbols().'
      }
    ],
    keyTakeaways: [
      'Symbols provide a way to create guaranteed unique keys.',
      'They prevent naming collisions in objects.',
      'They are skipped by standard property enumeration.'
    ],
    tags: ['symbols', 'primitives', 'metaprogramming']
  },
  {
    slug: 'proxy-and-reflect',
    title: 'Proxy & Reflect',
    description: 'Intercept and redefine fundamental operations for objects using Proxies.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Intercepting Operations',
        paragraphs: [
          'The Proxy object allows you to create a custom behavior for fundamental operations like property lookup, assignment, and function invocation.',
          'Reflect is a built-in object that provides methods for interceptable JavaScript operations, mirroring the Proxy traps.'
        ],
        codeExamples: [
          {
            title: 'A Logging Proxy',
            code: `const target = { msg: 'hello' };
const handler = {
  get(obj, prop) {
    console.log(\`Accessed \${prop}\`);
    return Reflect.get(obj, prop);
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.msg);`,
            output: 'Accessed msg\nhello',
            explanation: 'The handler intercepts the property read, logs it, and uses Reflect to perform the default action.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Validation Proxy',
        description: 'Create a proxy that throws an error if someone tries to set a non-number to the age property.',
        starterCode: 'const person = { age: 20 };\nconst personProxy = new Proxy(person, {});',
        solution: `const person = { age: 20 };
const personProxy = new Proxy(person, {
  set(target, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('Age must be a number');
    }
    return Reflect.set(target, prop, value);
  }
});`,
        hints: ['Implement the set trap in the handler.', 'Check the typeof value.'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'What is a Proxy "trap"?',
        options: ['An error thrown by Proxy', 'A method that intercepts an operation', 'A security vulnerability', 'A way to trap the garbage collector'],
        correctIndex: 1,
        explanation: 'Traps are functions in the handler object that intercept operations like get, set, and has.'
      }
    ],
    keyTakeaways: [
      'Proxies wrap objects to intercept operations.',
      'Handlers contain traps like get and set.',
      'Reflect provides default behaviors for traps.'
    ],
    tags: ['proxy', 'reflect', 'metaprogramming']
  },
  {
    slug: 'well-known-symbols',
    title: 'Well-Known Symbols',
    description: 'Explore built-in symbols that alter internal language behaviors.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Customizing Language Behavior',
        paragraphs: [
          'JavaScript exposes internal language behaviors through well-known symbols. For instance, Symbol.toPrimitive lets you control how an object converts to a primitive value.'
        ],
        codeExamples: [
          {
            title: 'Symbol.toPrimitive',
            code: `const money = {
  amount: 100,
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return \`$\${this.amount}\`;
    return this.amount;
  }
};

console.log(String(money));
console.log(+money);`,
            output: '$100\n100',
            explanation: 'Depending on whether we want a string or a number, our object intelligently formats itself.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Custom toStringTag',
        description: 'Use Symbol.toStringTag to change the output of Object.prototype.toString.call() to "[object Widget]".',
        starterCode: 'const widget = {};',
        solution: `const widget = {
  [Symbol.toStringTag]: 'Widget'
};`,
        hints: ['Add [Symbol.toStringTag] to the object.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which well-known symbol is used to define how an object acts as an iterator?',
        options: ['Symbol.iterable', 'Symbol.toPrimitive', 'Symbol.iterator', 'Symbol.loop'],
        correctIndex: 2,
        explanation: 'Symbol.iterator is used to make objects iterable.'
      }
    ],
    keyTakeaways: [
      'Well-known symbols start with Symbol.',
      'They hook into core JS features like primitive conversion.',
      'They offer powerful metaprogramming capabilities.'
    ],
    tags: ['symbols', 'metaprogramming']
  },

  // Modules
  {
    slug: 'es-modules',
    title: 'ES Modules (import/export)',
    description: 'Learn how to split your JavaScript code into reusable modules.',
    difficulty: 'intermediate',
    readingTime: 7,
    sections: [
      {
        heading: 'Exporting and Importing',
        paragraphs: [
          'ES Modules allow you to divide your code into separate files. You can export functions, objects, or primitives from one module and import them into another.'
        ],
        codeExamples: [
          {
            title: 'Named and Default Exports',
            code: `// math.js
export const PI = 3.14;
export default function add(a, b) { return a + b; }

// app.js
import add, { PI } from './math.js';
console.log(add(PI, 2));`,
            output: '5.14',
            explanation: 'Default exports can be named anything on import, while named exports must be enclosed in curly braces.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Export a function',
        description: 'Export a function named greet as a named export.',
        starterCode: 'function greet(name) { return `Hello, ${name}`; }',
        solution: 'export function greet(name) { return `Hello, ${name}`; }',
        hints: ['Add the export keyword before the function.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'How many default exports can a single module have?',
        options: ['Unlimited', 'Zero', 'One', 'Two'],
        correctIndex: 2,
        explanation: 'A module can only have one default export.'
      }
    ],
    keyTakeaways: [
      'Use export to expose functionality.',
      'Use import to bring functionality into a file.',
      'Understand the difference between default and named exports.'
    ],
    tags: ['modules', 'import', 'export']
  },
  {
    slug: 'dynamic-imports',
    title: 'Dynamic Imports',
    description: 'Load modules asynchronously on demand to improve performance.',
    difficulty: 'advanced',
    readingTime: 5,
    sections: [
      {
        heading: 'Code Splitting with Dynamic Imports',
        paragraphs: [
          'Dynamic imports allow you to load modules only when they are needed. This is great for code splitting and reducing initial load times.',
          'The import() syntax returns a promise that resolves to the module object.'
        ],
        codeExamples: [
          {
            title: 'Lazy Loading a Module',
            code: `async function loadMath() {
  const math = await import('./math.js');
  console.log(math.add(2, 3));
}`,
            explanation: 'The math module is only requested over the network when loadMath is called.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Dynamically Import Logger',
        description: 'Write a function that uses dynamic import to load "./logger.js" and call its default export.',
        starterCode: 'async function logData(data) {}',
        solution: `async function logData(data) {
  const logger = await import('./logger.js');
  logger.default(data);
}`,
        hints: ['Use await import()', 'Access the default export via the .default property.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does dynamic import() return?',
        options: ['A callback', 'The module immediately', 'A Promise', 'An error'],
        correctIndex: 2,
        explanation: 'import() returns a Promise that resolves with the module namespace object.'
      }
    ],
    keyTakeaways: [
      'Dynamic imports use import() as a function.',
      'They return a Promise.',
      'They help in code splitting and lazy loading.'
    ],
    tags: ['modules', 'async', 'performance']
  },
  {
    slug: 'module-patterns',
    title: 'Module Design Patterns',
    description: 'Explore common ways to structure your modules for large applications.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Structuring Modules',
        paragraphs: [
          'Before ES Modules, developers used patterns like IIFE (Immediately Invoked Function Expression) to create privacy.',
          'Today, ES Modules natively handle scoping, but patterns like barrel files (index.js re-exporting modules) are popular for clean folder structures.'
        ],
        codeExamples: [
          {
            title: 'Barrel Pattern',
            code: `// utils/index.js
export { formatText } from './text.js';
export { calculate } from './math.js';

// app.js
import { formatText, calculate } from './utils/index.js';`,
            explanation: 'The barrel file aggregates exports, so consumers only import from one file instead of many.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Barrel',
        description: 'Re-export a default function from "api.js" as "fetchData".',
        starterCode: '// Re-export here',
        solution: `export { default as fetchData } from './api.js';`,
        hints: ['Use export { default as alias } from path.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What is a "barrel" file?',
        options: ['A file that contains only variables', 'An index file that re-exports modules from a directory', 'A file that compresses data', 'A legacy module system'],
        correctIndex: 1,
        explanation: 'A barrel file acts as a central hub to re-export multiple modules.'
      }
    ],
    keyTakeaways: [
      'Module patterns organize code.',
      'Barrel files simplify imports.',
      'ES Modules inherently provide file-level scope and privacy.'
    ],
    tags: ['architecture', 'modules', 'patterns']
  },

  // DOM
  {
    slug: 'dom-tree-overview',
    title: 'DOM Tree Overview',
    description: 'Understand how the browser represents HTML as a tree of objects.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The Document Object Model',
        paragraphs: [
          'The DOM represents the HTML document as a hierarchical tree of nodes. Every element, attribute, and piece of text in HTML is a node.',
          'The root node is document.'
        ],
        codeExamples: [
          {
            title: 'Navigating the DOM',
            code: `console.log(document.documentElement); // <html>
console.log(document.body); // <body>
console.log(document.body.firstChild);`,
            explanation: 'You can navigate through the tree using properties like firstChild and parentNode.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Get the Head Element',
        description: 'Assign the <head> element to a variable named headNode.',
        starterCode: 'const headNode = null;',
        solution: 'const headNode = document.head;',
        hints: ['The document object has a direct property for the head.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What represents the root element of an HTML document?',
        options: ['document.body', 'document.root', 'document.documentElement', 'window'],
        correctIndex: 2,
        explanation: 'document.documentElement represents the <html> element.'
      }
    ],
    keyTakeaways: [
      'The DOM is a tree of nodes.',
      'Elements are element nodes, text is text nodes.',
      'document is the entry point.'
    ],
    tags: ['dom', 'browser']
  },
  {
    slug: 'selecting-elements',
    title: 'Selecting Elements',
    description: 'Learn how to query the DOM to find elements using CSS selectors.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'Querying the DOM',
        paragraphs: [
          'To manipulate elements, you first need to select them. Modern JavaScript heavily relies on querySelector and querySelectorAll.'
        ],
        codeExamples: [
          {
            title: 'Using querySelector',
            code: `const title = document.querySelector('h1.title');
const items = document.querySelectorAll('.list-item');

items.forEach(item => console.log(item.textContent));`,
            explanation: 'querySelector takes any valid CSS selector and returns the first match. querySelectorAll returns a NodeList of all matches.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Select a Button',
        description: 'Select the button with the ID "submit-btn".',
        starterCode: 'const btn = null;',
        solution: `const btn = document.querySelector('#submit-btn');`,
        hints: ['Use the CSS ID selector #'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What does querySelectorAll return?',
        options: ['An Array', 'A NodeList', 'A single Element', 'HTMLCollection'],
        correctIndex: 1,
        explanation: 'querySelectorAll returns a static NodeList.'
      }
    ],
    keyTakeaways: [
      'Use querySelector for single elements.',
      'Use querySelectorAll for multiple elements.',
      'You can use any valid CSS selector.'
    ],
    tags: ['dom', 'selectors']
  },
  {
    slug: 'modifying-elements',
    title: 'Modifying Elements',
    description: 'Change the content, attributes, and styles of DOM elements dynamically.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'Updating the DOM',
        paragraphs: [
          'Once you select an element, you can change its text (textContent), HTML (innerHTML), classes (classList), and styles (style).'
        ],
        codeExamples: [
          {
            title: 'Modifying an Element',
            code: `const box = document.querySelector('.box');
box.textContent = 'Updated!';
box.classList.add('highlight');
box.style.backgroundColor = 'blue';`,
            explanation: 'We update the text, add a CSS class, and directly modify the inline style.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Hide the Element',
        description: 'Add the class "hidden" to the element stored in the variable `modal`.',
        starterCode: 'const modal = document.querySelector(".modal");\n// Hide it',
        solution: `modal.classList.add('hidden');`,
        hints: ['Use the classList property.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which property is safer for changing text, to prevent XSS attacks?',
        options: ['innerHTML', 'innerText', 'textContent', 'outerHTML'],
        correctIndex: 2,
        explanation: 'textContent treats the input as raw text, preventing execution of malicious HTML/JS.'
      }
    ],
    keyTakeaways: [
      'Use textContent for text.',
      'Use classList to toggle CSS classes.',
      'Modify inline styles via the style object.'
    ],
    tags: ['dom', 'manipulation']
  },
  {
    slug: 'creating-and-removing',
    title: 'Creating & Removing Elements',
    description: 'Learn how to dynamically build new HTML structures and remove old ones.',
    difficulty: 'intermediate',
    readingTime: 7,
    sections: [
      {
        heading: 'Dynamic Elements',
        paragraphs: [
          'You can create new elements from scratch using document.createElement(), append them to the DOM with appendChild(), and remove them with remove().'
        ],
        codeExamples: [
          {
            title: 'Adding a List Item',
            code: `const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'New Item';
ul.appendChild(li);

// Later...
li.remove();`,
            explanation: 'We create a <li>, set its text, and append it to a <ul>. Later we remove it directly.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Paragraph',
        description: 'Create a <p> tag containing "Hello", and append it to document.body.',
        starterCode: '// Create and append paragraph',
        solution: `const p = document.createElement('p');
p.textContent = 'Hello';
document.body.appendChild(p);`,
        hints: ['Use document.createElement', 'Use document.body.appendChild'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which method adds a node to the end of the list of children of a specified parent node?',
        options: ['prependChild', 'appendChild', 'addChild', 'insertEnd'],
        correctIndex: 1,
        explanation: 'appendChild adds a node as the last child of a parent node.'
      }
    ],
    keyTakeaways: [
      'Create nodes with createElement.',
      'Insert nodes with appendChild or append.',
      'Delete nodes with remove().'
    ],
    tags: ['dom', 'manipulation']
  },

  // Events
  {
    slug: 'event-basics',
    title: 'Event Basics',
    description: 'Make your web pages interactive by responding to user actions like clicks.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'Listening for Events',
        paragraphs: [
          'Events are actions that happen in the browser, like a mouse click or keyboard press. We use addEventListener to run code when an event occurs.'
        ],
        codeExamples: [
          {
            title: 'Click Event',
            code: `const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
  console.log('Button clicked!');
  console.log('Coordinates:', event.clientX, event.clientY);
});`,
            explanation: 'The callback function receives an Event object containing details about the interaction.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Button Clicker',
        description: 'Add a click event listener to `btn` that logs "Clicked!" to the console.',
        starterCode: 'const btn = document.querySelector("#myBtn");\n',
        solution: `btn.addEventListener('click', () => {
  console.log('Clicked!');
});`,
        hints: ['Use addEventListener', 'The event name is "click"'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What is the recommended way to register an event handler?',
        options: ['element.onclick = fn', 'element.addEventListener("click", fn)', '<button onclick="fn()">', 'element.bind("click", fn)'],
        correctIndex: 1,
        explanation: 'addEventListener is the modern standard because it allows multiple listeners for the same event.'
      }
    ],
    keyTakeaways: [
      'Use addEventListener to listen for events.',
      'The event callback receives an Event object.',
      'Events range from clicks to keyboard input and more.'
    ],
    tags: ['events', 'dom', 'interactive']
  },
  {
    slug: 'event-bubbling-capturing',
    title: 'Event Bubbling & Capturing',
    description: 'Understand how events propagate through the DOM tree.',
    difficulty: 'advanced',
    readingTime: 7,
    sections: [
      {
        heading: 'Propagation Phases',
        paragraphs: [
          'When an event fires, it travels through the DOM in three phases: Capturing (down to the element), Target (at the element), and Bubbling (up from the element).',
          'By default, most event listeners trigger during the bubbling phase.'
        ],
        codeExamples: [
          {
            title: 'Stopping Bubbling',
            code: `document.querySelector('.child').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked, bubbling stopped!');
});

document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked! (Will not run if child is clicked)');
});`,
            explanation: 'stopPropagation() prevents the event from traveling up to parent elements.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Stop the Event',
        description: 'Inside the event handler, stop the event from bubbling up to parent elements.',
        starterCode: 'element.addEventListener("click", (e) => {\n  // Stop it here\n});',
        solution: `element.addEventListener("click", (e) => {
  e.stopPropagation();
});`,
        hints: ['Use the stopPropagation method on the event object.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'In which direction does Event Bubbling travel?',
        options: ['Top to bottom (Root to Target)', 'Bottom to top (Target to Root)', 'Sideways (Sibling to Sibling)'],
        correctIndex: 1,
        explanation: 'Bubbling goes from the deepest target element up to the root.'
      }
    ],
    keyTakeaways: [
      'Events bubble up by default.',
      'You can capture events on the way down by passing { capture: true }.',
      'stopPropagation() prevents further propagation.'
    ],
    tags: ['events', 'dom', 'advanced']
  },
  {
    slug: 'event-delegation',
    title: 'Event Delegation',
    description: 'Use bubbling to your advantage to manage events efficiently.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Efficient Event Listeners',
        paragraphs: [
          'Instead of attaching an event listener to every child element, you can attach a single listener to the parent element. This is called Event Delegation, and it relies on event bubbling.'
        ],
        codeExamples: [
          {
            title: 'List Delegation',
            code: `const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicked on a list item:', e.target.textContent);
  }
});`,
            explanation: 'One listener handles clicks for all current and future <li> elements inside the <ul>.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Delegate Button Clicks',
        description: 'Add a listener to a div container that logs the ID of any clicked button inside it.',
        starterCode: 'const container = document.querySelector(".container");',
        solution: `container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.id);
  }
});`,
        hints: ['Check e.target.tagName', 'Tag names are usually uppercase (e.g., "BUTTON").'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What DOM feature makes event delegation possible?',
        options: ['Event Capturing', 'Event Bubbling', 'Event Looping', 'Shadow DOM'],
        correctIndex: 1,
        explanation: 'Event bubbling ensures events from children bubble up to the parent, where the delegated listener is attached.'
      }
    ],
    keyTakeaways: [
      'Event delegation saves memory by using fewer listeners.',
      'It automatically handles dynamically added child elements.',
      'Use e.target to identify which child was clicked.'
    ],
    tags: ['events', 'patterns', 'performance']
  },
  {
    slug: 'form-events',
    title: 'Form Events & Validation',
    description: 'Handle form submissions and validate user input.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'Handling Submissions',
        paragraphs: [
          'When working with forms, the most important event is "submit". You usually want to prevent the default browser refresh when submitting a form via JavaScript.'
        ],
        codeExamples: [
          {
            title: 'Prevent Default Submission',
            code: `const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page refresh
  const data = new FormData(form);
  console.log('Submitted:', data.get('username'));
});`,
            explanation: 'preventDefault() stops the browser from navigating away. FormData provides an easy way to extract input values.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Prevent Page Reload',
        description: 'Prevent the form from reloading the page upon submission.',
        starterCode: 'form.addEventListener("submit", (e) => {\n  // code here\n});',
        solution: `form.addEventListener("submit", (e) => {
  e.preventDefault();
});`,
        hints: ['Use the preventDefault method on the event.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which method stops a form from causing a page reload?',
        options: ['e.stopPropagation()', 'e.stopImmediatePropagation()', 'e.preventDefault()', 'e.cancelSubmit()'],
        correctIndex: 2,
        explanation: 'preventDefault() cancels the default behavior of the event, which for forms is a page reload.'
      }
    ],
    keyTakeaways: [
      'Listen for the submit event on the form element itself.',
      'Use preventDefault() to handle submission via JS.',
      'FormData is a powerful API to extract form values.'
    ],
    tags: ['events', 'forms', 'dom']
  },

  // Browser APIs
  {
    slug: 'local-storage-session-storage',
    title: 'localStorage & sessionStorage',
    description: 'Save data in the browser that persists across page reloads.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Web Storage API',
        paragraphs: [
          'localStorage stores data with no expiration date, while sessionStorage stores data for one session (until the tab is closed).',
          'Both store data as key-value string pairs. You must use JSON.stringify and JSON.parse to store objects.'
        ],
        codeExamples: [
          {
            title: 'Saving and Loading Data',
            code: `const user = { name: 'Alice', theme: 'dark' };

// Save
localStorage.setItem('settings', JSON.stringify(user));

// Load
const saved = JSON.parse(localStorage.getItem('settings'));
console.log(saved.theme); // 'dark'`,
            explanation: 'Objects are stringified before saving, and parsed when retrieved.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Store a High Score',
        description: 'Save the number 100 into localStorage under the key "highScore".',
        starterCode: '// Save score',
        solution: `localStorage.setItem('highScore', '100');`,
        hints: ['Use setItem', 'Remember values are saved as strings.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'When is sessionStorage data cleared?',
        options: ['When the browser is closed completely', 'When the specific tab is closed', 'Never', 'After 24 hours'],
        correctIndex: 1,
        explanation: 'sessionStorage is scoped to the specific browser tab and clears when it closes.'
      }
    ],
    keyTakeaways: [
      'Use setItem(key, value) and getItem(key).',
      'Data is stored as strings.',
      'Use JSON methods to store complex objects.'
    ],
    tags: ['storage', 'browser-api']
  },
  {
    slug: 'fetch-api',
    title: 'The Fetch API',
    description: 'Make network requests to load data from external servers.',
    difficulty: 'advanced',
    readingTime: 7,
    sections: [
      {
        heading: 'Making HTTP Requests',
        paragraphs: [
          'The Fetch API provides a modern, Promise-based interface for fetching resources.',
          'A standard fetch call returns a Response object, which must then be converted to JSON or text.'
        ],
        codeExamples: [
          {
            title: 'Fetching JSON Data',
            code: `async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}`,
            explanation: 'Always check response.ok to ensure the HTTP status code was successful.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Fetch a Joke',
        description: 'Fetch from "https://api.example.com/joke" and parse it as JSON.',
        starterCode: 'async function getJoke() {}',
        solution: `async function getJoke() {
  const res = await fetch('https://api.example.com/joke');
  const data = await res.json();
  return data;
}`,
        hints: ['Use await fetch()', 'Then use await res.json()'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Does fetch() reject its Promise on HTTP 404 errors?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'Fetch only rejects on network failure. For 404/500 errors, the promise resolves, but response.ok is false.'
      }
    ],
    keyTakeaways: [
      'Fetch is Promise-based.',
      'Convert the response using .json() or .text().',
      'Always check response.ok for HTTP errors.'
    ],
    tags: ['fetch', 'network', 'async']
  },
  {
    slug: 'url-and-history',
    title: 'URL & History API',
    description: 'Manipulate browser history and parse URLs dynamically.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Routing and Parsing',
        paragraphs: [
          'The URL API helps you parse and construct URLs easily. The History API allows you to manipulate the browser session history, crucial for Single Page Applications (SPAs).'
        ],
        codeExamples: [
          {
            title: 'Parsing Query Parameters',
            code: `const url = new URL('https://example.com/search?q=javascript&page=2');
console.log(url.searchParams.get('q')); // 'javascript'
url.searchParams.set('page', '3');
console.log(url.toString());`,
            explanation: 'The URL interface safely handles query strings and path segments.'
          },
          {
            title: 'History PushState',
            code: `// Change URL without reloading
history.pushState({ user: 'Alice' }, '', '/profile');`,
            explanation: 'pushState adds an entry to the browser history, updating the URL bar instantly.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Get a Query Param',
        description: 'Extract the "id" parameter from a given URL string.',
        starterCode: 'const urlStr = "http://test.com/?id=99";',
        solution: `const urlStr = "http://test.com/?id=99";
const url = new URL(urlStr);
const id = url.searchParams.get('id');`,
        hints: ['Use new URL()', 'Use searchParams.get()'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which method changes the URL without causing a full page refresh?',
        options: ['window.location.href = url', 'window.location.reload()', 'history.pushState()', 'history.navigate()'],
        correctIndex: 2,
        explanation: 'pushState allows SPAs to change the URL without the browser requesting a new page.'
      }
    ],
    keyTakeaways: [
      'Use the URL object to parse addresses.',
      'searchParams makes handling query strings trivial.',
      'history.pushState is the foundation of modern JS routers.'
    ],
    tags: ['browser-api', 'routing']
  },

  // Interview
  {
    slug: 'hoisting-explained',
    title: 'Hoisting Explained',
    description: 'A classic interview topic: how JavaScript moves declarations to the top.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'What is Hoisting?',
        paragraphs: [
          'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope before code execution.',
          'Crucially, only declarations are hoisted, not initializations. var is hoisted and initialized with undefined, while let and const are hoisted but remain in a "Temporal Dead Zone".'
        ],
        codeExamples: [
          {
            title: 'var vs let hoisting',
            code: `console.log(myVar); // undefined
var myVar = 10;

// console.log(myLet); // ReferenceError!
let myLet = 20;

sayHi(); // Works!
function sayHi() {
  console.log('Hi');
}`,
            explanation: 'Function declarations are fully hoisted. var is hoisted but undefined. let causes a ReferenceError if accessed early.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Predict the Output',
        description: 'Fix the code so it doesn\'t throw a ReferenceError due to hoisting rules.',
        starterCode: 'console.log(x);\nlet x = 5;',
        solution: `let x = 5;\nconsole.log(x);`,
        hints: ['Move the initialization above the console.log'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What is the "Temporal Dead Zone" (TDZ)?',
        options: ['A time where garbage collection runs', 'The area in code where a let/const variable is hoisted but cannot be accessed yet', 'A deprecated feature in ES5'],
        correctIndex: 1,
        explanation: 'Variables declared with let and const are in the TDZ from the start of the block until the declaration is processed.'
      }
    ],
    keyTakeaways: [
      'Function declarations are fully hoisted.',
      'var variables are hoisted and initialized to undefined.',
      'let and const are hoisted but not initialized, causing the TDZ.'
    ],
    tags: ['interview', 'scope', 'hoisting']
  },
  {
    slug: 'this-keyword-deep-dive',
    title: 'The `this` Keyword Deep Dive',
    description: 'Master the context of `this` and how its value is determined in different scenarios.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Execution Context',
        paragraphs: [
          'The value of "this" depends on HOW a function is called, not where it is defined (with the exception of arrow functions).',
          'In a method, "this" refers to the owner object. In a standard function, it refers to the global object (or undefined in strict mode).'
        ],
        codeExamples: [
          {
            title: 'Context Binding',
            code: `const person = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  },
  arrowGreet: () => {
    console.log(this.name); // 'this' is inherited from outer scope
  }
};

person.greet(); // 'Alice'
const detached = person.greet;
detached(); // undefined (or error in strict mode)
person.arrowGreet(); // undefined`,
            explanation: 'Arrow functions do not have their own "this". They inherit it from the lexically enclosing scope.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Fix the Context',
        description: 'Fix the setTimeOut callback so it correctly logs the object\'s name.',
        starterCode: 'const obj = { name: "Bob", print() { setTimeout(function() { console.log(this.name) }, 10) } };',
        solution: `const obj = {
  name: "Bob",
  print() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  }
};`,
        hints: ['Use an arrow function inside setTimeout.'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Do arrow functions have their own "this" binding?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'Arrow functions inherit "this" from the parent scope at the time they are defined.'
      }
    ],
    keyTakeaways: [
      'Normal functions bind "this" dynamically based on how they are called.',
      'Arrow functions bind "this" lexically.',
      'Losing "this" context is a common bug when passing methods as callbacks.'
    ],
    tags: ['interview', 'this', 'context']
  },
  {
    slug: 'call-apply-bind',
    title: 'call(), apply(), bind()',
    description: 'Learn how to manually attach a specific `this` context to functions.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Explicit Binding',
        paragraphs: [
          'These three methods allow you to execute or bind a function with a specific "this" context.',
          'call() takes arguments as a comma-separated list. apply() takes arguments as an array. bind() returns a new function permanently bound to the context.'
        ],
        codeExamples: [
          {
            title: 'Borrowing Methods',
            code: `const user1 = { name: 'John' };
const user2 = { name: 'Jane' };

function sayHi(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}

sayHi.call(user1, 'Hello'); // Hello, John
sayHi.apply(user2, ['Hi']); // Hi, Jane

const boundHi = sayHi.bind(user1);
boundHi('Hey'); // Hey, John`,
            explanation: 'call and apply invoke immediately. bind creates a reusable bound function.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Use Bind',
        description: 'Create a new function `logDoc` by binding `console.log` to the `console` context, with "DOC:" pre-filled.',
        starterCode: 'const logDoc = null;',
        solution: `const logDoc = console.log.bind(console, 'DOC:');`,
        hints: ['Use console.log.bind(console, ...)'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Which method returns a NEW function rather than executing it immediately?',
        options: ['call()', 'apply()', 'bind()'],
        correctIndex: 2,
        explanation: 'bind() returns a new function with the this context permanently attached.'
      }
    ],
    keyTakeaways: [
      'call(this, arg1, arg2) executes immediately.',
      'apply(this, [arg1, arg2]) executes immediately using an array.',
      'bind(this) returns a new function.'
    ],
    tags: ['interview', 'this', 'functions']
  },
  {
    slug: 'debounce-and-throttle',
    title: 'Debounce & Throttle',
    description: 'Optimize performance by controlling how often a function executes.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Limiting Execution Rates',
        paragraphs: [
          'Debouncing forces a function to wait a certain amount of time before running. If called again, the timer resets. Great for search inputs.',
          'Throttling limits a function to run AT MOST once every X milliseconds. Great for scroll events.'
        ],
        codeExamples: [
          {
            title: 'Simple Debounce Implementation',
            code: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleInput = debounce(() => console.log('Searching...'), 500);
// Calling handleInput rapidly will only result in one console log.`,
            explanation: 'The closure keeps track of the timeoutId. Every new call clears the previous timer.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Fix the ClearTimeout',
        description: 'Complete the debounce function by clearing the existing timeout.',
        starterCode: 'function debounce(fn, t) { let id; return function() { /* add clear here */ id = setTimeout(fn, t); } }',
        solution: `function debounce(fn, t) {
  let id;
  return function() {
    clearTimeout(id);
    id = setTimeout(fn, t);
  }
}`,
        hints: ['Use clearTimeout(id)'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which technique is best for a search bar autocomplete API call?',
        options: ['Throttle', 'Debounce', 'Neither'],
        correctIndex: 1,
        explanation: 'Debounce is best because you only want to make the API call after the user stops typing.'
      }
    ],
    keyTakeaways: [
      'Debounce groups sudden bursts of events into a single execution.',
      'Throttle guarantees regular execution over time.',
      'Both techniques rely on closures and timers.'
    ],
    tags: ['interview', 'performance', 'patterns']
  },
  {
    slug: 'shallow-vs-deep-copy',
    title: 'Shallow vs Deep Copy',
    description: 'Understand how references work when copying objects and arrays.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Copying References',
        paragraphs: [
          'A shallow copy duplicates the top-level properties. If a property is an object, the reference to that object is copied, not the object itself.',
          'A deep copy duplicates everything recursively, creating a completely independent clone.'
        ],
        codeExamples: [
          {
            title: 'Shallow Copy Issue',
            code: `const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original }; // Spread is shallow

shallow.a = 99; // Original is untouched
shallow.nested.b = 99; // Original is MUTATED!

console.log(original.nested.b); // 99`,
            explanation: 'The spread operator only copies top-level properties. nested points to the same object in memory.'
          },
          {
            title: 'Deep Copy with structuredClone',
            code: `const original = { a: 1, nested: { b: 2 } };
const deep = structuredClone(original);

deep.nested.b = 99;
console.log(original.nested.b); // 2`,
            explanation: 'structuredClone is the modern, built-in way to deep clone in JS.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Deep Clone an Array',
        description: 'Use the modern built-in API to deep clone a nested array.',
        starterCode: 'const arr = [[1], [2]];\nconst clone = null;',
        solution: `const arr = [[1], [2]];\nconst clone = structuredClone(arr);`,
        hints: ['Use structuredClone()'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Is Object.assign() a shallow or deep copy?',
        options: ['Shallow', 'Deep'],
        correctIndex: 0,
        explanation: 'Object.assign only copies properties one level deep.'
      }
    ],
    keyTakeaways: [
      'Spread syntax (...) creates a shallow copy.',
      'JSON.parse(JSON.stringify(obj)) is an older deep copy trick.',
      'structuredClone() is the modern standard for deep copying.'
    ],
    tags: ['interview', 'objects', 'memory']
  },
  {
    slug: 'event-loop-interview',
    title: 'Event Loop Interview Questions',
    description: 'Test your knowledge of the Microtask queue, Macrotask queue, and Call Stack.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Execution Order',
        paragraphs: [
          'Interviewers love asking for the exact execution order of console logs mixed with synchronous code, Promises, and setTimeouts.',
          'Rule: Synchronous code first, then the Microtask queue (Promises), then the Macrotask queue (setTimeout).'
        ],
        codeExamples: [
          {
            title: 'The Classic Puzzle',
            code: `console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');`,
            output: '1\n4\n3\n2',
            explanation: '1 and 4 are sync. 3 is a microtask (runs right after sync code). 2 is a macrotask (runs after all microtasks).'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Predict Microtasks',
        description: 'Write the output array in the exact order values will be logged.',
        starterCode: '// What is the order of execution?\n// console.log("A");\n// Promise.resolve().then(() => console.log("B"));\n// console.log("C");',
        solution: `['A', 'C', 'B']`,
        hints: ['Sync runs first (A, C), then Promises (B).'],
        difficulty: 'advanced'
      }
    ],
    quiz: [
      {
        question: 'Which queue has higher priority?',
        options: ['Macrotask Queue (setTimeout)', 'Microtask Queue (Promises)', 'They have the same priority'],
        correctIndex: 1,
        explanation: 'The event loop fully drains the microtask queue before moving on to the next macrotask.'
      }
    ],
    keyTakeaways: [
      'Call Stack executes sync code immediately.',
      'Promises go to the Microtask queue.',
      'setTimeout goes to the Macrotask queue.',
      'Microtasks run before Macrotasks.'
    ],
    tags: ['interview', 'event-loop', 'async']
  },

  // Patterns
  {
    slug: 'module-pattern',
    title: 'Module Pattern',
    description: 'Learn how to encapsulate private state and expose a public API.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Encapsulation with Closures',
        paragraphs: [
          'Before ES6 Modules and Classes, developers used the Module Pattern (via IIFEs) to create private variables and methods that couldn\'t be accessed from the outside.'
        ],
        codeExamples: [
          {
            title: 'Classic Module Pattern',
            code: `const counterModule = (function() {
  let count = 0; // Private state
  
  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
    }
  };
})();

console.log(counterModule.increment()); // 1
console.log(counterModule.count); // undefined (private)`,
            explanation: 'The IIFE executes once. The returned object forms a closure over the private count variable.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Logger Module',
        description: 'Create an IIFE that returns an object with a `log` method. Keep an internal array of all logs.',
        starterCode: 'const logger = (function() { return {}; })();',
        solution: `const logger = (function() {
  const history = [];
  return {
    log(msg) {
      history.push(msg);
      console.log(msg);
    }
  };
})();`,
        hints: ['Define an array inside the IIFE, then return an object with the method.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What core JavaScript feature makes the classic Module pattern possible?',
        options: ['Promises', 'Closures', 'Classes', 'Generators'],
        correctIndex: 1,
        explanation: 'Closures allow the returned public methods to retain access to the variables defined in the outer IIFE scope.'
      }
    ],
    keyTakeaways: [
      'Module pattern provides encapsulation.',
      'Variables inside the function remain private.',
      'Only the returned object acts as the public API.'
    ],
    tags: ['patterns', 'architecture']
  },
  {
    slug: 'observer-pattern',
    title: 'Observer Pattern',
    description: 'Build systems where objects subscribe to and get notified of state changes.',
    difficulty: 'advanced',
    readingTime: 7,
    sections: [
      {
        heading: 'Publish / Subscribe',
        paragraphs: [
          'The Observer pattern (or Pub/Sub) defines a one-to-many relationship. When one object changes state, all its registered dependents are notified automatically.',
          'Event listeners in the browser (addEventListener) are a prime example of this pattern.'
        ],
        codeExamples: [
          {
            title: 'Simple EventEmitter',
            code: `class EventEmitter {
  constructor() { this.events = {}; }
  
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(data));
    }
  }
}

const pubsub = new EventEmitter();
pubsub.on('message', data => console.log('Received:', data));
pubsub.emit('message', 'Hello World!');`,
            explanation: 'The on method registers listeners. The emit method triggers them.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Emit an Event',
        description: 'Use the provided `bus` object to emit an "update" event with the value `42`.',
        starterCode: '// bus.emit(...)',
        solution: `bus.emit('update', 42);`,
        hints: ['Call the emit method with the event name and data.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'In the Observer pattern, what is the object that maintains the list of dependents called?',
        options: ['The Subject (or Publisher)', 'The Observer (or Subscriber)', 'The Client'],
        correctIndex: 0,
        explanation: 'The Subject maintains state and notifies Observers of changes.'
      }
    ],
    keyTakeaways: [
      'Decouples objects from one another.',
      'Crucial for event-driven architecture.',
      'Redux and DOM events use variants of this pattern.'
    ],
    tags: ['patterns', 'events']
  },
  {
    slug: 'singleton-pattern',
    title: 'Singleton Pattern',
    description: 'Ensure a class only ever has one instance across your entire application.',
    difficulty: 'advanced',
    readingTime: 5,
    sections: [
      {
        heading: 'One and Only One',
        paragraphs: [
          'A Singleton is a class that guarantees only a single instance exists. It usually provides a global access point to that instance.',
          'Often used for configuration managers, database connections, or global state stores.'
        ],
        codeExamples: [
          {
            title: 'ES6 Singleton',
            code: `class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connected = true;
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true`,
            explanation: 'The constructor checks if a static instance already exists. If so, it returns it instead of creating a new one.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Create a Config Singleton',
        description: 'Modify the Config constructor so it returns the existing instance if one exists.',
        starterCode: 'class Config { constructor() { /* logic here */ this.theme = "dark"; Config.instance = this; } }',
        solution: `class Config {
  constructor() {
    if (Config.instance) return Config.instance;
    this.theme = "dark";
    Config.instance = this;
  }
}`,
        hints: ['Check if Config.instance is truthy and return it.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Are singletons considered an anti-pattern by some developers?',
        options: ['Yes, because they are essentially glorified global variables', 'No, they are universally loved'],
        correctIndex: 0,
        explanation: 'Singletons introduce global state and can make testing difficult, so they should be used sparingly.'
      }
    ],
    keyTakeaways: [
      'Singletons restrict instantiation to one object.',
      'Useful for shared resources like DB connections.',
      'Can act as a global state manager.'
    ],
    tags: ['patterns', 'architecture']
  },
  {
    slug: 'factory-pattern',
    title: 'Factory Pattern',
    description: 'Create objects without specifying the exact class to instantiate.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Dynamic Object Creation',
        paragraphs: [
          'The Factory pattern uses a function or method to create objects. This abstracts the new keyword and allows the factory to determine the class dynamically.'
        ],
        codeExamples: [
          {
            title: 'Vehicle Factory',
            code: `class Car { drive() { console.log('Vroom') } }
class Bike { drive() { console.log('Ring ring') } }

class VehicleFactory {
  static create(type) {
    if (type === 'car') return new Car();
    if (type === 'bike') return new Bike();
  }
}

const myRide = VehicleFactory.create('bike');
myRide.drive();`,
            explanation: 'The factory method handles the logic of which class to instantiate based on input.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'User Factory',
        description: 'Complete the factory to return AdminUser or StandardUser based on the role argument.',
        starterCode: 'function createUser(role) {}',
        solution: `function createUser(role) {
  if (role === 'admin') return new AdminUser();
  return new StandardUser();
}`,
        hints: ['Check the role string and return the appropriate new instance.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What is the main benefit of the Factory pattern?',
        options: ['It runs code faster', 'It centralizes object creation logic', 'It saves memory'],
        correctIndex: 1,
        explanation: 'It abstracts the instantiation process, making the code more flexible and decoupled.'
      }
    ],
    keyTakeaways: [
      'Factories centralize the use of the new keyword.',
      'Useful when object creation involves complex logic.',
      'Helps maintain the Open/Closed Principle.'
    ],
    tags: ['patterns', 'classes']
  },
  {
    slug: 'currying-and-composition',
    title: 'Currying & Composition',
    description: 'Master functional programming techniques to write clean, reusable code.',
    difficulty: 'advanced',
    readingTime: 8,
    sections: [
      {
        heading: 'Functional Foundations',
        paragraphs: [
          'Currying transforms a function that takes multiple arguments into a sequence of functions that each take a single argument.',
          'Function Composition is the process of combining two or more functions to produce a new function.'
        ],
        codeExamples: [
          {
            title: 'Currying Example',
            code: `const add = (a) => (b) => a + b;
const addFive = add(5);
console.log(addFive(3)); // 8`,
            explanation: 'We lock in the value of `a`, creating a specialized function `addFive`.'
          },
          {
            title: 'Composition Example',
            code: `const double = x => x * 2;
const square = x => x * x;

// Compose: execute right to left
const compose = (f, g) => x => f(g(x));
const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3)); // (3*2)^2 = 36`,
            explanation: 'Composition allows us to build complex operations from small, testable functions.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Curried Multiply',
        description: 'Write a curried multiply function that allows multiply(2)(4) to return 8.',
        starterCode: 'const multiply = null;',
        solution: `const multiply = a => b => a * b;`,
        hints: ['Return a function from a function using arrow syntax.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What is the arity of the function returned by a fully curried function at each step?',
        options: ['Varies', 'One', 'Zero'],
        correctIndex: 1,
        explanation: 'In true currying, each returned function takes exactly one argument.'
      }
    ],
    keyTakeaways: [
      'Currying allows partial application of arguments.',
      'Composition chains functions together.',
      'Both are core principles of Functional Programming.'
    ],
    tags: ['functional', 'patterns', 'advanced']
  }
];
