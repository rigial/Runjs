import type { Lesson } from '../../types';

export const part1Lessons: Lesson[] = [
  {
    "title": "Intro",
    "description": "Let's see what's so special about JavaScript, what we can achieve with it, and what other technologies play well with it.",
    "difficulty": "beginner",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's see what's so special about JavaScript, what we can achieve with it, and what other technologies play well with it."
        ]
      },
      {
        "heading": "What is JavaScript?",
        "paragraphs": [
          "*JavaScript* was initially created to \"make web pages alive\".",
          "The programs in this language are called *scripts*. They can be written right in a web page's HTML and run automatically as the page loads.",
          "Scripts are provided and executed as plain text. They don't need special preparation or compilation to run.",
          "In this aspect, JavaScript is very different from another language called Java).",
          "Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine."
        ],
        "codeExamples": [
          {
            "title": "What is JavaScript?",
            "code": "When JavaScript was created, it initially had another name: \"LiveScript\". But Java was very popular at that time, so it was decided that positioning a new language as a \"younger brother\" of Java would help.\n\nBut as it evolved, JavaScript became a fully independent language with its own specification called [ECMAScript](http://en.wikipedia.org/wiki/ECMAScript), and now it has no relation to Java at all.",
            "explanation": "Example demonstrating what is javascript?."
          },
          {
            "title": "What is JavaScript?",
            "code": "Engines are complicated. But the basics are easy.\n\n1. The engine (embedded if it's a browser) reads (\"parses\") the script.\n2. Then it converts (\"compiles\") the script to machine code.\n3. And then the machine code runs, pretty fast.\n\nThe engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.",
            "explanation": "Example demonstrating what is javascript?."
          }
        ],
        "bulletPoints": [
          "V8) -- in Chrome, Opera and Edge.",
          "SpiderMonkey -- in Firefox.",
          "...There are other codenames like \"Chakra\" for IE, \"JavaScriptCore\", \"Nitro\" and \"SquirrelFish\" for Safari, etc."
        ]
      },
      {
        "heading": "What can in-browser JavaScript do?",
        "paragraphs": [
          "Modern JavaScript is a \"safe\" programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.",
          "JavaScript's capabilities greatly depend on the environment it's running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.",
          "In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.",
          "For instance, in-browser JavaScript is able to:"
        ],
        "bulletPoints": [
          "Add new HTML to the page, change the existing content, modify styles.",
          "React to user actions, run on mouse clicks, pointer movements, key presses.",
          "Send requests over the network to remote servers, download and upload files (so-called AJAX) and COMET) technologies).",
          "Get and set cookies, ask questions to the visitor, show messages.",
          "Remember the data on the client-side (\"local storage\")."
        ]
      },
      {
        "heading": "What CAN'T in-browser JavaScript do?",
        "paragraphs": [
          "JavaScript's abilities in the browser are limited to protect the user's safety. The aim is to prevent an evil webpage from accessing private information or harming the user's data.",
          "Examples of such restrictions include:",
          "Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like \"dropping\" a file into a browser window or selecting it via an `` tag.",
          "There are ways to interact with the camera/microphone and other devices, but they require a user's explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the NSA.",
          "This is called the \"Same Origin Policy\". To work around that, *both pages* must agree for data exchange and must contain special JavaScript code that handles it. We'll cover that in the tutorial."
        ],
        "bulletPoints": [
          "JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.",
          "Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).",
          "JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is severely limited. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that's a safety limitation."
        ]
      },
      {
        "heading": "What makes JavaScript unique?",
        "paragraphs": [
          "There are at least *three* great things about JavaScript:",
          "JavaScript is the only browser technology that combines these three things.",
          "That's what makes JavaScript unique. That's why it's the most widespread tool for creating browser interfaces.",
          "That said, JavaScript can be used to create servers, mobile applications, etc."
        ],
        "codeExamples": [
          {
            "title": "What makes JavaScript unique?",
            "code": "+ Full integration with HTML/CSS.\n+ Simple things are done simply.\n+ Supported by all major browsers and enabled by default.",
            "explanation": "Example demonstrating what makes javascript unique?."
          }
        ]
      },
      {
        "heading": "Languages \"over\" JavaScript",
        "paragraphs": [
          "The syntax of JavaScript does not suit everyone's needs. Different people want different features.",
          "That's to be expected, because projects and requirements are different for everyone.",
          "So, recently a plethora of new languages appeared, which are *transpiled* (converted) to JavaScript before they run in the browser.",
          "Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it \"under the hood\".",
          "Examples of such languages:"
        ],
        "bulletPoints": [
          "CoffeeScript is \"syntactic sugar\" for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.",
          "TypeScript is concentrated on adding \"strict data typing\" to simplify the development and support of complex systems. It is developed by Microsoft.",
          "Flow also adds data typing, but in a different way. Developed by Facebook.",
          "Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.",
          "Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.",
          "Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.",
          "There are many languages that get \"transpiled\" to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Intro",
        "description": "Apply your understanding of Intro. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Intro\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Intro\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Intro in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for intro.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Intro is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Intro?",
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
      "Intro is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying intro.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "intro"
    ],
    "slug": "intro"
  },
  {
    "title": "Manuals Specifications",
    "description": "This book is a *tutorial*. It aims to help you gradually learn the language. But once you're familiar with the basics, you'll need other resources.",
    "difficulty": "beginner",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "This book is a *tutorial*. It aims to help you gradually learn the language. But once you're familiar with the basics, you'll need other resources."
        ]
      },
      {
        "heading": "Specification",
        "paragraphs": [
          "The ECMA-262 specification contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.",
          "But being that formalized, it's difficult to understand at first. So if you need the most trustworthy source of information about the language details, the specification is the right place. But it's not for everyday use.",
          "A new specification version is released every year. Between these releases, the latest specification draft is at .",
          "To read about new bleeding-edge features, including those that are \"almost standard\" (so-called \"stage 3\"), see proposals at .",
          "Also, if you're developing for the browser, then there are other specifications covered in the second part of the tutorial."
        ]
      },
      {
        "heading": "Manuals",
        "paragraphs": [
          "You can find it at .",
          "Although, it's often best to use an internet search instead. Just use \"MDN [term]\" in the query, e.g. to search for the `parseInt` function."
        ],
        "bulletPoints": [
          "**MDN (Mozilla) JavaScript Reference** is the main manual with examples and other information. It's great to get in-depth information about individual language functions, methods etc."
        ]
      },
      {
        "heading": "Compatibility tables",
        "paragraphs": [
          "JavaScript is a developing language, new features get added regularly.",
          "To see their support among browser-based and other engines, see:",
          "All these resources are useful in real-life development, as they contain valuable information about language details, their support, etc.",
          "Please remember them (or this page) for the cases when you need in-depth information about a particular feature."
        ],
        "bulletPoints": [
          "- per-feature tables of support, e.g. to see which engines support modern cryptography functions: .",
          "- a table with language features and engines that support those or don't support."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Manuals Specifications",
        "description": "Apply your understanding of Manuals Specifications. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Manuals Specifications\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Manuals Specifications\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Manuals Specifications in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for manuals specifications.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Manuals Specifications is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Manuals Specifications?",
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
      "Manuals Specifications is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying manuals specifications.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "manuals-specifications"
    ],
    "slug": "manuals-specifications"
  },
  {
    "title": "Code Editors",
    "description": "A code editor is the place where programmers spend most of their time.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A code editor is the place where programmers spend most of their time.",
          "There are two main types of code editors: IDEs and lightweight editors. Many people use one tool of each type."
        ]
      },
      {
        "heading": "IDE",
        "paragraphs": [
          "The term IDE (Integrated Development Environment) refers to a powerful editor with many features that usually operates on a \"whole project.\" As the name suggests, it's not just an editor, but a full-scale \"development environment.\"",
          "An IDE loads the project (which can be many files), allows navigation between files, provides autocompletion based on the whole project (not just the open file), and integrates with a version management system (like git), a testing environment, and other \"project-level\" stuff.",
          "If you haven't selected an IDE yet, consider the following options:",
          "For Windows, there's also \"Visual Studio\", not to be confused with \"Visual Studio Code\". \"Visual Studio\" is a paid and mighty Windows-only editor, well-suited for the .NET platform. It's also good at JavaScript. There's also a free version Visual Studio Community.",
          "Many IDEs are paid, but have a trial period. Their cost is usually negligible compared to a qualified developer's salary, so just choose the best one for you."
        ],
        "bulletPoints": [
          "Visual Studio Code (cross-platform, free).",
          "WebStorm (cross-platform, paid)."
        ]
      },
      {
        "heading": "Lightweight editors",
        "paragraphs": [
          "\"Lightweight editors\" are not as powerful as IDEs, but they're fast, elegant and simple.",
          "They are mainly used to open and edit a file instantly.",
          "The main difference between a \"lightweight editor\" and an \"IDE\" is that an IDE works on a project-level, so it loads much more data on start, analyzes the project structure if needed and so on. A lightweight editor is much faster if we need only one file.",
          "In practice, lightweight editors may have a lot of plugins including directory-level syntax analyzers and autocompleters, so there's no strict border between a lightweight editor and an IDE.",
          "There are many options, for instance:"
        ],
        "bulletPoints": [
          "Sublime Text (cross-platform, shareware).",
          "Notepad++ (Windows, free).",
          "Vim and Emacs are also cool if you know how to use them."
        ]
      },
      {
        "heading": "Let's not argue",
        "paragraphs": [
          "The editors in the lists above are those that either I or my friends whom I consider good developers have been using for a long time and are happy with.",
          "There are other great editors in our big world. Please choose the one you like the most.",
          "The choice of an editor, like any other tool, is individual and depends on your projects, habits, and personal preferences.",
          "The author's personal opinion:"
        ],
        "bulletPoints": [
          "I'd use Visual Studio Code if I develop mostly frontend.",
          "Otherwise, if it's mostly another language/platform and partially frontend, then consider other editors, such as XCode (Mac), Visual Studio (Windows) or Jetbrains family (Webstorm, PHPStorm, RubyMine etc, depending on the language)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Code Editors",
        "description": "Apply your understanding of Code Editors. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Code Editors\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Code Editors\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Code Editors in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for code editors.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Code Editors is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Code Editors?",
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
      "Code Editors is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying code editors.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "code-editors"
    ],
    "slug": "code-editors"
  },
  {
    "title": "Devtools",
    "description": "Code is prone to errors. You will quite likely make errors... Oh, what am I talking about? You are *absolutely* going to make errors, at least if you're a human, not a robot).",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Code is prone to errors. You will quite likely make errors... Oh, what am I talking about? You are *absolutely* going to make errors, at least if you're a human, not a robot).",
          "But in the browser, users don't see errors by default. So, if something goes wrong in the script, we won't see what's broken and can't fix it.",
          "To see errors and get a lot of other useful information about scripts, \"developer tools\" have been embedded in browsers.",
          "Most developers lean towards Chrome or Firefox for development because those browsers have the best developer tools. Other browsers also provide developer tools, sometimes with special features, but are usually playing \"catch-up\" to Chrome or Firefox. So most developers have a \"favorite\" browser and switch to others if a problem is browser-specific.",
          "Developer tools are potent; they have many features. To start, we'll learn how to open them, look at errors, and run JavaScript commands."
        ]
      },
      {
        "heading": "Google Chrome",
        "paragraphs": [
          "Open the page bug.html.",
          "There's an error in the JavaScript code on it. It's hidden from a regular visitor's eyes, so let's open developer tools to see it.",
          "Press `key:F12` or, if you're on Mac, then `key:Cmd+Opt+J`.",
          "The developer tools will open on the Console tab by default.",
          "It looks somewhat like this:"
        ],
        "codeExamples": [
          {
            "title": "Google Chrome",
            "code": "Usually, when we put a line of code into the console, and then press `key:Enter`, it executes.\n\nTo insert multiple lines, press `key:Shift+Enter`. This way one can enter long fragments of JavaScript code.",
            "explanation": "Example demonstrating google chrome."
          }
        ],
        "bulletPoints": [
          "Here we can see the red-colored error message. In this case, the script contains an unknown \"lalala\" command.",
          "On the right, there is a clickable link to the source `bug.html:12` with the line number where the error has occurred."
        ]
      },
      {
        "heading": "Firefox, Edge, and others",
        "paragraphs": [
          "Most other browsers use `key:F12` to open developer tools.",
          "The look & feel of them is quite similar. Once you know how to use one of these tools (you can start with Chrome), you can easily switch to another."
        ]
      },
      {
        "heading": "Safari",
        "paragraphs": [
          "Safari (Mac browser, not supported by Windows/Linux) is a little bit special here. We need to enable the \"Develop menu\" first.",
          "Open Settings and go to the \"Advanced\" pane. There's a checkbox at the bottom:",
          "!safari",
          "Now `key:Cmd+Opt+C` can toggle the console. Also, note that the new top menu item named \"Develop\" has appeared. It has many commands and options."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Now we have the environment ready. In the next section, we'll get down to JavaScript."
        ],
        "bulletPoints": [
          "Developer tools allow us to see errors, run commands, examine variables, and much more.",
          "They can be opened with `key:F12` for most browsers on Windows. Chrome for Mac needs `key:Cmd+Opt+J`, Safari: `key:Cmd+Opt+C` (need to enable first)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Devtools",
        "description": "Apply your understanding of Devtools. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Devtools\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Devtools\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Devtools in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for devtools.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Devtools is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Devtools?",
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
      "Devtools is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying devtools.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "devtools"
    ],
    "slug": "devtools"
  },
  {
    "title": "Hello World",
    "description": "This part of the tutorial is about core JavaScript, the language itself.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "This part of the tutorial is about core JavaScript, the language itself.",
          "But we need a working environment to run our scripts and, since this book is online, the browser is a good choice. We'll keep the amount of browser-specific commands (like `alert`) to a minimum so that you don't spend time on them if you plan to concentrate on another environment (like Node.js). We'll focus on JavaScript in the browser in the next part of the tutorial.",
          "So first, let's see how we attach a script to a webpage. For server-side environments (like Node.js), you can execute the script with a command like `\"node my.js\"`."
        ]
      },
      {
        "heading": "The \"script\" tag",
        "paragraphs": [
          "JavaScript programs can be inserted almost anywhere into an HTML document using the `` tag.",
          "For instance:",
          "The `` tag contains JavaScript code which is automatically executed when the browser processes the tag."
        ],
        "codeExamples": [
          {
            "title": "The \"script\" tag",
            "code": "<!DOCTYPE HTML>\n<html>\n\n<body>\n\n  <p>Before the script...</p>\n\n*!*\n  <script>\n    alert( 'Hello, world!' );\n  </script>\n*/!*\n\n  <p>...After the script.</p>\n\n</body>\n\n</html>",
            "explanation": "Example demonstrating the \"script\" tag."
          },
          {
            "title": "The \"script\" tag",
            "code": "You can run the example by clicking the \"Play\" button in the right-top corner of the box above.",
            "explanation": "Example demonstrating the \"script\" tag."
          }
        ]
      },
      {
        "heading": "Modern markup",
        "paragraphs": [
          "The `` tag has a few attributes that are rarely used nowadays but can still be found in old code:",
          "The `type` attribute: &lt;script type=...&gt;",
          ": The old HTML standard, HTML4, required a script to have a `type`. Usually it was `type=\"text/javascript\"`. It's not required anymore. Also, the modern HTML standard totally changed the meaning of this attribute. Now, it can be used for JavaScript modules. But that's an advanced topic, we'll talk about modules in another part of the tutorial.",
          "The `language` attribute: &lt;script language=...&gt;",
          ": This attribute was meant to show the language of the script. This attribute no longer makes sense because JavaScript is the default language. There is no need to use it."
        ]
      },
      {
        "heading": "External scripts",
        "paragraphs": [
          "If we have a lot of JavaScript code, we can put it into a separate file.",
          "Script files are attached to HTML with the `src` attribute:",
          "Here, `/path/to/script.js` is an absolute path to the script from the site root. One can also provide a relative path from the current page. For instance, `src=\"script.js\"`, just like `src=\"./script.js\"`, would mean a file `\"script.js\"` in the current folder.",
          "We can give a full URL as well. For instance:",
          "To attach several scripts, use multiple tags:"
        ],
        "codeExamples": [
          {
            "title": "External scripts",
            "code": "<script src=\"/path/to/script.js\"></script>",
            "explanation": "Example demonstrating external scripts."
          },
          {
            "title": "External scripts",
            "code": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js\"></script>",
            "explanation": "Example demonstrating external scripts."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There is much more to learn about browser scripts and their interaction with the webpage. But let's keep in mind that this part of the tutorial is devoted to the JavaScript language, so we shouldn't distract ourselves with browser-specific implementations of it. We'll be using the browser as a way to run JavaScript, which is very convenient for online reading, but only one of many."
        ],
        "bulletPoints": [
          "We can use a `` tag to add JavaScript code to a page.",
          "The `type` and `language` attributes are not required.",
          "A script in an external file can be inserted with ``."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Show an alert",
        "description": "Create a page that shows a message \"I'm JavaScript!\". Do it in a sandbox, or on your hard drive, doesn't matter, just ensure that it works. [demo src=\"solution\"]",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Show an alert with an external script",
        "description": "Take the solution of the previous task . Modify it by extracting the script content into an external file `alert.js`, residing in the same folder. Open the page, ensure that the alert works.",
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
        "question": "What is the primary role of Hello World in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for hello world.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Hello World is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Hello World?",
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
      "Hello World is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying hello world.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "hello-world"
    ],
    "slug": "hello-world"
  },
  {
    "title": "Structure",
    "description": "The first thing we'll study is the building blocks of code.",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The first thing we'll study is the building blocks of code."
        ]
      },
      {
        "heading": "Statements",
        "paragraphs": [
          "Statements are syntax constructs and commands that perform actions.",
          "We've already seen a statement, `alert('Hello, world!')`, which shows the message \"Hello, world!\".",
          "We can have as many statements in our code as we want. Statements can be separated with a semicolon.",
          "For example, here we split \"Hello World\" into two alerts:",
          "Usually, statements are written on separate lines to make the code more readable:"
        ],
        "codeExamples": [
          {
            "title": "Statements",
            "code": "alert('Hello'); alert('World');",
            "explanation": "Example demonstrating statements."
          },
          {
            "title": "Statements",
            "code": "alert('Hello');\nalert('World');",
            "explanation": "Example demonstrating statements."
          }
        ]
      },
      {
        "heading": "Semicolons [#semicolon]",
        "paragraphs": [
          "A semicolon may be omitted in most cases when a line break exists.",
          "This would also work:",
          "Here, JavaScript interprets the line break as an \"implicit\" semicolon. This is called an automatic semicolon insertion.",
          "**In most cases, a newline implies a semicolon. But \"in most cases\" does not mean \"always\"!**",
          "There are cases when a newline does not mean a semicolon. For example:"
        ],
        "codeExamples": [
          {
            "title": "Semicolons [#semicolon]",
            "code": "alert('Hello')\nalert('World')",
            "explanation": "Example demonstrating semicolons [#semicolon]."
          },
          {
            "title": "Semicolons [#semicolon]",
            "code": "alert(3 +\n1\n+ 2);",
            "explanation": "Example demonstrating semicolons [#semicolon]."
          }
        ]
      },
      {
        "heading": "Comments [#code-comments]",
        "paragraphs": [
          "As time goes on, programs become more and more complex. It becomes necessary to add *comments* which describe what the code does and why.",
          "Comments can be put into any place of a script. They don't affect its execution because the engine simply ignores them.",
          "**One-line comments start with two forward slash characters `//`.**",
          "The rest of the line is a comment. It may occupy a full line of its own or follow a statement.",
          "Like here:"
        ],
        "codeExamples": [
          {
            "title": "Comments [#code-comments]",
            "code": "// This comment occupies a line of its own\nalert('Hello');\n\nalert('World'); // This comment follows the statement",
            "explanation": "Example demonstrating comments [#code-comments]."
          },
          {
            "title": "Comments [#code-comments]",
            "code": "/* An example with two messages.\nThis is a multiline comment.\n*/\nalert('Hello');\nalert('World');",
            "explanation": "Example demonstrating comments [#code-comments]."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Structure",
        "description": "Apply your understanding of Structure. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Structure\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Structure\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Structure in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for structure.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Structure is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Structure?",
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
      "Structure is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying structure.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "structure"
    ],
    "slug": "structure"
  },
  {
    "title": "Strict Mode",
    "description": "For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn't change.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn't change.",
          "That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript's creators got stuck in the language forever.",
          "This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: `\"use strict\"`."
        ]
      },
      {
        "heading": "\"use strict\"",
        "paragraphs": [
          "The directive looks like a string: `\"use strict\"` or `'use strict'`. When it is located at the top of a script, the whole script works the \"modern\" way.",
          "For example:",
          "Quite soon we're going to learn functions (a way to group commands), so let's note in advance that `\"use strict\"` can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.",
          "alert(\"some code\");",
          "// \"use strict\" below is ignored--it must be at the top"
        ],
        "codeExamples": [
          {
            "title": "\"use strict\"",
            "code": "\"use strict\";\n\n// this code works the modern way\n...",
            "explanation": "Example demonstrating \"use strict\"."
          },
          {
            "title": "\"use strict\"",
            "code": "Please make sure that `\"use strict\"` is at the top of your scripts, otherwise strict mode may not be enabled.\n\nStrict mode isn't enabled here:",
            "explanation": "Example demonstrating \"use strict\"."
          }
        ]
      },
      {
        "heading": "Browser console",
        "paragraphs": [
          "When you use a developer console to run code, please note that it doesn't `use strict` by default.",
          "Sometimes, when `use strict` makes a difference, you'll get incorrect results.",
          "So, how to actually `use strict` in the console?",
          "First, you can try to press `key:Shift+Enter` to input multiple lines, and put `use strict` on top, like this:",
          "It works in most browsers, namely Firefox and Chrome."
        ],
        "codeExamples": [
          {
            "title": "Browser console",
            "code": "'use strict'; <Shift+Enter for a newline>\n//  ...your code\n<Enter to run>",
            "explanation": "Example demonstrating browser console."
          },
          {
            "title": "Browser console",
            "code": "(function() {\n  'use strict';\n\n  // ...your code here...\n})()",
            "explanation": "Example demonstrating browser console."
          }
        ]
      },
      {
        "heading": "Should we \"use strict\"?",
        "paragraphs": [
          "The question may sound obvious, but it's not so.",
          "One could recommend to start scripts with `\"use strict\"`... But you know what's cool?",
          "Modern JavaScript supports \"classes\" and \"modules\" - advanced language structures (we'll surely get to them), that enable `use strict` automatically. So we don't need to add the `\"use strict\"` directive, if we use them.",
          "**So, for now `\"use strict\";` is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.**",
          "As of now, we've got to know about `use strict` in general."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Strict Mode",
        "description": "Apply your understanding of Strict Mode. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Strict Mode\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Strict Mode\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Strict Mode in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for strict mode.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Strict Mode is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Strict Mode?",
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
      "Strict Mode is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying strict mode.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "strict-mode"
    ],
    "slug": "strict-mode"
  },
  {
    "title": "Variables",
    "description": "Most of the time, a JavaScript application needs to work with information. Here are two examples:",
    "difficulty": "beginner",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Most of the time, a JavaScript application needs to work with information. Here are two examples:",
          "1. An online shop -- the information might include goods being sold and a shopping cart.",
          "2. A chat application -- the information might include users, messages, and much more.",
          "Variables are used to store this information."
        ]
      },
      {
        "heading": "A variable",
        "paragraphs": [
          "A variable) is a \"named storage\" for data. We can use variables to store goodies, visitors, and other data.",
          "To create a variable in JavaScript, use the `let` keyword.",
          "The statement below creates (in other words: *declares*) a variable with the name \"message\":",
          "Now, we can put some data into it by using the assignment operator `=`:",
          "The string is now saved into the memory area associated with the variable. We can access it using the variable name:"
        ],
        "codeExamples": [
          {
            "title": "A variable",
            "code": "let message;",
            "explanation": "Example demonstrating a variable."
          },
          {
            "title": "A variable",
            "code": "let message;\n\n*!*\nmessage = 'Hello'; // store the string 'Hello' in the variable named message\n*/!*",
            "explanation": "Example demonstrating a variable."
          }
        ]
      },
      {
        "heading": "A real-life analogy",
        "paragraphs": [
          "We can easily grasp the concept of a \"variable\" if we imagine it as a \"box\" for data, with a uniquely-named sticker on it.",
          "For instance, the variable `message` can be imagined as a box labelled `\"message\"` with the value `\"Hello!\"` in it:",
          "![](variable.svg)",
          "We can put any value in the box.",
          "We can also change it as many times as we want:"
        ],
        "codeExamples": [
          {
            "title": "A real-life analogy",
            "code": "let message;\n\nmessage = 'Hello!';\n\nmessage = 'World!'; // value changed\n\nalert(message);",
            "explanation": "Example demonstrating a real-life analogy."
          },
          {
            "title": "A real-life analogy",
            "code": "let hello = 'Hello world!';\n\nlet message;\n\n*!*\n// copy 'Hello world' from hello into message\nmessage = hello;\n*/!*\n\n// now two variables hold the same data\nalert(hello); // Hello world!\nalert(message); // Hello world!",
            "explanation": "Example demonstrating a real-life analogy."
          }
        ]
      },
      {
        "heading": "Variable naming [#variable-naming]",
        "paragraphs": [
          "There are two limitations on variable names in JavaScript:",
          "1. The name must contain only letters, digits, or the symbols `$` and `_`.",
          "2. The first character must not be a digit.",
          "Examples of valid names:",
          "When the name contains multiple words, camelCase is commonly used. That is: words go one after another, with each word except the first starting with a capital letter: `myVeryLongName`."
        ],
        "codeExamples": [
          {
            "title": "Variable naming [#variable-naming]",
            "code": "let userName;\nlet test123;",
            "explanation": "Example demonstrating variable naming [#variable-naming]."
          },
          {
            "title": "Variable naming [#variable-naming]",
            "code": "let $ = 1; // declared a variable with the name \"$\"\nlet _ = 2; // and now a variable with the name \"_\"\n\nalert($ + _); // 3",
            "explanation": "Example demonstrating variable naming [#variable-naming]."
          }
        ]
      },
      {
        "heading": "Constants",
        "paragraphs": [
          "To declare a constant (unchanging) variable, use `const` instead of `let`:",
          "Variables declared using `const` are called \"constants\". They cannot be reassigned. An attempt to do so would cause an error:",
          "When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone."
        ],
        "codeExamples": [
          {
            "title": "Constants",
            "code": "const myBirthday = '18.04.1982';",
            "explanation": "Example demonstrating constants."
          },
          {
            "title": "Constants",
            "code": "const myBirthday = '18.04.1982';\n\nmyBirthday = '01.01.2001'; // error, can't reassign the constant!",
            "explanation": "Example demonstrating constants."
          }
        ]
      },
      {
        "heading": "Uppercase constants",
        "paragraphs": [
          "There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.",
          "Such constants are named using capital letters and underscores.",
          "For instance, let's make constants for colors in so-called \"web\" (hexadecimal) format:",
          "Benefits:",
          "When should we use capitals for a constant and when should we name it normally? Let's make that clear."
        ],
        "codeExamples": [
          {
            "title": "Uppercase constants",
            "code": "const COLOR_RED = \"#F00\";\nconst COLOR_GREEN = \"#0F0\";\nconst COLOR_BLUE = \"#00F\";\nconst COLOR_ORANGE = \"#FF7F00\";\n\n// ...when we need to pick a color\nlet color = COLOR_ORANGE;\nalert(color); // #FF7F00",
            "explanation": "Example demonstrating uppercase constants."
          },
          {
            "title": "Uppercase constants",
            "code": "const pageLoadTime = /* time taken by a webpage to load */;",
            "explanation": "Example demonstrating uppercase constants."
          }
        ],
        "bulletPoints": [
          "`COLOR_ORANGE` is much easier to remember than `\"#FF7F00\"`.",
          "It is much easier to mistype `\"#FF7F00\"` than `COLOR_ORANGE`.",
          "When reading the code, `COLOR_ORANGE` is much more meaningful than `#FF7F00`."
        ]
      },
      {
        "heading": "Name things right",
        "paragraphs": [
          "Talking about variables, there's one more extremely important thing.",
          "A variable name should have a clean, obvious meaning, describing the data that it stores.",
          "Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.",
          "In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labelled. Or, in other words, when the variables have good names.",
          "Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely."
        ],
        "codeExamples": [
          {
            "title": "Name things right",
            "code": "And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.\n\nAs a result, their variables are like boxes into which people throw different things without changing their stickers. What's inside the box now? Who knows? We need to come closer and check.\n\nSuch programmers save a little bit on variable declaration but lose ten times more on debugging.\n\nAn extra variable is good, not evil.\n\nModern JavaScript minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can even help the engine optimize your code.",
            "explanation": "Example demonstrating name things right."
          }
        ],
        "bulletPoints": [
          "Use human-readable names like `userName` or `shoppingCart`.",
          "Stay away from abbreviations or short names like `a`, `b`, and `c`, unless you know what you're doing.",
          "Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.",
          "Agree on terms within your team and in your mind. If a site visitor is called a \"user\" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We can declare variables to store data by using the `var`, `let`, or `const` keywords.",
          "Variables should be named in a way that allows us to easily understand what's inside them."
        ],
        "bulletPoints": [
          "`let` -- is a modern variable declaration.",
          "`var` -- is an old-school variable declaration. Normally we don't use it at all, but we'll cover subtle differences from `let` in the chapter , just in case you need them.",
          "`const` -- is like `let`, but the value of the variable can't be changed."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Working with variables",
        "description": "1. Declare two variables: `admin` and `name`. 2. Assign the value `\"John\"` to `name`. 3. Copy the value from `name` to `admin`. 4. Show the value of `admin` using `alert` (must output \"John\").",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Giving the right name",
        "description": "1. Create a variable with the name of our planet. How would you name such a variable? 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?",
        "starterCode": "// Write your code here\n",
        "solution": "let ourPlanetName = \"Earth\";",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "Uppercase const?",
        "description": "Examine the following code: ```js const birthday = '18.04.1982'; const age = someCode(birthday); ``` Here we have a constant `birthday` for the date, and also the `age` constant. The `age` is calculated from `birthday` using `someCode()`, which means a function call that we didn't explain yet (we wi",
        "starterCode": "const birthday = '18.04.1982';\n\nconst age = someCode(birthday);",
        "solution": "const birthday = '18.04.1982';\n\nconst age = someCode(birthday);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Variables in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for variables.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Variables is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Variables?",
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
      "Variables is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying variables.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "variables"
    ],
    "slug": "variables"
  },
  {
    "title": "Types",
    "description": "A value in JavaScript is always of a certain type. For example, a string or a number.",
    "difficulty": "beginner",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A value in JavaScript is always of a certain type. For example, a string or a number.",
          "There are eight basic data types in JavaScript. Here, we'll cover them in general and in the next chapters we'll talk about each of them in detail.",
          "We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:",
          "Programming languages that allow such things, such as JavaScript, are called \"dynamically typed\", meaning that there exist data types, but variables are not bound to any of them."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "// no error\nlet message = \"hello\";\nmessage = 123456;",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Number",
        "paragraphs": [
          "The *number* type represents both integer and floating point numbers.",
          "There are many operations for numbers, e.g. multiplication `*`, division `/`, addition `+`, subtraction `-`, and so on.",
          "Besides regular numbers, there are so-called \"special numeric values\" which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.",
          "We can get it as a result of division by zero:",
          "alert( 1 / 0 ); // Infinity"
        ],
        "codeExamples": [
          {
            "title": "Number",
            "code": "let n = 123;\nn = 12.345;",
            "explanation": "Example demonstrating number."
          },
          {
            "title": "Number",
            "code": "Doing maths is \"safe\" in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.\n\nThe script will never stop with a fatal error (\"die\"). At worst, we'll get `NaN` as the result.",
            "explanation": "Example demonstrating number."
          }
        ],
        "bulletPoints": [
          "`Infinity` represents the mathematical Infinity \u221e. It is a special value that's greater than any number.",
          "`NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:"
        ]
      },
      {
        "heading": "BigInt [#bigint-type]",
        "paragraphs": [
          "In JavaScript, the \"number\" type cannot safely represent integer values larger than (253-1) (that's `9007199254740991`), or less than -(253-1) for negatives.",
          "To be really precise, the \"number\" type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range \u00b1(253-1) there'll be a precision error, because not all digits fit into the fixed 64-bit storage. So an \"approximate\" value may be stored.",
          "For example, these two numbers (right above the safe range) are the same:",
          "So to say, all odd integers greater than (253-1) can't be stored at all in the \"number\" type.",
          "For most purposes \u00b1(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps."
        ],
        "codeExamples": [
          {
            "title": "BigInt [#bigint-type]",
            "code": "console.log(9007199254740991 + 1); // 9007199254740992\nconsole.log(9007199254740991 + 2); // 9007199254740992",
            "explanation": "Example demonstrating bigint [#bigint-type]."
          },
          {
            "title": "BigInt [#bigint-type]",
            "code": "// the \"n\" at the end means it's a BigInt\nconst bigInt = 1234567890123456789012345678901234567890n;",
            "explanation": "Example demonstrating bigint [#bigint-type]."
          }
        ]
      },
      {
        "heading": "String",
        "paragraphs": [
          "A string in JavaScript must be surrounded by quotes.",
          "In JavaScript, there are 3 types of quotes.",
          "1. Double quotes: `\"Hello\"`.",
          "2. Single quotes: `'Hello'`.",
          "3. Backticks: &#96;Hello&#96;."
        ],
        "codeExamples": [
          {
            "title": "String",
            "code": "let str = \"Hello\";\nlet str2 = 'Single quotes are ok too';\nlet phrase = `can embed another ${str}`;",
            "explanation": "Example demonstrating string."
          },
          {
            "title": "String",
            "code": "let name = \"John\";\n\n// embed a variable\nalert( `Hello, *!*${name}*/!*!` ); // Hello, John!\n\n// embed an expression\nalert( `the result is *!*${1 + 2}*/!*` ); // the result is 3",
            "explanation": "Example demonstrating string."
          }
        ]
      },
      {
        "heading": "Boolean (logical type)",
        "paragraphs": [
          "The boolean type has only two values: `true` and `false`.",
          "This type is commonly used to store yes/no values: `true` means \"yes, correct\", and `false` means \"no, incorrect\".",
          "For instance:",
          "Boolean values also come as a result of comparisons:",
          "We'll cover booleans more deeply in the chapter ."
        ],
        "codeExamples": [
          {
            "title": "Boolean (logical type)",
            "code": "let nameFieldChecked = true; // yes, name field is checked\nlet ageFieldChecked = false; // no, age field is not checked",
            "explanation": "Example demonstrating boolean (logical type)."
          },
          {
            "title": "Boolean (logical type)",
            "code": "let isGreater = 4 > 1;\n\nalert( isGreater ); // true (the comparison result is \"yes\")",
            "explanation": "Example demonstrating boolean (logical type)."
          }
        ]
      },
      {
        "heading": "The \"null\" value",
        "paragraphs": [
          "The special `null` value does not belong to any of the types described above.",
          "It forms a separate type of its own which contains only the `null` value:",
          "In JavaScript, `null` is not a \"reference to a non-existing object\" or a \"null pointer\" like in some other languages.",
          "It's just a special value which represents \"nothing\", \"empty\" or \"value unknown\".",
          "The code above states that `age` is unknown."
        ],
        "codeExamples": [
          {
            "title": "The \"null\" value",
            "code": "let age = null;",
            "explanation": "Example demonstrating the \"null\" value."
          }
        ]
      },
      {
        "heading": "The \"undefined\" value",
        "paragraphs": [
          "The special value `undefined` also stands apart. It makes a type of its own, just like `null`.",
          "The meaning of `undefined` is \"value is not assigned\".",
          "If a variable is declared, but not assigned, then its value is `undefined`:",
          "Technically, it is possible to explicitly assign `undefined` to a variable:",
          "...But we don't recommend doing that. Normally, one uses `null` to assign an \"empty\" or \"unknown\" value to a variable, while `undefined` is reserved as a default initial value for unassigned things."
        ],
        "codeExamples": [
          {
            "title": "The \"undefined\" value",
            "code": "let age;\n\nalert(age); // shows \"undefined\"",
            "explanation": "Example demonstrating the \"undefined\" value."
          },
          {
            "title": "The \"undefined\" value",
            "code": "let age = 100;\n\n// change the value to undefined\nage = undefined;\n\nalert(age); // \"undefined\"",
            "explanation": "Example demonstrating the \"undefined\" value."
          }
        ]
      },
      {
        "heading": "Objects and Symbols",
        "paragraphs": [
          "The `object` type is special.",
          "All other types are called \"primitive\" because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.",
          "Being that important, objects deserve a special treatment. We'll deal with them later in the chapter , after we learn more about primitives.",
          "The `symbol` type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects."
        ]
      },
      {
        "heading": "The typeof operator [#type-typeof]",
        "paragraphs": [
          "The `typeof` operator returns the type of the operand. It's useful when we want to process values of different types differently or just want to do a quick check.",
          "A call to `typeof x` returns a string with the type name:",
          "The last three lines may need additional explanation:",
          "1. `Math` is a built-in object that provides mathematical operations. We will learn it in the chapter . Here, it serves just as an example of an object.",
          "2. The result of `typeof null` is `\"object\"`. That's an officially recognized error in `typeof`, coming from very early days of JavaScript and kept for compatibility. Definitely, `null` is not an object. It is a special value with a separate type of its own. The behavior of `typeof` is wrong here."
        ],
        "codeExamples": [
          {
            "title": "The typeof operator [#type-typeof]",
            "code": "typeof undefined // \"undefined\"\n\ntypeof 0 // \"number\"\n\ntypeof 10n // \"bigint\"\n\ntypeof true // \"boolean\"\n\ntypeof \"foo\" // \"string\"\n\ntypeof Symbol(\"id\") // \"symbol\"\n\n*!*\ntypeof Math // \"object\"  (1)\n*/!*\n\n*!*\ntypeof null // \"object\"  (2)\n*/!*\n\n*!*\ntypeof alert // \"function\"  (3)\n*/!*",
            "explanation": "Example demonstrating the typeof operator [#type-typeof]."
          },
          {
            "title": "The typeof operator [#type-typeof]",
            "code": "You may also come across another syntax: `typeof(x)`. It's the same as `typeof x`.\n\nTo put it clear: `typeof` is an operator, not a function. The parentheses here aren't a part of `typeof`. It's the kind of parentheses used for mathematical grouping.\n\nUsually, such parentheses contain a mathematical expression, such as `(2 + 2)`, but here they contain only one argument `(x)`. Syntactically, they allow to avoid a space between the `typeof` operator and its argument, and some people like it.\n\nSome people prefer `typeof(x)`, although the `typeof x` syntax is much more common.",
            "explanation": "Example demonstrating the typeof operator [#type-typeof]."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are 8 basic data types in JavaScript.",
          "The `typeof` operator allows us to see which type is stored in a variable.",
          "In the next chapters, we'll concentrate on primitive values and once we're familiar with them, we'll move on to objects."
        ],
        "bulletPoints": [
          "Seven primitive data types:",
          "`number` for numbers of any kind: integer or floating-point, integers are limited by \u00b1(253-1).",
          "`bigint` for integer numbers of arbitrary length.",
          "`string` for strings. A string may have zero or more characters, there's no separate single-character type.",
          "`boolean` for `true`/`false`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "String quotes",
        "description": "What is the output of the script? ```js let name = \"Ilya\"; alert( `hello ${1}` ); // ? alert( `hello ${\"name\"}` ); // ? alert( `hello ${name}` ); // ? ```",
        "starterCode": "let name = \"Ilya\";\n\nalert( `hello ${1}` ); // ?\n\nalert( `hello ${\"name\"}` ); // ?\n\nalert( `hello ${name}` ); // ?",
        "solution": "let name = \"Ilya\";\n\nalert( `hello ${1}` ); // ?\n\nalert( `hello ${\"name\"}` ); // ?\n\nalert( `hello ${name}` ); // ?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Types in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for types.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Types is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Types?",
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
      "Types is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying types.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "types"
    ],
    "slug": "types"
  },
  {
    "title": "Alert Prompt Confirm",
    "description": "As we'll be using the browser as our demo environment, let's see a couple of functions to interact with the user: `alert`, `prompt` and `confirm`.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we'll be using the browser as our demo environment, let's see a couple of functions to interact with the user: `alert`, `prompt` and `confirm`."
        ]
      },
      {
        "heading": "alert",
        "paragraphs": [
          "This one we've seen already. It shows a message and waits for the user to press \"OK\".",
          "For example:",
          "The mini-window with the message is called a *modal window*. The word \"modal\" means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case -- until they press \"OK\"."
        ],
        "codeExamples": [
          {
            "title": "alert",
            "code": "alert(\"Hello\");",
            "explanation": "Example demonstrating alert."
          }
        ]
      },
      {
        "heading": "prompt",
        "paragraphs": [
          "The function `prompt` accepts two arguments:",
          "It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.",
          "`title`",
          ": The text to show the visitor.",
          "`default`"
        ],
        "codeExamples": [
          {
            "title": "prompt",
            "code": "result = prompt(title, [default]);",
            "explanation": "Example demonstrating prompt."
          },
          {
            "title": "prompt",
            "code": "The square brackets around `default` in the syntax above denote that the parameter is optional, not required.",
            "explanation": "Example demonstrating prompt."
          }
        ]
      },
      {
        "heading": "confirm",
        "paragraphs": [
          "The syntax:",
          "The function `confirm` shows a modal window with a `question` and two buttons: OK and Cancel.",
          "The result is `true` if OK is pressed and `false` otherwise.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "confirm",
            "code": "result = confirm(question);",
            "explanation": "Example demonstrating confirm."
          },
          {
            "title": "confirm",
            "code": "let isBoss = confirm(\"Are you the boss?\");\n\nalert( isBoss ); // true if OK is pressed",
            "explanation": "Example demonstrating confirm."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We covered 3 browser-specific functions to interact with visitors:",
          "`alert`",
          ": shows a message.",
          "`prompt`",
          ": shows a message asking the user to input text. It returns the text or, if Cancel button or `key:Esc` is clicked, `null`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "A simple page",
        "description": "Create a web-page that asks for a name and outputs it. [demo]",
        "starterCode": "// Write your code here\n",
        "solution": "The full page:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Alert Prompt Confirm in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for alert prompt confirm.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Alert Prompt Confirm is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Alert Prompt Confirm?",
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
      "Alert Prompt Confirm is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying alert prompt confirm.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "alert-prompt-confirm"
    ],
    "slug": "alert-prompt-confirm"
  },
  {
    "title": "Type Conversions",
    "description": "Most of the time, operators and functions automatically convert the values given to them to the right type.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Most of the time, operators and functions automatically convert the values given to them to the right type.",
          "For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers.",
          "There are also cases when we need to explicitly convert a value to the expected type."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "In this chapter, we won't cover objects. For now, we'll just be talking about primitives.\n\nLater, after we learn about objects, in the chapter <info:object-toprimitive> we'll see how objects fit in.",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "String Conversion",
        "paragraphs": [
          "String conversion happens when we need the string form of a value.",
          "For example, `alert(value)` does it to show the value.",
          "We can also call the `String(value)` function to convert a value to a string:",
          "String conversion is mostly obvious. A `false` becomes `\"false\"`, `null` becomes `\"null\"`, etc."
        ],
        "codeExamples": [
          {
            "title": "String Conversion",
            "code": "let value = true;\nalert(typeof value); // boolean\n\n*!*\nvalue = String(value); // now value is a string \"true\"\nalert(typeof value); // string\n*/!*",
            "explanation": "Example demonstrating string conversion."
          }
        ]
      },
      {
        "heading": "Numeric Conversion",
        "paragraphs": [
          "Numeric conversion in mathematical functions and expressions happens automatically.",
          "For example, when division `/` is applied to non-numbers:",
          "We can use the `Number(value)` function to explicitly convert a `value` to a number:",
          "Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.",
          "If the string is not a valid number, the result of such a conversion is `NaN`. For instance:"
        ],
        "codeExamples": [
          {
            "title": "Numeric Conversion",
            "code": "alert( \"6\" / \"2\" ); // 3, strings are converted to numbers",
            "explanation": "Example demonstrating numeric conversion."
          },
          {
            "title": "Numeric Conversion",
            "code": "let str = \"123\";\nalert(typeof str); // string\n\nlet num = Number(str); // becomes a number 123\n\nalert(typeof num); // number",
            "explanation": "Example demonstrating numeric conversion."
          }
        ]
      },
      {
        "heading": "Boolean Conversion",
        "paragraphs": [
          "Boolean conversion is the simplest one.",
          "It happens in logical operations (later we'll meet condition tests and other similar things) but can also be performed explicitly with a call to `Boolean(value)`.",
          "The conversion rule:",
          "For instance:",
          "alert( Boolean(\"0\") ); // true"
        ],
        "codeExamples": [
          {
            "title": "Boolean Conversion",
            "code": "alert( Boolean(1) ); // true\nalert( Boolean(0) ); // false\n\nalert( Boolean(\"hello\") ); // true\nalert( Boolean(\"\") ); // false",
            "explanation": "Example demonstrating boolean conversion."
          },
          {
            "title": "Boolean Conversion",
            "code": "Some languages (namely PHP) treat `\"0\"` as `false`. But in JavaScript, a non-empty string is always `true`.",
            "explanation": "Example demonstrating boolean conversion."
          }
        ],
        "bulletPoints": [
          "Values that are intuitively \"empty\", like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`.",
          "Other values become `true`."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The three most widely used type conversions are to string, to number, and to boolean.",
          "**`String Conversion`** -- Occurs when we output something. Can be performed with `String(value)`. The conversion to string is usually obvious for primitive values.",
          "**`Numeric Conversion`** -- Occurs in math operations. Can be performed with `Number(value)`.",
          "The conversion follows the rules:",
          "| Value | Becomes... |"
        ],
        "bulletPoints": [
          "`undefined` is `NaN` as a number, not `0`.",
          "`\"0\"` and space-only strings like `\" \"` are true as a boolean."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Type Conversions",
        "description": "Apply your understanding of Type Conversions. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Type Conversions\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Type Conversions\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Type Conversions in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for type conversions.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Type Conversions is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Type Conversions?",
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
      "Type Conversions is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying type conversions.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "type-conversions"
    ],
    "slug": "type-conversions"
  },
  {
    "title": "Operators",
    "description": "We know many operators from school. They are things like addition `+`, multiplication `*`, subtraction `-`, and so on.",
    "difficulty": "beginner",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We know many operators from school. They are things like addition `+`, multiplication `*`, subtraction `-`, and so on.",
          "In this chapter, we\u2019ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic."
        ]
      },
      {
        "heading": "Terms: \"unary\", \"binary\", \"operand\"",
        "paragraphs": [
          "Before we move on, let's grasp some common terminology.",
          "let x = 1;",
          "*!*",
          "x = -x;",
          "*/!*"
        ],
        "bulletPoints": [
          "*An operand* -- is what operators are applied to. For instance, in the multiplication of `5 * 2` there are two operands: the left operand is `5` and the right operand is `2`. Sometimes, people call these \"arguments\" instead of \"operands\".",
          "An operator is *unary* if it has a single operand. For example, the unary negation `-` reverses the sign of a number:",
          "An operator is *binary* if it has two operands. The same minus exists in binary form as well:"
        ]
      },
      {
        "heading": "Maths",
        "paragraphs": [
          "The following math operations are supported:",
          "The first four are straightforward, while `%` and `**` need a few words about them."
        ],
        "bulletPoints": [
          "Addition `+`,",
          "Subtraction `-`,",
          "Multiplication `*`,",
          "Division `/`,",
          "Remainder `%`,"
        ]
      },
      {
        "heading": "Remainder %",
        "paragraphs": [
          "The remainder operator `%`, despite its appearance, is not related to percents.",
          "The result of `a % b` is the remainder of the integer division of `a` by `b`.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Remainder %",
            "code": "alert( 5 % 2 ); // 1, the remainder of 5 divided by 2\nalert( 8 % 3 ); // 2, the remainder of 8 divided by 3\nalert( 8 % 4 ); // 0, the remainder of 8 divided by 4",
            "explanation": "Example demonstrating remainder %."
          }
        ]
      },
      {
        "heading": "Exponentiation **",
        "paragraphs": [
          "The exponentiation operator `a ** b` raises `a` to the power of `b`.",
          "In school maths, we write that as ab.",
          "For instance:",
          "Just like in maths, the exponentiation operator is defined for non-integer numbers as well.",
          "For example, a square root is an exponentiation by \u00bd:"
        ],
        "codeExamples": [
          {
            "title": "Exponentiation **",
            "code": "alert( 2 ** 2 ); // 2\u00b2 = 4\nalert( 2 ** 3 ); // 2\u00b3 = 8\nalert( 2 ** 4 ); // 2\u2074 = 16",
            "explanation": "Example demonstrating exponentiation **."
          },
          {
            "title": "Exponentiation **",
            "code": "alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)\nalert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)",
            "explanation": "Example demonstrating exponentiation **."
          }
        ]
      },
      {
        "heading": "String concatenation with binary +",
        "paragraphs": [
          "Let's meet the features of JavaScript operators that are beyond school arithmetics.",
          "Usually, the plus operator `+` sums numbers.",
          "But, if the binary `+` is applied to strings, it merges (concatenates) them:",
          "Note that if any of the operands is a string, then the other one is converted to a string too.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "String concatenation with binary +",
            "code": "let s = \"my\" + \"string\";\nalert(s); // mystring",
            "explanation": "Example demonstrating string concatenation with binary +."
          },
          {
            "title": "String concatenation with binary +",
            "code": "alert( '1' + 2 ); // \"12\"\nalert( 2 + '1' ); // \"21\"",
            "explanation": "Example demonstrating string concatenation with binary +."
          }
        ]
      },
      {
        "heading": "Numeric conversion, unary +",
        "paragraphs": [
          "The plus `+` exists in two forms: the binary form that we used above and the unary form.",
          "The unary plus or, in other words, the plus operator `+` applied to a single value, doesn't do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.",
          "For example:",
          "It actually does the same thing as `Number(...)`, but is shorter.",
          "The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?"
        ],
        "codeExamples": [
          {
            "title": "Numeric conversion, unary +",
            "code": "// No effect on numbers\nlet x = 1;\nalert( +x ); // 1\n\nlet y = -2;\nalert( +y ); // -2\n\n*!*\n// Converts non-numbers\nalert( +true ); // 1\nalert( +\"\" );   // 0\n*/!*",
            "explanation": "Example demonstrating numeric conversion, unary +."
          },
          {
            "title": "Numeric conversion, unary +",
            "code": "let apples = \"2\";\nlet oranges = \"3\";\n\nalert( apples + oranges ); // \"23\", the binary plus concatenates strings",
            "explanation": "Example demonstrating numeric conversion, unary +."
          }
        ]
      },
      {
        "heading": "Operator precedence",
        "paragraphs": [
          "If an expression has more than one operator, the execution order is defined by their *precedence*, or, in other words, the default priority order of operators.",
          "From school, we all know that the multiplication in the expression `1 + 2 * 2` should be calculated before the addition. That's exactly the precedence thing. The multiplication is said to have *a higher precedence* than the addition.",
          "Parentheses override any precedence, so if we're not satisfied with the default order, we can use them to change it. For example, write `(1 + 2) * 2`.",
          "There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.",
          "Here's an extract from the precedence table (you don't need to remember this, but note that unary operators are higher than corresponding binary ones):"
        ]
      },
      {
        "heading": "Assignment",
        "paragraphs": [
          "Let's note that an assignment `=` is also an operator. It is listed in the precedence table with the very low priority of `2`.",
          "That's why, when we assign a variable, like `x = 2 * 2 + 1`, the calculations are done first and then the `=` is evaluated, storing the result in `x`."
        ],
        "codeExamples": [
          {
            "title": "Assignment",
            "code": "let x = 2 * 2 + 1;\n\nalert( x ); // 5",
            "explanation": "Example demonstrating assignment."
          }
        ]
      },
      {
        "heading": "Assignment = returns a value",
        "paragraphs": [
          "The fact of `=` being an operator, not a \"magical\" language construct has an interesting implication.",
          "All operators in JavaScript return a value. That's obvious for `+` and `-`, but also true for `=`.",
          "The call `x = value` writes the `value` into `x` *and then returns it*.",
          "Here's a demo that uses an assignment as part of a more complex expression:",
          "In the example above, the result of expression `(a = b + 1)` is the value which was assigned to `a` (that is `3`). It is then used for further evaluations."
        ],
        "codeExamples": [
          {
            "title": "Assignment = returns a value",
            "code": "let a = 1;\nlet b = 2;\n\n*!*\nlet c = 3 - (a = b + 1);\n*/!*\n\nalert( a ); // 3\nalert( c ); // 0",
            "explanation": "Example demonstrating assignment = returns a value."
          }
        ]
      },
      {
        "heading": "Chaining assignments",
        "paragraphs": [
          "Another interesting feature is the ability to chain assignments:",
          "Chained assignments evaluate from right to left. First, the rightmost expression `2 + 2` is evaluated and then assigned to the variables on the left: `c`, `b` and `a`. At the end, all the variables share a single value.",
          "Once again, for the purposes of readability it's better to split such code into a few lines:",
          "That's easier to read, especially when eye-scanning the code fast."
        ],
        "codeExamples": [
          {
            "title": "Chaining assignments",
            "code": "let a, b, c;\n\n*!*\na = b = c = 2 + 2;\n*/!*\n\nalert( a ); // 4\nalert( b ); // 4\nalert( c ); // 4",
            "explanation": "Example demonstrating chaining assignments."
          },
          {
            "title": "Chaining assignments",
            "code": "c = 2 + 2;\nb = c;\na = c;",
            "explanation": "Example demonstrating chaining assignments."
          }
        ]
      },
      {
        "heading": "Modify-in-place",
        "paragraphs": [
          "We often need to apply an operator to a variable and store the new result in that same variable.",
          "For example:",
          "This notation can be shortened using the operators `+=` and `*=`:",
          "Short \"modify-and-assign\" operators exist for all arithmetical and bitwise operators: `/=`, `-=`, etc.",
          "Such operators have the same precedence as a normal assignment, so they run after most other calculations:"
        ],
        "codeExamples": [
          {
            "title": "Modify-in-place",
            "code": "let n = 2;\nn = n + 5;\nn = n * 2;",
            "explanation": "Example demonstrating modify-in-place."
          },
          {
            "title": "Modify-in-place",
            "code": "let n = 2;\nn += 5; // now n = 7 (same as n = n + 5)\nn *= 2; // now n = 14 (same as n = n * 2)\n\nalert( n ); // 14",
            "explanation": "Example demonstrating modify-in-place."
          }
        ]
      },
      {
        "heading": "Increment/decrement",
        "paragraphs": [
          "<!-- Can't use -- in title, because the built-in parser turns it into a 'long dash' \u2013 -->",
          "Increasing or decreasing a number by one is among the most common numerical operations.",
          "So, there are special operators for it:",
          "let counter = 2;",
          "counter++; // works the same as counter = counter + 1, but is shorter"
        ],
        "codeExamples": [
          {
            "title": "Increment/decrement",
            "code": "Increment/decrement can only be applied to variables. Trying to use it on a value like `5++` will give an error.",
            "explanation": "Example demonstrating increment/decrement."
          },
          {
            "title": "Increment/decrement",
            "code": "let counter = 1;\nlet a = ++counter; // (*)\n\nalert(a); // *!*2*/!*",
            "explanation": "Example demonstrating increment/decrement."
          }
        ],
        "bulletPoints": [
          "**Increment** `++` increases a variable by 1:",
          "**Decrement** `--` decreases a variable by 1:",
          "When the operator goes after the variable, it is in \"postfix form\": `counter++`.",
          "The \"prefix form\" is when the operator goes before the variable: `++counter`.",
          "If the result of increment/decrement is not used, there is no difference in which form to use:"
        ]
      },
      {
        "heading": "Bitwise operators",
        "paragraphs": [
          "Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.",
          "These operators are not JavaScript-specific. They are supported in most programming languages.",
          "The list of operators:",
          "These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won't need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises."
        ],
        "bulletPoints": [
          "AND ( `&` )",
          "OR ( `|` )",
          "XOR ( `^` )",
          "NOT ( `~` )",
          "LEFT SHIFT ( `<<` )"
        ]
      },
      {
        "heading": "Comma",
        "paragraphs": [
          "The comma operator `,` is one of the rarest and most unusual operators. Sometimes, it's used to write shorter code, so we need to know it in order to understand what's going on.",
          "The comma operator allows us to evaluate several expressions, dividing them with a comma `,`. Each of them is evaluated but only the result of the last one is returned.",
          "For example:",
          "Here, the first expression `1 + 2` is evaluated and its result is thrown away. Then, `3 + 4` is evaluated and returned as the result.",
          "Why do we need an operator that throws away everything except the last expression?"
        ],
        "codeExamples": [
          {
            "title": "Comma",
            "code": "*!*\nlet a = (1 + 2, 3 + 4);\n*/!*\n\nalert( a ); // 7 (the result of 3 + 4)",
            "explanation": "Example demonstrating comma."
          },
          {
            "title": "Comma",
            "code": "Please note that the comma operator has very low precedence, lower than `=`, so parentheses are important in the example above.\n\nWithout them: `a = 1 + 2, 3 + 4` evaluates `+` first, summing the numbers into `a = 3, 7`, then the assignment operator `=` assigns `a = 3`, and the rest is ignored. It's like `(a = 1 + 2), 3 + 4`.",
            "explanation": "Example demonstrating comma."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "The postfix and prefix forms",
        "description": "What are the final values of all variables `a`, `b`, `c` and `d` after the code below? ```js let a = 1, b = 1; let c = ++a; // ? let d = b++; // ? ```",
        "starterCode": "let a = 1, b = 1;\n\nlet c = ++a; // ?\nlet d = b++; // ?",
        "solution": "let a = 1, b = 1;\n\nlet c = ++a; // ?\nlet d = b++; // ?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Assignment result",
        "description": "What are the values of `a` and `x` after the code below? ```js let a = 2; let x = 1 + (a *= 2); ```",
        "starterCode": "let a = 2;\n\nlet x = 1 + (a *= 2);",
        "solution": "let a = 2;\n\nlet x = 1 + (a *= 2);",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "Type conversions",
        "description": "What are results of these expressions? ```js no-beautify \"\" + 1 + 0 \"\" - 1 + 0 true + false 6 / \"3\" \"2\" * \"3\" 4 + 5 + \"px\" \"$\" + 4 + 5 \"4\" - 2 \"4px\" - 2 \" -9 \" + 5 \" -9 \" - 5 null + 1 undefined + 1 \" \\t \\n\" - 2 ``` Think well, write down and then compare with the answer.",
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
        "question": "What is the primary role of Operators in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for operators.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Operators is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Operators?",
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
      "Operators is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying operators.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "operators"
    ],
    "slug": "operators"
  },
  {
    "title": "Comparison",
    "description": "We know many comparison operators from maths.",
    "difficulty": "beginner",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We know many comparison operators from maths.",
          "In JavaScript they are written like this:",
          "In this article we'll learn more about different types of comparisons, how JavaScript makes them, including important peculiarities.",
          "At the end you'll find a good recipe to avoid \"JavaScript quirks\"-related issues."
        ],
        "bulletPoints": [
          "Greater/less than: a &gt; b, a &lt; b.",
          "Greater/less than or equals: a &gt;= b, a &lt;= b.",
          "Equals: `a == b`, please note the double equality sign `==` means the equality test, while a single one `a = b` means an assignment.",
          "Not equals: In maths the notation is &ne;, but in JavaScript it's written as a != b."
        ]
      },
      {
        "heading": "Boolean is the result",
        "paragraphs": [
          "All comparison operators return a boolean value:",
          "For example:",
          "A comparison result can be assigned to a variable, just like any value:"
        ],
        "codeExamples": [
          {
            "title": "Boolean is the result",
            "code": "alert( 2 > 1 );  // true (correct)\nalert( 2 == 1 ); // false (wrong)\nalert( 2 != 1 ); // true (correct)",
            "explanation": "Example demonstrating boolean is the result."
          },
          {
            "title": "Boolean is the result",
            "code": "let result = 5 > 4; // assign the result of the comparison\nalert( result ); // true",
            "explanation": "Example demonstrating boolean is the result."
          }
        ],
        "bulletPoints": [
          "`true` -- means \"yes\", \"correct\" or \"the truth\".",
          "`false` -- means \"no\", \"wrong\" or \"not the truth\"."
        ]
      },
      {
        "heading": "String comparison",
        "paragraphs": [
          "To see whether a string is greater than another, JavaScript uses the so-called \"dictionary\" or \"lexicographical\" order.",
          "In other words, strings are compared letter-by-letter.",
          "For example:",
          "The algorithm to compare two strings is simple:",
          "1. Compare the first character of both strings."
        ],
        "codeExamples": [
          {
            "title": "String comparison",
            "code": "alert( 'Z' > 'A' ); // true\nalert( 'Glow' > 'Glee' ); // true\nalert( 'Bee' > 'Be' ); // true",
            "explanation": "Example demonstrating string comparison."
          },
          {
            "title": "String comparison",
            "code": "The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it's not exactly the same.\n\nFor instance, case matters. A capital letter `\"A\"` is not equal to the lowercase `\"a\"`. Which one is greater? The lowercase `\"a\"`. Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We'll get back to specific details and consequences of this in the chapter <info:string>.",
            "explanation": "Example demonstrating string comparison."
          }
        ]
      },
      {
        "heading": "Comparison of different types",
        "paragraphs": [
          "When comparing values of different types, JavaScript converts the values to numbers.",
          "For example:",
          "For boolean values, `true` becomes `1` and `false` becomes `0`.",
          "For example:",
          "let a = 0;"
        ],
        "codeExamples": [
          {
            "title": "Comparison of different types",
            "code": "alert( '2' > 1 ); // true, string '2' becomes a number 2\nalert( '01' == 1 ); // true, string '01' becomes a number 1",
            "explanation": "Example demonstrating comparison of different types."
          },
          {
            "title": "Comparison of different types",
            "code": "alert( true == 1 ); // true\nalert( false == 0 ); // true",
            "explanation": "Example demonstrating comparison of different types."
          }
        ]
      },
      {
        "heading": "Strict equality",
        "paragraphs": [
          "A regular equality check `==` has a problem. It cannot differentiate `0` from `false`:",
          "The same thing happens with an empty string:",
          "This happens because operands of different types are converted to numbers by the equality operator `==`. An empty string, just like `false`, becomes a zero.",
          "What to do if we'd like to differentiate `0` from `false`?",
          "**A strict equality operator `===` checks the equality without type conversion.**"
        ],
        "codeExamples": [
          {
            "title": "Strict equality",
            "code": "alert( 0 == false ); // true",
            "explanation": "Example demonstrating strict equality."
          },
          {
            "title": "Strict equality",
            "code": "alert( '' == false ); // true",
            "explanation": "Example demonstrating strict equality."
          }
        ]
      },
      {
        "heading": "Comparison with null and undefined",
        "paragraphs": [
          "There's a non-intuitive behavior when `null` or `undefined` are compared to other values.",
          "For a strict equality check `===`",
          ": These values are different, because each of them is a different type.",
          "alert( null === undefined ); // false",
          "For a non-strict check `==`"
        ]
      },
      {
        "heading": "Strange result: null vs 0",
        "paragraphs": [
          "Let's compare `null` with a zero:",
          "Mathematically, that's strange. The last result states that \"`null` is greater than or equal to zero\", so in one of the comparisons above it must be `true`, but they are both false.",
          "The reason is that an equality check `==` and comparisons `> < >= <=` work differently. Comparisons convert `null` to a number, treating it as `0`. That's why (3) `null >= 0` is true and (1) `null > 0` is false.",
          "On the other hand, the equality check `==` for `undefined` and `null` is defined such that, without any conversions, they equal each other and don't equal anything else. That's why (2) `null == 0` is false."
        ],
        "codeExamples": [
          {
            "title": "Strange result: null vs 0",
            "code": "alert( null > 0 );  // (1) false\nalert( null == 0 ); // (2) false\nalert( null >= 0 ); // (3) *!*true*/!*",
            "explanation": "Example demonstrating strange result: null vs 0."
          }
        ]
      },
      {
        "heading": "An incomparable undefined",
        "paragraphs": [
          "The value `undefined` shouldn't be compared to other values:",
          "Why does it dislike zero so much? Always false!",
          "We get these results because:"
        ],
        "codeExamples": [
          {
            "title": "An incomparable undefined",
            "code": "alert( undefined > 0 ); // false (1)\nalert( undefined < 0 ); // false (2)\nalert( undefined == 0 ); // false (3)",
            "explanation": "Example demonstrating an incomparable undefined."
          }
        ],
        "bulletPoints": [
          "Comparisons `(1)` and `(2)` return `false` because `undefined` gets converted to `NaN` and `NaN` is a special numeric value which returns `false` for all comparisons.",
          "The equality check `(3)` returns `false` because `undefined` only equals `null`, `undefined`, and no other value."
        ]
      },
      {
        "heading": "Avoid problems",
        "paragraphs": [
          "Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there's a solid way to avoid problems with them:"
        ],
        "bulletPoints": [
          "Treat any comparison with `undefined/null` except the strict equality `===` with exceptional care.",
          "Don't use comparisons `>= > < <=` with a variable which may be `null/undefined`, unless you're really sure of what you're doing. If a variable can have these values, check for them separately."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "Comparison operators return a boolean value.",
          "Strings are compared letter-by-letter in the \"dictionary\" order.",
          "When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).",
          "The values `null` and `undefined` are equal `==` to themselves and each other, but do not equal any other value.",
          "Be careful when using comparisons like `>` or `<` with variables that can occasionally be `null/undefined`. Checking for `null/undefined` separately is a good idea."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Comparisons",
        "description": "What will be the result for these expressions? ```js no-beautify 5 > 4 \"apple\" > \"pineapple\" \"2\" > \"12\" undefined == null undefined === null null == \"\\n0\\n\" null === +\"\\n0\\n\" ```",
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
        "question": "What is the primary role of Comparison in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for comparison.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Comparison is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Comparison?",
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
      "Comparison is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying comparison.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "comparison"
    ],
    "slug": "comparison"
  },
  {
    "title": "Ifelse",
    "description": "Sometimes, we need to perform different actions based on different conditions.",
    "difficulty": "beginner",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Sometimes, we need to perform different actions based on different conditions.",
          "To do that, we can use the `if` statement and the conditional operator `?`, that's also called a \"question mark\" operator."
        ]
      },
      {
        "heading": "The \"if\" statement",
        "paragraphs": [
          "The `if(...)` statement evaluates a condition in parentheses and, if the result is `true`, executes a block of code.",
          "For example:",
          "In the example above, the condition is a simple equality check (`year == 2015`), but it can be much more complex.",
          "If we want to execute more than one statement, we have to wrap our code block inside curly braces:",
          "We recommend wrapping your code block with curly braces `{}` every time you use an `if` statement, even if there is only one statement to execute. Doing so improves readability."
        ],
        "codeExamples": [
          {
            "title": "The \"if\" statement",
            "code": "let year = prompt('In which year was ECMAScript-2015 specification published?', '');\n\n*!*\nif (year == 2015) alert( 'You are right!' );\n*/!*",
            "explanation": "Example demonstrating the \"if\" statement."
          },
          {
            "title": "The \"if\" statement",
            "code": "if (year == 2015) {\n  alert( \"That's correct!\" );\n  alert( \"You're so smart!\" );\n}",
            "explanation": "Example demonstrating the \"if\" statement."
          }
        ]
      },
      {
        "heading": "Boolean conversion",
        "paragraphs": [
          "The `if (\u2026)` statement evaluates the expression in its parentheses and converts the result to a boolean.",
          "Let's recall the conversion rules from the chapter :",
          "So, the code under this condition would never execute:",
          "...and inside this condition -- it always will:",
          "We can also pass a pre-evaluated boolean value to `if`, like this:"
        ],
        "codeExamples": [
          {
            "title": "Boolean conversion",
            "code": "if (0) { // 0 is falsy\n  ...\n}",
            "explanation": "Example demonstrating boolean conversion."
          },
          {
            "title": "Boolean conversion",
            "code": "if (1) { // 1 is truthy\n  ...\n}",
            "explanation": "Example demonstrating boolean conversion."
          }
        ],
        "bulletPoints": [
          "A number `0`, an empty string `\"\"`, `null`, `undefined`, and `NaN` all become `false`. Because of that they are called \"falsy\" values.",
          "Other values become `true`, so they are called \"truthy\"."
        ]
      },
      {
        "heading": "The \"else\" clause",
        "paragraphs": [
          "The `if` statement may contain an optional `else` block. It executes when the condition is falsy.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "The \"else\" clause",
            "code": "let year = prompt('In which year was the ECMAScript-2015 specification published?', '');\n\nif (year == 2015) {\n  alert( 'You guessed it right!' );\n} else {\n  alert( 'How can you be so wrong?' ); // any value except 2015\n}",
            "explanation": "Example demonstrating the \"else\" clause."
          }
        ]
      },
      {
        "heading": "Several conditions: \"else if\"",
        "paragraphs": [
          "Sometimes, we'd like to test several variants of a condition. The `else if` clause lets us do that.",
          "For example:",
          "In the code above, JavaScript first checks `year < 2015`. If that is falsy, it goes to the next condition `year > 2015`. If that is also falsy, it shows the last `alert`.",
          "There can be more `else if` blocks. The final `else` is optional."
        ],
        "codeExamples": [
          {
            "title": "Several conditions: \"else if\"",
            "code": "let year = prompt('In which year was the ECMAScript-2015 specification published?', '');\n\nif (year < 2015) {\n  alert( 'Too early...' );\n} else if (year > 2015) {\n  alert( 'Too late' );\n} else {\n  alert( 'Exactly!' );\n}",
            "explanation": "Example demonstrating several conditions: \"else if\"."
          }
        ]
      },
      {
        "heading": "Conditional operator '?'",
        "paragraphs": [
          "Sometimes, we need to assign a variable depending on a condition.",
          "For instance:",
          "The so-called \"conditional\" or \"question mark\" operator lets us do that in a shorter and simpler way.",
          "The operator is represented by a question mark `?`. Sometimes it's called \"ternary\", because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.",
          "The syntax is:"
        ],
        "codeExamples": [
          {
            "title": "Conditional operator '?'",
            "code": "let accessAllowed;\nlet age = prompt('How old are you?', '');\n\n*!*\nif (age > 18) {\n  accessAllowed = true;\n} else {\n  accessAllowed = false;\n}\n*/!*\n\nalert(accessAllowed);",
            "explanation": "Example demonstrating conditional operator '?'."
          },
          {
            "title": "Conditional operator '?'",
            "code": "let result = condition ? value1 : value2;",
            "explanation": "Example demonstrating conditional operator '?'."
          }
        ]
      },
      {
        "heading": "Multiple '?'",
        "paragraphs": [
          "A sequence of question mark operators `?` can return a value that depends on more than one condition.",
          "For instance:",
          "It may be difficult at first to grasp what's going on. But after a closer look, we can see that it's just an ordinary sequence of tests:",
          "1. The first question mark checks whether `age < 3`.",
          "2. If true -- it returns `'Hi, baby!'`. Otherwise, it continues to the expression after the colon \":\", checking `age < 18`."
        ],
        "codeExamples": [
          {
            "title": "Multiple '?'",
            "code": "let age = prompt('age?', 18);\n\nlet message = (age < 3) ? 'Hi, baby!' :\n  (age < 18) ? 'Hello!' :\n  (age < 100) ? 'Greetings!' :\n  'What an unusual age!';\n\nalert( message );",
            "explanation": "Example demonstrating multiple '?'."
          },
          {
            "title": "Multiple '?'",
            "code": "if (age < 3) {\n  message = 'Hi, baby!';\n} else if (age < 18) {\n  message = 'Hello!';\n} else if (age < 100) {\n  message = 'Greetings!';\n} else {\n  message = 'What an unusual age!';\n}",
            "explanation": "Example demonstrating multiple '?'."
          }
        ]
      },
      {
        "heading": "Non-traditional use of '?'",
        "paragraphs": [
          "Sometimes the question mark `?` is used as a replacement for `if`:",
          "Depending on the condition `company == 'Netscape'`, either the first or the second expression after the `?` gets executed and shows an alert.",
          "We don't assign a result to a variable here. Instead, we execute different code depending on the condition.",
          "**It's not recommended to use the question mark operator in this way.**",
          "The notation is shorter than the equivalent `if` statement, which appeals to some programmers. But it is less readable."
        ],
        "codeExamples": [
          {
            "title": "Non-traditional use of '?'",
            "code": "let company = prompt('Which company created JavaScript?', '');\n\n*!*\n(company == 'Netscape') ?\n   alert('Right!') : alert('Wrong.');\n*/!*",
            "explanation": "Example demonstrating non-traditional use of '?'."
          },
          {
            "title": "Non-traditional use of '?'",
            "code": "let company = prompt('Which company created JavaScript?', '');\n\n*!*\nif (company == 'Netscape') {\n  alert('Right!');\n} else {\n  alert('Wrong.');\n}\n*/!*",
            "explanation": "Example demonstrating non-traditional use of '?'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "if (a string with zero)",
        "description": "Will `alert` be shown? ```js if (\"0\") { alert( 'Hello' ); } ```",
        "starterCode": "if (\"0\") {\n  alert( 'Hello' );\n}",
        "solution": "if (\"0\") {\n  alert( 'Hello' );\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "The name of JavaScript",
        "description": "Using the `if..else` construct, write the code which asks: 'What is the \"official\" name of JavaScript?' If the visitor enters \"ECMAScript\", then output \"Right!\", otherwise -- output: \"You don't know? ECMAScript!\" ![](ifelse_task2.svg) [demo src=\"ifelse_task2\"]",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Show the sign",
        "description": "Using `if..else`, write the code which gets a number via `prompt` and then shows in `alert`: - `1`, if the value is greater than zero, - `-1`, if less than zero, - `0`, if equals zero. In this task we assume that the input is always a number. [demo src=\"if_sign\"]",
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
        "question": "What is the primary role of Ifelse in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for ifelse.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Ifelse is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Ifelse?",
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
      "Ifelse is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying ifelse.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "ifelse"
    ],
    "slug": "ifelse"
  },
  {
    "title": "Logical Operators",
    "description": "There are four logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing). Here we cover the first three, the `??` operator is in the next article...",
    "difficulty": "beginner",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There are four logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing). Here we cover the first three, the `??` operator is in the next article.",
          "Although they are called \"logical\", they can be applied to values of any type, not only boolean. Their result can also be of any type.",
          "Let's see the details."
        ]
      },
      {
        "heading": "|| (OR)",
        "paragraphs": [
          "The \"OR\" operator is represented with two vertical line symbols:",
          "In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are `true`, it returns `true`, otherwise it returns `false`.",
          "In JavaScript, the operator is a little bit trickier and more powerful. But first, let's see what happens with boolean values.",
          "There are four possible logical combinations:",
          "As we can see, the result is always `true` except for the case when both operands are `false`."
        ],
        "codeExamples": [
          {
            "title": "|| (OR)",
            "code": "result = a || b;",
            "explanation": "Example demonstrating || (or)."
          },
          {
            "title": "|| (OR)",
            "code": "alert( true || true );   // true\nalert( false || true );  // true\nalert( true || false );  // true\nalert( false || false ); // false",
            "explanation": "Example demonstrating || (or)."
          }
        ]
      },
      {
        "heading": "OR \"||\" finds the first truthy value [#or-finds-the-first-truthy-value]",
        "paragraphs": [
          "The logic described above is somewhat classical. Now, let's bring in the \"extra\" features of JavaScript.",
          "The extended algorithm works as follows.",
          "Given multiple OR'ed values:",
          "The OR `||` operator does the following:",
          "A value is returned in its original form, without the conversion."
        ],
        "codeExamples": [
          {
            "title": "OR \"||\" finds the first truthy value [#or-finds-the-first-truthy-value]",
            "code": "result = value1 || value2 || value3;",
            "explanation": "Example demonstrating or \"||\" finds the first truthy value [#or-finds-the-first-truthy-value]."
          },
          {
            "title": "OR \"||\" finds the first truthy value [#or-finds-the-first-truthy-value]",
            "code": "alert( 1 || 0 ); // 1 (1 is truthy)\n\nalert( null || 1 ); // 1 (1 is the first truthy value)\nalert( null || 0 || 1 ); // 1 (the first truthy value)\n\nalert( undefined || null || 0 ); // 0 (all falsy, returns the last value)",
            "explanation": "Example demonstrating or \"||\" finds the first truthy value [#or-finds-the-first-truthy-value]."
          }
        ],
        "bulletPoints": [
          "Evaluates operands from left to right.",
          "For each operand, converts it to boolean. If the result is `true`, stops and returns the original value of that operand.",
          "If all operands have been evaluated (i.e. all were `false`), returns the last operand."
        ]
      },
      {
        "heading": "&& (AND)",
        "paragraphs": [
          "The AND operator is represented with two ampersands `&&`:",
          "In classical programming, AND returns `true` if both operands are truthy and `false` otherwise:",
          "An example with `if`:",
          "Just as with OR, any value is allowed as an operand of AND:"
        ],
        "codeExamples": [
          {
            "title": "&& (AND)",
            "code": "result = a && b;",
            "explanation": "Example demonstrating && (and)."
          },
          {
            "title": "&& (AND)",
            "code": "alert( true && true );   // true\nalert( false && true );  // false\nalert( true && false );  // false\nalert( false && false ); // false",
            "explanation": "Example demonstrating && (and)."
          }
        ]
      },
      {
        "heading": "AND \"&&\" finds the first falsy value",
        "paragraphs": [
          "Given multiple AND'ed values:",
          "The AND `&&` operator does the following:",
          "In other words, AND returns the first falsy value or the last value if none were found.",
          "The rules above are similar to OR. The difference is that AND returns the first *falsy* value while OR returns the first *truthy* one.",
          "Examples:"
        ],
        "codeExamples": [
          {
            "title": "AND \"&&\" finds the first falsy value",
            "code": "result = value1 && value2 && value3;",
            "explanation": "Example demonstrating and \"&&\" finds the first falsy value."
          },
          {
            "title": "AND \"&&\" finds the first falsy value",
            "code": "// if the first operand is truthy,\n// AND returns the second operand:\nalert( 1 && 0 ); // 0\nalert( 1 && 5 ); // 5\n\n// if the first operand is falsy,\n// AND returns it. The second operand is ignored\nalert( null && 5 ); // null\nalert( 0 && \"no matter what\" ); // 0",
            "explanation": "Example demonstrating and \"&&\" finds the first falsy value."
          }
        ],
        "bulletPoints": [
          "Evaluates operands from left to right.",
          "For each operand, converts it to a boolean. If the result is `false`, stops and returns the original value of that operand.",
          "If all operands have been evaluated (i.e. all were truthy), returns the last operand."
        ]
      },
      {
        "heading": "! (NOT)",
        "paragraphs": [
          "The boolean NOT operator is represented with an exclamation sign `!`.",
          "The syntax is pretty simple:",
          "The operator accepts a single argument and does the following:",
          "1. Converts the operand to boolean type: `true/false`.",
          "2. Returns the inverse value."
        ],
        "codeExamples": [
          {
            "title": "! (NOT)",
            "code": "result = !value;",
            "explanation": "Example demonstrating ! (not)."
          },
          {
            "title": "! (NOT)",
            "code": "alert( !true ); // false\nalert( !0 ); // true",
            "explanation": "Example demonstrating ! (not)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "What's the result of OR?",
        "description": "What is the code below going to output? ```js alert( null || 2 || undefined ); ```",
        "starterCode": "alert( null || 2 || undefined );",
        "solution": "alert( null || 2 || undefined );",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "What's the result of OR'ed alerts?",
        "description": "What will the code below output? ```js alert( alert(1) || 2 || alert(3) ); ```",
        "starterCode": "alert( alert(1) || 2 || alert(3) );",
        "solution": "alert( alert(1) || 2 || alert(3) );",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "What is the result of AND?",
        "description": "What is this code going to show? ```js alert( 1 && null && 2 ); ```",
        "starterCode": "alert( 1 && null && 2 );",
        "solution": "alert( 1 && null && 2 );",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Logical Operators in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for logical operators.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Logical Operators is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Logical Operators?",
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
      "Logical Operators is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying logical operators.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "logical-operators"
    ],
    "slug": "logical-operators"
  },
  {
    "title": "Nullish Coalescing Operator",
    "description": "[recent browser=\"new\"]",
    "difficulty": "beginner",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "[recent browser=\"new\"]",
          "The nullish coalescing operator is written as two question marks `??`.",
          "As it treats `null` and `undefined` similarly, we'll use a special term here, in this article. For brevity, we'll say that a value is \"defined\" when it's neither `null` nor `undefined`.",
          "The result of `a ?? b` is:",
          "In other words, `??` returns the first argument if it's not `null/undefined`. Otherwise, the second one."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "result = (a !== null && a !== undefined) ? a : b;",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let user;\n\nalert(user ?? \"Anonymous\"); // Anonymous (user is undefined)",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "if `a` is defined, then `a`,",
          "if `a` isn't defined, then `b`."
        ]
      },
      {
        "heading": "Comparison with ||",
        "paragraphs": [
          "The OR `||` operator can be used in the same way as `??`, as it was described in the previous chapter.",
          "For example, in the code above we could replace `??` with `||` and still get the same result:",
          "Historically, the OR `||` operator was there first. It's been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.",
          "On the other hand, the nullish coalescing operator `??` was added to JavaScript only recently, and the reason for that was that people weren't quite happy with `||`.",
          "The important difference between them is that:"
        ],
        "codeExamples": [
          {
            "title": "Comparison with ||",
            "code": "let firstName = null;\nlet lastName = null;\nlet nickName = \"Supercoder\";\n\n// shows the first truthy value:\n*!*\nalert(firstName || lastName || nickName || \"Anonymous\"); // Supercoder\n*/!*",
            "explanation": "Example demonstrating comparison with ||."
          },
          {
            "title": "Comparison with ||",
            "code": "let height = 0;\n\nalert(height || 100); // 100\nalert(height ?? 100); // 0",
            "explanation": "Example demonstrating comparison with ||."
          }
        ],
        "bulletPoints": [
          "`||` returns the first *truthy* value.",
          "`??` returns the first *defined* value.",
          "The `height || 100` checks `height` for being a falsy value, and it's `0`, falsy indeed.",
          "so the result of `||` is the second argument, `100`.",
          "The `height ?? 100` checks `height` for being `null/undefined`, and it's not,"
        ]
      },
      {
        "heading": "Precedence",
        "paragraphs": [
          "The precedence of the `??` operator is the same as `||`. They both equal `3` in the MDN table.",
          "That means that, just like `||`, the nullish coalescing operator `??` is evaluated before `=` and `?`, but after most other operations, such as `+`, `*`.",
          "So we may need to add parentheses in expressions like this:",
          "Otherwise, if we omit parentheses, then as `*` has the higher precedence than `??`, it would execute first, leading to incorrect results."
        ],
        "codeExamples": [
          {
            "title": "Precedence",
            "code": "let height = null;\nlet width = null;\n\n// important: use parentheses\nlet area = (height ?? 100) * (width ?? 50);\n\nalert(area); // 5000",
            "explanation": "Example demonstrating precedence."
          },
          {
            "title": "Precedence",
            "code": "// without parentheses\nlet area = height ?? 100 * width ?? 50;\n\n// ...works this way (not what we want):\nlet area = height ?? (100 * width) ?? 50;",
            "explanation": "Example demonstrating precedence."
          }
        ]
      },
      {
        "heading": "Using ?? with && or ||",
        "paragraphs": [
          "Due to safety reasons, JavaScript forbids using `??` together with `&&` and `||` operators, unless the precedence is explicitly specified with parentheses.",
          "The code below triggers a syntax error:",
          "The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from `||` to `??`.",
          "Use explicit parentheses to work around it:"
        ],
        "codeExamples": [
          {
            "title": "Using ?? with && or ||",
            "code": "let x = 1 && 2 ?? 3; // Syntax error",
            "explanation": "Example demonstrating using ?? with && or ||."
          },
          {
            "title": "Using ?? with && or ||",
            "code": "*!*\nlet x = (1 && 2) ?? 3; // Works\n*/!*\n\nalert(x); // 2",
            "explanation": "Example demonstrating using ?? with && or ||."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "It's used to assign default values to variables:",
          "// set height=100, if height is null or undefined",
          "height = height ?? 100;"
        ],
        "bulletPoints": [
          "The nullish coalescing operator `??` provides a short way to choose the first \"defined\" value from a list.",
          "The operator `??` has a very low precedence, only a bit higher than `?` and `=`, so consider adding parentheses when using it in an expression.",
          "It's forbidden to use it with `||` or `&&` without explicit parentheses."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Nullish Coalescing Operator",
        "description": "Apply your understanding of Nullish Coalescing Operator. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Nullish Coalescing Operator\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Nullish Coalescing Operator\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Nullish Coalescing Operator in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for nullish coalescing operator.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Nullish Coalescing Operator is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Nullish Coalescing Operator?",
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
      "Nullish Coalescing Operator is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying nullish coalescing operator.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "nullish-coalescing-operator"
    ],
    "slug": "nullish-coalescing-operator"
  },
  {
    "title": "While For",
    "description": "We often need to repeat actions.",
    "difficulty": "beginner",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We often need to repeat actions.",
          "For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.",
          "*Loops* are a way to repeat the same code multiple times."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "A small announcement for advanced readers.\n\nThis article covers only basic loops: `while`, `do..while` and `for(..;..;..)`.\n\nIf you came to this article searching for other types of loops, here are the pointers:\n\n- See [for..in](info:object#forin) to loop over object properties.\n- See [for..of](info:array#loops) and [iterables](info:iterable) for looping over arrays and iterable objects.\n\nOtherwise, please read on.",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "The \"while\" loop",
        "paragraphs": [
          "The `while` loop has the following syntax:",
          "While the `condition` is truthy, the `code` from the loop body is executed.",
          "For instance, the loop below outputs `i` while `i < 3`:",
          "A single execution of the loop body is called *an iteration*. The loop in the example above makes three iterations.",
          "If `i++` was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process."
        ],
        "codeExamples": [
          {
            "title": "The \"while\" loop",
            "code": "while (condition) {\n  // code\n  // so-called \"loop body\"\n}",
            "explanation": "Example demonstrating the \"while\" loop."
          },
          {
            "title": "The \"while\" loop",
            "code": "let i = 0;\nwhile (i < 3) { // shows 0, then 1, then 2\n  alert( i );\n  i++;\n}",
            "explanation": "Example demonstrating the \"while\" loop."
          }
        ]
      },
      {
        "heading": "The \"do..while\" loop",
        "paragraphs": [
          "The condition check can be moved *below* the loop body using the `do..while` syntax:",
          "The loop will first execute the body, then check the condition, and, while it's truthy, execute it again and again.",
          "For example:",
          "This form of syntax should only be used when you want the body of the loop to execute **at least once** regardless of the condition being truthy. Usually, the other form is preferred: `while(\u2026) {\u2026}`."
        ],
        "codeExamples": [
          {
            "title": "The \"do..while\" loop",
            "code": "do {\n  // loop body\n} while (condition);",
            "explanation": "Example demonstrating the \"do..while\" loop."
          },
          {
            "title": "The \"do..while\" loop",
            "code": "let i = 0;\ndo {\n  alert( i );\n  i++;\n} while (i < 3);",
            "explanation": "Example demonstrating the \"do..while\" loop."
          }
        ]
      },
      {
        "heading": "The \"for\" loop",
        "paragraphs": [
          "The `for` loop is more complex, but it's also the most commonly used loop.",
          "It looks like this:",
          "Let's learn the meaning of these parts by example. The loop below runs `alert(i)` for `i` from `0` up to (but not including) `3`:",
          "Let's examine the `for` statement part-by-part:",
          "| part | | |"
        ],
        "codeExamples": [
          {
            "title": "The \"for\" loop",
            "code": "for (begin; condition; step) {\n  // ... loop body ...\n}",
            "explanation": "Example demonstrating the \"for\" loop."
          },
          {
            "title": "The \"for\" loop",
            "code": "for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2\n  alert(i);\n}",
            "explanation": "Example demonstrating the \"for\" loop."
          }
        ]
      },
      {
        "heading": "Skipping parts",
        "paragraphs": [
          "Any part of `for` can be skipped.",
          "For example, we can omit `begin` if we don't need to do anything at the loop start.",
          "Like here:",
          "We can also remove the `step` part:",
          "This makes the loop identical to `while (i < 3)`."
        ],
        "codeExamples": [
          {
            "title": "Skipping parts",
            "code": "let i = 0; // we have i already declared and assigned\n\nfor (; i < 3; i++) { // no need for \"begin\"\n  alert( i ); // 0, 1, 2\n}",
            "explanation": "Example demonstrating skipping parts."
          },
          {
            "title": "Skipping parts",
            "code": "let i = 0;\n\nfor (; i < 3;) {\n  alert( i++ );\n}",
            "explanation": "Example demonstrating skipping parts."
          }
        ]
      },
      {
        "heading": "Breaking the loop",
        "paragraphs": [
          "Normally, a loop exits when its condition becomes falsy.",
          "But we can force the exit at any time using the special `break` directive.",
          "For example, the loop below asks the user for a series of numbers, \"breaking\" when no number is entered:",
          "The `break` directive is activated at the line `(*)` if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, `alert`.",
          "The combination \"infinite loop + `break` as needed\" is great for situations when a loop's condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body."
        ],
        "codeExamples": [
          {
            "title": "Breaking the loop",
            "code": "let sum = 0;\n\nwhile (true) {\n\n  let value = +prompt(\"Enter a number\", '');\n\n*!*\n  if (!value) break; // (*)\n*/!*\n\n  sum += value;\n\n}\nalert( 'Sum: ' + sum );",
            "explanation": "Example demonstrating breaking the loop."
          }
        ]
      },
      {
        "heading": "Continue to the next iteration [#continue]",
        "paragraphs": [
          "The `continue` directive is a \"lighter version\" of `break`. It doesn't stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).",
          "We can use it if we're done with the current iteration and would like to move on to the next one.",
          "The loop below uses `continue` to output only odd values:",
          "For even values of `i`, the `continue` directive stops executing the body and passes control to the next iteration of `for` (with the next number). So the `alert` is only called for odd values.",
          "for (let i = 0; i < 10; i++) {"
        ],
        "codeExamples": [
          {
            "title": "Continue to the next iteration [#continue]",
            "code": "for (let i = 0; i < 10; i++) {\n\n  // if true, skip the remaining part of the body\n  *!*if (i % 2 == 0) continue;*/!*\n\n  alert(i); // 1, then 3, 5, 7, 9\n}",
            "explanation": "Example demonstrating continue to the next iteration [#continue]."
          },
          {
            "title": "Continue to the next iteration [#continue]",
            "code": "A loop that shows odd values could look like this:",
            "explanation": "Example demonstrating continue to the next iteration [#continue]."
          }
        ]
      },
      {
        "heading": "Labels for break/continue",
        "paragraphs": [
          "Sometimes we need to break out from multiple nested loops at once.",
          "For example, in the code below we loop over `i` and `j`, prompting for the coordinates `(i, j)` from `(0,0)` to `(2,2)`:",
          "We need a way to stop the process if the user cancels the input.",
          "The ordinary `break` after `input` would only break the inner loop. That's not sufficient -- labels, come to the rescue!",
          "A *label* is an identifier with a colon before a loop:"
        ],
        "codeExamples": [
          {
            "title": "Labels for break/continue",
            "code": "for (let i = 0; i < 3; i++) {\n\n  for (let j = 0; j < 3; j++) {\n\n    let input = prompt(`Value at coords (${i},${j})`, '');\n\n    // what if we want to exit from here to Done (below)?\n  }\n}\n\nalert('Done!');",
            "explanation": "Example demonstrating labels for break/continue."
          },
          {
            "title": "Labels for break/continue",
            "code": "labelName: for (...) {\n  ...\n}",
            "explanation": "Example demonstrating labels for break/continue."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We covered 3 types of loops:",
          "To make an \"infinite\" loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.",
          "If we don't want to do anything in the current iteration and would like to forward to the next one, we can use the `continue` directive.",
          "`break/continue` support labels before the loop. A label is the only way for `break/continue` to escape a nested loop to go to an outer one."
        ],
        "bulletPoints": [
          "`while` -- The condition is checked before each iteration.",
          "`do..while` -- The condition is checked after each iteration.",
          "`for (;;)` -- The condition is checked before each iteration, additional settings available."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Last loop value",
        "description": "What is the last value alerted by this code? Why? ```js let i = 3; while (i) { alert( i-- ); } ```",
        "starterCode": "let i = 3;\n\nwhile (i) {\n  alert( i-- );\n}",
        "solution": "Every loop iteration decreases `i` by `1`. The check `while(i)` stops the loop when `i = 0`.\n\nHence, the steps of the loop form the following sequence (\"loop unrolled\"):",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "Which values does the while loop show?",
        "description": "For every loop iteration, write down which value it outputs and then compare it with the solution. Both loops `alert` the same values, or not? 1. The prefix form `++i`: ```js let i = 0; while (++i < 5) alert( i ); ``` 2. The postfix form `i++` ```js let i = 0; while (i++ < 5) alert( i ); ```",
        "starterCode": "let i = 0;\n    while (++i < 5) alert( i );",
        "solution": "The first value is `i = 1`, because `++i` first increments `i` and then returns the new value. So the first comparison is `1 < 5` and the `alert` shows `1`.\n\n    Then follow `2, 3, 4\u2026` -- the values show up one after another. The comparison always uses the incremented value, because `++` is before the variable.\n\n    Finally, `i = 4` is incremented to `5`, the comparison `while(5 < 5)` fails, and the loop stops. So `5` is not shown.\n2. **From 1 to 5**",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Which values get shown by the \"for\" loop?",
        "description": "For each loop write down which values it is going to show. Then compare with the answer. Both loops `alert` same values or not? 1. The postfix form: ```js for (let i = 0; i < 5; i++) alert( i ); ``` 2. The prefix form: ```js for (let i = 0; i < 5; ++i) alert( i ); ```",
        "starterCode": "for (let i = 0; i < 5; i++) alert( i );",
        "solution": "for (let i = 0; i < 5; i++) alert( i );",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of While For in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for while for.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "While For is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with While For?",
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
      "While For is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying while for.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "while-for"
    ],
    "slug": "while-for"
  },
  {
    "title": "Switch",
    "description": "A `switch` statement can replace multiple `if` checks.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A `switch` statement can replace multiple `if` checks.",
          "It gives a more descriptive way to compare a value with multiple variants."
        ]
      },
      {
        "heading": "The syntax",
        "paragraphs": [
          "The `switch` has one or more `case` blocks and an optional default.",
          "It looks like this:"
        ],
        "codeExamples": [
          {
            "title": "The syntax",
            "code": "switch(x) {\n  case 'value1':  // if (x === 'value1')\n    ...\n    [break]\n\n  case 'value2':  // if (x === 'value2')\n    ...\n    [break]\n\n  default:\n    ...\n    [break]\n}",
            "explanation": "Example demonstrating the syntax."
          }
        ],
        "bulletPoints": [
          "The value of `x` is checked for a strict equality to the value from the first `case` (that is, `value1`) then to the second (`value2`) and so on.",
          "If the equality is found, `switch` starts to execute the code starting from the corresponding `case`, until the nearest `break` (or until the end of `switch`).",
          "If no case is matched then the `default` code is executed (if it exists)."
        ]
      },
      {
        "heading": "An example",
        "paragraphs": [
          "An example of `switch` (the executed code is highlighted):",
          "Here the `switch` starts to compare `a` from the first `case` variant that is `3`. The match fails.",
          "Then `4`. That's a match, so the execution starts from `case 4` until the nearest `break`.",
          "**If there is no `break` then the execution continues with the next `case` without any checks.**",
          "An example without `break`:"
        ],
        "codeExamples": [
          {
            "title": "An example",
            "code": "let a = 2 + 2;\n\nswitch (a) {\n  case 3:\n    alert( 'Too small' );\n    break;\n*!*\n  case 4:\n    alert( 'Exactly!' );\n    break;\n*/!*\n  case 5:\n    alert( 'Too big' );\n    break;\n  default:\n    alert( \"I don't know such values\" );\n}",
            "explanation": "Example demonstrating an example."
          },
          {
            "title": "An example",
            "code": "let a = 2 + 2;\n\nswitch (a) {\n  case 3:\n    alert( 'Too small' );\n*!*\n  case 4:\n    alert( 'Exactly!' );\n  case 5:\n    alert( 'Too big' );\n  default:\n    alert( \"I don't know such values\" );\n*/!*\n}",
            "explanation": "Example demonstrating an example."
          }
        ]
      },
      {
        "heading": "Grouping of \"case\"",
        "paragraphs": [
          "Several variants of `case` which share the same code can be grouped.",
          "For example, if we want the same code to run for `case 3` and `case 5`:",
          "Now both `3` and `5` show the same message.",
          "The ability to \"group\" cases is a side effect of how `switch/case` works without `break`. Here the execution of `case 3` starts from the line `(*)` and goes through `case 5`, because there's no `break`."
        ],
        "codeExamples": [
          {
            "title": "Grouping of \"case\"",
            "code": "let a = 3;\n\nswitch (a) {\n  case 4:\n    alert('Right!');\n    break;\n\n*!*\n  case 3: // (*) grouped two cases\n  case 5:\n    alert('Wrong!');\n    alert(\"Why don't you take a math class?\");\n    break;\n*/!*\n\n  default:\n    alert('The result is strange. Really.');\n}",
            "explanation": "Example demonstrating grouping of \"case\"."
          }
        ]
      },
      {
        "heading": "Type matters",
        "paragraphs": [
          "Let's emphasize that the equality check is always strict. The values must be of the same type to match.",
          "For example, let's consider the code:",
          "1. For `0`, `1`, the first `alert` runs.",
          "2. For `2` the second `alert` runs.",
          "3. But for `3`, the result of the `prompt` is a string `\"3\"`, which is not strictly equal `===` to the number `3`. So we've got a dead code in `case 3`! The `default` variant will execute."
        ],
        "codeExamples": [
          {
            "title": "Type matters",
            "code": "let arg = prompt(\"Enter a value?\");\nswitch (arg) {\n  case '0':\n  case '1':\n    alert( 'One or zero' );\n    break;\n\n  case '2':\n    alert( 'Two' );\n    break;\n\n  case 3:\n    alert( 'Never executes!' );\n    break;\n  default:\n    alert( 'An unknown value' );\n}",
            "explanation": "Example demonstrating type matters."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Rewrite the \"switch\" into an \"if\"",
        "description": "Write the code using `if..else` which would correspond to the following `switch`: ```js switch (browser) { case 'Edge': alert( \"You've got the Edge!\" ); break; case 'Chrome': case 'Firefox': case 'Safari': case 'Opera': alert( 'Okay we support these browsers too' ); break; default: alert( 'We hope t",
        "starterCode": "switch (browser) {\n  case 'Edge':\n    alert( \"You've got the Edge!\" );\n    break;\n\n  case 'Chrome':\n  case 'Firefox':\n  case 'Safari':\n  case 'Opera':\n    alert( 'Okay we support these browsers too' );\n    break;\n\n  default:\n    alert( 'We hope that this page looks ok!' );\n}",
        "solution": "switch (browser) {\n  case 'Edge':\n    alert( \"You've got the Edge!\" );\n    break;\n\n  case 'Chrome':\n  case 'Firefox':\n  case 'Safari':\n  case 'Opera':\n    alert( 'Okay we support these browsers too' );\n    break;\n\n  default:\n    alert( 'We hope that this page looks ok!' );\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Rewrite \"if\" into \"switch\"",
        "description": "Rewrite the code below using a single `switch` statement: ```js run let a = +prompt('a?', ''); if (a == 0) { alert( 0 ); } if (a == 1) { alert( 1 ); } if (a == 2 || a == 3) { alert( '2,3' ); } ```",
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
        "question": "What is the primary role of Switch in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for switch.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Switch is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Switch?",
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
      "Switch is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying switch.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "switch"
    ],
    "slug": "switch"
  },
  {
    "title": "Function Basics",
    "description": "Quite often we need to perform a similar action in many places of the script.",
    "difficulty": "beginner",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Quite often we need to perform a similar action in many places of the script.",
          "For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.",
          "Functions are the main \"building blocks\" of the program. They allow the code to be called many times without repetition.",
          "We've already seen examples of built-in functions, like `alert(message)`, `prompt(message, default)` and `confirm(question)`. But we can create functions of our own as well."
        ]
      },
      {
        "heading": "Function Declaration",
        "paragraphs": [
          "To create a function we can use a *function declaration*.",
          "It looks like this:",
          "The `function` keyword goes first, then goes the *name of the function*, then a list of *parameters* between the parentheses (comma-separated, empty in the example above, we'll see examples later) and finally the code of the function, also named \"the function body\", between curly braces.",
          "Our new function can be called by its name: `showMessage()`.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Function Declaration",
            "code": "function showMessage() {\n  alert( 'Hello everyone!' );\n}",
            "explanation": "Example demonstrating function declaration."
          },
          {
            "title": "Function Declaration",
            "code": "function name(parameter1, parameter2, ... parameterN) {\n // body\n}",
            "explanation": "Example demonstrating function declaration."
          }
        ]
      },
      {
        "heading": "Local variables",
        "paragraphs": [
          "A variable declared inside a function is only visible inside that function.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "Local variables",
            "code": "function showMessage() {\n*!*\n  let message = \"Hello, I'm JavaScript!\"; // local variable\n*/!*\n\n  alert( message );\n}\n\nshowMessage(); // Hello, I'm JavaScript!\n\nalert( message ); // <-- Error! The variable is local to the function",
            "explanation": "Example demonstrating local variables."
          }
        ]
      },
      {
        "heading": "Outer variables",
        "paragraphs": [
          "A function can access an outer variable as well, for example:",
          "The function has full access to the outer variable. It can modify it as well.",
          "For instance:",
          "The outer variable is only used if there's no local one.",
          "If a same-named variable is declared inside the function then it *shadows* the outer one. For instance, in the code below the function uses the local `userName`. The outer one is ignored:"
        ],
        "codeExamples": [
          {
            "title": "Outer variables",
            "code": "let *!*userName*/!* = 'John';\n\nfunction showMessage() {\n  let message = 'Hello, ' + *!*userName*/!*;\n  alert(message);\n}\n\nshowMessage(); // Hello, John",
            "explanation": "Example demonstrating outer variables."
          },
          {
            "title": "Outer variables",
            "code": "let *!*userName*/!* = 'John';\n\nfunction showMessage() {\n  *!*userName*/!* = \"Bob\"; // (1) changed the outer variable\n\n  let message = 'Hello, ' + *!*userName*/!*;\n  alert(message);\n}\n\nalert( userName ); // *!*John*/!* before the function call\n\nshowMessage();\n\nalert( userName ); // *!*Bob*/!*, the value was modified by the function",
            "explanation": "Example demonstrating outer variables."
          }
        ]
      },
      {
        "heading": "Parameters",
        "paragraphs": [
          "We can pass arbitrary data to functions using parameters.",
          "In the example below, the function has two parameters: `from` and `text`.",
          "When the function is called in lines `(*)` and `(**)`, the given values are copied to local variables `from` and `text`. Then the function uses them.",
          "Here's one more example: we have a variable `from` and pass it to the function. Please note: the function changes `from`, but the change is not seen outside, because a function always gets a copy of the value:",
          "When a value is passed as a function parameter, it's also called an *argument*."
        ],
        "codeExamples": [
          {
            "title": "Parameters",
            "code": "function showMessage(*!*from, text*/!*) { // parameters: from, text\n  alert(from + ': ' + text);\n}\n\n*!*showMessage('Ann', 'Hello!');*/!* // Ann: Hello! (*)\n*!*showMessage('Ann', \"What's up?\");*/!* // Ann: What's up? (**)",
            "explanation": "Example demonstrating parameters."
          },
          {
            "title": "Parameters",
            "code": "function showMessage(from, text) {\n\n*!*\n  from = '*' + from + '*'; // make \"from\" look nicer\n*/!*\n\n  alert( from + ': ' + text );\n}\n\nlet from = \"Ann\";\n\nshowMessage(from, \"Hello\"); // *Ann*: Hello\n\n// the value of \"from\" is the same, the function modified a local copy\nalert( from ); // Ann",
            "explanation": "Example demonstrating parameters."
          }
        ],
        "bulletPoints": [
          "A parameter is the variable listed inside the parentheses in the function declaration (it's a declaration time term).",
          "An argument is the value that is passed to the function when it is called (it's a call time term)."
        ]
      },
      {
        "heading": "Default values",
        "paragraphs": [
          "If a function is called, but an argument is not provided, then the corresponding value becomes `undefined`.",
          "For instance, the aforementioned function `showMessage(from, text)` can be called with a single argument:",
          "That's not an error. Such a call would output `\"*Ann*: undefined\"`. As the value for `text` isn't passed, it becomes `undefined`.",
          "We can specify the so-called \"default\" (to use if omitted) value for a parameter in the function declaration, using `=`:",
          "Now if the `text` parameter is not passed, it will get the value `\"no text given\"`."
        ],
        "codeExamples": [
          {
            "title": "Default values",
            "code": "showMessage(\"Ann\");",
            "explanation": "Example demonstrating default values."
          },
          {
            "title": "Default values",
            "code": "function showMessage(from, *!*text = \"no text given\"*/!*) {\n  alert( from + \": \" + text );\n}\n\nshowMessage(\"Ann\"); // Ann: no text given",
            "explanation": "Example demonstrating default values."
          }
        ]
      },
      {
        "heading": "Alternative default parameters",
        "paragraphs": [
          "Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.",
          "We can check if the parameter is passed during the function execution, by comparing it with `undefined`:",
          "...Or we could use the `||` operator:",
          "Modern JavaScript engines support the nullish coalescing operator `??`, it's better when most falsy values, such as `0`, should be considered \"normal\":"
        ],
        "codeExamples": [
          {
            "title": "Alternative default parameters",
            "code": "function showMessage(text) {\n  // ...\n\n*!*\n  if (text === undefined) { // if the parameter is missing\n    text = 'empty message';\n  }\n*/!*\n\n  alert(text);\n}\n\nshowMessage(); // empty message",
            "explanation": "Example demonstrating alternative default parameters."
          },
          {
            "title": "Alternative default parameters",
            "code": "function showMessage(text) {\n  // if text is undefined or otherwise falsy, set it to 'empty'\n  text = text || 'empty';\n  ...\n}",
            "explanation": "Example demonstrating alternative default parameters."
          }
        ]
      },
      {
        "heading": "Returning a value",
        "paragraphs": [
          "A function can return a value back into the calling code as the result.",
          "The simplest example would be a function that sums two values:",
          "The directive `return` can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to `result` above).",
          "There may be many occurrences of `return` in a single function. For instance:",
          "It is possible to use `return` without a value. That causes the function to exit immediately."
        ],
        "codeExamples": [
          {
            "title": "Returning a value",
            "code": "function sum(a, b) {\n  *!*return*/!* a + b;\n}\n\nlet result = sum(1, 2);\nalert( result ); // 3",
            "explanation": "Example demonstrating returning a value."
          },
          {
            "title": "Returning a value",
            "code": "function checkAge(age) {\n  if (age >= 18) {\n*!*\n    return true;\n*/!*\n  } else {\n*!*\n    return confirm('Do you have permission from your parents?');\n*/!*\n  }\n}\n\nlet age = prompt('How old are you?', 18);\n\nif ( checkAge(age) ) {\n  alert( 'Access granted' );\n} else {\n  alert( 'Access denied' );\n}",
            "explanation": "Example demonstrating returning a value."
          }
        ]
      },
      {
        "heading": "Naming a function [#function-naming]",
        "paragraphs": [
          "Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.",
          "It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.",
          "For instance, functions that start with `\"show\"` usually show something.",
          "Function starting with...",
          "Examples of such names:"
        ],
        "codeExamples": [
          {
            "title": "Naming a function [#function-naming]",
            "code": "showMessage(..)     // shows a message\ngetAge(..)          // returns the age (gets it somehow)\ncalcSum(..)         // calculates a sum and returns the result\ncreateForm(..)      // creates a form (and usually returns it)\ncheckPermission(..) // checks a permission, returns true/false",
            "explanation": "Example demonstrating naming a function [#function-naming]."
          },
          {
            "title": "Naming a function [#function-naming]",
            "code": "A function should do exactly what is suggested by its name, no more.\n\nTwo independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).\n\nA few examples of breaking this rule:\n\n- `getAge` -- would be bad if it shows an `alert` with the age (should only get).\n- `createForm` -- would be bad if it modifies the document, adding a form to it (should only create it and return).\n- `checkPermission` -- would be bad if it displays the `access granted/denied` message (should only perform the check and return the result).\n\nThese examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they're not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.",
            "explanation": "Example demonstrating naming a function [#function-naming]."
          }
        ],
        "bulletPoints": [
          "`\"get\u2026\"` -- return a value,",
          "`\"calc\u2026\"` -- calculate something,",
          "`\"create\u2026\"` -- create something,",
          "`\"check\u2026\"` -- check something and return a boolean, etc."
        ]
      },
      {
        "heading": "Functions == Comments",
        "paragraphs": [
          "Functions should be short and do exactly one thing. If that thing is big, maybe it's worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it's definitely a good thing.",
          "A separate function is not only easier to test and debug -- its very existence is a great comment!",
          "For instance, compare the two functions `showPrimes(n)` below. Each one outputs prime numbers up to `n`.",
          "The first variant uses a label:",
          "The second variant uses an additional function `isPrime(n)` to test for primality:"
        ],
        "codeExamples": [
          {
            "title": "Functions == Comments",
            "code": "function showPrimes(n) {\n  nextPrime: for (let i = 2; i < n; i++) {\n\n    for (let j = 2; j < i; j++) {\n      if (i % j == 0) continue nextPrime;\n    }\n\n    alert( i ); // a prime\n  }\n}",
            "explanation": "Example demonstrating functions == comments."
          },
          {
            "title": "Functions == Comments",
            "code": "function showPrimes(n) {\n\n  for (let i = 2; i < n; i++) {\n    *!*if (!isPrime(i)) continue;*/!*\n\n    alert(i);  // a prime\n  }\n}\n\nfunction isPrime(n) {\n  for (let i = 2; i < n; i++) {\n    if ( n % i == 0) return false;\n  }\n  return true;\n}",
            "explanation": "Example demonstrating functions == comments."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "A function declaration looks like this:",
          "To make the code clean and easy to understand, it's recommended to use mainly local variables and parameters in the function, not outer variables.",
          "It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.",
          "Function naming:",
          "Functions are the main building blocks of scripts. Now we've covered the basics, so we actually can start creating and using them. But that's only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "function name(parameters, delimited, by, comma) {\n  /* code */\n}",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "Values passed to a function as parameters are copied to its local variables.",
          "A function may access outer variables. But it works only from inside out. The code outside of the function doesn't see its local variables.",
          "A function can return a value. If it doesn't, then its result is `undefined`.",
          "A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.",
          "A function is an action, so function names are usually verbal."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Is \"else\" required?",
        "description": "The following function returns `true` if the parameter `age` is greater than `18`. Otherwise it asks for a confirmation and returns its result: ```js function checkAge(age) { if (age > 18) { return true; *!* } else { // ... return confirm('Did parents allow you?'); } */!* } ``` Will the function wor",
        "starterCode": "function checkAge(age) {\n  if (age > 18) {\n    return true;\n*!*\n  } else {\n    // ...\n    return confirm('Did parents allow you?');\n  }\n*/!*\n}",
        "solution": "function checkAge(age) {\n  if (age > 18) {\n    return true;\n*!*\n  } else {\n    // ...\n    return confirm('Did parents allow you?');\n  }\n*/!*\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Rewrite the function using '?' or '||'",
        "description": "The following function returns `true` if the parameter `age` is greater than `18`. Otherwise it asks for a confirmation and returns its result. ```js function checkAge(age) { if (age > 18) { return true; } else { return confirm('Did parents allow you?'); } } ``` Rewrite it, to perform the same, but ",
        "starterCode": "function checkAge(age) {\n  if (age > 18) {\n    return true;\n  } else {\n    return confirm('Did parents allow you?');\n  }\n}",
        "solution": "function checkAge(age) {\n  return (age > 18) ? true : confirm('Did parents allow you?');\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Function min(a, b)",
        "description": "Write a function `min(a,b)` which returns the least of two numbers `a` and `b`. For instance: ```js min(2, 5) == 2 min(3, -1) == -1 min(1, 1) == 1 ```",
        "starterCode": "min(2, 5) == 2\nmin(3, -1) == -1\nmin(1, 1) == 1",
        "solution": "function min(a, b) {\n  if (a < b) {\n    return a;\n  } else {\n    return b;\n  }\n}",
        "hints": [
          "This is a fundamental concept. Think step by step."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Function Basics in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for function basics.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Function Basics is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Function Basics?",
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
      "Function Basics is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying function basics.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "function-basics"
    ],
    "slug": "function-basics"
  },
  {
    "title": "Function Expressions",
    "description": "In JavaScript, a function is not a \"magical language structure\", but a special kind of value.",
    "difficulty": "beginner",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In JavaScript, a function is not a \"magical language structure\", but a special kind of value.",
          "The syntax that we used before is called a *Function Declaration*:",
          "There is another syntax for creating a function that is called a *Function Expression*.",
          "It allows us to create a new function in the middle of any expression.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "function sayHi() {\n  alert( \"Hello\" );\n}",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let sayHi = function() {\n  alert( \"Hello\" );\n};",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Function is a value",
        "paragraphs": [
          "Let's reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the `sayHi` variable.",
          "We can even print out that value using `alert`:",
          "Please note that the last line does not run the function, because there are no parentheses after `sayHi`. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.",
          "In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.",
          "Surely, a function is a special value, in the sense that we can call it like `sayHi()`."
        ],
        "codeExamples": [
          {
            "title": "Function is a value",
            "code": "function sayHi() {\n  alert( \"Hello\" );\n}\n\n*!*\nalert( sayHi ); // shows the function code\n*/!*",
            "explanation": "Example demonstrating function is a value."
          },
          {
            "title": "Function is a value",
            "code": "function sayHi() {   // (1) create\n  alert( \"Hello\" );\n}\n\nlet func = sayHi;    // (2) copy\n\nfunc(); // Hello     // (3) run the copy (it works)!\nsayHi(); // Hello    //     this still works too (why wouldn't it)",
            "explanation": "Example demonstrating function is a value."
          }
        ]
      },
      {
        "heading": "Callback functions",
        "paragraphs": [
          "Let's look at more examples of passing functions as values and using function expressions.",
          "We'll write a function `ask(question, yes, no)` with three parameters:",
          "`question`",
          ": Text of the question",
          "`yes`"
        ],
        "codeExamples": [
          {
            "title": "Callback functions",
            "code": "*!*\nfunction ask(question, yes, no) {\n  if (confirm(question)) yes()\n  else no();\n}\n*/!*\n\nfunction showOk() {\n  alert( \"You agreed.\" );\n}\n\nfunction showCancel() {\n  alert( \"You canceled the execution.\" );\n}\n\n// usage: functions showOk, showCancel are passed as arguments to ask\nask(\"Do you agree?\", showOk, showCancel);",
            "explanation": "Example demonstrating callback functions."
          },
          {
            "title": "Callback functions",
            "code": "function ask(question, yes, no) {\n  if (confirm(question)) yes()\n  else no();\n}\n\n*!*\nask(\n  \"Do you agree?\",\n  function() { alert(\"You agreed.\"); },\n  function() { alert(\"You canceled the execution.\"); }\n);\n*/!*",
            "explanation": "Example demonstrating callback functions."
          }
        ]
      },
      {
        "heading": "Function Expression vs Function Declaration",
        "paragraphs": [
          "Let's formulate the key differences between Function Declarations and Expressions.",
          "First, the syntax: how to differentiate between them in the code.",
          "// Function Declaration",
          "function sum(a, b) {",
          "return a + b;"
        ],
        "codeExamples": [
          {
            "title": "Function Expression vs Function Declaration",
            "code": "*!*\nsayHi(\"John\"); // Hello, John\n*/!*\n\nfunction sayHi(name) {\n  alert( `Hello, ${name}` );\n}",
            "explanation": "Example demonstrating function expression vs function declaration."
          },
          {
            "title": "Function Expression vs Function Declaration",
            "code": "*!*\nsayHi(\"John\"); // error!\n*/!*\n\nlet sayHi = function(name) {  // (*) no magic any more\n  alert( `Hello, ${name}` );\n};",
            "explanation": "Example demonstrating function expression vs function declaration."
          }
        ],
        "bulletPoints": [
          "*Function Declaration:* a function, declared as a separate statement, in the main code flow:",
          "*Function Expression:* a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the \"assignment expression\" `=`:"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.",
          "So we should use a Function Expression only when a Function Declaration is not fit for the task. We've seen a couple of examples of that in this chapter, and will see more in the future."
        ],
        "bulletPoints": [
          "Functions are values. They can be assigned, copied or declared in any place of the code.",
          "If the function is declared as a separate statement in the main code flow, that's called a \"Function Declaration\".",
          "If the function is created as a part of an expression, it's called a \"Function Expression\".",
          "Function Declarations are processed before the code block is executed. They are visible everywhere in the block.",
          "Function Expressions are created when the execution flow reaches them."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Function Expressions",
        "description": "Apply your understanding of Function Expressions. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Function Expressions\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Function Expressions\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Function Expressions in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for function expressions.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Function Expressions is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Function Expressions?",
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
      "Function Expressions is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying function expressions.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "function-expressions"
    ],
    "slug": "function-expressions"
  },
  {
    "title": "Arrow Functions Basics",
    "description": "There's another very simple and concise syntax for creating functions, that's often better than Function Expressions.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There's another very simple and concise syntax for creating functions, that's often better than Function Expressions.",
          "It's called \"arrow functions\", because it looks like this:",
          "This creates a function `func` that accepts arguments `arg1..argN`, then evaluates the `expression` on the right side with their use and returns its result.",
          "In other words, it's the shorter version of:",
          "Let's see a concrete example:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let func = (arg1, arg2, ..., argN) => expression;",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let func = function(arg1, arg2, ..., argN) {\n  return expression;\n};",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.",
          "If there are no arguments, parentheses are empty, but they must be present:"
        ]
      },
      {
        "heading": "Multiline arrow functions",
        "paragraphs": [
          "The arrow functions that we've seen so far were very simple. They took arguments from the left of `=>`, evaluated and returned the right-side expression with them.",
          "Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a `return` within them to return a value (just like a regular function does).",
          "Like this:"
        ],
        "codeExamples": [
          {
            "title": "Multiline arrow functions",
            "code": "let sum = (a, b) => {  // the curly brace opens a multiline function\n  let result = a + b;\n*!*\n  return result; // if we use curly braces, then we need an explicit \"return\"\n*/!*\n};\n\nalert( sum(1, 2) ); // 3",
            "explanation": "Example demonstrating multiline arrow functions."
          },
          {
            "title": "Multiline arrow functions",
            "code": "Here we praised arrow functions for brevity. But that's not all!\n\nArrow functions have other interesting features.\n\nTo study them in-depth, we first need to get to know some other aspects of JavaScript, so we'll return to arrow functions later in the chapter <info:arrow-functions>.\n\nFor now, we can already use arrow functions for one-line actions and callbacks.",
            "explanation": "Example demonstrating multiline arrow functions."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:",
          "1. Without curly braces: `(...args) => expression` -- the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there's only a single argument, e.g. `n => n*2`.",
          "2. With curly braces: `(...args) => { body }` -- brackets allow us to write multiple statements inside the function, but we need an explicit `return` to return something."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Rewrite with arrow functions",
        "description": "Replace Function Expressions with arrow functions in the code below: ```js run function ask(question, yes, no) { if (confirm(question)) yes(); else no(); } ask( \"Do you agree?\", function() { alert(\"You agreed.\"); }, function() { alert(\"You canceled the execution.\"); } ); ```",
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
        "question": "What is the primary role of Arrow Functions Basics in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for arrow functions basics.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Arrow Functions Basics is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Arrow Functions Basics?",
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
      "Arrow Functions Basics is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying arrow functions basics.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "arrow-functions-basics"
    ],
    "slug": "arrow-functions-basics"
  },
  {
    "title": "Javascript Specials",
    "description": "This chapter briefly recaps the features of JavaScript that we've learned by now, paying special attention to subtle moments.",
    "difficulty": "beginner",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "This chapter briefly recaps the features of JavaScript that we've learned by now, paying special attention to subtle moments."
        ]
      },
      {
        "heading": "Code structure",
        "paragraphs": [
          "Statements are delimited with a semicolon:",
          "Usually, a line-break is also treated as a delimiter, so that would also work:",
          "That's called \"automatic semicolon insertion\". Sometimes it doesn't work, for instance:",
          "Most codestyle guides agree that we should put a semicolon after each statement.",
          "Semicolons are not required after code blocks `{...}` and syntax constructs with them like loops:"
        ],
        "codeExamples": [
          {
            "title": "Code structure",
            "code": "alert('Hello'); alert('World');",
            "explanation": "Example demonstrating code structure."
          },
          {
            "title": "Code structure",
            "code": "alert('Hello')\nalert('World')",
            "explanation": "Example demonstrating code structure."
          }
        ]
      },
      {
        "heading": "Strict mode",
        "paragraphs": [
          "To fully enable all features of modern JavaScript, we should start scripts with `\"use strict\"`.",
          "The directive must be at the top of a script or at the beginning of a function body.",
          "Without `\"use strict\"`, everything still works, but some features behave in the old-fashioned, \"compatible\" way. We'd generally prefer the modern behavior.",
          "Some modern features of the language (like classes that we'll study in the future) enable strict mode implicitly.",
          "More in: ."
        ],
        "codeExamples": [
          {
            "title": "Strict mode",
            "code": "'use strict';\n\n...",
            "explanation": "Example demonstrating strict mode."
          }
        ]
      },
      {
        "heading": "Variables",
        "paragraphs": [
          "Can be declared using:",
          "A variable name can include:",
          "Variables are dynamically typed. They can store any value:",
          "There are 8 data types:",
          "The `typeof` operator returns the type for a value, with two exceptions:"
        ],
        "codeExamples": [
          {
            "title": "Variables",
            "code": "let x = 5;\nx = \"John\";",
            "explanation": "Example demonstrating variables."
          },
          {
            "title": "Variables",
            "code": "typeof null == \"object\" // error in the language\ntypeof function(){} == \"function\" // functions are treated specially",
            "explanation": "Example demonstrating variables."
          }
        ],
        "bulletPoints": [
          "`let`",
          "`const` (constant, can't be changed)",
          "`var` (old-style, will see later)",
          "Letters and digits, but the first character may not be a digit.",
          "Characters `$` and `_` are normal, on par with letters."
        ]
      },
      {
        "heading": "Interaction",
        "paragraphs": [
          "We're using a browser as a working environment, so basic UI functions will be:",
          "[`prompt(question, [default])`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)",
          ": Ask a `question`, and return either what the visitor entered or `null` if they clicked \"cancel\".",
          "`confirm(question)`",
          ": Ask a `question` and suggest to choose between Ok and Cancel. The choice is returned as `true/false`."
        ],
        "codeExamples": [
          {
            "title": "Interaction",
            "code": "let userName = prompt(\"Your name?\", \"Alice\");\nlet isTeaWanted = confirm(\"Do you want some tea?\");\n\nalert( \"Visitor: \" + userName ); // Alice\nalert( \"Tea wanted: \" + isTeaWanted ); // true",
            "explanation": "Example demonstrating interaction."
          }
        ]
      },
      {
        "heading": "Operators",
        "paragraphs": [
          "JavaScript supports the following operators:",
          "Arithmetical",
          ": Regular: `* + - /`, also `%` for the remainder and `**` for power of a number.",
          "The binary plus `+` concatenates strings. And if any of the operands is a string, the other one is converted to string too:",
          "alert( '1' + 2 ); // '12', string"
        ]
      },
      {
        "heading": "Loops",
        "paragraphs": [
          "// 1",
          "while (condition) {",
          "...",
          "}",
          "// 2"
        ],
        "bulletPoints": [
          "We covered 3 types of loops:",
          "The variable declared in `for(let...)` loop is visible only inside the loop. But we can also omit `let` and reuse an existing variable.",
          "Directives `break/continue` allow to exit the whole loop/current iteration. Use labels to break nested loops."
        ]
      },
      {
        "heading": "The \"switch\" construct",
        "paragraphs": [
          "The \"switch\" construct can replace multiple `if` checks. It uses `===` (strict equality) for comparisons.",
          "For instance:",
          "Details in: ."
        ],
        "codeExamples": [
          {
            "title": "The \"switch\" construct",
            "code": "let age = prompt('Your age?', 18);\n\nswitch (age) {\n  case 18:\n    alert(\"Won't work\"); // the result of prompt is a string, not a number\n    break;\n\n  case \"18\":\n    alert(\"This works!\");\n    break;\n\n  default:\n    alert(\"Any value not equal to one above\");\n}",
            "explanation": "Example demonstrating the \"switch\" construct."
          }
        ]
      },
      {
        "heading": "Functions",
        "paragraphs": [
          "We covered three ways to create a function in JavaScript:",
          "1. Function Declaration: the function in the main code flow",
          "function sum(a, b) {",
          "let result = a + b;",
          "return result;"
        ],
        "bulletPoints": [
          "Functions may have local variables: those declared inside its body or its parameter list. Such variables are only visible inside the function.",
          "Parameters can have default values: `function sum(a = 1, b = 2) {...}`.",
          "Functions always return something. If there's no `return` statement, then the result is `undefined`."
        ]
      },
      {
        "heading": "More to come",
        "paragraphs": [
          "That was a brief list of JavaScript features. As of now we've studied only basics. Further in the tutorial you'll find more specials and advanced features of JavaScript."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Javascript Specials",
        "description": "Apply your understanding of Javascript Specials. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Javascript Specials\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Javascript Specials\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Javascript Specials in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for javascript specials.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Javascript Specials is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Javascript Specials?",
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
      "Javascript Specials is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying javascript specials.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "javascript-specials"
    ],
    "slug": "javascript-specials"
  },
  {
    "title": "Debugging Chrome",
    "description": "Before writing more complex code, let's talk about debugging.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Before writing more complex code, let's talk about debugging.",
          "Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools -- a special UI in developer tools that makes debugging much easier. It also allows to trace the code step by step to see what exactly is going on.",
          "We'll be using Chrome here, because it has enough features, most other browsers have a similar process."
        ]
      },
      {
        "heading": "The \"Sources\" panel",
        "paragraphs": [
          "Your Chrome version may look a little bit different, but it still should be obvious what's there.",
          "Here's what you should see if you are doing it for the first time:",
          "![](chrome-open-sources.svg)",
          "The toggler button opens the tab with files.",
          "Let's click it and select `hello.js` in the tree view. Here's what should show up:"
        ],
        "bulletPoints": [
          "Open the example page in Chrome.",
          "Turn on developer tools with `key:F12` (Mac: `key:Cmd+Opt+I`).",
          "Select the `Sources` panel."
        ]
      },
      {
        "heading": "Console",
        "paragraphs": [
          "If we press `key:Esc`, then a console opens below. We can type commands there and press `key:Enter` to execute.",
          "After a statement is executed, its result is shown below.",
          "For example, here `1+2` results in `3`, while the function call `hello(\"debugger\")` returns nothing, so the result is `undefined`:",
          "![](chrome-sources-console.svg)"
        ]
      },
      {
        "heading": "Breakpoints",
        "paragraphs": [
          "Let's examine what's going on within the code of the example page. In `hello.js`, click at line number `4`. Yes, right on the `4` digit, not on the code.",
          "Congratulations! You've set a breakpoint. Please also click on the number for line `8`.",
          "It should look like this (blue is where you should click):",
          "![](chrome-sources-breakpoint.svg)",
          "A *breakpoint* is a point of code where the debugger will automatically pause the JavaScript execution."
        ],
        "codeExamples": [
          {
            "title": "Breakpoints",
            "code": "*Right click* on the line number allows to create a *conditional* breakpoint. It only triggers when the given expression, that you should provide when you create it, is truthy.\n\nThat's handy when we need to stop only for a certain variable value or for certain function parameters.",
            "explanation": "Example demonstrating breakpoints."
          }
        ],
        "bulletPoints": [
          "Quickly jump to the breakpoint in the code (by clicking on it in the right panel).",
          "Temporarily disable the breakpoint by unchecking it.",
          "Remove the breakpoint by right-clicking and selecting Remove.",
          "...And so on."
        ]
      },
      {
        "heading": "The command \"debugger\"",
        "paragraphs": [
          "We can also pause the code by using the `debugger` command in it, like this:",
          "Such command works only when the development tools are open, otherwise the browser ignores it."
        ],
        "codeExamples": [
          {
            "title": "The command \"debugger\"",
            "code": "function hello(name) {\n  let phrase = `Hello, ${name}!`;\n\n*!*\n  debugger;  // <-- the debugger stops here\n*/!*\n\n  say(phrase);\n}",
            "explanation": "Example demonstrating the command \"debugger\"."
          }
        ]
      },
      {
        "heading": "Pause and look around",
        "paragraphs": [
          "In our example, `hello()` is called during the page load, so the easiest way to activate the debugger (after we've set the breakpoints) is to reload the page. So let's press `key:F5` (Windows, Linux) or `key:Cmd+R` (Mac).",
          "As the breakpoint is set, the execution pauses at the 4th line:",
          "![](chrome-sources-debugger-pause.svg)",
          "Please open the informational dropdowns to the right (labeled with arrows). They allow you to examine the current code state:",
          "1. **`Watch` -- shows current values for any expressions.**"
        ]
      },
      {
        "heading": "Tracing the execution",
        "paragraphs": [
          "Now it's time to *trace* the script.",
          "There are buttons for it at the top of the right panel. Let's engage them.",
          "<!-- https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/Images/src/largeIcons.svg -->",
          "-- \"Resume\": continue the execution, hotkey `key:F8`.",
          ": Resumes the execution. If there are no additional breakpoints, then the execution just continues and the debugger loses control."
        ],
        "codeExamples": [
          {
            "title": "Tracing the execution",
            "code": "Right click on a line of code opens the context menu with a great option called \"Continue to here\".\n\nThat's handy when we want to move multiple steps forward to the line, but we're too lazy to set a breakpoint.",
            "explanation": "Example demonstrating tracing the execution."
          }
        ]
      },
      {
        "heading": "Logging",
        "paragraphs": [
          "To output something to console from our code, there's `console.log` function.",
          "For instance, this outputs values from `0` to `4` to console:",
          "Regular users don't see that output, it is in the console. To see it, either open the Console panel of developer tools or press `key:Esc` while in another panel: that opens the console at the bottom.",
          "If we have enough logging in our code, then we can see what's going on from the records, without the debugger."
        ],
        "codeExamples": [
          {
            "title": "Logging",
            "code": "// open console to see\nfor (let i = 0; i < 5; i++) {\n  console.log(\"value,\", i);\n}",
            "explanation": "Example demonstrating logging."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "As we can see, there are three main ways to pause a script:",
          "1. A breakpoint.",
          "2. The `debugger` statements.",
          "3. An error (if dev tools are open and the button is \"on\").",
          "When paused, we can debug: examine variables and trace the code to see where the execution goes wrong."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Debugging Chrome",
        "description": "Apply your understanding of Debugging Chrome. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Debugging Chrome\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Debugging Chrome\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Debugging Chrome in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for debugging chrome.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Debugging Chrome is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Debugging Chrome?",
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
      "Debugging Chrome is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying debugging chrome.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "debugging-chrome"
    ],
    "slug": "debugging-chrome"
  },
  {
    "title": "Coding Style",
    "description": "Our code must be as clean and easy to read as possible.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Our code must be as clean and easy to read as possible.",
          "That is actually the art of programming -- to take a complex task and code it in a way that is both correct and human-readable. A good code style greatly assists in that."
        ]
      },
      {
        "heading": "Syntax",
        "paragraphs": [
          "Here is a cheat sheet with some suggested rules (see below for more details):",
          "![](code-style.svg)",
          "<!--",
          "-->",
          "Now let's discuss the rules and reasons for them in detail."
        ],
        "codeExamples": [
          {
            "title": "Syntax",
            "code": "function pow(x, n) {\n  let result = 1;\n\n  for (let i = 0; i < n; i++) {\n    result *= x;\n  }\n\n  return result;\n}\n\nlet x = prompt(\"x?\", \"\");\nlet n = prompt(\"n?\", \"\");\n\nif (n < 0) {\n  alert(`Power ${n} is not supported,\n    please enter a non-negative integer number`);\n} else {\n  alert( pow(x, n) );\n}",
            "explanation": "Example demonstrating syntax."
          },
          {
            "title": "Syntax",
            "code": "Nothing is set in stone here. These are style preferences, not religious dogmas.",
            "explanation": "Example demonstrating syntax."
          }
        ]
      },
      {
        "heading": "Curly Braces",
        "paragraphs": [
          "In most JavaScript projects curly braces are written in \"Egyptian\" style with the opening brace on the same line as the corresponding keyword -- not on a new line. There should also be a space before the opening bracket, like this:",
          "A single-line construct, such as `if (condition) doSomething()`, is an important edge case. Should we use braces at all?",
          "Here are the annotated variants so you can judge their readability for yourself:",
          "1. \ud83d\ude20 Beginners sometimes do that. Bad! Curly braces are not needed:",
          "if (n < 0) *!*{*/!*alert(`Power ${n} is not supported`);*!*}*/!*"
        ],
        "codeExamples": [
          {
            "title": "Curly Braces",
            "code": "if (condition) {\n  // do this\n  // ...and that\n  // ...and that\n}",
            "explanation": "Example demonstrating curly braces."
          }
        ]
      },
      {
        "heading": "Line Length",
        "paragraphs": [
          "No one likes to read a long horizontal line of code. It's best practice to split them.",
          "For example:",
          "And, for `if` statements:",
          "The maximum line length should be agreed upon at the team-level. It's usually 80 or 120 characters."
        ],
        "codeExamples": [
          {
            "title": "Line Length",
            "code": "// backtick quotes ` allow to split the string into multiple lines\nlet str = `\n  ECMA International's TC39 is a group of JavaScript developers,\n  implementers, academics, and more, collaborating with the community\n  to maintain and evolve the definition of JavaScript.\n`;",
            "explanation": "Example demonstrating line length."
          },
          {
            "title": "Line Length",
            "code": "if (\n  id === 123 &&\n  moonPhase === 'Waning Gibbous' &&\n  zodiacSign === 'Libra'\n) {\n  letTheSorceryBegin();\n}",
            "explanation": "Example demonstrating line length."
          }
        ]
      },
      {
        "heading": "Indents",
        "paragraphs": [
          "There are two types of indents:",
          "A horizontal indentation is made using either 2 or 4 spaces or the horizontal tab symbol (key `key:Tab`). Which one to choose is an old holy war. Spaces are more common nowadays.",
          "One advantage of spaces over tabs is that spaces allow more flexible configurations of indents than the tab symbol.",
          "For instance, we can align the parameters with the opening bracket, like this:",
          "show(parameters,"
        ],
        "bulletPoints": [
          "**Horizontal indents: 2 or 4 spaces.**",
          "**Vertical indents: empty lines for splitting code into logical blocks.**"
        ]
      },
      {
        "heading": "Semicolons",
        "paragraphs": [
          "A semicolon should be present after each statement, even if it could possibly be skipped.",
          "There are languages where a semicolon is truly optional and it is rarely used. In JavaScript, though, there are cases where a line break is not interpreted as a semicolon, leaving the code vulnerable to errors. See more about that in the chapter .",
          "If you're an experienced JavaScript programmer, you may choose a no-semicolon code style like StandardJS. Otherwise, it's best to use semicolons to avoid possible pitfalls. The majority of developers put semicolons."
        ]
      },
      {
        "heading": "Nesting Levels",
        "paragraphs": [
          "Try to avoid nesting code too many levels deep.",
          "For example, in the loop, it's sometimes a good idea to use the `continue` directive to avoid extra nesting.",
          "For example, instead of adding a nested `if` conditional like this:",
          "We can write:",
          "A similar thing can be done with `if/else` and `return`."
        ],
        "codeExamples": [
          {
            "title": "Nesting Levels",
            "code": "for (let i = 0; i < 10; i++) {\n  if (cond) {\n    ... // <- one more nesting level\n  }\n}",
            "explanation": "Example demonstrating nesting levels."
          },
          {
            "title": "Nesting Levels",
            "code": "for (let i = 0; i < 10; i++) {\n  if (!cond) *!*continue*/!*;\n  ...  // <- no extra nesting level\n}",
            "explanation": "Example demonstrating nesting levels."
          }
        ]
      },
      {
        "heading": "Function Placement",
        "paragraphs": [
          "If you are writing several \"helper\" functions and the code that uses them, there are three ways to organize the functions.",
          "1. Declare the functions *above* the code that uses them:",
          "// *!*function declarations*/!*",
          "function createElement() {",
          "..."
        ]
      },
      {
        "heading": "Style Guides",
        "paragraphs": [
          "A style guide contains general rules about \"how to write\" code, e.g. which quotes to use, how many spaces to indent, the maximal line length, etc. A lot of minor things.",
          "When all members of a team use the same style guide, the code looks uniform, regardless of which team member wrote it.",
          "Of course, a team can always write their own style guide, but usually there's no need to. There are many existing guides to choose from.",
          "Some popular choices:",
          "If you're a novice developer, start with the cheat sheet at the beginning of this chapter. Then you can browse other style guides to pick up more ideas and decide which one you like best."
        ],
        "bulletPoints": [
          "Google JavaScript Style Guide",
          "Airbnb JavaScript Style Guide",
          "Idiomatic.JS",
          "StandardJS",
          "(plus many more)"
        ]
      },
      {
        "heading": "Automated Linters",
        "paragraphs": [
          "Linters are tools that can automatically check the style of your code and make improving suggestions.",
          "The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you don't want to stick to one particular \"code style\".",
          "Here are some well-known linting tools:",
          "All of them can do the job. The author uses ESLint.",
          "Most linters are integrated with many popular editors: just enable the plugin in the editor and configure the style."
        ],
        "codeExamples": [
          {
            "title": "Automated Linters",
            "code": "{\n  \"extends\": \"eslint:recommended\",\n  \"env\": {\n    \"browser\": true,\n    \"node\": true,\n    \"es6\": true\n  },\n  \"rules\": {\n    \"no-console\": 0,\n    \"indent\": 2\n  }\n}",
            "explanation": "Example demonstrating automated linters."
          }
        ],
        "bulletPoints": [
          "JSLint -- one of the first linters.",
          "JSHint -- more settings than JSLint.",
          "ESLint -- probably the newest one."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "All syntax rules described in this chapter (and in the style guides referenced) aim to increase the readability of your code. All of them are debatable.",
          "When we think about writing \"better\" code, the questions we should ask ourselves are: \"What makes the code more readable and easier to understand?\" and \"What can help us avoid errors?\" These are the main things to keep in mind when choosing and debating code styles.",
          "Reading popular style guides will allow you to keep up to date with the latest ideas about code style trends and best practices."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Bad style",
        "description": "What's wrong with the code style below? ```js no-beautify function pow(x,n) { let result=1; for(let i=0;i<n;i++) {result*=x;} return result; } let x=prompt(\"x?\",''), n=prompt(\"n?\",'') if (n<=0) { alert(`Power ${n} is not supported, please enter an integer number greater than zero`); } else { alert(p",
        "starterCode": "// Write your code here\n",
        "solution": "The fixed variant:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Coding Style in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for coding style.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Coding Style is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Coding Style?",
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
      "Coding Style is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying coding style.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "coding-style"
    ],
    "slug": "coding-style"
  },
  {
    "title": "Comments",
    "description": "As we know from the chapter , comments can be single-line: starting with `//` and multiline: `/* ... */`.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we know from the chapter , comments can be single-line: starting with `//` and multiline: `/* ... */`.",
          "We normally use them to describe how and why the code works.",
          "At first sight, commenting might be obvious, but novices in programming often use them wrongly."
        ]
      },
      {
        "heading": "Bad comments",
        "paragraphs": [
          "Novices tend to use comments to explain \"what is going on in the code\". Like this:",
          "But in good code, the amount of such \"explanatory\" comments should be minimal. Seriously, the code should be easy to understand without them.",
          "There's a great rule about that: \"if the code is so unclear that it requires a comment, then maybe it should be rewritten instead\"."
        ],
        "codeExamples": [
          {
            "title": "Bad comments",
            "code": "// This code will do this thing (...) and that thing (...)\n// ...and who knows what else...\nvery;\ncomplex;\ncode;",
            "explanation": "Example demonstrating bad comments."
          }
        ]
      },
      {
        "heading": "Recipe: factor out functions",
        "paragraphs": [
          "Sometimes it's beneficial to replace a code piece with a function, like here:",
          "The better variant, with a factored out function `isPrime`:",
          "Now we can understand the code easily. The function itself becomes the comment. Such code is called *self-descriptive*."
        ],
        "codeExamples": [
          {
            "title": "Recipe: factor out functions",
            "code": "function showPrimes(n) {\n  nextPrime:\n  for (let i = 2; i < n; i++) {\n\n*!*\n    // check if i is a prime number\n    for (let j = 2; j < i; j++) {\n      if (i % j == 0) continue nextPrime;\n    }\n*/!*\n\n    alert(i);\n  }\n}",
            "explanation": "Example demonstrating recipe: factor out functions."
          },
          {
            "title": "Recipe: factor out functions",
            "code": "function showPrimes(n) {\n\n  for (let i = 2; i < n; i++) {\n    *!*if (!isPrime(i)) continue;*/!*\n\n    alert(i);  \n  }\n}\n\nfunction isPrime(n) {\n  for (let i = 2; i < n; i++) {\n    if (n % i == 0) return false;\n  }\n\n  return true;\n}",
            "explanation": "Example demonstrating recipe: factor out functions."
          }
        ]
      },
      {
        "heading": "Recipe: create functions",
        "paragraphs": [
          "And if we have a long \"code sheet\" like this:",
          "Then it might be a better variant to refactor it into functions like:",
          "Once again, functions themselves tell what's going on. There's nothing to comment. And also the code structure is better when split. It's clear what every function does, what it takes and what it returns.",
          "In reality, we can't totally avoid \"explanatory\" comments. There are complex algorithms. And there are smart \"tweaks\" for purposes of optimization. But generally we should try to keep the code simple and self-descriptive."
        ],
        "codeExamples": [
          {
            "title": "Recipe: create functions",
            "code": "// here we add whiskey\nfor(let i = 0; i < 10; i++) {\n  let drop = getWhiskey();\n  smell(drop);\n  add(drop, glass);\n}\n\n// here we add juice\nfor(let t = 0; t < 3; t++) {\n  let tomato = getTomato();\n  examine(tomato);\n  let juice = press(tomato);\n  add(juice, glass);\n}\n\n// ...",
            "explanation": "Example demonstrating recipe: create functions."
          },
          {
            "title": "Recipe: create functions",
            "code": "addWhiskey(glass);\naddJuice(glass);\n\nfunction addWhiskey(container) {\n  for(let i = 0; i < 10; i++) {\n    let drop = getWhiskey();\n    //...\n  }\n}\n\nfunction addJuice(container) {\n  for(let t = 0; t < 3; t++) {\n    let tomato = getTomato();\n    //...\n  }\n}",
            "explanation": "Example demonstrating recipe: create functions."
          }
        ]
      },
      {
        "heading": "Good comments",
        "paragraphs": [
          "So, explanatory comments are usually bad. Which comments are good?",
          "Describe the architecture",
          ": Provide a high-level overview of components, how they interact, what's the control flow in various situations... In short -- the bird's eye view of the code. There's a special language UML to build high-level architecture diagrams explaining the code. Definitely worth studying.",
          "Document function parameters and usage",
          ": There's a special syntax JSDoc to document a function: usage, parameters, returned value."
        ],
        "codeExamples": [
          {
            "title": "Good comments",
            "code": "/**\n * Returns x raised to the n-th power.\n *\n * @param {number} x The number to raise.\n * @param {number} n The power, must be a natural number.\n * @return {number} x raised to the n-th power.\n */\nfunction pow(x, n) {\n  ...\n}",
            "explanation": "Example demonstrating good comments."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "An important sign of a good developer is comments: their presence and even their absence.",
          "Good comments allow us to maintain the code well, come back to it after a delay and use it more effectively.",
          "**Comment this:**",
          "**Avoid comments:**",
          "Comments are also used for auto-documenting tools like JSDoc3: they read them and generate HTML-docs (or docs in another format)."
        ],
        "bulletPoints": [
          "Overall architecture, high-level view.",
          "Function usage.",
          "Important solutions, especially when not immediately obvious.",
          "That tell \"how code works\" and \"what it does\".",
          "Put them in only if it's impossible to make the code so simple and self-descriptive that it doesn't require them."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Comments",
        "description": "Apply your understanding of Comments. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Comments\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Comments\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Comments in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for comments.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Comments is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Comments?",
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
      "Comments is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying comments.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "comments"
    ],
    "slug": "comments"
  },
  {
    "title": "Ninja Code",
    "description": "Programmer ninjas of the past used these tricks to sharpen the mind of code maintainers.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Programmer ninjas of the past used these tricks to sharpen the mind of code maintainers.",
          "Code review gurus look for them in test tasks.",
          "Novice developers sometimes use them even better than programmer ninjas.",
          "Read them carefully and find out who you are -- a ninja, a novice, or maybe a code reviewer?"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "Learning without thought is labor lost; thought without learning is perilous.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "Many try to follow ninja paths. Few succeed.",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Brevity is the soul of wit",
        "paragraphs": [
          "Make the code as short as possible. Show how smart you are.",
          "Let subtle language features guide you.",
          "For instance, take a look at this ternary operator `'?'`:",
          "Cool, right? If you write like that, a developer who comes across this line and tries to understand what is the value of `i` is going to have a merry time. Then come to you, seeking for an answer.",
          "Tell them that shorter is always better. Initiate them into the paths of ninja."
        ],
        "codeExamples": [
          {
            "title": "Brevity is the soul of wit",
            "code": "// taken from a well-known javascript library\ni = i ? i < 0 ? Math.max(0, len + i) : i : 0;",
            "explanation": "Example demonstrating brevity is the soul of wit."
          }
        ]
      },
      {
        "heading": "One-letter variables",
        "paragraphs": [
          "Another way to code shorter is to use single-letter variable names everywhere. Like `a`, `b` or `c`.",
          "A short variable disappears in the code like a real ninja in the forest. No one will be able to find it using \"search\" of the editor. And even if someone does, they won't be able to \"decipher\" what the name `a` or `b` means.",
          "...But there's an exception. A real ninja will never use `i` as the counter in a `\"for\"` loop. Anywhere, but not here. Look around, there are many more exotic letters. For instance, `x` or `y`.",
          "An exotic variable as a loop counter is especially cool if the loop body takes 1-2 pages (make it longer if you can). Then if someone looks deep inside the loop, they won't be able to quickly figure out that the variable named `x` is the loop counter."
        ],
        "codeExamples": [
          {
            "title": "One-letter variables",
            "code": "The Dao hides in wordlessness. Only the Dao is well begun and well\ncompleted.",
            "explanation": "Example demonstrating one-letter variables."
          }
        ]
      },
      {
        "heading": "Use abbreviations",
        "paragraphs": [
          "If the team rules forbid the use of one-letter and vague names -- shorten them, make abbreviations.",
          "Like this:",
          "Only the one with truly good intuition will be able to understand such names. Try to shorten everything. Only a worthy person should be able to uphold the development of your code."
        ],
        "bulletPoints": [
          "`list` -> `lst`.",
          "`userAgent` -> `ua`.",
          "`browser` -> `brsr`.",
          "...etc"
        ]
      },
      {
        "heading": "Soar high. Be abstract.",
        "paragraphs": [
          "While choosing a name try to use the most abstract word. Like `obj`, `data`, `value`, `item`, `elem` and so on.",
          "...But what to do if `data` is already taken? Try `value`, it's also universal. After all, a variable eventually gets a *value*.",
          "Give them a try. A young initiate may wonder -- are such names really useful for a ninja? Indeed, they are!",
          "Sure, the variable name still means something. It says what's inside the variable: a string, a number or something else. But when an outsider tries to understand the code, they'll be surprised to see that there's actually no information at all! And will ultimately fail to alter your well-thought code.",
          "The value type is easy to find out by debugging. But what's the meaning of the variable? Which string/number does it store?"
        ],
        "codeExamples": [
          {
            "title": "Soar high. Be abstract.",
            "code": "The great square is cornerless<br>\nThe great vessel is last complete,<br>\nThe great note is rarified sound,<br>\nThe great image has no form.",
            "explanation": "Example demonstrating soar high. be abstract.."
          }
        ],
        "bulletPoints": [
          "**The ideal name for a variable is `data`.** Use it everywhere you can. Indeed, every variable holds *data*, right?",
          "**Name a variable by its type: `str`, `num`...**",
          "**...But what if there are no more such names?** Just add a number: `data1, item2, elem5`..."
        ]
      },
      {
        "heading": "Attention test",
        "paragraphs": [
          "Only a truly attentive programmer should be able to understand your code. But how to check that?",
          "**One of the ways -- use similar variable names, like `date` and `data`.**",
          "Mix them where you can.",
          "A quick read of such code becomes impossible. And when there's a typo... Ummm... We're stuck for long, time to drink tea."
        ]
      },
      {
        "heading": "Smart synonyms",
        "paragraphs": [
          "Using *similar* names for *same* things makes life more interesting and shows your creativity to the public.",
          "For instance, consider function prefixes. If a function shows a message on the screen -- start it with `display\u2026`, like `displayMessage`. And then if another function shows on the screen something else, like a user name, start it with `show\u2026` (like `showName`).",
          "Insinuate that there's a subtle difference between such functions, while there is none.",
          "Make a pact with fellow ninjas of the team: if John starts \"showing\" functions with `display...` in his code, then Peter could use `render..`, and Ann -- `paint...`. Note how much more interesting and diverse the code became.",
          "...And now the hat trick!"
        ],
        "codeExamples": [
          {
            "title": "Smart synonyms",
            "code": "The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name.",
            "explanation": "Example demonstrating smart synonyms."
          }
        ]
      },
      {
        "heading": "Reuse names",
        "paragraphs": [
          "Add a new variable only when absolutely necessary.",
          "Instead, reuse existing names. Just write new values into them.",
          "In a function try to use only variables passed as parameters.",
          "That would make it really hard to identify what's exactly in the variable *now*. And also where it comes from. The purpose is to develop the intuition and memory of a person reading the code. A person with weak intuition would have to analyze the code line-by-line and track the changes through every code branch.",
          "**An advanced variant of the approach is to covertly (!) replace the value with something alike in the middle of a loop or a function.**"
        ],
        "codeExamples": [
          {
            "title": "Reuse names",
            "code": "Once the whole is divided, the parts<br>\nneed names.<br>\nThere are already enough names.<br>\nOne must know when to stop.",
            "explanation": "Example demonstrating reuse names."
          },
          {
            "title": "Reuse names",
            "code": "function ninjaFunction(elem) {\n  // 20 lines of code working with elem\n\n  elem = clone(elem);\n\n  // 20 more lines, now working with the clone of the elem!\n}",
            "explanation": "Example demonstrating reuse names."
          }
        ]
      },
      {
        "heading": "Underscores for fun",
        "paragraphs": [
          "Put underscores `_` and `__` before variable names. Like `_name` or `__value`. It would be great if only you knew their meaning. Or, better, add them just for fun, without particular meaning at all. Or different meanings in different places.",
          "You kill two rabbits with one shot. First, the code becomes longer and less readable, and the second, a fellow developer may spend a long time trying to figure out what the underscores mean.",
          "A smart ninja puts underscores at one spot of code and evades them at other places. That makes the code even more fragile and increases the probability of future errors."
        ]
      },
      {
        "heading": "Show your love",
        "paragraphs": [
          "Let everyone see how magnificent your entities are! Names like `superElement`, `megaFrame` and `niceItem` will definitely enlighten a reader.",
          "Indeed, from one hand, something is written: `super..`, `mega..`, `nice..` But from the other hand -- that brings no details. A reader may decide to look for a hidden meaning and meditate for an hour or two of their paid working time."
        ]
      },
      {
        "heading": "Overlap outer variables",
        "paragraphs": [
          "Use same names for variables inside and outside a function. As simple. No efforts to invent new names.",
          "A programmer who jumps inside the `render` will probably fail to notice that there's a local `user` shadowing the outer one.",
          "Then they'll try to work with `user` assuming that it's the external variable, the result of `authenticateUser()`... The trap is sprung! Hello, debugger..."
        ],
        "codeExamples": [
          {
            "title": "Overlap outer variables",
            "code": "When in the light, can't see anything in the darkness.<br>\nWhen in the darkness, can see everything in the light.",
            "explanation": "Example demonstrating overlap outer variables."
          },
          {
            "title": "Overlap outer variables",
            "code": "let *!*user*/!* = authenticateUser();\n\nfunction render() {\n  let *!*user*/!* = anotherValue();\n  ...\n  ...many lines...\n  ...\n  ... // <-- a programmer wants to work with user here and...\n  ...\n}",
            "explanation": "Example demonstrating overlap outer variables."
          }
        ]
      },
      {
        "heading": "Side-effects everywhere!",
        "paragraphs": [
          "There are functions that look like they don't change anything. Like `isReady()`, `checkPermission()`, `findTags()`... They are assumed to carry out calculations, find and return the data, without changing anything outside of them. In other words, without \"side-effects\".",
          "**A really beautiful trick is to add a \"useful\" action to them, besides the main task.**",
          "An expression of dazed surprise on the face of your colleague when they see a function named `is..`, `check..` or `find...` changing something -- will definitely broaden your boundaries of reason.",
          "**Another way to surprise is to return a non-standard result.**",
          "Show your original thinking! Let the call of `checkPermission` return not `true/false`, but a complex object with the results of the check."
        ]
      },
      {
        "heading": "Powerful functions!",
        "paragraphs": [
          "Don't limit the function by what's written in its name. Be broader.",
          "For instance, a function `validateEmail(email)` could (besides checking the email for correctness) show an error message and ask to re-enter the email.",
          "Additional actions should not be obvious from the function name. A true ninja coder will make them not obvious from the code as well.",
          "**Joining several actions into one protects your code from reuse.**",
          "Imagine, another developer wants only to check the email, and not output any message. Your function `validateEmail(email)` that does both will not suit them. So they won't break your meditation by asking anything about it."
        ],
        "codeExamples": [
          {
            "title": "Powerful functions!",
            "code": "The great Tao flows everywhere,<br>\nboth to the left and to the right.",
            "explanation": "Example demonstrating powerful functions!."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "All \"pieces of advice\" above are from the real code... Sometimes, written by experienced developers. Maybe even more experienced than you are ;)"
        ],
        "bulletPoints": [
          "Follow some of them, and your code will become full of surprises.",
          "Follow many of them, and your code will become truly yours, no one would want to change it.",
          "Follow all, and your code will become a valuable lesson for young developers looking for enlightenment."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Ninja Code",
        "description": "Apply your understanding of Ninja Code. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Ninja Code\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Ninja Code\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Ninja Code in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for ninja code.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Ninja Code is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Ninja Code?",
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
      "Ninja Code is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying ninja code.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "ninja-code"
    ],
    "slug": "ninja-code"
  },
  {
    "title": "Testing Mocha",
    "description": "Automated testing will be used in further tasks, and it's also widely used in real projects.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Automated testing will be used in further tasks, and it's also widely used in real projects."
        ]
      },
      {
        "heading": "Why do we need tests?",
        "paragraphs": [
          "When we write a function, we can usually imagine what it should do: which parameters give which results.",
          "During development, we can check the function by running it and comparing the outcome with the expected one. For instance, we can do it in the console.",
          "If something is wrong -- then we fix the code, run again, check the result -- and so on till it works.",
          "But such manual \"re-runs\" are imperfect.",
          "**When testing a code by manual re-runs, it's easy to miss something.**"
        ]
      },
      {
        "heading": "Behavior Driven Development (BDD)",
        "paragraphs": [
          "Let's start with a technique named Behavior Driven Development or, in short, BDD.",
          "**BDD is three things in one: tests AND documentation AND examples.**",
          "To understand BDD, we'll examine a practical case of development."
        ]
      },
      {
        "heading": "Development of \"pow\": the spec",
        "paragraphs": [
          "Let's say we want to make a function `pow(x, n)` that raises `x` to an integer power `n`. We assume that `n\u22650`.",
          "That task is just an example: there's the `**` operator in JavaScript that can do that, but here we concentrate on the development flow that can be applied to more complex tasks as well.",
          "Before creating the code of `pow`, we can imagine what the function should do and describe it.",
          "Such description is called a *specification* or, in short, a spec, and contains descriptions of use cases together with tests for them, like this:",
          "A spec has three main building blocks that you can see above:"
        ],
        "codeExamples": [
          {
            "title": "Development of \"pow\": the spec",
            "code": "describe(\"pow\", function() {\n\n  it(\"raises to n-th power\", function() {\n    assert.equal(pow(2, 3), 8);\n  });\n\n});",
            "explanation": "Example demonstrating development of \"pow\": the spec."
          }
        ]
      },
      {
        "heading": "The development flow",
        "paragraphs": [
          "The flow of development usually looks like this:",
          "1. An initial spec is written, with tests for the most basic functionality.",
          "2. An initial implementation is created.",
          "3. To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.",
          "4. Now we have a working initial implementation with tests."
        ]
      },
      {
        "heading": "The spec in action",
        "paragraphs": [
          "Here in the tutorial we'll be using the following JavaScript libraries for tests:",
          "These libraries are suitable for both in-browser and server-side testing. Here we'll consider the browser variant.",
          "The full HTML page with these frameworks and `pow` spec:",
          "The page can be divided into five parts:",
          "1. The `` -- add third-party libraries and styles for tests."
        ],
        "bulletPoints": [
          "Mocha -- the core framework: it provides common testing functions including `describe` and `it` and the main function that runs tests.",
          "Chai -- the library with many assertions. It allows to use a lot of different assertions, for now we need only `assert.equal`.",
          "Sinon -- a library to spy over functions, emulate built-in functions and more, we'll need it much later."
        ]
      },
      {
        "heading": "Initial implementation",
        "paragraphs": [
          "Let's make a simple implementation of `pow`, for tests to pass:",
          "Wow, now it works!",
          "[iframe height=250 src=\"pow-min\" border=1 edit]"
        ],
        "codeExamples": [
          {
            "title": "Initial implementation",
            "code": "function pow(x, n) {\n  return 8; // :) we cheat!\n}",
            "explanation": "Example demonstrating initial implementation."
          }
        ]
      },
      {
        "heading": "Improving the spec",
        "paragraphs": [
          "What we've done is definitely a cheat. The function does not work: an attempt to calculate `pow(3,4)` would give an incorrect result, but tests pass.",
          "...But the situation is quite typical, it happens in practice. Tests pass, but the function works wrong. Our spec is imperfect. We need to add more use cases to it.",
          "Let's add one more test to check that `pow(3, 4) = 81`.",
          "We can select one of two ways to organize the test here:",
          "1. The first variant -- add one more `assert` into the same `it`:"
        ]
      },
      {
        "heading": "Improving the implementation",
        "paragraphs": [
          "Let's write something more real for tests to pass:",
          "To be sure that the function works well, let's test it for more values. Instead of writing `it` blocks manually, we can generate them in `for`:",
          "The result:",
          "[iframe height=250 src=\"pow-3\" edit border=\"1\"]"
        ],
        "codeExamples": [
          {
            "title": "Improving the implementation",
            "code": "function pow(x, n) {\n  let result = 1;\n\n  for (let i = 0; i < n; i++) {\n    result *= x;\n  }\n\n  return result;\n}",
            "explanation": "Example demonstrating improving the implementation."
          },
          {
            "title": "Improving the implementation",
            "code": "describe(\"pow\", function() {\n\n  function makeTest(x) {\n    let expected = x * x * x;\n    it(`${x} in the power 3 is ${expected}`, function() {\n      assert.equal(pow(x, 3), expected);\n    });\n  }\n\n  for (let x = 1; x <= 5; x++) {\n    makeTest(x);\n  }\n\n});",
            "explanation": "Example demonstrating improving the implementation."
          }
        ]
      },
      {
        "heading": "Nested describe",
        "paragraphs": [
          "We're going to add even more tests. But before that let's note that the helper function `makeTest` and `for` should be grouped together. We won't need `makeTest` in other tests, it's needed only in `for`: their common task is to check how `pow` raises into the given power.",
          "Grouping is done with a nested `describe`:",
          "The nested `describe` defines a new \"subgroup\" of tests. In the output we can see the titled indentation:",
          "[iframe height=250 src=\"pow-4\" edit border=\"1\"]",
          "In the future we can add more `it` and `describe` on the top level with helper functions of their own, they won't see `makeTest`."
        ],
        "codeExamples": [
          {
            "title": "Nested describe",
            "code": "describe(\"pow\", function() {\n\n*!*\n  describe(\"raises x to power 3\", function() {\n*/!*\n\n    function makeTest(x) {\n      let expected = x * x * x;\n      it(`${x} in the power 3 is ${expected}`, function() {\n        assert.equal(pow(x, 3), expected);\n      });\n    }\n\n    for (let x = 1; x <= 5; x++) {\n      makeTest(x);\n    }\n\n*!*\n  });\n*/!*\n\n  // ... more tests to follow here, both describe and it can be added\n});",
            "explanation": "Example demonstrating nested describe."
          },
          {
            "title": "Nested describe",
            "code": "We can setup `before/after` functions that execute before/after running tests, and also `beforeEach/afterEach` functions that execute before/after *every* `it`.\n\nFor instance:",
            "explanation": "Example demonstrating nested describe."
          }
        ]
      },
      {
        "heading": "Extending the spec",
        "paragraphs": [
          "The basic functionality of `pow` is complete. The first iteration of the development is done. When we're done celebrating and drinking champagne -- let's go on and improve it.",
          "As it was said, the function `pow(x, n)` is meant to work with positive integer values `n`.",
          "To indicate a mathematical error, JavaScript functions usually return `NaN`. Let's do the same for invalid values of `n`.",
          "Let's first add the behavior to the spec(!):",
          "The result with new tests:"
        ],
        "codeExamples": [
          {
            "title": "Extending the spec",
            "code": "describe(\"pow\", function() {\n\n  // ...\n\n  it(\"for negative n the result is NaN\", function() {\n*!*\n    assert.isNaN(pow(2, -1));\n*/!*\n  });\n\n  it(\"for non-integer n the result is NaN\", function() {\n*!*\n    assert.isNaN(pow(2, 1.5));    \n*/!*\n  });\n\n});",
            "explanation": "Example demonstrating extending the spec."
          },
          {
            "title": "Extending the spec",
            "code": "Please note the assertion `assert.isNaN`: it checks for `NaN`.\n\nThere are other assertions in [Chai](https://www.chaijs.com/) as well, for instance:\n\n- `assert.equal(value1, value2)` -- checks the equality  `value1 == value2`.\n- `assert.strictEqual(value1, value2)` -- checks the strict equality `value1 === value2`.\n- `assert.notEqual`, `assert.notStrictEqual` -- inverse checks to the ones above.\n- `assert.isTrue(value)` -- checks that `value === true`\n- `assert.isFalse(value)` -- checks that `value === false`\n- ...the full list is in the [docs](https://www.chaijs.com/api/assert/)",
            "explanation": "Example demonstrating extending the spec."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.",
          "The spec can be used in three ways:",
          "1. As **Tests** - they guarantee that the code works correctly.",
          "2. As **Docs** -- the titles of `describe` and `it` tell what the function does.",
          "3. As **Examples** -- the tests are actually working examples showing how a function can be used."
        ]
      }
    ],
    "exercises": [
      {
        "title": "What's wrong in the test?",
        "description": "What's wrong in the test of `pow` below? ```js it(\"Raises x to the power n\", function() { let x = 5; let result = x; assert.equal(pow(x, 1), result); result *= x; assert.equal(pow(x, 2), result); result *= x; assert.equal(pow(x, 3), result); }); ``` P.S. Syntactically the test is correct and passes.",
        "starterCode": "it(\"Raises x to the power n\", function() {\n  let x = 5;\n\n  let result = x;\n  assert.equal(pow(x, 1), result);\n\n  result *= x;\n  assert.equal(pow(x, 2), result);\n\n  result *= x;\n  assert.equal(pow(x, 3), result);\n});",
        "solution": "describe(\"Raises x to power n\", function() {\n  it(\"5 in the power of 1 equals 5\", function() {\n    assert.equal(pow(5, 1), 5);\n  });\n\n  it(\"5 in the power of 2 equals 25\", function() {\n    assert.equal(pow(5, 2), 25);\n  });\n\n  it(\"5 in the power of 3 equals 125\", function() {\n    assert.equal(pow(5, 3), 125);\n  });\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Testing Mocha in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for testing mocha.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Testing Mocha is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Testing Mocha?",
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
      "Testing Mocha is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying testing mocha.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "testing-mocha"
    ],
    "slug": "testing-mocha"
  },
  {
    "title": "Polyfills",
    "description": "The JavaScript language steadily evolves. New proposals to the language appear regularly, they are analyzed and, if considered worthy, are appended to the list at and then progress...",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The JavaScript language steadily evolves. New proposals to the language appear regularly, they are analyzed and, if considered worthy, are appended to the list at and then progress to the specification.",
          "Teams behind JavaScript engines have their own ideas about what to implement first. They may decide to implement proposals that are in draft and postpone things that are already in the spec, because they are less interesting or just harder to do.",
          "So it's quite common for an engine to implement only part of the standard.",
          "A good page to see the current state of support for language features is (it's big, we have a lot to study yet).",
          "As programmers, we'd like to use most recent features. The more good stuff - the better!"
        ]
      },
      {
        "heading": "Transpilers",
        "paragraphs": [
          "A transpiler is a special piece of software that translates source code to another source code. It can parse (\"read and understand\") modern code and rewrite it using older syntax constructs, so that it'll also work in outdated engines.",
          "E.g. JavaScript before year 2020 didn't have the \"nullish coalescing operator\" `??`. So, if a visitor uses an outdated browser, it may fail to understand the code like `height = height ?? 100`.",
          "A transpiler would analyze our code and rewrite `height ?? 100` into `(height !== undefined && height !== null) ? height : 100`.",
          "Now the rewritten code is suitable for older JavaScript engines.",
          "Usually, a developer runs the transpiler on their own computer, and then deploys the transpiled code to the server."
        ],
        "codeExamples": [
          {
            "title": "Transpilers",
            "code": "// before running the transpiler\nheight = height ?? 100;\n\n// after running the transpiler\nheight = (height !== undefined && height !== null) ? height : 100;",
            "explanation": "Example demonstrating transpilers."
          }
        ]
      },
      {
        "heading": "Polyfills",
        "paragraphs": [
          "New language features may include not only syntax constructs and operators, but also built-in functions.",
          "For example, `Math.trunc(n)` is a function that \"cuts off\" the decimal part of a number, e.g `Math.trunc(1.23)` returns `1`.",
          "In some (very outdated) JavaScript engines, there's no `Math.trunc`, so such code will fail.",
          "As we're talking about new functions, not syntax changes, there's no need to transpile anything here. We just need to declare the missing function.",
          "A script that updates/adds new functions is called \"polyfill\". It \"fills in\" the gap and adds missing implementations."
        ],
        "codeExamples": [
          {
            "title": "Polyfills",
            "code": "if (!Math.trunc) { // if no such function\n  // implement it\n  Math.trunc = function(number) {\n    // Math.ceil and Math.floor exist even in ancient JavaScript engines\n    // they are covered later in the tutorial\n    return number < 0 ? Math.ceil(number) : Math.floor(number);\n  };\n}",
            "explanation": "Example demonstrating polyfills."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "In this chapter we'd like to motivate you to study modern and even \"bleeding-edge\" language features, even if they aren't yet well-supported by JavaScript engines.",
          "Just don't forget to use a transpiler (if using modern syntax or operators) and polyfills (to add functions that may be missing). They'll ensure that the code works.",
          "For example, later when you're familiar with JavaScript, you can setup a code build system based on webpack with the babel-loader plugin.",
          "Good resources that show the current state of support for various features:",
          "P.S. Google Chrome is usually the most up-to-date with language features, try it if a tutorial demo fails. Most tutorial demos work with any modern browser though."
        ],
        "bulletPoints": [
          "- for pure JavaScript.",
          "- for browser-related functions."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Polyfills",
        "description": "Apply your understanding of Polyfills. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Polyfills\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Polyfills\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Polyfills in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for polyfills.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Polyfills is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Polyfills?",
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
      "Polyfills is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying polyfills.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "polyfills"
    ],
    "slug": "polyfills"
  }
];
