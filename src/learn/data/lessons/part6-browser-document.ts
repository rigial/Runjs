import type { Lesson } from '../../types';

export const part6Lessons: Lesson[] = [
  {
    "title": "Browser Environment",
    "description": "The JavaScript language was initially created for web browsers. Since then, it has evolved into a language with many uses and platforms.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The JavaScript language was initially created for web browsers. Since then, it has evolved into a language with many uses and platforms.",
          "A platform may be a browser, or a web-server or another *host*, or even a \"smart\" coffee machine if it can run JavaScript. Each of these provides platform-specific functionality. The JavaScript specification calls that a *host environment*.",
          "A host environment provides its own objects and functions in addition to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.",
          "Here's a bird's-eye view of what we have when JavaScript runs in a web browser:",
          "![](windowObjects.svg)"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "function sayHi() {\n  alert(\"Hello\");\n}\n\n// global functions are methods of the global object:\nwindow.sayHi();",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "alert(window.innerHeight); // inner window height",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "DOM (Document Object Model)",
        "paragraphs": [
          "The Document Object Model, or DOM for short, represents all page content as objects that can be modified.",
          "The `document` object is the main \"entry point\" to the page. We can change or create anything on the page using it.",
          "For instance:",
          "Here, we used `document.body.style`, but there's much, much more. Properties and methods are described in the specification: DOM Living Standard."
        ],
        "codeExamples": [
          {
            "title": "DOM (Document Object Model)",
            "code": "// change the background color to red\ndocument.body.style.background = \"red\";\n\n// change it back after 1 second\nsetTimeout(() => document.body.style.background = \"\", 1000);",
            "explanation": "Example demonstrating dom (document object model)."
          },
          {
            "title": "DOM (Document Object Model)",
            "code": "The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use DOM too.\n\nFor instance, server-side scripts that download HTML pages and process them can also use the DOM. They may support only a part of the specification though.",
            "explanation": "Example demonstrating dom (document object model)."
          }
        ]
      },
      {
        "heading": "BOM (Browser Object Model)",
        "paragraphs": [
          "The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.",
          "For instance:",
          "Here's how we can use the `location` object:",
          "The functions `alert/confirm/prompt` are also a part of the BOM: they are not directly related to the document, but represent pure browser methods for communicating with the user."
        ],
        "codeExamples": [
          {
            "title": "BOM (Browser Object Model)",
            "code": "alert(location.href); // shows current URL\nif (confirm(\"Go to Wikipedia?\")) {\n  location.href = \"https://wikipedia.org\"; // redirect the browser to another URL\n}",
            "explanation": "Example demonstrating bom (browser object model)."
          },
          {
            "title": "BOM (Browser Object Model)",
            "code": "The BOM is a part of the general [HTML specification](https://html.spec.whatwg.org).\n\nYes, you heard that right. The HTML spec at <https://html.spec.whatwg.org> is not only about the \"HTML language\" (tags, attributes), but also covers a bunch of objects, methods, and browser-specific DOM extensions. That's \"HTML in broad terms\". Also, some parts have additional specs listed at <https://spec.whatwg.org>.",
            "explanation": "Example demonstrating bom (browser object model)."
          }
        ],
        "bulletPoints": [
          "The navigator object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: `navigator.userAgent` -- about the current browser, and `navigator.platform` -- about the platform (can help to differentiate between Windows/Linux/Mac etc).",
          "The location object allows us to read the current URL and can redirect the browser to a new one."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Talking about standards, we have:",
          "DOM specification",
          ": Describes the document structure, manipulations, and events, see .",
          "CSSOM specification",
          ": Describes stylesheets and style rules, manipulations with them, and their binding to documents, see ."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Browser Environment",
        "description": "Apply your understanding of Browser Environment. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Browser Environment\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Browser Environment\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Browser Environment in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for browser environment.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Browser Environment is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Browser Environment?",
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
      "Browser Environment is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying browser environment.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "browser-environment"
    ],
    "slug": "browser-environment"
  },
  {
    "title": "Dom Nodes",
    "description": "libs:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "libs:",
          "The backbone of an HTML document is tags.",
          "According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are \"children\" of the enclosing one. The text inside a tag is an object as well.",
          "All these objects are accessible using JavaScript, and we can use them to modify the page.",
          "For example, `document.body` is the object representing the `` tag."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "document.body.style.background = 'red'; // make the background red\n\nsetTimeout(() => document.body.style.background = '', 3000); // return back",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "domtree",
          "`innerHTML` -- HTML contents of the node.",
          "`offsetWidth` -- the node width (in pixels)",
          "...and so on."
        ]
      },
      {
        "heading": "An example of the DOM",
        "paragraphs": [
          "Let's start with the following simple document:",
          "The DOM represents HTML as a tree structure of tags. Here's how it looks:",
          "let node1 = {\"name\":\"HTML\",\"nodeType\":1,\"children\":[{\"name\":\"HEAD\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n \"},{\"name\":\"TITLE\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"About elk\"}]},{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n\"}]},{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n\"},{\"name\":\"BODY\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n The truth about elk.\\n\"}]}]}",
          "drawHtmlTree(node1, 'div.domtree', 690, 320);",
          "Every tree node is an object."
        ],
        "codeExamples": [
          {
            "title": "An example of the DOM",
            "code": "<!DOCTYPE HTML>\n<html>\n<head>\n  <title>About elk</title>\n</head>\n<body>\n  The truth about elk.\n</body>\n</html>",
            "explanation": "Example demonstrating an example of the dom."
          },
          {
            "title": "An example of the DOM",
            "code": "On the picture above, you can click on element nodes and their children will open/collapse.",
            "explanation": "Example demonstrating an example of the dom."
          }
        ],
        "bulletPoints": [
          "a newline: `\u21b5` (in JavaScript known as `\\n`)",
          "a space: `\u2423`"
        ]
      },
      {
        "heading": "Autocorrection",
        "paragraphs": [
          "If the browser encounters malformed HTML, it automatically corrects it when making the DOM.",
          "For instance, the top tag is always ``. Even if it doesn't exist in the document, it will exist in the DOM, because the browser will create it. The same goes for ``.",
          "As an example, if the HTML file is the single word `\"Hello\"`, the browser will wrap it into `` and ``, and add the required ``, and the DOM will be:",
          "let node3 = {\"name\":\"HTML\",\"nodeType\":1,\"children\":[{\"name\":\"HEAD\",\"nodeType\":1,\"children\":[]},{\"name\":\"BODY\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"Hello\"}]}]}",
          "drawHtmlTree(node3, 'div.domtree', 690, 150);"
        ],
        "codeExamples": [
          {
            "title": "Autocorrection",
            "code": "<p>Hello\n<li>Mom\n<li>and\n<li>Dad",
            "explanation": "Example demonstrating autocorrection."
          },
          {
            "title": "Autocorrection",
            "code": "An interesting \"special case\" is tables. By DOM specification they must have `<tbody>` tag, but HTML text may omit it. Then the browser creates `<tbody>` in the DOM automatically.\n\nFor the HTML:",
            "explanation": "Example demonstrating autocorrection."
          }
        ]
      },
      {
        "heading": "Other node types",
        "paragraphs": [
          "There are some other node types besides elements and text nodes.",
          "For example, comments:",
          "let node6 = {\"name\":\"HTML\",\"nodeType\":1,\"children\":[{\"name\":\"HEAD\",\"nodeType\":1,\"children\":[]},{\"name\":\"BODY\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n The truth about elk.\\n \"},{\"name\":\"OL\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n \"},{\"name\":\"LI\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"An elk is a smart\"}]},{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n \"},{\"name\":\"#comment\",\"nodeType\":8,\"content\":\"comment\"},{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n \"},{\"name\":\"LI\",\"nodeType\":1,\"children\":[{\"name\":\"#text\",\"nodeType\":3,\"content\":\"...and cunning animal!\"}]},{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n \"}]},{\"name\":\"#text\",\"nodeType\":3,\"content\":\"\\n\\n\\n\"}]}]};",
          "drawHtmlTree(node6, 'div.domtree', 690, 500);",
          "We can see here a new tree node type -- *comment node*, labeled as `#comment`, between two text nodes."
        ],
        "codeExamples": [
          {
            "title": "Other node types",
            "code": "<!DOCTYPE HTML>\n<html>\n<body>\n  The truth about elk.\n  <ol>\n    <li>An elk is a smart</li>\n*!*\n    <!-- comment -->\n*/!*\n    <li>...and cunning animal!</li>\n  </ol>\n</body>\n</html>",
            "explanation": "Example demonstrating other node types."
          }
        ]
      },
      {
        "heading": "See it for yourself",
        "paragraphs": [
          "To see the DOM structure in real-time, try Live DOM Viewer. Just type in the document, and it will show up as a DOM at an instant.",
          "Another way to explore the DOM is to use the browser developer tools. Actually, that's what we use when developing.",
          "To do so, open the web page elk.html, turn on the browser developer tools and switch to the Elements tab.",
          "It should look like this:",
          "![](elk.svg)"
        ],
        "bulletPoints": [
          "**Styles** -- we can see CSS applied to the current element rule by rule, including built-in rules (gray). Almost everything can be edited in-place, including the dimensions/margins/paddings of the box below.",
          "**Computed** -- to see CSS applied to the element by property: for each property we can see a rule that gives it (including CSS inheritance and such).",
          "**Event Listeners** -- to see event listeners attached to DOM elements (we'll cover them in the next part of the tutorial).",
          "...and so on."
        ]
      },
      {
        "heading": "Interaction with console",
        "paragraphs": [
          "As we work the DOM, we also may want to apply JavaScript to it. Like: get a node and run some code to modify it, to see the result. Here are few tips to travel between the Elements tab and the console.",
          "For the start:",
          "1. Select the first `` in the Elements tab.",
          "2. Press `key:Esc` -- it will open console right below the Elements tab.",
          "Now the last selected element is available as `$0`, the previously selected is `$1` etc."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "An HTML/XML document is represented inside the browser as the DOM tree.",
          "We can use developer tools to inspect DOM and modify it manually.",
          "Here we covered the basics, the most used and important actions to start with. There's an extensive documentation about Chrome Developer Tools at . The best way to learn the tools is to click here and there, read menus: most options are obvious. Later, when you know them in general, read the docs and pick up the rest.",
          "DOM nodes have properties and methods that allow us to travel between them, modify them, move around the page, and more. We'll get down to them in the next chapters."
        ],
        "bulletPoints": [
          "Tags become element nodes and form the structure.",
          "Text becomes text nodes.",
          "...etc, everything in HTML has its place in DOM, even comments."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Dom Nodes",
        "description": "Apply your understanding of Dom Nodes. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Dom Nodes\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Dom Nodes\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Dom Nodes in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for dom nodes.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Dom Nodes is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Dom Nodes?",
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
      "Dom Nodes is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying dom nodes.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "dom-nodes"
    ],
    "slug": "dom-nodes"
  },
  {
    "title": "Dom Navigation",
    "description": "libs:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "libs:",
          "The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.",
          "All operations on the DOM start with the `document` object. That's the main \"entry point\" to DOM. From it we can access any node.",
          "Here's a picture of links that allow for travel between DOM nodes:",
          "![](dom-links.svg)"
        ],
        "bulletPoints": [
          "domtree"
        ]
      },
      {
        "heading": "On top: documentElement and body",
        "paragraphs": [
          "The topmost tree nodes are available directly as `document` properties:",
          "`` = `document.documentElement`",
          ": The topmost document node is `document.documentElement`. That's the DOM node of the `` tag.",
          "`` = `document.body`",
          ": Another widely used DOM node is the `` element -- `document.body`."
        ],
        "codeExamples": [
          {
            "title": "On top: documentElement and body",
            "code": "A script cannot access an element that doesn't exist at the moment of running.\n\nIn particular, if a script is inside `<head>`, then `document.body` is unavailable, because the browser did not read it yet.\n\nSo, in the example below the first `alert` shows `null`:",
            "explanation": "Example demonstrating on top: documentelement and body."
          },
          {
            "title": "On top: documentElement and body",
            "code": "In the DOM, the `null` value means \"doesn't exist\" or \"no such node\".",
            "explanation": "Example demonstrating on top: documentelement and body."
          }
        ]
      },
      {
        "heading": "Children: childNodes, firstChild, lastChild",
        "paragraphs": [
          "There are two terms that we'll use from now on:",
          "For instance, here `` has children `` and `` (and few blank text nodes):",
          "...And descendants of `` are not only direct children ``, `` but also more deeply nested elements, such as `` (a child of ``) and `` (a child of ``) -- the entire subtree.",
          "**The `childNodes` collection lists all child nodes, including text nodes.**",
          "The example below shows children of `document.body`:"
        ],
        "codeExamples": [
          {
            "title": "Children: childNodes, firstChild, lastChild",
            "code": "<html>\n<body>\n  <div>Begin</div>\n\n  <ul>\n    <li>\n      <b>Information</b>\n    </li>\n  </ul>\n</body>\n</html>",
            "explanation": "Example demonstrating children: childnodes, firstchild, lastchild."
          },
          {
            "title": "Children: childNodes, firstChild, lastChild",
            "code": "<html>\n<body>\n  <div>Begin</div>\n\n  <ul>\n    <li>Information</li>\n  </ul>\n\n  <div>End</div>\n\n  <script>\n*!*\n    for (let i = 0; i < document.body.childNodes.length; i++) {\n      alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT\n    }\n*/!*\n  </script>\n  ...more stuff...\n</body>\n</html>",
            "explanation": "Example demonstrating children: childnodes, firstchild, lastchild."
          }
        ],
        "bulletPoints": [
          "**Child nodes (or children)** -- elements that are direct children. In other words, they are nested exactly in the given one. For instance, `` and `` are children of `` element.",
          "**Descendants** -- all elements that are nested in the given one, including children, their children and so on."
        ]
      },
      {
        "heading": "DOM collections",
        "paragraphs": [
          "As we can see, `childNodes` looks like an array. But actually it's not an array, but rather a *collection* -- a special array-like iterable object.",
          "There are two important consequences:",
          "1. We can use `for..of` to iterate over it:",
          "for (let node of document.body.childNodes) {",
          "alert(node); // shows all nodes from the collection"
        ],
        "codeExamples": [
          {
            "title": "DOM collections",
            "code": "DOM collections, and even more -- *all* navigation properties listed in this chapter are read-only.\n\nWe can't replace a child by something else by assigning `childNodes[i] = ...`.\n\nChanging DOM needs other methods. We will see them in the next chapter.",
            "explanation": "Example demonstrating dom collections."
          },
          {
            "title": "DOM collections",
            "code": "Almost all DOM collections with minor exceptions are *live*. In other words, they reflect the current state of DOM.\n\nIf we keep a reference to `elem.childNodes`, and add/remove nodes into DOM, then they appear in the collection automatically.",
            "explanation": "Example demonstrating dom collections."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "DOM children",
        "description": "Look at this page: ```html Users: John Pete ``` For each of the following, give at least one way of how to access them: - The `` DOM node? - The `` DOM node? - The second `` (with Pete)?",
        "starterCode": "<html>\n<body>\n  <div>Users:</div>\n  <ul>\n    <li>John</li>\n    <li>Pete</li>\n  </ul>\n</body>\n</html>",
        "solution": "document.body.firstElementChild\n// or\ndocument.body.children[0]\n// or (the first node is space, so we take 2nd)\ndocument.body.childNodes[1]",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "The sibling question",
        "description": "If `elem` -- is an arbitrary DOM element node... - Is it true that `elem.lastChild.nextSibling` is always `null`? - Is it true that `elem.children[0].previousSibling` is always `null` ?",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Select all diagonal cells",
        "description": "Write the code to paint all diagonal table cells in red. You'll need to get all diagonal `` from the `` and paint them using the code: ```js // td should be the reference to the table cell td.style.backgroundColor = 'red'; ``` The result should be: [iframe src=\"solution\" height=180]",
        "starterCode": "// td should be the reference to the table cell\ntd.style.backgroundColor = 'red';",
        "solution": "// td should be the reference to the table cell\ntd.style.backgroundColor = 'red';",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Dom Navigation in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for dom navigation.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Dom Navigation is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Dom Navigation?",
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
      "Dom Navigation is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying dom navigation.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "dom-navigation"
    ],
    "slug": "dom-navigation"
  },
  {
    "title": "Searching Elements Dom",
    "description": "DOM navigation properties are great when elements are close to each other. What if they are not? How to get an arbitrary element of the page?",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "DOM navigation properties are great when elements are close to each other. What if they are not? How to get an arbitrary element of the page?",
          "There are additional searching methods for that."
        ]
      },
      {
        "heading": "document.getElementById or just id",
        "paragraphs": [
          "If an element has the `id` attribute, we can get the element using the method `document.getElementById(id)`, no matter where it is.",
          "For instance:",
          "Also, there's a global variable named by `id` that references the element:",
          "...That's unless we declare a JavaScript variable with the same name, then it takes precedence:"
        ],
        "codeExamples": [
          {
            "title": "document.getElementById or just id",
            "code": "<div id=\"elem\">\n  <div id=\"elem-content\">Element</div>\n</div>\n\n<script>\n  // get the element\n*!*\n  let elem = document.getElementById('elem');\n*/!*\n\n  // make its background red\n  elem.style.background = 'red';\n</script>",
            "explanation": "Example demonstrating document.getelementbyid or just id."
          },
          {
            "title": "document.getElementById or just id",
            "code": "<div id=\"*!*elem*/!*\">\n  <div id=\"*!*elem-content*/!*\">Element</div>\n</div>\n\n<script>\n  // elem is a reference to DOM-element with id=\"elem\"\n  elem.style.background = 'red';\n\n  // id=\"elem-content\" has a hyphen inside, so it can't be a variable name\n  // ...but we can access it using square brackets: window['elem-content']\n</script>",
            "explanation": "Example demonstrating document.getelementbyid or just id."
          }
        ]
      },
      {
        "heading": "querySelectorAll [#querySelectorAll]",
        "paragraphs": [
          "By far, the most versatile method, `elem.querySelectorAll(css)` returns all elements inside `elem` matching the given CSS selector.",
          "Here we look for all `` elements that are last children:",
          "This method is indeed powerful, because any CSS selector can be used."
        ],
        "codeExamples": [
          {
            "title": "querySelectorAll [#querySelectorAll]",
            "code": "<ul>\n  <li>The</li>\n  <li>test</li>\n</ul>\n<ul>\n  <li>has</li>\n  <li>passed</li>\n</ul>\n<script>\n*!*\n  let elements = document.querySelectorAll('ul > li:last-child');\n*/!*\n\n  for (let elem of elements) {\n    alert(elem.innerHTML); // \"test\", \"passed\"\n  }\n</script>",
            "explanation": "Example demonstrating queryselectorall [#queryselectorall]."
          },
          {
            "title": "querySelectorAll [#querySelectorAll]",
            "code": "Pseudo-classes in the CSS selector like `:hover` and `:active` are also supported. For instance, `document.querySelectorAll(':hover')` will return the collection with elements that the pointer is over now (in nesting order: from the outermost `<html>` to the most nested one).",
            "explanation": "Example demonstrating queryselectorall [#queryselectorall]."
          }
        ]
      },
      {
        "heading": "querySelector [#querySelector]",
        "paragraphs": [
          "The call to `elem.querySelector(css)` returns the first element for the given CSS selector.",
          "In other words, the result is the same as `elem.querySelectorAll(css)[0]`, but the latter is looking for *all* elements and picking one, while `elem.querySelector` just looks for one. So it's faster and also shorter to write."
        ]
      },
      {
        "heading": "matches",
        "paragraphs": [
          "Previous methods were searching the DOM.",
          "The elem.matches(css) does not look for anything, it merely checks if `elem` matches the given CSS-selector. It returns `true` or `false`.",
          "The method comes in handy when we are iterating over elements (like in an array or something) and trying to filter out those that interest us.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "matches",
            "code": "<a href=\"http://example.com/file.zip\">...</a>\n<a href=\"http://ya.ru\">...</a>\n\n<script>\n  // can be any collection instead of document.body.children\n  for (let elem of document.body.children) {\n*!*\n    if (elem.matches('a[href$=\"zip\"]')) {\n*/!*\n      alert(\"The archive reference: \" + elem.href );\n    }\n  }\n</script>",
            "explanation": "Example demonstrating matches."
          }
        ]
      },
      {
        "heading": "closest",
        "paragraphs": [
          "*Ancestors* of an element are: parent, the parent of parent, its parent and so on. The ancestors together form the chain of parents from the element to the top.",
          "The method `elem.closest(css)` looks for the nearest ancestor that matches the CSS-selector. The `elem` itself is also included in the search.",
          "In other words, the method `closest` goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "closest",
            "code": "<h1>Contents</h1>\n\n<div class=\"contents\">\n  <ul class=\"book\">\n    <li class=\"chapter\">Chapter 1</li>\n    <li class=\"chapter\">Chapter 2</li>\n  </ul>\n</div>\n\n<script>\n  let chapter = document.querySelector('.chapter'); // LI\n\n  alert(chapter.closest('.book')); // UL\n  alert(chapter.closest('.contents')); // DIV\n\n  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)\n</script>",
            "explanation": "Example demonstrating closest."
          }
        ]
      },
      {
        "heading": "getElementsBy*",
        "paragraphs": [
          "There are also other methods to look for nodes by a tag, class, etc.",
          "Today, they are mostly history, as `querySelector` is more powerful and shorter to write.",
          "So here we cover them mainly for completeness, while you can still find them in the old scripts.",
          "For instance:",
          "Let's find all `input` tags inside the table:"
        ],
        "codeExamples": [
          {
            "title": "getElementsBy*",
            "code": "// get all divs in the document\nlet divs = document.getElementsByTagName('div');",
            "explanation": "Example demonstrating getelementsby*."
          },
          {
            "title": "getElementsBy*",
            "code": "<table id=\"table\">\n  <tr>\n    <td>Your age:</td>\n\n    <td>\n      <label>\n        <input type=\"radio\" name=\"age\" value=\"young\" checked> less than 18\n      </label>\n      <label>\n        <input type=\"radio\" name=\"age\" value=\"mature\"> from 18 to 50\n      </label>\n      <label>\n        <input type=\"radio\" name=\"age\" value=\"senior\"> more than 60\n      </label>\n    </td>\n  </tr>\n</table>\n\n<script>\n*!*\n  let inputs = table.getElementsByTagName('input');\n*/!*\n\n  for (let input of inputs) {\n    alert( input.value + ': ' + input.checked );\n  }\n</script>",
            "explanation": "Example demonstrating getelementsby*."
          }
        ],
        "bulletPoints": [
          "`elem.getElementsByTagName(tag)` looks for elements with the given tag and returns the collection of them. The `tag` parameter can also be a star `\"*\"` for \"any tags\".",
          "`elem.getElementsByClassName(className)` returns elements that have the given CSS class.",
          "`document.getElementsByName(name)` returns elements with the given `name` attribute, document-wide. Very rarely used."
        ]
      },
      {
        "heading": "Live collections",
        "paragraphs": [
          "All methods `\"getElementsBy*\"` return a *live* collection. Such collections always reflect the current state of the document and \"auto-update\" when it changes.",
          "In the example below, there are two scripts.",
          "1. The first one creates a reference to the collection of ``. As of now, its length is `1`.",
          "2. The second scripts runs after the browser meets one more ``, so its length is `2`.",
          "In contrast, `querySelectorAll` returns a *static* collection. It's like a fixed array of elements."
        ],
        "codeExamples": [
          {
            "title": "Live collections",
            "code": "<div>First div</div>\n\n<script>\n  let divs = document.getElementsByTagName('div');\n  alert(divs.length); // 1\n</script>\n\n<div>Second div</div>\n\n<script>\n*!*\n  alert(divs.length); // 2\n*/!*\n</script>",
            "explanation": "Example demonstrating live collections."
          },
          {
            "title": "Live collections",
            "code": "<div>First div</div>\n\n<script>\n  let divs = document.querySelectorAll('div');\n  alert(divs.length); // 1\n</script>\n\n<div>Second div</div>\n\n<script>\n*!*\n  alert(divs.length); // 1\n*/!*\n</script>",
            "explanation": "Example demonstrating live collections."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are 6 main methods to search for nodes in DOM:",
          "Method",
          "Searches by...",
          "Can call on an element?",
          "Live?"
        ],
        "bulletPoints": [
          "There is `elem.matches(css)` to check if `elem` matches the given CSS selector.",
          "There is `elem.closest(css)` to look for the nearest ancestor that matches the given CSS-selector. The `elem` itself is also checked.",
          "`elemA.contains(elemB)` returns true if `elemB` is inside `elemA` (a descendant of `elemA`) or when `elemA==elemB`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Search for elements",
        "description": "Here's the document with the table and form. How to find?... 1. The table with `id=\"age-table\"`. 2. All `label` elements inside that table (there should be 3 of them). 3. The first `td` in that table (with the word \"Age\"). 4. The `form` with `name=\"search\"`. 5. The first `input` in that form. 6. The",
        "starterCode": "// Write your code here\n",
        "solution": "// 1. The table with `id=\"age-table\"`.\nlet table = document.getElementById('age-table')\n\n// 2. All label elements inside that table\ntable.getElementsByTagName('label')\n// or\ndocument.querySelectorAll('#age-table label')\n\n// 3. The first td in that table (with the word \"Age\")\ntable.rows[0].cells[0]\n// or\ntable.getElementsByTagName('td')[0]\n// or\ntable.querySelector('td')\n\n// 4. The form with the name \"search\"\n// assuming there's only one element with name=\"search\" in the document\nlet form = document.getElementsByName('search')[0]\n// or, form specifically\ndocument.querySelector('form[name=\"search\"]')\n\n// 5. The first input in that form.\nform.getElementsByTagName('input')[0]\n// or\nform.querySelector('input')\n\n// 6. The last input in that form\nlet inputs = form.querySelectorAll('input') // find all inputs\ninputs[inputs.length-1] // take the last one",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Searching Elements Dom in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for searching elements dom.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Searching Elements Dom is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Searching Elements Dom?",
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
      "Searching Elements Dom is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying searching elements dom.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "searching-elements-dom"
    ],
    "slug": "searching-elements-dom"
  },
  {
    "title": "Basic Dom Node Properties",
    "description": "Let's get a more in-depth look at DOM nodes.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's get a more in-depth look at DOM nodes.",
          "In this chapter we'll see more into what they are and learn their most used properties."
        ]
      },
      {
        "heading": "DOM node classes",
        "paragraphs": [
          "Different DOM nodes may have different properties. For instance, an element node corresponding to tag `` has link-related properties, and the one corresponding to `` has input-related properties and so on. Text nodes are not the same as element nodes. But there are also common properties and methods between all of them, because all classes of DOM nodes form a single hierarchy.",
          "Each DOM node belongs to the corresponding built-in class.",
          "The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it.",
          "Here's the picture, explanations to follow:",
          "![](dom-class-hierarchy.svg)"
        ],
        "codeExamples": [
          {
            "title": "DOM node classes",
            "code": "alert( document.body.constructor.name ); // HTMLBodyElement",
            "explanation": "Example demonstrating dom node classes."
          },
          {
            "title": "DOM node classes",
            "code": "alert( document.body ); // [object HTMLBodyElement]",
            "explanation": "Example demonstrating dom node classes."
          }
        ],
        "bulletPoints": [
          "EventTarget -- is the root \"abstract\" class for everything.",
          "Node -- is also an \"abstract\" class, serving as a base for DOM nodes.",
          "Document, for historical reasons often inherited by `HTMLDocument` (though the latest spec doesn't dictate it) -- is a document as a whole.",
          "CharacterData -- an \"abstract\" class, inherited by:",
          "Text -- the class corresponding to a text inside elements, e.g. `Hello` in `Hello`."
        ]
      },
      {
        "heading": "The \"nodeType\" property",
        "paragraphs": [
          "The `nodeType` property provides one more, \"old-fashioned\" way to get the \"type\" of a DOM node.",
          "It has a numeric value:",
          "For instance:",
          "In modern scripts, we can use `instanceof` and other class-based tests to see the node type, but sometimes `nodeType` may be simpler. We can only read `nodeType`, not change it."
        ],
        "codeExamples": [
          {
            "title": "The \"nodeType\" property",
            "code": "<body>\n  <script>\n  let elem = document.body;\n\n  // let's examine: what type of node is in elem?\n  alert(elem.nodeType); // 1 => element\n\n  // and its first child is...\n  alert(elem.firstChild.nodeType); // 3 => text\n\n  // for the document object, the type is 9\n  alert( document.nodeType ); // 9\n  </script>\n</body>",
            "explanation": "Example demonstrating the \"nodetype\" property."
          }
        ],
        "bulletPoints": [
          "`elem.nodeType == 1` for element nodes,",
          "`elem.nodeType == 3` for text nodes,",
          "`elem.nodeType == 9` for the document object,",
          "there are few other values in the specification."
        ]
      },
      {
        "heading": "Tag: nodeName and tagName",
        "paragraphs": [
          "Given a DOM node, we can read its tag name from `nodeName` or `tagName` properties:",
          "For instance:",
          "Is there any difference between `tagName` and `nodeName`?",
          "Sure, the difference is reflected in their names, but is indeed a bit subtle.",
          "In other words, `tagName` is only supported by element nodes (as it originates from `Element` class), while `nodeName` can say something about other node types."
        ],
        "codeExamples": [
          {
            "title": "Tag: nodeName and tagName",
            "code": "alert( document.body.nodeName ); // BODY\nalert( document.body.tagName ); // BODY",
            "explanation": "Example demonstrating tag: nodename and tagname."
          },
          {
            "title": "Tag: nodeName and tagName",
            "code": "<body><!-- comment -->\n\n  <script>\n    // for comment\n    alert( document.body.firstChild.tagName ); // undefined (not an element)\n    alert( document.body.firstChild.nodeName ); // #comment\n\n    // for document\n    alert( document.tagName ); // undefined (not an element)\n    alert( document.nodeName ); // #document\n  </script>\n</body>",
            "explanation": "Example demonstrating tag: nodename and tagname."
          }
        ],
        "bulletPoints": [
          "The `tagName` property exists only for `Element` nodes.",
          "The `nodeName` is defined for any `Node`:",
          "for elements it means the same as `tagName`.",
          "for other node types (text, comment, etc.) it has a string with the node type."
        ]
      },
      {
        "heading": "innerHTML: the contents",
        "paragraphs": [
          "The innerHTML property allows to get the HTML inside the element as a string.",
          "We can also modify it. So it's one of the most powerful ways to change the page.",
          "The example shows the contents of `document.body` and then replaces it completely:",
          "We can try to insert invalid HTML, the browser will fix our errors:"
        ],
        "codeExamples": [
          {
            "title": "innerHTML: the contents",
            "code": "<body>\n  <p>A paragraph</p>\n  <div>A div</div>\n\n  <script>\n    alert( document.body.innerHTML ); // read the current contents\n    document.body.innerHTML = 'The new BODY!'; // replace it\n  </script>\n\n</body>",
            "explanation": "Example demonstrating innerhtml: the contents."
          },
          {
            "title": "innerHTML: the contents",
            "code": "<body>\n\n  <script>\n    document.body.innerHTML = '<b>test'; // forgot to close the tag\n    alert( document.body.innerHTML ); // <b>test</b> (fixed)\n  </script>\n\n</body>",
            "explanation": "Example demonstrating innerhtml: the contents."
          }
        ]
      },
      {
        "heading": "Beware: \"innerHTML+=\" does a full overwrite",
        "paragraphs": [
          "We can append HTML to an element by using `elem.innerHTML+=\"more html\"`.",
          "Like this:",
          "But we should be very careful about doing it, because what's going on is *not* an addition, but a full overwrite.",
          "Technically, these two lines do the same:",
          "In other words, `innerHTML+=` does this:"
        ],
        "codeExamples": [
          {
            "title": "Beware: \"innerHTML+=\" does a full overwrite",
            "code": "chatDiv.innerHTML += \"<div>Hello<img src='smile.gif'/> !</div>\";\nchatDiv.innerHTML += \"How goes?\";",
            "explanation": "Example demonstrating beware: \"innerhtml+=\" does a full overwrite."
          },
          {
            "title": "Beware: \"innerHTML+=\" does a full overwrite",
            "code": "elem.innerHTML += \"...\";\n// is a shorter way to write:\n*!*\nelem.innerHTML = elem.innerHTML + \"...\"\n*/!*",
            "explanation": "Example demonstrating beware: \"innerhtml+=\" does a full overwrite."
          }
        ]
      },
      {
        "heading": "outerHTML: full HTML of the element",
        "paragraphs": [
          "The `outerHTML` property contains the full HTML of the element. That's like `innerHTML` plus the element itself.",
          "Here's an example:",
          "**Beware: unlike `innerHTML`, writing to `outerHTML` does not change the element. Instead, it replaces it in the DOM.**",
          "Yeah, sounds strange, and strange it is, that's why we make a separate note about it here. Take a look.",
          "Consider the example:"
        ],
        "codeExamples": [
          {
            "title": "outerHTML: full HTML of the element",
            "code": "<div id=\"elem\">Hello <b>World</b></div>\n\n<script>\n  alert(elem.outerHTML); // <div id=\"elem\">Hello <b>World</b></div>\n</script>",
            "explanation": "Example demonstrating outerhtml: full html of the element."
          },
          {
            "title": "outerHTML: full HTML of the element",
            "code": "<div>Hello, world!</div>\n\n<script>\n  let div = document.querySelector('div');\n\n*!*\n  // replace div.outerHTML with <p>...</p>\n*/!*\n  div.outerHTML = '<p>A new element</p>'; // (*)\n\n*!*\n  // Wow! 'div' is still the same!\n*/!*\n  alert(div.outerHTML); // <div>Hello, world!</div> (**)\n</script>",
            "explanation": "Example demonstrating outerhtml: full html of the element."
          }
        ],
        "bulletPoints": [
          "`div` was removed from the document.",
          "Another piece of HTML `A new element` was inserted in its place.",
          "`div` still has its old value. The new HTML wasn't saved to any variable."
        ]
      },
      {
        "heading": "nodeValue/data: text node content",
        "paragraphs": [
          "The `innerHTML` property is only valid for element nodes.",
          "Other node types, such as text nodes, have their counterpart: `nodeValue` and `data` properties. These two are almost the same for practical use, there are only minor specification differences. So we'll use `data`, because it's shorter.",
          "An example of reading the content of a text node and a comment:",
          "For text nodes we can imagine a reason to read or modify them, but why comments?",
          "Sometimes developers embed information or template instructions into HTML in them, like this:"
        ],
        "codeExamples": [
          {
            "title": "nodeValue/data: text node content",
            "code": "<body>\n  Hello\n  <!-- Comment -->\n  <script>\n    let text = document.body.firstChild;\n*!*\n    alert(text.data); // Hello\n*/!*\n\n    let comment = text.nextSibling;\n*!*\n    alert(comment.data); // Comment\n*/!*\n  </script>\n</body>",
            "explanation": "Example demonstrating nodevalue/data: text node content."
          },
          {
            "title": "nodeValue/data: text node content",
            "code": "<!-- if isAdmin -->\n  <div>Welcome, Admin!</div>\n<!-- /if -->",
            "explanation": "Example demonstrating nodevalue/data: text node content."
          }
        ]
      },
      {
        "heading": "textContent: pure text",
        "paragraphs": [
          "The `textContent` provides access to the *text* inside the element: only text, minus all ``.",
          "For instance:",
          "As we can see, only text is returned, as if all `` were cut out, but the text in them remained.",
          "In practice, reading such text is rarely needed.",
          "**Writing to `textContent` is much more useful, because it allows to write text the \"safe way\".**"
        ],
        "codeExamples": [
          {
            "title": "textContent: pure text",
            "code": "<div id=\"news\">\n  <h1>Headline!</h1>\n  <p>Martians attack people!</p>\n</div>\n\n<script>\n  // Headline! Martians attack people!\n  alert(news.textContent);\n</script>",
            "explanation": "Example demonstrating textcontent: pure text."
          },
          {
            "title": "textContent: pure text",
            "code": "<div id=\"elem1\"></div>\n<div id=\"elem2\"></div>\n\n<script>\n  let name = prompt(\"What's your name?\", \"<b>Winnie-the-Pooh!</b>\");\n\n  elem1.innerHTML = name;\n  elem2.textContent = name;\n</script>",
            "explanation": "Example demonstrating textcontent: pure text."
          }
        ],
        "bulletPoints": [
          "With `innerHTML` we'll have it inserted \"as HTML\", with all HTML tags.",
          "With `textContent` we'll have it inserted \"as text\", all symbols are treated literally."
        ]
      },
      {
        "heading": "The \"hidden\" property",
        "paragraphs": [
          "The \"hidden\" attribute and the DOM property specifies whether the element is visible or not.",
          "We can use it in HTML or assign it using JavaScript, like this:",
          "Technically, `hidden` works the same as `style=\"display:none\"`. But it's shorter to write.",
          "Here's a blinking element:"
        ],
        "codeExamples": [
          {
            "title": "The \"hidden\" property",
            "code": "<div>Both divs below are hidden</div>\n\n<div hidden>With the attribute \"hidden\"</div>\n\n<div id=\"elem\">JavaScript assigned the property \"hidden\"</div>\n\n<script>\n  elem.hidden = true;\n</script>",
            "explanation": "Example demonstrating the \"hidden\" property."
          },
          {
            "title": "The \"hidden\" property",
            "code": "<div id=\"elem\">A blinking element</div>\n\n<script>\n  setInterval(() => elem.hidden = !elem.hidden, 1000);\n</script>",
            "explanation": "Example demonstrating the \"hidden\" property."
          }
        ]
      },
      {
        "heading": "More properties",
        "paragraphs": [
          "DOM elements also have additional properties, in particular those that depend on the class:",
          "For instance:",
          "Most standard HTML attributes have the corresponding DOM property, and we can access it like that.",
          "If we want to know the full list of supported properties for a given class, we can find them in the specification. For instance, `HTMLInputElement` is documented at .",
          "Or if we'd like to get them fast or are interested in a concrete browser specification -- we can always output the element using `console.dir(elem)` and read the properties. Or explore \"DOM properties\" in the Elements tab of the browser developer tools."
        ],
        "codeExamples": [
          {
            "title": "More properties",
            "code": "<input type=\"text\" id=\"elem\" value=\"value\">\n\n<script>\n  alert(elem.type); // \"text\"\n  alert(elem.id); // \"elem\"\n  alert(elem.value); // value\n</script>",
            "explanation": "Example demonstrating more properties."
          }
        ],
        "bulletPoints": [
          "`value` -- the value for ``, `` and `` (`HTMLInputElement`, `HTMLSelectElement`...).",
          "`href` -- the \"href\" for `` (`HTMLAnchorElement`).",
          "`id` -- the value of \"id\" attribute, for all elements (`HTMLElement`).",
          "...and much more..."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Each DOM node belongs to a certain class. The classes form a hierarchy. The full set of properties and methods come as the result of inheritance.",
          "Main DOM node properties are:",
          "`nodeType`",
          ": We can use it to see if a node is a text or an element node. It has a numeric value: `1` for elements,`3` for text nodes, and a few others for other node types. Read-only.",
          "`nodeName/tagName`"
        ]
      }
    ],
    "exercises": [
      {
        "title": "What's in the nodeType?",
        "description": "What does the script show? ```html alert(document.body.lastChild.nodeType); ```",
        "starterCode": "<html>\n\n<body>\n  <script>\n    alert(document.body.lastChild.nodeType);\n  </script>\n</body>\n\n</html>",
        "solution": "<html>\n\n<body>\n  <script>\n    alert(document.body.lastChild.nodeType);\n  </script>\n</body>\n\n</html>",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Count descendants",
        "description": "There's a tree structured as nested `ul/li`. Write the code that for each `` shows: 1. What's the text inside it (without the subtree) 2. The number of nested `` -- all descendants, including the deeply nested ones. [demo src=\"solution\"]",
        "starterCode": "// Write your code here\n",
        "solution": "for (let li of document.querySelectorAll('li')) {\n  ...\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Tag in comment",
        "description": "What does this code show? ```html let body = document.body; body.innerHTML = \"<!--\" + body.tagName + \"-->\"; alert( body.firstChild.data ); // what's here? ```",
        "starterCode": "<script>\n  let body = document.body;\n\n  body.innerHTML = \"<!--\" + body.tagName + \"-->\";\n\n  alert( body.firstChild.data ); // what's here?\n</script>",
        "solution": "<script>\n  let body = document.body;\n\n  body.innerHTML = \"<!--\" + body.tagName + \"-->\";\n\n  alert( body.firstChild.data ); // what's here?\n</script>",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Basic Dom Node Properties in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for basic dom node properties.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Basic Dom Node Properties is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Basic Dom Node Properties?",
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
      "Basic Dom Node Properties is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying basic dom node properties.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "basic-dom-node-properties"
    ],
    "slug": "basic-dom-node-properties"
  },
  {
    "title": "Dom Attributes And Properties",
    "description": "When the browser loads the page, it \"reads\" (another word: \"parses\") the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically beco...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "When the browser loads the page, it \"reads\" (another word: \"parses\") the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.",
          "For instance, if the tag is ``, then the DOM object has `body.id=\"page\"`.",
          "But the attribute-property mapping is not one-to-one! In this chapter we'll pay attention to separate these two notions, to see how to work with them, when they are the same, and when they are different."
        ]
      },
      {
        "heading": "DOM properties",
        "paragraphs": [
          "We've already seen built-in DOM properties. There are a lot. But technically no one limits us, and if there aren't enough, we can add our own.",
          "DOM nodes are regular JavaScript objects. We can alter them.",
          "For instance, let's create a new property in `document.body`:",
          "We can add a method as well:",
          "We can also modify built-in prototypes like `Element.prototype` and add new methods to all elements:"
        ],
        "codeExamples": [
          {
            "title": "DOM properties",
            "code": "document.body.myData = {\n  name: 'Caesar',\n  title: 'Imperator'\n};\n\nalert(document.body.myData.title); // Imperator",
            "explanation": "Example demonstrating dom properties."
          },
          {
            "title": "DOM properties",
            "code": "document.body.sayTagName = function() {\n  alert(this.tagName);\n};\n\ndocument.body.sayTagName(); // BODY (the value of \"this\" in the method is document.body)",
            "explanation": "Example demonstrating dom properties."
          }
        ],
        "bulletPoints": [
          "They can have any value.",
          "They are case-sensitive (write `elem.nodeType`, not `elem.NoDeTyPe`)."
        ]
      },
      {
        "heading": "HTML attributes",
        "paragraphs": [
          "In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes *standard* attributes and creates DOM properties from them.",
          "So when an element has `id` or another *standard* attribute, the corresponding property gets created. But that doesn't happen if the attribute is non-standard.",
          "For instance:",
          "Please note that a standard attribute for one element can be unknown for another one. For instance, `\"type\"` is standard for `` (HTMLInputElement), but not for `` (HTMLBodyElement). Standard attributes are described in the specification for the corresponding element class.",
          "Here we can see it:"
        ],
        "codeExamples": [
          {
            "title": "HTML attributes",
            "code": "<body id=\"test\" something=\"non-standard\">\n  <script>\n    alert(document.body.id); // test\n*!*\n    // non-standard attribute does not yield a property\n    alert(document.body.something); // undefined\n*/!*\n  </script>\n</body>",
            "explanation": "Example demonstrating html attributes."
          },
          {
            "title": "HTML attributes",
            "code": "<body id=\"body\" type=\"...\">\n  <input id=\"input\" type=\"text\">\n  <script>\n    alert(input.type); // text\n*!*\n    alert(body.type); // undefined: DOM property not created, because it's non-standard\n*/!*\n  </script>\n</body>",
            "explanation": "Example demonstrating html attributes."
          }
        ],
        "bulletPoints": [
          "`elem.hasAttribute(name)` -- checks for existence.",
          "`elem.getAttribute(name)` -- gets the value.",
          "`elem.setAttribute(name, value)` -- sets the value.",
          "`elem.removeAttribute(name)` -- removes the attribute.",
          "Their name is case-insensitive (`id` is same as `ID`)."
        ]
      },
      {
        "heading": "Property-attribute synchronization",
        "paragraphs": [
          "When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions) vice versa.",
          "In the example below `id` is modified as an attribute, and we can see the property changed too. And then the same backwards:",
          "But there are exclusions, for instance `input.value` synchronizes only from attribute -> property, but not back:",
          "In the example above:",
          "That \"feature\" may actually come in handy, because the user actions may lead to `value` changes, and then after them, if we want to recover the \"original\" value from HTML, it's in the attribute."
        ],
        "codeExamples": [
          {
            "title": "Property-attribute synchronization",
            "code": "<input>\n\n<script>\n  let input = document.querySelector('input');\n\n  // attribute => property\n  input.setAttribute('id', 'id');\n  alert(input.id); // id (updated)\n\n  // property => attribute\n  input.id = 'newId';\n  alert(input.getAttribute('id')); // newId (updated)\n</script>",
            "explanation": "Example demonstrating property-attribute synchronization."
          },
          {
            "title": "Property-attribute synchronization",
            "code": "<input>\n\n<script>\n  let input = document.querySelector('input');\n\n  // attribute => property\n  input.setAttribute('value', 'text');\n  alert(input.value); // text\n\n*!*\n  // NOT property => attribute\n  input.value = 'newValue';\n  alert(input.getAttribute('value')); // text (not updated!)\n*/!*\n</script>",
            "explanation": "Example demonstrating property-attribute synchronization."
          }
        ],
        "bulletPoints": [
          "Changing the attribute `value` updates the property.",
          "But the property change does not affect the attribute."
        ]
      },
      {
        "heading": "DOM properties are typed",
        "paragraphs": [
          "DOM properties are not always strings. For instance, the `input.checked` property (for checkboxes) is a boolean:",
          "There are other examples. The `style` attribute is a string, but the `style` property is an object:",
          "Most properties are strings though.",
          "Quite rarely, even if a DOM property type is a string, it may differ from the attribute. For instance, the `href` DOM property is always a *full* URL, even if the attribute contains a relative URL or just a `#hash`.",
          "Here's an example:"
        ],
        "codeExamples": [
          {
            "title": "DOM properties are typed",
            "code": "<input id=\"input\" type=\"checkbox\" checked> checkbox\n\n<script>\n  alert(input.getAttribute('checked')); // the attribute value is: empty string\n  alert(input.checked); // the property value is: true\n</script>",
            "explanation": "Example demonstrating dom properties are typed."
          },
          {
            "title": "DOM properties are typed",
            "code": "<div id=\"div\" style=\"color:red;font-size:120%\">Hello</div>\n\n<script>\n  // string\n  alert(div.getAttribute('style')); // color:red;font-size:120%\n\n  // object\n  alert(div.style); // [object CSSStyleDeclaration]\n  alert(div.style.color); // red\n</script>",
            "explanation": "Example demonstrating dom properties are typed."
          }
        ]
      },
      {
        "heading": "Non-standard attributes, dataset",
        "paragraphs": [
          "When writing HTML, we use a lot of standard attributes. But what about non-standard, custom ones? First, let's see whether they are useful or not? What for?",
          "Sometimes non-standard attributes are used to pass custom data from HTML to JavaScript, or to \"mark\" HTML-elements for JavaScript.",
          "Like this:",
          "Also they can be used to style an element.",
          "For instance, here for the order state the attribute `order-state` is used:"
        ],
        "codeExamples": [
          {
            "title": "Non-standard attributes, dataset",
            "code": "<!-- mark the div to show \"name\" here -->\n<div *!*show-info=\"name\"*/!*></div>\n<!-- and age here -->\n<div *!*show-info=\"age\"*/!*></div>\n\n<script>\n  // the code finds an element with the mark and shows what's requested\n  let user = {\n    name: \"Pete\",\n    age: 25\n  };\n\n  for(let div of document.querySelectorAll('[show-info]')) {\n    // insert the corresponding info into the field\n    let field = div.getAttribute('show-info');\n    div.innerHTML = user[field]; // first Pete into \"name\", then 25 into \"age\"\n  }\n</script>",
            "explanation": "Example demonstrating non-standard attributes, dataset."
          },
          {
            "title": "Non-standard attributes, dataset",
            "code": "<style>\n  /* styles rely on the custom attribute \"order-state\" */\n  .order[order-state=\"new\"] {\n    color: green;\n  }\n\n  .order[order-state=\"pending\"] {\n    color: blue;\n  }\n\n  .order[order-state=\"canceled\"] {\n    color: red;\n  }\n</style>\n\n<div class=\"order\" order-state=\"new\">\n  A new order.\n</div>\n\n<div class=\"order\" order-state=\"pending\">\n  A pending order.\n</div>\n\n<div class=\"order\" order-state=\"canceled\">\n  A canceled order.\n</div>",
            "explanation": "Example demonstrating non-standard attributes, dataset."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "A small comparison:",
          "| | Properties | Attributes |",
          "|------------|------------|------------|",
          "|Type|Any value, standard properties have types described in the spec|A string|",
          "|Name|Name is case-sensitive|Name is not case-sensitive|"
        ],
        "bulletPoints": [
          "Attributes -- is what's written in HTML.",
          "Properties -- is what's in DOM objects.",
          "`elem.hasAttribute(name)` -- to check for existence.",
          "`elem.getAttribute(name)` -- to get the value.",
          "`elem.setAttribute(name, value)` -- to set the value."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Get the attribute",
        "description": "Write the code to select the element with `data-widget-name` attribute from the document and to read its value. ```html run <!DOCTYPE html> Choose the genre /* your code */ ```",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Make external links orange",
        "description": "Make all external links orange by altering their `style` property. A link is external if: - Its `href` has `://` in it - But doesn't start with `http://internal.com`. Example: ```html run the list http://google.com /tutorial.html local/path ftp://ftp.com/my.zip http://nodejs.org http://internal.com/",
        "starterCode": "// Write your code here\n",
        "solution": "let links = document.querySelectorAll('a');\n\nfor (let link of links) {\n*!*\n  let href = link.getAttribute('href');\n*/!*\n  if (!href) continue; // no attribute\n\n  if (!href.includes('://')) continue; // no protocol\n\n  if (href.startsWith('http://internal.com')) continue; // internal\n\n  link.style.color = 'orange';\n}",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Dom Attributes And Properties in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for dom attributes and properties.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Dom Attributes And Properties is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Dom Attributes And Properties?",
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
      "Dom Attributes And Properties is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying dom attributes and properties.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "dom-attributes-and-properties"
    ],
    "slug": "dom-attributes-and-properties"
  },
  {
    "title": "Modifying Document",
    "description": "DOM modification is the key to creating \"live\" pages.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "DOM modification is the key to creating \"live\" pages.",
          "Here we'll see how to create new elements \"on the fly\" and modify the existing page content."
        ]
      },
      {
        "heading": "Example: show a message",
        "paragraphs": [
          "Let's demonstrate using an example. We'll add a message on the page that looks nicer than `alert`.",
          "Here's how it will look:",
          "That was the HTML example. Now let's create the same `div` with JavaScript (assuming that the styles are in the HTML/CSS already)."
        ],
        "codeExamples": [
          {
            "title": "Example: show a message",
            "code": "<style>\n.alert {\n  padding: 15px;\n  border: 1px solid #d6e9c6;\n  border-radius: 4px;\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n</style>\n\n*!*\n<div class=\"alert\">\n  <strong>Hi there!</strong> You've read an important message.\n</div>\n*/!*",
            "explanation": "Example demonstrating example: show a message."
          }
        ]
      },
      {
        "heading": "Creating an element",
        "paragraphs": [
          "To create DOM nodes, there are two methods:",
          "`document.createElement(tag)`",
          ": Creates a new *element node* with the given tag:",
          "let div = document.createElement('div');",
          "`document.createTextNode(text)`"
        ]
      },
      {
        "heading": "Creating the message",
        "paragraphs": [
          "Creating the message div takes 3 steps:",
          "We've created the element. But as of now it's only in a variable named `div`, not in the page yet. So we can't see it."
        ],
        "codeExamples": [
          {
            "title": "Creating the message",
            "code": "// 1. Create <div> element\nlet div = document.createElement('div');\n\n// 2. Set its class to \"alert\"\ndiv.className = \"alert\";\n\n// 3. Fill it with the content\ndiv.innerHTML = \"<strong>Hi there!</strong> You've read an important message.\";",
            "explanation": "Example demonstrating creating the message."
          }
        ]
      },
      {
        "heading": "Insertion methods",
        "paragraphs": [
          "To make the `div` show up, we need to insert it somewhere into `document`. For instance, into `` element, referenced by `document.body`.",
          "There's a special method `append` for that: `document.body.append(div)`.",
          "Here's the full code:",
          "Here we called `append` on `document.body`, but we can call `append` method on any other element, to put another element into it. For instance, we can append something to `` by calling `div.append(anotherElement)`.",
          "Here are more insertion methods, they specify different places where to insert:"
        ],
        "codeExamples": [
          {
            "title": "Insertion methods",
            "code": "<style>\n.alert {\n  padding: 15px;\n  border: 1px solid #d6e9c6;\n  border-radius: 4px;\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n</style>\n\n<script>\n  let div = document.createElement('div');\n  div.className = \"alert\";\n  div.innerHTML = \"<strong>Hi there!</strong> You've read an important message.\";\n\n*!*\n  document.body.append(div);\n*/!*\n</script>",
            "explanation": "Example demonstrating insertion methods."
          },
          {
            "title": "Insertion methods",
            "code": "<ol id=\"ol\">\n  <li>0</li>\n  <li>1</li>\n  <li>2</li>\n</ol>\n\n<script>\n  ol.before('before'); // insert string \"before\" before <ol>\n  ol.after('after'); // insert string \"after\" after <ol>\n\n  let liFirst = document.createElement('li');\n  liFirst.innerHTML = 'prepend';\n  ol.prepend(liFirst); // insert liFirst at the beginning of <ol>\n\n  let liLast = document.createElement('li');\n  liLast.innerHTML = 'append';\n  ol.append(liLast); // insert liLast at the end of <ol>\n</script>",
            "explanation": "Example demonstrating insertion methods."
          }
        ],
        "bulletPoints": [
          "`node.append(...nodes or strings)` -- append nodes or strings *at the end* of `node`,",
          "`node.prepend(...nodes or strings)` -- insert nodes or strings *at the beginning* of `node`,",
          "`node.before(...nodes or strings)` \u2013- insert nodes or strings *before* `node`,",
          "`node.after(...nodes or strings)` \u2013- insert nodes or strings *after* `node`,",
          "`node.replaceWith(...nodes or strings)` \u2013- replaces `node` with the given nodes or strings."
        ]
      },
      {
        "heading": "insertAdjacentHTML/Text/Element",
        "paragraphs": [
          "For that we can use another, pretty versatile method: `elem.insertAdjacentHTML(where, html)`.",
          "The first parameter is a code word, specifying where to insert relative to `elem`. Must be one of the following:",
          "The second parameter is an HTML string, that is inserted \"as HTML\".",
          "For instance:",
          "...Would lead to:"
        ],
        "codeExamples": [
          {
            "title": "insertAdjacentHTML/Text/Element",
            "code": "<div id=\"div\"></div>\n<script>\n  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');\n  div.insertAdjacentHTML('afterend', '<p>Bye</p>');\n</script>",
            "explanation": "Example demonstrating insertadjacenthtml/text/element."
          },
          {
            "title": "insertAdjacentHTML/Text/Element",
            "code": "<p>Hello</p>\n<div id=\"div\"></div>\n<p>Bye</p>",
            "explanation": "Example demonstrating insertadjacenthtml/text/element."
          }
        ],
        "bulletPoints": [
          "`\"beforebegin\"` -- insert `html` immediately before `elem`,",
          "`\"afterbegin\"` -- insert `html` into `elem`, at the beginning,",
          "`\"beforeend\"` -- insert `html` into `elem`, at the end,",
          "`\"afterend\"` -- insert `html` immediately after `elem`.",
          "`elem.insertAdjacentText(where, text)` -- the same syntax, but a string of `text` is inserted \"as text\" instead of HTML,"
        ]
      },
      {
        "heading": "Node removal",
        "paragraphs": [
          "To remove a node, there's a method `node.remove()`.",
          "Let's make our message disappear after a second:",
          "Please note: if we want to *move* an element to another place -- there's no need to remove it from the old one.",
          "**All insertion methods automatically remove the node from the old place.**",
          "For instance, let's swap elements:"
        ],
        "codeExamples": [
          {
            "title": "Node removal",
            "code": "<style>\n.alert {\n  padding: 15px;\n  border: 1px solid #d6e9c6;\n  border-radius: 4px;\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n</style>\n\n<script>\n  let div = document.createElement('div');\n  div.className = \"alert\";\n  div.innerHTML = \"<strong>Hi there!</strong> You've read an important message.\";\n\n  document.body.append(div);\n*!*\n  setTimeout(() => div.remove(), 1000);\n*/!*\n</script>",
            "explanation": "Example demonstrating node removal."
          },
          {
            "title": "Node removal",
            "code": "<div id=\"first\">First</div>\n<div id=\"second\">Second</div>\n<script>\n  // no need to call remove\n  second.after(first); // take #second and after it insert #first\n</script>",
            "explanation": "Example demonstrating node removal."
          }
        ]
      },
      {
        "heading": "Cloning nodes: cloneNode",
        "paragraphs": [
          "How to insert one more similar message?",
          "We could make a function and put the code there. But the alternative way would be to *clone* the existing `div` and modify the text inside it (if needed).",
          "Sometimes when we have a big element, that may be faster and simpler.",
          "An example of copying the message:"
        ],
        "codeExamples": [
          {
            "title": "Cloning nodes: cloneNode",
            "code": "<style>\n.alert {\n  padding: 15px;\n  border: 1px solid #d6e9c6;\n  border-radius: 4px;\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n</style>\n\n<div class=\"alert\" id=\"div\">\n  <strong>Hi there!</strong> You've read an important message.\n</div>\n\n<script>\n*!*\n  let div2 = div.cloneNode(true); // clone the message\n  div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone\n\n  div.after(div2); // show the clone after the existing div\n*/!*\n</script>",
            "explanation": "Example demonstrating cloning nodes: clonenode."
          }
        ],
        "bulletPoints": [
          "The call `elem.cloneNode(true)` creates a \"deep\" clone of the element -- with all attributes and subelements. If we call `elem.cloneNode(false)`, then the clone is made without child elements."
        ]
      },
      {
        "heading": "DocumentFragment [#document-fragment]",
        "paragraphs": [
          "`DocumentFragment` is a special DOM node that serves as a wrapper to pass around lists of nodes.",
          "We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.",
          "For example, `getListContent` below generates a fragment with `` items, that are later inserted into ``:",
          "Please note, at the last line `(*)` we append `DocumentFragment`, but it \"blends in\", so the resulting structure will be:",
          "`DocumentFragment` is rarely used explicitly. Why append to a special kind of node, if we can return an array of nodes instead? Rewritten example:"
        ],
        "codeExamples": [
          {
            "title": "DocumentFragment [#document-fragment]",
            "code": "<ul id=\"ul\"></ul>\n\n<script>\nfunction getListContent() {\n  let fragment = new DocumentFragment();\n\n  for(let i=1; i<=3; i++) {\n    let li = document.createElement('li');\n    li.append(i);\n    fragment.append(li);\n  }\n\n  return fragment;\n}\n\n*!*\nul.append(getListContent()); // (*)\n*/!*\n</script>",
            "explanation": "Example demonstrating documentfragment [#document-fragment]."
          },
          {
            "title": "DocumentFragment [#document-fragment]",
            "code": "<ul>\n  <li>1</li>\n  <li>2</li>\n  <li>3</li>\n</ul>",
            "explanation": "Example demonstrating documentfragment [#document-fragment]."
          }
        ]
      },
      {
        "heading": "Old-school insert/remove methods",
        "paragraphs": [
          "[old]",
          "There are also \"old school\" DOM manipulation methods, existing for historical reasons.",
          "These methods come from really ancient times. Nowadays, there's no reason to use them, as modern methods, such as `append`, `prepend`, `before`, `after`, `remove`, `replaceWith`, are more flexible.",
          "The only reason we list these methods here is that you can find them in many old scripts:",
          "`parentElem.appendChild(node)`"
        ]
      },
      {
        "heading": "A word about \"document.write\"",
        "paragraphs": [
          "There's one more, very ancient method of adding something to a web-page: `document.write`.",
          "The syntax:",
          "The call to `document.write(html)` writes the `html` into page \"right here and now\". The `html` string can be dynamically generated, so it's kind of flexible. We can use JavaScript to create a full-fledged webpage and write it.",
          "The method comes from times when there was no DOM, no standards... Really old times. It still lives, because there are scripts using it.",
          "In modern scripts we can rarely see it, because of the following important limitation:"
        ],
        "codeExamples": [
          {
            "title": "A word about \"document.write\"",
            "code": "<p>Somewhere in the page...</p>\n*!*\n<script>\n  document.write('<b>Hello from JS</b>');\n</script>\n*/!*\n<p>The end</p>",
            "explanation": "Example demonstrating a word about \"document.write\"."
          },
          {
            "title": "A word about \"document.write\"",
            "code": "<p>After one second the contents of this page will be replaced...</p>\n*!*\n<script>\n  // document.write after 1 second\n  // that's after the page loaded, so it erases the existing content\n  setTimeout(() => document.write('<b>...By this.</b>'), 1000);\n</script>\n*/!*",
            "explanation": "Example demonstrating a word about \"document.write\"."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Text strings are inserted \"as text\".",
          "All these methods return `node`.",
          "Also there are similar methods, `elem.insertAdjacentText` and `elem.insertAdjacentElement`, that insert text strings and elements, but they are rarely used.",
          "After the page is loaded such a call erases the document. Mostly seen in old scripts."
        ],
        "bulletPoints": [
          "Methods to create new nodes:",
          "`document.createElement(tag)` -- creates an element with the given tag,",
          "`document.createTextNode(value)` -- creates a text node (rarely used),",
          "`elem.cloneNode(deep)` -- clones the element, if `deep==true` then with all descendants.",
          "Insertion and removal:"
        ]
      }
    ],
    "exercises": [
      {
        "title": "createTextNode vs innerHTML vs textContent",
        "description": "We have an empty DOM element `elem` and a string `text`. Which of these 3 commands will do exactly the same? 1. `elem.append(document.createTextNode(text))` 2. `elem.innerHTML = text` 3. `elem.textContent = text`",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Colored clock with setInterval",
        "description": "Create a colored clock like here: [iframe src=\"solution\" height=60] Use HTML/CSS for the styling, JavaScript only updates time in elements.",
        "starterCode": "// Write your code here\n",
        "solution": "<div id=\"clock\">\n  <span class=\"hour\">hh</span>:<span class=\"min\">mm</span>:<span class=\"sec\">ss</span>\n</div>",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Insert the HTML in the list",
        "description": "Write the code to insert `23` between two `` here: ```html 1 4 ```",
        "starterCode": "<ul id=\"ul\">\n  <li id=\"one\">1</li>\n  <li id=\"two\">4</li>\n</ul>",
        "solution": "one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Modifying Document in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for modifying document.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Modifying Document is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Modifying Document?",
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
      "Modifying Document is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying modifying document.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "modifying-document"
    ],
    "slug": "modifying-document"
  },
  {
    "title": "Styles And Classes",
    "description": "Before we get into JavaScript's ways of dealing with styles and classes -- here's an important rule. Hopefully it's obvious enough, but we still have to mention it.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Before we get into JavaScript's ways of dealing with styles and classes -- here's an important rule. Hopefully it's obvious enough, but we still have to mention it.",
          "There are generally two ways to style an element:",
          "1. Create a class in CSS and add it: ``",
          "2. Write properties directly into `style`: ``.",
          "JavaScript can modify both classes and `style` properties."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let top = /* complex calculations */;\nlet left = /* complex calculations */;\n\nelem.style.left = left; // e.g '123px', calculated at run-time\nelem.style.top = top; // e.g '456px'",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "className and classList",
        "paragraphs": [
          "Changing a class is one of the most often used actions in scripts.",
          "In the ancient time, there was a limitation in JavaScript: a reserved word like `\"class\"` could not be an object property. That limitation does not exist now, but at that time it was impossible to have a `\"class\"` property, like `elem.class`.",
          "So for classes the similar-looking property `\"className\"` was introduced: the `elem.className` corresponds to the `\"class\"` attribute.",
          "For instance:",
          "If we assign something to `elem.className`, it replaces the whole string of classes. Sometimes that's what we need, but often we want to add/remove a single class."
        ],
        "codeExamples": [
          {
            "title": "className and classList",
            "code": "<body class=\"main page\">\n  <script>\n    alert(document.body.className); // main page\n  </script>\n</body>",
            "explanation": "Example demonstrating classname and classlist."
          },
          {
            "title": "className and classList",
            "code": "<body class=\"main page\">\n  <script>\n*!*\n    // add a class\n    document.body.classList.add('article');\n*/!*\n\n    alert(document.body.className); // main page article\n  </script>\n</body>",
            "explanation": "Example demonstrating classname and classlist."
          }
        ],
        "bulletPoints": [
          "`elem.classList.add/remove(\"class\")` -- adds/removes the class.",
          "`elem.classList.toggle(\"class\")` -- adds the class if it doesn't exist, otherwise removes it.",
          "`elem.classList.contains(\"class\")` -- checks for the given class, returns `true/false`."
        ]
      },
      {
        "heading": "Element style",
        "paragraphs": [
          "The property `elem.style` is an object that corresponds to what's written in the `\"style\"` attribute. Setting `elem.style.width=\"100px\"` works the same as if we had in the attribute `style` a string `width:100px`.",
          "For multi-word property the camelCase is used:",
          "For instance:",
          "button.style.MozBorderRadius = '5px';",
          "button.style.WebkitBorderRadius = '5px';"
        ],
        "codeExamples": [
          {
            "title": "Element style",
            "code": "background-color  => elem.style.backgroundColor\nz-index           => elem.style.zIndex\nborder-left-width => elem.style.borderLeftWidth",
            "explanation": "Example demonstrating element style."
          },
          {
            "title": "Element style",
            "code": "document.body.style.backgroundColor = prompt('background color?', 'green');",
            "explanation": "Example demonstrating element style."
          }
        ]
      },
      {
        "heading": "Resetting the style property",
        "paragraphs": [
          "Sometimes we want to assign a style property, and later remove it.",
          "For instance, to hide an element, we can set `elem.style.display = \"none\"`.",
          "Then later we may want to remove the `style.display` as if it were not set. Instead of `delete elem.style.display` we should assign an empty string to it: `elem.style.display = \"\"`.",
          "If we set `style.display` to an empty string, then the browser applies CSS classes and its built-in styles normally, as if there were no such `style.display` property at all.",
          "Also there is a special method for that, `elem.style.removeProperty('style property')`. So, We can remove a property like this:"
        ],
        "codeExamples": [
          {
            "title": "Resetting the style property",
            "code": "// if we run this code, the <body> will blink\ndocument.body.style.display = \"none\"; // hide\n\nsetTimeout(() => document.body.style.display = \"\", 1000); // back to normal",
            "explanation": "Example demonstrating resetting the style property."
          },
          {
            "title": "Resetting the style property",
            "code": "document.body.style.background = 'red'; //set background to red\n\nsetTimeout(() => document.body.style.removeProperty('background'), 1000); // remove background after 1 second",
            "explanation": "Example demonstrating resetting the style property."
          }
        ]
      },
      {
        "heading": "Mind the units",
        "paragraphs": [
          "Don't forget to add CSS units to values.",
          "For instance, we should not set `elem.style.top` to `10`, but rather to `10px`. Otherwise it wouldn't work:",
          "Please note: the browser \"unpacks\" the property `style.margin` in the last lines and infers `style.marginLeft` and `style.marginTop` from it."
        ],
        "codeExamples": [
          {
            "title": "Mind the units",
            "code": "<body>\n  <script>\n  *!*\n    // doesn't work!\n    document.body.style.margin = 20;\n    alert(document.body.style.margin); // '' (empty string, the assignment is ignored)\n  */!*\n\n    // now add the CSS unit (px) - and it works\n    document.body.style.margin = '20px';\n    alert(document.body.style.margin); // 20px\n\n    alert(document.body.style.marginTop); // 20px\n    alert(document.body.style.marginLeft); // 20px\n  </script>\n</body>",
            "explanation": "Example demonstrating mind the units."
          }
        ]
      },
      {
        "heading": "Computed styles: getComputedStyle",
        "paragraphs": [
          "So, modifying a style is easy. But how to *read* it?",
          "For instance, we want to know the size, margins, the color of an element. How to do it?",
          "**The `style` property operates only on the value of the `\"style\"` attribute, without any CSS cascade.**",
          "So we can't read anything that comes from CSS classes using `elem.style`.",
          "For instance, here `style` doesn't see the margin:"
        ],
        "codeExamples": [
          {
            "title": "Computed styles: getComputedStyle",
            "code": "<head>\n  <style> body { color: red; margin: 5px } </style>\n</head>\n<body>\n\n  The red text\n  <script>\n*!*\n    alert(document.body.style.color); // empty\n    alert(document.body.style.marginTop); // empty\n*/!*\n  </script>\n</body>",
            "explanation": "Example demonstrating computed styles: getcomputedstyle."
          },
          {
            "title": "Computed styles: getComputedStyle",
            "code": "getComputedStyle(element, [pseudo])",
            "explanation": "Example demonstrating computed styles: getcomputedstyle."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "To manage classes, there are two DOM properties:",
          "To change the styles:",
          "To read the resolved styles (with respect to all classes, after all CSS is applied and final values are calculated):"
        ],
        "bulletPoints": [
          "`className` -- the string value, good to manage the whole set of classes.",
          "`classList` -- the object with methods `add/remove/toggle/contains`, good for individual classes.",
          "The `style` property is an object with camelCased styles. Reading and writing to it has the same meaning as modifying individual properties in the `\"style\"` attribute. To see how to apply `important` and other rare stuff -- there's a list of methods at MDN.",
          "The `style.cssText` property corresponds to the whole `\"style\"` attribute, the full string of styles.",
          "The `getComputedStyle(elem, [pseudo])` returns the style-like object with them. Read-only."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a notification",
        "description": "Write a function `showNotification(options)` that creates a notification: `` with the given content. The notification should automatically disappear after 1.5 seconds. The options are: ```js // shows an element with the text \"Hello\" near the right-top of the window showNotification({ top: 10, // 10p",
        "starterCode": "// shows an element with the text \"Hello\" near the right-top of the window\nshowNotification({\n  top: 10, // 10px from the top of the window (by default 0px)\n  right: 10, // 10px from the right edge of the window (by default 0px)\n  html: \"Hello!\", // the HTML of notification\n  className: \"welcome\" // an additional class for the div (optional)\n});",
        "solution": "// shows an element with the text \"Hello\" near the right-top of the window\nshowNotification({\n  top: 10, // 10px from the top of the window (by default 0px)\n  right: 10, // 10px from the right edge of the window (by default 0px)\n  html: \"Hello!\", // the HTML of notification\n  className: \"welcome\" // an additional class for the div (optional)\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Styles And Classes in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for styles and classes.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Styles And Classes is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Styles And Classes?",
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
      "Styles And Classes is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying styles and classes.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "styles-and-classes"
    ],
    "slug": "styles-and-classes"
  },
  {
    "title": "Size And Scroll",
    "description": "There are many JavaScript properties that allow us to read information about element width, height and other geometry features.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There are many JavaScript properties that allow us to read information about element width, height and other geometry features.",
          "We often need them when moving or positioning elements in JavaScript."
        ]
      },
      {
        "heading": "Sample element",
        "paragraphs": [
          "As a sample element to demonstrate properties we'll use the one given below:",
          "It has the border, padding and scrolling. The full set of features. There are no margins, as they are not the part of the element itself, and there are no special properties for them.",
          "The element looks like this:",
          "![](metric-css.svg)",
          "You can open the document in the sandbox."
        ],
        "codeExamples": [
          {
            "title": "Sample element",
            "code": "<div id=\"example\">\n  ...Text...\n</div>\n<style>\n  #example {\n    width: 300px;\n    height: 200px;\n    border: 25px solid #E8C48F;\n    padding: 20px;\n    overflow: auto;\n  }\n</style>",
            "explanation": "Example demonstrating sample element."
          },
          {
            "title": "Sample element",
            "code": "The picture above demonstrates the most complex case when the element has a scrollbar. Some browsers (not all) reserve the space for it by taking it from the content (labeled as \"content width\" above).\n\nSo, without scrollbar the content width would be `300px`, but if the scrollbar is `16px` wide (the width may vary between devices and browsers) then only `300 - 16 = 284px` remains, and we should take it into account. That's why examples from this chapter assume that there's a scrollbar. Without it, some calculations are simpler.",
            "explanation": "Example demonstrating sample element."
          }
        ]
      },
      {
        "heading": "Geometry",
        "paragraphs": [
          "Here's the overall picture with geometry properties:",
          "![](metric-all.svg)",
          "Values of these properties are technically numbers, but these numbers are \"of pixels\", so these are pixel measurements.",
          "Let's start exploring the properties starting from the outside of the element."
        ]
      },
      {
        "heading": "offsetParent, offsetLeft/Top",
        "paragraphs": [
          "These properties are rarely needed, but still they are the \"most outer\" geometry properties, so we'll start with them.",
          "The `offsetParent` is the nearest ancestor that the browser uses for calculating coordinates during rendering.",
          "That's the nearest ancestor that is one of the following:",
          "1. CSS-positioned (`position` is `absolute`, `relative`, `fixed` or `sticky`), or",
          "2. ``, ``, or ``, or"
        ],
        "codeExamples": [
          {
            "title": "offsetParent, offsetLeft/Top",
            "code": "<main style=\"position: relative\" id=\"main\">\n  <article>\n    <div id=\"example\" style=\"position: absolute; left: 180px; top: 180px\">...</div>\n  </article>\n</main>\n<script>\n  alert(example.offsetParent.id); // main\n  alert(example.offsetLeft); // 180 (note: a number, not a string \"180px\")\n  alert(example.offsetTop); // 180\n</script>",
            "explanation": "Example demonstrating offsetparent, offsetleft/top."
          }
        ]
      },
      {
        "heading": "offsetWidth/Height",
        "paragraphs": [
          "Now let's move on to the element itself.",
          "These two properties are the simplest ones. They provide the \"outer\" width/height of the element. Or, in other words, its full size including borders.",
          "![](metric-offset-width-height.svg)",
          "For our sample element:",
          "function isHidden(elem) {"
        ],
        "codeExamples": [
          {
            "title": "offsetWidth/Height",
            "code": "Geometry properties are calculated only for displayed elements.\n\nIf an element (or any of its ancestors) has `display:none` or is not in the document, then all geometry properties are zero (or `null` for `offsetParent`).\n\nFor example, `offsetParent` is `null`, and `offsetWidth`, `offsetHeight` are `0` when we created an element, but haven't inserted it into the document yet, or it (or its ancestor) has `display:none`.\n\nWe can use this to check if an element is hidden, like this:",
            "explanation": "Example demonstrating offsetwidth/height."
          },
          {
            "title": "offsetWidth/Height",
            "code": "Please note that such `isHidden` returns `true` for elements that are on-screen, but have zero sizes.",
            "explanation": "Example demonstrating offsetwidth/height."
          }
        ],
        "bulletPoints": [
          "`offsetWidth = 390` -- the outer width, can be calculated as inner CSS-width (`300px`) plus paddings (`2 * 20px`) and borders (`2 * 25px`).",
          "`offsetHeight = 290` -- the outer height."
        ]
      },
      {
        "heading": "clientTop/Left",
        "paragraphs": [
          "Inside the element we have the borders.",
          "To measure them, there are properties `clientTop` and `clientLeft`.",
          "In our example:",
          "![](metric-client-left-top.svg)",
          "...But to be precise -- these properties are not border width/height, but rather relative coordinates of the inner side from the outer side."
        ],
        "bulletPoints": [
          "`clientLeft = 25` -- left border width",
          "`clientTop = 25` -- top border width"
        ]
      },
      {
        "heading": "clientWidth/Height",
        "paragraphs": [
          "These properties provide the size of the area inside the element borders.",
          "They include the content width together with paddings, but without the scrollbar:",
          "![](metric-client-width-height.svg)",
          "On the picture above let's first consider `clientHeight`.",
          "There's no horizontal scrollbar, so it's exactly the sum of what's inside the borders: CSS-height `200px` plus top and bottom paddings (`2 * 20px`) total `240px`."
        ]
      },
      {
        "heading": "scrollWidth/Height",
        "paragraphs": [
          "These properties are like `clientWidth/clientHeight`, but they also include the scrolled out (hidden) parts:",
          "![](metric-scroll-width-height.svg)",
          "On the picture above:",
          "We can use these properties to expand the element wide to its full width/height.",
          "Like this:"
        ],
        "codeExamples": [
          {
            "title": "scrollWidth/Height",
            "code": "// expand the element to the full content height\nelement.style.height = `${element.scrollHeight}px`;",
            "explanation": "Example demonstrating scrollwidth/height."
          },
          {
            "title": "scrollWidth/Height",
            "code": "Click the button to expand the element:\n\n<div id=\"element\" style=\"width:300px;height:200px; padding: 0;overflow: auto; border:1px solid black;\">text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</div>\n\n<button style=\"padding:0\" onclick=\"element.style.height = `${element.scrollHeight}px`\">element.style.height = `${element.scrollHeight}px`</button>",
            "explanation": "Example demonstrating scrollwidth/height."
          }
        ],
        "bulletPoints": [
          "`scrollHeight = 723` -- is the full inner height of the content area including the scrolled out parts.",
          "`scrollWidth = 324` -- is the full inner width, here we have no horizontal scroll, so it equals `clientWidth`."
        ]
      },
      {
        "heading": "scrollLeft/scrollTop",
        "paragraphs": [
          "Properties `scrollLeft/scrollTop` are the width/height of the hidden, scrolled out part of the element.",
          "On the picture below we can see `scrollHeight` and `scrollTop` for a block with a vertical scroll.",
          "![](metric-scroll-top.svg)",
          "In other words, `scrollTop` is \"how much is scrolled up\".",
          "If you click the element below, the code `elem.scrollTop += 10` executes. That makes the element content scroll `10px` down."
        ],
        "codeExamples": [
          {
            "title": "scrollLeft/scrollTop",
            "code": "Most of the geometry properties here are read-only, but `scrollLeft/scrollTop` can be changed, and the browser will scroll the element.",
            "explanation": "Example demonstrating scrollleft/scrolltop."
          },
          {
            "title": "scrollLeft/scrollTop",
            "code": "Setting `scrollTop` to `0` or a big value, such as `1e9` will make the element scroll to the very top/bottom respectively.",
            "explanation": "Example demonstrating scrollleft/scrolltop."
          }
        ]
      },
      {
        "heading": "Don't take width/height from CSS",
        "paragraphs": [
          "We've just covered geometry properties of DOM elements, that can be used to get widths, heights and calculate distances.",
          "But as we know from the chapter , we can read CSS-height and width using `getComputedStyle`.",
          "So why not to read the width of an element with `getComputedStyle`, like this?",
          "Why should we use geometry properties instead? There are two reasons:",
          "1. First, CSS `width/height` depend on another property: `box-sizing` that defines \"what is\" CSS width and height. A change in `box-sizing` for CSS purposes may break such JavaScript."
        ],
        "codeExamples": [
          {
            "title": "Don't take width/height from CSS",
            "code": "let elem = document.body;\n\nalert( getComputedStyle(elem).width ); // show CSS width for elem",
            "explanation": "Example demonstrating don't take width/height from css."
          },
          {
            "title": "Don't take width/height from CSS",
            "code": "If your browser reserves the space for a scrollbar (most browsers for Windows do), then you can test it below.\n\n[iframe src=\"cssWidthScroll\" link border=1]\n\nThe element with text has CSS `width:300px`.\n\nOn a Desktop Windows OS, Firefox, Chrome, Edge all reserve the space for the scrollbar. But  Firefox shows `300px`, while Chrome and Edge show less. That's because Firefox returns the CSS width and other browsers return the \"real\" width.",
            "explanation": "Example demonstrating don't take width/height from css."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Elements have the following geometry properties:",
          "All properties are read-only except `scrollLeft/scrollTop` that make the browser scroll the element if changed."
        ],
        "bulletPoints": [
          "`offsetParent` -- is the nearest positioned ancestor or `td`, `th`, `table`, `body`.",
          "`offsetLeft/offsetTop` -- coordinates relative to the upper-left edge of `offsetParent`.",
          "`offsetWidth/offsetHeight` -- \"outer\" width/height of an element including borders.",
          "`clientLeft/clientTop` -- the distances from the upper-left outer corner to the upper-left inner (content + padding) corner. For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so `clientLeft` includes its width too.",
          "`clientWidth/clientHeight` -- the width/height of the content including paddings, but without the scrollbar."
        ]
      }
    ],
    "exercises": [
      {
        "title": "What's the scroll from the bottom?",
        "description": "The `elem.scrollTop` property is the size of the scrolled out part from the top. How to get the size of the bottom scroll (let's call it `scrollBottom`)? Write the code that works for an arbitrary `elem`. P.S. Please check your code: if there's no scroll or the element is fully scrolled down, then i",
        "starterCode": "// Write your code here\n",
        "solution": "let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "What is the scrollbar width?",
        "description": "Write the code that returns the width of a standard scrollbar. For Windows it usually varies between `12px` and `20px`. If the browser doesn't reserve any space for it (the scrollbar is half-translucent over the text, also happens), then it may be `0px`. P.S. The code should work for any HTML docume",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "Place the ball in the field center",
        "description": "Here's how the source document looks: [iframe src=\"source\" edit link height=180] What are coordinates of the field center? Calculate them and use to place the ball into the center of the green field: [iframe src=\"solution\" height=180] - The element should be moved by JavaScript, not CSS. - The code ",
        "starterCode": "// Write your code here\n",
        "solution": "ball.style.left = Math.round(field.clientWidth / 2) + 'px';\nball.style.top = Math.round(field.clientHeight / 2) + 'px';",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Size And Scroll in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for size and scroll.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Size And Scroll is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Size And Scroll?",
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
      "Size And Scroll is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying size and scroll.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "size-and-scroll"
    ],
    "slug": "size-and-scroll"
  },
  {
    "title": "Size And Scroll Window",
    "description": "How do we find the width and height of the browser window? How do we get the full width and height of the document, including the scrolled out part? How do we scroll the page using...",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "How do we find the width and height of the browser window? How do we get the full width and height of the document, including the scrolled out part? How do we scroll the page using JavaScript?",
          "For this type of information, we can use the root document element `document.documentElement`, that corresponds to the `` tag. But there are additional methods and peculiarities to consider."
        ]
      },
      {
        "heading": "Width/height of the window",
        "paragraphs": [
          "To get window width and height, we can use the `clientWidth/clientHeight` of `document.documentElement`:",
          "![](document-client-width-height.svg)",
          "alert( window.innerWidth ); // full window width",
          "alert( document.documentElement.clientWidth ); // window width minus the scrollbar"
        ],
        "codeExamples": [
          {
            "title": "Width/height of the window",
            "code": "For instance, this button shows the height of your window:\n\n<button onclick=\"alert(document.documentElement.clientHeight)\">alert(document.documentElement.clientHeight)</button>",
            "explanation": "Example demonstrating width/height of the window."
          },
          {
            "title": "Width/height of the window",
            "code": "Browsers also support properties like `window.innerWidth/innerHeight`. They look like what we want, so why not to use them instead?\n\nIf there exists a scrollbar, and it occupies some space, `clientWidth/clientHeight` provide the width/height without it (subtract it). In other words, they return the width/height of the visible part of the document, available for the content.\n\n`window.innerWidth/innerHeight` includes the scrollbar.\n\nIf there's a scrollbar, and it occupies some space, then these two lines show different values:",
            "explanation": "Example demonstrating width/height of the window."
          }
        ]
      },
      {
        "heading": "Width/height of the document",
        "paragraphs": [
          "Theoretically, as the root document element is `document.documentElement`, and it encloses all the content, we could measure the document's full size as `document.documentElement.scrollWidth/scrollHeight`.",
          "But on that element, for the whole page, these properties do not work as intended. In Chrome/Safari/Opera, if there's no scroll, then `documentElement.scrollHeight` may be even less than `documentElement.clientHeight`! Weird, right?",
          "To reliably obtain the full document height, we should take the maximum of these properties:",
          "Why so? Better don't ask. These inconsistencies come from ancient times, not a \"smart\" logic."
        ],
        "codeExamples": [
          {
            "title": "Width/height of the document",
            "code": "let scrollHeight = Math.max(\n  document.body.scrollHeight, document.documentElement.scrollHeight,\n  document.body.offsetHeight, document.documentElement.offsetHeight,\n  document.body.clientHeight, document.documentElement.clientHeight\n);\n\nalert('Full document height, with scrolled out part: ' + scrollHeight);",
            "explanation": "Example demonstrating width/height of the document."
          }
        ]
      },
      {
        "heading": "Get the current scroll [#page-scroll]",
        "paragraphs": [
          "DOM elements have their current scroll state in their `scrollLeft/scrollTop` properties.",
          "For document scroll, `document.documentElement.scrollLeft/scrollTop` works in most browsers, except older WebKit-based ones, like Safari (bug 5991), where we should use `document.body` instead of `document.documentElement`.",
          "Luckily, we don't have to remember these peculiarities at all, because the scroll is available in the special properties, `window.pageXOffset/pageYOffset`:",
          "These properties are read-only."
        ],
        "codeExamples": [
          {
            "title": "Get the current scroll [#page-scroll]",
            "code": "alert('Current scroll from the top: ' + window.pageYOffset);\nalert('Current scroll from the left: ' + window.pageXOffset);",
            "explanation": "Example demonstrating get the current scroll [#page-scroll]."
          },
          {
            "title": "Get the current scroll [#page-scroll]",
            "code": "For historical reasons, both properties exist, but they are the same:\n- `window.pageXOffset` is an alias of `window.scrollX`.\n- `window.pageYOffset` is an alias of `window.scrollY`.",
            "explanation": "Example demonstrating get the current scroll [#page-scroll]."
          }
        ]
      },
      {
        "heading": "Scrolling: scrollTo, scrollBy, scrollIntoView [#window-scroll]",
        "paragraphs": [
          "Regular elements can be scrolled by changing `scrollTop/scrollLeft`.",
          "We can do the same for the page using `document.documentElement.scrollTop/scrollLeft` (except Safari, where `document.body.scrollTop/Left` should be used instead).",
          "Alternatively, there's a simpler, universal solution: special methods window.scrollBy(x,y) and window.scrollTo(pageX,pageY).",
          "The button below demonstrates this:",
          "window.scrollBy(0,10)"
        ],
        "codeExamples": [
          {
            "title": "Scrolling: scrollTo, scrollBy, scrollIntoView [#window-scroll]",
            "code": "To scroll the page with JavaScript, its DOM must be fully built.\n\nFor instance, if we try to scroll the page with a script in `<head>`, it won't work.",
            "explanation": "Example demonstrating scrolling: scrollto, scrollby, scrollintoview [#window-scroll]."
          }
        ],
        "bulletPoints": [
          "The method `scrollBy(x,y)` scrolls the page *relative to its current position*. For instance, `scrollBy(0,10)` scrolls the page `10px` down.",
          "The method `scrollTo(pageX,pageY)` scrolls the page *to absolute coordinates*, so that the top-left corner of the visible part has coordinates `(pageX, pageY)` relative to the document's top-left corner. It's like setting `scrollLeft/scrollTop`."
        ]
      },
      {
        "heading": "scrollIntoView",
        "paragraphs": [
          "For completeness, let's cover one more method: elem.scrollIntoView(top).",
          "The call to `elem.scrollIntoView(top)` scrolls the page to make `elem` visible. It has one argument:"
        ],
        "codeExamples": [
          {
            "title": "scrollIntoView",
            "code": "The button below scrolls the page to position itself at the window top:\n\n<button onclick=\"this.scrollIntoView()\">this.scrollIntoView()</button>\n\nAnd this button scrolls the page to position itself at the bottom:\n\n<button onclick=\"this.scrollIntoView(false)\">this.scrollIntoView(false)</button>",
            "explanation": "Example demonstrating scrollintoview."
          }
        ],
        "bulletPoints": [
          "If `top=true` (that's the default), then the page will be scrolled to make `elem` appear on the top of the window. The upper edge of the element will be aligned with the window top.",
          "If `top=false`, then the page scrolls to make `elem` appear at the bottom. The bottom edge of the element will be aligned with the window bottom."
        ]
      },
      {
        "heading": "Forbid the scrolling",
        "paragraphs": [
          "Sometimes we need to make the document \"unscrollable\". For instance, when we need to cover the page with a large message requiring immediate attention, and we want the visitor to interact with that message, not with the document.",
          "To make the document unscrollable, it's enough to set `document.body.style.overflow = \"hidden\"`. The page will \"freeze\" at its current scroll position.",
          "We can use the same technique to freeze the scroll for other elements, not just for `document.body`.",
          "The drawback of the method is that the scrollbar disappears. If it occupied some space, then that space is now free and the content \"jumps\" to fill it.",
          "That looks a bit odd, but can be worked around if we compare `clientWidth` before and after the freeze. If it increased (the scrollbar disappeared), then add `padding` to `document.body` in place of the scrollbar to keep the content width the same."
        ],
        "codeExamples": [
          {
            "title": "Forbid the scrolling",
            "code": "Try it:\n\n<button onclick=\"document.body.style.overflow = 'hidden'\">document.body.style.overflow = 'hidden'</button>\n\n<button onclick=\"document.body.style.overflow = ''\">document.body.style.overflow = ''</button>\n\nThe first button freezes the scroll, while the second one releases it.",
            "explanation": "Example demonstrating forbid the scrolling."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Geometry:",
          "let scrollHeight = Math.max(",
          "document.body.scrollHeight, document.documentElement.scrollHeight,",
          "document.body.offsetHeight, document.documentElement.offsetHeight,",
          "document.body.clientHeight, document.documentElement.clientHeight"
        ],
        "bulletPoints": [
          "Width/height of the visible part of the document (content area width/height): `document.documentElement.clientWidth/clientHeight`",
          "Width/height of the whole document, with the scrolled out part:",
          "Read the current scroll: `window.pageYOffset/pageXOffset`.",
          "Change the current scroll:",
          "`window.scrollTo(pageX,pageY)` -- absolute coordinates,"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Size And Scroll Window",
        "description": "Apply your understanding of Size And Scroll Window. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Size And Scroll Window\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Size And Scroll Window\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Size And Scroll Window in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for size and scroll window.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Size And Scroll Window is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Size And Scroll Window?",
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
      "Size And Scroll Window is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying size and scroll window.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "size-and-scroll-window"
    ],
    "slug": "size-and-scroll-window"
  },
  {
    "title": "Coordinates",
    "description": "To move elements around we should be familiar with coordinates.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "To move elements around we should be familiar with coordinates.",
          "Most JavaScript methods deal with one of two coordinate systems:",
          "1. **Relative to the window** - similar to `position:fixed`, calculated from the window top/left edge.",
          "2. **Relative to the document** - similar to `position:absolute` in the document root, calculated from the document top/left edge.",
          "When the page is scrolled to the very beginning, so that the top/left corner of the window is exactly the document top/left corner, these coordinates equal each other. But after the document shifts, window-relative coordinates of elements change, as elements move across the window, while document-relative coordinates remain the same."
        ],
        "bulletPoints": [
          "we'll denote these coordinates as `clientX/clientY`, the reasoning for such name will become clear later, when we study event properties.",
          "we'll denote them `pageX/pageY`.",
          "`pageY` - document-relative coordinate stayed the same, it's counted from the document top (now scrolled out).",
          "`clientY` - window-relative coordinate did change (the arrow became shorter), as the same point became closer to window top."
        ]
      },
      {
        "heading": "Element coordinates: getBoundingClientRect",
        "paragraphs": [
          "The method `elem.getBoundingClientRect()` returns window coordinates for a minimal rectangle that encloses `elem` as an object of built-in DOMRect class.",
          "Main `DOMRect` properties:",
          "Additionally, there are derived properties:",
          "Here's the picture of `elem.getBoundingClientRect()` output:",
          "![](coordinates.svg)"
        ],
        "codeExamples": [
          {
            "title": "Element coordinates: getBoundingClientRect",
            "code": "For instance click this button to see its window coordinates:\n\n<p><input id=\"brTest\" type=\"button\" style=\"max-width: 90vw;\" value=\"Get coordinates using button.getBoundingClientRect() for this button\" onclick='showRect(this)'/></p>\n\n<script>\nfunction showRect(elem) {\n  let r = elem.getBoundingClientRect();\n  alert(`x:${r.x}\ny:${r.y}\nwidth:${r.width}\nheight:${r.height}\ntop:${r.top}\nbottom:${r.bottom}\nleft:${r.left}\nright:${r.right}\n`);\n}\n</script>\n\nIf you scroll the page and repeat, you'll notice that as window-relative button position changes, its window coordinates (`y/top/bottom` if you scroll vertically) change as well.",
            "explanation": "Example demonstrating element coordinates: getboundingclientrect."
          },
          {
            "title": "Element coordinates: getBoundingClientRect",
            "code": "Mathematically, a rectangle is uniquely defined with its starting point `(x,y)` and the direction vector `(width,height)`. So the additional derived properties are for convenience.\n\nTechnically it's possible for `width/height` to be negative, that allows for \"directed\" rectangle, e.g. to represent mouse selection with properly marked start and end.\n\nNegative `width/height` values mean that the rectangle starts at its bottom-right corner and then \"grows\" left-upwards.\n\nHere's a rectangle with negative `width` and `height` (e.g. `width=-200`, `height=-100`):\n\n![](coordinates-negative.svg)\n\nAs you can see, `left/top` do not equal `x/y` in such case.\n\nIn practice though, `elem.getBoundingClientRect()` always returns positive width/height, here we mention negative `width/height` only for you to understand why these seemingly duplicate properties are not actually duplicates.",
            "explanation": "Example demonstrating element coordinates: getboundingclientrect."
          }
        ],
        "bulletPoints": [
          "`x/y` -- X/Y-coordinates of the rectangle origin relative to window,",
          "`width/height` -- width/height of the rectangle (can be negative).",
          "`top/bottom` -- Y-coordinate for the top/bottom rectangle edge,",
          "`left/right` -- X-coordinate for the left/right rectangle edge.",
          "`left = x`"
        ]
      },
      {
        "heading": "elementFromPoint(x, y) [#elementFromPoint]",
        "paragraphs": [
          "The call to `document.elementFromPoint(x, y)` returns the most nested element at window coordinates `(x, y)`.",
          "The syntax is:",
          "For instance, the code below highlights and outputs the tag of the element that is now in the middle of the window:",
          "As it uses window coordinates, the element may be different depending on the current scroll position.",
          "let elem = document.elementFromPoint(x, y);"
        ],
        "codeExamples": [
          {
            "title": "elementFromPoint(x, y) [#elementFromPoint]",
            "code": "let elem = document.elementFromPoint(x, y);",
            "explanation": "Example demonstrating elementfrompoint(x, y) [#elementfrompoint]."
          },
          {
            "title": "elementFromPoint(x, y) [#elementFromPoint]",
            "code": "let centerX = document.documentElement.clientWidth / 2;\nlet centerY = document.documentElement.clientHeight / 2;\n\nlet elem = document.elementFromPoint(centerX, centerY);\n\nelem.style.background = \"red\";\nalert(elem.tagName);",
            "explanation": "Example demonstrating elementfrompoint(x, y) [#elementfrompoint]."
          }
        ]
      },
      {
        "heading": "Using for \"fixed\" positioning",
        "paragraphs": [
          "Most of time we need coordinates in order to position something.",
          "To show something near an element, we can use `getBoundingClientRect` to get its coordinates, and then CSS `position` together with `left/top` (or `right/bottom`).",
          "For instance, the function `createMessageUnder(elem, html)` below shows the message under `elem`:",
          "The code can be modified to show the message at the left, right, below, apply CSS animations to \"fade it in\" and so on. That's easy, as we have all the coordinates and sizes of the element.",
          "But note the important detail: when the page is scrolled, the message flows away from the button."
        ],
        "codeExamples": [
          {
            "title": "Using for \"fixed\" positioning",
            "code": "let elem = document.getElementById(\"coords-show-mark\");\n\nfunction createMessageUnder(elem, html) {\n  // create message element\n  let message = document.createElement('div');\n  // better to use a css class for the style here\n  message.style.cssText = \"position:fixed; color: red\";\n\n*!*\n  // assign coordinates, don't forget \"px\"!\n  let coords = elem.getBoundingClientRect();\n\n  message.style.left = coords.left + \"px\";\n  message.style.top = coords.bottom + \"px\";\n*/!*\n\n  message.innerHTML = html;\n\n  return message;\n}\n\n// Usage:\n// add it for 5 seconds in the document\nlet message = createMessageUnder(elem, 'Hello, world!');\ndocument.body.append(message);\nsetTimeout(() => message.remove(), 5000);",
            "explanation": "Example demonstrating using for \"fixed\" positioning."
          },
          {
            "title": "Using for \"fixed\" positioning",
            "code": "Click the button to run it:\n\n<button id=\"coords-show-mark\">Button with id=\"coords-show-mark\", the message will appear under it</button>",
            "explanation": "Example demonstrating using for \"fixed\" positioning."
          }
        ]
      },
      {
        "heading": "Document coordinates [#getCoords]",
        "paragraphs": [
          "Document-relative coordinates start from the upper-left corner of the document, not the window.",
          "In CSS, window coordinates correspond to `position:fixed`, while document coordinates are similar to `position:absolute` on top.",
          "We can use `position:absolute` and `top/left` to put something at a certain place of the document, so that it remains there during a page scroll. But we need the right coordinates first.",
          "There's no standard method to get the document coordinates of an element. But it's easy to write it.",
          "The two coordinate systems are connected by the formula:"
        ],
        "codeExamples": [
          {
            "title": "Document coordinates [#getCoords]",
            "code": "// get document coordinates of the element\nfunction getCoords(elem) {\n  let box = elem.getBoundingClientRect();\n\n  return {\n    top: box.top + window.pageYOffset,\n    right: box.right + window.pageXOffset,\n    bottom: box.bottom + window.pageYOffset,\n    left: box.left + window.pageXOffset\n  };\n}",
            "explanation": "Example demonstrating document coordinates [#getcoords]."
          },
          {
            "title": "Document coordinates [#getCoords]",
            "code": "function createMessageUnder(elem, html) {\n  let message = document.createElement('div');\n  message.style.cssText = \"*!*position:absolute*/!*; color: red\";\n\n  let coords = *!*getCoords(elem);*/!*\n\n  message.style.left = coords.left + \"px\";\n  message.style.top = coords.bottom + \"px\";\n\n  message.innerHTML = html;\n\n  return message;\n}",
            "explanation": "Example demonstrating document coordinates [#getcoords]."
          }
        ],
        "bulletPoints": [
          "`pageY` = `clientY` + height of the scrolled-out vertical part of the document.",
          "`pageX` = `clientX` + width of the scrolled-out horizontal part of the document."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Any point on the page has coordinates:",
          "1. Relative to the window -- `elem.getBoundingClientRect()`.",
          "2. Relative to the document -- `elem.getBoundingClientRect()` plus the current page scroll.",
          "Window coordinates are great to use with `position:fixed`, and document coordinates do well with `position:absolute`.",
          "Both coordinate systems have their pros and cons; there are times we need one or the other one, just like CSS `position` `absolute` and `fixed`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Find window coordinates of the field",
        "description": "In the iframe below you can see a document with the green \"field\". Use JavaScript to find window coordinates of corners pointed by with arrows. There's a small feature implemented in the document for convenience. A click at any place shows coordinates there. [iframe border=1 height=360 src=\"source\" ",
        "starterCode": "// Write your code here\n",
        "solution": "let coords = elem.getBoundingClientRect();\n\nlet answer1 = [coords.left, coords.top];\nlet answer2 = [coords.right, coords.bottom];",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Show a note near the element",
        "description": "Create a function `positionAt(anchor, position, elem)` that positions `elem`, depending on `position` near `anchor` element. The `position` must be a string with any one of 3 values: - `\"top\"` - position `elem` right above `anchor` - `\"right\"` - position `elem` immediately at the right of `anchor` -",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Show a note near the element (absolute)",
        "description": "Modify the solution of the previous task so that the note uses `position:absolute` instead of `position:fixed`. That will prevent its \"runaway\" from the element when the page scrolls. Take the solution of that task as a starting point. To test the scroll, add the style ``.",
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
        "question": "What is the primary role of Coordinates in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for coordinates.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Coordinates is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Coordinates?",
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
      "Coordinates is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying coordinates.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "coordinates"
    ],
    "slug": "coordinates"
  }
];
