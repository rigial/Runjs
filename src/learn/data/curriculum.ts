import type { Part } from '../types';

export const curriculum: Part[] = [
  {
    "slug": "part1-language-fundamentals",
    "title": "The JavaScript Language: Fundamentals",
    "description": "From your first program to variables, operators, loops, and clean coding style.",
    "partNumber": 1,
    "topics": [
      {
        "slug": "01-getting-started",
        "title": "Getting Started",
        "description": "Comprehensive coverage of getting started.",
        "icon": "Sparkles",
        "accentColor": "amber",
        "lessonSlugs": [
          "intro",
          "manuals-specifications",
          "code-editors",
          "devtools"
        ]
      },
      {
        "slug": "02-first-steps",
        "title": "First Steps",
        "description": "Comprehensive coverage of first steps.",
        "icon": "Terminal",
        "accentColor": "blue",
        "lessonSlugs": [
          "hello-world",
          "structure",
          "strict-mode",
          "variables",
          "types",
          "alert-prompt-confirm",
          "type-conversions",
          "operators",
          "comparison",
          "ifelse",
          "logical-operators",
          "nullish-coalescing-operator",
          "while-for",
          "switch",
          "function-basics",
          "function-expressions",
          "arrow-functions-basics",
          "javascript-specials"
        ]
      },
      {
        "slug": "03-code-quality",
        "title": "Code Quality & Debugging",
        "description": "Comprehensive coverage of code quality & debugging.",
        "icon": "ShieldCheck",
        "accentColor": "emerald",
        "lessonSlugs": [
          "debugging-chrome",
          "coding-style",
          "comments",
          "ninja-code",
          "testing-mocha",
          "polyfills"
        ]
      }
    ]
  },
  {
    "slug": "part2-objects-and-types",
    "title": "Objects & Data Types",
    "description": "Deep dive into JavaScript objects, primitives, arrays, maps, and JSON.",
    "partNumber": 2,
    "topics": [
      {
        "slug": "04-object-basics",
        "title": "Object Basics",
        "description": "Comprehensive coverage of object basics.",
        "icon": "Box",
        "accentColor": "indigo",
        "lessonSlugs": [
          "object",
          "object-copy",
          "garbage-collection",
          "object-methods",
          "constructor-new",
          "optional-chaining",
          "symbol",
          "object-toprimitive"
        ]
      },
      {
        "slug": "05-data-types",
        "title": "Data Types & Collections",
        "description": "Comprehensive coverage of data types & collections.",
        "icon": "Layers",
        "accentColor": "purple",
        "lessonSlugs": [
          "primitives-methods",
          "number",
          "string",
          "array",
          "array-methods",
          "iterable",
          "map-set",
          "weakmap-weakset",
          "keys-values-entries",
          "destructuring-assignment",
          "date",
          "json"
        ]
      }
    ]
  },
  {
    "slug": "part3-functions-and-prototypes",
    "title": "Advanced Functions & Prototypes",
    "description": "Master closures, decorators, call/apply/bind, property flags, and the prototype chain.",
    "partNumber": 3,
    "topics": [
      {
        "slug": "06-advanced-functions",
        "title": "Advanced Functions & Scope",
        "description": "Comprehensive coverage of advanced functions & scope.",
        "icon": "Cpu",
        "accentColor": "cyan",
        "lessonSlugs": [
          "recursion",
          "rest-parameters-spread",
          "closure",
          "var",
          "global-object",
          "function-object",
          "new-function",
          "settimeout-setinterval",
          "call-apply-decorators",
          "bind",
          "arrow-functions"
        ]
      },
      {
        "slug": "07-object-properties",
        "title": "Property Flags & Descriptors",
        "description": "Comprehensive coverage of property flags & descriptors.",
        "icon": "Sliders",
        "accentColor": "rose",
        "lessonSlugs": [
          "property-descriptors",
          "property-accessors"
        ]
      },
      {
        "slug": "08-prototypes",
        "title": "Prototypes & Inheritance",
        "description": "Comprehensive coverage of prototypes & inheritance.",
        "icon": "GitBranch",
        "accentColor": "amber",
        "lessonSlugs": [
          "prototype-inheritance",
          "function-prototype",
          "native-prototypes",
          "prototype-methods"
        ]
      }
    ]
  },
  {
    "slug": "part4-classes-errors-async",
    "title": "Classes, Error Handling & Async",
    "description": "OOP syntax, inheritance, resilient try/catch patterns, Promises, and async/await.",
    "partNumber": 4,
    "topics": [
      {
        "slug": "09-classes",
        "title": "Classes & OOP",
        "description": "Comprehensive coverage of classes & oop.",
        "icon": "Component",
        "accentColor": "sky",
        "lessonSlugs": [
          "class",
          "class-inheritance",
          "static-properties-methods",
          "private-protected-properties-methods",
          "extend-natives",
          "instanceof",
          "mixins"
        ]
      },
      {
        "slug": "10-error-handling",
        "title": "Error Handling",
        "description": "Comprehensive coverage of error handling.",
        "icon": "AlertTriangle",
        "accentColor": "red",
        "lessonSlugs": [
          "try-catch",
          "custom-errors"
        ]
      },
      {
        "slug": "11-async",
        "title": "Promises & Async/Await",
        "description": "Comprehensive coverage of promises & async/await.",
        "icon": "Timer",
        "accentColor": "emerald",
        "lessonSlugs": [
          "callbacks",
          "promise-basics",
          "promise-chaining",
          "promise-error-handling",
          "promise-api",
          "promisify",
          "microtask-queue",
          "async-await"
        ]
      }
    ]
  },
  {
    "slug": "part5-generators-modules-misc",
    "title": "Generators, Modules & Metaprogramming",
    "description": "Generators, async iterators, ES Modules, Proxies, Reflect, and eval.",
    "partNumber": 5,
    "topics": [
      {
        "slug": "12-generators-iterators",
        "title": "Generators & Iterators",
        "description": "Comprehensive coverage of generators & iterators.",
        "icon": "Infinity",
        "accentColor": "fuchsia",
        "lessonSlugs": [
          "generators",
          "async-iterators-generators"
        ]
      },
      {
        "slug": "13-modules",
        "title": "ES Modules",
        "description": "Comprehensive coverage of es modules.",
        "icon": "Package",
        "accentColor": "lime",
        "lessonSlugs": [
          "modules-intro",
          "import-export",
          "modules-dynamic-imports"
        ]
      },
      {
        "slug": "99-js-misc",
        "title": "Miscellaneous JavaScript",
        "description": "Comprehensive coverage of miscellaneous javascript.",
        "icon": "Wand2",
        "accentColor": "pink",
        "lessonSlugs": [
          "proxy",
          "eval",
          "currying-partials",
          "reference-type",
          "bigint",
          "unicode",
          "weakref-finalizationregistry"
        ]
      }
    ]
  },
  {
    "slug": "part6-browser-document",
    "title": "Browser: Document & DOM",
    "description": "The DOM tree, element queries, modifying nodes, styles, sizes, and coordinates.",
    "partNumber": 6,
    "topics": [
      {
        "slug": "1-document",
        "title": "Document & DOM Manipulation",
        "description": "Comprehensive coverage of document & dom manipulation.",
        "icon": "FileCode",
        "accentColor": "orange",
        "lessonSlugs": [
          "browser-environment",
          "dom-nodes",
          "dom-navigation",
          "searching-elements-dom",
          "basic-dom-node-properties",
          "dom-attributes-and-properties",
          "modifying-document",
          "styles-and-classes",
          "size-and-scroll",
          "size-and-scroll-window",
          "coordinates"
        ]
      }
    ]
  },
  {
    "slug": "part7-browser-events-forms",
    "title": "Browser: Events & Forms",
    "description": "Event bubbling, delegation, keyboard/mouse events, form controls, and lifecycle.",
    "partNumber": 7,
    "topics": [
      {
        "slug": "2-events",
        "title": "Introduction to Events",
        "description": "Comprehensive coverage of introduction to events.",
        "icon": "MousePointerClick",
        "accentColor": "red",
        "lessonSlugs": [
          "introduction-browser-events",
          "bubbling-and-capturing",
          "event-delegation",
          "default-browser-action",
          "dispatch-events"
        ]
      },
      {
        "slug": "3-event-details",
        "title": "UI Event Details",
        "description": "Comprehensive coverage of ui event details.",
        "icon": "HandMetal",
        "accentColor": "amber",
        "lessonSlugs": [
          "mouse-events-basics",
          "mousemove-mouseover-mouseout-mouseenter-mouseleave",
          "mouse-drag-and-drop",
          "pointer-events",
          "keyboard-events",
          "onscroll"
        ]
      },
      {
        "slug": "4-forms-controls",
        "title": "Forms & Controls",
        "description": "Comprehensive coverage of forms & controls.",
        "icon": "CheckSquare",
        "accentColor": "blue",
        "lessonSlugs": [
          "form-elements",
          "focus-blur",
          "events-change-input",
          "forms-submit"
        ]
      },
      {
        "slug": "5-loading",
        "title": "Document & Resource Loading",
        "description": "Comprehensive coverage of document & resource loading.",
        "icon": "Clock",
        "accentColor": "emerald",
        "lessonSlugs": [
          "onload-ondomcontentloaded",
          "script-async-defer",
          "onload-onerror"
        ]
      },
      {
        "slug": "99-ui-misc",
        "title": "UI Miscellaneous",
        "description": "Comprehensive coverage of ui miscellaneous.",
        "icon": "Compass",
        "accentColor": "purple",
        "lessonSlugs": [
          "mutation-observer",
          "selection-range",
          "event-loop"
        ]
      }
    ]
  },
  {
    "slug": "part8-network-storage-binary",
    "title": "Network Requests, Storage & Binary Data",
    "description": "Fetch API, WebSockets, Server-Sent Events, Cookies, IndexedDB, and File/Blob.",
    "partNumber": 8,
    "topics": [
      {
        "slug": "5-network",
        "title": "Network Requests",
        "description": "Comprehensive coverage of network requests.",
        "icon": "Globe",
        "accentColor": "sky",
        "lessonSlugs": [
          "fetch",
          "formdata",
          "fetch-progress",
          "fetch-abort",
          "fetch-crossorigin",
          "fetch-api",
          "url",
          "xmlhttprequest",
          "resume-upload",
          "long-polling",
          "websocket",
          "server-sent-events"
        ]
      },
      {
        "slug": "6-data-storage",
        "title": "Storing Data in the Browser",
        "description": "Comprehensive coverage of storing data in the browser.",
        "icon": "Database",
        "accentColor": "indigo",
        "lessonSlugs": [
          "cookie",
          "localstorage",
          "indexeddb"
        ]
      },
      {
        "slug": "4-binary",
        "title": "Binary Data & Files",
        "description": "Comprehensive coverage of binary data & files.",
        "icon": "Binary",
        "accentColor": "teal",
        "lessonSlugs": [
          "arraybuffer-binary-arrays",
          "text-decoder",
          "blob",
          "file"
        ]
      },
      {
        "slug": "3-frames-and-windows",
        "title": "Frames & Windows",
        "description": "Comprehensive coverage of frames & windows.",
        "icon": "AppWindow",
        "accentColor": "rose",
        "lessonSlugs": [
          "popup-windows",
          "cross-window-communication",
          "clickjacking"
        ]
      }
    ]
  },
  {
    "slug": "part9-animation-regex-components",
    "title": "Animation, Web Components & Regular Expressions",
    "description": "CSS/JS animations, Custom Elements, Shadow DOM, and comprehensive RegExp mastery.",
    "partNumber": 9,
    "topics": [
      {
        "slug": "7-animation",
        "title": "Animation & Transitions",
        "description": "Comprehensive coverage of animation & transitions.",
        "icon": "Activity",
        "accentColor": "pink",
        "lessonSlugs": [
          "bezier-curve",
          "css-animations",
          "js-animation"
        ]
      },
      {
        "slug": "8-web-components",
        "title": "Web Components",
        "description": "Comprehensive coverage of web components.",
        "icon": "Boxes",
        "accentColor": "violet",
        "lessonSlugs": [
          "webcomponents-intro",
          "custom-elements",
          "shadow-dom",
          "template-element",
          "slots-composition",
          "shadow-dom-style",
          "shadow-dom-events"
        ]
      },
      {
        "slug": "9-regular-expressions",
        "title": "Regular Expressions",
        "description": "Comprehensive coverage of regular expressions.",
        "icon": "Regex",
        "accentColor": "amber",
        "lessonSlugs": [
          "regexp-introduction",
          "regexp-character-classes",
          "regexp-unicode",
          "regexp-anchors",
          "regexp-multiline-mode",
          "regexp-boundary",
          "regexp-escaping",
          "regexp-character-sets-and-ranges",
          "regexp-quantifiers",
          "regexp-greedy-and-lazy",
          "regexp-groups",
          "regexp-backreferences",
          "regexp-alternation",
          "regexp-lookahead-lookbehind",
          "regexp-catastrophic-backtracking",
          "regexp-sticky",
          "regexp-methods"
        ]
      }
    ]
  }
];

// ─── Helper functions ────────────────────────────────────────────────────────

/** Get all lesson slugs across the entire curriculum */
export function getAllLessonSlugs(): string[] {
  return curriculum.flatMap((part) =>
    part.topics.flatMap((topic) => topic.lessonSlugs)
  );
}

/** Get total lesson count */
export function getTotalLessonCount(): number {
  return getAllLessonSlugs().length;
}

/** Find which part and topic a lesson belongs to */
export function findLessonLocation(
  lessonSlug: string
): { part: Part; topic: import('../types').Topic } | null {
  for (const part of curriculum) {
    for (const topic of part.topics) {
      if (topic.lessonSlugs.includes(lessonSlug)) {
        return { part, topic };
      }
    }
  }
  return null;
}

/** Get the next lesson slug in sequence, or null if at the end */
export function getNextLessonSlug(currentSlug: string): string | null {
  const allSlugs = getAllLessonSlugs();
  const index = allSlugs.indexOf(currentSlug);
  if (index === -1 || index >= allSlugs.length - 1) return null;
  return allSlugs[index + 1];
}

/** Get the previous lesson slug in sequence, or null if at the start */
export function getPreviousLessonSlug(currentSlug: string): string | null {
  const allSlugs = getAllLessonSlugs();
  const index = allSlugs.indexOf(currentSlug);
  if (index <= 0) return null;
  return allSlugs[index - 1];
}
