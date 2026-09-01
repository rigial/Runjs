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
    return value.map((item) => deepClone(item));
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
      },
    };
  }

  emit(eventName, args = []) {
    const listeners = this.events.get(eventName);
    if (!listeners || listeners.length === 0) {
      return [];
    }
    return listeners.map((fn) => fn(...args));
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
  if (
    typeof a === 'number' &&
    typeof b === 'number' &&
    Number.isNaN(a) &&
    Number.isNaN(b)
  ) {
    return true;
  }
  if (
    a === null ||
    b === null ||
    typeof a !== 'object' ||
    typeof b !== 'object'
  ) {
    return false;
  }
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(b, key) ||
      !deepEqual(a[key], b[key])
    ) {
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
  {
    id: '019',
    slug: 'find-smallest-number',
    title: 'Find smallest number',
    difficulty: 'easy',
    topics: ['Array', 'Math'],
    acceptanceRate: '80%',
    description:
      'Given an array arr of numbers, return the smallest number in the array. If the array is empty, return null.',
    examples: [
      {
        input: 'arr = [3, 1, 2]',
        output: '1',
      },
      {
        input: 'arr = [-5, 2, -3, 4]',
        output: '-5',
      },
      {
        input: 'arr = [0, 2, 3]',
        output: '0',
      },
      {
        input: 'arr = []',
        output: 'null',
      },
    ],
    constraints: [
      'Input must be an array of finite numbers',
      'Return false for non-array inputs',
      'Return false for arrays containing non-number values',
      'Return false for arrays containing NaN, Infinity, or -Infinity',
      'For an empty array, return null',
    ],
    functionName: 'findSmallest',
    starterCode: {
      javascript: `function findSmallest(arr) {
  // your solution here
}
`,
      typescript: `function findSmallest(arr: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[]],
        expected: null,
      },
      {
        name: 'should handle base cases',
        input: [[1]],
        expected: 1,
      },
      {
        name: 'should handle base cases',
        input: [[0]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle base cases',
        input: [[-1]],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'should handle mixed arrays',
        input: [[3, 1, 2]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle mixed arrays',
        input: [[-5, 2, -3, 4]],
        expected: -5,
        isHidden: true,
      },
      {
        name: 'should handle mixed arrays',
        input: [[3, -1, -2, 5, -6, 0]],
        expected: -6,
        isHidden: true,
      },
      {
        name: 'should handle all negatives and all positives',
        input: [[-1, -2, -3]],
        expected: -3,
        isHidden: true,
      },
      {
        name: 'should handle all negatives and all positives',
        input: [[1, 2, 3]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle decimals',
        input: [[-1.5, -0.1, 0, 2.2]],
        expected: -1.5,
        isHidden: true,
      },
      {
        name: 'should handle decimals',
        input: [[-0.0001, 0.0001]],
        expected: -0.0001,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [null],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [42],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: ['8'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [{}],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [[1, 'a']],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [[null]],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large arrays',
        input: [
          [
            -500, -499, -498, -497, -496, -495, -494, -493, -492, -491, -490,
            -489, -488, -487, -486, -485, -484, -483, -482, -481, -480, -479,
            -478, -477, -476, -475, -474, -473, -472, -471, -470, -469, -468,
            -467, -466, -465, -464, -463, -462, -461, -460, -459, -458, -457,
            -456, -455, -454, -453, -452, -451, -450, -449, -448, -447, -446,
            -445, -444, -443, -442, -441, -440, -439, -438, -437, -436, -435,
            -434, -433, -432, -431, -430, -429, -428, -427, -426, -425, -424,
            -423, -422, -421, -420, -419, -418, -417, -416, -415, -414, -413,
            -412, -411, -410, -409, -408, -407, -406, -405, -404, -403, -402,
            -401, -400, -399, -398, -397, -396, -395, -394, -393, -392, -391,
            -390, -389, -388, -387, -386, -385, -384, -383, -382, -381, -380,
            -379, -378, -377, -376, -375, -374, -373, -372, -371, -370, -369,
            -368, -367, -366, -365, -364, -363, -362, -361, -360, -359, -358,
            -357, -356, -355, -354, -353, -352, -351, -350, -349, -348, -347,
            -346, -345, -344, -343, -342, -341, -340, -339, -338, -337, -336,
            -335, -334, -333, -332, -331, -330, -329, -328, -327, -326, -325,
            -324, -323, -322, -321, -320, -319, -318, -317, -316, -315, -314,
            -313, -312, -311, -310, -309, -308, -307, -306, -305, -304, -303,
            -302, -301, -300, -299, -298, -297, -296, -295, -294, -293, -292,
            -291, -290, -289, -288, -287, -286, -285, -284, -283, -282, -281,
            -280, -279, -278, -277, -276, -275, -274, -273, -272, -271, -270,
            -269, -268, -267, -266, -265, -264, -263, -262, -261, -260, -259,
            -258, -257, -256, -255, -254, -253, -252, -251, -250, -249, -248,
            -247, -246, -245, -244, -243, -242, -241, -240, -239, -238, -237,
            -236, -235, -234, -233, -232, -231, -230, -229, -228, -227, -226,
            -225, -224, -223, -222, -221, -220, -219, -218, -217, -216, -215,
            -214, -213, -212, -211, -210, -209, -208, -207, -206, -205, -204,
            -203, -202, -201, -200, -199, -198, -197, -196, -195, -194, -193,
            -192, -191, -190, -189, -188, -187, -186, -185, -184, -183, -182,
            -181, -180, -179, -178, -177, -176, -175, -174, -173, -172, -171,
            -170, -169, -168, -167, -166, -165, -164, -163, -162, -161, -160,
            -159, -158, -157, -156, -155, -154, -153, -152, -151, -150, -149,
            -148, -147, -146, -145, -144, -143, -142, -141, -140, -139, -138,
            -137, -136, -135, -134, -133, -132, -131, -130, -129, -128, -127,
            -126, -125, -124, -123, -122, -121, -120, -119, -118, -117, -116,
            -115, -114, -113, -112, -111, -110, -109, -108, -107, -106, -105,
            -104, -103, -102, -101, -100, -99, -98, -97, -96, -95, -94, -93,
            -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80,
            -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67,
            -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54,
            -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41,
            -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28,
            -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15,
            -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
            72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
            89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
            131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
            144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
            157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
            170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
            183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
            196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
            209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
            222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
            235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
            248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260,
            261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
            274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286,
            287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299,
            300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312,
            313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325,
            326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
            339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351,
            352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364,
            365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
            378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390,
            391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403,
            404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416,
            417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429,
            430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442,
            443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455,
            456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
            469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481,
            482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494,
            495, 496, 497, 498, 499,
          ],
        ],
        expected: -500,
        isHidden: true,
      },
      {
        name: 'should handle large arrays',
        input: [
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
            88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
          ],
        ],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle arrays with all same value',
        input: [[5, 5, 5, 5]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle arrays with all same value',
        input: [[-3, -3, -3]],
        expected: -3,
        isHidden: true,
      },
      {
        name: 'should handle arrays with all same value',
        input: [[0, 0, 0, 0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle smallest number at different positions',
        input: [[-1, 2, 3, 4]],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'should handle smallest number at different positions',
        input: [[1, -2, 3, 4]],
        expected: -2,
        isHidden: true,
      },
      {
        name: 'should handle smallest number at different positions',
        input: [[1, 2, 3, -4]],
        expected: -4,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[-5, -4, -3, -2, -1]],
        expected: -5,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[-5, -4, -3, 0, 1, 2]],
        expected: -5,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[1, 2, 3, 4, 5]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[5, 4, 3, 2, 1]],
        expected: 1,
        isHidden: true,
      },
    ],
    hints: [
      `### Edge Cases First

\`\`\`js
if (!Array.isArray(arr)) return false; // Validate input type
if (arr.length === 0) return null;    // Decide empty array behavior
\`\`\``,
      `### Input Validation
\`\`\`js
Ensure every element is a finite number
Reject arrays containing NaN, Infinity, -Infinity, or non-number values
\`\`\``,
      `### Core Algorithm
\`\`\`js
let min;
for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
  if (typeof value !== 'number' || !Number.isFinite(value)) return false;
  if (min === undefined || value < min) min = value;
}
return min;
\`\`\``,
      `### Alternatives
\`\`\`js
// Using reduce
return arr.reduce((m, x) => (x < m ? x : m), arr[0]);
\`\`\`
\`\`\`js
// Using Math.min (validate first; beware spread on huge arrays)
return arr.length === 0 ? null : Math.min(...arr);
\`\`\``,
    ],
    solution: {
      explanation: `#### Approach
Iterate once, track the current minimum.

#### Algorithm
- Validate input is an array of finite numbers.
- If array is empty, return null.
- Initialize min with the first element.
- Loop through the array and update min when a smaller value is found.
- Return min.

#### Code`,
      code: `function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  let min;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (min === undefined || value < min) min = value;
  }
  return min;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '020',
    slug: 'find-largest-number',
    title: 'Find largest number',
    difficulty: 'easy',
    topics: ['Array', 'Math'],
    acceptanceRate: '69%',
    description:
      'Given an array arr of numbers, return the largest number in the array. If the array is empty, return null.',
    examples: [
      {
        input: 'arr = [3, 1, 2]',
        output: '3',
      },
      {
        input: 'arr = [-5, 2, -3, 4]',
        output: '4',
      },
      {
        input: 'arr = [0, 2, 3]',
        output: '3',
      },
      {
        input: 'arr = []',
        output: 'null',
      },
    ],
    constraints: [
      'Input must be an array of finite numbers',
      'Return false for non-array inputs',
      'Return false for arrays containing non-number values',
      'Return false for arrays containing NaN, Infinity, or -Infinity',
      'For an empty array, return null',
    ],
    functionName: 'findLargest',
    starterCode: {
      javascript: `function findLargest(arr) {
  // your solution here
}
`,
      typescript: `function findLargest(arr: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[]],
        expected: null,
      },
      {
        name: 'should handle base cases',
        input: [[1]],
        expected: 1,
      },
      {
        name: 'should handle base cases',
        input: [[0]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle base cases',
        input: [[-1]],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'should handle mixed arrays',
        input: [[3, 1, 2]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle mixed arrays',
        input: [[-5, 2, -3, 4]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle mixed arrays',
        input: [[3, -1, -2, 5, -6, 0]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle all negatives and all positives',
        input: [[-1, -2, -3]],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'should handle all negatives and all positives',
        input: [[1, 2, 3]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle decimals',
        input: [[-1.5, -0.1, 0, 2.2]],
        expected: 2.2,
        isHidden: true,
      },
      {
        name: 'should handle decimals',
        input: [[-0.0001, 0.0001]],
        expected: 0.0001,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [null],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [42],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: ['8'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [{}],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [[1, 'a']],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [[null]],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large arrays',
        input: [
          [
            -500, -499, -498, -497, -496, -495, -494, -493, -492, -491, -490,
            -489, -488, -487, -486, -485, -484, -483, -482, -481, -480, -479,
            -478, -477, -476, -475, -474, -473, -472, -471, -470, -469, -468,
            -467, -466, -465, -464, -463, -462, -461, -460, -459, -458, -457,
            -456, -455, -454, -453, -452, -451, -450, -449, -448, -447, -446,
            -445, -444, -443, -442, -441, -440, -439, -438, -437, -436, -435,
            -434, -433, -432, -431, -430, -429, -428, -427, -426, -425, -424,
            -423, -422, -421, -420, -419, -418, -417, -416, -415, -414, -413,
            -412, -411, -410, -409, -408, -407, -406, -405, -404, -403, -402,
            -401, -400, -399, -398, -397, -396, -395, -394, -393, -392, -391,
            -390, -389, -388, -387, -386, -385, -384, -383, -382, -381, -380,
            -379, -378, -377, -376, -375, -374, -373, -372, -371, -370, -369,
            -368, -367, -366, -365, -364, -363, -362, -361, -360, -359, -358,
            -357, -356, -355, -354, -353, -352, -351, -350, -349, -348, -347,
            -346, -345, -344, -343, -342, -341, -340, -339, -338, -337, -336,
            -335, -334, -333, -332, -331, -330, -329, -328, -327, -326, -325,
            -324, -323, -322, -321, -320, -319, -318, -317, -316, -315, -314,
            -313, -312, -311, -310, -309, -308, -307, -306, -305, -304, -303,
            -302, -301, -300, -299, -298, -297, -296, -295, -294, -293, -292,
            -291, -290, -289, -288, -287, -286, -285, -284, -283, -282, -281,
            -280, -279, -278, -277, -276, -275, -274, -273, -272, -271, -270,
            -269, -268, -267, -266, -265, -264, -263, -262, -261, -260, -259,
            -258, -257, -256, -255, -254, -253, -252, -251, -250, -249, -248,
            -247, -246, -245, -244, -243, -242, -241, -240, -239, -238, -237,
            -236, -235, -234, -233, -232, -231, -230, -229, -228, -227, -226,
            -225, -224, -223, -222, -221, -220, -219, -218, -217, -216, -215,
            -214, -213, -212, -211, -210, -209, -208, -207, -206, -205, -204,
            -203, -202, -201, -200, -199, -198, -197, -196, -195, -194, -193,
            -192, -191, -190, -189, -188, -187, -186, -185, -184, -183, -182,
            -181, -180, -179, -178, -177, -176, -175, -174, -173, -172, -171,
            -170, -169, -168, -167, -166, -165, -164, -163, -162, -161, -160,
            -159, -158, -157, -156, -155, -154, -153, -152, -151, -150, -149,
            -148, -147, -146, -145, -144, -143, -142, -141, -140, -139, -138,
            -137, -136, -135, -134, -133, -132, -131, -130, -129, -128, -127,
            -126, -125, -124, -123, -122, -121, -120, -119, -118, -117, -116,
            -115, -114, -113, -112, -111, -110, -109, -108, -107, -106, -105,
            -104, -103, -102, -101, -100, -99, -98, -97, -96, -95, -94, -93,
            -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80,
            -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67,
            -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54,
            -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41,
            -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28,
            -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15,
            -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
            72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
            89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
            131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
            144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
            157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
            170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
            183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
            196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
            209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
            222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
            235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
            248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260,
            261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
            274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286,
            287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299,
            300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312,
            313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325,
            326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
            339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351,
            352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364,
            365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
            378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390,
            391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403,
            404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416,
            417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429,
            430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442,
            443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455,
            456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
            469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481,
            482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494,
            495, 496, 497, 498, 499,
          ],
        ],
        expected: 499,
        isHidden: true,
      },
      {
        name: 'should handle large arrays',
        input: [
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
            88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
          ],
        ],
        expected: 100,
        isHidden: true,
      },
      {
        name: 'should handle arrays with all same value',
        input: [[5, 5, 5, 5]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle arrays with all same value',
        input: [[-3, -3, -3]],
        expected: -3,
        isHidden: true,
      },
      {
        name: 'should handle arrays with all same value',
        input: [[0, 0, 0, 0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle largest number at different positions',
        input: [[4, 2, 1, -1]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle largest number at different positions',
        input: [[1, 4, -2, 3]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle largest number at different positions',
        input: [[1, 2, 3, 4]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[-5, -4, -3, -2, -1]],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[-5, -4, -3, 0, 1, 2]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[1, 2, 3, 4, 5]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle sorted arrays in different orders',
        input: [[5, 4, 3, 2, 1]],
        expected: 5,
        isHidden: true,
      },
    ],
    hints: [
      `### Edge Cases First
\`\`\`js
if (!Array.isArray(arr)) return false; // Validate input type
if (arr.length === 0) return null;    // Decide empty array behavior
\`\`\``,
      `### Input Validation
\`\`\`js
Ensure every element is a finite number
Reject arrays containing NaN, Infinity, -Infinity, or non-number values
\`\`\``,
      `### Core Algorithm
\`\`\`js
let max;
for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
  if (typeof value !== 'number' || !Number.isFinite(value)) return false;
  if (max === undefined || value > max) max = value;
}
return max;
\`\`\``,
      `### Alternatives
\`\`\`js
// Using reduce
return arr.reduce((m, x) => (x > m ? x : m), arr[0]);
\`\`\`
\`\`\`js
// Using Math.max (validate first; beware spread on huge arrays)
return arr.length === 0 ? null : Math.max(...arr);
\`\`\``,
    ],
    solution: {
      explanation: `#### Approach
Iterate once, track the current maximum.

#### Algorithm
- Validate input is an array of finite numbers.
- If array is empty, return null.
- Initialize max with the first element.
- Loop through the array and update max when a larger value is found.
- Return max.

#### Code`,
      code: `function findLargest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  let max;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (max === undefined || value > max) max = value;
  }
  return max;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '021',
    slug: 'count-negative',
    title: 'Count Negative',
    difficulty: 'easy',
    topics: ['Array', 'Math'],
    acceptanceRate: '86%',
    description:
      'Given an array arr of numbers, return the count of elements strictly less than 0.',
    examples: [
      {
        input: 'arr = [-1, 0, 1]',
        output: '1',
      },
      {
        input: 'arr = [-2, -5, -7]',
        output: '3',
      },
      {
        input: 'arr = [0, 2, 3]',
        output: '0',
      },
      {
        input: 'arr = []',
        output: '0',
      },
      {
        input: 'arr = []',
        output: '0',
      },
    ],
    constraints: [
      'If input is not an array, return false.',
      'If the array contains any non-number values or non-finite numbers (NaN, Infinity, -Infinity), return false.',
      'An empty array is valid and should return 0.',
    ],
    functionName: 'countNegatives',
    starterCode: {
      javascript: `function countNegatives(arr) {
  // implement your solution here
}
`,
      typescript: `function countNegatives(arr: any): any {
  // implement your solution here
}
`,
    },
    testCases: [
      {
        name: 'Base Case - Input: [] → Output: 0',
        input: [[]],
        expected: 0,
      },
      {
        name: 'Base Case - Input: [-1] → Output: 1',
        input: [[-1]],
        expected: 1,
      },
      {
        name: 'Base Case - Input: [0] → Output: 0',
        input: [[0]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Mixed Array - Input: [-1, 0, 1] → Output: 1',
        input: [[-1, 0, 1]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Mixed Array - Input: [-5, 2, -3, 4] → Output: 2',
        input: [[-5, 2, -3, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Mixed Array - Input: [3, -1, -2, 5, -6, 0] → Output: 3',
        input: [[3, -1, -2, 5, -6, 0]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'All Negative - Input: [-1, -2, -3] → Output: 3',
        input: [[-1, -2, -3]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'No Negative - Input: [0, 1, 2, 3] → Output: 0',
        input: [[0, 1, 2, 3]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Decimal Numbers - Input: [-1.5, -0.1, 0, 2.2] → Output: 2',
        input: [[-1.5, -0.1, 0, 2.2]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Decimal Numbers - Input: [-0.0001, 0.0001] → Output: 1',
        input: [[-0.0001, 0.0001]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: null → Output: false',
        input: [null],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: 42 → Output: false',
        input: [42],
        expected: false,
        isHidden: true,
      },
      {
        name: `Invalid Input - Input: "8" → Output: false`,
        input: ['8'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: {} → Output: false',
        input: [{}],
        expected: false,
        isHidden: true,
      },
      {
        name: `Invalid Input - Input: [1, "a"] → Output: false`,
        input: [[1, 'a']],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: [NaN] → Output: false',
        input: [[null]],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Large Array - Input: Array(1000) (i - 500) → Output: 500',
        input: [
          [
            -500, -499, -498, -497, -496, -495, -494, -493, -492, -491, -490,
            -489, -488, -487, -486, -485, -484, -483, -482, -481, -480, -479,
            -478, -477, -476, -475, -474, -473, -472, -471, -470, -469, -468,
            -467, -466, -465, -464, -463, -462, -461, -460, -459, -458, -457,
            -456, -455, -454, -453, -452, -451, -450, -449, -448, -447, -446,
            -445, -444, -443, -442, -441, -440, -439, -438, -437, -436, -435,
            -434, -433, -432, -431, -430, -429, -428, -427, -426, -425, -424,
            -423, -422, -421, -420, -419, -418, -417, -416, -415, -414, -413,
            -412, -411, -410, -409, -408, -407, -406, -405, -404, -403, -402,
            -401, -400, -399, -398, -397, -396, -395, -394, -393, -392, -391,
            -390, -389, -388, -387, -386, -385, -384, -383, -382, -381, -380,
            -379, -378, -377, -376, -375, -374, -373, -372, -371, -370, -369,
            -368, -367, -366, -365, -364, -363, -362, -361, -360, -359, -358,
            -357, -356, -355, -354, -353, -352, -351, -350, -349, -348, -347,
            -346, -345, -344, -343, -342, -341, -340, -339, -338, -337, -336,
            -335, -334, -333, -332, -331, -330, -329, -328, -327, -326, -325,
            -324, -323, -322, -321, -320, -319, -318, -317, -316, -315, -314,
            -313, -312, -311, -310, -309, -308, -307, -306, -305, -304, -303,
            -302, -301, -300, -299, -298, -297, -296, -295, -294, -293, -292,
            -291, -290, -289, -288, -287, -286, -285, -284, -283, -282, -281,
            -280, -279, -278, -277, -276, -275, -274, -273, -272, -271, -270,
            -269, -268, -267, -266, -265, -264, -263, -262, -261, -260, -259,
            -258, -257, -256, -255, -254, -253, -252, -251, -250, -249, -248,
            -247, -246, -245, -244, -243, -242, -241, -240, -239, -238, -237,
            -236, -235, -234, -233, -232, -231, -230, -229, -228, -227, -226,
            -225, -224, -223, -222, -221, -220, -219, -218, -217, -216, -215,
            -214, -213, -212, -211, -210, -209, -208, -207, -206, -205, -204,
            -203, -202, -201, -200, -199, -198, -197, -196, -195, -194, -193,
            -192, -191, -190, -189, -188, -187, -186, -185, -184, -183, -182,
            -181, -180, -179, -178, -177, -176, -175, -174, -173, -172, -171,
            -170, -169, -168, -167, -166, -165, -164, -163, -162, -161, -160,
            -159, -158, -157, -156, -155, -154, -153, -152, -151, -150, -149,
            -148, -147, -146, -145, -144, -143, -142, -141, -140, -139, -138,
            -137, -136, -135, -134, -133, -132, -131, -130, -129, -128, -127,
            -126, -125, -124, -123, -122, -121, -120, -119, -118, -117, -116,
            -115, -114, -113, -112, -111, -110, -109, -108, -107, -106, -105,
            -104, -103, -102, -101, -100, -99, -98, -97, -96, -95, -94, -93,
            -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80,
            -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67,
            -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54,
            -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41,
            -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28,
            -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15,
            -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
            72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
            89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
            131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
            144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
            157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
            170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
            183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
            196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
            209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
            222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
            235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
            248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260,
            261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
            274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286,
            287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299,
            300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312,
            313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325,
            326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
            339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351,
            352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364,
            365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
            378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390,
            391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403,
            404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416,
            417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429,
            430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442,
            443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455,
            456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
            469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481,
            482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494,
            495, 496, 497, 498, 499,
          ],
        ],
        expected: 500,
        isHidden: true,
      },
      {
        name: 'Large Array - Input: 100 Positive Numbers → Output: 0',
        input: [
          [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,
          ],
        ],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Large Array - Input: 100 Negative Numbers → Output: 100',
        input: [
          [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          ],
        ],
        expected: 100,
        isHidden: true,
      },
      {
        name: 'Only Zeros - Input: [0, 0, 0] → Output: 0',
        input: [[0, 0, 0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Only Zeros - Input: new Array(10).fill(0) → Output: 0',
        input: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Very Small Negative - Input: [-0.0000000001, 0.0000000001] → Output: 1',
        input: [[-1e-10, 1e-10]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Very Small Negative - Input: [-1e-10, 1e-10, 0] → Output: 1',
        input: [[-1e-10, 1e-10, 0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Very Small Negative - Input: [-Number.MIN_VALUE, Number.MIN_VALUE, 0] → Output: 1',
        input: [[-5e-324, 5e-324, 0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Large Numbers - Input: [-1e10, 1e10, 0] → Output: 1',
        input: [[-10000000000, 10000000000, 0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Large Numbers - Input: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0] → Output: 1',
        input: [[-9007199254740991, 9007199254740991, 0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Large Numbers - Input: [-999999999, -888888888, 888888888] → Output: 2',
        input: [[-999999999, -888888888, 888888888]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Same Values - Input: [5, 5, 5, 5] → Output: 0',
        input: [[5, 5, 5, 5]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Same Values - Input: [-3, -3, -3] → Output: 3',
        input: [[-3, -3, -3]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Same Values - Input: [0, 0, 0, 0] → Output: 0',
        input: [[0, 0, 0, 0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [-1, 2, 3, 4] → Output: 1',
        input: [[-1, 2, 3, 4]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [1, 2, -3, 4] → Output: 1',
        input: [[1, 2, -3, 4]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [1, 2, 3, -4] → Output: 1',
        input: [[1, 2, 3, -4]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [-1, 2, -3, 4, -5] → Output: 3',
        input: [[-1, 2, -3, 4, -5]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Alternating Pattern - Input: [-1, 1, -2, 2, -3, 3] → Output: 3',
        input: [[-1, 1, -2, 2, -3, 3]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Alternating Pattern - Input: [1, -1, 1, -1, 1, -1] → Output: 3',
        input: [[1, -1, 1, -1, 1, -1]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Alternating Pattern - Input: [-10, 20, -30, 40, -50] → Output: 3',
        input: [[-10, 20, -30, 40, -50]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Sorted Array - Input: [-5, -4, -3, -2, -1] → Output: 5',
        input: [[-5, -4, -3, -2, -1]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'Sorted Array - Input: [-5, -4, -3, 0, 1, 2] → Output: 3',
        input: [[-5, -4, -3, 0, 1, 2]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Sorted Array - Input: [1, 2, 3, 4, 5] → Output: 0',
        input: [[1, 2, 3, 4, 5]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Decimal Pattern - Input: [-1.9, -0.5, 0.5, 1.9] → Output: 2',
        input: [[-1.9, -0.5, 0.5, 1.9]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Decimal Pattern - Input: [-2.5, -1.1, 0, 0.1, 1.5] → Output: 2',
        input: [[-2.5, -1.1, 0, 0.1, 1.5]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Decimal Pattern - Input: [-0.001, -0.0001, 0.0001, 0.001] → Output: 2',
        input: [[-0.001, -0.0001, 0.0001, 0.001]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Duplicate Values - Input: [-2, -2, -2, 3, 3, 3] → Output: 3',
        input: [[-2, -2, -2, 3, 3, 3]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Duplicate Values - Input: [-1, 2, -1, 2, -1, 2] → Output: 3',
        input: [[-1, 2, -1, 2, -1, 2]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Duplicate Values - Input: [0, -1, -1, -1, 0] → Output: 3',
        input: [[0, -1, -1, -1, 0]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Mixed Integers & Decimals - Input: [-1, -1.5, 0, 1, 1.5] → Output: 2',
        input: [[-1, -1.5, 0, 1, 1.5]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Mixed Integers & Decimals - Input: [-2, -0.5, 0, 0.5, 2] → Output: 2',
        input: [[-2, -0.5, 0, 0.5, 2]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Mixed Integers & Decimals - Input: [-10, -0.1, 0, 0.1, 10] → Output: 2',
        input: [[-10, -0.1, 0, 0.1, 10]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Single Element - Input: [1] → Output: 0',
        input: [[1]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Single Element - Input: [-999] → Output: 1',
        input: [[-999]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Single Element - Input: [999] → Output: 0',
        input: [[999]],
        expected: 0,
        isHidden: true,
      },
    ],
    hints: [
      `### Edge Cases First

\`\`\`js
if (!Array.isArray(arr)) return false; // Validate input type
\`\`\``,
      `### Input Validation

- Ensure every element is a finite number
- Reject arrays containing NaN, Infinity, -Infinity, or non-number values`,
      `### Core Algorithm

\`\`\`js
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) count++;
}
return count;
\`\`\``,
      `### Alternative Approaches
\`\`\`js
return arr.filter(x => x < 0).length; // Functional
// or
return arr.reduce((c, x) => c + (x < 0 ? 1 : 0), 0); // Reduce
\`\`\`

#### Remember: Validate inputs first to avoid incorrect counts.`,
    ],
    solution: {
      explanation: `#### Approach
Iterate once, increment a counter when an element is negative.

#### Algorithm
- Validate input is an array of finite numbers.
- Initialize count = 0.
- Loop through elements, increment count when value < 0.
- Return count.

#### Code`,
      code: `function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (value < 0) count++;
  }
  return count;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '022',
    slug: 'loop-a-to-z',
    title: 'Loop A to Z',
    difficulty: 'easy',
    topics: ['Array', 'String'],
    acceptanceRate: '75%',
    description:
      'Write a function generateAtoZ() that returns an array of 26 strings representing the letters A through Z in order.',
    examples: [
      {
        input: 'none',
        output: `["A", "B", "C", ..., "Z"]`,
      },
    ],
    constraints: [
      'Use a loop-based approach (e.g., for or while).',
      'Output must be an array of exactly 26 single-character uppercase strings.',
      'No input arguments are required.',
    ],
    functionName: 'generateAtoZ',
    starterCode: {
      javascript: `function generateAtoZ() {
  // your solution here
}
`,
      typescript: `function generateAtoZ(): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'returns an array of 26 uppercase letters A..Z',
        input: [],
        expected: true,
      },
    ],
    hiddenTestCases: [],
    hints: [
      `### Use Character Codes
\`\`\`js
// 'A' is 65 and 'Z' is 90 in ASCII/Unicode
String.fromCharCode(65); // 'A'
\`\`\``,
      `### Loop from 65 to 90 (inclusive)
\`\`\`js
const letters = [];
for (let code = 65; code <= 90; code++) {
  letters.push(String.fromCharCode(code));
}
\`\`\``,
      `### Alternatively, increment a character
\`\`\`js
let ch = 'A'.charCodeAt(0);
while (ch <= 'Z'.charCodeAt(0)) {
  // push String.fromCharCode(ch)
  ch++;
}
\`\`\``,
      `### Validate Output Shape
- Array length should be 26
- First is 'A', last is 'Z'
- All entries are single uppercase letters`,
    ],
    solution: {
      explanation: `#### Approach
Iterate character codes from 65 ('A') to 90 ('Z') and convert each to a character.

#### Code`,
      code: `function generateAtoZ() {
  const letters = [];
  for (let code = 65; code <= 90; code++) {
    letters.push(String.fromCharCode(code));
  }
  return letters;
}`,
      complexity: {
        time: 'O(26) → O(1)',
        space: 'O(26) → O(1)',
      },
    },
  },
  {
    id: '023',
    slug: 'custom-sort',
    title: 'Custom Sort',
    difficulty: 'easy',
    topics: ['Array', 'String', 'Math', 'Sorting'],
    acceptanceRate: '92%',
    description: `Write a function that takes an array containing a mix of characters and numbers and returns a sorted array. The sorted array should have all characters (letters) in ascending order first, followed by all numbers in ascending order.

**Input:**

A single array \`arr\` consisting of a mix of characters (strings of length 1) and numbers. The array is unsorted.

Return a new array where:

* All **characters** (strings of length 1) are sorted **alphabetically**, followed by
* All **numbers** sorted in **ascending** numerical order.

**Constraints & Edge Cases**

* You **must not use built-in sorting methods** like \`Array.prototype.sort()\`.
* The input array may contain both **lowercase and uppercase** characters. **Case-sensitive sorting** should be followed (e.g., \`'A' < 'a'\`).
* The array may contain **duplicate characters or numbers** — retain all occurrences.
* The array may contain only characters or only numbers.
* An **empty array** should return an empty array.
* All elements are either single-character strings or numbers. Any other types (like objects, arrays, booleans) are not considered valid input (you may assume the input will be clean).

 **Example 1**

**Input:**

\`\`\`js
['g', 's', 5, 2, 'c', 'e', 6, 1, 'a']
\`\`\`

**Output:**

\`\`\`js
['a', 'c', 'e', 'g', 's', 1, 2, 5, 6]
\`\`\`


**Example 2**

**Input:**

\`\`\`js
[3, 'z', 'b', 10, 'a', 1, 'd']
\`\`\`

**Output:**

\`\`\`js
['a', 'b', 'd', 'z', 1, 3, 10]
\`\`\`

5:`,
    examples: [
      {
        input: `["g","s",5,2,"c","e",6,1,"a"]`,
        output: `["a","c","e","g","s",1,2,5,6]`,
      },
      {
        input: `["b","A","d","C"]`,
        output: `["A","C","b","d"]`,
      },
      {
        input: '[9,3,1,5,7]',
        output: '[1,3,5,7,9]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'customSort',
    starterCode: {
      javascript: `function customSort(arr) {
  //write your implementation here
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
`,
      typescript: `function customSort(arr: any): any {
  //write your implementation here
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
`,
    },
    testCases: [
      {
        name: `Should sort ['g','s',5,2,'c','e',6,1,'a'] correctly`,
        input: [['g', 's', 5, 2, 'c', 'e', 6, 1, 'a']],
        expected: ['a', 'c', 'e', 'g', 's', 1, 2, 5, 6],
      },
      {
        name: `Should sort ['b', 'A', 'd', 'C'] correctly (case-sensitive)`,
        input: [['b', 'A', 'd', 'C']],
        expected: ['A', 'C', 'b', 'd'],
      },
      {
        name: 'Should sort [9, 3, 1, 5, 7] correctly',
        input: [[9, 3, 1, 5, 7]],
        expected: [1, 3, 5, 7, 9],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Should return empty array for []',
        input: [[]],
        expected: [],
        isHidden: true,
      },
      {
        name: 'Should handle duplicates correctly',
        input: [['b', 2, 'a', 2, 'b', 1, 'a']],
        expected: ['a', 'a', 'b', 'b', 1, 2, 2],
        isHidden: true,
      },
      {
        name: `Should maintain case-sensitive order for ['z', 'B', 'a', 'A']`,
        input: [['z', 'B', 'a', 'A']],
        expected: ['A', 'B', 'a', 'z'],
        isHidden: true,
      },
      {
        name: `Should return same array for ['x']`,
        input: [['x']],
        expected: ['x'],
        isHidden: true,
      },
      {
        name: 'Should return same array for [4]',
        input: [[4]],
        expected: [4],
        isHidden: true,
      },
    ],
    hints: [
      `**Separate Characters and Numbers**

Start by iterating through the array and splitting its elements into two groups: characters and numbers. This will allow you to sort them independently.

\`\`\`js
const chars = [];
const nums = [];

for (let item of arr) {
    if (typeof item === 'string' && item.length === 1) {
        chars.push(item);
    } else if (typeof item === 'number') {
        nums.push(item);
    }
}
\`\`\`
`,
      `**Avoid Using Built-in Sort Methods**

You are not allowed to use JavaScript’s built-in \`.sort()\` function. Instead, implement your own sorting logic using algorithms like **bubble sort**, **insertion sort**, or **selection sort**.

\`\`\`js
// Bubble sort example
for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length - i - 1; j++) {
        if (chars[j] > chars[j + 1]) {
            [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
        }
    }
}
\`\`\``,
      `**Sort Characters with Case Sensitivity**

JavaScript compares characters using Unicode values. So \`'A' < 'a'\`, which means uppercase letters will come before lowercase ones. This sorting behavior is acceptable as per the problem’s case-sensitive requirement.`,
      `**Handle Edge Cases Gracefully**

Make sure your function works correctly for various edge cases:

* Empty array (\`[]\`) → Should return \`[]\`
* Only characters or only numbers → Should still return a sorted array
* Duplicates → Should be preserved in the sorted result
`,
    ],
    solution: {
      explanation: `**Approach**

* Iterate through the array and separate characters and numbers into two different arrays.
* Implement a **custom sorting algorithm** (like **bubble sort**) for both arrays:

  * Sort the character array based on Unicode values (case-sensitive).
  * Sort the number array in ascending order.
* Concatenate the sorted characters and sorted numbers to form the final array.

**Solution Code**`,
      code: `function customSort(arr) {
  const chars = [];
  const nums = [];

  // Separate characters and numbers
  for (let item of arr) {
    if (typeof item === 'string' && item.length === 1) {
      chars.push(item);
    } else if (typeof item === 'number') {
      nums.push(item);
    }
  }

  // Custom bubble sort for characters
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length - i - 1; j++) {
      if (chars[j] > chars[j + 1]) {
        [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
      }
    }
  }

  // Custom bubble sort for numbers
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return [...chars, ...nums];
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '024',
    slug: 'remove-duplicates-from-array',
    title: 'Remove Duplicates from Array',
    difficulty: 'easy',
    topics: ['Array', 'String', 'Graph', 'Math'],
    acceptanceRate: '81%',
    description: `Given an array, your task is to return a new array with all duplicate elements removed.  
You should preserve the order of the first occurrence of each element.

### Input
- An array of any primitive values: \`number\`, \`string\`, \`boolean\`, \`null\`, or \`undefined\`.

### Output
- A new array containing only **unique elements**, in the order they first appear.

### Edge Cases
- Empty array should return an empty array.

- Duplicates can be of different types (e.g., 1 and "1" are not the same).

- Object and array references are considered unique even if they look identical.`,
    examples: [
      {
        input: '[1,2,2,3,3,4]',
        output: '[1,2,3,4]',
      },
      {
        input: '[1,2,3,4]',
        output: '[1,2,3,4]',
      },
      {
        input: '[]',
        output: '[]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'removeDuplicates',
    starterCode: {
      javascript: `function removeDuplicates(arr) {
  // your code here
}
`,
      typescript: `function removeDuplicates(arr: any): any {
  // your code here
}
`,
    },
    testCases: [
      {
        name: 'removes duplicates from an array of numbers',
        input: [[1, 2, 2, 3, 3, 4]],
        expected: [1, 2, 3, 4],
      },
      {
        name: 'returns the same array if all elements are unique',
        input: [[1, 2, 3, 4]],
        expected: [1, 2, 3, 4],
      },
      {
        name: 'returns an empty array when input is empty',
        input: [[]],
        expected: [],
      },
    ],
    hiddenTestCases: [
      {
        name: 'handles array with all duplicates',
        input: [[5, 5, 5, 5]],
        expected: [5],
        isHidden: true,
      },
      {
        name: 'works with strings',
        input: [['a', 'b', 'a', 'c']],
        expected: ['a', 'b', 'c'],
        isHidden: true,
      },
      {
        name: 'works with mixed types',
        input: [[1, '1', 1, '1']],
        expected: [1, '1'],
        isHidden: true,
      },
      {
        name: 'preserves order of first occurrences',
        input: [[3, 1, 2, 1, 3, 4]],
        expected: [3, 1, 2, 4],
        isHidden: true,
      },
      {
        name: 'works with booleans',
        input: [[true, false, true, false]],
        expected: [true, false],
        isHidden: true,
      },
      {
        name: 'works with null and undefined',
        input: [[null, undefined, null, undefined]],
        expected: [null, undefined],
        isHidden: true,
      },
      {
        name: 'works with complex structure like arrays or objects',
        input: [[{}, {}, []]],
        expected: [{}, {}, []],
        isHidden: true,
      },
    ],
    hints: [
      'Think about a way to keep track of which elements you have already seen as you iterate through the array.',
      `A \`Set\` in JavaScript automatically removes duplicates, but note: using a \`Set\` directly on the array might not preserve the original order in some languages or custom use cases. JavaScript’s \`Set\` does maintain insertion order though.
`,
      'You can loop through the array and push an element to the result array only if it hasn’t appeared before.',
      `To check if a value has already been seen, consider using a \`Set\` or the \`includes()\` method on the result array — but be careful of performance trade-offs with large arrays.
`,
    ],
    solution: {
      explanation: `### Approach

1. Use a \`Set\` to track seen elements.
2. Loop through the input array.
3. For each element, check if it is already in the \`Set\`.
4. If not, add it to the \`Set\` and also to the result array.
5. Return the result array.

This approach ensures that:
- Each element appears only once in the output.
- The original order is preserved.

### Code`,
      code: `function removeDuplicates(arr) {
  // your code here
}
removeDuplicates([1, 2, 2, 3, 4, 4]);`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '025',
    slug: 'voting-eligibility',
    title: 'Voting Eligibility',
    difficulty: 'easy',
    topics: ['JS', 'Algorithm'],
    acceptanceRate: '70%',
    description: `You are given an integer age representing the age of a person. Your task is to determine whether the person is eligible to vote or not.
A person is eligible to vote if their age is 18 years or older.
Write a program that checks this condition and returns:

"Eligible to vote" if the age is 18 or above.
"Not eligible to vote" if the age is below 18.`,
    examples: [
      {
        input: '25',
        output: `"Eligible to vote"`,
      },
      {
        input: '17',
        output: `"Not eligible to vote"`,
      },
      {
        input: '18',
        output: `"Eligible to vote"`,
      },
    ],
    constraints: ['```js', '0 ≤ age ≤ 150', '```'],
    functionName: 'checkVotingEligibility',
    starterCode: {
      javascript: `function checkVotingEligibility(age) {
  // implement your solution here
}
`,
      typescript: `function checkVotingEligibility(age: any): any {
  // implement your solution here
}
`,
    },
    testCases: [
      {
        name: 'should return eligible when age > 18',
        input: [25],
        expected: 'Eligible to vote',
      },
      {
        name: 'should return not eligible when age < 18',
        input: [17],
        expected: 'Not eligible to vote',
      },
      {
        name: 'should return eligible when age = 18',
        input: [18],
        expected: 'Eligible to vote',
      },
    ],
    hiddenTestCases: [
      {
        name: 'should return not eligible when age = 0',
        input: [0],
        expected: 'Not eligible to vote',
        isHidden: true,
      },
      {
        name: 'should return eligible for large age',
        input: [100],
        expected: 'Eligible to vote',
        isHidden: true,
      },
      {
        name: 'should return eligible for fractional age',
        input: [18.2],
        expected: 'Eligible to vote',
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation:
        'We implement the optimal solution for checkVotingEligibility considering constraints and edge cases.',
      code: `function checkVotingEligibility(age) {
  if (typeof age !== 'number' || age < 0) {
    return 'Invalid age';
  }

  if (age >= 18) {
    return 'Eligible to vote';
  } else {
    return 'Not eligible to vote';
  }
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '026',
    slug: 'max-subarray',
    title: 'Max SubArray',
    difficulty: 'easy',
    topics: ['Array', 'Math', 'Binary Search'],
    acceptanceRate: '87%',
    description: `Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.

This is known as Kadane's Algorithm. You must solve it in O(n) time.`,
    examples: [
      {
        input: '[-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '[4,-1,2,1] has the largest sum = 6.',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'maxSubArray',
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // write your code  here
}
`,
      typescript: `function maxSubArray(nums: any): any {
  // write your code  here
}
`,
    },
    testCases: [
      {
        name: 'Should return 6 for [-2,1,-3,4,-1,2,1,-5,4]',
        input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        expected: 6,
      },
      {
        name: 'Should return -1 for [-5,-2,-3,-1,-4]',
        input: [[-5, -2, -3, -1, -4]],
        expected: -1,
      },
      {
        name: 'Should return 15 for [1,2,3,4,5]',
        input: [[1, 2, 3, 4, 5]],
        expected: 15,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Should return -Infinity for empty array',
        input: [[]],
        expected: -Infinity,
        isHidden: true,
      },
      {
        name: 'Should return 42 for [42]',
        input: [[42]],
        expected: 42,
        isHidden: true,
      },
      {
        name: 'Should return 10000 for 10000 1s',
        input: [
          [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ],
        ],
        expected: 10000,
        isHidden: true,
      },
      {
        name: 'Should return -1 for 10000 -1s',
        input: [
          [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1,
          ],
        ],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'Should return 5000 for alternating -1, 2 in 10000 elements',
        input: [
          [
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1,
            2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2, -1, 2,
            -1, 2, -1, 2, -1, 2,
          ],
        ],
        expected: 5001,
        isHidden: true,
      },
      {
        name: 'Should return 12502500 for increasing then decreasing pattern',
        input: [
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
            88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
            104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
            117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
            130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
            143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155,
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
            169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
            182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194,
            195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207,
            208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
            221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
            234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246,
            247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259,
            260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272,
            273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285,
            286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298,
            299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311,
            312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324,
            325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337,
            338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350,
            351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363,
            364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376,
            377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389,
            390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402,
            403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
            416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428,
            429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441,
            442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454,
            455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467,
            468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480,
            481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493,
            494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506,
            507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
            520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532,
            533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545,
            546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558,
            559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571,
            572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584,
            585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597,
            598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610,
            611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623,
            624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636,
            637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649,
            650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662,
            663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675,
            676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688,
            689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701,
            702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714,
            715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727,
            728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740,
            741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753,
            754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766,
            767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779,
            780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792,
            793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805,
            806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818,
            819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831,
            832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844,
            845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857,
            858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870,
            871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883,
            884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896,
            897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909,
            910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922,
            923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935,
            936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948,
            949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961,
            962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974,
            975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987,
            988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000,
            1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011,
            1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022,
            1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033,
            1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044,
            1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055,
            1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066,
            1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077,
            1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088,
            1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099,
            1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110,
            1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121,
            1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132,
            1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143,
            1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154,
            1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165,
            1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176,
            1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187,
            1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198,
            1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209,
            1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220,
            1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231,
            1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242,
            1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253,
            1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264,
            1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275,
            1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286,
            1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297,
            1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308,
            1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319,
            1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330,
            1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341,
            1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352,
            1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363,
            1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374,
            1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385,
            1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396,
            1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407,
            1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418,
            1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429,
            1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440,
            1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451,
            1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462,
            1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473,
            1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484,
            1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495,
            1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506,
            1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517,
            1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528,
            1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539,
            1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550,
            1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561,
            1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572,
            1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583,
            1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594,
            1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605,
            1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616,
            1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627,
            1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638,
            1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649,
            1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660,
            1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671,
            1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682,
            1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693,
            1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704,
            1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715,
            1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726,
            1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737,
            1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748,
            1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759,
            1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770,
            1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781,
            1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792,
            1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803,
            1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814,
            1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825,
            1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836,
            1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847,
            1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858,
            1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869,
            1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880,
            1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891,
            1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902,
            1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913,
            1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924,
            1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935,
            1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946,
            1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957,
            1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968,
            1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
            1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
            2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
            2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
            2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034,
            2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045,
            2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
            2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067,
            2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078,
            2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089,
            2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100,
            2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111,
            2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122,
            2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133,
            2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144,
            2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155,
            2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166,
            2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177,
            2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188,
            2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199,
            2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210,
            2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221,
            2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232,
            2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243,
            2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254,
            2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265,
            2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276,
            2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287,
            2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298,
            2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309,
            2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320,
            2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331,
            2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342,
            2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353,
            2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364,
            2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375,
            2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386,
            2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397,
            2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408,
            2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419,
            2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430,
            2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441,
            2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452,
            2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463,
            2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474,
            2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485,
            2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496,
            2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507,
            2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518,
            2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529,
            2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540,
            2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551,
            2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562,
            2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573,
            2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584,
            2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595,
            2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606,
            2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617,
            2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628,
            2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639,
            2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650,
            2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661,
            2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672,
            2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683,
            2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694,
            2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705,
            2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716,
            2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727,
            2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738,
            2739, 2740, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749,
            2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760,
            2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771,
            2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782,
            2783, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793,
            2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804,
            2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815,
            2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826,
            2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 2836, 2837,
            2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848,
            2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859,
            2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870,
            2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881,
            2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892,
            2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903,
            2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914,
            2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925,
            2926, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936,
            2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947,
            2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958,
            2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969,
            2970, 2971, 2972, 2973, 2974, 2975, 2976, 2977, 2978, 2979, 2980,
            2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991,
            2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3000, 3001, 3002,
            3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013,
            3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024,
            3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035,
            3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046,
            3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057,
            3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068,
            3069, 3070, 3071, 3072, 3073, 3074, 3075, 3076, 3077, 3078, 3079,
            3080, 3081, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3089, 3090,
            3091, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100, 3101,
            3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112,
            3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123,
            3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134,
            3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145,
            3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156,
            3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167,
            3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178,
            3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189,
            3190, 3191, 3192, 3193, 3194, 3195, 3196, 3197, 3198, 3199, 3200,
            3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211,
            3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222,
            3223, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233,
            3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243, 3244,
            3245, 3246, 3247, 3248, 3249, 3250, 3251, 3252, 3253, 3254, 3255,
            3256, 3257, 3258, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266,
            3267, 3268, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277,
            3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3287, 3288,
            3289, 3290, 3291, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299,
            3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310,
            3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321,
            3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332,
            3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343,
            3344, 3345, 3346, 3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354,
            3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365,
            3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376,
            3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387,
            3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398,
            3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409,
            3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420,
            3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431,
            3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442,
            3443, 3444, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453,
            3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464,
            3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3473, 3474, 3475,
            3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486,
            3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497,
            3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508,
            3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519,
            3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530,
            3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541,
            3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552,
            3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563,
            3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574,
            3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585,
            3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596,
            3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607,
            3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618,
            3619, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629,
            3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640,
            3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3650, 3651,
            3652, 3653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662,
            3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673,
            3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684,
            3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695,
            3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706,
            3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717,
            3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728,
            3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739,
            3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750,
            3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761,
            3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772,
            3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783,
            3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794,
            3795, 3796, 3797, 3798, 3799, 3800, 3801, 3802, 3803, 3804, 3805,
            3806, 3807, 3808, 3809, 3810, 3811, 3812, 3813, 3814, 3815, 3816,
            3817, 3818, 3819, 3820, 3821, 3822, 3823, 3824, 3825, 3826, 3827,
            3828, 3829, 3830, 3831, 3832, 3833, 3834, 3835, 3836, 3837, 3838,
            3839, 3840, 3841, 3842, 3843, 3844, 3845, 3846, 3847, 3848, 3849,
            3850, 3851, 3852, 3853, 3854, 3855, 3856, 3857, 3858, 3859, 3860,
            3861, 3862, 3863, 3864, 3865, 3866, 3867, 3868, 3869, 3870, 3871,
            3872, 3873, 3874, 3875, 3876, 3877, 3878, 3879, 3880, 3881, 3882,
            3883, 3884, 3885, 3886, 3887, 3888, 3889, 3890, 3891, 3892, 3893,
            3894, 3895, 3896, 3897, 3898, 3899, 3900, 3901, 3902, 3903, 3904,
            3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912, 3913, 3914, 3915,
            3916, 3917, 3918, 3919, 3920, 3921, 3922, 3923, 3924, 3925, 3926,
            3927, 3928, 3929, 3930, 3931, 3932, 3933, 3934, 3935, 3936, 3937,
            3938, 3939, 3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948,
            3949, 3950, 3951, 3952, 3953, 3954, 3955, 3956, 3957, 3958, 3959,
            3960, 3961, 3962, 3963, 3964, 3965, 3966, 3967, 3968, 3969, 3970,
            3971, 3972, 3973, 3974, 3975, 3976, 3977, 3978, 3979, 3980, 3981,
            3982, 3983, 3984, 3985, 3986, 3987, 3988, 3989, 3990, 3991, 3992,
            3993, 3994, 3995, 3996, 3997, 3998, 3999, 4000, 4001, 4002, 4003,
            4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014,
            4015, 4016, 4017, 4018, 4019, 4020, 4021, 4022, 4023, 4024, 4025,
            4026, 4027, 4028, 4029, 4030, 4031, 4032, 4033, 4034, 4035, 4036,
            4037, 4038, 4039, 4040, 4041, 4042, 4043, 4044, 4045, 4046, 4047,
            4048, 4049, 4050, 4051, 4052, 4053, 4054, 4055, 4056, 4057, 4058,
            4059, 4060, 4061, 4062, 4063, 4064, 4065, 4066, 4067, 4068, 4069,
            4070, 4071, 4072, 4073, 4074, 4075, 4076, 4077, 4078, 4079, 4080,
            4081, 4082, 4083, 4084, 4085, 4086, 4087, 4088, 4089, 4090, 4091,
            4092, 4093, 4094, 4095, 4096, 4097, 4098, 4099, 4100, 4101, 4102,
            4103, 4104, 4105, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113,
            4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124,
            4125, 4126, 4127, 4128, 4129, 4130, 4131, 4132, 4133, 4134, 4135,
            4136, 4137, 4138, 4139, 4140, 4141, 4142, 4143, 4144, 4145, 4146,
            4147, 4148, 4149, 4150, 4151, 4152, 4153, 4154, 4155, 4156, 4157,
            4158, 4159, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168,
            4169, 4170, 4171, 4172, 4173, 4174, 4175, 4176, 4177, 4178, 4179,
            4180, 4181, 4182, 4183, 4184, 4185, 4186, 4187, 4188, 4189, 4190,
            4191, 4192, 4193, 4194, 4195, 4196, 4197, 4198, 4199, 4200, 4201,
            4202, 4203, 4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 4212,
            4213, 4214, 4215, 4216, 4217, 4218, 4219, 4220, 4221, 4222, 4223,
            4224, 4225, 4226, 4227, 4228, 4229, 4230, 4231, 4232, 4233, 4234,
            4235, 4236, 4237, 4238, 4239, 4240, 4241, 4242, 4243, 4244, 4245,
            4246, 4247, 4248, 4249, 4250, 4251, 4252, 4253, 4254, 4255, 4256,
            4257, 4258, 4259, 4260, 4261, 4262, 4263, 4264, 4265, 4266, 4267,
            4268, 4269, 4270, 4271, 4272, 4273, 4274, 4275, 4276, 4277, 4278,
            4279, 4280, 4281, 4282, 4283, 4284, 4285, 4286, 4287, 4288, 4289,
            4290, 4291, 4292, 4293, 4294, 4295, 4296, 4297, 4298, 4299, 4300,
            4301, 4302, 4303, 4304, 4305, 4306, 4307, 4308, 4309, 4310, 4311,
            4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4321, 4322,
            4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 4332, 4333,
            4334, 4335, 4336, 4337, 4338, 4339, 4340, 4341, 4342, 4343, 4344,
            4345, 4346, 4347, 4348, 4349, 4350, 4351, 4352, 4353, 4354, 4355,
            4356, 4357, 4358, 4359, 4360, 4361, 4362, 4363, 4364, 4365, 4366,
            4367, 4368, 4369, 4370, 4371, 4372, 4373, 4374, 4375, 4376, 4377,
            4378, 4379, 4380, 4381, 4382, 4383, 4384, 4385, 4386, 4387, 4388,
            4389, 4390, 4391, 4392, 4393, 4394, 4395, 4396, 4397, 4398, 4399,
            4400, 4401, 4402, 4403, 4404, 4405, 4406, 4407, 4408, 4409, 4410,
            4411, 4412, 4413, 4414, 4415, 4416, 4417, 4418, 4419, 4420, 4421,
            4422, 4423, 4424, 4425, 4426, 4427, 4428, 4429, 4430, 4431, 4432,
            4433, 4434, 4435, 4436, 4437, 4438, 4439, 4440, 4441, 4442, 4443,
            4444, 4445, 4446, 4447, 4448, 4449, 4450, 4451, 4452, 4453, 4454,
            4455, 4456, 4457, 4458, 4459, 4460, 4461, 4462, 4463, 4464, 4465,
            4466, 4467, 4468, 4469, 4470, 4471, 4472, 4473, 4474, 4475, 4476,
            4477, 4478, 4479, 4480, 4481, 4482, 4483, 4484, 4485, 4486, 4487,
            4488, 4489, 4490, 4491, 4492, 4493, 4494, 4495, 4496, 4497, 4498,
            4499, 4500, 4501, 4502, 4503, 4504, 4505, 4506, 4507, 4508, 4509,
            4510, 4511, 4512, 4513, 4514, 4515, 4516, 4517, 4518, 4519, 4520,
            4521, 4522, 4523, 4524, 4525, 4526, 4527, 4528, 4529, 4530, 4531,
            4532, 4533, 4534, 4535, 4536, 4537, 4538, 4539, 4540, 4541, 4542,
            4543, 4544, 4545, 4546, 4547, 4548, 4549, 4550, 4551, 4552, 4553,
            4554, 4555, 4556, 4557, 4558, 4559, 4560, 4561, 4562, 4563, 4564,
            4565, 4566, 4567, 4568, 4569, 4570, 4571, 4572, 4573, 4574, 4575,
            4576, 4577, 4578, 4579, 4580, 4581, 4582, 4583, 4584, 4585, 4586,
            4587, 4588, 4589, 4590, 4591, 4592, 4593, 4594, 4595, 4596, 4597,
            4598, 4599, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4607, 4608,
            4609, 4610, 4611, 4612, 4613, 4614, 4615, 4616, 4617, 4618, 4619,
            4620, 4621, 4622, 4623, 4624, 4625, 4626, 4627, 4628, 4629, 4630,
            4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641,
            4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652,
            4653, 4654, 4655, 4656, 4657, 4658, 4659, 4660, 4661, 4662, 4663,
            4664, 4665, 4666, 4667, 4668, 4669, 4670, 4671, 4672, 4673, 4674,
            4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682, 4683, 4684, 4685,
            4686, 4687, 4688, 4689, 4690, 4691, 4692, 4693, 4694, 4695, 4696,
            4697, 4698, 4699, 4700, 4701, 4702, 4703, 4704, 4705, 4706, 4707,
            4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718,
            4719, 4720, 4721, 4722, 4723, 4724, 4725, 4726, 4727, 4728, 4729,
            4730, 4731, 4732, 4733, 4734, 4735, 4736, 4737, 4738, 4739, 4740,
            4741, 4742, 4743, 4744, 4745, 4746, 4747, 4748, 4749, 4750, 4751,
            4752, 4753, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762,
            4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4772, 4773,
            4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784,
            4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795,
            4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806,
            4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817,
            4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4828,
            4829, 4830, 4831, 4832, 4833, 4834, 4835, 4836, 4837, 4838, 4839,
            4840, 4841, 4842, 4843, 4844, 4845, 4846, 4847, 4848, 4849, 4850,
            4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861,
            4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 4871, 4872,
            4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883,
            4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894,
            4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4903, 4904, 4905,
            4906, 4907, 4908, 4909, 4910, 4911, 4912, 4913, 4914, 4915, 4916,
            4917, 4918, 4919, 4920, 4921, 4922, 4923, 4924, 4925, 4926, 4927,
            4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938,
            4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4947, 4948, 4949,
            4950, 4951, 4952, 4953, 4954, 4955, 4956, 4957, 4958, 4959, 4960,
            4961, 4962, 4963, 4964, 4965, 4966, 4967, 4968, 4969, 4970, 4971,
            4972, 4973, 4974, 4975, 4976, 4977, 4978, 4979, 4980, 4981, 4982,
            4983, 4984, 4985, 4986, 4987, 4988, 4989, 4990, 4991, 4992, 4993,
            4994, 4995, 4996, 4997, 4998, 4999, 5000, -1, -2, -3, -4, -5, -6,
            -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20,
            -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33,
            -34, -35, -36, -37, -38, -39, -40, -41, -42, -43, -44, -45, -46,
            -47, -48, -49, -50, -51, -52, -53, -54, -55, -56, -57, -58, -59,
            -60, -61, -62, -63, -64, -65, -66, -67, -68, -69, -70, -71, -72,
            -73, -74, -75, -76, -77, -78, -79, -80, -81, -82, -83, -84, -85,
            -86, -87, -88, -89, -90, -91, -92, -93, -94, -95, -96, -97, -98,
            -99, -100, -101, -102, -103, -104, -105, -106, -107, -108, -109,
            -110, -111, -112, -113, -114, -115, -116, -117, -118, -119, -120,
            -121, -122, -123, -124, -125, -126, -127, -128, -129, -130, -131,
            -132, -133, -134, -135, -136, -137, -138, -139, -140, -141, -142,
            -143, -144, -145, -146, -147, -148, -149, -150, -151, -152, -153,
            -154, -155, -156, -157, -158, -159, -160, -161, -162, -163, -164,
            -165, -166, -167, -168, -169, -170, -171, -172, -173, -174, -175,
            -176, -177, -178, -179, -180, -181, -182, -183, -184, -185, -186,
            -187, -188, -189, -190, -191, -192, -193, -194, -195, -196, -197,
            -198, -199, -200, -201, -202, -203, -204, -205, -206, -207, -208,
            -209, -210, -211, -212, -213, -214, -215, -216, -217, -218, -219,
            -220, -221, -222, -223, -224, -225, -226, -227, -228, -229, -230,
            -231, -232, -233, -234, -235, -236, -237, -238, -239, -240, -241,
            -242, -243, -244, -245, -246, -247, -248, -249, -250, -251, -252,
            -253, -254, -255, -256, -257, -258, -259, -260, -261, -262, -263,
            -264, -265, -266, -267, -268, -269, -270, -271, -272, -273, -274,
            -275, -276, -277, -278, -279, -280, -281, -282, -283, -284, -285,
            -286, -287, -288, -289, -290, -291, -292, -293, -294, -295, -296,
            -297, -298, -299, -300, -301, -302, -303, -304, -305, -306, -307,
            -308, -309, -310, -311, -312, -313, -314, -315, -316, -317, -318,
            -319, -320, -321, -322, -323, -324, -325, -326, -327, -328, -329,
            -330, -331, -332, -333, -334, -335, -336, -337, -338, -339, -340,
            -341, -342, -343, -344, -345, -346, -347, -348, -349, -350, -351,
            -352, -353, -354, -355, -356, -357, -358, -359, -360, -361, -362,
            -363, -364, -365, -366, -367, -368, -369, -370, -371, -372, -373,
            -374, -375, -376, -377, -378, -379, -380, -381, -382, -383, -384,
            -385, -386, -387, -388, -389, -390, -391, -392, -393, -394, -395,
            -396, -397, -398, -399, -400, -401, -402, -403, -404, -405, -406,
            -407, -408, -409, -410, -411, -412, -413, -414, -415, -416, -417,
            -418, -419, -420, -421, -422, -423, -424, -425, -426, -427, -428,
            -429, -430, -431, -432, -433, -434, -435, -436, -437, -438, -439,
            -440, -441, -442, -443, -444, -445, -446, -447, -448, -449, -450,
            -451, -452, -453, -454, -455, -456, -457, -458, -459, -460, -461,
            -462, -463, -464, -465, -466, -467, -468, -469, -470, -471, -472,
            -473, -474, -475, -476, -477, -478, -479, -480, -481, -482, -483,
            -484, -485, -486, -487, -488, -489, -490, -491, -492, -493, -494,
            -495, -496, -497, -498, -499, -500, -501, -502, -503, -504, -505,
            -506, -507, -508, -509, -510, -511, -512, -513, -514, -515, -516,
            -517, -518, -519, -520, -521, -522, -523, -524, -525, -526, -527,
            -528, -529, -530, -531, -532, -533, -534, -535, -536, -537, -538,
            -539, -540, -541, -542, -543, -544, -545, -546, -547, -548, -549,
            -550, -551, -552, -553, -554, -555, -556, -557, -558, -559, -560,
            -561, -562, -563, -564, -565, -566, -567, -568, -569, -570, -571,
            -572, -573, -574, -575, -576, -577, -578, -579, -580, -581, -582,
            -583, -584, -585, -586, -587, -588, -589, -590, -591, -592, -593,
            -594, -595, -596, -597, -598, -599, -600, -601, -602, -603, -604,
            -605, -606, -607, -608, -609, -610, -611, -612, -613, -614, -615,
            -616, -617, -618, -619, -620, -621, -622, -623, -624, -625, -626,
            -627, -628, -629, -630, -631, -632, -633, -634, -635, -636, -637,
            -638, -639, -640, -641, -642, -643, -644, -645, -646, -647, -648,
            -649, -650, -651, -652, -653, -654, -655, -656, -657, -658, -659,
            -660, -661, -662, -663, -664, -665, -666, -667, -668, -669, -670,
            -671, -672, -673, -674, -675, -676, -677, -678, -679, -680, -681,
            -682, -683, -684, -685, -686, -687, -688, -689, -690, -691, -692,
            -693, -694, -695, -696, -697, -698, -699, -700, -701, -702, -703,
            -704, -705, -706, -707, -708, -709, -710, -711, -712, -713, -714,
            -715, -716, -717, -718, -719, -720, -721, -722, -723, -724, -725,
            -726, -727, -728, -729, -730, -731, -732, -733, -734, -735, -736,
            -737, -738, -739, -740, -741, -742, -743, -744, -745, -746, -747,
            -748, -749, -750, -751, -752, -753, -754, -755, -756, -757, -758,
            -759, -760, -761, -762, -763, -764, -765, -766, -767, -768, -769,
            -770, -771, -772, -773, -774, -775, -776, -777, -778, -779, -780,
            -781, -782, -783, -784, -785, -786, -787, -788, -789, -790, -791,
            -792, -793, -794, -795, -796, -797, -798, -799, -800, -801, -802,
            -803, -804, -805, -806, -807, -808, -809, -810, -811, -812, -813,
            -814, -815, -816, -817, -818, -819, -820, -821, -822, -823, -824,
            -825, -826, -827, -828, -829, -830, -831, -832, -833, -834, -835,
            -836, -837, -838, -839, -840, -841, -842, -843, -844, -845, -846,
            -847, -848, -849, -850, -851, -852, -853, -854, -855, -856, -857,
            -858, -859, -860, -861, -862, -863, -864, -865, -866, -867, -868,
            -869, -870, -871, -872, -873, -874, -875, -876, -877, -878, -879,
            -880, -881, -882, -883, -884, -885, -886, -887, -888, -889, -890,
            -891, -892, -893, -894, -895, -896, -897, -898, -899, -900, -901,
            -902, -903, -904, -905, -906, -907, -908, -909, -910, -911, -912,
            -913, -914, -915, -916, -917, -918, -919, -920, -921, -922, -923,
            -924, -925, -926, -927, -928, -929, -930, -931, -932, -933, -934,
            -935, -936, -937, -938, -939, -940, -941, -942, -943, -944, -945,
            -946, -947, -948, -949, -950, -951, -952, -953, -954, -955, -956,
            -957, -958, -959, -960, -961, -962, -963, -964, -965, -966, -967,
            -968, -969, -970, -971, -972, -973, -974, -975, -976, -977, -978,
            -979, -980, -981, -982, -983, -984, -985, -986, -987, -988, -989,
            -990, -991, -992, -993, -994, -995, -996, -997, -998, -999, -1000,
            -1001, -1002, -1003, -1004, -1005, -1006, -1007, -1008, -1009,
            -1010, -1011, -1012, -1013, -1014, -1015, -1016, -1017, -1018,
            -1019, -1020, -1021, -1022, -1023, -1024, -1025, -1026, -1027,
            -1028, -1029, -1030, -1031, -1032, -1033, -1034, -1035, -1036,
            -1037, -1038, -1039, -1040, -1041, -1042, -1043, -1044, -1045,
            -1046, -1047, -1048, -1049, -1050, -1051, -1052, -1053, -1054,
            -1055, -1056, -1057, -1058, -1059, -1060, -1061, -1062, -1063,
            -1064, -1065, -1066, -1067, -1068, -1069, -1070, -1071, -1072,
            -1073, -1074, -1075, -1076, -1077, -1078, -1079, -1080, -1081,
            -1082, -1083, -1084, -1085, -1086, -1087, -1088, -1089, -1090,
            -1091, -1092, -1093, -1094, -1095, -1096, -1097, -1098, -1099,
            -1100, -1101, -1102, -1103, -1104, -1105, -1106, -1107, -1108,
            -1109, -1110, -1111, -1112, -1113, -1114, -1115, -1116, -1117,
            -1118, -1119, -1120, -1121, -1122, -1123, -1124, -1125, -1126,
            -1127, -1128, -1129, -1130, -1131, -1132, -1133, -1134, -1135,
            -1136, -1137, -1138, -1139, -1140, -1141, -1142, -1143, -1144,
            -1145, -1146, -1147, -1148, -1149, -1150, -1151, -1152, -1153,
            -1154, -1155, -1156, -1157, -1158, -1159, -1160, -1161, -1162,
            -1163, -1164, -1165, -1166, -1167, -1168, -1169, -1170, -1171,
            -1172, -1173, -1174, -1175, -1176, -1177, -1178, -1179, -1180,
            -1181, -1182, -1183, -1184, -1185, -1186, -1187, -1188, -1189,
            -1190, -1191, -1192, -1193, -1194, -1195, -1196, -1197, -1198,
            -1199, -1200, -1201, -1202, -1203, -1204, -1205, -1206, -1207,
            -1208, -1209, -1210, -1211, -1212, -1213, -1214, -1215, -1216,
            -1217, -1218, -1219, -1220, -1221, -1222, -1223, -1224, -1225,
            -1226, -1227, -1228, -1229, -1230, -1231, -1232, -1233, -1234,
            -1235, -1236, -1237, -1238, -1239, -1240, -1241, -1242, -1243,
            -1244, -1245, -1246, -1247, -1248, -1249, -1250, -1251, -1252,
            -1253, -1254, -1255, -1256, -1257, -1258, -1259, -1260, -1261,
            -1262, -1263, -1264, -1265, -1266, -1267, -1268, -1269, -1270,
            -1271, -1272, -1273, -1274, -1275, -1276, -1277, -1278, -1279,
            -1280, -1281, -1282, -1283, -1284, -1285, -1286, -1287, -1288,
            -1289, -1290, -1291, -1292, -1293, -1294, -1295, -1296, -1297,
            -1298, -1299, -1300, -1301, -1302, -1303, -1304, -1305, -1306,
            -1307, -1308, -1309, -1310, -1311, -1312, -1313, -1314, -1315,
            -1316, -1317, -1318, -1319, -1320, -1321, -1322, -1323, -1324,
            -1325, -1326, -1327, -1328, -1329, -1330, -1331, -1332, -1333,
            -1334, -1335, -1336, -1337, -1338, -1339, -1340, -1341, -1342,
            -1343, -1344, -1345, -1346, -1347, -1348, -1349, -1350, -1351,
            -1352, -1353, -1354, -1355, -1356, -1357, -1358, -1359, -1360,
            -1361, -1362, -1363, -1364, -1365, -1366, -1367, -1368, -1369,
            -1370, -1371, -1372, -1373, -1374, -1375, -1376, -1377, -1378,
            -1379, -1380, -1381, -1382, -1383, -1384, -1385, -1386, -1387,
            -1388, -1389, -1390, -1391, -1392, -1393, -1394, -1395, -1396,
            -1397, -1398, -1399, -1400, -1401, -1402, -1403, -1404, -1405,
            -1406, -1407, -1408, -1409, -1410, -1411, -1412, -1413, -1414,
            -1415, -1416, -1417, -1418, -1419, -1420, -1421, -1422, -1423,
            -1424, -1425, -1426, -1427, -1428, -1429, -1430, -1431, -1432,
            -1433, -1434, -1435, -1436, -1437, -1438, -1439, -1440, -1441,
            -1442, -1443, -1444, -1445, -1446, -1447, -1448, -1449, -1450,
            -1451, -1452, -1453, -1454, -1455, -1456, -1457, -1458, -1459,
            -1460, -1461, -1462, -1463, -1464, -1465, -1466, -1467, -1468,
            -1469, -1470, -1471, -1472, -1473, -1474, -1475, -1476, -1477,
            -1478, -1479, -1480, -1481, -1482, -1483, -1484, -1485, -1486,
            -1487, -1488, -1489, -1490, -1491, -1492, -1493, -1494, -1495,
            -1496, -1497, -1498, -1499, -1500, -1501, -1502, -1503, -1504,
            -1505, -1506, -1507, -1508, -1509, -1510, -1511, -1512, -1513,
            -1514, -1515, -1516, -1517, -1518, -1519, -1520, -1521, -1522,
            -1523, -1524, -1525, -1526, -1527, -1528, -1529, -1530, -1531,
            -1532, -1533, -1534, -1535, -1536, -1537, -1538, -1539, -1540,
            -1541, -1542, -1543, -1544, -1545, -1546, -1547, -1548, -1549,
            -1550, -1551, -1552, -1553, -1554, -1555, -1556, -1557, -1558,
            -1559, -1560, -1561, -1562, -1563, -1564, -1565, -1566, -1567,
            -1568, -1569, -1570, -1571, -1572, -1573, -1574, -1575, -1576,
            -1577, -1578, -1579, -1580, -1581, -1582, -1583, -1584, -1585,
            -1586, -1587, -1588, -1589, -1590, -1591, -1592, -1593, -1594,
            -1595, -1596, -1597, -1598, -1599, -1600, -1601, -1602, -1603,
            -1604, -1605, -1606, -1607, -1608, -1609, -1610, -1611, -1612,
            -1613, -1614, -1615, -1616, -1617, -1618, -1619, -1620, -1621,
            -1622, -1623, -1624, -1625, -1626, -1627, -1628, -1629, -1630,
            -1631, -1632, -1633, -1634, -1635, -1636, -1637, -1638, -1639,
            -1640, -1641, -1642, -1643, -1644, -1645, -1646, -1647, -1648,
            -1649, -1650, -1651, -1652, -1653, -1654, -1655, -1656, -1657,
            -1658, -1659, -1660, -1661, -1662, -1663, -1664, -1665, -1666,
            -1667, -1668, -1669, -1670, -1671, -1672, -1673, -1674, -1675,
            -1676, -1677, -1678, -1679, -1680, -1681, -1682, -1683, -1684,
            -1685, -1686, -1687, -1688, -1689, -1690, -1691, -1692, -1693,
            -1694, -1695, -1696, -1697, -1698, -1699, -1700, -1701, -1702,
            -1703, -1704, -1705, -1706, -1707, -1708, -1709, -1710, -1711,
            -1712, -1713, -1714, -1715, -1716, -1717, -1718, -1719, -1720,
            -1721, -1722, -1723, -1724, -1725, -1726, -1727, -1728, -1729,
            -1730, -1731, -1732, -1733, -1734, -1735, -1736, -1737, -1738,
            -1739, -1740, -1741, -1742, -1743, -1744, -1745, -1746, -1747,
            -1748, -1749, -1750, -1751, -1752, -1753, -1754, -1755, -1756,
            -1757, -1758, -1759, -1760, -1761, -1762, -1763, -1764, -1765,
            -1766, -1767, -1768, -1769, -1770, -1771, -1772, -1773, -1774,
            -1775, -1776, -1777, -1778, -1779, -1780, -1781, -1782, -1783,
            -1784, -1785, -1786, -1787, -1788, -1789, -1790, -1791, -1792,
            -1793, -1794, -1795, -1796, -1797, -1798, -1799, -1800, -1801,
            -1802, -1803, -1804, -1805, -1806, -1807, -1808, -1809, -1810,
            -1811, -1812, -1813, -1814, -1815, -1816, -1817, -1818, -1819,
            -1820, -1821, -1822, -1823, -1824, -1825, -1826, -1827, -1828,
            -1829, -1830, -1831, -1832, -1833, -1834, -1835, -1836, -1837,
            -1838, -1839, -1840, -1841, -1842, -1843, -1844, -1845, -1846,
            -1847, -1848, -1849, -1850, -1851, -1852, -1853, -1854, -1855,
            -1856, -1857, -1858, -1859, -1860, -1861, -1862, -1863, -1864,
            -1865, -1866, -1867, -1868, -1869, -1870, -1871, -1872, -1873,
            -1874, -1875, -1876, -1877, -1878, -1879, -1880, -1881, -1882,
            -1883, -1884, -1885, -1886, -1887, -1888, -1889, -1890, -1891,
            -1892, -1893, -1894, -1895, -1896, -1897, -1898, -1899, -1900,
            -1901, -1902, -1903, -1904, -1905, -1906, -1907, -1908, -1909,
            -1910, -1911, -1912, -1913, -1914, -1915, -1916, -1917, -1918,
            -1919, -1920, -1921, -1922, -1923, -1924, -1925, -1926, -1927,
            -1928, -1929, -1930, -1931, -1932, -1933, -1934, -1935, -1936,
            -1937, -1938, -1939, -1940, -1941, -1942, -1943, -1944, -1945,
            -1946, -1947, -1948, -1949, -1950, -1951, -1952, -1953, -1954,
            -1955, -1956, -1957, -1958, -1959, -1960, -1961, -1962, -1963,
            -1964, -1965, -1966, -1967, -1968, -1969, -1970, -1971, -1972,
            -1973, -1974, -1975, -1976, -1977, -1978, -1979, -1980, -1981,
            -1982, -1983, -1984, -1985, -1986, -1987, -1988, -1989, -1990,
            -1991, -1992, -1993, -1994, -1995, -1996, -1997, -1998, -1999,
            -2000, -2001, -2002, -2003, -2004, -2005, -2006, -2007, -2008,
            -2009, -2010, -2011, -2012, -2013, -2014, -2015, -2016, -2017,
            -2018, -2019, -2020, -2021, -2022, -2023, -2024, -2025, -2026,
            -2027, -2028, -2029, -2030, -2031, -2032, -2033, -2034, -2035,
            -2036, -2037, -2038, -2039, -2040, -2041, -2042, -2043, -2044,
            -2045, -2046, -2047, -2048, -2049, -2050, -2051, -2052, -2053,
            -2054, -2055, -2056, -2057, -2058, -2059, -2060, -2061, -2062,
            -2063, -2064, -2065, -2066, -2067, -2068, -2069, -2070, -2071,
            -2072, -2073, -2074, -2075, -2076, -2077, -2078, -2079, -2080,
            -2081, -2082, -2083, -2084, -2085, -2086, -2087, -2088, -2089,
            -2090, -2091, -2092, -2093, -2094, -2095, -2096, -2097, -2098,
            -2099, -2100, -2101, -2102, -2103, -2104, -2105, -2106, -2107,
            -2108, -2109, -2110, -2111, -2112, -2113, -2114, -2115, -2116,
            -2117, -2118, -2119, -2120, -2121, -2122, -2123, -2124, -2125,
            -2126, -2127, -2128, -2129, -2130, -2131, -2132, -2133, -2134,
            -2135, -2136, -2137, -2138, -2139, -2140, -2141, -2142, -2143,
            -2144, -2145, -2146, -2147, -2148, -2149, -2150, -2151, -2152,
            -2153, -2154, -2155, -2156, -2157, -2158, -2159, -2160, -2161,
            -2162, -2163, -2164, -2165, -2166, -2167, -2168, -2169, -2170,
            -2171, -2172, -2173, -2174, -2175, -2176, -2177, -2178, -2179,
            -2180, -2181, -2182, -2183, -2184, -2185, -2186, -2187, -2188,
            -2189, -2190, -2191, -2192, -2193, -2194, -2195, -2196, -2197,
            -2198, -2199, -2200, -2201, -2202, -2203, -2204, -2205, -2206,
            -2207, -2208, -2209, -2210, -2211, -2212, -2213, -2214, -2215,
            -2216, -2217, -2218, -2219, -2220, -2221, -2222, -2223, -2224,
            -2225, -2226, -2227, -2228, -2229, -2230, -2231, -2232, -2233,
            -2234, -2235, -2236, -2237, -2238, -2239, -2240, -2241, -2242,
            -2243, -2244, -2245, -2246, -2247, -2248, -2249, -2250, -2251,
            -2252, -2253, -2254, -2255, -2256, -2257, -2258, -2259, -2260,
            -2261, -2262, -2263, -2264, -2265, -2266, -2267, -2268, -2269,
            -2270, -2271, -2272, -2273, -2274, -2275, -2276, -2277, -2278,
            -2279, -2280, -2281, -2282, -2283, -2284, -2285, -2286, -2287,
            -2288, -2289, -2290, -2291, -2292, -2293, -2294, -2295, -2296,
            -2297, -2298, -2299, -2300, -2301, -2302, -2303, -2304, -2305,
            -2306, -2307, -2308, -2309, -2310, -2311, -2312, -2313, -2314,
            -2315, -2316, -2317, -2318, -2319, -2320, -2321, -2322, -2323,
            -2324, -2325, -2326, -2327, -2328, -2329, -2330, -2331, -2332,
            -2333, -2334, -2335, -2336, -2337, -2338, -2339, -2340, -2341,
            -2342, -2343, -2344, -2345, -2346, -2347, -2348, -2349, -2350,
            -2351, -2352, -2353, -2354, -2355, -2356, -2357, -2358, -2359,
            -2360, -2361, -2362, -2363, -2364, -2365, -2366, -2367, -2368,
            -2369, -2370, -2371, -2372, -2373, -2374, -2375, -2376, -2377,
            -2378, -2379, -2380, -2381, -2382, -2383, -2384, -2385, -2386,
            -2387, -2388, -2389, -2390, -2391, -2392, -2393, -2394, -2395,
            -2396, -2397, -2398, -2399, -2400, -2401, -2402, -2403, -2404,
            -2405, -2406, -2407, -2408, -2409, -2410, -2411, -2412, -2413,
            -2414, -2415, -2416, -2417, -2418, -2419, -2420, -2421, -2422,
            -2423, -2424, -2425, -2426, -2427, -2428, -2429, -2430, -2431,
            -2432, -2433, -2434, -2435, -2436, -2437, -2438, -2439, -2440,
            -2441, -2442, -2443, -2444, -2445, -2446, -2447, -2448, -2449,
            -2450, -2451, -2452, -2453, -2454, -2455, -2456, -2457, -2458,
            -2459, -2460, -2461, -2462, -2463, -2464, -2465, -2466, -2467,
            -2468, -2469, -2470, -2471, -2472, -2473, -2474, -2475, -2476,
            -2477, -2478, -2479, -2480, -2481, -2482, -2483, -2484, -2485,
            -2486, -2487, -2488, -2489, -2490, -2491, -2492, -2493, -2494,
            -2495, -2496, -2497, -2498, -2499, -2500, -2501, -2502, -2503,
            -2504, -2505, -2506, -2507, -2508, -2509, -2510, -2511, -2512,
            -2513, -2514, -2515, -2516, -2517, -2518, -2519, -2520, -2521,
            -2522, -2523, -2524, -2525, -2526, -2527, -2528, -2529, -2530,
            -2531, -2532, -2533, -2534, -2535, -2536, -2537, -2538, -2539,
            -2540, -2541, -2542, -2543, -2544, -2545, -2546, -2547, -2548,
            -2549, -2550, -2551, -2552, -2553, -2554, -2555, -2556, -2557,
            -2558, -2559, -2560, -2561, -2562, -2563, -2564, -2565, -2566,
            -2567, -2568, -2569, -2570, -2571, -2572, -2573, -2574, -2575,
            -2576, -2577, -2578, -2579, -2580, -2581, -2582, -2583, -2584,
            -2585, -2586, -2587, -2588, -2589, -2590, -2591, -2592, -2593,
            -2594, -2595, -2596, -2597, -2598, -2599, -2600, -2601, -2602,
            -2603, -2604, -2605, -2606, -2607, -2608, -2609, -2610, -2611,
            -2612, -2613, -2614, -2615, -2616, -2617, -2618, -2619, -2620,
            -2621, -2622, -2623, -2624, -2625, -2626, -2627, -2628, -2629,
            -2630, -2631, -2632, -2633, -2634, -2635, -2636, -2637, -2638,
            -2639, -2640, -2641, -2642, -2643, -2644, -2645, -2646, -2647,
            -2648, -2649, -2650, -2651, -2652, -2653, -2654, -2655, -2656,
            -2657, -2658, -2659, -2660, -2661, -2662, -2663, -2664, -2665,
            -2666, -2667, -2668, -2669, -2670, -2671, -2672, -2673, -2674,
            -2675, -2676, -2677, -2678, -2679, -2680, -2681, -2682, -2683,
            -2684, -2685, -2686, -2687, -2688, -2689, -2690, -2691, -2692,
            -2693, -2694, -2695, -2696, -2697, -2698, -2699, -2700, -2701,
            -2702, -2703, -2704, -2705, -2706, -2707, -2708, -2709, -2710,
            -2711, -2712, -2713, -2714, -2715, -2716, -2717, -2718, -2719,
            -2720, -2721, -2722, -2723, -2724, -2725, -2726, -2727, -2728,
            -2729, -2730, -2731, -2732, -2733, -2734, -2735, -2736, -2737,
            -2738, -2739, -2740, -2741, -2742, -2743, -2744, -2745, -2746,
            -2747, -2748, -2749, -2750, -2751, -2752, -2753, -2754, -2755,
            -2756, -2757, -2758, -2759, -2760, -2761, -2762, -2763, -2764,
            -2765, -2766, -2767, -2768, -2769, -2770, -2771, -2772, -2773,
            -2774, -2775, -2776, -2777, -2778, -2779, -2780, -2781, -2782,
            -2783, -2784, -2785, -2786, -2787, -2788, -2789, -2790, -2791,
            -2792, -2793, -2794, -2795, -2796, -2797, -2798, -2799, -2800,
            -2801, -2802, -2803, -2804, -2805, -2806, -2807, -2808, -2809,
            -2810, -2811, -2812, -2813, -2814, -2815, -2816, -2817, -2818,
            -2819, -2820, -2821, -2822, -2823, -2824, -2825, -2826, -2827,
            -2828, -2829, -2830, -2831, -2832, -2833, -2834, -2835, -2836,
            -2837, -2838, -2839, -2840, -2841, -2842, -2843, -2844, -2845,
            -2846, -2847, -2848, -2849, -2850, -2851, -2852, -2853, -2854,
            -2855, -2856, -2857, -2858, -2859, -2860, -2861, -2862, -2863,
            -2864, -2865, -2866, -2867, -2868, -2869, -2870, -2871, -2872,
            -2873, -2874, -2875, -2876, -2877, -2878, -2879, -2880, -2881,
            -2882, -2883, -2884, -2885, -2886, -2887, -2888, -2889, -2890,
            -2891, -2892, -2893, -2894, -2895, -2896, -2897, -2898, -2899,
            -2900, -2901, -2902, -2903, -2904, -2905, -2906, -2907, -2908,
            -2909, -2910, -2911, -2912, -2913, -2914, -2915, -2916, -2917,
            -2918, -2919, -2920, -2921, -2922, -2923, -2924, -2925, -2926,
            -2927, -2928, -2929, -2930, -2931, -2932, -2933, -2934, -2935,
            -2936, -2937, -2938, -2939, -2940, -2941, -2942, -2943, -2944,
            -2945, -2946, -2947, -2948, -2949, -2950, -2951, -2952, -2953,
            -2954, -2955, -2956, -2957, -2958, -2959, -2960, -2961, -2962,
            -2963, -2964, -2965, -2966, -2967, -2968, -2969, -2970, -2971,
            -2972, -2973, -2974, -2975, -2976, -2977, -2978, -2979, -2980,
            -2981, -2982, -2983, -2984, -2985, -2986, -2987, -2988, -2989,
            -2990, -2991, -2992, -2993, -2994, -2995, -2996, -2997, -2998,
            -2999, -3000, -3001, -3002, -3003, -3004, -3005, -3006, -3007,
            -3008, -3009, -3010, -3011, -3012, -3013, -3014, -3015, -3016,
            -3017, -3018, -3019, -3020, -3021, -3022, -3023, -3024, -3025,
            -3026, -3027, -3028, -3029, -3030, -3031, -3032, -3033, -3034,
            -3035, -3036, -3037, -3038, -3039, -3040, -3041, -3042, -3043,
            -3044, -3045, -3046, -3047, -3048, -3049, -3050, -3051, -3052,
            -3053, -3054, -3055, -3056, -3057, -3058, -3059, -3060, -3061,
            -3062, -3063, -3064, -3065, -3066, -3067, -3068, -3069, -3070,
            -3071, -3072, -3073, -3074, -3075, -3076, -3077, -3078, -3079,
            -3080, -3081, -3082, -3083, -3084, -3085, -3086, -3087, -3088,
            -3089, -3090, -3091, -3092, -3093, -3094, -3095, -3096, -3097,
            -3098, -3099, -3100, -3101, -3102, -3103, -3104, -3105, -3106,
            -3107, -3108, -3109, -3110, -3111, -3112, -3113, -3114, -3115,
            -3116, -3117, -3118, -3119, -3120, -3121, -3122, -3123, -3124,
            -3125, -3126, -3127, -3128, -3129, -3130, -3131, -3132, -3133,
            -3134, -3135, -3136, -3137, -3138, -3139, -3140, -3141, -3142,
            -3143, -3144, -3145, -3146, -3147, -3148, -3149, -3150, -3151,
            -3152, -3153, -3154, -3155, -3156, -3157, -3158, -3159, -3160,
            -3161, -3162, -3163, -3164, -3165, -3166, -3167, -3168, -3169,
            -3170, -3171, -3172, -3173, -3174, -3175, -3176, -3177, -3178,
            -3179, -3180, -3181, -3182, -3183, -3184, -3185, -3186, -3187,
            -3188, -3189, -3190, -3191, -3192, -3193, -3194, -3195, -3196,
            -3197, -3198, -3199, -3200, -3201, -3202, -3203, -3204, -3205,
            -3206, -3207, -3208, -3209, -3210, -3211, -3212, -3213, -3214,
            -3215, -3216, -3217, -3218, -3219, -3220, -3221, -3222, -3223,
            -3224, -3225, -3226, -3227, -3228, -3229, -3230, -3231, -3232,
            -3233, -3234, -3235, -3236, -3237, -3238, -3239, -3240, -3241,
            -3242, -3243, -3244, -3245, -3246, -3247, -3248, -3249, -3250,
            -3251, -3252, -3253, -3254, -3255, -3256, -3257, -3258, -3259,
            -3260, -3261, -3262, -3263, -3264, -3265, -3266, -3267, -3268,
            -3269, -3270, -3271, -3272, -3273, -3274, -3275, -3276, -3277,
            -3278, -3279, -3280, -3281, -3282, -3283, -3284, -3285, -3286,
            -3287, -3288, -3289, -3290, -3291, -3292, -3293, -3294, -3295,
            -3296, -3297, -3298, -3299, -3300, -3301, -3302, -3303, -3304,
            -3305, -3306, -3307, -3308, -3309, -3310, -3311, -3312, -3313,
            -3314, -3315, -3316, -3317, -3318, -3319, -3320, -3321, -3322,
            -3323, -3324, -3325, -3326, -3327, -3328, -3329, -3330, -3331,
            -3332, -3333, -3334, -3335, -3336, -3337, -3338, -3339, -3340,
            -3341, -3342, -3343, -3344, -3345, -3346, -3347, -3348, -3349,
            -3350, -3351, -3352, -3353, -3354, -3355, -3356, -3357, -3358,
            -3359, -3360, -3361, -3362, -3363, -3364, -3365, -3366, -3367,
            -3368, -3369, -3370, -3371, -3372, -3373, -3374, -3375, -3376,
            -3377, -3378, -3379, -3380, -3381, -3382, -3383, -3384, -3385,
            -3386, -3387, -3388, -3389, -3390, -3391, -3392, -3393, -3394,
            -3395, -3396, -3397, -3398, -3399, -3400, -3401, -3402, -3403,
            -3404, -3405, -3406, -3407, -3408, -3409, -3410, -3411, -3412,
            -3413, -3414, -3415, -3416, -3417, -3418, -3419, -3420, -3421,
            -3422, -3423, -3424, -3425, -3426, -3427, -3428, -3429, -3430,
            -3431, -3432, -3433, -3434, -3435, -3436, -3437, -3438, -3439,
            -3440, -3441, -3442, -3443, -3444, -3445, -3446, -3447, -3448,
            -3449, -3450, -3451, -3452, -3453, -3454, -3455, -3456, -3457,
            -3458, -3459, -3460, -3461, -3462, -3463, -3464, -3465, -3466,
            -3467, -3468, -3469, -3470, -3471, -3472, -3473, -3474, -3475,
            -3476, -3477, -3478, -3479, -3480, -3481, -3482, -3483, -3484,
            -3485, -3486, -3487, -3488, -3489, -3490, -3491, -3492, -3493,
            -3494, -3495, -3496, -3497, -3498, -3499, -3500, -3501, -3502,
            -3503, -3504, -3505, -3506, -3507, -3508, -3509, -3510, -3511,
            -3512, -3513, -3514, -3515, -3516, -3517, -3518, -3519, -3520,
            -3521, -3522, -3523, -3524, -3525, -3526, -3527, -3528, -3529,
            -3530, -3531, -3532, -3533, -3534, -3535, -3536, -3537, -3538,
            -3539, -3540, -3541, -3542, -3543, -3544, -3545, -3546, -3547,
            -3548, -3549, -3550, -3551, -3552, -3553, -3554, -3555, -3556,
            -3557, -3558, -3559, -3560, -3561, -3562, -3563, -3564, -3565,
            -3566, -3567, -3568, -3569, -3570, -3571, -3572, -3573, -3574,
            -3575, -3576, -3577, -3578, -3579, -3580, -3581, -3582, -3583,
            -3584, -3585, -3586, -3587, -3588, -3589, -3590, -3591, -3592,
            -3593, -3594, -3595, -3596, -3597, -3598, -3599, -3600, -3601,
            -3602, -3603, -3604, -3605, -3606, -3607, -3608, -3609, -3610,
            -3611, -3612, -3613, -3614, -3615, -3616, -3617, -3618, -3619,
            -3620, -3621, -3622, -3623, -3624, -3625, -3626, -3627, -3628,
            -3629, -3630, -3631, -3632, -3633, -3634, -3635, -3636, -3637,
            -3638, -3639, -3640, -3641, -3642, -3643, -3644, -3645, -3646,
            -3647, -3648, -3649, -3650, -3651, -3652, -3653, -3654, -3655,
            -3656, -3657, -3658, -3659, -3660, -3661, -3662, -3663, -3664,
            -3665, -3666, -3667, -3668, -3669, -3670, -3671, -3672, -3673,
            -3674, -3675, -3676, -3677, -3678, -3679, -3680, -3681, -3682,
            -3683, -3684, -3685, -3686, -3687, -3688, -3689, -3690, -3691,
            -3692, -3693, -3694, -3695, -3696, -3697, -3698, -3699, -3700,
            -3701, -3702, -3703, -3704, -3705, -3706, -3707, -3708, -3709,
            -3710, -3711, -3712, -3713, -3714, -3715, -3716, -3717, -3718,
            -3719, -3720, -3721, -3722, -3723, -3724, -3725, -3726, -3727,
            -3728, -3729, -3730, -3731, -3732, -3733, -3734, -3735, -3736,
            -3737, -3738, -3739, -3740, -3741, -3742, -3743, -3744, -3745,
            -3746, -3747, -3748, -3749, -3750, -3751, -3752, -3753, -3754,
            -3755, -3756, -3757, -3758, -3759, -3760, -3761, -3762, -3763,
            -3764, -3765, -3766, -3767, -3768, -3769, -3770, -3771, -3772,
            -3773, -3774, -3775, -3776, -3777, -3778, -3779, -3780, -3781,
            -3782, -3783, -3784, -3785, -3786, -3787, -3788, -3789, -3790,
            -3791, -3792, -3793, -3794, -3795, -3796, -3797, -3798, -3799,
            -3800, -3801, -3802, -3803, -3804, -3805, -3806, -3807, -3808,
            -3809, -3810, -3811, -3812, -3813, -3814, -3815, -3816, -3817,
            -3818, -3819, -3820, -3821, -3822, -3823, -3824, -3825, -3826,
            -3827, -3828, -3829, -3830, -3831, -3832, -3833, -3834, -3835,
            -3836, -3837, -3838, -3839, -3840, -3841, -3842, -3843, -3844,
            -3845, -3846, -3847, -3848, -3849, -3850, -3851, -3852, -3853,
            -3854, -3855, -3856, -3857, -3858, -3859, -3860, -3861, -3862,
            -3863, -3864, -3865, -3866, -3867, -3868, -3869, -3870, -3871,
            -3872, -3873, -3874, -3875, -3876, -3877, -3878, -3879, -3880,
            -3881, -3882, -3883, -3884, -3885, -3886, -3887, -3888, -3889,
            -3890, -3891, -3892, -3893, -3894, -3895, -3896, -3897, -3898,
            -3899, -3900, -3901, -3902, -3903, -3904, -3905, -3906, -3907,
            -3908, -3909, -3910, -3911, -3912, -3913, -3914, -3915, -3916,
            -3917, -3918, -3919, -3920, -3921, -3922, -3923, -3924, -3925,
            -3926, -3927, -3928, -3929, -3930, -3931, -3932, -3933, -3934,
            -3935, -3936, -3937, -3938, -3939, -3940, -3941, -3942, -3943,
            -3944, -3945, -3946, -3947, -3948, -3949, -3950, -3951, -3952,
            -3953, -3954, -3955, -3956, -3957, -3958, -3959, -3960, -3961,
            -3962, -3963, -3964, -3965, -3966, -3967, -3968, -3969, -3970,
            -3971, -3972, -3973, -3974, -3975, -3976, -3977, -3978, -3979,
            -3980, -3981, -3982, -3983, -3984, -3985, -3986, -3987, -3988,
            -3989, -3990, -3991, -3992, -3993, -3994, -3995, -3996, -3997,
            -3998, -3999, -4000, -4001, -4002, -4003, -4004, -4005, -4006,
            -4007, -4008, -4009, -4010, -4011, -4012, -4013, -4014, -4015,
            -4016, -4017, -4018, -4019, -4020, -4021, -4022, -4023, -4024,
            -4025, -4026, -4027, -4028, -4029, -4030, -4031, -4032, -4033,
            -4034, -4035, -4036, -4037, -4038, -4039, -4040, -4041, -4042,
            -4043, -4044, -4045, -4046, -4047, -4048, -4049, -4050, -4051,
            -4052, -4053, -4054, -4055, -4056, -4057, -4058, -4059, -4060,
            -4061, -4062, -4063, -4064, -4065, -4066, -4067, -4068, -4069,
            -4070, -4071, -4072, -4073, -4074, -4075, -4076, -4077, -4078,
            -4079, -4080, -4081, -4082, -4083, -4084, -4085, -4086, -4087,
            -4088, -4089, -4090, -4091, -4092, -4093, -4094, -4095, -4096,
            -4097, -4098, -4099, -4100, -4101, -4102, -4103, -4104, -4105,
            -4106, -4107, -4108, -4109, -4110, -4111, -4112, -4113, -4114,
            -4115, -4116, -4117, -4118, -4119, -4120, -4121, -4122, -4123,
            -4124, -4125, -4126, -4127, -4128, -4129, -4130, -4131, -4132,
            -4133, -4134, -4135, -4136, -4137, -4138, -4139, -4140, -4141,
            -4142, -4143, -4144, -4145, -4146, -4147, -4148, -4149, -4150,
            -4151, -4152, -4153, -4154, -4155, -4156, -4157, -4158, -4159,
            -4160, -4161, -4162, -4163, -4164, -4165, -4166, -4167, -4168,
            -4169, -4170, -4171, -4172, -4173, -4174, -4175, -4176, -4177,
            -4178, -4179, -4180, -4181, -4182, -4183, -4184, -4185, -4186,
            -4187, -4188, -4189, -4190, -4191, -4192, -4193, -4194, -4195,
            -4196, -4197, -4198, -4199, -4200, -4201, -4202, -4203, -4204,
            -4205, -4206, -4207, -4208, -4209, -4210, -4211, -4212, -4213,
            -4214, -4215, -4216, -4217, -4218, -4219, -4220, -4221, -4222,
            -4223, -4224, -4225, -4226, -4227, -4228, -4229, -4230, -4231,
            -4232, -4233, -4234, -4235, -4236, -4237, -4238, -4239, -4240,
            -4241, -4242, -4243, -4244, -4245, -4246, -4247, -4248, -4249,
            -4250, -4251, -4252, -4253, -4254, -4255, -4256, -4257, -4258,
            -4259, -4260, -4261, -4262, -4263, -4264, -4265, -4266, -4267,
            -4268, -4269, -4270, -4271, -4272, -4273, -4274, -4275, -4276,
            -4277, -4278, -4279, -4280, -4281, -4282, -4283, -4284, -4285,
            -4286, -4287, -4288, -4289, -4290, -4291, -4292, -4293, -4294,
            -4295, -4296, -4297, -4298, -4299, -4300, -4301, -4302, -4303,
            -4304, -4305, -4306, -4307, -4308, -4309, -4310, -4311, -4312,
            -4313, -4314, -4315, -4316, -4317, -4318, -4319, -4320, -4321,
            -4322, -4323, -4324, -4325, -4326, -4327, -4328, -4329, -4330,
            -4331, -4332, -4333, -4334, -4335, -4336, -4337, -4338, -4339,
            -4340, -4341, -4342, -4343, -4344, -4345, -4346, -4347, -4348,
            -4349, -4350, -4351, -4352, -4353, -4354, -4355, -4356, -4357,
            -4358, -4359, -4360, -4361, -4362, -4363, -4364, -4365, -4366,
            -4367, -4368, -4369, -4370, -4371, -4372, -4373, -4374, -4375,
            -4376, -4377, -4378, -4379, -4380, -4381, -4382, -4383, -4384,
            -4385, -4386, -4387, -4388, -4389, -4390, -4391, -4392, -4393,
            -4394, -4395, -4396, -4397, -4398, -4399, -4400, -4401, -4402,
            -4403, -4404, -4405, -4406, -4407, -4408, -4409, -4410, -4411,
            -4412, -4413, -4414, -4415, -4416, -4417, -4418, -4419, -4420,
            -4421, -4422, -4423, -4424, -4425, -4426, -4427, -4428, -4429,
            -4430, -4431, -4432, -4433, -4434, -4435, -4436, -4437, -4438,
            -4439, -4440, -4441, -4442, -4443, -4444, -4445, -4446, -4447,
            -4448, -4449, -4450, -4451, -4452, -4453, -4454, -4455, -4456,
            -4457, -4458, -4459, -4460, -4461, -4462, -4463, -4464, -4465,
            -4466, -4467, -4468, -4469, -4470, -4471, -4472, -4473, -4474,
            -4475, -4476, -4477, -4478, -4479, -4480, -4481, -4482, -4483,
            -4484, -4485, -4486, -4487, -4488, -4489, -4490, -4491, -4492,
            -4493, -4494, -4495, -4496, -4497, -4498, -4499, -4500, -4501,
            -4502, -4503, -4504, -4505, -4506, -4507, -4508, -4509, -4510,
            -4511, -4512, -4513, -4514, -4515, -4516, -4517, -4518, -4519,
            -4520, -4521, -4522, -4523, -4524, -4525, -4526, -4527, -4528,
            -4529, -4530, -4531, -4532, -4533, -4534, -4535, -4536, -4537,
            -4538, -4539, -4540, -4541, -4542, -4543, -4544, -4545, -4546,
            -4547, -4548, -4549, -4550, -4551, -4552, -4553, -4554, -4555,
            -4556, -4557, -4558, -4559, -4560, -4561, -4562, -4563, -4564,
            -4565, -4566, -4567, -4568, -4569, -4570, -4571, -4572, -4573,
            -4574, -4575, -4576, -4577, -4578, -4579, -4580, -4581, -4582,
            -4583, -4584, -4585, -4586, -4587, -4588, -4589, -4590, -4591,
            -4592, -4593, -4594, -4595, -4596, -4597, -4598, -4599, -4600,
            -4601, -4602, -4603, -4604, -4605, -4606, -4607, -4608, -4609,
            -4610, -4611, -4612, -4613, -4614, -4615, -4616, -4617, -4618,
            -4619, -4620, -4621, -4622, -4623, -4624, -4625, -4626, -4627,
            -4628, -4629, -4630, -4631, -4632, -4633, -4634, -4635, -4636,
            -4637, -4638, -4639, -4640, -4641, -4642, -4643, -4644, -4645,
            -4646, -4647, -4648, -4649, -4650, -4651, -4652, -4653, -4654,
            -4655, -4656, -4657, -4658, -4659, -4660, -4661, -4662, -4663,
            -4664, -4665, -4666, -4667, -4668, -4669, -4670, -4671, -4672,
            -4673, -4674, -4675, -4676, -4677, -4678, -4679, -4680, -4681,
            -4682, -4683, -4684, -4685, -4686, -4687, -4688, -4689, -4690,
            -4691, -4692, -4693, -4694, -4695, -4696, -4697, -4698, -4699,
            -4700, -4701, -4702, -4703, -4704, -4705, -4706, -4707, -4708,
            -4709, -4710, -4711, -4712, -4713, -4714, -4715, -4716, -4717,
            -4718, -4719, -4720, -4721, -4722, -4723, -4724, -4725, -4726,
            -4727, -4728, -4729, -4730, -4731, -4732, -4733, -4734, -4735,
            -4736, -4737, -4738, -4739, -4740, -4741, -4742, -4743, -4744,
            -4745, -4746, -4747, -4748, -4749, -4750, -4751, -4752, -4753,
            -4754, -4755, -4756, -4757, -4758, -4759, -4760, -4761, -4762,
            -4763, -4764, -4765, -4766, -4767, -4768, -4769, -4770, -4771,
            -4772, -4773, -4774, -4775, -4776, -4777, -4778, -4779, -4780,
            -4781, -4782, -4783, -4784, -4785, -4786, -4787, -4788, -4789,
            -4790, -4791, -4792, -4793, -4794, -4795, -4796, -4797, -4798,
            -4799, -4800, -4801, -4802, -4803, -4804, -4805, -4806, -4807,
            -4808, -4809, -4810, -4811, -4812, -4813, -4814, -4815, -4816,
            -4817, -4818, -4819, -4820, -4821, -4822, -4823, -4824, -4825,
            -4826, -4827, -4828, -4829, -4830, -4831, -4832, -4833, -4834,
            -4835, -4836, -4837, -4838, -4839, -4840, -4841, -4842, -4843,
            -4844, -4845, -4846, -4847, -4848, -4849, -4850, -4851, -4852,
            -4853, -4854, -4855, -4856, -4857, -4858, -4859, -4860, -4861,
            -4862, -4863, -4864, -4865, -4866, -4867, -4868, -4869, -4870,
            -4871, -4872, -4873, -4874, -4875, -4876, -4877, -4878, -4879,
            -4880, -4881, -4882, -4883, -4884, -4885, -4886, -4887, -4888,
            -4889, -4890, -4891, -4892, -4893, -4894, -4895, -4896, -4897,
            -4898, -4899, -4900, -4901, -4902, -4903, -4904, -4905, -4906,
            -4907, -4908, -4909, -4910, -4911, -4912, -4913, -4914, -4915,
            -4916, -4917, -4918, -4919, -4920, -4921, -4922, -4923, -4924,
            -4925, -4926, -4927, -4928, -4929, -4930, -4931, -4932, -4933,
            -4934, -4935, -4936, -4937, -4938, -4939, -4940, -4941, -4942,
            -4943, -4944, -4945, -4946, -4947, -4948, -4949, -4950, -4951,
            -4952, -4953, -4954, -4955, -4956, -4957, -4958, -4959, -4960,
            -4961, -4962, -4963, -4964, -4965, -4966, -4967, -4968, -4969,
            -4970, -4971, -4972, -4973, -4974, -4975, -4976, -4977, -4978,
            -4979, -4980, -4981, -4982, -4983, -4984, -4985, -4986, -4987,
            -4988, -4989, -4990, -4991, -4992, -4993, -4994, -4995, -4996,
            -4997, -4998, -4999, -5000,
          ],
        ],
        expected: 12502500,
        isHidden: true,
      },
    ],
    hints: [
      `Initialize Variables**

Before processing the array, initialize two variables:

**currSum** to store the current subarray sum.

**maxSum** to store the maximum subarray sum found so far.
\`\`\`js
let currSum = nums[0];
let maxSum = nums[0];
\`\`\`
`,
      `Iterate Through the Array**
Loop through the array from index 1 onwards. At each step, decide whether to:

* **Continue the current subarray** by adding the current number to currSum, or

* **Start a new subarray** from the current number itself.

Update maxSum if currSum exceeds it.

\`\`\`js
for (let i = 1; i < nums.length; i++) {
  currSum = Math.max(nums[i], currSum + nums[i]);
  maxSum = Math.max(maxSum, currSum);
}
\`\`\`

* If **currSum** negative reset it to **0**
\`\`\`js
if(currSum<0) currSum = 0
\`\`\` `,
      `Return The Result**
* return maxSum
\`\`\`js
return maxSum
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for maxSubArray considering constraints and edge cases.',
      code: `function maxSubArray(nums) {
  let currSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '027',
    slug: 'validate-palindrome',
    title: 'Validate Palindrome',
    difficulty: 'easy',
    topics: ['String', 'Math'],
    acceptanceRate: '76%',
    description: `Write a function that determines whether a given string is a valid palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. Ignore cases and all non-alphanumeric characters.

**Input:** A single string \`str\`.

**Output:** Return \`true\` if the string is a valid palindrome, \`false\` otherwise.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

// Example 2:
Input: "race a car"
Output: false

// Example 3:
Input: " "
Output: true

// Example 4:
Input: "1234"
Output: false

// Example 5:
Input: "!!!@@@###"
Output: true. // ignores all the non alphanumeric characters

\`\`\`

### **Constraints & Edge Cases**  
- The input string may contain letters, numbers, spaces, and special characters.
- Ignore cases (treat uppercase and lowercase the same).
- Ignore all non-alphanumeric characters.
- An empty string or a string with only non-alphanumeric characters is considered a valid palindrome.`,
    examples: [
      {
        input: `"A man, a plan, a canal: Panama"`,
        output: 'true',
      },
      {
        input: `"race a car"`,
        output: 'false',
      },
      {
        input: `""`,
        output: 'true',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'validatePalindrome',
    starterCode: {
      javascript: `function validatePalindrome(str) {
    // Your implementation
}
`,
      typescript: `function validatePalindrome(str: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: `Should return true for "A man, a plan, a canal: Panama"`,
        input: ['A man, a plan, a canal: Panama'],
        expected: true,
      },
      {
        name: `Should return false for "race a car"`,
        input: ['race a car'],
        expected: false,
      },
      {
        name: 'Should return true for an empty string',
        input: [''],
        expected: true,
      },
    ],
    hiddenTestCases: [
      {
        name: `Should return true for "!!!@@@###"`,
        input: ['!!!@@@###'],
        expected: true,
        isHidden: true,
      },
      {
        name: `Should return true for "a"`,
        input: ['a'],
        expected: true,
        isHidden: true,
      },
      {
        name: `Should return true for "No lemon, no melon"`,
        input: ['No lemon, no melon'],
        expected: true,
        isHidden: true,
      },
      {
        name: `Should return false for "1234"`,
        input: ['1234'],
        expected: false,
        isHidden: true,
      },
    ],
    hints: [
      `Clean the string
   Remove non-alphanumeric characters and convert to lowercase for uniform comparison:

\`\`\`js
const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
\`\`\``,
      `Check palindrome by reversing
   Reverse the cleaned string and compare with original cleaned string:

\`\`\`js
return cleaned === cleaned.split('').reverse().join('');
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use regex to remove all non-alphanumeric characters from the string.
2. Convert the cleaned string to lowercase.
3. Check if the cleaned string is equal to its reverse.

### **Solution Code**`,
      code: `function validatePalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare cleaned string with its reverse
  return cleaned === cleaned.split('').reverse().join('');
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '028',
    slug: 'groupbyarr-key',
    title: 'groupBy(arr, key)',
    difficulty: 'easy',
    topics: ['Array', 'String', 'Math', 'Object'],
    acceptanceRate: '65%',
    description: `Write a function \`groupBy\` that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects that have that property value.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];
groupBy(users, 'age');
// Output: {
//     '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//     '30': [{ name: 'Bob', age: 30 }]
// }

// Example 2:
const products = [
    { id: 1, category: 'Electronics' },
    { id: 2, category: 'Clothing' },
    { id: 3, category: 'Electronics' }
];
groupBy(products, 'category');
// Output: {
//     'Electronics': [{ id: 1, category: 'Electronics' }, { id: 3, category: 'Electronics' }],
//     'Clothing': [{ id: 2, category: 'Clothing' }]
// }
\`\`\`

### **Constraints & Edge Cases**  
- The input array may be empty, in this case return an empty object.
- The key values can be of any type (number, string, etc.), but they will be coerced to strings when used as object keys.`,
    examples: [
      {
        input: `[{"name":"Alice","age":25},{"name":"Bob","age":30},{"name":"Charlie","age":25}],"age"`,
        output: `{"25":[{"name":"Alice","age":25},{"name":"Charlie","age":25}],"30":[{"name":"Bob","age":30}]}`,
      },
      {
        input: `[{"id":1,"category":"Electronics"},{"id":2,"category":"Clothing"},{"id":3,"category":"Electronics"}],"category"`,
        output: `{"Electronics":[{"id":1,"category":"Electronics"},{"id":3,"category":"Electronics"}],"Clothing":[{"id":2,"category":"Clothing"}]}`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'groupBy',
    starterCode: {
      javascript: `function groupBy(arr, key) {
    // Your implementation
}
`,
      typescript: `function groupBy(arr: any, key: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'groups objects by age',
        input: [
          [
            {
              name: 'Alice',
              age: 25,
            },
            {
              name: 'Bob',
              age: 30,
            },
            {
              name: 'Charlie',
              age: 25,
            },
          ],
          'age',
        ],
        expected: {
          '25': [
            {
              name: 'Alice',
              age: 25,
            },
            {
              name: 'Charlie',
              age: 25,
            },
          ],
          '30': [
            {
              name: 'Bob',
              age: 30,
            },
          ],
        },
      },
      {
        name: 'groups objects by category',
        input: [
          [
            {
              id: 1,
              category: 'Electronics',
            },
            {
              id: 2,
              category: 'Clothing',
            },
            {
              id: 3,
              category: 'Electronics',
            },
          ],
          'category',
        ],
        expected: {
          Electronics: [
            {
              id: 1,
              category: 'Electronics',
            },
            {
              id: 3,
              category: 'Electronics',
            },
          ],
          Clothing: [
            {
              id: 2,
              category: 'Clothing',
            },
          ],
        },
      },
    ],
    hiddenTestCases: [
      {
        name: 'returns empty object for empty array',
        input: [[], 'anyKey'],
        expected: {},
        isHidden: true,
      },
      {
        name: 'groups by numeric key values',
        input: [
          [
            {
              id: 1,
              value: 10,
            },
            {
              id: 2,
              value: 20,
            },
            {
              id: 3,
              value: 10,
            },
          ],
          'value',
        ],
        expected: {
          '10': [
            {
              id: 1,
              value: 10,
            },
            {
              id: 3,
              value: 10,
            },
          ],
          '20': [
            {
              id: 2,
              value: 20,
            },
          ],
        },
        isHidden: true,
      },
    ],
    hints: [
      `Iterate over array and get key value

* Use \`item[key]\` to get the value to group by.
* Create a new array in the result if key doesn't exist yet.

\`\`\`js
for (const item of arr) {
    const keyValue = item[key];
    if (!result.hasOwnProperty(keyValue)) {
        result[keyValue] = [];
    }
    result[keyValue].push(item);
}
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for groupBy considering constraints and edge cases.',
      code: `function groupBy(arr, key) {
  // Your implementation
}
groupBy(
  [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
  ],
  'age'
);`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '029',
    slug: 'sum',
    title: 'sum()',
    difficulty: 'easy',
    topics: ['Math', 'Design'],
    acceptanceRate: '82%',
    description: `Design a function \`sum\` that can take any number of arguments and return their total. The function should work for both fixed and variable number of arguments using JavaScript features. Only numerical arguments will be provided.

### **Example Inputs & Outputs**  
\`\`\`javascript
sum(1, 2, 3) → 6  
sum(10) → 10  
sum() → 0  
sum(5, -5, 10, 20) → 30  
sum(100, 200, 300, 400) → 1000  
\`\`\`

### **Constraints & Edge Cases**  
- Inputs will always be numbers (integers or floats).  
- No arguments → should return \`0\`.  
- Function must handle a variable number of arguments.  
- Negative numbers should be handled correctly.  
- Must not use built-in \`eval()\` or \`Function()\` constructor.`,
    examples: [
      {
        input: '',
        output: '0',
      },
      {
        input: '10',
        output: '10',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'sum',
    starterCode: {
      javascript: `function sum(...args) {
    // Your implementation
}
`,
      typescript: `function sum(...args: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Base Case - Input: no arguments → Output: 0',
        input: [],
        expected: 0,
      },
      {
        name: 'Single Number - Input: 10 → Output: 10',
        input: [10],
        expected: 10,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Positive Numbers - Input: 1, 2, 3, 4 → Output: 10',
        input: [1, 2, 3, 4],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'Negative Numbers - Input: 10, -5, 3 → Output: 8',
        input: [10, -5, 3],
        expected: 8,
        isHidden: true,
      },
      {
        name: 'Decimal Numbers - Input: 1.5, 2.5 → Output: 4',
        input: [1.5, 2.5],
        expected: 4,
        isHidden: true,
      },
    ],
    hints: [
      `Use Rest Parameters to Accept Any Number of Arguments

Rest parameters allow you to gather all arguments into a single array:

\`\`\`js
function sum(...args) {
  // args is now an array of all passed values
}
\`\`\`

Example:

\`\`\`js
sum(1, 2, 3); // args = [1, 2, 3]
\`\`\``,
      `Use \`reduce\` to Add All Numbers in the Array

The \`reduce()\` method allows you to iterate and accumulate a value from an array:

\`\`\`js
args.reduce((acc, curr) => acc + curr, 0);
\`\`\`

* \`acc\` is the running total
* \`curr\` is the current value in the array
* \`0\` is the starting value
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use the rest operator (\`...args\`) to collect all arguments into an array.  
2. Use the \`reduce()\` method to sum all values.  
3. If there are no arguments, return \`0\`.

### **Solution Code**`,
      code: `function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '030',
    slug: 'implement-a-stack',
    title: 'Implement a Stack',
    difficulty: 'easy',
    topics: ['Stack', 'Math', 'Design'],
    acceptanceRate: '71%',
    description: `Implement a Stack data structure in JavaScript. A stack follows the Last-In-First-Out (LIFO) principle. Your implementation should include the following operations:
- \`push(element)\`: Add an element to the top of the stack and return size
- \`pop()\`: Remove and return the top element from the stack 
- \`peek()\`: Return the top element without removing it
- \`isEmpty()\`: Check if the stack is empty
- \`size()\`: Return the number of elements in the stack
- \`clear()\`: Remove all elements from the stack

### **Example Inputs & Outputs**
\`\`\`javascript
const stack = new Stack();
stack.isEmpty();  // true
stack.push(10);   // 1
stack.push(20);   // 2
stack.push(30);   // 3
stack.size();     // 3
stack.peek();     // 30
stack.pop();      // 30
stack.peek();     // 20
stack.clear();
stack.isEmpty();  // true
\`\`\`

### **Constraints & Edge Cases**
- Handle pop and peek operations on an empty stack
- Ensure proper memory management (no memory leaks)
- The stack should handle any JavaScript data type as elements`,
    examples: [
      {
        input: `["Stack","isEmpty","push","push","size","peek","pop","size"],[[],[],[10],[20],[],[],[],[]]`,
        output: '[null,true,1,2,2,20,20,1]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'Stack',
    isClass: true,
    starterCode: {
      javascript: `class Stack {
    constructor() {
        // Initialize your stack
    }
    
    push(element) {
        // Add element to the top
    }
    
    pop() {
        // Remove and return top element
    }
    
    peek() {
        // Return top element without removing
    }
    
    isEmpty() {
        // Check if stack is empty
    }
    
    size() {
        // Return number of elements
    }
    
    clear() {
        // Remove all elements
    }
}
`,
      typescript: `class Stack {
    constructor() {
        // Initialize your stack
    }
    
    push(element) {
        // Add element to the top
    }
    
    pop() {
        // Remove and return top element
    }
    
    peek() {
        // Return top element without removing
    }
    
    isEmpty() {
        // Check if stack is empty
    }
    
    size() {
        // Return number of elements
    }
    
    clear() {
        // Remove all elements
    }
}
`,
    },
    testCases: [
      {
        name: 'Basic Stack Operations',
        input: [
          ['Stack', 'isEmpty', 'push', 'push', 'size', 'peek', 'pop', 'size'],
          [[], [], [10], [20], [], [], [], []],
        ],
        expected: [null, true, 1, 2, 2, 20, 20, 1],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Clear and Empty Stack',
        input: [
          ['Stack', 'push', 'clear', 'isEmpty'],
          [[], [5], [], []],
        ],
        expected: [null, 1, null, true],
        isHidden: true,
      },
      {
        name: 'Pop and Peek on Empty Stack',
        input: [
          ['Stack', 'pop', 'peek', 'isEmpty'],
          [[], [], [], []],
        ],
        expected: [null, null, null, true],
        isHidden: true,
      },
    ],
    hints: [
      `Initialize the Stack

**Goal**: Internally store stack elements
Use an array to hold stack values.

\`\`\`js
constructor() {
    this.items = [];
}
\`\`\``,
      `\`push(element)\`

**Goal**: Add an element to the top of the stack
Use JavaScript's \`.push()\` method and return the new length.

\`\`\`js
push(element) {
    this.items.push(element);
    return this.items.length;
}
\`\`\``,
      `\`pop()\`

**Goal**: Remove and return the top element
First, check if the stack is empty using \`isEmpty()\`.
If not, use \`.pop()\` to remove the top element.

\`\`\`js
pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
}
\`\`\``,
      `\`peek()\`

**Goal**: Return the top element without removing it
Check if the stack is empty.
If not, return the last item in the array.

\`\`\`js
peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
}
\`\`\``,
      `\`isEmpty()\`

**Goal**: Check whether the stack has any elements
Compare the length of the \`items\` array to 0.

\`\`\`js
isEmpty() {
    return this.items.length === 0;
}
\`\`\``,
      `\`size()\`

**Goal**: Return the number of elements in the stack
Just return the length of the internal array.

\`\`\`js
size() {
    return this.items.length;
}
\`\`\``,
      `\`clear()\`

**Goal**: Remove all elements from the stack
Reassign the internal array to an empty array.

\`\`\`js
clear() {
    this.items = [];
}
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**
1. Use an array to store stack elements
2. Implement push method to add elements to the end of the array
3. Implement pop method to remove and return the last element
4. Implement peek method to return the last element without removing it
5. Implement helper methods for isEmpty, size, and clear operations
6. Handle edge cases like operations on an empty stack

### **Solution Code**`,
      code: `class Stack {
  constructor() {
    // Initialize empty array to store stack elements
    this.items = [];
  }

  /**
   * Add element to the top of the stack
   * @param {*} element - Element to add to the stack
   * @returns {number} New size of the stack
   */
  push(element) {
    this.items.push(element);
    return this.items.length;
  }

  /**
   * Remove and return the top element from the stack
   * @returns {*} The top element of the stack or undefined if empty
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  /**
   * Return the top element without removing it
   * @returns {*} The top element of the stack or undefined if empty
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Check if the stack is empty
   * @returns {boolean} True if stack is empty, false otherwise
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Return the number of elements in the stack
   * @returns {number} Number of elements in the stack
   */
  size() {
    return this.items.length;
  }

  /**
   * Remove all elements from the stack
   */
  clear() {
    this.items = [];
  }
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '031',
    slug: 'power-of-four',
    title: 'Power of Four',
    difficulty: 'easy',
    topics: ['Math'],
    acceptanceRate: '88%',
    description: `Given an integer \`n\`, return \`true\` if it is a power of four. Otherwise, return \`false\`.

A number is a power of four if there exists an integer \`x\` such that \`n === 4^x\`.`,
    examples: [
      {
        input: 'n = 1',
        output: 'true',
        explanation: '4^0 = 1',
      },
      {
        input: 'n = 16',
        output: 'true',
        explanation: '4^2 = 16',
      },
      {
        input: 'n = 8',
        output: 'false',
        explanation: '8 is not a power of 4',
      },
      {
        input: 'n = 0',
        output: 'false',
        explanation: '0 is not a power of 4',
      },
    ],
    constraints: [
      '\\(-2^{31} \\leq n \\leq 2^{31} - 1\\)',
      'Return `false` for:',
      '`n ≤ 0`',
      'Non-integer inputs',
    ],
    functionName: 'isPowerOfFour',
    starterCode: {
      javascript: `function isPowerOfFour(n) {
  // your function implementation
}
`,
      typescript: `function isPowerOfFour(n: any): any {
  // your function implementation
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [1],
        expected: true,
      },
      {
        name: 'should handle base cases',
        input: [4],
        expected: true,
      },
      {
        name: 'should handle base cases',
        input: [0],
        expected: false,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle powers of four',
        input: [16],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [64],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [256],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [1024],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [4096],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [16384],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [65536],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [262144],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [1048576],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [2],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [8],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [32],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [128],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [512],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [2048],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [8192],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [32768],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [100],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-1],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-4],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-16],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-64],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-256],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1073741824],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1073741823],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [268435456],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [268435455],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [12],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [24],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [48],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [96],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [192],
        expected: false,
        isHidden: true,
      },
    ],
    hints: [
      `1. **Handle Edge Cases**  
   Before implementing the power of four check, you should **check for invalid inputs** (negative numbers, zero) and handle base cases properly.

\`\`\`js
// Check for invalid inputs and handle base cases
if (n <= 0) return false;
\`\`\``,
      `2. **Understand Bit Manipulation**  
   A power of four has only one bit set AND that bit must be at an even position.

\`\`\`js
// Powers of 4 in binary:
// 1 = 0001 (bit at position 0 - even)
// 4 = 0100 (bit at position 2 - even)
// 16 = 00010000 (bit at position 4 - even)
// 64 = 01000000 (bit at position 6 - even)
\`\`\``,
      `3. **Implement Bit Manipulation**  
   Use bitwise operations to check both conditions: power of 2 AND even bit position.

\`\`\`js
// Check: power of 2 (only one bit set) AND bit is at even position
return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
\`\`\``,
    ],
    solution: {
      explanation: `#### Approach
A power of four has **only one bit set** and that bit must be at an **even position**. Use bitwise operations to check both conditions.

#### Algorithm
- Check if \`n > 0\` (powers of 4 are always positive)
- Check if \`n\` is a power of 2: \`(n & (n - 1)) === 0\`
- Check if the bit is at even position: \`(n & 0x55555555) !== 0\`

#### Code`,
      code: `function isPowerOfFour(n) {
  // Check: power of 2 (only one bit set) AND bit is at even position
  return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}`,
      complexity: {
        time: '** O(1)',
        space: '** O(1)',
      },
    },
  },
  {
    id: '032',
    slug: 'count-even-numbers',
    title: 'Count even numbers',
    difficulty: 'easy',
    topics: ['Array', 'Math'],
    acceptanceRate: '77%',
    description:
      'Given an array arr of numbers, return the count of elements that are even integers (divisible by 2). The value 0 counts as even.',
    examples: [
      {
        input: 'arr = [1, 2, 3, 4]',
        output: '2',
      },
      {
        input: 'arr = [-2, -5, -8]',
        output: '2',
      },
      {
        input: 'arr = [0, 2, 3]',
        output: '2',
      },
      {
        input: 'arr = []',
        output: '0',
      },
    ],
    constraints: [
      'Input must be an array of finite numbers',
      'Count only numbers that are integers and divisible by 2',
      'Return false for non-array inputs',
      'Return false for arrays containing non-number values',
      'Return false forarrays containing NaN, Infinity, or -Infinity',
    ],
    functionName: 'countEvens',
    starterCode: {
      javascript: `function countEvens(arr) {
  // your solution here
}
`,
      typescript: `function countEvens(arr: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'Base Case - Input: [] → Output: 0',
        input: [[]],
        expected: 0,
      },
      {
        name: 'Base Case - Input: [2] → Output: 1',
        input: [[2]],
        expected: 1,
      },
      {
        name: 'Base Case - Input: [1] → Output: 0',
        input: [[1]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Mixed Array - Input: [1, 2, 3, 4] → Output: 2',
        input: [[1, 2, 3, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Mixed Array - Input: [-5, 2, -3, 4] → Output: 2',
        input: [[-5, 2, -3, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Mixed Array - Input: [3, -1, -2, 5, -6, 0] → Output: 3',
        input: [[3, -1, -2, 5, -6, 0]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'All Even - Input: [2, 4, 6] → Output: 3',
        input: [[2, 4, 6]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'No Even - Input: [1, 3, 5] → Output: 0',
        input: [[1, 3, 5]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Decimal Numbers - Input: [2.0, 2.2, 4.5, 4] → Output: 2',
        input: [[2, 2.2, 4.5, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Decimal Numbers - Input: [-2.0, -3.1, -4] → Output: 2',
        input: [[-2, -3.1, -4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Zero Values - Input: [0] → Output: 1',
        input: [[0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Zero Values - Input: [0, 0, 0] → Output: 3',
        input: [[0, 0, 0]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Zero Values - Input: new Array(10).fill(0) → Output: 10',
        input: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: null → Output: false',
        input: [null],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: 42 → Output: false',
        input: [42],
        expected: false,
        isHidden: true,
      },
      {
        name: `Invalid Input - Input: "8" → Output: false`,
        input: ['8'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: {} → Output: false',
        input: [{}],
        expected: false,
        isHidden: true,
      },
      {
        name: `Invalid Input - Input: [1, "a"] → Output: false`,
        input: [[1, 'a']],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Invalid Input - Input: [NaN] → Output: false',
        input: [[null]],
        expected: false,
        isHidden: true,
      },
      {
        name: 'Large Array - Input: Array(1000) (i - 500) → Output: 500',
        input: [
          [
            -500, -499, -498, -497, -496, -495, -494, -493, -492, -491, -490,
            -489, -488, -487, -486, -485, -484, -483, -482, -481, -480, -479,
            -478, -477, -476, -475, -474, -473, -472, -471, -470, -469, -468,
            -467, -466, -465, -464, -463, -462, -461, -460, -459, -458, -457,
            -456, -455, -454, -453, -452, -451, -450, -449, -448, -447, -446,
            -445, -444, -443, -442, -441, -440, -439, -438, -437, -436, -435,
            -434, -433, -432, -431, -430, -429, -428, -427, -426, -425, -424,
            -423, -422, -421, -420, -419, -418, -417, -416, -415, -414, -413,
            -412, -411, -410, -409, -408, -407, -406, -405, -404, -403, -402,
            -401, -400, -399, -398, -397, -396, -395, -394, -393, -392, -391,
            -390, -389, -388, -387, -386, -385, -384, -383, -382, -381, -380,
            -379, -378, -377, -376, -375, -374, -373, -372, -371, -370, -369,
            -368, -367, -366, -365, -364, -363, -362, -361, -360, -359, -358,
            -357, -356, -355, -354, -353, -352, -351, -350, -349, -348, -347,
            -346, -345, -344, -343, -342, -341, -340, -339, -338, -337, -336,
            -335, -334, -333, -332, -331, -330, -329, -328, -327, -326, -325,
            -324, -323, -322, -321, -320, -319, -318, -317, -316, -315, -314,
            -313, -312, -311, -310, -309, -308, -307, -306, -305, -304, -303,
            -302, -301, -300, -299, -298, -297, -296, -295, -294, -293, -292,
            -291, -290, -289, -288, -287, -286, -285, -284, -283, -282, -281,
            -280, -279, -278, -277, -276, -275, -274, -273, -272, -271, -270,
            -269, -268, -267, -266, -265, -264, -263, -262, -261, -260, -259,
            -258, -257, -256, -255, -254, -253, -252, -251, -250, -249, -248,
            -247, -246, -245, -244, -243, -242, -241, -240, -239, -238, -237,
            -236, -235, -234, -233, -232, -231, -230, -229, -228, -227, -226,
            -225, -224, -223, -222, -221, -220, -219, -218, -217, -216, -215,
            -214, -213, -212, -211, -210, -209, -208, -207, -206, -205, -204,
            -203, -202, -201, -200, -199, -198, -197, -196, -195, -194, -193,
            -192, -191, -190, -189, -188, -187, -186, -185, -184, -183, -182,
            -181, -180, -179, -178, -177, -176, -175, -174, -173, -172, -171,
            -170, -169, -168, -167, -166, -165, -164, -163, -162, -161, -160,
            -159, -158, -157, -156, -155, -154, -153, -152, -151, -150, -149,
            -148, -147, -146, -145, -144, -143, -142, -141, -140, -139, -138,
            -137, -136, -135, -134, -133, -132, -131, -130, -129, -128, -127,
            -126, -125, -124, -123, -122, -121, -120, -119, -118, -117, -116,
            -115, -114, -113, -112, -111, -110, -109, -108, -107, -106, -105,
            -104, -103, -102, -101, -100, -99, -98, -97, -96, -95, -94, -93,
            -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80,
            -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67,
            -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54,
            -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41,
            -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28,
            -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15,
            -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
            72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
            89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
            131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
            144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
            157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
            170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
            183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
            196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
            209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
            222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
            235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
            248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260,
            261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
            274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286,
            287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299,
            300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312,
            313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325,
            326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
            339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351,
            352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364,
            365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
            378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390,
            391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403,
            404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416,
            417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429,
            430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442,
            443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455,
            456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
            469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481,
            482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494,
            495, 496, 497, 498, 499,
          ],
        ],
        expected: 500,
        isHidden: true,
      },
      {
        name: 'Large Array - Input: 100 Even Numbers → Output: 100',
        input: [
          [
            0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
            36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68,
            70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
            102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126,
            128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152,
            154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178,
            180, 182, 184, 186, 188, 190, 192, 194, 196, 198,
          ],
        ],
        expected: 100,
        isHidden: true,
      },
      {
        name: 'Large Array - Input: 100 Odd Numbers → Output: 0',
        input: [
          [
            1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
            37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69,
            71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101,
            103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127,
            129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153,
            155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179,
            181, 183, 185, 187, 189, 191, 193, 195, 197, 199,
          ],
        ],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Same Values - Input: [5, 5, 5, 5] → Output: 0',
        input: [[5, 5, 5, 5]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Same Values - Input: [2, 2, 2] → Output: 3',
        input: [[2, 2, 2]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Same Values - Input: [0, 0, 0, 0] → Output: 4',
        input: [[0, 0, 0, 0]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [-2, 1, 3, 5] → Output: 1',
        input: [[-2, 1, 3, 5]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [1, 2, -3, 4] → Output: 2',
        input: [[1, 2, -3, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [1, 3, 5, -4] → Output: 1',
        input: [[1, 3, 5, -4]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Position Check - Input: [-2, 1, -4, 3, -6] → Output: 3',
        input: [[-2, 1, -4, 3, -6]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Non-Integer Values - Input: [1.2, 2.2, 3.8] → Output: 0',
        input: [[1.2, 2.2, 3.8]],
        expected: 0,
        isHidden: true,
      },
    ],
    hints: [
      `### Edge Cases First
\`\`\`js
if (!Array.isArray(arr)) return false; // Validate input type
\`\`\``,
      `### Input Validation
- Ensure every element is a finite number
- Reject arrays containing NaN, Infinity, -Infinity, or non-number values`,
      `### Core Algorithm
\`\`\`js
let count = 0;
for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
  if (Number.isInteger(value) && value % 2 === 0) count++;
}
return count;
\`\`\``,
      `### Alternative Approaches

\`\`\`js
return arr.filter(x => Number.isInteger(x) && x % 2 === 0).length; // Functional
// or
return arr.reduce((c, x) => c + (Number.isInteger(x) && x % 2 === 0 ? 1 : 0), 0); // Reduce
\`\`\``,
    ],
    solution: {
      explanation: `#### Approach

Iterate once, increment a counter when an element is an even integer.

#### Algorithm
- Validate input is an array of finite numbers.
- Initialize count = 0.
- Loop through elements; increment count when Number.isInteger(value) && value % 2 === 0.
- Return count.

#### Code`,
      code: `function countEvens(arr) {
  if (!Array.isArray(arr)) return false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (Number.isInteger(value) && value % 2 === 0) count++;
  }
  return count;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '033',
    slug: 'capitalize-words',
    title: 'Capitalize Words',
    difficulty: 'easy',
    topics: ['String'],
    acceptanceRate: '66%',
    description: `Write a function that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized, and the rest of the letters are in lowercase.

**Input:** A string \`sentence\` containing one or more words separated by spaces.  
**Output:** A new string where each word starts with an uppercase letter followed by lowercase letters.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
Input: "hello world"
Output: "Hello World"

// Example 2:
Input: "javaScript is FUN"
Output: "Javascript Is Fun"

// Example 3:
Input: "   multiple   spaces  "
Output: "Multiple Spaces"

// Example 4:
Input: ""
Output: ""
\`\`\`

### **Constraints & Edge Cases**  
- Input may have multiple spaces between words.
- Input may contain uppercase, lowercase, or mixed-case characters.
- Input can be an empty string.
- Words can contain letters only; punctuation is not considered in this challenge.
- Leading/trailing spaces should be trimmed in the final result.`,
    examples: [
      {
        input: `"hello world"`,
        output: `"Hello World"`,
      },
      {
        input: `"javaScript is FUN"`,
        output: `"Javascript Is Fun"`,
      },
      {
        input: `"   multiple   spaces  "`,
        output: `"Multiple Spaces"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'capitalizeWords',
    starterCode: {
      javascript: `function capitalizeWords(sentence) {
    // Your implementation
}
`,
      typescript: `function capitalizeWords(sentence: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Capitalizes all words in lowercase input',
        input: ['hello world'],
        expected: 'Hello World',
      },
      {
        name: 'Handles mixed case input',
        input: ['javaScript is FUN'],
        expected: 'Javascript Is Fun',
      },
      {
        name: 'Removes extra spaces between words',
        input: ['   multiple   spaces  '],
        expected: 'Multiple Spaces',
      },
    ],
    hiddenTestCases: [
      {
        name: 'Returns empty string for empty input',
        input: [''],
        expected: '',
        isHidden: true,
      },
      {
        name: 'Handles all caps input',
        input: ['THIS IS A TEST'],
        expected: 'This Is A Test',
        isHidden: true,
      },
      {
        name: 'Trims and capitalizes words properly',
        input: ['   hello   '],
        expected: 'Hello',
        isHidden: true,
      },
    ],
    hints: [
      `Split sentence into words
   Use \`.split(/\\s+/)\` to split by one or more spaces, so multiple spaces don’t create empty words.

\`\`\`js
const words = sentence.trim().split(/\\s+/);
\`\`\``,
      `Capitalize each word
   For each word, uppercase the first letter and lowercase the rest:

\`\`\`js
words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
\`\`\``,
      `Join words back
   Use \`.join(' ')\` to combine the words array into a string with spaces between:

\`\`\`js
const result = capitalizedWords.join(' ');
\`\`\`
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Trim the input string to remove extra spaces from the start and end.
2. Split the string into words using a regular expression or space.
3. For each word, capitalize the first letter and lowercase the rest.
4. Join the transformed words back into a sentence with a single space.

### **Solution Code**`,
      code: `function capitalizeWords(sentence) {
    return sentence
        .trim()
        .split(/\\s+/) // split by one or more spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '034',
    slug: 'power-of-two',
    title: 'Power of Two',
    difficulty: 'easy',
    topics: ['Math'],
    acceptanceRate: '83%',
    description: `Determine if a given integer is a power of two using efficient bit manipulation techniques.

### Problem

Given an integer \`n\`, return \`true\` if it is a power of two. Otherwise, return \`false\`.

A number is a power of two if there exists an integer \`x\` such that \`n === 2^x\`.`,
    examples: [
      {
        input: 'n = 1',
        output: 'true',
        explanation: '2^0 = 1',
      },
    ],
    constraints: [
      '-2^31 ≤ n ≤ 2^31 - 1',
      'Return `false` for:',
      'n ≤ 0',
      'non-integer inputs',
    ],
    functionName: 'isPowerOfTwo',
    starterCode: {
      javascript: `function isPowerOfTwo(n) {
  
}
`,
      typescript: `function isPowerOfTwo(n: any): any {
  
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [1],
        expected: true,
      },
      {
        name: 'should handle base cases',
        input: [2],
        expected: true,
      },
      {
        name: 'should handle base cases',
        input: [0],
        expected: false,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle powers of two',
        input: [4],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [8],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [16],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [32],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [64],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [128],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [256],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [512],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of two',
        input: [1024],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [3],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [5],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [6],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [7],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [9],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [10],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [15],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [18],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of two',
        input: [100],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-1],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-2],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-4],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-8],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-16],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1073741824],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [2147483648],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [2147483647],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1073741823],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [12],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [24],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [48],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [96],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [192],
        expected: false,
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `#### Approach
A power of two has **only one bit set** in its binary representation. We can use the bitwise AND operation to check this property.

#### Algorithm
1. Check if \`n <= 0\` (powers of 2 are always positive)
2. Use \`n & (n - 1)\` to remove the lowest set bit
3. If the result is 0, \`n\` had only one bit set → power of 2

#### Code`,
      code: `function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}`,
      complexity: {
        time: 'O(1)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '035',
    slug: 'count-vowels',
    title: 'Count Vowels',
    difficulty: 'easy',
    topics: ['String', 'Math'],
    acceptanceRate: '72%',
    description: `Write a function \`countVowels\` that takes a string as input and returns the number of vowels in that string. Vowels include both lowercase and uppercase characters: \`'a', 'e', 'i', 'o', 'u'\` and \`'A', 'E', 'I', 'O', 'U'\`.  

### **Example Inputs & Outputs**  
\`\`\`javascript
countVowels("hello")         // → 2  (e, o)
countVowels("JavaScript")    // → 3  (a, a, i)
countVowels("bcd")           // → 0
countVowels("AEIOU")         // → 5
countVowels("")              // → 0
\`\`\`

### **Constraints & Edge Cases**  
- Input will always be a string.
- String may contain spaces, punctuation, or numbers — these are not vowels.
- Function should be case-insensitive (handle both uppercase and lowercase).
- An empty string should return \`0\`.`,
    examples: [
      {
        input: `"hello"`,
        output: '2',
      },
      {
        input: `"JavaScript"`,
        output: '3',
      },
      {
        input: `"bcd"`,
        output: '0',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'countVowels',
    starterCode: {
      javascript: `function countVowels(str) {
    // Your implementation
}
`,
      typescript: `function countVowels(str: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: `counts vowels in "hello"`,
        input: ['hello'],
        expected: 2,
      },
      {
        name: `counts vowels in "JavaScript"`,
        input: ['JavaScript'],
        expected: 3,
      },
      {
        name: `returns 0 for "bcd"`,
        input: ['bcd'],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: `counts vowels in "AEIOU"`,
        input: ['AEIOU'],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'returns 0 for empty string',
        input: [''],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'ignores non-alphabet characters',
        input: ['123!@#ae'],
        expected: 2,
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `### **Approach**  
1. Define a set of vowels (including both lowercase and uppercase).
2. Initialize a counter to 0.
3. Loop through each character of the string.
4. Check if the character is in the vowel set.
5. If yes, increment the counter.
6. Return the final counter.

### **Solution Code**`,
      code: `function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '036',
    slug: 'sum-of-all-numbers-in-an-array',
    title: 'Sum of all numbers in an array',
    difficulty: 'easy',
    topics: ['Array', 'Hash Map', 'Math', 'Binary Search'],
    acceptanceRate: '89%',
    description:
      'Given an array arr of valid finite numbers, return the sum of all elements.',
    examples: [
      {
        input: 'arr = [1, 2, 3]',
        output: '6',
      },
      {
        input: 'arr = [5]',
        output: '5',
      },
      {
        input: 'arr = []',
        output: '0',
      },
      {
        input: 'arr = [-1, 5, -4]',
        output: '0',
      },
    ],
    constraints: [
      'Input is always a valid array.',
      'All elements are guaranteed to be finite numbers.',
      'No need to validate for invalid inputs.',
    ],
    functionName: 'sumArray',
    starterCode: {
      javascript: `function sumArray(arr) {
  function helper(i) {
    // your solution here
  }
  return helper(0);
}
`,
      typescript: `function sumArray(arr: any): any {
  function helper(i) {
    // your solution here
  }
  return helper(0);
}
`,
    },
    testCases: [
      {
        name: 'should handle empty array',
        input: [[]],
        expected: 0,
      },
      {
        name: 'should handle single element',
        input: [[5]],
        expected: 5,
      },
      {
        name: 'should handle single element',
        input: [[0]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle small arrays',
        input: [[1, 2]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle small arrays',
        input: [[1, 2, 3]],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle small arrays',
        input: [[2, 4, 6]],
        expected: 12,
        isHidden: true,
      },
      {
        name: 'should handle arrays with mixed positive and negative numbers',
        input: [[-1, 2, -3, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle arrays with mixed positive and negative numbers',
        input: [[10, -5, 5, -10]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle larger arrays',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
        expected: 55,
        isHidden: true,
      },
      {
        name: 'should handle larger arrays',
        input: [[10, 20, 30, 40, 50]],
        expected: 150,
        isHidden: true,
      },
    ],
    hints: [
      `### Identify the Base Case
\`\`\`js
if (arr.length === 0) return 0;
\`\`\`

- When the array becomes empty, recursion should stop.`,
      `### Recursive Breakdown

- Take the first element
- Add it to the sum of the rest of the array
- Let recursion handle the remaining part`,
      `### Core Algorithm
- return arr[0] + sumArray(arr.slice(1));`,
      `### Alternative Approach (Pointer-Based)
- Instead of slicing (which creates new arrays), use an index:
\`\`\`js
function helper(arr, i) {
  if (i === arr.length) return 0;
  return arr[i] + helper(arr, i + 1);
}
\`\`\`

- Remember: The key idea is to reduce the problem size recursively until nothing remains.`,
    ],
    solution: {
      explanation: `### Recursive Approach (Primary)

#### Approach
- Use a recursive helper that processes one element at a time:
- Base case: if index reaches array length, return 0.
- Recursive step: return arr[i] + helper(i + 1).

### Algorithm
- Start recursion from index 0.
- If index equals length → return 0.
- Otherwise return arr[i] + helper(i + 1).

### Code`,
      code: `function sumArray(arr) {
  function helper(i) {
    if (i === arr.length) return 0;
    return arr[i] + helper(i + 1);
  }

  return helper(0);
}`,
      complexity: {
        time: '- Base case: if index reaches array length, return 0.',
        space: 'O(1)',
      },
    },
  },
  {
    id: '037',
    slug: 'find-missing-number',
    title: 'Find Missing Number',
    difficulty: 'easy',
    topics: ['Array', 'Math'],
    acceptanceRate: '78%',
    description: `You are given an array containing \`n\` distinct numbers taken from the range \`0\` to \`n\`. This means the array should ideally contain all numbers from \`0\` to \`n\`, but one number is missing. Your task is to find and return that missing number.

**Input:** An array of \`n\` integers where each integer is unique and lies between \`0\` and \`n\` (inclusive) except for one missing number.  
**Output:** Return the missing number.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
Input: [3, 0, 1]
Output: 2

// Example 2:
Input: [0, 1]
Output: 2

// Example 3:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

// Example 4:
Input: [0]
Output: 1
\`\`\`

### **Constraints & Edge Cases**  
- The array contains exactly \`n\` numbers.
- All numbers are unique.
- Numbers are in the range \`0\` to \`n\`.
- Only one number is missing from the sequence.
- The array may be in any order.
- Edge case: missing number could be \`0\` or \`n\`.`,
    examples: [
      {
        input: '[3,0,1]',
        output: '2',
      },
      {
        input: '[0,1]',
        output: '2',
      },
      {
        input: '[9,6,4,2,3,5,7,0,1]',
        output: '8',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'findMissingNumber',
    starterCode: {
      javascript: `function findMissingNumber(nums) {
    // Your implementation
}
`,
      typescript: `function findMissingNumber(nums: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Should return 2 for [3, 0, 1]',
        input: [[3, 0, 1]],
        expected: 2,
      },
      {
        name: 'Should return 2 for [0, 1]',
        input: [[0, 1]],
        expected: 2,
      },
      {
        name: 'Should return 8 for [9,6,4,2,3,5,7,0,1]',
        input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]],
        expected: 8,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Should return 0 for [1]',
        input: [[1]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Should return 1 for [0]',
        input: [[0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Should return 6 for [0,1,2,3,4,5,7,8,9]',
        input: [[0, 1, 2, 3, 4, 5, 7, 8, 9]],
        expected: 6,
        isHidden: true,
      },
    ],
    hints: [
      `Calculate expected sum of numbers 0 to n
   Use the formula for the sum of first n natural numbers:

\`\`\`js
const n = nums.length;
const expectedSum = (n * (n + 1)) / 2;
\`\`\``,
      `Calculate actual sum of given array
   Use \`.reduce\` to sum all numbers in the array:

\`\`\`js
const actualSum = nums.reduce((acc, num) => acc + num, 0);
\`\`\``,
      `Find missing number by difference
   Subtract actual sum from expected sum to get the missing number:

\`\`\`js
return expectedSum - actualSum;
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Calculate the expected sum of the first \`n\` natural numbers using the formula: \`n * (n + 1) / 2\`.
2. Calculate the actual sum of the numbers in the array.
3. Subtract the actual sum from the expected sum to find the missing number.

### **Solution Code**`,
      code: `function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '038',
    slug: 'shuffle',
    title: 'shuffle()',
    difficulty: 'easy',
    topics: ['Array'],
    acceptanceRate: '67%',
    description: `Write a function \`shuffle\` that accepts an array and returns a new array with the elements in randomized order. Ensure that all elements from the original array are present exactly once and that the original array is not mutated.

### **Example Inputs & Outputs**  
\`\`\`javascript
Input: [1, 2, 3, 4, 5]
Possible Output: [3, 1, 5, 2, 4]

Input: ['a', 'b', 'c']
Possible Output: ['b', 'c', 'a']
\`\`\`

### **Constraints & Edge Cases**  
- The function should return a new array (do **not** mutate the original).
- All original elements must be present exactly once.
- An empty array should return an empty array.
- Input array may contain duplicates (handle gracefully).
- The output should be randomized on each function call.`,
    examples: [
      {
        input: '[1,2,3]',
        output: '[1,2,3]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'shuffle',
    starterCode: {
      javascript: `function shuffle(array) {
    // Your implementation
}
`,
      typescript: `function shuffle(array: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'does not mutate original array',
        input: [[1, 2, 3]],
        expected: [1, 2, 3],
      },
    ],
    hiddenTestCases: [
      {
        name: 'handles empty array',
        input: [[]],
        expected: [],
        isHidden: true,
      },
    ],
    hints: [
      `Copy the Array

Avoid modifying the original array.

\`\`\`js
const result = array.slice(); // shallow copy
\`\`\`
`,
      `Iterate backwards and swap each element with a random earlier one (including itself):

\`\`\`js
for (let i = result.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1)); // random index
  [result[i], result[j]] = [result[j], result[i]]; // swap
}
\`\`\``,
      `Return the Shuffled Copy

\`\`\`js
return result;
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Copy the input array to avoid mutation.
2. Use the **Fisher–Yates Shuffle Algorithm** for uniform randomness:
   - Iterate from the end of the array to the beginning.
   - For each index, generate a random index and swap the two elements.

### **Solution Code**`,
      code: `function shuffle(array) {
  const result = array.slice(); // make a copy
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // swap
  }
  return result;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '039',
    slug: 'largest-number-formed',
    title: 'Largest number formed',
    difficulty: 'easy',
    topics: ['Array', 'String', 'Math'],
    acceptanceRate: '84%',
    description: `Write a function that arranges a list of **non-negative integers** to form the **largest possible number**.
Given an array of integers, rearrange them such that when concatenated, they produce the **maximum possible numeric value**.

### Input

* An array \`arr\` of non-negative integers.

### Output

* A **string** representing the **largest number** that can be formed by arranging the given integers.`,
    examples: [
      {
        input: '[3,30,34,5,9]',
        output: `"9534330"`,
      },
      {
        input: '[10,2]',
        output: `"210"`,
      },
      {
        input: '[0,0,0]',
        output: `"0"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'formLargestNumber',
    starterCode: {
      javascript: `function formLargestNumber(arr) {
  //write your implementation here
}
const input = [3, 30, 34, 5, 9];
`,
      typescript: `function formLargestNumber(arr: any): any {
  //write your implementation here
}
const input = [3, 30, 34, 5, 9];
`,
    },
    testCases: [
      {
        name: `Should return "9534330" for [3, 30, 34, 5, 9]`,
        input: [[3, 30, 34, 5, 9]],
        expected: '9534330',
      },
      {
        name: `Should return "210" for [10, 2]`,
        input: [[10, 2]],
        expected: '210',
      },
      {
        name: `Should return "0" for [0, 0, 0]`,
        input: [[0, 0, 0]],
        expected: '0',
      },
    ],
    hiddenTestCases: [
      {
        name: `Should return "60548546654" for [54, 546, 548, 60]`,
        input: [[54, 546, 548, 60]],
        expected: '6054854654',
        isHidden: true,
      },
      {
        name: `Should return "1" for [1]`,
        input: [[1]],
        expected: '1',
        isHidden: true,
      },
      {
        name: `Should return "43432" for [432, 43]`,
        input: [[432, 43]],
        expected: '43432',
        isHidden: true,
      },
      {
        name: `Should return "9876543210" for [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]`,
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]],
        expected: '9876543210',
        isHidden: true,
      },
      {
        name: `Should return "9870" for [0, 9, 8, 7]`,
        input: [[0, 9, 8, 7]],
        expected: '9870',
        isHidden: true,
      },
      {
        name: `Should return "8989898898" for [8, 89, 898, 8989]`,
        input: [[8, 89, 898, 8989]],
        expected: '8989898988',
        isHidden: true,
      },
      {
        name: `Should return "12121" for [12, 121]`,
        input: [[12, 121]],
        expected: '12121',
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `### Approach

1. **Convert all numbers to strings** for easier concatenation and comparison.
2. **Sort** the array using a **custom comparator** that compares two possible concatenations:

   * For two numbers \`a\` and \`b\`, compare \`a + b\` vs \`b + a\`.
   * Whichever combination is larger determines the order.
3. **Edge case**: If all numbers are zeros (e.g., \`[0, 0, 0]\`), the result should be \`"0"\`, not \`"000"\`.
4. **Join** all the sorted strings together to form the final result.



### Solution Code`,
      code: `function formLargestNumber(arr) {
  // Convert all numbers to strings
  const nums = arr.map((num) => num.toString());

  // Sort using custom comparator
  nums.sort((a, b) => {
    return (b + a).localeCompare(a + b);
  });

  // Handle edge case: if all numbers are 0
  if (nums[0] === '0') {
    return '0';
  }

  // Join all numbers to form the largest number
  return nums.join('');
}

const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input)); // Output: "9534330"`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '040',
    slug: 'secret-code-shuffler',
    title: 'Secret Code Shuffler',
    difficulty: 'easy',
    topics: ['String', 'Hash Map'],
    acceptanceRate: '73%',
    description: `You are given a string where each pair of characters represents a letter and a shift value.  
- The first character in each pair is a lowercase letter.
- The second character is a digit (0-9) representing how many positions to shift the letter in the ASCII character set.`,
    examples: [
      {
        input: `s = "a2b3c1"`,
        output: `"ced"`,
        explanation: `- "a2": 'a' (97) + 2 = 99 = 'c'`,
      },
      {
        input: `s = "x1y2z3"`,
        output: `"y{}"`,
        explanation: `- "x1": 'x' (120) + 1 = 121 = 'y'`,
      },
      {
        input: `s = "a0b0c0"`,
        output: `"abc"`,
        explanation: 'Zero shifts leave letters unchanged',
      },
    ],
    constraints: [
      '`0 ≤ s.length ≤ 1000`',
      'String length must be even (complete pairs)',
      'Only lowercase letters (`a`-`z`) in odd positions',
      'Only digits (`0`-`9`) in even positions',
    ],
    functionName: 'decodeSecretCode',
    starterCode: {
      javascript: `function decodeSecretCode(s) {
  // your solution
}
`,
      typescript: `function decodeSecretCode(s: any): any {
  // your solution
}
`,
    },
    testCases: [
      {
        name: 'should handle empty string',
        input: [''],
        expected: '',
      },
      {
        name: 'should handle empty string',
        input: [null],
        expected: '',
      },
      {
        name: 'should handle basic shifting',
        input: ['a1c1e1'],
        expected: 'bdf',
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle basic shifting',
        input: ['a2x3'],
        expected: 'c{',
        isHidden: true,
      },
      {
        name: 'should handle zero shifts',
        input: ['a0b0c0'],
        expected: 'abc',
        isHidden: true,
      },
      {
        name: 'should handle zero shifts',
        input: ['x0y0z0'],
        expected: 'xyz',
        isHidden: true,
      },
      {
        name: 'should handle large shifts',
        input: ['a9b9'],
        expected: 'jk',
        isHidden: true,
      },
      {
        name: 'should handle large shifts',
        input: ['a5b5'],
        expected: 'fg',
        isHidden: true,
      },
      {
        name: 'should handle single character with shift',
        input: ['a1'],
        expected: 'b',
        isHidden: true,
      },
      {
        name: 'should handle single character with shift',
        input: ['z1'],
        expected: '{',
        isHidden: true,
      },
      {
        name: 'should handle multiple characters',
        input: ['a1b2c3d4'],
        expected: 'bdfh',
        isHidden: true,
      },
      {
        name: 'should handle multiple characters',
        input: ['x1y2z3'],
        expected: 'y{}',
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: ['a0'],
        expected: 'a',
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: ['z0'],
        expected: 'z',
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: ['a9'],
        expected: 'j',
        isHidden: true,
      },
      {
        name: 'should handle odd length strings',
        input: ['a1b'],
        expected: '',
        isHidden: true,
      },
      {
        name: 'should handle odd length strings',
        input: ['a'],
        expected: '',
        isHidden: true,
      },
      {
        name: 'should handle complex patterns',
        input: ['a1b2c3d4e5'],
        expected: 'bdfhj',
        isHidden: true,
      },
      {
        name: 'should handle complex patterns',
        input: ['x1y2z3a4'],
        expected: 'y{}e',
        isHidden: true,
      },
      {
        name: 'should handle all zeros',
        input: ['a0b0c0d0'],
        expected: 'abcd',
        isHidden: true,
      },
      {
        name: 'should handle maximum shifts',
        input: ['a9b9c9'],
        expected: 'jkl',
        isHidden: true,
      },
      {
        name: 'should handle maximum shifts',
        input: ['z1a9'],
        expected: '{j',
        isHidden: true,
      },
    ],
    hints: [
      `1. **Handle Edge Cases**  
   Before implementing the decoder, you should **check for invalid inputs** (empty strings, odd length, null values) and handle base cases properly.

\`\`\`js
// Check for invalid inputs and handle base cases
if (!s || s.length === 0 || s.length % 2 !== 0) return '';
\`\`\``,
      `2. **Initialize the Result**  
   Start with an empty string to build the decoded result.

\`\`\`js
// Initialize with empty string
let result = '';
\`\`\``,
      `3. **Process Character Pairs**  
   Use a loop to process the string in pairs of two characters.

\`\`\`js
// Process string in pairs
for (let i = 0; i < s.length; i += 2) {
  const letter = s[i];
  const shift = parseInt(s[i + 1]);
  
  // Check if current character is a letter
  if (letter >= 'a' && letter <= 'z') {
    // Calculate new character code
    const newCharCode = letter.charCodeAt(0) + shift;
    result += String.fromCharCode(newCharCode);
  }
}
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for decodeSecretCode considering constraints and edge cases.',
      code: `function decodeSecretCode(s) {
  if (!s || s.length === 0 || s.length % 2 !== 0) {
    return '';
  }

  let result = '';

  for (let i = 0; i < s.length; i += 2) {
    const letter = s[i];
    const shift = parseInt(s[i + 1]);

    // Check if current character is a letter
    if (letter >= 'a' && letter <= 'z') {
      // Calculate new character code
      const newCharCode = letter.charCodeAt(0) + shift;
      result += String.fromCharCode(newCharCode);
    }
  }

  return result;
}`,
      complexity: {
        time: '** O(n) where n is the string length',
        space: '** O(n) for the result string',
      },
    },
  },
  {
    id: '041',
    slug: 'fibonacci-series',
    title: 'Fibonacci Series',
    difficulty: 'easy',
    topics: ['Array', 'Dynamic Programming', 'Math'],
    acceptanceRate: '90%',
    description: `The **Fibonacci sequence** is a series of numbers where each number is the sum of the two preceding ones. It starts with \`0\` and \`1\`. That is:

\`\`\`js
F(0) = 0  
F(1) = 1  
F(n) = F(n - 1) + F(n - 2) for n > 1
\`\`\`

Given an integer \`n\`, return an array containing the first \`n\` Fibonacci numbers, starting from \`0\`.`,
    examples: [
      {
        input: 'n = 5',
        output: '[0, 1, 1, 2, 3]',
      },
    ],
    constraints: [
      '0 ≤ n ≤ 50',
      'Return an empty array `[]` for:',
      'n ≤ 0',
      'non-integer inputs',
      'Return `[0]` for `n = 1`',
    ],
    functionName: 'generateFibonacci',
    starterCode: {
      javascript: `function generateFibonacci(n) {
  
}
`,
      typescript: `function generateFibonacci(n: any): any {
  
}
`,
    },
    testCases: [
      {
        name: 'should return empty array for n = 0',
        input: [0],
        expected: [],
      },
      {
        name: 'should return [0] for n = 1',
        input: [1],
        expected: [0],
      },
      {
        name: 'should return [0, 1] for n = 2',
        input: [2],
        expected: [0, 1],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should return [0, 1, 1] for n = 3',
        input: [3],
        expected: [0, 1, 1],
        isHidden: true,
      },
      {
        name: 'should return [0, 1, 1, 2, 3] for n = 5',
        input: [5],
        expected: [0, 1, 1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should return [0, 1, 1, 2, 3, 5, 8, 13] for n = 8',
        input: [8],
        expected: [0, 1, 1, 2, 3, 5, 8, 13],
        isHidden: true,
      },
      {
        name: 'should return correct sequence for n = 10',
        input: [10],
        expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        isHidden: true,
      },
      {
        name: 'should handle negative numbers gracefully',
        input: [-1],
        expected: [],
        isHidden: true,
      },
      {
        name: 'should handle negative numbers gracefully',
        input: [-5],
        expected: [],
        isHidden: true,
      },
    ],
    hints: [
      `Before building the sequence, you should **check for invalid inputs** (negative numbers, non-integers, zero) and handle base cases properly.

\`\`\`javascript
// Check for invalid inputs and handle base cases
if (n <= 0 || !Number.isInteger(n)) return [];
if (n === 1) return [0];
\`\`\``,
      `Start with the first two Fibonacci numbers and build the rest iteratively.

\`\`\`javascript
// Initialize with first two numbers
const result = [0, 1];
\`\`\``,
      `Use a loop to generate each subsequent number by adding the previous two numbers.

\`\`\`javascript
// Generate remaining numbers
for (let i = 2; i < n; i++) {
  result.push(result[i-1] + result[i-2]);
}
\`\`\``,
    ],
    solution: {
      explanation: '### File: `Fibonacci.js`',
      code: `function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '042',
    slug: 'factorial-of-a-number',
    title: 'Factorial of a number',
    difficulty: 'easy',
    topics: ['Array', 'String', 'Recursion', 'Math'],
    acceptanceRate: '79%',
    description:
      'Given the input, solve the Factorial of a number problem following the requirements.',
    examples: [
      {
        input: '0',
        output: '1',
      },
      {
        input: '1',
        output: '1',
      },
      {
        input: '2',
        output: '2',
      },
    ],
    constraints: [
      'n must be a non-negative integer',
      'Large values of n may cause recursion depth issues',
      'Return false for negative numbers',
      'Return false for non-integers',
      'Return false for non-numeric values (NaN, strings, arrays, objects, null, undefined)',
    ],
    functionName: 'factorial',
    starterCode: {
      javascript: `function factorial(n) {
  // your solution here
}
`,
      typescript: `function factorial(n: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [0],
        expected: 1,
      },
      {
        name: 'should handle base cases',
        input: [1],
        expected: 1,
      },
      {
        name: 'should handle small numbers',
        input: [2],
        expected: 2,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle small numbers',
        input: [3],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle small numbers',
        input: [4],
        expected: 24,
        isHidden: true,
      },
      {
        name: 'should handle small numbers',
        input: [5],
        expected: 120,
        isHidden: true,
      },
      {
        name: 'should handle medium numbers',
        input: [6],
        expected: 720,
        isHidden: true,
      },
      {
        name: 'should handle medium numbers',
        input: [7],
        expected: 5040,
        isHidden: true,
      },
      {
        name: 'should handle medium numbers',
        input: [8],
        expected: 40320,
        isHidden: true,
      },
      {
        name: 'should handle larger safe integers',
        input: [10],
        expected: 3628800,
        isHidden: true,
      },
      {
        name: 'should handle larger safe integers',
        input: [12],
        expected: 479001600,
        isHidden: true,
      },
    ],
    hints: [
      `### Edge Cases First
\`\`\`js
if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) return false;
\`\`\``,
      `### Base Case
- Every recursive factorial must stop at:
\`\`\`js
if (n === 0) return 1;
\`\`\`

- This prevents infinite recursion.`,
      `### Core Recursive Algorithm
\`\`\`js
return n * factorial(n - 1);
\`\`\`
- Reduce n step-by-step until it reaches 0.`,
      `### Alternative Approaches
\`\`\`js
// Iterative loop
let result = 1;
for (let i = 1; i <= n; i++) {
  result *= i;
}
return result;
\`\`\`

\`\`\`js
// or using reduce
return Array.from({ length: n }, (_, i) => i + 1)
           .reduce((acc, x) => acc * x, 1);
\`\`\`

- Remember: Validate inputs first and ensure recursion always moves toward the base case.`,
    ],
    solution: {
      explanation: `#### Approach

- Define the base case: 0! = 1
- Multiply n by factorial of n - 1

### Algorithm
- If n === 0, return 1
- Otherwise return n * factorial(n - 1)

###Code`,
      code: `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '043',
    slug: 'sum-of-n-natural-numbers',
    title: 'Sum of n natural numbers',
    difficulty: 'easy',
    topics: ['Math'],
    acceptanceRate: '68%',
    description: `Given a number n, return the sum of the first n numbers.
Return false for invalid inputs (non-number, negative numbers, or non-integer values).`,
    examples: [
      {
        input: 'n = 5',
        output: '15',
      },
      {
        input: 'n = 0',
        output: '0',
      },
      {
        input: 'n = 1',
        output: '1',
      },
    ],
    constraints: [
      'Input must be a non-negative integer.',
      'Return false for invalid inputs.',
    ],
    functionName: 'sumN',
    starterCode: {
      javascript: `function sumN(n) {
  // your solution here
}
`,
      typescript: `function sumN(n: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [0],
        expected: 0,
      },
      {
        name: 'should handle base cases',
        input: [1],
        expected: 1,
      },
      {
        name: 'should handle small numbers',
        input: [2],
        expected: 3,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle small numbers',
        input: [3],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle small numbers',
        input: [5],
        expected: 15,
        isHidden: true,
      },
      {
        name: 'should handle larger numbers',
        input: [10],
        expected: 55,
        isHidden: true,
      },
      {
        name: 'should handle larger numbers',
        input: [100],
        expected: 5050,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [-1],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [2.5],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: ['5'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [null],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [[]],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should reject invalid inputs',
        input: [{}],
        expected: false,
        isHidden: true,
      },
    ],
    hints: [
      `### Handle Edge Cases First
\`\`\`js
if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) return false;
\`\`\`

- Reject negative numbers
- Reject non-integers
- Reject non-number types`,
      `### Identify the Base Case

- Recursion must stop at some condition
- For this problem:

\`\`\`js
if (n === 0) return 0;
\`\`\``,
      `### Core Recursive Formula

- Reduce the problem size by 1 every call
- Sum of first n numbers = n + sumN(n - 1)
\`\`\`js
return n + sumN(n - 1);
\`\`\``,
      `### Think of Recursion as a Stack
- Each call waits for the next one
- Understanding the stack helps visualize:
\`\`\`js
sumN(5)
= 5 + sumN(4)
= 5 + 4 + sumN(3)
= ...
= 5 + 4 + 3 + 2 + 1 + 0
\`\`\`

- Remember: Validating inputs and defining a clear base case avoids infinite recursion and runtime errors.`,
    ],
    solution: {
      explanation: `#### Approach
- Use recursion: the sum of first n numbers is n + sumN(n - 1).

#### Algorithm
- Validate the input: must be a non-negative integer.
- Base case: if n === 0, return 0.
- Recursive case: return n + sumN(n - 1).

#### Code`,
      code: `function sumN(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return false;
  if (n === 0) return 0; // Base case
  return n + sumN(n - 1); // Recursive call
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(n) (recursive call stack)',
      },
    },
  },
  {
    id: '044',
    slug: 'power-of-three',
    title: 'Power of Three',
    difficulty: 'easy',
    topics: ['Math'],
    acceptanceRate: '85%',
    description: `Given an integer \`n\`, return \`true\` if it is a power of three. Otherwise, return \`false\`.

A number is a power of three if there exists an integer \`x\` such that \`n === 3^x\`.`,
    examples: [
      {
        input: 'n = 1',
        output: 'true',
        explanation: '3^0 = 1',
      },
    ],
    constraints: [
      '-2^31 ≤ n ≤ 2^31 - 1',
      'Return `false` for:',
      'n ≤ 0',
      'non-integer inputs',
    ],
    functionName: 'isPowerOfThree',
    starterCode: {
      javascript: `function isPowerOfThree(n) {
  
}
`,
      typescript: `function isPowerOfThree(n: any): any {
  
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [1],
        expected: true,
      },
      {
        name: 'should handle base cases',
        input: [3],
        expected: true,
      },
      {
        name: 'should handle base cases',
        input: [0],
        expected: false,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle powers of three',
        input: [9],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [27],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [81],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [243],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [729],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [2187],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [6561],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [19683],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of three',
        input: [59049],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [2],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [4],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [5],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [6],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [8],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [10],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [15],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [45],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of three',
        input: [100],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-1],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-3],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-9],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-27],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-81],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1162261467],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [3486784401],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1162261466],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [3486784400],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [12],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [24],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [48],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [96],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [192],
        expected: false,
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `#### Approach
A power of three can be identified by repeatedly dividing by 3 until we reach 1. If we can't divide evenly by 3 anymore and the result is 1, it's a power of 3.

#### Algorithm
1. Check if \`n <= 0\` (powers of 3 are always positive)
2. Keep dividing by 3 as long as the number is divisible
3. If the final result is 1, it was a power of 3

#### Code`,
      code: `function isPowerOfThree(n) {
  if (n <= 0) return false;

  while (n % 3 === 0) {
    n = n / 3;
  }

  return n === 1;
}`,
      complexity: {
        time: 'O(log₃ n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '045',
    slug: 'arrayprototypereduce',
    title: 'Array.prototype.reduce',
    difficulty: 'easy',
    topics: ['Array', 'Polyfill', 'Object'],
    acceptanceRate: '74%',
    description: `Implement a custom version of the \`Array.prototype.reduce\` method and add it to the \`Array.prototype\` object as \`myReduce\`. The method should iterate over the array, apply a reducer function to each element, and return a single accumulated value.

This function should mimic the behavior of the native \`reduce()\` method, including the handling of an optional initial value.

### **Example Inputs & Outputs**  
\`\`\`javascript
[1, 2, 3].myReduce((acc, val) => acc + val) 
// → 6

[1, 2, 3].myReduce((acc, val) => acc + val, 10) 
// → 16

[].myReduce((acc, val) => acc + val, 5) 
// → 5

[].myReduce((acc, val) => acc + val) 
// → TypeError

[1, , 3].myReduce((acc, val) => acc + val) 
// → 4
\`\`\`

### **Constraints & Edge Cases**  
- \`callback\` must be a function. If not, throw a \`TypeError\`.
- If no initial value is provided and the array is empty, throw a \`TypeError\`.
- If no initial value is provided, use the first element of the array as the initial value, and start from the second element.
- Do **not** use the built-in \`reduce()\` method.5:["$","di`,
    examples: [
      {
        input: '[1,2,3,4],null,0',
        output: '10',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'myReduce',
    isPolyfill: true,
    starterCode: {
      javascript: `Array.prototype.myReduce = function(callback, initialValue) {
    // Your implementation
}
`,
      typescript: `Array.prototype.myReduce = function(callback, initialValue) {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Sum with Initial Value',
        input: [[1, 2, 3, 4], undefined, 0],
        expected: 10,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Product with Initial Value',
        input: [[1, 2, 3, 4], undefined, 1],
        expected: 24,
        isHidden: true,
      },
    ],
    hints: [
      `
Check \`this\` and callback validity:

\`\`\`js
if (this == null) throw new TypeError("called on null or undefined");
if (typeof callback !== "function") throw new TypeError("callback not a function");
\`\`\``,
      `Get array and length:

\`\`\`js
const arr = Object(this);
const len = arr.length >>> 0;
\`\`\``,
      `Initialize \`accumulator\`:

\`\`\`js
if (arguments.length >= 2) {
  accumulator = initialValue;
} else {
  // Find first defined element for accumulator
  while (i < len && !(i in arr)) i++;
  if (i >= len) throw new TypeError("empty array with no initial value");
  accumulator = arr[i++];
}
\`\`\``,
      `Iterate and apply callback:

\`\`\`js
for (; i < len; i++) {
  if (i in arr) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
}
\`\`\``,
      `Return accumulated value:

\`\`\`js
return accumulator;
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Check if \`this\` is null or undefined; throw an error if so.  
2. Ensure \`callback\` is a function.  
3. Convert \`this\` to an object and calculate its length.  
4. If no \`initialValue\`, find the first defined element to use as accumulator.  
5. Iterate through the array, skipping empty slots (for sparse arrays).  
6. Apply the reducer function on each element.  
7. Return the final accumulated result.

### **Solution Code**`,
      code: `Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError('Array.prototype.myReduce called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const arr = Object(this);
  const len = arr.length >>> 0;
  let i = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    while (i < len && !(i in arr)) {
      i++;
    }
    if (i >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[i++];
  }

  for (; i < len; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '046',
    slug: 'make-counter',
    title: 'Make Counter',
    difficulty: 'easy',
    topics: ['Hash Map', 'Math', 'Closures', 'Object'],
    acceptanceRate: '91%',
    description: `Create a function \`makeCounter\` that returns a counter object with methods to increment, decrement, and reset the counter. The counter should maintain its current value and provide these operations:  

1. **\`increment()\`** – Increases the counter by 1 and returns the new value.  
2. **\`decrement()\`** – Decreases the counter by 1 and returns the new value.  
3. **\`reset()\`** – Resets the counter to its initial value (default: 0) and returns the reset value.  

The counter should also allow an optional initial value.  

### **Example Inputs & Outputs**  
\`\`\`javascript
const counter = makeCounter(5);
console.log(counter.increment()); // 6  
console.log(counter.increment()); // 7  
console.log(counter.decrement()); // 6  
console.log(counter.reset());     // 5  
console.log(counter.decrement()); // 4  
\`\`\`

### **Constraints & Edge Cases**  
- The counter should handle negative initial values.  
- The counter should not expose its internal value directly (encapsulation).  
- Methods should be chainable (optional bonus).  5:["$"`,
    examples: [],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'makeCounter',
    starterCode: {
      javascript: `function makeCounter(initialValue = 0) {
    // Your implementation
}
`,
      typescript: `function makeCounter(initialValue: any = 0): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Standard Case',
        input: [],
        expected: null,
      },
    ],
    hiddenTestCases: [],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `### **Approach**  
1. Use a closure to maintain the counter state.  
2. Return an object with methods that modify the counter value.  
3. Ensure methods return the updated value for chaining (optional).  

### **Solution Code**`,
      code: `function makeCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = initialValue;
      return count;
    },
    // Optional: Get current value without modifying
    getValue: function () {
      return count;
    },
  };
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '047',
    slug: 'reversewords',
    title: 'ReverseWords',
    difficulty: 'easy',
    topics: ['String'],
    acceptanceRate: '80%',
    description: `Write a function \`reverseWords\` that takes a sentence string as input and returns a new string where **each word is reversed**, but the **order of the words remains the same**.  
Words are separated by spaces. Preserve the original spacing.

### **Example Inputs & Outputs**  
\`\`\`javascript
reverseWords("Hello World")           // → "olleH dlroW"  
reverseWords("JavaScript is fun")     // → "tpircSavaJ si nuf"  
reverseWords("  Lead  and Trail  ")   // → "  daeL  dna liarT  "  
reverseWords("")                      // → ""  
reverseWords("OneWord")               // → "droWenO"
\`\`\`

### **Constraints & Edge Cases**  
- Input is always a string.
- Words are defined by space characters.
- Multiple spaces between words should be preserved.
- Leading/trailing spaces should also be preserved.
- Empty string input should return an empty string.`,
    examples: [
      {
        input: `"Hello World"`,
        output: `"olleH dlroW"`,
      },
      {
        input: `"JavaScript is fun"`,
        output: `"tpircSavaJ si nuf"`,
      },
      {
        input: `"  Lead  and Trail  "`,
        output: `"  daeL  dna liarT  "`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'reverseWords',
    starterCode: {
      javascript: `function reverseWords(sentence) {
    // Your implementation
}
`,
      typescript: `function reverseWords(sentence: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'reverses each word in a sentence',
        input: ['Hello World'],
        expected: 'olleH dlroW',
      },
      {
        name: 'works with multiple words',
        input: ['JavaScript is fun'],
        expected: 'tpircSavaJ si nuf',
      },
      {
        name: 'preserves multiple spaces and reverses correctly',
        input: ['  Lead  and Trail  '],
        expected: '  daeL  dna liarT  ',
      },
    ],
    hiddenTestCases: [
      {
        name: 'reverses a single word',
        input: ['OneWord'],
        expected: 'droWenO',
        isHidden: true,
      },
      {
        name: 'returns empty string if input is empty',
        input: [''],
        expected: '',
        isHidden: true,
      },
      {
        name: 'returns same spaces if input has only spaces',
        input: ['     '],
        expected: '     ',
        isHidden: true,
      },
    ],
    hints: [
      `Split sentence but keep spaces

Use regex to split by spaces but keep the spaces in the array:

\`\`\`js
sentence.split(/(\\s+)/)
\`\`\`

* This returns an array of words **and** spaces separately.
* For example: \`"hi there"\` → \`["hi", " ", "there"]\``,
      `Reverse only words, not spaces

Check if the part is not just whitespace, then reverse it:

\`\`\`js
part.trim() ? part.split('').reverse().join('') : part
\`\`\`

* \`part.trim()\` removes spaces; if empty, it’s a space.
* Reverse the characters of the word with \`.split('')\`, \`.reverse()\`, \`.join('')\`.
`,
      `Join everything back

Join all reversed words and spaces back into one string:

\`\`\`js
.join('')
\`\`\`

* Joining without separator keeps original spacing intact.
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use a **regular expression** to match words and spaces.
2. Use \`map()\` to reverse only the words.
3. Join the transformed parts back into a string.

### **Solution Code**`,
      code: `function reverseWords(sentence) {
    // Use regex to split into words and spaces, preserving spaces
    return sentence
        .split(/(\\s+)/) // split by whitespace but keep the spaces
        .map(part => {
            // Reverse if not just whitespace
            return part.trim() ? part.split('').reverse().join('') : part;
        })
        .join('');
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '048',
    slug: 'rate-limiter',
    title: 'Rate Limiter',
    difficulty: 'medium',
    topics: ['Array', 'Two Pointers', 'Queue', 'Math'],
    acceptanceRate: '69%',
    description:
      'You are given an array of timestamps representing API requests and need to implement a **rate limiter** that allows at most **`limit`** requests within a **`windowSize`** time period. The rate limiter should use a **sliding window** approach.',
    examples: [
      {
        input: '[],3,5',
        output: '[]',
      },
      {
        input: 'null,3,5',
        output: '[]',
      },
      {
        input: '[1,2,3,5,6,10],3,5',
        output: '[0,1,2,4,5]',
      },
    ],
    constraints: [
      '`0 ≤ requests.length ≤ 1000`',
      '`1 ≤ limit ≤ 100`',
      '`1 ≤ windowSize ≤ 1000`',
      'All timestamps are non-negative integers',
      'Timestamps are in ascending order',
    ],
    functionName: 'rateLimiter',
    starterCode: {
      javascript: `function rateLimiter(requests, limit, windowSize) {

}
`,
      typescript: `function rateLimiter(requests: any, limit: any, windowSize: any): any {

}
`,
    },
    testCases: [
      {
        name: 'should handle empty requests',
        input: [[], 3, 5],
        expected: [],
      },
      {
        name: 'should handle empty requests',
        input: [null, 3, 5],
        expected: [],
      },
      {
        name: 'should handle basic rate limiting',
        input: [[1, 2, 3, 5, 6, 10], 3, 5],
        expected: [0, 1, 2, 4, 5],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle basic rate limiting',
        input: [[1, 2, 3, 4, 5], 2, 3],
        expected: [0, 1, 3, 4],
        isHidden: true,
      },
      {
        name: 'should handle all requests within limit',
        input: [[1, 2, 3], 5, 10],
        expected: [0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle all requests within limit',
        input: [[1, 5, 10], 3, 15],
        expected: [0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle strict rate limiting',
        input: [[1, 1, 1, 1], 1, 5],
        expected: [0],
        isHidden: true,
      },
      {
        name: 'should handle strict rate limiting',
        input: [[1, 2, 3, 4], 1, 2],
        expected: [0, 2],
        isHidden: true,
      },
      {
        name: 'should handle window sliding correctly',
        input: [[1, 2, 3, 6, 7, 8], 2, 3],
        expected: [0, 1, 3, 4],
        isHidden: true,
      },
      {
        name: 'should handle window sliding correctly',
        input: [[1, 2, 3, 4, 5, 6], 2, 2],
        expected: [0, 1, 2, 3, 4, 5],
        isHidden: true,
      },
      {
        name: 'should handle large time gaps',
        input: [[1, 100, 200, 300], 2, 50],
        expected: [0, 1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle large time gaps',
        input: [[1, 10, 20, 30], 1, 5],
        expected: [0, 1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1], 1, 1],
        expected: [0],
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 2], 1, 1],
        expected: [0, 1],
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 1, 1], 1, 1],
        expected: [0],
        isHidden: true,
      },
      {
        name: 'should handle complex scenarios',
        input: [[1, 2, 3, 4, 5, 6, 7, 8], 3, 4],
        expected: [0, 1, 2, 4, 5, 6],
        isHidden: true,
      },
      {
        name: 'should handle complex scenarios',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3],
        expected: [0, 1, 3, 4, 6, 7, 9],
        isHidden: true,
      },
      {
        name: 'should handle zero limit',
        input: [[1, 2, 3], 0, 5],
        expected: [],
        isHidden: true,
      },
      {
        name: 'should handle large window size',
        input: [[1, 2, 3, 4, 5], 2, 1000],
        expected: [0, 1],
        isHidden: true,
      },
      {
        name: 'should handle requests at same timestamp',
        input: [[1, 1, 1, 2, 2], 2, 5],
        expected: [0, 1],
        isHidden: true,
      },
      {
        name: 'should handle boundary conditions',
        input: [[1, 2, 3, 4, 5], 3, 3],
        expected: [0, 1, 2, 3, 4],
        isHidden: true,
      },
      {
        name: 'should handle boundary conditions',
        input: [[1, 2, 3, 4, 5], 1, 1],
        expected: [0, 1, 2, 3, 4],
        isHidden: true,
      },
    ],
    hints: [
      `1. **Handle Edge Cases**  
   Before implementing the rate limiter, you should **check for invalid inputs** (e.g., empty arrays, null values) and handle base cases properly.

\`\`\`js
// Check for invalid inputs and handle base cases
if (!requests || requests.length === 0) return [];
\`\`\``,
      `2. **Initialize the Queue**  
   Start with an empty queue to track timestamps within the sliding window.

\`\`\`js
// Initialize with empty queue
const queue = [];
const allowed = [];
\`\`\``,
      `3. **Implement Sliding Window**  
   Use a loop to process each request and maintain the sliding window.

\`\`\`js
// Process each request
for (let i = 0; i < requests.length; i++) {
  const currentTime = requests[i];
  
  // Remove expired timestamps
  while (queue.length > 0 && queue[0] <= currentTime - windowSize) {
    queue.shift();
  }
  
  // Check if request can be allowed
  if (queue.length < limit) {
    allowed.push(i);
    queue.push(currentTime);
  }
}
\`\`\``,
    ],
    solution: {
      explanation: `### Problem Overview
This problem simulates a **real-world API rate limiter** that controls how many requests a user can make within a fixed time window.  
The goal is to return the **indices of requests** that are allowed based on a **sliding window rate limiting strategy**.

### Key Concepts

### 1. Sliding Window Technique
- Maintain a queue of timestamps within the current window  
- Remove expired timestamps as the window slides  
- Check if adding a new request would exceed the limit  

### 2. Queue Management
- Use a queue to track timestamps in **chronological order**  
- Remove timestamps that fall outside the current window  
- Only add new requests if the queue length is less than the limit  

## Solution Approach
- Implement using a **queue** for simplicity  
- Remove expired requests as the window moves forward  
- Validate against the \`limit\` before allowing new requests`,
      code: `function rateLimiter(requests, limit, windowSize) {
  if (!requests || requests.length === 0) {
    return [];
  }

  const allowed = [];
  const queue = []; // Store timestamps in sliding window

  for (let i = 0; i < requests.length; i++) {
    const currentTime = requests[i];

    // Remove timestamps that are outside the current window
    while (queue.length > 0 && queue[0] <= currentTime - windowSize) {
      queue.shift();
    }

    // Check if adding this request would exceed the limit
    if (queue.length < limit) {
      allowed.push(i);
      queue.push(currentTime);
    }
  }

  return allowed;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '049',
    slug: 'promiseall-with-concurrency-limit',
    title: 'PromiseAll With Concurrency Limit',
    difficulty: 'medium',
    topics: ['Array', 'Hash Map', 'Math', 'Async'],
    acceptanceRate: '86%',
    description: `Implement a function that works like \`Promise.all()\` but with a concurrency limit. The function should take an array of functions that return promises and execute no more than a specified number of promises at any given time. Once a promise resolves, a new promise should be executed if there are any remaining.

### **Example Inputs & Outputs**
\`\`\`javascript
// Example 1:
// Input:
const functions1 = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 100)),
  () => new Promise(resolve => setTimeout(() => resolve(2), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(3), 150))
];
promiseAllWithConcurrencyLimit(functions1, 2)
// Expected Output: [1, 2, 3]

// Example 2:
// Input:
const functions2 = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100)),
  () => new Promise(resolve => setTimeout(() => resolve(3), 50))
];
promiseAllWithConcurrencyLimit(functions2, 1)
// Expected Output: Promise rejected with "Error"
\`\`\`

### **Constraints & Edge Cases**
- The \`limit\` parameter will be a positive integer.
- The order of results should match the order of input functions, regardless of completion time.
- If any promise rejects, the returned promise should reject with that error.
- If the \`functions\` array is empty, return an empty array.
- Handle edge cases where \`limit\` is greater than the number of functions.`,
    examples: [
      {
        input: '[null,null,null],2',
        output: `"Error occurred"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'promiseAllWithConcurrencyLimit',
    isAsync: true,
    starterCode: {
      javascript: `function promiseAllWithConcurrencyLimit(functions, limit) {
    // Your implementation
}
`,
      typescript: `function promiseAllWithConcurrencyLimit(functions: any, limit: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Rejects when any promise rejects',
        input: [[undefined, undefined, undefined], 2],
        expected: 'Error occurred',
      },
    ],
    hiddenTestCases: [],
    hints: [
      `Manage concurrency with a limit

* Only start \`limit\` number of promises at the beginning.
* When one finishes, start the next promise in the queue.

\`\`\`js
const concurrencyLimit = Math.min(limit, functions.length);
for (let i = 0; i < concurrencyLimit; i++) {
  executeNextPromise();
}
\`\`\``,
      `Track progress and results by index

* Keep an array \`results\` to store resolved values in order.
* Use \`nextPromiseIndex\` to know which promise to start next.
* Count \`completedPromises\` to detect when all are done.

\`\`\`js
const results = new Array(functions.length);
let nextPromiseIndex = 0;
let completedPromises = 0;
\`\`\``,
      `Recursive async execution to handle the queue

* \`executeNextPromise\` starts the current promise.
* On success, stores result, increments completed count.
* Starts next promise if any remain.
* On failure, rejects immediately.

\`\`\`js
async function executeNextPromise() {
  const currentIndex = nextPromiseIndex++;
  try {
    const result = await functions[currentIndex]();
    results[currentIndex] = result;
    completedPromises++;
    if (completedPromises === functions.length) {
      resolve(results);
      return;
    }
    if (nextPromiseIndex < functions.length) {
      executeNextPromise();
    }
  } catch (error) {
    reject(error);
  }
}
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**
1. Create a result array with the same length as the input functions array.
2. Track the next function index to execute and the count of completed promises.
3. Create a helper function to execute promises in sequence while respecting the concurrency limit.
4. Return a promise that resolves with the results array when all functions have been processed.
5. If any promise rejects, reject the main promise with that error.

### **Solution Code**`,
      code: `function promiseAllWithConcurrencyLimit(functions, limit) {
  // Handle edge case of empty input
  if (functions.length === 0) return Promise.resolve([]);

  // Use Math.min to handle case where limit > functions.length
  const concurrencyLimit = Math.min(limit, functions.length);
  const results = new Array(functions.length);
  let nextPromiseIndex = 0;
  let completedPromises = 0;

  return new Promise((resolve, reject) => {
    // Helper function to execute the next promise
    async function executeNextPromise() {
      const currentIndex = nextPromiseIndex++;

      try {
        // Execute the function to get its promise
        const result = await functions[currentIndex]();

        // Store result in the correct position to maintain order
        results[currentIndex] = result;
        completedPromises++;

        // If all promises completed, resolve the main promise
        if (completedPromises === functions.length) {
          resolve(results);
          return;
        }

        // If there are more promises to execute, continue
        if (nextPromiseIndex < functions.length) {
          executeNextPromise();
        }
      } catch (error) {
        // If any promise rejects, reject the main promise
        reject(error);
      }
    }

    // Start executing promises up to the concurrency limit
    for (let i = 0; i < concurrencyLimit; i++) {
      executeNextPromise();
    }
  });
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '050',
    slug: 'word-search',
    title: 'Word Search',
    difficulty: 'medium',
    topics: ['Array', 'String'],
    acceptanceRate: '75%',
    description: `You are given a 2D board of characters and a list of words. Your task is to **find all the words** from the list that can be constructed from letters of sequentially adjacent cells in the board.

**You can move in all 8 directions:**

* Horizontally: left ↔ right
* Vertically: up ↕ down
* Diagonally: all 4 diagonal directions

You **cannot use the same cell more than once** for the same word.

---

### 🧪 Example

**Input:**

\`\`\`js
const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
];
const words = ["oath", "pea", "eat", "rain"];
\`\`\`

**Output:**

\`\`\`js
["oath", "eat"]
\`\`\`

Explanation:

* "oath" and "eat" are found in the board following valid directions.
* "pea" and "rain" are not present in any valid path.

---

## ✅ Constraints

* The board contains only lowercase English letters.
* The same cell may not be reused within a word path.
* The words list may contain up to 3 \\* 10⁴ words.
* The board dimensions can be up to 12 x 12.

---

## ⚠️ Edge Cases to Consider

* If the \`board\` is empty, return an empty array.
* If the \`words\` list is empty, return an empty array.
* Words may appear more than once via different paths, but should only be added **once** in the result.
* Words can appear diagonally as well — all 8 directions must be supported.5:["$","div",null`,
    examples: [
      {
        input: `[],["a"]`,
        output: '[]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'findWords',
    starterCode: {
      javascript: `function findWords(board, words) {
  // Your code goes here
}


const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
];
const words = ["oath", "pea", "eat", "rain"];
`,
      typescript: `function findWords(board: any, words: any): any {
  // Your code goes here
}


const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
];
const words = ["oath", "pea", "eat", "rain"];
`,
    },
    testCases: [
      {
        name: 'Empty board returns empty array',
        input: [[], ['a']],
        expected: [],
      },
    ],
    hiddenTestCases: [],
    hints: [
      `> Try writing a DFS function that explores all 8 directions from a given cell.

\`\`\`js
function dfs(row, col, path) {
  // Add board[row][col] to current path
  // Explore all 8 directions from (row, col)
}
\`\`\``,
      `> Use a Trie so you can quickly check whether a prefix exists while DFS is running.

\`\`\`js
class TrieNode {
  constructor() {
    this.children = {};
    this.word = null; // Store word when a path completes
  }
}

function buildTrie(words) {
  const root = new TrieNode();
  for (let word of words) {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.word = word;
  }
  return root;
}
\`\`\``,
      `> Integrate the Trie into your DFS. Temporarily mark cells as visited and restore them after recursion.

\`\`\`js
function backtrack(r, c, node) {
  const char = board[r][c];
  const nextNode = node.children[char];
  if (!nextNode) return;

  if (nextNode.word) {
    result.push(nextNode.word);
    nextNode.word = null; // Avoid duplicates
  }

  board[r][c] = '#'; // mark visited

  for (let [dr, dc] of directions) {
    let nr = r + dr, nc = c + dc;
    if (isValid(nr, nc)) backtrack(nr, nc, nextNode);
  }

  board[r][c] = char; // restore
}
\`\`\``,
      `> Include diagonals along with up/down/left/right.

\`\`\`js
const directions = [
  [-1, 0], [1, 0], [0, -1], [0, 1],     // up, down, left, right
  [-1, -1], [-1, 1], [1, -1], [1, 1]    // diagonals
];

function isValid(r, c) {
  return r >= 0 && r < board.length && c >= 0 && c < board[0].length && board[r][c] !== '#';
}
\`\`\``,
      `> Put it all together: build the Trie, loop through each board cell, and start the search.

\`\`\`js
const root = buildTrie(words);
const result = [];

for (let r = 0; r < board.length; r++) {
  for (let c = 0; c < board[0].length; c++) {
    backtrack(r, c, root);
  }
}

return result;
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for findWords considering constraints and edge cases.',
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

function findWords(board, words) {
  // Handle edge cases
  if (
    !board ||
    board.length === 0 ||
    !board[0].length ||
    !words ||
    words.length === 0
  ) {
    return [];
  }

  // Step 1: Build Trie
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.word = word; // Store word at the end node
  }

  const result = new Set();
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1], // up, down, left, right
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1], // 4 diagonals
  ];

  // Step 2: Backtracking DFS
  function backtrack(r, c, node) {
    const char = board[r][c];
    const nextNode = node.children[char];
    if (!nextNode) return;

    if (nextNode.word) {
      result.add(nextNode.word);
      nextNode.word = null; // Avoid duplicates
    }

    board[r][c] = '#'; // Mark visited

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        board[nr][nc] !== '#'
      ) {
        backtrack(nr, nc, nextNode);
      }
    }

    board[r][c] = char; // Restore after search
  }

  // Step 3: Launch DFS from every cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (root.children[board[r][c]]) {
        backtrack(r, c, root);
      }
    }
  }

  return Array.from(result);
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '051',
    slug: 'topological-sort-dfs',
    title: 'Topological Sort (DFS)',
    difficulty: 'medium',
    topics: ['Graph', 'Sorting'],
    acceptanceRate: '92%',
    description:
      'Given a directed acyclic graph (DAG) with n vertices and adjacency list adj, return any topological ordering of the vertices.',
    examples: [
      {
        input: 'n = 3, adj = [[1], [2], []]',
        output: '[0, 1, 2]',
        explanation: '0 -> 1 -> 2, so ordering is 0, 1, 2',
      },
      {
        input: 'n = 4, adj = [[1, 2], [3], [3], []]',
        output: '[0, 2, 1, 3] or [0, 1, 2, 3]',
        explanation:
          '0 must come before 1 and 2, both 1 and 2 must come before 3',
      },
      {
        input: 'n = 1, adj = [[]]',
        output: '[0]',
        explanation: 'Single node graph',
      },
    ],
    constraints: [
      '1 ≤ n ≤ 10^4',
      '0 ≤ adj[i].length ≤ n - 1',
      'The graph is a directed acyclic graph (DAG)',
      'There are no self-loops or multiple edges',
    ],
    functionName: 'topologicalSort',
    starterCode: {
      javascript: `function topologicalSort() {
  // your solution here
}
`,
      typescript: `function topologicalSort(): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle basic cases',
        input: [3, [[1], [2], []]],
        expected: [0, 1, 2],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle single node',
        input: [1, [[]]],
        expected: [0],
        isHidden: true,
      },
      {
        name: 'should handle linear chain',
        input: [5, [[1], [2], [3], [4], []]],
        expected: [0, 1, 2, 3, 4],
        isHidden: true,
      },
    ],
    hints: [
      `### DFS Post-order Traversal
\`\`\`js
function dfs(node) {
    visited[node] = true;
    for (let neighbor of adj[node]) {
        if (!visited[neighbor]) dfs(neighbor);
    }
    stack.push(node); // Push AFTER exploring all neighbors
}
\`\`\``,
      `### Core Algorithm (DFS)
\`\`\`js
const visited = new Array(n).fill(false);
const stack = [];
for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i);
}
return stack.reverse();
\`\`\``,
      `### Handle Disconnected Graphs
\`\`\`js
for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i); // Start DFS from every unvisited node
}
Remember: Push node to stack AFTER exploring all neighbors, then reverse!
\`\`\``,
    ],
    solution: {
      explanation: `### DFS with Stack (Post-order)
#### Approach
Use depth-first search and push nodes to stack after exploring all neighbors.

#### Algorithm
- Mark node as visited
- Recursively visit all unvisited neighbors
- Push node to stack after all neighbors are processed
- Reverse stack to get topological order

#### Code`,
      code: `function topologicalSort(n, adj) {
  const visited = new Array(n).fill(false);
  const stack = [];

  function dfs(node) {
    visited[node] = true;

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }

    stack.push(node);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i);
  }

  return stack.reverse();
}`,
      complexity: {
        time: 'O(V + E)',
        space: 'O(V)',
      },
    },
  },
  {
    id: '052',
    slug: 'concurrency-limited-task-scheduler',
    title: 'Concurrency Limited Task Scheduler',
    difficulty: 'medium',
    topics: ['Array', 'String', 'Hash Map', 'Stack'],
    acceptanceRate: '81%',
    description: `You are given an array of asynchronous functions called \`tasks\`, where each function returns a \`Promise\` resolving to a value. Your goal is to implement a function that executes these tasks with a concurrency limit that is, **no more than \`maxConcurrent\` tasks can be running at the same time**.

Once a task finishes, the scheduler should immediately start the next task (if any remain). The order of returned results should **match the order of the input tasks**, regardless of the order in which they resolve.

This is a classic problem often seen in API batching, file uploads, and load-balanced parallel computing.

### Input:

- \`tasks\`: An array of functions \`() => Promise<T>\` — each function returns a promise that resolves to any primitive value (e.g., number, string).
- \`maxConcurrent\`: A positive integer indicating the maximum number of tasks that can run in parallel at any given time.

### Output:

- A \`Promise\` that resolves to an array of values, in the **same order** as the input tasks array.
- Each element in the result corresponds to the resolved value of its respective task.`,
    examples: [],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'scheduleTasks',
    isAsync: true,
    starterCode: {
      javascript: `/**
 * @param {Function[]} tasks - An array of functions returning promises.
 * @param {number} maxConcurrent - Max number of tasks to run in parallel.
 * @return {Promise<Array>} Resolves to an array of results in task order.
 */
async function scheduleTasks(tasks, maxConcurrent) {
  // implement here
}
`,
      typescript: `/**
 * @param {Function[]} tasks - An array of functions returning promises.
 * @param {number} maxConcurrent - Max number of tasks to run in parallel.
 * @return {Promise<Array>} Resolves to an array of results in task order.
 */
async function scheduleTasks(tasks: any, maxConcurrent: any): any {
  // implement here
}
`,
    },
    testCases: [
      {
        name: 'Standard Case',
        input: [],
        expected: null,
      },
    ],
    hiddenTestCases: [],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `### **Approach**  
1. **Queue Management**: We can use a queue to manage the tasks that are waiting to be executed.
2. **Concurrency Control**: Use a variable \`activeCount\` to track the number of tasks currently running. If \`activeCount\` is less than \`maxConcurrent\`, we start executing the next task from the queue.
3. **Result Collection**: We need to ensure that the results are returned in the same order as the original \`tasks\` array, even if some tasks finish earlier than others.
4. **Promise Chaining**: When a task completes, we start the next one, maintaining the concurrency limit.

### **Solution Code**`,
      code: `async function scheduleTasks(tasks, maxConcurrent) {
  // Create a results array to store resolved values in the original order
  const results = new Array(tasks.length);

  // Tracks the index of the next task to start
  let currentIndex = 0;

  // Tracks the number of currently running tasks
  let activeCount = 0;

  // Return a Promise that resolves when all tasks are completed
  return new Promise((resolve, reject) => {
    // Helper function to start next available tasks
    function runNext() {
      // If all tasks have been scheduled and none are running, we're done
      if (currentIndex === tasks.length && activeCount === 0) {
        resolve(results);
        return;
      }

      // Start new tasks while under the concurrency limit and tasks remain
      while (activeCount < maxConcurrent && currentIndex < tasks.length) {
        const index = currentIndex++; // Get the task index and increment the pointer
        activeCount++; // Increment running task count

        // Execute the task function
        tasks[index]()
          .then((result) => {
            // Store result at the correct index
            results[index] = result;
          })
          .catch(reject) // If any task fails, reject the whole promise
          .finally(() => {
            activeCount--; // Decrement count when task finishes
            runNext(); // Attempt to run the next task
          });
      }
    }

    // Start the initial batch of tasks
    runNext();
  });
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '053',
    slug: 'sum-of-subarray-minimum',
    title: 'Sum of Subarray Minimum',
    difficulty: 'medium',
    topics: ['Array', 'Math', 'Binary Search'],
    acceptanceRate: '70%',
    description: `Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo (10^9 + 7).

**Example Inputs & Outputs**

\`\`\`js
// Example 1:
Input: arr = [11, 81, 94, 43, 3]
Output: 444

// Example 2:
Input: arr = [2,2,2]
Output: 12
\`\`\`

### **Constraints**
* 1 <= arr.length <= 3 * 10^4
* 1 <= arr[i] <= 3 * 10^4

### **Edge Cases**
* The array contains positive integers only.
* The result must be computed modulo (10^9 + 7).
* Single element array should return the element itself.
* Arrays with identical elements or repeating patterns may require careful handling to avoid overflow.`,
    examples: [
      {
        input: '[3,1,2,4]',
        output: '17',
      },
      {
        input: '[11,81,94,43,3]',
        output: '444',
      },
      {
        input: '[5]',
        output: '5',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'sumSubarrayMins',
    starterCode: {
      javascript: `function sumSubarrayMins(arr) {
  // write your code here
}
`,
      typescript: `function sumSubarrayMins(arr: any): any {
  // write your code here
}
`,
    },
    testCases: [
      {
        name: 'Should return 17 for [3,1,2,4]',
        input: [[3, 1, 2, 4]],
        expected: 17,
      },
      {
        name: 'Should return 444 for [11,81,94,43,3]',
        input: [[11, 81, 94, 43, 3]],
        expected: 444,
      },
      {
        name: 'Should return 5 for [5]',
        input: [[5]],
        expected: 5,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Should return 12 for [2,2,2]',
        input: [[2, 2, 2]],
        expected: 12,
        isHidden: true,
      },
      {
        name: 'Should return 20 for [1,2,3,4]',
        input: [[1, 2, 3, 4]],
        expected: 20,
        isHidden: true,
      },
      {
        name: 'Should return 20 for [4,3,2,1]',
        input: [[4, 3, 2, 1]],
        expected: 20,
        isHidden: true,
      },
      {
        name: 'Should return 500500 for 1000 1s',
        input: [
          [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ],
        ],
        expected: 500500,
        isHidden: true,
      },
      {
        name: 'Should return 17 for [1,2,1,2,1]',
        input: [[1, 2, 1, 2, 1]],
        expected: 17,
        isHidden: true,
      },
    ],
    hints: [
      `**1. Understand the Contribution of Each Element**

For each element arr[i], calculate how many subarrays it is the minimum for:

* Find the nearest smaller element to the left (NSL) and right (NSR) of arr[i].
* The number of subarrays where arr[i] is the minimum is (i - NSL[i]) * (NSR[i] - i).`,
      `**2. Use a Monotonic Stack for NSL**

To find the nearest smaller element to the left:

* Use a stack to maintain indices of elements in increasing order.
* Pop elements from the stack if they are greater than the current element.

\`\`\`js
while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
  stack.pop();
}
\`\`\``,
      `**3. Use a Monotonic Stack for NSR**

To find the nearest smaller element to the right:

* Iterate from the end of the array and pop elements if they are greater than or equal to the current element.

\`\`\`js
while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
  stack.pop();
}
\`\`\``,
      `**4. Calculate the Sum**

For each index i:

* Compute the number of subarrays where arr[i] is the minimum: (i - NSL[i]) * (NSR[i] - i).
* Multiply by arr[i] to get the contribution to the sum.
* Use modulo (10^9 + 7) to avoid overflow.

\`\`\`js
const totalWays = ls * rs;
const totalSum = (BigInt(arr[i]) * BigInt(totalWays)) % BigInt(mod);
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for sumSubarrayMins considering constraints and edge cases.',
      code: `function getNSL(nums, n) {
  let ans = new Array(n).fill(0);
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      stack.pop();
    }
    ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
}

function getNSR(nums, n) {
  let ans = new Array(n).fill(0);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    ans[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
}

function sumSubarrayMins(arr) {
  const n = arr.length;
  const NSL = getNSL(arr, n);
  const NSR = getNSR(arr, n);
  const mod = 1e9 + 7;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const ls = i - NSL[i];
    const rs = NSR[i] - i;
    const totalWays = ls * rs;
    const totalSum = (BigInt(arr[i]) * BigInt(totalWays)) % BigInt(mod);
    sum = (sum + Number(totalSum)) % mod;
  }

  return sum;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '054',
    slug: 'jsonstringify',
    title: 'JSON.stringify',
    difficulty: 'medium',
    topics: ['Array', 'String', 'Hash Map', 'Graph'],
    acceptanceRate: '87%',
    description: `Implement a custom version of \`JSON.stringify\`. This function should serialize a JavaScript object or value into a JSON string. The implementation should mimic the behavior of the native \`JSON.stringify\`, including handling of:

- Primitives (\`string\`, \`number\`, \`boolean\`, \`null\`)
- Arrays and nested arrays
- Plain objects with nested properties
- Functions and \`undefined\` (ignored in objects, replaced with \`null\` in arrays)

### **Example Inputs & Outputs**  
\`\`\`javascript
JSONStringify("hello") 
// → '"hello"'

JSONStringify({ name: "Alice", age: 30 }) 
// → '{"name":"Alice","age":30}'

JSONStringify([1, "a", true, null]) 
// → '[1,"a",true,null]'

JSONStringify({ a: undefined, b: function() {}, c: 5 }) 
// → '{"c":5}'

JSONStringify([undefined, function() {}, 5]) 
// → '[null,null,5]'
\`\`\`

### **Constraints & Edge Cases**  
- Should handle all basic types: string, number, boolean, null, object, array
- Functions and \`undefined\`:
  - Omitted in objects
  - Converted to \`null\` in arrays
- Throws \`TypeError\` on circular references
- Does not handle special objects like \`Date\`, \`Set\`, \`Map\`, etc.5:["$","di`,
    examples: [
      {
        input: `"test"`,
        output: `"\\"test\\""`,
      },
      {
        input: '123',
        output: `"123"`,
      },
      {
        input: 'true',
        output: `"true"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'JSONStringify',
    starterCode: {
      javascript: `function JSONStringify(value) {
    // Your implementation
}
`,
      typescript: `function JSONStringify(value: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'stringify primitive types',
        input: ['test'],
        expected: `"test"`,
      },
      {
        name: 'stringify primitive types',
        input: [123],
        expected: '123',
      },
      {
        name: 'stringify primitive types',
        input: [true],
        expected: 'true',
      },
    ],
    hiddenTestCases: [
      {
        name: 'stringify primitive types',
        input: [null],
        expected: 'null',
        isHidden: true,
      },
      {
        name: 'stringify arrays',
        input: [[1, 'a', true, null]],
        expected: `[1,"a",true,null]`,
        isHidden: true,
      },
      {
        name: 'stringify arrays',
        input: [[undefined, undefined, 5]],
        expected: '[null,null,5]',
        isHidden: true,
      },
      {
        name: 'stringify objects',
        input: [
          {
            name: 'Alice',
            age: 30,
          },
        ],
        expected: `{"name":"Alice","age":30}`,
        isHidden: true,
      },
      {
        name: 'stringify objects',
        input: [
          {
            a: undefined,
            b: undefined,
            c: 5,
          },
        ],
        expected: `{"c":5}`,
        isHidden: true,
      },
      {
        name: 'nested objects and arrays',
        input: [
          {
            user: {
              name: 'Bob',
              tags: [1, 2, null],
            },
          },
        ],
        expected: `{"user":{"name":"Bob","tags":[1,2,null]}}`,
        isHidden: true,
      },
    ],
    hints: [
      `Handle primitives & null:

\`\`\`js
if (val === null) return "null";
if (typeof val === "string") return \`"\${val}"\`;
if (typeof val === "number" || typeof val === "boolean") return String(val);
if (typeof val === "function" || typeof val === "undefined") return undefined;
\`\`\``,
      `Handle arrays (replace \`undefined\` with \`"null"\`):

\`\`\`js
if (Array.isArray(val)) {
  return \`[\${val.map(item => {
    const str = stringify(item);
    return str === undefined ? "null" : str;
  }).join(",")}]\`;
}
\`\`\``,
      `Handle objects & circular refs:

\`\`\`js
if (typeof val === "object") {
  if (seen.has(val)) throw new TypeError("Converting circular structure to JSON");
  seen.add(val);

  const props = Object.entries(val)
    .map(([k, v]) => {
      const strVal = stringify(v);
      if (strVal === undefined) return undefined;
      return \`"\${k}":\${strVal}\`;
    })
    .filter(Boolean);

  seen.delete(val);
  return \`{\${props.join(",")}}\`;
}
\`\`\``,
      `Use recursive helper with \`seen\` Set:

\`\`\`js
function JSONStringify(value) {
  const seen = new Set();

  function stringify(val) {
    // ...above steps
  }

  return stringify(value);
}
\`\`\`
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use recursion to traverse values.  
2. Track visited objects to detect circular references.  
3. Handle each type appropriately:
   - String → wrap in quotes
   - Number/Boolean/Null → stringify directly
   - Array → recursively serialize elements
   - Object → recursively serialize keys & values (omit \`undefined\` and functions)

### **Solution Code**`,
      code: `function JSONStringify(value) {
    const seen = new Set();

    function stringify(val) {
        if (val === null) return "null";

        const type = typeof val;

        if (type === "string") return \`"\${val}"\`;
        if (type === "number" || type === "boolean") return String(val);
        if (type === "function" || type === "undefined") return undefined;

        if (Array.isArray(val)) {
            const res = val.map(item => {
                const str = stringify(item);
                return str === undefined ? "null" : str;
            });
            return \`[\${res.join(",")}]\`;
        }

        if (type === "object") {
            if (seen.has(val)) throw new TypeError("Converting circular structure to JSON");
            seen.add(val);

            const props = Object.entries(val)
                .map(([key, val]) => {
                    const strVal = stringify(val);
                    if (strVal === undefined) return undefined;
                    return \`"\${key}":\${strVal}\`;
                })
                .filter(Boolean);

            seen.delete(val);
            return \`{\${props.join(",")}}\`;
        }

        return undefined;
    }

    return stringify(value);
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '055',
    slug: 'list-format',
    title: 'List Format',
    difficulty: 'medium',
    topics: ['Array', 'String'],
    acceptanceRate: '76%',
    description: `Write a function that takes an array of strings and returns a human-readable list formatted with commas and the word "and" before the last item. This is similar to how natural language lists are formatted in English.

For example:
- \`["apple"]\` → \`"apple"\`
- \`["apple", "banana"]\` → \`"apple and banana"\`
- \`["apple", "banana", "cherry"]\` → \`"apple, banana and cherry"\`
- \`["", "two", ""]\` → \`", two and "\`

### **Example Inputs & Outputs**  
\`\`\`javascript
formatList([]) 
// → ""

formatList(["apple"]) 
// → "apple"

formatList(["apple", "banana"]) 
// → "apple and banana"

formatList(["apple", "banana", "cherry"]) 
// → "apple, banana and cherry"

formatList(["one", "two", "three", "four"]) 
// → "one, two, three and four"
\`\`\`

---

### **Constraints & Edge Cases**  
- The input will always be an array of strings
- Return an empty string if the array is empty
- Handle 1-item, 2-item, and 3+ item cases correctly
- Items may include empty strings, but treat them as valid values`,
    examples: [
      {
        input: '[]',
        output: `""`,
      },
      {
        input: `["apple"]`,
        output: `"apple"`,
      },
      {
        input: `["apple","banana"]`,
        output: `"apple and banana"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'formatList',
    starterCode: {
      javascript: `function formatList(items) {
  // your implementation
}
`,
      typescript: `function formatList(items: any): any {
  // your implementation
}
`,
    },
    testCases: [
      {
        name: 'returns empty string for empty array',
        input: [[]],
        expected: '',
      },
      {
        name: 'handles single element list',
        input: [['apple']],
        expected: 'apple',
      },
      {
        name: 'handles two elements list',
        input: [['apple', 'banana']],
        expected: 'apple and banana',
      },
    ],
    hiddenTestCases: [
      {
        name: 'handles three elements list',
        input: [['apple', 'banana', 'cherry']],
        expected: 'apple, banana and cherry',
        isHidden: true,
      },
      {
        name: 'handles multiple elements list',
        input: [['one', 'two', 'three', 'four']],
        expected: 'one, two, three and four',
        isHidden: true,
      },
      {
        name: 'handles strings with empty values',
        input: [['', 'two', '']],
        expected: ', two and ',
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `### **Approach**  
1. If the array is empty, return an empty string.  
2. If the array has only one item, return it directly.  
3. If the array has two items, join them with " and ".  
4. For three or more items, join all but the last with ", ", then append " and " + last item.  

### **Solution Code**`,
      code: `function formatList(items) {    
    const len = items.length;

    if (len === 0) return "";
    if (len === 1) return items[0];
    if (len === 2) return \`\${items[0]} and \${items[1]}\`;

    return \`\${items.slice(0, len - 1).join(", ")} and \${items[len - 1]}\`;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '056',
    slug: 'throttle',
    title: 'Throttle',
    difficulty: 'medium',
    topics: ['Hash Map', 'Async'],
    acceptanceRate: '65%',
    description: `Implement a \`throttle\` function that takes a callback function and a delay time (in milliseconds) as arguments. The throttled function should ensure that the callback is executed at most once in the specified time period, regardless of how many times it's called.

Unlike debounce (which resets the timer with each call), throttle guarantees function execution at regular intervals while calls are being made.`,
    examples: [],
    constraints: [
      'The function should execute immediately on the first call',
      'Subsequent calls within the delay period should be ignored',
      'After the delay period, the next call should execute immediately',
      'The throttled function should return the result of the callback function',
    ],
    functionName: 'throttle',
    starterCode: {
      javascript: `/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every \`delay\` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
  // Write your code here
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
`,
      typescript: `/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every \`delay\` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func: any, delay: any): any {
  // Write your code here
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
`,
    },
    testCases: [
      {
        name: 'Standard Case',
        input: [],
        expected: null,
      },
    ],
    hiddenTestCases: [],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: `### Approach
The throttle function limits how often a function can be called within a specific time period. Unlike debounce (which resets the timer with each call), throttle ensures the function executes at regular intervals while calls are being made.

The key aspects of implementing throttle:
1. Execute the function immediately on first call
2. Ignore subsequent calls within the delay period
3. After the delay period, allow the next call to execute immediately
4. Maintain the return value of the function

### Solution Code`,
      code: `function throttle(func, delay) {
  let lastCall = 0;
  let lastResult;

  return function (...args) {
    const now = Date.now();
    // If enough time has passed since the last call
    if (now - lastCall >= delay) {
      lastCall = now;
      lastResult = func.apply(this, args);
      return lastResult;
    }
    // Return the result from the last execution
    return lastResult;
  };
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '057',
    slug: 'detect-cycle-in-an-undirected-connected-graph-dfs',
    title: 'Detect Cycle in an Undirected Connected Graph (DFS)',
    difficulty: 'medium',
    topics: ['Array', 'Graph', 'Closures', 'Object'],
    acceptanceRate: '82%',
    description: `You receive the graph as an array of edge pairs edges, where each pair [u, v] represents a bidirectional connection between nodes u and v. Implement hasCycle(edges) that:

- Builds an adjacency list from those pairs.
- Starts DFS from node 0 only.
- Returns true as soon as DFS encounters a neighbor that is visited and not the immediate parent.`,
    examples: [
      {
        input: 'edges = [[0, 1], [1, 2]]',
        output: 'false',
      },
      {
        input: 'edges = [[0, 1], [1, 2], [2, 0]]',
        output: 'true',
      },
    ],
    constraints: [
      'Nodes are assumed to be integers that can act as object keys.',
      'Edges should always include the component that contains node 0; the function never explores other components.',
      'Inputs are expected to be well-formed arrays of two-item arrays; no explicit validation is performed.',
      'Self-loops or malformed inputs can lead to unexpected results because no guards are present.',
    ],
    functionName: 'hasCycle',
    starterCode: {
      javascript: `function hasCycle(edges) {
  // your solution here
}
`,
      typescript: `function hasCycle(edges: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'detects cycle in the component rooted at node 0',
        input: [
          [
            [0, 1],
            [1, 2],
            [2, 0],
          ],
        ],
        expected: true,
      },
      {
        name: 'returns false for a tree reachable from node 0',
        input: [
          [
            [0, 1],
            [1, 2],
            [2, 3],
          ],
        ],
        expected: false,
      },
      {
        name: 'detects cycle encountered along the first DFS path',
        input: [
          [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 1],
          ],
        ],
        expected: true,
      },
    ],
    hiddenTestCases: [
      {
        name: 'returns false when no cycle exists in the explored component',
        input: [
          [
            [0, 1],
            [1, 3],
            [3, 4],
            [4, 5],
          ],
        ],
        expected: false,
        isHidden: true,
      },
      {
        name: 'detects a self-loop at node 0',
        input: [[[0, 0]]],
        expected: true,
        isHidden: true,
      },
      {
        name: 'ignores cycles that are not connected to node 0',
        input: [
          [
            [0, 1],
            [1, 2],
            [5, 6],
            [6, 7],
            [7, 5],
          ],
        ],
        expected: false,
        isHidden: true,
      },
      {
        name: 'returns false when the first DFS branch is acyclic',
        input: [
          [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [0, 5],
            [5, 6],
            [6, 0],
          ],
        ],
        expected: false,
        isHidden: true,
      },
    ],
    hints: [
      `#### Build the graph using an adjacency list
Before detecting a cycle, you must convert the edge list into a graph structure.
A beginner might forget that undirected graphs require adding edges in both directions.
\`\`\`js
let graph = {};
for (let [u, v] of edges) {
  if (!graph[u]) graph[u] = [];
  if (!graph[v]) graph[v] = [];
  graph[u].push(v);
  graph[v].push(u);  // because it's undirected
}
\`\`\``,
      `#### Use DFS to explore and track visited nodes
To detect cycles, you must keep track of which nodes are already visited.
\`\`\`js
let visited = new Set();
function dfs(node, parent) {
  visited.add(node);
  // explore neighbors...
}
\`\`\``,
      `#### Detect a “back edge”
The key idea:
- If during DFS, you go to a neighbor that is already visited,
- AND not the node you just came from (parent),
→ then you found a cycle.
\`\`\`js
if (visited.has(neighbor) && neighbor !== parent) {
  // This means there is a cycle.
}
\`\`\``,
      `#### Start DFS from any node, but ensure all nodes are covered
- Beginners often assume the graph is always connected, It may not be.
So you must consider:
- Start DFS from node 0, but
- If the graph has multiple disconnected components, you may miss a cycle in another component.
\`\`\`js
for (let node in graph) {
  if (!visited.has(node)) {
    if (dfs(node, -1)) return true;
  }
}
\`\`\``,
    ],
    solution: {
      explanation: `### Approach
- Build an adjacency list using plain JavaScript objects and arrays.
- Run DFS starting from node 0 only.
- Track the parent so that the immediate back-edge to the parent is ignored.
- Return true as soon as a visited neighbor that is not the parent is found; otherwise return false when the DFS finishes its first branch.

This mirrors the provided implementation exactly, including its assumptions (e.g., the relevant component includes node 0 and inputs are already well-formed).

### Code`,
      code: `function hasCycle(edges) {
  let graph = {};
  for (let [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }

  let visited = new Set();
  let dfs = (curr, parent) => {
    visited.add(curr);
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        return dfs(neighbor, curr);
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };

  return dfs(0, -1);
}`,
      complexity: {
        time: 'Proportional to the length of the first DFS branch (worst case O(E) if the graph is essentially a path).',
        space:
          'O(V) for the adjacency list and recursion stack for that branch.',
      },
    },
  },
  {
    id: '058',
    slug: 'compress-string-with-limited-repetition',
    title: 'Compress String with Limited Repetition',
    difficulty: 'medium',
    topics: ['String'],
    acceptanceRate: '71%',
    description: `Given a string consisting of lowercase alphabetic characters, compress the string by replacing consecutive repeated characters with the character followed by the count of its repetitions. 

However, to keep the count readable, if the count of consecutive repeated characters exceeds 9, split the count into chunks of at most 9.

If a character appears only once consecutively, do not append a count after it.

---

## Input
- A string \`str\` containing only lowercase English letters (\`a\`-\`z\`).
- Length of \`str\` is between \`0\` and \`10^5\`.

---

## Output
- A compressed string where consecutive repeated characters are replaced by the character followed by the count, with no count larger than 9.
- Single occurrences of a character are left as-is (no trailing \`1\`).

---

## Examples

1. **Input:** \`"aaabbbccccccccccc"\`
   **Output:** \`"a3b3c9c2"\`
   **Explanation:**

   * \`'a'\` is repeated 3 times → \`"a3"\`
   * \`'b'\` is repeated 3 times → \`"b3"\`
   * \`'c'\` is repeated 11 times → split as \`"c9c2"\` (since count can't exceed 9)

2. **Input:** \`"xxxxxxxxxxxx"\`
   **Output:** \`"x9x3"\`
   **Explanation:**

   * \`'x'\` is repeated 12 times → split as \`"x9x3"\`

3. **Input:** \`"abc"\`
   **Output:** \`"abc"\`
   **Explanation:**

   * No characters are repeated consecutively, so the string is returned as-is.

4. **Input:** \`"aabbccddeeeeee"\`
   **Output:** \`"a2b2c2d2e6"\`
   **Explanation:**

   * Each character is repeated consecutively and count is ≤ 9, so just append the count directly.

---

## Edge Cases
- Empty string input should return an empty string.
- Very long sequences of the same character must correctly split counts into chunks of 9 or less.
- Strings with no consecutive repeats remain unchanged.
- Single character input returns the character itself.5:["$","di`,
    examples: [
      {
        input: `"aaabbbcccccccccc"`,
        output: `"a3b3c9c1"`,
      },
      {
        input: `"aabbccddeeeeee"`,
        output: `"a2b2c2d2e6"`,
      },
      {
        input: `"xxxxxxxxxxxx"`,
        output: `"x9x3"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'compressString',
    starterCode: {
      javascript: `function compressString(str) {
  //write implementation here
}
`,
      typescript: `function compressString(str: any): any {
  //write implementation here
}
`,
    },
    testCases: [
      {
        name: 'compresses repeated characters with counts ≤ 9',
        input: ['aaabbbcccccccccc'],
        expected: 'a3b3c9c1',
      },
      {
        name: 'compresses repeated characters with counts ≤ 9',
        input: ['aabbccddeeeeee'],
        expected: 'a2b2c2d2e6',
      },
      {
        name: 'splits counts > 9 into chunks of 9 or less',
        input: ['xxxxxxxxxxxx'],
        expected: 'x9x3',
      },
    ],
    hiddenTestCases: [
      {
        name: 'splits counts > 9 into chunks of 9 or less',
        input: ['zzzzzzzzzzz'],
        expected: 'z9z2',
        isHidden: true,
      },
      {
        name: 'splits counts > 9 into chunks of 9 or less',
        input: ['wwwwwwwwwwwwwwwwwwww'],
        expected: 'w9w9w2',
        isHidden: true,
      },
      {
        name: 'splits counts > 9 into chunks of 9 or less',
        input: ['bbbbbbbbbbbcc'],
        expected: 'b9b2c2',
        isHidden: true,
      },
      {
        name: 'returns original string if no repeats',
        input: ['abc'],
        expected: 'abc',
        isHidden: true,
      },
      {
        name: 'returns original string if no repeats',
        input: ['abcdefgh'],
        expected: 'abcdefgh',
        isHidden: true,
      },
      {
        name: 'handles empty string and single characters',
        input: [''],
        expected: '',
        isHidden: true,
      },
      {
        name: 'handles empty string and single characters',
        input: ['z'],
        expected: 'z',
        isHidden: true,
      },
      {
        name: 'single character repeated exactly 9 times',
        input: ['iiiiiiiii'],
        expected: 'i9',
        isHidden: true,
      },
      {
        name: 'single character repeated exactly 10 times splits count',
        input: ['jjjjjjjjjj'],
        expected: 'j9j1',
        isHidden: true,
      },
      {
        name: 'mix of single and repeated characters',
        input: ['aabcccdeeeefffgh'],
        expected: 'a2bc3de4f3gh',
        isHidden: true,
      },
    ],
    hints: [
      `Iterate through the string and count consecutive repeated characters. Keep track of the current character and its count.

\`\`\`js
let count = 1;
for (let i = 1; i <= s.length; i++) {
  if (s[i] === s[i-1]) {
    count++;
  } else {
    // process current character and count
    count = 1;
  }
}
\`\`\``,
      `Split counts greater than 9 into chunks of size 9 or less. For example, 12 consecutive chars become \`"char9char3"\`.

\`\`\`js
while (count > 9) {
  // append "char9"
  count -= 9;
}
// append remaining count

\`\`\``,
      `If the character appears only once, do not append the number \`1\`. Just add the character itself.

\`\`\`js
if (count === 1) {
  result += char;
} else {
  result += char + count;
}
\`\`\``,
      `If the compressed string is not shorter than the original string, return the original string as is.

\`\`\`js
if (compressed.length >= original.length) {
  return original;
}
\`\`\``,
      `Handle edge cases like empty string or single character string gracefully.

\`\`\`js
if (s.length === 0) return "";
if (s.length === 1) return s;
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for compressString considering constraints and edge cases.',
      code: `function compressString(str) {
  if (!str) return '';

  let result = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // For counts > 9, split into chunks of 9
      while (count > 9) {
        result += str[i - 1] + '9';
        count -= 9;
      }
      if (count === 1) {
        // Check if previous splitting happened (means count was reduced)
        // We can detect that if result ends with the same char + '9' chunk, so check last chars
        let lastNineChunk = result.endsWith(str[i - 1] + '9');
        if (lastNineChunk) {
          // Append '1' for leftover 1 after splitting
          result += str[i - 1] + '1';
        } else {
          // Normal single char with count 1, append only char
          result += str[i - 1];
        }
      } else {
        // count > 1 append char + count
        result += str[i - 1] + count;
      }

      count = 1;
    }
  }
  return result;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '059',
    slug: 'priority-queue',
    title: 'Priority Queue',
    difficulty: 'medium',
    topics: ['Queue', 'Math', 'Design'],
    acceptanceRate: '88%',
    description: `A priority queue is a special type of queue in which elements are inserted with a priority and the element with the highest priority is removed first. Your implementation should allow enqueuing elements with a priority and dequeuing them based on that priority (lower number = higher priority by default). If two elements have the same priority, they should be dequeued in the order they were added.

Your priority queue should support the following operations:
- \`enqueue(value, priority)\` – adds an element with a given priority.
- \`dequeue()\` – removes and returns the element with the **highest priority** (lowest priority number).
- \`peek()\` – returns the element with the highest priority without removing it.
- \`isEmpty()\` – returns true if the queue is empty.
- \`size()\` – returns the number of elements in the queue.

### **Example Inputs & Outputs**  
\`\`\`javascript
const pq = new PriorityQueue();
pq.enqueue('Clean the house', 2);
pq.enqueue('Do the dishes', 1);
pq.enqueue('Take out the trash', 2);

pq.dequeue(); // → 'Do the dishes'
pq.peek();    // → 'Clean the house'
pq.size();    // → 2
pq.isEmpty(); // → false
\`\`\`

### **Constraints & Edge Cases**  
-  Lower numerical priority means higher importance (priority 1 > priority 3).  
-  Stable ordering: elements with same priority should follow FIFO order.  
-  Support all listed methods: enqueue, dequeue, peek, isEmpty, size.  
-  The queue can hold any data type as \`value\`.  
-  \`dequeue()\` and \`peek()\` should return \`null\` if the queue is empty.  5:["$","div",null,`,
    examples: [
      {
        input: `["PriorityQueue","enqueue","enqueue","enqueue","dequeue","dequeue","dequeue"],[[],["A",3],["B",1],["C",2],[],[],[]]`,
        output: `[null,null,null,null,"B","C","A"]`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'PriorityQueue',
    isClass: true,
    starterCode: {
      javascript: `class PriorityQueue {
    enqueue(value, priority) {
        // Add element
    }

    dequeue() {
        // Remove and return element with highest priority
    }

    peek() {
        // Return highest priority element
    }

    isEmpty() {
        // Return boolean
    }

    size() {
        // Return number of items
    }
}
`,
      typescript: `class PriorityQueue {
    enqueue(value, priority) {
        // Add element
    }

    dequeue() {
        // Remove and return element with highest priority
    }

    peek() {
        // Return highest priority element
    }

    isEmpty() {
        // Return boolean
    }

    size() {
        // Return number of items
    }
}
`,
    },
    testCases: [
      {
        name: 'Enqueue and Dequeue Order',
        input: [
          [
            'PriorityQueue',
            'enqueue',
            'enqueue',
            'enqueue',
            'dequeue',
            'dequeue',
            'dequeue',
          ],
          [[], ['A', 3], ['B', 1], ['C', 2], [], [], []],
        ],
        expected: [null, null, null, null, 'B', 'C', 'A'],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Same Priority Order',
        input: [
          ['PriorityQueue', 'enqueue', 'enqueue', 'dequeue', 'dequeue'],
          [[], ['Task1', 2], ['Task2', 2], [], []],
        ],
        expected: [null, null, null, 'Task1', 'Task2'],
        isHidden: true,
      },
      {
        name: 'Peek and Size',
        input: [
          [
            'PriorityQueue',
            'isEmpty',
            'enqueue',
            'peek',
            'size',
            'dequeue',
            'isEmpty',
          ],
          [[], [], ['X', 5], [], [], [], []],
        ],
        expected: [null, true, null, 'X', 1, 'X', true],
        isHidden: true,
      },
    ],
    hints: [
      `Store Items as Objects with Priority

Use an array to hold items, each as an object with \`value\` and \`priority\`:

\`\`\`js
{ value: 'A', priority: 2 }
\`\`\``,
      `Insert in Order Using \`splice\`

When enqueuing, loop through the array to insert at the correct index based on priority (lower numbers = higher priority):

\`\`\`js
for (let i = 0; i < this.items.length; i++) {
    if (priority < this.items[i].priority) {
        this.items.splice(i, 0, { value, priority });
        break;
    }
}
\`\`\`

If no higher priority is found, push to the end.`,
      `\`dequeue()\` Removes and Returns the Highest Priority Item

Because the list is ordered by priority, the first item always has the highest priority:

\`\`\`js
this.items.shift().value;
\`\`\`

Guard against empty queue:

\`\`\`js
return this.isEmpty() ? null : this.items.shift().value;
\`\`\`
`,
      `\`peek()\` Shows the Front Without Removing

\`\`\`js
return this.isEmpty() ? null : this.items[0].value;
\`\`\``,
      `\`isEmpty()\` and \`size()\` Helpers

Simple utility methods:

\`\`\`js
isEmpty() {
    return this.items.length === 0;
}

size() {
    return this.items.length;
}
\`\`\`
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use an internal array to store elements as objects \`{ value, priority }\`.  
2. On \`enqueue\`, insert the new element into the array.  
3. Maintain array sorted or insert in the correct place based on priority.  
4. On \`dequeue\`, remove and return the element at the front (highest priority).  
5. \`peek()\` just reads the front.  
6. Provide \`size()\` and \`isEmpty()\` using array length.

### **Solution Code**`,
      code: `class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value, priority) {
    const newItem = { value, priority };
    let inserted = false;

    // Insert based on priority
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.items.push(newItem); // lowest priority, push to end
    }
  }

  dequeue() {
    return this.isEmpty() ? null : this.items.shift().value;
  }

  peek() {
    return this.isEmpty() ? null : this.items[0].value;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '060',
    slug: 'flatten-deep-object',
    title: 'Flatten Deep Object',
    difficulty: 'medium',
    topics: ['String', 'Graph', 'Object'],
    acceptanceRate: '77%',
    description: `Write a function \`flattenObject\` that takes a deeply nested JavaScript object and returns a new object where nested keys are represented in dot notation.

**Input:**  
- A nested object with keys and values of any depth

**Output:**  
- A new object where each key is a dot-separated path to the corresponding value

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
Input: { a: { b: 1 } }
Output: { "a.b": 1 }

// Example 2:
Input: { a: { b: { c: 2 }, d: 3 } }
Output: { "a.b.c": 2, "a.d": 3 }

// Example 3:
Input: { x: 1, y: { z: { k: 5 } } }
Output: { "x": 1, "y.z.k": 5 }

// Example 4:
Input: {}
Output: {}

// Example 5:
Input: { a: null, b: { c: undefined } }
Output: { "a": null, "b.c": undefined }
\`\`\`

### **Constraints & Edge Cases**  
- Keys are always strings  
- Values may be any primitive or object  
- Object may be empty  
- Values like \`null\`, \`undefined\`, or falsy primitives should be preserved  
- Does not mutate the original object`,
    examples: [
      {
        input: `{"a":{"b":1}}`,
        output: `{"a.b":1}`,
      },
      {
        input: `{"a":{"b":{"c":2},"d":3}}`,
        output: `{"a.b.c":2,"a.d":3}`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'flattenObject',
    starterCode: {
      javascript: `function flattenObject(obj) {
    // Your implementation
}
`,
      typescript: `function flattenObject(obj: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: `Flattens { a: { b: 1 } } to { "a.b": 1 }`,
        input: [
          {
            a: {
              b: 1,
            },
          },
        ],
        expected: {
          'a.b': 1,
        },
      },
      {
        name: `Flattens deeply nested object input {"a":{"b":{"c":2},"d":3}} : expected {"a.b.c":2,"a.d":3}`,
        input: [
          {
            a: {
              b: {
                c: 2,
              },
              d: 3,
            },
          },
        ],
        expected: {
          'a.b.c': 2,
          'a.d': 3,
        },
      },
    ],
    hiddenTestCases: [
      {
        name: 'Handles mixed structure correctly',
        input: [
          {
            x: 1,
            y: {
              z: {
                k: 5,
              },
            },
          },
        ],
        expected: {
          x: 1,
          'y.z.k': 5,
        },
        isHidden: true,
      },
      {
        name: 'Returns empty object for empty input',
        input: [{}],
        expected: {},
        isHidden: true,
      },
      {
        name: 'Handles null and undefined values',
        input: [
          {
            a: null,
            b: {
              c: undefined,
            },
          },
        ],
        expected: {
          a: null,
          'b.c': undefined,
        },
        isHidden: true,
      },
    ],
    hints: [
      `Use recursion for nesting

When a value is an object, you need to recursively flatten it:

\`\`\`js
if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    flattenObject(value, fullKey, result);
}
\`\`\``,
      `Build keys using dot notation

Keep track of parent keys and form a full path:

\`\`\`js
const fullKey = parentKey ? \`\${parentKey}.\${key}\` : key;
\`\`\``,
      `Store non-object values

If the value is not an object (or is null or array), add it to the result directly:

\`\`\`js
result[fullKey] = value;
\`\`\`
`,
      `Use a shared result object

Pass a \`result\` object through recursive calls to collect flattened key-value pairs.
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use recursion to go through each key in the object.  
2. Track the key path using dot notation.  
3. When a value is a non-object or is null, assign it directly.  
4. Otherwise, recurse into that object and merge its result.  
5. Return the final flat object.

### **Solution Code**`,
      code: `function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const fullKey = parentKey ? \`\${parentKey}.\${key}\` : key;
            const value = obj[key];

            if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
                flattenObject(value, fullKey, result);
            } else {
                result[fullKey] = value;
            }
        }
    }
    return result;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '061',
    slug: 'pyramid-pattern',
    title: 'pyramid pattern',
    difficulty: 'medium',
    topics: ['Array', 'String', 'Math'],
    acceptanceRate: '66%',
    description: `Write a function generatePyramid(n) that returns an array of n strings representing a centered pyramid of height n using *.

- Each row is width 2n - 1 characters.
- Row i (1-indexed) contains 2i - 1 stars, centered with spaces on both sides.
- Use loops to construct the pattern.`,
    examples: [
      {
        input: 'n = 0',
        output: '[]',
      },
      {
        input: 'n = 1',
        output: `["*"]`,
      },
      {
        input: 'n = 3',
        output: '[',
      },
    ],
    constraints: [
      'n must be a finite integer >= 0.',
      'Return false for invalid inputs (non-integers, negatives, non-numbers, NaN, Infinity).',
      'Use loop-based construction (e.g., for/while).',
    ],
    functionName: 'generatePyramid',
    starterCode: {
      javascript: `function generatePyramid(n) {
  // your solution here
}
`,
      typescript: `function generatePyramid(n: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: `base cases: n=0 returns [], n=1 returns ["*"]`,
        input: [0],
        expected: [],
      },
      {
        name: `base cases: n=0 returns [], n=1 returns ["*"]`,
        input: [1],
        expected: ['*'],
      },
      {
        name: 'n=3 produces a centered pyramid',
        input: [3],
        expected: ['  *  ', ' *** ', '*****'],
      },
    ],
    hiddenTestCases: [
      {
        name: 'invalid inputs return false',
        input: [-1],
        expected: false,
        isHidden: true,
      },
      {
        name: 'invalid inputs return false',
        input: [1.5],
        expected: false,
        isHidden: true,
      },
      {
        name: 'invalid inputs return false',
        input: [null],
        expected: false,
        isHidden: true,
      },
      {
        name: 'invalid inputs return false',
        input: ['3'],
        expected: false,
        isHidden: true,
      },
      {
        name: 'invalid inputs return false',
        input: [{}],
        expected: false,
        isHidden: true,
      },
    ],
    hints: [
      `### Determine the total width
- For height n, each row has width 2n - 1.`,
      `### Star count per row
- Row i (1-indexed) contains 2i - 1 stars.`,
      `### Leading/trailing spaces
- Spaces on each side = (width - stars) / 2.`,
      `### Build strings with loops
\`\`\`js
let row = '';
for (let s = 0; s < spaces; s++) row += ' ';
for (let k = 0; k < stars; k++) row += '*';
for (let s = 0; s < spaces; s++) row += ' ';
\`\`\``,
      `### Validate input
- Ensure n is an integer ≥ 0 and finite.`,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for generatePyramid considering constraints and edge cases.',
      code: `function generatePyramid(n) {
  // your solution here
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '062',
    slug: 'search-rotated-array',
    title: 'Search Rotated Array',
    difficulty: 'medium',
    topics: ['Array', 'Math', 'Sorting', 'Binary Search'],
    acceptanceRate: '83%',
    description: `You are given an array of **distinct integers** sorted in ascending order, then rotated at an unknown pivot (e.g., \`[0,1,2,4,5,6,7]\` becomes \`[4,5,6,7,0,1,2]\`).  
Implement a function to search for a target value in this rotated array. If found, return its index. If not found, return \`-1\`.

- **Input:**  
  - \`nums\` (number[]): Rotated sorted array of distinct integers  
  - \`target\` (number): The value to search  

- **Output:**  
  - (number): The index of the target in the array or \`-1\` if not found  

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
searchRotatedArray([4,5,6,7,0,1,2], 0); → 4

// Example 2:
searchRotatedArray([4,5,6,7,0,1,2], 3); → -1

// Example 3:
searchRotatedArray([1], 0); → -1
\`\`\`

### **Constraints & Edge Cases**  
- Time complexity must be **O(log n)**  
- All integers in the array are **distinct**  
- The array is **not empty**  
- Array may or may not be rotated  
- The target may not be present  
- Array of length 1 should return \`0\` or \`-1\` correctly`,
    examples: [
      {
        input: '[4,5,6,7,0,1,2],0',
        output: '4',
      },
      {
        input: '[4,5,6,7,0,1,2],3',
        output: '-1',
      },
      {
        input: '[1],1',
        output: '0',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'searchRotatedArray',
    starterCode: {
      javascript: `function searchRotatedArray(nums, target) {
    // Your implementation
}
`,
      typescript: `function searchRotatedArray(nums: any, target: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Finds target in rotated array',
        input: [[4, 5, 6, 7, 0, 1, 2], 0],
        expected: 4,
      },
      {
        name: 'Returns -1 if target not in array',
        input: [[4, 5, 6, 7, 0, 1, 2], 3],
        expected: -1,
      },
      {
        name: 'One-element array, target found',
        input: [[1], 1],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'One-element array, target not found',
        input: [[1], 0],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'No rotation, sorted array',
        input: [[1, 2, 3, 4, 5, 6], 4],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'Target at pivot point',
        input: [[6, 7, 8, 1, 2, 3, 4, 5], 1],
        expected: 3,
        isHidden: true,
      },
    ],
    hints: [
      `Use Modified Binary Search

Because the array is sorted but rotated, regular binary search won't work.
But we can still use binary search with some conditions.

Start with:

\`\`\`js
let left = 0;
let right = nums.length - 1;
\`\`\``,
      `Check Mid and Target

Inside the loop:

\`\`\`js
while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
\`\`\``,
      `Detect the Sorted Half

At each step, determine if **left half** is sorted:

\`\`\`js
if (nums[left] <= nums[mid]) {
    // target is in the sorted left half?
    if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
\`\`\`

Or else the **right half** is sorted:

\`\`\`js
else {
    if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
\`\`\``,
      `Return -1 if Not Found

If you exit the loop, target was not in the array:

\`\`\`js
return -1;
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use a modified binary search.  
2. Calculate the mid index each iteration.  
3. Identify whether the **left half** or **right half** is sorted.  
4. Narrow the search range accordingly.  

### **Solution Code**`,
      code: `function searchRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target is in left half
      } else {
        left = mid + 1; // target is in right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // target is in right half
      } else {
        right = mid - 1; // target is in left half
      }
    }
  }

  return -1;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '063',
    slug: 'topological-sort-bfs',
    title: 'Topological Sort (BFS)',
    difficulty: 'medium',
    topics: ['Graph', 'Sorting'],
    acceptanceRate: '72%',
    description: `Given a directed acyclic graph (DAG) with n vertices and adjacency list adj, return a topological ordering using Kahn's algorithm. If the graph contains a cycle, return an error message.`,
    examples: [
      {
        input: 'n = 3, adj = [[1], [2], []]',
        output: '[0, 1, 2]',
        explanation: '0 -> 1 -> 2, so ordering is 0, 1, 2',
      },
      {
        input: 'n = 4, adj = [[1, 2], [3], [3], []]',
        output: '[0, 2, 1, 3] or [0, 1, 2, 3]',
        explanation:
          '0 must come before 1 and 2, both 1 and 2 must come before 3',
      },
      {
        input: 'n = 3, adj = [[1], [2], [0]]',
        output: `"Cycle detected — Topological Sort not possible"`,
        explanation: 'Graph contains a cycle 0 -> 1 -> 2 -> 0',
      },
    ],
    constraints: [
      '1 ≤ n ≤ 10^4',
      '0 ≤ adj[i].length ≤ n - 1',
      'Graph may or may not be acyclic',
    ],
    functionName: 'topologicalSortKahn',
    starterCode: {
      javascript: `function topologicalSortKahn(n, adj) {
  // your solution here
}
`,
      typescript: `function topologicalSortKahn(n: any, adj: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle basic cases',
        input: [3, [[1], [2], []]],
        expected: [0, 1, 2],
      },
      {
        name: 'should handle single node',
        input: [1, [[]]],
        expected: [0],
      },
      {
        name: 'should detect cycles',
        input: [3, [[1], [2], [0]]],
        expected: 'Cycle detected — Topological Sort not possible',
      },
    ],
    hiddenTestCases: [
      {
        name: 'should detect cycles',
        input: [2, [[1], [0]]],
        expected: 'Cycle detected — Topological Sort not possible',
        isHidden: true,
      },
      {
        name: 'should handle linear chain',
        input: [5, [[1], [2], [3], [4], []]],
        expected: [0, 1, 2, 3, 4],
        isHidden: true,
      },
      {
        name: 'should detect cycle in larger graph',
        input: [4, [[1], [2], [3], [1]]],
        expected: 'Cycle detected — Topological Sort not possible',
        isHidden: true,
      },
      {
        name: 'should detect self-loop',
        input: [1, [[0]]],
        expected: 'Cycle detected — Topological Sort not possible',
        isHidden: true,
      },
      {
        name: 'should detect cycle with multiple nodes',
        input: [5, [[1], [2], [3], [4], [2]]],
        expected: 'Cycle detected — Topological Sort not possible',
        isHidden: true,
      },
      {
        name: 'should handle graph with cycle in one component but valid in another',
        input: [4, [[1], [0], [3], []]],
        expected: 'Cycle detected — Topological Sort not possible',
        isHidden: true,
      },
    ],
    hints: [
      `### Compute In-degree First
\`\`\`js
const inDegree = new Array(n).fill(0);
for (let i = 0; i < n; i++) {
    for (let neighbor of adj[i]) {
        inDegree[neighbor]++;
    }
}
\`\`\``,
      `### Start with Zero In-degree Nodes
\`\`\`js
const queue = [];
for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
}
\`\`\``,
      `### Core Algorithm (BFS)
\`\`\`js
while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (let neighbor of adj[node]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
}
\`\`\``,
      `### Cycle Detection
\`\`\`js
if (result.length !== n) {
    return "Cycle detected — Topological Sort not possible";
}
\`\`\`
- Remember: Process nodes with zero in-degree first, and check result length to detect cycles!`,
    ],
    solution: {
      explanation: `### Kahn's Algorithm (BFS-based)
#### Approach
- Use in-degree counting and process nodes with zero in-degree using BFS.

#### Algorithm
- Calculate in-degree for each node
- Add all nodes with in-degree 0 to queue
- Remove node from queue and add to result
- Decrease in-degree of neighbors
- Add neighbors with in-degree 0 to queue
- If result length < n, cycle detected

#### Code`,
      code: `function topologicalSortKahn(n, adj) {
  const inDegree = new Array(n).fill(0);
  const queue = [];
  const result = [];

  // 1. Compute in-degree for each node
  for (let i = 0; i < n; i++) {
    for (let neighbor of adj[i]) {
      inDegree[neighbor]++;
    }
  }

  // 2. Push all nodes with 0 in-degree into the queue
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // 3. BFS - process nodes with zero in-degree
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    // Reduce in-degree of neighbors
    for (let neighbor of adj[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If result has fewer nodes → cycle exists
  if (result.length !== n) {
    return 'Cycle detected — Topological Sort not possible';
  }

  return result;
}`,
      complexity: {
        time: 'O(V + E)',
        space: 'O(V)',
      },
    },
  },
  {
    id: '064',
    slug: 'detect-data-type-in-js',
    title: 'Detect data type in JS',
    difficulty: 'medium',
    topics: ['Array', 'String', 'Graph', 'Math'],
    acceptanceRate: '89%',
    description: `You are required to write a function \`detectType(value)\` that takes a single input and returns a string representing its JavaScript data type. This should return one of the following values accurately:  
- \`'string'\`, \`'number'\`, \`'boolean'\`, \`'undefined'\`, \`'object'\`, \`'function'\`, \`'symbol'\`, \`'bigint'\`, \`'array'\`, or \`'null'\`.  
Note: Since \`typeof\` returns \`'object'\` for both arrays and \`null\`, you'll need to handle those two as special cases.

### **Example Inputs & Outputs**  
\`\`\`javascript
detectType("hello") → "string"  
detectType(123) → "number"  
detectType(true) → "boolean"  
detectType(undefined) → "undefined"  
detectType({}) → "object"  
detectType([]) → "array"  
detectType(null) → "null"  
detectType(function() {}) → "function"  
detectType(Symbol("id")) → "symbol"  
\`\`\`

### **Constraints & Edge Cases**  
- Must handle all JavaScript primitive types.  
- Must distinguish between \`null\` and \`object\`.  
- Must distinguish between \`array\` and \`object\`.`,
    examples: [
      {
        input: `"hello"`,
        output: `"string"`,
      },
      {
        input: '123',
        output: `"number"`,
      },
      {
        input: 'true',
        output: `"boolean"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'detectType',
    starterCode: {
      javascript: `function detectType(value) {
    // Your implementation
}
`,
      typescript: `function detectType(value: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Detect string type',
        input: ['hello'],
        expected: 'string',
      },
      {
        name: 'Detect number type',
        input: [123],
        expected: 'number',
      },
      {
        name: 'Detect boolean type',
        input: [true],
        expected: 'boolean',
      },
    ],
    hiddenTestCases: [
      {
        name: 'Detect undefined type',
        input: [undefined],
        expected: 'undefined',
        isHidden: true,
      },
      {
        name: 'Detect array type',
        input: [[1, 2, 3]],
        expected: 'array',
        isHidden: true,
      },
      {
        name: 'Detect object type',
        input: [
          {
            a: 1,
          },
        ],
        expected: 'object',
        isHidden: true,
      },
    ],
    hints: [
      `Use \`typeof\` for Basic Types

The \`typeof\` operator returns a string like \`"string"\`, \`"number"\`, \`"boolean"\`, \`"object"\`, etc.

\`\`\`js
typeof 42         // "number"
typeof "hello"    // "string"
typeof true       // "boolean"
typeof {}         // "object
\`\`\``,
      `\`typeof null\`

In JavaScript:

\`\`\`js
typeof null       // "object" ❌
\`\`\`

To correctly detect \`null\`, use a strict comparison:

\`\`\`js
if (value === null) return "null";
\`\`\`
`,
      `Detect Arrays with \`Array.isArray()\`

JavaScript arrays also return \`"object"\` with \`typeof\`. To detect them reliably:

\`\`\`js
Array.isArray([1, 2, 3]) // true
\`\`\`

So add a condition:

\`\`\`js
if (Array.isArray(value)) return "array";
\`\`\``,
      `Final Fallback to \`typeof\`

After handling \`null\` and arrays, return the result of \`typeof\`:

\`\`\`js
return typeof value;
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use \`typeof\` for most types.  
2. Use \`Array.isArray()\` to detect arrays.  
3. Check explicitly for \`null\` using \`value === null\`.

### **Solution Code**`,
      code: `function detectType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '065',
    slug: 'find-the-single-element-in-a-sorted-array',
    title: 'Find the Single Element in a Sorted Array',
    difficulty: 'medium',
    topics: ['Array', 'Sorting', 'Binary Search'],
    acceptanceRate: '78%',
    description: `You are given a **sorted array** where every element appears exactly twice, **except for one element which appears only once**.

Your task is to find and return the element that appears only once.

You must write an efficient solution with **O(log n)** time complexity and **O(1)** space complexity.`,
    examples: [
      {
        input: '[1, 1, 2, 2, 3, 4, 4]',
        output: '3',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'singleNonDuplicate',
    starterCode: {
      javascript: `function findSingleElement(arr) {

}

findSingleElement([1, 1, 2])
`,
      typescript: `function findSingleElement(arr) {

}

findSingleElement([1, 1, 2])
`,
    },
    testCases: [
      {
        name: 'Single Element in Middle',
        input: [[1, 1, 2, 3, 3, 4, 4, 8, 8]],
        expected: 2,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Single Element Near End',
        input: [[3, 3, 7, 7, 10, 11, 11]],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'Single Element Array',
        input: [[1]],
        expected: 1,
        isHidden: true,
      },
    ],
    hints: [
      `Instead of checking every element, think about narrowing down the range.

\`\`\`js
let low = 0;
let high = arr.length - 1;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  // We'll decide whether to move left or right
}
\`\`\``,
      `Since elements come in pairs, ensure that \`mid\` is always pointing to the **first element of a pair** (even index).

\`\`\`js
if (mid % 2 !== 0) {
  mid--; // shift left to make mid even
}
\`\`\``,
      `If the pair is valid (\`arr[mid] === arr[mid + 1]\`), the unique element must be to the **right**. Otherwise, it’s to the **left**.

\`\`\`js
if (arr[mid] === arr[mid + 1]) {
  low = mid + 2; // move right
} else {
  high = mid - 1; // move left
}
\`\`\``,
      `After the loop finishes, \`low\` will point to the single element.

\`\`\`js
return arr[low];
\`\`\``,
    ],
    solution: {
      explanation: `We use a binary search approach that leverages the sorted structure and the duplication pattern of the array.

- Maintain \`low\` and \`high\` pointers.
- At each step, compute \`mid\`.
- Ensure \`mid\` is even so that we always compare a full pair (\`mid\` and \`mid+1\`).
- Depending on whether \`arr[mid]\` equals \`arr[mid+1]\`, we eliminate half the search space.`,
      code: `function findSingleElement(arr) {}

findSingleElement([1, 1, 2]);`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '066',
    slug: 'sum-of-consecutive-integers',
    title: 'Sum of Consecutive Integers',
    difficulty: 'medium',
    topics: ['Math'],
    acceptanceRate: '67%',
    description:
      'Given a number n, determine whether it can be expressed as the sum of two or more consecutive positive integers. Return true or false.',
    examples: [
      {
        input: 'n = 9',
        output: 'true',
        explanation: '9 = 2 + 3 + 4',
      },
      {
        input: 'n = 15',
        output: 'true',
        explanation: '15 = 4 + 5 + 6 or 1 + 2 + 3 + 4 + 5',
      },
      {
        input: 'n = 10',
        output: 'true',
        explanation: '10 = 1 + 2 + 3 + 4',
      },
      {
        input: 'n = 8',
        output: 'false',
        explanation: '8 cannot be expressed as sum of consecutive integers',
      },
      {
        input: 'n = 1',
        output: 'false',
        explanation:
          '1 cannot be expressed as sum of two or more consecutive integers',
      },
    ],
    constraints: [
      '```js',
      '1 ≤ n ≤ 10^9',
      'Return false for:',
      'n = 1 (requires at least 2 consecutive integers)',
      'n < 1',
      '```',
    ],
    functionName: 'isSumOfConsecutive',
    starterCode: {
      javascript: `function isSumOfConsecutive(n) {
  // your implementation here
}
`,
      typescript: `function isSumOfConsecutive(n: any): any {
  // your implementation here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [1],
        expected: false,
      },
      {
        name: 'should handle base cases',
        input: [2],
        expected: false,
      },
      {
        name: 'should handle base cases',
        input: [3],
        expected: true,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle powers of four',
        input: [9],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [15],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [10],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [21],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [25],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [30],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [35],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [45],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle powers of four',
        input: [55],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [4],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [8],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [16],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [32],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [64],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [128],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [256],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [512],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle non-powers of four',
        input: [1024],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-1],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-4],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-16],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-64],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [-256],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [0],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [100],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [1000],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [10000],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [500],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle large numbers',
        input: [750],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [12],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [18],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [24],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [36],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should handle random numbers',
        input: [48],
        expected: true,
        isHidden: true,
      },
    ],
    hints: [
      `1. **Handle Edge Cases**  
   Before implementing the consecutive sum check, you should **check for invalid inputs** (negative numbers, zero, one) and handle base cases properly.

\`\`\`js
// Check for invalid inputs and handle base cases
if (n < 1) return false;
if (n === 1) return false;
\`\`\``,
      `2. **Understand the Mathematical Formula**  
   A number can be expressed as sum of \`k\` consecutive integers starting from \`x\` if:

\`\`\`js
// Sum of k consecutive integers starting from x:
// x + (x+1) + (x+2) + ... + (x+k-1) = k * (2x + k - 1) / 2 = n
// Solving for x: x = (n - k*(k-1)/2) / k
// x must be a positive integer
\`\`\``,
      `3. **Implement the Mathematical Check**  
   Use a loop to check different values of \`k\` and verify if \`x\` is a positive integer.

\`\`\`js
// For each k from 2 to maximum possible
for (let k = 2; k * (k + 1) / 2 <= n; k++) {
  const numerator = n - (k * (k - 1)) / 2;
  if (numerator % k === 0) {
    return true; // Found a valid sequence
  }
}
\`\`\``,
    ],
    solution: {
      explanation: `#### Approach
Use the mathematical formula for the sum of consecutive integers to check if a valid sequence exists.

#### Algorithm
1. Check edge cases (\`n < 1\`, \`n = 1\`)
2. For each possible sequence length \`k\` from 2 up to maximum:
    - Use formula: \`x = (n - k*(k-1)/2) / k\`
    - If \`x\` is a positive integer, return true

#### Code`,
      code: `function isSumOfConsecutive(n) {
  if (n < 1) return false;
  if (n === 1) return false;

  for (let k = 2; (k * (k + 1)) / 2 <= n; k++) {
    const numerator = n - (k * (k - 1)) / 2;
    if (numerator % k === 0) {
      return true;
    }
  }
  return false;
}`,
      complexity: {
        time: '** O(√n)',
        space: '** O(1)',
      },
    },
  },
  {
    id: '067',
    slug: 'objectassign',
    title: 'Object.assign()',
    difficulty: 'medium',
    topics: ['Polyfill', 'Object'],
    acceptanceRate: '84%',
    description: `The \`Object.assign()\` method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. Your task is to replicate this functionality.  
- If the target is \`null\` or \`undefined\`, throw a \`TypeError\`.  
- Only enumerable and own properties should be copied.  
- Later source properties overwrite earlier ones if they have the same key.  
- The method should return the target object.

### **Example Inputs & Outputs**  
\`\`\`javascript
customAssign({a: 1}, {b: 2}) → {a: 1, b: 2}  
customAssign({a: 1}, {a: 2, b: 3}) → {a: 2, b: 3}  
customAssign({}, {a: undefined}, {b: null}) → {a: undefined, b: null}  
\`\`\`

### **Constraints & Edge Cases**  
- \`target\` must not be \`null\` or \`undefined\`  
-  Only own, enumerable properties of source objects should be copied  
-  If a source is \`null\` or \`undefined\`, it should be skipped (not throw an error)  
-  Must return the modified \`target\` object  
-  Symbol properties should be ignored in this simplified version  5:["$"`,
    examples: [
      {
        input: `{"a":1},{"b":2}`,
        output: `{"a":1,"b":2}`,
      },
      {
        input: `{"a":1},{"a":2},{"a":3}`,
        output: `{"a":3}`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'customAssign',
    starterCode: {
      javascript: `function customAssign(target, ...sources) {
        // Your implementation
}
`,
      typescript: `function customAssign(target: any, ...sources: any): any {
        // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'copies properties from one object to another',
        input: [
          {
            a: 1,
          },
          {
            b: 2,
          },
        ],
        expected: {
          a: 1,
          b: 2,
        },
      },
      {
        name: 'overwrites existing properties with later sources',
        input: [
          {
            a: 1,
          },
          {
            a: 2,
          },
          {
            a: 3,
          },
        ],
        expected: {
          a: 3,
        },
      },
    ],
    hiddenTestCases: [
      {
        name: 'skips null or undefined sources',
        input: [
          {
            a: 1,
          },
          null,
          undefined,
          {
            b: 2,
          },
        ],
        expected: {
          a: 1,
          b: 2,
        },
        isHidden: true,
      },
      {
        name: 'does not copy inherited properties',
        input: [
          {},
          {
            own: 'yes',
          },
        ],
        expected: {
          own: 'yes',
        },
        isHidden: true,
      },
    ],
    hints: [
      `Convert \`target\` to an Object

Before assigning, ensure \`target\` is not \`null\` or \`undefined\`, and convert it to an object:

\`\`\`js
if (target === null || target === undefined) {
  throw new TypeError('Cannot convert undefined or null to object');
}

const to = Object(target);
\`\`\``,
      `Iterate Over \`sources\`

Loop through each object in the rest parameter \`...sources\`:

\`\`\`js
for (const source of sources) {
  // ignore null/undefined sources
}
\`\`\``,
      `Copy Only Own Properties

Use a \`for...in\` loop and \`hasOwnProperty\` check to avoid inherited properties:

\`\`\`js
for (const key in source) {
  if (Object.prototype.hasOwnProperty.call(source, key)) {
    to[key] = source[key];
  }
}
\`\`\``,
      `Return the Modified Target

At the end, return the \`target\` object with all assigned properties:

\`\`\`js
return to;
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Validate that the target is not \`null\` or \`undefined\`.  
2. Convert the target to an object (if it’s a primitive like string or number).  
3. Iterate over each source object.  
4. Skip if source is \`null\` or \`undefined\`.  
5. Use a \`for...in\` loop and \`hasOwnProperty()\` to filter own, enumerable properties.  
6. Copy each valid property to the target.  
7. Return the target object.

### **Solution Code**`,
      code: `function customAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const to = Object(target);

  for (const source of sources) {
    if (source === null || source === undefined) continue;

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        to[key] = source[key];
      }
    }
  }

  return to;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '068',
    slug: 'lazy-evaluation',
    title: 'Lazy Evaluation',
    difficulty: 'medium',
    topics: ['Array', 'Queue', 'Math', 'Object'],
    acceptanceRate: '73%',
    description: `Design a \`lazy\` function that wraps an initial function and returns an object that allows chaining of additional function calls. These functions should not execute immediately. Instead, all operations should be queued and only run in sequence when \`.execute()\` is called.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const result = lazy({add}).add(2, 3).execute(); // → 5

// Example 2:
const result2 = lazy({multiply}).multiply(2, 3).add(4, 5).execute(); 
// multiply(2, 3) = 6, add(4, 5) = 9 → returns [6, 9]

// Example 3:
const divide = (a, b) => a / b;
const result3 = lazy({divide}).divide(10, 2).divide(6, 3).execute(); 
// → [5, 2]
\`\`\`

### **Constraints & Edge Cases**  
- Must support dynamic method names corresponding to function names (e.g., \`.add\`, \`.multiply\`).  
- Should return an array of results if multiple functions are queued.  
- If no function is queued, \`.execute()\` should return an empty array.  
- All arguments must be passed at chaining time and retained until execution.  
- Must handle functions with varying numbers of arguments.5:["$"`,
    examples: [],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'lazy',
    starterCode: {
      javascript: `function lazy(fn) {
    // Your implementation
}
`,
      typescript: `function lazy(fn: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Standard Case',
        input: [],
        expected: null,
      },
    ],
    hiddenTestCases: [],
    hints: [
      `Store functions to run later

Create a queue to store what to call later:

\`\`\`js
const queue = [];
\`\`\`

Each item should store:

\`\`\`js
{ fn: functionsMap[prop], args: [...] }
\`\`\``,
      `Use a Proxy to trap method calls

Return a proxy object that handles any property access:

\`\`\`js
return new Proxy({}, {
  get(_, prop) {
    // logic here
  }
});
\`\`\``,
      `Special \`execute()\` method

If the property is \`'execute'\`, return a function that:

* Maps over the queue and runs each stored function:

\`\`\`js
if (prop === 'execute') {
  return () => queue.map(({ fn, args }) => fn(...args));
}
\`\`\``,
      `Check if function exists in \`functionsMap\`

Throw an error if someone tries to use a function not defined:

\`\`\`js
if (!(prop in functionsMap)) {
  throw new Error(\`Function \${prop} not found\`);
}
\`\`\``,
      `Queue the function and chain

When a valid function is accessed:

1. Push its reference + arguments to the queue.
2. Return the same Proxy so more calls can be chained.

\`\`\`js
return (...args) => {
  queue.push({ fn: functionsMap[prop], args });
  return new Proxy({}, this); // allow chaining
};
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Capture the name of the initial function.  
2. Use a proxy to intercept chained method calls and store function references and arguments.  
3. On \`.execute()\`, run each function in the queue with its arguments.  
4. Return result(s) from execution.

### **Solution Code**`,
      code: `function lazy(functionsMap) {
    const queue = [];

    return new Proxy({}, {
        get(_, prop) {
            if (prop === 'execute') {
                return () => queue.map(({ fn, args }) => fn(...args));
            }

            if (!(prop in functionsMap)) {
                throw new Error(\`Function \${prop} not found\`);
            }

            return (...args) => {
                queue.push({ fn: functionsMap[prop], args });
                return new Proxy({}, this);
            };
        }
    });
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '069',
    slug: 'oranges-rotting',
    title: 'Oranges Rotting',
    difficulty: 'medium',
    topics: ['Array', 'Math'],
    acceptanceRate: '90%',
    description: `Write a function that determines the minimum number of minutes required for all fresh oranges in a grid to become rotten. Every minute, any fresh orange that is 4-directionally adjacent (up, down, left, right) to a rotten orange also becomes rotten. If it is impossible to rot all fresh oranges, return -1.

**Input:** A 2D array grid representing the grid of oranges.
Each cell in the grid can be:

0 → an empty cell

1 → a fresh orange

2 → a rotten orange

**Output:** Return the minimum number of minutes it takes for all fresh oranges to become rotten. If it’s not possible, return -1.


\`\`\`js
// Example 1:
Input: [
  [2,1,1],
  [1,1,0],
  [0,1,1]
]
Output: 4

// Example 2:
Input: [
  [2,1,1],
  [0,1,1],
  [1,0,1]
]
Output: -1

// Example 3:
Input: [[0,2]]
Output: 0
\`\`\`

### **Constraints & Edge Cases**
The grid can be empty.
* There may be no fresh or no rotten oranges at the start.
* Rotten oranges spread the rot to adjacent fresh oranges in 4 directions: up, down, left, and right.
* If fresh oranges are blocked by empty cells and can’t be reached, return -1.
* If there are no fresh oranges initially, return 0.
* If all oranges are already rotten, return 0.5:["$","di`,
    examples: [
      {
        input: '[[2,1,1],[1,1,0],[0,1,1]]',
        output: '4',
      },
      {
        input: '[[2,1,1],[0,1,1],[1,0,1]]',
        output: '-1',
      },
      {
        input: '[[0,2]]',
        output: '0',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'orangesRotting',
    starterCode: {
      javascript: `function orangesRotting(grid) {
  // Write your code here
}



// Example usage
`,
      typescript: `function orangesRotting(grid: any): any {
  // Write your code here
}



// Example usage
`,
    },
    testCases: [
      {
        name: 'Example 1',
        input: [
          [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
          ],
        ],
        expected: 4,
      },
      {
        name: 'Example 2',
        input: [
          [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1],
          ],
        ],
        expected: -1,
      },
      {
        name: 'All oranges already rotten',
        input: [[[0, 2]]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Empty grid',
        input: [[]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'No fresh oranges',
        input: [[[2, 0, 2]]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Fresh oranges with no rotten orange',
        input: [
          [
            [1, 1],
            [1, 1],
          ],
        ],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'One fresh orange next to one rotten',
        input: [[[2, 1]]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'Barrier prevents rot from reaching all oranges',
        input: [
          [
            [2, 1, 1],
            [0, 0, 1],
            [1, 0, 1],
          ],
        ],
        expected: -1,
        isHidden: true,
      },
      {
        name: 'Single rotten orange only',
        input: [[[2]]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'Single fresh orange only',
        input: [[[1]]],
        expected: -1,
        isHidden: true,
      },
    ],
    hints: [
      `**1. Use Breadth-First Search (BFS)**

You need to simulate the rotting process minute by minute, where every rotten orange affects its adjacent fresh oranges. This kind of level-based expansion is best handled using BFS.

\`\`\`js
// Use a queue to perform multi-source BFS
const queue = [];
// Fill it with all rotten orange positions
\`\`\``,
      `**2. Track the Fresh Oranges**
Keep a counter to track how many fresh oranges are left.
Decrease the count every time a fresh orange gets rotten during BFS traversal.

\`\`\`js
let fresh = 0; // Count fresh oranges initially
fresh--; // Reduce when a fresh orange gets rotten
\`\`\``,
      `**3. Process by Levels**

Every iteration (level) of BFS should process the oranges currently in the queue.

\`\`\`js
while (queue.length > 0 && fresh > 0) {
  let len = queue.length;
  while (len--) {
    const [r, c] = queue.shift();
    // infect neighbors
  }
  minutes++; // increment after each level
}
\`\`\`
`,
    ],
    solution: {
      explanation: `### **Approach**
**Initialize a queue** to store the positions of all initially rotten oranges.

**Count the number of fresh oranges** at the start.

**Use Breadth-First Search (BFS)** to simulate the rotting process minute by minute.

At each minute, process all rotten oranges currently in the queue and infect their 4-directional neighbors.

After processing, if any fresh oranges remain, return -1. Otherwise, return the total number of minutes elapsed.

### **Solution Code**`,
      code: `function orangesRotting(grid) {
  // Write your code here
}

// Example usage
orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '070',
    slug: 'deep-omit',
    title: 'Deep Omit',
    difficulty: 'medium',
    topics: ['Array', 'String', 'Object'],
    acceptanceRate: '79%',
    description: `Implement a function \`deepOmit(obj, keysToOmit)\` that removes all occurrences of specific keys from an object or array, regardless of how deeply nested they are.  
- It should **not mutate** the original object.  
- The function should recursively traverse objects and arrays and omit the given keys.  

**Input**:  
- \`obj\`: A deeply nested object or array.  
- \`keysToOmit\`: An array of strings representing the keys to be removed.  

**Output**:  
- A new object/array structure with the specified keys omitted at **all levels**.

### **Example Inputs & Outputs**  
\`\`\`javascript
deepOmit({ a: 1, b: { c: 2, d: 3 } }, ['c']);
// Output: { a: 1, b: { d: 3 } }

deepOmit({ a: { b: { c: 3, d: 4 }, c: 5 }, c: 1 }, ['c']);
// Output: { a: { b: { d: 4 } } }

deepOmit([{ a: 1, b: 2 }, { b: 3, c: 4 }], ['b']);
// Output: [{ a: 1 }, { c: 4 }]
\`\`\`

### **Constraints & Edge Cases**  
- The object may contain nested arrays or other objects.  
- Keys may appear multiple times at different nesting levels.  
- Arrays should retain their structure.  
- Must not mutate the original input object or array.`,
    examples: [
      {
        input: `{"a":1,"b":2},["b"]`,
        output: `{"a":1}`,
      },
      {
        input: `{"a":1,"b":{"c":2,"d":3}},["c"]`,
        output: `{"a":1,"b":{"d":3}}`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'deepOmit',
    starterCode: {
      javascript: `function deepOmit(obj, keysToOmit) {
    // Your implementation
}
`,
      typescript: `function deepOmit(obj: any, keysToOmit: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'removes keys from shallow object',
        input: [
          {
            a: 1,
            b: 2,
          },
          ['b'],
        ],
        expected: {
          a: 1,
        },
      },
      {
        name: 'removes keys from nested object',
        input: [
          {
            a: 1,
            b: {
              c: 2,
              d: 3,
            },
          },
          ['c'],
        ],
        expected: {
          a: 1,
          b: {
            d: 3,
          },
        },
      },
    ],
    hiddenTestCases: [
      {
        name: 'removes keys from multiple levels',
        input: [
          {
            a: {
              b: {
                c: 3,
                d: 4,
              },
              c: 5,
            },
            c: 1,
          },
          ['c'],
        ],
        expected: {
          a: {
            b: {
              d: 4,
            },
          },
        },
        isHidden: true,
      },
      {
        name: 'works with arrays of objects',
        input: [
          [
            {
              a: 1,
              b: 2,
            },
            {
              b: 3,
              c: 4,
            },
          ],
          ['b'],
        ],
        expected: [
          {
            a: 1,
          },
          {
            c: 4,
          },
        ],
        isHidden: true,
      },
      {
        name: 'does not mutate original object',
        input: [
          {
            a: 1,
            b: {
              c: 2,
            },
          },
          ['c'],
        ],
        expected: {
          a: 1,
          b: {
            c: 2,
          },
        },
        isHidden: true,
      },
    ],
    hints: [
      `Handle arrays recursively

If the input is an array, map through it and apply \`deepOmit\` to each item:

\`\`\`js
if (Array.isArray(obj)) {
  return obj.map(item => deepOmit(item, keysToOmit));
}
\`\`\`

This ensures nested arrays are processed deeply.`,
      `Use recursion for plain objects

If the input is a non-null object, iterate over its keys:

\`\`\`js
if (obj !== null && typeof obj === 'object') {
  return Object.keys(obj).reduce((acc, key) => {
    if (!keysToOmit.includes(key)) {
      acc[key] = deepOmit(obj[key], keysToOmit);
    }
    return acc;
  }, {});
}
\`\`\`

Only include keys **not** in \`keysToOmit\`, and recurse on their values.`,
      `Return primitive values as-is

If it's not an object or array, just return it:

\`\`\`js
return obj;
\`\`\`

Primitives (string, number, boolean, etc.) don’t need processing.`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Check if the input is an array → recursively deepOmit each element.  
2. If the input is an object → iterate through its keys:  
   - If a key is in \`keysToOmit\`, skip it.  
   - Otherwise, apply \`deepOmit\` recursively on the value.  
3. If it’s a primitive → return it as is.  

### **Solution Code**`,
      code: `function deepOmit(obj, keysToOmit) {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepOmit(item, keysToOmit));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      if (!keysToOmit.includes(key)) {
        acc[key] = deepOmit(obj[key], keysToOmit);
      }
      return acc;
    }, {});
  }

  return obj; // primitive
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '071',
    slug: 'shortest-distance-from-source-bfs',
    title: 'Shortest Distance from Source (BFS)',
    difficulty: 'medium',
    topics: ['Array', 'Graph', 'Math'],
    acceptanceRate: '68%',
    description:
      'Given a directed graph represented as an adjacency list graph and a source node src, return an array dist where dist[i] represents the shortest distance (number of edges) from src to node i. If node i is unreachable from src, dist[i] should be Infinity. The distance from src to itself is 0.',
    examples: [
      {
        input: 'graph = [[1, 2], [3], [4], [5], [3], []], src = 0',
        output: '[0, 1, 1, 2, 2, 3]',
        explanation: '- Distance from 0 to 0: 0 (same node)',
      },
      {
        input: 'graph = [[1], [2], []], src = 0',
        output: '[0, 1, 2]',
        explanation: 'Linear path 0 -> 1 -> 2',
      },
      {
        input: 'graph = [[1], [2], []], src = 2',
        output: '[Infinity, Infinity, 0]',
        explanation: 'Node 2 cannot reach nodes 0 or 1',
      },
      {
        input: 'graph = [[1], [2], [0]], src = 0',
        output: '[0, 1, 2]',
        explanation: 'Graph with cycle, but shortest distances are still valid',
      },
    ],
    constraints: [
      'Graph is represented as an adjacency list where graph[i] contains all nodes reachable from node i',
      'Nodes are numbered from 0 to n-1 where n is the number of nodes',
      'Graph may contain cycles',
      'Graph may be disconnected',
      'Distance from src to itself is always 0',
      'Unreachable nodes have distance Infinity',
      'Input validation: handle invalid inputs gracefully (non-array graph, invalid node indices)',
    ],
    functionName: 'shortestDistance',
    starterCode: {
      javascript: `function shortestDistance(graph, src) {
  // your solution here
}
`,
      typescript: `function shortestDistance(graph: any, src: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[[]], 0],
        expected: [0],
      },
      {
        name: 'should handle base cases',
        input: [[[1], []], 0],
        expected: [0, 1],
      },
      {
        name: 'should handle base cases',
        input: [[[1], [2], []], 0],
        expected: [0, 1, 2],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle direct neighbors',
        input: [[[1, 2], [], []], 0],
        expected: [0, 1, 1],
        isHidden: true,
      },
      {
        name: 'should handle direct neighbors',
        input: [[[1, 2, 3], [], [], []], 0],
        expected: [0, 1, 1, 1],
        isHidden: true,
      },
      {
        name: 'should handle multi-hop paths',
        input: [[[1], [2], [3], []], 0],
        expected: [0, 1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle multi-hop paths',
        input: [[[1, 2], [3], [4], [5], [3], []], 0],
        expected: [0, 1, 1, 2, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle multi-hop paths',
        input: [[[1], [2], [3], [4], []], 0],
        expected: [0, 1, 2, 3, 4],
        isHidden: true,
      },
      {
        name: 'should handle disconnected graphs',
        input: [[[1], [], [3], []], 0],
        expected: [0, 1, null, null],
        isHidden: true,
      },
      {
        name: 'should handle disconnected graphs',
        input: [[[1], [], [3], []], 2],
        expected: [null, null, 0, 1],
        isHidden: true,
      },
      {
        name: 'should handle disconnected graphs',
        input: [[[1], [], [3], []], 1],
        expected: [null, 0, null, null],
        isHidden: true,
      },
      {
        name: 'should handle graphs with cycles',
        input: [[[1], [2], [0]], 0],
        expected: [0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle graphs with cycles',
        input: [[[1], [2], [0]], 1],
        expected: [2, 0, 1],
        isHidden: true,
      },
      {
        name: 'should handle graphs with cycles',
        input: [[[1], [2], [0]], 2],
        expected: [1, 2, 0],
        isHidden: true,
      },
      {
        name: 'should handle source with no outgoing edges',
        input: [[[], [0], []], 1],
        expected: [1, 0, null],
        isHidden: true,
      },
      {
        name: 'should handle source with no outgoing edges',
        input: [[[], [0], [1]], 2],
        expected: [2, 1, 0],
        isHidden: true,
      },
      {
        name: 'should handle complex graphs',
        input: [[[1, 2], [3, 4], [5], [6], [6], [6], []], 0],
        expected: [0, 1, 1, 2, 2, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle linear graph',
        input: [[[1], [2], [3], [4], []], 2],
        expected: [null, null, 0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle star graph',
        input: [[[1, 2, 3, 4], [], [], [], []], 0],
        expected: [0, 1, 1, 1, 1],
        isHidden: true,
      },
      {
        name: 'should handle star graph',
        input: [[[1, 2, 3, 4], [], [], [], []], 1],
        expected: [null, 0, null, null, null],
        isHidden: true,
      },
      {
        name: 'should handle graph with multiple paths to same node',
        input: [[[1, 2, 3], [3], [3], []], 0],
        expected: [0, 1, 1, 1],
        isHidden: true,
      },
      {
        name: 'should handle graph with self-loops',
        input: [[[0, 1], [2], []], 0],
        expected: [0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle all nodes unreachable from source',
        input: [[[], [0], []], 2],
        expected: [null, null, 0],
        isHidden: true,
      },
      {
        name: 'should handle graph where source is isolated',
        input: [[[], [2], []], 0],
        expected: [0, null, null],
        isHidden: true,
      },
    ],
    hints: [
      `### Why BFS for Shortest Distance?
- BFS explores nodes level by level (distance from source). In unweighted graphs, the first time we reach a node is guaranteed to be via the shortest path.`,
      `### Initialize Distance Array
\`\`\`js
const dist = Array(graph.length).fill(Infinity);
dist[src] = 0; // Distance from source to itself is 0
\`\`\`
- Use Infinity to represent unreachable nodes. The source node has distance 0.`,
      `### BFS Algorithm Pattern
\`\`\`js
let q = [src]; // Queue starts with source

while (q.length) {
    let curr = q.shift();
    
    for (let neighbour of graph[curr]) {
        if (dist[neighbour] === Infinity) { // Not visited yet
            dist[neighbour] = dist[curr] + 1; // Update distance
            q.push(neighbour); // Add to queue
        }
    }
}
\`\`\``,
      `### Key Insight: Distance Check as Visited Check
- Instead of a separate visited set, use dist[neighbour] === Infinity to check if a node is unvisited. This is more efficient!`,
      `### Why This Works
- BFS explores nodes at distance 1, then distance 2, then distance 3, etc.
- First visit = shortest distance (in unweighted graphs)
- Nodes that remain Infinity are unreachable from source
- Remember: BFS guarantees shortest distance in unweighted graphs because it explores level by level!`,
    ],
    solution: {
      explanation: `Given a directed graph represented as an adjacency list and a source node, find the shortest distance from the source to all other nodes using Breadth First Search (BFS). BFS is optimal for unweighted graphs because it explores nodes level by level, ensuring the first time we reach a node is via the shortest path.

### Solution: BFS with Distance Array

#### Approach
- Use BFS to explore the graph level by level. Maintain a distance array where dist[i] represents the shortest distance from source to node i. Initialize all distances to Infinity except the source (which is 0). As we explore neighbors, update their distances if they haven't been visited yet.

#### Algorithm
- Initialize dist array with Infinity for all nodes, set dist[src] = 0.
- Initialize queue with source node [src].
- While queue is not empty:
Dequeue current node.
For each neighbor of current node:
If dist[neighbour] === Infinity (not visited yet):
Set dist[neighbour] = dist[curr] + 1.
Add neighbor to queue.
- Return the distance array.

#### Code`,
      code: `function shortestDistance(graph, src) {
  const dist = Array(graph.length).fill(Infinity);
  dist[src] = 0;

  let q = [src];

  while (q.length) {
    let curr = q.shift();

    for (let neighbour of graph[curr]) {
      if (dist[neighbour] === Infinity) {
        dist[neighbour] = dist[curr] + 1;
        q.push(neighbour);
      }
    }
  }

  return dist;
}`,
      complexity: {
        time: 'O(V + E)',
        space: 'O(V)',
      },
    },
  },
  {
    id: '072',
    slug: 'map-async-limit',
    title: 'Map Async Limit',
    difficulty: 'medium',
    topics: ['Array', 'Hash Map', 'Math', 'Async'],
    acceptanceRate: '85%',
    description: `Implement a function \`mapAsyncLimit(arr, limit, asyncFn)\` that:  
- Runs \`asyncFn\` on each item of \`arr\`.  
- Only runs **\`limit\` number of async operations concurrently**.  
- Returns a Promise that resolves to an array of results **in the same order** as input.  

**Input**:  
- \`arr\`: Array of items.  
- \`limit\`: Maximum number of concurrent async calls.  
- \`asyncFn\`: Asynchronous function returning a promise.  

**Output**:  
- A promise that resolves to an array of results after processing all inputs using \`asyncFn\`.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example: delayFn = x => new Promise(resolve => setTimeout(() => resolve(x * 2), 100))
await mapAsyncLimit([1, 2, 3, 4], 2, delayFn);
// Output: [2, 4, 6, 8]

// Example: limit = 1 behaves like sequential map
await mapAsyncLimit([1, 2, 3], 1, delayFn);
// Output: [2, 4, 6]
\`\`\`

### **Constraints & Edge Cases**  
- \`arr.length\` can be 0 → should return an empty array.  
- \`limit\` should be >= 1.  
- \`asyncFn\` may fail → should propagate the error.  
- Results must maintain input order.  
- Should handle non-promise-returning functions gracefully (wrap in \`Promise.resolve()\` if needed).  5:["`,
    examples: [
      {
        input: '[1,2,3],2,null',
        output: `"fail"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'mapAsyncLimit',
    isAsync: true,
    starterCode: {
      javascript: `function mapAsyncLimit(arr, limit, asyncFn) {
    // Your implementation
}
`,
      typescript: `function mapAsyncLimit(arr: any, limit: any, asyncFn: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'throws on async function failure',
        input: [[1, 2, 3], 2, undefined],
        expected: 'fail',
      },
    ],
    hiddenTestCases: [],
    hints: [
      `Use a \`results\` array to maintain order

Even if async tasks finish out of order, their results must go into the correct index:

\`\`\`js
results[currentIndex] = result;
\`\`\`

This ensures the final output matches the input order.`,
      `Track how many are running using \`active\`

The \`active\` counter prevents more than \`limit\` tasks from running at once:

\`\`\`js
if (active >= limit) return;
\`\`\`

Only spawn a new task if the number of active tasks is below the limit.
`,
      `Recurse to continue dispatching

After a task finishes, call \`runNext()\` to start the next one:

\`\`\`js
active--;
completed++;
runNext();
\`\`\`

This lets the queue flow smoothly without exceeding the concurrency limit.
`,
      `Resolve when all are done

Check if all tasks are complete before resolving the final promise:

\`\`\`js
if (completed === arr.length) resolve(results);
\`\`\`

This ensures you only return when everything is processed.`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use a queue-like structure to manage the next task index.  
2. Maintain an array \`results\` to store outputs in order.  
3. Spawn \`limit\` workers that pull from the queue until all items are processed.  
4. Each worker processes one item, stores result, and moves to the next.  
5. Wait for all workers using \`Promise.all\`.

### **Solution Code**`,
      code: `function mapAsyncLimit(arr, limit, asyncFn) {
  return new Promise((resolve, reject) => {
    const results = new Array(arr.length);
    let i = 0; // current index to process
    let active = 0;
    let completed = 0;

    function runNext() {
      if (completed === arr.length) return resolve(results);
      if (i === arr.length || active >= limit) return;

      const currentIndex = i++;
      active++;

      Promise.resolve(asyncFn(arr[currentIndex]))
        .then((result) => {
          results[currentIndex] = result;
          active--;
          completed++;
          runNext();
          if (completed === arr.length) resolve(results);
        })
        .catch(reject);

      runNext(); // try to start more tasks if below limit
    }

    runNext(); // start the initial wave
  });
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '073',
    slug: 'longest-substring-no-repeats',
    title: 'Longest Substring No Repeats',
    difficulty: 'medium',
    topics: ['String'],
    acceptanceRate: '74%',
    description: `Implement a function \`lengthOfLongestSubstring\` that takes a string and returns the length of the longest substring without repeating characters.

**Input:**  
- A single string \`s\` (may contain spaces, letters, digits, or symbols)

**Output:**  
- An integer representing the length of the longest substring without repeating characters

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1:
Input: "abcabcbb"
Output: 3  // "abc"

// Example 2:
Input: "bbbbb"
Output: 1  // "b"

// Example 3:
Input: "pwwkew"
Output: 3  // "wke"

// Example 4:
Input: ""
Output: 0

// Example 5:
Input: "aab"
Output: 2  // "ab"
\`\`\`

### **Constraints & Edge Cases**  
- Input string may be empty  
- Input string can contain any printable characters  
- Repeated characters may appear consecutively or at intervals  
- Result must be calculated in optimal time (O(n))`,
    examples: [
      {
        input: `"abcabcbb"`,
        output: '3',
      },
      {
        input: `"bbbbb"`,
        output: '1',
      },
      {
        input: `"pwwkew"`,
        output: '3',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'lengthOfLongestSubstring',
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
    // Your implementation
}
`,
      typescript: `function lengthOfLongestSubstring(s: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: `Returns 3 for input "abcabcbb"`,
        input: ['abcabcbb'],
        expected: 3,
      },
      {
        name: `Returns 1 for input "bbbbb"`,
        input: ['bbbbb'],
        expected: 1,
      },
      {
        name: `Returns 3 for input "pwwkew"`,
        input: ['pwwkew'],
        expected: 3,
      },
    ],
    hiddenTestCases: [
      {
        name: 'Returns 0 for an empty string',
        input: [''],
        expected: 0,
        isHidden: true,
      },
      {
        name: `Returns full length for unique string "abcdef"`,
        input: ['abcdef'],
        expected: 6,
        isHidden: true,
      },
      {
        name: `Returns 2 for input "aab"`,
        input: ['aab'],
        expected: 2,
        isHidden: true,
      },
    ],
    hints: [
      `Use a sliding window

Use two pointers (\`start\` and \`end\`) to represent a window in the string.`,
      `Use a Set to track characters in the window

Keep adding characters to a set as you expand the window.

\`\`\`js
charSet.add(s[end]);
\`\`\`
`,
      `Shrink the window when duplicate found

If \`s[end]\` is already in the set, remove characters from the start until the duplicate is gone.

\`\`\`js
while (charSet.has(s[end])) {
    charSet.delete(s[start]);
    start++;
}
\`\`\``,
      `Update max length

At each step, update the max length with the current window size:

\`\`\`js
maxLen = Math.max(maxLen, end - start + 1);
\`\`\`
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Initialize a set to keep track of characters in the current window.  
2. Use two pointers: \`start\` and \`end\` to represent the sliding window.  
3. Move the \`end\` pointer forward:
   - If character not in set, add to set and update max length.
   - If character is in set, remove characters from the start until it's removed.  
4. Repeat until \`end\` reaches the end of the string.

### **Solution Code**`,
      code: `function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  let charSet = new Set();
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }
    charSet.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '074',
    slug: 'merge-array',
    title: 'Merge Array',
    difficulty: 'medium',
    topics: ['Array', 'Object'],
    acceptanceRate: '91%',
    description: `You are given two arrays of objects. Each object contains an \`id\` field and other key-value data. The goal is to **merge the data by \`id\`**.  
- If an \`id\` exists in both arrays, merge the properties.  
- If it exists only in one, include it as is.  
- In case of conflict (same key but different values), prefer values from the second array.

**Input**:  
- Two arrays of objects (each object has at least an \`id\` key)

**Output**:  
- A new array with merged objects based on \`id\`

### **Example Inputs & Outputs**  
\`\`\`javascript
Input:
arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }]

Output:
[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie" }
]
\`\`\`

### **Constraints & Edge Cases**  
- Arrays can be of different lengths  
- Objects may have overlapping or unique fields  
- Duplicate \`id\`s within a single array should not occur  
- If the same field exists in both and differs, use the value from the second array`,
    examples: [
      {
        input: `[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}],[{"id":2,"age":30},{"id":3,"name":"Charlie"}]`,
        output: `[{"id":1,"name":"Alice"},{"id":2,"name":"Bob","age":30},{"id":3,"name":"Charlie"}]`,
      },
      {
        input: `[{"id":1,"name":"Alice"}],[{"id":1,"name":"Alicia","age":28}]`,
        output: `[{"id":1,"name":"Alicia","age":28}]`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'mergeData',
    starterCode: {
      javascript: `function mergeData(arr1, arr2) {
    // Your implementation
}
`,
      typescript: `function mergeData(arr1: any, arr2: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'merges common ids and retains unique ones',
        input: [
          [
            {
              id: 1,
              name: 'Alice',
            },
            {
              id: 2,
              name: 'Bob',
            },
          ],
          [
            {
              id: 2,
              age: 30,
            },
            {
              id: 3,
              name: 'Charlie',
            },
          ],
        ],
        expected: [
          {
            id: 1,
            name: 'Alice',
          },
          {
            id: 2,
            name: 'Bob',
            age: 30,
          },
          {
            id: 3,
            name: 'Charlie',
          },
        ],
      },
      {
        name: 'overrides conflicting fields with arr2 values',
        input: [
          [
            {
              id: 1,
              name: 'Alice',
            },
          ],
          [
            {
              id: 1,
              name: 'Alicia',
              age: 28,
            },
          ],
        ],
        expected: [
          {
            id: 1,
            name: 'Alicia',
            age: 28,
          },
        ],
      },
    ],
    hiddenTestCases: [
      {
        name: 'returns correct result when arr1 is empty',
        input: [
          [],
          [
            {
              id: 1,
              name: 'Only',
            },
          ],
        ],
        expected: [
          {
            id: 1,
            name: 'Only',
          },
        ],
        isHidden: true,
      },
      {
        name: 'returns correct result when arr2 is empty',
        input: [
          [
            {
              id: 1,
              name: 'Solo',
            },
          ],
          [],
        ],
        expected: [
          {
            id: 1,
            name: 'Solo',
          },
        ],
        isHidden: true,
      },
      {
        name: 'handles no overlapping ids',
        input: [
          [
            {
              id: 1,
              foo: 'bar',
            },
          ],
          [
            {
              id: 2,
              bar: 'baz',
            },
          ],
        ],
        expected: [
          {
            id: 1,
            foo: 'bar',
          },
          {
            id: 2,
            bar: 'baz',
          },
        ],
        isHidden: true,
      },
    ],
    hints: [
      `Use a Map to merge by \`id\`

* Map keys are \`id\`, values are merged objects.

\`\`\`js
const map = new Map();
\`\`\``,
      `Add all items from first array to Map

* Use \`id\` as key, spread to copy object.

\`\`\`js
for (let item of arr1) {
  map.set(item.id, { ...item });
}
\`\`\``,
      `Merge or add items from second array

* If \`id\` exists, merge objects, letting \`arr2\` override.
* Otherwise, add new entry.

\`\`\`js
for (let item of arr2) {
  if (map.has(item.id)) {
    map.set(item.id, { ...map.get(item.id), ...item });
  } else {
    map.set(item.id, { ...item });
  }
}
\`\`\``,
      `Return merged results as array

\`\`\`js
return Array.from(map.values());
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Convert the first array to a map (\`id\` → object)  
2. Loop through the second array:  
   - If \`id\` exists, merge with existing object  
   - If not, add new entry  
3. Return the values of the map as the result array  

### **Solution Code**`,
      code: `function mergeData(arr1, arr2) {
  const map = new Map();

  for (let item of arr1) {
    map.set(item.id, { ...item });
  }

  for (let item of arr2) {
    if (map.has(item.id)) {
      map.set(item.id, { ...map.get(item.id), ...item }); // arr2 overrides
    } else {
      map.set(item.id, { ...item });
    }
  }

  return Array.from(map.values());
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '075',
    slug: 'spiral-matrix-pathfinder',
    title: 'Spiral Matrix Pathfinder',
    difficulty: 'medium',
    topics: ['Array', 'Two Pointers'],
    acceptanceRate: '80%',
    description:
      'Given a 2D matrix where some cells contain obstacles (marked as `-1`), traverse the matrix in a **spiral pattern** starting from the top-left corner. Collect all non-obstacle values in the order they are visited.',
    examples: [
      {
        input: 'matrix = [',
        output: '[1, 2, 3, 6, 9, 8, 7, 4, 5]',
      },
      {
        input: 'matrix = [',
        output: '[1, 3, 6, 9, 8, 7, 4, 5]',
      },
      {
        input: 'matrix = [',
        output: '[1, 2, 4, 3]',
      },
    ],
    constraints: [
      '\\(1 \\leq \\text{matrix.length} \\leq 100\\)',
      '\\(1 \\leq \\text{matrix[i].length} \\leq 100\\)',
      'All rows have the same length',
      'Matrix values are integers (including `-1` for obstacles)',
      'Matrix is not empty',
    ],
    functionName: 'spiralMatrixPathfinder',
    starterCode: {
      javascript: `function spiralMatrixPathfinder(matrix) {
  // your solution
}
`,
      typescript: `function spiralMatrixPathfinder(matrix: any): any {
  // your solution
}
`,
    },
    testCases: [
      {
        name: 'should handle empty matrix',
        input: [[]],
        expected: [],
      },
      {
        name: 'should handle empty matrix',
        input: [[[]]],
        expected: [],
      },
      {
        name: 'should handle empty matrix',
        input: [null],
        expected: [],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle single element matrix',
        input: [[[5]]],
        expected: [5],
        isHidden: true,
      },
      {
        name: 'should handle single element matrix',
        input: [[[-1]]],
        expected: [],
        isHidden: true,
      },
      {
        name: 'should handle 2x2 matrix without blocked cells',
        input: [
          [
            [1, 2],
            [4, 3],
          ],
        ],
        expected: [1, 2, 3, 4],
        isHidden: true,
      },
      {
        name: 'should handle 2x2 matrix with blocked cells',
        input: [
          [
            [1, -1],
            [3, 2],
          ],
        ],
        expected: [1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle 3x3 matrix without blocked cells',
        input: [
          [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
          ],
        ],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        isHidden: true,
      },
      {
        name: 'should handle 3x3 matrix with blocked cells',
        input: [
          [
            [1, 2, -1],
            [8, 9, 4],
            [7, -1, 5],
          ],
        ],
        expected: [1, 2, 4, 5, 7, 8, 9],
        isHidden: true,
      },
      {
        name: 'should handle 4x4 matrix with blocked cells',
        input: [
          [
            [1, 2, 3, 4],
            [12, -1, -1, 5],
            [11, -1, -1, 6],
            [10, 9, 8, 7],
          ],
        ],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        isHidden: true,
      },
      {
        name: 'should handle matrix with all blocked cells',
        input: [
          [
            [-1, -1],
            [-1, -1],
          ],
        ],
        expected: [],
        isHidden: true,
      },
      {
        name: 'should handle matrix with blocked center',
        input: [
          [
            [1, 2, 3],
            [4, -1, 6],
            [7, 8, 9],
          ],
        ],
        expected: [1, 2, 3, 6, 9, 8, 7, 4],
        isHidden: true,
      },
      {
        name: 'should handle 1x3 matrix',
        input: [[[1, 2, 3]]],
        expected: [1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle 3x1 matrix',
        input: [[[1], [2], [3]]],
        expected: [1, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle matrix with blocked edges',
        input: [
          [
            [1, -1, 3],
            [-1, 5, -1],
            [7, -1, 9],
          ],
        ],
        expected: [1, 3, 9, 7, 5],
        isHidden: true,
      },
    ],
    hints: [
      `1. **Handle Edge Cases**  
   Before implementing the spiral traversal, you should **check for invalid inputs** (empty matrices, null values) and handle base cases properly.

\`\`\`js
// Check for invalid inputs and handle base cases
if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []
\`\`\``,
      `2. **Initialize the Variables**  
   Start with boundary variables and a visited array to track the spiral path.

\`\`\`js
// Initialize with boundary variables
const rows = matrix.length;
const cols = matrix[0].length;
const result = [];
const visited = Array(rows).fill().map(() => Array(cols).fill(false));
let top = 0, bottom = rows - 1;
let left = 0, right = cols - 1
\`\`\``,
      `3. **Implement Spiral Traversal**  
   Use a loop to traverse the matrix in spiral order while avoiding obstacles.

\`\`\`js
// Traverse in spiral order
while (top <= bottom && left <= right) {
  // Traverse right
  for (let col = left; col <= right; col++) {
    if (!visited[top][col] && matrix[top][col] !== -1) {
      result.push(matrix[top][col]);
      visited[top][col] = true;
    }
  }
  top++;
  
  // Continue with other directions...
}
\`\`\``,
    ],
    solution: {
      explanation:
        'This function traverses a matrix in spiral order while avoiding blocked cells (represented by -1).',
      code: `function spiralMatrixPathfinder(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  const visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));

  let top = 0,
    bottom = rows - 1;
  let left = 0,
    right = cols - 1;

  while (top <= bottom && left <= right) {
    // Traverse right
    for (let col = left; col <= right; col++) {
      if (!visited[top][col] && matrix[top][col] !== -1) {
        result.push(matrix[top][col]);
        visited[top][col] = true;
      }
    }
    top++;

    // Traverse down
    for (let row = top; row <= bottom; row++) {
      if (!visited[row][right] && matrix[row][right] !== -1) {
        result.push(matrix[row][right]);
        visited[row][right] = true;
      }
    }
    right--;

    // Traverse left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        if (!visited[bottom][col] && matrix[bottom][col] !== -1) {
          result.push(matrix[bottom][col]);
          visited[bottom][col] = true;
        }
      }
      bottom--;
    }

    // Traverse up
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        if (!visited[row][left] && matrix[row][left] !== -1) {
          result.push(matrix[row][left]);
          visited[row][left] = true;
        }
      }
      left++;
    }
  }

  return result;
}`,
      complexity: {
        time: '** O(m × n) where m×n is matrix size',
        space: '** O(m × n) for visited array',
      },
    },
  },
  {
    id: '076',
    slug: 'reverse-words-in-a-string',
    title: 'Reverse Words in a String',
    difficulty: 'medium',
    topics: ['String', 'Polyfill'],
    acceptanceRate: '69%',
    description: `Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note: The input string may contain leading or trailing spaces or multiple spaces between words. The returned string should only have a single space separating the words and no extra spaces.

**Example Inputs & Outputs**

\`\`\`js
// Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

// Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
\`\`\`

### **Constraints & Edge Cases**
* 1 <= s.length <= 10^4
* s contains English letters (upper-case and lower-case), digits, and spaces ' '.
* There is at least one word in s.
* Empty string or string with only spaces should return an empty string.
* Single word should return the word itself.
* Multiple spaces between words should be reduced to a single space in the output.`,
    examples: [
      {
        input: `"the sky is blue"`,
        output: `"blue is sky the"`,
      },
      {
        input: `"  hello world  "`,
        output: `"world hello"`,
      },
      {
        input: `"a good   example"`,
        output: `"example good a"`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'reverseWords',
    starterCode: {
      javascript: `function reverseWords(s) {

}
`,
      typescript: `function reverseWords(s: any): any {

}
`,
    },
    testCases: [
      {
        name: `Should return 'blue is sky the' for 'the sky is blue'`,
        input: ['the sky is blue'],
        expected: 'blue is sky the',
      },
      {
        name: `Should return 'world hello' for '  hello world  '`,
        input: ['  hello world  '],
        expected: 'world hello',
      },
      {
        name: `Should return 'example good a' for 'a good   example'`,
        input: ['a good   example'],
        expected: 'example good a',
      },
    ],
    hiddenTestCases: [
      {
        name: `Should return 'hello' for 'hello'`,
        input: ['hello'],
        expected: 'hello',
        isHidden: true,
      },
      {
        name: `Should return '' for '   '`,
        input: ['   '],
        expected: '',
        isHidden: true,
      },
      {
        name: `Should return 'a' for ' a '`,
        input: [' a '],
        expected: 'a',
        isHidden: true,
      },
      {
        name: `Should return '2023 is year The' for 'The year is 2023'`,
        input: ['The year is 2023'],
        expected: '2023 is year The',
        isHidden: true,
      },
      {
        name: `Should return 'example another is This' for 'This   is another    example'`,
        input: ['This   is another    example'],
        expected: 'example another is This',
        isHidden: true,
      },
      {
        name: 'Should correctly reverse 1000 words',
        input: [
          'word0   word1   word2   word3   word4   word5   word6   word7   word8   word9   word10   word11   word12   word13   word14   word15   word16   word17   word18   word19   word20   word21   word22   word23   word24   word25   word26   word27   word28   word29   word30   word31   word32   word33   word34   word35   word36   word37   word38   word39   word40   word41   word42   word43   word44   word45   word46   word47   word48   word49   word50   word51   word52   word53   word54   word55   word56   word57   word58   word59   word60   word61   word62   word63   word64   word65   word66   word67   word68   word69   word70   word71   word72   word73   word74   word75   word76   word77   word78   word79   word80   word81   word82   word83   word84   word85   word86   word87   word88   word89   word90   word91   word92   word93   word94   word95   word96   word97   word98   word99   word100   word101   word102   word103   word104   word105   word106   word107   word108   word109   word110   word111   word112   word113   word114   word115   word116   word117   word118   word119   word120   word121   word122   word123   word124   word125   word126   word127   word128   word129   word130   word131   word132   word133   word134   word135   word136   word137   word138   word139   word140   word141   word142   word143   word144   word145   word146   word147   word148   word149   word150   word151   word152   word153   word154   word155   word156   word157   word158   word159   word160   word161   word162   word163   word164   word165   word166   word167   word168   word169   word170   word171   word172   word173   word174   word175   word176   word177   word178   word179   word180   word181   word182   word183   word184   word185   word186   word187   word188   word189   word190   word191   word192   word193   word194   word195   word196   word197   word198   word199   word200   word201   word202   word203   word204   word205   word206   word207   word208   word209   word210   word211   word212   word213   word214   word215   word216   word217   word218   word219   word220   word221   word222   word223   word224   word225   word226   word227   word228   word229   word230   word231   word232   word233   word234   word235   word236   word237   word238   word239   word240   word241   word242   word243   word244   word245   word246   word247   word248   word249   word250   word251   word252   word253   word254   word255   word256   word257   word258   word259   word260   word261   word262   word263   word264   word265   word266   word267   word268   word269   word270   word271   word272   word273   word274   word275   word276   word277   word278   word279   word280   word281   word282   word283   word284   word285   word286   word287   word288   word289   word290   word291   word292   word293   word294   word295   word296   word297   word298   word299   word300   word301   word302   word303   word304   word305   word306   word307   word308   word309   word310   word311   word312   word313   word314   word315   word316   word317   word318   word319   word320   word321   word322   word323   word324   word325   word326   word327   word328   word329   word330   word331   word332   word333   word334   word335   word336   word337   word338   word339   word340   word341   word342   word343   word344   word345   word346   word347   word348   word349   word350   word351   word352   word353   word354   word355   word356   word357   word358   word359   word360   word361   word362   word363   word364   word365   word366   word367   word368   word369   word370   word371   word372   word373   word374   word375   word376   word377   word378   word379   word380   word381   word382   word383   word384   word385   word386   word387   word388   word389   word390   word391   word392   word393   word394   word395   word396   word397   word398   word399   word400   word401   word402   word403   word404   word405   word406   word407   word408   word409   word410   word411   word412   word413   word414   word415   word416   word417   word418   word419   word420   word421   word422   word423   word424   word425   word426   word427   word428   word429   word430   word431   word432   word433   word434   word435   word436   word437   word438   word439   word440   word441   word442   word443   word444   word445   word446   word447   word448   word449   word450   word451   word452   word453   word454   word455   word456   word457   word458   word459   word460   word461   word462   word463   word464   word465   word466   word467   word468   word469   word470   word471   word472   word473   word474   word475   word476   word477   word478   word479   word480   word481   word482   word483   word484   word485   word486   word487   word488   word489   word490   word491   word492   word493   word494   word495   word496   word497   word498   word499   word500   word501   word502   word503   word504   word505   word506   word507   word508   word509   word510   word511   word512   word513   word514   word515   word516   word517   word518   word519   word520   word521   word522   word523   word524   word525   word526   word527   word528   word529   word530   word531   word532   word533   word534   word535   word536   word537   word538   word539   word540   word541   word542   word543   word544   word545   word546   word547   word548   word549   word550   word551   word552   word553   word554   word555   word556   word557   word558   word559   word560   word561   word562   word563   word564   word565   word566   word567   word568   word569   word570   word571   word572   word573   word574   word575   word576   word577   word578   word579   word580   word581   word582   word583   word584   word585   word586   word587   word588   word589   word590   word591   word592   word593   word594   word595   word596   word597   word598   word599   word600   word601   word602   word603   word604   word605   word606   word607   word608   word609   word610   word611   word612   word613   word614   word615   word616   word617   word618   word619   word620   word621   word622   word623   word624   word625   word626   word627   word628   word629   word630   word631   word632   word633   word634   word635   word636   word637   word638   word639   word640   word641   word642   word643   word644   word645   word646   word647   word648   word649   word650   word651   word652   word653   word654   word655   word656   word657   word658   word659   word660   word661   word662   word663   word664   word665   word666   word667   word668   word669   word670   word671   word672   word673   word674   word675   word676   word677   word678   word679   word680   word681   word682   word683   word684   word685   word686   word687   word688   word689   word690   word691   word692   word693   word694   word695   word696   word697   word698   word699   word700   word701   word702   word703   word704   word705   word706   word707   word708   word709   word710   word711   word712   word713   word714   word715   word716   word717   word718   word719   word720   word721   word722   word723   word724   word725   word726   word727   word728   word729   word730   word731   word732   word733   word734   word735   word736   word737   word738   word739   word740   word741   word742   word743   word744   word745   word746   word747   word748   word749   word750   word751   word752   word753   word754   word755   word756   word757   word758   word759   word760   word761   word762   word763   word764   word765   word766   word767   word768   word769   word770   word771   word772   word773   word774   word775   word776   word777   word778   word779   word780   word781   word782   word783   word784   word785   word786   word787   word788   word789   word790   word791   word792   word793   word794   word795   word796   word797   word798   word799   word800   word801   word802   word803   word804   word805   word806   word807   word808   word809   word810   word811   word812   word813   word814   word815   word816   word817   word818   word819   word820   word821   word822   word823   word824   word825   word826   word827   word828   word829   word830   word831   word832   word833   word834   word835   word836   word837   word838   word839   word840   word841   word842   word843   word844   word845   word846   word847   word848   word849   word850   word851   word852   word853   word854   word855   word856   word857   word858   word859   word860   word861   word862   word863   word864   word865   word866   word867   word868   word869   word870   word871   word872   word873   word874   word875   word876   word877   word878   word879   word880   word881   word882   word883   word884   word885   word886   word887   word888   word889   word890   word891   word892   word893   word894   word895   word896   word897   word898   word899   word900   word901   word902   word903   word904   word905   word906   word907   word908   word909   word910   word911   word912   word913   word914   word915   word916   word917   word918   word919   word920   word921   word922   word923   word924   word925   word926   word927   word928   word929   word930   word931   word932   word933   word934   word935   word936   word937   word938   word939   word940   word941   word942   word943   word944   word945   word946   word947   word948   word949   word950   word951   word952   word953   word954   word955   word956   word957   word958   word959   word960   word961   word962   word963   word964   word965   word966   word967   word968   word969   word970   word971   word972   word973   word974   word975   word976   word977   word978   word979   word980   word981   word982   word983   word984   word985   word986   word987   word988   word989   word990   word991   word992   word993   word994   word995   word996   word997   word998   word999',
        ],
        expected:
          'word999 word998 word997 word996 word995 word994 word993 word992 word991 word990 word989 word988 word987 word986 word985 word984 word983 word982 word981 word980 word979 word978 word977 word976 word975 word974 word973 word972 word971 word970 word969 word968 word967 word966 word965 word964 word963 word962 word961 word960 word959 word958 word957 word956 word955 word954 word953 word952 word951 word950 word949 word948 word947 word946 word945 word944 word943 word942 word941 word940 word939 word938 word937 word936 word935 word934 word933 word932 word931 word930 word929 word928 word927 word926 word925 word924 word923 word922 word921 word920 word919 word918 word917 word916 word915 word914 word913 word912 word911 word910 word909 word908 word907 word906 word905 word904 word903 word902 word901 word900 word899 word898 word897 word896 word895 word894 word893 word892 word891 word890 word889 word888 word887 word886 word885 word884 word883 word882 word881 word880 word879 word878 word877 word876 word875 word874 word873 word872 word871 word870 word869 word868 word867 word866 word865 word864 word863 word862 word861 word860 word859 word858 word857 word856 word855 word854 word853 word852 word851 word850 word849 word848 word847 word846 word845 word844 word843 word842 word841 word840 word839 word838 word837 word836 word835 word834 word833 word832 word831 word830 word829 word828 word827 word826 word825 word824 word823 word822 word821 word820 word819 word818 word817 word816 word815 word814 word813 word812 word811 word810 word809 word808 word807 word806 word805 word804 word803 word802 word801 word800 word799 word798 word797 word796 word795 word794 word793 word792 word791 word790 word789 word788 word787 word786 word785 word784 word783 word782 word781 word780 word779 word778 word777 word776 word775 word774 word773 word772 word771 word770 word769 word768 word767 word766 word765 word764 word763 word762 word761 word760 word759 word758 word757 word756 word755 word754 word753 word752 word751 word750 word749 word748 word747 word746 word745 word744 word743 word742 word741 word740 word739 word738 word737 word736 word735 word734 word733 word732 word731 word730 word729 word728 word727 word726 word725 word724 word723 word722 word721 word720 word719 word718 word717 word716 word715 word714 word713 word712 word711 word710 word709 word708 word707 word706 word705 word704 word703 word702 word701 word700 word699 word698 word697 word696 word695 word694 word693 word692 word691 word690 word689 word688 word687 word686 word685 word684 word683 word682 word681 word680 word679 word678 word677 word676 word675 word674 word673 word672 word671 word670 word669 word668 word667 word666 word665 word664 word663 word662 word661 word660 word659 word658 word657 word656 word655 word654 word653 word652 word651 word650 word649 word648 word647 word646 word645 word644 word643 word642 word641 word640 word639 word638 word637 word636 word635 word634 word633 word632 word631 word630 word629 word628 word627 word626 word625 word624 word623 word622 word621 word620 word619 word618 word617 word616 word615 word614 word613 word612 word611 word610 word609 word608 word607 word606 word605 word604 word603 word602 word601 word600 word599 word598 word597 word596 word595 word594 word593 word592 word591 word590 word589 word588 word587 word586 word585 word584 word583 word582 word581 word580 word579 word578 word577 word576 word575 word574 word573 word572 word571 word570 word569 word568 word567 word566 word565 word564 word563 word562 word561 word560 word559 word558 word557 word556 word555 word554 word553 word552 word551 word550 word549 word548 word547 word546 word545 word544 word543 word542 word541 word540 word539 word538 word537 word536 word535 word534 word533 word532 word531 word530 word529 word528 word527 word526 word525 word524 word523 word522 word521 word520 word519 word518 word517 word516 word515 word514 word513 word512 word511 word510 word509 word508 word507 word506 word505 word504 word503 word502 word501 word500 word499 word498 word497 word496 word495 word494 word493 word492 word491 word490 word489 word488 word487 word486 word485 word484 word483 word482 word481 word480 word479 word478 word477 word476 word475 word474 word473 word472 word471 word470 word469 word468 word467 word466 word465 word464 word463 word462 word461 word460 word459 word458 word457 word456 word455 word454 word453 word452 word451 word450 word449 word448 word447 word446 word445 word444 word443 word442 word441 word440 word439 word438 word437 word436 word435 word434 word433 word432 word431 word430 word429 word428 word427 word426 word425 word424 word423 word422 word421 word420 word419 word418 word417 word416 word415 word414 word413 word412 word411 word410 word409 word408 word407 word406 word405 word404 word403 word402 word401 word400 word399 word398 word397 word396 word395 word394 word393 word392 word391 word390 word389 word388 word387 word386 word385 word384 word383 word382 word381 word380 word379 word378 word377 word376 word375 word374 word373 word372 word371 word370 word369 word368 word367 word366 word365 word364 word363 word362 word361 word360 word359 word358 word357 word356 word355 word354 word353 word352 word351 word350 word349 word348 word347 word346 word345 word344 word343 word342 word341 word340 word339 word338 word337 word336 word335 word334 word333 word332 word331 word330 word329 word328 word327 word326 word325 word324 word323 word322 word321 word320 word319 word318 word317 word316 word315 word314 word313 word312 word311 word310 word309 word308 word307 word306 word305 word304 word303 word302 word301 word300 word299 word298 word297 word296 word295 word294 word293 word292 word291 word290 word289 word288 word287 word286 word285 word284 word283 word282 word281 word280 word279 word278 word277 word276 word275 word274 word273 word272 word271 word270 word269 word268 word267 word266 word265 word264 word263 word262 word261 word260 word259 word258 word257 word256 word255 word254 word253 word252 word251 word250 word249 word248 word247 word246 word245 word244 word243 word242 word241 word240 word239 word238 word237 word236 word235 word234 word233 word232 word231 word230 word229 word228 word227 word226 word225 word224 word223 word222 word221 word220 word219 word218 word217 word216 word215 word214 word213 word212 word211 word210 word209 word208 word207 word206 word205 word204 word203 word202 word201 word200 word199 word198 word197 word196 word195 word194 word193 word192 word191 word190 word189 word188 word187 word186 word185 word184 word183 word182 word181 word180 word179 word178 word177 word176 word175 word174 word173 word172 word171 word170 word169 word168 word167 word166 word165 word164 word163 word162 word161 word160 word159 word158 word157 word156 word155 word154 word153 word152 word151 word150 word149 word148 word147 word146 word145 word144 word143 word142 word141 word140 word139 word138 word137 word136 word135 word134 word133 word132 word131 word130 word129 word128 word127 word126 word125 word124 word123 word122 word121 word120 word119 word118 word117 word116 word115 word114 word113 word112 word111 word110 word109 word108 word107 word106 word105 word104 word103 word102 word101 word100 word99 word98 word97 word96 word95 word94 word93 word92 word91 word90 word89 word88 word87 word86 word85 word84 word83 word82 word81 word80 word79 word78 word77 word76 word75 word74 word73 word72 word71 word70 word69 word68 word67 word66 word65 word64 word63 word62 word61 word60 word59 word58 word57 word56 word55 word54 word53 word52 word51 word50 word49 word48 word47 word46 word45 word44 word43 word42 word41 word40 word39 word38 word37 word36 word35 word34 word33 word32 word31 word30 word29 word28 word27 word26 word25 word24 word23 word22 word21 word20 word19 word18 word17 word16 word15 word14 word13 word12 word11 word10 word9 word8 word7 word6 word5 word4 word3 word2 word1 word0',
        isHidden: true,
      },
    ],
    hints: [
      `**Split the String into Words**

Use a method to split the input string into an array of words, handling multiple spaces:
* Consider using a regular expression to split on one or more spaces.
* Filter out any empty strings that may result from leading/trailing spaces.

\`\`\`js
const words = s.split(/\\s+/).filter(word => word.length > 0);`,
      `**Reverse the Words**

Reverse the array of words to get them in the desired order:
\`\`\`js
words.reverse();
\`\`\``,
      `**Join with Single Space**

Join the reversed words with a single space to form the final string:
\`\`\`js
return words.join(" ");
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**
1. Split the input string into an array of words using a regular expression to handle multiple spaces.
2. Filter out empty strings to handle leading/trailing spaces.
3. Reverse the array of words.
4. Join the reversed words with a single space to form the final string.

### **Time & Space Complexity**
**Time:** O(n), where n is the length of the string, due to splitting, reversing, and joining operations.
**Space:** O(n), to store the array of words.

### **Solution Code**`,
      code: `function reverseWords(s) {
  // Split string into words and filter out empty strings
  const words = s.split(/\\s+/).filter(word => word.length > 0);
  
  // Reverse the array of words
  words.reverse();
  
  // Join words with a single space
  return words.join(" ");
}`,
      complexity: {
        time: '** O(n), where n is the length of the string, due to splitting, reversing, and joining operations.',
        space: '** O(n), to store the array of words.',
      },
    },
  },
  {
    id: '077',
    slug: 'search-in-a-2d-sorted-matrix',
    title: 'Search in a 2D Sorted Matrix',
    difficulty: 'medium',
    topics: ['Array', 'Math', 'Sorting'],
    acceptanceRate: '86%',
    description: `You are given a 2D matrix of integers where each row is sorted in ascending order from left to right, and each column is sorted in ascending order from top to bottom.

Write a function \`searchElement(matrix, target)\` that returns \`true\` if the target is found in the matrix, and \`false\` otherwise.`,
    examples: [
      {
        input: '[[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]],5',
        output: 'true',
      },
      {
        input: '[[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]],14',
        output: 'true',
      },
      {
        input: '[[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]],1',
        output: 'true',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'searchElement',
    starterCode: {
      javascript: `function searchElement(matrix, target) {
  
}
`,
      typescript: `function searchElement(matrix: any, target: any): any {
  
}
`,
    },
    testCases: [
      {
        name: 'should find existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          5,
        ],
        expected: true,
      },
      {
        name: 'should find existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          14,
        ],
        expected: true,
      },
      {
        name: 'should find existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          1,
        ],
        expected: true,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should find existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          17,
        ],
        expected: true,
        isHidden: true,
      },
      {
        name: 'should return false for non-existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          0,
        ],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should return false for non-existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          18,
        ],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should return false for non-existing elements',
        input: [
          [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          15,
        ],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle empty matrix',
        input: [[], 5],
        expected: false,
        isHidden: true,
      },
      {
        name: 'should handle matrix with empty row',
        input: [[[]], 5],
        expected: false,
        isHidden: true,
      },
    ],
    hints: ['Break down the problem into smaller algorithmic steps.'],
    solution: {
      explanation: 'index.js',
      code: `function searchElement(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let i = 0,
    j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '078',
    slug: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'medium',
    topics: ['Array', 'Hash Map', 'Recursion', 'Math'],
    acceptanceRate: '75%',
    description: `Write a function that returns all unique combinations of candidates where the chosen numbers sum to the target.

The same number may be chosen from candidates an unlimited number of times. Return the combinations in any order.

**Input:** An array of distinct integers \`candidates\` and an integer \`target\`.

**Output:** A 2D array containing all unique combinations of numbers that sum to the \`target\`.

### **Example Inputs & Outputs**
\`\`\`javascript
// Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

// Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
Input: candidates = [2], target = 1
Output: []

// Example 4:
Input: candidates = [1], target = 2
Output: [[1,1]]

// Example 5:
Input: candidates = [1], target = 1
Output: [[1]]
\`\`\`

### **Constraints & Edge Cases**
- All numbers in candidates are positive and distinct.
- Candidates can be reused multiple times.
- No duplicate combinations allowed (i.e., same frequency counts considered same).
- Return empty array if no combination is possible.`,
    examples: [
      {
        input: '[2],1',
        output: '[]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'combinationSum',
    starterCode: {
      javascript: `// This is the default template that the user will see.
// Make sure to call the function with valid input.

function combinationSum(candidates, target) {
  // write your code here
}
`,
      typescript: `// This is the default template that the user will see.
// Make sure to call the function with valid input.

function combinationSum(candidates: any, target: any): any {
  // write your code here
}
`,
    },
    testCases: [
      {
        name: 'Should return empty array if no combination sums to 1',
        input: [[2], 1],
        expected: [],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Should return combinations using single number repeatedly',
        input: [[1], 2],
        expected: [[1, 1]],
        isHidden: true,
      },
      {
        name: `Should return empty array when target can't be reached`,
        input: [[5, 10], 3],
        expected: [],
        isHidden: true,
      },
    ],
    hints: [
      `**Backtracking structure**
We need a recursive function that explores possibilities by either choosing or skipping each number. Keep track of:

* current index
* current target left
* current combination (\`temp\`)

\`\`\`js
function solve(ind, target) {
  // base conditions here
  // explore take / not-take choices
}
\`\`\``,
      `**Base case – valid and invalid paths**

* If \`target === 0\`, we found a valid combination.
* If \`target < 0\` or \`ind\` goes beyond candidates, stop exploring.

\`\`\`js
if (target === 0) {
  ans.push([...temp]); // store a copy
  return;
}
if (ind === candidates.length || target < 0) return;
\`\`\``,
      `**Explore "take" choice**
Include the current element (\`candidates[ind]\`) and **stay at the same index** (since unlimited reuse is allowed).

\`\`\`js
temp.push(candidates[ind]);
solve(ind, target - candidates[ind]); // stay on same index
temp.pop(); // backtrack
\`\`\`
`,
      `**Explore "not take" choice**
Skip the current element and move to the **next index**.

\`\`\`js
solve(ind + 1, target);
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**
1. Use backtracking with take/not-take pattern.
2. Keep track of index, current combination, and remaining target.
3. Push valid combinations to the result when target is zero.
4. If target goes negative or index exceeds size, return (invalid path).

### **Solution Code**`,
      code: `function combinationSum(candidates, target) {
  const ans = [];
  const temp = [];

  function solve(ind, target) {
    if (target === 0) {
      ans.push([...temp]);
      return;
    }

    if (ind === candidates.length || target < 0) return;

    // take
    temp.push(candidates[ind]);
    solve(ind, target - candidates[ind]);
    temp.pop();

    // not take
    solve(ind + 1, target);
  }

  solve(0, target);
  return ans;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '079',
    slug: 'longest-valid-parentheses',
    title: 'Longest Valid Parentheses',
    difficulty: 'hard',
    topics: ['String', 'Stack'],
    acceptanceRate: '92%',
    description: `Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.`,
    examples: [
      {
        input: `""`,
        output: '0',
      },
      {
        input: `"("`,
        output: '0',
      },
      {
        input: `")"`,
        output: '0',
      },
    ],
    constraints: ['0 <= s.length <= 3 * 10^4', "s[i] is '(' or ')'"],
    functionName: 'longestValidParentheses',
    starterCode: {
      javascript: `function longestValidParentheses(s) {
  // Your code here
}
`,
      typescript: `function longestValidParentheses(s: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [''],
        expected: 0,
      },
      {
        name: 'should handle base cases',
        input: ['('],
        expected: 0,
      },
      {
        name: 'should handle base cases',
        input: [')'],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle simple cases',
        input: ['()'],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: ['(('],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: ['))'],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle basic valid parentheses',
        input: ['(()'],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle basic valid parentheses',
        input: ['())'],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle basic valid parentheses',
        input: ['()()'],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle medium cases',
        input: [')()())'],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle medium cases',
        input: ['((()))'],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle medium cases',
        input: ['(()())'],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: ['()()()'],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: ['((((('],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [')))))'],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle complex nested cases',
        input: ['()(()'],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle complex nested cases',
        input: ['(()()'],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle mixed cases',
        input: ['((()()'],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle mixed cases',
        input: ['()(()()'],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle long strings',
        input: ['()()()()()'],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'should handle long strings',
        input: ['((((()))))'],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'should handle long strings',
        input: ['()(()(()))'],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'should handle invalid patterns',
        input: [')('],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle invalid patterns',
        input: [')()('],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle invalid patterns',
        input: ['())(()'],
        expected: 2,
        isHidden: true,
      },
    ],
    hints: [
      `### 1. Stack Strategy
- Use stack to track indices of unmatched parentheses
- Store indices, not characters, for length calculation`,
      `### 2. Matching Logic

\`\`\`js
if (s[i] === '(') {
  stack.push(i); // Push opening bracket index
} else {
  if (stack.length > 0 && s[stack[stack.length - 1]] === '(') {
    stack.pop(); // Found matching pair
  } else {
    stack.push(i); // Unmatched closing bracket
  }
}
\`\`\``,
      `3. Gap Analysis
- After processing, stack contains indices of unmatched positions
- Longest valid substring = largest gap between unmatched indices
- Include string boundaries (0 and n) as unmatched positions`,
      `### 4. Result Calculation

\`\`\`js
// Find longest gap between unmatched indices
let a = n, b = 0;
while (stack.length > 0) {
  b = stack.pop();
  longest = Math.max(longest, a - b - 1);
  a = b;
}
longest = Math.max(longest, a);
\`\`\`
- Remember: Use stack to mark unmatched positions, then find longest gap between them!`,
    ],
    solution: {
      explanation: `### Approach
Use a stack to track indices of unmatched parentheses, then calculate the longest valid substring between unmatched positions.

### Key Insights
- Stack Tracking: Use stack to track indices of unmatched parentheses
- Matching Pairs: Pop from stack when finding matching pairs
- Gap Analysis: Longest valid substring is between unmatched indices
- Boundary Handling: Consider string boundaries as unmatched positions

### Algorithm
- First Pass: Scan string and mark unmatched parentheses indices
- Stack Operations: Push '(' indices, pop when finding matching ')'
- Gap Calculation: Find longest substring between unmatched indices
- Boundary Cases: Handle cases where entire string is valid

### Code`,
      code: `function longestValidParentheses(s) {
  const n = s.length;
  let longest = 0;
  const stack = [];

  // First pass: mark unmatched parentheses
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length > 0 && s[stack[stack.length - 1]] === '(') {
        stack.pop(); // Found matching pair
      } else {
        stack.push(i); // Unmatched ')'
      }
    }
  }

  // If stack is empty, entire string is valid
  if (stack.length === 0) {
    return n;
  }

  // Find longest valid substring between unmatched indices
  let a = n,
    b = 0;
  while (stack.length > 0) {
    b = stack.pop();
    longest = Math.max(longest, a - b - 1);
    a = b;
  }
  longest = Math.max(longest, a);

  return longest;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(n)',
      },
    },
  },
  {
    id: '080',
    slug: 'prims-mst-algorithm',
    title: `Prim's MST Algorithm`,
    difficulty: 'hard',
    topics: ['Tree', 'Graph', 'Math'],
    acceptanceRate: '81%',
    description: `Given a weighted undirected graph represented as an adjacency list, return the sum of weights of the edges in the Minimum Spanning Tree.

## Examples

\`\`\`
Input: 
graph = [
  [[2,1], [4,2]],          // Node 0 is connected to 1 (wt 2) and 2 (wt 4)
  [[2,0], [1,2], [3,3]],   // Node 1 is connected to 0 (wt 2), 2 (wt 1), 3 (wt 3)
  [[4,0], [1,1], [5,3]],   // Node 2 is connected to 0 (wt 4), 1 (wt 1), 3 (wt 5)
  [[3,1], [5,2]]           // Node 3 is connected to 1 (wt 3), 2 (wt 5)
]
Output: 6

Input:
graph = [
  [[1, 1], [5, 2]],
  [[1, 0], [2, 2]],
  [[5, 0], [2, 1]]
]
Output: 3

Input:
graph = [[]]
Output: 0
\`\`\`

## Constraints
*   The graph is connected.
*   Weights are non-negative integers.
*   Number of nodes \`V\` <= 1000.
*   Number of edges \`E\` <= 10000.`,
    examples: [
      {
        input:
          '[[[2,1],[4,2]],[[2,0],[1,2],[3,3]],[[4,0],[1,1],[5,3]],[[3,1],[5,2]]]',
        output: '6',
      },
      {
        input: '[[[1,1],[5,2]],[[1,0],[2,2]],[[5,0],[2,1]]]',
        output: '3',
      },
      {
        input: '[[]]',
        output: '0',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'primsMST',
    starterCode: {
      javascript: `/**
 * @param {number[][][]} graph - Adjacency list where graph[u] = [[weight, v], ...]
 * @return {number} - The sum of weights of the MST
 */
function primsMST(graph) {
  // Your code here
}
`,
      typescript: `/**
 * @param {number[][][]} graph - Adjacency list where graph[u] = [[weight, v], ...]
 * @return {number} - The sum of weights of the MST
 */
function primsMST(graph: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should return correct MST cost for the example graph',
        input: [
          [
            [
              [2, 1],
              [4, 2],
            ],
            [
              [2, 0],
              [1, 2],
              [3, 3],
            ],
            [
              [4, 0],
              [1, 1],
              [5, 3],
            ],
            [
              [3, 1],
              [5, 2],
            ],
          ],
        ],
        expected: 6,
      },
      {
        name: 'should handle a simple 3-node graph',
        input: [
          [
            [
              [1, 1],
              [5, 2],
            ],
            [
              [1, 0],
              [2, 2],
            ],
            [
              [5, 0],
              [2, 1],
            ],
          ],
        ],
        expected: 3,
      },
      {
        name: 'should handle a single node graph',
        input: [[[]]],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle a disconnected graph (return MST of component starting at 0)',
        input: [[[[1, 1]], [[1, 0]], []]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle empty graph',
        input: [[]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle graph with multiple edges with same weight',
        input: [
          [
            [
              [1, 1],
              [1, 1],
            ],
            [
              [1, 0],
              [1, 0],
            ],
          ],
        ],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle a graph with a cycle',
        input: [
          [
            [
              [1, 1],
              [3, 2],
            ],
            [
              [1, 0],
              [2, 2],
            ],
            [
              [3, 0],
              [2, 1],
            ],
          ],
        ],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle a larger graph',
        input: [
          [
            [
              [4, 1],
              [8, 7],
            ],
            [
              [4, 0],
              [8, 2],
              [11, 7],
            ],
            [
              [8, 1],
              [7, 3],
              [2, 8],
              [4, 5],
            ],
            [
              [7, 2],
              [9, 4],
              [14, 5],
            ],
            [
              [9, 3],
              [10, 5],
            ],
            [
              [4, 2],
              [14, 3],
              [10, 4],
              [2, 6],
            ],
            [
              [2, 5],
              [1, 7],
              [6, 8],
            ],
            [
              [8, 0],
              [11, 1],
              [1, 6],
              [7, 8],
            ],
            [
              [2, 2],
              [6, 6],
              [7, 7],
            ],
          ],
        ],
        expected: 37,
        isHidden: true,
      },
      {
        name: 'should handle graph where all edges have same weight',
        input: [
          [
            [
              [1, 1],
              [1, 2],
            ],
            [
              [1, 0],
              [1, 2],
            ],
            [
              [1, 0],
              [1, 1],
            ],
          ],
        ],
        expected: 2,
        isHidden: true,
      },
    ],
    hints: [
      `\`\`\`javascript
let visited = new Array(graph.length).fill(false);
let pq = new MinPriorityQueue((x) => x[0]); 
\`\`\``,
      `- Start from an arbitrary node (e.g., 0).
- Push \`[0, 0]\` (weight 0, node 0) to PQ.`,
      `\`\`\`javascript
while (!pq.isEmpty()) {
  let [weight, node] = pq.dequeue();
  if (visited[node]) continue;
  visited[node] = true;
  mstCost += weight;
  // Add neighbors to PQ
}
\`\`\``,
      '- Stop early if `nodesVisited === graph.length`.',
    ],
    solution: {
      explanation:
        'We implement the optimal solution for primsMST considering constraints and edge cases.',
      code: `class MinPriorityQueue {
  constructor(priorityFn) {
    this.data = [];
    this.priorityFn = priorityFn;
  }

  enqueue(element) {
    this.data.push(element);
    this.data.sort((a, b) => this.priorityFn(a) - this.priorityFn(b));
  }

  dequeue() {
    return this.data.shift();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

function primsMST(graph) {
  if (!graph || graph.length === 0) return 0;

  let visited = new Array(graph.length).fill(false);
  let pq = new MinPriorityQueue((x) => x[0]);

  pq.enqueue([0, 0]);
  let mstCost = 0;
  let nodesVisited = 0;

  while (!pq.isEmpty()) {
    let [weight, node] = pq.dequeue();

    if (visited[node]) continue;

    visited[node] = true;
    mstCost += weight;
    nodesVisited++;

    if (nodesVisited === graph.length) break;

    for (let [edgeWt, adjNode] of graph[node]) {
      if (!visited[adjNode]) {
        pq.enqueue([edgeWt, adjNode]);
      }
    }
  }

  return mstCost;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '081',
    slug: 'shortest-distance-from-source-bellman-ford-algorithm',
    title: 'Shortest Distance from Source (Bellman-Ford Algorithm)',
    difficulty: 'hard',
    topics: ['Array', 'Graph', 'Math'],
    acceptanceRate: '70%',
    description: `Given a weighted directed graph represented as an edge list edges, the number of vertices V, and a source node src, return an array dist where dist[i] represents the shortest distance (sum of edge weights) from src to node i. If node i is unreachable from src, dist[i] should be Infinity. If a negative weight cycle is detected, return null.

### Note:
The edge list uses [u, v, weight] format, where u is the source node, v is the destination node, and weight can be positive, zero, or negative.`,
    examples: [
      {
        input:
          'edges = [[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 4]], V = 4, src = 0',
        output: '[0, 4, 1, 5]',
        explanation: '- Distance from 0 to 0: 0 (same node)',
      },
      {
        input: 'edges = [[0, 1, 1], [1, 2, -1], [2, 0, -1]], V = 3, src = 0',
        output: 'null',
        explanation:
          'Negative cycle detected (0 -> 1 -> 2 -> 0 with total weight -1)',
      },
      {
        input: 'edges = [[0, 1, 5], [1, 2, 3], [2, 3, 1]], V = 4, src = 0',
        output: '[0, 5, 8, 9]',
        explanation: 'Simple path 0 -> 1 -> 2 -> 3',
      },
    ],
    constraints: [
      'Graph is represented as an edge list where each edge is [u, v, weight]',
      'Edge weights can be positive, zero, or negative',
      'V is the number of vertices (nodes numbered from 0 to V-1)',
      'Graph may contain cycles',
      'Graph may be disconnected',
      'Distance from src to itself is always 0',
      'Unreachable nodes have distance Infinity',
      'If a negative weight cycle is reachable from source, return null',
    ],
    functionName: 'bellmanFord',
    starterCode: {
      javascript: `function bellmanFord(edges, V, src) {
  let dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    let updated = false;

    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }

    if (!updated) break;
  }

  // check negative cycle
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      console.log("Negative weight cycle detected!!");
      return null;
    }
  }

  return dist;
}
`,
      typescript: `function bellmanFord(edges: any, V: any, src: any): any {
  let dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    let updated = false;

    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }

    if (!updated) break;
  }

  // check negative cycle
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      console.log("Negative weight cycle detected!!");
      return null;
    }
  }

  return dist;
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[], 1, 0],
        expected: [0],
      },
      {
        name: 'should handle base cases',
        input: [[[0, 1, 5]], 2, 0],
        expected: [0, 5],
      },
      {
        name: 'should handle base cases',
        input: [
          [
            [0, 1, 2],
            [1, 2, 3],
          ],
          3,
          0,
        ],
        expected: [0, 2, 5],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle example from description',
        input: [
          [
            [0, 1, 4],
            [0, 2, 5],
            [1, 2, -3],
            [2, 3, 4],
          ],
          4,
          0,
        ],
        expected: [0, 4, 1, 5],
        isHidden: true,
      },
      {
        name: 'should detect negative cycles',
        input: [
          [
            [0, 1, 1],
            [1, 2, -1],
            [2, 0, -1],
          ],
          3,
          0,
        ],
        expected: null,
        isHidden: true,
      },
      {
        name: 'should detect negative cycles in larger graphs',
        input: [
          [
            [0, 1, 1],
            [1, 2, 2],
            [2, 3, 3],
            [3, 1, -6],
          ],
          4,
          0,
        ],
        expected: null,
        isHidden: true,
      },
      {
        name: 'should handle disconnected graphs',
        input: [[[0, 1, 2]], 3, 0],
        expected: [0, 2, null],
        isHidden: true,
      },
      {
        name: 'should handle graphs with no negative cycles',
        input: [
          [
            [0, 1, 5],
            [1, 2, 3],
            [2, 3, 1],
            [0, 3, 10],
          ],
          4,
          0,
        ],
        expected: [0, 5, 8, 9],
        isHidden: true,
      },
      {
        name: 'should handle zero-weight edges',
        input: [
          [
            [0, 1, 0],
            [1, 2, 5],
            [0, 2, 3],
          ],
          3,
          0,
        ],
        expected: [0, 0, 3],
        isHidden: true,
      },
      {
        name: 'should handle all negative edges (no cycle)',
        input: [
          [
            [0, 1, -1],
            [1, 2, -2],
            [2, 3, -3],
          ],
          4,
          0,
        ],
        expected: [0, -1, -3, -6],
        isHidden: true,
      },
      {
        name: 'should handle early termination optimization',
        input: [
          [
            [0, 1, 1],
            [1, 2, 1],
          ],
          3,
          0,
        ],
        expected: [0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle multiple paths with negative edges',
        input: [
          [
            [0, 1, 10],
            [0, 2, 1],
            [2, 1, -5],
            [1, 3, 2],
          ],
          4,
          0,
        ],
        expected: [0, -4, 1, -2],
        isHidden: true,
      },
      {
        name: 'should handle source with no outgoing edges',
        input: [
          [
            [1, 0, 1],
            [1, 2, 2],
          ],
          3,
          0,
        ],
        expected: [0, null, null],
        isHidden: true,
      },
      {
        name: 'should handle linear graph',
        input: [
          [
            [0, 1, 2],
            [1, 2, 3],
            [2, 3, 1],
            [3, 4, 4],
          ],
          5,
          0,
        ],
        expected: [0, 2, 5, 6, 10],
        isHidden: true,
      },
      {
        name: 'should handle graph where negative cycle is not reachable from source',
        input: [
          [
            [0, 1, 1],
            [1, 2, 2],
            [2, 3, -5],
            [4, 5, -1],
            [5, 4, -1],
          ],
          6,
          0,
        ],
        expected: [0, 1, 3, -2, null, null],
        isHidden: true,
      },
    ],
    hints: [
      `### Why V-1 Iterations?
- The shortest path from source to any node can have at most V-1 edges. After relaxing all edges V-1 times, all shortest paths are guaranteed to be found.`,
      `### Initialize Distance Array

\`\`\`js
const dist = Array(V).fill(Infinity);
dist[src] = 0; // Distance from source to itself is 0
\`\`\`
Use Infinity to represent unreachable nodes. The source node has distance 0.`,
      `### Relaxation Process
\`\`\`js
for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
        if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;  // Relax the edge
        }
    }
}
\`\`\`
- For each edge [u, v, w], if going through u gives a shorter path to v, update dist[v].`,
      `### Early Termination Optimization
\`\`\`js
let updated = false;
// ... relaxation ...
if (!updated) break;  // No updates means we're done!
\`\`\`
- If no distances are updated in an iteration, all shortest paths are found - we can break early.`,
      `### Negative Cycle Detection
\`\`\`js
// After V-1 iterations, check one more time
for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        return null;  // Negative cycle detected!
    }
}
\`\`\`
- If we can still improve a distance after V-1 iterations, there's a negative weight cycle.
- Remember: Bellman-Ford can handle negative weights and detect negative cycles, but is slower than Dijkstra's for non-negative graph`,
    ],
    solution: {
      explanation: `Given a weighted directed graph represented as an edge list, find the shortest distance from a source node to all other nodes using Bellman-Ford Algorithm. Unlike Dijkstra's algorithm, Bellman-Ford can handle graphs with negative edge weights and can detect negative weight cycles.

### Solution: Bellman-Ford Algorithm
#### Approach
Relax all edges V-1 times, where V is the number of vertices. After V-1 iterations, if we can still relax an edge, it means there's a negative weight cycle. The key insight is that the shortest path can have at most V-1 edges, so V-1 relaxations are sufficient.

#### Algorithm
- Initialize dist array with Infinity for all nodes, set dist[src] = 0.
- Relax all edges V-1 times:
For each edge [u, v, w]:
If dist[u] !== Infinity and dist[u] + w < dist[v]:
Update dist[v] = dist[u] + w.
Optional: If no updates occurred, break early (optimization).
- Check for negative cycles:
Relax all edges one more time.
If any distance can still be improved, a negative cycle exists → return null.
- Return the distance array.

#### Code`,
      code: `function bellmanFord(edges, V, src) {
  let dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    let updated = false;

    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }

    if (!updated) break; // Early termination optimization
  }

  // check negative cycle
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      console.log('Negative weight cycle detected!!');
      return null;
    }
  }

  return dist;
}`,
      complexity: {
        time: 'O(V × E)',
        space: 'O(V)',
      },
    },
  },
  {
    id: '082',
    slug: 'worker-pool',
    title: 'Worker Pool',
    difficulty: 'hard',
    topics: ['Hash Map', 'Queue', 'Math', 'Async'],
    acceptanceRate: '87%',
    description: `A **Worker Pool** manages multiple worker threads to process tasks concurrently while limiting the number of workers running at the same time. Implement a **WorkerPool** class that:  

1. Accepts a **maximum number of concurrent workers**.  
2. Provides a **\`run(taskFunction)\`** method to enqueue tasks.  
3. Executes **up to \`n\` tasks concurrently**, where \`n\` is the worker limit.  
4. Ensures **tasks complete before starting new ones if the limit is reached**.  
5. Returns a **promise that resolves with the task's result** once completed.  

## **Example Inputs & Outputs**  
\`\`\`javascript
const pool = new WorkerPool(2); // Max 2 concurrent workers

async function task(id, delay) {
    return new Promise(resolve => setTimeout(() => resolve(\`Task \${id} done\`), delay));
}

// Run tasks
pool.run(() => task(1, 1000)).then(console.log); // Task 1 done (after 1s)
pool.run(() => task(2, 500)).then(console.log);  // Task 2 done (after 0.5s)
pool.run(() => task(3, 200)).then(console.log);  // Task 3 waits for a slot

// Output (timing may vary):
// Task 2 done
// Task 1 done
// Task 3 done
\`\`\`

---

## **Constraints & Edge Cases**  
- **1 ≤ maxWorkers ≤ 10⁴**  
- **Tasks can have different execution times**.  
- **Tasks should be executed in FIFO order** when slots become available.  
- **If all workers are busy, new tasks should wait in a queue**.  
- **Edge Cases:**  
  - Running with **maxWorkers = 1** (sequential execution).  
  - Handling **tasks that fail** (errors should not break the pool).  
  - Ensuring **Promise-based execution**.  5:["$"`,
    examples: [
      {
        input: `["WorkerPool"],[[3]]`,
        output: '[null]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'WorkerPool',
    isClass: true,
    starterCode: {
      javascript: `class WorkerPool {
    constructor(maxWorkers) {
        // Your implementation
    }

    run(taskFunction) {
        // Your implementation
    }
}
`,
      typescript: `class WorkerPool {
    constructor(maxWorkers) {
        // Your implementation
    }

    run(taskFunction) {
        // Your implementation
    }
}
`,
    },
    testCases: [
      {
        name: 'Create Worker Pool Instance',
        input: [['WorkerPool'], [[3]]],
        expected: [null],
      },
    ],
    hiddenTestCases: [],
    hints: [
      `Initialize properties in constructor

* Keep track of max workers allowed (\`maxWorkers\`).
* Track currently running tasks (\`activeWorkers\`).
* Maintain a queue for pending tasks (\`taskQueue\`).

\`\`\`js
constructor(maxWorkers) {
  this.maxWorkers = maxWorkers;
  this.activeWorkers = 0;
  this.taskQueue = [];
}
\`\`\``,
      `Define \`run\` to handle task execution with concurrency limit

* Wrap task in a promise to handle async result or errors.
* Create \`executeTask\` function to run the task:

  * Increment \`activeWorkers\`.
  * Await the async task.
  * Resolve/reject promise accordingly.
  * Decrement \`activeWorkers\` after task finishes.
  * If queue is not empty, dequeue and run next task.

\`\`\`js
run(taskFunction) {
  return new Promise((resolve, reject) => {
    const executeTask = async () => {
      try {
        this.activeWorkers++;
        const result = await taskFunction();
        resolve(result);
      } catch (error) {
        reject(error);
      } finally {
        this.activeWorkers--;
        if (this.taskQueue.length > 0) {
          const nextTask = this.taskQueue.shift();
          nextTask();
        }
      }
    };
\`\`\``,
      `Decide whether to run immediately or queue

* If \`activeWorkers\` < \`maxWorkers\`, call \`executeTask()\` immediately.
* Else, push \`executeTask\` to \`taskQueue\`.

\`\`\`js
    if (this.activeWorkers < this.maxWorkers) {
      executeTask();
    } else {
      this.taskQueue.push(executeTask);
    }
  });
}
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use a **Queue** (\`taskQueue\`) to manage incoming tasks.  
2. Use a **Counter** (\`activeWorkers\`) to track running tasks.  
3. When \`run(taskFunction)\` is called:  
   - If available, **execute immediately** and increment \`activeWorkers\`.  
   - Otherwise, **enqueue** the task for later execution.  
4. When a task finishes:  
   - Decrement \`activeWorkers\`.  
   - Start the next task from \`taskQueue\` if available.  

---

### **Solution Code**`,
      code: `class WorkerPool {
    constructor(maxWorkers) {
        this.maxWorkers = maxWorkers;
        this.activeWorkers = 0;
        this.taskQueue = [];
    }

    run(taskFunction) {
        return new Promise((resolve, reject) => {
            const executeTask = async () => {
                try {
                    this.activeWorkers++;
                    const result = await taskFunction();
                    resolve(result);
                } catch (error) {
                    reject(error);
                } finally {
                    this.activeWorkers--;
                    if (this.taskQueue.length > 0) {
                        const nextTask = this.taskQueue.shift();
                        nextTask();
                    }
                }
            };

            if (this.activeWorkers < this.maxWorkers) {
                executeTask();
            } else {
                this.taskQueue.push(executeTask);
            }
        });
    }
}


async function task(id, delay) {
    return new Promise(resolve => setTimeout(() => resolve(\`Task \${id} done\`), delay));
}

pool.run(() => task(1, 1000)).then(console.log);
pool.run(() => task(2, 500)).then(console.log);
pool.run(() => task(3, 200)).then(console.log);
pool.run(() => task(4, 300)).then(console.log);`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '083',
    slug: 'implement-garbage-collector',
    title: 'Implement Garbage Collector',
    difficulty: 'hard',
    topics: ['Array', 'Hash Map', 'Graph', 'Object'],
    acceptanceRate: '76%',
    description: `You're given an object graph representing allocated objects in memory. Each object can reference other objects. The graph is represented as a JavaScript object where keys are object IDs, and values are arrays of IDs they reference.  
You're also given a list of **roots** – objects that are considered accessible.

Your task is to simulate a garbage collector that **removes any unreachable objects** (not accessible from the root set) and returns the cleaned memory graph.

- **Input:**  
  - \`graph\`: an object representing the memory (e.g., \`{ A: ['B'], B: ['C'], D: [] }\`)  
  - \`roots\`: an array of root object IDs (e.g., \`['A']\`)  

- **Output:**  
  - an object representing the cleaned graph containing only reachable objects.

### **Example Inputs & Outputs**  
\`\`\`javascript
// Example 1
Input:
  graph = { A: ['B'], B: ['C'], C: [], D: [] }
  roots = ['A']
Output:
  { A: ['B'], B: ['C'], C: [] }

// Example 2
Input:
  graph = { A: ['B'], B: ['C'], D: ['E'], E: [] }
  roots = ['D']
Output:
  { D: ['E'], E: [] }

// Example 3
Input:
  graph = { A: ['B'], B: [], C: [] }
  roots = ['A']
Output:
  { A: ['B'], B: [] }
\`\`\`

### **Constraints & Edge Cases**  
- Each object ID is unique and used as a key in the input \`graph\`.  
- If a root points to a non-existent key, it should be ignored safely.  
- The graph can be cyclic, so cycles should not cause infinite loops.  
- Empty roots → return an empty object.  
- Empty graph → return an empty object.  5:["$"`,
    examples: [
      {
        input: `{"A":["B"],"B":["C"],"C":[],"D":[]},["A"]`,
        output: `{"A":["B"],"B":["C"],"C":[]}`,
      },
      {
        input: `{"A":["B"],"B":["C"],"D":["E"],"E":[]},["D"]`,
        output: `{"D":["E"],"E":[]}`,
      },
      {
        input: `{"A":["B"],"B":["C"],"C":["A"],"D":[]},["A"]`,
        output: `{"A":["B"],"B":["C"],"C":["A"]}`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'garbageCollector',
    starterCode: {
      javascript: `function garbageCollector(graph, roots) {
    // Your implementation
}
`,
      typescript: `function garbageCollector(graph: any, roots: any): any {
    // Your implementation
}
`,
    },
    testCases: [
      {
        name: 'Cleans unreachable node D',
        input: [
          {
            A: ['B'],
            B: ['C'],
            C: [],
            D: [],
          },
          ['A'],
        ],
        expected: {
          A: ['B'],
          B: ['C'],
          C: [],
        },
      },
      {
        name: 'Preserves only D and E from second root',
        input: [
          {
            A: ['B'],
            B: ['C'],
            D: ['E'],
            E: [],
          },
          ['D'],
        ],
        expected: {
          D: ['E'],
          E: [],
        },
      },
      {
        name: 'Handles cycles without infinite loops',
        input: [
          {
            A: ['B'],
            B: ['C'],
            C: ['A'],
            D: [],
          },
          ['A'],
        ],
        expected: {
          A: ['B'],
          B: ['C'],
          C: ['A'],
        },
      },
    ],
    hiddenTestCases: [
      {
        name: 'Returns empty object for empty roots',
        input: [
          {
            A: ['B'],
            B: [],
          },
          [],
        ],
        expected: {},
        isHidden: true,
      },
      {
        name: 'Handles empty graph gracefully',
        input: [{}, ['A']],
        expected: {},
        isHidden: true,
      },
      {
        name: 'Ignores roots not present in graph',
        input: [
          {
            A: ['B'],
            B: [],
          },
          ['X'],
        ],
        expected: {},
        isHidden: true,
      },
    ],
    hints: [
      `Use DFS to Find Reachable Nodes

We need to track all nodes that can be **reached** from the given root nodes.

> Start with an empty set:

\`\`\`js
const reachable = new Set();
\`\`\`

> Then use DFS to collect reachable nodes:

\`\`\`js
function dfs(node) {
    if (!graph[node] || reachable.has(node)) return;
    reachable.add(node);
    for (const neighbor of graph[node]) {
        dfs(neighbor);
    }
}
\`\`\``,
      `Run DFS for Each Root

There might be multiple root nodes. Call \`dfs\` on each one.

\`\`\`js
for (const root of roots) {
    dfs(root);
}
\`\`\``,
      `Filter the Graph

Once you know all reachable nodes, rebuild the graph keeping only those.

> Copy only reachable nodes:

\`\`\`js
const cleanedGraph = {};
for (const node of reachable) {
    cleanedGraph[node] = graph[node];
}
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use **Depth First Search (DFS)** starting from each root.  
2. Maintain a **Set** of visited object IDs.  
3. Traverse each object's references recursively.  
4. Once traversal is complete, **filter the original graph** to keep only visited nodes.

### **Solution Code**`,
      code: `function garbageCollector(graph, roots) {
  const reachable = new Set();

  function dfs(node) {
    if (!graph[node] || reachable.has(node)) return;
    reachable.add(node);
    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (const root of roots) {
    dfs(root);
  }

  const cleanedGraph = {};
  for (const node of reachable) {
    cleanedGraph[node] = graph[node];
  }

  return cleanedGraph;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '084',
    slug: 'chinese-remainder-theorem',
    title: 'Chinese Remainder Theorem',
    difficulty: 'hard',
    topics: ['Graph', 'Math'],
    acceptanceRate: '65%',
    description: `Given a system of modular congruences:
\`\`\`
x ≡ a₁ (mod m₁)
x ≡ a₂ (mod m₂)
...
x ≡ aₙ (mod mₙ)
\`\`\`

Find the smallest non-negative integer \`x\` that satisfies all congruences. The generalized version handles cases where the moduli may not be pairwise coprime.

## Examples

\`\`\`
Input: congruences = [[2, 6], [3, 9]]
Output: 3
Explanation: x ≡ 2 (mod 6) and x ≡ 3 (mod 9)
The smallest solution is x = 3

Input: congruences = [[1, 3], [2, 5], [3, 7]]
Output: 52
Explanation: x ≡ 1 (mod 3), x ≡ 2 (mod 5), x ≡ 3 (mod 7)
The smallest solution is x = 52

Input: congruences = [[2, 4], [3, 6]]
Output: null
Explanation: No solution exists (inconsistent system)

Input: congruences = [[1, 2], [0, 4]]
Output: 4
Explanation: x ≡ 1 (mod 2) and x ≡ 0 (mod 4)
The smallest solution is x = 4
\`\`\`

## Mathematical Background

The Chinese Remainder Theorem states that if \`m₁, m₂, ..., mₙ\` are pairwise coprime, then there exists a unique solution modulo \`M = m₁ × m₂ × ... × mₙ\`.

For the generalized case with non-coprime moduli, we use the Extended Euclidean Algorithm to find solutions.

## Constraints

* 1 ≤ n ≤ 10
* 0 ≤ aᵢ < mᵢ ≤ 10^9
* The system may or may not have a solution
* Return null if no solution exists5:["$","div",null,{"children":["$","$L10",null,{"questionDa`,
    examples: [
      {
        input: '[[2,6],[3,9]]',
        output: 'null',
      },
      {
        input: '[[1,3],[2,5],[3,7]]',
        output: '52',
      },
      {
        input: '[[2,4],[3,6]]',
        output: 'null',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'chineseRemainderTheorem',
    starterCode: {
      javascript: `function chineseRemainderTheorem(congruences) {
  // congruences is an array of [a, m] pairs
  // Return the smallest solution or null if no solution
}
`,
      typescript: `function chineseRemainderTheorem(congruences: any): any {
  // congruences is an array of [a, m] pairs
  // Return the smallest solution or null if no solution
}
`,
    },
    testCases: [
      {
        name: 'should handle basic case (inconsistent)',
        input: [
          [
            [2, 6],
            [3, 9],
          ],
        ],
        expected: null,
      },
      {
        name: 'should handle coprime case',
        input: [
          [
            [1, 3],
            [2, 5],
            [3, 7],
          ],
        ],
        expected: 52,
      },
      {
        name: 'should handle inconsistent system',
        input: [
          [
            [2, 4],
            [3, 6],
          ],
        ],
        expected: null,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle simple case (inconsistent)',
        input: [
          [
            [1, 2],
            [0, 4],
          ],
        ],
        expected: null,
        isHidden: true,
      },
      {
        name: 'should handle single congruence',
        input: [[[5, 7]]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle empty array',
        input: [[]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle two congruences',
        input: [
          [
            [1, 3],
            [2, 5],
          ],
        ],
        expected: 7,
        isHidden: true,
      },
      {
        name: 'should handle negative remainders',
        input: [
          [
            [-1, 3],
            [2, 5],
          ],
        ],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle zero remainder',
        input: [
          [
            [0, 3],
            [0, 5],
          ],
        ],
        expected: 0,
        isHidden: true,
      },
    ],
    hints: [
      `### 1. **Extended Euclidean Algorithm**
\`\`\`javascript
function extendedGCD(a, b) {
  if (a === 0) return [b, 0, 1];
  let [gcd, x1, y1] = extendedGCD(b % a, a);
  let x = y1 - Math.floor(b / a) * x1;
  let y = x1;
  return [gcd, x, y];
}
// Returns [gcd, x, y] where ax + by = gcd(a, b)
\`\`\``,
      `### 2. **Merge Two Congruences**
\`\`\`javascript
// Given: x ≡ a1 (mod m1) and x ≡ a2 (mod m2)
// Find: x ≡ a (mod m) where m = lcm(m1, m2)
function mergeCongruences(a1, m1, a2, m2) {
  let [gcd, x, y] = extendedGCD(m1, m2);
  if ((a2 - a1) % gcd !== 0) return null; // No solution
  
  let lcm = (m1 * m2) / gcd;
  let x0 = (a1 + (a2 - a1) / gcd * x * m1) % lcm;
  return [x0, lcm];
}
\`\`\``,
      `### 3. **Iterative Merging**
\`\`\`javascript
// Start with first congruence, merge with each subsequent one
let result = congruences[0];
for (let i = 1; i < congruences.length; i++) {
  let merged = mergeCongruences(result[0], result[1], 
                               congruences[i][0], congruences[i][1]);
  if (merged === null) return null; // No solution
  result = merged;
}
\`\`\``,
      `### 4. **Consistency Check**
\`\`\`javascript
// Check if the system is consistent
// For each pair of congruences, check if they can be satisfied
// Use the fact that x ≡ a1 (mod m1) and x ≡ a2 (mod m2)
// implies (a1 - a2) % gcd(m1, m2) === 0
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for chineseRemainderTheorem considering constraints and edge cases.',
      code: `function chineseRemainderTheorem(congruences) {
  if (congruences.length === 0) return 0;
  if (congruences.length === 1) return congruences[0][0] % congruences[0][1];

  let result = congruences[0];

  for (let i = 1; i < congruences.length; i++) {
    let merged = mergeCongruences(
      result[0],
      result[1],
      congruences[i][0],
      congruences[i][1]
    );
    if (merged === null) return null; // No solution
    result = merged;
  }

  return result[0] >= 0 ? result[0] : result[0] + result[1];
}

function mergeCongruences(a1, m1, a2, m2) {
  let [gcd, x, y] = extendedGCD(m1, m2);

  if ((a2 - a1) % gcd !== 0) return null; // No solution

  let lcm = (m1 * m2) / gcd;
  let x0 = (a1 + ((a2 - a1) / gcd) * x * m1) % lcm;

  return [x0, lcm];
}

function extendedGCD(a, b) {
  if (a === 0) return [b, 0, 1];

  let [gcd, x1, y1] = extendedGCD(b % a, a);
  let x = y1 - Math.floor(b / a) * x1;
  let y = x1;

  return [gcd, x, y];
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '085',
    slug: 'sliding-window-maximum',
    title: 'Sliding Window Maximum',
    difficulty: 'hard',
    topics: ['Array', 'Two Pointers', 'Queue', 'Math'],
    acceptanceRate: '82%',
    description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.`,
    examples: [
      {
        input: '[1],1',
        output: '[1]',
      },
      {
        input: '[1,2],1',
        output: '[1,2]',
      },
      {
        input: '[1,2],2',
        output: '[2]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'maxSlidingWindow',
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
  // Your code here
}
`,
      typescript: `function maxSlidingWindow(nums: any, k: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[1], 1],
        expected: [1],
      },
      {
        name: 'should handle base cases',
        input: [[1, 2], 1],
        expected: [1, 2],
      },
      {
        name: 'should handle base cases',
        input: [[1, 2], 2],
        expected: [2],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle small arrays',
        input: [[1, 2, 3], 2],
        expected: [2, 3],
        isHidden: true,
      },
      {
        name: 'should handle small arrays',
        input: [[1, 2, 3], 3],
        expected: [3],
        isHidden: true,
      },
      {
        name: 'should handle small arrays',
        input: [[3, 2, 1], 2],
        expected: [3, 2],
        isHidden: true,
      },
      {
        name: 'should handle medium arrays',
        input: [[1, 3, -1, -3, 5, 3, 6, 7], 3],
        expected: [3, 3, 5, 5, 6, 7],
        isHidden: true,
      },
      {
        name: 'should handle medium arrays',
        input: [[1, 3, -1, -3, 5, 3, 6, 7], 4],
        expected: [3, 5, 5, 6, 7],
        isHidden: true,
      },
      {
        name: 'should handle medium arrays',
        input: [[1, 3, -1, -3, 5, 3, 6, 7], 5],
        expected: [5, 5, 6, 7],
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 2, 3, 4, 5], 5],
        expected: [5],
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[5, 4, 3, 2, 1], 3],
        expected: [5, 4, 3],
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 1, 1, 1, 1], 3],
        expected: [1, 1, 1],
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-1, -2, -3, -4], 2],
        expected: [-1, -2, -3],
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-4, -3, -2, -1], 2],
        expected: [-3, -2, -1],
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-1, -3, -5, -7], 3],
        expected: [-1, -3],
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [[1, -1, 2, -2, 3, -3], 2],
        expected: [1, 2, 2, 3, 3],
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [[-1, 1, -2, 2, -3, 3], 3],
        expected: [1, 2, 2, 3],
        isHidden: true,
      },
      {
        name: 'should handle large window sizes',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8],
        expected: [8, 9, 10],
        isHidden: true,
      },
      {
        name: 'should handle large window sizes',
        input: [[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 7],
        expected: [10, 9, 8, 7],
        isHidden: true,
      },
      {
        name: 'should handle duplicate maximums',
        input: [[1, 2, 2, 1, 2, 2], 3],
        expected: [2, 2, 2, 2],
        isHidden: true,
      },
      {
        name: 'should handle duplicate maximums',
        input: [[2, 2, 2, 2, 2], 3],
        expected: [2, 2, 2],
        isHidden: true,
      },
    ],
    hints: [
      `### 1. Deque Strategy
- Use deque to maintain indices in decreasing order of their values
- Store indices, not values, for window boundary checking`,
      `### 2. Monotonic Property

\`\`\`js
// Remove smaller elements from back
while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
  deque.pop();
}
deque.push(i); // Add current index
\`\`\``,
      `### 3. Window Boundary Management
\`\`\`js
// Remove expired indices from front
if (deque.length > 0 && deque[0] <= i - k) {
  deque.shift();
}
\`\`\``,
      `### 4. Result Collection
\`\`\`js
// Add maximum when window is complete
if (i >= k - 1) {
  result.push(nums[deque[0]]); // Front always has current max
}
\`\`\`
Remember: Use deque to maintain decreasing indices, always check window boundaries, front always has current maximum!`,
    ],
    solution: {
      explanation: `### Optimal Solution: Deque (Double-Ended Queue)

#### Approach
Use a deque to maintain indices of potential maximum elements in decreasing order, ensuring O(n) time complexity.

#### Key Insights
- Monotonic Deque: Maintain a deque where elements are in decreasing order
- Window Boundaries: Remove indices that are outside the current window
- Potential Maximums: Only keep indices of elements that could be maximums in future windows

#### Algorithm
- Initialize: Empty deque and result array
- For each element at index i:
- Remove indices from front that are outside current window (i - k)
- Remove indices from back if corresponding values ≤ current value
- Add current index to deque
- If window is complete (i ≥ k-1), add max to result

#### Code`,
      code: `function maxSlidingWindow(nums, k) {
  const n = nums.length;
  const result = [];
  const deque = []; // Store indices of potential maximums

  for (let i = 0; i < n; i++) {
    // Remove indices from front that are out of current window
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove indices from back if corresponding values are <= current value
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // Add current index to deque
    deque.push(i);

    // Once we have at least k elements, add max to result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(k)',
      },
    },
  },
  {
    id: '086',
    slug: 'shortest-distance-from-source-dijkstras-algorithm',
    title: `Shortest Distance from Source (Dijkstra's Algorithm)`,
    difficulty: 'hard',
    topics: ['Array', 'Queue', 'Graph', 'Math'],
    acceptanceRate: '71%',
    description: `Given a weighted directed graph represented as an adjacency list graph and a source node src, return an array dist where dist[i] represents the shortest distance (sum of edge weights) from src to node i. If node i is unreachable from src, dist[i] should be Infinity. The distance from src to itself is 0.

### Note: 
- The graph representation uses [neighbor, weight] pairs for each edge, where weight is a non-negative number.`,
    examples: [
      {
        input:
          'graph = [[[1, 4], [2, 1]], [[3, 1]], [[1, 2], [3, 5]], []], src = 0',
        output: '[0, 3, 1, 4]',
        explanation: '- Distance from 0 to 0: 0 (same node)',
      },
      {
        input:
          'graph = [[[1, 5], [2, 2]], [[3, 1]], [[1, 1], [3, 3]], []], src = 0',
        output: '[0, 3, 2, 4]',
        explanation:
          '- 0 -> 2 -> 1: weight 2 + 1 = 3 (shorter than 0 -> 1 with weight 5)',
      },
      {
        input: 'graph = [[[1, 10]], []], src = 1',
        output: '[Infinity, 0]',
        explanation: 'Node 1 cannot reach node 0',
      },
    ],
    constraints: [
      'Graph is represented as an adjacency list where graph[i] contains an array of [neighbor, weight] pairs',
      'All edge weights are non-negative (≥ 0)',
      'Nodes are numbered from 0 to n-1 where n is the number of nodes',
      'Graph may contain cycles',
      'Graph may be disconnected',
      'Distance from src to itself is always 0',
      'Unreachable nodes have distance Infinity',
      'The algorithm requires a MinHeap/Priority Queue to efficiently select the node with minimum distance',
    ],
    functionName: 'dijkstras',
    starterCode: {
      javascript: `class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return top;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][1] > this.heap[index][1]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      } else break;
    }
  }

  bubbleDown(index) {
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [
          this.heap[index],
          this.heap[smallest],
        ];
        index = smallest;
      } else break;
    }
  }
}

function dijkstras(graph, src) {
  // your solution here
}
`,
      typescript: `class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return top;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][1] > this.heap[index][1]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      } else break;
    }
  }

  bubbleDown(index) {
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [
          this.heap[index],
          this.heap[smallest],
        ];
        index = smallest;
      } else break;
    }
  }
}

function dijkstras(graph: any, src: any): any {
  // your solution here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[[]], 0],
        expected: [0],
      },
      {
        name: 'should handle base cases',
        input: [[[[1, 5]], []], 0],
        expected: [0, 5],
      },
      {
        name: 'should handle base cases',
        input: [[[[1, 2]], [[2, 3]], []], 0],
        expected: [0, 2, 5],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle example from description',
        input: [
          [
            [
              [1, 4],
              [2, 1],
            ],
            [[3, 1]],
            [
              [1, 2],
              [3, 5],
            ],
            [],
          ],
          0,
        ],
        expected: [0, 3, 1, 4],
        isHidden: true,
      },
      {
        name: 'should find shortest path when multiple paths exist',
        input: [
          [
            [
              [1, 5],
              [2, 2],
            ],
            [[3, 1]],
            [
              [1, 1],
              [3, 3],
            ],
            [],
          ],
          0,
        ],
        expected: [0, 3, 2, 4],
        isHidden: true,
      },
      {
        name: 'should handle disconnected graphs',
        input: [[[[1, 2]], [], [[3, 1]], []], 0],
        expected: [0, 2, null, null],
        isHidden: true,
      },
      {
        name: 'should handle disconnected graphs',
        input: [[[[1, 2]], [], [[3, 1]], []], 2],
        expected: [null, null, 0, 1],
        isHidden: true,
      },
      {
        name: 'should handle graphs with cycles',
        input: [
          [
            [
              [1, 1],
              [2, 3],
            ],
            [[2, 1]],
            [[0, 2]],
          ],
          0,
        ],
        expected: [0, 1, 2],
        isHidden: true,
      },
      {
        name: 'should handle source with no outgoing edges',
        input: [[[], [[0, 1]], []], 0],
        expected: [0, null, null],
        isHidden: true,
      },
      {
        name: 'should handle source with no outgoing edges',
        input: [[[], [[0, 1]], []], 1],
        expected: [1, 0, null],
        isHidden: true,
      },
      {
        name: 'should handle linear graph',
        input: [[[[1, 2]], [[2, 3]], [[3, 1]], []], 0],
        expected: [0, 2, 5, 6],
        isHidden: true,
      },
      {
        name: 'should handle star graph',
        input: [
          [
            [
              [1, 1],
              [2, 2],
              [3, 3],
              [4, 4],
            ],
            [],
            [],
            [],
            [],
          ],
          0,
        ],
        expected: [0, 1, 2, 3, 4],
        isHidden: true,
      },
      {
        name: 'should handle graph where indirect path is shorter',
        input: [
          [
            [
              [1, 10],
              [2, 1],
            ],
            [[3, 1]],
            [
              [1, 1],
              [3, 5],
            ],
            [],
          ],
          0,
        ],
        expected: [0, 2, 1, 3],
        isHidden: true,
      },
      {
        name: 'should handle zero-weight edges',
        input: [
          [
            [
              [1, 0],
              [2, 1],
            ],
            [[3, 1]],
            [],
            [],
          ],
          0,
        ],
        expected: [0, 0, 1, 1],
        isHidden: true,
      },
      {
        name: 'should handle large edge weights',
        input: [
          [
            [
              [1, 1000],
              [2, 1],
            ],
            [[3, 1]],
            [
              [1, 1],
              [3, 500],
            ],
            [],
          ],
          0,
        ],
        expected: [0, 2, 1, 3],
        isHidden: true,
      },
      {
        name: 'should ignore stale entries in priority queue',
        input: [
          [
            [
              [1, 1],
              [2, 5],
            ],
            [[2, 1]],
            [],
          ],
          0,
        ],
        expected: [0, 1, 2],
        isHidden: true,
      },
    ],
    hints: [
      `### Why Min-Heap (Priority Queue)?
- Dijkstra's algorithm needs to always process the node with the smallest known distance first. A min-heap allows O(log V) insertion and O(log V) extraction of the minimum element.`,
      `### Initialize Distance Array

\`\`\`js
const dist = Array(graph.length).fill(Infinity);
dist[src] = 0; // Distance from source to itself is 0
\`\`\`

- Use Infinity to represent unreachable nodes. The source node has distance 0.`,
      `### Dijkstra's Algorithm Pattern
\`\`\`js
let pq = new MinHeap();
pq.push([src, 0]); // [node, distance]

while (pq.size()) {
    let [node, nodeDist] = pq.pop();
    
    // Skip stale entries
    if (nodeDist > dist[node]) continue;
    
    for (let [neighbor, weight] of graph[node]) {
        let newDist = dist[node] + weight;
        if (newDist < dist[neighbor]) {
            dist[neighbor] = newDist;
            pq.push([neighbor, newDist]);
        }
    }
}
\`\`\``,
      `### Key Insight: Stale Entries
- When we update a node's distance, we push a new entry to the heap. Old entries with larger distances become "stale" and must be skipped when popped. Check: if (nodeDist > dist[node]) continue;`,
      `### Why This Works
- Greedy approach: Always process the node with minimum distance first
- Once a node is processed, its distance is final (can't be improved)
- This works because all edge weights are non-negative
- For negative weights, use Bellman-Ford algorithm instead

- Remember: Dijkstra's algorithm requires non-negative edge weights and uses a min-heap to efficiently find the next node to process!`,
    ],
    solution: {
      explanation: `Given a weighted directed graph represented as an adjacency list and a source node, find the shortest distance from the source to all other nodes using Dijkstra's Algorithm. Dijkstra's algorithm uses a priority queue (min-heap) to always process the node with the smallest known distance first, ensuring optimal shortest paths in graphs with non-negative edge weights.

### Solution: Dijkstra's Algorithm with MinHeap
#### Approach
Use Dijkstra's algorithm with a min-heap (priority queue) to always process the node with the smallest distance first. Maintain a distance array and update distances as we discover shorter paths. The key insight is that once a node is processed (popped from the heap), its distance is finalized.

#### Algorithm
- Initialize dist array with Infinity for all nodes, set dist[src] = 0.
- Create a min-heap (priority queue) and push [src, 0].
- While heap is not empty:
Pop the node with minimum distance [node, nodeDist].
If nodeDist > dist[node], skip (stale entry).
For each neighbor [neighbor, weight] of current node:
Calculate newDist = dist[node] + weight.
If newDist < dist[neighbor]:
Update dist[neighbor] = newDist.
Push [neighbor, newDist] to heap.
- Return the distance array.

#### Code`,
      code: `class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return top;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][1] > this.heap[index][1]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      } else break;
    }
  }

  bubbleDown(index) {
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [
          this.heap[index],
          this.heap[smallest],
        ];
        index = smallest;
      } else break;
    }
  }
}

function dijkstras(graph, src) {
  let n = graph.length;
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let pq = new MinHeap();
  pq.push([src, 0]);

  while (pq.size()) {
    let [node, nodeDist] = pq.pop();

    // ignore stale entries
    if (nodeDist > dist[node]) continue;

    for (let [neighbor, weight] of graph[node]) {
      let newDist = dist[node] + weight;

      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([neighbor, newDist]);
      }
    }
  }

  return dist;
}`,
      complexity: {
        time: 'O((V + E) log V)',
        space: 'O(V)',
      },
    },
  },
  {
    id: '087',
    slug: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'hard',
    topics: ['Array', 'Sorting', 'Binary Search'],
    acceptanceRate: '88%',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).`,
    examples: [
      {
        input: '[1],[2]',
        output: '1.5',
      },
      {
        input: '[],[1]',
        output: '1',
      },
      {
        input: '[1],[]',
        output: '1',
      },
    ],
    constraints: [
      '```js',
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
      '1 <= m + n <= 2000',
      '10^6 <= nums1[i], nums2[i] <= 10^6',
      '```',
    ],
    functionName: 'findMedianSortedArrays',
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Your code here
}
`,
      typescript: `function findMedianSortedArrays(nums1: any, nums2: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[1], [2]],
        expected: 1.5,
      },
      {
        name: 'should handle base cases',
        input: [[], [1]],
        expected: 1,
      },
      {
        name: 'should handle base cases',
        input: [[1], []],
        expected: 1,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle base cases',
        input: [[], []],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: [[1, 3], [2]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: [
          [1, 2],
          [3, 4],
        ],
        expected: 2.5,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: [
          [1, 2, 3],
          [4, 5],
        ],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle arrays of different sizes',
        input: [
          [1, 3, 5],
          [2, 4],
        ],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle arrays of different sizes',
        input: [
          [1, 2],
          [3, 4, 5, 6],
        ],
        expected: 3.5,
        isHidden: true,
      },
      {
        name: 'should handle arrays of different sizes',
        input: [[1, 2, 3, 4], [5]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1], [2, 3, 4, 5]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 2, 3, 4, 5], [6]],
        expected: 3.5,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 2, 3, 4, 5], []],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [
          [-3, -1, 1],
          [-2, 0, 2],
        ],
        expected: -0.5,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [
          [-5, -3, -1],
          [-4, -2, 0],
        ],
        expected: -2.5,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-1], [0]],
        expected: -0.5,
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [
          [-2, 0, 2],
          [-1, 1, 3],
        ],
        expected: 0.5,
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [
          [-3, -1, 1, 3],
          [-2, 0, 2],
        ],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [[-1, 1], [0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle large arrays',
        input: [
          [
            0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
            36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68,
            70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
            102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126,
            128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152,
            154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178,
            180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204,
            206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230,
            232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256,
            258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282,
            284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308,
            310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334,
            336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360,
            362, 364, 366, 368, 370, 372, 374, 376, 378, 380, 382, 384, 386,
            388, 390, 392, 394, 396, 398, 400, 402, 404, 406, 408, 410, 412,
            414, 416, 418, 420, 422, 424, 426, 428, 430, 432, 434, 436, 438,
            440, 442, 444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464,
            466, 468, 470, 472, 474, 476, 478, 480, 482, 484, 486, 488, 490,
            492, 494, 496, 498, 500, 502, 504, 506, 508, 510, 512, 514, 516,
            518, 520, 522, 524, 526, 528, 530, 532, 534, 536, 538, 540, 542,
            544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 564, 566, 568,
            570, 572, 574, 576, 578, 580, 582, 584, 586, 588, 590, 592, 594,
            596, 598, 600, 602, 604, 606, 608, 610, 612, 614, 616, 618, 620,
            622, 624, 626, 628, 630, 632, 634, 636, 638, 640, 642, 644, 646,
            648, 650, 652, 654, 656, 658, 660, 662, 664, 666, 668, 670, 672,
            674, 676, 678, 680, 682, 684, 686, 688, 690, 692, 694, 696, 698,
            700, 702, 704, 706, 708, 710, 712, 714, 716, 718, 720, 722, 724,
            726, 728, 730, 732, 734, 736, 738, 740, 742, 744, 746, 748, 750,
            752, 754, 756, 758, 760, 762, 764, 766, 768, 770, 772, 774, 776,
            778, 780, 782, 784, 786, 788, 790, 792, 794, 796, 798, 800, 802,
            804, 806, 808, 810, 812, 814, 816, 818, 820, 822, 824, 826, 828,
            830, 832, 834, 836, 838, 840, 842, 844, 846, 848, 850, 852, 854,
            856, 858, 860, 862, 864, 866, 868, 870, 872, 874, 876, 878, 880,
            882, 884, 886, 888, 890, 892, 894, 896, 898, 900, 902, 904, 906,
            908, 910, 912, 914, 916, 918, 920, 922, 924, 926, 928, 930, 932,
            934, 936, 938, 940, 942, 944, 946, 948, 950, 952, 954, 956, 958,
            960, 962, 964, 966, 968, 970, 972, 974, 976, 978, 980, 982, 984,
            986, 988, 990, 992, 994, 996, 998, 1000, 1002, 1004, 1006, 1008,
            1010, 1012, 1014, 1016, 1018, 1020, 1022, 1024, 1026, 1028, 1030,
            1032, 1034, 1036, 1038, 1040, 1042, 1044, 1046, 1048, 1050, 1052,
            1054, 1056, 1058, 1060, 1062, 1064, 1066, 1068, 1070, 1072, 1074,
            1076, 1078, 1080, 1082, 1084, 1086, 1088, 1090, 1092, 1094, 1096,
            1098, 1100, 1102, 1104, 1106, 1108, 1110, 1112, 1114, 1116, 1118,
            1120, 1122, 1124, 1126, 1128, 1130, 1132, 1134, 1136, 1138, 1140,
            1142, 1144, 1146, 1148, 1150, 1152, 1154, 1156, 1158, 1160, 1162,
            1164, 1166, 1168, 1170, 1172, 1174, 1176, 1178, 1180, 1182, 1184,
            1186, 1188, 1190, 1192, 1194, 1196, 1198, 1200, 1202, 1204, 1206,
            1208, 1210, 1212, 1214, 1216, 1218, 1220, 1222, 1224, 1226, 1228,
            1230, 1232, 1234, 1236, 1238, 1240, 1242, 1244, 1246, 1248, 1250,
            1252, 1254, 1256, 1258, 1260, 1262, 1264, 1266, 1268, 1270, 1272,
            1274, 1276, 1278, 1280, 1282, 1284, 1286, 1288, 1290, 1292, 1294,
            1296, 1298, 1300, 1302, 1304, 1306, 1308, 1310, 1312, 1314, 1316,
            1318, 1320, 1322, 1324, 1326, 1328, 1330, 1332, 1334, 1336, 1338,
            1340, 1342, 1344, 1346, 1348, 1350, 1352, 1354, 1356, 1358, 1360,
            1362, 1364, 1366, 1368, 1370, 1372, 1374, 1376, 1378, 1380, 1382,
            1384, 1386, 1388, 1390, 1392, 1394, 1396, 1398, 1400, 1402, 1404,
            1406, 1408, 1410, 1412, 1414, 1416, 1418, 1420, 1422, 1424, 1426,
            1428, 1430, 1432, 1434, 1436, 1438, 1440, 1442, 1444, 1446, 1448,
            1450, 1452, 1454, 1456, 1458, 1460, 1462, 1464, 1466, 1468, 1470,
            1472, 1474, 1476, 1478, 1480, 1482, 1484, 1486, 1488, 1490, 1492,
            1494, 1496, 1498, 1500, 1502, 1504, 1506, 1508, 1510, 1512, 1514,
            1516, 1518, 1520, 1522, 1524, 1526, 1528, 1530, 1532, 1534, 1536,
            1538, 1540, 1542, 1544, 1546, 1548, 1550, 1552, 1554, 1556, 1558,
            1560, 1562, 1564, 1566, 1568, 1570, 1572, 1574, 1576, 1578, 1580,
            1582, 1584, 1586, 1588, 1590, 1592, 1594, 1596, 1598, 1600, 1602,
            1604, 1606, 1608, 1610, 1612, 1614, 1616, 1618, 1620, 1622, 1624,
            1626, 1628, 1630, 1632, 1634, 1636, 1638, 1640, 1642, 1644, 1646,
            1648, 1650, 1652, 1654, 1656, 1658, 1660, 1662, 1664, 1666, 1668,
            1670, 1672, 1674, 1676, 1678, 1680, 1682, 1684, 1686, 1688, 1690,
            1692, 1694, 1696, 1698, 1700, 1702, 1704, 1706, 1708, 1710, 1712,
            1714, 1716, 1718, 1720, 1722, 1724, 1726, 1728, 1730, 1732, 1734,
            1736, 1738, 1740, 1742, 1744, 1746, 1748, 1750, 1752, 1754, 1756,
            1758, 1760, 1762, 1764, 1766, 1768, 1770, 1772, 1774, 1776, 1778,
            1780, 1782, 1784, 1786, 1788, 1790, 1792, 1794, 1796, 1798, 1800,
            1802, 1804, 1806, 1808, 1810, 1812, 1814, 1816, 1818, 1820, 1822,
            1824, 1826, 1828, 1830, 1832, 1834, 1836, 1838, 1840, 1842, 1844,
            1846, 1848, 1850, 1852, 1854, 1856, 1858, 1860, 1862, 1864, 1866,
            1868, 1870, 1872, 1874, 1876, 1878, 1880, 1882, 1884, 1886, 1888,
            1890, 1892, 1894, 1896, 1898, 1900, 1902, 1904, 1906, 1908, 1910,
            1912, 1914, 1916, 1918, 1920, 1922, 1924, 1926, 1928, 1930, 1932,
            1934, 1936, 1938, 1940, 1942, 1944, 1946, 1948, 1950, 1952, 1954,
            1956, 1958, 1960, 1962, 1964, 1966, 1968, 1970, 1972, 1974, 1976,
            1978, 1980, 1982, 1984, 1986, 1988, 1990, 1992, 1994, 1996, 1998,
          ],
          [
            1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
            37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69,
            71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101,
            103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127,
            129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153,
            155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179,
            181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203, 205,
            207, 209, 211, 213, 215, 217, 219, 221, 223, 225, 227, 229, 231,
            233, 235, 237, 239, 241, 243, 245, 247, 249, 251, 253, 255, 257,
            259, 261, 263, 265, 267, 269, 271, 273, 275, 277, 279, 281, 283,
            285, 287, 289, 291, 293, 295, 297, 299, 301, 303, 305, 307, 309,
            311, 313, 315, 317, 319, 321, 323, 325, 327, 329, 331, 333, 335,
            337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357, 359, 361,
            363, 365, 367, 369, 371, 373, 375, 377, 379, 381, 383, 385, 387,
            389, 391, 393, 395, 397, 399, 401, 403, 405, 407, 409, 411, 413,
            415, 417, 419, 421, 423, 425, 427, 429, 431, 433, 435, 437, 439,
            441, 443, 445, 447, 449, 451, 453, 455, 457, 459, 461, 463, 465,
            467, 469, 471, 473, 475, 477, 479, 481, 483, 485, 487, 489, 491,
            493, 495, 497, 499, 501, 503, 505, 507, 509, 511, 513, 515, 517,
            519, 521, 523, 525, 527, 529, 531, 533, 535, 537, 539, 541, 543,
            545, 547, 549, 551, 553, 555, 557, 559, 561, 563, 565, 567, 569,
            571, 573, 575, 577, 579, 581, 583, 585, 587, 589, 591, 593, 595,
            597, 599, 601, 603, 605, 607, 609, 611, 613, 615, 617, 619, 621,
            623, 625, 627, 629, 631, 633, 635, 637, 639, 641, 643, 645, 647,
            649, 651, 653, 655, 657, 659, 661, 663, 665, 667, 669, 671, 673,
            675, 677, 679, 681, 683, 685, 687, 689, 691, 693, 695, 697, 699,
            701, 703, 705, 707, 709, 711, 713, 715, 717, 719, 721, 723, 725,
            727, 729, 731, 733, 735, 737, 739, 741, 743, 745, 747, 749, 751,
            753, 755, 757, 759, 761, 763, 765, 767, 769, 771, 773, 775, 777,
            779, 781, 783, 785, 787, 789, 791, 793, 795, 797, 799, 801, 803,
            805, 807, 809, 811, 813, 815, 817, 819, 821, 823, 825, 827, 829,
            831, 833, 835, 837, 839, 841, 843, 845, 847, 849, 851, 853, 855,
            857, 859, 861, 863, 865, 867, 869, 871, 873, 875, 877, 879, 881,
            883, 885, 887, 889, 891, 893, 895, 897, 899, 901, 903, 905, 907,
            909, 911, 913, 915, 917, 919, 921, 923, 925, 927, 929, 931, 933,
            935, 937, 939, 941, 943, 945, 947, 949, 951, 953, 955, 957, 959,
            961, 963, 965, 967, 969, 971, 973, 975, 977, 979, 981, 983, 985,
            987, 989, 991, 993, 995, 997, 999, 1001, 1003, 1005, 1007, 1009,
            1011, 1013, 1015, 1017, 1019, 1021, 1023, 1025, 1027, 1029, 1031,
            1033, 1035, 1037, 1039, 1041, 1043, 1045, 1047, 1049, 1051, 1053,
            1055, 1057, 1059, 1061, 1063, 1065, 1067, 1069, 1071, 1073, 1075,
            1077, 1079, 1081, 1083, 1085, 1087, 1089, 1091, 1093, 1095, 1097,
            1099, 1101, 1103, 1105, 1107, 1109, 1111, 1113, 1115, 1117, 1119,
            1121, 1123, 1125, 1127, 1129, 1131, 1133, 1135, 1137, 1139, 1141,
            1143, 1145, 1147, 1149, 1151, 1153, 1155, 1157, 1159, 1161, 1163,
            1165, 1167, 1169, 1171, 1173, 1175, 1177, 1179, 1181, 1183, 1185,
            1187, 1189, 1191, 1193, 1195, 1197, 1199, 1201, 1203, 1205, 1207,
            1209, 1211, 1213, 1215, 1217, 1219, 1221, 1223, 1225, 1227, 1229,
            1231, 1233, 1235, 1237, 1239, 1241, 1243, 1245, 1247, 1249, 1251,
            1253, 1255, 1257, 1259, 1261, 1263, 1265, 1267, 1269, 1271, 1273,
            1275, 1277, 1279, 1281, 1283, 1285, 1287, 1289, 1291, 1293, 1295,
            1297, 1299, 1301, 1303, 1305, 1307, 1309, 1311, 1313, 1315, 1317,
            1319, 1321, 1323, 1325, 1327, 1329, 1331, 1333, 1335, 1337, 1339,
            1341, 1343, 1345, 1347, 1349, 1351, 1353, 1355, 1357, 1359, 1361,
            1363, 1365, 1367, 1369, 1371, 1373, 1375, 1377, 1379, 1381, 1383,
            1385, 1387, 1389, 1391, 1393, 1395, 1397, 1399, 1401, 1403, 1405,
            1407, 1409, 1411, 1413, 1415, 1417, 1419, 1421, 1423, 1425, 1427,
            1429, 1431, 1433, 1435, 1437, 1439, 1441, 1443, 1445, 1447, 1449,
            1451, 1453, 1455, 1457, 1459, 1461, 1463, 1465, 1467, 1469, 1471,
            1473, 1475, 1477, 1479, 1481, 1483, 1485, 1487, 1489, 1491, 1493,
            1495, 1497, 1499, 1501, 1503, 1505, 1507, 1509, 1511, 1513, 1515,
            1517, 1519, 1521, 1523, 1525, 1527, 1529, 1531, 1533, 1535, 1537,
            1539, 1541, 1543, 1545, 1547, 1549, 1551, 1553, 1555, 1557, 1559,
            1561, 1563, 1565, 1567, 1569, 1571, 1573, 1575, 1577, 1579, 1581,
            1583, 1585, 1587, 1589, 1591, 1593, 1595, 1597, 1599, 1601, 1603,
            1605, 1607, 1609, 1611, 1613, 1615, 1617, 1619, 1621, 1623, 1625,
            1627, 1629, 1631, 1633, 1635, 1637, 1639, 1641, 1643, 1645, 1647,
            1649, 1651, 1653, 1655, 1657, 1659, 1661, 1663, 1665, 1667, 1669,
            1671, 1673, 1675, 1677, 1679, 1681, 1683, 1685, 1687, 1689, 1691,
            1693, 1695, 1697, 1699, 1701, 1703, 1705, 1707, 1709, 1711, 1713,
            1715, 1717, 1719, 1721, 1723, 1725, 1727, 1729, 1731, 1733, 1735,
            1737, 1739, 1741, 1743, 1745, 1747, 1749, 1751, 1753, 1755, 1757,
            1759, 1761, 1763, 1765, 1767, 1769, 1771, 1773, 1775, 1777, 1779,
            1781, 1783, 1785, 1787, 1789, 1791, 1793, 1795, 1797, 1799, 1801,
            1803, 1805, 1807, 1809, 1811, 1813, 1815, 1817, 1819, 1821, 1823,
            1825, 1827, 1829, 1831, 1833, 1835, 1837, 1839, 1841, 1843, 1845,
            1847, 1849, 1851, 1853, 1855, 1857, 1859, 1861, 1863, 1865, 1867,
            1869, 1871, 1873, 1875, 1877, 1879, 1881, 1883, 1885, 1887, 1889,
            1891, 1893, 1895, 1897, 1899, 1901, 1903, 1905, 1907, 1909, 1911,
            1913, 1915, 1917, 1919, 1921, 1923, 1925, 1927, 1929, 1931, 1933,
            1935, 1937, 1939, 1941, 1943, 1945, 1947, 1949, 1951, 1953, 1955,
            1957, 1959, 1961, 1963, 1965, 1967, 1969, 1971, 1973, 1975, 1977,
            1979, 1981, 1983, 1985, 1987, 1989, 1991, 1993, 1995, 1997, 1999,
          ],
        ],
        expected: 999.5,
        isHidden: true,
      },
      {
        name: 'should handle duplicate values',
        input: [
          [1, 1, 1],
          [1, 1, 1],
        ],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle duplicate values',
        input: [
          [1, 2, 2],
          [2, 3, 3],
        ],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle duplicate values',
        input: [
          [1, 1, 2],
          [2, 2, 3],
        ],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle one element arrays',
        input: [[5], [3]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle one element arrays',
        input: [[0], [0]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle extreme values',
        input: [[-1000000], [1000000]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle extreme values',
        input: [[-1000000, 0], [1000000]],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle extreme values',
        input: [[-1000000], [0, 1000000]],
        expected: 0,
        isHidden: true,
      },
    ],
    hints: [
      `### 1. Partitioning Strategy
- Don't merge arrays! Use binary search to find correct partition
- Left partition must have exactly (m+n+1)/2 elements
- All left elements ≤ all right elements`,
      `### 2. Binary Search on Smaller Array
\`\`\`js
// Search for partition point in smaller array
let low = 0, high = m;
while (low <= high) {
  const mid1 = Math.floor((low + high) / 2);
  const mid2 = leftSize - mid1; // Corresponding partition in nums2
}
\`\`\``,
      `### 3. Partition Validation
- A partition is correct when: l1 ≤ r2 && l2 ≤ r1
- Where l1, r1 are from nums1, l2, r2 are from nums2
- Use sentinel values for boundary cases`,
      `### 4. Median Calculation
\`\`\`js
if (total % 2 === 1) {
  return Math.max(l1, l2); // Odd: max of left partition
} else {
  return (Math.max(l1, l2) + Math.min(r1, r2)) / 2; // Even: average
}
\`\`\`
Remember: Use binary search to find partition, then calculate median from partition values!`,
    ],
    solution: {
      explanation: `### Optimal Solution: Binary Search with Partitioning
### Approach
Use binary search to find the correct partition point in the smaller array, ensuring the left partition contains exactly half of the total elements and maintains sorted order.

### Key Insights
- Partition Concept: Divide both arrays into left and right partitions
- Median Position: Left partition should contain exactly (m+n+1)/2 elements
- Sorted Property: All elements in left partition ≤ all elements in right partition
- Binary Search: Search for correct partition in the smaller array

### Algorithm
- Ensure nums1 is smaller: Swap arrays if needed for optimization
- Binary Search: Search for partition point in nums1
- Calculate Partition: Determine corresponding partition in nums2
- Validate Partition: Check if partition maintains sorted order
- Calculate Median: Return median based on partition values

### Code`,
      code: `function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array for optimization
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  const leftSize = Math.floor((total + 1) / 2); // Left partition size

  let low = 0;
  let high = m;

  while (low <= high) {
    const mid1 = Math.floor((low + high) / 2);
    const mid2 = leftSize - mid1;

    // Values around partition points
    const l1 = mid1 > 0 ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
    const r1 = mid1 < m ? nums1[mid1] : Number.MAX_SAFE_INTEGER;
    const l2 = mid2 > 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
    const r2 = mid2 < n ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

    // Check if partition is correct
    if (l1 <= r2 && l2 <= r1) {
      // Found correct partition, calculate median
      if (total % 2 === 1) {
        // Odd length: return max of left partition
        return Math.max(l1, l2);
      } else {
        // Even length: return average of max left and min right
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
    } else if (l1 > r2) {
      // Move left in nums1
      high = mid1 - 1;
    } else {
      // Move right in nums1
      low = mid1 + 1;
    }
  }

  return 0;
}`,
      complexity: {
        time: 'O(log(min(m,n)))',
        space: 'O(1)',
      },
    },
  },
  {
    id: '088',
    slug: 'fibonacci-modulo-pisano-period',
    title: 'Fibonacci Modulo (Pisano Period)',
    difficulty: 'hard',
    topics: ['Dynamic Programming', 'Math', 'Object'],
    acceptanceRate: '77%',
    description: `Given integers \`n\` and \`m\`, compute \`F(n) mod m\` where \`F(n)\` is the nth Fibonacci number. The challenge is to handle very large values of \`n\` (up to 10^18) efficiently.

**Key Insight**: Fibonacci numbers modulo \`m\` are periodic with period length at most \`6m\` (Pisano period).

## Examples

\`\`\`
Input: n = 10, m = 3
Output: 1
Explanation: F(10) = 55, 55 mod 3 = 1

Input: n = 1000000000000000000, m = 1000000007
Output: 209783453
Explanation: F(10^18) mod 10^9+7 using Pisano period

Input: n = 5, m = 2
Output: 0
Explanation: F(5) = 5, 5 mod 2 = 1 (but F(5) = 5, so 5 mod 2 = 1)

Input: n = 0, m = 1000
Output: 0
Explanation: F(0) = 0, 0 mod 1000 = 0

Input: n = 1, m = 1000
Output: 1
Explanation: F(1) = 1, 1 mod 1000 = 1
\`\`\`

## Mathematical Background

The Pisano period \`π(m)\` is the length of the period of the Fibonacci sequence taken modulo \`m\`. Key properties:

1. \`π(m) ≤ 6m\` for all \`m\`
2. \`F(n) mod m = F(n mod π(m)) mod m\`
3. The period starts with \`F(0) mod m, F(1) mod m\`

## Constraints

* 0 ≤ n ≤ 10^18
* 1 ≤ m ≤ 10^9
* For large \`n\`, use Pisano period optimization
* For small \`n\`, direct calculation is acceptable5:["$","div",`,
    examples: [
      {
        input: '0,10',
        output: '0',
      },
      {
        input: '1,10',
        output: '1',
      },
      {
        input: '5,10',
        output: '5',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'fibonacciModulo',
    starterCode: {
      javascript: `function fibonacciModulo(n, m) {
  // Your code here
}
`,
      typescript: `function fibonacciModulo(n: any, m: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should handle n = 0',
        input: [0, 10],
        expected: 0,
      },
      {
        name: 'should handle n = 1',
        input: [1, 10],
        expected: 1,
      },
      {
        name: 'should handle small n and m',
        input: [5, 10],
        expected: 5,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle small n and m',
        input: [7, 10],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle modulus 1',
        input: [0, 1],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle modulus 1',
        input: [1, 1],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle modulus 1',
        input: [10, 1],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle modulus 1',
        input: [1000, 1],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle small modulus',
        input: [10, 2],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle small modulus',
        input: [20, 3],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle Pisano period check',
        input: [60, 10],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle Pisano period check',
        input: [120, 10],
        expected: 0,
        isHidden: true,
      },
    ],
    hints: [
      `### 1. **Pisano Period Property**
\`\`\`javascript
// Fibonacci numbers modulo m are periodic
// F(n) mod m = F(n mod π(m)) mod m
// where π(m) is the Pisano period (≤ 6m)
function findPisanoPeriod(m) {
  let a = 0, b = 1, period = 0;
  do {
    let temp = (a + b) % m;
    a = b;
    b = temp;
    period++;
  } while (a !== 0 || b !== 1);
  return period;
}
\`\`\``,
      `### 2. **Matrix Exponentiation**
\`\`\`javascript
// Use matrix exponentiation for O(log n) calculation
// [F(n+1)]   [1 1]^n [F(1)]
// [F(n)  ] = [1 0]   [F(0)]
function matrixPower(matrix, n, mod) {
  if (n === 1) return matrix;
  if (n % 2 === 0) {
    let half = matrixPower(matrix, n / 2, mod);
    return matrixMultiply(half, half, mod);
  }
  return matrixMultiply(matrix, matrixPower(matrix, n - 1, mod), mod);
}
\`\`\``,
      `### 3. **Direct Calculation for Small n**
\`\`\`javascript
// For small n, calculate directly
function fibonacciModulo(n, m) {
  if (n <= 1) return n % m;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % m;
    a = b;
    b = temp;
  }
  return b;
}
\`\`\``,
      `### 4. **Combining Both Approaches**
\`\`\`javascript
// Use Pisano period for large n, direct calculation for small n
function fibonacciModulo(n, m) {
  if (n <= 1) return n % m;
  
  let period = findPisanoPeriod(m);
  let reducedN = n % period;
  
  return fibonacciModuloDirect(reducedN, m);
}
\`\`\``,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for fibonacciModulo considering constraints and edge cases.',
      code: `function fibonacciModulo(n, m) {
  if (m === 1) return 0; // safe for modulus 1
  if (n <= 1) return n % m;

  const period = findPisanoPeriod(m);
  const reducedN = n % period;

  return fibonacciModuloDirect(reducedN, m);
}

function findPisanoPeriod(m) {
  if (m === 1) return 1;
  let a = 0,
    b = 1;
  for (let period = 1; period <= 6 * m; period++) {
    // Pisano period ≤ 6*m
    let temp = (a + b) % m;
    a = b;
    b = temp;
    if (a === 0 && b === 1) return period;
  }
  // If somehow not found, fallback (should never happen)
  return 6 * m;
}

function fibonacciModuloDirect(n, m) {
  if (n <= 1) return n % m;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = (a + b) % m;
    a = b;
    b = temp;
  }
  return b;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '089',
    slug: 'kruskals-mst-algorithm',
    title: `Kruskal's MST Algorithm`,
    difficulty: 'hard',
    topics: ['Array', 'Tree', 'Graph', 'Math'],
    acceptanceRate: '66%',
    description: `Given an integer \`n\` representing the number of nodes (0 to n-1) and an array of \`edges\` where each edge is \`[u, v, weight]\`, return the sum of weights of the edges in the Minimum Spanning Tree.

## Examples

\`\`\`
Input: 
n = 4
edges = [
  [0, 1, 4],
  [0, 2, 1],
  [1, 2, 2],
  [1, 3, 5],
  [2, 3, 3]
]
Output: 6

Input:
n = 3
edges = [
  [0, 1, 1],
  [1, 2, 2],
  [0, 2, 5]
]
Output: 3

Input:
n = 1
edges = []
Output: 0
\`\`\`

## Constraints

*   \`n\` <= 1000
*   \`edges.length\` <= 10000
*   Weights are non-negative integers.
*   The graph is connected.`,
    examples: [
      {
        input: '4,[[0,1,4],[0,2,1],[1,2,2],[1,3,5],[2,3,3]]',
        output: '6',
      },
      {
        input: '3,[[0,1,1],[1,2,2],[0,2,5]]',
        output: '3',
      },
      {
        input: '1,[]',
        output: '0',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'kruskalsMST',
    starterCode: {
      javascript: `/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function kruskalsMST(n, edges) {
  // Your code here
}
`,
      typescript: `/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function kruskalsMST(n: any, edges: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should return correct MST cost for the example graph',
        input: [
          4,
          [
            [0, 1, 4],
            [0, 2, 1],
            [1, 2, 2],
            [1, 3, 5],
            [2, 3, 3],
          ],
        ],
        expected: 6,
      },
      {
        name: 'should handle a simple 3-node graph',
        input: [
          3,
          [
            [0, 1, 1],
            [1, 2, 2],
            [0, 2, 5],
          ],
        ],
        expected: 3,
      },
      {
        name: 'should handle a single node graph',
        input: [1, []],
        expected: 0,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle a disconnected graph (return MST of components)',
        input: [3, [[0, 1, 1]]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle empty edges',
        input: [5, []],
        expected: 0,
        isHidden: true,
      },
      {
        name: 'should handle graph with multiple edges with same weight',
        input: [
          2,
          [
            [0, 1, 1],
            [0, 1, 1],
          ],
        ],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle a graph with a cycle',
        input: [
          3,
          [
            [0, 1, 1],
            [1, 2, 2],
            [0, 2, 3],
          ],
        ],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle a larger graph',
        input: [
          9,
          [
            [0, 1, 4],
            [0, 7, 8],
            [1, 2, 8],
            [1, 7, 11],
            [2, 3, 7],
            [2, 8, 2],
            [2, 5, 4],
            [3, 4, 9],
            [3, 5, 14],
            [4, 5, 10],
            [5, 6, 2],
            [6, 7, 1],
            [6, 8, 6],
            [7, 8, 7],
          ],
        ],
        expected: 37,
        isHidden: true,
      },
      {
        name: 'should handle graph where all edges have same weight',
        input: [
          3,
          [
            [0, 1, 1],
            [1, 2, 1],
            [0, 2, 1],
          ],
        ],
        expected: 2,
        isHidden: true,
      },
    ],
    hints: [
      `### 1. Pre-processing
\`\`\`javascript
edges.sort((a, b) => a[2] - b[2]); // Sort by weight
\`\`\``,
      `### 2. Data Structure
- Use **Union-Find** (Disjoint Set) to manage connected components.
- It helps in checking if adding an edge creates a cycle.`,
      `### 3. Core Logic
\`\`\`javascript
for (let [x, y, w] of edges) {
  if (uf.union(x, y)) {
    mstCost += w;
  }
}
\`\`\``,
      `### 4. Union-Find Operations
- \`find(x)\`: Returns the representative of the set containing \`x\`.
- \`union(x, y)\`: Merges sets containing \`x\` and \`y\`.`,
    ],
    solution: {
      explanation:
        'We implement the optimal solution for kruskalsMST considering constraints and edge cases.',
      code: `class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    let px = this.find(x);
    let py = this.find(y);

    if (px === py) return false;

    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
    return true;
  }
}

function kruskalsMST(n, edges) {
  if (!edges || edges.length === 0) return 0;

  edges.sort((a, b) => a[2] - b[2]);

  let uf = new UnionFind(n);
  let mstCost = 0;
  let edgesCount = 0;

  for (let [x, y, w] of edges) {
    if (uf.union(x, y)) {
      mstCost += w;
      edgesCount++;
    }
  }

  return mstCost;
}`,
      complexity: {
        time: 'O(E log E) or O(E log V)',
        space: 'O(V + E)',
      },
    },
  },
  {
    id: '090',
    slug: 'implement-a-queue-using-stack',
    title: 'Implement a Queue using Stack',
    difficulty: 'hard',
    topics: ['String', 'Stack', 'Queue', 'Design'],
    acceptanceRate: '83%',
    description: `A queue is a First-In-First-Out (FIFO) data structure. In this problem, you are to simulate a queue using only stacks (which are Last-In-First-Out, LIFO). Your task is to implement the \`enqueue\`, \`dequeue\`, and \`peek\` methods using stack operations.

- \`enqueue(value)\` → Adds an element to the end of the queue.  
- \`dequeue()\` → Removes and returns the element from the front of the queue.  
- \`peek()\` → Returns the element at the front without removing it.  
- \`isEmpty()\` → Returns \`true\` if the queue is empty, else \`false\`.

### **Example Inputs & Outputs**  
\`\`\`javascript
const q = new QueueUsingStack();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();     // Output: 1
q.peek();        // Output: 2
q.isEmpty();     // Output: false
\`\`\`

### **Constraints & Edge Cases**  
- Only standard stack operations (\`push\`, \`pop\`, \`peek\`, \`length\`) are allowed.  
- All operations should have **amortized O(1)** time complexity.  
- Calling \`dequeue\` or \`peek\` on an empty queue should throw an error or return a clear indicator like \`null\`.  
- Support both integer and string data types as queue elements.5:["$","`,
    examples: [
      {
        input: `["QueueUsingStack","enqueue","enqueue","enqueue","dequeue","dequeue","peek"],[[],[10],[20],[30],[],[],[]]`,
        output: '[null,null,null,null,10,20,30]',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'QueueUsingStack',
    isClass: true,
    starterCode: {
      javascript: `class QueueUsingStack {
    constructor() {}
    enqueue(value) {}
    dequeue() {}
    peek() {}
    isEmpty() {}
}
`,
      typescript: `class QueueUsingStack {
    constructor() {}
    enqueue(value) {}
    dequeue() {}
    peek() {}
    isEmpty() {}
}
`,
    },
    testCases: [
      {
        name: 'Enqueue and Dequeue Order',
        input: [
          [
            'QueueUsingStack',
            'enqueue',
            'enqueue',
            'enqueue',
            'dequeue',
            'dequeue',
            'peek',
          ],
          [[], [10], [20], [30], [], [], []],
        ],
        expected: [null, null, null, null, 10, 20, 30],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Empty Queue Handling',
        input: [
          ['QueueUsingStack', 'isEmpty', 'peek', 'dequeue'],
          [[], [], [], []],
        ],
        expected: [null, true, null, null],
        isHidden: true,
      },
    ],
    hints: [
      `Initialize Two Stacks

Create a class with two arrays for stacks:

\`\`\`js
class QueueUsingStack {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
}
\`\`\``,
      `Enqueue Operation

To add an item to the queue, push it onto \`inStack\`:

\`\`\`js
enqueue(value) {
  this.inStack.push(value);
}
\`\`\``,
      `Dequeue Operation

To remove from the queue:

* First check if \`outStack\` is empty.
* If it is, transfer all items from \`inStack\` to \`outStack\`.
* Then pop from \`outStack\`.

\`\`\`js
dequeue() {
  if (this.isEmpty()) return null;
  if (this.outStack.length === 0) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
}
\`\`\``,
      `Peek Operation

To get the front of the queue without removing it:

* Use the same logic as \`dequeue\`, but return the top of \`outStack\`.

\`\`\`js
peek() {
  if (this.isEmpty()) return null;
  if (this.outStack.length === 0) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack[this.outStack.length - 1];
}
\`\`\`
`,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use two stacks: \`inStack\` (for enqueue) and \`outStack\` (for dequeue/peek).
2. For \`enqueue\`, simply push onto \`inStack\`.
3. For \`dequeue\` or \`peek\`, if \`outStack\` is empty:
   - Pop all elements from \`inStack\` and push them into \`outStack\`.
4. Now, \`outStack\` represents the front of the queue.
5. \`isEmpty\` checks if both stacks are empty.

### **Solution Code**`,
      code: `class QueueUsingStack {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '091',
    slug: 'design-autocomplete',
    title: 'Design Autocomplete',
    difficulty: 'hard',
    topics: ['String', 'Tree', 'Math', 'Design'],
    acceptanceRate: '72%',
    description: `Design a class \`AutocompleteSystem\` that helps with word suggestions based on a given prefix.

You must implement the following methods:  
- \`insert(word: string)\`: Inserts a word into the system.  
- \`search(prefix: string): string[]\`: Returns all words in the system that start with the given prefix. The result can be in any order.

### **Example Inputs & Outputs**  
\`\`\`javascript
const system = new AutocompleteSystem();
system.insert('cat');
system.insert('car');
system.insert('carbon');
system.insert('dog');

system.search('ca'); // ['cat', 'car', 'carbon']
system.search('car'); // ['car', 'carbon']
system.search('do'); // ['dog']
system.search('z'); // []
\`\`\`

### **Constraints & Edge Cases**  
- Words are lowercase English letters only.  
- Prefixes can be empty strings — return all inserted words in that case.  
- Duplicates may be inserted but only need to appear once in search results.  
- Assume each \`search\` is case-sensitive.  
- Handle large number of insertions efficiently (use Trie, not brute force list scan).  5:`,
    examples: [
      {
        input: `["AutocompleteSystem","insert","insert","insert","insert","search"],[[],["cat"],["car"],["carbon"],["dog"],["ca"]]`,
        output: `[null,null,null,null,null,["car","carbon","cat"]]`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'AutocompleteSystem',
    isClass: true,
    starterCode: {
      javascript: `class AutocompleteSystem {
    constructor() {
        this.root = {}; // Root is a plain object
    }
    insert(word) {
        // Your implementation
    }

    search(prefix) {
        // Your implementation
    }
}
`,
      typescript: `class AutocompleteSystem {
    constructor() {
        this.root = {}; // Root is a plain object
    }
    insert(word) {
        // Your implementation
    }

    search(prefix) {
        // Your implementation
    }
}
`,
    },
    testCases: [
      {
        name: 'Insert and Search Prefix',
        input: [
          [
            'AutocompleteSystem',
            'insert',
            'insert',
            'insert',
            'insert',
            'search',
          ],
          [[], ['cat'], ['car'], ['carbon'], ['dog'], ['ca']],
        ],
        expected: [null, null, null, null, null, ['car', 'carbon', 'cat']],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Search Non-Existent Prefix',
        input: [
          ['AutocompleteSystem', 'insert', 'search'],
          [[], ['apple'], ['xyz']],
        ],
        expected: [null, null, []],
        isHidden: true,
      },
    ],
    hints: [
      `Think Trie for Efficient Prefix Search

To support fast prefix search, use a **Trie** (prefix tree) structure. Each node represents a character, and full words are built as paths in the tree.

> Start with a plain object as the root:

\`\`\`js
this.root = {};
\`\`\``,
      `Build the Trie with \`insert\`

Each character becomes a key in a nested object. At the end of the word, mark the node with a flag like \`isEnd\`.

> Insert characters one-by-one:

\`\`\`js
for (let char of word) {
    if (!node[char]) {
        node[char] = {};
    }
    node = node[char];
}
node.isEnd = true;
\`\`\``,
      `Traverse Prefix Path in \`search\`

To find words starting with a prefix, **walk down** the trie using each character. If a character is missing, return an empty result.

> Traverse the trie up to the end of the prefix:

\`\`\`js
let node = this.root;
for (let char of prefix) {
    if (!node[char]) return [];
    node = node[char];
}
\`\`\``,
      `Use DFS to Gather Words

Once you reach the node after the prefix, **recursively collect** all valid word completions using Depth-First Search.

> Use a helper function:

\`\`\`js
const dfs = (node, path) => {
    if (node.isEnd) results.push(path);
    for (let char in node) {
        if (char !== 'isEnd') {
            dfs(node[char], path + char);
        }
    }
};
\`\`\`

Call it with:

\`\`\`js
dfs(node, prefix);
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. Use a **TrieNode** class to represent each character node.  
2. Each TrieNode has:  
   - \`children\`: a map of character → TrieNode  
   - \`isEnd\`: boolean marking the end of a word  
3. For \`insert(word)\`:  
   - Traverse the Trie creating nodes as needed  
   - Mark the last node as an end node  
4. For \`search(prefix)\`:  
   - Traverse down to the node for the last character in prefix  
   - Perform **DFS** from that node to collect all words that start with that prefix  

### **Solution Code**`,
      code: `class AutocompleteSystem {
  constructor() {
    this.root = {}; // Root is a plain object
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true; // Mark end of a word
  }

  search(prefix) {
    const results = [];

    const dfs = (node, path) => {
      if (node.isEnd) {
        results.push(path);
      }
      for (let char in node) {
        if (char !== 'isEnd') {
          dfs(node[char], path + char);
        }
      }
    };

    let node = this.root;
    for (let char of prefix) {
      if (!node[char]) return [];
      node = node[char];
    }

    dfs(node, prefix);
    return results;
  }
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '092',
    slug: 'all-pairs-shortest-path-floyd-warshall-algorithm',
    title: 'All Pairs Shortest Path (Floyd-Warshall Algorithm)',
    difficulty: 'hard',
    topics: ['Array', 'Graph', 'Dynamic Programming', 'Math'],
    acceptanceRate: '89%',
    description: `Find the shortest distance between all pairs of nodes in a weighted directed graph using Floyd-Warshall Algorithm. This dynamic programming approach computes shortest paths between every pair of vertices in a single run, making it efficient for dense graphs or when you need all-pairs shortest paths.

### Problem
- Given a weighted directed graph with V vertices and an edge list edges, return a 2D array dist where dist[i][j] represents the shortest distance from node i to node j. If node j is unreachable from node i, dist[i][j] should be Infinity. The distance from a node to itself is always 0.

### Note:
- The edge list uses [u, v, weight] format. The algorithm can handle negative edge weights but not negative cycles.`,
    examples: [
      {
        input: '1,[]',
        output: '[[0]]',
      },
    ],
    constraints: [
      'Graph is represented as an edge list where each edge is [u, v, weight]',
      'Edge weights can be positive, zero, or negative (but no negative cycles)',
      'V is the number of vertices (nodes numbered from 0 to V-1)',
      'Graph may contain cycles',
      'Graph may be disconnected',
      'Distance from a node to itself is always 0',
      'Unreachable pairs have distance Infinity',
      'Algorithm returns a V × V distance matrix',
    ],
    functionName: 'floydWarshall',
    starterCode: {
      javascript: `function floydWarshall(V, edges) {
  // your solution
}
`,
      typescript: `function floydWarshall(V: any, edges: any): any {
  // your solution
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [1, []],
        expected: [[0]],
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle base cases',
        input: [2, [[0, 1, 5]]],
        expected: [
          [0, 5],
          [null, 0],
        ],
        isHidden: true,
      },
    ],
    hints: [
      `### Dynamic Programming Approach
Floyd-Warshall uses DP: "What's the shortest path from i to j using nodes 0..k as intermediates?" After iteration k, we've considered all paths using nodes 0 through k.`,
      `### Initialize Distance Matrix
\`\`\`js
const dist = Array.from({ length: V }, (_, i) =>
    Array.from({ length: V }, (_, j) => (i === j) ? 0 : Infinity)
);
\`\`\`
Distance from node to itself is 0
All other pairs start as Infinity
Then set direct edges: dist[i][j] = weight for each edge`,
      `### The Triple Loop
\`\`\`js
for (let k = 0; k < V; k++) {           // Intermediate nodes
    for (let i = 0; i < V; i++) {       // Source nodes
        for (let j = 0; j < V; j++) {    // Destination nodes
            dist[i][j] = Math.min(
                dist[i][j], 
                dist[i][k] + dist[k][j]  // Try going via k
            );
        }
    }
}
\`\`\`
- Critical: The k loop MUST be outermost! We're building up the solution incrementally.`,
      `### Relaxation Formula
\`\`\`js
dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) means:
\`\`\`

Keep current best path from i to j, OR
Try going from i to k to j (if that's shorter)`,
      `### Why This Works
- After iteration k, dist[i][j] contains shortest path using nodes 0..k as intermediates
- By iteration V-1, we've considered all possible intermediate nodes
- Result: shortest path between ALL pairs of nodes!
Remember: Floyd-Warshall finds ALL pairs shortest paths in O(V³) time, perfect for dense graphs!`,
    ],
    solution: {
      explanation: `Given a weighted directed graph, find the shortest distance between all pairs of nodes using Floyd-Warshall Algorithm. This dynamic programming approach computes shortest paths between every pair of vertices in a single run, making it efficient for dense graphs or when you need all-pairs shortest paths.

### Solution: Floyd-Warshall Algorithm
#### Approach
- Use dynamic programming with the idea: "What is the shortest path from i to j that can use nodes 0 through k as intermediates?" We build up the solution by considering each node as a potential intermediate.

#### Algorithm

##### Initialize dist matrix:
- dist[i][i] = 0 (distance from node to itself)
- dist[i][j] = Infinity for all other pairs
- Set dist[i][j] = weight for each edge [i, j, weight]

##### For each intermediate node k (from 0 to V-1):

- For each source node i:
- For each destination node j:
- dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
- (Try going from i to j via k)

##### Return the distance matrix.

#### Code`,
      code: `function floydWarshall(V, edges) {
  const dist = Array.from({ length: V }, (_, i) =>
    Array.from({ length: V }, (_, j) => (i === j ? 0 : Infinity))
  );

  for (let [i, j, w] of edges) {
    dist[i][j] = w;
  }

  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  return dist;
}`,
      complexity: {
        time: 'O(V³)',
        space: 'O(V²)',
      },
    },
  },
  {
    id: '093',
    slug: 'create-task-scheduler-with-dependencies',
    title: 'Create Task Scheduler With Dependencies',
    difficulty: 'hard',
    topics: ['String', 'Graph', 'Sorting', 'Design'],
    acceptanceRate: '78%',
    description: `Implement a **Task Scheduler with Dependencies** that executes tasks in the correct order while handling dependencies.  

1. Each task has a **unique ID** and can have **zero or more dependencies**.  
2. A task **cannot execute until all its dependencies have been completed**.  
3. The scheduler should **detect circular dependencies** and prevent execution in such cases.  
4. The order of execution should follow **topological sorting** of the dependency graph.  

## **Example Inputs & Outputs**  
\`\`\`javascript
const scheduler = new TaskSchedulerWithDependencies();

scheduler.addTask("A", ["B", "C"]);
scheduler.addTask("B", ["D"]);
scheduler.addTask("C", []);
scheduler.addTask("D", []);

console.log(scheduler.execute());
// Output: ["D", "B", "C", "A"] (One possible valid order)

scheduler.addTask("E", ["F"]);
scheduler.addTask("F", ["E"]);

console.log(scheduler.execute());
// Output: Error: Circular dependency detected!
\`\`\`

---

## **Constraints & Edge Cases**  
- **Tasks are represented as unique strings**.  
- **Dependencies are also valid task IDs**.  
- **Each task should be executed only once**.  
- **Circular dependencies should be detected and prevented**.  
- **If a task has no dependencies, it should execute immediately**.  
- **Tasks with independent execution orders can have multiple valid outputs**.`,
    examples: [
      {
        input: `["TaskSchedulerWithDependencies","addTask","addTask","addTask","addTask","execute"],[[],["A",["B","C"]],["B",["D"]],["C",[]],["D",[]],[]]`,
        output: `[null,null,null,null,null,["D","B","C","A"]]`,
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'TaskSchedulerWithDependencies',
    isClass: true,
    isAsync: true,
    starterCode: {
      javascript: `class TaskSchedulerWithDependencies {
    constructor() {
        // Your implementation
    }

    addTask(taskId, dependencies) {
        // Your implementation
    }

    execute() {
        // Your implementation
    }
}
`,
      typescript: `class TaskSchedulerWithDependencies {
    constructor() {
        // Your implementation
    }

    addTask(taskId, dependencies) {
        // Your implementation
    }

    execute() {
        // Your implementation
    }
}
`,
    },
    testCases: [
      {
        name: 'Basic Task Dependencies',
        input: [
          [
            'TaskSchedulerWithDependencies',
            'addTask',
            'addTask',
            'addTask',
            'addTask',
            'execute',
          ],
          [[], ['A', ['B', 'C']], ['B', ['D']], ['C', []], ['D', []], []],
        ],
        expected: [null, null, null, null, null, ['D', 'B', 'C', 'A']],
      },
    ],
    hiddenTestCases: [
      {
        name: 'Single Task',
        input: [
          ['TaskSchedulerWithDependencies', 'addTask', 'execute'],
          [[], ['Task1', []], []],
        ],
        expected: [null, null, ['Task1']],
        isHidden: true,
      },
    ],
    hints: [
      `Initialize graph and in-degree maps in constructor

* Use an adjacency list (\`graph\`) to store tasks and their dependents.
* Use \`inDegree\` map to track number of dependencies each task has.

\`\`\`js
constructor() {
  this.graph = new Map();
  this.inDegree = new Map();
}
\`\`\``,
      `Add tasks and dependencies

* Ensure every task and dependency exists in maps.
* For each dependency of a task:

  * Add the task to the dependency’s adjacency list.
  * Increment the task’s in-degree count.

\`\`\`js
addTask(taskId, dependencies) {
  if (!this.graph.has(taskId)) {
    this.graph.set(taskId, []);
    this.inDegree.set(taskId, 0);
  }
  for (const dep of dependencies) {
    if (!this.graph.has(dep)) {
      this.graph.set(dep, []);
      this.inDegree.set(dep, 0);
    }
    this.graph.get(dep).push(taskId);
    this.inDegree.set(taskId, (this.inDegree.get(taskId) || 0) + 1);
  }
}
\`\`\`
`,
      `Execute tasks respecting dependencies (Topological sort)

* Start with tasks that have no dependencies (in-degree 0).
* Process tasks in queue:

  * Add task to execution order.
  * Decrement in-degree of dependent tasks.
  * Add dependents with in-degree 0 to queue.
* If not all tasks are processed, detect a cycle and throw error.

\`\`\`js
execute() {
  const queue = [];
  const executionOrder = [];

  for (const [task, degree] of this.inDegree) {
    if (degree === 0) queue.push(task);
  }

  while (queue.length > 0) {
    const task = queue.shift();
    executionOrder.push(task);

    for (const dependentTask of this.graph.get(task)) {
      this.inDegree.set(dependentTask, this.inDegree.get(dependentTask) - 1);
      if (this.inDegree.get(dependentTask) === 0) queue.push(dependentTask);
    }
  }

  if (executionOrder.length !== this.graph.size) {
    throw new Error("Circular dependency detected!");
  }

  return executionOrder;
}
\`\`\``,
    ],
    solution: {
      explanation: `### **Approach**  
1. **Use a Graph Representation**  
   - Store tasks as **nodes** in an **adjacency list**.  
   - Dependencies represent **directed edges** from a task to its dependent tasks.  

2. **Use Topological Sorting**  
   - Compute **in-degree** (number of dependencies) for each task.  
   - Use **Kahn’s Algorithm (BFS-based Topological Sorting)** to find execution order.  
   - If a cycle is detected (some tasks have non-zero in-degree after processing), return an error.  

### **Solution Code**`,
      code: `class TaskSchedulerWithDependencies {
  constructor() {
    this.graph = new Map(); // Adjacency list
    this.inDegree = new Map(); // Track dependencies count
  }

  addTask(taskId, dependencies) {
    if (!this.graph.has(taskId)) {
      this.graph.set(taskId, []);
      this.inDegree.set(taskId, 0);
    }

    for (const dep of dependencies) {
      if (!this.graph.has(dep)) {
        this.graph.set(dep, []);
        this.inDegree.set(dep, 0);
      }
      this.graph.get(dep).push(taskId);
      this.inDegree.set(taskId, (this.inDegree.get(taskId) || 0) + 1);
    }
  }

  execute() {
    const queue = [];
    const executionOrder = [];

    // Enqueue tasks with no dependencies (in-degree = 0)
    for (const [task, degree] of this.inDegree) {
      if (degree === 0) {
        queue.push(task);
      }
    }

    while (queue.length > 0) {
      const task = queue.shift();
      executionOrder.push(task);

      for (const dependentTask of this.graph.get(task)) {
        this.inDegree.set(dependentTask, this.inDegree.get(dependentTask) - 1);
        if (this.inDegree.get(dependentTask) === 0) {
          queue.push(dependentTask);
        }
      }
    }

    // Check for a cycle (if tasks are left with non-zero in-degree)
    if (executionOrder.length !== this.graph.size) {
      throw new Error('Circular dependency detected!');
    }

    return executionOrder;
  }
}

// Example usage:
const scheduler = new TaskSchedulerWithDependencies();
scheduler.addTask('A', ['B', 'C']);
scheduler.addTask('B', ['D']);
scheduler.addTask('C', []);
scheduler.addTask('D', []);

console.log(scheduler.execute()); // ["D", "B", "C", "A"]

// Circular dependency test
scheduler.addTask('E', ['F']);
scheduler.addTask('F', ['E']);
console.log(scheduler.execute()); // Error: Circular dependency detected!`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
  {
    id: '094',
    slug: 'first-missing-positive',
    title: 'First Missing Positive',
    difficulty: 'hard',
    topics: ['Array', 'Math', 'Sorting'],
    acceptanceRate: '67%',
    description:
      'Given an unsorted integer array nums, return the smallest positive integer that is not present in nums. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.',
    examples: [
      {
        input: '[1]',
        output: '2',
      },
      {
        input: '[2]',
        output: '1',
      },
      {
        input: '[0]',
        output: '1',
      },
    ],
    constraints: ['Follow standard runtime and memory constraints.'],
    functionName: 'firstMissingPositive',
    starterCode: {
      javascript: `function firstMissingPositive(nums) {
  // Your code here
}
`,
      typescript: `function firstMissingPositive(nums: any): any {
  // Your code here
}
`,
    },
    testCases: [
      {
        name: 'should handle base cases',
        input: [[1]],
        expected: 2,
      },
      {
        name: 'should handle base cases',
        input: [[2]],
        expected: 1,
      },
      {
        name: 'should handle base cases',
        input: [[0]],
        expected: 1,
      },
    ],
    hiddenTestCases: [
      {
        name: 'should handle base cases',
        input: [[-1]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: [[1, 2, 0]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: [[3, 4, -1, 1]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle simple cases',
        input: [[7, 8, 9, 11, 12]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle arrays with missing numbers',
        input: [[1, 2, 3, 5, 6]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle arrays with missing numbers',
        input: [[1, 2, 3, 4, 6, 7]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle arrays with missing numbers',
        input: [[2, 3, 4, 5, 6]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 2, 3, 4]],
        expected: 5,
        isHidden: true,
      },
      {
        name: 'should handle edge cases',
        input: [[1, 2, 3, 4, 5]],
        expected: 6,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-1, -2, -3]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-5, -3, -1, 0]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle negative numbers',
        input: [[-1, 1, 2, 3]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [[-1, 1, 3, 4]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [[0, -1, 1, 2, 4]],
        expected: 3,
        isHidden: true,
      },
      {
        name: 'should handle mixed positive and negative',
        input: [[-2, -1, 0, 1, 3]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle duplicate values',
        input: [[1, 1, 2, 2, 3, 3]],
        expected: 4,
        isHidden: true,
      },
      {
        name: 'should handle duplicate values',
        input: [[1, 1, 1, 1]],
        expected: 2,
        isHidden: true,
      },
      {
        name: 'should handle duplicate values',
        input: [[2, 2, 2, 2]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle large ranges',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
        expected: 11,
        isHidden: true,
      },
      {
        name: 'should handle large ranges',
        input: [[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle large ranges',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 11]],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'should handle single element edge cases',
        input: [[100]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle single element edge cases',
        input: [[-100]],
        expected: 1,
        isHidden: true,
      },
      {
        name: 'should handle complex scenarios',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]],
        expected: 10,
        isHidden: true,
      },
      {
        name: 'should handle complex scenarios',
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]],
        expected: 11,
        isHidden: true,
      },
      {
        name: 'should handle complex scenarios',
        input: [[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
        expected: 1,
        isHidden: true,
      },
    ],
    hints: [
      `### 1. Index Mapping
- Number x should be at index x-1 (0-indexed)
- Only numbers in range [1, n] can be placed at valid indices`,
      `### 2. Cyclic Sort Strategy
- Use in-place swapping to place each number at its correct position
- Avoid extra data structures for O(1) space`,
      `### 3. Two-Phase Approach
- Phase 1: Cyclic sort to place numbers at correct indices
- Phase 2: Scan array to find first nums[i] !== i+1`,
      `### 4. Core Algorithm
\`\`\`js
while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
  const correctIndex = nums[i] - 1;
  [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
}
\`\`\`
- Remember: Place each number at index number-1, then find first mismatch!`,
    ],
    solution: {
      explanation: `### Approach

Given an unsorted integer array nums, find the smallest positive integer that is not present in the array, achieving O(n) time complexity and O(1) auxiliary space.

### Optimal Solution: Cyclic Sort

#### Approach

Use cyclic sort to place each positive number at its correct index (number-1), then scan to find the first missing positive.

#### Key Insights
- Index Mapping: Number x should be at index x-1 (0-indexed)
- Range Constraint: Only numbers in range [1, n] can be placed at valid indices
- Cyclic Sort: Swap numbers until they reach their correct positions
- Missing Detection: First index i where nums[i] !== i+1 indicates missing number

#### Algorithm
- Cyclic Sort: Place each number at its correct index
- Validation: Ensure numbers are in valid range and not duplicates
- Scan: Find first index where number doesn't match expected value
- Return: Missing number or n+1 if all numbers present`,
      code: `function firstMissingPositive(nums) {
  const n = nums.length;

  // Cyclic sort: place each number at its correct index
  for (let i = 0; i < n; i++) {
    // Keep swapping until the current number is in its correct position
    // or until we can't place it (out of range or duplicate)
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Swap nums[i] with the number at its correct position
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Find the first missing positive
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all numbers from 1 to n are present, return n + 1
  return n + 1;
}`,
      complexity: {
        time: 'O(n)',
        space: 'O(1)',
      },
    },
  },
];
