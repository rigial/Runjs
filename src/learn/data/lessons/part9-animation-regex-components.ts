// Auto-generated rewritten beginner-friendly curriculum for RunJS
import type { Lesson } from '../../types';

export const part9Lessons: Lesson[] = [
  {
    "slug": "bezier-curve",
    "title": "Bézier Curves and Easing Functions",
    "description": "Understand cubic Bézier curves (cubic-bezier) and how control points shape smooth physics and acceleration in animations.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The Geometry of Bézier Curves",
        "paragraphs": [
          "Bézier curves define smooth, organic acceleration in computer graphics and animations.",
          "A cubic Bézier curve is defined by four points: P0 (start 0,0), P1 (control point 1), P2 (control point 2), and P3 (end 1,1). The slope of the curve determines the speed of change over time."
        ],
        "codeExamples": [
          {
            "title": "Using cubic-bezier in CSS and JS",
            "code": "// Standard CSS easing functions are shortcuts for cubic-bezier:\n// ease: cubic-bezier(0.25, 0.1, 0.25, 1)\n// ease-in: cubic-bezier(0.42, 0, 1, 1)\n// ease-out: cubic-bezier(0, 0, 0.58, 1)\n\nconsole.log('Bézier curve formulas model realistic physical acceleration');",
            "output": "Bézier curve formulas model realistic physical acceleration",
            "explanation": "Control points determine whether an animation starts slow, peaks fast, or overshoots."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Format cubic-bezier String",
        "description": "Write a function makeBezier(p1x, p1y, p2x, p2y) that returns `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`.",
        "starterCode": "function makeBezier(p1x, p1y, p2x, p2y) {\n  return `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`;\n}\n\nconsole.log(makeBezier(0.25, 0.1, 0.25, 1));",
        "solution": "function makeBezier(p1x, p1y, p2x, p2y) {\n  return `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`;\n}\nconsole.log(makeBezier(0.25, 0.1, 0.25, 1));",
        "hints": [
          "Return `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the slope of a timing curve represent in an animation?",
        "options": [
          "The velocity / speed of the animation at that moment in time",
          "The color of the element",
          "The width of the screen",
          "The volume of audio"
        ],
        "correctIndex": 0,
        "explanation": "Steeper curve slope means faster movement; flatter slope means slower movement."
      }
    ],
    "keyTakeaways": [
      "Cubic Bézier curves define acceleration over time.",
      "Standard easings (ease-in, ease-out, ease-in-out) are presets.",
      "Can create spring bounce effects by setting Y control points above 1."
    ],
    "tags": [
      "bezier",
      "curves",
      "animation",
      "math",
      "easing"
    ]
  },
  {
    "slug": "css-animations",
    "title": "CSS Transitions and Keyframe Animations",
    "description": "Trigger hardware-accelerated transitions and keyframe animations from JavaScript using class toggles.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Hardware-Accelerated Animations",
        "paragraphs": [
          "CSS animations and transitions run on the browser's compositor thread (GPU), making them silky smooth and unaffected by JavaScript main-thread work.",
          "Best practice: Use JavaScript to manage state and toggle CSS classes, letting CSS execute the visual transitions (transform and opacity)."
        ],
        "codeExamples": [
          {
            "title": "Listening to transitionend",
            "code": "const box = document.createElement('div');\nbox.style.transition = 'transform 0.3s ease';\n\nbox.addEventListener('transitionend', (event) => {\n  console.log(`Transition completed for property: ${event.propertyName}`);\n});\n\nconsole.log('transitionend listener attached');",
            "output": "transitionend listener attached",
            "explanation": "transitionend lets JavaScript coordinate actions after a CSS animation finishes."
          }
        ],
        "callout": {
          "type": "tip",
          "text": "Always animate 'transform' and 'opacity' rather than 'top', 'left', or 'width' to avoid expensive layout reflows!"
        }
      }
    ],
    "exercises": [
      {
        "title": "Detect transitionend Event",
        "description": "Create an element, attach a 'transitionend' listener logging 'Done', and dispatch the event.",
        "starterCode": "const elem = document.createElement('div');\nelem.addEventListener('transitionend', () => console.log('Done'));\nelem.dispatchEvent(new Event('transitionend'));",
        "solution": "const elem = document.createElement('div');\nelem.addEventListener('transitionend', () => console.log('Done'));\nelem.dispatchEvent(new Event('transitionend'));",
        "hints": [
          "Use elem.addEventListener('transitionend', handler) and elem.dispatchEvent."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Which CSS properties are hardware-accelerated by the GPU without triggering layout recalculations?",
        "options": [
          "transform and opacity",
          "width and height",
          "margin and padding",
          "top and left"
        ],
        "correctIndex": 0,
        "explanation": "transform and opacity are handled directly by the GPU compositor, guaranteeing 60fps performance."
      }
    ],
    "keyTakeaways": [
      "Prefer CSS transitions for UI animations.",
      "Animate transform and opacity for GPU acceleration.",
      "Listen to transitionend and animationend for lifecycle callbacks."
    ],
    "tags": [
      "css-animations",
      "transitions",
      "gpu",
      "performance",
      "transitionend"
    ]
  },
  {
    "slug": "js-animation",
    "title": "JavaScript Animations with requestAnimationFrame",
    "description": "Build custom physics, canvas games, and dynamic animations using requestAnimationFrame for synchronized 60fps rendering.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Why requestAnimationFrame?",
        "paragraphs": [
          "Before requestAnimationFrame, animations used setInterval(update, 16). This caused frame tearing and wasted CPU by firing even when the tab was hidden.",
          "requestAnimationFrame(callback) syncs with the browser's display refresh rate (typically 60Hz or 120Hz), pauses automatically when the tab is backgrounded, and delivers an exact high-resolution timestamp."
        ],
        "codeExamples": [
          {
            "title": "The requestAnimationFrame Loop",
            "code": "function animate(duration, draw) {\n  const start = performance.now();\n  \n  function step(currentTime) {\n    const elapsed = currentTime - start;\n    const progress = Math.min(1, elapsed / duration);\n    \n    draw(progress);\n    \n    if (progress < 1) {\n      requestAnimationFrame(step);\n    }\n  }\n  \n  requestAnimationFrame(step);\n}\n\nconsole.log('requestAnimationFrame animation loop initialized');",
            "output": "requestAnimationFrame animation loop initialized",
            "explanation": "Calculates linear progress from 0 to 1 based on elapsed milliseconds."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Verify requestAnimationFrame",
        "description": "Check if typeof requestAnimationFrame === 'function' and log the result.",
        "starterCode": "console.log(typeof requestAnimationFrame === 'function');",
        "solution": "console.log(typeof requestAnimationFrame === 'function');",
        "hints": [
          "Check typeof requestAnimationFrame."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why is requestAnimationFrame superior to setTimeout/setInterval for animations?",
        "options": [
          "It synchronizes precisely with the monitor's refresh rate and automatically pauses when the browser tab is hidden",
          "It runs in C++ instead of JavaScript",
          "It eliminates the need for math",
          "It works without a screen"
        ],
        "correctIndex": 0,
        "explanation": "requestAnimationFrame eliminates tearing, saves battery, and matches hardware display cycles."
      }
    ],
    "keyTakeaways": [
      "Always use requestAnimationFrame for JS-driven animations.",
      "Use performance.now() for sub-millisecond timing precision.",
      "Clean up active animations with cancelAnimationFrame(id)."
    ],
    "tags": [
      "requestanimationframe",
      "animation",
      "fps",
      "performance",
      "timing"
    ]
  },
  {
    "slug": "webcomponents-intro",
    "title": "Web Components: The Native Component Model",
    "description": "Introduction to the 3 web component standards: Custom Elements, Shadow DOM, and HTML Templates.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Component Architecture Without Frameworks",
        "paragraphs": [
          "Web Components are a suite of native browser technologies allowing developers to create reusable, encapsulated custom HTML elements (e.g. <user-card>, <audio-player>).",
          "The suite consists of three core standards:",
          "1. Custom Elements: Define new HTML tags and their lifecycle.",
          "2. Shadow DOM: True CSS and DOM encapsulation isolated from the main page.",
          "3. HTML Templates (<template> and <slot>): Inert markup blueprints and content placeholders."
        ],
        "codeExamples": [
          {
            "title": "Web Component Triad",
            "code": "// Custom HTML tag:\n// <user-card name=\"Jane\" avatar=\"photo.jpg\"></user-card>\n\nconsole.log('Web components work natively in all modern browsers without React or Vue');",
            "output": "Web components work natively in all modern browsers without React or Vue",
            "explanation": "Web components are framework-agnostic and work seamlessly inside any framework."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Verify Custom Elements API",
        "description": "Check if 'customElements' in window is true and log it.",
        "starterCode": "console.log('customElements' in window);",
        "solution": "console.log('customElements' in window);",
        "hints": [
          "Check 'customElements' in window."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What are the three pillars that comprise the Web Components standard?",
        "options": [
          "Custom Elements, Shadow DOM, and HTML Templates",
          "HTML, CSS, and jQuery",
          "React, Angular, and Vue",
          "Babel, Webpack, and Vite"
        ],
        "correctIndex": 0,
        "explanation": "Custom Elements, Shadow DOM, and Templates/Slots make up the native W3C Web Component specification."
      }
    ],
    "keyTakeaways": [
      "Web Components are built into browser web standards.",
      "Encapsulate markup, styles, and behavior.",
      "Can be consumed anywhere standard HTML tags are used."
    ],
    "tags": [
      "web-components",
      "custom-elements",
      "shadow-dom",
      "templates"
    ]
  },
  {
    "slug": "custom-elements",
    "title": "Custom Elements: HTMLElement & Lifecycle Callbacks",
    "description": "Create custom HTML tags by extending HTMLElement, register with customElements.define(), and handle connectedCallback.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Building a Custom Element",
        "paragraphs": [
          "To create a custom element, declare a class extending HTMLElement and register it using customElements.define('tag-name', ClassName).",
          "Rule: Custom element tag names MUST contain a hyphen (-) (e.g. <app-button>, <user-card>) to avoid collisions with future native HTML tags."
        ],
        "codeExamples": [
          {
            "title": "Defining a Custom Element Class",
            "code": "class TimeDisplay extends HTMLElement {\n  connectedCallback() {\n    this.textContent = new Date().toLocaleTimeString();\n  }\n}\n\n// Register with hyphenated tag name:\ncustomElements.define('time-display', TimeDisplay);\n\nconst timeElem = document.createElement('time-display');\nconsole.log('Registered custom element:', timeElem.tagName.toLowerCase());",
            "output": "Registered custom element: time-display",
            "explanation": "connectedCallback runs automatically when the element is appended to the document."
          }
        ],
        "bulletPoints": [
          "connectedCallback(): Called when element is added to DOM.",
          "disconnectedCallback(): Called when element is removed from DOM.",
          "attributeChangedCallback(name, oldVal, newVal): Called when observed attributes change."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Define a Custom Tag",
        "description": "Define a HelloTag class extending HTMLElement with connectedCallback setting this.textContent = 'Hi'. Register as 'hello-tag'.",
        "starterCode": "class HelloTag extends HTMLElement {\n  connectedCallback() {\n    this.textContent = 'Hi';\n  }\n}\ncustomElements.define('hello-tag', HelloTag);\nconst el = document.createElement('hello-tag');\nconsole.log(el.tagName);",
        "solution": "class HelloTag extends HTMLElement {\n  connectedCallback() {\n    this.textContent = 'Hi';\n  }\n}\ncustomElements.define('hello-tag', HelloTag);\nconst el = document.createElement('hello-tag');\nconsole.log(el.tagName);",
        "hints": [
          "Tag names must contain a hyphen: 'hello-tag'."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why must custom element tag names always contain a hyphen (e.g. <my-card>)?",
        "options": [
          "To guarantee they never conflict with current or future native HTML element names",
          "Because HTML parsers cannot read uppercase letters",
          "It is required by CSS",
          "To prevent JavaScript execution"
        ],
        "correctIndex": 0,
        "explanation": "The W3C standard reserves single-word tags for future HTML standards, requiring hyphens for custom elements."
      }
    ],
    "keyTakeaways": [
      "Extend HTMLElement to build custom tags.",
      "Custom tag names must contain a hyphen (-).",
      "Use connectedCallback() for initialization and disconnectedCallback() for cleanup."
    ],
    "tags": [
      "custom-elements",
      "web-components",
      "htmlelement",
      "lifecycle"
    ]
  },
  {
    "slug": "shadow-dom",
    "title": "Shadow DOM: True Scoped Encapsulation",
    "description": "Isolate component DOM trees and CSS styles from the outer document using attachShadow({ mode: 'open' }).",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "What is the Shadow DOM?",
        "paragraphs": [
          "In standard web development, CSS is global: styles written for one button can accidentally bleed over and break buttons elsewhere.",
          "The Shadow DOM provides true DOM and style encapsulation. A component with a Shadow Root has its own isolated DOM tree that outer CSS cannot touch, and its internal CSS cannot leak out."
        ],
        "codeExamples": [
          {
            "title": "Attaching a Shadow Root",
            "code": "const container = document.createElement('div');\n\n// Attach shadow root:\nconst shadow = container.attachShadow({ mode: 'open' });\nshadow.innerHTML = `\n  <style>\n    p { color: red; font-weight: bold; }\n  </style>\n  <p>Encapsulated inside shadow root!</p>\n`;\n\nconsole.log('Shadow text:', shadow.querySelector('p')?.textContent);",
            "output": "Shadow text: Encapsulated inside shadow root!",
            "explanation": "The <style> p { color: red } rule applies ONLY inside this shadow tree, never affecting the rest of the page."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Attach Shadow Root",
        "description": "Create a div and attach a shadow root with mode: 'open'. Verify div.shadowRoot is not null.",
        "starterCode": "const div = document.createElement('div');\ndiv.attachShadow({ mode: 'open' });\nconsole.log(div.shadowRoot !== null);",
        "solution": "const div = document.createElement('div');\ndiv.attachShadow({ mode: 'open' });\nconsole.log(div.shadowRoot !== null);",
        "hints": [
          "Call div.attachShadow({ mode: 'open' })."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens to CSS rules defined inside a Shadow DOM <style> block?",
        "options": [
          "They are scoped strictly to the shadow tree and never leak out to affect the main document",
          "They apply to the entire website globally",
          "They are ignored by the browser",
          "They throw a CSS error"
        ],
        "correctIndex": 0,
        "explanation": "Shadow DOM guarantees complete CSS style encapsulation."
      }
    ],
    "keyTakeaways": [
      "Shadow DOM provides complete DOM and CSS encapsulation.",
      "Outer styles do not affect shadow DOM internals.",
      "Use attachShadow({ mode: 'open' }) to initialize a shadow root."
    ],
    "tags": [
      "shadow-dom",
      "encapsulation",
      "web-components",
      "scoped-css"
    ]
  },
  {
    "slug": "template-element",
    "title": "The Template Element: Inert Markup Blueprints",
    "description": "Store dormant HTML structures with <template> and clone them into the DOM efficiently using cloneNode(true).",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The <template> Tag",
        "paragraphs": [
          "The HTML <template> tag holds client-side markup that is inert when parsed: scripts inside do not run, images do not download, and styles do not render until cloned.",
          "To use a template, access its template.content DocumentFragment and clone it using content.cloneNode(true)."
        ],
        "codeExamples": [
          {
            "title": "Cloning Template Content",
            "code": "const template = document.createElement('template');\ntemplate.innerHTML = `\n  <div class=\"user-item\">\n    <span class=\"name\"></span>\n  </div>\n`;\n\n// Clone the blueprint:\nconst clone = template.content.cloneNode(true);\nclone.querySelector('.name').textContent = 'Alice';\n\nconst wrapper = document.createElement('div');\nwrapper.appendChild(clone);\nconsole.log(wrapper.innerHTML.trim());",
            "output": "<div class=\"user-item\"><span class=\"name\">Alice</span></div>",
            "explanation": "Templates provide high-performance DOM stamping without repeated HTML string parsing."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Stamp a Template",
        "description": "Create a template with '<p>Item</p>'. Clone it and log the cloned paragraph textContent.",
        "starterCode": "const t = document.createElement('template');\nt.innerHTML = '<p>Item</p>';\nconst clone = t.content.cloneNode(true);\nconsole.log(clone.querySelector('p').textContent);",
        "solution": "const t = document.createElement('template');\nt.innerHTML = '<p>Item</p>';\nconst clone = t.content.cloneNode(true);\nconsole.log(clone.querySelector('p').textContent);",
        "hints": [
          "Use t.content.cloneNode(true)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why does an <img> tag inside a <template> not load its image immediately when the page loads?",
        "options": [
          "Because template content is inert; the browser only downloads resources when the template is explicitly cloned and inserted into the live DOM",
          "Because images are forbidden in templates",
          "Because templates only work with SVG",
          "Due to ad blockers"
        ],
        "correctIndex": 0,
        "explanation": "Template contents are completely inert and non-rendering until stamped into the active document."
      }
    ],
    "keyTakeaways": [
      "<template> stores inert markup that doesn't execute until cloned.",
      "Use template.content.cloneNode(true) for high-performance DOM instantiation.",
      "Foundation for Web Component rendering and virtual DOM templating."
    ],
    "tags": [
      "template",
      "clonenode",
      "documentfragment",
      "web-components"
    ]
  },
  {
    "slug": "slots-composition",
    "title": "Slots and Composition: Shadow DOM Projection",
    "description": "Project light DOM children into shadow DOM templates using default slots and named <slot name='...'> elements.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Content Projection with <slot>",
        "paragraphs": [
          "When building components like dialogs or cards, you want callers to supply custom headers, body text, or buttons.",
          "The <slot> element acts as a placeholder inside the Shadow DOM where external content (the Light DOM) is projected and displayed."
        ],
        "codeExamples": [
          {
            "title": "Named Slots Example",
            "code": "// Inside Shadow DOM:\n// <div>\n//   <slot name=\"header\">Default Header</slot>\n//   <slot></slot> <!-- Default unnamed slot -->\n// </div>\n\n// Usage in Light DOM:\n// <my-card>\n//   <span slot=\"header\">Card Title</span>\n//   <p>Main body content</p>\n// </my-card>\n\nconsole.log('Slots allow flexible composition like React children or Vue slots');",
            "output": "Slots allow flexible composition like React children or Vue slots",
            "explanation": "Slots allow seamless content projection while maintaining full style isolation."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a Slot Element",
        "description": "Create a slot element, set name = 'title', and log slot.name.",
        "starterCode": "const slot = document.createElement('slot');\nslot.name = 'title';\nconsole.log(slot.name);",
        "solution": "const slot = document.createElement('slot');\nslot.name = 'title';\nconsole.log(slot.name);",
        "hints": [
          "Set slot.name = 'title'."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What element is used inside a Shadow DOM tree to receive projected content from the parent document?",
        "options": [
          "<slot>",
          "<outlet>",
          "<portal>",
          "<placeholder>"
        ],
        "correctIndex": 0,
        "explanation": "The <slot> element is the official HTML specification standard for content projection."
      }
    ],
    "keyTakeaways": [
      "<slot> projects Light DOM content into Shadow DOM layouts.",
      "Use named slots (<slot name='title'>) for multi-section components.",
      "Fallback content inside <slot> renders if no light DOM content is provided."
    ],
    "tags": [
      "slots",
      "composition",
      "shadow-dom",
      "projection"
    ]
  },
  {
    "slug": "shadow-dom-style",
    "title": "Shadow DOM Styling: :host and ::part",
    "description": "Style web components from within using :host and :host-context, and expose customizable styling hooks with ::part.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Shadow DOM Selectors: :host and ::part",
        "paragraphs": [
          "Shadow DOM introduces specialized CSS selectors for styling component boundaries:",
          "1. :host: Selects the custom element host itself from within its shadow tree (e.g. :host { display: block; }).",
          "2. :host([active]): Styles the host when it has a specific attribute or class.",
          "3. ::part(name): Allows outer stylesheets to selectively style specific internal shadow elements that declare a part attribute."
        ],
        "codeExamples": [
          {
            "title": "Styling with :host and ::part",
            "code": "// Inside Shadow DOM:\n// :host { display: block; border: 1px solid gray; }\n// :host(:hover) { border-color: royalblue; }\n// button { background: blue; }\n\n// In outer stylesheet (theming via part):\n// my-card::part(confirm-button) { background: green; }\n\nconsole.log(':host and ::part enable elegant component theming');",
            "output": ":host and ::part enable elegant component theming",
            "explanation": "::part creates safe, intentional styling APIs without breaking encapsulation."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Format :host CSS Rule",
        "description": "Write a template literal returning `:host { display: ${disp}; }` for disp = 'inline-block'.",
        "starterCode": "const disp = 'inline-block';\nconst css = `:host { display: ${disp}; }`;\nconsole.log(css);",
        "solution": "const disp = 'inline-block';\nconst css = `:host { display: ${disp}; }`;\nconsole.log(css);",
        "hints": [
          "Return `:host { display: ${disp}; }`."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What pseudo-element allows an outer document's stylesheet to safely style an internal element inside a Shadow DOM?",
        "options": [
          "::part()",
          "::shadow()",
          "::inside()",
          "::pierce()"
        ],
        "correctIndex": 0,
        "explanation": "The ::part() pseudo-element allows external stylesheets to style elements marked with a part='...' attribute."
      }
    ],
    "keyTakeaways": [
      "Use :host to style the custom element container from inside.",
      "Use ::part() to expose controlled CSS theming hooks to callers.",
      "CSS Custom Properties (CSS variables) penetrate Shadow DOM boundaries automatically."
    ],
    "tags": [
      "shadow-dom",
      "styling",
      "host",
      "part",
      "css-variables"
    ]
  },
  {
    "slug": "shadow-dom-events",
    "title": "Shadow DOM Events & Retargeting",
    "description": "Understand event retargeting: how events bubbling out of Shadow DOM have their event.target rewritten to protect encapsulation.",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Event Retargeting",
        "paragraphs": [
          "When an event occurs inside a Shadow DOM tree and bubbles up to the main document, the browser automatically performs Event Retargeting.",
          "The outer document sees the custom element host as event.target, preventing outside code from learning about internal implementation details.",
          "Use event.composedPath() if you need to inspect the full list of nodes the event traversed."
        ],
        "codeExamples": [
          {
            "title": "Event Retargeting Example",
            "code": "// Inside <custom-login> shadow DOM: user clicks <button id=\"btn\">\n// Outside handler on document sees:\n// event.target === <custom-login> (Retargeted! Internal #btn is hidden)\n// event.composedPath() === [<button>, shadowRoot, <custom-login>, ...]\n\nconsole.log('Event retargeting preserves encapsulation boundaries');",
            "output": "Event retargeting preserves encapsulation boundaries",
            "explanation": "Retargeting guarantees callers treat the custom element as a black-box entity."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Verify composed Property",
        "description": "Check if a new CustomEvent('test', { composed: true }) has composed === true.",
        "starterCode": "const e = new CustomEvent('test', { composed: true });\nconsole.log(e.composed);",
        "solution": "const e = new CustomEvent('test', { composed: true });\nconsole.log(e.composed);",
        "hints": [
          "Set composed: true to allow events to pass through shadow DOM boundaries."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What method returns the complete array of DOM nodes traversed by an event through shadow boundaries?",
        "options": [
          "event.composedPath()",
          "event.getAllTargets()",
          "event.nodeList()",
          "event.trace()"
        ],
        "correctIndex": 0,
        "explanation": "event.composedPath() returns the ordered array of objects traversed during dispatch."
      }
    ],
    "keyTakeaways": [
      "Events leaving a shadow root are retargeted to the host element.",
      "Only events with composed: true can cross shadow boundaries.",
      "event.composedPath() provides the full traversal path."
    ],
    "tags": [
      "shadow-dom",
      "events",
      "retargeting",
      "composed"
    ]
  },
  {
    "slug": "regexp-introduction",
    "title": "Regular Expressions: An Introduction",
    "description": "Search, extract, and replace patterns in text using RegExp literals (/pattern/flags) and methods test() and match().",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "What is a Regular Expression?",
        "paragraphs": [
          "A Regular Expression (RegExp) is a powerful pattern-matching language used for validating form inputs, searching text, and replacing substrings.",
          "In JavaScript, a regex can be created with literal slashes /pattern/flags or the new RegExp('pattern', 'flags') constructor."
        ],
        "codeExamples": [
          {
            "title": "Testing and Matching Patterns",
            "code": "const text = 'I love JavaScript and Java!';\n\n// RegExp literal with 'i' (case-insensitive) and 'g' (global) flags:\nconst regex = /javascript/i;\n\n// test() returns true or false:\nconsole.log('Matches?', regex.test(text)); // true\n\n// match() extracts matching substrings:\nconst matches = text.match(/Java\\w*/g);\nconsole.log('Matches:', matches); // ['JavaScript', 'Java']",
            "output": "Matches? true\nMatches: [\n  \"JavaScript\",\n  \"Java\"\n]",
            "explanation": "regex.test() tests presence; str.match() extracts matching content."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Test for a Digit",
        "description": "Write a regex /\\d/ that tests if 'User42' contains a digit using regex.test().",
        "starterCode": "const hasDigit = /\\d/.test('User42');\nconsole.log(hasDigit);",
        "solution": "const hasDigit = /\\d/.test('User42');\nconsole.log(hasDigit);",
        "hints": [
          "Use /\\d/.test('User42')."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does regex.test(str) return?",
        "options": [
          "A boolean (true if a match is found, otherwise false)",
          "An array of matching strings",
          "The index of the match",
          "undefined"
        ],
        "correctIndex": 0,
        "explanation": "The test() method executes a search and returns true or false."
      }
    ],
    "keyTakeaways": [
      "Regexes describe search patterns in strings.",
      "Use /pattern/flags for static patterns and new RegExp() for dynamic patterns.",
      "Common flags: i (case-insensitive), g (global / all matches), m (multiline)."
    ],
    "tags": [
      "regex",
      "regexp",
      "strings",
      "pattern-matching"
    ]
  },
  {
    "slug": "regexp-character-classes",
    "title": "Character Classes: \\d, \\s, \\w and Inverses",
    "description": "Match digits (\\d), whitespace (\\s), word characters (\\w), and their uppercase negated counterparts (\\D, \\S, \\W).",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Standard Character Classes",
        "paragraphs": [
          "Character classes are special shorthand codes that match specific categories of characters:",
          "1. \\d: Any digit (0-9). \\D matches any NON-digit.",
          "2. \\w: Any word character (letters, numbers, underscore). \\W matches any NON-word character.",
          "3. \\s: Any whitespace (spaces, tabs, newlines). \\S matches any NON-whitespace.",
          "4. . (dot): Matches any character EXCEPT newline (unless 's' flag is active)."
        ],
        "codeExamples": [
          {
            "title": "Character Classes in Action",
            "code": "const phone = '+1 (800) 555-0199';\n\n// Remove all non-digits to get clean numbers:\nconst cleanNumber = phone.replace(/\\D/g, '');\nconsole.log('Clean phone number:', cleanNumber); // '18005550199'",
            "output": "Clean phone number: 18005550199",
            "explanation": "\\D matches everything that is not a digit, stripping punctuation in one clean pass."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Extract Digits Only",
        "description": "Use str.replace(/\\D/g, '') on 'Item #402, Price: $99' to extract only digits.",
        "starterCode": "const raw = 'Item #402, Price: $99';\nconst digits = raw.replace(/\\D/g, '');\nconsole.log(digits);",
        "solution": "const raw = 'Item #402, Price: $99';\nconst digits = raw.replace(/\\D/g, '');\nconsole.log(digits);",
        "hints": [
          "Replace /\\D/g with empty string ''."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the uppercase \\D character class match in a regular expression?",
        "options": [
          "Any character that is NOT a digit",
          "Any digit",
          "Any whitespace",
          "The letter D only"
        ],
        "correctIndex": 0,
        "explanation": "Uppercase character classes (\\D, \\W, \\S) invert their lowercase counterparts."
      }
    ],
    "keyTakeaways": [
      "\\d matches digits, \\w matches word characters, \\s matches whitespace.",
      "Uppercase counterparts (\\D, \\W, \\S) match the inverse.",
      "The dot (.) matches any character except newline."
    ],
    "tags": [
      "regex",
      "character-classes",
      "digits",
      "whitespace"
    ]
  },
  {
    "slug": "regexp-unicode",
    "title": "Unicode RegEx & the 'u' Flag",
    "description": "Process emojis and international character sets accurately using the 'u' flag and \\p{...} Unicode property escapes.",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The 'u' Flag and Unicode Properties",
        "paragraphs": [
          "Without the 'u' flag, regular expressions treat surrogate pairs (like emojis) as two separate 16-bit characters, causing broken matches.",
          "The 'u' flag enables proper 32-bit surrogate pair handling and unlocks Unicode Property Escapes: \\p{Letter}, \\p{Number}, \\p{Emoji}."
        ],
        "codeExamples": [
          {
            "title": "Matching International Letters with \\p{L}",
            "code": "const greeting = 'Привет, Hello, こんにちは!';\n\n// Match any word in any human language using Unicode property escape:\nconst words = greeting.match(/\\p{Letter}+/gu);\nconsole.log('Words found:', words);",
            "output": "Words found: [\n  \"Привет\",\n  \"Hello\",\n  \"こんにちは\"\n]",
            "explanation": "\\p{Letter} with the 'u' flag matches letters in Cyrillic, Latin, Kanji, Arabic, and any other writing system."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match All Letters with \\p{L}",
        "description": "Match all letters in 'Code 123' using /\\p{L}+/gu and log the result.",
        "starterCode": "const text = 'Code 123';\nconst letters = text.match(/\\p{L}+/gu);\nconsole.log(letters);",
        "solution": "const text = 'Code 123';\nconst letters = text.match(/\\p{L}+/gu);\nconsole.log(letters);",
        "hints": [
          "Use /\\p{L}+/gu with str.match()."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What flag must be enabled to use Unicode Property Escapes like \\p{Letter} in JavaScript?",
        "options": [
          "The 'u' (Unicode) flag",
          "The 'i' (ignoreCase) flag",
          "The 'g' (global) flag",
          "The 'm' (multiline) flag"
        ],
        "correctIndex": 0,
        "explanation": "The 'u' flag tells the regex engine to treat strings as UTF-16 code points rather than raw code units."
      }
    ],
    "keyTakeaways": [
      "Always include the 'u' flag when matching emojis or international languages.",
      "Use \\p{Letter} and \\p{Number} for robust international text matching."
    ],
    "tags": [
      "regex",
      "unicode",
      "u-flag",
      "emojis",
      "internationalization"
    ]
  },
  {
    "slug": "regexp-anchors",
    "title": "Anchors: Start ^ and End $ of String",
    "description": "Ensure full string validation by pinning patterns to the beginning (^) and end ($) of text.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "String Boundaries: ^ and $",
        "paragraphs": [
          "Anchors do not match characters; they match positions in the text:",
          "1. ^ (caret): Matches the beginning of the string.",
          "2. $ (dollar): Matches the end of the string.",
          "Combining both (/^pattern$/) tests that the ENTIRE string matches the pattern from start to finish, which is essential for form validation."
        ],
        "codeExamples": [
          {
            "title": "Validating an Exact 5-Digit Zip Code",
            "code": "const validZip = '90210';\nconst badZip = '90210-extra';\n\n// Exact 5-digit regex:\nconst zipRegex = /^\\d{5}$/;\n\nconsole.log('Valid:', zipRegex.test(validZip)); // true\nconsole.log('Bad:', zipRegex.test(badZip));     // false (Extra chars rejected!)",
            "output": "Valid: true\nBad: false",
            "explanation": "Without ^ and $, /\\d{5}/ would match inside '90210-extra', falsely passing validation."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Validate Exact Username",
        "description": "Write a regex that tests if a string consists entirely of 3 to 8 lowercase letters: /^[a-z]{3,8}$/.",
        "starterCode": "const isValid = /^[a-z]{3,8}$/.test('admin');\nconsole.log(isValid);",
        "solution": "const isValid = /^[a-z]{3,8}$/.test('admin');\nconsole.log(isValid);",
        "hints": [
          "Wrap [a-z]{3,8} between ^ and $."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why is /^...$/ required when validating user input fields like emails or phone numbers?",
        "options": [
          "Because without ^ and $, the regex will return true if any part of the string matches, ignoring invalid trailing characters",
          "To speed up the regex engine",
          "To convert the string to lowercase",
          "It is required by TypeScript"
        ],
        "correctIndex": 0,
        "explanation": "Anchoring to start (^) and end ($) guarantees the full string adheres to the pattern."
      }
    ],
    "keyTakeaways": [
      "^ asserts start of string; $ asserts end of string.",
      "Always use /^pattern$/ for input validation.",
      "Anchors have zero width and consume no characters."
    ],
    "tags": [
      "regex",
      "anchors",
      "validation",
      "start-end"
    ]
  },
  {
    "slug": "regexp-multiline-mode",
    "title": "Multiline Mode: The 'm' Flag",
    "description": "Change anchor behavior: match the start and end of every line in multi-line strings using the 'm' flag.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "How the 'm' Flag Works",
        "paragraphs": [
          "By default, ^ and $ only match the very beginning and end of the entire string.",
          "In multiline mode (the 'm' flag), ^ matches the start of the string AND the start of any line (after \\n). Similarly, $ matches the end of the string AND the end of any line (before \\n)."
        ],
        "codeExamples": [
          {
            "title": "Matching Every Line in Multiline Text",
            "code": "const text = `1. First item\\n2. Second item\\n3. Third item`;\n\n// Match line numbers at the start of each line:\nconst items = text.match(/^\\d+\\./gm);\nconsole.log('Numbered lines found:', items);",
            "output": "Numbered lines found: [\n  \"1.\",\n  \"2.\",\n  \"3.\"\n]",
            "explanation": "The 'm' flag allows ^ to match after every newline character."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Line Starts with 'm'",
        "description": "Match all lines starting with '#' in '# A\\n# B' using /^# \\w/gm.",
        "starterCode": "const md = '# A\\n# B';\nconst headers = md.match(/^# \\w/gm);\nconsole.log(headers);",
        "solution": "const md = '# A\\n# B';\nconst headers = md.match(/^# \\w/gm);\nconsole.log(headers);",
        "hints": [
          "Use flag 'gm' on /^# \\w/."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the 'm' flag change about the ^ anchor?",
        "options": [
          "It makes ^ match after every newline character in addition to the start of the string",
          "It makes regex case-insensitive",
          "It searches backwards",
          "It matches spaces only"
        ],
        "correctIndex": 0,
        "explanation": "Multiline mode anchors ^ and $ to line boundaries (newlines)."
      }
    ],
    "keyTakeaways": [
      "Use the 'm' flag to match line-by-line in multi-line text.",
      "^ matches line start, $ matches line end.",
      "Combine with 'g' to find matches across all lines."
    ],
    "tags": [
      "regex",
      "multiline",
      "m-flag",
      "lines"
    ]
  },
  {
    "slug": "regexp-boundary",
    "title": "Word Boundary: \\b and \\B",
    "description": "Match whole standalone words without matching substrings using the \\b word boundary anchor.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The \\b Word Boundary",
        "paragraphs": [
          "If you search for /Java/, it will match inside 'JavaScript', which is often unwanted.",
          "The \\b word boundary matches the position between a word character (\\w) and a non-word character (or string start/end). Using /\\bJava\\b/ matches the exact word 'Java' only."
        ],
        "codeExamples": [
          {
            "title": "Matching Whole Words",
            "code": "const sentence = 'Java and JavaScript are different languages.';\n\n// Matches 'Java' only as an isolated word:\nconst match = sentence.match(/\\bJava\\b/g);\nconsole.log('Whole word matches:', match); // ['Java']",
            "output": "Whole word matches: [\n  \"Java\"\n]",
            "explanation": "\\b prevents accidental substring matching inside longer words."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Isolated Word 'is'",
        "description": "Use /\\bis\\b/g on 'This is island' to match only the standalone word 'is'.",
        "starterCode": "const text = 'This is island';\nconst matches = text.match(/\\bis\\b/g);\nconsole.log(matches);",
        "solution": "const text = 'This is island';\nconst matches = text.match(/\\bis\\b/g);\nconsole.log(matches);",
        "hints": [
          "/\\bis\\b/g matches 'is' surrounded by word boundaries."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Why is /\\bcat\\b/ preferred over /cat/ when searching for mentions of the animal 'cat'?",
        "options": [
          "To prevent false positive matches inside words like 'category', 'scatter', or 'certificate'",
          "To make the search case-insensitive",
          "To allow punctuation inside 'cat'",
          "It runs faster on the CPU"
        ],
        "correctIndex": 0,
        "explanation": "Word boundaries guarantee that 'cat' is matched only as an independent word."
      }
    ],
    "keyTakeaways": [
      "\\b matches word boundaries (start or end of a word).",
      "\\B matches non-word boundaries.",
      "Use \\bword\\b to match exact standalone words."
    ],
    "tags": [
      "regex",
      "word-boundary",
      "search",
      "patterns"
    ]
  },
  {
    "slug": "regexp-escaping",
    "title": "Escaping Special Characters: \\",
    "description": "Escape regex metacharacters [ ] { } ( ) \\ ^ $ . | ? * + with backslashes to match literal symbols.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The Metacharacters",
        "paragraphs": [
          "Certain characters have special syntactic meaning in regular expressions: [ ] { } ( ) \\ ^ $ . | ? * +.",
          "If you want to search for a literal dot or question mark, you MUST escape it with a backslash (\\. or \\?).",
          "When building dynamic regexes with new RegExp(str), remember to escape backslashes in the string (e.g. '\\\\.')."
        ],
        "codeExamples": [
          {
            "title": "Matching Literal Dots and Currency",
            "code": "const price = 'Total: $19.99';\n\n// Escaping $ and . to match literal symbols:\nconst match = price.match(/\\$\\d+\\.\\d{2}/);\nconsole.log('Matched price:', match[0]); // '$19.99'",
            "output": "Matched price: $19.99",
            "explanation": "\\$ matches literal dollar sign, and \\. matches a literal decimal point."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Escape a Dot Pattern",
        "description": "Write a regex /g\\.js/ that matches literal 'g.js'. Test on 'app.g.js'.",
        "starterCode": "const isMatch = /g\\.js/.test('app.g.js');\nconsole.log(isMatch);",
        "solution": "const isMatch = /g\\.js/.test('app.g.js');\nconsole.log(isMatch);",
        "hints": [
          "Use \\. to match a literal dot."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What happens if you search with /./ without a backslash?",
        "options": [
          "It matches ANY character (except newline), not just a literal dot",
          "It throws a SyntaxError",
          "It matches only spaces",
          "It deletes the string"
        ],
        "correctIndex": 0,
        "explanation": "An unescaped dot is a wildcard matching any character."
      }
    ],
    "keyTakeaways": [
      "Escape special characters with \\ (e.g. \\., \\$, \\?, \\*).",
      "In string constructors (new RegExp), double the backslash ('\\\\.')."
    ],
    "tags": [
      "regex",
      "escaping",
      "metacharacters",
      "syntax"
    ]
  },
  {
    "slug": "regexp-character-sets-and-ranges",
    "title": "Sets and Ranges: [abc] and [^abc]",
    "description": "Define custom character sets with brackets [a-z0-9], ranges with hyphens, and negated sets with [^...].",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Brackets and Character Sets",
        "paragraphs": [
          "Square brackets define a character set: matching any single character from the set.",
          "1. [aeiou]: Matches any lowercase vowel.",
          "2. [a-zA-Z0-9]: Range shorthand matching any alphanumeric character.",
          "3. [^0-9]: Negated set: matches any character EXCEPT digits."
        ],
        "codeExamples": [
          {
            "title": "Character Ranges",
            "code": "const hexColor = '#3A9f8B';\n\n// Match valid hexadecimal characters:\nconst hexChars = hexColor.match(/[0-9a-fA-F]/g);\nconsole.log('Hex characters found:', hexChars.join(''));",
            "output": "Hex characters found: 3A9f8B",
            "explanation": "Ranges [a-z] provide concise character group definitions."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Vowels",
        "description": "Extract all vowels from 'JavaScript' using /[aeiou]/gi and log as an array.",
        "starterCode": "const vowels = 'JavaScript'.match(/[aeiou]/gi);\nconsole.log(vowels);",
        "solution": "const vowels = 'JavaScript'.match(/[aeiou]/gi);\nconsole.log(vowels);",
        "hints": [
          "Use /[aeiou]/gi."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the negated character set [^abc] match?",
        "options": [
          "Any single character EXCEPT 'a', 'b', or 'c'",
          "Only the string '^abc'",
          "Characters starting with abc",
          "Nothing"
        ],
        "correctIndex": 0,
        "explanation": "The caret (^) at the start of a character set negates the set, matching everything else."
      }
    ],
    "keyTakeaways": [
      "Use [abc] to match any character from the set.",
      "Use [a-z] for ranges.",
      "Use [^abc] for negated sets."
    ],
    "tags": [
      "regex",
      "character-sets",
      "ranges",
      "brackets"
    ]
  },
  {
    "slug": "regexp-quantifiers",
    "title": "Quantifiers: +, *, ?, and {n,m}",
    "description": "Specify repetition counts using +, *, ?, exact counts {n}, and range quantifiers {min,max}.",
    "difficulty": "beginner",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Controlling Repetition",
        "paragraphs": [
          "Quantifiers define how many times a character or group may repeat:",
          "1. + (plus): 1 or more times (shorthand for {1,}).",
          "2. * (star): 0 or more times (shorthand for {0,}).",
          "3. ? (question mark): 0 or 1 time (optional, shorthand for {0,1}).",
          "4. {n}: Exactly n times (e.g. \\d{4} for 4-digit year).",
          "5. {n,m}: Between n and m times."
        ],
        "codeExamples": [
          {
            "title": "Quantifiers in Action",
            "code": "const dates = '2026-09-01';\n\n// Match ISO date pattern:\nconst isISODate = /^\\d{4}-\\d{2}-\\d{2}$/.test(dates);\nconsole.log('Valid ISO date format?', isISODate); // true\n\n// Optional 's' in http(s):\nconst urlRegex = /^https?:\\/\\//;\nconsole.log('Matches http:', urlRegex.test('http://site.com'));   // true\nconsole.log('Matches https:', urlRegex.test('https://site.com')); // true",
            "output": "Valid ISO date format? true\nMatches http: true\nMatches https: true",
            "explanation": "Quantifiers provide precise structural validation."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Optional Characters",
        "description": "Use /colou?r/ to match both 'color' and 'colour'. Test on 'color'.",
        "starterCode": "const isMatch = /colou?r/.test('color');\nconsole.log(isMatch);",
        "solution": "const isMatch = /colou?r/.test('color');\nconsole.log(isMatch);",
        "hints": [
          "The ? makes 'u' optional."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does the '+' quantifier mean in regular expressions?",
        "options": [
          "Match 1 or more occurrences of the preceding element",
          "Match 0 or 1 occurrence",
          "Match exactly 2 occurrences",
          "Add two numbers together"
        ],
        "correctIndex": 0,
        "explanation": "+ requires at least one occurrence (1 or more)."
      }
    ],
    "keyTakeaways": [
      "+ = 1 or more, * = 0 or more, ? = 0 or 1.",
      "Use {n,m} for explicit minimum and maximum bounds."
    ],
    "tags": [
      "regex",
      "quantifiers",
      "repetition",
      "plus",
      "star"
    ]
  },
  {
    "slug": "regexp-greedy-and-lazy",
    "title": "Greedy and Lazy Quantifiers",
    "description": "Stop regex from consuming too much text: convert default greedy quantifiers (*, +) to lazy (*?, +?) with '?'.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Greedy by Default",
        "paragraphs": [
          "By default, quantifiers (*, +) in JavaScript are greedy: they consume as many characters as possible before backtracking.",
          "If you want a quantifier to consume the SMALLEST number of characters possible, append a question mark (?) after it to make it lazy (*?, +?)."
        ],
        "codeExamples": [
          {
            "title": "Greedy vs Lazy Quotes Extraction",
            "code": "const html = '<button>Save</button><button>Cancel</button>';\n\n// Greedy: consumes from first < to the very LAST >:\nconsole.log('Greedy:', html.match(/<.*>/)[0]);\n\n// Lazy (*?): stops at the FIRST > encountered:\nconsole.log('Lazy:', html.match(/<.*?>/g));",
            "output": "Greedy: <button>Save</button><button>Cancel</button>\nLazy: [\n  \"<button>\",\n  \"</button>\",\n  \"<button>\",\n  \"</button>\"\n]",
            "explanation": "Lazy quantifiers prevent over-matching across HTML tags or quotes."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Extract Quoted String with Lazy Quantifier",
        "description": "Extract \"Alice\" and \"Bob\" from '\"Alice\" and \"Bob\"' using lazy /\"(.*?)\"/g.",
        "starterCode": "const text = '\"Alice\" and \"Bob\"';\nconst names = text.match(/\"(.*?)\"/g);\nconsole.log(names);",
        "solution": "const text = '\"Alice\" and \"Bob\"';\nconst names = text.match(/\"(.*?)\"/g);\nconsole.log(names);",
        "hints": [
          "Append ? after * to make it lazy: /\"(.*?)\"/g."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "How do you make a greedy quantifier (like *) lazy in regular expressions?",
        "options": [
          "Append a question mark immediately after the quantifier (e.g. *?)",
          "Add the 'l' flag to the regex",
          "Wrap in parentheses",
          "Use double slashes"
        ],
        "correctIndex": 0,
        "explanation": "Appending '?' turns greedy quantifiers (*, +, {n,m}) into lazy ones."
      }
    ],
    "keyTakeaways": [
      "Greedy quantifiers consume as much as possible.",
      "Lazy quantifiers (*?, +?) stop at the earliest valid match.",
      "Essential when matching HTML tags and quoted text."
    ],
    "tags": [
      "regex",
      "greedy",
      "lazy",
      "quantifiers",
      "backtracking"
    ]
  },
  {
    "slug": "regexp-groups",
    "title": "Capturing Groups & Named Groups",
    "description": "Group expressions with ( ), extract sub-matches, and use modern ES2018 Named Capturing Groups (?<name>).",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Capturing Groups with Parentheses",
        "paragraphs": [
          "Parentheses ( ) serve two purposes: grouping expressions and capturing matched sub-strings into distinct result array indices.",
          "Modern JavaScript (ES2018) supports Named Capturing Groups: (?<groupName>pattern), which populate match.groups with clean, readable property names."
        ],
        "codeExamples": [
          {
            "title": "Named Capturing Groups",
            "code": "const dateString = '2026-09-01';\n\nconst dateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;\nconst match = dateString.match(dateRegex);\n\nconst { year, month, day } = match.groups;\nconsole.log(`Year: ${year}, Month: ${month}, Day: ${day}`);",
            "output": "Year: 2026, Month: 09, Day: 01",
            "explanation": "Named groups make code readable, self-documenting, and resilient to refactoring."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Extract Area Code with Group",
        "description": "Extract area code from '(415) 555-1234' using /\\((\\d{3})\\)/.",
        "starterCode": "const phone = '(415) 555-1234';\nconst match = phone.match(/\\((\\d{3})\\)/);\nconsole.log(match[1]);",
        "solution": "const phone = '(415) 555-1234';\nconst match = phone.match(/\\((\\d{3})\\)/);\nconsole.log(match[1]);",
        "hints": [
          "match[1] contains the first captured group."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Where are captured values accessible when using Named Capturing Groups (?<name>)?",
        "options": [
          "On the match.groups object",
          "On window.groups",
          "Directly in global scope",
          "Inside match[0]"
        ],
        "correctIndex": 0,
        "explanation": "Named capturing groups populate properties on match.groups."
      }
    ],
    "keyTakeaways": [
      "Parentheses ( ) capture sub-matches into numerical indices.",
      "Use (?<name>pattern) for named capturing groups.",
      "Use (?:pattern) for non-capturing groups when grouping without extraction."
    ],
    "tags": [
      "regex",
      "groups",
      "capturing-groups",
      "named-groups",
      "es2018"
    ]
  },
  {
    "slug": "regexp-backreferences",
    "title": "Backreferences: \\1 and \\k<name>",
    "description": "Match repeated patterns: reference previous captured groups with \\1, \\2, and \\k<name> in the same expression.",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Referencing Captured Groups",
        "paragraphs": [
          "A backreference allows you to reuse the EXACT text matched by an earlier capturing group inside the same regular expression.",
          "1. \\1 references the first group, \\2 the second.",
          "2. \\k<name> references a named capturing group."
        ],
        "codeExamples": [
          {
            "title": "Matching Balanced HTML Tags",
            "code": "const html = '<b>Bold text</b> and <i>Italic text</i>';\n\n// Match opening tag and guarantee closing tag matches the same tag name:\nconst tagRegex = /<(?<tag>\\w+)>.*?<\\/\\k<tag>>/g;\nconst matches = html.match(tagRegex);\nconsole.log('Matched valid tags:', matches);",
            "output": "Matched valid tags: [\n  \"<b>Bold text</b>\",\n  \"<i>Italic text</i>\"\n]",
            "explanation": "\\k<tag> guarantees that an opening <b> tag is closed strictly by a </b> tag."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Repeated Word",
        "description": "Match repeated words like 'the the' using /\\b(\\w+)\\s+\\1\\b/.",
        "starterCode": "const str = 'It was the the best of times';\nconst match = str.match(/\\b(\\w+)\\s+\\1\\b/);\nconsole.log(match[0]);",
        "solution": "const str = 'It was the the best of times';\nconst match = str.match(/\\b(\\w+)\\s+\\1\\b/);\nconsole.log(match[0]);",
        "hints": [
          "\\1 matches the exact word captured in group 1."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What does \\1 represent in a regular expression?",
        "options": [
          "A backreference matching the exact text matched by the first capturing group",
          "The digit 1",
          "The first character in the string",
          "The number of repetitions"
        ],
        "correctIndex": 0,
        "explanation": "Backreference \\1 dynamically matches the identical content captured by group 1."
      }
    ],
    "keyTakeaways": [
      "Backreferences match identical repeated text.",
      "Use \\1, \\2 for indexed groups.",
      "Use \\k<name> for named groups."
    ],
    "tags": [
      "regex",
      "backreferences",
      "patterns",
      "advanced"
    ]
  },
  {
    "slug": "regexp-alternation",
    "title": "Alternation (OR): The Pipe '|'",
    "description": "Match one of several alternative patterns using the pipe operator (|) and group options with parentheses.",
    "difficulty": "beginner",
    "readingTime": 4,
    "sections": [
      {
        "heading": "The Alternation Operator |",
        "paragraphs": [
          "The pipe symbol (|) is the regular expression equivalent of the logical OR operator.",
          "It matches any of the expressions separated by the pipe: /cat|dog|bird/ matches 'cat', 'dog', or 'bird'."
        ],
        "codeExamples": [
          {
            "title": "Alternation with Grouping",
            "code": "const extensions = 'file.png, doc.pdf, icon.svg';\n\n// Match specific image file extensions:\nconst matches = extensions.match(/\\w+\\.(png|jpg|svg)/g);\nconsole.log('Image files:', matches);",
            "output": "Image files: [\n  \"file.png\",\n  \"icon.svg\"\n]",
            "explanation": "Combining alternation inside parentheses scopes the alternatives cleanly."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Payment Types",
        "description": "Write a regex /(card|cash|paypal)/ that tests if 'paid by card' contains an accepted method.",
        "starterCode": "const isAccepted = /(card|cash|paypal)/.test('paid by card');\nconsole.log(isAccepted);",
        "solution": "const isAccepted = /(card|cash|paypal)/.test('paid by card');\nconsole.log(isAccepted);",
        "hints": [
          "Use /(card|cash|paypal)/."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What character represents the OR / Alternation operator in regular expressions?",
        "options": [
          "| (pipe)",
          "||",
          "or",
          "/"
        ],
        "correctIndex": 0,
        "explanation": "The single pipe character (|) separates alternative choices in regular expressions."
      }
    ],
    "keyTakeaways": [
      "Use | to match alternative patterns.",
      "Wrap alternatives in parentheses to limit their scope.",
      "Evaluated from left to right."
    ],
    "tags": [
      "regex",
      "alternation",
      "or",
      "pipe"
    ]
  },
  {
    "slug": "regexp-lookahead-lookbehind",
    "title": "Lookahead and Lookbehind Assertions",
    "description": "Zero-width assertions: positive/negative lookahead (?=)/(?!) and lookbehind (?<=)/(?<!) without consuming characters.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Lookaround Assertions",
        "paragraphs": [
          "Lookaround assertions test whether a pattern is preceded or followed by another pattern, WITHOUT including that pattern in the final match:",
          "1. Positive Lookahead (?=...): Matches X only if followed by Y.",
          "2. Negative Lookahead (?!...): Matches X only if NOT followed by Y.",
          "3. Positive Lookbehind (?<=...): Matches X only if preceded by Y.",
          "4. Negative Lookbehind (?<!...): Matches X only if NOT preceded by Y."
        ],
        "codeExamples": [
          {
            "title": "Extracting Currency Amounts",
            "code": "const text = '1 apple costs $15, 2 oranges cost €20';\n\n// Match numbers only if preceded by a currency symbol ($ or €):\nconst prices = text.match(/(?<=[$€])\\d+/g);\nconsole.log('Prices found:', prices); // ['15', '20'] (Currency symbol is not consumed!)",
            "output": "Prices found: [\n  \"15\",\n  \"20\"\n]",
            "explanation": "Positive lookbehind (?<=[$€]) asserts currency presence without including the symbol in match results."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Match Digits Followed by px",
        "description": "Extract digits followed by 'px' using /\\d+(?=px)/ on 'font-size: 16px'.",
        "starterCode": "const text = 'font-size: 16px';\nconst size = text.match(/\\d+(?=px)/)[0];\nconsole.log(size);",
        "solution": "const text = 'font-size: 16px';\nconst size = text.match(/\\d+(?=px)/)[0];\nconsole.log(size);",
        "hints": [
          "Use positive lookahead (?=px)."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "Do lookaround assertions consume characters in the final regex match output?",
        "options": [
          "No, they are zero-width assertions that check conditions without consuming characters",
          "Yes, they always append to the match",
          "Only on Safari",
          "Only in strict mode"
        ],
        "correctIndex": 0,
        "explanation": "Lookahead and lookbehind are zero-width checks that inspect surrounding context without consuming text."
      }
    ],
    "keyTakeaways": [
      "Lookahead: (?=) positive, (?!) negative.",
      "Lookbehind: (?<=) positive, (?<!) negative.",
      "Zero-width: tests context without including it in match results."
    ],
    "tags": [
      "regex",
      "lookahead",
      "lookbehind",
      "zero-width",
      "assertions"
    ]
  },
  {
    "slug": "regexp-catastrophic-backtracking",
    "title": "Catastrophic Backtracking & ReDoS",
    "description": "Prevent browser freezes and ReDoS security exploits caused by nested quantifiers and exponential backtracking.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "What is Catastrophic Backtracking?",
        "paragraphs": [
          "When a regular expression contains nested ambiguous quantifiers (such as (x+x+)+y), testing it against an unmatchable string forces the regex engine to test an exponential number of permutations.",
          "A string of just 30 characters can take billions of calculations, freezing the JavaScript thread entirely. When exploited by attackers, this vulnerability is known as Regular Expression Denial of Service (ReDoS)."
        ],
        "codeExamples": [
          {
            "title": "Safe vs Vulnerable Patterns",
            "code": "// VULNERABLE: /(a+)+b/ against 'aaaaaaaaaaaaaaaaaaaaaaaa!' causes catastrophic freeze!\n\n// SAFE: Eliminate ambiguity and make sub-patterns mutually exclusive:\nconst safeRegex = /^a+b$/;\nconsole.log('Safe regex verified:', safeRegex.test('aaaaab')); // true",
            "output": "Safe regex verified: true",
            "explanation": "Prevent ReDoS by avoiding nested quantifiers on overlapping character sets."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Avoid Nested Ambiguity",
        "description": "Refactor a dangerous nested pattern to a simple non-nested quantifier /^a+$/.",
        "starterCode": "const safe = /^a+$/;\nconsole.log(safe.test('aaaaa'));",
        "solution": "const safe = /^a+$/;\nconsole.log(safe.test('aaaaa'));",
        "hints": [
          "Simple quantifiers without nesting avoid exponential backtracking."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What causes Catastrophic Backtracking (ReDoS) in regular expressions?",
        "options": [
          "Nested ambiguous quantifiers that force the engine to explore an exponential number of permutations when a match fails",
          "Having too many comments",
          "Using the 'i' flag",
          "Using lowercase letters"
        ],
        "correctIndex": 0,
        "explanation": "Nested overlapping quantifiers create exponential O(2^n) backtracking paths that freeze the CPU."
      }
    ],
    "keyTakeaways": [
      "Avoid nested quantifiers like (a+)+.",
      "Ensure alternative branches are mutually exclusive.",
      "Validate regexes with linters and automated ReDoS checkers."
    ],
    "tags": [
      "regex",
      "redos",
      "performance",
      "security",
      "backtracking"
    ]
  },
  {
    "slug": "regexp-sticky",
    "title": "Sticky Flag 'y' and Searching at Position",
    "description": "Search strictly at regex.lastIndex without skipping ahead using the high-performance 'y' sticky flag.",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "The Sticky Flag 'y'",
        "paragraphs": [
          "Normally, when a regular expression searches a string, it scans forward until it finds a match.",
          "The sticky flag 'y' instructs the engine to search strictly and exclusively at the exact index specified by regex.lastIndex. If no match exists at that exact character position, it fails immediately without scanning forward."
        ],
        "codeExamples": [
          {
            "title": "Building Lexical Parsers with Sticky Flag",
            "code": "const code = 'const x = 10;';\nconst identifier = /[a-z]+/y;\n\nidentifier.lastIndex = 6;\nconst match = identifier.exec(code);\nconsole.log('Identifier matched at index 6:', match[0]); // 'x'",
            "output": "Identifier matched at index 6: x",
            "explanation": "Sticky search is essential for high-performance programming language compilers and tokenizers."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Test Sticky Match",
        "description": "Set regex.lastIndex = 0 on sticky regex /\\w+/y and exec on 'abc'. Log result[0].",
        "starterCode": "const r = /\\w+/y;\nr.lastIndex = 0;\nconsole.log(r.exec('abc')[0]);",
        "solution": "const r = /\\w+/y;\nr.lastIndex = 0;\nconsole.log(r.exec('abc')[0]);",
        "hints": [
          "r.exec('abc') matches from lastIndex."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What distinguishes the sticky flag 'y' from the global flag 'g'?",
        "options": [
          "'y' searches strictly at the exact position specified by lastIndex, while 'g' scans forward through the string to find matches",
          "'y' searches from the end to the beginning",
          "'y' ignores numbers",
          "There is no difference"
        ],
        "correctIndex": 0,
        "explanation": "The 'y' flag guarantees the match starts exactly at lastIndex without skipping any intermediate characters."
      }
    ],
    "keyTakeaways": [
      "The 'y' flag searches strictly at lastIndex.",
      "Fails fast without scanning through the rest of the string.",
      "The foundation for programming language tokenizers and parsers."
    ],
    "tags": [
      "regex",
      "sticky",
      "y-flag",
      "parsers",
      "lastindex"
    ]
  },
  {
    "slug": "regexp-methods",
    "title": "Methods of RegExp and String",
    "description": "Master the complete regex method toolkit: str.match(), str.matchAll(), str.split(), str.replace(), and regex.exec().",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "The Complete Regex Method Arsenal",
        "paragraphs": [
          "JavaScript splits regex functionality between String methods and RegExp methods:",
          "1. str.match(regex): Returns matches array or null.",
          "2. str.matchAll(regex): Returns an iterator of all matches including capturing groups (requires 'g' flag).",
          "3. str.replace(regex, replacement): Replaces matches (supports replacement functions).",
          "4. str.split(regex): Splits text by pattern delimiters.",
          "5. regex.exec(str): Low-level execution method updating lastIndex across iterations."
        ],
        "codeExamples": [
          {
            "title": "Transforming Text with matchAll and replace",
            "code": "// 1. Using replace with replacement function:\nconst prices = 'Apple: $5, Banana: $3';\nconst discounted = prices.replace(/\\$(\\d+)/g, (match, price) => `$${price * 0.8}`);\nconsole.log('Discounted:', discounted);\n\n// 2. Iterating with matchAll:\nconst tags = '<h1>Title</h1><p>Body</p>';\nfor (const m of tags.matchAll(/<(\\w+)>(.*?)<\\/\\1>/g)) {\n  console.log(`Tag: ${m[1]}, Content: ${m[2]}`);\n}",
            "output": "Discounted: Apple: $4, Banana: $2.4\nTag: h1, Content: Title\nTag: p, Content: Body",
            "explanation": "replace with a callback function provides full programmatic control over replacements."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Replace with Function",
        "description": "Double all numbers in 'Item: 5, Count: 10' using str.replace(/\\d+/g, n => n * 2).",
        "starterCode": "const text = 'Item: 5, Count: 10';\nconst doubled = text.replace(/\\d+/g, n => n * 2);\nconsole.log(doubled);",
        "solution": "const text = 'Item: 5, Count: 10';\nconst doubled = text.replace(/\\d+/g, n => n * 2);\nconsole.log(doubled);",
        "hints": [
          "Pass a replacer function n => n * 2."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What method returns an iterator of all match results including capturing groups for a global regular expression?",
        "options": [
          "str.matchAll(regex)",
          "str.match(regex)",
          "str.findAll(regex)",
          "regex.testAll(str)"
        ],
        "correctIndex": 0,
        "explanation": "matchAll() produces an iterator yielding full match objects with capturing groups for each match."
      }
    ],
    "keyTakeaways": [
      "Use str.match() for quick extractions and str.matchAll() for detailed group iterations.",
      "Use str.replace() with a callback function for dynamic transformations.",
      "regex.exec() powers custom iterative scanning loops."
    ],
    "tags": [
      "regex",
      "methods",
      "matchall",
      "replace",
      "exec",
      "split"
    ]
  }
];
