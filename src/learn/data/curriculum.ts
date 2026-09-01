import type { Part } from '../types';

/**
 * The complete JavaScript learning curriculum.
 * Topics are ordered from absolute beginner to advanced/professional level.
 * This structure is used to build the sidebar navigation, roadmap, and progress tracking.
 */
export const curriculum: Part[] = [
  {
    slug: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    description:
      'Start from scratch — learn the building blocks that every JavaScript program is made of.',
    partNumber: 1,
    topics: [
      {
        slug: 'getting-started',
        title: 'Getting Started',
        description: 'Your first steps into the world of JavaScript.',
        icon: 'Rocket',
        accentColor: 'amber',
        lessonSlugs: [
          'what-is-javascript',
          'hello-world',
          'variables-and-constants',
          'data-types',
          'type-conversions',
        ],
      },
      {
        slug: 'operators-and-logic',
        title: 'Operators & Logic',
        description: 'Make decisions and perform calculations in your code.',
        icon: 'Calculator',
        accentColor: 'blue',
        lessonSlugs: [
          'arithmetic-operators',
          'comparison-operators',
          'logical-operators',
          'conditionals-if-else',
          'switch-statement',
          'ternary-operator',
        ],
      },
      {
        slug: 'loops-and-iteration',
        title: 'Loops & Iteration',
        description: 'Repeat actions and process collections of data.',
        icon: 'Repeat',
        accentColor: 'emerald',
        lessonSlugs: [
          'for-loop',
          'while-and-do-while',
          'break-and-continue',
          'for-of-and-for-in',
        ],
      },
    ],
  },
  {
    slug: 'functions-in-depth',
    title: 'Functions In Depth',
    description:
      'Master functions — the most important building block in JavaScript development.',
    partNumber: 2,
    topics: [
      {
        slug: 'function-basics',
        title: 'Function Basics',
        description:
          'Learn to write reusable blocks of code with functions.',
        icon: 'FunctionSquare',
        accentColor: 'violet',
        lessonSlugs: [
          'function-declarations',
          'parameters-and-return',
          'arrow-functions',
          'default-parameters',
          'rest-parameters',
        ],
      },
      {
        slug: 'advanced-functions',
        title: 'Advanced Functions',
        description:
          'Closures, callbacks, and higher-order function patterns.',
        icon: 'Layers',
        accentColor: 'rose',
        lessonSlugs: [
          'scope-and-closures',
          'callback-functions',
          'higher-order-functions',
          'iife-pattern',
          'recursion',
        ],
      },
    ],
  },
  {
    slug: 'objects-and-data',
    title: 'Objects & Data Structures',
    description:
      'Organize and manipulate data using JavaScript\'s powerful built-in structures.',
    partNumber: 3,
    topics: [
      {
        slug: 'objects',
        title: 'Working with Objects',
        description: 'Create, access, and transform object data.',
        icon: 'Box',
        accentColor: 'orange',
        lessonSlugs: [
          'object-basics',
          'object-methods-and-this',
          'object-destructuring',
          'spread-and-rest-objects',
          'optional-chaining',
          'object-keys-values-entries',
        ],
      },
      {
        slug: 'arrays',
        title: 'Arrays & Iteration',
        description: 'Master the array — JavaScript\'s most versatile data structure.',
        icon: 'LayoutList',
        accentColor: 'teal',
        lessonSlugs: [
          'array-basics',
          'array-methods-mutating',
          'array-methods-non-mutating',
          'map-filter-reduce',
          'array-destructuring',
          'spread-and-rest-arrays',
        ],
      },
      {
        slug: 'maps-sets-and-more',
        title: 'Maps, Sets & More',
        description: 'Beyond arrays and objects — specialized data collections.',
        icon: 'Database',
        accentColor: 'cyan',
        lessonSlugs: [
          'map-and-weakmap',
          'set-and-weakset',
          'json-essentials',
          'date-and-time',
        ],
      },
    ],
  },
  {
    slug: 'strings-and-numbers',
    title: 'Strings, Numbers & RegExp',
    description:
      'Deep dive into text processing, numeric precision, and pattern matching.',
    partNumber: 4,
    topics: [
      {
        slug: 'strings-deep-dive',
        title: 'Strings Deep Dive',
        description: 'Everything you need to know about text manipulation.',
        icon: 'Type',
        accentColor: 'purple',
        lessonSlugs: [
          'string-methods',
          'template-literals',
          'string-searching',
        ],
      },
      {
        slug: 'numbers-and-math',
        title: 'Numbers & Math',
        description: 'Number precision, the Math object, and numeric gotchas.',
        icon: 'Hash',
        accentColor: 'indigo',
        lessonSlugs: [
          'number-essentials',
          'math-object',
          'bigint',
        ],
      },
    ],
  },
  {
    slug: 'oop-and-prototypes',
    title: 'OOP & Prototypes',
    description:
      'Understand how JavaScript\'s object system really works under the hood.',
    partNumber: 5,
    topics: [
      {
        slug: 'prototypes',
        title: 'Prototypes & Inheritance',
        description: 'The prototype chain — JavaScript\'s inheritance model.',
        icon: 'GitBranch',
        accentColor: 'amber',
        lessonSlugs: [
          'prototype-basics',
          'prototype-chain',
          'constructor-functions',
        ],
      },
      {
        slug: 'classes',
        title: 'ES6 Classes',
        description: 'Modern class syntax and object-oriented patterns.',
        icon: 'Component',
        accentColor: 'sky',
        lessonSlugs: [
          'class-basics',
          'class-inheritance',
          'static-and-private',
          'getters-and-setters',
        ],
      },
    ],
  },
  {
    slug: 'error-handling',
    title: 'Error Handling',
    description:
      'Write resilient code that handles failures gracefully.',
    partNumber: 6,
    topics: [
      {
        slug: 'errors',
        title: 'Handling Errors',
        description: 'Try-catch, custom errors, and debugging strategies.',
        icon: 'ShieldAlert',
        accentColor: 'red',
        lessonSlugs: [
          'try-catch-finally',
          'error-types',
          'custom-errors',
          'debugging-techniques',
        ],
      },
    ],
  },
  {
    slug: 'async-javascript',
    title: 'Asynchronous JavaScript',
    description:
      'Master callbacks, promises, and async/await to handle time-dependent operations.',
    partNumber: 7,
    topics: [
      {
        slug: 'async-fundamentals',
        title: 'Async Fundamentals',
        description: 'Understand how JavaScript handles asynchronous tasks.',
        icon: 'Timer',
        accentColor: 'emerald',
        lessonSlugs: [
          'event-loop-explained',
          'settimeout-setinterval',
          'callbacks-and-callback-hell',
        ],
      },
      {
        slug: 'promises-and-async',
        title: 'Promises & Async/Await',
        description: 'Modern asynchronous patterns for clean, readable code.',
        icon: 'Workflow',
        accentColor: 'blue',
        lessonSlugs: [
          'promise-basics',
          'promise-chaining',
          'promise-all-race-any',
          'async-await',
          'error-handling-async',
        ],
      },
    ],
  },
  {
    slug: 'advanced-concepts',
    title: 'Advanced Concepts',
    description:
      'Level up with generators, iterators, proxies, symbols, and metaprogramming.',
    partNumber: 8,
    topics: [
      {
        slug: 'iterators-generators',
        title: 'Iterators & Generators',
        description: 'Lazy evaluation and custom iteration protocols.',
        icon: 'Infinity',
        accentColor: 'fuchsia',
        lessonSlugs: [
          'iterators-and-iterables',
          'generator-functions',
          'async-generators',
        ],
      },
      {
        slug: 'metaprogramming',
        title: 'Metaprogramming',
        description: 'Symbols, Proxies, Reflect — program the language itself.',
        icon: 'Wand2',
        accentColor: 'pink',
        lessonSlugs: [
          'symbols',
          'proxy-and-reflect',
          'well-known-symbols',
        ],
      },
      {
        slug: 'modules-and-tooling',
        title: 'Modules & Tooling',
        description: 'Organize code with ES modules and modern tooling.',
        icon: 'Package',
        accentColor: 'lime',
        lessonSlugs: [
          'es-modules',
          'dynamic-imports',
          'module-patterns',
        ],
      },
    ],
  },
  {
    slug: 'dom-and-browser',
    title: 'DOM & Browser APIs',
    description:
      'Interact with web pages — manipulate HTML, handle events, and use browser APIs.',
    partNumber: 9,
    topics: [
      {
        slug: 'dom-essentials',
        title: 'DOM Essentials',
        description: 'Select, create, and modify elements on the page.',
        icon: 'FileCode',
        accentColor: 'orange',
        lessonSlugs: [
          'dom-tree-overview',
          'selecting-elements',
          'modifying-elements',
          'creating-and-removing',
        ],
      },
      {
        slug: 'events',
        title: 'Events & Interactions',
        description: 'Respond to user actions and browser events.',
        icon: 'MousePointerClick',
        accentColor: 'red',
        lessonSlugs: [
          'event-basics',
          'event-bubbling-capturing',
          'event-delegation',
          'form-events',
        ],
      },
      {
        slug: 'browser-apis',
        title: 'Useful Browser APIs',
        description: 'Storage, fetch, timers, and other essential web APIs.',
        icon: 'Globe',
        accentColor: 'sky',
        lessonSlugs: [
          'local-storage-session-storage',
          'fetch-api',
          'url-and-history',
        ],
      },
    ],
  },
  {
    slug: 'interview-and-practice',
    title: 'Interview & Practice',
    description:
      'Sharpen your skills with real-world patterns, common interview topics, and coding challenges.',
    partNumber: 10,
    topics: [
      {
        slug: 'interview-concepts',
        title: 'Interview Must-Knows',
        description: 'The concepts that come up in every JavaScript interview.',
        icon: 'GraduationCap',
        accentColor: 'amber',
        lessonSlugs: [
          'hoisting-explained',
          'this-keyword-deep-dive',
          'call-apply-bind',
          'debounce-and-throttle',
          'shallow-vs-deep-copy',
          'event-loop-interview',
        ],
      },
      {
        slug: 'real-world-patterns',
        title: 'Real-World Patterns',
        description: 'Design patterns and techniques used in production code.',
        icon: 'Lightbulb',
        accentColor: 'emerald',
        lessonSlugs: [
          'module-pattern',
          'observer-pattern',
          'singleton-pattern',
          'factory-pattern',
          'currying-and-composition',
        ],
      },
    ],
  },
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
