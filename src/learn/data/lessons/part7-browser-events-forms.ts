import type { Lesson } from '../../types';

export const part7Lessons: Lesson[] = [
  {
    "title": "Introduction Browser Events",
    "description": "*An event* is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "*An event* is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).",
          "Here's a list of the most useful DOM events, just to take a look at:",
          "**Mouse events:**",
          "**Keyboard events:**",
          "**Form element events:**"
        ],
        "bulletPoints": [
          "`click` -- when the mouse clicks on an element (touchscreen devices generate it on a tap).",
          "`contextmenu` -- when the mouse right-clicks on an element.",
          "`mouseover` / `mouseout` -- when the mouse cursor comes over / leaves an element.",
          "`mousedown` / `mouseup` -- when the mouse button is pressed / released over an element.",
          "`mousemove` -- when the mouse is moved."
        ]
      },
      {
        "heading": "Event handlers",
        "paragraphs": [
          "To react on events we can assign a *handler* -- a function that runs in case of an event.",
          "Handlers are a way to run JavaScript code in case of user actions.",
          "There are several ways to assign a handler. Let's see them, starting from the simplest one."
        ]
      },
      {
        "heading": "HTML-attribute",
        "paragraphs": [
          "A handler can be set in HTML with an attribute named `on`.",
          "For instance, to assign a `click` handler for an `input`, we can use `onclick`, like here:",
          "On mouse click, the code inside `onclick` runs.",
          "Please note that inside `onclick` we use single quotes, because the attribute itself is in double quotes. If we forget that the code is inside the attribute and use double quotes inside, like this: `onclick=\"alert(\"Click!\")\"`, then it won't work right.",
          "An HTML-attribute is not a convenient place to write a lot of code, so we'd better create a JavaScript function and call it there."
        ],
        "codeExamples": [
          {
            "title": "HTML-attribute",
            "code": "<input value=\"Click me\" *!*onclick=\"alert('Click!')\"*/!* type=\"button\">",
            "explanation": "Example demonstrating html-attribute."
          },
          {
            "title": "HTML-attribute",
            "code": "<script>\n  function countRabbits() {\n    for(let i=1; i<=3; i++) {\n      alert(\"Rabbit number \" + i);\n    }\n  }\n</script>\n\n<input type=\"button\" *!*onclick=\"countRabbits()\"*/!* value=\"Count rabbits!\">",
            "explanation": "Example demonstrating html-attribute."
          }
        ]
      },
      {
        "heading": "DOM property",
        "paragraphs": [
          "We can assign a handler using a DOM property `on`.",
          "For instance, `elem.onclick`:",
          "If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property.",
          "So this way is actually the same as the previous one.",
          "These two code pieces work the same:"
        ],
        "codeExamples": [
          {
            "title": "DOM property",
            "code": "<input id=\"elem\" type=\"button\" value=\"Click me\">\n<script>\n*!*\n  elem.onclick = function() {\n    alert('Thank you');\n  };\n*/!*\n</script>",
            "explanation": "Example demonstrating dom property."
          },
          {
            "title": "DOM property",
            "code": "<input type=\"button\" id=\"elem\" onclick=\"alert('Before')\" value=\"Click me\">\n<script>\n*!*\n  elem.onclick = function() { // overwrites the existing handler\n    alert('After'); // only this will be shown\n  };\n*/!*\n</script>",
            "explanation": "Example demonstrating dom property."
          }
        ]
      },
      {
        "heading": "Accessing the element: this",
        "paragraphs": [
          "The value of `this` inside a handler is the element. The one which has the handler on it.",
          "In the code below `button` shows its contents using `this.innerHTML`:"
        ],
        "codeExamples": [
          {
            "title": "Accessing the element: this",
            "code": "<button onclick=\"alert(this.innerHTML)\">Click me</button>",
            "explanation": "Example demonstrating accessing the element: this."
          }
        ]
      },
      {
        "heading": "Possible mistakes",
        "paragraphs": [
          "If you're starting to work with events -- please note some subtleties.",
          "We can set an existing function as a handler:",
          "But be careful: the function should be assigned as `sayThanks`, not `sayThanks()`.",
          "If we add parentheses, then `sayThanks()` becomes a function call. So the last line actually takes the *result* of the function execution, that is `undefined` (as the function returns nothing), and assigns it to `onclick`. That doesn't work.",
          "...On the other hand, in the markup we do need the parentheses:"
        ],
        "codeExamples": [
          {
            "title": "Possible mistakes",
            "code": "function sayThanks() {\n  alert('Thanks!');\n}\n\nelem.onclick = sayThanks;",
            "explanation": "Example demonstrating possible mistakes."
          },
          {
            "title": "Possible mistakes",
            "code": "// right\nbutton.onclick = sayThanks;\n\n// wrong\nbutton.onclick = sayThanks();",
            "explanation": "Example demonstrating possible mistakes."
          }
        ]
      },
      {
        "heading": "addEventListener",
        "paragraphs": [
          "The fundamental problem of the aforementioned ways to assign handlers is that we *can't assign multiple handlers to one event*.",
          "Let's say, one part of our code wants to highlight a button on click, and another one wants to show a message on the same click.",
          "We'd like to assign two event handlers for that. But a new DOM property will overwrite the existing one:",
          "Developers of web standards understood that long ago and suggested an alternative way of managing handlers using the special methods `addEventListener` and `removeEventListener` which aren't bound by such constraint.",
          "The syntax to add a handler:"
        ],
        "codeExamples": [
          {
            "title": "addEventListener",
            "code": "input.onclick = function() { alert(1); }\n// ...\ninput.onclick = function() { alert(2); } // replaces the previous handler",
            "explanation": "Example demonstrating addeventlistener."
          },
          {
            "title": "addEventListener",
            "code": "element.addEventListener(event, handler, [options]);",
            "explanation": "Example demonstrating addeventlistener."
          }
        ],
        "bulletPoints": [
          "`once`: if `true`, then the listener is automatically removed after it triggers.",
          "`capture`: the phase where to handle the event, to be covered later in the chapter . For historical reasons, `options` can also be `false/true`, that's the same as `{capture: false/true}`.",
          "`passive`: if `true`, then the handler will not call `preventDefault()`, we'll explain that later in ."
        ]
      },
      {
        "heading": "Event object",
        "paragraphs": [
          "To properly handle an event we'd want to know more about what's happened. Not just a \"click\" or a \"keydown\", but what were the pointer coordinates? Which key was pressed? And so on.",
          "When an event happens, the browser creates an *event object*, puts details into it and passes it as an argument to the handler.",
          "Here's an example of getting pointer coordinates from the event object:",
          "Some properties of `event` object:",
          "`event.type`"
        ],
        "codeExamples": [
          {
            "title": "Event object",
            "code": "<input type=\"button\" value=\"Click me\" id=\"elem\">\n\n<script>\n  elem.onclick = function(*!*event*/!*) {\n    // show event type, element and coordinates of the click\n    alert(event.type + \" at \" + event.currentTarget);\n    alert(\"Coordinates: \" + event.clientX + \":\" + event.clientY);\n  };\n</script>",
            "explanation": "Example demonstrating event object."
          },
          {
            "title": "Event object",
            "code": "If we assign a handler in HTML, we can also use the `event` object, like this:",
            "explanation": "Example demonstrating event object."
          }
        ]
      },
      {
        "heading": "Object handlers: handleEvent",
        "paragraphs": [
          "We can assign not just a function, but an object as an event handler using `addEventListener`. When an event occurs, its `handleEvent` method is called.",
          "For instance:",
          "As we can see, when `addEventListener` receives an object as the handler, it calls `obj.handleEvent(event)` in case of an event.",
          "We could also use objects of a custom class, like this:",
          "Here the same object handles both events. Please note that we need to explicitly setup the events to listen using `addEventListener`. The `menu` object only gets `mousedown` and `mouseup` here, not any other types of events."
        ],
        "codeExamples": [
          {
            "title": "Object handlers: handleEvent",
            "code": "<button id=\"elem\">Click me</button>\n\n<script>\n  let obj = {\n    handleEvent(event) {\n      alert(event.type + \" at \" + event.currentTarget);\n    }\n  };\n\n  elem.addEventListener('click', obj);\n</script>",
            "explanation": "Example demonstrating object handlers: handleevent."
          },
          {
            "title": "Object handlers: handleEvent",
            "code": "<button id=\"elem\">Click me</button>\n\n<script>\n  class Menu {\n    handleEvent(event) {\n      switch(event.type) {\n        case 'mousedown':\n          elem.innerHTML = \"Mouse button pressed\";\n          break;\n        case 'mouseup':\n          elem.innerHTML += \"...and released.\";\n          break;\n      }\n    }\n  }\n\n*!*\n  let menu = new Menu();\n\n  elem.addEventListener('mousedown', menu);\n  elem.addEventListener('mouseup', menu);\n*/!*\n</script>",
            "explanation": "Example demonstrating object handlers: handleevent."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are 3 ways to assign event handlers:",
          "1. HTML attribute: `onclick=\"...\"`.",
          "2. DOM property: `elem.onclick = function`.",
          "3. Methods: `elem.addEventListener(event, handler[, phase])` to add, `removeEventListener` to remove.",
          "HTML attributes are used sparingly, because JavaScript in the middle of an HTML tag looks a little bit odd and alien. Also can't write lots of code in there."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Hide on click",
        "description": "Add JavaScript to the `button` to make `` disappear when we click it. The demo: [iframe border=1 src=\"solution\" height=80]",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Hide self",
        "description": "Create a button that hides itself on click. ```online Like this: ```",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Which handlers run?",
        "description": "There's a button in the variable. There are no handlers on it. Which handlers run on click after the following code? Which alerts show up? ```js no-beautify button.addEventListener(\"click\", () => alert(\"1\")); button.removeEventListener(\"click\", () => alert(\"1\")); button.onclick = () => alert(2); ```",
        "starterCode": "// Write your code here\n",
        "solution": "function handler() {\n  alert(1);\n}\n\nbutton.addEventListener(\"click\", handler);\nbutton.removeEventListener(\"click\", handler);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Introduction Browser Events in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for introduction browser events.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Introduction Browser Events is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Introduction Browser Events?",
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
      "Introduction Browser Events is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying introduction browser events.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "introduction-browser-events"
    ],
    "slug": "introduction-browser-events"
  },
  {
    "title": "Bubbling And Capturing",
    "description": "Let's start with an example.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's start with an example.",
          "This handler is assigned to ``, but also runs if you click any nested tag like `` or ``:",
          "Isn't it a bit strange? Why does the handler on `` run if the actual click was on ``?"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "<div onclick=\"alert('The handler!')\">\n  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>\n</div>",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Bubbling",
        "paragraphs": [
          "The bubbling principle is simple.",
          "**When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.**",
          "Let's say we have 3 nested elements `FORM > DIV > P` with a handler on each of them:",
          "A click on the inner `` first runs `onclick`:",
          "1. On that ``."
        ],
        "codeExamples": [
          {
            "title": "Bubbling",
            "code": "<style>\n  body * {\n    margin: 10px;\n    border: 1px solid blue;\n  }\n</style>\n\n<form onclick=\"alert('form')\">FORM\n  <div onclick=\"alert('div')\">DIV\n    <p onclick=\"alert('p')\">P</p>\n  </div>\n</form>",
            "explanation": "Example demonstrating bubbling."
          },
          {
            "title": "Bubbling",
            "code": "The key word in this phrase is \"almost\".\n\nFor instance, a `focus` event does not bubble. There are other examples too, we'll meet them. But still it's an exception, rather than a rule, most events do bubble.",
            "explanation": "Example demonstrating bubbling."
          }
        ]
      },
      {
        "heading": "event.target",
        "paragraphs": [
          "A handler on a parent element can always get the details about where it actually happened.",
          "**The most deeply nested element that caused the event is called a *target* element, accessible as `event.target`.**",
          "Note the differences from `this` (=`event.currentTarget`):",
          "For instance, if we have a single handler `form.onclick`, then it can \"catch\" all clicks inside the form. No matter where the click happened, it bubbles up to `` and runs the handler.",
          "In `form.onclick` handler:"
        ],
        "bulletPoints": [
          "`event.target` -- is the \"target\" element that initiated the event, it doesn't change through the bubbling process.",
          "`this` -- is the \"current\" element, the one that has a currently running handler on it.",
          "`this` (=`event.currentTarget`) is the `` element, because the handler runs on it.",
          "`event.target` is the actual element inside the form that was clicked."
        ]
      },
      {
        "heading": "Stopping bubbling",
        "paragraphs": [
          "A bubbling event goes from the target element straight up. Normally it goes upwards till ``, and then to `document` object, and some events even reach `window`, calling all handlers on the path.",
          "But any handler may decide that the event has been fully processed and stop the bubbling.",
          "The method for it is `event.stopPropagation()`.",
          "For instance, here `body.onclick` doesn't work if you click on ``:"
        ],
        "codeExamples": [
          {
            "title": "Stopping bubbling",
            "code": "<body onclick=\"alert(`the bubbling doesn't reach here`)\">\n  <button onclick=\"event.stopPropagation()\">Click me</button>\n</body>",
            "explanation": "Example demonstrating stopping bubbling."
          },
          {
            "title": "Stopping bubbling",
            "code": "If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.\n\nIn other words, `event.stopPropagation()` stops the move upwards, but on the current element all other handlers will run.\n\nTo stop the bubbling and prevent handlers on the current element from running, there's a method `event.stopImmediatePropagation()`. After it no other handlers execute.",
            "explanation": "Example demonstrating stopping bubbling."
          }
        ]
      },
      {
        "heading": "Capturing",
        "paragraphs": [
          "There's another phase of event processing called \"capturing\". It is rarely used in real code, but sometimes can be useful.",
          "The standard DOM Events describes 3 phases of event propagation:",
          "1. Capturing phase -- the event goes down to the element.",
          "2. Target phase -- the event reached the target element.",
          "3. Bubbling phase -- the event bubbles up from the element."
        ],
        "codeExamples": [
          {
            "title": "Capturing",
            "code": "elem.addEventListener(..., {capture: true})\n\n// or, just \"true\" is an alias to {capture: true}\nelem.addEventListener(..., true)",
            "explanation": "Example demonstrating capturing."
          },
          {
            "title": "Capturing",
            "code": "<style>\n  body * {\n    margin: 10px;\n    border: 1px solid blue;\n  }\n</style>\n\n<form>FORM\n  <div>DIV\n    <p>P</p>\n  </div>\n</form>\n\n<script>\n  for(let elem of document.querySelectorAll('*')) {\n    elem.addEventListener(\"click\", e => alert(`Capturing: ${elem.tagName}`), true);\n    elem.addEventListener(\"click\", e => alert(`Bubbling: ${elem.tagName}`));\n  }\n</script>",
            "explanation": "Example demonstrating capturing."
          }
        ],
        "bulletPoints": [
          "If it's `false` (default), then the handler is set on the bubbling phase.",
          "If it's `true`, then the handler is set on the capturing phase."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "When an event happens -- the most nested element where it happens gets labeled as the \"target element\" (`event.target`).",
          "Each handler can access `event` object properties:",
          "Any event handler can stop the event by calling `event.stopPropagation()`, but that's not recommended, because we can't really be sure we won't need it above, maybe for completely different things.",
          "The capturing phase is used very rarely, usually we handle events on bubbling. And there's a logical explanation for that.",
          "In real world, when an accident happens, local authorities react first. They know best the area where it happened. Then higher-level authorities if needed."
        ],
        "bulletPoints": [
          "Then the event moves down from the document root to `event.target`, calling handlers assigned with `addEventListener(..., true)` on the way (`true` is a shorthand for `{capture: true}`).",
          "Then handlers are called on the target element itself.",
          "Then the event bubbles up from `event.target` to the root, calling handlers assigned using `on`, HTML attributes and `addEventListener` without the 3rd argument or with the 3rd argument `false/{capture:false}`.",
          "`event.target` -- the deepest element that originated the event.",
          "`event.currentTarget` (=`this`) -- the current element that handles the event (the one that has the handler on it)"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Bubbling And Capturing",
        "description": "Apply your understanding of Bubbling And Capturing. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Bubbling And Capturing\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Bubbling And Capturing\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Bubbling And Capturing in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for bubbling and capturing.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Bubbling And Capturing is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Bubbling And Capturing?",
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
      "Bubbling And Capturing is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying bubbling and capturing.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "bubbling-and-capturing"
    ],
    "slug": "bubbling-and-capturing"
  },
  {
    "title": "Event Delegation",
    "description": "Capturing and bubbling allow us to implement one of the most powerful event handling patterns called *event delegation*.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Capturing and bubbling allow us to implement one of the most powerful event handling patterns called *event delegation*.",
          "The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them -- we put a single handler on their common ancestor.",
          "In the handler we get `event.target` to see where the event actually happened and handle it.",
          "Let's see an example -- the Ba-Gua diagram reflecting the ancient Chinese philosophy.",
          "Here it is:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "<table>\n  <tr>\n    <th colspan=\"3\"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>\n  </tr>\n  <tr>\n    <td class=\"nw\"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>\n    <td class=\"n\">...</td>\n    <td class=\"ne\">...</td>\n  </tr>\n  <tr>...2 more lines of this kind...</tr>\n  <tr>...2 more lines of this kind...</tr>\n</table>",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let selectedTd;\n\n*!*\ntable.onclick = function(event) {\n  let target = event.target; // where was the click?\n\n  if (target.tagName != 'TD') return; // not on TD? Then we're not interested\n\n  highlight(target); // highlight it\n};\n*/!*\n\nfunction highlight(td) {\n  if (selectedTd) { // remove the existing highlight if any\n    selectedTd.classList.remove('highlight');\n  }\n  selectedTd = td;\n  selectedTd.classList.add('highlight'); // highlight the new td\n}",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Delegation example: actions in markup",
        "paragraphs": [
          "There are other uses for event delegation.",
          "Let's say, we want to make a menu with buttons \"Save\", \"Load\", \"Search\" and so on. And there's an object with methods `save`, `load`, `search`... How to match them?",
          "The first idea may be to assign a separate handler to each button. But there's a more elegant solution. We can add a handler for the whole menu and `data-action` attributes for buttons that has the method to call:",
          "The handler reads the attribute and executes the method. Take a look at the working example:",
          "Please note that `this.onClick` is bound to `this` in `(*)`. That's important, because otherwise `this` inside it would reference the DOM element (`elem`), not the `Menu` object, and `this[action]` would not be what we need."
        ],
        "codeExamples": [
          {
            "title": "Delegation example: actions in markup",
            "code": "<button *!*data-action=\"save\"*/!*>Click to Save</button>",
            "explanation": "Example demonstrating delegation example: actions in markup."
          },
          {
            "title": "Delegation example: actions in markup",
            "code": "<div id=\"menu\">\n  <button data-action=\"save\">Save</button>\n  <button data-action=\"load\">Load</button>\n  <button data-action=\"search\">Search</button>\n</div>\n\n<script>\n  class Menu {\n    constructor(elem) {\n      this._elem = elem;\n      elem.onclick = this.onClick.bind(this); // (*)\n    }\n\n    save() {\n      alert('saving');\n    }\n\n    load() {\n      alert('loading');\n    }\n\n    search() {\n      alert('searching');\n    }\n\n    onClick(event) {\n*!*\n      let action = event.target.dataset.action;\n      if (action) {\n        this[action]();\n      }\n*/!*\n    };\n  }\n\n  new Menu(menu);\n</script>",
            "explanation": "Example demonstrating delegation example: actions in markup."
          }
        ]
      },
      {
        "heading": "The \"behavior\" pattern",
        "paragraphs": [
          "We can also use event delegation to add \"behaviors\" to elements *declaratively*, with special attributes and classes.",
          "The pattern has two parts:",
          "1. We add a custom attribute to an element that describes its behavior.",
          "2. A document-wide handler tracks events, and if an event happens on an attributed element -- performs the action."
        ]
      },
      {
        "heading": "Behavior: Counter",
        "paragraphs": [
          "For instance, here the attribute `data-counter` adds a behavior: \"increase value on click\" to buttons:",
          "If we click a button -- its value is increased. Not buttons, but the general approach is important here.",
          "There can be as many attributes with `data-counter` as we want. We can add new ones to HTML at any moment. Using the event delegation we \"extended\" HTML, added an attribute that describes a new behavior."
        ],
        "codeExamples": [
          {
            "title": "Behavior: Counter",
            "code": "Counter: <input type=\"button\" value=\"1\" data-counter>\nOne more counter: <input type=\"button\" value=\"2\" data-counter>\n\n<script>\n  document.addEventListener('click', function(event) {\n\n    if (event.target.dataset.counter != undefined) { // if the attribute exists...\n      event.target.value++;\n    }\n\n  });\n</script>",
            "explanation": "Example demonstrating behavior: counter."
          },
          {
            "title": "Behavior: Counter",
            "code": "When we assign an event handler to the `document` object, we should always use `addEventListener`, not `document.on<event>`, because the latter will cause conflicts: new handlers overwrite old ones.\n\nFor real projects it's normal that there are many handlers on `document` set by different parts of the code.",
            "explanation": "Example demonstrating behavior: counter."
          }
        ]
      },
      {
        "heading": "Behavior: Toggler",
        "paragraphs": [
          "One more example of behavior. A click on an element with the attribute `data-toggle-id` will show/hide the element with the given `id`:",
          "Let's note once again what we did. Now, to add toggling functionality to an element -- there's no need to know JavaScript, just use the attribute `data-toggle-id`.",
          "That may become really convenient -- no need to write JavaScript for every such element. Just use the behavior. The document-level handler makes it work for any element of the page.",
          "We can combine multiple behaviors on a single element as well.",
          "The \"behavior\" pattern can be an alternative to mini-fragments of JavaScript."
        ],
        "codeExamples": [
          {
            "title": "Behavior: Toggler",
            "code": "<button *!*data-toggle-id=\"subscribe-mail\"*/!*>\n  Show the subscription form\n</button>\n\n<form id=\"subscribe-mail\" hidden>\n  Your mail: <input type=\"email\">\n</form>\n\n<script>\n*!*\n  document.addEventListener('click', function(event) {\n    let id = event.target.dataset.toggleId;\n    if (!id) return;\n\n    let elem = document.getElementById(id);\n\n    elem.hidden = !elem.hidden;\n  });\n*/!*\n</script>",
            "explanation": "Example demonstrating behavior: toggler."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Event delegation is really cool! It's one of the most helpful patterns for DOM events.",
          "It's often used to add the same handling for many similar elements, but not only for that.",
          "The algorithm:",
          "1. Put a single handler on the container.",
          "2. In the handler -- check the source element `event.target`."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "+ Simplifies initialization and saves memory: no need to add many handlers.\n+ Less code: when adding or removing elements, no need to add/remove handlers.\n+ DOM modifications: we can mass add/remove elements with `innerHTML` and the like.",
            "explanation": "Example demonstrating summary."
          },
          {
            "title": "Summary",
            "code": "- First, the event must be bubbling. Some events do not bubble. Also, low-level handlers should not use `event.stopPropagation()`.\n- Second, the delegation may add CPU load, because the container-level handler reacts on events in any place of the container, no matter whether they interest us or not. But usually the load is negligible, so we don't take it into account.",
            "explanation": "Example demonstrating summary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Hide messages with delegation",
        "description": "There's a list of messages with removal buttons `[x]`. Make the buttons work. Like this: [iframe src=\"solution\" height=420] P.S. Should be only one event listener on the container, use event delegation.",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Tree menu",
        "description": "Create a tree that shows/hides node children on click: [iframe border=1 src=\"solution\"] Requirements: - Only one event handler (use delegation) - A click outside the node title (on an empty space) should not do anything.",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Sortable table",
        "description": "Make the table sortable: clicks on `` elements should sort it by corresponding column. Each `` has the type in the attribute, like this: ```html *!* Age Name */!* 5 John 10 Ann ... ``` In the example above the first column has numbers, and the second one -- strings. The sorting function should handl",
        "starterCode": "<table id=\"grid\">\n  <thead>\n    <tr>\n*!*\n      <th data-type=\"number\">Age</th>\n      <th data-type=\"string\">Name</th>\n*/!*\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>5</td>\n      <td>John</td>\n    </tr>\n    <tr>\n      <td>10</td>\n      <td>Ann</td>\n    </tr>\n    ...\n  </tbody>\n</table>",
        "solution": "<table id=\"grid\">\n  <thead>\n    <tr>\n*!*\n      <th data-type=\"number\">Age</th>\n      <th data-type=\"string\">Name</th>\n*/!*\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>5</td>\n      <td>John</td>\n    </tr>\n    <tr>\n      <td>10</td>\n      <td>Ann</td>\n    </tr>\n    ...\n  </tbody>\n</table>",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Event Delegation in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for event delegation.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Event Delegation is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Event Delegation?",
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
      "Event Delegation is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying event delegation.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "event-delegation"
    ],
    "slug": "event-delegation"
  },
  {
    "title": "Default Browser Action",
    "description": "Many events automatically lead to certain actions performed by the browser.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Many events automatically lead to certain actions performed by the browser.",
          "For instance:",
          "If we handle an event in JavaScript, we may not want the corresponding browser action to happen, and want to implement another behavior instead."
        ],
        "bulletPoints": [
          "A click on a link - initiates navigation to its URL.",
          "A click on a form submit button - initiates its submission to the server.",
          "Pressing a mouse button over a text and moving it - selects the text."
        ]
      },
      {
        "heading": "Preventing browser actions",
        "paragraphs": [
          "There are two ways to tell the browser we don't want it to act:",
          "In this HTML, a click on a link doesn't lead to navigation; the browser doesn't do anything:",
          "In the next example we'll use this technique to create a JavaScript-powered menu."
        ],
        "codeExamples": [
          {
            "title": "Preventing browser actions",
            "code": "<a href=\"/\" onclick=\"return false\">Click here</a>\nor\n<a href=\"/\" onclick=\"event.preventDefault()\">here</a>",
            "explanation": "Example demonstrating preventing browser actions."
          },
          {
            "title": "Preventing browser actions",
            "code": "The value returned by an event handler is usually ignored.\n\nThe only exception is `return false` from a handler assigned using `on<event>`.\n\nIn all other cases, `return` value is ignored. In particular, there's no sense in returning `true`.",
            "explanation": "Example demonstrating preventing browser actions."
          }
        ],
        "bulletPoints": [
          "The main way is to use the `event` object. There's a method `event.preventDefault()`.",
          "If the handler is assigned using `on` (not by `addEventListener`), then returning `false` also works the same."
        ]
      },
      {
        "heading": "Example: the menu",
        "paragraphs": [
          "Consider a site menu, like this:",
          "Here's how it looks with some CSS:",
          "[iframe height=70 src=\"menu\" link edit]",
          "Menu items are implemented as HTML-links ``, not buttons ``. There are several reasons to do so, for instance:",
          "So we use `` in the markup. But normally we intend to handle clicks in JavaScript. So we should prevent the default browser action."
        ],
        "codeExamples": [
          {
            "title": "Example: the menu",
            "code": "<ul id=\"menu\" class=\"menu\">\n  <li><a href=\"/html\">HTML</a></li>\n  <li><a href=\"/javascript\">JavaScript</a></li>\n  <li><a href=\"/css\">CSS</a></li>\n</ul>",
            "explanation": "Example demonstrating example: the menu."
          },
          {
            "title": "Example: the menu",
            "code": "menu.onclick = function(event) {\n  if (event.target.nodeName != 'A') return;\n\n  let href = event.target.getAttribute('href');\n  alert( href ); // ...can be loading from the server, UI generation etc\n\n*!*\n  return false; // prevent browser action (don't go to the URL)\n*/!*\n};",
            "explanation": "Example demonstrating example: the menu."
          }
        ],
        "bulletPoints": [
          "Many people like to use \"right click\" -- \"open in a new window\". If we use `` or ``, that doesn't work.",
          "Search engines follow `` links while indexing."
        ]
      },
      {
        "heading": "The \"passive\" handler option",
        "paragraphs": [
          "The optional `passive: true` option of `addEventListener` signals the browser that the handler is not going to call `preventDefault()`.",
          "Why might that be needed?",
          "There are some events like `touchmove` on mobile devices (when the user moves their finger across the screen), that cause scrolling by default, but that scrolling can be prevented using `preventDefault()` in the handler.",
          "So when the browser detects such event, it has first to process all handlers, and then if `preventDefault` is not called anywhere, it can proceed with scrolling. That may cause unnecessary delays and \"jitters\" in the UI.",
          "The `passive: true` options tells the browser that the handler is not going to cancel scrolling. Then browser scrolls immediately providing a maximally fluent experience, and the event is handled by the way."
        ]
      },
      {
        "heading": "event.defaultPrevented",
        "paragraphs": [
          "The property `event.defaultPrevented` is `true` if the default action was prevented, and `false` otherwise.",
          "There's an interesting use case for it.",
          "You remember in the chapter we talked about `event.stopPropagation()` and why stopping bubbling is bad?",
          "Sometimes we can use `event.defaultPrevented` instead, to signal other event handlers that the event was handled.",
          "Let's see a practical example."
        ],
        "codeExamples": [
          {
            "title": "event.defaultPrevented",
            "code": "<button>Right-click shows browser context menu</button>\n\n<button *!*oncontextmenu=\"alert('Draw our menu'); return false\"*/!*>\n  Right-click shows our context menu\n</button>",
            "explanation": "Example demonstrating event.defaultprevented."
          },
          {
            "title": "event.defaultPrevented",
            "code": "<p>Right-click here for the document context menu</p>\n<button id=\"elem\">Right-click here for the button context menu</button>\n\n<script>\n  elem.oncontextmenu = function(event) {\n    event.preventDefault();\n    alert(\"Button context menu\");\n  };\n\n  document.oncontextmenu = function(event) {\n    event.preventDefault();\n    alert(\"Document context menu\");\n  };\n</script>",
            "explanation": "Example demonstrating event.defaultprevented."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are many default browser actions:",
          "All the default actions can be prevented if we want to handle the event exclusively by JavaScript.",
          "To prevent a default action -- use either `event.preventDefault()` or `return false`. The second method works only for handlers assigned with `on`.",
          "The `passive: true` option of `addEventListener` tells the browser that the action is not going to be prevented. That's useful for some mobile events, like `touchstart` and `touchmove`, to tell the browser that it should not wait for all handlers to finish before scrolling.",
          "If the default action was prevented, the value of `event.defaultPrevented` becomes `true`, otherwise it's `false`."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "Technically, by preventing default actions and adding JavaScript we can customize the behavior of any elements. For instance, we can make a link `<a>` work like a button, and a button `<button>` behave as a link (redirect to another URL or so).\n\nBut we should generally keep the semantic meaning of HTML elements. For instance, `<a>` should perform navigation, not a button.\n\nBesides being \"just a good thing\", that makes your HTML better in terms of accessibility.\n\nAlso if we consider the example with `<a>`, then please note: a browser allows us to open such links in a new window (by right-clicking them and other means). And people like that. But if we make a button behave as a link using JavaScript and even look like a link using CSS, then `<a>`-specific browser features still won't work for it.",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "`mousedown` -- starts the selection (move the mouse to select).",
          "`click` on `` -- checks/unchecks the `input`.",
          "`submit` -- clicking an `` or hitting `key:Enter` inside a form field causes this event to happen, and the browser submits the form after it.",
          "`keydown` -- pressing a key may lead to adding a character into a field, or other actions.",
          "`contextmenu` -- the event happens on a right-click, the action is to show the browser context menu."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Why \"return false\" doesn't work?",
        "description": "Why in the code below `return false` doesn't work at all? ```html autorun run function handler() { alert( \"...\" ); return false; } the browser will go to w3.org ``` The browser follows the URL on click, but we don't want it. How to fix?",
        "starterCode": "// Write your code here\n",
        "solution": "function(event) {\n  handler() // the content of onclick\n}",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "Catch links in the element",
        "description": "Make all links inside the element with `id=\"contents\"` ask the user if they really want to leave. And if they don't then don't follow. Like this: [iframe height=100 border=1 src=\"solution\"] Details: - HTML inside the element may be loaded or regenerated dynamically at any time, so we can't find all ",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Image gallery",
        "description": "Create an image gallery where the main image changes by the click on a thumbnail. Like this: [iframe src=\"solution\" height=600] P.S. Use event delegation.",
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
        "question": "What is the primary role of Default Browser Action in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for default browser action.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Default Browser Action is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Default Browser Action?",
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
      "Default Browser Action is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying default browser action.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "default-browser-action"
    ],
    "slug": "default-browser-action"
  },
  {
    "title": "Dispatch Events",
    "description": "We can not only assign handlers, but also generate events from JavaScript.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We can not only assign handlers, but also generate events from JavaScript.",
          "Custom events can be used to create \"graphical components\". For instance, a root element of our own JS-based menu may trigger events telling what happens with the menu: `open` (menu open), `select` (an item is selected) and so on. Another code may listen for the events and observe what's happening with the menu.",
          "We can generate not only completely new events, that we invent for our own purposes, but also built-in ones, such as `click`, `mousedown` etc. That may be helpful for automated testing."
        ]
      },
      {
        "heading": "Event constructor",
        "paragraphs": [
          "Built-in event classes form a hierarchy, similar to DOM element classes. The root is the built-in Event class.",
          "We can create `Event` objects like this:",
          "Arguments:",
          "By default both are false: `{bubbles: false, cancelable: false}`."
        ],
        "codeExamples": [
          {
            "title": "Event constructor",
            "code": "let event = new Event(type[, options]);",
            "explanation": "Example demonstrating event constructor."
          }
        ],
        "bulletPoints": [
          "*type* -- event type, a string like `\"click\"` or our own like `\"my-event\"`.",
          "*options* -- the object with two optional properties:",
          "`bubbles: true/false` -- if `true`, then the event bubbles.",
          "`cancelable: true/false` -- if `true`, then the \"default action\" may be prevented. Later we'll see what it means for custom events."
        ]
      },
      {
        "heading": "dispatchEvent",
        "paragraphs": [
          "After an event object is created, we should \"run\" it on an element using the call `elem.dispatchEvent(event)`.",
          "Then handlers react on it as if it were a regular browser event. If the event was created with the `bubbles` flag, then it bubbles.",
          "In the example below the `click` event is initiated in JavaScript. The handler works same way as if the button was clicked:"
        ],
        "codeExamples": [
          {
            "title": "dispatchEvent",
            "code": "<button id=\"elem\" onclick=\"alert('Click!');\">Autoclick</button>\n\n<script>\n  let event = new Event(\"click\");\n  elem.dispatchEvent(event);\n</script>",
            "explanation": "Example demonstrating dispatchevent."
          },
          {
            "title": "dispatchEvent",
            "code": "There is a way to tell a \"real\" user event from a script-generated one.\n\nThe property `event.isTrusted` is `true` for events that come from real user actions and `false` for script-generated events.",
            "explanation": "Example demonstrating dispatchevent."
          }
        ]
      },
      {
        "heading": "Bubbling example",
        "paragraphs": [
          "We can create a bubbling event with the name `\"hello\"` and catch it on `document`.",
          "All we need is to set `bubbles` to `true`:",
          "Notes:",
          "1. We should use `addEventListener` for our custom events, because `on` only exists for built-in events, `document.onhello` doesn't work.",
          "2. Must set `bubbles:true`, otherwise the event won't bubble up."
        ],
        "codeExamples": [
          {
            "title": "Bubbling example",
            "code": "<h1 id=\"elem\">Hello from the script!</h1>\n\n<script>\n  // catch on document...\n  document.addEventListener(\"hello\", function(event) { // (1)\n    alert(\"Hello from \" + event.target.tagName); // Hello from H1\n  });\n\n  // ...dispatch on elem!\n  let event = new Event(\"hello\", {bubbles: true}); // (2)\n  elem.dispatchEvent(event);\n\n  // the handler on document will activate and display the message.\n\n</script>",
            "explanation": "Example demonstrating bubbling example."
          }
        ]
      },
      {
        "heading": "MouseEvent, KeyboardEvent and others",
        "paragraphs": [
          "Here's a short list of classes for UI Events from the UI Event specification:",
          "We should use them instead of `new Event` if we want to create such events. For instance, `new MouseEvent(\"click\")`.",
          "The right constructor allows to specify standard properties for that type of event.",
          "Like `clientX/clientY` for a mouse event:",
          "Please note: the generic `Event` constructor does not allow that."
        ],
        "codeExamples": [
          {
            "title": "MouseEvent, KeyboardEvent and others",
            "code": "let event = new MouseEvent(\"click\", {\n  bubbles: true,\n  cancelable: true,\n  clientX: 100,\n  clientY: 100\n});\n\n*!*\nalert(event.clientX); // 100\n*/!*",
            "explanation": "Example demonstrating mouseevent, keyboardevent and others."
          },
          {
            "title": "MouseEvent, KeyboardEvent and others",
            "code": "let event = new Event(\"click\", {\n  bubbles: true, // only bubbles and cancelable\n  cancelable: true, // work in the Event constructor\n  clientX: 100,\n  clientY: 100\n});\n\n*!*\nalert(event.clientX); // undefined, the unknown property is ignored!\n*/!*",
            "explanation": "Example demonstrating mouseevent, keyboardevent and others."
          }
        ],
        "bulletPoints": [
          "`UIEvent`",
          "`FocusEvent`",
          "`MouseEvent`",
          "`WheelEvent`",
          "`KeyboardEvent`"
        ]
      },
      {
        "heading": "Custom events",
        "paragraphs": [
          "For our own, completely new events types like `\"hello\"` we should use `new CustomEvent`. Technically CustomEvent is the same as `Event`, with one exception.",
          "In the second argument (object) we can add an additional property `detail` for any custom information that we want to pass with the event.",
          "For instance:",
          "The `detail` property can have any data. Technically we could live without, because we can assign any properties into a regular `new Event` object after its creation. But `CustomEvent` provides the special `detail` field for it to evade conflicts with other event properties.",
          "Besides, the event class describes \"what kind of event\" it is, and if the event is custom, then we should use `CustomEvent` just to be clear about what it is."
        ],
        "codeExamples": [
          {
            "title": "Custom events",
            "code": "<h1 id=\"elem\">Hello for John!</h1>\n\n<script>\n  // additional details come with the event to the handler\n  elem.addEventListener(\"hello\", function(event) {\n    alert(*!*event.detail.name*/!*);\n  });\n\n  elem.dispatchEvent(new CustomEvent(\"hello\", {\n*!*\n    detail: { name: \"John\" }\n*/!*\n  }));\n</script>",
            "explanation": "Example demonstrating custom events."
          }
        ]
      },
      {
        "heading": "event.preventDefault()",
        "paragraphs": [
          "Many browser events have a \"default action\", such as navigating to a link, starting a selection, and so on.",
          "For new, custom events, there are definitely no default browser actions, but a code that dispatches such event may have its own plans what to do after triggering the event.",
          "By calling `event.preventDefault()`, an event handler may send a signal that those actions should be canceled.",
          "In that case the call to `elem.dispatchEvent(event)` returns `false`. And the code that dispatched it knows that it shouldn't continue.",
          "Let's see a practical example - a hiding rabbit (could be a closing menu or something else)."
        ],
        "codeExamples": [
          {
            "title": "event.preventDefault()",
            "code": "<pre id=\"rabbit\">\n  |\\   /|\n   \\|_|/\n   /. .\\\n  =\\_Y_/=\n   {>o<}\n</pre>\n<button onclick=\"hide()\">Hide()</button>\n\n<script>\n  function hide() {\n    let event = new CustomEvent(\"hide\", {\n      cancelable: true // without that flag preventDefault doesn't work\n    });\n    if (!rabbit.dispatchEvent(event)) {\n      alert('The action was prevented by a handler');\n    } else {\n      rabbit.hidden = true;\n    }\n  }\n\n  rabbit.addEventListener('hide', function(event) {\n    if (confirm(\"Call preventDefault?\")) {\n      event.preventDefault();\n    }\n  });\n</script>",
            "explanation": "Example demonstrating event.preventdefault()."
          }
        ]
      },
      {
        "heading": "Events-in-events are synchronous",
        "paragraphs": [
          "Usually events are processed in a queue. That is: if the browser is processing `onclick` and a new event occurs, e.g. mouse moved, then its handling is queued up, corresponding `mousemove` handlers will be called after `onclick` processing is finished.",
          "The notable exception is when one event is initiated from within another one, e.g. using `dispatchEvent`. Such events are processed immediately: the new event handlers are called, and then the current event handling is resumed.",
          "For instance, in the code below the `menu-open` event is triggered during the `onclick`.",
          "It's processed immediately, without waiting for `onclick` handler to end:",
          "The output order is: 1 -> nested -> 2."
        ],
        "codeExamples": [
          {
            "title": "Events-in-events are synchronous",
            "code": "<button id=\"menu\">Menu (click me)</button>\n\n<script>\n  menu.onclick = function() {\n    alert(1);\n\n    menu.dispatchEvent(new CustomEvent(\"menu-open\", {\n      bubbles: true\n    }));\n\n    alert(2);\n  };\n\n  // triggers between 1 and 2\n  document.addEventListener('menu-open', () => alert('nested'));\n</script>",
            "explanation": "Example demonstrating events-in-events are synchronous."
          },
          {
            "title": "Events-in-events are synchronous",
            "code": "<button id=\"menu\">Menu (click me)</button>\n\n<script>\n  menu.onclick = function() {\n    alert(1);\n\n    setTimeout(() => menu.dispatchEvent(new CustomEvent(\"menu-open\", {\n      bubbles: true\n    })));\n\n    alert(2);\n  };\n\n  document.addEventListener('menu-open', () => alert('nested'));\n</script>",
            "explanation": "Example demonstrating events-in-events are synchronous."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "To generate an event from code, we first need to create an event object.",
          "The generic `Event(name, options)` constructor accepts an arbitrary event name and the `options` object with two properties:",
          "Other constructors of native events like `MouseEvent`, `KeyboardEvent` and so on accept properties specific to that event type. For instance, `clientX` for mouse events.",
          "For custom events we should use `CustomEvent` constructor. It has an additional option named `detail`, we should assign the event-specific data to it. Then all handlers can access it as `event.detail`.",
          "Despite the technical possibility of generating browser events like `click` or `keydown`, we should use them with great care."
        ],
        "bulletPoints": [
          "`bubbles: true` if the event should bubble.",
          "`cancelable: true` if the `event.preventDefault()` should work.",
          "As a dirty hack to make 3rd-party libraries work the needed way, if they don't provide other means of interaction.",
          "For automated testing, to \"click the button\" in the script and see if the interface reacts correctly."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Dispatch Events",
        "description": "Apply your understanding of Dispatch Events. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Dispatch Events\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Dispatch Events\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Dispatch Events in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for dispatch events.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Dispatch Events is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Dispatch Events?",
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
      "Dispatch Events is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying dispatch events.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "dispatch-events"
    ],
    "slug": "dispatch-events"
  },
  {
    "title": "Mouse Events Basics",
    "description": "In this chapter we'll get into more details about mouse events and their properties.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In this chapter we'll get into more details about mouse events and their properties.",
          "Please note: such events may come not only from \"mouse devices\", but are also from other devices, such as phones and tablets, where they are emulated for compatibility."
        ]
      },
      {
        "heading": "Mouse event types",
        "paragraphs": [
          "We've already seen some of these events:",
          "`mousedown/mouseup`",
          ": Mouse button is clicked/released over an element.",
          "`mouseover/mouseout`",
          ": Mouse pointer comes over/out from an element."
        ]
      },
      {
        "heading": "Events order",
        "paragraphs": [
          "As you can see from the list above, a user action may trigger multiple events.",
          "For instance, a left-button click first triggers `mousedown`, when the button is pressed, then `mouseup` and `click` when it's released.",
          "In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order `mousedown` -> `mouseup` -> `click`."
        ],
        "codeExamples": [
          {
            "title": "Events order",
            "code": "Click the button below and you'll see the events. Try double-click too.\n\nOn the teststand below, all mouse events are logged, and if there is more than a 1 second delay between them, they are separated by a horizontal rule.\n\nAlso, we can see the `button` property that allows us to detect the mouse button; it's explained below.\n\n<input onmousedown=\"return logMouse(event)\" onmouseup=\"return logMouse(event)\" onclick=\"return logMouse(event)\" oncontextmenu=\"return logMouse(event)\" ondblclick=\"return logMouse(event)\" value=\"Click me with the right or the left mouse button\" type=\"button\"> <input onclick=\"logClear('test')\" value=\"Clear\" type=\"button\"> <form id=\"testform\" name=\"testform\"> <textarea style=\"font-size:12px;height:150px;width:360px;\"></textarea></form>",
            "explanation": "Example demonstrating events order."
          }
        ]
      },
      {
        "heading": "Mouse button",
        "paragraphs": [
          "Click-related events always have the `button` property, which allows to get the exact mouse button.",
          "We usually don't use it for `click` and `contextmenu` events, because the former happens only on left-click, and the latter -- only on right-click.",
          "On the other hand, `mousedown` and `mouseup` handlers may need `event.button`, because these events trigger on any button, so `button` allows to distinguish between \"right-mousedown\" and \"left-mousedown\".",
          "The possible values of `event.button` are:",
          "| Button state | `event.button` |"
        ],
        "codeExamples": [
          {
            "title": "Mouse button",
            "code": "Old code may use `event.which` property that's an old non-standard way of getting a button, with possible values:\n\n- `event.which == 1` \u2013 left button,\n- `event.which == 2` \u2013 middle button,\n- `event.which == 3` \u2013 right button.\n\nAs of now, `event.which` is deprecated, we shouldn't use it.",
            "explanation": "Example demonstrating mouse button."
          }
        ]
      },
      {
        "heading": "Modifiers: shift, alt, ctrl and meta",
        "paragraphs": [
          "All mouse events include the information about pressed modifier keys.",
          "Event properties:",
          "They are `true` if the corresponding key was pressed during the event.",
          "For instance, the button below only works on `key:Alt+Shift`+click:"
        ],
        "codeExamples": [
          {
            "title": "Modifiers: shift, alt, ctrl and meta",
            "code": "<button id=\"button\">Alt+Shift+Click on me!</button>\n\n<script>\n  button.onclick = function(event) {\n*!*\n    if (event.altKey && event.shiftKey) {\n*/!*\n      alert('Hooray!');\n    }\n  };\n</script>",
            "explanation": "Example demonstrating modifiers: shift, alt, ctrl and meta."
          },
          {
            "title": "Modifiers: shift, alt, ctrl and meta",
            "code": "On Windows and Linux there are modifier keys `key:Alt`, `key:Shift` and `key:Ctrl`. On Mac there's one more: `key:Cmd`, corresponding to the property `metaKey`.\n\nIn most applications, when Windows/Linux uses `key:Ctrl`, on Mac `key:Cmd` is used.\n\nThat is: where a Windows user presses `key:Ctrl+Enter` or `key:Ctrl+A`, a Mac user would press `key:Cmd+Enter` or `key:Cmd+A`, and so on.\n\nSo if we want to support combinations like `key:Ctrl`+click, then for Mac it makes sense to use `key:Cmd`+click. That's more comfortable for Mac users.\n\nEven if we'd like to force Mac users to `key:Ctrl`+click -- that's kind of difficult. The problem is: a left-click with `key:Ctrl` is interpreted as a *right-click* on MacOS, and it generates the `contextmenu` event, not `click` like Windows/Linux.\n\nSo if we want users of all operating systems to feel comfortable, then together with `ctrlKey` we should check `metaKey`.\n\nFor JS-code it means that we should check `if (event.ctrlKey || event.metaKey)`.",
            "explanation": "Example demonstrating modifiers: shift, alt, ctrl and meta."
          }
        ],
        "bulletPoints": [
          "`shiftKey`: `key:Shift`",
          "`altKey`: `key:Alt` (or `key:Opt` for Mac)",
          "`ctrlKey`: `key:Ctrl`",
          "`metaKey`: `key:Cmd` for Mac"
        ]
      },
      {
        "heading": "Coordinates: clientX/Y, pageX/Y",
        "paragraphs": [
          "All mouse events provide coordinates in two flavours:",
          "1. Window-relative: `clientX` and `clientY`.",
          "2. Document-relative: `pageX` and `pageY`.",
          "We already covered the difference between them in the chapter .",
          "In short, document-relative coordinates `pageX/Y` are counted from the left-upper corner of the document, and do not change when the page is scrolled, while `clientX/Y` are counted from the current window left-upper corner. When the page is scrolled, they change."
        ],
        "codeExamples": [
          {
            "title": "Coordinates: clientX/Y, pageX/Y",
            "code": "Move the mouse over the input field to see `clientX/clientY` (the example is in the `iframe`, so coordinates are relative to that `iframe`):",
            "explanation": "Example demonstrating coordinates: clientx/y, pagex/y."
          }
        ]
      },
      {
        "heading": "Preventing selection on mousedown",
        "paragraphs": [
          "Double mouse click has a side effect that may be disturbing in some interfaces: it selects text.",
          "For instance, double-clicking on the text below selects it in addition to our handler:",
          "If one presses the left mouse button and, without releasing it, moves the mouse, that also makes the selection, often unwanted.",
          "There are multiple ways to prevent the selection, that you can read in the chapter .",
          "In this particular case the most reasonable way is to prevent the browser action on `mousedown`. It prevents both these selections:"
        ],
        "codeExamples": [
          {
            "title": "Preventing selection on mousedown",
            "code": "<span ondblclick=\"alert('dblclick')\">Double-click me</span>",
            "explanation": "Example demonstrating preventing selection on mousedown."
          },
          {
            "title": "Preventing selection on mousedown",
            "code": "Before...\n<b ondblclick=\"alert('Click!')\" *!*onmousedown=\"return false\"*/!*>\n  Double-click me\n</b>\n...After",
            "explanation": "Example demonstrating preventing selection on mousedown."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Mouse events have the following properties:",
          "The default browser action of `mousedown` is text selection, if it's not good for the interface, then it should be prevented.",
          "In the next chapter we'll see more details about events that follow pointer movement and how to track element changes under it."
        ],
        "bulletPoints": [
          "Button: `button`.",
          "Modifier keys (`true` if pressed): `altKey`, `ctrlKey`, `shiftKey` and `metaKey` (Mac).",
          "If you want to handle `key:Ctrl`, then don't forget Mac users, they usually use `key:Cmd`, so it's better to check `if (e.metaKey || e.ctrlKey)`.",
          "Window-relative coordinates: `clientX/clientY`.",
          "Document-relative coordinates: `pageX/pageY`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Selectable list",
        "description": "Create a list where elements are selectable, like in file-managers. - A click on a list element selects only that element (adds the class `.selected`), deselects all others. - If a click is made with `key:Ctrl` (`key:Cmd` for Mac), then the selection is toggled on the element, but other elements are",
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
        "question": "What is the primary role of Mouse Events Basics in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for mouse events basics.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Mouse Events Basics is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Mouse Events Basics?",
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
      "Mouse Events Basics is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying mouse events basics.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "mouse-events-basics"
    ],
    "slug": "mouse-events-basics"
  },
  {
    "title": "Mousemove Mouseover Mouseout Mouseenter Mouseleave",
    "description": "Let's dive into more details about events that happen when the mouse moves between elements.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's dive into more details about events that happen when the mouse moves between elements."
        ]
      },
      {
        "heading": "Events mouseover/mouseout, relatedTarget",
        "paragraphs": [
          "The `mouseover` event occurs when a mouse pointer comes over an element, and `mouseout` -- when it leaves.",
          "![](mouseover-mouseout.svg)",
          "These events are special, because they have property `relatedTarget`. This property complements `target`. When a mouse leaves one element for another, one of them becomes `target`, and the other one - `relatedTarget`.",
          "For `mouseover`:",
          "For `mouseout` the reverse:"
        ],
        "codeExamples": [
          {
            "title": "Events mouseover/mouseout, relatedTarget",
            "code": "In the example below each face and its features are separate elements. When you move the mouse, you can see mouse events in the text area.\n\nEach event has the information about both `target` and `relatedTarget`:\n\n[codetabs src=\"mouseoverout\" height=280]",
            "explanation": "Example demonstrating events mouseover/mouseout, relatedtarget."
          },
          {
            "title": "Events mouseover/mouseout, relatedTarget",
            "code": "The `relatedTarget` property can be `null`.\n\nThat's normal and just means that the mouse came not from another element, but from out of the window. Or that it left the window.\n\nWe should keep that possibility in mind when using `event.relatedTarget` in our code. If we access `event.relatedTarget.tagName`, then there will be an error.",
            "explanation": "Example demonstrating events mouseover/mouseout, relatedtarget."
          }
        ],
        "bulletPoints": [
          "`event.target` -- is the element where the mouse came over.",
          "`event.relatedTarget` -- is the element from which the mouse came (`relatedTarget` -> `target`).",
          "`event.target` -- is the element that the mouse left.",
          "`event.relatedTarget` -- is the new under-the-pointer element, that mouse left for (`target` -> `relatedTarget`)."
        ]
      },
      {
        "heading": "Skipping elements",
        "paragraphs": [
          "The `mousemove` event triggers when the mouse moves. But that doesn't mean that every pixel leads to an event.",
          "The browser checks the mouse position from time to time. And if it notices changes then triggers the events.",
          "That means that if the visitor is moving the mouse very fast then some DOM-elements may be skipped:",
          "![](mouseover-mouseout-over-elems.svg)",
          "If the mouse moves very fast from `#FROM` to `#TO` elements as painted above, then intermediate `` elements (or some of them) may be skipped. The `mouseout` event may trigger on `#FROM` and then immediately `mouseover` on `#TO`."
        ],
        "codeExamples": [
          {
            "title": "Skipping elements",
            "code": "You can check it out \"live\" on a teststand below.\n\nIts HTML has two nested elements: the `<div id=\"child\">` is inside the `<div id=\"parent\">`. If you move the mouse fast over them, then maybe only the child div triggers events, or maybe the parent one, or maybe there will be no events at all.\n\nAlso move the pointer into the child `div`, and then move it out quickly down through the parent one. If the movement is fast enough, then the parent element is ignored. The mouse will cross the parent element without noticing it.\n\n[codetabs height=360 src=\"mouseoverout-fast\"]",
            "explanation": "Example demonstrating skipping elements."
          },
          {
            "title": "Skipping elements",
            "code": "In case of fast mouse movements, intermediate elements may be ignored, but one thing we know for sure: if the pointer \"officially\" entered an element (`mouseover` event generated), then upon leaving it we always get `mouseout`.",
            "explanation": "Example demonstrating skipping elements."
          }
        ]
      },
      {
        "heading": "Mouseout when leaving for a child",
        "paragraphs": [
          "An important feature of `mouseout` -- it triggers, when the pointer moves from an element to its descendant, e.g. from `#parent` to `#child` in this HTML:",
          "If we're on `#parent` and then move the pointer deeper into `#child`, we get `mouseout` on `#parent`!",
          "![](mouseover-to-child.svg)",
          "That may seem strange, but can be easily explained.",
          "**According to the browser logic, the mouse cursor may be only over a *single* element at any time -- the most nested one and top by z-index.**"
        ],
        "codeExamples": [
          {
            "title": "Mouseout when leaving for a child",
            "code": "<div id=\"parent\">\n  <div id=\"child\">...</div>\n</div>",
            "explanation": "Example demonstrating mouseout when leaving for a child."
          },
          {
            "title": "Mouseout when leaving for a child",
            "code": "You can see that very well in the example below: `<div id=\"child\">` is inside the `<div id=\"parent\">`. There are `mouseover/out` handlers on `#parent` element that output event details.\n\nIf you move the mouse from `#parent` to `#child`, you see two events on `#parent`:\n1. `mouseout [target: parent]` (left the parent), then\n2. `mouseover [target: child]` (came to the child, bubbled).\n\n[codetabs height=360 src=\"mouseoverout-child\"]",
            "explanation": "Example demonstrating mouseout when leaving for a child."
          }
        ]
      },
      {
        "heading": "Events mouseenter and mouseleave",
        "paragraphs": [
          "Events `mouseenter/mouseleave` are like `mouseover/mouseout`. They trigger when the mouse pointer enters/leaves the element.",
          "But there are two important differences:",
          "1. Transitions inside the element, to/from descendants, are not counted.",
          "2. Events `mouseenter/mouseleave` do not bubble.",
          "These events are extremely simple."
        ],
        "codeExamples": [
          {
            "title": "Events mouseenter and mouseleave",
            "code": "This example is similar to the one above, but now the top element has `mouseenter/mouseleave` instead of `mouseover/mouseout`.\n\nAs you can see, the only generated events are the ones related to moving the pointer in and out of the top element. Nothing happens when the pointer goes to the child and back. Transitions between descendants are ignored\n\n[codetabs height=340 src=\"mouseleave\"]",
            "explanation": "Example demonstrating events mouseenter and mouseleave."
          }
        ]
      },
      {
        "heading": "Event delegation",
        "paragraphs": [
          "Events `mouseenter/leave` are very simple and easy to use. But they do not bubble. So we can't use event delegation with them.",
          "Imagine we want to handle mouse enter/leave for table cells. And there are hundreds of cells.",
          "The natural solution would be -- to set the handler on `` and process events there. But `mouseenter/leave` don't bubble. So if such event happens on ``, then only a handler on that `` is able to catch it.",
          "Handlers for `mouseenter/leave` on `` only trigger when the pointer enters/leaves the table as a whole. It's impossible to get any information about transitions inside it.",
          "So, let's use `mouseover/mouseout`."
        ],
        "codeExamples": [
          {
            "title": "Event delegation",
            "code": "// let's highlight an element under the pointer\ntable.onmouseover = function(event) {\n  let target = event.target;\n  target.style.background = 'pink';\n};\n\ntable.onmouseout = function(event) {\n  let target = event.target;\n  target.style.background = '';\n};",
            "explanation": "Example demonstrating event delegation."
          },
          {
            "title": "Event delegation",
            "code": "Here they are in action. As the mouse travels across the elements of this table, the current one is highlighted:\n\n[codetabs height=480 src=\"mouseenter-mouseleave-delegation\"]",
            "explanation": "Example demonstrating event delegation."
          }
        ],
        "bulletPoints": [
          "Remember the currently highlighted `` in a variable, let's call it `currentElem`.",
          "On `mouseover` -- ignore the event if we're still inside the current ``.",
          "On `mouseout` -- ignore if we didn't leave the current ``."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We covered events `mouseover`, `mouseout`, `mousemove`, `mouseenter` and `mouseleave`.",
          "These things are good to note:",
          "Events `mouseover/out` trigger even when we go from the parent element to a child element. The browser assumes that the mouse can be only over one element at one time -- the deepest one.",
          "Events `mouseenter/leave` are different in that aspect: they only trigger when the mouse comes in and out the element as a whole. Also they do not bubble."
        ],
        "bulletPoints": [
          "A fast mouse move may skip intermediate elements.",
          "Events `mouseover/out` and `mouseenter/leave` have an additional property: `relatedTarget`. That's the element that we are coming from/to, complementary to `target`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Improved tooltip behavior",
        "description": "Write JavaScript that shows a tooltip over an element with the attribute `data-tooltip`. The value of this attribute should become the tooltip text. That's like the task , but here the annotated elements can be nested. The most deeply nested tooltip is shown. Only one tooltip may show up at the same",
        "starterCode": "<div data-tooltip=\"Here \u2013 is the house interior\" id=\"house\">\n  <div data-tooltip=\"Here \u2013 is the roof\" id=\"roof\"></div>\n  ...\n  <a href=\"https://en.wikipedia.org/wiki/The_Three_Little_Pigs\" data-tooltip=\"Read on\u2026\">Hover over me</a>\n</div>",
        "solution": "<div data-tooltip=\"Here \u2013 is the house interior\" id=\"house\">\n  <div data-tooltip=\"Here \u2013 is the roof\" id=\"roof\"></div>\n  ...\n  <a href=\"https://en.wikipedia.org/wiki/The_Three_Little_Pigs\" data-tooltip=\"Read on\u2026\">Hover over me</a>\n</div>",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "\"Smart\" tooltip",
        "description": "Write a function that shows a tooltip over an element only if the visitor moves the mouse *to it*, but not *through it*. In other words, if the visitor moves the mouse to the element and stops there -- show the tooltip. And if they just moved the mouse through, then no need, who wants extra blinking",
        "starterCode": "// a sample tooltip\nlet tooltip = document.createElement('div');\ntooltip.className = \"tooltip\";\ntooltip.innerHTML = \"Tooltip\";\n\n// the object will track mouse and call over/out\nnew HoverIntent({\n  elem,\n  over() {\n    tooltip.style.left = elem.getBoundingClientRect().left + 'px';\n    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';\n    document.body.append(tooltip);\n  },\n  out() {\n    tooltip.remove();\n  }\n});",
        "solution": "// a sample tooltip\nlet tooltip = document.createElement('div');\ntooltip.className = \"tooltip\";\ntooltip.innerHTML = \"Tooltip\";\n\n// the object will track mouse and call over/out\nnew HoverIntent({\n  elem,\n  over() {\n    tooltip.style.left = elem.getBoundingClientRect().left + 'px';\n    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';\n    document.body.append(tooltip);\n  },\n  out() {\n    tooltip.remove();\n  }\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Mousemove Mouseover Mouseout Mouseenter Mouseleave in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for mousemove mouseover mouseout mouseenter mouseleave.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Mousemove Mouseover Mouseout Mouseenter Mouseleave is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Mousemove Mouseover Mouseout Mouseenter Mouseleave?",
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
      "Mousemove Mouseover Mouseout Mouseenter Mouseleave is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying mousemove mouseover mouseout mouseenter mouseleave.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "mousemove-mouseover-mouseout-mouseenter-mouseleave"
    ],
    "slug": "mousemove-mouseover-mouseout-mouseenter-mouseleave"
  },
  {
    "title": "Mouse Drag And Drop",
    "description": "Drag'n'Drop is a great interface solution. Taking something and dragging and dropping it is a clear and simple way to do many things, from copying and moving documents (as in file ...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Drag'n'Drop is a great interface solution. Taking something and dragging and dropping it is a clear and simple way to do many things, from copying and moving documents (as in file managers) to ordering (dropping items into a cart).",
          "In the modern HTML standard there's a section about Drag and Drop with special events such as `dragstart`, `dragend`, and so on.",
          "These events allow us to support special kinds of drag'n'drop, such as handling dragging a file from OS file-manager and dropping it into the browser window. Then JavaScript can access the contents of such files.",
          "But native Drag Events also have limitations. For instance, we can't prevent dragging from a certain area. Also we can't make the dragging \"horizontal\" or \"vertical\" only. And there are many other drag'n'drop tasks that can't be done using them. Also, mobile device support for such events is very weak.",
          "So here we'll see how to implement Drag'n'Drop using mouse events."
        ]
      },
      {
        "heading": "Drag'n'Drop algorithm",
        "paragraphs": [
          "The basic Drag'n'Drop algorithm looks like this:",
          "1. On `mousedown` - prepare the element for moving, if needed (maybe create a clone of it, add a class to it or whatever).",
          "2. Then on `mousemove` move it by changing `left/top` with `position:absolute`.",
          "3. On `mouseup` - perform all actions related to finishing the drag'n'drop.",
          "These are the basics. Later we'll see how to add other features, such as highlighting current underlying elements while we drag over them."
        ],
        "codeExamples": [
          {
            "title": "Drag'n'Drop algorithm",
            "code": "ball.onmousedown = function(event) {\n  // (1) prepare to moving: make absolute and on top by z-index\n  ball.style.position = 'absolute';\n  ball.style.zIndex = 1000;\n\n  // move it out of any current parents directly into body\n  // to make it positioned relative to the body\n  document.body.append(ball);\n\n  // centers the ball at (pageX, pageY) coordinates\n  function moveAt(pageX, pageY) {\n    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';\n    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';\n  }\n\n  // move our absolutely positioned ball under the pointer\n  moveAt(event.pageX, event.pageY);\n\n  function onMouseMove(event) {\n    moveAt(event.pageX, event.pageY);\n  }\n\n  // (2) move the ball on mousemove\n  document.addEventListener('mousemove', onMouseMove);\n\n  // (3) drop the ball, remove unneeded handlers\n  ball.onmouseup = function() {\n    document.removeEventListener('mousemove', onMouseMove);\n    ball.onmouseup = null;\n  };\n\n};",
            "explanation": "Example demonstrating drag'n'drop algorithm."
          },
          {
            "title": "Drag'n'Drop algorithm",
            "code": "Here's an example in action:\n\n[iframe src=\"ball\" height=230]\n\nTry to drag'n'drop with the mouse and you'll see such behavior.",
            "explanation": "Example demonstrating drag'n'drop algorithm."
          }
        ]
      },
      {
        "heading": "Correct positioning",
        "paragraphs": [
          "In the examples above the ball is always moved so that its center is under the pointer:",
          "Not bad, but there's a side effect. To initiate the drag'n'drop, we can `mousedown` anywhere on the ball. But if \"take\" it from its edge, then the ball suddenly \"jumps\" to become centered under the mouse pointer.",
          "It would be better if we keep the initial shift of the element relative to the pointer.",
          "For instance, if we start dragging by the edge of the ball, then the pointer should remain over the edge while dragging.",
          "![](ball_shift.svg)"
        ],
        "codeExamples": [
          {
            "title": "Correct positioning",
            "code": "ball.style.left = pageX - ball.offsetWidth / 2 + 'px';\nball.style.top = pageY - ball.offsetHeight / 2 + 'px';",
            "explanation": "Example demonstrating correct positioning."
          },
          {
            "title": "Correct positioning",
            "code": "ball.onmousedown = function(event) {\n\n*!*\n  let shiftX = event.clientX - ball.getBoundingClientRect().left;\n  let shiftY = event.clientY - ball.getBoundingClientRect().top;\n*/!*\n\n  ball.style.position = 'absolute';\n  ball.style.zIndex = 1000;\n  document.body.append(ball);\n\n  moveAt(event.pageX, event.pageY);\n\n  // moves the ball at (pageX, pageY) coordinates\n  // taking initial shifts into account\n  function moveAt(pageX, pageY) {\n    ball.style.left = pageX - *!*shiftX*/!* + 'px';\n    ball.style.top = pageY - *!*shiftY*/!* + 'px';\n  }\n\n  function onMouseMove(event) {\n    moveAt(event.pageX, event.pageY);\n  }\n\n  // move the ball on mousemove\n  document.addEventListener('mousemove', onMouseMove);\n\n  // drop the ball, remove unneeded handlers\n  ball.onmouseup = function() {\n    document.removeEventListener('mousemove', onMouseMove);\n    ball.onmouseup = null;\n  };\n\n};\n\nball.ondragstart = function() {\n  return false;\n};",
            "explanation": "Example demonstrating correct positioning."
          }
        ]
      },
      {
        "heading": "Potential drop targets (droppables)",
        "paragraphs": [
          "In previous examples the ball could be dropped just \"anywhere\" to stay. In real-life we usually take one element and drop it onto another. For instance, a \"file\" into a \"folder\" or something else.",
          "Speaking abstract, we take a \"draggable\" element and drop it onto \"droppable\" element.",
          "We need to know:",
          "The solution is kind-of interesting and just a little bit tricky, so let's cover it here.",
          "What may be the first idea? Probably to set `mouseover/mouseup` handlers on potential droppables?"
        ],
        "codeExamples": [
          {
            "title": "Potential drop targets (droppables)",
            "code": "<style>\n  div {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: 0;\n  }\n</style>\n<div style=\"background:blue\" onmouseover=\"alert('never works')\"></div>\n<div style=\"background:red\" onmouseover=\"alert('over red!')\"></div>",
            "explanation": "Example demonstrating potential drop targets (droppables)."
          },
          {
            "title": "Potential drop targets (droppables)",
            "code": "// in a mouse event handler\nball.hidden = true; // (*) hide the element that we drag\n\nlet elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n// elemBelow is the element below the ball, may be droppable\n\nball.hidden = false;",
            "explanation": "Example demonstrating potential drop targets (droppables)."
          }
        ],
        "bulletPoints": [
          "where the element was dropped at the end of Drag'n'Drop -- to do the corresponding action,",
          "and, preferably, know the droppable we're dragging over, to highlight it."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We considered a basic Drag'n'Drop algorithm.",
          "The key components:",
          "1. Events flow: `ball.mousedown` -> `document.mousemove` -> `ball.mouseup` (don't forget to cancel native `ondragstart`).",
          "2. At the drag start -- remember the initial shift of the pointer relative to the element: `shiftX/shiftY` and keep it during the dragging.",
          "3. Detect droppable elements under the pointer using `document.elementFromPoint`."
        ],
        "bulletPoints": [
          "On `mouseup` we can intellectually finalize the drop: change data, move elements around.",
          "We can highlight the elements we're flying over.",
          "We can limit dragging by a certain area or direction.",
          "We can use event delegation for `mousedown/up`. A large-area event handler that checks `event.target` can manage Drag'n'Drop for hundreds of elements.",
          "And so on."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Slider",
        "description": "Create a slider: [iframe src=\"solution\" height=60 border=1] Drag the blue thumb with the mouse and move it. Important details: - When the mouse button is pressed, during the dragging the mouse may go over or below the slider. The slider will still work (convenient for the user). - If the mouse moves",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Drag superheroes around the field",
        "description": "This task can help you to check understanding of several aspects of Drag'n'Drop and DOM. Make all elements with class `draggable` -- draggable. Like a ball in the chapter. Requirements: - Use event delegation to track drag start: a single event handler on `document` for `mousedown`. - If elements ar",
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
        "question": "What is the primary role of Mouse Drag And Drop in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for mouse drag and drop.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Mouse Drag And Drop is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Mouse Drag And Drop?",
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
      "Mouse Drag And Drop is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying mouse drag and drop.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "mouse-drag-and-drop"
    ],
    "slug": "mouse-drag-and-drop"
  },
  {
    "title": "Pointer Events",
    "description": "Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on."
        ]
      },
      {
        "heading": "The brief history",
        "paragraphs": [
          "Let's make a small overview, so that you understand the general picture and the place of Pointer Events among other event types.",
          "Then touch devices became widespread, phones and tablets in particular. For the existing scripts to work, they generated (and still generate) mouse events. For instance, tapping a touchscreen generates `mousedown`. So touch devices worked well with web pages.",
          "But touch devices have more capabilities than a mouse. For example, it's possible to touch multiple points at once (\"multi-touch\"). Although, mouse events don't have necessary properties to handle such multi-touches.",
          "Still, it wasn't enough, as there are many other devices, such as pens, that have their own features. Also, writing code that listens for both touch and mouse events was cumbersome.",
          "As of now, Pointer Events Level 2 specification is supported in all major browsers, while the newer Pointer Events Level 3 is in the works and is mostly compatible with Pointer Events level 2."
        ],
        "bulletPoints": [
          "Long ago, in the past, there were only mouse events.",
          "So touch events were introduced, such as `touchstart`, `touchend`, `touchmove`, that have touch-specific properties (we don't cover them in detail here, because pointer events are even better).",
          "To solve these issues, the new standard Pointer Events was introduced. It provides a single set of events for all kinds of pointing devices."
        ]
      },
      {
        "heading": "Pointer event types",
        "paragraphs": [
          "Pointer events are named similarly to mouse events:",
          "| Pointer event | Similar mouse event |",
          "|---------------|-------------|",
          "| `pointerdown` | `mousedown` |",
          "| `pointerup` | `mouseup` |"
        ],
        "codeExamples": [
          {
            "title": "Pointer event types",
            "code": "We can replace `mouse<event>` events with `pointer<event>` in our code and expect things to continue working fine with mouse.\n\nThe support for touch devices will also \"magically\" improve. Although, we may need to add `touch-action: none` in some places in CSS. We'll cover it below in the section about `pointercancel`.",
            "explanation": "Example demonstrating pointer event types."
          }
        ]
      },
      {
        "heading": "Pointer event properties",
        "paragraphs": [
          "Pointer events have the same properties as mouse events, such as `clientX/Y`, `target`, etc., plus some others:",
          "Browser-generated. Allows us to handle multiple pointers, such as a touchscreen with stylus and multi-touch (examples will follow).",
          "We can use this property to react differently on various pointer types.",
          "Some pointer devices measure contact area and pressure, e.g. for a finger on the touchscreen, there are additional properties for that:",
          "These properties aren't supported by most devices, so they are rarely used. You can find the details about them in the specification if needed."
        ],
        "bulletPoints": [
          "`pointerId` - the unique identifier of the pointer causing the event.",
          "`pointerType` - the pointing device type. Must be a string, one of: \"mouse\", \"pen\" or \"touch\".",
          "`isPrimary` - is `true` for the primary pointer (the first finger in multi-touch).",
          "`width` - the width of the area where the pointer (e.g. a finger) touches the device. Where unsupported, e.g. for a mouse, it's always `1`.",
          "`height` - the height of the area where the pointer touches the device. Where unsupported, it's always `1`."
        ]
      },
      {
        "heading": "Multi-touch",
        "paragraphs": [
          "One of the things that mouse events totally don't support is multi-touch: a user can touch in several places at once on their phone or tablet, or perform special gestures.",
          "Pointer Events allow handling multi-touch with the help of the `pointerId` and `isPrimary` properties.",
          "Here's what happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it:",
          "1. At the first finger touch:",
          "2. For the second finger and more fingers (assuming the first one is still touching):"
        ],
        "codeExamples": [
          {
            "title": "Multi-touch",
            "code": "Here's the demo that logs `pointerdown` and `pointerup` events:\n\n[iframe src=\"multitouch\" edit height=200]\n\nPlease note: you must be using a touchscreen device, such as a phone or a tablet, to actually see the difference in `pointerId/isPrimary`. For single-touch devices, such as a mouse, there'll be always same `pointerId` with `isPrimary=true`, for all pointer events.",
            "explanation": "Example demonstrating multi-touch."
          }
        ],
        "bulletPoints": [
          "`pointerdown` with `isPrimary=true` and some `pointerId`.",
          "`pointerdown` with `isPrimary=false` and a different `pointerId` for every finger."
        ]
      },
      {
        "heading": "Event: pointercancel",
        "paragraphs": [
          "The `pointercancel` event fires when there's an ongoing pointer interaction, and then something happens that causes it to be aborted, so that no more pointer events are generated.",
          "Such causes are:",
          "We'll demonstrate `pointercancel` on a practical example to see how it affects us.",
          "Let's say we're implementing drag'n'drop for a ball, just as in the beginning of the article .",
          "Here is the flow of user actions and the corresponding events:"
        ],
        "codeExamples": [
          {
            "title": "Event: pointercancel",
            "code": "Here's the drag'n'drop demo with logging of pointer events (only `up/down`, `move` and `cancel`) in the `textarea`:\n\n[iframe src=\"ball\" height=240 edit]",
            "explanation": "Example demonstrating event: pointercancel."
          },
          {
            "title": "Event: pointercancel",
            "code": "This demo adds these lines:\n\n[iframe src=\"ball-2\" height=240 edit]\n\nAs you can see, there's no `pointercancel` any more.",
            "explanation": "Example demonstrating event: pointercancel."
          }
        ],
        "bulletPoints": [
          "The pointer device hardware was physically disabled.",
          "The device orientation changed (tablet rotated).",
          "The browser decided to handle the interaction on its own, considering it a mouse gesture or zoom-and-pan action or something else.",
          "`pointerdown` event fires",
          "`pointermove` fires, maybe several times"
        ]
      },
      {
        "heading": "Pointer capturing",
        "paragraphs": [
          "Pointer capturing is a special feature of pointer events.",
          "The idea is very simple, but may seem quite odd at first, as nothing like that exists for any other event type.",
          "The main method is:",
          "In other words, `elem.setPointerCapture(pointerId)` retargets all subsequent events with the given `pointerId` to `elem`.",
          "The binding is removed:"
        ],
        "codeExamples": [
          {
            "title": "Pointer capturing",
            "code": "<div class=\"slider\">\n  <div class=\"thumb\"></div>\n</div>",
            "explanation": "Example demonstrating pointer capturing."
          },
          {
            "title": "Pointer capturing",
            "code": "thumb.onpointerdown = function(event) {\n  // retarget all pointer events (until pointerup) to thumb\n  thumb.setPointerCapture(event.pointerId);\n\n  // start tracking pointer moves\n  thumb.onpointermove = function(event) {\n    // moving the slider: listen on the thumb, as all pointer events are retargeted to it\n    let newLeft = event.clientX - slider.getBoundingClientRect().left;\n    thumb.style.left = newLeft + 'px';\n  };\n\n  // on pointer up finish tracking pointer moves\n  thumb.onpointerup = function(event) {\n    thumb.onpointermove = null;\n    thumb.onpointerup = null;\n    // ...also process the \"drag end\" if needed\n  };\n};\n\n// note: no need to call thumb.releasePointerCapture,\n// it happens on pointerup automatically",
            "explanation": "Example demonstrating pointer capturing."
          }
        ],
        "bulletPoints": [
          "`elem.setPointerCapture(pointerId)` -- binds events with the given `pointerId` to `elem`. After the call all pointer events with the same `pointerId` will have `elem` as the target (as if happened on `elem`), no matter where in document they really happened.",
          "automatically when `pointerup` or `pointercancel` events occur,",
          "automatically when `elem` is removed from the document,",
          "when `elem.releasePointerCapture(pointerId)` is called.",
          "...As the pointer moves, it may leave the slider `thumb` element, go above or below it. The `thumb` should move strictly horizontally, remaining aligned with the pointer."
        ]
      },
      {
        "heading": "Pointer capturing events",
        "paragraphs": [
          "There's one more thing to mention here, for the sake of completeness.",
          "There are two events associated with pointer capturing:"
        ],
        "bulletPoints": [
          "`gotpointercapture` fires when an element uses `setPointerCapture` to enable capturing.",
          "`lostpointercapture` fires when the capture is released: either explicitly with `releasePointerCapture` call, or automatically on `pointerup`/`pointercancel`."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Pointer events allow handling mouse, touch and pen events simultaneously, with a single piece of code.",
          "Pointer events extend mouse events. We can replace `mouse` with `pointer` in event names and expect our code to continue working for mouse, with better support for other device types.",
          "For drag'n'drops and complex touch interactions that the browser may decide to hijack and handle on its own - remember to cancel the default action on events and set `touch-action: none` in CSS for elements that we engage.",
          "Additional abilities of pointer events are:",
          "As of now, pointer events are supported in all major browsers, so we can safely switch to them, especially if IE10- and Safari 12- are not needed. And even with those browsers, there are polyfills that enable the support of pointer events."
        ],
        "bulletPoints": [
          "Multi-touch support using `pointerId` and `isPrimary`.",
          "Device-specific properties, such as `pressure`, `width/height`, and others.",
          "Pointer capturing: we can retarget all pointer events to a specific element until `pointerup`/`pointercancel`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Pointer Events",
        "description": "Apply your understanding of Pointer Events. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Pointer Events\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Pointer Events\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Pointer Events in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for pointer events.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Pointer Events is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Pointer Events?",
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
      "Pointer Events is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying pointer events.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "pointer-events"
    ],
    "slug": "pointer-events"
  },
  {
    "title": "Keyboard Events",
    "description": "Before we get to keyboard, please note that on modern devices there are other ways to \"input something\". For instance, people use speech recognition (especially on mobile devices) ...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Before we get to keyboard, please note that on modern devices there are other ways to \"input something\". For instance, people use speech recognition (especially on mobile devices) or copy/paste with the mouse.",
          "So if we want to track any input into an `` field, then keyboard events are not enough. There's another event named `input` to track changes of an `` field, by any means. And it may be a better choice for such task. We'll cover it later in the chapter .",
          "Keyboard events should be used when we want to handle keyboard actions (virtual keyboard also counts). For instance, to react on arrow keys `key:Up` and `key:Down` or hotkeys (including combinations of keys)."
        ]
      },
      {
        "heading": "Teststand [#keyboard-test-stand]",
        "paragraphs": [
          "Understanding Teststand [#keyboard-test-stand] in JavaScript."
        ],
        "codeExamples": [
          {
            "title": "Teststand [#keyboard-test-stand]",
            "code": "To better understand keyboard events, you can use the [teststand](sandbox:keyboard-dump).",
            "explanation": "Example demonstrating teststand [#keyboard-test-stand]."
          },
          {
            "title": "Teststand [#keyboard-test-stand]",
            "code": "To better understand keyboard events, you can use the teststand below.\n\nTry different key combinations in the text field.\n\n[codetabs src=\"keyboard-dump\" height=480]",
            "explanation": "Example demonstrating teststand [#keyboard-test-stand]."
          }
        ]
      },
      {
        "heading": "Keydown and keyup",
        "paragraphs": [
          "The `keydown` events happens when a key is pressed down, and then `keyup` -- when it's released."
        ]
      },
      {
        "heading": "event.code and event.key",
        "paragraphs": [
          "The `key` property of the event object allows to get the character, while the `code` property of the event object allows to get the \"physical key code\".",
          "For instance, the same key `key:Z` can be pressed with or without `key:Shift`. That gives us two different characters: lowercase `z` and uppercase `Z`.",
          "The `event.key` is exactly the character, and it will be different. But `event.code` is the same:",
          "| Key | `event.key` | `event.code` |",
          "|--------------|-------------|--------------|"
        ],
        "codeExamples": [
          {
            "title": "event.code and event.key",
            "code": "Every key has the code that depends on its location on the keyboard. Key codes described in the [UI Events code specification](https://www.w3.org/TR/uievents-code/).\n\nFor instance:\n- Letter keys have codes `\"Key<letter>\"`: `\"KeyA\"`, `\"KeyB\"` etc.\n- Digit keys have codes: `\"Digit<number>\"`: `\"Digit0\"`, `\"Digit1\"` etc.\n- Special keys are coded by their names: `\"Enter\"`, `\"Backspace\"`, `\"Tab\"` etc.\n\nThere are several widespread keyboard layouts, and the specification gives key codes for each of them.\n\nRead the [alphanumeric section of the spec](https://www.w3.org/TR/uievents-code/#key-alphanumeric-section) for more codes, or just press a key in the [teststand](#keyboard-test-stand) above.",
            "explanation": "Example demonstrating event.code and event.key."
          },
          {
            "title": "event.code and event.key",
            "code": "Seems obvious, but people still make mistakes.\n\nPlease evade mistypes: it's `KeyZ`, not `keyZ`. The check like `event.code==\"keyZ\"` won't work: the first letter of `\"Key\"` must be uppercase.",
            "explanation": "Example demonstrating event.code and event.key."
          }
        ]
      },
      {
        "heading": "Auto-repeat",
        "paragraphs": [
          "If a key is being pressed for a long enough time, it starts to \"auto-repeat\": the `keydown` triggers again and again, and then when it's released we finally get `keyup`. So it's kind of normal to have many `keydown` and a single `keyup`.",
          "For events triggered by auto-repeat, the event object has `event.repeat` property set to `true`."
        ]
      },
      {
        "heading": "Default actions",
        "paragraphs": [
          "Default actions vary, as there are many possible things that may be initiated by the keyboard.",
          "For instance:",
          "Preventing the default action on `keydown` can cancel most of them, with the exception of OS-based special keys. For instance, on Windows `key:Alt+F4` closes the current browser window. And there's no way to stop it by preventing the default action in JavaScript.",
          "For instance, the `` below expects a phone number, so it does not accept keys except digits, `+`, `()` or `-`:",
          "The `onkeydown` handler here uses `checkPhoneKey` to check for the key pressed. If it's valid (from `0..9` or one of `+-()`), then it returns `true`, otherwise `false`."
        ],
        "codeExamples": [
          {
            "title": "Default actions",
            "code": "<script>\nfunction checkPhoneKey(key) {\n  return (key >= '0' && key <= '9') || ['+','(',')','-'].includes(key);\n}\n</script>\n<input *!*onkeydown=\"return checkPhoneKey(event.key)\"*/!* placeholder=\"Phone, please\" type=\"tel\">",
            "explanation": "Example demonstrating default actions."
          },
          {
            "title": "Default actions",
            "code": "<script>\nfunction checkPhoneKey(key) {\n  return (key >= '0' && key <= '9') ||\n    ['+','(',')','-',*!*'ArrowLeft','ArrowRight','Delete','Backspace'*/!*].includes(key);\n}\n</script>\n<input onkeydown=\"return checkPhoneKey(event.key)\" placeholder=\"Phone, please\" type=\"tel\">",
            "explanation": "Example demonstrating default actions."
          }
        ],
        "bulletPoints": [
          "A character appears on the screen (the most obvious outcome).",
          "A character is deleted (`key:Delete` key).",
          "The page is scrolled (`key:PageDown` key).",
          "The browser opens the \"Save Page\" dialog (`key:Ctrl+S`)",
          "...and so on."
        ]
      },
      {
        "heading": "Legacy",
        "paragraphs": [
          "In the past, there was a `keypress` event, and also `keyCode`, `charCode`, `which` properties of the event object.",
          "There were so many browser incompatibilities while working with them, that developers of the specification had no way, other than deprecating all of them and creating new, modern events (described above in this chapter). The old code still works, as browsers keep supporting them, but there's totally no need to use those any more."
        ]
      },
      {
        "heading": "Mobile Keyboards",
        "paragraphs": [
          "When using virtual/mobile keyboards, formally known as IME (Input-Method Editor), the W3C standard states that a KeyboardEvent's `e.keyCode` should be `229` and `e.key` should be `\"Unidentified\"`.",
          "While some of these keyboards might still use the right values for `e.key`, `e.code`, `e.keyCode`... when pressing certain keys such as arrows or backspace, there's no guarantee, so your keyboard logic might not always work on mobile devices."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Pressing a key always generates a keyboard event, be it symbol keys or special keys like `key:Shift` or `key:Ctrl` and so on. The only exception is `key:Fn` key that sometimes presents on a laptop keyboard. There's no keyboard event for it, because it's often implemented on lower level than OS.",
          "Keyboard events:",
          "Main keyboard event properties:",
          "In the past, keyboard events were sometimes used to track user input in form fields. That's not reliable, because the input can come from various sources. We have `input` and `change` events to handle any input (covered later in the chapter ). They trigger after any kind of input, including copy-pasting or speech recognition.",
          "We should use keyboard events when we really want keyboard. For example, to react on hotkeys or special keys."
        ],
        "bulletPoints": [
          "`keydown` -- on pressing the key (auto-repeats if the key is pressed for long),",
          "`keyup` -- on releasing the key.",
          "`code` -- the \"key code\" (`\"KeyA\"`, `\"ArrowLeft\"` and so on), specific to the physical location of the key on keyboard.",
          "`key` -- the character (`\"A\"`, `\"a\"` and so on), for non-character keys, such as `key:Esc`, usually has the same value as `code`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Extended hotkeys",
        "description": "Create a function `runOnKeys(func, code1, code2, ... code_n)` that runs `func` on simultaneous pressing of keys with codes `code1`, `code2`, ..., `code_n`. For instance, the code below shows `alert` when `\"Q\"` and `\"W\"` are pressed together (in any language, with or without CapsLock) ```js no-beauti",
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
        "question": "What is the primary role of Keyboard Events in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for keyboard events.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Keyboard Events is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Keyboard Events?",
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
      "Keyboard Events is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying keyboard events.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "keyboard-events"
    ],
    "slug": "keyboard-events"
  },
  {
    "title": "Onscroll",
    "description": "The `scroll` event allows reacting to a page or element scrolling. There are quite a few good things we can do here.",
    "difficulty": "intermediate",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The `scroll` event allows reacting to a page or element scrolling. There are quite a few good things we can do here.",
          "For instance:",
          "Here's a small function to show the current scroll:",
          "The `scroll` event works both on the `window` and on scrollable elements."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "window.addEventListener('scroll', function() {\n  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';\n});",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "In action:\n\nCurrent scroll = <b id=\"showScroll\">scroll the window</b>",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "Show/hide additional controls or information depending on where in the document the user is.",
          "Load more data when the user scrolls down till the end of the page."
        ]
      },
      {
        "heading": "Prevent scrolling",
        "paragraphs": [
          "How do we make something unscrollable?",
          "We can't prevent scrolling by using `event.preventDefault()` in `onscroll` listener, because it triggers *after* the scroll has already happened.",
          "But we can prevent scrolling by `event.preventDefault()` on an event that causes the scroll, for instance `keydown` event for `key:pageUp` and `key:pageDown`.",
          "If we add an event handler to these events and `event.preventDefault()` in it, then the scroll won't start.",
          "There are many ways to initiate a scroll, so it's more reliable to use CSS, `overflow` property."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Endless page",
        "description": "Create an endless page. When a visitor scrolls it to the end, it auto-appends current date-time to the text (so that a visitor can scroll more). Like this: [iframe src=\"solution\" height=200] Please note two important features of the scroll: 1. **The scroll is \"elastic\".** We can scroll a little beyo",
        "starterCode": "// Write your code here\n",
        "solution": "// when we're on the top of the page\n// window-relative top = 0\ndocument.documentElement.getBoundingClientRect().top = 0\n\n// window-relative bottom = 2000\n// the document is long, so that is probably far beyond the window bottom\ndocument.documentElement.getBoundingClientRect().bottom = 2000",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Up/down button",
        "description": "Create a \"to the top\" button to help with page scrolling. It should work like this: - While the page is not scrolled down at least for the window height -- it's invisible. - When the page is scrolled down more than the window height -- there appears an \"upwards\" arrow in the left-top corner. If the ",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Load visible images",
        "description": "Let's say we have a slow-speed client and want to save their mobile traffic. For that purpose we decide not to show images immediately, but rather replace them with placeholders, like this: ```html ``` So, initially all images are `placeholder.svg`. When the page scrolls to the position where the us",
        "starterCode": "<img *!*src=\"placeholder.svg\"*/!* width=\"128\" height=\"128\" *!*data-src=\"real.jpg\"*/!*>",
        "solution": "// ...the page content is above...\n\nfunction isVisible(elem) {\n\n  let coords = elem.getBoundingClientRect();\n\n  let windowHeight = document.documentElement.clientHeight;\n\n  // top elem edge is visible?\n  let topVisible = coords.top > 0 && coords.top < windowHeight;\n\n  // bottom elem edge is visible?\n  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;\n\n  return topVisible || bottomVisible;\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Onscroll in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for onscroll.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Onscroll is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Onscroll?",
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
      "Onscroll is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying onscroll.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "onscroll"
    ],
    "slug": "onscroll"
  },
  {
    "title": "Form Elements",
    "description": "Forms and control elements, such as `` have a lot of special properties and events.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Forms and control elements, such as `` have a lot of special properties and events.",
          "Working with forms will be much more convenient when we learn them."
        ]
      },
      {
        "heading": "Navigation: form and elements",
        "paragraphs": [
          "Document forms are members of the special collection `document.forms`.",
          "That's a so-called *\"named collection\"*: it's both named and ordered. We can use both the name or the number in the document to get the form.",
          "When we have a form, then any element is available in the named collection `form.elements`.",
          "For instance:",
          "There may be multiple elements with the same name. This is typical with radio buttons and checkboxes."
        ],
        "codeExamples": [
          {
            "title": "Navigation: form and elements",
            "code": "document.forms.my; // the form with name=\"my\"\ndocument.forms[0]; // the first form in the document",
            "explanation": "Example demonstrating navigation: form and elements."
          },
          {
            "title": "Navigation: form and elements",
            "code": "<form name=\"my\">\n  <input name=\"one\" value=\"1\">\n  <input name=\"two\" value=\"2\">\n</form>\n\n<script>\n  // get the form\n  let form = document.forms.my; // <form name=\"my\"> element\n\n  // get the element\n  let elem = form.elements.one; // <input name=\"one\"> element\n\n  alert(elem.value); // 1\n</script>",
            "explanation": "Example demonstrating navigation: form and elements."
          }
        ]
      },
      {
        "heading": "Backreference: element.form",
        "paragraphs": [
          "For any element, the form is available as `element.form`. So a form references all elements, and elements reference the form.",
          "Here's the picture:",
          "![](form-navigation.svg)",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Backreference: element.form",
            "code": "<form id=\"form\">\n  <input type=\"text\" name=\"login\">\n</form>\n\n<script>\n*!*\n  // form -> element\n  let login = form.login;\n\n  // element -> form\n  alert(login.form); // HTMLFormElement\n*/!*\n</script>",
            "explanation": "Example demonstrating backreference: element.form."
          }
        ]
      },
      {
        "heading": "Form elements",
        "paragraphs": [
          "Let's talk about form controls."
        ]
      },
      {
        "heading": "input and textarea",
        "paragraphs": [
          "We can access their value as `input.value` (string) or `input.checked` (boolean) for checkboxes and radio buttons.",
          "Like this:"
        ],
        "codeExamples": [
          {
            "title": "input and textarea",
            "code": "input.value = \"New value\";\ntextarea.value = \"New text\";\n\ninput.checked = true; // for a checkbox or radio button",
            "explanation": "Example demonstrating input and textarea."
          },
          {
            "title": "input and textarea",
            "code": "Please note that even though `<textarea>...</textarea>` holds its value as nested HTML, we should never use `textarea.innerHTML` to access it.\n\nIt stores only the HTML that was initially on the page, not the current value.",
            "explanation": "Example demonstrating input and textarea."
          }
        ]
      },
      {
        "heading": "select and option",
        "paragraphs": [
          "A `` element has 3 important properties:",
          "1. `select.options` -- the collection of `` subelements,",
          "2. `select.value` -- the *value* of the currently selected ``,",
          "3. `select.selectedIndex` -- the *number* of the currently selected ``.",
          "They provide three different ways of setting a value for a ``:"
        ],
        "codeExamples": [
          {
            "title": "select and option",
            "code": "<select id=\"select\">\n  <option value=\"apple\">Apple</option>\n  <option value=\"pear\">Pear</option>\n  <option value=\"banana\">Banana</option>\n</select>\n\n<script>\n  // all three lines do the same thing\n  select.options[2].selected = true; \n  select.selectedIndex = 2;\n  select.value = 'banana';\n  // please note: options start from zero, so index 2 means the 3rd option.\n</script>",
            "explanation": "Example demonstrating select and option."
          },
          {
            "title": "select and option",
            "code": "<select id=\"select\" *!*multiple*/!*>\n  <option value=\"blues\" selected>Blues</option>\n  <option value=\"rock\" selected>Rock</option>\n  <option value=\"classic\">Classic</option>\n</select>\n\n<script>\n  // get all selected values from multi-select\n  let selected = Array.from(select.options)\n    .filter(option => option.selected)\n    .map(option => option.value);\n\n  alert(selected); // blues,rock  \n</script>",
            "explanation": "Example demonstrating select and option."
          }
        ]
      },
      {
        "heading": "new Option",
        "paragraphs": [
          "In the specification there's a nice short syntax to create an `` element:",
          "This syntax is optional. We can use `document.createElement('option')` and set attributes manually. Still, it may be shorter, so here are the parameters:",
          "The difference between `defaultSelected` and `selected` is that `defaultSelected` sets the HTML-attribute (that we can get using `option.getAttribute('selected')`), while `selected` sets whether the option is selected or not.",
          "In practice, one should usually set _both_ values to `true` or `false`. (Or, simply omit them; both default to `false`.)",
          "For instance, here's a new \"unselected\" option:"
        ],
        "codeExamples": [
          {
            "title": "new Option",
            "code": "option = new Option(text, value, defaultSelected, selected);",
            "explanation": "Example demonstrating new option."
          },
          {
            "title": "new Option",
            "code": "let option = new Option(\"Text\", \"value\");\n// creates <option value=\"value\">Text</option>",
            "explanation": "Example demonstrating new option."
          }
        ],
        "bulletPoints": [
          "`text` -- the text inside the option,",
          "`value` -- the option value,",
          "`defaultSelected` -- if `true`, then `selected` HTML-attribute is created,",
          "`selected` -- if `true`, then the option is selected."
        ]
      },
      {
        "heading": "References",
        "paragraphs": [
          "Understanding References in JavaScript."
        ],
        "bulletPoints": [
          "Specification: ."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Form navigation:",
          "`document.forms`",
          ": A form is available as `document.forms[name/index]`.",
          "`form.elements`",
          ": Form elements are available as `form.elements[name/index]`, or can use just `form[name/index]`. The `elements` property also works for ``."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Add an option to select",
        "description": "There's a ``: ```html Rock Blues ``` Use JavaScript to: 1. Show the value and the text of the selected option. 2. Add an option: `Classic`. 3. Make it selected. Note, if you've done everything right, your alert should show `blues`.",
        "starterCode": "<select id=\"genres\">\n  <option value=\"rock\">Rock</option>\n  <option value=\"blues\" selected>Blues</option>\n</select>",
        "solution": "<select id=\"genres\">\n  <option value=\"rock\">Rock</option>\n  <option value=\"blues\" selected>Blues</option>\n</select>",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Form Elements in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for form elements.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Form Elements is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Form Elements?",
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
      "Form Elements is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying form elements.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "form-elements"
    ],
    "slug": "form-elements"
  },
  {
    "title": "Focus Blur",
    "description": "An element receives the focus when the user either clicks on it or uses the `key:Tab` key on the keyboard. There's also an `autofocus` HTML attribute that puts the focus onto an el...",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "An element receives the focus when the user either clicks on it or uses the `key:Tab` key on the keyboard. There's also an `autofocus` HTML attribute that puts the focus onto an element by default when a page loads and other means of getting the focus.",
          "Focusing on an element generally means: \"prepare to accept the data here\", so that's the moment when we can run the code to initialize the required functionality.",
          "The moment of losing the focus (\"blur\") can be even more important. That's when a user clicks somewhere else or presses `key:Tab` to go to the next form field, or there are other means as well.",
          "Losing the focus generally means: \"the data has been entered\", so we can run the code to check it or even to save it to the server and so on.",
          "There are important peculiarities when working with focus events. We'll do the best to cover them further on."
        ]
      },
      {
        "heading": "Events focus/blur",
        "paragraphs": [
          "The `focus` event is called on focusing, and `blur` -- when the element loses the focus.",
          "Let's use them for validation of an input field.",
          "In the example below:",
          "Modern HTML allows us to do many validations using input attributes: `required`, `pattern` and so on. And sometimes they are just what we need. JavaScript can be used when we want more flexibility. Also we could automatically send the changed value to the server if it's correct."
        ],
        "codeExamples": [
          {
            "title": "Events focus/blur",
            "code": "<style>\n  .invalid { border-color: red; }\n  #error { color: red }\n</style>\n\nYour email please: <input type=\"email\" id=\"input\">\n\n<div id=\"error\"></div>\n\n<script>\n*!*input.onblur*/!* = function() {\n  if (!input.value.includes('@')) { // not email\n    input.classList.add('invalid');\n    error.innerHTML = 'Please enter a correct email.'\n  }\n};\n\n*!*input.onfocus*/!* = function() {\n  if (this.classList.contains('invalid')) {\n    // remove the \"error\" indication, because the user wants to re-enter something\n    this.classList.remove('invalid');\n    error.innerHTML = \"\";\n  }\n};\n</script>",
            "explanation": "Example demonstrating events focus/blur."
          }
        ],
        "bulletPoints": [
          "The `blur` handler checks if the field has an email entered, and if not -- shows an error.",
          "The `focus` handler hides the error message (on `blur` it will be checked again):"
        ]
      },
      {
        "heading": "Methods focus/blur",
        "paragraphs": [
          "Methods `elem.focus()` and `elem.blur()` set/unset the focus on the element.",
          "For instance, let's make the visitor unable to leave the input if the value is invalid:",
          "It works in all browsers except Firefox (bug).",
          "If we enter something into the input and then try to use `key:Tab` or click away from the ``, then `onblur` returns the focus back.",
          "Please note that we can't \"prevent losing focus\" by calling `event.preventDefault()` in `onblur`, because `onblur` works *after* the element lost the focus."
        ],
        "codeExamples": [
          {
            "title": "Methods focus/blur",
            "code": "<style>\n  .error {\n    background: red;\n  }\n</style>\n\nYour email please: <input type=\"email\" id=\"input\">\n<input type=\"text\" style=\"width:220px\" placeholder=\"make email invalid and try to focus here\">\n\n<script>\n  input.onblur = function() {\n    if (!this.value.includes('@')) { // not email\n      // show the error\n      this.classList.add(\"error\");\n*!*\n      // ...and put the focus back\n      input.focus();\n*/!*\n    } else {\n      this.classList.remove(\"error\");\n    }\n  };\n</script>",
            "explanation": "Example demonstrating methods focus/blur."
          },
          {
            "title": "Methods focus/blur",
            "code": "A focus loss can occur for many reasons.\n\nOne of them is when the visitor clicks somewhere else. But also JavaScript itself may cause it, for instance:\n\n- An `alert` moves focus to itself, so it causes the focus loss at the element (`blur` event), and when the `alert` is dismissed, the focus comes back (`focus` event).\n- If an element is removed from DOM, then it also causes the focus loss. If it is reinserted later, then the focus doesn't return.\n\nThese features sometimes cause `focus/blur` handlers to misbehave -- to trigger when they are not needed.\n\nThe best recipe is to be careful when using these events. If we want to track user-initiated focus-loss, then we should avoid causing it ourselves.",
            "explanation": "Example demonstrating methods focus/blur."
          }
        ]
      },
      {
        "heading": "Allow focusing on any element: tabindex",
        "paragraphs": [
          "By default, many elements do not support focusing.",
          "The list varies a bit between browsers, but one thing is always correct: `focus/blur` support is guaranteed for elements that a visitor can interact with: ``, ``, ``, `` and so on.",
          "On the other hand, elements that exist to format something, such as ``, ``, `` -- are unfocusable by default. The method `elem.focus()` doesn't work on them, and `focus/blur` events are never triggered.",
          "This can be changed using HTML-attribute `tabindex`.",
          "Any element becomes focusable if it has `tabindex`. The value of the attribute is the order number of the element when `key:Tab` (or something like that) is used to switch between them."
        ],
        "codeExamples": [
          {
            "title": "Allow focusing on any element: tabindex",
            "code": "Click the first item and press Tab. Keep track of the order. Please note that many subsequent Tabs can move the focus out of the iframe in the example.\n<ul>\n  <li tabindex=\"1\">One</li>\n  <li tabindex=\"0\">Zero</li>\n  <li tabindex=\"2\">Two</li>\n  <li tabindex=\"-1\">Minus one</li>\n</ul>\n\n<style>\n  li { cursor: pointer; }\n  :focus { outline: 1px dashed green; }\n</style>",
            "explanation": "Example demonstrating allow focusing on any element: tabindex."
          },
          {
            "title": "Allow focusing on any element: tabindex",
            "code": "We can add `tabindex` from JavaScript by using the `elem.tabIndex` property. That has the same effect.",
            "explanation": "Example demonstrating allow focusing on any element: tabindex."
          }
        ],
        "bulletPoints": [
          "`tabindex=\"0\"` puts an element among those without `tabindex`. That is, when we switch elements, elements with `tabindex=0` go after elements with `tabindex \u2265 1`.",
          "`tabindex=\"-1\"` allows only programmatic focusing on an element. The `key:Tab` key ignores such elements, but method `elem.focus()` works."
        ]
      },
      {
        "heading": "Delegation: focusin/focusout",
        "paragraphs": [
          "Events `focus` and `blur` do not bubble.",
          "For instance, we can't put `onfocus` on the `` to highlight it, like this:",
          "The example above doesn't work, because when user focuses on an ``, the `focus` event triggers on that input only. It doesn't bubble up. So `form.onfocus` never triggers.",
          "There are two solutions.",
          "First, there's a funny historical feature: `focus/blur` do not bubble up, but propagate down on the capturing phase."
        ],
        "codeExamples": [
          {
            "title": "Delegation: focusin/focusout",
            "code": "<!-- on focusing in the form -- add the class -->\n<form *!*onfocus=\"this.className='focused'\"*/!*>\n  <input type=\"text\" name=\"name\" value=\"Name\">\n  <input type=\"text\" name=\"surname\" value=\"Surname\">\n</form>\n\n<style> .focused { outline: 1px solid red; } </style>",
            "explanation": "Example demonstrating delegation: focusin/focusout."
          },
          {
            "title": "Delegation: focusin/focusout",
            "code": "<form id=\"form\">\n  <input type=\"text\" name=\"name\" value=\"Name\">\n  <input type=\"text\" name=\"surname\" value=\"Surname\">\n</form>\n\n<style> .focused { outline: 1px solid red; } </style>\n\n<script>\n*!*\n  // put the handler on capturing phase (last argument true)\n  form.addEventListener(\"focus\", () => form.classList.add('focused'), true);\n  form.addEventListener(\"blur\", () => form.classList.remove('focused'), true);\n*/!*\n</script>",
            "explanation": "Example demonstrating delegation: focusin/focusout."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Events `focus` and `blur` trigger on an element focusing/losing focus.",
          "Their specials are:",
          "The current focused element is available as `document.activeElement`."
        ],
        "bulletPoints": [
          "They do not bubble. Can use capturing state instead or `focusin/focusout`.",
          "Most elements do not support focus by default. Use `tabindex` to make anything focusable."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Editable div",
        "description": "Create a `` that turns into `` when clicked. The textarea allows to edit the HTML in the ``. When the user presses `key:Enter` or it loses focus, the `` turns back into ``, and its content becomes HTML in ``. [demo src=\"solution\"]",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Edit TD on click",
        "description": "Make table cells editable on click. - On click -- the cell should become \"editable\" (textarea appears inside), we can change HTML. There should be no resize, all geometry should remain the same. - Buttons OK and CANCEL appear below the cell to finish/cancel the editing. - Only one cell may be editab",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Keyboard-driven mouse",
        "description": "Focus on the mouse. Then use arrow keys to move it: [demo src=\"solution\"] P.S. Don't put event handlers anywhere except the `#mouse` element. P.P.S. Don't modify HTML/CSS, the approach should be generic and work with any element.",
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
        "question": "What is the primary role of Focus Blur in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for focus blur.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Focus Blur is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Focus Blur?",
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
      "Focus Blur is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying focus blur.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "focus-blur"
    ],
    "slug": "focus-blur"
  },
  {
    "title": "Events Change Input",
    "description": "Let's cover various events that accompany data updates.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's cover various events that accompany data updates."
        ]
      },
      {
        "heading": "Event: change",
        "paragraphs": [
          "The `change` event triggers when the element has finished changing.",
          "For text inputs that means that the event occurs when it loses focus.",
          "For instance, while we are typing in the text field below -- there's no event. But when we move the focus somewhere else, for instance, click on a button -- there will be a `change` event:",
          "For other elements: `select`, `input type=checkbox/radio` it triggers right after the selection changes:"
        ],
        "codeExamples": [
          {
            "title": "Event: change",
            "code": "<input type=\"text\" onchange=\"alert(this.value)\">\n<input type=\"button\" value=\"Button\">",
            "explanation": "Example demonstrating event: change."
          },
          {
            "title": "Event: change",
            "code": "<select onchange=\"alert(this.value)\">\n  <option value=\"\">Select something</option>\n  <option value=\"1\">Option 1</option>\n  <option value=\"2\">Option 2</option>\n  <option value=\"3\">Option 3</option>\n</select>",
            "explanation": "Example demonstrating event: change."
          }
        ]
      },
      {
        "heading": "Event: input",
        "paragraphs": [
          "The `input` event triggers every time after a value is modified by the user.",
          "Unlike keyboard events, it triggers on any value change, even those that does not involve keyboard actions: pasting with a mouse or using speech recognition to dictate the text.",
          "For instance:",
          "If we want to handle every modification of an `` then this event is the best choice.",
          "On the other hand, `input` event doesn't trigger on keyboard input and other actions that do not involve value change, e.g. pressing arrow keys `key:\u21e6` `key:\u21e8` while in the input."
        ],
        "codeExamples": [
          {
            "title": "Event: input",
            "code": "<input type=\"text\" id=\"input\"> oninput: <span id=\"result\"></span>\n<script>\n  input.oninput = function() {\n    result.innerHTML = input.value;\n  };\n</script>",
            "explanation": "Example demonstrating event: input."
          },
          {
            "title": "Event: input",
            "code": "The `input` event occurs after the value is modified.\n\nSo we can't use `event.preventDefault()` there -- it's just too late, there would be no effect.",
            "explanation": "Example demonstrating event: input."
          }
        ]
      },
      {
        "heading": "Events: cut, copy, paste",
        "paragraphs": [
          "These events occur on cutting/copying/pasting a value.",
          "They belong to ClipboardEvent class and provide access to the data that is cut/copied/pasted.",
          "We also can use `event.preventDefault()` to abort the action, then nothing gets copied/pasted.",
          "For instance, the code below prevents all `cut/copy/paste` events and shows the text we're trying to cut/copy/paste:",
          "Please note: inside `cut` and `copy` event handlers a call to `event.clipboardData.getData(...)` returns an empty string. That's because technically the data isn't in the clipboard yet. If we use `event.preventDefault()` it won't be copied at all."
        ],
        "codeExamples": [
          {
            "title": "Events: cut, copy, paste",
            "code": "<input type=\"text\" id=\"input\">\n<script>\n  input.onpaste = function(event) {\n    alert(\"paste: \" + event.clipboardData.getData('text/plain'));\n    event.preventDefault();\n  };\n\n  input.oncut = input.oncopy = function(event) {\n    alert(event.type + '-' + document.getSelection());\n    event.preventDefault();\n  };\n</script>",
            "explanation": "Example demonstrating events: cut, copy, paste."
          }
        ]
      },
      {
        "heading": "Safety restrictions",
        "paragraphs": [
          "The clipboard is a \"global\" OS-level thing. A user may switch between various applications, copy/paste different things, and a browser page shouldn't see all that.",
          "So most browsers allow seamless read/write access to the clipboard only in the scope of certain user actions, such as copying/pasting etc.",
          "It's forbidden to generate \"custom\" clipboard events with `dispatchEvent` in all browsers except Firefox. And even if we manage to dispatch such event, the specification clearly states that such \"synthetic\" events must not provide access to the clipboard.",
          "Even if someone decides to save `event.clipboardData` in an event handler, and then access it later -- it won't work.",
          "To reiterate, event.clipboardData works solely in the context of user-initiated event handlers."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Data change events:",
          "| Event | Description | Specials |",
          "|---------|----------|-------------|",
          "| `change`| A value was changed. | For text inputs triggers on focus loss. |",
          "| `input` | For text inputs on every change. | Triggers immediately unlike `change`. |"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Deposit calculator",
        "description": "Create an interface that allows to enter a sum of bank deposit and percentage, then calculates how much it will be after given periods of time. Here's the demo: [iframe src=\"solution\" height=\"350\" border=\"1\"] Any input change should be processed immediately. The formula is: ```js // initial: the ini",
        "starterCode": "// initial: the initial money sum\n// interest: e.g. 0.05 means 5% per year\n// years: how many years to wait\nlet result = Math.round(initial * (1 + interest) ** years);",
        "solution": "// initial: the initial money sum\n// interest: e.g. 0.05 means 5% per year\n// years: how many years to wait\nlet result = Math.round(initial * (1 + interest) ** years);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Events Change Input in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for events change input.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Events Change Input is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Events Change Input?",
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
      "Events Change Input is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying events change input.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "events-change-input"
    ],
    "slug": "events-change-input"
  },
  {
    "title": "Forms Submit",
    "description": "The `submit` event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScr...",
    "difficulty": "intermediate",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The `submit` event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScript.",
          "The method `form.submit()` allows to initiate form sending from JavaScript. We can use it to dynamically create and send our own forms to server.",
          "Let's see more details of them."
        ]
      },
      {
        "heading": "Event: submit",
        "paragraphs": [
          "There are two main ways to submit a form:",
          "1. The first -- to click `` or ``.",
          "2. The second -- press `key:Enter` on an input field.",
          "Both actions lead to `submit` event on the form. The handler can check the data, and if there are errors, show them and call `event.preventDefault()`, then the form won't be sent to the server.",
          "In the form below:"
        ],
        "codeExamples": [
          {
            "title": "Event: submit",
            "code": "<form onsubmit=\"alert('submit!');return false\">\n  First: Enter in the input field <input type=\"text\" value=\"text\"><br>\n  Second: Click \"submit\": <input type=\"submit\" value=\"Submit\">\n</form>",
            "explanation": "Example demonstrating event: submit."
          },
          {
            "title": "Event: submit",
            "code": "When a form is sent using `key:Enter` on an input field, a `click` event triggers on the `<input type=\"submit\">`.\n\nThat's rather funny, because there was no click at all.\n\nHere's the demo:",
            "explanation": "Example demonstrating event: submit."
          }
        ]
      },
      {
        "heading": "Method: submit",
        "paragraphs": [
          "To submit a form to the server manually, we can call `form.submit()`.",
          "Then the `submit` event is not generated. It is assumed that if the programmer calls `form.submit()`, then the script already did all related processing.",
          "Sometimes that's used to manually create and send a form, like this:"
        ],
        "codeExamples": [
          {
            "title": "Method: submit",
            "code": "let form = document.createElement('form');\nform.action = 'https://google.com/search';\nform.method = 'GET';\n\nform.innerHTML = '<input name=\"q\" value=\"test\">';\n\n// the form must be in the document to submit it\ndocument.body.append(form);\n\nform.submit();",
            "explanation": "Example demonstrating method: submit."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Modal form",
        "description": "Create a function `showPrompt(html, callback)` that shows a form with the message `html`, an input field and buttons `OK/CANCEL`. - A user should type something into a text field and press `key:Enter` or the OK button, then `callback(value)` is called with the value they entered. - Otherwise if the ",
        "starterCode": "showPrompt(\"Enter something<br>...smart :)\", function(value) {\n  alert(value);\n});",
        "solution": "showPrompt(\"Enter something<br>...smart :)\", function(value) {\n  alert(value);\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Forms Submit in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for forms submit.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Forms Submit is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Forms Submit?",
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
      "Forms Submit is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying forms submit.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "forms-submit"
    ],
    "slug": "forms-submit"
  },
  {
    "title": "Onload Ondomcontentloaded",
    "description": "The lifecycle of an HTML page has three important events:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The lifecycle of an HTML page has three important events:",
          "Each event may be useful:",
          "Let's explore the details of these events."
        ],
        "bulletPoints": [
          "`DOMContentLoaded` -- the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures `` and stylesheets may not yet have loaded.",
          "`load` -- not only HTML is loaded, but also all the external resources: images, styles etc.",
          "`beforeunload/unload` -- the user is leaving the page.",
          "`DOMContentLoaded` event -- DOM is ready, so the handler can lookup DOM nodes, initialize the interface.",
          "`load` event -- external resources are loaded, so styles are applied, image sizes are known etc."
        ]
      },
      {
        "heading": "DOMContentLoaded",
        "paragraphs": [
          "The `DOMContentLoaded` event happens on the `document` object.",
          "We must use `addEventListener` to catch it:",
          "For instance:",
          "In the example, the `DOMContentLoaded` handler runs when the document is loaded, so it can see all the elements, including `` below.",
          "But it doesn't wait for the image to load. So `alert` shows zero sizes."
        ],
        "codeExamples": [
          {
            "title": "DOMContentLoaded",
            "code": "document.addEventListener(\"DOMContentLoaded\", ready);\n// not \"document.onDOMContentLoaded = ...\"",
            "explanation": "Example demonstrating domcontentloaded."
          },
          {
            "title": "DOMContentLoaded",
            "code": "<script>\n  function ready() {\n    alert('DOM is ready');\n\n    // image is not yet loaded (unless it was cached), so the size is 0x0\n    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);\n  }\n\n*!*\n  document.addEventListener(\"DOMContentLoaded\", ready);\n*/!*\n</script>\n\n<img id=\"img\" src=\"https://en.js.cx/clipart/train.gif?speed=1&cache=0\">",
            "explanation": "Example demonstrating domcontentloaded."
          }
        ]
      },
      {
        "heading": "DOMContentLoaded and scripts",
        "paragraphs": [
          "When the browser processes an HTML-document and comes across a `` tag, it needs to execute before continuing building the DOM. That's a precaution, as scripts may want to modify DOM, and even `document.write` into it, so `DOMContentLoaded` has to wait.",
          "So DOMContentLoaded definitely happens after such scripts:",
          "In the example above, we first see \"Library loaded...\", and then \"DOM ready!\" (all scripts are executed)."
        ],
        "codeExamples": [
          {
            "title": "DOMContentLoaded and scripts",
            "code": "<script>\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    alert(\"DOM ready!\");\n  });\n</script>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js\"></script>\n\n<script>\n  alert(\"Library loaded, inline script executed\");\n</script>",
            "explanation": "Example demonstrating domcontentloaded and scripts."
          },
          {
            "title": "DOMContentLoaded and scripts",
            "code": "There are two exceptions from this rule:\n1. Scripts with the `async` attribute, that we'll cover [a bit later](info:script-async-defer), don't block `DOMContentLoaded`.\n2. Scripts that are generated dynamically with `document.createElement('script')` and then added to the webpage also don't block this event.",
            "explanation": "Example demonstrating domcontentloaded and scripts."
          }
        ]
      },
      {
        "heading": "DOMContentLoaded and styles",
        "paragraphs": [
          "External style sheets don't affect DOM, so `DOMContentLoaded` does not wait for them.",
          "But there's a pitfall. If we have a script after the style, then that script must wait until the stylesheet loads:",
          "The reason for this is that the script may want to get coordinates and other style-dependent properties of elements, like in the example above. Naturally, it has to wait for styles to load.",
          "As `DOMContentLoaded` waits for scripts, it now waits for styles before them as well."
        ],
        "codeExamples": [
          {
            "title": "DOMContentLoaded and styles",
            "code": "<link type=\"text/css\" rel=\"stylesheet\" href=\"style.css\">\n<script>\n  // the script doesn't execute until the stylesheet is loaded\n  alert(getComputedStyle(document.body).marginTop);\n</script>",
            "explanation": "Example demonstrating domcontentloaded and styles."
          }
        ]
      },
      {
        "heading": "Built-in browser autofill",
        "paragraphs": [
          "Firefox, Chrome and Opera autofill forms on `DOMContentLoaded`.",
          "For instance, if the page has a form with login and password, and the browser remembered the values, then on `DOMContentLoaded` it may try to autofill them (if approved by the user).",
          "So if `DOMContentLoaded` is postponed by long-loading scripts, then autofill also awaits. You probably saw that on some sites (if you use browser autofill) -- the login/password fields don't get autofilled immediately, but there's a delay till the page fully loads. That's actually the delay until the `DOMContentLoaded` event."
        ]
      },
      {
        "heading": "window.onload [#window-onload]",
        "paragraphs": [
          "The `load` event on the `window` object triggers when the whole page is loaded including styles, images and other resources. This event is available via the `onload` property.",
          "The example below correctly shows image sizes, because `window.onload` waits for all images:"
        ],
        "codeExamples": [
          {
            "title": "window.onload [#window-onload]",
            "code": "<script>\n  window.onload = function() { // can also use window.addEventListener('load', (event) => {\n    alert('Page loaded');\n\n    // image is loaded at this time\n    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);\n  };\n</script>\n\n<img id=\"img\" src=\"https://en.js.cx/clipart/train.gif?speed=1&cache=0\">",
            "explanation": "Example demonstrating window.onload [#window-onload]."
          }
        ]
      },
      {
        "heading": "window.onunload",
        "paragraphs": [
          "When a visitor leaves the page, the `unload` event triggers on `window`. We can do something there that doesn't involve a delay, like closing related popup windows.",
          "The notable exception is sending analytics.",
          "Let's say we gather data about how the page is used: mouse clicks, scrolls, viewed page areas, and so on.",
          "Naturally, `unload` event is when the user leaves us, and we'd like to save the data on our server.",
          "There exists a special `navigator.sendBeacon(url, data)` method for such needs, described in the specification ."
        ],
        "codeExamples": [
          {
            "title": "window.onunload",
            "code": "let analyticsData = { /* object with gathered data */ };\n\nwindow.addEventListener(\"unload\", function() {\n  navigator.sendBeacon(\"/analytics\", JSON.stringify(analyticsData));\n});",
            "explanation": "Example demonstrating window.onunload."
          }
        ],
        "bulletPoints": [
          "The request is sent as POST.",
          "We can send not only a string, but also forms and other formats, as described in the chapter , but usually it's a stringified object.",
          "The data is limited by 64kb."
        ]
      },
      {
        "heading": "window.onbeforeunload [#window.onbeforeunload]",
        "paragraphs": [
          "If a visitor initiated navigation away from the page or tries to close the window, the `beforeunload` handler asks for additional confirmation.",
          "If we cancel the event, the browser may ask the visitor if they are sure.",
          "You can try it by running this code and then reloading the page:",
          "For historical reasons, returning a non-empty string also counts as canceling the event. Some time ago browsers used to show it as a message, but as the modern specification says, they shouldn't.",
          "Here's an example:"
        ],
        "codeExamples": [
          {
            "title": "window.onbeforeunload [#window.onbeforeunload]",
            "code": "window.onbeforeunload = function() {\n  return false;\n};",
            "explanation": "Example demonstrating window.onbeforeunload [#window.onbeforeunload]."
          },
          {
            "title": "window.onbeforeunload [#window.onbeforeunload]",
            "code": "window.onbeforeunload = function() {\n  return \"There are unsaved changes. Leave now?\";\n};",
            "explanation": "Example demonstrating window.onbeforeunload [#window.onbeforeunload]."
          }
        ]
      },
      {
        "heading": "readyState",
        "paragraphs": [
          "What happens if we set the `DOMContentLoaded` handler after the document is loaded?",
          "Naturally, it never runs.",
          "There are cases when we are not sure whether the document is ready or not. We'd like our function to execute when the DOM is loaded, be it now or later.",
          "The `document.readyState` property tells us about the current loading state.",
          "There are 3 possible values:"
        ],
        "codeExamples": [
          {
            "title": "readyState",
            "code": "function work() { /*...*/ }\n\nif (document.readyState == 'loading') {\n  // still loading, wait for the event\n  document.addEventListener('DOMContentLoaded', work);\n} else {\n  // DOM is ready!\n  work();\n}",
            "explanation": "Example demonstrating readystate."
          },
          {
            "title": "readyState",
            "code": "// current state\nconsole.log(document.readyState);\n\n// print state changes\ndocument.addEventListener('readystatechange', () => console.log(document.readyState));",
            "explanation": "Example demonstrating readystate."
          }
        ],
        "bulletPoints": [
          "`\"loading\"` -- the document is loading.",
          "`\"interactive\"` -- the document was fully read.",
          "`\"complete\"` -- the document was fully read and all resources (like images) are loaded too.",
          "`document.readyState` becomes `interactive` right before `DOMContentLoaded`. These two things actually mean the same.",
          "`document.readyState` becomes `complete` when all resources (`iframe` and `img`) are loaded. Here we can see that it happens in about the same time as `img.onload` (`img` is the last resource) and `window.onload`. Switching to `complete` state means the same as `window.onload`. The difference is that `window.onload` always works after all other `load` handlers."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Page load events:"
        ],
        "bulletPoints": [
          "The `DOMContentLoaded` event triggers on `document` when the DOM is ready. We can apply JavaScript to elements at this stage.",
          "Script such as `...` or `` block DOMContentLoaded, the browser waits for them to execute.",
          "Images and other resources may also still continue loading.",
          "The `load` event on `window` triggers when the page and all resources are loaded. We rarely use it, because there's usually no need to wait for so long.",
          "The `beforeunload` event on `window` triggers when the user wants to leave the page. If we cancel the event, browser asks whether the user really wants to leave (e.g we have unsaved changes)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Onload Ondomcontentloaded",
        "description": "Apply your understanding of Onload Ondomcontentloaded. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Onload Ondomcontentloaded\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Onload Ondomcontentloaded\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Onload Ondomcontentloaded in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for onload ondomcontentloaded.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Onload Ondomcontentloaded is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Onload Ondomcontentloaded?",
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
      "Onload Ondomcontentloaded is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying onload ondomcontentloaded.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "onload-ondomcontentloaded"
    ],
    "slug": "onload-ondomcontentloaded"
  },
  {
    "title": "Script Async Defer",
    "description": "In modern websites, scripts are often \"heavier\" than HTML: their download size is larger, and processing time is also longer.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In modern websites, scripts are often \"heavier\" than HTML: their download size is larger, and processing time is also longer.",
          "When the browser loads HTML and comes across a `...` tag, it can't continue building the DOM. It must execute the script right now. The same happens for external scripts ``: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.",
          "That leads to two important issues:",
          "1. Scripts can't see DOM elements below them, so they can't add handlers etc.",
          "2. If there's a bulky script at the top of the page, it \"blocks the page\". Users can't see the page content till it downloads and runs:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "<p>...content before script...</p>\n\n<script src=\"https://javascript.info/article/script-async-defer/long.js?speed=1\"></script>\n\n<!-- This isn't visible until the script loads -->\n<p>...content after script...</p>",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "<body>\n  ...all content is above the script...\n\n  <script src=\"https://javascript.info/article/script-async-defer/long.js?speed=1\"></script>\n</body>",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "defer",
        "paragraphs": [
          "The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads \"in the background\", and then runs when the DOM is fully built.",
          "Here's the same example as above, but with `defer`:",
          "In other words:",
          "The following example demonstrates the second part:",
          "1. The page content shows up immediately."
        ],
        "codeExamples": [
          {
            "title": "defer",
            "code": "<p>...content before script...</p>\n\n<script defer src=\"https://javascript.info/article/script-async-defer/long.js?speed=1\"></script>\n\n<!-- visible immediately -->\n<p>...content after script...</p>",
            "explanation": "Example demonstrating defer."
          },
          {
            "title": "defer",
            "code": "<p>...content before scripts...</p>\n\n<script>\n  document.addEventListener('DOMContentLoaded', () => alert(\"DOM ready after defer!\"));\n</script>\n\n<script defer src=\"https://javascript.info/article/script-async-defer/long.js?speed=1\"></script>\n\n<p>...content after scripts...</p>",
            "explanation": "Example demonstrating defer."
          }
        ],
        "bulletPoints": [
          "Scripts with `defer` never block the page.",
          "Scripts with `defer` always execute when the DOM is ready (but before `DOMContentLoaded` event)."
        ]
      },
      {
        "heading": "async",
        "paragraphs": [
          "The `async` attribute is somewhat like `defer`. It also makes the script non-blocking. But it has important differences in the behavior.",
          "The `async` attribute means that a script is completely independent:",
          "In other words, `async` scripts load in the background and run when ready. The DOM and other scripts don't wait for them, and they don't wait for anything. A fully independent script that runs when loaded. As simple, as it can get, right?",
          "Here's an example similar to what we've seen with `defer`: two scripts `long.js` and `small.js`, but now with `async` instead of `defer`.",
          "They don't wait for each other. Whatever loads first (probably `small.js`) -- runs first:"
        ],
        "codeExamples": [
          {
            "title": "async",
            "code": "<p>...content before scripts...</p>\n\n<script>\n  document.addEventListener('DOMContentLoaded', () => alert(\"DOM ready!\"));\n</script>\n\n<script async src=\"https://javascript.info/article/script-async-defer/long.js\"></script>\n<script async src=\"https://javascript.info/article/script-async-defer/small.js\"></script>\n\n<p>...content after scripts...</p>",
            "explanation": "Example demonstrating async."
          },
          {
            "title": "async",
            "code": "<!-- Google Analytics is usually added like this -->\n<script async src=\"https://google-analytics.com/analytics.js\"></script>",
            "explanation": "Example demonstrating async."
          }
        ],
        "bulletPoints": [
          "The browser doesn't block on `async` scripts (like `defer`).",
          "Other scripts don't wait for `async` scripts, and `async` scripts don't wait for them.",
          "`DOMContentLoaded` and async scripts don't wait for each other:",
          "`DOMContentLoaded` may happen both before an async script (if an async script finishes loading after the page is complete)",
          "...or after an async script (if an async script is short or was in HTTP-cache)"
        ]
      },
      {
        "heading": "Dynamic scripts",
        "paragraphs": [
          "There's one more important way of adding a script to the page.",
          "We can create a script and append it to the document dynamically using JavaScript:",
          "The script starts loading as soon as it's appended to the document `(*)`.",
          "**Dynamic scripts behave as \"async\" by default.**",
          "That is:"
        ],
        "codeExamples": [
          {
            "title": "Dynamic scripts",
            "code": "let script = document.createElement('script');\nscript.src = \"/article/script-async-defer/long.js\";\ndocument.body.append(script); // (*)",
            "explanation": "Example demonstrating dynamic scripts."
          },
          {
            "title": "Dynamic scripts",
            "code": "function loadScript(src) {\n  let script = document.createElement('script');\n  script.src = src;\n  script.async = false;\n  document.body.append(script);\n}\n\n// long.js runs first because of async=false\nloadScript(\"/article/script-async-defer/long.js\");\nloadScript(\"/article/script-async-defer/small.js\");",
            "explanation": "Example demonstrating dynamic scripts."
          }
        ],
        "bulletPoints": [
          "They don't wait for anything, nothing waits for them.",
          "The script that loads first -- runs first (\"load-first\" order)."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Both `async` and `defer` have one common thing: downloading of such scripts doesn't block page rendering. So the user can read page content and get acquainted with the page immediately.",
          "But there are also essential differences between them:",
          "| | Order | `DOMContentLoaded` |",
          "|---------|---------|---------|",
          "| `async` | *Load-first order*. Their document order doesn't matter -- which loads first runs first | Irrelevant. May load and execute while the document has not yet been fully downloaded. That happens if scripts are small or cached, and the document is long enough. |"
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "Please note: if you're using `defer` or `async`, then user will see the page *before* the script loads.\n\nIn such case, some graphical components are probably not initialized yet.\n\nDon't forget to put \"loading\" indication and disable buttons that aren't functional yet. Let the user clearly see what he can do on the page, and what's still getting ready.",
            "explanation": "Example demonstrating summary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Script Async Defer",
        "description": "Apply your understanding of Script Async Defer. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Script Async Defer\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Script Async Defer\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Script Async Defer in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for script async defer.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Script Async Defer is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Script Async Defer?",
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
      "Script Async Defer is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying script async defer.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "script-async-defer"
    ],
    "slug": "script-async-defer"
  },
  {
    "title": "Onload Onerror",
    "description": "The browser allows us to track the loading of external resources -- scripts, iframes, pictures and so on.",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The browser allows us to track the loading of external resources -- scripts, iframes, pictures and so on.",
          "There are two events for it:"
        ],
        "bulletPoints": [
          "`onload` -- successful load,",
          "`onerror` -- an error occurred."
        ]
      },
      {
        "heading": "Loading a script",
        "paragraphs": [
          "Let's say we need to load a third-party script and call a function that resides there.",
          "We can load it dynamically, like this:",
          "...But how to run the function that is declared inside that script? We need to wait until the script loads, and only then we can call it."
        ],
        "codeExamples": [
          {
            "title": "Loading a script",
            "code": "let script = document.createElement('script');\nscript.src = \"my.js\";\n\ndocument.head.append(script);",
            "explanation": "Example demonstrating loading a script."
          },
          {
            "title": "Loading a script",
            "code": "For our own scripts we could use [JavaScript modules](info:modules) here, but they are not widely adopted by third-party libraries.",
            "explanation": "Example demonstrating loading a script."
          }
        ]
      },
      {
        "heading": "script.onload",
        "paragraphs": [
          "The main helper is the `load` event. It triggers after the script was loaded and executed.",
          "For instance:",
          "So in `onload` we can use script variables, run functions etc.",
          "...And what if the loading failed? For instance, there's no such script (error 404) or the server is down (unavailable)."
        ],
        "codeExamples": [
          {
            "title": "script.onload",
            "code": "let script = document.createElement('script');\n\n// can load any script, from any domain\nscript.src = \"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js\"\ndocument.head.append(script);\n\n*!*\nscript.onload = function() {\n  // the script creates a variable \"_\"\n  alert( _.VERSION ); // shows library version\n};\n*/!*",
            "explanation": "Example demonstrating script.onload."
          }
        ]
      },
      {
        "heading": "script.onerror",
        "paragraphs": [
          "Errors that occur during the loading of the script can be tracked in an `error` event.",
          "For instance, let's request a script that doesn't exist:",
          "Please note that we can't get HTTP error details here. We don't know if it was an error 404 or 500 or something else. Just that the loading failed."
        ],
        "codeExamples": [
          {
            "title": "script.onerror",
            "code": "let script = document.createElement('script');\nscript.src = \"https://example.com/404.js\"; // no such script\ndocument.head.append(script);\n\n*!*\nscript.onerror = function() {\n  alert(\"Error loading \" + this.src); // Error loading https://example.com/404.js\n};\n*/!*",
            "explanation": "Example demonstrating script.onerror."
          },
          {
            "title": "script.onerror",
            "code": "Events `onload`/`onerror` track only the loading itself.\n\nErrors that may occur during script processing and execution are out of scope for these events. That is: if a script loaded successfully, then `onload` triggers, even if it has programming errors in it. To track script errors, one can use `window.onerror` global handler.",
            "explanation": "Example demonstrating script.onerror."
          }
        ]
      },
      {
        "heading": "Other resources",
        "paragraphs": [
          "The `load` and `error` events also work for other resources, basically for any resource that has an external `src`.",
          "For example:",
          "There are some notes though:",
          "That's for historical reasons."
        ],
        "codeExamples": [
          {
            "title": "Other resources",
            "code": "let img = document.createElement('img');\nimg.src = \"https://js.cx/clipart/train.gif\"; // (*)\n\nimg.onload = function() {\n  alert(`Image loaded, size ${img.width}x${img.height}`);\n};\n\nimg.onerror = function() {\n  alert(\"Error occurred while loading image\");\n};",
            "explanation": "Example demonstrating other resources."
          }
        ],
        "bulletPoints": [
          "Most resources start loading when they are added to the document. But `` is an exception. It starts loading when it gets a src `(*)`.",
          "For ``, the `iframe.onload` event triggers when the iframe loading finished, both for successful load and in case of an error."
        ]
      },
      {
        "heading": "Crossorigin policy",
        "paragraphs": [
          "There's a rule: scripts from one site can't access contents of the other site. So, e.g. a script at `https://facebook.com` can't read the user's mailbox at `https://gmail.com`.",
          "Or, to be more precise, one origin (domain/port/protocol triplet) can't access the content from another one. So even if we have a subdomain, or just another port, these are different origins with no access to each other.",
          "This rule also affects resources from other domains.",
          "If we're using a script from another domain, and there's an error in it, we can't get error details.",
          "For example, let's take a script `error.js` that consists of a single (bad) function call:"
        ],
        "codeExamples": [
          {
            "title": "Crossorigin policy",
            "code": "// \ud83d\udcc1 error.js\nnoSuchFunction();",
            "explanation": "Example demonstrating crossorigin policy."
          },
          {
            "title": "Crossorigin policy",
            "code": "<script>\nwindow.onerror = function(message, url, line, col, errorObj) {\n  alert(`${message}\\n${url}, ${line}:${col}`);\n};\n</script>\n<script src=\"/article/onload-onerror/crossorigin/error.js\"></script>",
            "explanation": "Example demonstrating crossorigin policy."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Images ``, external styles, scripts and other resources provide `load` and `error` events to track their loading:",
          "The only exception is ``: for historical reasons it always triggers `load`, for any load completion, even if the page is not found.",
          "The `readystatechange` event also works for resources, but is rarely used, because `load/error` events are simpler."
        ],
        "bulletPoints": [
          "`load` triggers on a successful load,",
          "`error` triggers on a failed load."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Load images with a callback",
        "description": "Normally, images are loaded when they are created. So when we add `` to the page, the user does not see the picture immediately. The browser needs to load it first. To show an image immediately, we can create it \"in advance\", like this: ```js let img = document.createElement('img'); img.src = 'my.jp",
        "starterCode": "let img = document.createElement('img');\nimg.src = 'my.jpg';",
        "solution": "let img = document.createElement('img');\nimg.src = 'my.jpg';",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Onload Onerror in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for onload onerror.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Onload Onerror is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Onload Onerror?",
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
      "Onload Onerror is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying onload onerror.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "onload-onerror"
    ],
    "slug": "onload-onerror"
  },
  {
    "title": "Mutation Observer",
    "description": "`MutationObserver` is a built-in object that observes a DOM element and fires a callback when it detects a change.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "`MutationObserver` is a built-in object that observes a DOM element and fires a callback when it detects a change.",
          "We'll first take a look at the syntax, and then explore a real-world use case, to see where such thing may be useful."
        ]
      },
      {
        "heading": "Syntax",
        "paragraphs": [
          "`MutationObserver` is easy to use.",
          "First, we create an observer with a callback-function:",
          "And then attach it to a DOM node:",
          "`config` is an object with boolean options \"what kind of changes to react on\":",
          "Few other options:"
        ],
        "codeExamples": [
          {
            "title": "Syntax",
            "code": "let observer = new MutationObserver(callback);",
            "explanation": "Example demonstrating syntax."
          },
          {
            "title": "Syntax",
            "code": "observer.observe(node, config);",
            "explanation": "Example demonstrating syntax."
          }
        ],
        "bulletPoints": [
          "`childList` -- changes in the direct children of `node`,",
          "`subtree` -- in all descendants of `node`,",
          "`attributes` -- attributes of `node`,",
          "`attributeFilter` -- an array of attribute names, to observe only selected ones.",
          "`characterData` -- whether to observe `node.data` (text content),"
        ]
      },
      {
        "heading": "Usage for integration",
        "paragraphs": [
          "When such thing may be useful?",
          "Imagine the situation when you need to add a third-party script that contains useful functionality, but also does something unwanted, e.g. shows ads `Unwanted ads`.",
          "Naturally, the third-party script provides no mechanisms to remove it.",
          "Using `MutationObserver`, we can detect when the unwanted element appears in our DOM and remove it.",
          "There are other situations when a third-party script adds something into our document, and we'd like to detect, when it happens, to adapt our page, dynamically resize something etc."
        ]
      },
      {
        "heading": "Usage for architecture",
        "paragraphs": [
          "There are also situations when `MutationObserver` is good from architectural standpoint.",
          "Let's say we're making a website about programming. Naturally, articles and other materials may contain source code snippets.",
          "Such snippet in an HTML markup looks like this:",
          "For better readability and at the same time, to beautify it, we'll be using a JavaScript syntax highlighting library on our site, like Prism.js. To get syntax highlighting for above snippet in Prism, `Prism.highlightElement(pre)` is called, which examines the contents of such `pre` elements and adds special tags and styles for colored syntax highlighting into those elements, similar to what you see in examples here, on this page.",
          "When exactly should we run that highlighting method? Well, we can do it on `DOMContentLoaded` event, or put the script at the bottom of the page. The moment our DOM is ready, we can search for elements `pre[class*=\"language\"]` and call `Prism.highlightElement` on them:"
        ],
        "codeExamples": [
          {
            "title": "Usage for architecture",
            "code": "...\n<pre class=\"language-javascript\"><code>\n  // here's the code\n  let hello = \"world\";\n</code></pre>\n...",
            "explanation": "Example demonstrating usage for architecture."
          },
          {
            "title": "Usage for architecture",
            "code": "// highlight all code snippets on the page\ndocument.querySelectorAll('pre[class*=\"language\"]').forEach(elem => Prism.highlightElement(elem));",
            "explanation": "Example demonstrating usage for architecture."
          }
        ]
      },
      {
        "heading": "Dynamic highlight demo",
        "paragraphs": [
          "Here's the working example.",
          "If you run this code, it starts observing the element below and highlighting any code snippets that appear there:",
          "Here, below, there's an HTML-element and JavaScript that dynamically fills it using `innerHTML`.",
          "Please run the previous code (above, observes that element), and then the code below. You'll see how `MutationObserver` detects and highlights the snippet.",
          "A demo-element with id=\"highlight-demo\", run the code above to observe it."
        ],
        "codeExamples": [
          {
            "title": "Dynamic highlight demo",
            "code": "let observer = new MutationObserver(mutations => {\n\n  for(let mutation of mutations) {\n    // examine new nodes, is there anything to highlight?\n\n    for(let node of mutation.addedNodes) {\n      // we track only elements, skip other nodes (e.g. text nodes)\n      if (!(node instanceof HTMLElement)) continue;\n\n      // check the inserted element for being a code snippet\n      if (node.matches('pre[class*=\"language-\"]')) {\n        Prism.highlightElement(node);\n      }\n\n      // or maybe there's a code snippet somewhere in its subtree?\n      for(let elem of node.querySelectorAll('pre[class*=\"language-\"]')) {\n        Prism.highlightElement(elem);\n      }\n    }\n  }\n\n});\n\nlet demoElem = document.getElementById('highlight-demo');\n\nobserver.observe(demoElem, {childList: true, subtree: true});",
            "explanation": "Example demonstrating dynamic highlight demo."
          },
          {
            "title": "Dynamic highlight demo",
            "code": "let demoElem = document.getElementById('highlight-demo');\n\n// dynamically insert content with code snippets\ndemoElem.innerHTML = `A code snippet is below:\n  <pre class=\"language-javascript\"><code> let hello = \"world!\"; </code></pre>\n  <div>Another one:</div>\n  <div>\n    <pre class=\"language-css\"><code>.class { margin: 5px; } </code></pre>\n  </div>\n`;",
            "explanation": "Example demonstrating dynamic highlight demo."
          }
        ]
      },
      {
        "heading": "Additional methods",
        "paragraphs": [
          "There's a method to stop observing the node:",
          "When we stop the observing, it might be possible that some changes were not yet processed by the observer. In such cases, we use",
          "These methods can be used together, like this:"
        ],
        "codeExamples": [
          {
            "title": "Additional methods",
            "code": "// get a list of unprocessed mutations\n// should be called before disconnecting,\n// if you care about possibly unhandled recent mutations\nlet mutationRecords = observer.takeRecords();\n\n// stop tracking changes\nobserver.disconnect();\n...",
            "explanation": "Example demonstrating additional methods."
          },
          {
            "title": "Additional methods",
            "code": "The callback won't be called for records, returned by `observer.takeRecords()`.",
            "explanation": "Example demonstrating additional methods."
          }
        ],
        "bulletPoints": [
          "`observer.disconnect()` -- stops the observation.",
          "`observer.takeRecords()` -- gets a list of unprocessed mutation records - those that happened, but the callback has not handled them."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`MutationObserver` can react to changes in DOM - attributes, text content and adding/removing elements.",
          "We can use it to track changes introduced by other parts of our code, as well as to integrate with third-party scripts.",
          "`MutationObserver` can track any changes. The config \"what to observe\" options are used for optimizations, not to spend resources on unneeded callback invocations."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Mutation Observer",
        "description": "Apply your understanding of Mutation Observer. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Mutation Observer\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Mutation Observer\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Mutation Observer in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for mutation observer.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Mutation Observer is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Mutation Observer?",
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
      "Mutation Observer is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying mutation observer.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "mutation-observer"
    ],
    "slug": "mutation-observer"
  },
  {
    "title": "Selection Range",
    "description": "libs:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "libs:",
          "In this chapter we'll cover selection in the document, as well as selection in form fields, such as ``.",
          "JavaScript can access an existing selection, select/deselect DOM nodes as a whole or partially, remove the selected content from the document, wrap it into a tag, and so on.",
          "You can find some recipes for common tasks at the end of the chapter, in \"Summary\" section. Maybe that covers your current needs, but you'll get much more if you read the whole text.",
          "The underlying `Range` and `Selection` objects are easy to grasp, and then you'll need no recipes to make them do what you want."
        ],
        "bulletPoints": [
          "domtree"
        ]
      },
      {
        "heading": "Range",
        "paragraphs": [
          "The basic concept of selection is Range, that is essentially a pair of \"boundary points\": range start and range end.",
          "A `Range` object is created without parameters:",
          "Then we can set the selection boundaries using `range.setStart(node, offset)` and `range.setEnd(node, offset)`.",
          "As you might guess, further we'll use the `Range` objects for selection, but first let's create few such objects."
        ],
        "codeExamples": [
          {
            "title": "Range",
            "code": "let range = new Range();",
            "explanation": "Example demonstrating range."
          }
        ]
      },
      {
        "heading": "Selecting the text partially",
        "paragraphs": [
          "The interesting thing is that the first argument `node` in both methods can be either a text node or an element node, and the meaning of the second argument depends on that.",
          "**If `node` is a text node, then `offset` must be the position in its text.**",
          "For example, given the element `Hello`, we can create the range containing the letters \"ll\" as follows:",
          "Here we take the first child of `` (that's the text node) and specify the text positions inside it:",
          "![](range-hello-1.svg)"
        ],
        "codeExamples": [
          {
            "title": "Selecting the text partially",
            "code": "<p id=\"p\">Hello</p>\n<script>\n  let range = new Range();\n  range.setStart(p.firstChild, 2);\n  range.setEnd(p.firstChild, 4);\n  \n  // toString of a range returns its content as text\n  console.log(range); // ll\n</script>",
            "explanation": "Example demonstrating selecting the text partially."
          }
        ]
      },
      {
        "heading": "Selecting element nodes",
        "paragraphs": [
          "**Alternatively, if `node` is an element node, then `offset` must be the child number.**",
          "That's handy for making ranges that contain nodes as a whole, not stop somewhere inside their text.",
          "For example, we have a more complex document fragment:",
          "Here's its DOM structure with both element and text nodes:",
          "let selectPDomtree = {"
        ],
        "codeExamples": [
          {
            "title": "Selecting element nodes",
            "code": "<p id=\"p\">Example: <i>italic</i> and <b>bold</b></p>",
            "explanation": "Example demonstrating selecting element nodes."
          },
          {
            "title": "Selecting element nodes",
            "code": "<p id=\"p\">Example: <i>italic</i> and <b>bold</b></p>\n\n<script>\n*!*\n  let range = new Range();\n\n  range.setStart(p, 0);\n  range.setEnd(p, 2);\n*/!*\n\n  // toString of a range returns its content as text, without tags\n  console.log(range); // Example: italic\n\n  // apply this range for document selection (explained later below)\n  document.getSelection().addRange(range);\n</script>",
            "explanation": "Example demonstrating selecting element nodes."
          }
        ],
        "bulletPoints": [
          "The starting point has `` as the parent `node`, and `0` as the offset.",
          "The ending point also has `` as the parent `node`, but `2` as the offset (it specifies the range up to, but not including `offset`)."
        ]
      },
      {
        "heading": "Selecting a bigger fragment",
        "paragraphs": [
          "Let's make a bigger selection in our example, like this:",
          "![](range-example-p-2-b-3.svg)",
          "We already know how to do that. We just need to set the start and the end as a relative offset in text nodes.",
          "We need to create a range, that:",
          "As you can see, it's fairly easy to make a range of whatever we want."
        ],
        "codeExamples": [
          {
            "title": "Selecting a bigger fragment",
            "code": "<p id=\"p\">Example: <i>italic</i> and <b>bold</b></p>\n\n<script>\n  let range = new Range();\n\n  range.setStart(p.firstChild, 2);\n  range.setEnd(p.querySelector('b').firstChild, 3);\n\n  console.log(range); // ample: italic and bol\n\n  // use this range for selection (explained later)\n  window.getSelection().addRange(range);\n</script>",
            "explanation": "Example demonstrating selecting a bigger fragment."
          }
        ],
        "bulletPoints": [
          "starts from position 2 in `` first child (taking all but two first letters of \"Example: \")",
          "ends at the position 3 in `` first child (taking first three letters of \"bold\", but no more):"
        ]
      },
      {
        "heading": "Range properties",
        "paragraphs": [
          "The range object that we created in the example above has following properties:",
          "![](range-example-p-2-b-3-range.svg)"
        ],
        "bulletPoints": [
          "`startContainer`, `startOffset` -- node and offset of the start,",
          "in the example above: first text node inside `` and `2`.",
          "`endContainer`, `endOffset` -- node and offset of the end,",
          "in the example above: first text node inside `` and `3`.",
          "`collapsed` -- boolean, `true` if the range starts and ends on the same point (so there's no content inside the range),"
        ]
      },
      {
        "heading": "Range selection methods",
        "paragraphs": [
          "There are many convenient methods to manipulate ranges.",
          "We've already seen `setStart` and `setEnd`, here are other similar methods.",
          "Set range start:",
          "Set range end (similar methods):",
          "Technically, `setStart/setEnd` can do anything, but more methods provide more convenience."
        ],
        "bulletPoints": [
          "`setStart(node, offset)` set start at: position `offset` in `node`",
          "`setStartBefore(node)` set start at: right before `node`",
          "`setStartAfter(node)` set start at: right after `node`",
          "`setEnd(node, offset)` set end at: position `offset` in `node`",
          "`setEndBefore(node)` set end at: right before `node`"
        ]
      },
      {
        "heading": "Range editing methods",
        "paragraphs": [
          "Once the range is created, we can manipulate its content using these methods:",
          "With these methods we can do basically anything with selected nodes.",
          "Here's the test stand to see them in action:",
          "There also exist methods to compare ranges, but these are rarely used. When you need them, please refer to the spec or MDN manual."
        ],
        "codeExamples": [
          {
            "title": "Range editing methods",
            "code": "Click buttons to run methods on the selection, \"resetExample\" to reset it.\n\n<p id=\"p\">Example: <i>italic</i> and <b>bold</b></p>\n\n<p id=\"result\"></p>\n<script>\n  let range = new Range();\n\n  // Each demonstrated method is represented here:\n  let methods = {\n    deleteContents() {\n      range.deleteContents()\n    },\n    extractContents() {\n      let content = range.extractContents();\n      result.innerHTML = \"\";\n      result.append(\"extracted: \", content);\n    },\n    cloneContents() {\n      let content = range.cloneContents();\n      result.innerHTML = \"\";\n      result.append(\"cloned: \", content);\n    },\n    insertNode() {\n      let newNode = document.createElement('u');\n      newNode.innerHTML = \"NEW NODE\";\n      range.insertNode(newNode);\n    },\n    surroundContents() {\n      let newNode = document.createElement('u');\n      try {\n        range.surroundContents(newNode);\n      } catch(e) { console.log(e) }\n    },\n    resetExample() {\n      p.innerHTML = `Example: <i>italic</i> and <b>bold</b>`;\n      result.innerHTML = \"\";\n\n      range.setStart(p.firstChild, 2);\n      range.setEnd(p.querySelector('b').firstChild, 3);\n\n      window.getSelection().removeAllRanges();  \n      window.getSelection().addRange(range);  \n    }\n  };\n\n  for(let method in methods) {\n    document.write(`<div><button onclick=\"methods.${method}()\">${method}</button></div>`);\n  }\n\n  methods.resetExample();\n</script>",
            "explanation": "Example demonstrating range editing methods."
          }
        ],
        "bulletPoints": [
          "`deleteContents()` -- remove range content from the document",
          "`extractContents()` -- remove range content from the document and return as DocumentFragment",
          "`cloneContents()` -- clone range content and return as DocumentFragment",
          "`insertNode(node)` -- insert `node` into the document at the beginning of the range",
          "`surroundContents(node)` -- wrap `node` around range content. For this to work, the range must contain both opening and closing tags for all elements inside it: no partial ranges like `abc`."
        ]
      },
      {
        "heading": "Selection",
        "paragraphs": [
          "`Range` is a generic object for managing selection ranges. Although, creating a `Range` doesn't mean that we see a selection on screen.",
          "We may create `Range` objects, pass them around -- they do not visually select anything on their own.",
          "The document selection is represented by `Selection` object, that can be obtained as `window.getSelection()` or `document.getSelection()`. A selection may include zero or more ranges. At least, the Selection API specification says so. In practice though, only Firefox allows to select multiple ranges in the document by using `key:Ctrl+click` (`key:Cmd+click` for Mac).",
          "Here's a screenshot of a selection with 3 ranges, made in Firefox:",
          "![](selection-firefox.svg)"
        ]
      },
      {
        "heading": "Selection properties",
        "paragraphs": [
          "As said, a selection may in theory contain multiple ranges. We can get these range objects using the method:",
          "Also, there exist properties that often provide better convenience.",
          "Similar to a range, a selection object has a start, called \"anchor\", and the end, called \"focus\".",
          "The main selection properties are:"
        ],
        "codeExamples": [
          {
            "title": "Selection properties",
            "code": "There's an important difference between a selection anchor/focus compared with a `Range` start/end.\n\nAs we know, `Range` objects always have their start before the end. \n\nFor selections, that's not always the case.\n\nSelecting something with a mouse can be done in both directions: either \"left-to-right\" or \"right-to-left\".\n\nIn other words, when the mouse button is pressed, and then it moves forward in the document, then its end (focus) will be after its start (anchor).\n\nE.g. if the user starts selecting with mouse and goes from \"Example\" to \"italic\":\n\n![](selection-direction-forward.svg)\n\n...But the same selection could be done backwards: starting from  \"italic\" to \"Example\" (backward direction), then its end (focus) will be before the start (anchor):\n\n![](selection-direction-backward.svg)",
            "explanation": "Example demonstrating selection properties."
          }
        ],
        "bulletPoints": [
          "`getRangeAt(i)` -- get i-th range, starting from `0`. In all browsers except Firefox, only `0` is used.",
          "`anchorNode` -- the node where the selection starts,",
          "`anchorOffset` -- the offset in `anchorNode` where the selection starts,",
          "`focusNode` -- the node where the selection ends,",
          "`focusOffset` -- the offset in `focusNode` where the selection ends,"
        ]
      },
      {
        "heading": "Selection events",
        "paragraphs": [
          "There are events on to keep track of selection:"
        ],
        "bulletPoints": [
          "`elem.onselectstart` -- when a selection *starts* specifically on element `elem` (or inside it). For instance, when the user presses the mouse button on it and starts to move the pointer.",
          "Preventing the default action cancels the selection start. So starting a selection from this element becomes impossible, but the element is still selectable. The visitor just needs to start the selection from elsewhere.",
          "`document.onselectionchange` -- whenever a selection changes or starts.",
          "Please note: this handler can be set only on `document`, it tracks all selections in it."
        ]
      },
      {
        "heading": "Selection tracking demo",
        "paragraphs": [
          "Here's a small demo. It tracks the current selection on the `document` and shows its boundaries:"
        ],
        "codeExamples": [
          {
            "title": "Selection tracking demo",
            "code": "<p id=\"p\">Select me: <i>italic</i> and <b>bold</b></p>\n\nFrom <input id=\"from\" disabled> \u2013 To <input id=\"to\" disabled>\n<script>\n  document.onselectionchange = function() {\n    let selection = document.getSelection();\n\n    let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;\n\n    // anchorNode and focusNode are text nodes usually\n    from.value = `${anchorNode?.data}, offset ${anchorOffset}`;\n    to.value = `${focusNode?.data}, offset ${focusOffset}`;\n  };\n</script>",
            "explanation": "Example demonstrating selection tracking demo."
          }
        ]
      },
      {
        "heading": "Selection copying demo",
        "paragraphs": [
          "There are two approaches to copying the selected content:",
          "1. We can use `document.getSelection().toString()` to get it as text.",
          "2. Otherwise, to copy the full DOM, e.g. if we need to keep formatting, we can get the underlying ranges with `getRangeAt(...)`. A `Range` object, in turn, has `cloneContents()` method that clones its content and returns as `DocumentFragment` object, that we can insert elsewhere.",
          "Here's the demo of copying the selected content both as text and as DOM nodes:"
        ],
        "codeExamples": [
          {
            "title": "Selection copying demo",
            "code": "<p id=\"p\">Select me: <i>italic</i> and <b>bold</b></p>\n\nCloned: <span id=\"cloned\"></span>\n<br>\nAs text: <span id=\"astext\"></span>\n\n<script>\n  document.onselectionchange = function() {\n    let selection = document.getSelection();\n\n    cloned.innerHTML = astext.innerHTML = \"\";\n\n    // Clone DOM nodes from ranges (we support multiselect here)\n    for (let i = 0; i < selection.rangeCount; i++) {\n      cloned.append(selection.getRangeAt(i).cloneContents());\n    }\n\n    // Get as text\n    astext.innerHTML += selection;\n  };\n</script>",
            "explanation": "Example demonstrating selection copying demo."
          }
        ]
      },
      {
        "heading": "Selection methods",
        "paragraphs": [
          "We can work with the selection by adding/removing ranges:",
          "There are also convenience methods to manipulate the selection range directly, without intermediate `Range` calls:",
          "For most tasks these methods are just fine, there's no need to access the underlying `Range` object.",
          "For example, selecting the whole contents of the paragraph ``:",
          "The same thing using ranges:"
        ],
        "codeExamples": [
          {
            "title": "Selection methods",
            "code": "<p id=\"p\">Select me: <i>italic</i> and <b>bold</b></p>\n\n<script>\n  // select from 0th child of <p> to the last child\n  document.getSelection().setBaseAndExtent(p, 0, p, p.childNodes.length);\n</script>",
            "explanation": "Example demonstrating selection methods."
          },
          {
            "title": "Selection methods",
            "code": "<p id=\"p\">Select me: <i>italic</i> and <b>bold</b></p>\n\n<script>\n  let range = new Range();\n  range.selectNodeContents(p); // or selectNode(p) to select the <p> tag too\n\n  document.getSelection().removeAllRanges(); // clear existing selection if any\n  document.getSelection().addRange(range);\n</script>",
            "explanation": "Example demonstrating selection methods."
          }
        ],
        "bulletPoints": [
          "`getRangeAt(i)` -- get i-th range, starting from `0`. In all browsers except Firefox, only `0` is used.",
          "`addRange(range)` -- add `range` to selection. All browsers except Firefox ignore the call, if the selection already has an associated range.",
          "`removeRange(range)` -- remove `range` from the selection.",
          "`removeAllRanges()` -- remove all ranges.",
          "`empty()` -- alias to `removeAllRanges`."
        ]
      },
      {
        "heading": "Selection in form controls",
        "paragraphs": [
          "Form elements, such as `input` and `textarea` provide special API for selection, without `Selection` or `Range` objects. As an input value is a pure text, not HTML, there's no need for such objects, everything's much simpler.",
          "Properties:",
          "Events:",
          "Methods:",
          "Optional arguments `start` and `end`, if provided, set the range start and end, otherwise user selection is used."
        ],
        "bulletPoints": [
          "`input.selectionStart` -- position of selection start (writeable),",
          "`input.selectionEnd` -- position of selection end (writeable),",
          "`input.selectionDirection` -- selection direction, one of: \"forward\", \"backward\" or \"none\" (if e.g. selected with a double mouse click),",
          "`input.onselect` -- triggers when something is selected.",
          "`input.select()` -- selects everything in the text control (can be `textarea` instead of `input`),"
        ]
      },
      {
        "heading": "Example: tracking selection",
        "paragraphs": [
          "For example, this code uses `onselect` event to track selection:",
          "Please note:"
        ],
        "codeExamples": [
          {
            "title": "Example: tracking selection",
            "code": "<textarea id=\"area\" style=\"width:80%;height:60px\">\nSelecting in this text updates values below.\n</textarea>\n<br>\nFrom <input id=\"from\" disabled> \u2013 To <input id=\"to\" disabled>\n\n<script>\n  area.onselect = function() {\n    from.value = area.selectionStart;\n    to.value = area.selectionEnd;\n  };\n</script>",
            "explanation": "Example demonstrating example: tracking selection."
          }
        ],
        "bulletPoints": [
          "`onselect` triggers when something is selected, but not when the selection is removed.",
          "`document.onselectionchange` event should not trigger for selections inside a form control, according to the spec, as it's not related to `document` selection and ranges. Some browsers generate it, but we shouldn't rely on it."
        ]
      },
      {
        "heading": "Example: moving cursor",
        "paragraphs": [
          "We can change `selectionStart` and `selectionEnd`, that sets the selection.",
          "An important edge case is when `selectionStart` and `selectionEnd` equal each other. Then it's exactly the cursor position. Or, to rephrase, when nothing is selected, the selection is collapsed at the cursor position.",
          "So, by setting `selectionStart` and `selectionEnd` to the same value, we move the cursor.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "Example: moving cursor",
            "code": "<textarea id=\"area\" style=\"width:80%;height:60px\">\nFocus on me, the cursor will be at position 10.\n</textarea>\n\n<script>\n  area.onfocus = () => {\n    // zero delay setTimeout to run after browser \"focus\" action finishes\n    setTimeout(() => {\n      // we can set any selection\n      // if start=end, the cursor is exactly at that place\n      area.selectionStart = area.selectionEnd = 10;\n    });\n  };\n</script>",
            "explanation": "Example demonstrating example: moving cursor."
          }
        ]
      },
      {
        "heading": "Example: modifying selection",
        "paragraphs": [
          "To modify the content of the selection, we can use `input.setRangeText()` method. Of course, we can read `selectionStart/End` and, with the knowledge of the selection, change the corresponding substring of `value`, but `setRangeText` is more powerful and often more convenient.",
          "That's a somewhat complex method. In its simplest one-argument form it replaces the user selected range and removes the selection.",
          "For example, here the user selection will be wrapped by `*...*`:",
          "With more arguments, we can set range `start` and `end`.",
          "In this example we find `\"THIS\"` in the input text, replace it and keep the replacement selected:"
        ],
        "codeExamples": [
          {
            "title": "Example: modifying selection",
            "code": "<input id=\"input\" style=\"width:200px\" value=\"Select here and click the button\">\n<button id=\"button\">Wrap selection in stars *...*</button>\n\n<script>\nbutton.onclick = () => {\n  if (input.selectionStart == input.selectionEnd) {\n    return; // nothing is selected\n  }\n\n  let selected = input.value.slice(input.selectionStart, input.selectionEnd);\n  input.setRangeText(`*${selected}*`);\n};\n</script>",
            "explanation": "Example demonstrating example: modifying selection."
          },
          {
            "title": "Example: modifying selection",
            "code": "<input id=\"input\" style=\"width:200px\" value=\"Replace THIS in text\">\n<button id=\"button\">Replace THIS</button>\n\n<script>\nbutton.onclick = () => {\n  let pos = input.value.indexOf(\"THIS\");\n  if (pos >= 0) {\n    input.setRangeText(\"*THIS*\", pos, pos + 4, \"select\");\n    input.focus(); // focus to make selection visible\n  }\n};\n</script>",
            "explanation": "Example demonstrating example: modifying selection."
          }
        ]
      },
      {
        "heading": "Example: insert at cursor",
        "paragraphs": [
          "If nothing is selected, or we use equal `start` and `end` in `setRangeText`, then the new text is just inserted, nothing is removed.",
          "We can also insert something \"at the cursor\" using `setRangeText`.",
          "Here's a button that inserts `\"HELLO\"` at the cursor position and puts the cursor immediately after it. If the selection is not empty, then it gets replaced (we can detect it by comparing `selectionStart!=selectionEnd` and do something else instead):"
        ],
        "codeExamples": [
          {
            "title": "Example: insert at cursor",
            "code": "<input id=\"input\" style=\"width:200px\" value=\"Text Text Text Text Text\">\n<button id=\"button\">Insert \"HELLO\" at cursor</button>\n\n<script>\n  button.onclick = () => {\n    input.setRangeText(\"HELLO\", input.selectionStart, input.selectionEnd, \"end\");\n    input.focus();\n  };    \n</script>",
            "explanation": "Example demonstrating example: insert at cursor."
          }
        ]
      },
      {
        "heading": "Making unselectable",
        "paragraphs": [
          "To make something unselectable, there are three ways:",
          "1. Use CSS property `user-select: none`.",
          "user-select: none;",
          "}",
          "Selectable Unselectable Selectable"
        ]
      },
      {
        "heading": "References",
        "paragraphs": [
          "Understanding References in JavaScript."
        ],
        "bulletPoints": [
          "DOM spec: Range",
          "Selection API",
          "HTML spec: APIs for the text control selections"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We covered two different APIs for selections:",
          "1. For document: `Selection` and `Range` objects.",
          "2. For `input`, `textarea`: additional methods and properties.",
          "The second API is very simple, as it works with text.",
          "The most used recipes are probably:"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Selection Range",
        "description": "Apply your understanding of Selection Range. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Selection Range\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Selection Range\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Selection Range in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for selection range.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Selection Range is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Selection Range?",
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
      "Selection Range is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying selection range.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "selection-range"
    ],
    "slug": "selection-range"
  },
  {
    "title": "Event Loop",
    "description": "Browser JavaScript execution flow, as well as in Node.js, is based on an *event loop*.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Browser JavaScript execution flow, as well as in Node.js, is based on an *event loop*.",
          "Understanding how event loop works is important for optimizations, and sometimes for the right architecture.",
          "In this chapter we first cover theoretical details about how things work, and then see practical applications of that knowledge."
        ]
      },
      {
        "heading": "Event Loop",
        "paragraphs": [
          "The *event loop* concept is very simple. There's an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.",
          "The general algorithm of the engine:",
          "1. While there are tasks:",
          "2. Sleep until a task appears, then go to 1.",
          "That's a formalization of what we see when browsing a page. The JavaScript engine does nothing most of the time, it only runs if a script/handler/event activates."
        ],
        "bulletPoints": [
          "execute them, starting with the oldest task.",
          "When an external script `` loads, the task is to execute it.",
          "When a user moves their mouse, the task is to dispatch `mousemove` event and execute handlers.",
          "When the time is due for a scheduled `setTimeout`, the task is to run its callback.",
          "...and so on."
        ]
      },
      {
        "heading": "Use-case 1: splitting CPU-hungry tasks",
        "paragraphs": [
          "Let's say we have a CPU-hungry task.",
          "For example, syntax-highlighting (used to colorize code examples on this page) is quite CPU-heavy. To highlight the code, it performs the analysis, creates many colored elements, adds them to the document -- for a large amount of text that takes a lot of time.",
          "While the engine is busy with syntax highlighting, it can't do other DOM-related stuff, process user events, etc. It may even cause the browser to \"hiccup\" or even \"hang\" for a bit, which is unacceptable.",
          "We can avoid problems by splitting the big task into pieces. Highlight the first 100 lines, then schedule `setTimeout` (with zero-delay) for the next 100 lines, and so on.",
          "To demonstrate this approach, for the sake of simplicity, instead of text-highlighting, let's take a function that counts from `1` to `1000000000`."
        ],
        "codeExamples": [
          {
            "title": "Use-case 1: splitting CPU-hungry tasks",
            "code": "let i = 0;\n\nlet start = Date.now();\n\nfunction count() {\n\n  // do a heavy job\n  for (let j = 0; j < 1e9; j++) {\n    i++;\n  }\n\n  alert(\"Done in \" + (Date.now() - start) + 'ms');\n}\n\ncount();",
            "explanation": "Example demonstrating use-case 1: splitting cpu-hungry tasks."
          },
          {
            "title": "Use-case 1: splitting CPU-hungry tasks",
            "code": "let i = 0;\n\nlet start = Date.now();\n\nfunction count() {\n\n  // do a piece of the heavy job (*)\n  do {\n    i++;\n  } while (i % 1e6 != 0);\n\n  if (i == 1e9) {\n    alert(\"Done in \" + (Date.now() - start) + 'ms');\n  } else {\n    setTimeout(count); // schedule the new call (**)\n  }\n\n}\n\ncount();",
            "explanation": "Example demonstrating use-case 1: splitting cpu-hungry tasks."
          }
        ]
      },
      {
        "heading": "Use case 2: progress indication",
        "paragraphs": [
          "Another benefit of splitting heavy tasks for browser scripts is that we can show progress indication.",
          "As mentioned earlier, changes to DOM are painted only after the currently running task is completed, irrespective of how long it takes.",
          "On one hand, that's great, because our function may create many elements, add them one-by-one to the document and change their styles -- the visitor won't see any \"intermediate\", unfinished state. An important thing, right?",
          "Here's the demo, the changes to `i` won't show up until the function finishes, so we'll see only the last value:",
          "...But we also may want to show something during the task, e.g. a progress bar."
        ],
        "codeExamples": [
          {
            "title": "Use case 2: progress indication",
            "code": "<div id=\"progress\"></div>\n\n<script>\n\n  function count() {\n    for (let i = 0; i < 1e6; i++) {\n      i++;\n      progress.innerHTML = i;\n    }\n  }\n\n  count();\n</script>",
            "explanation": "Example demonstrating use case 2: progress indication."
          },
          {
            "title": "Use case 2: progress indication",
            "code": "<div id=\"progress\"></div>\n\n<script>\n  let i = 0;\n\n  function count() {\n\n    // do a piece of the heavy job (*)\n    do {\n      i++;\n      progress.innerHTML = i;\n    } while (i % 1e3 != 0);\n\n    if (i < 1e7) {\n      setTimeout(count);\n    }\n\n  }\n\n  count();\n</script>",
            "explanation": "Example demonstrating use case 2: progress indication."
          }
        ]
      },
      {
        "heading": "Use case 3: doing something after the event",
        "paragraphs": [
          "In an event handler we may decide to postpone some actions until the event bubbled up and was handled on all levels. We can do that by wrapping the code in zero delay `setTimeout`.",
          "In the chapter we saw an example: custom event `menu-open` is dispatched in `setTimeout`, so that it happens after the \"click\" event is fully handled."
        ],
        "codeExamples": [
          {
            "title": "Use case 3: doing something after the event",
            "code": "menu.onclick = function() {\n  // ...\n\n  // create a custom event with the clicked menu item data\n  let customEvent = new CustomEvent(\"menu-open\", {\n    bubbles: true\n  });\n\n  // dispatch the custom event asynchronously\n  setTimeout(() => menu.dispatchEvent(customEvent));\n};",
            "explanation": "Example demonstrating use case 3: doing something after the event."
          }
        ]
      },
      {
        "heading": "Macrotasks and Microtasks",
        "paragraphs": [
          "Along with *macrotasks*, described in this chapter, there are *microtasks*, mentioned in the chapter .",
          "Microtasks come solely from our code. They are usually created by promises: an execution of `.then/catch/finally` handler becomes a microtask. Microtasks are used \"under the cover\" of `await` as well, as it's another form of promise handling.",
          "There's also a special function `queueMicrotask(func)` that queues `func` for execution in the microtask queue.",
          "**Immediately after every *macrotask*, the engine executes all tasks from *microtask* queue, prior to running any other macrotasks or rendering or anything else.**",
          "For instance, take a look:"
        ],
        "codeExamples": [
          {
            "title": "Macrotasks and Microtasks",
            "code": "setTimeout(() => alert(\"timeout\"));\n\nPromise.resolve()\n  .then(() => alert(\"promise\"));\n\nalert(\"code\");",
            "explanation": "Example demonstrating macrotasks and microtasks."
          },
          {
            "title": "Macrotasks and Microtasks",
            "code": "<div id=\"progress\"></div>\n\n<script>\n  let i = 0;\n\n  function count() {\n\n    // do a piece of the heavy job (*)\n    do {\n      i++;\n      progress.innerHTML = i;\n    } while (i % 1e3 != 0);\n\n    if (i < 1e6) {\n  *!*\n      queueMicrotask(count);\n  */!*\n    }\n\n  }\n\n  count();\n</script>",
            "explanation": "Example demonstrating macrotasks and microtasks."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "A more detailed event loop algorithm (though still simplified compared to the specification):",
          "1. Dequeue and run the oldest task from the *macrotask* queue (e.g. \"script\").",
          "2. Execute all *microtasks*:",
          "3. Render changes if any.",
          "4. If the macrotask queue is empty, wait till a macrotask appears."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "For long heavy calculations that shouldn't block the event loop, we can use [Web Workers](https://html.spec.whatwg.org/multipage/workers.html).\n\nThat's a way to run code in another, parallel thread.\n\nWeb Workers can exchange messages with the main process, but they have their own variables, and their own event loop.\n\nWeb Workers do not have access to DOM, so they are useful, mainly, for calculations, to use multiple CPU cores simultaneously.",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "While the microtask queue is not empty:",
          "Dequeue and run the oldest microtask.",
          "Use zero delayed `setTimeout(f)`.",
          "Use `queueMicrotask(f)`.",
          "Also promise handlers go through the microtask queue."
        ]
      }
    ],
    "exercises": [
      {
        "title": "What will be the output of this code?",
        "description": "```js console.log(1); setTimeout(() => console.log(2)); Promise.resolve().then(() => console.log(3)); Promise.resolve().then(() => setTimeout(() => console.log(4))); Promise.resolve().then(() => console.log(5)); setTimeout(() => console.log(6)); console.log(7); ```",
        "starterCode": "console.log(1);\n\nsetTimeout(() => console.log(2));\n\nPromise.resolve().then(() => console.log(3));\n\nPromise.resolve().then(() => setTimeout(() => console.log(4)));\n\nPromise.resolve().then(() => console.log(5));\n\nsetTimeout(() => console.log(6));\n\nconsole.log(7);",
        "solution": "console.log(1);\n// The first line executes immediately, it outputs `1`.\n// Macrotask and microtask queues are empty, as of now.\n\nsetTimeout(() => console.log(2));\n// `setTimeout` appends the callback to the macrotask queue.\n// - macrotask queue content:\n//   `console.log(2)`\n\nPromise.resolve().then(() => console.log(3));\n// The callback is appended to the microtask queue.\n// - microtask queue content:\n//   `console.log(3)`\n\nPromise.resolve().then(() => setTimeout(() => console.log(4)));\n// The callback with `setTimeout(...4)` is appended to microtasks\n// - microtask queue content:\n//   `console.log(3); setTimeout(...4)`\n\nPromise.resolve().then(() => console.log(5));\n// The callback is appended to the microtask queue\n// - microtask queue content:\n//   `console.log(3); setTimeout(...4); console.log(5)`\n\nsetTimeout(() => console.log(6));\n// `setTimeout` appends the callback to macrotasks\n// - macrotask queue content:\n//   `console.log(2); console.log(6)`\n\nconsole.log(7);\n// Outputs 7 immediately.",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Event Loop in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for event loop.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Event Loop is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Event Loop?",
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
      "Event Loop is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying event loop.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "event-loop"
    ],
    "slug": "event-loop"
  }
];
