import { Problem } from '../types';

export const PROBLEMS: Problem[] = [
  {
    id: '001',
    slug: 'two-sum',
    title: 'Two Sum',
    difficulty: 'easy',
    topics: ['Array', 'Hash Map'],
    acceptanceRate: '84%',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'nums[1] + nums[2] == 6, we return [1, 2].',
      },
      {
        input: 'nums = [3, 3], target = 6',
        output: '[0, 1]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    functionName: 'twoSum',
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your solution here
  
}
`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Standard Target',
        input: [[2, 7, 11, 15], 9],
        expected: [0, 1],
      },
      {
        name: 'Middle Elements',
        input: [[3, 2, 4], 6],
        expected: [1, 2],
      },
      {
        name: 'Duplicate Values',
        input: [[3, 3], 6],
        expected: [0, 1],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Negative Numbers',
        input: [[-3, 4, 3, 90], 0],
        expected: [0, 2],
        isHidden: true,
      },
      {
        name: 'Large Target',
        input: [[1000000000, 2, 500000000, 500000000], 1000000000],
        expected: [2, 3],
        isHidden: true,
      },
      {
        name: 'First and Last Elements',
        input: [[1, 4, 6, 11, 19], 20],
        expected: [0, 4],
        isHidden: true,
      },
      {
        name: 'Zeroes',
        input: [[0, 4, 3, 0], 0],
        expected: [0, 3],
        isHidden: true,
      },
    ],
    hints: [
      'A brute force O(n^2) approach checks all pairs. Can we do better with auxiliary space?',
      'Consider using a Hash Map to store numbers you have already visited and their indices.',
      'For each number x, check if (target - x) exists in your map in O(1) time.',
    ],
    solution: {
      explanation: `We can solve this problem in O(n) time using a JavaScript Map or plain object.
As we iterate through the array, for each element nums[i], we calculate its complement = target - nums[i].
If complement is present in our map, we have found the matching pair and return [map.get(complement), i].
Otherwise, we store nums[i] along with its index in the map.`,
      code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(n)',
      },
    },
  },
  {
    id: '002',
    slug: 'reverse-string',
    title: 'Reverse String',
    difficulty: 'easy',
    topics: ['String', 'Two Pointers'],
    acceptanceRate: '92%',
    description: `Write a function that reverses a string. The input string is given as a string, and you should return the reversed string.`,
    examples: [
      {
        input: 's = "hello"',
        output: '"olleh"',
      },
      {
        input: 's = "Hannah"',
        output: '"hannaH"',
      },
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of printable ASCII characters.',
    ],
    functionName: 'reverseString',
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
  // Write your solution here
  
}
`,
      typescript: `function reverseString(s: string): string {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Basic Word',
        input: ['hello'],
        expected: 'olleh',
      },
      {
        name: 'Mixed Case',
        input: ['Hannah'],
        expected: 'hannaH',
      },
      {
        name: 'Single Character',
        input: ['a'],
        expected: 'a',
      },
    ],
    hiddenTestCases: [
      {
        name: 'Palindrome',
        input: ['racecar'],
        expected: 'racecar',
        isHidden: true,
      },
      {
        name: 'With Spaces and Punctuation',
        input: ['RunJS 2.0!'],
        expected: '!0.2 SJunR',
        isHidden: true,
      },
      {
        name: 'Empty String',
        input: [''],
        expected: '',
        isHidden: true,
      },
    ],
    hints: [
      'You can convert the string to an array using split(""), reverse it, and join it back.',
      'Alternatively, build the reversed string iteratively from right to left using a two-pointer technique.',
    ],
    solution: {
      explanation: `In JavaScript, strings are immutable. We can split the string into an array of characters, reverse the array, and join them back together, or iterate backwards.`,
      code: `function reverseString(s) {
  return s.split('').reverse().join('');
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(n)',
      },
    },
  },
  {
    id: '003',
    slug: 'valid-anagram',
    title: 'Valid Anagram',
    difficulty: 'easy',
    topics: ['String', 'Hash Map'],
    acceptanceRate: '86%',
    description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: 'true',
      },
      {
        input: 's = "rat", t = "car"',
        output: 'false',
      },
    ],
    constraints: [
      '1 <= s.length, t.length <= 5 * 10^4',
      's and t consist of lowercase English letters.',
    ],
    functionName: 'isAnagram',
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  // Write your solution here
  
}
`,
      typescript: `function isAnagram(s: string, t: string): boolean {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Matching Anagrams',
        input: ['anagram', 'nagaram'],
        expected: true,
      },
      {
        name: 'Mismatched Words',
        input: ['rat', 'car'],
        expected: false,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Different Lengths',
        input: ['a', 'ab'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Identical Single Char',
        input: ['z', 'z'],
        expected: true,
        isHidden: true,
      },
    ],
    hints: [
      'First check if lengths of both strings are equal. If not, return false.',
      'Count character frequencies with a hash map or 26-element array.',
    ],
    solution: {
      explanation: `If lengths differ, return false. Count the frequency of each character in s and subtract the frequencies using characters from t. If all counts resolve to 0, they are anagrams.`,
      code: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '004',
    slug: 'debounce-function',
    title: 'Debounce Function',
    difficulty: 'medium',
    topics: ['JS', 'Closures', 'Async'],
    acceptanceRate: '68%',
    description: `Implement a debounce higher-order function. 

Debouncing ensures that time-consuming tasks do not fire so often. A debounced function delays the invocation of fn until after wait milliseconds have elapsed since the last time the debounced function was invoked.

If called multiple times within the wait window, only the last call should be executed.`,
    examples: [
      {
        input: 'fn = log, wait = 50ms (invoked at 0ms, 20ms, 40ms)',
        output: 'fn executed once at 90ms with latest arguments',
        explanation:
          'Calls within the 50ms window cancel prior scheduled invocations.',
      },
    ],
    constraints: ['0 <= wait <= 1000', 'fn can accept arbitrary arguments.'],
    functionName: 'debounce',
    starterCode: {
      javascript: `/**
 * @param {Function} fn
 * @param {number} wait
 * @return {Function}
 */
function debounce(fn, wait) {
  // Return debounced function
  
}
`,
      typescript: `function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  // Return debounced function
  
}
`,
    },
    testCases: [
      {
        name: 'Debounce Execution',
        input: [(x: number) => x * 2, 50],
        expected: 20,
      },
    ],
    hiddenTestCases: [],
    hints: [
      'Use a timer variable stored in the closure.',
      'Whenever the returned function is called, clear any existing timer using clearTimeout(timer).',
      'Set a new timer with setTimeout that executes the original function with this and arguments.',
    ],
    solution: {
      explanation: `Debouncing stores a timeoutId in a closure. Each time the debounced wrapper is triggered, it cancels any existing timeout before setting a new one.`,
      code: `function debounce(fn, wait) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}`,
      complexity: {
        time: 'O(1) per invocation',
        space: 'O(1)',
      },
    },
  },
  {
    id: '005',
    slug: 'deep-clone',
    title: 'Deep Clone',
    difficulty: 'medium',
    topics: ['JS', 'Object', 'Recursion'],
    acceptanceRate: '54%',
    description: `Implement a function deepClone(value) that creates a deep copy of any given JavaScript value.

Your implementation must handle:
- Primitive values (numbers, strings, booleans, null, undefined)
- Plain Objects {}
- Arrays []
- Nested objects and arrays of arbitrary depth
- Dates (new Date())
- Regular Expressions (new RegExp())`,
    examples: [
      {
        input: 'obj = { a: 1, b: { c: 2 }, d: [3, 4] }',
        output: '{ a: 1, b: { c: 2 }, d: [3, 4] }',
        explanation:
          'Modifying the cloned object must not mutate the original object.',
      },
    ],
    constraints: [
      'Input values can be nested up to 50 levels.',
      'Circular references are not required for this problem.',
    ],
    functionName: 'deepClone',
    starterCode: {
      javascript: `/**
 * @param {*} value
 * @return {*}
 */
function deepClone(value) {
  // Write your deep clone implementation
  
}
`,
      typescript: `function deepClone<T>(value: T): T {
  // Write your deep clone implementation
  
}
`,
    },
    testCases: [
      {
        name: 'Nested Object & Array',
        input: [{ a: 1, b: { c: 2, d: [3, 4] } }],
        expected: { a: 1, b: { c: 2, d: [3, 4] } },
      },
      {
        name: 'Primitive Types',
        input: [42],
        expected: 42,
      },
      {
        name: 'Array of Objects',
        input: [[{ id: 1 }, { id: 2 }]],
        expected: [{ id: 1 }, { id: 2 }],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Date and Regex',
        input: [{ d: new Date('2026-01-01'), r: /abc/gi }],
        expected: { d: new Date('2026-01-01'), r: /abc/gi },
        isHidden: true,
      },
      {
        name: 'Null and Undefined values',
        input: [{ a: null, b: undefined, c: '' }],
        expected: { a: null, b: undefined, c: '' },
        isHidden: true,
      },
      {
        name: 'Deep Nested Matrix',
        input: [
          [
            [
              [1, 2],
              [3, 4],
            ],
            [[5, 6]],
          ],
        ],
        expected: [
          [
            [1, 2],
            [3, 4],
          ],
          [[5, 6]],
        ],
        isHidden: true,
      },
    ],
    hints: [
      'Check if the value is a primitive or null. If so, return it directly.',
      'Check if value is an Array or Object. Recursively clone each property/item.',
      'Handle Date and RegExp instances by constructing new instances.',
    ],
    solution: {
      explanation: `We recursively inspect the type of value. If it is a primitive or null, we return it as is. If it is a Date or RegExp, we construct new instances. If it is an Array or plain Object, we recursively clone each element or key.`,
      code: `function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }
  const copy = {};
  for (const key of Object.keys(value)) {
    copy[key] = deepClone(value[key]);
  }
  return copy;
}`,
      complexity: {
        time: 'O(N) where N is the total number of nested properties',
        space: 'O(D) call stack depth where D is maximum nesting',
      },
    },
  },
  {
    id: '006',
    slug: 'flatten-array',
    title: 'Flatten Nested Array',
    difficulty: 'medium',
    topics: ['Array', 'Recursion', 'Polyfill'],
    acceptanceRate: '76%',
    description: `Given a multi-dimensional array arr and a depth n, return a flattened version of the array.

Flattening an array means taking all elements from nested sub-arrays and placing them in the parent array.

If n = 0, the array remains unchanged. If n = 1, one level of nesting is removed. If n is greater than or equal to the maximum nesting depth, all nested arrays are completely flattened.`,
    examples: [
      {
        input:
          'arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0',
        output: '[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]',
      },
      {
        input:
          'arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1',
        output: '[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]',
      },
    ],
    constraints: [
      '0 <= count of numbers in arr <= 10^5',
      '0 <= maximum depth <= 1000',
      '0 <= n <= 1000',
    ],
    functionName: 'flat',
    starterCode: {
      javascript: `/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, depth = 1) {
  // Write your solution here
  
}
`,
      typescript: `function flat(arr: any[], depth: number = 1): any[] {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Depth 0 (Unchanged)',
        input: [[1, 2, 3, [4, 5]], 0],
        expected: [1, 2, 3, [4, 5]],
      },
      {
        name: 'Depth 1 (Single Level)',
        input: [[1, 2, [3, 4, [5, 6]]], 1],
        expected: [1, 2, 3, 4, [5, 6]],
      },
      {
        name: 'Depth 2 (Full Flat)',
        input: [[1, 2, [3, 4, [5, 6]]], 2],
        expected: [1, 2, 3, 4, 5, 6],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Empty Nested Arrays',
        input: [[[], [[]], 1], 2],
        expected: [1],
        isHidden: true,
      },
      {
        name: 'Deep Nesting with Infinite Depth',
        input: [[[[[100]]]], 10],
        expected: [100],
        isHidden: true,
      },
    ],
    hints: [
      'If depth is 0, return a copy of the input array.',
      'Use recursion. For each element, if it is an array and depth > 0, recursively flat it with depth - 1.',
    ],
    solution: {
      explanation: `We iterate through each element. If the item is an array and depth > 0, we recursively call flat(item, depth - 1) and spread the items into our result.`,
      code: `function flat(arr, depth = 1) {
  if (depth <= 0) return arr.slice();
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}`,
      complexity: {
        time: 'O(N)',
        space: 'O(N)',
      },
    },
  },
  {
    id: '007',
    slug: 'memoize-function',
    title: 'Memoize Function',
    difficulty: 'medium',
    topics: ['JS', 'Closures', 'Optimization'],
    acceptanceRate: '71%',
    description: `Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.`,
    examples: [
      {
        input: 'fn = (a, b) => a + b, inputs = [[2,2], [2,2], [1,2]]',
        output: '[4, 4, 3]',
        explanation:
          'Second call with [2,2] returns cached 4 without calling fn.',
      },
    ],
    constraints: [
      '0 <= a, b <= 10^5',
      'at most 10^5 function calls will be made',
    ],
    functionName: 'memoize',
    starterCode: {
      javascript: `/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // Write your memoize function
  
}
`,
      typescript: `function memoize(fn: Function): Function {
  // Write your memoize function
  
}
`,
    },
    testCases: [
      {
        name: 'Add Function',
        input: [(a: number, b: number) => a + b, [2, 3]],
        expected: 5,
      },
      {
        name: 'Multi-arg Call',
        input: [(a: number, b: number, c: number) => a * b * c, [2, 3, 4]],
        expected: 24,
      },
    ],
    hiddenTestCases: [],
    hints: [
      'Create a cache Map inside the outer function scope.',
      'Serialize arguments into a string key (e.g. JSON.stringify(args)).',
      'Check if key exists in cache. If so, return cached value, otherwise compute and save.',
    ],
    solution: {
      explanation: `We store past results in a Map keyed by the serialized argument list. On subsequent calls with identical arguments, we return the value from cache without re-executing fn.`,
      code: `function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}`,
      complexity: {
        time: 'O(1) lookup on cached hits',
        space: 'O(U) where U is number of unique argument tuples',
      },
    },
  },
  {
    id: '008',
    slug: 'promise-all-polyfill',
    title: 'Promise.all Polyfill',
    difficulty: 'medium',
    topics: ['JS', 'Async', 'Promises'],
    acceptanceRate: '58%',
    description: `Implement a function promiseAll(promises) that mimics the behavior of Promise.all.

Given an array of promises (or values), promiseAll returns a new Promise that:
1. Resolves when all of the input promises have resolved, with an array of the resolved values in the exact same order as the input promises.
2. Rejects immediately with the reason of the first promise that rejects.
3. Resolves with [] if given an empty array.`,
    examples: [
      {
        input: 'promises = [Promise.resolve(1), Promise.resolve(2), 3]',
        output: '[1, 2, 3]',
      },
      {
        input:
          'promises = [Promise.resolve(1), Promise.reject("Error!"), Promise.resolve(3)]',
        output: 'Rejects with "Error!"',
      },
    ],
    constraints: [
      'promises is an array of Promises or regular values.',
      'Array length is between 0 and 100.',
    ],
    functionName: 'promiseAll',
    isAsync: true,
    starterCode: {
      javascript: `/**
 * @param {Array<Promise|any>} promises
 * @return {Promise<Array>}
 */
function promiseAll(promises) {
  // Write your Promise.all polyfill
  
}
`,
      typescript: `function promiseAll<T>(promises: (Promise<T> | T)[]): Promise<T[]> {
  // Write your Promise.all polyfill
  
}
`,
    },
    testCases: [
      {
        name: 'All Resolving Values',
        input: [[Promise.resolve(10), Promise.resolve(20), 30]],
        expected: [10, 20, 30],
      },
      {
        name: 'Empty Promises Array',
        input: [[]],
        expected: [],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Delayed Promises in Staggered Order',
        input: [
          [
            new Promise((res) => setTimeout(() => res('A'), 40)),
            new Promise((res) => setTimeout(() => res('B'), 10)),
            'C',
          ],
        ],
        expected: ['A', 'B', 'C'],
        isHidden: true,
      },
    ],
    hints: [
      'Return new Promise((resolve, reject) => { ... }).',
      'If the input array is empty, resolve with [] immediately.',
      'Maintain a completedCount counter and a results array of matching length.',
      'Use Promise.resolve(item).then(...) to handle non-promise values.',
    ],
    solution: {
      explanation: `We return a new Promise and keep track of a completedCount and a results array.
For each item, we wrap it with Promise.resolve() to safely handle both promises and synchronous values.
When a promise resolves, we store its result at its original index and increment the count. Once completedCount === promises.length, we resolve the outer promise.`,
      code: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises) || promises.length === 0) {
      return resolve([]);
    }
    const results = new Array(promises.length);
    let completed = 0;

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((val) => {
          results[index] = val;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}`,
      complexity: {
        time: 'O(N)',
        space: 'O(N)',
      },
    },
  },
  {
    id: '009',
    slug: 'event-emitter',
    title: 'Event Emitter',
    difficulty: 'medium',
    topics: ['JS', 'Object', 'Data Structure'],
    acceptanceRate: '65%',
    description: `Design an EventEmitter class.

The EventEmitter should provide two methods:
- subscribe(eventName, callback): Registers a callback function for the event. It returns an object with an unsubscribe() method that removes the subscription.
- emit(eventName, args = []): Triggers all callback functions associated with eventName in the order they were subscribed, passing the provided args array. It returns an array containing the results of all callbacks.`,
    examples: [
      {
        input:
          'emitter = new EventEmitter(); sub = emitter.subscribe("firstEvent", x => x + 1); emitter.emit("firstEvent", [5]);',
        output: '[6]',
      },
    ],
    constraints: [
      '1 <= eventName.length <= 20',
      'Unsubscribe should only remove the specific listener',
    ],
    functionName: 'EventEmitter',
    isClass: true,
    starterCode: {
      javascript: `class EventEmitter {
  constructor() {
    // Initialize subscriptions
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    return {
      unsubscribe: () => {
        // Unsubscribe logic
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    return [];
  }
}
`,
      typescript: `class EventEmitter {
  private events: Map<string, Function[]>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Function): { unsubscribe: () => void } {
    return { unsubscribe: () => {} };
  }

  emit(eventName: string, args: any[] = []): any[] {
    return [];
  }
}
`,
    },
    testCases: [
      {
        name: 'Subscribe and Emit',
        input: [
          ['EventEmitter', 'subscribe', 'emit'],
          [[], ['add', (a: number, b: number) => a + b], ['add', [4, 5]]],
        ],
        expected: [null, null, [9]],
      },
      {
        name: 'Multiple Listeners',
        input: [
          ['EventEmitter', 'subscribe', 'subscribe', 'emit'],
          [
            [],
            ['greet', (name: string) => 'Hello ' + name],
            ['greet', (name: string) => 'Welcome ' + name + '!'],
            ['greet', ['Alice']],
          ],
        ],
        expected: [null, null, null, ['Hello Alice', 'Welcome Alice!']],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Emit with Unregistered Event',
        input: [
          ['EventEmitter', 'emit'],
          [[], ['nonexistentEvent', [1, 2]]],
        ],
        expected: [null, []],
        isHidden: true,
      },
    ],
    hints: [
      'Use a Map where keys are event names and values are arrays of callback functions.',
      'In subscribe, add the callback and return { unsubscribe: () => { ... } } that removes the callback.',
      'In emit, retrieve the list of callbacks, call each with ...args, and collect their return values.',
    ],
    solution: {
      explanation: `We store listeners in a Map: eventName -> callback[]. When subscribe is called, we append the callback to the event's array and return an object with an unsubscribe closure.`,
      code: `class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }

  emit(eventName, args = []) {
    const listeners = this.events.get(eventName);
    if (!listeners || listeners.length === 0) {
      return [];
    }
    return listeners.map(fn => fn(...args));
  }
}`,
      complexity: {
        time: 'O(1) subscribe, O(N) emit where N is number of listeners',
        space: 'O(E + L) where E is distinct events and L is total listeners',
      },
    },
  },
  {
    id: '010',
    slug: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'hard',
    topics: ['Data Structure', 'Hash Map', 'Design'],
    acceptanceRate: '42%',
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(capacity): Initializes the LRU cache with positive size capacity.
- get(key): Returns the value of the key if the key exists, otherwise returns -1.
- put(key, value): Updates the value of the key if the key exists. Otherwise, adds the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
    examples: [
      {
        input:
          'lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); lRUCache.put(3, 3); lRUCache.get(2);',
        output: '[null, null, null, 1, null, -1]',
      },
    ],
    constraints: [
      '1 <= capacity <= 3000',
      '0 <= key <= 10^4',
      '0 <= value <= 10^5',
    ],
    functionName: 'LRUCache',
    isClass: true,
    starterCode: {
      javascript: `class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    // Write your constructor
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    // Write your get method
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    // Write your put method
  }
}
`,
      typescript: `class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    return -1;
  }

  put(key: number, value: number): void {
  }
}
`,
    },
    testCases: [
      {
        name: 'Basic LRU Sequence',
        input: [
          [
            'LRUCache',
            'put',
            'put',
            'get',
            'put',
            'get',
            'put',
            'get',
            'get',
            'get',
          ],
          [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
        ],
        expected: [null, null, null, 1, null, -1, null, -1, 3, 4],
      },
      {
        name: 'Capacity 1',
        input: [
          ['LRUCache', 'put', 'get', 'put', 'get'],
          [[1], [2, 1], [2], [3, 2], [2]],
        ],
        expected: [null, null, 1, null, -1],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Overwrite Existing Key',
        input: [
          ['LRUCache', 'put', 'put', 'get', 'put', 'get'],
          [[2], [2, 1], [2, 2], [2], [1, 1], [2]],
        ],
        expected: [null, null, null, 2, null, 2],
        isHidden: true,
      },
    ],
    hints: [
      'JavaScript Map maintains insertion order for keys!',
      'When accessing or updating a key, delete it from the Map and re-insert it (map.delete(key); map.set(key, value)), which moves it to the end.',
      'The least recently used key is always the first key in the map: map.keys().next().value.',
    ],
    solution: {
      explanation: `In JavaScript, the Map object preserves insertion order. When a key is accessed or modified, we delete and re-insert it so it becomes the most recently inserted element.`,
      code: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}`,
      complexity: {
        time: 'O(1) for get and put',
        space: 'O(capacity)',
      },
    },
  },
  {
    id: '011',
    slug: 'curry-function',
    title: 'Curry Function',
    difficulty: 'medium',
    topics: ['JS', 'Functional', 'Closures'],
    acceptanceRate: '63%',
    description: `Given a function fn, return a curried version of that function.

A curried function is a function that accepts fewer or equal number of parameters as the original function and returns either another curried function or the final evaluated value of the original function.`,
    examples: [
      {
        input:
          'function sum(a, b, c) { return a + b + c; }\nconst curriedSum = curry(sum);\ncurriedSum(1)(2)(3);',
        output: '6',
      },
    ],
    constraints: ['1 <= fn.length <= 10'],
    functionName: 'curry',
    starterCode: {
      javascript: `/**
 * @param {Function} fn
 * @return {Function}
 */
function curry(fn) {
  // Write your currying function
  
}
`,
      typescript: `function curry(fn: Function): Function {
  // Write your currying function
  
}
`,
    },
    testCases: [
      {
        name: 'Three Arguments Step by Step',
        input: [(a: number, b: number, c: number) => a + b + c, [1, 2, 3]],
        expected: 6,
      },
    ],
    hiddenTestCases: [],
    hints: [
      'Check fn.length to determine how many arguments the original function expects.',
      'Accumulate arguments in an array until args.length >= fn.length.',
    ],
    solution: {
      explanation: `We return a recursive wrapper function. If the accumulated arguments length reaches or exceeds fn.length, we call fn.apply(this, args). Otherwise, we return another function that combines existing and new arguments.`,
      code: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}`,
      complexity: {
        time: 'O(1) per partial application',
        space: 'O(N)',
      },
    },
  },
  {
    id: '012',
    slug: 'chunk-array',
    title: 'Chunk Array',
    difficulty: 'easy',
    topics: ['Array', 'JS'],
    acceptanceRate: '87%',
    description: `Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of sub-arrays each of length size. The length of the last sub-array may be less than size if arr.length is not evenly divisible by size.`,
    examples: [
      {
        input: 'arr = [1, 2, 3, 4, 5], size = 2',
        output: '[[1, 2], [3, 4], [5]]',
      },
    ],
    constraints: ['0 <= arr.length <= 10^5', '1 <= size <= 10^5'],
    functionName: 'chunk',
    starterCode: {
      javascript: `/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunk(arr, size) {
  // Write your solution here
  
}
`,
      typescript: `function chunk(arr: any[], size: number): any[][] {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Even Split',
        input: [[1, 2, 3, 4], 2],
        expected: [
          [1, 2],
          [3, 4],
        ],
      },
      {
        name: 'Remainder Chunk',
        input: [[1, 2, 3, 4, 5], 2],
        expected: [[1, 2], [3, 4], [5]],
      },
      {
        name: 'Empty Array',
        input: [[], 3],
        expected: [],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Chunk size larger than array',
        input: [[10, 20], 5],
        expected: [[10, 20]],
        isHidden: true,
      },
    ],
    hints: [
      'Iterate through the array with a step of size (i += size).',
      'Use arr.slice(i, i + size) to extract each chunk and push it into a results array.',
    ],
    solution: {
      explanation: `We loop through the array with an index increment of size and take slices using arr.slice(i, i + size).`,
      code: `function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}`,
      complexity: {
        time: 'O(N)',
        space: 'O(N)',
      },
    },
  },
  {
    id: '013',
    slug: 'group-anagrams',
    title: 'Group Anagrams',
    difficulty: 'medium',
    topics: ['String', 'Hash Map', 'Array'],
    acceptanceRate: '67%',
    description: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.`,
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
    ],
    constraints: [
      '1 <= strs.length <= 10^4',
      'strs[i] consists of lowercase English letters.',
    ],
    functionName: 'groupAnagrams',
    starterCode: {
      javascript: `/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // Write your solution here
  
}
`,
      typescript: `function groupAnagrams(strs: string[]): string[][] {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Standard List',
        input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
        expected: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
      },
      {
        name: 'Single Empty String',
        input: [['']],
        expected: [['']],
      },
    ],
    hiddenTestCases: [
      {
        name: 'No Anagrams',
        input: [['cat', 'dog', 'bird']],
        expected: [['cat'], ['dog'], ['bird']],
        isHidden: true,
      },
    ],
    hints: [
      'Two strings are anagrams if sorting their characters produces the exact same string.',
      'Use the sorted string as a key in a Hash Map and store matching strings in an array.',
    ],
    solution: {
      explanation: `For each string, sort its characters alphabetically to generate a unique canonical key. Map that key to a list of matching words and return all map values.`,
      code: `function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(s);
  }
  return Object.values(map);
}`,
      complexity: {
        time: 'O(N * K log K)',
        space: 'O(N * K)',
      },
    },
  },
  {
    id: '014',
    slug: 'get-object-property',
    title: 'Object Path Getter',
    difficulty: 'medium',
    topics: ['JS', 'Object', 'String'],
    acceptanceRate: '73%',
    description: `Implement a helper function get(object, path, defaultValue) (similar to Lodash _.get).

It retrieves the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.`,
    examples: [
      {
        input: 'object = { a: [{ b: { c: 3 } }] }, path = "a[0].b.c"',
        output: '3',
      },
    ],
    constraints: ['Path depth is at most 20 levels.'],
    functionName: 'get',
    starterCode: {
      javascript: `/**
 * @param {Object} object
 * @param {string|Array} path
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(object, path, defaultValue = undefined) {
  // Write your solution here
  
}
`,
      typescript: `function get(object: any, path: string | (string | number)[], defaultValue: any = undefined): any {
  // Write your solution here
  
}
`,
    },
    testCases: [
      {
        name: 'Nested Dot Path',
        input: [{ a: { b: { c: 42 } } }, 'a.b.c'],
        expected: 42,
      },
      {
        name: 'Array Index in Path',
        input: [{ a: [{ b: { c: 99 } }] }, 'a[0].b.c'],
        expected: 99,
      },
      {
        name: 'Default Value Fallback',
        input: [{ x: 1 }, 'y.z', 'fallback'],
        expected: 'fallback',
      },
    ],
    hiddenTestCases: [
      {
        name: 'Null intermediate property',
        input: [{ a: null }, 'a.b.c', 'not-found'],
        expected: 'not-found',
        isHidden: true,
      },
    ],
    hints: [
      'Normalize the path string: replace bracket indices [0] with .0 and split by dot.',
      'Iterate through keys. If current object is null or undefined at any point, return defaultValue.',
    ],
    solution: {
      explanation:
        'We normalize string paths by replacing brackets with dots, filtering empty tokens, and traversing the object property by property.',
      code: `function get(object, path, defaultValue = undefined) {
  if (object === null || object === undefined) return defaultValue;
  const keys = Array.isArray(path)
    ? path
    : String(path)
        .split(/[\\.\\[\\]]+/)
        .filter(Boolean);

  let current = object;
  for (const key of keys) {
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[key];
  }
  return current === undefined ? defaultValue : current;
}`,
      complexity: {
        time: 'O(K)',
        space: 'O(K)',
      },
    },
  },
  {
    id: '015',
    slug: 'function-composition',
    title: 'Function Composition',
    difficulty: 'easy',
    topics: ['JS', 'Functional', 'Closures'],
    acceptanceRate: '89%',
    description: `Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.`,
    examples: [
      {
        input: 'functions = [x => x + 1, x => x * x, x => 2 * x], x = 4',
        output: '65',
      },
    ],
    constraints: ['0 <= functions.length <= 1000'],
    functionName: 'compose',
    starterCode: {
      javascript: `/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
  // Return composite function
  
}
`,
      typescript: `function compose(functions: ((x: number) => number)[]): (x: number) => number {
  // Return composite function
  
}
`,
    },
    testCases: [
      {
        name: 'Three Functions Right to Left',
        input: [
          [(x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x],
          4,
        ],
        expected: 65,
      },
      {
        name: 'Empty Functions Array',
        input: [[], 42],
        expected: 42,
      },
    ],
    hiddenTestCases: [],
    hints: [
      'Composition evaluates from right to left.',
      'Use functions.reduceRight((acc, fn) => fn(acc), x).',
    ],
    solution: {
      explanation: `We can use JavaScript's reduceRight to pipe the input through each function from right to left.`,
      code: `function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}`,
      complexity: {
        time: 'O(N)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '016',
    slug: 'deep-equal',
    title: 'Deep Equal',
    difficulty: 'medium',
    topics: ['JS', 'Object', 'Recursion'],
    acceptanceRate: '59%',
    description: `Write a function deepEqual(a, b) that determines whether two values are deeply equivalent.

Two values are deeply equal if:
- They are strictly equal (===)
- Both are NaN
- Both are Arrays of the same length and every corresponding element is deeply equal
- Both are Objects with the same keys and corresponding values are deeply equal`,
    examples: [
      {
        input: 'a = { x: 1, y: [2, 3] }, b = { x: 1, y: [2, 3] }',
        output: 'true',
      },
    ],
    constraints: ['Values can be primitives, arrays, or objects.'],
    functionName: 'deepEqual',
    starterCode: {
      javascript: `/**
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
function deepEqual(a, b) {
  // Write your deepEqual implementation
  
}
`,
      typescript: `function deepEqual(a: any, b: any): boolean {
  // Write your deepEqual implementation
  
}
`,
    },
    testCases: [
      {
        name: 'Equal Objects',
        input: [
          { a: 1, b: [2, 3] },
          { a: 1, b: [2, 3] },
        ],
        expected: true,
      },
      {
        name: 'Different Types',
        input: [{ a: 1 }, { a: '1' }],
        expected: false,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Different Key Count',
        input: [{ a: 1 }, { a: 1, b: 2 }],
        expected: false,
        isHidden: true,
      },
    ],
    hints: [
      'Check if (a === b) return true.',
      'Verify both are non-null objects and check Object.keys() length before recursively comparing.',
    ],
    solution: {
      explanation: `First check reference equality and NaN. If both are objects (and not null), verify matching arrays/objects key lengths, then recursively compare all child properties.`,
      code: `function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a === 'number' && typeof b === 'number' && Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}`,
      complexity: {
        time: 'O(N)',
        space: 'O(D)',
      },
    },
  },
  {
    id: '017',
    slug: 'allow-one-function-call',
    title: 'Allow One Function Call',
    difficulty: 'easy',
    topics: ['JS', 'Closures', 'Functional'],
    acceptanceRate: '91%',
    description: `Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.`,
    examples: [
      {
        input: 'fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]',
        output: '[{"calls":1,"value":6}]',
      },
    ],
    constraints: ['calls is a valid JSON array'],
    functionName: 'once',
    starterCode: {
      javascript: `/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
  // Write your once higher-order function
  
}
`,
      typescript: `function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  // Write your once function
  
}
`,
    },
    testCases: [
      {
        name: 'Single Allowed Execution',
        input: [(a: number, b: number) => a + b, [2, 3]],
        expected: 5,
      },
    ],
    hiddenTestCases: [],
    hints: [
      'Maintain a boolean flag called = false in the closure.',
      'If not called, set called = true and return fn(...args). Otherwise return undefined.',
    ],
    solution: {
      explanation: `We keep a boolean called in the closure. On first call, we toggle the flag and execute fn. On subsequent calls, we return undefined.`,
      code: `function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
    return undefined;
  };
}`,
      complexity: {
        time: 'O(1)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '018',
    slug: 'promise-race-polyfill',
    title: 'Promise.race Polyfill',
    difficulty: 'easy',
    topics: ['JS', 'Async', 'Promises'],
    acceptanceRate: '79%',
    description: `Implement a function promiseRace(promises) that simulates the behavior of Promise.race.

Given an array of promises or values, promiseRace returns a new Promise that settles (resolves or rejects) as soon as any of the input promises settles, with the value or reason from that promise.`,
    examples: [
      {
        input:
          'promises = [new Promise(res => setTimeout(() => res(1), 100)), new Promise(res => setTimeout(() => res(2), 20))]',
        output: '2',
        explanation: 'Promise 2 resolves first at 20ms.',
      },
    ],
    constraints: ['promises is an array of Promises or values'],
    functionName: 'promiseRace',
    isAsync: true,
    starterCode: {
      javascript: `/**
 * @param {Array<Promise|any>} promises
 * @return {Promise}
 */
function promiseRace(promises) {
  // Write your Promise.race polyfill
  
}
`,
      typescript: `function promiseRace<T>(promises: (Promise<T> | T)[]): Promise<T> {
  // Write your Promise.race polyfill
  
}
`,
    },
    testCases: [
      {
        name: 'Fastest Resolving Promise',
        input: [
          [
            new Promise((res) => setTimeout(() => res('slow'), 50)),
            new Promise((res) => setTimeout(() => res('fast'), 10)),
          ],
        ],
        expected: 'fast',
      },
      {
        name: 'Immediate Value',
        input: [
          [
            'instant',
            new Promise((res) => setTimeout(() => res('delayed'), 50)),
          ],
        ],
        expected: 'instant',
      },
    ],
    hiddenTestCases: [],
    hints: [
      'Return a new Promise((resolve, reject) => { ... }).',
      'For each item, call Promise.resolve(item).then(resolve, reject).',
    ],
    solution: {
      explanation: `We return a new Promise and attach the resolver and rejector to every item using Promise.resolve(p).then(resolve, reject). The first promise to settle immediately resolves or rejects the outer promise.`,
      code: `function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) return;
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
}`,
      complexity: {
        time: 'O(N)',
        space: 'O(1)',
      },
    },
  },
];
