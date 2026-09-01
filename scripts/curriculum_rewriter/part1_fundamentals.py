"""
Part 1: The JavaScript Language Fundamentals (28 lessons)
All content completely rewritten from scratch in simple, beginner-friendly English with original runnable examples.
"""

from .helpers import make_lesson, make_section, make_code_example, make_exercise, make_quiz

def get_part1_lessons():
    lessons = []

    # 1. intro
    lessons.append(make_lesson(
        slug="intro",
        title="An Introduction to JavaScript",
        description="Discover what JavaScript is, why it powers the modern web, how browsers execute it, and what you can build.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="What is JavaScript?",
                paragraphs=[
                    "JavaScript is the universal programming language of the web. Originally created in 1995 to make static web pages interactive, it has evolved into one of the most widely used and versatile languages in modern software engineering.",
                    "Today, JavaScript runs everywhere: in every web browser, on cloud servers using Node.js or Deno, on mobile devices with React Native, and even in desktop applications like VS Code."
                ],
                code_examples=[
                    make_code_example(
                        title="Your First JavaScript Code",
                        code="const greeting = 'Hello, JavaScript Explorer!';\nconst year = 2026;\n\nconsole.log(greeting);\nconsole.log(`Current year: ${year}`);",
                        explanation="This code declares two variables and prints their values to the console using console.log.",
                        output="Hello, JavaScript Explorer!\nCurrent year: 2026"
                    )
                ],
                bullet_points=[
                    "Built into every modern browser with no setup or installation required.",
                    "High-level and dynamically typed, making it welcoming for beginners.",
                    "Powers both frontend interactive UIs and backend servers."
                ]
            ),
            make_section(
                heading="How JavaScript Runs in the Browser",
                paragraphs=[
                    "Web browsers have an embedded program called a JavaScript Engine (such as V8 in Chrome, SpiderMonkey in Firefox, or JavaScriptCore in Safari).",
                    "When your browser loads a webpage, the engine parses the script, translates it into optimized machine code using Just-In-Time (JIT) compilation, and executes it at lightning speed."
                ],
                callout={
                    'type': 'tip',
                    'text': "JavaScript is completely separate from Java. Although both share syntax influenced by C, their design, execution models, and philosophies are entirely different."
                }
            ),
            make_section(
                heading="What Modern In-Browser JavaScript Can Do",
                paragraphs=[
                    "In a browser environment, JavaScript can read and modify HTML content, change CSS styles dynamically, react to user clicks and keystrokes, and communicate with backend APIs over the network without reloading the page."
                ],
                bullet_points=[
                    "Create, modify, and animate elements on the screen.",
                    "Handle events like button clicks, form submissions, and scrolls.",
                    "Send and receive data using the Fetch API (AJAX).",
                    "Store data locally on the user's computer using localStorage."
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Log a Custom Welcome Message",
                description="Create a variable called language with the value 'JavaScript' and print 'I am learning ' followed by the language name.",
                starter_code="// Create your variable and log the message\nconst language = 'JavaScript';\n\nconsole.log('I am learning ' + language);",
                solution="const language = 'JavaScript';\nconsole.log('I am learning ' + language);",
                hints=["Use string concatenation with the + operator or template literals with backticks."]
            )
        ],
        quiz=[
            make_quiz(
                question="Where does in-browser JavaScript execute?",
                options=[
                    "Directly inside the user's browser via the browser's JavaScript engine",
                    "On a remote server that streams video frames back to the browser",
                    "Only inside special operating system terminals",
                    "In a separate Java Virtual Machine (JVM)"
                ],
                correct_index=0,
                explanation="Browsers include embedded JavaScript engines (like V8 or SpiderMonkey) that compile and execute JavaScript directly on the client machine."
            ),
            make_quiz(
                question="Is JavaScript the same as Java?",
                options=[
                    "No, they are two completely distinct languages with different designs and purposes.",
                    "Yes, JavaScript is simply a compressed version of Java.",
                    "Yes, JavaScript only runs on servers that run Java.",
                    "No, JavaScript is only used for styling, while Java is for logic."
                ],
                correct_index=0,
                explanation="JavaScript and Java are entirely separate languages; JavaScript was created by Netscape and named for marketing reasons during Java's early popularity."
            )
        ],
        key_takeaways=[
            "JavaScript is the core programming language of the interactive web.",
            "JavaScript engines (like V8) compile scripts to machine code just in time for high performance.",
            "In the browser, JavaScript is safely sandboxed to protect user privacy while enabling rich interactivity."
        ],
        tags=["javascript", "fundamentals", "intro", "basics"]
    ))

    # 2. manuals-specifications
    lessons.append(make_lesson(
        slug="manuals-specifications",
        title="Manuals and Specifications",
        description="Learn where to find authoritative documentation, the ECMAScript specification, and MDN reference guides.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="The Official ECMAScript Specification",
                paragraphs=[
                    "JavaScript is standardized under the name ECMAScript (ECMA-262). The specification document is maintained by the TC39 committee, comprising representatives from browser vendors and the open-source community.",
                    "Every year, a new edition of ECMAScript is finalized (e.g. ES2020, ES2023, ES2024), adding new language features and refining existing behaviors."
                ],
                bullet_points=[
                    "ECMA-262: The official standard that defines the language grammar and core semantics.",
                    "TC39 Proposals: The 4-stage process through which new features are proposed and approved."
                ]
            ),
            make_section(
                heading="MDN Web Docs (Mozilla Developer Network)",
                paragraphs=[
                    "While the official specification is rigorous and formal, MDN Web Docs is the gold standard daily reference for web developers.",
                    "MDN provides clear explanations, interactive examples, compatibility tables, and best practices for JavaScript, HTML, and CSS."
                ],
                callout={
                    'type': 'tip',
                    'text': "Always search MDN when you want to know what arguments a method accepts, browser support details, or recommended modern syntax."
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Verify Built-in Method Documentation",
                description="Test the Array.prototype.includes method. Log whether the array ['HTML', 'CSS', 'JavaScript'] includes 'JavaScript'.",
                starter_code="const technologies = ['HTML', 'CSS', 'JavaScript'];\n// Check if 'JavaScript' is in technologies and log the result\nconst hasJS = technologies.includes('JavaScript');\nconsole.log(hasJS);",
                solution="const technologies = ['HTML', 'CSS', 'JavaScript'];\nconst hasJS = technologies.includes('JavaScript');\nconsole.log(hasJS);",
                hints=["Array.prototype.includes() returns true if the element exists in the array."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is ECMAScript?",
                options=[
                    "The official international standard that defines the JavaScript language specification",
                    "A JavaScript framework created by Google",
                    "A CSS preprocessor for web development",
                    "A tool for compiling Python into JavaScript"
                ],
                correct_index=0,
                explanation="ECMAScript is the standard maintained by ECMA International (ECMA-262) that defines how JavaScript works."
            )
        ],
        key_takeaways=[
            "ECMAScript defines the official specification of the JavaScript language.",
            "MDN Web Docs is the most reliable day-to-day documentation source for web developers.",
            "Browser compatibility can be checked via MDN or CanIUse."
        ],
        tags=["specifications", "ecmascript", "documentation", "mdn"]
    ))

    # 3. code-editors
    lessons.append(make_lesson(
        slug="code-editors",
        title="Code Editors and IDEs",
        description="Understand development tools, lightweight editors vs IDEs, and setting up your JavaScript workflow.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Choosing the Right Editor",
                paragraphs=[
                    "To write code professionally, developers use specialized text editors called Integrated Development Environments (IDEs) or code editors.",
                    "Visual Studio Code (VS Code) is currently the most popular editor worldwide, featuring extensive extensions, built-in Git integration, intelligent code completion (IntelliSense), and terminal access."
                ],
                bullet_points=[
                    "VS Code: Free, open-source, extensible, and backed by a vibrant community.",
                    "WebStorm / IntelliJ: Powerful commercial IDE with deep refactoring and indexing tools.",
                    "In-browser Playgrounds (like RunJS): Ideal for immediate testing, experimentation, and learning without local setup."
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Test Code Execution in RunJS",
                description="Write a function called calculateSum that takes two numbers and returns their sum. Call it with 15 and 27.",
                starter_code="function calculateSum(a, b) {\n  // Return the sum of a and b\n  return a + b;\n}\n\nconsole.log(calculateSum(15, 27));",
                solution="function calculateSum(a, b) {\n  return a + b;\n}\nconsole.log(calculateSum(15, 27));",
                hints=["Use the return keyword with a + b."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the main benefit of using a code editor with IntelliSense?",
                options=[
                    "It provides smart autocompletion, type hints, and real-time syntax checking as you type",
                    "It prevents your computer from overheating",
                    "It automatically buys domain names for you",
                    "It eliminates the need to learn programming"
                ],
                correct_index=0,
                explanation="IntelliSense provides code completion, documentation tooltips, and syntax warnings to boost productivity and reduce errors."
            )
        ],
        key_takeaways=[
            "Modern editors like VS Code streamline development with autocompletion, linting, and debugging.",
            "Browser playgrounds like RunJS offer immediate feedback without local configuration."
        ],
        tags=["tools", "editor", "vscode", "workflow"]
    ))

    # 4. devtools
    lessons.append(make_lesson(
        slug="devtools",
        title="Developer Console and Browser Tools",
        description="Master the browser developer tools, console logging, error diagnostics, and inspecting live elements.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="The Developer Console",
                paragraphs=[
                    "Every modern browser includes built-in Developer Tools (DevTools). You can open them by pressing F12 or Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows).",
                    "The Console tab is a live JavaScript environment. You can enter commands, inspect variables, and view output or warnings emitted by running scripts."
                ],
                code_examples=[
                    make_code_example(
                        title="Console Methods",
                        code="console.log('Informational message');\nconsole.warn('Warning: value is nearly empty');\nconsole.error('Error: failed to fetch profile');\nconsole.table([\n  { id: 1, name: 'Alice', role: 'Admin' },\n  { id: 2, name: 'Bob', role: 'User' }\n]);",
                        explanation="Different console methods format messages with appropriate visual icons and tabular layouts.",
                        output="Informational message\nWarning: value is nearly empty\nError: failed to fetch profile"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Format a User Profile in the Console",
                description="Create an object representing a user with name 'Sarah' and level 5. Output it using console.log.",
                starter_code="const user = {\n  name: 'Sarah',\n  level: 5\n};\n\nconsole.log(user);",
                solution="const user = {\n  name: 'Sarah',\n  level: 5\n};\nconsole.log(user);",
                hints=["Pass the user object directly to console.log."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which console method prints a message formatted with warning styling in DevTools?",
                options=[
                    "console.warn()",
                    "console.stop()",
                    "console.halt()",
                    "console.alert()"
                ],
                correct_index=0,
                explanation="console.warn() prints yellow warning banners in the browser developer console."
            )
        ],
        key_takeaways=[
            "DevTools is essential for inspecting DOM nodes, debugging JavaScript, and viewing network requests.",
            "Use console.log, console.warn, console.error, and console.table for structured diagnostics."
        ],
        tags=["devtools", "console", "debugging", "browser"]
    ))

    # 5. hello-world
    lessons.append(make_lesson(
        slug="hello-world",
        title="Hello, World! & Your First Script",
        description="Learn how to attach JavaScript to HTML using the script tag and run your very first program.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Embedding JavaScript in HTML",
                paragraphs=[
                    "JavaScript can be inserted into an HTML document anywhere using the <script> tag.",
                    "When the browser parses HTML and encounters a <script> tag, it executes the code inside immediately before continuing to parse the rest of the document."
                ],
                code_examples=[
                    make_code_example(
                        title="Inline and External Scripts",
                        code="// In HTML:\n// <script src=\"app.js\"></script>\n\n// In app.js:\nconst message = 'Hello, World!';\nconsole.log(message);",
                        explanation="Separating JavaScript into external files (.js) keeps code organized, reusable, and allows browsers to cache the script.",
                        output="Hello, World!"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Say Hello",
                description="Write code that outputs 'Hello, World!' to the console.",
                starter_code="// Write your code here\nconsole.log('Hello, World!');",
                solution="console.log('Hello, World!');",
                hints=["Use console.log('Hello, World!');"]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is it best practice to put JavaScript in external .js files?",
                options=[
                    "It separates concerns and allows browsers to cache the file for faster page loads.",
                    "JavaScript only executes if it is in an external file.",
                    "External files make HTML completely obsolete.",
                    "Inline scripts are prohibited in modern browsers."
                ],
                correct_index=0,
                explanation="External files can be cached by the browser and improve maintainability."
            )
        ],
        key_takeaways=[
            "The <script> tag is used to embed or link JavaScript in HTML documents.",
            "External scripts (.js) are preferred for code organization, caching, and maintainability."
        ],
        tags=["hello-world", "script-tag", "basics", "html"]
    ))

    # 6. structure
    lessons.append(make_lesson(
        slug="structure",
        title="Code Structure: Statements & Semicolons",
        description="Understand statements, automatic semicolon insertion (ASI), and how JavaScript organizes code.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Statements and Semicolons",
                paragraphs=[
                    "Statements are syntax constructs and commands that perform actions. In JavaScript, statements are typically separated by semicolons (;).",
                    "While JavaScript has Automatic Semicolon Insertion (ASI), relying on it can lead to subtle bugs. Explicitly writing semicolons is recommended by most style guides."
                ],
                code_examples=[
                    make_code_example(
                        title="Statements and Expressions",
                        code="const a = 10;\nconst b = 20;\nconst sum = a + b;\n\nconsole.log('Sum:', sum);",
                        explanation="Each statement performs a discrete action, terminated with a semicolon.",
                        output="Sum: 30"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Combine Multiple Statements",
                description="Declare two variables x = 5 and y = 10. Multiply them and log the result.",
                starter_code="const x = 5;\nconst y = 10;\nconst result = x * y;\nconsole.log(result);",
                solution="const x = 5;\nconst y = 10;\nconst result = x * y;\nconsole.log(result);",
                hints=["Multiply using the * operator."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is Automatic Semicolon Insertion (ASI)?",
                options=[
                    "A browser mechanism that attempts to insert semicolons automatically when they are omitted",
                    "A tool that compiles TypeScript to JavaScript",
                    "A plugin that changes font sizes",
                    "An editor command to format entire files"
                ],
                correct_index=0,
                explanation="ASI is built into JavaScript engines, but writing explicit semicolons prevents unexpected parsing edge cases."
            )
        ],
        key_takeaways=[
            "Statements perform operations and are separated by semicolons.",
            "Always be consistent with semicolons to avoid ASI pitfalls."
        ],
        tags=["structure", "semicolons", "syntax", "asi"]
    ))

    # 7. strict-mode
    lessons.append(make_lesson(
        slug="strict-mode",
        title="The Modern Mode: 'use strict'",
        description="Learn how strict mode modernizes JavaScript behavior, catches silent errors, and prevents sloppy mistakes.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Why Strict Mode Matters",
                paragraphs=[
                    "For many years, JavaScript evolved with backwards compatibility, meaning questionable design decisions could not be removed without breaking old websites.",
                    "In 2009, ECMAScript 5 introduced Strict Mode ('use strict'). Placing 'use strict' at the top of a file or function enables cleaner rules: it turns silent mistakes into throws, prohibits accidental global variables, and reserves keywords for future editions."
                ],
                code_examples=[
                    make_code_example(
                        title="Enabling Strict Mode",
                        code="'use strict';\n\nlet message = 'Safe and modern!';\nconsole.log(message);\n\n// In non-strict mode, undeclared variable assignment creates a global:\n// undeclaredVar = 42; // In strict mode, this throws a ReferenceError!",
                        explanation="Strict mode prevents accidental globals and enforces clean variable declaration.",
                        output="Safe and modern!"
                    )
                ],
                callout={
                    'type': 'important',
                    'text': "Modern JavaScript ES Modules (import/export) and ES6 Classes enable strict mode automatically by default!"
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Strict Mode Variable Declaration",
                description="Write a script using strict mode that declares a variable score with value 100 and logs it.",
                starter_code="'use strict';\n\nconst score = 100;\nconsole.log(score);",
                solution="'use strict';\nconst score = 100;\nconsole.log(score);",
                hints=["Always use const or let to declare variables."]
            )
        ],
        quiz=[
            make_quiz(
                question="What happens in strict mode if you assign a value to an undeclared variable (e.g. x = 10 without let/const)?",
                options=[
                    "A ReferenceError is thrown immediately",
                    "It silently creates a global variable",
                    "The browser reboots",
                    "It converts the value to null"
                ],
                correct_index=0,
                explanation="In strict mode, assigning to an undeclared variable throws a ReferenceError, preventing accidental global variable leakage."
            )
        ],
        key_takeaways=[
            "'use strict' activates modern semantics and turns silent bugs into throw errors.",
            "ES Modules and ES6 Classes are always in strict mode automatically."
        ],
        tags=["strict-mode", "es5", "best-practices", "safety"]
    ))

    # 8. variables
    lessons.append(make_lesson(
        slug="variables",
        title="Variables & Constants: let, const, var",
        description="Master memory boxes in JavaScript: declaring mutable variables with let, immutable constants with const, and why var is legacy.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Understanding Variables",
                paragraphs=[
                    "A variable is a named storage container for data. You can think of it as a labeled box that holds values in your computer's memory.",
                    "In modern JavaScript, there are two primary keywords for declaring variables: const and let."
                ],
                code_examples=[
                    make_code_example(
                        title="let vs const",
                        code="// Use 'const' for values that should not be reassigned:\nconst birthYear = 1998;\n\n// Use 'let' when the value will change over time:\nlet age = 27;\nage = 28; // valid reassignment\n\nconsole.log('Birth Year:', birthYear);\nconsole.log('Current Age:', age);",
                        explanation="const protects values from accidental reassignment, while let permits reassignment.",
                        output="Birth Year: 1998\nCurrent Age: 28"
                    )
                ],
                bullet_points=[
                    "const: Block-scoped, cannot be reassigned (default choice for 90% of variables).",
                    "let: Block-scoped, can be reassigned (use for counters, accumulators, toggles).",
                    "var: Function-scoped, hoisted, legacy (avoid in modern code)."
                ]
            ),
            make_section(
                heading="Naming Rules in JavaScript",
                paragraphs=[
                    "Variable names must follow rules: they can contain letters, digits, symbols ($ and _), but cannot start with a digit. Names cannot match reserved keywords like return, class, or if.",
                    "By convention, JavaScript developers use camelCase for variables and UPPER_SNAKE_CASE for hard-coded constants."
                ],
                callout={
                    'type': 'tip',
                    'text': "Always prefer descriptive names. userAge is infinitely clearer to your future self than x or a."
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Swap Two Variables",
                description="Given let a = 1 and let b = 2, swap their values so a becomes 2 and b becomes 1.",
                starter_code="let a = 1;\nlet b = 2;\n\n// Swap using a temporary variable or destructuring\nconst temp = a;\na = b;\nb = temp;\n\nconsole.log('a:', a, 'b:', b);",
                solution="let a = 1;\nlet b = 2;\nconst temp = a;\na = b;\nb = temp;\nconsole.log('a:', a, 'b:', b);",
                hints=["Store a in a temporary variable before overwriting it with b."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which keyword should you use by default when declaring a variable whose reference will not change?",
                options=[
                    "const",
                    "let",
                    "var",
                    "static"
                ],
                correct_index=0,
                explanation="Always default to const. It prevents accidental reassignments and makes code intent crystal clear."
            )
        ],
        key_takeaways=[
            "Use const by default; use let only when you intend to reassign the variable.",
            "Avoid var in modern JavaScript due to confusing hoisting and lack of block scoping.",
            "Follow camelCase conventions and choose meaningful variable names."
        ],
        tags=["variables", "let", "const", "memory", "scope"]
    ))

    # 9. types
    lessons.append(make_lesson(
        slug="types",
        title="Data Types in JavaScript",
        description="Explore the 8 fundamental data types in JavaScript: 7 primitives and the object type, plus the typeof operator.",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="The 8 Fundamental Data Types",
                paragraphs=[
                    "JavaScript is dynamically typed: variables are not bound to a specific type, but the values they hold are.",
                    "There are 7 primitive types (Number, BigInt, String, Boolean, null, undefined, Symbol) and 1 complex reference type (Object)."
                ],
                code_examples=[
                    make_code_example(
                        title="Checking Types with typeof",
                        code="console.log(typeof 42);              // 'number'\nconsole.log(typeof 'Hello');         // 'string'\nconsole.log(typeof true);            // 'boolean'\nconsole.log(typeof undefined);       // 'undefined'\nconsole.log(typeof 9007199254740991n); // 'bigint'\nconsole.log(typeof Symbol('id'));    // 'symbol'\nconsole.log(typeof { name: 'Dan' }); // 'object'\nconsole.log(typeof null);            // 'object' (known historical bug!)",
                        explanation="The typeof operator returns a string representing the type of the evaluated operand.",
                        output="number\nstring\nboolean\nundefined\nbigint\nsymbol\nobject\nobject"
                    )
                ],
                bullet_points=[
                    "Primitive types are immutable values stored directly in memory.",
                    "Objects (including arrays and functions) are collections of properties and values passed by reference.",
                    "null represents the intentional absence of any object value, while undefined means a variable has been declared but not yet assigned."
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Identify Primitive Types",
                description="Declare a variable of type string, a variable of type number, and a variable of type boolean. Log their types using typeof.",
                starter_code="const text = 'Hello';\nconst count = 10;\nconst isReady = true;\n\nconsole.log(typeof text, typeof count, typeof isReady);",
                solution="const text = 'Hello';\nconst count = 10;\nconst isReady = true;\nconsole.log(typeof text, typeof count, typeof isReady);",
                hints=["Use typeof text, typeof count, typeof isReady."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does typeof null evaluate to in JavaScript?",
                options=[
                    "'object'",
                    "'null'",
                    "'undefined'",
                    "'primitive'"
                ],
                correct_index=0,
                explanation="Due to a famous bug from the original 1995 JavaScript implementation, typeof null returns 'object'. It is preserved for backwards compatibility."
            )
        ],
        key_takeaways=[
            "JavaScript has 7 primitive types and 1 reference type (Object).",
            "Primitives are immutable and compared by value; objects are compared by reference.",
            "Use typeof to inspect variable types at runtime."
        ],
        tags=["types", "primitives", "typeof", "null", "undefined"]
    ))

    # 10. alert-prompt-confirm
    lessons.append(make_lesson(
        slug="alert-prompt-confirm",
        title="Interaction: alert, prompt, and confirm",
        description="Learn how browsers provide modal interaction dialogs to show messages, ask questions, and confirm actions.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Browser Modal Windows",
                paragraphs=[
                    "Browsers provide three simple modal dialogs: alert, prompt, and confirm.",
                    "While modal dialogs pause script execution and prevent user interaction with the rest of the webpage until closed, they are useful for basic debugging and beginner demos."
                ],
                code_examples=[
                    make_code_example(
                        title="Prompt and Confirm Usage",
                        code="// Simulating user interaction:\nconst userName = 'Alex';\nconst wantsNewsletter = true;\n\nif (wantsNewsletter) {\n  console.log(`Welcome aboard, ${userName}!`);\n}",
                        explanation="In browsers, prompt() captures text input from the visitor and confirm() returns true or false.",
                        output="Welcome aboard, Alex!"
                    )
                ],
                bullet_points=[
                    "alert(msg): Displays a notification with an OK button.",
                    "prompt(title, [default]): Displays a text input and returns the entered string or null if cancelled.",
                    "confirm(question): Displays OK and Cancel buttons and returns true or false."
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Simulate a Confirmation Check",
                description="Create a boolean variable userConfirmed = true. If true, print 'Action confirmed', else print 'Action cancelled'.",
                starter_code="const userConfirmed = true;\n\nif (userConfirmed) {\n  console.log('Action confirmed');\n} else {\n  console.log('Action cancelled');\n}",
                solution="const userConfirmed = true;\nif (userConfirmed) {\n  console.log('Action confirmed');\n} else {\n  console.log('Action cancelled');\n}",
                hints=["Use an if/else conditional check."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does prompt() return if the user clicks 'Cancel'?",
                options=[
                    "null",
                    "undefined",
                    "false",
                    "'' (empty string)"
                ],
                correct_index=0,
                explanation="When a user clicks Cancel on a browser prompt, it returns null."
            )
        ],
        key_takeaways=[
            "alert, prompt, and confirm are synchronous modal dialogs provided by the browser window.",
            "Modern web applications typically use custom styled modal components instead of native dialogs."
        ],
        tags=["interaction", "alert", "prompt", "confirm", "browser"]
    ))

    # 11. type-conversions
    lessons.append(make_lesson(
        slug="type-conversions",
        title="Type Conversions in JavaScript",
        description="Master explicit conversions with String(), Number(), and Boolean(), plus implicit coercion gotchas.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="String, Number, and Boolean Conversions",
                paragraphs=[
                    "Most of the time, operators and functions automatically convert values to the expected type. However, explicit conversion makes your code predictable and safe.",
                    "The three most common explicit conversions are String(value), Number(value), and Boolean(value)."
                ],
                code_examples=[
                    make_code_example(
                        title="Explicit Conversions",
                        code="// Number conversion:\nconsole.log(Number('123'));   // 123\nconsole.log(Number('hello')); // NaN (Not a Number)\nconsole.log(Number(true));    // 1\nconsole.log(Number(false));   // 0\n\n// Boolean conversion (falsy values: 0, '', null, undefined, NaN):\nconsole.log(Boolean('hello')); // true\nconsole.log(Boolean(''));      // false\nconsole.log(Boolean(0));       // false\nconsole.log(Boolean([]));      // true (all objects/arrays are truthy!)",
                        explanation="Explicit conversion cleanly parses values into their numeric or boolean representations.",
                        output="123\nNaN\n1\n0\ntrue\nfalse\nfalse\ntrue"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Convert Strings to Numbers",
                description="Given string price = '45' and string tax = '5', convert both to numbers and log their total.",
                starter_code="const price = '45';\nconst tax = '5';\n\nconst total = Number(price) + Number(tax);\nconsole.log(total);",
                solution="const price = '45';\nconst tax = '5';\nconst total = Number(price) + Number(tax);\nconsole.log(total);",
                hints=["Wrap each variable in Number() before adding."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which of the following is considered falsy when converted with Boolean()?",
                options=[
                    "0 (the number zero)",
                    "'0' (a string containing zero)",
                    "[] (an empty array)",
                    "{} (an empty object)"
                ],
                correct_index=0,
                explanation="0, '', null, undefined, and NaN are falsy. Any string with characters (including '0') and all objects/arrays are truthy."
            )
        ],
        key_takeaways=[
            "Convert explicitly using String(), Number(), and Boolean() for clean code.",
            "Remember the falsy values: false, 0, -0, 0n, '', null, undefined, and NaN."
        ],
        tags=["type-conversions", "coercion", "number", "boolean"]
    ))

    # 12. operators
    lessons.append(make_lesson(
        slug="operators",
        title="Basic Operators & Math",
        description="Learn arithmetic operators (+, -, *, /, %, **), increment/decrement, assignment shortcuts, and operator precedence.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Arithmetic Operations",
                paragraphs=[
                    "JavaScript supports standard math operators: addition (+), subtraction (-), multiplication (*), division (/), remainder (%), and exponentiation (**).",
                    "The remainder operator (%) returns the remainder after integer division, and exponentiation (**) raises a number to the power of another."
                ],
                code_examples=[
                    make_code_example(
                        title="Math Operators in Action",
                        code="const a = 13;\nconst b = 5;\n\nconsole.log('Quotient:', Math.floor(a / b)); // 2\nconsole.log('Remainder (%):', a % b);          // 3\nconsole.log('Power (**):', 2 ** 3);             // 8\n\n// String concatenation with +\nconsole.log('1' + 2); // '12' (string concatenation!)",
                        explanation="The + operator acts as both arithmetic addition and string concatenation if an operand is a string.",
                        output="Quotient: 2\nRemainder (%): 3\nPower (**): 8\n12"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Calculate Remainder and Exponent",
                description="Calculate 25 modulo 4 and store in rem. Calculate 3 cubed (3 to the power 3) and store in pow. Log both.",
                starter_code="const rem = 25 % 4;\nconst pow = 3 ** 3;\n\nconsole.log('Remainder:', rem, 'Power:', pow);",
                solution="const rem = 25 % 4;\nconst pow = 3 ** 3;\nconsole.log('Remainder:', rem, 'Power:', pow);",
                hints=["Use % for remainder and ** for exponentiation."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the result of '5' + 3 in JavaScript?",
                options=[
                    "'53' (string concatenation)",
                    "8 (numeric addition)",
                    "NaN",
                    "TypeError"
                ],
                correct_index=0,
                explanation="When the binary + operator encounters a string operand, it converts the other operand to a string and concatenates them."
            )
        ],
        key_takeaways=[
            "Use standard arithmetic operators (+, -, *, /, %, **).",
            "Be aware that binary + concatenates strings if either side is a string.",
            "Use parentheses to explicitly control evaluation precedence."
        ],
        tags=["operators", "math", "arithmetic", "modulo"]
    ))

    # 13. comparison
    lessons.append(make_lesson(
        slug="comparison",
        title="Comparisons & Strict Equality",
        description="Understand comparison operators, why you should always use === instead of ==, and comparing different types.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Strict Equality vs Loose Equality",
                paragraphs=[
                    "Comparison operators (>, <, >=, <=) return a boolean result: true or false.",
                    "For equality checks, JavaScript provides two options: loose equality (==) and strict equality (===). Loose equality coerces types, leading to bizarre bugs, while strict equality checks both value and type without conversion."
                ],
                code_examples=[
                    make_code_example(
                        title="=== vs ==",
                        code="console.log(0 == false);   // true (loose equality coerces false to 0!)\nconsole.log(0 === false);  // false (different types: number vs boolean)\n\nconsole.log('' == false);  // true\nconsole.log('' === false); // false\n\nconsole.log(5 === 5);      // true\nconsole.log('5' === 5);    // false",
                        explanation="Strict equality (===) guarantees that both type and value match exactly.",
                        output="true\nfalse\ntrue\nfalse\ntrue\nfalse"
                    )
                ],
                callout={
                    'type': 'important',
                    'text': "Always use strict equality (===) and strict inequality (!==) in professional JavaScript code."
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Safe Comparison",
                description="Write a condition that checks if a user's role strictly equals 'admin' and age is greater than or equal to 18.",
                starter_code="const role = 'admin';\nconst age = 20;\n\nconst isAuthorized = (role === 'admin') && (age >= 18);\nconsole.log(isAuthorized);",
                solution="const role = 'admin';\nconst age = 20;\nconst isAuthorized = (role === 'admin') && (age >= 18);\nconsole.log(isAuthorized);",
                hints=["Use === for role check and >= for age."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is === preferred over ==?",
                options=[
                    "Because === does not perform implicit type conversion, making comparisons predictable and safe",
                    "Because === is faster to type",
                    "Because == was removed from the ECMAScript standard",
                    "Because == only works with arrays"
                ],
                correct_index=0,
                explanation="Strict equality (===) checks both value and type without surprising type coercions."
            )
        ],
        key_takeaways=[
            "Always use === and !== for equality checks.",
            "Comparisons return boolean values (true or false).",
            "Strings are compared character-by-character according to Unicode order."
        ],
        tags=["comparison", "equality", "strict-equality", "booleans"]
    ))

    # 14. ifelse
    lessons.append(make_lesson(
        slug="ifelse",
        title="Conditional Branching: if, else, and ternary '?'",
        description="Control program flow with if/else branches, multi-condition chains, and the conditional ternary operator.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="The if-else Statement",
                paragraphs=[
                    "The if statement executes a block of code only if a specified condition evaluates to true.",
                    "You can chain multiple conditions using else if and provide a final catch-all with else."
                ],
                code_examples=[
                    make_code_example(
                        title="Grading Example",
                        code="const score = 85;\n\nif (score >= 90) {\n  console.log('Grade: A');\n} else if (score >= 80) {\n  console.log('Grade: B');\n} else {\n  console.log('Grade: C');\n}",
                        explanation="The program tests conditions sequentially from top to bottom and executes the first truthy branch.",
                        output="Grade: B"
                    )
                ]
            ),
            make_section(
                heading="The Conditional Operator (Ternary '?')",
                paragraphs=[
                    "When you want to return or assign a value based on a condition in a single expression, use the ternary operator: condition ? valueIfTrue : valueIfFalse."
                ],
                code_examples=[
                    make_code_example(
                        title="Ternary Expression",
                        code="const age = 20;\nconst access = age >= 18 ? 'Granted' : 'Denied';\nconsole.log(access);",
                        explanation="The ternary operator evaluates age >= 18 and returns 'Granted'.",
                        output="Granted"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Check Even or Odd with Ternary",
                description="Write a ternary expression that evaluates number = 14 and stores 'even' if divisible by 2, otherwise 'odd'.",
                starter_code="const number = 14;\nconst parity = number % 2 === 0 ? 'even' : 'odd';\nconsole.log(parity);",
                solution="const number = 14;\nconst parity = number % 2 === 0 ? 'even' : 'odd';\nconsole.log(parity);",
                hints=["Use number % 2 === 0 to test for even numbers."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the structure of the conditional ternary operator?",
                options=[
                    "condition ? exprIfTrue : exprIfFalse",
                    "condition : exprIfTrue ? exprIfFalse",
                    "if (condition) ? true : false",
                    "? condition -> true : false"
                ],
                correct_index=0,
                explanation="The ternary operator takes three operands: condition ? trueExpression : falseExpression."
            )
        ],
        key_takeaways=[
            "Use if, else if, and else for multi-step branching logic.",
            "Use the ternary operator (?) for concise value assignments based on a single condition."
        ],
        tags=["conditionals", "if-else", "ternary", "control-flow"]
    ))

    # 15. logical-operators
    lessons.append(make_lesson(
        slug="logical-operators",
        title="Logical Operators: AND, OR, NOT",
        description="Master logical operators (&&, ||, !), short-circuit evaluation, and default value assignments.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="AND (&&), OR (||), and NOT (!)",
                paragraphs=[
                    "Logical operators combine or invert boolean values. In JavaScript, they have an additional superpower called short-circuit evaluation.",
                    "OR (||) finds and returns the first truthy value. AND (&&) finds and returns the first falsy value."
                ],
                code_examples=[
                    make_code_example(
                        title="Short-Circuit Evaluation",
                        code="const currentUser = null;\nconst defaultUser = 'Guest';\n\n// OR returns first truthy:\nconst activeUser = currentUser || defaultUser;\nconsole.log('Active User:', activeUser); // 'Guest'\n\n// AND returns first falsy:\nconst isLoggedIn = true;\nconst hasPermission = true;\nconst canEdit = isLoggedIn && hasPermission;\nconsole.log('Can Edit:', canEdit); // true",
                        explanation="Short-circuit evaluation stops evaluating as soon as the result is determined.",
                        output="Active User: Guest\nCan Edit: true"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Verify Range with AND",
                description="Write a condition that checks if hour = 14 is between 9 and 18 inclusive.",
                starter_code="const hour = 14;\nconst isBusinessHours = hour >= 9 && hour <= 18;\nconsole.log(isBusinessHours);",
                solution="const hour = 14;\nconst isBusinessHours = hour >= 9 && hour <= 18;\nconsole.log(isBusinessHours);",
                hints=["Combine two comparisons with the && operator."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does 'apple' || 'banana' evaluate to?",
                options=[
                    "'apple'",
                    "'banana'",
                    "true",
                    "false"
                ],
                correct_index=0,
                explanation="OR (||) finds the first truthy value. Since 'apple' is a non-empty string (truthy), it returns 'apple' immediately without checking 'banana'."
            )
        ],
        key_takeaways=[
            "|| returns the first truthy value or the last value if all are falsy.",
            "&& returns the first falsy value or the last value if all are truthy.",
            "! inverts a boolean, and !! converts any value to its boolean equivalent."
        ],
        tags=["logical-operators", "boolean-logic", "short-circuit", "and", "or"]
    ))

    # 16. nullish-coalescing-operator
    lessons.append(make_lesson(
        slug="nullish-coalescing-operator",
        title="Nullish Coalescing Operator: '??'",
        description="Learn how '??' treats only null and undefined as missing values, solving the famous 0 and '' bugs with '||'.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Why '??' Was Added to JavaScript",
                paragraphs=[
                    "Before ECMAScript 2020, developers used || to assign fallback values: const count = userCount || 10.",
                    "However, if userCount was 0 (or empty string ''), || treated it as falsy and mistakenly applied the fallback! The nullish coalescing operator (??) specifically checks for defined values, treating only null and undefined as missing."
                ],
                code_examples=[
                    make_code_example(
                        title="?? vs ||",
                        code="const count = 0;\n\n// Bug with ||:\nconst badDefault = count || 10;\nconsole.log('Using ||:', badDefault); // 10 (Wrong! 0 was lost)\n\n// Correct with ??:\nconst goodDefault = count ?? 10;\nconsole.log('Using ??:', goodDefault); // 0 (Preserved!)",
                        explanation="Nullish coalescing preserves 0, false, and empty strings, only falling back for null and undefined.",
                        output="Using ||: 10\nUsing ??: 0"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Provide Default Height",
                description="Given let height = 0, use ?? to set finalHeight to 100 only if height is null or undefined.",
                starter_code="const height = 0;\nconst finalHeight = height ?? 100;\nconsole.log(finalHeight);",
                solution="const height = 0;\nconst finalHeight = height ?? 100;\nconsole.log(finalHeight);",
                hints=["Use the ?? operator between height and 100."]
            )
        ],
        quiz=[
            make_quiz(
                question="What values are considered 'nullish' by the ?? operator?",
                options=[
                    "Only null and undefined",
                    "0, false, null, and undefined",
                    "Empty strings and empty arrays",
                    "Any falsy value"
                ],
                correct_index=0,
                explanation="The nullish coalescing operator only falls back when the left operand is strictly null or undefined."
            )
        ],
        key_takeaways=[
            "Use ?? when you want fallback defaults that still allow 0, false, or '' as valid values.",
            "Use || only when you want any falsy value to trigger the fallback."
        ],
        tags=["nullish-coalescing", "defaults", "es2020", "null", "undefined"]
    ))

    # 17. while-for
    lessons.append(make_lesson(
        slug="while-for",
        title="Loops: while, do...while, and for",
        description="Automate repetitive tasks using while, do...while, standard for loops, break, and continue.",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="The for Loop",
                paragraphs=[
                    "Loops execute a code block repeatedly until a condition is no longer met.",
                    "The standard for loop consists of initialization, condition, and increment step: for (let i = 0; i < limit; i++)."
                ],
                code_examples=[
                    make_code_example(
                        title="Standard for Loop and Break",
                        code="const numbers = [10, 20, 30, 40, 50];\nlet sum = 0;\n\nfor (let i = 0; i < numbers.length; i++) {\n  sum += numbers[i];\n}\n\nconsole.log('Total Sum:', sum);",
                        explanation="Iterates through each element of the array and accumulates the sum.",
                        output="Total Sum: 150"
                    )
                ]
            ),
            make_section(
                heading="while and do...while",
                paragraphs=[
                    "Use while when you don't know the exact number of iterations in advance.",
                    "do...while always executes the loop body at least once before checking the condition."
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Print Even Numbers",
                description="Write a for loop that iterates from 2 up to 10 and prints only even numbers.",
                starter_code="for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}",
                solution="for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}",
                hints=["Increment by 2 on each iteration (i += 2)."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the difference between while and do...while?",
                options=[
                    "do...while guarantees the loop body runs at least once before testing the condition",
                    "while loops cannot use break",
                    "do...while only runs with numbers",
                    "There is no difference"
                ],
                correct_index=0,
                explanation="do...while checks the condition at the end of the iteration, ensuring at least one execution."
            )
        ],
        key_takeaways=[
            "for loops are best when the number of iterations is known.",
            "while loops are best for indefinite conditions.",
            "Use break to exit early and continue to skip to the next iteration."
        ],
        tags=["loops", "for", "while", "iteration"]
    ))

    # 18. switch
    lessons.append(make_lesson(
        slug="switch",
        title="The 'switch' Statement",
        description="Organize multi-branch equality comparisons cleanly using switch, case, break, and default clauses.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Syntax and Behavior",
                paragraphs=[
                    "A switch statement replaces multiple if-else equality checks (a === value1 || a === value2).",
                    "Each case specifies a target value. When matched, execution continues until a break statement is encountered."
                ],
                code_examples=[
                    make_code_example(
                        title="switch Example",
                        code="const day = 'Wednesday';\nlet message = '';\n\nswitch (day) {\n  case 'Monday':\n    message = 'Start of the week!';\n    break;\n  case 'Wednesday':\n    message = 'Midweek milestone!';\n    break;\n  case 'Friday':\n    message = 'Weekend is here!';\n    break;\n  default:\n    message = 'Regular work day.';\n}\n\nconsole.log(message);",
                        explanation="Matches 'Wednesday' and executes the corresponding block, exiting via break.",
                        output="Midweek milestone!"
                    )
                ],
                callout={
                    'type': 'warning',
                    'text': "Always remember the break statement! Without break, execution falls through into subsequent cases regardless of their condition."
                }
            )
        ],
        exercises=[
            make_exercise(
                title="Map HTTP Status to Message",
                description="Write a switch statement for statusCode = 200 that sets statusText to 'OK' for 200, 'Not Found' for 404, and 'Error' by default.",
                starter_code="const statusCode = 200;\nlet statusText = '';\n\nswitch (statusCode) {\n  case 200:\n    statusText = 'OK';\n    break;\n  case 404:\n    statusText = 'Not Found';\n    break;\n  default:\n    statusText = 'Error';\n}\n\nconsole.log(statusText);",
                solution="const statusCode = 200;\nlet statusText = '';\nswitch (statusCode) {\n  case 200:\n    statusText = 'OK';\n    break;\n  case 404:\n    statusText = 'Not Found';\n    break;\n  default:\n    statusText = 'Error';\n}\nconsole.log(statusText);",
                hints=["Use case 200: and don't forget the break."]
            )
        ],
        quiz=[
            make_quiz(
                question="What type of equality does switch use when comparing values?",
                options=[
                    "Strict equality (===)",
                    "Loose equality (==)",
                    "Regex matching",
                    "Substring inclusion"
                ],
                correct_index=0,
                explanation="The switch statement always compares cases using strict equality (===)."
            )
        ],
        key_takeaways=[
            "Use switch for multi-value exact equality branches.",
            "Always include break statements to avoid unintentional case fallthrough.",
            "Provide a default case to handle unmatched values gracefully."
        ],
        tags=["switch", "control-flow", "case", "branching"]
    ))

    # 19. function-basics
    lessons.append(make_lesson(
        slug="function-basics",
        title="Functions: Declarations, Parameters & Returns",
        description="The core building block of JavaScript: declaring functions, passing arguments, default parameters, and returning values.",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="Declaring and Calling Functions",
                paragraphs=[
                    "Functions are reusable blocks of code that perform a specific task. They prevent code duplication and make programs modular.",
                    "A function declaration begins with the function keyword, followed by a name, parameter list, and body."
                ],
                code_examples=[
                    make_code_example(
                        title="Function with Parameters and Return",
                        code="function calculateArea(width, height = 10) {\n  return width * height;\n}\n\nconst room1 = calculateArea(5, 8);\nconst room2 = calculateArea(6); // height defaults to 10\n\nconsole.log('Room 1 Area:', room1);\nconsole.log('Room 2 Area:', room2);",
                        explanation="Functions receive arguments, compute a result, and return a value using return.",
                        output="Room 1 Area: 40\nRoom 2 Area: 60"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create a Greeting Function",
                description="Write a function greet(name) that returns 'Welcome, ' + name + '!'. Call it with 'Emma'.",
                starter_code="function greet(name) {\n  return `Welcome, ${name}!`;\n}\n\nconsole.log(greet('Emma'));",
                solution="function greet(name) {\n  return `Welcome, ${name}!`;\n}\nconsole.log(greet('Emma'));",
                hints=["Use return `Welcome, ${name}!`;"]
            )
        ],
        quiz=[
            make_quiz(
                question="What value does a JavaScript function return if no return statement is specified?",
                options=[
                    "undefined",
                    "null",
                    "0",
                    "false"
                ],
                correct_index=0,
                explanation="In JavaScript, functions without an explicit return statement implicitly return undefined."
            )
        ],
        key_takeaways=[
            "Functions group code into reusable, modular units.",
            "Use parameters to accept inputs and return to output results.",
            "Default parameters allow specifying fallbacks when arguments are omitted."
        ],
        tags=["functions", "declarations", "parameters", "return"]
    ))

    # 20. function-expressions
    lessons.append(make_lesson(
        slug="function-expressions",
        title="Function Expressions & First-Class Functions",
        description="Understand functions as values: assigning functions to variables, passing callbacks, and hoisting differences.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Functions are Values",
                paragraphs=[
                    "In JavaScript, functions are first-class citizens: they are values that can be assigned to variables, stored in objects, passed as arguments, or returned from other functions.",
                    "A Function Expression defines a function inside an expression: const sayHi = function() { ... };."
                ],
                code_examples=[
                    make_code_example(
                        title="Function Expression vs Declaration",
                        code="// Function Declaration (Hoisted! Can be called before definition):\nsayHello();\nfunction sayHello() {\n  console.log('Hello from declaration');\n}\n\n// Function Expression (Not hoisted! Must be defined before use):\nconst sayBye = function() {\n  console.log('Bye from expression');\n};\nsayBye();",
                        explanation="Declarations are hoisted to the top of their scope; expressions are created when execution reaches them.",
                        output="Hello from declaration\nBye from expression"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Assign a Multiplier Function",
                description="Assign an anonymous function to const double that takes a number and returns it multiplied by 2.",
                starter_code="const double = function(n) {\n  return n * 2;\n};\n\nconsole.log(double(21));",
                solution="const double = function(n) {\n  return n * 2;\n};\nconsole.log(double(21));",
                hints=["const double = function(n) { return n * 2; };"]
            )
        ],
        quiz=[
            make_quiz(
                question="Can you call a Function Declaration before its line of definition in the source code?",
                options=[
                    "Yes, because function declarations are hoisted to the top of their enclosing scope",
                    "No, it throws a ReferenceError",
                    "Only inside strict mode",
                    "Only in Node.js"
                ],
                correct_index=0,
                explanation="Function declarations are hoisted by the JavaScript engine, making them callable anywhere in their scope."
            )
        ],
        key_takeaways=[
            "Functions are values that can be stored, passed, and returned.",
            "Declarations are hoisted; expressions are evaluated sequentially."
        ],
        tags=["functions", "expressions", "first-class", "hoisting"]
    ))

    # 21. arrow-functions-basics
    lessons.append(make_lesson(
        slug="arrow-functions-basics",
        title="Arrow Functions: The Basics",
        description="Learn concise ES6 arrow function syntax, implicit returns, and writing modern functional code.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Clean, Modern Syntax",
                paragraphs=[
                    "Arrow functions (() => {}) were introduced in ES6 to provide a shorter, cleaner syntax for writing functions.",
                    "If an arrow function body consists of a single expression, you can omit the curly braces and return keyword for an implicit return."
                ],
                code_examples=[
                    make_code_example(
                        title="Arrow Function Variations",
                        code="// Standard syntax:\nconst add = (a, b) => a + b;\n\n// Single parameter (parentheses optional):\nconst square = x => x * x;\n\n// Multi-line body (explicit return required):\nconst greet = (name) => {\n  const formatted = name.trim();\n  return `Hello, ${formatted}!`;\n};\n\nconsole.log(add(5, 7));       // 12\nconsole.log(square(6));      // 36\nconsole.log(greet(' Alice ')); // 'Hello, Alice!'" ,
                        explanation="Arrow functions provide concise syntax with implicit returns for single expressions.",
                        output="12\n36\nHello, Alice!"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Convert to Arrow Function",
                description="Write an arrow function called isPositive that takes a number n and returns true if n > 0.",
                starter_code="const isPositive = (n) => n > 0;\n\nconsole.log(isPositive(5));\nconsole.log(isPositive(-2));",
                solution="const isPositive = (n) => n > 0;\nconsole.log(isPositive(5));\nconsole.log(isPositive(-2));",
                hints=["Use const isPositive = n => n > 0;"]
            )
        ],
        quiz=[
            make_quiz(
                question="When does an arrow function have an implicit return?",
                options=[
                    "When the function body is a single expression without curly braces",
                    "Whenever it takes fewer than two parameters",
                    "Only when returning numbers",
                    "Never; return is always mandatory"
                ],
                correct_index=0,
                explanation="Without curly braces ({}), an arrow function implicitly returns the result of the single expression."
            )
        ],
        key_takeaways=[
            "Arrow functions offer concise syntax: (args) => expression.",
            "Single-expression arrow functions implicitly return their value.",
            "Arrow functions do not have their own this context (covered in depth in Part 3)."
        ],
        tags=["arrow-functions", "es6", "syntax", "functional"]
    ))

    # 22. javascript-specials
    lessons.append(make_lesson(
        slug="javascript-specials",
        title="JavaScript Specials & Language Review",
        description="A complete review of language fundamentals, syntax patterns, and essential rules before moving to objects.",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="Language Fundamentals Checklist",
                paragraphs=[
                    "Before exploring objects and advanced data structures, let us summarize the core pillars of JavaScript syntax:",
                    "1. Code structure: Statements separated by semicolons.",
                    "2. Strict mode: Enabled via 'use strict' for modern behavior.",
                    "3. Variables: let for mutable values, const for constants.",
                    "4. Data types: 7 primitives and 1 object type.",
                    "5. Operators: Use === for strict equality; understand ?? vs ||.",
                    "6. Functions: Declarations, expressions, and arrow syntax."
                ],
                code_examples=[
                    make_code_example(
                        title="Putting Fundamentals Together",
                        code="'use strict';\n\nconst calculateDiscount = (price, isMember = false) => {\n  const discountRate = isMember ? 0.2 : 0.05;\n  return price * (1 - discountRate);\n};\n\nconsole.log('Member price:', calculateDiscount(100, true)); // 80\nconsole.log('Guest price:', calculateDiscount(100, false)); // 95",
                        explanation="Combines strict mode, arrow functions, default parameters, ternary operator, and const.",
                        output="Member price: 80\nGuest price: 95"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Cap a Value",
                description="Write an arrow function clamp(val, max) that returns val if val <= max, else returns max.",
                starter_code="const clamp = (val, max) => (val <= max ? val : max);\n\nconsole.log(clamp(15, 10)); // 10\nconsole.log(clamp(7, 10));  // 7",
                solution="const clamp = (val, max) => (val <= max ? val : max);\nconsole.log(clamp(15, 10));\nconsole.log(clamp(7, 10));",
                hints=["Use a ternary operator to return val <= max ? val : max."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which of the following creates a block-scoped constant that cannot be reassigned?",
                options=[
                    "const",
                    "let",
                    "var",
                    "function"
                ],
                correct_index=0,
                explanation="const declares a block-scoped constant identifier."
            )
        ],
        key_takeaways=[
            "Solid fundamentals ensure smooth mastery of advanced patterns.",
            "Write clean, strict-mode code with descriptive variable and function names."
        ],
        tags=["review", "summary", "fundamentals", "es6"]
    ))

    # 23. debugging-chrome
    lessons.append(make_lesson(
        slug="debugging-chrome",
        title="Debugging in the Browser",
        description="Learn how to find and fix bugs using breakpoints, step-over/step-into, call stacks, and watch expressions.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Breakpoints and the Sources Panel",
                paragraphs=[
                    "Debugging is the process of finding and fixing errors in code. While console.log is helpful, the browser's debugger tool is vastly more powerful.",
                    "A breakpoint pauses script execution at a specific line, letting you inspect all variables in scope, the call stack, and step through code line by line."
                ],
                code_examples=[
                    make_code_example(
                        title="The debugger Statement",
                        code="function processOrder(orderId, amount) {\n  const tax = amount * 0.1;\n  // When DevTools is open, execution will pause here:\n  // debugger;\n  const total = amount + tax;\n  return { orderId, total };\n}\n\nconsole.log(processOrder(101, 250));",
                        explanation="Inserting 'debugger;' in code tells the browser engine to pause execution when developer tools are active.",
                        output="{\n  \"orderId\": 101,\n  \"total\": 275\n}"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Identify the Logic Bug",
                description="The function average(a, b) below incorrectly computes (a + b) / 2 due to operator precedence. Fix it.",
                starter_code="function average(a, b) {\n  // Fix operator precedence\n  return (a + b) / 2;\n}\n\nconsole.log(average(10, 20)); // Expected: 15",
                solution="function average(a, b) {\n  return (a + b) / 2;\n}\nconsole.log(average(10, 20));",
                hints=["Wrap a + b in parentheses before dividing."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does the 'debugger;' statement do in JavaScript when DevTools is open?",
                options=[
                    "Pauses script execution at that line like a breakpoint",
                    "Deletes the line of code",
                    "Outputs all variables to the screen as an alert",
                    "Restarts the browser"
                ],
                correct_index=0,
                explanation="The debugger statement triggers a breakpoint if developer tools are open."
            )
        ],
        key_takeaways=[
            "Breakpoints allow pausing execution and inspecting variables in real time.",
            "Use Step Over (F10) and Step Into (F11) to trace execution flow line by line."
        ],
        tags=["debugging", "devtools", "breakpoints", "chrome"]
    ))

    # 24. coding-style
    lessons.append(make_lesson(
        slug="coding-style",
        title="Coding Style & Clean Code",
        description="Write readable, professional JavaScript using standard conventions, Prettier formatting, and ESLint linting.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Writing Readable Code",
                paragraphs=[
                    "Code is read far more often than it is written. Clean code conventions make code maintainable for you and your teammates.",
                    "Key style guidelines: 2 spaces for indentation, semicolons, camelCase identifiers, spaces around operators, and early returns to avoid nesting."
                ],
                code_examples=[
                    make_code_example(
                        title="Clean vs Cluttered Code",
                        code="// Clean, readable style:\nfunction getDiscountedPrice(price, user) {\n  if (!user || price <= 0) {\n    return 0;\n  }\n  \n  const discount = user.isVIP ? 0.2 : 0.05;\n  return price * (1 - discount);\n}\n\nconsole.log(getDiscountedPrice(100, { isVIP: true }));",
                        explanation="Using guard clauses and early returns avoids deeply nested if statements.",
                        output="80"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Format and Guard Check",
                description="Refactor the function validateAge(age) to return false immediately if age < 18, otherwise true.",
                starter_code="function validateAge(age) {\n  if (age < 18) return false;\n  return true;\n}\n\nconsole.log(validateAge(20));",
                solution="function validateAge(age) {\n  if (age < 18) return false;\n  return true;\n}\nconsole.log(validateAge(20));",
                hints=["Use an early guard clause: if (age < 18) return false;"]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the benefit of a guard clause with an early return in a function?",
                options=[
                    "It eliminates deep nesting and makes the happy path easier to read",
                    "It doubles execution speed",
                    "It turns variables into constants",
                    "It is required by the JavaScript compiler"
                ],
                correct_index=0,
                explanation="Guard clauses handle edge cases up front, keeping the main logic linear and unnested."
            )
        ],
        key_takeaways=[
            "Adopt tools like Prettier and ESLint for automated formatting and linting.",
            "Use early returns to reduce indentation and improve clarity."
        ],
        tags=["style", "clean-code", "best-practices", "formatting"]
    ))

    # 25. comments
    lessons.append(make_lesson(
        slug="comments",
        title="Writing Good Comments",
        description="Learn when and how to write comments that explain the 'why' rather than narrating the obvious 'what'.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="Good vs Bad Comments",
                paragraphs=[
                    "Good code is self-documenting: well-named variables and functions make comments explaining *what* code does unnecessary.",
                    "Write comments to explain *why* something is done in a specific way, document non-obvious algorithms, or clarify architecture."
                ],
                code_examples=[
                    make_code_example(
                        title="Effective Documentation with JSDoc",
                        code="/**\n * Calculates compound interest.\n * @param {number} principal - Starting balance.\n * @param {number} rate - Annual interest rate (e.g. 0.05 for 5%).\n * @param {number} years - Number of years.\n * @returns {number} Total accrued amount.\n */\nfunction calculateInterest(principal, rate, years) {\n  return principal * ((1 + rate) ** years);\n}\n\nconsole.log(calculateInterest(1000, 0.05, 3).toFixed(2));",
                        explanation="JSDoc comments provide IDE autocompletion hints and clarify parameter expectations.",
                        output="1157.63"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Document a Function with JSDoc",
                description="Write a function square(n) with a JSDoc comment explaining that it returns n * n.",
                starter_code="/**\n * Squares a number.\n * @param {number} n\n * @returns {number}\n */\nfunction square(n) {\n  return n * n;\n}\n\nconsole.log(square(5));",
                solution="/**\n * Squares a number.\n * @param {number} n\n * @returns {number}\n */\nfunction square(n) {\n  return n * n;\n}\nconsole.log(square(5));",
                hints=["Use /** ... */ formatting above the function."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the primary purpose of code comments in professional software engineering?",
                options=[
                    "To explain 'why' a non-obvious decision was made or explain architectural intent",
                    "To duplicate every line of code in English",
                    "To bypass browser security checks",
                    "To prevent scripts from executing"
                ],
                correct_index=0,
                explanation="Good comments explain the rationale, business logic, or algorithm choices rather than restating simple code."
            )
        ],
        key_takeaways=[
            "Strive to write self-documenting code with clear names.",
            "Use comments to explain architectural decisions and non-obvious algorithms.",
            "Use JSDoc comments to document function parameters and return types."
        ],
        tags=["comments", "documentation", "jsdoc", "clean-code"]
    ))

    # 26. ninja-code
    lessons.append(make_lesson(
        slug="ninja-code",
        title="Ninja Code & Anti-Patterns to Avoid",
        description="A humorous, eye-opening look at bad programming habits, cryptic code, and why clarity always beats cleverness.",
        difficulty="beginner",
        reading_time=4,
        sections=[
            make_section(
                heading="The Trap of Over-Clever Code",
                paragraphs=[
                    "Novice developers sometimes try to look 'smart' by compressing multiple operations into a single unreadable line. This is known as 'ninja code'.",
                    "Real software engineering prizes readability, maintainability, and obviousness over cryptic brevity."
                ],
                code_examples=[
                    make_code_example(
                        title="Cryptic vs Clean",
                        code="// Cryptic 'ninja' code:\n// const r = (a, b) => a ? b ? a + b : a : 0;\n\n// Clean, readable code:\nfunction addPositiveNumbers(a, b) {\n  if (a <= 0 || b <= 0) {\n    return 0;\n  }\n  return a + b;\n}\n\nconsole.log(addPositiveNumbers(5, 10));",
                        explanation="Clear variable and function names make intent instantly obvious.",
                        output="15"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Refactor Cryptic Variables",
                description="Refactor let d = 86400 to use a descriptive name like SECONDS_PER_DAY and log it.",
                starter_code="const SECONDS_PER_DAY = 24 * 60 * 60;\nconsole.log(SECONDS_PER_DAY);",
                solution="const SECONDS_PER_DAY = 24 * 60 * 60;\nconsole.log(SECONDS_PER_DAY);",
                hints=["const SECONDS_PER_DAY = 24 * 60 * 60;"]
            )
        ],
        quiz=[
            make_quiz(
                question="Why should developers avoid single-letter variable names like 'a', 'x', and 'temp' in business logic?",
                options=[
                    "They hide the meaning of data and make debugging and maintenance difficult",
                    "The browser engine charges extra memory for short names",
                    "Single-letter names throw syntax errors in ES6",
                    "They are reserved for mathematical formulas only"
                ],
                correct_index=0,
                explanation="Descriptive names make code readable and reduce cognitive load for developers."
            )
        ],
        key_takeaways=[
            "Always choose clarity over cleverness.",
            "Write code that a junior developer can understand in 5 seconds."
        ],
        tags=["antipatterns", "clean-code", "readability", "best-practices"]
    ))

    # 27. testing-mocha
    lessons.append(make_lesson(
        slug="testing-mocha",
        title="Automated Testing & Unit Tests",
        description="Learn Behavior-Driven Development (BDD), writing unit tests with describe and it blocks, and asserting results.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Why We Write Automated Tests",
                paragraphs=[
                    "Automated tests verify that your functions work as expected across normal and edge-case inputs without requiring manual testing.",
                    "In Behavior-Driven Development (BDD), tests serve as both verification and documentation. A test suite typically uses describe() to group tests and it() to declare specific test specifications."
                ],
                code_examples=[
                    make_code_example(
                        title="Simulating a Unit Test",
                        code="function multiply(a, b) {\n  return a * b;\n}\n\n// Simple assert function:\nfunction assertEqual(actual, expected, testName) {\n  if (actual === expected) {\n    console.log(`✓ PASS: ${testName}`);\n  } else {\n    console.error(`✗ FAIL: ${testName}. Expected ${expected}, got ${actual}`);\n  }\n}\n\nassertEqual(multiply(2, 3), 6, 'Multiplies positive numbers');\nassertEqual(multiply(-2, 3), -6, 'Handles negative numbers');\nassertEqual(multiply(5, 0), 0, 'Multiplies by zero');",
                        explanation="Unit tests check multiple inputs and confirm that actual output matches expected output.",
                        output="✓ PASS: Multiplies positive numbers\n✓ PASS: Handles negative numbers\n✓ PASS: Multiplies by zero"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Write a Test for an Absolute Value Function",
                description="Write a function myAbs(n) and test that myAbs(-5) === 5 and myAbs(5) === 5.",
                starter_code="function myAbs(n) {\n  return n < 0 ? -n : n;\n}\n\nconsole.log(myAbs(-5) === 5);\nconsole.log(myAbs(5) === 5);",
                solution="function myAbs(n) {\n  return n < 0 ? -n : n;\n}\nconsole.log(myAbs(-5) === 5);\nconsole.log(myAbs(5) === 5);",
                hints=["Return -n if n is negative, otherwise n."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the role of a unit test in software engineering?",
                options=[
                    "To verify that an individual unit of code (like a function) behaves correctly in isolation",
                    "To test if the monitor display is plugged in",
                    "To automatically publish websites to production",
                    "To format HTML files"
                ],
                correct_index=0,
                explanation="Unit tests test individual components in isolation to prevent regressions."
            )
        ],
        key_takeaways=[
            "Automated testing ensures code correctness and prevents regressions when refactoring.",
            "BDD frameworks organize tests using describe() groups and it() specifications."
        ],
        tags=["testing", "unit-tests", "bdd", "mocha", "quality"]
    ))

    # 28. polyfills
    lessons.append(make_lesson(
        slug="polyfills",
        title="Polyfills and Transpilers: Babel & Core-js",
        description="Understand how transpilers convert modern ES features to older syntax and polyfills fill in missing APIs.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Transpilers vs Polyfills",
                paragraphs=[
                    "JavaScript evolves every year, but older browser versions cannot run new syntax natively.",
                    "A Transpiler (like Babel or SWC) rewrites modern syntax (like ?? or ?. or arrow functions) into older syntax that legacy engines understand.",
                    "A Polyfill (like core-js) provides missing functions and APIs (like Promise, Array.prototype.includes, or fetch) by implementing them in JavaScript."
                ],
                code_examples=[
                    make_code_example(
                        title="How a Simple Polyfill Works",
                        code="// Polyfilling String.prototype.startsWith if absent:\nif (!String.prototype.startsWith) {\n  String.prototype.startsWith = function(search, pos) {\n    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;\n  };\n}\n\nconst str = 'Modern JavaScript';\nconsole.log(str.startsWith('Modern')); // true",
                        explanation="A polyfill checks if an API exists, and if not, patches it onto the prototype.",
                        output="true"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Test Polyfill Check",
                description="Write an if check that checks if Math.trunc is defined. If defined, log 'Math.trunc is supported'.",
                starter_code="if (typeof Math.trunc === 'function') {\n  console.log('Math.trunc is supported');\n}",
                solution="if (typeof Math.trunc === 'function') {\n  console.log('Math.trunc is supported');\n}",
                hints=["Check if typeof Math.trunc === 'function'."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the difference between a transpiler and a polyfill?",
                options=[
                    "A transpiler translates new syntax to older syntax; a polyfill provides missing library functions/methods",
                    "A transpiler only works on servers; a polyfill only works on mobile",
                    "A polyfill deletes code; a transpiler duplicates code",
                    "There is no difference"
                ],
                correct_index=0,
                explanation="Transpilers rewrite syntax structures (e.g. arrow functions, classes); polyfills add missing standard library methods (e.g. Array.prototype.flat)."
            )
        ],
        key_takeaways=[
            "Transpilers (Babel, SWC) convert modern syntax to legacy syntax for backwards compatibility.",
            "Polyfills provide implementations of missing standard functions and APIs."
        ],
        tags=["polyfills", "transpilers", "babel", "compatibility"]
    ))

    return lessons
