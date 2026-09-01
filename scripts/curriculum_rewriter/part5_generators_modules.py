"""
Part 5: Generators, Modules & Metaprogramming (12 lessons)
All content completely rewritten from scratch in simple, beginner-friendly English with original runnable examples.
"""

from .helpers import make_lesson, make_section, make_code_example, make_exercise, make_quiz

def get_part5_lessons():
    lessons = []

    # 1. generators
    lessons.append(make_lesson(
        slug="generators",
        title="Generators: Pausable Functions",
        description="Learn how function* and the yield keyword generate streams of values on demand with lazy evaluation.",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="The 'function*' and 'yield' Syntax",
                paragraphs=[
                    "Regular functions return only a single value (or undefined) and run to completion. Generators are special functions that can pause their execution and yield multiple values over time.",
                    "A generator function is written with an asterisk: function* generateSequence(). Calling it returns a generator object conforming to the iterator protocol."
                ],
                code_examples=[
                    make_code_example(
                        title="Generator Function in Action",
                        code="function* numberGenerator() {\n  console.log('Generating 1...');\n  yield 1;\n  console.log('Generating 2...');\n  yield 2;\n  console.log('Generating 3...');\n  yield 3;\n}\n\nconst gen = numberGenerator();\nconsole.log(gen.next()); // { value: 1, done: false }\nconsole.log(gen.next()); // { value: 2, done: false }\nconsole.log(gen.next()); // { value: 3, done: false }\nconsole.log(gen.next()); // { value: undefined, done: true }",
                        explanation="Each call to .next() resumes execution until the next yield statement.",
                        output="Generating 1...\n{\n  \"value\": 1,\n  \"done\": false\n}\nGenerating 2...\n{\n  \"value\": 2,\n  \"done\": false\n}\nGenerating 3...\n{\n  \"value\": 3,\n  \"done\": false\n}\n{\n  \"value\": undefined,\n  \"done\": true\n}"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Generate an ID Sequence",
                description="Write a generator function* idGenerator() that yields 101, then 102, then 103.",
                starter_code="function* idGenerator() {\n  yield 101;\n  yield 102;\n  yield 103;\n}\n\nconst ids = [...idGenerator()];\nconsole.log(ids);",
                solution="function* idGenerator() {\n  yield 101;\n  yield 102;\n  yield 103;\n}\nconst ids = [...idGenerator()];\nconsole.log(ids);",
                hints=["Use yield 101; yield 102; yield 103;"]
            )
        ],
        quiz=[
            make_quiz(
                question="What method on a generator object resumes its execution until the next yield?",
                options=[
                    "generator.next()",
                    "generator.resume()",
                    "generator.step()",
                    "generator.run()"
                ],
                correct_index=0,
                explanation="Calling .next() on a generator object resumes execution and returns an object { value, done }."
            )
        ],
        key_takeaways=[
            "Generators are declared with function* and pause on yield.",
            "They support lazy evaluation, computing values only when requested.",
            "Generators are iterable and can be consumed by for...of and the spread operator."
        ],
        tags=["generators", "iterators", "yield", "lazy-evaluation"]
    ))

    # 2. async-iterators-generators
    lessons.append(make_lesson(
        slug="async-iterators-generators",
        title="Async Iteration and Async Generators",
        description="Stream asynchronous data on demand using async function*, Symbol.asyncIterator, and for await...of loops.",
        difficulty="advanced",
        reading_time=6,
        sections=[
            make_section(
                heading="Async Generators and 'for await...of'",
                paragraphs=[
                    "While regular generators yield immediate values, asynchronous generators yield Promises or stream data over time (like chunked network packets or database rows).",
                    "Async generators are declared with async function* and consumed using the for await...of loop."
                ],
                code_examples=[
                    make_code_example(
                        title="Streaming Data with Async Generator",
                        code="async function* fetchPages() {\n  for (let page = 1; page <= 3; page++) {\n    // Simulate network delay:\n    await new Promise(r => setTimeout(r, 20));\n    yield `Page ${page} data`;\n  }\n}\n\nasync function readStream() {\n  for await (const chunk of fetchPages()) {\n    console.log('Streamed:', chunk);\n  }\n}\n\nreadStream();",
                        explanation="for await...of pauses until each yielded promise fulfills.",
                        output="Streamed: Page 1 data\nStreamed: Page 2 data\nStreamed: Page 3 data"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create an Async Generator",
                description="Write an async function* generateNumbers() yielding 1 then 2. Consume with for await...of.",
                starter_code="async function* generateNumbers() {\n  yield 1;\n  yield 2;\n}\n\n(async () => {\n  for await (const n of generateNumbers()) {\n    console.log(n);\n  }\n})();",
                solution="async function* generateNumbers() {\n  yield 1;\n  yield 2;\n}\n(async () => {\n  for await (const n of generateNumbers()) {\n    console.log(n);\n  }\n})();",
                hints=["Use async function* and yield."]
            )
        ],
        quiz=[
            make_quiz(
                question="What loop syntax is used to consume asynchronous iterables and generators?",
                options=[
                    "for await (const item of asyncIterable)",
                    "for async (item in list)",
                    "while await (condition)",
                    "forEachAsync(callback)"
                ],
                correct_index=0,
                explanation="for await...of is the language construct for iterating over asynchronous streams and iterables."
            )
        ],
        key_takeaways=[
            "Async generators combine generators with async/await.",
            "Use for await...of to iterate over streaming data chunks.",
            "Implements the Symbol.asyncIterator protocol."
        ],
        tags=["async-generators", "async-iteration", "streams", "for-await"]
    ))

    # 3. modules-intro
    lessons.append(make_lesson(
        slug="modules-intro",
        title="Modules: An Introduction",
        description="Understand ES Modules (ESM): module-level scope, strict mode by default, and single evaluation caching.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="What is an ES Module?",
                paragraphs=[
                    "As applications grow, organizing code into separate files (modules) becomes essential. Each module is a self-contained script that exports specific values and imports what it needs from other modules.",
                    "In HTML, modules are loaded with <script type=\"module\" src=\"app.js\">."
                ],
                code_examples=[
                    make_code_example(
                        title="Module Features",
                        code="// 1. Modules always run in strict mode ('use strict' by default).\n// 2. Each module has its own top-level module scope (no global pollution).\n// 3. A module script is evaluated only once when imported, caching exports across files.",
                        explanation="Modules ensure isolation, predictable dependency graphs, and prevent global variable collisions.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Identify Module Scope",
                description="Demonstrate module scope by writing a function that encapsulates variable secret = 42 and returns it via a getter.",
                starter_code="const secret = 42;\nexport function getSecret() {\n  return secret;\n}\n\nconsole.log(getSecret());",
                solution="const secret = 42;\nexport function getSecret() {\n  return secret;\n}\nconsole.log(getSecret());",
                hints=["Module variables are private to the module unless explicitly exported."]
            )
        ],
        quiz=[
            make_quiz(
                question="How does variable scoping work in an ES Module?",
                options=[
                    "Top-level variables are scoped only to that module and are not attached to window/global",
                    "All variables are automatically global across all scripts",
                    "Variables can only be strings",
                    "Variables are cleared after 1 second"
                ],
                correct_index=0,
                explanation="ES Modules provide true module-level scope, preventing accidental global collisions."
            )
        ],
        key_takeaways=[
            "ES Modules are the official standard JavaScript module system.",
            "They feature top-level scope, deferred execution, and strict mode by default."
        ],
        tags=["modules", "esm", "script-type-module", "architecture"]
    ))

    # 4. import-export
    lessons.append(make_lesson(
        slug="import-export",
        title="Export and Import Syntax",
        description="Share code between files using named exports, default exports, 'as' renaming, and re-exporting.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Named Exports vs Default Exports",
                paragraphs=[
                    "JavaScript modules support two export mechanisms:",
                    "1. Named Exports: Export multiple variables, functions, or classes by name. Imported with curly braces: import { a, b } from './math.js'.",
                    "2. Default Export: Export a single primary entity per file: export default class User {}. Imported without braces: import User from './user.js'."
                ],
                code_examples=[
                    make_code_example(
                        title="Named and Default Imports",
                        code="// utils.js:\n// export const PI = 3.14159;\n// export function add(a, b) { return a + b; }\n// export default function main() { return 'Default app'; }\n\n// app.js:\n// import main, { PI, add as sum } from './utils.js';",
                        explanation="Use 'as' to rename imported entities and curly braces for named exports.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Simulate Named Export Object",
                description="Create an object MathLib exporting add and subtract functions. Test MathLib.add(5, 3).",
                starter_code="const MathLib = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b\n};\n\nconsole.log(MathLib.add(5, 3));",
                solution="const MathLib = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b\n};\nconsole.log(MathLib.add(5, 3));",
                hints=["MathLib.add(5, 3) returns 8."]
            )
        ],
        quiz=[
            make_quiz(
                question="How do you import a default export from another module?",
                options=[
                    "import MyComponent from './MyComponent.js';",
                    "import { MyComponent } from './MyComponent.js';",
                    "import * as MyComponent;",
                    "require(MyComponent);"
                ],
                correct_index=0,
                explanation="Default exports are imported without curly braces and can be given any local identifier name."
            )
        ],
        key_takeaways=[
            "Use named exports for multiple utilities per file.",
            "Use default exports when a file represents a single cohesive entity (like a component).",
            "Use 'as' to alias names and resolve naming collisions."
        ],
        tags=["modules", "import", "export", "esm", "syntax"]
    ))

    # 5. modules-dynamic-imports
    lessons.append(make_lesson(
        slug="modules-dynamic-imports",
        title="Dynamic Imports: import()",
        description="Load modules on demand at runtime with import(modulePath) for code splitting and performance optimization.",
        difficulty="intermediate",
        reading_time=5,
        sections=[
            make_section(
                heading="On-Demand Code Splitting",
                paragraphs=[
                    "Static import statements (import ... from '...') must be declared at the top level of a file and cannot depend on runtime conditions.",
                    "The dynamic import() expression can be called anywhere in your code (inside if statements, event handlers, or loops) and returns a Promise that resolves to the module namespace."
                ],
                code_examples=[
                    make_code_example(
                        title="Dynamic Import Syntax",
                        code="async function loadChartLibrary() {\n  // Loaded only when the user clicks 'Show Chart':\n  // const { Chart } = await import('./chart.js');\n  // new Chart('#container');\n  console.log('Module loaded on demand!');\n}\n\nloadChartLibrary();",
                        explanation="Dynamic imports enable code splitting, reducing initial page load bundles.",
                        output="Module loaded on demand!"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Mock a Dynamic Module Loader",
                description="Write an async function loadModule() that simulates loading a module and returns an object { status: 'ready' }.",
                starter_code="async function loadModule() {\n  return await Promise.resolve({ status: 'ready' });\n}\n\nloadModule().then(m => console.log(m.status));",
                solution="async function loadModule() {\n  return await Promise.resolve({ status: 'ready' });\n}\nloadModule().then(m => console.log(m.status));",
                hints=["Return a resolved Promise from loadModule."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does calling import(modulePath) return?",
                options=[
                    "A Promise that resolves to the module namespace object",
                    "The module synchronously",
                    "undefined",
                    "A string of the module source"
                ],
                correct_index=0,
                explanation="Dynamic import() is asynchronous and returns a Promise resolving to the module's exported properties."
            )
        ],
        key_takeaways=[
            "Dynamic import() enables lazy loading and code splitting.",
            "Can be called conditionally inside functions and user interaction handlers."
        ],
        tags=["modules", "dynamic-imports", "code-splitting", "performance"]
    ))

    # 6. proxy
    lessons.append(make_lesson(
        slug="proxy",
        title="Proxy and Reflect: Metaprogramming",
        description="Intercept and customize fundamental object operations (getting, setting, deleting, invoking) using Proxy traps.",
        difficulty="advanced",
        reading_time=6,
        sections=[
            make_section(
                heading="What is a Proxy?",
                paragraphs=[
                    "A Proxy object wraps another object (the target) and intercepts operations like property reading, property writing, and function invocation.",
                    "Each intercepted operation is handled by a method called a trap (e.g. get, set, has, deleteProperty) defined in a handler object."
                ],
                code_examples=[
                    make_code_example(
                        title="Validation Proxy with 'get' and 'set' Traps",
                        code="const user = { name: 'Alice', age: 25 };\n\nconst proxyUser = new Proxy(user, {\n  get(target, prop) {\n    if (prop in target) {\n      return target[prop];\n    }\n    return 'Property does not exist!';\n  },\n  set(target, prop, value) {\n    if (prop === 'age' && typeof value !== 'number') {\n      throw new TypeError('Age must be a number!');\n    }\n    target[prop] = value;\n    return true; // indicates success\n  }\n});\n\nconsole.log(proxyUser.name);        // 'Alice'\nconsole.log(proxyUser.unknownProp); // 'Property does not exist!'\nproxyUser.age = 26;\nconsole.log(proxyUser.age);         // 26",
                        explanation="The Proxy intercepts property access and assignment, adding validation and default behaviors.",
                        output="Alice\nProperty does not exist!\n26"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create a Logging Proxy",
                description="Wrap target = { score: 0 } in a Proxy that logs `Reading ${prop}` on every get operation.",
                starter_code="const target = { score: 0 };\nconst proxy = new Proxy(target, {\n  get(t, prop) {\n    console.log(`Reading ${prop}`);\n    return t[prop];\n  }\n});\n\nconsole.log(proxy.score);",
                solution="const target = { score: 0 };\nconst proxy = new Proxy(target, {\n  get(t, prop) {\n    console.log(`Reading ${prop}`);\n    return t[prop];\n  }\n});\nconsole.log(proxy.score);",
                hints=["Implement get(t, prop) in the handler."]
            )
        ],
        quiz=[
            make_quiz(
                question="What popular modern frontend library uses Proxy objects for its reactivity system?",
                options=[
                    "Vue 3",
                    "jQuery",
                    "Bootstrap",
                    "Lodash"
                ],
                correct_index=0,
                explanation="Vue 3 relies heavily on JavaScript Proxy objects to automatically track dependencies and trigger UI re-renders."
            )
        ],
        key_takeaways=[
            "Proxies intercept fundamental object operations via handler traps.",
            "Used to build reactive frameworks, validation wrappers, and virtual data layers."
        ],
        tags=["proxy", "reflect", "metaprogramming", "reactivity"]
    ))

    # 7. eval
    lessons.append(make_lesson(
        slug="eval",
        title="The 'eval' Function & Security Risks",
        description="Understand the built-in eval() function, why it is dangerous ('eval is evil'), and modern alternatives.",
        difficulty="intermediate",
        reading_time=4,
        sections=[
            make_section(
                heading="Why 'eval' is Discouraged",
                paragraphs=[
                    "The built-in eval(codeString) function executes a string of JavaScript code in the current scope.",
                    "In modern web development, using eval() is strongly discouraged due to extreme security vulnerabilities (Cross-Site Scripting / arbitrary code execution) and crippling performance penalties."
                ],
                code_examples=[
                    make_code_example(
                        title="eval vs JSON.parse",
                        code="// NEVER use eval to parse incoming data from users:\n// const data = eval('(' + untrustedInput + ')'); // DANGEROUS!\n\n// Safe modern alternative:\nconst safeData = JSON.parse('{\"status\": \"secure\"}');\nconsole.log(safeData.status);",
                        explanation="Always use JSON.parse() instead of eval() to deserialize data.",
                        output="secure"
                    )
                ],
                callout={
                    'type': 'warning',
                    'text': "Remember: 'eval is evil'. Never pass user-generated or untrusted strings to eval()."
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Use JSON.parse instead of eval",
                description="Safely parse the string '{\"count\": 42}' using JSON.parse and log the count property.",
                starter_code="const dataStr = '{\"count\": 42}';\nconst parsed = JSON.parse(dataStr);\nconsole.log(parsed.count);",
                solution="const dataStr = '{\"count\": 42}';\nconst parsed = JSON.parse(dataStr);\nconsole.log(parsed.count);",
                hints=["Use JSON.parse(dataStr)."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is eval() considered dangerous in production JavaScript applications?",
                options=[
                    "It allows arbitrary code execution, creating severe security vulnerabilities if untrusted input is passed",
                    "It turns off the browser firewall",
                    "It only works in Firefox",
                    "It deletes all cookies automatically"
                ],
                correct_index=0,
                explanation="Executing arbitrary strings exposes the application to code injection attacks and defeats engine JIT optimizations."
            )
        ],
        key_takeaways=[
            "eval() executes strings as code and poses severe security risks.",
            "Always use JSON.parse() for data serialization.",
            "Use Web Workers or safe sandbox interpreters if dynamic calculation is strictly necessary."
        ],
        tags=["eval", "security", "xss", "best-practices"]
    ))

    # 8. currying-partials
    lessons.append(make_lesson(
        slug="currying-partials",
        title="Currying and Function Composition",
        description="Transform multi-argument functions f(a, b, c) into chains of single-argument functions f(a)(b)(c).",
        difficulty="advanced",
        reading_time=5,
        sections=[
            make_section(
                heading="What is Currying?",
                paragraphs=[
                    "Currying is an advanced functional programming technique of transforming a function with multiple arguments f(a, b) into a sequence of nesting functions f(a)(b).",
                    "Currying makes it easy to configure reusable partial functions with pre-set arguments."
                ],
                code_examples=[
                    make_code_example(
                        title="Simple Currying",
                        code="// Standard function:\nfunction add(a, b) {\n  return a + b;\n}\n\n// Curried function:\nconst curriedAdd = a => b => a + b;\n\n// Create reusable partial functions:\nconst addFive = curriedAdd(5);\nconsole.log(addFive(10)); // 15\nconsole.log(addFive(20)); // 25",
                        explanation="Currying locks in the first parameter, returning a specialized function for the remaining arguments.",
                        output="15\n25"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Curry a Multiplier",
                description="Write a curried function multiply(a)(b) that returns a * b. Create double = multiply(2) and test with double(7).",
                starter_code="const multiply = a => b => a * b;\nconst double = multiply(2);\nconsole.log(double(7));",
                solution="const multiply = a => b => a * b;\nconst double = multiply(2);\nconsole.log(double(7));",
                hints=["const multiply = a => b => a * b;"]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the primary benefit of currying in functional programming?",
                options=[
                    "It allows easy creation of specialized partial functions with fixed arguments",
                    "It replaces the DOM completely",
                    "It speeds up arithmetic operations on the CPU",
                    "It enforces strict mode"
                ],
                correct_index=0,
                explanation="Currying produces specialized functions by pre-configuring initial parameters."
            )
        ],
        key_takeaways=[
            "Currying transforms f(a, b) into f(a)(b).",
            "Enables partial application and reusable utility configurations."
        ],
        tags=["currying", "functional-programming", "closures", "partials"]
    ))

    # 9. reference-type
    lessons.append(make_lesson(
        slug="reference-type",
        title="Reference Type & Method Loss",
        description="Discover the internal Reference Type specification mechanism and why separating obj.method loses 'this'.",
        difficulty="advanced",
        reading_time=5,
        sections=[
            make_section(
                heading="The Internal Reference Type",
                paragraphs=[
                    "When you write obj.method(), the dot operator does not simply return a function. It returns an internal specification type: (base, name, strict) known as a Reference Type.",
                    "When followed immediately by parentheses (), the engine extracts the base (obj) and binds it as 'this'. If you separate the access from the invocation ((obj.method)()), the reference is lost!"
                ],
                code_examples=[
                    make_code_example(
                        title="Losing Reference Type",
                        code="const user = {\n  name: 'John',\n  hi() { return this.name; }\n};\n\nconsole.log(user.hi()); // 'John' (Reference type preserved)\n\nconst detached = user.hi;\n// detached(); // 'this' is lost! Returns undefined or throws in strict mode.",
                        explanation="The Reference Type is temporary and only exists to pass 'this' to the immediate invocation.",
                        output="John"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Preserve Reference with Arrow Callback",
                description="Call obj.say() inside a wrapper arrow function so that 'this' remains bound to obj.",
                starter_code="const obj = {\n  val: 42,\n  say() { return this.val; }\n};\n\nconst callSafely = () => obj.say();\nconsole.log(callSafely());",
                solution="const obj = {\n  val: 42,\n  say() { return this.val; }\n};\nconst callSafely = () => obj.say();\nconsole.log(callSafely());",
                hints=["Wrap the method call: () => obj.say()."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why does const f = obj.method; f(); lose the original 'this' context?",
                options=[
                    "Because assignment resolves the Reference Type to the raw function pointer, detaching it from the base object",
                    "Because JavaScript deletes the object",
                    "Because functions only run once",
                    "Because of garbage collection"
                ],
                correct_index=0,
                explanation="Assigning a method to a standalone variable strips the Reference Type metadata, unbinding 'this'."
            )
        ],
        key_takeaways=[
            "Reference Type is an internal engine mechanism for resolving 'this'.",
            "Use arrow function wrappers or .bind() to preserve context."
        ],
        tags=["reference-type", "this", "internals", "spec"]
    ))

    # 10. bigint
    lessons.append(make_lesson(
        slug="bigint",
        title="BigInt: Arbitrary Precision Integers",
        description="Work with arbitrarily large integers exceeding Number.MAX_SAFE_INTEGER using the BigInt type and 'n' suffix.",
        difficulty="intermediate",
        reading_time=4,
        sections=[
            make_section(
                heading="Beyond Number.MAX_SAFE_INTEGER",
                paragraphs=[
                    "In JavaScript, normal numbers cannot safely represent integers greater than 2^53 - 1 (9,007,199,254,740,991). Operations above this limit lose precision.",
                    "BigInt is a built-in primitive that allows representing integers of arbitrary length. A BigInt is created by appending n to an integer literal or calling BigInt()."
                ],
                code_examples=[
                    make_code_example(
                        title="BigInt in Action",
                        code="const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991\nconsole.log('Normal Number overflow:', maxSafe + 1 === maxSafe + 2); // true (Precision bug!)\n\n// Using BigInt:\nconst big1 = 9007199254740991n;\nconst big2 = big1 + 1n;\nconst big3 = big1 + 2n;\nconsole.log('BigInt equality check:', big2 === big3); // false (Exact precision preserved!)",
                        explanation="BigInt handles calculations of arbitrary length with mathematical exactness.",
                        output="Normal Number overflow: true\nBigInt equality check: false"
                    )
                ],
                callout={
                    'type': 'warning',
                    'text': "You cannot mix BigInt and regular Number types in arithmetic (e.g. 5n + 2 throws a TypeError). Convert explicitly with BigInt(num) or Number(bigint)."
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Create and Multiply BigInts",
                description="Multiply 1000000000000000000n by 5n and log the result.",
                starter_code="const bigNum = 1000000000000000000n * 5n;\nconsole.log(bigNum);",
                solution="const bigNum = 1000000000000000000n * 5n;\nconsole.log(bigNum);",
                hints=["Append 'n' to integer numbers to create BigInt literals."]
            )
        ],
        quiz=[
            make_quiz(
                question="What happens if you attempt to add a regular number to a BigInt (e.g. 10n + 5)?",
                options=[
                    "It throws a TypeError: Cannot mix BigInt and other types",
                    "It converts both to strings",
                    "It rounds down to 0",
                    "It succeeds automatically"
                ],
                correct_index=0,
                explanation="JavaScript requires explicit type conversion when combining BigInt with Number to prevent accidental precision loss."
            )
        ],
        key_takeaways=[
            "Use BigInt for cryptography, financial IDs, and timestamps requiring arbitrary precision.",
            "Created with an 'n' suffix: 12345678901234567890n.",
            "Do not mix regular numbers and BigInts without explicit conversion."
        ],
        tags=["bigint", "precision", "math", "integers", "types"]
    ))

    # 11. unicode
    lessons.append(make_lesson(
        slug="unicode",
        title="Unicode: Strings and Surrogate Pairs",
        description="Understand UTF-16 encoding in JavaScript: surrogate pairs, emojis, codePointAt(), and the 'u' regex flag.",
        difficulty="advanced",
        reading_time=5,
        sections=[
            make_section(
                heading="UTF-16 and Surrogate Pairs",
                paragraphs=[
                    "JavaScript strings are encoded in UTF-16. Most common characters fit in a single 16-bit code unit, but rare characters and emojis require two 16-bit code units (a Surrogate Pair).",
                    "This is why '𝒳'.length is 2 and '😄'.length is 2! Use codePointAt() and String.fromCodePoint() to work with full 32-bit Unicode code points safely."
                ],
                code_examples=[
                    make_code_example(
                        title="Handling Emojis and Surrogate Pairs",
                        code="const emoji = '🚀';\nconsole.log('Length in UTF-16 code units:', emoji.length); // 2\n\n// Iterate by actual characters using for...of:\nfor (const char of 'Hello 🚀!') {\n  console.log(char);\n}",
                        explanation="for...of understands surrogate pairs and iterates by full Unicode code points.",
                        output="Length in UTF-16 code units: 2\nH\ne\nl\nl\no\n \n🚀\n!"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Iterate Unicode String with Spread",
                description="Split the string 'A 🌟 B' into an array of characters using the spread operator [...str]. Log the array.",
                starter_code="const text = 'A 🌟 B';\nconst characters = [...text];\nconsole.log(characters);",
                solution="const text = 'A 🌟 B';\nconst characters = [...text];\nconsole.log(characters);",
                hints=["[...text] respects full Unicode surrogate pairs."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why does '🎉'.length return 2 in JavaScript?",
                options=[
                    "Because UTF-16 uses two 16-bit code units (a surrogate pair) to encode code points above 0xFFFF",
                    "Because the emoji has two colors",
                    "Because strings are zero-indexed",
                    "Because of a bug in Google Chrome"
                ],
                correct_index=0,
                explanation="JavaScript string .length reports the number of UTF-16 code units, not individual visual glyphs."
            )
        ],
        key_takeaways=[
            "JavaScript strings are UTF-16 encoded.",
            "Characters above 0xFFFF (like emojis) occupy 2 code units.",
            "Use for...of or spread syntax to iterate strings character-by-character."
        ],
        tags=["unicode", "utf-16", "emojis", "strings", "surrogate-pairs"]
    ))

    # 12. weakref-finalizationregistry
    lessons.append(make_lesson(
        slug="weakref-finalizationregistry",
        title="WeakRef and FinalizationRegistry",
        description="Explore advanced memory primitives: WeakRef for non-blocking references and FinalizationRegistry for GC cleanup callbacks.",
        difficulty="advanced",
        reading_time=5,
        sections=[
            make_section(
                heading="Advanced Memory Management (ES2021)",
                paragraphs=[
                    "WeakRef allows you to hold a weak reference to an object without preventing that object from being reclaimed by the garbage collector.",
                    "FinalizationRegistry allows you to request a callback when an object has been garbage-collected, useful for cleaning up external non-JS resources (like file descriptors or WebGL textures)."
                ],
                code_examples=[
                    make_code_example(
                        title="Using WeakRef",
                        code="let target = { id: 100, name: 'Heavy resource' };\nconst ref = new WeakRef(target);\n\n// Dereference to access if still alive in memory:\nconst obj = ref.deref();\nif (obj) {\n  console.log('Resource is still in memory:', obj.name);\n} else {\n  console.log('Resource was garbage-collected.');\n}",
                        explanation="ref.deref() returns the target object if alive, or undefined if it was collected.",
                        output="Resource is still in memory: Heavy resource"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create a WeakRef",
                description="Create an object data = { x: 10 }. Wrap it in new WeakRef(data) and read data.x via ref.deref()?.x.",
                starter_code="const data = { x: 10 };\nconst ref = new WeakRef(data);\nconsole.log(ref.deref()?.x);",
                solution="const data = { x: 10 };\nconst ref = new WeakRef(data);\nconsole.log(ref.deref()?.x);",
                hints=["Call ref.deref() to retrieve the target object."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does ref.deref() return if the target object has been garbage-collected?",
                options=[
                    "undefined",
                    "null",
                    "An empty object {}",
                    "Throws a ReferenceError"
                ],
                correct_index=0,
                explanation="deref() returns undefined once the target object has been reclaimed by the garbage collector."
            )
        ],
        key_takeaways=[
            "WeakRef holds an object without preventing garbage collection.",
            "FinalizationRegistry executes callbacks when an object is collected.",
            "Use with caution: garbage collection timing is non-deterministic."
        ],
        tags=["weakref", "finalizationregistry", "memory", "advanced", "es2021"]
    ))

    return lessons
