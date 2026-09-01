import type { Lesson } from '../../types';

export const part5Lessons: Lesson[] = [
  {
    "title": "Generators",
    "description": "Regular functions return only one, single value (or nothing).",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Regular functions return only one, single value (or nothing).",
          "Generators can return (\"yield\") multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease."
        ]
      },
      {
        "heading": "Generator functions",
        "paragraphs": [
          "To create a generator, we need a special syntax construct: `function*`, so-called \"generator function\".",
          "It looks like this:",
          "Generator functions behave differently from regular ones. When such function is called, it doesn't run its code. Instead it returns a special object, called \"generator object\", to manage the execution.",
          "Here, take a look:",
          "The function code execution hasn't started yet:"
        ],
        "codeExamples": [
          {
            "title": "Generator functions",
            "code": "function* generateSequence() {\n  yield 1;\n  yield 2;\n  return 3;\n}",
            "explanation": "Example demonstrating generator functions."
          },
          {
            "title": "Generator functions",
            "code": "function* generateSequence() {\n  yield 1;\n  yield 2;\n  return 3;\n}\n\n// \"generator function\" creates \"generator object\"\nlet generator = generateSequence();\n*!*\nalert(generator); // [object Generator]\n*/!*",
            "explanation": "Example demonstrating generator functions."
          }
        ],
        "bulletPoints": [
          "`value`: the yielded value.",
          "`done`: `true` if the function code has finished, otherwise `false`."
        ]
      },
      {
        "heading": "Generators are iterable",
        "paragraphs": [
          "As you probably already guessed looking at the `next()` method, generators are iterable.",
          "We can loop over their values using `for..of`:",
          "Looks a lot nicer than calling `.next().value`, right?",
          "...But please note: the example above shows `1`, then `2`, and that's all. It doesn't show `3`!",
          "It's because `for..of` iteration ignores the last `value`, when `done: true`. So, if we want all results to be shown by `for..of`, we must return them with `yield`:"
        ],
        "codeExamples": [
          {
            "title": "Generators are iterable",
            "code": "function* generateSequence() {\n  yield 1;\n  yield 2;\n  return 3;\n}\n\nlet generator = generateSequence();\n\nfor(let value of generator) {\n  alert(value); // 1, then 2\n}",
            "explanation": "Example demonstrating generators are iterable."
          },
          {
            "title": "Generators are iterable",
            "code": "function* generateSequence() {\n  yield 1;\n  yield 2;\n*!*\n  yield 3;\n*/!*\n}\n\nlet generator = generateSequence();\n\nfor(let value of generator) {\n  alert(value); // 1, then 2, then 3\n}",
            "explanation": "Example demonstrating generators are iterable."
          }
        ]
      },
      {
        "heading": "Using generators for iterables",
        "paragraphs": [
          "Some time ago, in the chapter [](info:iterable) we created an iterable `range` object that returns values `from..to`.",
          "Here, let's remember the code:",
          "We can use a generator function for iteration by providing it as `Symbol.iterator`.",
          "Here's the same `range`, but much more compact:",
          "That works, because `range[Symbol.iterator]()` now returns a generator, and generator methods are exactly what `for..of` expects:"
        ],
        "codeExamples": [
          {
            "title": "Using generators for iterables",
            "code": "let range = {\n  from: 1,\n  to: 5,\n\n  // for..of range calls this method once in the very beginning\n  [Symbol.iterator]() {\n    // ...it returns the iterator object:\n    // onward, for..of works only with that object, asking it for next values\n    return {\n      current: this.from,\n      last: this.to,\n\n      // next() is called on each iteration by the for..of loop\n      next() {\n        // it should return the value as an object {done:.., value :...}\n        if (this.current <= this.last) {\n          return { done: false, value: this.current++ };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\n// iteration over range returns numbers from range.from to range.to\nalert([...range]); // 1,2,3,4,5",
            "explanation": "Example demonstrating using generators for iterables."
          },
          {
            "title": "Using generators for iterables",
            "code": "let range = {\n  from: 1,\n  to: 5,\n\n  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()\n    for(let value = this.from; value <= this.to; value++) {\n      yield value;\n    }\n  }\n};\n\nalert( [...range] ); // 1,2,3,4,5",
            "explanation": "Example demonstrating using generators for iterables."
          }
        ],
        "bulletPoints": [
          "it has a `.next()` method",
          "that returns values in the form `{value: ..., done: true/false}`"
        ]
      },
      {
        "heading": "Generator composition",
        "paragraphs": [
          "Generator composition is a special feature of generators that allows to transparently \"embed\" generators in each other.",
          "For instance, we have a function that generates a sequence of numbers:",
          "Now we'd like to reuse it to generate a more complex sequence:",
          "We can use this sequence e.g. to create passwords by selecting characters from it (could add syntax characters as well), but let's generate it first.",
          "In a regular function, to combine results from multiple other functions, we call them, store the results, and then join at the end."
        ],
        "codeExamples": [
          {
            "title": "Generator composition",
            "code": "function* generateSequence(start, end) {\n  for (let i = start; i <= end; i++) yield i;\n}",
            "explanation": "Example demonstrating generator composition."
          },
          {
            "title": "Generator composition",
            "code": "function* generateSequence(start, end) {\n  for (let i = start; i <= end; i++) yield i;\n}\n\nfunction* generatePasswordCodes() {\n\n*!*\n  // 0..9\n  yield* generateSequence(48, 57);\n\n  // A..Z\n  yield* generateSequence(65, 90);\n\n  // a..z\n  yield* generateSequence(97, 122);\n*/!*\n\n}\n\nlet str = '';\n\nfor(let code of generatePasswordCodes()) {\n  str += String.fromCharCode(code);\n}\n\nalert(str); // 0..9A..Za..z",
            "explanation": "Example demonstrating generator composition."
          }
        ],
        "bulletPoints": [
          "first, digits `0..9` (with character codes 48..57),",
          "followed by uppercase alphabet letters `A..Z` (character codes 65..90)",
          "followed by lowercase alphabet letters `a..z` (character codes 97..122)"
        ]
      },
      {
        "heading": "\"yield\" is a two-way street",
        "paragraphs": [
          "Until this moment, generators were similar to iterable objects, with a special syntax to generate values. But in fact they are much more powerful and flexible.",
          "That's because `yield` is a two-way street: it not only returns the result to the outside, but also can pass the value inside the generator.",
          "To do so, we should call `generator.next(arg)`, with an argument. That argument becomes the result of `yield`.",
          "Let's see an example:",
          "![](genYield2.svg)"
        ],
        "codeExamples": [
          {
            "title": "\"yield\" is a two-way street",
            "code": "function* gen() {\n*!*\n  // Pass a question to the outer code and wait for an answer\n  let result = yield \"2 + 2 = ?\"; // (*)\n*/!*\n\n  alert(result);\n}\n\nlet generator = gen();\n\nlet question = generator.next().value; // <-- yield returns the value\n\ngenerator.next(4); // --> pass the result into the generator",
            "explanation": "Example demonstrating \"yield\" is a two-way street."
          },
          {
            "title": "\"yield\" is a two-way street",
            "code": "// resume the generator after some time\nsetTimeout(() => generator.next(4), 1000);",
            "explanation": "Example demonstrating \"yield\" is a two-way street."
          }
        ]
      },
      {
        "heading": "generator.throw",
        "paragraphs": [
          "As we observed in the examples above, the outer code may pass a value into the generator, as the result of `yield`.",
          "...But it can also initiate (throw) an error there. That's natural, as an error is a kind of result.",
          "To pass an error into a `yield`, we should call `generator.throw(err)`. In that case, the `err` is thrown in the line with that `yield`.",
          "For instance, here the yield of `\"2 + 2 = ?\"` leads to an error:",
          "The error, thrown into the generator at line `(2)` leads to an exception in line `(1)` with `yield`. In the example above, `try..catch` catches it and shows it."
        ],
        "codeExamples": [
          {
            "title": "generator.throw",
            "code": "function* gen() {\n  try {\n    let result = yield \"2 + 2 = ?\"; // (1)\n\n    alert(\"The execution does not reach here, because the exception is thrown above\");\n  } catch(e) {\n    alert(e); // shows the error\n  }\n}\n\nlet generator = gen();\n\nlet question = generator.next().value;\n\n*!*\ngenerator.throw(new Error(\"The answer is not found in my database\")); // (2)\n*/!*",
            "explanation": "Example demonstrating generator.throw."
          },
          {
            "title": "generator.throw",
            "code": "function* generate() {\n  let result = yield \"2 + 2 = ?\"; // Error in this line\n}\n\nlet generator = generate();\n\nlet question = generator.next().value;\n\n*!*\ntry {\n  generator.throw(new Error(\"The answer is not found in my database\"));\n} catch(e) {\n  alert(e); // shows the error\n}\n*/!*",
            "explanation": "Example demonstrating generator.throw."
          }
        ]
      },
      {
        "heading": "generator.return",
        "paragraphs": [
          "`generator.return(value)` finishes the generator execution and return the given `value`.",
          "If we again use `generator.return()` in a completed generator, it will return that value again (MDN).",
          "Often we don't use it, as most of time we want to get all returning values, but it can be useful when we want to stop generator in a specific condition."
        ],
        "codeExamples": [
          {
            "title": "generator.return",
            "code": "function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst g = gen();\n\ng.next();        // { value: 1, done: false }\ng.return('foo'); // { value: \"foo\", done: true }\ng.next();        // { value: undefined, done: true }",
            "explanation": "Example demonstrating generator.return."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "In modern JavaScript, generators are rarely used. But sometimes they come in handy, because the ability of a function to exchange data with the calling code during the execution is quite unique. And, surely, they are great for making iterable objects.",
          "Also, in the next chapter we'll learn async generators, which are used to read streams of asynchronously generated data (e.g paginated fetches over a network) in `for await ... of` loops.",
          "In web-programming we often work with streamed data, so that's another very important use case."
        ],
        "bulletPoints": [
          "Generators are created by generator functions `function* f(\u2026) {\u2026}`.",
          "Inside generators (only) there exists a `yield` operator.",
          "The outer code and the generator may exchange results via `next/yield` calls."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Pseudo-random generator",
        "description": "There are many areas where we need random data. One of them is testing. We may need random data: text, numbers, etc. to test things out well. In JavaScript, we could use `Math.random()`. But if something goes wrong, we'd like to be able to repeat the test, using exactly the same data. For that, so c",
        "starterCode": "next = previous * 16807 % 2147483647",
        "solution": "Please note, the same can be done with a regular function, like this:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Generators in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for generators.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Generators is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Generators?",
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
      "Generators is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying generators.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "generators"
    ],
    "slug": "generators"
  },
  {
    "title": "Async Iterators Generators",
    "description": "Asynchronous iteration allow us to iterate over data that comes asynchronously, on-demand. Like, for instance, when we download something chunk-by-chunk over a network. And asynchr...",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Asynchronous iteration allow us to iterate over data that comes asynchronously, on-demand. Like, for instance, when we download something chunk-by-chunk over a network. And asynchronous generators make it even more convenient.",
          "Let's see a simple example first, to grasp the syntax, and then review a real-life use case."
        ]
      },
      {
        "heading": "Recall iterables",
        "paragraphs": [
          "Let's recall the topic about iterables.",
          "The idea is that we have an object, such as `range` here:",
          "...And we'd like to use `for..of` loop on it, such as `for(value of range)`, to get values from `1` to `5`.",
          "In other words, we want to add an *iteration ability* to the object.",
          "That can be implemented using a special method with the name `Symbol.iterator`:"
        ],
        "codeExamples": [
          {
            "title": "Recall iterables",
            "code": "let range = {\n  from: 1,\n  to: 5\n};",
            "explanation": "Example demonstrating recall iterables."
          },
          {
            "title": "Recall iterables",
            "code": "let range = {\n  from: 1,\n  to: 5,\n\n*!*\n  [Symbol.iterator]() { // called once, in the beginning of for..of\n*/!*\n    return {\n      current: this.from,\n      last: this.to,\n\n*!*\n      next() { // called every iteration, to get the next value\n*/!*\n        if (this.current <= this.last) {\n          return { done: false, value: this.current++ };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\nfor(let value of range) {\n  alert(value); // 1 then 2, then 3, then 4, then 5\n}",
            "explanation": "Example demonstrating recall iterables."
          }
        ],
        "bulletPoints": [
          "This method is called in by the `for..of` construct when the loop is started, and it should return an object with the `next` method.",
          "For each iteration, the `next()` method is invoked for the next value.",
          "The `next()` should return a value in the form `{done: true/false, value:}`, where `done:true` means the end of the loop."
        ]
      },
      {
        "heading": "Async iterables",
        "paragraphs": [
          "Asynchronous iteration is needed when values come asynchronously: after `setTimeout` or another kind of delay.",
          "The most common case is that the object needs to make a network request to deliver the next value, we'll see a real-life example of it a bit later.",
          "To make an object iterable asynchronously:",
          "1. Use `Symbol.asyncIterator` instead of `Symbol.iterator`.",
          "2. The `next()` method should return a promise (to be fulfilled with the next value)."
        ],
        "codeExamples": [
          {
            "title": "Async iterables",
            "code": "let range = {\n  from: 1,\n  to: 5,\n\n*!*\n  [Symbol.asyncIterator]() { // (1)\n*/!*\n    return {\n      current: this.from,\n      last: this.to,\n\n*!*\n      async next() { // (2)\n*/!*\n\n*!*\n        // note: we can use \"await\" inside the async next:\n        await new Promise(resolve => setTimeout(resolve, 1000)); // (3)\n*/!*\n\n        if (this.current <= this.last) {\n          return { done: false, value: this.current++ };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\n(async () => {\n\n*!*\n  for await (let value of range) { // (4)\n    alert(value); // 1,2,3,4,5\n  }\n*/!*\n\n})()",
            "explanation": "Example demonstrating async iterables."
          },
          {
            "title": "Async iterables",
            "code": "Features that require regular, synchronous iterators, don't work with asynchronous ones.\n\nFor instance, a spread syntax won't work:",
            "explanation": "Example demonstrating async iterables."
          }
        ],
        "bulletPoints": [
          "The `async` keyword handles it, we can simply make `async next()`.",
          "Note the `await` word."
        ]
      },
      {
        "heading": "Recall generators",
        "paragraphs": [
          "Now let's recall generators, as they allow to make iteration code much shorter. Most of the time, when we'd like to make an iterable, we'll use generators.",
          "For sheer simplicity, omitting some important stuff, they are \"functions that generate (yield) values\". They are explained in detail in the chapter [](info:generators).",
          "Generators are labelled with `function*` (note the star) and use `yield` to generate a value, then we can use `for..of` to loop over them.",
          "This example generates a sequence of values from `start` to `end`:",
          "As we already know, to make an object iterable, we should add `Symbol.iterator` to it."
        ],
        "codeExamples": [
          {
            "title": "Recall generators",
            "code": "function* generateSequence(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}\n\nfor(let value of generateSequence(1, 5)) {\n  alert(value); // 1, then 2, then 3, then 4, then 5\n}",
            "explanation": "Example demonstrating recall generators."
          },
          {
            "title": "Recall generators",
            "code": "let range = {\n  from: 1,\n  to: 5,\n*!*\n  [Symbol.iterator]() {\n    return <object with next to make range iterable>\n  }\n*/!*\n}",
            "explanation": "Example demonstrating recall generators."
          }
        ]
      },
      {
        "heading": "Async generators (finally)",
        "paragraphs": [
          "For most practical applications, when we'd like to make an object that asynchronously generates a sequence of values, we can use an asynchronous generator.",
          "The syntax is simple: prepend `function*` with `async`. That makes the generator asynchronous.",
          "And then use `for await (...)` to iterate over it, like this:",
          "As the generator is asynchronous, we can use `await` inside it, rely on promises, perform network requests and so on.",
          "result = await generator.next(); // result = {value: ..., done: true/false}"
        ],
        "codeExamples": [
          {
            "title": "Async generators (finally)",
            "code": "*!*async*/!* function* generateSequence(start, end) {\n\n  for (let i = start; i <= end; i++) {\n\n*!*\n    // Wow, can use await!\n    await new Promise(resolve => setTimeout(resolve, 1000));\n*/!*\n\n    yield i;\n  }\n\n}\n\n(async () => {\n\n  let generator = generateSequence(1, 5);\n  for *!*await*/!* (let value of generator) {\n    alert(value); // 1, then 2, then 3, then 4, then 5 (with delay between)\n  }\n\n})();",
            "explanation": "Example demonstrating async generators (finally)."
          },
          {
            "title": "Async generators (finally)",
            "code": "Technically, if you're an advanced reader who remembers the details about generators, there's an internal difference.\n\nFor async generators, the `generator.next()` method is asynchronous, it returns promises.\n\nIn a regular generator we'd use `result = generator.next()` to get values. In an async generator, we should add `await`, like this:",
            "explanation": "Example demonstrating async generators (finally)."
          }
        ]
      },
      {
        "heading": "Async iterable range",
        "paragraphs": [
          "Regular generators can be used as `Symbol.iterator` to make the iteration code shorter.",
          "Similar to that, async generators can be used as `Symbol.asyncIterator` to implement the asynchronous iteration.",
          "For instance, we can make the `range` object generate values asynchronously, once per second, by replacing synchronous `Symbol.iterator` with asynchronous `Symbol.asyncIterator`:",
          "Now values come with a delay of 1 second between them."
        ],
        "codeExamples": [
          {
            "title": "Async iterable range",
            "code": "let range = {\n  from: 1,\n  to: 5,\n\n  // this line is same as [Symbol.asyncIterator]: async function*() {\n*!*\n  async *[Symbol.asyncIterator]() {\n*/!*\n    for(let value = this.from; value <= this.to; value++) {\n\n      // make a pause between values, wait for something  \n      await new Promise(resolve => setTimeout(resolve, 1000));\n\n      yield value;\n    }\n  }\n};\n\n(async () => {\n\n  for *!*await*/!* (let value of range) {\n    alert(value); // 1, then 2, then 3, then 4, then 5\n  }\n\n})();",
            "explanation": "Example demonstrating async iterable range."
          },
          {
            "title": "Async iterable range",
            "code": "Technically, we can add both `Symbol.iterator` and `Symbol.asyncIterator` to the object, so it's both synchronously (`for..of`) and asynchronously (`for await..of`) iterable.\n\nIn practice though, that would be a weird thing to do.",
            "explanation": "Example demonstrating async iterable range."
          }
        ]
      },
      {
        "heading": "Real-life example: paginated data",
        "paragraphs": [
          "So far we've seen basic examples, to gain understanding. Now let's review a real-life use case.",
          "There are many online services that deliver paginated data. For instance, when we need a list of users, a request returns a pre-defined count (e.g. 100 users) - \"one page\", and provides a URL to the next page.",
          "This pattern is very common. It's not about users, but just about anything.",
          "For instance, GitHub allows us to retrieve commits in the same, paginated fashion:",
          "For our code, we'd like to have a simpler way to get commits."
        ],
        "codeExamples": [
          {
            "title": "Real-life example: paginated data",
            "code": "for await (let commit of fetchCommits(\"username/repository\")) {\n  // process commit\n}",
            "explanation": "Example demonstrating real-life example: paginated data."
          },
          {
            "title": "Real-life example: paginated data",
            "code": "async function* fetchCommits(repo) {\n  let url = `https://api.github.com/repos/${repo}/commits`;\n\n  while (url) {\n    const response = await fetch(url, { // (1)\n      headers: {'User-Agent': 'Our script'}, // github needs any user-agent header\n    });\n\n    const body = await response.json(); // (2) response is JSON (array of commits)\n\n    // (3) the URL of the next page is in the headers, extract it\n    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel=\"next\"/);\n    nextPage = nextPage?.[1];\n\n    url = nextPage;\n\n    for(let commit of body) { // (4) yield commits one by one, until the page ends\n      yield commit;\n    }\n  }\n}",
            "explanation": "Example demonstrating real-life example: paginated data."
          }
        ],
        "bulletPoints": [
          "We should make a request to `fetch` in the form `https://api.github.com/repos//commits`.",
          "It responds with a JSON of 30 commits, and also provides a link to the next page in the `Link` header.",
          "Then we can use that link for the next request, to get more commits, and so on.",
          "The initial URL is `https://api.github.com/repos//commits`, and the next page will be in the `Link` header of the response.",
          "The `fetch` method allows us to supply authorization and other headers if needed -- here GitHub requires `User-Agent`."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Regular iterators and generators work fine with the data that doesn't take time to generate.",
          "When we expect the data to come asynchronously, with delays, their async counterparts can be used, and `for await..of` instead of `for..of`.",
          "Syntax differences between async and regular iterators:",
          "| | Iterable | Async Iterable |",
          "|-------|-----------|-----------------|"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Async Iterators Generators",
        "description": "Apply your understanding of Async Iterators Generators. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Async Iterators Generators\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Async Iterators Generators\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Async Iterators Generators in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for async iterators generators.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Async Iterators Generators is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Async Iterators Generators?",
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
      "Async Iterators Generators is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying async iterators generators.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "async-iterators-generators"
    ],
    "slug": "async-iterators-generators"
  },
  {
    "title": "Modules Intro",
    "description": "As our application grows bigger, we want to split it into multiple files, so called \"modules\". A module may contain a class or a library of functions for a specific purpose.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As our application grows bigger, we want to split it into multiple files, so called \"modules\". A module may contain a class or a library of functions for a specific purpose.",
          "For a long time, JavaScript existed without a language-level module syntax. That wasn't a problem, because initially scripts were small and simple, so there was no need.",
          "But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.",
          "To name some (for historical reasons):",
          "Now these all slowly became a part of history, but we still can find them in old scripts."
        ],
        "bulletPoints": [
          "AMD -- one of the most ancient module systems, initially implemented by the library require.js.",
          "CommonJS -- the module system created for Node.js server.",
          "UMD -- one more module system, suggested as a universal one, compatible with AMD and CommonJS."
        ]
      },
      {
        "heading": "What is a module?",
        "paragraphs": [
          "A module is just a file. One script is one module. As simple as that.",
          "Modules can load each other and use special directives `export` and `import` to interchange functionality, call functions of one module from another one:",
          "For instance, if we have a file `sayHi.js` exporting a function:",
          "...Then another file may import and use it:",
          "The `import` directive loads the module by path `./sayHi.js` relative to the current file, and assigns exported function `sayHi` to the corresponding variable."
        ],
        "codeExamples": [
          {
            "title": "What is a module?",
            "code": "// \ud83d\udcc1 sayHi.js\nexport function sayHi(user) {\n  alert(`Hello, ${user}!`);\n}",
            "explanation": "Example demonstrating what is a module?."
          },
          {
            "title": "What is a module?",
            "code": "// \ud83d\udcc1 main.js\nimport {sayHi} from './sayHi.js';\n\nalert(sayHi); // function...\nsayHi('John'); // Hello, John!",
            "explanation": "Example demonstrating what is a module?."
          }
        ],
        "bulletPoints": [
          "`export` keyword labels variables and functions that should be accessible from outside the current module.",
          "`import` allows the import of functionality from other modules."
        ]
      },
      {
        "heading": "Core module features",
        "paragraphs": [
          "What's different in modules, compared to \"regular\" scripts?",
          "There are core features, valid both for browser and server-side JavaScript."
        ]
      },
      {
        "heading": "Always \"use strict\"",
        "paragraphs": [
          "Modules always work in strict mode. E.g. assigning to an undeclared variable will give an error."
        ],
        "codeExamples": [
          {
            "title": "Always \"use strict\"",
            "code": "<script type=\"module\">\n  a = 5; // error\n</script>",
            "explanation": "Example demonstrating always \"use strict\"."
          }
        ]
      },
      {
        "heading": "Module-level scope",
        "paragraphs": [
          "Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.",
          "In the example below, two scripts are imported, and `hello.js` tries to use `user` variable declared in `user.js`. It fails, because it's a separate module (you'll see the error in the console):",
          "[codetabs src=\"scopes\" height=\"140\" current=\"index.html\"]",
          "Modules should `export` what they want to be accessible from outside and `import` what they need.",
          "In other words, with modules we use import/export instead of relying on global variables."
        ],
        "codeExamples": [
          {
            "title": "Module-level scope",
            "code": "<script type=\"module\">\n  // The variable is only visible in this module script\n  let user = \"John\";\n</script>\n\n<script type=\"module\">\n  *!*\n  alert(user); // Error: user is not defined\n  */!*\n</script>",
            "explanation": "Example demonstrating module-level scope."
          },
          {
            "title": "Module-level scope",
            "code": "In the browser, we can make a variable window-level global by explicitly assigning it to a `window` property, e.g. `window.user = \"John\"`. \n\nThen all scripts will see it, both with `type=\"module\"` and without it. \n\nThat said, making such global variables is frowned upon. Please try to avoid them.",
            "explanation": "Example demonstrating module-level scope."
          }
        ],
        "bulletPoints": [
          "`user.js` should export the `user` variable.",
          "`hello.js` should import it from `user.js` module."
        ]
      },
      {
        "heading": "A module code is evaluated only the first time when imported",
        "paragraphs": [
          "If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.",
          "The one-time evaluation has important consequences, that we should be aware of.",
          "Let's see a couple of examples.",
          "First, if executing a module code brings side-effects, like showing a message, then importing it multiple times will trigger it only once -- the first time:",
          "The second import shows nothing, because the module has already been evaluated."
        ],
        "codeExamples": [
          {
            "title": "A module code is evaluated only the first time when imported",
            "code": "// \ud83d\udcc1 alert.js\nalert(\"Module is evaluated!\");",
            "explanation": "Example demonstrating a module code is evaluated only the first time when imported."
          },
          {
            "title": "A module code is evaluated only the first time when imported",
            "code": "// Import the same module from different files\n\n// \ud83d\udcc1 1.js\nimport `./alert.js`; // Module is evaluated!\n\n// \ud83d\udcc1 2.js\nimport `./alert.js`; // (shows nothing)",
            "explanation": "Example demonstrating a module code is evaluated only the first time when imported."
          }
        ]
      },
      {
        "heading": "import.meta",
        "paragraphs": [
          "The object `import.meta` contains the information about the current module.",
          "Its content depends on the environment. In the browser, it contains the URL of the script, or a current webpage URL if inside HTML:"
        ],
        "codeExamples": [
          {
            "title": "import.meta",
            "code": "<script type=\"module\">\n  alert(import.meta.url); // script URL\n  // for an inline script - the URL of the current HTML-page\n</script>",
            "explanation": "Example demonstrating import.meta."
          }
        ]
      },
      {
        "heading": "In a module, \"this\" is undefined",
        "paragraphs": [
          "That's kind of a minor feature, but for completeness we should mention it.",
          "In a module, top-level `this` is undefined.",
          "Compare it to non-module scripts, where `this` is a global object:"
        ],
        "codeExamples": [
          {
            "title": "In a module, \"this\" is undefined",
            "code": "<script>\n  alert(this); // window\n</script>\n\n<script type=\"module\">\n  alert(this); // undefined\n</script>",
            "explanation": "Example demonstrating in a module, \"this\" is undefined."
          }
        ]
      },
      {
        "heading": "Browser-specific features",
        "paragraphs": [
          "There are also several browser-specific differences of scripts with `type=\"module\"` compared to regular ones.",
          "You may want to skip this section for now if you're reading for the first time, or if you don't use JavaScript in a browser."
        ]
      },
      {
        "heading": "Module scripts are deferred",
        "paragraphs": [
          "Module scripts are *always* deferred, same effect as `defer` attribute (described in the chapter [](info:script-async-defer)), for both external and inline scripts.",
          "In other words:",
          "As a side effect, module scripts always \"see\" the fully loaded HTML-page, including HTML elements below them.",
          "For instance:",
          "Please note: the second script actually runs before the first! So we'll see `undefined` first, and then `object`."
        ],
        "codeExamples": [
          {
            "title": "Module scripts are deferred",
            "code": "<script type=\"module\">\n*!*\n  alert(typeof button); // object: the script can 'see' the button below\n*/!*\n  // as modules are deferred, the script runs after the whole page is loaded\n</script>\n\nCompare to regular script below:\n\n<script>\n*!*\n  alert(typeof button); // button is undefined, the script can't see elements below\n*/!*\n  // regular scripts run immediately, before the rest of the page is processed\n</script>\n\n<button id=\"button\">Button</button>",
            "explanation": "Example demonstrating module scripts are deferred."
          }
        ],
        "bulletPoints": [
          "downloading external module scripts `` doesn't block HTML processing, they load in parallel with other resources.",
          "module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run.",
          "relative order of scripts is maintained: scripts that go first in the document, execute first."
        ]
      },
      {
        "heading": "Async works on inline scripts",
        "paragraphs": [
          "For non-module scripts, the `async` attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document.",
          "For module scripts, it works on inline scripts as well.",
          "For example, the inline script below has `async`, so it doesn't wait for anything.",
          "It performs the import (fetches `./analytics.js`) and runs when ready, even if the HTML document is not finished yet, or if other scripts are still pending.",
          "That's good for functionality that doesn't depend on anything, like counters, ads, document-level event listeners."
        ],
        "codeExamples": [
          {
            "title": "Async works on inline scripts",
            "code": "<!-- all dependencies are fetched (analytics.js), and the script runs -->\n<!-- doesn't wait for the document or other <script> tags -->\n<script *!*async*/!* type=\"module\">\n  import {counter} from './analytics.js';\n\n  counter.count();\n</script>",
            "explanation": "Example demonstrating async works on inline scripts."
          }
        ]
      },
      {
        "heading": "External scripts",
        "paragraphs": [
          "External scripts that have `type=\"module\"` are different in two aspects:",
          "1. External scripts with the same `src` run only once:",
          "<!-- the script my.js is fetched and executed only once -->",
          "2. External scripts that are fetched from another origin (e.g. another site) require CORS headers, as described in the chapter . In other words, if a module script is fetched from another origin, the remote server must supply a header `Access-Control-Allow-Origin` allowing the fetch.",
          "<!-- another-site.com must supply Access-Control-Allow-Origin -->"
        ]
      },
      {
        "heading": "No \"bare\" modules allowed",
        "paragraphs": [
          "In the browser, `import` must get either a relative or absolute URL. Modules without any path are called \"bare\" modules. Such modules are not allowed in `import`.",
          "For instance, this `import` is invalid:",
          "Certain environments, like Node.js or bundle tools allow bare modules, without any path, as they have their own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet."
        ],
        "codeExamples": [
          {
            "title": "No \"bare\" modules allowed",
            "code": "import {sayHi} from 'sayHi'; // Error, \"bare\" module\n// the module must have a path, e.g. './sayHi.js' or wherever the module is",
            "explanation": "Example demonstrating no \"bare\" modules allowed."
          }
        ]
      },
      {
        "heading": "Compatibility, \"nomodule\"",
        "paragraphs": [
          "Old browsers do not understand `type=\"module\"`. Scripts of an unknown type are just ignored. For them, it's possible to provide a fallback using the `nomodule` attribute:"
        ],
        "codeExamples": [
          {
            "title": "Compatibility, \"nomodule\"",
            "code": "<script type=\"module\">\n  alert(\"Runs in modern browsers\");\n</script>\n\n<script nomodule>\n  alert(\"Modern browsers know both type=module and nomodule, so skip this\")\n  alert(\"Old browsers ignore script with unknown type=module, but execute this.\");\n</script>",
            "explanation": "Example demonstrating compatibility, \"nomodule\"."
          }
        ]
      },
      {
        "heading": "Build tools",
        "paragraphs": [
          "In real-life, browser modules are rarely used in their \"raw\" form. Usually, we bundle them together with a special tool such as Webpack and deploy to the production server.",
          "One of the benefits of using bundlers -- they give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules.",
          "Build tools do the following:",
          "1. Take a \"main\" module, the one intended to be put in `` in HTML.",
          "2. Analyze its dependencies: imports and then imports of imports etc."
        ],
        "codeExamples": [
          {
            "title": "Build tools",
            "code": "<!-- Assuming we got bundle.js from a tool like Webpack -->\n<script src=\"bundle.js\"></script>",
            "explanation": "Example demonstrating build tools."
          }
        ],
        "bulletPoints": [
          "Unreachable code removed.",
          "Unused exports removed (\"tree-shaking\").",
          "Development-specific statements like `console` and `debugger` removed.",
          "Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using Babel.",
          "The resulting file is minified (spaces removed, variables replaced with shorter names, etc)."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "To summarize, the core concepts are:",
          "1. A module is a file. To make `import/export` work, browsers need ``. Modules have several differences:",
          "2. Modules have their own, local top-level scope and interchange functionality via `import/export`.",
          "3. Modules always `use strict`.",
          "4. Module code is executed only once. Exports are created once and shared between importers."
        ],
        "bulletPoints": [
          "Deferred by default.",
          "Async works on inline scripts.",
          "To load external scripts from another origin (domain/protocol/port), CORS headers are needed.",
          "Duplicate external scripts are ignored."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Modules Intro",
        "description": "Apply your understanding of Modules Intro. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Modules Intro\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Modules Intro\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Modules Intro in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for modules intro.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Modules Intro is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Modules Intro?",
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
      "Modules Intro is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying modules intro.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "modules-intro"
    ],
    "slug": "modules-intro"
  },
  {
    "title": "Import Export",
    "description": "Export and import directives have several syntax variants.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Export and import directives have several syntax variants.",
          "In the previous article we saw a simple use, now let's explore more examples."
        ]
      },
      {
        "heading": "Export before declarations",
        "paragraphs": [
          "We can label any declaration as exported by placing `export` before it, be it a variable, function or a class.",
          "For instance, here all exports are valid:",
          "export function sayHi(user) {",
          "alert(`Hello, ${user}!`);",
          "} *!* // no ; at the end */!*"
        ],
        "codeExamples": [
          {
            "title": "Export before declarations",
            "code": "// export an array\n*!*export*/!* let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n\n// export a constant\n*!*export*/!* const MODULES_BECAME_STANDARD_YEAR = 2015;\n\n// export a class\n*!*export*/!* class User {\n  constructor(name) {\n    this.name = name;\n  }\n}",
            "explanation": "Example demonstrating export before declarations."
          },
          {
            "title": "Export before declarations",
            "code": "Please note that `export` before a class or a function does not make it a [function expression](info:function-expressions). It's still a function declaration, albeit exported.\n\nMost JavaScript style guides don't recommend semicolons after function and class declarations.\n\nThat's why there's no need for a semicolon at the end of `export class` and `export function`:",
            "explanation": "Example demonstrating export before declarations."
          }
        ]
      },
      {
        "heading": "Export apart from declarations",
        "paragraphs": [
          "Also, we can put `export` separately.",
          "Here we first declare, and then export:",
          "...Or, technically we could put `export` above functions as well."
        ],
        "codeExamples": [
          {
            "title": "Export apart from declarations",
            "code": "// \ud83d\udcc1 say.js\nfunction sayHi(user) {\n  alert(`Hello, ${user}!`);\n}\n\nfunction sayBye(user) {\n  alert(`Bye, ${user}!`);\n}\n\n*!*\nexport {sayHi, sayBye}; // a list of exported variables\n*/!*",
            "explanation": "Example demonstrating export apart from declarations."
          }
        ]
      },
      {
        "heading": "Import *",
        "paragraphs": [
          "Usually, we put a list of what to import in curly braces `import {...}`, like this:",
          "But if there's a lot to import, we can import everything as an object using `import * as `, for instance:",
          "At first sight, \"import everything\" seems such a cool thing, short to write, why should we ever explicitly list what we need to import?",
          "Well, there are few reasons.",
          "1. Explicitly listing what to import gives shorter names: `sayHi()` instead of `say.sayHi()`."
        ],
        "codeExamples": [
          {
            "title": "Import *",
            "code": "// \ud83d\udcc1 main.js\n*!*\nimport {sayHi, sayBye} from './say.js';\n*/!*\n\nsayHi('John'); // Hello, John!\nsayBye('John'); // Bye, John!",
            "explanation": "Example demonstrating import *."
          },
          {
            "title": "Import *",
            "code": "// \ud83d\udcc1 main.js\n*!*\nimport * as say from './say.js';\n*/!*\n\nsay.sayHi('John');\nsay.sayBye('John');",
            "explanation": "Example demonstrating import *."
          }
        ]
      },
      {
        "heading": "Import \"as\"",
        "paragraphs": [
          "We can also use `as` to import under different names.",
          "For instance, let's import `sayHi` into the local variable `hi` for brevity, and import `sayBye` as `bye`:"
        ],
        "codeExamples": [
          {
            "title": "Import \"as\"",
            "code": "// \ud83d\udcc1 main.js\n*!*\nimport {sayHi as hi, sayBye as bye} from './say.js';\n*/!*\n\nhi('John'); // Hello, John!\nbye('John'); // Bye, John!",
            "explanation": "Example demonstrating import \"as\"."
          }
        ]
      },
      {
        "heading": "Export \"as\"",
        "paragraphs": [
          "The similar syntax exists for `export`.",
          "Let's export functions as `hi` and `bye`:",
          "Now `hi` and `bye` are official names for outsiders, to be used in imports:"
        ],
        "codeExamples": [
          {
            "title": "Export \"as\"",
            "code": "// \ud83d\udcc1 say.js\n...\nexport {sayHi as hi, sayBye as bye};",
            "explanation": "Example demonstrating export \"as\"."
          },
          {
            "title": "Export \"as\"",
            "code": "// \ud83d\udcc1 main.js\nimport * as say from './say.js';\n\nsay.*!*hi*/!*('John'); // Hello, John!\nsay.*!*bye*/!*('John'); // Bye, John!",
            "explanation": "Example demonstrating export \"as\"."
          }
        ]
      },
      {
        "heading": "Export default",
        "paragraphs": [
          "In practice, there are mainly two kinds of modules.",
          "1. Modules that contain a library, pack of functions, like `say.js` above.",
          "2. Modules that declare a single entity, e.g. a module `user.js` exports only `class User`.",
          "Mostly, the second approach is preferred, so that every \"thing\" resides in its own module.",
          "Naturally, that requires a lot of files, as everything wants its own module, but that's not a problem at all. Actually, code navigation becomes easier if files are well-named and structured into folders."
        ],
        "codeExamples": [
          {
            "title": "Export default",
            "code": "// \ud83d\udcc1 user.js\nexport *!*default*/!* class User { // just add \"default\"\n  constructor(name) {\n    this.name = name;\n  }\n}",
            "explanation": "Example demonstrating export default."
          },
          {
            "title": "Export default",
            "code": "// \ud83d\udcc1 main.js\nimport *!*User*/!* from './user.js'; // not {User}, just User\n\nnew User('John');",
            "explanation": "Example demonstrating export default."
          }
        ]
      },
      {
        "heading": "The \"default\" name",
        "paragraphs": [
          "In some situations the `default` keyword is used to reference the default export.",
          "For example, to export a function separately from its definition:",
          "Or, another situation, let's say a module `user.js` exports one main \"default\" thing, and a few named ones (rarely the case, but it happens):",
          "Here's how to import the default export along with a named one:",
          "And, finally, if importing everything `*` as an object, then the `default` property is exactly the default export:"
        ],
        "codeExamples": [
          {
            "title": "The \"default\" name",
            "code": "function sayHi(user) {\n  alert(`Hello, ${user}!`);\n}\n\n// same as if we added \"export default\" before the function\nexport {sayHi as default};",
            "explanation": "Example demonstrating the \"default\" name."
          },
          {
            "title": "The \"default\" name",
            "code": "// \ud83d\udcc1 user.js\nexport default class User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nexport function sayHi(user) {\n  alert(`Hello, ${user}!`);\n}",
            "explanation": "Example demonstrating the \"default\" name."
          }
        ]
      },
      {
        "heading": "A word against default exports",
        "paragraphs": [
          "Named exports are explicit. They exactly name what they import, so we have that information from them; that's a good thing.",
          "Named exports force us to use exactly the right name to import:",
          "...While for a default export, we always choose the name when importing:",
          "So team members may use different names to import the same thing, and that's not good.",
          "Usually, to avoid that and keep the code consistent, there's a rule that imported variables should correspond to file names, e.g:"
        ],
        "codeExamples": [
          {
            "title": "A word against default exports",
            "code": "import {User} from './user.js';\n// import {MyUser} won't work, the name must be {User}",
            "explanation": "Example demonstrating a word against default exports."
          },
          {
            "title": "A word against default exports",
            "code": "import User from './user.js'; // works\nimport MyUser from './user.js'; // works too\n// could be import Anything... and it'll still work",
            "explanation": "Example demonstrating a word against default exports."
          }
        ]
      },
      {
        "heading": "Re-export",
        "paragraphs": [
          "\"Re-export\" syntax `export ... from ...` allows to import things and immediately export them (possibly under another name), like this:",
          "Why would that be needed? Let's see a practical use case.",
          "Imagine, we're writing a \"package\": a folder with a lot of modules, with some of the functionality exported outside (tools like NPM allow us to publish and distribute such packages, but we don't have to use them), and many modules are just \"helpers\", for internal use in other package modules.",
          "The file structure could be like this:",
          "We'd like to expose the package functionality via a single entry point."
        ],
        "codeExamples": [
          {
            "title": "Re-export",
            "code": "export {sayHi} from './say.js'; // re-export sayHi\n\nexport {default as User} from './user.js'; // re-export default",
            "explanation": "Example demonstrating re-export."
          },
          {
            "title": "Re-export",
            "code": "auth/\n    index.js\n    user.js\n    helpers.js\n    tests/\n        login.js\n    providers/\n        github.js\n        facebook.js\n        ...",
            "explanation": "Example demonstrating re-export."
          }
        ]
      },
      {
        "heading": "Re-exporting the default export",
        "paragraphs": [
          "The default export needs separate handling when re-exporting.",
          "Let's say we have `user.js` with the `export default class User` and would like to re-export it:",
          "We can come across two problems with it:",
          "1. `export User from './user.js'` won't work. That would lead to a syntax error.",
          "To re-export the default export, we have to write `export {default as User}`, as in the example above."
        ],
        "codeExamples": [
          {
            "title": "Re-exporting the default export",
            "code": "// \ud83d\udcc1 user.js\nexport default class User {\n  // ...\n}",
            "explanation": "Example demonstrating re-exporting the default export."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Here are all types of `export` that we covered in this and previous articles.",
          "You can check yourself by reading them and recalling what they mean:",
          "Import:",
          "We can put `import/export` statements at the top or at the bottom of a script, that doesn't matter.",
          "So, technically this code is fine:"
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "sayHi();\n\n// ...\n\nimport {sayHi} from './say.js'; // import at the end of the file",
            "explanation": "Example demonstrating summary."
          },
          {
            "title": "Summary",
            "code": "if (something) {\n  import {sayHi} from \"./say.js\"; // Error: import must be at top level\n}",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "Before declaration of a class/function/..:",
          "`export [default] class/function/variable ...`",
          "Standalone export:",
          "`export {x [as y], ...}`.",
          "Re-export:"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Import Export",
        "description": "Apply your understanding of Import Export. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Import Export\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Import Export\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Import Export in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for import export.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Import Export is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Import Export?",
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
      "Import Export is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying import export.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "import-export"
    ],
    "slug": "import-export"
  },
  {
    "title": "Modules Dynamic Imports",
    "description": "Export and import statements that we covered in previous chapters are called \"static\". The syntax is very simple and strict.",
    "difficulty": "intermediate",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Export and import statements that we covered in previous chapters are called \"static\". The syntax is very simple and strict.",
          "First, we can't dynamically generate any parameters of `import`.",
          "The module path must be a primitive string, can't be a function call. This won't work:",
          "Second, we can't import conditionally or at run-time:",
          "That's because `import`/`export` aim to provide a backbone for the code structure. That's a good thing, as code structure can be analyzed, modules can be gathered and bundled into one file by special tools, unused exports can be removed (\"tree-shaken\"). That's possible only because the structure of imports/exports is simple and fixed."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "import ... from *!*getModuleName()*/!*; // Error, only from \"string\" is allowed",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "if(...) {\n  import ...; // Error, not allowed!\n}\n\n{\n  import ...; // Error, we can't put import in any block\n}",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "The import() expression",
        "paragraphs": [
          "The `import(module)` expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.",
          "We can use it dynamically in any place of the code, for instance:",
          "Or, we could use `let module = await import(modulePath)` if inside an async function.",
          "For instance, if we have the following module `say.js`:",
          "...Then dynamic import can be like this:"
        ],
        "codeExamples": [
          {
            "title": "The import() expression",
            "code": "let modulePath = prompt(\"Which module to load?\");\n\nimport(modulePath)\n  .then(obj => <module object>)\n  .catch(err => <loading error, e.g. if no such module>)",
            "explanation": "Example demonstrating the import() expression."
          },
          {
            "title": "The import() expression",
            "code": "// \ud83d\udcc1 say.js\nexport function hi() {\n  alert(`Hello`);\n}\n\nexport function bye() {\n  alert(`Bye`);\n}",
            "explanation": "Example demonstrating the import() expression."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Modules Dynamic Imports",
        "description": "Apply your understanding of Modules Dynamic Imports. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Modules Dynamic Imports\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Modules Dynamic Imports\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Modules Dynamic Imports in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for modules dynamic imports.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Modules Dynamic Imports is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Modules Dynamic Imports?",
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
      "Modules Dynamic Imports is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying modules dynamic imports.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "modules-dynamic-imports"
    ],
    "slug": "modules-dynamic-imports"
  },
  {
    "title": "Proxy",
    "description": "A `Proxy` object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the obje...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A `Proxy` object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them.",
          "Proxies are used in many libraries and some browser frameworks. We'll see many practical applications in this article."
        ]
      },
      {
        "heading": "Proxy",
        "paragraphs": [
          "The syntax:",
          "For operations on `proxy`, if there's a corresponding trap in `handler`, then it runs, and the proxy has a chance to handle it, otherwise the operation is performed on `target`.",
          "As a starting example, let's create a proxy without any traps:",
          "As there are no traps, all operations on `proxy` are forwarded to `target`.",
          "1. A writing operation `proxy.test=` sets the value on `target`."
        ],
        "codeExamples": [
          {
            "title": "Proxy",
            "code": "let proxy = new Proxy(target, handler)",
            "explanation": "Example demonstrating proxy."
          },
          {
            "title": "Proxy",
            "code": "let target = {};\nlet proxy = new Proxy(target, {}); // empty handler\n\nproxy.test = 5; // writing to proxy (1)\nalert(target.test); // 5, the property appeared in target!\n\nalert(proxy.test); // 5, we can read it from proxy too (2)\n\nfor(let key in proxy) alert(key); // test, iteration works (3)",
            "explanation": "Example demonstrating proxy."
          }
        ],
        "bulletPoints": [
          "`target` -- is an object to wrap, can be anything, including functions.",
          "`handler` -- proxy configuration: an object with \"traps\", methods that intercept operations. - e.g. `get` trap for reading a property of `target`, `set` trap for writing a property into `target`, and so on."
        ]
      },
      {
        "heading": "Default value with \"get\" trap",
        "paragraphs": [
          "The most common traps are for reading/writing properties.",
          "To intercept reading, the `handler` should have a method `get(target, property, receiver)`.",
          "It triggers when a property is read, with following arguments:",
          "Let's use `get` to implement default values for an object.",
          "We'll make a numeric array that returns `0` for nonexistent values."
        ],
        "codeExamples": [
          {
            "title": "Default value with \"get\" trap",
            "code": "let numbers = [0, 1, 2];\n\nnumbers = new Proxy(numbers, {\n  get(target, prop) {\n    if (prop in target) {\n      return target[prop];\n    } else {\n      return 0; // default value\n    }\n  }\n});\n\n*!*\nalert( numbers[1] ); // 1\nalert( numbers[123] ); // 0 (no such item)\n*/!*",
            "explanation": "Example demonstrating default value with \"get\" trap."
          },
          {
            "title": "Default value with \"get\" trap",
            "code": "let dictionary = {\n  'Hello': 'Hola',\n  'Bye': 'Adi\u00f3s'\n};\n\nalert( dictionary['Hello'] ); // Hola\nalert( dictionary['Welcome'] ); // undefined",
            "explanation": "Example demonstrating default value with \"get\" trap."
          }
        ],
        "bulletPoints": [
          "`target` -- is the target object, the one passed as the first argument to `new Proxy`,",
          "`property` -- property name,",
          "`receiver` -- if the target property is a getter, then `receiver` is the object that's going to be used as `this` in its call. Usually that's the `proxy` object itself (or an object that inherits from it, if we inherit from proxy). Right now we don't need this argument, so it will be explained in more detail later."
        ]
      },
      {
        "heading": "Validation with \"set\" trap",
        "paragraphs": [
          "Let's say we want an array exclusively for numbers. If a value of another type is added, there should be an error.",
          "The `set` trap triggers when a property is written.",
          "`set(target, property, value, receiver)`:",
          "The `set` trap should return `true` if setting is successful, and `false` otherwise (triggers `TypeError`).",
          "Let's use it to validate new values:"
        ],
        "codeExamples": [
          {
            "title": "Validation with \"set\" trap",
            "code": "let numbers = [];\n\nnumbers = new Proxy(numbers, { // (*)\n*!*\n  set(target, prop, val) { // to intercept property writing\n*/!*\n    if (typeof val == 'number') {\n      target[prop] = val;\n      return true;\n    } else {\n      return false;\n    }\n  }\n});\n\nnumbers.push(1); // added successfully\nnumbers.push(2); // added successfully\nalert(\"Length is: \" + numbers.length); // 2\n\n*!*\nnumbers.push(\"test\"); // TypeError ('set' on proxy returned false)\n*/!*\n\nalert(\"This line is never reached (error in the line above)\");",
            "explanation": "Example demonstrating validation with \"set\" trap."
          },
          {
            "title": "Validation with \"set\" trap",
            "code": "As said above, there are invariants to be held.\n\nFor `set`, it must return `true` for a successful write.\n\nIf we forget to do it or return any falsy value, the operation triggers `TypeError`.",
            "explanation": "Example demonstrating validation with \"set\" trap."
          }
        ],
        "bulletPoints": [
          "`target` -- is the target object, the one passed as the first argument to `new Proxy`,",
          "`property` -- property name,",
          "`value` -- property value,",
          "`receiver` -- similar to `get` trap, matters only for setter properties."
        ]
      },
      {
        "heading": "Iteration with \"ownKeys\" and \"getOwnPropertyDescriptor\"",
        "paragraphs": [
          "`Object.keys`, `for..in` loop and most other methods that iterate over object properties use `[[OwnPropertyKeys]]` internal method (intercepted by `ownKeys` trap) to get a list of properties.",
          "Such methods differ in details:",
          "...But all of them start with that list.",
          "In the example below we use `ownKeys` trap to make `for..in` loop over `user`, and also `Object.keys` and `Object.values`, to skip properties starting with an underscore `_`:",
          "So far, it works."
        ],
        "codeExamples": [
          {
            "title": "Iteration with \"ownKeys\" and \"getOwnPropertyDescriptor\"",
            "code": "let user = {\n  name: \"John\",\n  age: 30,\n  _password: \"***\"\n};\n\nuser = new Proxy(user, {\n*!*\n  ownKeys(target) {\n*/!*\n    return Object.keys(target).filter(key => !key.startsWith('_'));\n  }\n});\n\n// \"ownKeys\" filters out _password\nfor(let key in user) alert(key); // name, then: age\n\n// same effect on these methods:\nalert( Object.keys(user) ); // name,age\nalert( Object.values(user) ); // John,30",
            "explanation": "Example demonstrating iteration with \"ownkeys\" and \"getownpropertydescriptor\"."
          },
          {
            "title": "Iteration with \"ownKeys\" and \"getOwnPropertyDescriptor\"",
            "code": "let user = { };\n\nuser = new Proxy(user, {\n*!*\n  ownKeys(target) {\n*/!*\n    return ['a', 'b', 'c'];\n  }\n});\n\nalert( Object.keys(user) ); // <empty>",
            "explanation": "Example demonstrating iteration with \"ownkeys\" and \"getownpropertydescriptor\"."
          }
        ],
        "bulletPoints": [
          "`Object.getOwnPropertyNames(obj)` returns non-symbol keys.",
          "`Object.getOwnPropertySymbols(obj)` returns symbol keys.",
          "`Object.keys/values()` returns non-symbol keys/values with `enumerable` flag (property flags were explained in the article ).",
          "`for..in` loops over non-symbol keys with `enumerable` flag, and also prototype keys."
        ]
      },
      {
        "heading": "Protected properties with \"deleteProperty\" and other traps",
        "paragraphs": [
          "There's a widespread convention that properties and methods prefixed by an underscore `_` are internal. They shouldn't be accessed from outside the object.",
          "Technically that's possible though:",
          "Let's use proxies to prevent any access to properties starting with `_`.",
          "We'll need the traps:",
          "Here's the code:"
        ],
        "codeExamples": [
          {
            "title": "Protected properties with \"deleteProperty\" and other traps",
            "code": "let user = {\n  name: \"John\",\n  _password: \"secret\"\n};\n\nalert(user._password); // secret",
            "explanation": "Example demonstrating protected properties with \"deleteproperty\" and other traps."
          },
          {
            "title": "Protected properties with \"deleteProperty\" and other traps",
            "code": "let user = {\n  name: \"John\",\n  _password: \"***\"\n};\n\nuser = new Proxy(user, {\n*!*\n  get(target, prop) {\n*/!*\n    if (prop.startsWith('_')) {\n      throw new Error(\"Access denied\");\n    }\n    let value = target[prop];\n    return (typeof value === 'function') ? value.bind(target) : value; // (*)\n  },\n*!*\n  set(target, prop, val) { // to intercept property writing\n*/!*\n    if (prop.startsWith('_')) {\n      throw new Error(\"Access denied\");\n    } else {\n      target[prop] = val;\n      return true;\n    }\n  },\n*!*\n  deleteProperty(target, prop) { // to intercept property deletion\n*/!*\n    if (prop.startsWith('_')) {\n      throw new Error(\"Access denied\");\n    } else {\n      delete target[prop];\n      return true;\n    }\n  },\n*!*\n  ownKeys(target) { // to intercept property list\n*/!*\n    return Object.keys(target).filter(key => !key.startsWith('_'));\n  }\n});\n\n// \"get\" doesn't allow to read _password\ntry {\n  alert(user._password); // Error: Access denied\n} catch(e) { alert(e.message); }\n\n// \"set\" doesn't allow to write _password\ntry {\n  user._password = \"test\"; // Error: Access denied\n} catch(e) { alert(e.message); }\n\n// \"deleteProperty\" doesn't allow to delete _password\ntry {\n  delete user._password; // Error: Access denied\n} catch(e) { alert(e.message); }\n\n// \"ownKeys\" filters out _password\nfor(let key in user) alert(key); // name",
            "explanation": "Example demonstrating protected properties with \"deleteproperty\" and other traps."
          }
        ],
        "bulletPoints": [
          "`get` to throw an error when reading such property,",
          "`set` to throw an error when writing,",
          "`deleteProperty` to throw an error when deleting,",
          "`ownKeys` to exclude properties starting with `_` from `for..in` and methods like `Object.keys`."
        ]
      },
      {
        "heading": "\"In range\" with \"has\" trap",
        "paragraphs": [
          "Let's see more examples.",
          "We have a range object:",
          "We'd like to use the `in` operator to check that a number is in `range`.",
          "The `has` trap intercepts `in` calls.",
          "`has(target, property)`"
        ],
        "codeExamples": [
          {
            "title": "\"In range\" with \"has\" trap",
            "code": "let range = {\n  start: 1,\n  end: 10\n};",
            "explanation": "Example demonstrating \"in range\" with \"has\" trap."
          },
          {
            "title": "\"In range\" with \"has\" trap",
            "code": "let range = {\n  start: 1,\n  end: 10\n};\n\nrange = new Proxy(range, {\n*!*\n  has(target, prop) {\n*/!*\n    return prop >= target.start && prop <= target.end;\n  }\n});\n\n*!*\nalert(5 in range); // true\nalert(50 in range); // false\n*/!*",
            "explanation": "Example demonstrating \"in range\" with \"has\" trap."
          }
        ],
        "bulletPoints": [
          "`target` -- is the target object, passed as the first argument to `new Proxy`,",
          "`property` -- property name"
        ]
      },
      {
        "heading": "Wrapping functions: \"apply\" [#proxy-apply]",
        "paragraphs": [
          "We can wrap a proxy around a function as well.",
          "The `apply(target, thisArg, args)` trap handles calling a proxy as function:",
          "For example, let's recall `delay(f, ms)` decorator, that we did in the article .",
          "In that article we did it without proxies. A call to `delay(f, ms)` returned a function that forwards all calls to `f` after `ms` milliseconds.",
          "Here's the previous, function-based implementation:"
        ],
        "codeExamples": [
          {
            "title": "Wrapping functions: \"apply\" [#proxy-apply]",
            "code": "function delay(f, ms) {\n  // return a wrapper that passes the call to f after the timeout\n  return function() { // (*)\n    setTimeout(() => f.apply(this, arguments), ms);\n  };\n}\n\nfunction sayHi(user) {\n  alert(`Hello, ${user}!`);\n}\n\n// after this wrapping, calls to sayHi will be delayed for 3 seconds\nsayHi = delay(sayHi, 3000);\n\nsayHi(\"John\"); // Hello, John! (after 3 seconds)",
            "explanation": "Example demonstrating wrapping functions: \"apply\" [#proxy-apply]."
          },
          {
            "title": "Wrapping functions: \"apply\" [#proxy-apply]",
            "code": "function delay(f, ms) {\n  return function() {\n    setTimeout(() => f.apply(this, arguments), ms);\n  };\n}\n\nfunction sayHi(user) {\n  alert(`Hello, ${user}!`);\n}\n\n*!*\nalert(sayHi.length); // 1 (function length is the arguments count in its declaration)\n*/!*\n\nsayHi = delay(sayHi, 3000);\n\n*!*\nalert(sayHi.length); // 0 (in the wrapper declaration, there are zero arguments)\n*/!*",
            "explanation": "Example demonstrating wrapping functions: \"apply\" [#proxy-apply]."
          }
        ],
        "bulletPoints": [
          "`target` is the target object (function is an object in JavaScript),",
          "`thisArg` is the value of `this`.",
          "`args` is a list of arguments."
        ]
      },
      {
        "heading": "Reflect",
        "paragraphs": [
          "`Reflect` is a built-in object that simplifies creation of `Proxy`.",
          "It was said previously that internal methods, such as `[[Get]]`, `[[Set]]` and others are specification-only, they can't be called directly.",
          "The `Reflect` object makes that somewhat possible. Its methods are minimal wrappers around the internal methods.",
          "Here are examples of operations and `Reflect` calls that do the same:",
          "| Operation | `Reflect` call | Internal method |"
        ],
        "codeExamples": [
          {
            "title": "Reflect",
            "code": "let user = {};\n\nReflect.set(user, 'name', 'John');\n\nalert(user.name); // John",
            "explanation": "Example demonstrating reflect."
          },
          {
            "title": "Reflect",
            "code": "let user = {\n  name: \"John\",\n};\n\nuser = new Proxy(user, {\n  get(target, prop, receiver) {\n    alert(`GET ${prop}`);\n*!*\n    return Reflect.get(target, prop, receiver); // (1)\n*/!*\n  },\n  set(target, prop, val, receiver) {\n    alert(`SET ${prop}=${val}`);\n*!*\n    return Reflect.set(target, prop, val, receiver); // (2)\n*/!*\n  }\n});\n\nlet name = user.name; // shows \"GET name\"\nuser.name = \"Pete\"; // shows \"SET name=Pete\"",
            "explanation": "Example demonstrating reflect."
          }
        ],
        "bulletPoints": [
          "`Reflect.get` reads an object property.",
          "`Reflect.set` writes an object property and returns `true` if successful, `false` otherwise."
        ]
      },
      {
        "heading": "Proxying a getter",
        "paragraphs": [
          "Let's see an example that demonstrates why `Reflect.get` is better. And we'll also see why `get/set` have the third argument `receiver`, that we didn't use before.",
          "We have an object `user` with `_name` property and a getter for it.",
          "Here's a proxy around it:",
          "The `get` trap is \"transparent\" here, it returns the original property, and doesn't do anything else. That's enough for our example.",
          "Everything seems to be all right. But let's make the example a little bit more complex."
        ],
        "codeExamples": [
          {
            "title": "Proxying a getter",
            "code": "let user = {\n  _name: \"Guest\",\n  get name() {\n    return this._name;\n  }\n};\n\n*!*\nlet userProxy = new Proxy(user, {\n  get(target, prop, receiver) {\n    return target[prop];\n  }\n});\n*/!*\n\nalert(userProxy.name); // Guest",
            "explanation": "Example demonstrating proxying a getter."
          },
          {
            "title": "Proxying a getter",
            "code": "let user = {\n  _name: \"Guest\",\n  get name() {\n    return this._name;\n  }\n};\n\nlet userProxy = new Proxy(user, {\n  get(target, prop, receiver) {\n    return target[prop]; // (*) target = user\n  }\n});\n\n*!*\nlet admin = {\n  __proto__: userProxy,\n  _name: \"Admin\"\n};\n\n// Expected: Admin\nalert(admin.name); // outputs: Guest (?!?)\n*/!*",
            "explanation": "Example demonstrating proxying a getter."
          }
        ]
      },
      {
        "heading": "Proxy limitations",
        "paragraphs": [
          "Proxies provide a unique way to alter or tweak the behavior of the existing objects at the lowest level. Still, it's not perfect. There are limitations."
        ]
      },
      {
        "heading": "Built-in objects: Internal slots",
        "paragraphs": [
          "Many built-in objects, for example `Map`, `Set`, `Date`, `Promise` and others make use of so-called \"internal slots\".",
          "These are like properties, but reserved for internal, specification-only purposes. For instance, `Map` stores items in the internal slot `[[MapData]]`. Built-in methods access them directly, not via `[[Get]]/[[Set]]` internal methods. So `Proxy` can't intercept that.",
          "Why care? They're internal anyway!",
          "Well, here's the issue. After a built-in object like that gets proxied, the proxy doesn't have these internal slots, so built-in methods will fail.",
          "For example:"
        ],
        "codeExamples": [
          {
            "title": "Built-in objects: Internal slots",
            "code": "let map = new Map();\n\nlet proxy = new Proxy(map, {});\n\n*!*\nproxy.set('test', 1); // Error\n*/!*",
            "explanation": "Example demonstrating built-in objects: internal slots."
          },
          {
            "title": "Built-in objects: Internal slots",
            "code": "let map = new Map();\n\nlet proxy = new Proxy(map, {\n  get(target, prop, receiver) {\n    let value = Reflect.get(...arguments);\n*!*\n    return typeof value == 'function' ? value.bind(target) : value;\n*/!*\n  }\n});\n\nproxy.set('test', 1);\nalert(proxy.get('test')); // 1 (works!)",
            "explanation": "Example demonstrating built-in objects: internal slots."
          }
        ]
      },
      {
        "heading": "Private fields",
        "paragraphs": [
          "A similar thing happens with private class fields.",
          "For example, `getName()` method accesses the private `#name` property and breaks after proxying:",
          "The reason is that private fields are implemented using internal slots. JavaScript does not use `[[Get]]/[[Set]]` when accessing them.",
          "In the call `getName()` the value of `this` is the proxied `user`, and it doesn't have the slot with private fields.",
          "Once again, the solution with binding the method makes it work:"
        ],
        "codeExamples": [
          {
            "title": "Private fields",
            "code": "class User {\n  #name = \"Guest\";\n\n  getName() {\n    return this.#name;\n  }\n}\n\nlet user = new User();\n\nuser = new Proxy(user, {});\n\n*!*\nalert(user.getName()); // Error\n*/!*",
            "explanation": "Example demonstrating private fields."
          },
          {
            "title": "Private fields",
            "code": "class User {\n  #name = \"Guest\";\n\n  getName() {\n    return this.#name;\n  }\n}\n\nlet user = new User();\n\nuser = new Proxy(user, {\n  get(target, prop, receiver) {\n    let value = Reflect.get(...arguments);\n    return typeof value == 'function' ? value.bind(target) : value;\n  }\n});\n\nalert(user.getName()); // Guest",
            "explanation": "Example demonstrating private fields."
          }
        ]
      },
      {
        "heading": "Proxy != target",
        "paragraphs": [
          "The proxy and the original object are different objects. That's natural, right?",
          "So if we use the original object as a key, and then proxy it, then the proxy can't be found:",
          "As we can see, after proxying we can't find `user` in the set `allUsers`, because the proxy is a different object."
        ],
        "codeExamples": [
          {
            "title": "Proxy != target",
            "code": "let allUsers = new Set();\n\nclass User {\n  constructor(name) {\n    this.name = name;\n    allUsers.add(this);\n  }\n}\n\nlet user = new User(\"John\");\n\nalert(allUsers.has(user)); // true\n\nuser = new Proxy(user, {});\n\n*!*\nalert(allUsers.has(user)); // false\n*/!*",
            "explanation": "Example demonstrating proxy != target."
          },
          {
            "title": "Proxy != target",
            "code": "Proxies can intercept many operators, such as `new` (with `construct`), `in` (with `has`), `delete` (with `deleteProperty`) and so on.\n\nBut there's no way to intercept a strict equality test for objects. An object is strictly equal to itself only, and no other value.\n\nSo all operations and built-in classes that compare objects for equality will differentiate between the object and the proxy. No transparent replacement here.",
            "explanation": "Example demonstrating proxy != target."
          }
        ]
      },
      {
        "heading": "Revocable proxies",
        "paragraphs": [
          "A *revocable* proxy is a proxy that can be disabled.",
          "Let's say we have a resource, and would like to close access to it any moment.",
          "What we can do is to wrap it into a revocable proxy, without any traps. Such a proxy will forward operations to object, and we can disable it at any moment.",
          "The syntax is:",
          "The call returns an object with the `proxy` and `revoke` function to disable it."
        ],
        "codeExamples": [
          {
            "title": "Revocable proxies",
            "code": "let {proxy, revoke} = Proxy.revocable(target, handler)",
            "explanation": "Example demonstrating revocable proxies."
          },
          {
            "title": "Revocable proxies",
            "code": "let object = {\n  data: \"Valuable data\"\n};\n\nlet {proxy, revoke} = Proxy.revocable(object, {});\n\n// pass the proxy somewhere instead of object...\nalert(proxy.data); // Valuable data\n\n// later in our code\nrevoke();\n\n// the proxy isn't working any more (revoked)\nalert(proxy.data); // Error",
            "explanation": "Example demonstrating revocable proxies."
          }
        ]
      },
      {
        "heading": "References",
        "paragraphs": [
          "Understanding References in JavaScript."
        ],
        "bulletPoints": [
          "Specification: Proxy.",
          "MDN: Proxy."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`Proxy` is a wrapper around an object, that forwards operations on it to the object, optionally trapping some of them.",
          "It can wrap any kind of object, including classes and functions.",
          "The syntax is:",
          "...Then we should use `proxy` everywhere instead of `target`. A proxy doesn't have its own properties or methods. It traps an operation if the trap is provided, otherwise forwards it to `target` object.",
          "We can trap:"
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let proxy = new Proxy(target, {\n  /* traps */\n});",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "Reading (`get`), writing (`set`), deleting (`deleteProperty`) a property (even a non-existing one).",
          "Calling a function (`apply` trap).",
          "The `new` operator (`construct` trap).",
          "Many other operations (the full list is at the beginning of the article and in the docs).",
          "Built-in objects have \"internal slots\", access to those can't be proxied. See the workaround above."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Error on reading non-existent property",
        "description": "Usually, an attempt to read a non-existent property returns `undefined`. Create a proxy that throws an error for an attempt to read of a non-existent property instead. That can help to detect programming mistakes early. Write a function `wrap(target)` that takes an object `target` and return a proxy",
        "starterCode": "let user = {\n  name: \"John\"\n};\n\nfunction wrap(target) {\n  return new Proxy(target, {\n*!*\n      /* your code */\n*/!*\n  });\n}\n\nuser = wrap(user);\n\nalert(user.name); // John\n*!*\nalert(user.age); // ReferenceError: Property doesn't exist: \"age\"\n*/!*",
        "solution": "let user = {\n  name: \"John\"\n};\n\nfunction wrap(target) {\n  return new Proxy(target, {\n*!*\n      /* your code */\n*/!*\n  });\n}\n\nuser = wrap(user);\n\nalert(user.name); // John\n*!*\nalert(user.age); // ReferenceError: Property doesn't exist: \"age\"\n*/!*",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Accessing array[-1]",
        "description": "In some programming languages, we can access array elements using negative indexes, counted from the end. Like this: ```js let array = [1, 2, 3]; array[-1]; // 3, the last element array[-2]; // 2, one step from the end array[-3]; // 1, two steps from the end ``` In other words, `array[-N]` is the sa",
        "starterCode": "let array = [1, 2, 3];\n\narray[-1]; // 3, the last element\narray[-2]; // 2, one step from the end\narray[-3]; // 1, two steps from the end",
        "solution": "let array = [1, 2, 3];\n\narray[-1]; // 3, the last element\narray[-2]; // 2, one step from the end\narray[-3]; // 1, two steps from the end",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Observable",
        "description": "Create a function `makeObservable(target)` that \"makes the object observable\" by returning a proxy. Here's how it should work: ```js run function makeObservable(target) { /* your code */ } let user = {}; user = makeObservable(user); user.observe((key, value) => { alert(`SET ${key}=${value}`); }); us",
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
        "question": "What is the primary role of Proxy in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for proxy.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Proxy is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Proxy?",
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
      "Proxy is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying proxy.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "proxy"
    ],
    "slug": "proxy"
  },
  {
    "title": "Eval",
    "description": "The built-in `eval` function allows to execute a string of code.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The built-in `eval` function allows to execute a string of code.",
          "The syntax is:",
          "For example:",
          "A string of code may be long, contain line breaks, function declarations, variables and so on.",
          "The result of `eval` is the result of the last statement."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let result = eval(code);",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let code = 'alert(\"Hello\")';\neval(code); // Hello",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Using \"eval\"",
        "paragraphs": [
          "In modern programming `eval` is used very sparingly. It's often said that \"eval is evil\".",
          "The reason is simple: long, long time ago JavaScript was a much weaker language, many things could only be done with `eval`. But that time passed a decade ago.",
          "Right now, there's almost no reason to use `eval`. If someone is using it, there's a good chance they can replace it with a modern language construct or a JavaScript Module.",
          "Please note that its ability to access outer variables has side-effects.",
          "Code minifiers (tools used before JS gets to production, to compress it) rename local variables into shorter ones (like `a`, `b` etc) to make the code smaller. That's usually safe, but not if `eval` is used, as local variables may be accessed from eval'ed code string. So minifiers don't do that renaming for all variables potentially visible from `eval`. That negatively affects code compression ratio."
        ],
        "codeExamples": [
          {
            "title": "Using \"eval\"",
            "code": "let x = 1;\n{\n  let x = 5;\n  window.eval('alert(x)'); // 1 (global variable)\n}",
            "explanation": "Example demonstrating using \"eval\"."
          },
          {
            "title": "Using \"eval\"",
            "code": "let f = new Function('a', 'alert(a)');\n\nf(5); // 5",
            "explanation": "Example demonstrating using \"eval\"."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "A call to `eval(code)` runs the string of code and returns the result of the last statement."
        ],
        "bulletPoints": [
          "Rarely used in modern JavaScript, as there's usually no need.",
          "Can access outer local variables. That's considered bad practice.",
          "Instead, to `eval` the code in the global scope, use `window.eval(code)`.",
          "Or, if your code needs some data from the outer scope, use `new Function` and pass it as arguments."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Eval-calculator",
        "description": "Create a calculator that prompts for an arithmetic expression and returns its result. There's no need to check the expression for correctness in this task. Just evaluate and return the result. [demo]",
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
        "question": "What is the primary role of Eval in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for eval.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Eval is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Eval?",
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
      "Eval is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying eval.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "eval"
    ],
    "slug": "eval"
  },
  {
    "title": "Currying Partials",
    "description": "libs:",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "libs:",
          "Currying is an advanced technique of working with functions. It's used not only in JavaScript, but in other languages as well.",
          "Currying is a transformation of functions that translates a function from callable as `f(a, b, c)` into callable as `f(a)(b)(c)`.",
          "Currying doesn't call a function. It just transforms it.",
          "Let's see an example first, to better understand what we're talking about, and then practical applications."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "*!*\nfunction curry(f) { // curry(f) does the currying transform\n  return function(a) {\n    return function(b) {\n      return f(a, b);\n    };\n  };\n}\n*/!*\n\n// usage\nfunction sum(a, b) {\n  return a + b;\n}\n\nlet curriedSum = curry(sum);\n\nalert( curriedSum(1)(2) ); // 3",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "function sum(a, b) {\n  return a + b;\n}\n\nlet curriedSum = _.curry(sum); // using _.curry from lodash library\n\nalert( curriedSum(1, 2) ); // 3, still callable normally\nalert( curriedSum(1)(2) ); // 3, called partially",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "lodash",
          "The result of `curry(func)` is a wrapper `function(a)`.",
          "When it is called like `curriedSum(1)`, the argument is saved in the Lexical Environment, and a new wrapper is returned `function(b)`.",
          "Then this wrapper is called with `2` as an argument, and it passes the call to the original `sum`."
        ]
      },
      {
        "heading": "Currying? What for?",
        "paragraphs": [
          "To understand the benefits we need a worthy real-life example.",
          "For instance, we have the logging function `log(date, importance, message)` that formats and outputs the information. In real projects such functions have many useful features like sending logs over the network, here we'll just use `alert`:",
          "Let's curry it!",
          "After that `log` works normally:",
          "...But also works in the curried form:"
        ],
        "codeExamples": [
          {
            "title": "Currying? What for?",
            "code": "function log(date, importance, message) {\n  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);\n}",
            "explanation": "Example demonstrating currying? what for?."
          },
          {
            "title": "Currying? What for?",
            "code": "log = _.curry(log);",
            "explanation": "Example demonstrating currying? what for?."
          }
        ]
      },
      {
        "heading": "Advanced curry implementation",
        "paragraphs": [
          "In case you'd like to get in to the details, here's the \"advanced\" curry implementation for multi-argument functions that we could use above.",
          "It's pretty short:",
          "Usage examples:",
          "The new `curry` may look complicated, but it's actually easy to understand.",
          "The result of `curry(func)` call is the wrapper `curried` that looks like this:"
        ],
        "codeExamples": [
          {
            "title": "Advanced curry implementation",
            "code": "function curry(func) {\n\n  return function curried(...args) {\n    if (args.length >= func.length) {\n      return func.apply(this, args);\n    } else {\n      return function(...args2) {\n        return curried.apply(this, args.concat(args2));\n      }\n    }\n  };\n\n}",
            "explanation": "Example demonstrating advanced curry implementation."
          },
          {
            "title": "Advanced curry implementation",
            "code": "function sum(a, b, c) {\n  return a + b + c;\n}\n\nlet curriedSum = curry(sum);\n\nalert( curriedSum(1, 2, 3) ); // 6, still callable normally\nalert( curriedSum(1)(2,3) ); // 6, currying of 1st arg\nalert( curriedSum(1)(2)(3) ); // 6, full currying",
            "explanation": "Example demonstrating advanced curry implementation."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "*Currying* is a transform that makes `f(a,b,c)` callable as `f(a)(b)(c)`. JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough.",
          "Currying allows us to easily get partials. As we've seen in the logging example, after currying the three argument universal function `log(date, importance, message)` gives us partials when called with one argument (like `log(date)`) or two arguments (like `log(date, importance)`)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Currying Partials",
        "description": "Apply your understanding of Currying Partials. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Currying Partials\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Currying Partials\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Currying Partials in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for currying partials.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Currying Partials is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Currying Partials?",
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
      "Currying Partials is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying currying partials.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "currying-partials"
    ],
    "slug": "currying-partials"
  },
  {
    "title": "Reference Type",
    "description": "A dynamically evaluated method call can lose `this`.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A dynamically evaluated method call can lose `this`.",
          "For instance:",
          "On the last line there is a conditional operator that chooses either `user.hi` or `user.bye`. In this case the result is `user.hi`.",
          "Then the method is immediately called with parentheses `()`. But it doesn't work correctly!",
          "As you can see, the call results in an error, because the value of `\"this\"` inside the call becomes `undefined`."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "This article covers an advanced topic, to understand certain edge-cases better.\n\nIt's not important. Many experienced developers live fine without knowing it. Read on if you want to know how things work under the hood.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let user = {\n  name: \"John\",\n  hi() { alert(this.name); },\n  bye() { alert(\"Bye\"); }\n};\n\nuser.hi(); // works\n\n// now let's call user.hi or user.bye depending on the name\n*!*\n(user.name == \"John\" ? user.hi : user.bye)(); // Error!\n*/!*",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Reference type explained",
        "paragraphs": [
          "Looking closely, we may notice two operations in `obj.method()` statement:",
          "1. First, the dot `'.'` retrieves the property `obj.method`.",
          "2. Then parentheses `()` execute it.",
          "So, how does the information about `this` get passed from the first part to the second one?",
          "If we put these operations on separate lines, then `this` will be lost for sure:"
        ],
        "codeExamples": [
          {
            "title": "Reference type explained",
            "code": "let user = {\n  name: \"John\",\n  hi() { alert(this.name); }\n};\n\n*!*\n// split getting and calling the method in two lines\nlet hi = user.hi;\nhi(); // Error, because this is undefined\n*/!*",
            "explanation": "Example demonstrating reference type explained."
          },
          {
            "title": "Reference type explained",
            "code": "// Reference Type value\n(user, \"hi\", true)",
            "explanation": "Example demonstrating reference type explained."
          }
        ],
        "bulletPoints": [
          "`base` is the object.",
          "`name` is the property name.",
          "`strict` is true if `use strict` is in effect."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Reference Type is an internal type of the language.",
          "Reading a property, such as with dot `.` in `obj.method()` returns not exactly the property value, but a special \"reference type\" value that stores both the property value and the object it was taken from.",
          "That's for the subsequent method call `()` to get the object and set `this` to it.",
          "For all other operations, the reference type automatically becomes the property value (a function in our case).",
          "The whole mechanics is hidden from our eyes. It only matters in subtle cases, such as when a method is obtained dynamically from the object, using an expression."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Syntax check",
        "description": "What is the result of this code? ```js no-beautify let user = { name: \"John\", go: function() { alert(this.name) } } (user.go)() ``` P.S. There's a pitfall :)",
        "starterCode": "// Write your code here\n",
        "solution": "The error message in most browsers does not give us much of a clue about what went wrong.\n\n**The error appears because a semicolon is missing after `user = {...}`.**\n\nJavaScript does not auto-insert a semicolon before a bracket `(user.go)()`, so it reads the code like:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Explain the value of \"this\"",
        "description": "In the code below we intend to call `obj.go()` method 4 times in a row. But calls `(1)` and `(2)` works differently from `(3)` and `(4)`. Why? ```js run no-beautify let obj, method; obj = { go: function() { alert(this); } }; obj.go(); // (1) [object Object] (obj.go)(); // (2) [object Object] (method",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Reference Type in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for reference type.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Reference Type is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Reference Type?",
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
      "Reference Type is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying reference type.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "reference-type"
    ],
    "slug": "reference-type"
  },
  {
    "title": "Bigint",
    "description": "[recent caniuse=\"bigint\"]",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "[recent caniuse=\"bigint\"]",
          "`BigInt` is a special numeric type that provides support for integers of arbitrary length.",
          "A bigint is created by appending `n` to the end of an integer literal or by calling the function `BigInt` that creates bigints from strings, numbers etc."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "const bigint = 1234567890123456789012345678901234567890n;\n\nconst sameBigint = BigInt(\"1234567890123456789012345678901234567890\");\n\nconst bigintFromNumber = BigInt(10); // same as 10n",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Math operators",
        "paragraphs": [
          "`BigInt` can mostly be used like a regular number, for example:",
          "Please note: the division `5/2` returns the result rounded towards zero, without the decimal part. All operations on bigints return bigints.",
          "We can't mix bigints and regular numbers:",
          "We should explicitly convert them if needed: using either `BigInt()` or `Number()`, like this:",
          "The conversion operations are always silent, never give errors, but if the bigint is too huge and won't fit the number type, then extra bits will be cut off, so we should be careful doing such conversion."
        ],
        "codeExamples": [
          {
            "title": "Math operators",
            "code": "alert(1n + 2n); // 3\n\nalert(5n / 2n); // 2",
            "explanation": "Example demonstrating math operators."
          },
          {
            "title": "Math operators",
            "code": "alert(1n + 2); // Error: Cannot mix BigInt and other types",
            "explanation": "Example demonstrating math operators."
          }
        ]
      },
      {
        "heading": "Comparisons",
        "paragraphs": [
          "Comparisons, such as `<`, `>` work with bigints and numbers just fine:",
          "Please note though, as numbers and bigints belong to different types, they can be equal `==`, but not strictly equal `===`:"
        ],
        "codeExamples": [
          {
            "title": "Comparisons",
            "code": "alert( 2n > 1n ); // true\n\nalert( 2n > 1 ); // true",
            "explanation": "Example demonstrating comparisons."
          },
          {
            "title": "Comparisons",
            "code": "alert( 1 == 1n ); // true\n\nalert( 1 === 1n ); // false",
            "explanation": "Example demonstrating comparisons."
          }
        ]
      },
      {
        "heading": "Boolean operations",
        "paragraphs": [
          "When inside `if` or other boolean operations, bigints behave like numbers.",
          "For instance, in `if`, bigint `0n` is falsy, other values are truthy:",
          "Boolean operators, such as `||`, `&&` and others also work with bigints similar to numbers:"
        ],
        "codeExamples": [
          {
            "title": "Boolean operations",
            "code": "if (0n) {\n  // never executes\n}",
            "explanation": "Example demonstrating boolean operations."
          },
          {
            "title": "Boolean operations",
            "code": "alert( 1n || 2 ); // 1 (1n is considered truthy)\n\nalert( 0n || 2 ); // 2 (0n is considered falsy)",
            "explanation": "Example demonstrating boolean operations."
          }
        ]
      },
      {
        "heading": "Polyfills",
        "paragraphs": [
          "Polyfilling bigints is tricky. The reason is that many JavaScript operators, such as `+`, `-` and so on behave differently with bigints compared to regular numbers.",
          "For example, division of bigints always returns a bigint (rounded if necessary).",
          "To emulate such behavior, a polyfill would need to analyze the code and replace all such operators with its functions. But doing so is cumbersome and would cost a lot of performance.",
          "So, there's no well-known good polyfill.",
          "Although, the other way around is proposed by the developers of JSBI library."
        ]
      },
      {
        "heading": "References",
        "paragraphs": [
          "Understanding References in JavaScript."
        ],
        "bulletPoints": [
          "MDN docs on BigInt.",
          "Specification."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Bigint",
        "description": "Apply your understanding of Bigint. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Bigint\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Bigint\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Bigint in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for bigint.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Bigint is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Bigint?",
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
      "Bigint is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying bigint.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "bigint"
    ],
    "slug": "bigint"
  },
  {
    "title": "Unicode",
    "description": "As we already know, JavaScript strings are based on Unicode: each character is represented by a byte sequence of 1-4 bytes.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we already know, JavaScript strings are based on Unicode: each character is represented by a byte sequence of 1-4 bytes.",
          "JavaScript allows us to insert a character into a string by specifying its hexadecimal Unicode code with one of these three notations:",
          "`XX` must be two hexadecimal digits with a value between `00` and `FF`, then `\\xXX` is the character whose Unicode code is `XX`.",
          "Because the `\\xXX` notation supports only two hexadecimal digits, it can be used only for the first 256 Unicode characters.",
          "These first 256 characters include the Latin alphabet, most basic syntax characters, and some others. For example, `\"\\x7A\"` is the same as `\"z\"` (Unicode `U+007A`)."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "The section goes deeper into string internals. This knowledge will be useful for you if you plan to deal with emoji, rare mathematical or hieroglyphic characters, or other rare symbols.",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "`\\xXX`",
          "`\\uXXXX`",
          "`\\u{X\u2026XXXXXX}`"
        ]
      },
      {
        "heading": "Surrogate pairs",
        "paragraphs": [
          "All frequently used characters have 2-byte codes (4 hex digits). Letters in most European languages, numbers, and the basic unified CJK ideographic sets (CJK -- from Chinese, Japanese, and Korean writing systems), have a 2-byte representation.",
          "Initially, JavaScript was based on UTF-16 encoding that only allowed 2 bytes per character. But 2 bytes only allow 65536 combinations and that's not enough for every possible symbol of Unicode.",
          "So rare symbols that require more than 2 bytes are encoded with a pair of 2-byte characters called \"a surrogate pair\".",
          "As a side effect, the length of such symbols is `2`:",
          "That's because surrogate pairs did not exist at the time when JavaScript was created, and thus are not correctly processed by the language!"
        ],
        "codeExamples": [
          {
            "title": "Surrogate pairs",
            "code": "alert( '\ud835\udcb3'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X\nalert( '\ud83d\ude02'.length ); // 2, FACE WITH TEARS OF JOY\nalert( '\ud867\uddf6'.length ); // 2, a rare Chinese character",
            "explanation": "Example demonstrating surrogate pairs."
          },
          {
            "title": "Surrogate pairs",
            "code": "alert( '\ud835\udcb3'[0] ); // shows strange symbols...\nalert( '\ud835\udcb3'[1] ); // ...pieces of the surrogate pair",
            "explanation": "Example demonstrating surrogate pairs."
          }
        ]
      },
      {
        "heading": "Diacritical marks and normalization",
        "paragraphs": [
          "In many languages, there are symbols that are composed of the base character with a mark above/under it.",
          "For instance, the letter `a` can be the base character for these characters: `\u00e0\u00e1\u00e2\u00e4\u00e3\u00e5\u0101`.",
          "Most common \"composite\" characters have their own code in the Unicode table. But not all of them, because there are too many possible combinations.",
          "To support arbitrary compositions, the Unicode standard allows us to use several Unicode characters: the base character followed by one or many \"mark\" characters that \"decorate\" it.",
          "For instance, if we have `S` followed by the special \"dot above\" character (code `\\u0307`), it is shown as S\u0307."
        ],
        "codeExamples": [
          {
            "title": "Diacritical marks and normalization",
            "code": "alert( 'S\\u0307' ); // S\u0307",
            "explanation": "Example demonstrating diacritical marks and normalization."
          },
          {
            "title": "Diacritical marks and normalization",
            "code": "alert( 'S\\u0307\\u0323' ); // S\u0307\u0323",
            "explanation": "Example demonstrating diacritical marks and normalization."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Unicode",
        "description": "Apply your understanding of Unicode. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Unicode\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Unicode\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Unicode in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for unicode.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Unicode is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Unicode?",
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
      "Unicode is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying unicode.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "unicode"
    ],
    "slug": "unicode"
  },
  {
    "title": "Weakref Finalizationregistry",
    "description": "Recalling the basic concept of the *reachability principle* from the chapter,",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Recalling the basic concept of the *reachability principle* from the chapter,",
          "we can note that the JavaScript engine is guaranteed to keep values in memory that are accessible or in use.",
          "For example:",
          "Or a similar, but slightly more complicated code with two strong references:",
          "The object `{ name: \"John\" }` would only be deleted from memory if there were no strong references to it (if we also overwrote the value of the `admin` variable)."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "This article covers a very narrowly focused topic, that most developers extremely rarely encounter in practice (and may not even be aware of its existence).  \n\nWe recommend skipping this chapter if you have just started learning JavaScript.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "//  the user variable holds a strong reference to the object\nlet user = { name: \"John\" };\n\n// let's overwrite the value of the user variable\nuser = null;\n\n// the reference is lost and the object will be deleted from memory",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "WeakRef",
        "paragraphs": [
          "`WeakRef` - is an object, that contains a weak reference to another object, called `target` or `referent`.",
          "The peculiarity of `WeakRef` is that it does not prevent the garbage collector from deleting its referent-object. In other words, a `WeakRef` object does not keep the `referent` object alive.",
          "Now let's take the `user` variable as the \"referent\" and create a weak reference from it to the `admin` variable.",
          "To create a weak reference, you need to use the `WeakRef` constructor, passing in the target object (the object you want a weak reference to).",
          "In our case \u2014 this is the `user` variable:"
        ],
        "codeExamples": [
          {
            "title": "WeakRef",
            "code": "Before we dive into it, it is worth noting that the correct use of the structures discussed in this article requires very careful thought, and they are best avoided if possible.",
            "explanation": "Example demonstrating weakref."
          },
          {
            "title": "WeakRef",
            "code": "//  the user variable holds a strong reference to the object\nlet user = { name: \"John\" };\n\n//  the admin variable holds a weak reference to the object\n*!*\nlet admin = new WeakRef(user);\n*/!*",
            "explanation": "Example demonstrating weakref."
          }
        ]
      },
      {
        "heading": "WeakRef use cases",
        "paragraphs": [
          "`WeakRef` is typically used to create caches or associative arrays that store resource-intensive objects.",
          "This allows one to avoid preventing these objects from being collected by the garbage collector solely based on their presence in the cache or associative array.",
          "One of the primary examples - is a situation when we have numerous binary image objects (for instance, represented as `ArrayBuffer` or `Blob`), and we want to associate a name or path with each image.",
          "Existing data structures are not quite suitable for these purposes:",
          "But, in this situation, we need a data structure that would use weak references in its values."
        ],
        "bulletPoints": [
          "Using `Map` to create associations between names and images, or vice versa, will keep the image objects in memory since they are present in the `Map` as keys or values.",
          "`WeakMap` is ineligible for this goal either: because the objects represented as `WeakMap` keys use weak references, and are not protected from deletion by the garbage collector."
        ]
      },
      {
        "heading": "Example \u21161: using WeakRef for caching",
        "paragraphs": [
          "Below is a code snippet that demonstrates the technique of using `WeakRef`.",
          "In short, we use a `Map` with string keys and `WeakRef` objects as their values.",
          "If the `WeakRef` object has not been collected by the garbage collector, we get it from the cache.",
          "Otherwise, we re-download it again and put it in the cache for further possible reuse:",
          "Let's delve into the details of what happened here:"
        ],
        "codeExamples": [
          {
            "title": "Example \u21161: using WeakRef for caching",
            "code": "function fetchImg() {\n    // abstract function for downloading images...\n}\n\nfunction weakRefCache(fetchImg) { // (1)\n    const imgCache = new Map(); // (2)\n\n    return (imgName) => { // (3)\n        const cachedImg = imgCache.get(imgName); // (4)\n\n        if (cachedImg?.deref()) { // (5)\n            return cachedImg?.deref();\n        }\n\n        const newImg = fetchImg(imgName); // (6)\n        imgCache.set(imgName, new WeakRef(newImg)); // (7)\n\n        return newImg;\n    };\n}\n\nconst getCachedImg = weakRefCache(fetchImg);",
            "explanation": "Example demonstrating example \u21161: using weakref for caching."
          }
        ]
      },
      {
        "heading": "Example \u21162: Using WeakRef to track DOM objects",
        "paragraphs": [
          "Another use case for `WeakRef` - is tracking DOM objects.",
          "Let's imagine a scenario where some third-party code or library interacts with elements on our page as long as they exist in the DOM.",
          "For example, it could be an external utility for monitoring and notifying about the system's state (commonly so-called \"logger\" \u2013 a program that sends informational messages called \"logs\").",
          "Interactive example:",
          "[codetabs height=420 src=\"weakref-dom\"]"
        ]
      },
      {
        "heading": "FinalizationRegistry",
        "paragraphs": [
          "Now it is time to talk about finalizers. Before we move on, let's clarify the terminology:",
          "**Cleanup callback (finalizer)** - is a function that is executed, when an object, registered in the `FinalizationRegistry`, is deleted from memory by the garbage collector.",
          "Its purpose - is to provide the ability to perform additional operations, related to the object, after it has been finally deleted from memory.",
          "**Registry** (or `FinalizationRegistry`) - is a special object in JavaScript that manages the registration and unregistration of objects and their cleanup callbacks.",
          "This mechanism allows registering an object to track and associate a cleanup callback with it."
        ],
        "codeExamples": [
          {
            "title": "FinalizationRegistry",
            "code": "function cleanupCallback(heldValue) { \n  // cleanup callback code \n}\n\nconst registry = new FinalizationRegistry(cleanupCallback);",
            "explanation": "Example demonstrating finalizationregistry."
          },
          {
            "title": "FinalizationRegistry",
            "code": "let user = { name: \"John\" };\n\nconst registry = new FinalizationRegistry((heldValue) => {\n  console.log(`${heldValue} has been collected by the garbage collector.`);\n});",
            "explanation": "Example demonstrating finalizationregistry."
          }
        ],
        "bulletPoints": [
          "`cleanupCallback` - a cleanup callback that will be automatically called when a registered object is deleted from memory.",
          "`heldValue` - the value that is passed as an argument to the cleanup callback. If `heldValue` is an object, the registry keeps a strong reference to it.",
          "`registry` - an instance of `FinalizationRegistry`.",
          "`register(target, heldValue [, unregisterToken])` - used to register objects in the registry.",
          "`unregister(unregisterToken)` - the `unregister` method is used to unregister an object from the registry. It takes one argument - `unregisterToken` (the unregister token that was obtained when registering the object)."
        ]
      },
      {
        "heading": "Caching with FinalizationRegistry",
        "paragraphs": [
          "Returning to our *weak* cache example, we can notice the following:",
          "Here is an improved caching example using `FinalizationRegistry`:",
          "1. To manage the cleanup of \"dead\" cache entries, when the associated `WeakRef` objects are collected by the garbage collector, we create a `FinalizationRegistry` cleanup registry.",
          "The important point here is, that in the cleanup callback, it should be checked, if the entry was deleted by the garbage collector and not re-added, in order not to delete a \"live\" entry.",
          "2. Once the new value (image) is downloaded and put into the cache, we register it in the finalizer registry to track the `WeakRef` object."
        ],
        "codeExamples": [
          {
            "title": "Caching with FinalizationRegistry",
            "code": "function fetchImg() {\n  // abstract function for downloading images...\n}\n\nfunction weakRefCache(fetchImg) {\n  const imgCache = new Map();\n\n  *!*\n  const registry = new FinalizationRegistry((imgName) => { // (1)\n    const cachedImg = imgCache.get(imgName);\n    if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);\n  });\n  */!*\n\n  return (imgName) => {\n    const cachedImg = imgCache.get(imgName);\n    \n    if (cachedImg?.deref()) {\n      return cachedImg?.deref();\n    }\n\n    const newImg = fetchImg(imgName);\n    imgCache.set(imgName, new WeakRef(newImg));\n    *!*\n    registry.register(newImg, imgName); // (2)\n    */!*\n\n    return newImg;\n  };\n}\n\nconst getCachedImg = weakRefCache(fetchImg);",
            "explanation": "Example demonstrating caching with finalizationregistry."
          }
        ],
        "bulletPoints": [
          "Even though the values wrapped in the `WeakRef` have been collected by the garbage collector, there is still an issue of \"memory leakage\" in the form of the remaining keys, whose values have been collected by the garbage collector."
        ]
      },
      {
        "heading": "Using WeakRef and FinalizationRegistry in practice",
        "paragraphs": [
          "Moving from theory to practice, imagine a real-life scenario, where a user synchronizes their photos on a mobile device with some cloud service",
          "(such as iCloud or Google Photos),",
          "and wants to view them from other devices. In addition to the basic functionality of viewing photos, such services offer a lot of additional features, for example:",
          "Here, as an example, we will use a fairly primitive implementation of such a service.",
          "The main point - is to show a possible scenario of using `WeakRef` and `FinalizationRegistry` together in real life."
        ],
        "bulletPoints": [
          "Photo editing and video effects.",
          "Creating \"memories\" and albums.",
          "Video montage from a series of photos.",
          "...and much more."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`WeakRef` - designed to create weak references to objects, allowing them to be deleted from memory by the garbage collector if there are no longer strong references to them.",
          "This is beneficial for addressing excessive memory usage and optimizing the utilization of system resources in applications.",
          "`FinalizationRegistry` - is a tool for registering callbacks, that are executed when objects that are no longer strongly referenced, are destroyed.",
          "This allows releasing resources associated with the object or performing other necessary operations before deleting the object from memory."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Weakref Finalizationregistry",
        "description": "Apply your understanding of Weakref Finalizationregistry. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Weakref Finalizationregistry\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Weakref Finalizationregistry\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Weakref Finalizationregistry in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for weakref finalizationregistry.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Weakref Finalizationregistry is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Weakref Finalizationregistry?",
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
      "Weakref Finalizationregistry is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying weakref finalizationregistry.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "weakref-finalizationregistry"
    ],
    "slug": "weakref-finalizationregistry"
  }
];
