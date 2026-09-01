import type { Lesson } from '../../types';

export const part3Lessons: Lesson[] = [
  {
    "title": "Recursion",
    "description": "Let's return to functions and study them more in-depth.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's return to functions and study them more in-depth.",
          "Our first topic will be *recursion*.",
          "If you are not new to programming, then it is probably familiar and you could skip this chapter.",
          "Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we'll see soon, to deal with certain data structures.",
          "When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls *itself*. That's called *recursion*."
        ]
      },
      {
        "heading": "Two ways of thinking",
        "paragraphs": [
          "For something simple to start with -- let's write a function `pow(x, n)` that raises `x` to a natural power of `n`. In other words, multiplies `x` by itself `n` times.",
          "There are two ways to implement it.",
          "1. Iterative thinking: the `for` loop:",
          "function pow(x, n) {",
          "let result = 1;"
        ],
        "codeExamples": [
          {
            "title": "Two ways of thinking",
            "code": "pow(2, 2) = 4\npow(2, 3) = 8\npow(2, 4) = 16",
            "explanation": "Example demonstrating two ways of thinking."
          },
          {
            "title": "Two ways of thinking",
            "code": "if n==1  = x\n             /\npow(x, n) =\n             \\\n              else     = x * pow(x, n - 1)",
            "explanation": "Example demonstrating two ways of thinking."
          }
        ]
      },
      {
        "heading": "The execution context and stack",
        "paragraphs": [
          "Now let's examine how recursive calls work. For that we'll look under the hood of functions.",
          "The information about the process of execution of a running function is stored in its *execution context*.",
          "The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of `this` (we don't use it here) and few other internal details.",
          "One function call has exactly one execution context associated with it.",
          "When a function makes a nested call, the following happens:"
        ],
        "bulletPoints": [
          "The current function is paused.",
          "The execution context associated with it is remembered in a special data structure called *execution context stack*.",
          "The nested call executes.",
          "After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped."
        ]
      },
      {
        "heading": "pow(2, 3)",
        "paragraphs": [
          "In the beginning of the call `pow(2, 3)` the execution context will store variables: `x = 2, n = 3`, the execution flow is at line `1` of the function.",
          "We can sketch it as:",
          "Context: { x: 2, n: 3, at line 1 }",
          "pow(2, 3)",
          "That's when the function starts to execute. The condition `n == 1` is falsy, so the flow continues into the second branch of `if`:"
        ],
        "codeExamples": [
          {
            "title": "pow(2, 3)",
            "code": "function pow(x, n) {\n  if (n == 1) {\n    return x;\n  } else {\n*!*\n    return x * pow(x, n - 1);\n*/!*\n  }\n}\n\nalert( pow(2, 3) );",
            "explanation": "Example demonstrating pow(2, 3)."
          }
        ]
      },
      {
        "heading": "pow(2, 2)",
        "paragraphs": [
          "To do a nested call, JavaScript remembers the current execution context in the *execution context stack*.",
          "Here we call the same function `pow`, but it absolutely doesn't matter. The process is the same for all functions:",
          "1. The current context is \"remembered\" on top of the stack.",
          "2. The new context is created for the subcall.",
          "3. When the subcall is finished -- the previous context is popped from the stack, and its execution continues."
        ],
        "codeExamples": [
          {
            "title": "pow(2, 2)",
            "code": "Here in the picture we use the word \"line\", as in our example there's only one subcall in line, but generally a single line of code may contain multiple subcalls, like `pow(\u2026) + pow(\u2026) + somethingElse(\u2026)`.\n\nSo it would be more precise to say that the execution resumes \"immediately after the subcall\".",
            "explanation": "Example demonstrating pow(2, 2)."
          }
        ]
      },
      {
        "heading": "pow(2, 1)",
        "paragraphs": [
          "The process repeats: a new subcall is made at line `5`, now with arguments `x=2`, `n=1`.",
          "A new execution context is created, the previous one is pushed on top of the stack:",
          "Context: { x: 2, n: 1, at line 1 }",
          "pow(2, 1)",
          "Context: { x: 2, n: 2, at line 5 }"
        ]
      },
      {
        "heading": "The exit",
        "paragraphs": [
          "During the execution of `pow(2, 1)`, unlike before, the condition `n == 1` is truthy, so the first branch of `if` works:",
          "There are no more nested calls, so the function finishes, returning `2`.",
          "As the function finishes, its execution context is not needed anymore, so it's removed from the memory. The previous one is restored off the top of the stack:",
          "Context: { x: 2, n: 2, at line 5 }",
          "pow(2, 2)"
        ],
        "codeExamples": [
          {
            "title": "The exit",
            "code": "function pow(x, n) {\n  if (n == 1) {\n*!*\n    return x;\n*/!*\n  } else {\n    return x * pow(x, n - 1);\n  }\n}",
            "explanation": "Example demonstrating the exit."
          },
          {
            "title": "The exit",
            "code": "function pow(x, n) {\n  let result = 1;\n\n  for (let i = 0; i < n; i++) {\n    result *= x;\n  }\n\n  return result;\n}",
            "explanation": "Example demonstrating the exit."
          }
        ]
      },
      {
        "heading": "Recursive traversals",
        "paragraphs": [
          "Another great application of the recursion is a recursive traversal.",
          "Imagine, we have a company. The staff structure can be presented as an object:",
          "In other words, a company has departments.",
          "For instance, the `sites` department in the future may be split into teams for `siteA` and `siteB`. And they, potentially, can split even more. That's not on the picture, just something to have in mind.",
          "Now let's say we want a function to get the sum of all salaries. How can we do that?"
        ],
        "codeExamples": [
          {
            "title": "Recursive traversals",
            "code": "let company = {\n  sales: [{\n    name: 'John',\n    salary: 1000\n  }, {\n    name: 'Alice',\n    salary: 1600\n  }],\n\n  development: {\n    sites: [{\n      name: 'Peter',\n      salary: 2000\n    }, {\n      name: 'Alex',\n      salary: 1800\n    }],\n\n    internals: [{\n      name: 'Jack',\n      salary: 1300\n    }]\n  }\n};",
            "explanation": "Example demonstrating recursive traversals."
          },
          {
            "title": "Recursive traversals",
            "code": "let company = { // the same object, compressed for brevity\n  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],\n  development: {\n    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],\n    internals: [{name: 'Jack', salary: 1300}]\n  }\n};\n\n// The function to do the job\n*!*\nfunction sumSalaries(department) {\n  if (Array.isArray(department)) { // case (1)\n    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array\n  } else { // case (2)\n    let sum = 0;\n    for (let subdep of Object.values(department)) {\n      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results\n    }\n    return sum;\n  }\n}\n*/!*\n\nalert(sumSalaries(company)); // 7700",
            "explanation": "Example demonstrating recursive traversals."
          }
        ],
        "bulletPoints": [
          "A department may have an array of staff. For instance, `sales` department has 2 employees: John and Alice.",
          "Or a department may split into subdepartments, like `development` has two branches: `sites` and `internals`. Each of them has their own staff.",
          "It is also possible that when a subdepartment grows, it divides into subsubdepartments (or teams).",
          "Method `arr.reduce` explained in the chapter to get the sum of the array.",
          "Loop `for(val of Object.values(obj))` to iterate over object values: `Object.values` returns an array of them."
        ]
      },
      {
        "heading": "Recursive structures",
        "paragraphs": [
          "A recursive (recursively-defined) data structure is a structure that replicates itself in parts.",
          "We've just seen it in the example of a company structure above.",
          "A company *department* is:",
          "For web-developers there are much better-known examples: HTML and XML documents.",
          "In the HTML document, an *HTML-tag* may contain a list of:"
        ],
        "bulletPoints": [
          "Either an array of people.",
          "Or an object with *departments*.",
          "Text pieces.",
          "HTML-comments.",
          "Other *HTML-tags* (that in turn may contain text pieces/comments or other tags etc)."
        ]
      },
      {
        "heading": "Linked list",
        "paragraphs": [
          "Imagine, we want to store an ordered list of objects.",
          "The natural choice would be an array:",
          "...But there's a problem with arrays. The \"delete element\" and \"insert element\" operations are expensive. For instance, `arr.unshift(obj)` operation has to renumber all elements to make room for a new `obj`, and if the array is big, it takes time. Same with `arr.shift()`.",
          "The only structural modifications that do not require mass-renumbering are those that operate with the end of array: `arr.push/pop`. So an array can be quite slow for big queues, when we have to work with the beginning.",
          "Alternatively, if we really need fast insertion/deletion, we can choose another data structure called a linked list."
        ],
        "codeExamples": [
          {
            "title": "Linked list",
            "code": "let arr = [obj1, obj2, obj3];",
            "explanation": "Example demonstrating linked list."
          },
          {
            "title": "Linked list",
            "code": "let list = {\n  value: 1,\n  next: {\n    value: 2,\n    next: {\n      value: 3,\n      next: {\n        value: 4,\n        next: null\n      }\n    }\n  }\n};",
            "explanation": "Example demonstrating linked list."
          }
        ],
        "bulletPoints": [
          "`value`.",
          "`next` property referencing the next *linked list element* or `null` if that's the end.",
          "We can add property `prev` in addition to `next` to reference the previous element, to move back easily.",
          "We can also add a variable named `tail` referencing the last element of the list (and update it when adding/removing elements from the end).",
          "...The data structure may vary according to our needs."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Terms:",
          "When a function calls itself, that's called a *recursion step*. The *basis* of recursion is function arguments that make the task so simple that the function does not make further calls.",
          "For instance, the linked list can be defined as a data structure consisting of an object referencing a list (or null).",
          "list = { value, next -> list }",
          "Trees like HTML elements tree or the department tree from this chapter are also naturally recursive: they have branches and every branch can have other branches."
        ],
        "bulletPoints": [
          "*Recursion* is a programming term that means calling a function from itself. Recursive functions can be used to solve tasks in elegant ways.",
          "A recursively-defined data structure is a data structure that can be defined using itself."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Sum all numbers till the given one",
        "description": "Write a function `sumTo(n)` that calculates the sum of numbers `1 + 2 + ... + n`. For instance: ```js no-beautify sumTo(1) = 1 sumTo(2) = 2 + 1 = 3 sumTo(3) = 3 + 2 + 1 = 6 sumTo(4) = 4 + 3 + 2 + 1 = 10 ... sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050 ``` Make 3 solution variants: 1. Using a for loop.",
        "starterCode": "Make 3 solution variants:\n\n1. Using a for loop.\n2. Using a recursion, cause `sumTo(n) = n + sumTo(n-1)` for `n > 1`.\n3. Using the [arithmetic progression](https://en.wikipedia.org/wiki/Arithmetic_progression) formula.\n\nAn example of the result:",
        "solution": "The solution using recursion:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Calculate factorial",
        "description": "The factorial of a natural number is a number multiplied by `\"number minus one\"`, then by `\"number minus two\"`, and so on till `1`. The factorial of `n` is denoted as `n!` We can write a definition of factorial like this: ```js n! = n * (n - 1) * (n - 2) * ...*1 ``` Values of factorials for differen",
        "starterCode": "n! = n * (n - 1) * (n - 2) * ...*1",
        "solution": "The basis of recursion is the value `1`. We can also make `0` the basis here, doesn't matter much, but gives one more recursive step:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Fibonacci numbers",
        "description": "The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones. First two numbers are `1`, then `2(1+1)`, then `3(1+2)`, `5(2+3)` and so on: `1, 1, 2, 3, 5, 8, 13, 21...`. Fibonacci numbers are related to the Golden ratio and ma",
        "starterCode": "function fib(n) { /* your code */ }\n\nalert(fib(3)); // 2\nalert(fib(7)); // 13\nalert(fib(77)); // 5527939700884757",
        "solution": "...But for big values of `n` it's very slow. For instance, `fib(77)` may hang up the engine for some time eating all CPU resources.\n\nThat's because the function makes too many subcalls. The same values are re-evaluated again and again.\n\nFor instance, let's see a piece of calculations for `fib(5)`:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Recursion in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for recursion.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Recursion is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Recursion?",
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
      "Recursion is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying recursion.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "recursion"
    ],
    "slug": "recursion"
  },
  {
    "title": "Rest Parameters Spread",
    "description": "Many JavaScript built-in functions support an arbitrary number of arguments.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Many JavaScript built-in functions support an arbitrary number of arguments.",
          "For instance:",
          "In this chapter we'll learn how to do the same. And also, how to pass arrays to such functions as parameters."
        ],
        "bulletPoints": [
          "`Math.max(arg1, arg2, ..., argN)` -- returns the greatest of the arguments.",
          "`Object.assign(dest, src1, ..., srcN)` -- copies properties from `src1..N` into `dest`.",
          "...and so on."
        ]
      },
      {
        "heading": "Rest parameters `...`",
        "paragraphs": [
          "A function can be called with any number of arguments, no matter how it is defined.",
          "Like here:",
          "There will be no error because of \"excessive\" arguments. But of course in the result only the first two will be counted, so the result in the code above is `3`.",
          "The rest of the parameters can be included in the function definition by using three dots `...` followed by the name of the array that will contain them. The dots literally mean \"gather the remaining parameters into an array\".",
          "For instance, to gather all arguments into array `args`:"
        ],
        "codeExamples": [
          {
            "title": "Rest parameters `...`",
            "code": "function sum(a, b) {\n  return a + b;\n}\n\nalert( sum(1, 2, 3, 4, 5) );",
            "explanation": "Example demonstrating rest parameters `...`."
          },
          {
            "title": "Rest parameters `...`",
            "code": "function sumAll(...args) { // args is the name for the array\n  let sum = 0;\n\n  for (let arg of args) sum += arg;\n\n  return sum;\n}\n\nalert( sumAll(1) ); // 1\nalert( sumAll(1, 2) ); // 3\nalert( sumAll(1, 2, 3) ); // 6",
            "explanation": "Example demonstrating rest parameters `...`."
          }
        ]
      },
      {
        "heading": "The \"arguments\" variable",
        "paragraphs": [
          "There is also a special array-like object named `arguments` that contains all arguments by their index.",
          "For instance:",
          "In old times, rest parameters did not exist in the language, and using `arguments` was the only way to get all arguments of the function. And it still works, we can find it in the old code.",
          "But the downside is that although `arguments` is both array-like and iterable, it's not an array. It does not support array methods, so we can't call `arguments.map(...)` for example.",
          "Also, it always contains all arguments. We can't capture them partially, like we did with rest parameters."
        ],
        "codeExamples": [
          {
            "title": "The \"arguments\" variable",
            "code": "function showName() {\n  alert( arguments.length );\n  alert( arguments[0] );\n  alert( arguments[1] );\n\n  // it's iterable\n  // for(let arg of arguments) alert(arg);\n}\n\n// shows: 2, Julius, Caesar\nshowName(\"Julius\", \"Caesar\");\n\n// shows: 1, Ilya, undefined (no second argument)\nshowName(\"Ilya\");",
            "explanation": "Example demonstrating the \"arguments\" variable."
          },
          {
            "title": "The \"arguments\" variable",
            "code": "If we access the `arguments` object from an arrow function, it takes them from the outer \"normal\" function.\n\nHere's an example:",
            "explanation": "Example demonstrating the \"arguments\" variable."
          }
        ]
      },
      {
        "heading": "Spread syntax [#spread-syntax]",
        "paragraphs": [
          "We've just seen how to get an array from the list of parameters.",
          "But sometimes we need to do exactly the reverse.",
          "For instance, there's a built-in function Math.max that returns the greatest number from a list:",
          "Now let's say we have an array `[3, 5, 1]`. How do we call `Math.max` with it?",
          "Passing it \"as is\" won't work, because `Math.max` expects a list of numeric arguments, not a single array:"
        ],
        "codeExamples": [
          {
            "title": "Spread syntax [#spread-syntax]",
            "code": "alert( Math.max(3, 5, 1) ); // 5",
            "explanation": "Example demonstrating spread syntax [#spread-syntax]."
          },
          {
            "title": "Spread syntax [#spread-syntax]",
            "code": "let arr = [3, 5, 1];\n\n*!*\nalert( Math.max(arr) ); // NaN\n*/!*",
            "explanation": "Example demonstrating spread syntax [#spread-syntax]."
          }
        ],
        "bulletPoints": [
          "`Array.from` operates on both array-likes and iterables.",
          "The spread syntax works only with iterables."
        ]
      },
      {
        "heading": "Copy an array/object",
        "paragraphs": [
          "Remember when we talked about `Object.assign()` in the past?",
          "It is possible to do the same thing with the spread syntax.",
          "Note that it is possible to do the same thing to make a copy of an object:",
          "This way of copying an object is much shorter than `let objCopy = Object.assign({}, obj)` or for an array `let arrCopy = Object.assign([], arr)` so we prefer to use it whenever we can."
        ],
        "codeExamples": [
          {
            "title": "Copy an array/object",
            "code": "let arr = [1, 2, 3];\n\n*!*\nlet arrCopy = [...arr]; // spread the array into a list of parameters\n                        // then put the result into a new array\n*/!*\n\n// do the arrays have the same contents?\nalert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true\n\n// are the arrays equal?\nalert(arr === arrCopy); // false (not same reference)\n\n// modifying our initial array does not modify the copy:\narr.push(4);\nalert(arr); // 1, 2, 3, 4\nalert(arrCopy); // 1, 2, 3",
            "explanation": "Example demonstrating copy an array/object."
          },
          {
            "title": "Copy an array/object",
            "code": "let obj = { a: 1, b: 2, c: 3 };\n\n*!*\nlet objCopy = { ...obj }; // spread the object into a list of parameters\n                          // then return the result in a new object\n*/!*\n\n// do the objects have the same contents?\nalert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true\n\n// are the objects equal?\nalert(obj === objCopy); // false (not same reference)\n\n// modifying our initial object does not modify the copy:\nobj.d = 4;\nalert(JSON.stringify(obj)); // {\"a\":1,\"b\":2,\"c\":3,\"d\":4}\nalert(JSON.stringify(objCopy)); // {\"a\":1,\"b\":2,\"c\":3}",
            "explanation": "Example demonstrating copy an array/object."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "When we see `\"...\"` in the code, it is either rest parameters or the spread syntax.",
          "There's an easy way to distinguish between them:",
          "Use patterns:",
          "Together they help to travel between a list and an array of parameters with ease.",
          "All arguments of a function call are also available in \"old-style\" `arguments`: array-like iterable object."
        ],
        "bulletPoints": [
          "When `...` is at the end of function parameters, it's \"rest parameters\" and gathers the rest of the list of arguments into an array.",
          "When `...` occurs in a function call or alike, it's called a \"spread syntax\" and expands an array into a list.",
          "Rest parameters are used to create functions that accept any number of arguments.",
          "The spread syntax is used to pass an array to functions that normally require a list of many arguments."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Rest Parameters Spread",
        "description": "Apply your understanding of Rest Parameters Spread. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Rest Parameters Spread\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Rest Parameters Spread\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Rest Parameters Spread in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for rest parameters spread.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Rest Parameters Spread is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Rest Parameters Spread?",
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
      "Rest Parameters Spread is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying rest parameters spread.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "rest-parameters-spread"
    ],
    "slug": "rest-parameters-spread"
  },
  {
    "title": "Closure",
    "description": "JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment, passed as an argument to another function, and then called f...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment, passed as an argument to another function, and then called from a totally different place of code later.",
          "We already know that a function can access variables outside of it (\"outer\" variables).",
          "But what happens if outer variables change since a function is created? Will the function get newer values or the old ones?",
          "And what if a function is passed along as an argument and called from another place of code, will it get access to outer variables at the new place?",
          "Let's expand our knowledge to understand these scenarios and more complex ones."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "In JavaScript, there are 3 ways to declare a variable: `let`, `const` (the modern ones), and `var` (the remnant of the past).\n\n- In this article we'll use `let` variables in examples.\n- Variables, declared with `const`, behave the same, so this article is about `const` too.\n- The old `var` has some notable differences, they will be covered in the article <info:var>.",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Code blocks",
        "paragraphs": [
          "If a variable is declared inside a code block `{...}`, it's only visible inside that block.",
          "For example:",
          "We can use this to isolate a piece of code that does its own task, with variables that only belong to it:",
          "// show message",
          "let message = \"Hello\";"
        ],
        "codeExamples": [
          {
            "title": "Code blocks",
            "code": "{\n  // do some job with local variables that should not be seen outside\n\n  let message = \"Hello\"; // only visible in this block\n\n  alert(message); // Hello\n}\n\nalert(message); // Error: message is not defined",
            "explanation": "Example demonstrating code blocks."
          },
          {
            "title": "Code blocks",
            "code": "{\n  // show message\n  let message = \"Hello\";\n  alert(message);\n}\n\n{\n  // show another message\n  let message = \"Goodbye\";\n  alert(message);\n}",
            "explanation": "Example demonstrating code blocks."
          }
        ]
      },
      {
        "heading": "Nested functions",
        "paragraphs": [
          "A function is called \"nested\" when it is created inside another function.",
          "It is easily possible to do this with JavaScript.",
          "We can use it to organize our code, like this:",
          "Here the *nested* function `getFullName()` is made for convenience. It can access the outer variables and so can return the full name. Nested functions are quite common in JavaScript.",
          "What's much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables."
        ],
        "codeExamples": [
          {
            "title": "Nested functions",
            "code": "function sayHiBye(firstName, lastName) {\n\n  // helper nested function to use below\n  function getFullName() {\n    return firstName + \" \" + lastName;\n  }\n\n  alert( \"Hello, \" + getFullName() );\n  alert( \"Bye, \" + getFullName() );\n\n}",
            "explanation": "Example demonstrating nested functions."
          },
          {
            "title": "Nested functions",
            "code": "function makeCounter() {\n  let count = 0;\n\n  return function() {\n    return count++;\n  };\n}\n\nlet counter = makeCounter();\n\nalert( counter() ); // 0\nalert( counter() ); // 1\nalert( counter() ); // 2",
            "explanation": "Example demonstrating nested functions."
          }
        ]
      },
      {
        "heading": "Lexical Environment",
        "paragraphs": [
          "For clarity, the explanation is split into multiple steps."
        ],
        "codeExamples": [
          {
            "title": "Lexical Environment",
            "code": "The in-depth technical explanation lies ahead.\n\nAs far as I'd like to avoid low-level language details, any understanding without them would be lacking and incomplete, so get ready.",
            "explanation": "Example demonstrating lexical environment."
          }
        ]
      },
      {
        "heading": "Step 1. Variables",
        "paragraphs": [
          "In JavaScript, every running function, code block `{...}`, and the script as a whole have an internal (hidden) associated object known as the *Lexical Environment*.",
          "The Lexical Environment object consists of two parts:",
          "1. *Environment Record* -- an object that stores all local variables as its properties (and some other information like the value of `this`).",
          "2. A reference to the *outer lexical environment*, the one associated with the outer code.",
          "**A \"variable\" is just a property of the special internal object, `Environment Record`. \"To get or change a variable\" means \"to get or change a property of that object\".**"
        ],
        "codeExamples": [
          {
            "title": "Step 1. Variables",
            "code": "\"Lexical Environment\" is a specification object: it only exists \"theoretically\" in the [language specification](https://tc39.es/ecma262/#sec-lexical-environments) to describe how things work. We can't get this object in our code and manipulate it directly.\n\nJavaScript engines also may optimize it, discard variables that are unused to save memory and perform other internal tricks, as long as the visible behavior remains as described.",
            "explanation": "Example demonstrating step 1. variables."
          }
        ],
        "bulletPoints": [
          "Initially, they are in the \"Uninitialized\" state. That's a special internal state, it means that the engine knows about the variable, but it cannot be referenced until it has been declared with `let`. It's almost the same as if the variable didn't exist.",
          "A variable is a property of a special internal object, associated with the currently executing block/function/script.",
          "Working with variables is actually working with the properties of that object."
        ]
      },
      {
        "heading": "Step 2. Function Declarations",
        "paragraphs": [
          "A function is also a value, like a variable.",
          "**The difference is that a Function Declaration is instantly fully initialized.**",
          "When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function (unlike `let`, that is unusable till the declaration).",
          "That's why we can use a function, declared as Function Declaration, even before the declaration itself.",
          "For example, here's the initial state of the global Lexical Environment when we add a function:"
        ]
      },
      {
        "heading": "Step 3. Inner and outer Lexical Environment",
        "paragraphs": [
          "When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store local variables and parameters of the call.",
          "For instance, for `say(\"John\")`, it looks like this (the execution is at the line, labelled with an arrow):",
          "<!--",
          "let phrase = \"Hello\";",
          "function say(name) {"
        ],
        "bulletPoints": [
          "The inner Lexical Environment corresponds to the current execution of `say`. It has a single property: `name`, the function argument. We called `say(\"John\")`, so the value of the `name` is `\"John\"`.",
          "The outer Lexical Environment is the global Lexical Environment. It has the `phrase` variable and the function itself.",
          "For the `name` variable, the `alert` inside `say` finds it immediately in the inner Lexical Environment.",
          "When it wants to access `phrase`, then there is no `phrase` locally, so it follows the reference to the outer Lexical Environment and finds it there."
        ]
      },
      {
        "heading": "Step 4. Returning a function",
        "paragraphs": [
          "Let's return to the `makeCounter` example.",
          "At the beginning of each `makeCounter()` call, a new Lexical Environment object is created, to store variables for this `makeCounter` run.",
          "So we have two nested Lexical Environments, just like in the example above:",
          "![](closure-makecounter.svg)",
          "What's different is that, during the execution of `makeCounter()`, a tiny nested function is created of only one line: `return count++`. We don't run it yet, only create."
        ],
        "codeExamples": [
          {
            "title": "Step 4. Returning a function",
            "code": "function makeCounter() {\n  let count = 0;\n\n  return function() {\n    return count++;\n  };\n}\n\nlet counter = makeCounter();",
            "explanation": "Example demonstrating step 4. returning a function."
          },
          {
            "title": "Step 4. Returning a function",
            "code": "There is a general programming term \"closure\", that developers generally should know.\n\nA [closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)) is a function that remembers its outer variables and can access them. In some languages, that's not possible, or a function should be written in a special way to make it happen. But as explained above, in JavaScript, all functions are naturally closures (there is only one exception, to be covered in <info:new-function>).\n\nThat is: they automatically remember where they were created using a hidden `[[Environment]]` property, and then their code can access outer variables.\n\nWhen on an interview, a frontend developer gets a question about \"what's a closure?\", a valid answer would be a definition of the closure and an explanation that all functions in JavaScript are closures, and maybe a few more words about technical details: the `[[Environment]]` property and how Lexical Environments work.",
            "explanation": "Example demonstrating step 4. returning a function."
          }
        ]
      },
      {
        "heading": "Garbage collection",
        "paragraphs": [
          "Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That's because there are no references to it. As any JavaScript object, it's only kept in memory while it's reachable.",
          "However, if there's a nested function that is still reachable after the end of a function, then it has `[[Environment]]` property that references the lexical environment.",
          "In that case the Lexical Environment is still reachable even after the completion of the function, so it stays alive.",
          "For example:",
          "Please note that if `f()` is called many times, and resulting functions are saved, then all corresponding Lexical Environment objects will also be retained in memory. In the code below, all 3 of them:"
        ],
        "codeExamples": [
          {
            "title": "Garbage collection",
            "code": "function f() {\n  let value = 123;\n\n  return function() {\n    alert(value);\n  }\n}\n\nlet g = f(); // g.[[Environment]] stores a reference to the Lexical Environment\n// of the corresponding f() call",
            "explanation": "Example demonstrating garbage collection."
          },
          {
            "title": "Garbage collection",
            "code": "function f() {\n  let value = Math.random();\n\n  return function() { alert(value); };\n}\n\n// 3 functions in array, every one of them links to Lexical Environment\n// from the corresponding f() run\nlet arr = [f(), f(), f()];",
            "explanation": "Example demonstrating garbage collection."
          }
        ]
      },
      {
        "heading": "Real-life optimizations",
        "paragraphs": [
          "As we've seen, in theory while a function is alive, all outer variables are also retained.",
          "But in practice, JavaScript engines try to optimize that. They analyze variable usage and if it's obvious from the code that an outer variable is not used -- it is removed.",
          "**An important side effect in V8 (Chrome, Edge, Opera) is that such variable will become unavailable in debugging.**",
          "Try running the example below in Chrome with the Developer Tools open.",
          "When it pauses, in the console type `alert(value)`."
        ],
        "codeExamples": [
          {
            "title": "Real-life optimizations",
            "code": "function f() {\n  let value = Math.random();\n\n  function g() {\n    debugger; // in console: type alert(value); No such variable!\n  }\n\n  return g;\n}\n\nlet g = f();\ng();",
            "explanation": "Example demonstrating real-life optimizations."
          },
          {
            "title": "Real-life optimizations",
            "code": "let value = \"Surprise!\";\n\nfunction f() {\n  let value = \"the closest value\";\n\n  function g() {\n    debugger; // in console: type alert(value); Surprise!\n  }\n\n  return g;\n}\n\nlet g = f();\ng();",
            "explanation": "Example demonstrating real-life optimizations."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Does a function pickup latest changes?",
        "description": "The function sayHi uses an external variable name. When the function runs, which value is it going to use? ```js let name = \"John\"; function sayHi() { alert(\"Hi, \" + name); } name = \"Pete\"; sayHi(); // what will it show: \"John\" or \"Pete\"? ``` Such situations are common both in browser and server-sid",
        "starterCode": "let name = \"John\";\n\nfunction sayHi() {\n  alert(\"Hi, \" + name);\n}\n\nname = \"Pete\";\n\nsayHi(); // what will it show: \"John\" or \"Pete\"?",
        "solution": "let name = \"John\";\n\nfunction sayHi() {\n  alert(\"Hi, \" + name);\n}\n\nname = \"Pete\";\n\nsayHi(); // what will it show: \"John\" or \"Pete\"?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Army of functions",
        "description": "The following code creates an array of `shooters`. Every function is meant to output its number. But something is wrong... ```js run function makeArmy() { let shooters = []; let i = 0; while (i < 10) { let shooter = function() { // create a shooter function, alert( i ); // that should show its numbe",
        "starterCode": "// Write your code here\n",
        "solution": "let shooters = [];",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Which variables are available?",
        "description": "The function `makeWorker` below makes another function and returns it. That new function can be called from somewhere else. Will it have access to the outer variables from its creation place, or the invocation place, or both? ```js function makeWorker() { let name = \"Pete\"; return function() { alert",
        "starterCode": "function makeWorker() {\n  let name = \"Pete\";\n\n  return function() {\n    alert(name);\n  };\n}\n\nlet name = \"John\";\n\n// create a function\nlet work = makeWorker();\n\n// call it\nwork(); // what will it show?",
        "solution": "function makeWorker() {\n  let name = \"Pete\";\n\n  return function() {\n    alert(name);\n  };\n}\n\nlet name = \"John\";\n\n// create a function\nlet work = makeWorker();\n\n// call it\nwork(); // what will it show?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Closure in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for closure.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Closure is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Closure?",
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
      "Closure is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying closure.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "closure"
    ],
    "slug": "closure"
  },
  {
    "title": "Var",
    "description": "In the very first chapter about variables, we mentioned three ways of variable declaration:",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In the very first chapter about variables, we mentioned three ways of variable declaration:",
          "1. `let`",
          "2. `const`",
          "3. `var`",
          "The `var` declaration is similar to `let`. Most of the time we can replace `let` by `var` or vice-versa and expect things to work:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "The information in this article is useful for understanding old scripts.\n\nThat's not how we write new code.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "var message = \"Hi\";\nalert(message); // Hi",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "\"var\" has no block scope",
        "paragraphs": [
          "Variables, declared with `var`, are either function-scoped or global-scoped. They are visible through blocks.",
          "For instance:",
          "As `var` ignores code blocks, we've got a global variable `test`.",
          "If we used `let test` instead of `var test`, then the variable would only be visible inside `if`:",
          "The same thing for loops: `var` cannot be block- or loop-local:"
        ],
        "codeExamples": [
          {
            "title": "\"var\" has no block scope",
            "code": "if (true) {\n  var test = true; // use \"var\" instead of \"let\"\n}\n\n*!*\nalert(test); // true, the variable lives after if\n*/!*",
            "explanation": "Example demonstrating \"var\" has no block scope."
          },
          {
            "title": "\"var\" has no block scope",
            "code": "if (true) {\n  let test = true; // use \"let\"\n}\n\n*!*\nalert(test); // ReferenceError: test is not defined\n*/!*",
            "explanation": "Example demonstrating \"var\" has no block scope."
          }
        ]
      },
      {
        "heading": "\"var\" tolerates redeclarations",
        "paragraphs": [
          "If we declare the same variable with `let` twice in the same scope, that's an error:",
          "With `var`, we can redeclare a variable any number of times. If we use `var` with an already-declared variable, it's just ignored:"
        ],
        "codeExamples": [
          {
            "title": "\"var\" tolerates redeclarations",
            "code": "let user;\nlet user; // SyntaxError: 'user' has already been declared",
            "explanation": "Example demonstrating \"var\" tolerates redeclarations."
          },
          {
            "title": "\"var\" tolerates redeclarations",
            "code": "var user = \"Pete\";\n\nvar user = \"John\"; // this \"var\" does nothing (already declared)\n// ...it doesn't trigger an error\n\nalert(user); // John",
            "explanation": "Example demonstrating \"var\" tolerates redeclarations."
          }
        ]
      },
      {
        "heading": "\"var\" variables can be declared below their use",
        "paragraphs": [
          "`var` declarations are processed when the function starts (or script starts for globals).",
          "In other words, `var` variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).",
          "So this code:",
          "...Is technically the same as this (moved `var phrase` above):",
          "...Or even as this (remember, code blocks are ignored):"
        ],
        "codeExamples": [
          {
            "title": "\"var\" variables can be declared below their use",
            "code": "function sayHi() {\n  phrase = \"Hello\";\n\n  alert(phrase);\n\n*!*\n  var phrase;\n*/!*\n}\nsayHi();",
            "explanation": "Example demonstrating \"var\" variables can be declared below their use."
          },
          {
            "title": "\"var\" variables can be declared below their use",
            "code": "function sayHi() {\n*!*\n  var phrase;\n*/!*\n\n  phrase = \"Hello\";\n\n  alert(phrase);\n}\nsayHi();",
            "explanation": "Example demonstrating \"var\" variables can be declared below their use."
          }
        ]
      },
      {
        "heading": "IIFE",
        "paragraphs": [
          "In the past, as there was only `var`, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called \"immediately-invoked function expressions\" (abbreviated as IIFE).",
          "That's not something we should use nowadays, but you can find them in old scripts.",
          "An IIFE looks like this:",
          "Here, a Function Expression is created and immediately called. So the code executes right away and has its own private variables.",
          "The Function Expression is wrapped with parenthesis `(function {...})`, because when JavaScript engine encounters `\"function\"` in the main code, it understands it as the start of a Function Declaration. But a Function Declaration must have a name, so this kind of code will give an error:"
        ],
        "codeExamples": [
          {
            "title": "IIFE",
            "code": "(function() {\n\n  var message = \"Hello\";\n\n  alert(message); // Hello\n\n})();",
            "explanation": "Example demonstrating iife."
          },
          {
            "title": "IIFE",
            "code": "// Tries to declare and immediately call a function\nfunction() { // <-- SyntaxError: Function statements require a function name\n\n  var message = \"Hello\";\n\n  alert(message); // Hello\n\n}();",
            "explanation": "Example demonstrating iife."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are two main differences of `var` compared to `let/const`:",
          "1. `var` variables have no block scope, their visibility is scoped to current function, or global, if declared outside function.",
          "2. `var` declarations are processed at function start (script start for globals).",
          "There's one more very minor difference related to the global object, that we'll cover in the next chapter.",
          "These differences make `var` worse than `let` most of the time. Block-level variables is such a great thing. That's why `let` was introduced in the standard long ago, and is now a major way (along with `const`) to declare a variable."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Var",
        "description": "Apply your understanding of Var. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Var\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Var\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Var in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for var.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Var is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Var?",
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
      "Var is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying var.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "var"
    ],
    "slug": "var"
  },
  {
    "title": "Global Object",
    "description": "The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.",
          "In a browser it is named `window`, for Node.js it is `global`, for other environments it may have another name.",
          "Recently, `globalThis` was added to the language, as a standardized name for a global object, that should be supported across all environments. It's supported in all major browsers.",
          "We'll use `window` here, assuming that our environment is a browser. If your script may run in other environments, it's better to use `globalThis` instead.",
          "All properties of the global object can be accessed directly:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "alert(\"Hello\");\n// is the same as\nwindow.alert(\"Hello\");",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "var gVar = 5;\n\nalert(window.gVar); // 5 (became a property of the global object)",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Using for polyfills",
        "paragraphs": [
          "We use the global object to test for support of modern language features.",
          "For instance, test if a built-in `Promise` object exists (it doesn't in really old browsers):",
          "If there's none (say, we're in an old browser), we can create \"polyfills\": add functions that are not supported by the environment, but exist in the modern standard."
        ],
        "codeExamples": [
          {
            "title": "Using for polyfills",
            "code": "if (!window.Promise) {\n  alert(\"Your browser is really old!\");\n}",
            "explanation": "Example demonstrating using for polyfills."
          },
          {
            "title": "Using for polyfills",
            "code": "if (!window.Promise) {\n  window.Promise = ... // custom implementation of the modern language feature\n}",
            "explanation": "Example demonstrating using for polyfills."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "That includes JavaScript built-ins, such as `Array` and environment-specific values, such as `window.innerHeight` -- the window height in the browser.",
          "...But more often is referred by \"old-school\" environment-specific names, such as `window` (browser) and `global` (Node.js)."
        ],
        "bulletPoints": [
          "The global object holds variables that should be available everywhere.",
          "The global object has a universal name `globalThis`.",
          "We should store values in the global object only if they're truly global for our project. And keep their number at minimum.",
          "In-browser, unless we're using modules, global functions and variables declared with `var` become a property of the global object.",
          "To make our code future-proof and easier to understand, we should access properties of the global object directly, as `window.x`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Global Object",
        "description": "Apply your understanding of Global Object. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Global Object\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Global Object\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Global Object in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for global object.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Global Object is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Global Object?",
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
      "Global Object is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying global object.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "global-object"
    ],
    "slug": "global-object"
  },
  {
    "title": "Function Object",
    "description": "As we already know, a function in JavaScript is a value.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we already know, a function in JavaScript is a value.",
          "Every value in JavaScript has a type. What type is a function?",
          "In JavaScript, functions are objects.",
          "A good way to imagine functions is as callable \"action objects\". We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc."
        ]
      },
      {
        "heading": "The \"name\" property",
        "paragraphs": [
          "Function objects contain some useable properties.",
          "For instance, a function's name is accessible as the \"name\" property:",
          "What's kind of funny, the name-assigning logic is smart. It also assigns the correct name to a function even if it's created without one, and then immediately assigned:",
          "It also works if the assignment is done via a default value:",
          "In the specification, this feature is called a \"contextual name\". If the function does not provide one, then in an assignment it is figured out from the context."
        ],
        "codeExamples": [
          {
            "title": "The \"name\" property",
            "code": "function sayHi() {\n  alert(\"Hi\");\n}\n\nalert(sayHi.name); // sayHi",
            "explanation": "Example demonstrating the \"name\" property."
          },
          {
            "title": "The \"name\" property",
            "code": "let sayHi = function() {\n  alert(\"Hi\");\n};\n\nalert(sayHi.name); // sayHi (there's a name!)",
            "explanation": "Example demonstrating the \"name\" property."
          }
        ]
      },
      {
        "heading": "The \"length\" property",
        "paragraphs": [
          "There is another built-in property \"length\" that returns the number of function parameters, for instance:",
          "Here we can see that rest parameters are not counted.",
          "The `length` property is sometimes used for introspection in functions that operate on other functions.",
          "For instance, in the code below the `ask` function accepts a `question` to ask and an arbitrary number of `handler` functions to call.",
          "Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:"
        ],
        "codeExamples": [
          {
            "title": "The \"length\" property",
            "code": "function f1(a) {}\nfunction f2(a, b) {}\nfunction many(a, b, ...more) {}\n\nalert(f1.length); // 1\nalert(f2.length); // 2\nalert(many.length); // 2",
            "explanation": "Example demonstrating the \"length\" property."
          },
          {
            "title": "The \"length\" property",
            "code": "function ask(question, ...handlers) {\n  let isYes = confirm(question);\n\n  for(let handler of handlers) {\n    if (handler.length == 0) {\n      if (isYes) handler();\n    } else {\n      handler(isYes);\n    }\n  }\n\n}\n\n// for positive answer, both handlers are called\n// for negative answer, only the second one\nask(\"Question?\", () => alert('You said yes'), result => alert(result));",
            "explanation": "Example demonstrating the \"length\" property."
          }
        ],
        "bulletPoints": [
          "A zero-argument function, which is only called when the user gives a positive answer.",
          "A function with arguments, which is called in either case and returns an answer."
        ]
      },
      {
        "heading": "Custom properties",
        "paragraphs": [
          "We can also add properties of our own.",
          "Here we add the `counter` property to track the total calls count:",
          "Function properties can replace closures sometimes. For instance, we can rewrite the counter function example from the chapter to use a function property:",
          "The `count` is now stored in the function directly, not in its outer Lexical Environment.",
          "Is it better or worse than using a closure?"
        ],
        "codeExamples": [
          {
            "title": "Custom properties",
            "code": "function sayHi() {\n  alert(\"Hi\");\n\n  *!*\n  // let's count how many times we run\n  sayHi.counter++;\n  */!*\n}\nsayHi.counter = 0; // initial value\n\nsayHi(); // Hi\nsayHi(); // Hi\n\nalert( `Called ${sayHi.counter} times` ); // Called 2 times",
            "explanation": "Example demonstrating custom properties."
          },
          {
            "title": "Custom properties",
            "code": "A property assigned to a function like `sayHi.counter = 0` does *not* define a local variable `counter` inside it. In other words, a property `counter` and a variable `let counter` are two unrelated things.\n\nWe can treat a function as an object, store properties in it, but that has no effect on its execution. Variables are not function properties and vice versa. These are just parallel worlds.",
            "explanation": "Example demonstrating custom properties."
          }
        ]
      },
      {
        "heading": "Named Function Expression",
        "paragraphs": [
          "Named Function Expression, or NFE, is a term for Function Expressions that have a name.",
          "For instance, let's take an ordinary Function Expression:",
          "And add a name to it:",
          "Did we achieve anything here? What's the purpose of that additional `\"func\"` name?",
          "First let's note, that we still have a Function Expression. Adding the name `\"func\"` after `function` did not make it a Function Declaration, because it is still created as a part of an assignment expression."
        ],
        "codeExamples": [
          {
            "title": "Named Function Expression",
            "code": "let sayHi = function(who) {\n  alert(`Hello, ${who}`);\n};",
            "explanation": "Example demonstrating named function expression."
          },
          {
            "title": "Named Function Expression",
            "code": "let sayHi = function *!*func*/!*(who) {\n  alert(`Hello, ${who}`);\n};",
            "explanation": "Example demonstrating named function expression."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Functions are objects.",
          "Here we covered their properties:",
          "If the function is declared as a Function Expression (not in the main code flow), and it carries the name, then it is called a Named Function Expression. The name can be used inside to reference itself, for recursive calls or such.",
          "Also, functions may carry additional properties. Many well-known JavaScript libraries make great use of this feature.",
          "They create a \"main\" function and attach many other \"helper\" functions to it. For instance, the jQuery library creates a function named `$`. The lodash library creates a function `_`, and then adds `_.clone`, `_.keyBy` and other properties to it (see the docs when you want to learn more about them). Actually, they do it to lessen their pollution of the global space, so that a single library gives only one global variable. That reduces the possibility of naming conflicts."
        ],
        "bulletPoints": [
          "`name` -- the function name. Usually taken from the function definition, but if there's none, JavaScript tries to guess it from the context (e.g. an assignment).",
          "`length` -- the number of arguments in the function definition. Rest parameters are not counted."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Set and decrease for counter",
        "description": "Modify the code of `makeCounter()` so that the counter can also decrease and set the number: - `counter()` should return the next number (as before). - `counter.set(value)` should set the counter to `value`. - `counter.decrease()` should decrease the counter by 1. See the sandbox code for the comple",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Sum with an arbitrary amount of brackets",
        "description": "Write function `sum` that would work like this: ```js sum(1)(2) == 3; // 1 + 2 sum(1)(2)(3) == 6; // 1 + 2 + 3 sum(5)(-1)(2) == 6 sum(6)(-1)(-2)(-3) == 0 sum(0)(1)(2)(3)(4)(5) == 15 ``` P.S. Hint: you may need to setup custom object to primitive conversion for your function.",
        "starterCode": "sum(1)(2) == 3; // 1 + 2\nsum(1)(2)(3) == 6; // 1 + 2 + 3\nsum(5)(-1)(2) == 6\nsum(6)(-1)(-2)(-3) == 0\nsum(0)(1)(2)(3)(4)(5) == 15",
        "solution": "Please note that the `sum` function actually works only once. It returns function `f`.\n\nThen, on each subsequent call, `f` adds its parameter to the sum `currentSum`, and returns itself.\n\n**There is no recursion in the last line of `f`.**\n\nHere is what recursion looks like:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Function Object in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for function object.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Function Object is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Function Object?",
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
      "Function Object is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying function object.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "function-object"
    ],
    "slug": "function-object"
  },
  {
    "title": "New Function",
    "description": "There's one more way to create a function. It's rarely used, but sometimes there's no alternative.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There's one more way to create a function. It's rarely used, but sometimes there's no alternative."
        ]
      },
      {
        "heading": "Syntax",
        "paragraphs": [
          "The syntax for creating a function:",
          "The function is created with the arguments `arg1...argN` and the given `functionBody`.",
          "It's easier to understand by looking at an example. Here's a function with two arguments:",
          "And here there's a function without arguments, with only the function body:",
          "The major difference from other ways we've seen is that the function is created literally from a string, that is passed at run time."
        ],
        "codeExamples": [
          {
            "title": "Syntax",
            "code": "let func = new Function ([arg1, arg2, ...argN], functionBody);",
            "explanation": "Example demonstrating syntax."
          },
          {
            "title": "Syntax",
            "code": "let sum = new Function('a', 'b', 'return a + b');\n\nalert( sum(1, 2) ); // 3",
            "explanation": "Example demonstrating syntax."
          }
        ]
      },
      {
        "heading": "Closure",
        "paragraphs": [
          "Usually, a function remembers where it was born in the special property `[[Environment]]`. It references the Lexical Environment from where it's created (we covered that in the chapter ).",
          "But when a function is created using `new Function`, its `[[Environment]]` is set to reference not the current Lexical Environment, but the global one.",
          "So, such function doesn't have access to outer variables, only to the global ones.",
          "Compare it with the regular behavior:",
          "This special feature of `new Function` looks strange, but appears very useful in practice."
        ],
        "codeExamples": [
          {
            "title": "Closure",
            "code": "function getFunc() {\n  let value = \"test\";\n\n*!*\n  let func = new Function('alert(value)');\n*/!*\n\n  return func;\n}\n\ngetFunc()(); // error: value is not defined",
            "explanation": "Example demonstrating closure."
          },
          {
            "title": "Closure",
            "code": "function getFunc() {\n  let value = \"test\";\n\n*!*\n  let func = function() { alert(value); };\n*/!*\n\n  return func;\n}\n\ngetFunc()(); // *!*\"test\"*/!*, from the Lexical Environment of getFunc",
            "explanation": "Example demonstrating closure."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The syntax:",
          "For historical reasons, arguments can also be given as a comma-separated list.",
          "These three declarations mean the same:",
          "Functions created with `new Function`, have `[[Environment]]` referencing the global Lexical Environment, not the outer one. Hence, they cannot use outer variables. But that's actually good, because it insures us from errors. Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let func = new Function ([arg1, arg2, ...argN], functionBody);",
            "explanation": "Example demonstrating summary."
          },
          {
            "title": "Summary",
            "code": "new Function('a', 'b', 'return a + b'); // basic syntax\nnew Function('a,b', 'return a + b'); // comma-separated\nnew Function('a , b', 'return a + b'); // comma-separated with spaces",
            "explanation": "Example demonstrating summary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: New Function",
        "description": "Apply your understanding of New Function. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: New Function\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: New Function\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of New Function in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for new function.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "New Function is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with New Function?",
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
      "New Function is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying new function.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "new-function"
    ],
    "slug": "new-function"
  },
  {
    "title": "Settimeout Setinterval",
    "description": "We may decide to execute a function not right now, but at a certain time later. That's called \"scheduling a call\".",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We may decide to execute a function not right now, but at a certain time later. That's called \"scheduling a call\".",
          "There are two methods for it:",
          "These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js."
        ],
        "bulletPoints": [
          "`setTimeout` allows us to run a function once after the interval of time.",
          "`setInterval` allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval."
        ]
      },
      {
        "heading": "setTimeout",
        "paragraphs": [
          "The syntax:",
          "Parameters:",
          "`func|code`",
          ": Function or a string of code to execute.",
          "Usually, that's a function. For historical reasons, a string of code can be passed, but that's not recommended."
        ],
        "codeExamples": [
          {
            "title": "setTimeout",
            "code": "let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)",
            "explanation": "Example demonstrating settimeout."
          },
          {
            "title": "setTimeout",
            "code": "function sayHi() {\n  alert('Hello');\n}\n\n*!*\nsetTimeout(sayHi, 1000);\n*/!*",
            "explanation": "Example demonstrating settimeout."
          }
        ]
      },
      {
        "heading": "Canceling with clearTimeout",
        "paragraphs": [
          "A call to `setTimeout` returns a \"timer identifier\" `timerId` that we can use to cancel the execution.",
          "The syntax to cancel:",
          "In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:",
          "As we can see from `alert` output, in a browser the timer identifier is a number. In other environments, this can be something else. For instance, Node.js returns a timer object with additional methods.",
          "Again, there is no universal specification for these methods, so that's fine."
        ],
        "codeExamples": [
          {
            "title": "Canceling with clearTimeout",
            "code": "let timerId = setTimeout(...);\nclearTimeout(timerId);",
            "explanation": "Example demonstrating canceling with cleartimeout."
          },
          {
            "title": "Canceling with clearTimeout",
            "code": "let timerId = setTimeout(() => alert(\"never happens\"), 1000);\nalert(timerId); // timer identifier\n\nclearTimeout(timerId);\nalert(timerId); // same identifier (doesn't become null after canceling)",
            "explanation": "Example demonstrating canceling with cleartimeout."
          }
        ]
      },
      {
        "heading": "setInterval",
        "paragraphs": [
          "The `setInterval` method has the same syntax as `setTimeout`:",
          "All arguments have the same meaning. But unlike `setTimeout` it runs the function not only once, but regularly after the given interval of time.",
          "To stop further calls, we should call `clearInterval(timerId)`.",
          "The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:"
        ],
        "codeExamples": [
          {
            "title": "setInterval",
            "code": "let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)",
            "explanation": "Example demonstrating setinterval."
          },
          {
            "title": "setInterval",
            "code": "// repeat with the interval of 2 seconds\nlet timerId = setInterval(() => alert('tick'), 2000);\n\n// after 5 seconds stop\nsetTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);",
            "explanation": "Example demonstrating setinterval."
          }
        ]
      },
      {
        "heading": "Nested setTimeout",
        "paragraphs": [
          "There are two ways of running something regularly.",
          "One is `setInterval`. The other one is a nested `setTimeout`, like this:",
          "The `setTimeout` above schedules the next call right at the end of the current one `(*)`.",
          "The nested `setTimeout` is a more flexible method than `setInterval`. This way the next call may be scheduled differently, depending on the results of the current one.",
          "For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds..."
        ],
        "codeExamples": [
          {
            "title": "Nested setTimeout",
            "code": "/** instead of:\nlet timerId = setInterval(() => alert('tick'), 2000);\n*/\n\nlet timerId = setTimeout(function tick() {\n  alert('tick');\n*!*\n  timerId = setTimeout(tick, 2000); // (*)\n*/!*\n}, 2000);",
            "explanation": "Example demonstrating nested settimeout."
          },
          {
            "title": "Nested setTimeout",
            "code": "let delay = 5000;\n\nlet timerId = setTimeout(function request() {\n  ...send request...\n\n  if (request failed due to server overload) {\n    // increase the interval to the next run\n    delay *= 2;\n  }\n\n  timerId = setTimeout(request, delay);\n\n}, delay);",
            "explanation": "Example demonstrating nested settimeout."
          }
        ]
      },
      {
        "heading": "Zero delay setTimeout",
        "paragraphs": [
          "There's a special use case: `setTimeout(func, 0)`, or just `setTimeout(func)`.",
          "This schedules the execution of `func` as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.",
          "So the function is scheduled to run \"right after\" the current script.",
          "For instance, this outputs \"Hello\", then immediately \"World\":",
          "The first line \"puts the call into calendar after 0ms\". But the scheduler will only \"check the calendar\" after the current script is complete, so `\"Hello\"` is first, and `\"World\"` -- after it."
        ],
        "codeExamples": [
          {
            "title": "Zero delay setTimeout",
            "code": "setTimeout(() => alert(\"World\"));\n\nalert(\"Hello\");",
            "explanation": "Example demonstrating zero delay settimeout."
          },
          {
            "title": "Zero delay setTimeout",
            "code": "In the browser, there's a limitation of how often nested timers can run. The [HTML Living Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) says: \"after five nested timers, the interval is forced to be at least 4 milliseconds.\".\n\nLet's demonstrate what it means with the example below. The `setTimeout` call in it re-schedules itself with zero delay. Each call remembers the real time from the previous one in the `times` array. What do the real delays look like? Let's see:",
            "explanation": "Example demonstrating zero delay settimeout."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Please note that all scheduling methods do not *guarantee* the exact delay.",
          "For example, the in-browser timer may slow down for a lot of reasons:",
          "All that may increase the minimal timer resolution (the minimal delay) to 300ms or even 1000ms depending on the browser and OS-level performance settings."
        ],
        "bulletPoints": [
          "Methods `setTimeout(func, delay, ...args)` and `setInterval(func, delay, ...args)` allow us to run the `func` once/regularly after `delay` milliseconds.",
          "To cancel the execution, we should call `clearTimeout/clearInterval` with the value returned by `setTimeout/setInterval`.",
          "Nested `setTimeout` calls are a more flexible alternative to `setInterval`, allowing us to set the time *between* executions more precisely.",
          "Zero delay scheduling with `setTimeout(func, 0)` (the same as `setTimeout(func)`) is used to schedule the call \"as soon as possible, but after the current script is complete\".",
          "The browser limits the minimal delay for five or more nested calls of `setTimeout` or for `setInterval` (after 5th call) to 4ms. That's for historical reasons."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Output every second",
        "description": "Write a function `printNumbers(from, to)` that outputs a number every second, starting from `from` and ending with `to`. Make two variants of the solution. 1. Using `setInterval`. 2. Using nested `setTimeout`.",
        "starterCode": "// Write your code here\n",
        "solution": "Using nested `setTimeout`:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "What will setTimeout show?",
        "description": "In the code below there's a `setTimeout` call scheduled, then a heavy calculation is run, that takes more than 100ms to finish. When will the scheduled function run? 1. After the loop. 2. Before the loop. 3. In the beginning of the loop. What is `alert` going to show? ```js let i = 0; setTimeout(() ",
        "starterCode": "let i = 0;\n\nsetTimeout(() => alert(i), 100); // ?\n\n// assume that the time to execute this function is >100ms\nfor(let j = 0; j < 100000000; j++) {\n  i++; \n}",
        "solution": "let i = 0;\n\nsetTimeout(() => alert(i), 100); // ?\n\n// assume that the time to execute this function is >100ms\nfor(let j = 0; j < 100000000; j++) {\n  i++; \n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Settimeout Setinterval in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for settimeout setinterval.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Settimeout Setinterval is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Settimeout Setinterval?",
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
      "Settimeout Setinterval is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying settimeout setinterval.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "settimeout-setinterval"
    ],
    "slug": "settimeout-setinterval"
  },
  {
    "title": "Call Apply Decorators",
    "description": "JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects, and now we'll see how to *forward* calls between them and *decorat...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects, and now we'll see how to *forward* calls between them and *decorate* them."
        ]
      },
      {
        "heading": "Transparent caching",
        "paragraphs": [
          "Let's say we have a function `slow(x)` which is CPU-heavy, but its results are stable. In other words, for the same `x` it always returns the same result.",
          "If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.",
          "But instead of adding that functionality into `slow()` we'll create a wrapper function, that adds caching. As we'll see, there are many benefits of doing so.",
          "Here's the code, and explanations follow:",
          "In the code above `cachingDecorator` is a *decorator*: a special function that takes another function and alters its behavior."
        ],
        "codeExamples": [
          {
            "title": "Transparent caching",
            "code": "function slow(x) {\n  // there can be a heavy CPU-intensive job here\n  alert(`Called with ${x}`);\n  return x;\n}\n\nfunction cachingDecorator(func) {\n  let cache = new Map();\n\n  return function(x) {\n    if (cache.has(x)) {    // if there's such key in cache\n      return cache.get(x); // read the result from it\n    }\n\n    let result = func(x);  // otherwise call func\n\n    cache.set(x, result);  // and cache (remember) the result\n    return result;\n  };\n}\n\nslow = cachingDecorator(slow);\n\nalert( slow(1) ); // slow(1) is cached and the result returned\nalert( \"Again: \" + slow(1) ); // slow(1) result returned from cache\n\nalert( slow(2) ); // slow(2) is cached and the result returned\nalert( \"Again: \" + slow(2) ); // slow(2) result returned from cache",
            "explanation": "Example demonstrating transparent caching."
          }
        ],
        "bulletPoints": [
          "The `cachingDecorator` is reusable. We can apply it to another function.",
          "The caching logic is separate, it did not increase the complexity of `slow` itself (if there was any).",
          "We can combine multiple decorators if needed (other decorators will follow)."
        ]
      },
      {
        "heading": "Using \"func.call\" for the context",
        "paragraphs": [
          "The caching decorator mentioned above is not suited to work with object methods.",
          "For instance, in the code below `worker.slow()` stops working after the decoration:",
          "The error occurs in the line `(*)` that tries to access `this.someMethod` and fails. Can you see why?",
          "The reason is that the wrapper calls the original function as `func(x)` in the line `(**)`. And, when called like that, the function gets `this = undefined`.",
          "We would observe a similar symptom if we tried to run:"
        ],
        "codeExamples": [
          {
            "title": "Using \"func.call\" for the context",
            "code": "// we'll make worker.slow caching\nlet worker = {\n  someMethod() {\n    return 1;\n  },\n\n  slow(x) {\n    // scary CPU-heavy task here  \n    alert(\"Called with \" + x);\n    return x * this.someMethod(); // (*)\n  }\n};\n\n// same code as before\nfunction cachingDecorator(func) {\n  let cache = new Map();\n  return function(x) {\n    if (cache.has(x)) {\n      return cache.get(x);\n    }\n*!*\n    let result = func(x); // (**)\n*/!*\n    cache.set(x, result);\n    return result;\n  };\n}\n\nalert( worker.slow(1) ); // the original method works\n\nworker.slow = cachingDecorator(worker.slow); // now make it caching\n\n*!*\nalert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined\n*/!*",
            "explanation": "Example demonstrating using \"func.call\" for the context."
          },
          {
            "title": "Using \"func.call\" for the context",
            "code": "let func = worker.slow;\nfunc(2);",
            "explanation": "Example demonstrating using \"func.call\" for the context."
          }
        ]
      },
      {
        "heading": "Going multi-argument",
        "paragraphs": [
          "Now let's make `cachingDecorator` even more universal. Till now it was working only with single-argument functions.",
          "Now how to cache the multi-argument `worker.slow` method?",
          "Previously, for a single argument `x` we could just `cache.set(x, result)` to save the result and `cache.get(x)` to retrieve it. But now we need to remember the result for a *combination of arguments* `(min,max)`. The native `Map` takes single value only as the key.",
          "There are many solutions possible:",
          "1. Implement a new (or use a third-party) map-like data structure that is more versatile and allows multi-keys."
        ],
        "codeExamples": [
          {
            "title": "Going multi-argument",
            "code": "let worker = {\n  slow(min, max) {\n    return min + max; // scary CPU-hogger is assumed\n  }\n};\n\n// should remember same-argument calls\nworker.slow = cachingDecorator(worker.slow);",
            "explanation": "Example demonstrating going multi-argument."
          },
          {
            "title": "Going multi-argument",
            "code": "let worker = {\n  slow(min, max) {\n    alert(`Called with ${min},${max}`);\n    return min + max;\n  }\n};\n\nfunction cachingDecorator(func, hash) {\n  let cache = new Map();\n  return function() {\n*!*\n    let key = hash(arguments); // (*)\n*/!*\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n\n*!*\n    let result = func.call(this, ...arguments); // (**)\n*/!*\n\n    cache.set(key, result);\n    return result;\n  };\n}\n\nfunction hash(args) {\n  return args[0] + ',' + args[1];\n}\n\nworker.slow = cachingDecorator(worker.slow, hash);\n\nalert( worker.slow(3, 5) ); // works\nalert( \"Again \" + worker.slow(3, 5) ); // same (cached)",
            "explanation": "Example demonstrating going multi-argument."
          }
        ],
        "bulletPoints": [
          "In the line `(*)` it calls `hash` to create a single key from `arguments`. Here we use a simple \"joining\" function that turns arguments `(3, 5)` into the key `\"3,5\"`. More complex cases may require other hashing functions.",
          "Then `(**)` uses `func.call(this, ...arguments)` to pass both the context and all arguments the wrapper got (not just the first one) to the original function."
        ]
      },
      {
        "heading": "func.apply",
        "paragraphs": [
          "Instead of `func.call(this, ...arguments)` we could use `func.apply(this, arguments)`.",
          "The syntax of built-in method func.apply is:",
          "It runs the `func` setting `this=context` and using an array-like object `args` as the list of arguments.",
          "The only syntax difference between `call` and `apply` is that `call` expects a list of arguments, while `apply` takes an array-like object with them.",
          "So these two calls are almost equivalent:"
        ],
        "codeExamples": [
          {
            "title": "func.apply",
            "code": "func.apply(context, args)",
            "explanation": "Example demonstrating func.apply."
          },
          {
            "title": "func.apply",
            "code": "func.call(context, ...args);\nfunc.apply(context, args);",
            "explanation": "Example demonstrating func.apply."
          }
        ],
        "bulletPoints": [
          "The spread syntax `...` allows to pass *iterable* `args` as the list to `call`.",
          "The `apply` accepts only *array-like* `args`."
        ]
      },
      {
        "heading": "Borrowing a method [#method-borrowing]",
        "paragraphs": [
          "Now let's make one more minor improvement in the hashing function:",
          "As of now, it works only on two arguments. It would be better if it could glue any number of `args`.",
          "The natural solution would be to use arr.join method:",
          "...Unfortunately, that won't work. Because we are calling `hash(arguments)`, and `arguments` object is both iterable and array-like, but not a real array.",
          "So calling `join` on it would fail, as we can see below:"
        ],
        "codeExamples": [
          {
            "title": "Borrowing a method [#method-borrowing]",
            "code": "function hash(args) {\n  return args[0] + ',' + args[1];\n}",
            "explanation": "Example demonstrating borrowing a method [#method-borrowing]."
          },
          {
            "title": "Borrowing a method [#method-borrowing]",
            "code": "function hash(args) {\n  return args.join();\n}",
            "explanation": "Example demonstrating borrowing a method [#method-borrowing]."
          }
        ]
      },
      {
        "heading": "Decorators and function properties",
        "paragraphs": [
          "It is generally safe to replace a function or a method with a decorated one, except for one little thing. If the original function had properties on it, like `func.calledCount` or whatever, then the decorated one will not provide them. Because that is a wrapper. So one needs to be careful if one uses them.",
          "E.g. in the example above if `slow` function had any properties on it, then `cachingDecorator(slow)` is a wrapper without them.",
          "Some decorators may provide their own properties. E.g. a decorator may count how many times a function was invoked and how much time it took, and expose this information via wrapper properties.",
          "There exists a way to create decorators that keep access to function properties, but this requires using a special `Proxy` object to wrap a function. We'll discuss it later in the article ."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "*Decorator* is a wrapper around a function that alters its behavior. The main job is still carried out by the function.",
          "Decorators can be seen as \"features\" or \"aspects\" that can be added to a function. We can add one or add many. And all this without changing its code!",
          "To implement `cachingDecorator`, we studied methods:",
          "The generic *call forwarding* is usually done with `apply`:",
          "We also saw an example of *method borrowing* when we take a method from an object and `call` it in the context of another object. It is quite common to take array methods and apply them to `arguments`. The alternative is to use rest parameters object that is a real array."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let wrapper = function() {\n  return original.apply(this, arguments);\n};",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "func.call(context, arg1, arg2...) -- calls `func` with given context and arguments.",
          "func.apply(context, args) -- calls `func` passing `context` as `this` and array-like `args` into a list of arguments."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Spy decorator",
        "description": "Create a decorator `spy(func)` that should return a wrapper that saves all calls to function in its `calls` property. Every call is saved as an array of arguments. For instance: ```js function work(a, b) { alert( a + b ); // work is an arbitrary function or method } *!* work = spy(work); */!* work(1",
        "starterCode": "function work(a, b) {\n  alert( a + b ); // work is an arbitrary function or method\n}\n\n*!*\nwork = spy(work);\n*/!*\n\nwork(1, 2); // 3\nwork(4, 5); // 9\n\nfor (let args of work.calls) {\n  alert( 'call:' + args.join() ); // \"call:1,2\", \"call:4,5\"\n}",
        "solution": "function work(a, b) {\n  alert( a + b ); // work is an arbitrary function or method\n}\n\n*!*\nwork = spy(work);\n*/!*\n\nwork(1, 2); // 3\nwork(4, 5); // 9\n\nfor (let args of work.calls) {\n  alert( 'call:' + args.join() ); // \"call:1,2\", \"call:4,5\"\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Delaying decorator",
        "description": "Create a decorator `delay(f, ms)` that delays each call of `f` by `ms` milliseconds. For instance: ```js function f(x) { alert(x); } // create wrappers let f1000 = delay(f, 1000); let f1500 = delay(f, 1500); f1000(\"test\"); // shows \"test\" after 1000ms f1500(\"test\"); // shows \"test\" after 1500ms ``` ",
        "starterCode": "function f(x) {\n  alert(x);\n}\n\n// create wrappers\nlet f1000 = delay(f, 1000);\nlet f1500 = delay(f, 1500);\n\nf1000(\"test\"); // shows \"test\" after 1000ms\nf1500(\"test\"); // shows \"test\" after 1500ms",
        "solution": "Please note how an arrow function is used here. As we know, arrow functions do not have own `this` and `arguments`, so `f.apply(this, arguments)` takes `this` and `arguments` from the wrapper.\n\nIf we pass a regular function, `setTimeout` would call it without arguments and `this=window` (assuming we're in the browser).\n\nWe still can pass the right `this` by using an intermediate variable, but that's a little bit more cumbersome:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Debounce decorator",
        "description": "The result of `debounce(f, ms)` decorator is a wrapper that suspends calls to `f` until there's `ms` milliseconds of inactivity (no calls, \"cooldown period\"), then invokes `f` once with the latest arguments. In other words, `debounce` is like a secretary that accepts \"phone calls\", and waits until t",
        "starterCode": "let f = _.debounce(alert, 1000);\n\nf(\"a\");\nsetTimeout( () => f(\"b\"), 200);\nsetTimeout( () => f(\"c\"), 500);\n// debounced function waits 1000ms after the last call and then runs: alert(\"c\")",
        "solution": "let f = _.debounce(alert, 1000);\n\nf(\"a\");\nsetTimeout( () => f(\"b\"), 200);\nsetTimeout( () => f(\"c\"), 500);\n// debounced function waits 1000ms after the last call and then runs: alert(\"c\")",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Call Apply Decorators in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for call apply decorators.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Call Apply Decorators is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Call Apply Decorators?",
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
      "Call Apply Decorators is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying call apply decorators.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "call-apply-decorators"
    ],
    "slug": "call-apply-decorators"
  },
  {
    "title": "Bind",
    "description": "libs:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "libs:",
          "When passing object methods as callbacks, for instance to `setTimeout`, there's a known problem: \"losing `this`\".",
          "In this chapter we'll see the ways to fix it."
        ],
        "bulletPoints": [
          "lodash"
        ]
      },
      {
        "heading": "Losing \"this\"",
        "paragraphs": [
          "We've already seen examples of losing `this`. Once a method is passed somewhere separately from the object -- `this` is lost.",
          "Here's how it may happen with `setTimeout`:",
          "As we can see, the output shows not \"John\" as `this.firstName`, but `undefined`!",
          "That's because `setTimeout` got the function `user.sayHi`, separately from the object. The last line can be rewritten as:",
          "The method `setTimeout` in-browser is a little special: it sets `this=window` for the function call (for Node.js, `this` becomes the timer object, but doesn't really matter here). So for `this.firstName` it tries to get `window.firstName`, which does not exist. In other similar cases, usually `this` just becomes `undefined`."
        ],
        "codeExamples": [
          {
            "title": "Losing \"this\"",
            "code": "let user = {\n  firstName: \"John\",\n  sayHi() {\n    alert(`Hello, ${this.firstName}!`);\n  }\n};\n\n*!*\nsetTimeout(user.sayHi, 1000); // Hello, undefined!\n*/!*",
            "explanation": "Example demonstrating losing \"this\"."
          },
          {
            "title": "Losing \"this\"",
            "code": "let f = user.sayHi;\nsetTimeout(f, 1000); // lost user context",
            "explanation": "Example demonstrating losing \"this\"."
          }
        ]
      },
      {
        "heading": "Solution 1: a wrapper",
        "paragraphs": [
          "The simplest solution is to use a wrapping function:",
          "Now it works, because it receives `user` from the outer lexical environment, and then calls the method normally.",
          "The same, but shorter:",
          "Looks fine, but a slight vulnerability appears in our code structure.",
          "What if before `setTimeout` triggers (there's one second delay!) `user` changes value? Then, suddenly, it will call the wrong object!"
        ],
        "codeExamples": [
          {
            "title": "Solution 1: a wrapper",
            "code": "let user = {\n  firstName: \"John\",\n  sayHi() {\n    alert(`Hello, ${this.firstName}!`);\n  }\n};\n\n*!*\nsetTimeout(function() {\n  user.sayHi(); // Hello, John!\n}, 1000);\n*/!*",
            "explanation": "Example demonstrating solution 1: a wrapper."
          },
          {
            "title": "Solution 1: a wrapper",
            "code": "setTimeout(() => user.sayHi(), 1000); // Hello, John!",
            "explanation": "Example demonstrating solution 1: a wrapper."
          }
        ]
      },
      {
        "heading": "Solution 2: bind",
        "paragraphs": [
          "Functions provide a built-in method bind that allows to fix `this`.",
          "The basic syntax is:",
          "The result of `func.bind(context)` is a special function-like \"exotic object\", that is callable as function and transparently passes the call to `func` setting `this=context`.",
          "In other words, calling `boundFunc` is like `func` with fixed `this`.",
          "For instance, here `funcUser` passes a call to `func` with `this=user`:"
        ],
        "codeExamples": [
          {
            "title": "Solution 2: bind",
            "code": "// more complex syntax will come a little later\nlet boundFunc = func.bind(context);",
            "explanation": "Example demonstrating solution 2: bind."
          },
          {
            "title": "Solution 2: bind",
            "code": "let user = {\n  firstName: \"John\"\n};\n\nfunction func() {\n  alert(this.firstName);\n}\n\n*!*\nlet funcUser = func.bind(user);\nfuncUser(); // John  \n*/!*",
            "explanation": "Example demonstrating solution 2: bind."
          }
        ]
      },
      {
        "heading": "Partial functions",
        "paragraphs": [
          "Until now we have only been talking about binding `this`. Let's take it a step further.",
          "We can bind not only `this`, but also arguments. That's rarely done, but sometimes can be handy.",
          "The full syntax of `bind`:",
          "It allows to bind context as `this` and starting arguments of the function.",
          "For instance, we have a multiplication function `mul(a, b)`:"
        ],
        "codeExamples": [
          {
            "title": "Partial functions",
            "code": "let bound = func.bind(context, [arg1], [arg2], ...);",
            "explanation": "Example demonstrating partial functions."
          },
          {
            "title": "Partial functions",
            "code": "function mul(a, b) {\n  return a * b;\n}",
            "explanation": "Example demonstrating partial functions."
          }
        ]
      },
      {
        "heading": "Going partial without context",
        "paragraphs": [
          "What if we'd like to fix some arguments, but not the context `this`? For example, for an object method.",
          "The native `bind` does not allow that. We can't just omit the context and jump to arguments.",
          "Fortunately, a function `partial` for binding only arguments can be easily implemented.",
          "Like this:",
          "The result of `partial(func[, arg1, arg2...])` call is a wrapper `(*)` that calls `func` with:"
        ],
        "codeExamples": [
          {
            "title": "Going partial without context",
            "code": "*!*\nfunction partial(func, ...argsBound) {\n  return function(...args) { // (*)\n    return func.call(this, ...argsBound, ...args);\n  }\n}\n*/!*\n\n// Usage:\nlet user = {\n  firstName: \"John\",\n  say(time, phrase) {\n    alert(`[${time}] ${this.firstName}: ${phrase}!`);\n  }\n};\n\n// add a partial method with fixed time\nuser.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());\n\nuser.sayNow(\"Hello\");\n// Something like:\n// [10:00] John: Hello!",
            "explanation": "Example demonstrating going partial without context."
          }
        ],
        "bulletPoints": [
          "Same `this` as it gets (for `user.sayNow` call it's `user`)",
          "Then gives it `...argsBound` -- arguments from the `partial` call (`\"10:00\"`)",
          "Then gives it `...args` -- arguments given to the wrapper (`\"Hello\"`)"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Method `func.bind(context, ...args)` returns a \"bound variant\" of function `func` that fixes the context `this` and first arguments if given.",
          "Usually we apply `bind` to fix `this` for an object method, so that we can pass it somewhere. For example, to `setTimeout`.",
          "When we fix some arguments of an existing function, the resulting (less universal) function is called *partially applied* or *partial*.",
          "Partials are convenient when we don't want to repeat the same argument over and over again. Like if we have a `send(from, to)` function, and `from` should always be the same for our task, we can get a partial and go on with it."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Bound function as a method",
        "description": "What will be the output? ```js function f() { alert( this ); // ? } let user = { g: f.bind(null) }; user.g(); ```",
        "starterCode": "function f() {\n  alert( this ); // ?\n}\n\nlet user = {\n  g: f.bind(null)\n};\n\nuser.g();",
        "solution": "function f() {\n  alert( this ); // ?\n}\n\nlet user = {\n  g: f.bind(null)\n};\n\nuser.g();",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Second bind",
        "description": "Can we change `this` by additional binding? What will be the output? ```js no-beautify function f() { alert(this.name); } f = f.bind( {name: \"John\"} ).bind( {name: \"Ann\" } ); f(); ```",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Function property after bind",
        "description": "There's a value in the property of a function. Will it change after `bind`? Why, or why not? ```js run function sayHi() { alert( this.name ); } sayHi.test = 5; *!* let bound = sayHi.bind({ name: \"John\" }); alert( bound.test ); // what will be the output? why? */!* ```",
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
        "question": "What is the primary role of Bind in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for bind.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Bind is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Bind?",
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
      "Bind is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying bind.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "bind"
    ],
    "slug": "bind"
  },
  {
    "title": "Arrow Functions",
    "description": "Let's revisit arrow functions.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's revisit arrow functions.",
          "Arrow functions are not just a \"shorthand\" for writing small stuff. They have some very specific and useful features.",
          "JavaScript is full of situations where we need to write a small function that's executed somewhere else.",
          "For instance:",
          "It's in the very spirit of JavaScript to create a function and pass it somewhere."
        ],
        "bulletPoints": [
          "`arr.forEach(func)` -- `func` is executed by `forEach` for every array item.",
          "`setTimeout(func)` -- `func` is executed by the built-in scheduler.",
          "...there are more."
        ]
      },
      {
        "heading": "Arrow functions have no \"this\"",
        "paragraphs": [
          "As we remember from the chapter , arrow functions do not have `this`. If `this` is accessed, it is taken from the outside.",
          "For instance, we can use it to iterate inside an object method:",
          "Here in `forEach`, the arrow function is used, so `this.title` in it is exactly the same as in the outer method `showList`. That is: `group.title`.",
          "If we used a \"regular\" function, there would be an error:",
          "The error occurs because `forEach` runs functions with `this=undefined` by default, so the attempt to access `undefined.title` is made."
        ],
        "codeExamples": [
          {
            "title": "Arrow functions have no \"this\"",
            "code": "let group = {\n  title: \"Our Group\",\n  students: [\"John\", \"Pete\", \"Alice\"],\n\n  showList() {\n*!*\n    this.students.forEach(\n      student => alert(this.title + ': ' + student)\n    );\n*/!*\n  }\n};\n\ngroup.showList();",
            "explanation": "Example demonstrating arrow functions have no \"this\"."
          },
          {
            "title": "Arrow functions have no \"this\"",
            "code": "let group = {\n  title: \"Our Group\",\n  students: [\"John\", \"Pete\", \"Alice\"],\n\n  showList() {\n*!*\n    this.students.forEach(function(student) {\n      // Error: Cannot read property 'title' of undefined\n      alert(this.title + ': ' + student);\n    });\n*/!*\n  }\n};\n\ngroup.showList();",
            "explanation": "Example demonstrating arrow functions have no \"this\"."
          }
        ]
      },
      {
        "heading": "Arrows have no \"arguments\"",
        "paragraphs": [
          "Arrow functions also have no `arguments` variable.",
          "That's great for decorators, when we need to forward a call with the current `this` and `arguments`.",
          "For instance, `defer(f, ms)` gets a function and returns a wrapper around it that delays the call by `ms` milliseconds:",
          "The same without an arrow function would look like:",
          "Here we had to create additional variables `args` and `ctx` so that the function inside `setTimeout` could take them."
        ],
        "codeExamples": [
          {
            "title": "Arrows have no \"arguments\"",
            "code": "function defer(f, ms) {\n  return function() {\n    setTimeout(() => f.apply(this, arguments), ms);\n  };\n}\n\nfunction sayHi(who) {\n  alert('Hello, ' + who);\n}\n\nlet sayHiDeferred = defer(sayHi, 2000);\nsayHiDeferred(\"John\"); // Hello, John after 2 seconds",
            "explanation": "Example demonstrating arrows have no \"arguments\"."
          },
          {
            "title": "Arrows have no \"arguments\"",
            "code": "function defer(f, ms) {\n  return function(...args) {\n    let ctx = this;\n    setTimeout(function() {\n      return f.apply(ctx, args);\n    }, ms);\n  };\n}",
            "explanation": "Example demonstrating arrows have no \"arguments\"."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Arrow functions:",
          "That's because they are meant for short pieces of code that do not have their own \"context\", but rather work in the current one. And they really shine in that use case."
        ],
        "bulletPoints": [
          "Do not have `this`",
          "Do not have `arguments`",
          "Can't be called with `new`",
          "They also don't have `super`, but we didn't study it yet. We will on the chapter"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Arrow Functions",
        "description": "Apply your understanding of Arrow Functions. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Arrow Functions\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Arrow Functions\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Arrow Functions in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for arrow functions.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Arrow Functions is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Arrow Functions?",
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
      "Arrow Functions is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying arrow functions.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "arrow-functions"
    ],
    "slug": "arrow-functions"
  },
  {
    "title": "Property Descriptors",
    "description": "As we know, objects can store properties.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we know, objects can store properties.",
          "Until now, a property was a simple \"key-value\" pair to us. But an object property is actually a more flexible and powerful thing.",
          "In this chapter we'll study additional configuration options, and in the next we'll see how to invisibly turn them into getter/setter functions."
        ]
      },
      {
        "heading": "Property flags",
        "paragraphs": [
          "Object properties, besides a **`value`**, have three special attributes (so-called \"flags\"):",
          "We didn't see them yet, because generally they do not show up. When we create a property \"the usual way\", all of them are `true`. But we also can change them anytime.",
          "First, let's see how to get those flags.",
          "The method Object.getOwnPropertyDescriptor allows to query the *full* information about a property.",
          "The syntax is:"
        ],
        "codeExamples": [
          {
            "title": "Property flags",
            "code": "let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);",
            "explanation": "Example demonstrating property flags."
          },
          {
            "title": "Property flags",
            "code": "let user = {\n  name: \"John\"\n};\n\nlet descriptor = Object.getOwnPropertyDescriptor(user, 'name');\n\nalert( JSON.stringify(descriptor, null, 2 ) );\n/* property descriptor:\n{\n  \"value\": \"John\",\n  \"writable\": true,\n  \"enumerable\": true,\n  \"configurable\": true\n}\n*/",
            "explanation": "Example demonstrating property flags."
          }
        ],
        "bulletPoints": [
          "**`writable`** -- if `true`, the value can be changed, otherwise it's read-only.",
          "**`enumerable`** -- if `true`, then listed in loops, otherwise not listed.",
          "**`configurable`** -- if `true`, the property can be deleted and these attributes can be modified, otherwise not."
        ]
      },
      {
        "heading": "Non-writable",
        "paragraphs": [
          "Let's make `user.name` non-writable (can't be reassigned) by changing `writable` flag:",
          "Now no one can change the name of our user, unless they apply their own `defineProperty` to override ours.",
          "Here's the same example, but the property is created from scratch:"
        ],
        "codeExamples": [
          {
            "title": "Non-writable",
            "code": "let user = {\n  name: \"John\"\n};\n\nObject.defineProperty(user, \"name\", {\n*!*\n  writable: false\n*/!*\n});\n\n*!*\nuser.name = \"Pete\"; // Error: Cannot assign to read only property 'name'\n*/!*",
            "explanation": "Example demonstrating non-writable."
          },
          {
            "title": "Non-writable",
            "code": "In non-strict mode, no errors occur when writing to non-writable properties and such. But the operation still won't succeed. Flag-violating actions are just silently ignored in non-strict.",
            "explanation": "Example demonstrating non-writable."
          }
        ]
      },
      {
        "heading": "Non-enumerable",
        "paragraphs": [
          "Now let's add a custom `toString` to `user`.",
          "Normally, a built-in `toString` for objects is non-enumerable, it does not show up in `for..in`. But if we add a `toString` of our own, then by default it shows up in `for..in`, like this:",
          "If we don't like it, then we can set `enumerable:false`. Then it won't appear in a `for..in` loop, just like the built-in one:",
          "Non-enumerable properties are also excluded from `Object.keys`:"
        ],
        "codeExamples": [
          {
            "title": "Non-enumerable",
            "code": "let user = {\n  name: \"John\",\n  toString() {\n    return this.name;\n  }\n};\n\n// By default, both our properties are listed:\nfor (let key in user) alert(key); // name, toString",
            "explanation": "Example demonstrating non-enumerable."
          },
          {
            "title": "Non-enumerable",
            "code": "let user = {\n  name: \"John\",\n  toString() {\n    return this.name;\n  }\n};\n\nObject.defineProperty(user, \"toString\", {\n*!*\n  enumerable: false\n*/!*\n});\n\n*!*\n// Now our toString disappears:\n*/!*\nfor (let key in user) alert(key); // name",
            "explanation": "Example demonstrating non-enumerable."
          }
        ]
      },
      {
        "heading": "Non-configurable",
        "paragraphs": [
          "The non-configurable flag (`configurable:false`) is sometimes preset for built-in objects and properties.",
          "A non-configurable property can't be deleted, its attributes can't be modified.",
          "For instance, `Math.PI` is non-writable, non-enumerable and non-configurable:",
          "So, a programmer is unable to change the value of `Math.PI` or overwrite it.",
          "We also can't change `Math.PI` to be `writable` again:"
        ],
        "codeExamples": [
          {
            "title": "Non-configurable",
            "code": "let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');\n\nalert( JSON.stringify(descriptor, null, 2 ) );\n/*\n{\n  \"value\": 3.141592653589793,\n  \"writable\": false,\n  \"enumerable\": false,\n  \"configurable\": false\n}\n*/",
            "explanation": "Example demonstrating non-configurable."
          },
          {
            "title": "Non-configurable",
            "code": "Math.PI = 3; // Error, because it has writable: false\n\n// delete Math.PI won't work either",
            "explanation": "Example demonstrating non-configurable."
          }
        ]
      },
      {
        "heading": "Object.defineProperties",
        "paragraphs": [
          "There's a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.",
          "The syntax is:",
          "For instance:",
          "So, we can set many properties at once."
        ],
        "codeExamples": [
          {
            "title": "Object.defineProperties",
            "code": "Object.defineProperties(obj, {\n  prop1: descriptor1,\n  prop2: descriptor2\n  // ...\n});",
            "explanation": "Example demonstrating object.defineproperties."
          },
          {
            "title": "Object.defineProperties",
            "code": "Object.defineProperties(user, {\n  name: { value: \"John\", writable: false },\n  surname: { value: \"Smith\", writable: false },\n  // ...\n});",
            "explanation": "Example demonstrating object.defineproperties."
          }
        ]
      },
      {
        "heading": "Object.getOwnPropertyDescriptors",
        "paragraphs": [
          "To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).",
          "Together with `Object.defineProperties` it can be used as a \"flags-aware\" way of cloning an object:",
          "Normally when we clone an object, we use an assignment to copy properties, like this:",
          "...But that does not copy flags. So if we want a \"better\" clone then `Object.defineProperties` is preferred.",
          "Another difference is that `for..in` ignores symbolic and non-enumerable properties, but `Object.getOwnPropertyDescriptors` returns *all* property descriptors including symbolic and non-enumerable ones."
        ],
        "codeExamples": [
          {
            "title": "Object.getOwnPropertyDescriptors",
            "code": "let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));",
            "explanation": "Example demonstrating object.getownpropertydescriptors."
          },
          {
            "title": "Object.getOwnPropertyDescriptors",
            "code": "for (let key in user) {\n  clone[key] = user[key]\n}",
            "explanation": "Example demonstrating object.getownpropertydescriptors."
          }
        ]
      },
      {
        "heading": "Sealing an object globally",
        "paragraphs": [
          "Property descriptors work at the level of individual properties.",
          "There are also methods that limit access to the *whole* object:",
          "Object.preventExtensions(obj)",
          ": Forbids the addition of new properties to the object.",
          "Object.seal(obj)"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Property Descriptors",
        "description": "Apply your understanding of Property Descriptors. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Property Descriptors\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Property Descriptors\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Property Descriptors in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for property descriptors.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Property Descriptors is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Property Descriptors?",
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
      "Property Descriptors is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying property descriptors.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "property-descriptors"
    ],
    "slug": "property-descriptors"
  },
  {
    "title": "Property Accessors",
    "description": "There are two kinds of object properties.",
    "difficulty": "intermediate",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There are two kinds of object properties.",
          "The first kind is *data properties*. We already know how to work with them. All properties that we've been using until now were data properties.",
          "The second type of property is something new. It's an *accessor property*. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code."
        ]
      },
      {
        "heading": "Getters and setters",
        "paragraphs": [
          "Accessor properties are represented by \"getter\" and \"setter\" methods. In an object literal they are denoted by `get` and `set`:",
          "The getter works when `obj.propName` is read, the setter -- when it is assigned.",
          "For instance, we have a `user` object with `name` and `surname`:",
          "Now we want to add a `fullName` property, that should be `\"John Smith\"`. Of course, we don't want to copy-paste existing information, so we can implement it as an accessor:",
          "From the outside, an accessor property looks like a regular one. That's the idea of accessor properties. We don't *call* `user.fullName` as a function, we *read* it normally: the getter runs behind the scenes."
        ],
        "codeExamples": [
          {
            "title": "Getters and setters",
            "code": "let obj = {\n  *!*get propName()*/!* {\n    // getter, the code executed on getting obj.propName\n  },\n\n  *!*set propName(value)*/!* {\n    // setter, the code executed on setting obj.propName = value\n  }\n};",
            "explanation": "Example demonstrating getters and setters."
          },
          {
            "title": "Getters and setters",
            "code": "let user = {\n  name: \"John\",\n  surname: \"Smith\"\n};",
            "explanation": "Example demonstrating getters and setters."
          }
        ]
      },
      {
        "heading": "Accessor descriptors",
        "paragraphs": [
          "Descriptors for accessor properties are different from those for data properties.",
          "For accessor properties, there is no `value` or `writable`, but instead there are `get` and `set` functions.",
          "That is, an accessor descriptor may have:",
          "For instance, to create an accessor `fullName` with `defineProperty`, we can pass a descriptor with `get` and `set`:",
          "Please note that a property can be either an accessor (has `get/set` methods) or a data property (has a `value`), not both."
        ],
        "codeExamples": [
          {
            "title": "Accessor descriptors",
            "code": "let user = {\n  name: \"John\",\n  surname: \"Smith\"\n};\n\n*!*\nObject.defineProperty(user, 'fullName', {\n  get() {\n    return `${this.name} ${this.surname}`;\n  },\n\n  set(value) {\n    [this.name, this.surname] = value.split(\" \");\n  }\n*/!*\n});\n\nalert(user.fullName); // John Smith\n\nfor(let key in user) alert(key); // name, surname",
            "explanation": "Example demonstrating accessor descriptors."
          },
          {
            "title": "Accessor descriptors",
            "code": "*!*\n// Error: Invalid property descriptor.\n*/!*\nObject.defineProperty({}, 'prop', {\n  get() {\n    return 1\n  },\n\n  value: 2\n});",
            "explanation": "Example demonstrating accessor descriptors."
          }
        ],
        "bulletPoints": [
          "**`get`** -- a function without arguments, that works when a property is read,",
          "**`set`** -- a function with one argument, that is called when the property is set,",
          "**`enumerable`** -- same as for data properties,",
          "**`configurable`** -- same as for data properties."
        ]
      },
      {
        "heading": "Smarter getters/setters",
        "paragraphs": [
          "Getters/setters can be used as wrappers over \"real\" property values to gain more control over operations with them.",
          "For instance, if we want to forbid too short names for `user`, we can have a setter `name` and keep the value in a separate property `_name`:",
          "So, the name is stored in `_name` property, and the access is done via getter and setter.",
          "Technically, external code is able to access the name directly by using `user._name`. But there is a widely known convention that properties starting with an underscore `\"_\"` are internal and should not be touched from outside the object."
        ],
        "codeExamples": [
          {
            "title": "Smarter getters/setters",
            "code": "let user = {\n  get name() {\n    return this._name;\n  },\n\n  set name(value) {\n    if (value.length < 4) {\n      alert(\"Name is too short, need at least 4 characters\");\n      return;\n    }\n    this._name = value;\n  }\n};\n\nuser.name = \"Pete\";\nalert(user.name); // Pete\n\nuser.name = \"\"; // Name is too short...",
            "explanation": "Example demonstrating smarter getters/setters."
          }
        ]
      },
      {
        "heading": "Using for compatibility",
        "paragraphs": [
          "One of the great uses of accessors is that they allow to take control over a \"regular\" data property at any moment by replacing it with a getter and a setter and tweak its behavior.",
          "Imagine we started implementing user objects using data properties `name` and `age`:",
          "...But sooner or later, things may change. Instead of `age` we may decide to store `birthday`, because it's more precise and convenient:",
          "Now what to do with the old code that still uses `age` property?",
          "We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people. And besides, `age` is a nice thing to have in `user`, right?"
        ],
        "codeExamples": [
          {
            "title": "Using for compatibility",
            "code": "function User(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nlet john = new User(\"John\", 25);\n\nalert( john.age ); // 25",
            "explanation": "Example demonstrating using for compatibility."
          },
          {
            "title": "Using for compatibility",
            "code": "function User(name, birthday) {\n  this.name = name;\n  this.birthday = birthday;\n}\n\nlet john = new User(\"John\", new Date(1992, 6, 1));",
            "explanation": "Example demonstrating using for compatibility."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Property Accessors",
        "description": "Apply your understanding of Property Accessors. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Property Accessors\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Property Accessors\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Property Accessors in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for property accessors.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Property Accessors is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Property Accessors?",
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
      "Property Accessors is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying property accessors.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "property-accessors"
    ],
    "slug": "property-accessors"
  },
  {
    "title": "Prototype Inheritance",
    "description": "In programming, we often want to take something and extend it.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In programming, we often want to take something and extend it.",
          "For instance, we have a `user` object with its properties and methods, and want to make `admin` and `guest` as slightly modified variants of it. We'd like to reuse what we have in `user`, not copy/reimplement its methods, just build a new object on top of it.",
          "*Prototypal inheritance* is a language feature that helps in that."
        ]
      },
      {
        "heading": "[[Prototype]]",
        "paragraphs": [
          "In JavaScript, objects have a special hidden property `[[Prototype]]` (as named in the specification), that is either `null` or references another object. That object is called \"a prototype\":",
          "!prototype",
          "When we read a property from `object`, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called \"prototypal inheritance\". And soon we'll study many examples of such inheritance, as well as cooler language features built upon it.",
          "The property `[[Prototype]]` is internal and hidden, but there are many ways to set it.",
          "One of them is to use the special name `__proto__`, like this:"
        ],
        "codeExamples": [
          {
            "title": "[[Prototype]]",
            "code": "let animal = {\n  eats: true\n};\nlet rabbit = {\n  jumps: true\n};\n\n*!*\nrabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal\n*/!*",
            "explanation": "Example demonstrating [[prototype]]."
          },
          {
            "title": "[[Prototype]]",
            "code": "let animal = {\n  eats: true\n};\nlet rabbit = {\n  jumps: true\n};\n\n*!*\nrabbit.__proto__ = animal; // (*)\n*/!*\n\n// we can find both properties in rabbit now:\n*!*\nalert( rabbit.eats ); // true (**)\n*/!*\nalert( rabbit.jumps ); // true",
            "explanation": "Example demonstrating [[prototype]]."
          }
        ]
      },
      {
        "heading": "Writing doesn't use prototype",
        "paragraphs": [
          "The prototype is only used for reading properties.",
          "Write/delete operations work directly with the object.",
          "In the example below, we assign its own `walk` method to `rabbit`:",
          "From now on, `rabbit.walk()` call finds the method immediately in the object and executes it, without using the prototype:",
          "![](proto-animal-rabbit-walk-2.svg)"
        ],
        "codeExamples": [
          {
            "title": "Writing doesn't use prototype",
            "code": "let animal = {\n  eats: true,\n  walk() {\n    /* this method won't be used by rabbit */  \n  }\n};\n\nlet rabbit = {\n  __proto__: animal\n};\n\n*!*\nrabbit.walk = function() {\n  alert(\"Rabbit! Bounce-bounce!\");\n};\n*/!*\n\nrabbit.walk(); // Rabbit! Bounce-bounce!",
            "explanation": "Example demonstrating writing doesn't use prototype."
          },
          {
            "title": "Writing doesn't use prototype",
            "code": "let user = {\n  name: \"John\",\n  surname: \"Smith\",\n\n  set fullName(value) {\n    [this.name, this.surname] = value.split(\" \");\n  },\n\n  get fullName() {\n    return `${this.name} ${this.surname}`;\n  }\n};\n\nlet admin = {\n  __proto__: user,\n  isAdmin: true\n};\n\nalert(admin.fullName); // John Smith (*)\n\n// setter triggers!\nadmin.fullName = \"Alice Cooper\"; // (**)\n\nalert(admin.fullName); // Alice Cooper, state of admin modified\nalert(user.fullName); // John Smith, state of user protected",
            "explanation": "Example demonstrating writing doesn't use prototype."
          }
        ]
      },
      {
        "heading": "The value of \"this\"",
        "paragraphs": [
          "An interesting question may arise in the example above: what's the value of `this` inside `set fullName(value)`? Where are the properties `this.name` and `this.surname` written: into `user` or `admin`?",
          "The answer is simple: `this` is not affected by prototypes at all.",
          "**No matter where the method is found: in an object or its prototype. In a method call, `this` is always the object before the dot.**",
          "So, the setter call `admin.fullName=` uses `admin` as `this`, not `user`.",
          "That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object."
        ],
        "codeExamples": [
          {
            "title": "The value of \"this\"",
            "code": "// animal has methods\nlet animal = {\n  walk() {\n    if (!this.isSleeping) {\n      alert(`I walk`);\n    }\n  },\n  sleep() {\n    this.isSleeping = true;\n  }\n};\n\nlet rabbit = {\n  name: \"White Rabbit\",\n  __proto__: animal\n};\n\n// modifies rabbit.isSleeping\nrabbit.sleep();\n\nalert(rabbit.isSleeping); // true\nalert(animal.isSleeping); // undefined (no such property in the prototype)",
            "explanation": "Example demonstrating the value of \"this\"."
          }
        ]
      },
      {
        "heading": "for..in loop",
        "paragraphs": [
          "The `for..in` loop iterates over inherited properties too.",
          "For instance:",
          "If that's not what we want, and we'd like to exclude inherited properties, there's a built-in method obj.hasOwnProperty(key): it returns `true` if `obj` has its own (not inherited) property named `key`.",
          "So we can filter out inherited properties (or do something else with them):",
          "Here we have the following inheritance chain: `rabbit` inherits from `animal`, that inherits from `Object.prototype` (because `animal` is a literal object `{...}`, so it's by default), and then `null` above it:"
        ],
        "codeExamples": [
          {
            "title": "for..in loop",
            "code": "let animal = {\n  eats: true\n};\n\nlet rabbit = {\n  jumps: true,\n  __proto__: animal\n};\n\n*!*\n// Object.keys only returns own keys\nalert(Object.keys(rabbit)); // jumps\n*/!*\n\n*!*\n// for..in loops over both own and inherited keys\nfor(let prop in rabbit) alert(prop); // jumps, then eats\n*/!*",
            "explanation": "Example demonstrating for..in loop."
          },
          {
            "title": "for..in loop",
            "code": "let animal = {\n  eats: true\n};\n\nlet rabbit = {\n  jumps: true,\n  __proto__: animal\n};\n\nfor(let prop in rabbit) {\n  let isOwn = rabbit.hasOwnProperty(prop);\n\n  if (isOwn) {\n    alert(`Our: ${prop}`); // Our: jumps\n  } else {\n    alert(`Inherited: ${prop}`); // Inherited: eats\n  }\n}",
            "explanation": "Example demonstrating for..in loop."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "In JavaScript, all objects have a hidden `[[Prototype]]` property that's either another object or `null`.",
          "We can use `obj.__proto__` to access it (a historical getter/setter, there are other ways, to be covered soon).",
          "The object referenced by `[[Prototype]]` is called a \"prototype\".",
          "If we want to read a property of `obj` or call a method, and it doesn't exist, then JavaScript tries to find it in the prototype.",
          "Write/delete operations act directly on the object, they don't use the prototype (assuming it's a data property, not a setter)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Working with prototype",
        "description": "Here's the code that creates a pair of objects, then modifies them. Which values are shown in the process? ```js let animal = { jumps: null }; let rabbit = { __proto__: animal, jumps: true }; alert( rabbit.jumps ); // ? (1) delete rabbit.jumps; alert( rabbit.jumps ); // ? (2) delete animal.jumps; al",
        "starterCode": "let animal = {\n  jumps: null\n};\nlet rabbit = {\n  __proto__: animal,\n  jumps: true\n};\n\nalert( rabbit.jumps ); // ? (1)\n\ndelete rabbit.jumps;\n\nalert( rabbit.jumps ); // ? (2)\n\ndelete animal.jumps;\n\nalert( rabbit.jumps ); // ? (3)",
        "solution": "let animal = {\n  jumps: null\n};\nlet rabbit = {\n  __proto__: animal,\n  jumps: true\n};\n\nalert( rabbit.jumps ); // ? (1)\n\ndelete rabbit.jumps;\n\nalert( rabbit.jumps ); // ? (2)\n\ndelete animal.jumps;\n\nalert( rabbit.jumps ); // ? (3)",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Searching algorithm",
        "description": "The task has two parts. Given the following objects: ```js let head = { glasses: 1 }; let table = { pen: 3 }; let bed = { sheet: 1, pillow: 2 }; let pockets = { money: 2000 }; ``` 1. Use `__proto__` to assign prototypes in a way that any property lookup will follow the path: `pockets` -> `bed` -> `t",
        "starterCode": "let head = {\n  glasses: 1\n};\n\nlet table = {\n  pen: 3\n};\n\nlet bed = {\n  sheet: 1,\n  pillow: 2\n};\n\nlet pockets = {\n  money: 2000\n};",
        "solution": "let head = {\n  glasses: 1\n};\n\nlet table = {\n  pen: 3\n};\n\nlet bed = {\n  sheet: 1,\n  pillow: 2\n};\n\nlet pockets = {\n  money: 2000\n};",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Where does it write?",
        "description": "We have `rabbit` inheriting from `animal`. If we call `rabbit.eat()`, which object receives the `full` property: `animal` or `rabbit`? ```js let animal = { eat() { this.full = true; } }; let rabbit = { __proto__: animal }; rabbit.eat(); ```",
        "starterCode": "let animal = {\n  eat() {\n    this.full = true;\n  }\n};\n\nlet rabbit = {\n  __proto__: animal\n};\n\nrabbit.eat();",
        "solution": "let animal = {\n  eat() {\n    this.full = true;\n  }\n};\n\nlet rabbit = {\n  __proto__: animal\n};\n\nrabbit.eat();",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Prototype Inheritance in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for prototype inheritance.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Prototype Inheritance is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Prototype Inheritance?",
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
      "Prototype Inheritance is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying prototype inheritance.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "prototype-inheritance"
    ],
    "slug": "prototype-inheritance"
  },
  {
    "title": "Function Prototype",
    "description": "Remember, new objects can be created with a constructor function, like `new F()`.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Remember, new objects can be created with a constructor function, like `new F()`.",
          "If `F.prototype` is an object, then the `new` operator uses it to set `[[Prototype]]` for the new object.",
          "Please note that `F.prototype` here means a regular property named `\"prototype\"` on `F`. It sounds something similar to the term \"prototype\", but here we really mean a regular property with this name.",
          "Here's the example:",
          "Setting `Rabbit.prototype = animal` literally states the following: \"When a `new Rabbit` is created, assign its `[[Prototype]]` to `animal`\"."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language.\n\nBut in the old times, there was no direct access to it. The only thing that worked reliably was a `\"prototype\"` property of the constructor function, described in this chapter. So there are many scripts that still use it.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let animal = {\n  eats: true\n};\n\nfunction Rabbit(name) {\n  this.name = name;\n}\n\n*!*\nRabbit.prototype = animal;\n*/!*\n\nlet rabbit = new Rabbit(\"White Rabbit\"); //  rabbit.__proto__ == animal\n\nalert( rabbit.eats ); // true",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Default F.prototype, constructor property",
        "paragraphs": [
          "Every function has the `\"prototype\"` property even if we don't supply it.",
          "The default `\"prototype\"` is an object with the only property `constructor` that points back to the function itself.",
          "Like this:",
          "![](function-prototype-constructor.svg)",
          "We can check it:"
        ],
        "codeExamples": [
          {
            "title": "Default F.prototype, constructor property",
            "code": "function Rabbit() {}\n\n/* default prototype\nRabbit.prototype = { constructor: Rabbit };\n*/",
            "explanation": "Example demonstrating default f.prototype, constructor property."
          },
          {
            "title": "Default F.prototype, constructor property",
            "code": "function Rabbit() {}\n// by default:\n// Rabbit.prototype = { constructor: Rabbit }\n\nalert( Rabbit.prototype.constructor == Rabbit ); // true",
            "explanation": "Example demonstrating default f.prototype, constructor property."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "In this chapter we briefly described the way of setting a `[[Prototype]]` for objects created via a constructor function. Later we'll see more advanced programming patterns that rely on it.",
          "Everything is quite simple, just a few notes to make things clear:",
          "On regular objects the `prototype` is nothing special:",
          "By default all functions have `F.prototype = { constructor: F }`, so we can get the constructor of an object by accessing its `\"constructor\"` property."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let user = {\n  name: \"John\",\n  prototype: \"Bla-bla\" // no magic at all\n};",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "The `F.prototype` property (don't mistake it for `[[Prototype]]`) sets `[[Prototype]]` of new objects when `new F()` is called.",
          "The value of `F.prototype` should be either an object or `null`: other values won't work.",
          "The `\"prototype\"` property only has such a special effect when set on a constructor function, and invoked with `new`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Changing \"prototype\"",
        "description": "In the code below we create `new Rabbit`, and then try to modify its prototype. In the start, we have this code: ```js run function Rabbit() {} Rabbit.prototype = { eats: true }; let rabbit = new Rabbit(); alert( rabbit.eats ); // true ``` 1. We added one more string (emphasized). What will `alert` ",
        "starterCode": "1. We added one more string (emphasized). What will `alert` show now?",
        "solution": "1. We added one more string (emphasized). What will `alert` show now?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Create an object with the same constructor",
        "description": "Imagine, we have an arbitrary object `obj`, created by a constructor function -- we don't know which one, but we'd like to create a new object using it. Can we do it like that? ```js let obj2 = new obj.constructor(); ``` Give an example of a constructor function for `obj` which lets such code work r",
        "starterCode": "let obj2 = new obj.constructor();",
        "solution": "It worked, because `User.prototype.constructor == User`.\n\n..But if someone, so to speak, overwrites `User.prototype` and forgets to recreate `constructor` to reference `User`, then it would fail.\n\nFor instance:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Function Prototype in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for function prototype.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Function Prototype is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Function Prototype?",
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
      "Function Prototype is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying function prototype.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "function-prototype"
    ],
    "slug": "function-prototype"
  },
  {
    "title": "Native Prototypes",
    "description": "The `\"prototype\"` property is widely used by the core of JavaScript itself. All built-in constructor functions use it.",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The `\"prototype\"` property is widely used by the core of JavaScript itself. All built-in constructor functions use it.",
          "First we'll look at the details, and then how to use it for adding new capabilities to built-in objects."
        ]
      },
      {
        "heading": "Object.prototype",
        "paragraphs": [
          "Let's say we output an empty object:",
          "Where's the code that generates the string `\"[object Object]\"`? That's a built-in `toString` method, but where is it? The `obj` is empty!",
          "...But the short notation `obj = {}` is the same as `obj = new Object()`, where `Object` is a built-in object constructor function, with its own `prototype` referencing a huge object with `toString` and other methods.",
          "Here's what's going on:",
          "![](object-prototype.svg)"
        ],
        "codeExamples": [
          {
            "title": "Object.prototype",
            "code": "let obj = {};\nalert( obj ); // \"[object Object]\" ?",
            "explanation": "Example demonstrating object.prototype."
          },
          {
            "title": "Object.prototype",
            "code": "let obj = {};\n\nalert(obj.__proto__ === Object.prototype); // true\n\nalert(obj.toString === obj.__proto__.toString); //true\nalert(obj.toString === Object.prototype.toString); //true",
            "explanation": "Example demonstrating object.prototype."
          }
        ]
      },
      {
        "heading": "Other built-in prototypes",
        "paragraphs": [
          "Other built-in objects such as `Array`, `Date`, `Function` and others also keep methods in prototypes.",
          "For instance, when we create an array `[1, 2, 3]`, the default `new Array()` constructor is used internally. So `Array.prototype` becomes its prototype and provides methods. That's very memory-efficient.",
          "By specification, all of the built-in prototypes have `Object.prototype` on the top. That's why some people say that \"everything inherits from objects\".",
          "Here's the overall picture (for 3 built-ins to fit):",
          "![](native-prototypes-classes.svg)"
        ],
        "codeExamples": [
          {
            "title": "Other built-in prototypes",
            "code": "let arr = [1, 2, 3];\n\n// it inherits from Array.prototype?\nalert( arr.__proto__ === Array.prototype ); // true\n\n// then from Object.prototype?\nalert( arr.__proto__.__proto__ === Object.prototype ); // true\n\n// and null on the top.\nalert( arr.__proto__.__proto__.__proto__ ); // null",
            "explanation": "Example demonstrating other built-in prototypes."
          },
          {
            "title": "Other built-in prototypes",
            "code": "let arr = [1, 2, 3]\nalert(arr); // 1,2,3 <-- the result of Array.prototype.toString",
            "explanation": "Example demonstrating other built-in prototypes."
          }
        ]
      },
      {
        "heading": "Primitives",
        "paragraphs": [
          "The most intricate thing happens with strings, numbers and booleans.",
          "As we remember, they are not objects. But if we try to access their properties, temporary wrapper objects are created using built-in constructors `String`, `Number` and `Boolean`. They provide the methods and disappear.",
          "These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly this way. Methods of these objects also reside in prototypes, available as `String.prototype`, `Number.prototype` and `Boolean.prototype`."
        ],
        "codeExamples": [
          {
            "title": "Primitives",
            "code": "Special values `null` and `undefined` stand apart. They have no object wrappers, so methods and properties are not available for them. And there are no corresponding prototypes either.",
            "explanation": "Example demonstrating primitives."
          }
        ]
      },
      {
        "heading": "Changing native prototypes [#native-prototype-change]",
        "paragraphs": [
          "Native prototypes can be modified. For instance, if we add a method to `String.prototype`, it becomes available to all strings:",
          "During the process of development, we may have ideas for new built-in methods we'd like to have, and we may be tempted to add them to native prototypes. But that is generally a bad idea.",
          "**In modern programming, there is only one case where modifying native prototypes is approved. That's polyfilling.**",
          "Polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, but is not yet supported by a particular JavaScript engine.",
          "We may then implement it manually and populate the built-in prototype with it."
        ],
        "codeExamples": [
          {
            "title": "Changing native prototypes [#native-prototype-change]",
            "code": "String.prototype.show = function() {\n  alert(this);\n};\n\n\"BOOM!\".show(); // BOOM!",
            "explanation": "Example demonstrating changing native prototypes [#native-prototype-change]."
          },
          {
            "title": "Changing native prototypes [#native-prototype-change]",
            "code": "Prototypes are global, so it's easy to get a conflict. If two libraries add a method `String.prototype.show`, then one of them will be overwriting the method of the other.\n\nSo, generally, modifying a native prototype is considered a bad idea.",
            "explanation": "Example demonstrating changing native prototypes [#native-prototype-change]."
          }
        ]
      },
      {
        "heading": "Borrowing from prototypes",
        "paragraphs": [
          "In the chapter we talked about method borrowing.",
          "That's when we take a method from one object and copy it into another.",
          "Some methods of native prototypes are often borrowed.",
          "For instance, if we're making an array-like object, we may want to copy some `Array` methods to it.",
          "E.g."
        ],
        "codeExamples": [
          {
            "title": "Borrowing from prototypes",
            "code": "let obj = {\n  0: \"Hello\",\n  1: \"world!\",\n  length: 2,\n};\n\n*!*\nobj.join = Array.prototype.join;\n*/!*\n\nalert( obj.join(',') ); // Hello,world!",
            "explanation": "Example demonstrating borrowing from prototypes."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "All built-in objects follow the same pattern:",
          "The methods are stored in the prototype (`Array.prototype`, `Object.prototype`, `Date.prototype`, etc.)",
          "The object itself stores only the data (array items, object properties, the date)",
          "Primitives also store methods in prototypes of wrapper objects: `Number.prototype`, `String.prototype` and `Boolean.prototype`. Only `undefined` and `null` do not have wrapper objects",
          "Built-in prototypes can be modified or populated with new methods. But it's not recommended to change them. The only allowable case is probably when we add-in a new standard, but it's not yet supported by the JavaScript engine"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Add method \"f.defer(ms)\" to functions",
        "description": "Add to the prototype of all functions the method `defer(ms)`, that runs the function after `ms` milliseconds. After you do it, such code should work: ```js function f() { alert(\"Hello!\"); } f.defer(1000); // shows \"Hello!\" after 1 second ```",
        "starterCode": "function f() {\n  alert(\"Hello!\");\n}\n\nf.defer(1000); // shows \"Hello!\" after 1 second",
        "solution": "function f() {\n  alert(\"Hello!\");\n}\n\nf.defer(1000); // shows \"Hello!\" after 1 second",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Add the decorating \"defer()\" to functions",
        "description": "Add to the prototype of all functions the method `defer(ms)`, that returns a wrapper, delaying the call by `ms` milliseconds. Here's an example of how it should work: ```js function f(a, b) { alert( a + b ); } f.defer(1000)(1, 2); // shows 3 after 1 second ``` Please note that the arguments should b",
        "starterCode": "function f(a, b) {\n  alert( a + b );\n}\n\nf.defer(1000)(1, 2); // shows 3 after 1 second",
        "solution": "Please note: we use `this` in `f.apply` to make our decoration work for object methods.\n\nSo if the wrapper function is called as an object method, then `this` is passed to the original method `f`.",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Native Prototypes in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for native prototypes.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Native Prototypes is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Native Prototypes?",
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
      "Native Prototypes is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying native prototypes.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "native-prototypes"
    ],
    "slug": "native-prototypes"
  },
  {
    "title": "Prototype Methods",
    "description": "In the first chapter of this section, we mentioned that there are modern methods to setup a prototype.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In the first chapter of this section, we mentioned that there are modern methods to setup a prototype.",
          "Setting or reading the prototype with `obj.__proto__` is considered outdated and somewhat deprecated (moved to the so-called \"Annex B\" of the JavaScript standard, meant for browsers only).",
          "The modern methods to get/set a prototype are:",
          "The only usage of `__proto__`, that's not frowned upon, is as a property when creating a new object: `{ __proto__: ... }`.",
          "Although, there's a special method for this too:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let animal = {\n  eats: true\n};\n\n// create a new object with animal as a prototype\n*!*\nlet rabbit = Object.create(animal); // same as {__proto__: animal}\n*/!*\n\nalert(rabbit.eats); // true\n\n*!*\nalert(Object.getPrototypeOf(rabbit) === animal); // true\n*/!*\n\n*!*\nObject.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}\n*/!*",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let animal = {\n  eats: true\n};\n\nlet rabbit = Object.create(animal, {\n  jumps: {\n    value: true\n  }\n});\n\nalert(rabbit.jumps); // true",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "Object.getPrototypeOf(obj) -- returns the `[[Prototype]]` of `obj`.",
          "Object.setPrototypeOf(obj, proto) -- sets the `[[Prototype]]` of `obj` to `proto`.",
          "[Object.create(proto[, descriptors])](mdn:js/Object/create) -- creates an empty object with given `proto` as `[[Prototype]]` and optional property descriptors."
        ]
      },
      {
        "heading": "Brief history",
        "paragraphs": [
          "There're so many ways to manage `[[Prototype]]`. How did that happen? Why?",
          "That's for historical reasons.",
          "The prototypal inheritance was in the language since its dawn, but the ways to manage it evolved over time.",
          "Why was `__proto__` replaced by the functions `getPrototypeOf/setPrototypeOf`?",
          "Why was `__proto__` partially rehabilitated and its usage allowed in `{...}`, but not as a getter/setter?"
        ],
        "codeExamples": [
          {
            "title": "Brief history",
            "code": "Technically, we can get/set `[[Prototype]]` at any time. But usually we only set it once at the object creation time and don't modify it anymore: `rabbit` inherits from `animal`, and that is not going to change.\n\nAnd JavaScript engines are highly optimized for this. Changing a prototype \"on-the-fly\" with `Object.setPrototypeOf` or `obj.__proto__=` is a very slow operation as it breaks internal optimizations for object property access operations. So avoid it unless you know what you're doing, or JavaScript speed totally doesn't matter for you.",
            "explanation": "Example demonstrating brief history."
          }
        ],
        "bulletPoints": [
          "The `prototype` property of a constructor function has worked since very ancient times. It's the oldest way to create objects with a given prototype.",
          "Later, in the year 2012, `Object.create` appeared in the standard. It gave the ability to create objects with a given prototype, but did not provide the ability to get/set it. Some browsers implemented the non-standard `__proto__` accessor that allowed the user to get/set a prototype at any time, to give more flexibility to developers.",
          "Later, in the year 2015, `Object.setPrototypeOf` and `Object.getPrototypeOf` were added to the standard, to perform the same functionality as `__proto__`. As `__proto__` was de-facto implemented everywhere, it was kind-of deprecated and made its way to the Annex B of the standard, that is: optional for non-browser environments.",
          "Later, in the year 2022, it was officially allowed to use `__proto__` in object literals `{...}` (moved out of Annex B), but not as a getter/setter `obj.__proto__` (still in Annex B)."
        ]
      },
      {
        "heading": "\"Very plain\" objects [#very-plain]",
        "paragraphs": [
          "As we know, objects can be used as associative arrays to store key/value pairs.",
          "...But if we try to store *user-provided* keys in it (for instance, a user-entered dictionary), we can see an interesting glitch: all keys work fine except `\"__proto__\"`.",
          "Check out the example:",
          "Here, if the user types in `__proto__`, the assignment in line 4 is ignored!",
          "That could surely be surprising for a non-developer, but pretty understandable for us. The `__proto__` property is special: it must be either an object or `null`. A string can not become a prototype. That's why assigning a string to `__proto__` is ignored."
        ],
        "codeExamples": [
          {
            "title": "\"Very plain\" objects [#very-plain]",
            "code": "let obj = {};\n\nlet key = prompt(\"What's the key?\", \"__proto__\");\nobj[key] = \"some value\";\n\nalert(obj[key]); // [object Object], not \"some value\"!",
            "explanation": "Example demonstrating \"very plain\" objects [#very-plain]."
          },
          {
            "title": "\"Very plain\" objects [#very-plain]",
            "code": "let map = new Map();\n\nlet key = prompt(\"What's the key?\", \"__proto__\");\nmap.set(key, \"some value\");\n\nalert(map.get(key)); // \"some value\" (as intended)",
            "explanation": "Example demonstrating \"very plain\" objects [#very-plain]."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The `Object.create` provides an easy way to shallow-copy an object with all descriptors:",
          "let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));",
          "These objects are used as dictionaries, to store any (possibly user-generated) keys.",
          "Normally, objects inherit built-in methods and `__proto__` getter/setter from `Object.prototype`, making corresponding keys \"occupied\" and potentially causing side effects. With `null` prototype, objects are truly empty."
        ],
        "bulletPoints": [
          "To create an object with the given prototype, use:",
          "literal syntax: `{ __proto__: ... }`, allows to specify multiple properties",
          "or [Object.create(proto[, descriptors])](mdn:js/Object/create), allows to specify property descriptors.",
          "Modern methods to get/set the prototype are:",
          "Object.getPrototypeOf(obj) -- returns the `[[Prototype]]` of `obj` (same as `__proto__` getter)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Add toString to the dictionary",
        "description": "There's an object `dictionary`, created as `Object.create(null)`, to store any `key/value` pairs. Add method `dictionary.toString()` into it, that should return a comma-delimited list of keys. Your `toString` should not show up in `for..in` over the object. Here's how it should work: ```js let dicti",
        "starterCode": "let dictionary = Object.create(null);\n\n*!*\n// your code to add dictionary.toString method\n*/!*\n\n// add some data\ndictionary.apple = \"Apple\";\ndictionary.__proto__ = \"test\"; // __proto__ is a regular property key here\n\n// only apple and __proto__ are in the loop\nfor(let key in dictionary) {\n  alert(key); // \"apple\", then \"__proto__\"\n}  \n\n// your toString in action\nalert(dictionary); // \"apple,__proto__\"",
        "solution": "let dictionary = Object.create(null);\n\n*!*\n// your code to add dictionary.toString method\n*/!*\n\n// add some data\ndictionary.apple = \"Apple\";\ndictionary.__proto__ = \"test\"; // __proto__ is a regular property key here\n\n// only apple and __proto__ are in the loop\nfor(let key in dictionary) {\n  alert(key); // \"apple\", then \"__proto__\"\n}  \n\n// your toString in action\nalert(dictionary); // \"apple,__proto__\"",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "The difference between calls",
        "description": "Let's create a new `rabbit` object: ```js function Rabbit(name) { this.name = name; } Rabbit.prototype.sayHi = function() { alert(this.name); }; let rabbit = new Rabbit(\"Rabbit\"); ``` These calls do the same thing or not? ```js rabbit.sayHi(); Rabbit.prototype.sayHi(); Object.getPrototypeOf(rabbit).",
        "starterCode": "function Rabbit(name) {\n  this.name = name;\n}\nRabbit.prototype.sayHi = function() {\n  alert(this.name);\n};\n\nlet rabbit = new Rabbit(\"Rabbit\");",
        "solution": "function Rabbit(name) {\n  this.name = name;\n}\nRabbit.prototype.sayHi = function() {\n  alert(this.name);\n};\n\nlet rabbit = new Rabbit(\"Rabbit\");",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Prototype Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for prototype methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Prototype Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Prototype Methods?",
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
      "Prototype Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying prototype methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "prototype-methods"
    ],
    "slug": "prototype-methods"
  }
];
