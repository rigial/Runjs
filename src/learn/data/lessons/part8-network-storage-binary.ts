import type { Lesson } from '../../types';

export const part8Lessons: Lesson[] = [
  {
    "title": "Fetch",
    "description": "JavaScript can send network requests to the server and load new information whenever it's needed.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "JavaScript can send network requests to the server and load new information whenever it's needed.",
          "For example, we can use a network request to:",
          "...And all of that without reloading the page!",
          "There's an umbrella term \"AJAX\" (abbreviated Asynchronous JavaScript And XML) for network requests from JavaScript. We don't have to use XML though: the term comes from old times, that's why that word is there. You may have heard that term already.",
          "There are multiple ways to send a network request and get information from the server."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let promise = fetch(url, [options])",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let response = await fetch(url);\n\nif (response.ok) { // if HTTP-status is 200-299\n  // get the response body (the method explained below)\n  let json = await response.json();\n} else {\n  alert(\"HTTP-Error: \" + response.status);\n}",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "Submit an order,",
          "Load user information,",
          "Receive latest updates from the server,",
          "...etc.",
          "**`url`** -- the URL to access."
        ]
      },
      {
        "heading": "Response headers",
        "paragraphs": [
          "The response headers are available in a Map-like headers object in `response.headers`.",
          "It's not exactly a Map, but it has similar methods to get individual headers by name or iterate over them:"
        ],
        "codeExamples": [
          {
            "title": "Response headers",
            "code": "let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');\n\n// get one header\nalert(response.headers.get('Content-Type')); // application/json; charset=utf-8\n\n// iterate over all headers\nfor (let [key, value] of response.headers) {\n  alert(`${key} = ${value}`);\n}",
            "explanation": "Example demonstrating response headers."
          }
        ]
      },
      {
        "heading": "Request headers",
        "paragraphs": [
          "To set a request header in `fetch`, we can use the `headers` option. It has an object with outgoing headers, like this:",
          "...But there's a list of forbidden HTTP headers that we can't set:",
          "These headers ensure proper and safe HTTP, so they are controlled exclusively by the browser."
        ],
        "codeExamples": [
          {
            "title": "Request headers",
            "code": "let response = fetch(protectedUrl, {\n  headers: {\n    Authentication: 'secret'\n  }\n});",
            "explanation": "Example demonstrating request headers."
          }
        ],
        "bulletPoints": [
          "`Accept-Charset`, `Accept-Encoding`",
          "`Access-Control-Request-Headers`",
          "`Access-Control-Request-Method`",
          "`Connection`",
          "`Content-Length`"
        ]
      },
      {
        "heading": "POST requests",
        "paragraphs": [
          "To make a `POST` request, or a request with another method, we need to use `fetch` options:",
          "The JSON format is used most of the time.",
          "For example, this code submits `user` object as JSON:",
          "Please note, if the request `body` is a string, then `Content-Type` header is set to `text/plain;charset=UTF-8` by default.",
          "But, as we're going to send JSON, we use `headers` option to send `application/json` instead, the correct `Content-Type` for JSON-encoded data."
        ],
        "codeExamples": [
          {
            "title": "POST requests",
            "code": "let user = {\n  name: 'John',\n  surname: 'Smith'\n};\n\n*!*\nlet response = await fetch('/article/fetch/post/user', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json;charset=utf-8'\n  },\n  body: JSON.stringify(user)\n});\n*/!*\n\nlet result = await response.json();\nalert(result.message);",
            "explanation": "Example demonstrating post requests."
          }
        ],
        "bulletPoints": [
          "**`method`** -- HTTP-method, e.g. `POST`,",
          "**`body`** -- the request body, one of:",
          "a string (e.g. JSON-encoded),",
          "`FormData` object, to submit the data as `multipart/form-data`,",
          "`Blob`/`BufferSource` to send binary data,"
        ]
      },
      {
        "heading": "Sending an image",
        "paragraphs": [
          "We can also submit binary data with `fetch` using `Blob` or `BufferSource` objects.",
          "In this example, there's a `` where we can draw by moving a mouse over it. A click on the \"submit\" button sends the image to the server:",
          "Please note, here we don't set `Content-Type` header manually, because a `Blob` object has a built-in type (here `image/png`, as generated by `toBlob`). For `Blob` objects that type becomes the value of `Content-Type`.",
          "The `submit()` function can be rewritten without `async/await` like this:"
        ],
        "codeExamples": [
          {
            "title": "Sending an image",
            "code": "<body style=\"margin:0\">\n  <canvas id=\"canvasElem\" width=\"100\" height=\"80\" style=\"border:1px solid\"></canvas>\n\n  <input type=\"button\" value=\"Submit\" onclick=\"submit()\">\n\n  <script>\n    canvasElem.onmousemove = function(e) {\n      let ctx = canvasElem.getContext('2d');\n      ctx.lineTo(e.clientX, e.clientY);\n      ctx.stroke();\n    };\n\n    async function submit() {\n      let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));\n      let response = await fetch('/article/fetch/post/image', {\n        method: 'POST',\n        body: blob\n      });\n\n      // the server responds with confirmation and the image size\n      let result = await response.json();\n      alert(result.message);\n    }\n\n  </script>\n</body>",
            "explanation": "Example demonstrating sending an image."
          },
          {
            "title": "Sending an image",
            "code": "function submit() {\n  canvasElem.toBlob(function(blob) {        \n    fetch('/article/fetch/post/image', {\n      method: 'POST',\n      body: blob\n    })\n      .then(response => response.json())\n      .then(result => alert(JSON.stringify(result, null, 2)))\n  }, 'image/png');\n}",
            "explanation": "Example demonstrating sending an image."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "A typical fetch request consists of two `await` calls:",
          "Or, without `await`:",
          "Response properties:",
          "Methods to get response body:",
          "Fetch options so far:"
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let response = await fetch(url, options); // resolves with response headers\nlet result = await response.json(); // read body as json",
            "explanation": "Example demonstrating summary."
          },
          {
            "title": "Summary",
            "code": "fetch(url, options)\n  .then(response => response.json())\n  .then(result => /* process result */)",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "`response.status` -- HTTP code of the response,",
          "`response.ok` -- `true` if the status is 200-299.",
          "`response.headers` -- Map-like object with HTTP headers.",
          "**`response.text()`** -- return the response as text,",
          "**`response.json()`** -- parse the response as JSON object,"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Fetch users from GitHub",
        "description": "Create an async function `getUsers(names)`, that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users. The GitHub url with user information for the given `USERNAME` is: `https://api.github.com/users/USERNAME`. There's a test example in the sandbox. Impor",
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
        "question": "What is the primary role of Fetch in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for fetch.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Fetch is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Fetch?",
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
      "Fetch is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying fetch.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "fetch"
    ],
    "slug": "fetch"
  },
  {
    "title": "Formdata",
    "description": "This chapter is about sending HTML forms: with or without files, with additional fields and so on.",
    "difficulty": "intermediate",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "This chapter is about sending HTML forms: with or without files, with additional fields and so on.",
          "FormData objects can help with that. As you might have guessed, it's the object to represent HTML form data.",
          "The constructor is:",
          "If HTML `form` element is provided, it automatically captures its fields.",
          "The special thing about `FormData` is that network methods, such as `fetch`, can accept a `FormData` object as a body. It's encoded and sent out with `Content-Type: multipart/form-data`."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let formData = new FormData([form]);",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Sending a simple form",
        "paragraphs": [
          "Let's send a simple form first.",
          "As you can see, that's almost one-liner:",
          "In this example, the server code is not presented, as it's beyond our scope. The server accepts the POST request and replies \"User saved\"."
        ],
        "codeExamples": [
          {
            "title": "Sending a simple form",
            "code": "<form id=\"formElem\">\n  <input type=\"text\" name=\"name\" value=\"John\">\n  <input type=\"text\" name=\"surname\" value=\"Smith\">\n  <input type=\"submit\">\n</form>\n\n<script>\n  formElem.onsubmit = async (e) => {\n    e.preventDefault();\n\n    let response = await fetch('/article/formdata/post/user', {\n      method: 'POST',\n*!*\n      body: new FormData(formElem)\n*/!*\n    });\n\n    let result = await response.json();\n\n    alert(result.message);\n  };\n</script>",
            "explanation": "Example demonstrating sending a simple form."
          }
        ]
      },
      {
        "heading": "FormData Methods",
        "paragraphs": [
          "We can modify fields in `FormData` with methods:",
          "A form is technically allowed to have many fields with the same `name`, so multiple calls to `append` add more same-named fields.",
          "There's also method `set`, with the same syntax as `append`. The difference is that `.set` removes all fields with the given `name`, and then appends a new field. So it makes sure there's only one field with such `name`, the rest is just like `append`:",
          "Also we can iterate over formData fields using `for..of` loop:"
        ],
        "codeExamples": [
          {
            "title": "FormData Methods",
            "code": "let formData = new FormData();\nformData.append('key1', 'value1');\nformData.append('key2', 'value2');\n\n// List key/value pairs\nfor(let [name, value] of formData) {\n  alert(`${name} = ${value}`); // key1 = value1, then key2 = value2\n}",
            "explanation": "Example demonstrating formdata methods."
          }
        ],
        "bulletPoints": [
          "`formData.append(name, value)` - add a form field with the given `name` and `value`,",
          "`formData.append(name, blob, fileName)` - add a field as if it were ``, the third argument `fileName` sets file name (not form field name), as it were a name of the file in user's filesystem,",
          "`formData.delete(name)` - remove the field with the given `name`,",
          "`formData.get(name)` - get the value of the field with the given `name`,",
          "`formData.has(name)` - if there exists a field with the given `name`, returns `true`, otherwise `false`"
        ]
      },
      {
        "heading": "Sending a form with a file",
        "paragraphs": [
          "The form is always sent as `Content-Type: multipart/form-data`, this encoding allows to send files. So, `` fields are sent also, similar to a usual form submission.",
          "Here's an example with such form:"
        ],
        "codeExamples": [
          {
            "title": "Sending a form with a file",
            "code": "<form id=\"formElem\">\n  <input type=\"text\" name=\"firstName\" value=\"John\">\n  Picture: <input type=\"file\" name=\"picture\" accept=\"image/*\">\n  <input type=\"submit\">\n</form>\n\n<script>\n  formElem.onsubmit = async (e) => {\n    e.preventDefault();\n\n    let response = await fetch('/article/formdata/post/user-avatar', {\n      method: 'POST',\n*!*\n      body: new FormData(formElem)\n*/!*\n    });\n\n    let result = await response.json();\n\n    alert(result.message);\n  };\n</script>",
            "explanation": "Example demonstrating sending a form with a file."
          }
        ]
      },
      {
        "heading": "Sending a form with Blob data",
        "paragraphs": [
          "As we've seen in the chapter , it's easy to send dynamically generated binary data e.g. an image, as `Blob`. We can supply it directly as `fetch` parameter `body`.",
          "In practice though, it's often convenient to send an image not separately, but as a part of the form, with additional fields, such as \"name\" and other metadata.",
          "Also, servers are usually more suited to accept multipart-encoded forms, rather than raw binary data.",
          "This example submits an image from ``, along with some other fields, as a form, using `FormData`:",
          "Please note how the image `Blob` is added:"
        ],
        "codeExamples": [
          {
            "title": "Sending a form with Blob data",
            "code": "<body style=\"margin:0\">\n  <canvas id=\"canvasElem\" width=\"100\" height=\"80\" style=\"border:1px solid\"></canvas>\n\n  <input type=\"button\" value=\"Submit\" onclick=\"submit()\">\n\n  <script>\n    canvasElem.onmousemove = function(e) {\n      let ctx = canvasElem.getContext('2d');\n      ctx.lineTo(e.clientX, e.clientY);\n      ctx.stroke();\n    };\n\n    async function submit() {\n      let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));\n\n*!*\n      let formData = new FormData();\n      formData.append(\"firstName\", \"John\");\n      formData.append(\"image\", imageBlob, \"image.png\");\n*/!*    \n\n      let response = await fetch('/article/formdata/post/image-form', {\n        method: 'POST',\n        body: formData\n      });\n      let result = await response.json();\n      alert(result.message);\n    }\n\n  </script>\n</body>",
            "explanation": "Example demonstrating sending a form with blob data."
          },
          {
            "title": "Sending a form with Blob data",
            "code": "formData.append(\"image\", imageBlob, \"image.png\");",
            "explanation": "Example demonstrating sending a form with blob data."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "FormData objects are used to capture HTML form and submit it using `fetch` or another network method.",
          "We can either create `new FormData(form)` from an HTML form, or create an object without a form at all, and then append fields with methods:",
          "Let's note two peculiarities here:",
          "1. The `set` method removes fields with the same name, `append` doesn't. That's the only difference between them.",
          "2. To send a file, 3-argument syntax is needed, the last argument is a file name, that normally is taken from user filesystem for ``."
        ],
        "bulletPoints": [
          "`formData.append(name, value)`",
          "`formData.append(name, blob, fileName)`",
          "`formData.set(name, value)`",
          "`formData.set(name, blob, fileName)`",
          "`formData.delete(name)`"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Formdata",
        "description": "Apply your understanding of Formdata. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Formdata\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Formdata\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Formdata in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for formdata.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Formdata is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Formdata?",
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
      "Formdata is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying formdata.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "formdata"
    ],
    "slug": "formdata"
  },
  {
    "title": "Fetch Progress",
    "description": "The `fetch` method allows to track *download* progress.",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The `fetch` method allows to track *download* progress.",
          "Please note: there's currently no way for `fetch` to track *upload* progress. For that purpose, please use XMLHttpRequest, we'll cover it later.",
          "To track download progress, we can use `response.body` property. It's a `ReadableStream` -- a special object that provides body chunk-by-chunk, as it comes. Readable streams are described in the Streams API specification.",
          "Unlike `response.text()`, `response.json()` and other methods, `response.body` gives full control over the reading process, and we can count how much is consumed at any moment.",
          "Here's the sketch of code that reads the response from `response.body`:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "// instead of response.json() and other methods\nconst reader = response.body.getReader();\n\n// infinite loop while the body is downloading\nwhile(true) {\n  // done is true for the last chunk\n  // value is Uint8Array of the chunk bytes\n  const {done, value} = await reader.read();\n\n  if (done) {\n    break;\n  }\n\n  console.log(`Received ${value.length} bytes`)\n}",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "Streams API also describes asynchronous iteration over `ReadableStream` with `for await..of` loop, but it's not yet widely supported (see [browser issues](https://github.com/whatwg/streams/issues/778#issuecomment-461341033)), so we use `while` loop.",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "**`done`** -- `true` when the reading is complete, otherwise `false`.",
          "**`value`** -- a typed array of bytes: `Uint8Array`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Fetch Progress",
        "description": "Apply your understanding of Fetch Progress. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Fetch Progress\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Fetch Progress\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Fetch Progress in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for fetch progress.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Fetch Progress is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Fetch Progress?",
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
      "Fetch Progress is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying fetch progress.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "fetch-progress"
    ],
    "slug": "fetch-progress"
  },
  {
    "title": "Fetch Abort",
    "description": "As we know, `fetch` returns a promise. And JavaScript generally has no concept of \"aborting\" a promise. So how can we cancel an ongoing `fetch`? E.g. if the user actions on our sit...",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we know, `fetch` returns a promise. And JavaScript generally has no concept of \"aborting\" a promise. So how can we cancel an ongoing `fetch`? E.g. if the user actions on our site indicate that the `fetch` isn't needed any more.",
          "There's a special built-in object for such purposes: `AbortController`. It can be used to abort not only `fetch`, but other asynchronous tasks as well.",
          "The usage is very straightforward:"
        ]
      },
      {
        "heading": "The AbortController object",
        "paragraphs": [
          "Create a controller:",
          "A controller is an extremely simple object.",
          "When `abort()` is called:",
          "Generally, we have two parties in the process:",
          "1. The one that performs a cancelable operation, it sets a listener on `controller.signal`."
        ],
        "codeExamples": [
          {
            "title": "The AbortController object",
            "code": "let controller = new AbortController();",
            "explanation": "Example demonstrating the abortcontroller object."
          },
          {
            "title": "The AbortController object",
            "code": "let controller = new AbortController();\nlet signal = controller.signal;\n\n// The party that performs a cancelable operation\n// gets the \"signal\" object\n// and sets the listener to trigger when controller.abort() is called\nsignal.addEventListener('abort', () => alert(\"abort!\"));\n\n// The other party, that cancels (at any point later):\ncontroller.abort(); // abort!\n\n// The event triggers and signal.aborted becomes true\nalert(signal.aborted); // true",
            "explanation": "Example demonstrating the abortcontroller object."
          }
        ],
        "bulletPoints": [
          "It has a single method `abort()`,",
          "And a single property `signal` that allows to set event listeners on it.",
          "`controller.signal` emits the `\"abort\"` event.",
          "`controller.signal.aborted` property becomes `true`."
        ]
      },
      {
        "heading": "Using with fetch",
        "paragraphs": [
          "To be able to cancel `fetch`, pass the `signal` property of an `AbortController` as a `fetch` option:",
          "The `fetch` method knows how to work with `AbortController`. It will listen to `abort` events on `signal`.",
          "Now, to abort, call `controller.abort()`:",
          "We're done: `fetch` gets the event from `signal` and aborts the request.",
          "When a fetch is aborted, its promise rejects with an error `AbortError`, so we should handle it, e.g. in `try..catch`."
        ],
        "codeExamples": [
          {
            "title": "Using with fetch",
            "code": "let controller = new AbortController();\nfetch(url, {\n  signal: controller.signal\n});",
            "explanation": "Example demonstrating using with fetch."
          },
          {
            "title": "Using with fetch",
            "code": "controller.abort();",
            "explanation": "Example demonstrating using with fetch."
          }
        ]
      },
      {
        "heading": "AbortController is scalable",
        "paragraphs": [
          "`AbortController` is scalable. It allows to cancel multiple fetches at once.",
          "Here's a sketch of code that fetches many `urls` in parallel, and uses a single controller to abort them all:",
          "If we have our own asynchronous tasks, different from `fetch`, we can use a single `AbortController` to stop those, together with fetches.",
          "We just need to listen to its `abort` event in our tasks:"
        ],
        "codeExamples": [
          {
            "title": "AbortController is scalable",
            "code": "let urls = [...]; // a list of urls to fetch in parallel\n\nlet controller = new AbortController();\n\n// an array of fetch promises\nlet fetchJobs = urls.map(url => fetch(url, {\n  signal: controller.signal\n}));\n\nlet results = await Promise.all(fetchJobs);\n\n// if controller.abort() is called from anywhere,\n// it aborts all fetches",
            "explanation": "Example demonstrating abortcontroller is scalable."
          },
          {
            "title": "AbortController is scalable",
            "code": "let urls = [...];\nlet controller = new AbortController();\n\nlet ourJob = new Promise((resolve, reject) => { // our task\n  ...\n  controller.signal.addEventListener('abort', reject);\n});\n\nlet fetchJobs = urls.map(url => fetch(url, { // fetches\n  signal: controller.signal\n}));\n\n// Wait for fetches and our task in parallel\nlet results = await Promise.all([...fetchJobs, ourJob]);\n\n// if controller.abort() is called from anywhere,\n// it aborts all fetches and ourJob",
            "explanation": "Example demonstrating abortcontroller is scalable."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "`AbortController` is a simple object that generates an `abort` event on its `signal` property when the `abort()` method is called (and also sets `signal.aborted` to `true`).",
          "`fetch` integrates with it: we pass the `signal` property as the option, and then `fetch` listens to it, so it's possible to abort the `fetch`.",
          "We can use `AbortController` in our code. The \"call `abort()`\" -> \"listen to `abort` event\" interaction is simple and universal. We can use it even without `fetch`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Fetch Abort",
        "description": "Apply your understanding of Fetch Abort. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Fetch Abort\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Fetch Abort\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Fetch Abort in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for fetch abort.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Fetch Abort is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Fetch Abort?",
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
      "Fetch Abort is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying fetch abort.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "fetch-abort"
    ],
    "slug": "fetch-abort"
  },
  {
    "title": "Fetch Crossorigin",
    "description": "If we send a `fetch` request to another web-site, it will probably fail.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "If we send a `fetch` request to another web-site, it will probably fail.",
          "For instance, let's try fetching `http://example.com`:",
          "Fetch fails, as expected.",
          "The core concept here is *origin* -- a domain/port/protocol triplet.",
          "Cross-origin requests -- those sent to another domain (even a subdomain) or protocol or port -- require special headers from the remote side."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "try {\n  await fetch('http://example.com');\n} catch(err) {\n  alert(err); // Failed to fetch\n}",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Why is CORS needed? A brief history",
        "paragraphs": [
          "CORS exists to protect the internet from evil hackers.",
          "Seriously. Let's make a very brief historical digression.",
          "**For many years a script from one site could not access the content of another site.**",
          "That simple, yet powerful rule was a foundation of the internet security. E.g. an evil script from website `hacker.com` could not access the user's mailbox at website `gmail.com`. People felt safe.",
          "JavaScript also did not have any special methods to perform network requests at that time. It was a toy language to decorate a web page."
        ]
      },
      {
        "heading": "Using forms",
        "paragraphs": [
          "One way to communicate with another server was to submit a `` there. People submitted it into ``, just to stay on the current page, like this:",
          "So, it was possible to make a GET/POST request to another site, even without networking methods, as forms can send data anywhere. But as it's forbidden to access the content of an `` from another site, it wasn't possible to read the response.",
          "To be precise, there were actually tricks for that, they required special scripts at both the iframe and the page. So the communication with the iframe was technically possible. Right now there's no point to go into details, let these dinosaurs rest in peace."
        ],
        "codeExamples": [
          {
            "title": "Using forms",
            "code": "<!-- form target -->\n*!*\n<iframe name=\"iframe\"></iframe>\n*/!*\n\n<!-- a form could be dynamically generated and submitted by JavaScript -->\n*!*\n<form target=\"iframe\" method=\"POST\" action=\"http://another.com/\u2026\">\n*/!*\n  ...\n</form>",
            "explanation": "Example demonstrating using forms."
          }
        ]
      },
      {
        "heading": "Using scripts",
        "paragraphs": [
          "Another trick was to use a `script` tag. A script could have any `src`, with any domain, like ``. It's possible to execute a script from any website.",
          "If a website, e.g. `another.com` intended to expose data for this kind of access, then a so-called \"JSONP (JSON with padding)\" protocol was used.",
          "Here's how it worked.",
          "Let's say we, at our site, need to get the data from `http://another.com`, such as the weather:",
          "1. First, in advance, we declare a global function to accept the data, e.g. `gotWeather`."
        ]
      },
      {
        "heading": "Safe requests",
        "paragraphs": [
          "There are two types of cross-origin requests:",
          "1. Safe requests.",
          "2. All the others.",
          "Safe Requests are simpler to make, so let's start with them.",
          "A request is safe if it satisfies two conditions:"
        ],
        "bulletPoints": [
          "`Accept`,",
          "`Accept-Language`,",
          "`Content-Language`,",
          "`Content-Type` with the value `application/x-www-form-urlencoded`, `multipart/form-data` or `text/plain`."
        ]
      },
      {
        "heading": "CORS for safe requests",
        "paragraphs": [
          "If a request is cross-origin, the browser always adds the `Origin` header to it.",
          "For instance, if we request `https://anywhere.com/request` from `https://javascript.info/page`, the headers will look like:",
          "As you can see, the `Origin` header contains exactly the origin (domain/protocol/port), without a path.",
          "The server can inspect the `Origin` and, if it agrees to accept such a request, add a special header `Access-Control-Allow-Origin` to the response. That header should contain the allowed origin (in our case `https://javascript.info`), or a star `*`. Then the response is successful, otherwise it's an error.",
          "The browser plays the role of a trusted mediator here:"
        ],
        "codeExamples": [
          {
            "title": "CORS for safe requests",
            "code": "GET /request\nHost: anywhere.com\n*!*\nOrigin: https://javascript.info\n*/!*\n...",
            "explanation": "Example demonstrating cors for safe requests."
          },
          {
            "title": "CORS for safe requests",
            "code": "200 OK\nContent-Type:text/html; charset=UTF-8\n*!*\nAccess-Control-Allow-Origin: https://javascript.info\n*/!*",
            "explanation": "Example demonstrating cors for safe requests."
          }
        ]
      },
      {
        "heading": "Response headers",
        "paragraphs": [
          "For cross-origin request, by default JavaScript may only access so-called \"safe\" response headers:",
          "Accessing any other response header causes an error.",
          "To grant JavaScript access to any other response header, the server must send the `Access-Control-Expose-Headers` header. It contains a comma-separated list of unsafe header names that should be made accessible.",
          "For example:",
          "With such an `Access-Control-Expose-Headers` header, the script is allowed to read the `Content-Encoding` and `API-Key` headers of the response."
        ],
        "codeExamples": [
          {
            "title": "Response headers",
            "code": "200 OK\nContent-Type:text/html; charset=UTF-8\nContent-Length: 12345\nContent-Encoding: gzip\nAPI-Key: 2c9de507f2c54aa1\nAccess-Control-Allow-Origin: https://javascript.info\n*!*\nAccess-Control-Expose-Headers: Content-Encoding,API-Key\n*/!*",
            "explanation": "Example demonstrating response headers."
          }
        ],
        "bulletPoints": [
          "`Cache-Control`",
          "`Content-Language`",
          "`Content-Length`",
          "`Content-Type`",
          "`Expires`"
        ]
      },
      {
        "heading": "\"Unsafe\" requests",
        "paragraphs": [
          "We can use any HTTP-method: not just `GET/POST`, but also `PATCH`, `DELETE` and others.",
          "Some time ago no one could even imagine that a webpage could make such requests. So there may still exist webservices that treat a non-standard method as a signal: \"That's not a browser\". They can take it into account when checking access rights.",
          "So, to avoid misunderstandings, any \"unsafe\" request -- that couldn't be done in the old times, the browser does not make such requests right away. First, it sends a preliminary, so-called \"preflight\" request, to ask for permission.",
          "A preflight request uses the method `OPTIONS`, no body and three headers:",
          "If the server agrees to serve the requests, then it should respond with empty body, status 200 and headers:"
        ],
        "codeExamples": [
          {
            "title": "\"Unsafe\" requests",
            "code": "let response = await fetch('https://site.com/service.json', {\n  method: 'PATCH',\n  headers: {\n    'Content-Type': 'application/json',\n    'API-Key': 'secret'\n  }\n});",
            "explanation": "Example demonstrating \"unsafe\" requests."
          }
        ],
        "bulletPoints": [
          "`Access-Control-Request-Method` header has the method of the unsafe request.",
          "`Access-Control-Request-Headers` header provides a comma-separated list of its unsafe HTTP-headers.",
          "`Origin` header tells from where the request came. (such as `https://javascript.info`)",
          "`Access-Control-Allow-Origin` must be either `*` or the requesting origin, such as `https://javascript.info`, to allow it.",
          "`Access-Control-Allow-Methods` must have the allowed method."
        ]
      },
      {
        "heading": "Step 1 (preflight request)",
        "paragraphs": [
          "Prior to sending such a request, the browser, on its own, sends a preflight request that looks like this:"
        ],
        "codeExamples": [
          {
            "title": "Step 1 (preflight request)",
            "code": "OPTIONS /service.json\nHost: site.com\nOrigin: https://javascript.info\nAccess-Control-Request-Method: PATCH\nAccess-Control-Request-Headers: Content-Type,API-Key",
            "explanation": "Example demonstrating step 1 (preflight request)."
          }
        ],
        "bulletPoints": [
          "Method: `OPTIONS`.",
          "The path -- exactly the same as the main request: `/service.json`.",
          "Cross-origin special headers:",
          "`Origin` -- the source origin.",
          "`Access-Control-Request-Method` -- requested method."
        ]
      },
      {
        "heading": "Step 2 (preflight response)",
        "paragraphs": [
          "The server should respond with status 200 and the headers:",
          "That allows future communication, otherwise an error is triggered.",
          "If the server expects other methods and headers in the future, it makes sense to allow them in advance by adding them to the list.",
          "For example, this response also allows `PUT`, `DELETE` and additional headers:",
          "Now the browser can see that `PATCH` is in `Access-Control-Allow-Methods` and `Content-Type,API-Key` are in the list `Access-Control-Allow-Headers`, so it sends out the main request."
        ],
        "codeExamples": [
          {
            "title": "Step 2 (preflight response)",
            "code": "200 OK\nAccess-Control-Allow-Origin: https://javascript.info\nAccess-Control-Allow-Methods: PUT,PATCH,DELETE\nAccess-Control-Allow-Headers: API-Key,Content-Type,If-Modified-Since,Cache-Control\nAccess-Control-Max-Age: 86400",
            "explanation": "Example demonstrating step 2 (preflight response)."
          }
        ],
        "bulletPoints": [
          "`Access-Control-Allow-Origin: https://javascript.info`",
          "`Access-Control-Allow-Methods: PATCH`",
          "`Access-Control-Allow-Headers: Content-Type,API-Key`."
        ]
      },
      {
        "heading": "Step 3 (actual request)",
        "paragraphs": [
          "When the preflight is successful, the browser now makes the main request. The process here is the same as for safe requests.",
          "The main request has the `Origin` header (because it's cross-origin):"
        ],
        "codeExamples": [
          {
            "title": "Step 3 (actual request)",
            "code": "PATCH /service.json\nHost: site.com\nContent-Type: application/json\nAPI-Key: secret\nOrigin: https://javascript.info",
            "explanation": "Example demonstrating step 3 (actual request)."
          }
        ]
      },
      {
        "heading": "Step 4 (actual response)",
        "paragraphs": [
          "The server should not forget to add `Access-Control-Allow-Origin` to the main response. A successful preflight does not relieve from that:",
          "Then JavaScript is able to read the main server response."
        ],
        "codeExamples": [
          {
            "title": "Step 4 (actual response)",
            "code": "Access-Control-Allow-Origin: https://javascript.info",
            "explanation": "Example demonstrating step 4 (actual response)."
          },
          {
            "title": "Step 4 (actual response)",
            "code": "Preflight request occurs \"behind the scenes\", it's invisible to JavaScript.\n\nJavaScript only gets the response to the main request or an error if there's no server permission.",
            "explanation": "Example demonstrating step 4 (actual response)."
          }
        ]
      },
      {
        "heading": "Credentials",
        "paragraphs": [
          "A cross-origin request initiated by JavaScript code by default does not bring any credentials (cookies or HTTP authentication).",
          "That's uncommon for HTTP-requests. Usually, a request to `http://site.com` is accompanied by all cookies from that domain. Cross-origin requests made by JavaScript methods on the other hand are an exception.",
          "For example, `fetch('http://another.com')` does not send any cookies, even those (!) that belong to `another.com` domain.",
          "Why?",
          "That's because a request with credentials is much more powerful than without them. If allowed, it grants JavaScript the full power to act on behalf of the user and access sensitive information using their credentials."
        ],
        "codeExamples": [
          {
            "title": "Credentials",
            "code": "fetch('http://another.com', {\n  credentials: \"include\"\n});",
            "explanation": "Example demonstrating credentials."
          },
          {
            "title": "Credentials",
            "code": "200 OK\nAccess-Control-Allow-Origin: https://javascript.info\nAccess-Control-Allow-Credentials: true",
            "explanation": "Example demonstrating credentials."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "From the browser point of view, there are two kinds of cross-origin requests: \"safe\" and all the others.",
          "\"Safe\" requests must satisfy the following conditions:",
          "The essential difference is that safe requests were doable since ancient times using `` or `` tags, while unsafe were impossible for browsers for a long time.",
          "So, the practical difference is that safe requests are sent right away, with the `Origin` header, while for the other ones the browser makes a preliminary \"preflight\" request, asking for permission.",
          "**For safe requests:**"
        ],
        "bulletPoints": [
          "Method: GET, POST or HEAD.",
          "Headers -- we can set only:",
          "`Accept`",
          "`Accept-Language`",
          "`Content-Language`"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Why do we need Origin?",
        "description": "As you probably know, there's HTTP-header `Referer`, that usually contains an url of the page which initiated a network request. For instance, when fetching `http://google.com` from `http://javascript.info/some/url`, the headers look like this: ``` Accept: */* Accept-Charset: utf-8 Accept-Encoding: ",
        "starterCode": "Accept: */*\nAccept-Charset: utf-8\nAccept-Encoding: gzip,deflate,sdch\nConnection: keep-alive\nHost: google.com\n*!*\nOrigin: http://javascript.info\nReferer: http://javascript.info/some/url\n*/!*",
        "solution": "Accept: */*\nAccept-Charset: utf-8\nAccept-Encoding: gzip,deflate,sdch\nConnection: keep-alive\nHost: google.com\n*!*\nOrigin: http://javascript.info\nReferer: http://javascript.info/some/url\n*/!*",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Fetch Crossorigin in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for fetch crossorigin.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Fetch Crossorigin is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Fetch Crossorigin?",
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
      "Fetch Crossorigin is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying fetch crossorigin.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "fetch-crossorigin"
    ],
    "slug": "fetch-crossorigin"
  },
  {
    "title": "Fetch Api",
    "description": "So far, we know quite a bit about `fetch`.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "So far, we know quite a bit about `fetch`.",
          "Let's see the rest of API, to cover all its abilities.",
          "Here's the full list of all possible `fetch` options with their default values (alternatives in comments):",
          "An impressive list, right?",
          "We fully covered `method`, `headers` and `body` in the chapter ."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "Please note: most of these options are used rarely. You may skip this chapter and still use `fetch` well.\n\nStill, it's good to know what `fetch` can do, so if the need arises, you can return and read the details.",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let promise = fetch(url, {\n  method: \"GET\", // POST, PUT, DELETE, etc.\n  headers: {\n    // the content type header value is usually auto-set\n    // depending on the request body\n    \"Content-Type\": \"text/plain;charset=UTF-8\"\n  },\n  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams\n  referrer: \"about:client\", // or \"\" to send no Referer header,\n  // or an url from the current origin\n  referrerPolicy: \"strict-origin-when-cross-origin\", // no-referrer-when-downgrade, no-referrer, origin, same-origin...\n  mode: \"cors\", // same-origin, no-cors\n  credentials: \"same-origin\", // omit, include\n  cache: \"default\", // no-store, reload, no-cache, force-cache, or only-if-cached\n  redirect: \"follow\", // manual, error\n  integrity: \"\", // a hash, like \"sha256-abcdef1234567890\"\n  keepalive: false, // true\n  signal: undefined, // AbortController to abort request\n  window: window // null\n});",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "referrer, referrerPolicy",
        "paragraphs": [
          "These options govern how `fetch` sets the HTTP `Referer` header.",
          "Usually that header is set automatically and contains the url of the page that made the request. In most scenarios, it's not important at all, sometimes, for security purposes, it makes sense to remove or shorten it.",
          "**The `referrer` option allows to set any `Referer` (within the current origin) or remove it.**",
          "To send no referrer, set an empty string:",
          "To set another url within the current origin:"
        ],
        "codeExamples": [
          {
            "title": "referrer, referrerPolicy",
            "code": "fetch('/page', {\n*!*\n  referrer: \"\" // no Referer header\n*/!*\n});",
            "explanation": "Example demonstrating referrer, referrerpolicy."
          },
          {
            "title": "referrer, referrerPolicy",
            "code": "fetch('/page', {\n  // assuming we're on https://javascript.info\n  // we can set any Referer header, but only within the current origin\n*!*\n  referrer: \"https://javascript.info/anotherpage\"\n*/!*\n});",
            "explanation": "Example demonstrating referrer, referrerpolicy."
          }
        ],
        "bulletPoints": [
          "**`\"strict-origin-when-cross-origin\"`** -- the default value: for same-origin send the full `Referer`, for cross-origin send only the origin, unless it's HTTPS\u2192HTTP request, then send nothing.",
          "**`\"no-referrer-when-downgrade\"`** -- full `Referer` is always sent, unless we send a request from HTTPS to HTTP (to the less secure protocol).",
          "**`\"no-referrer\"`** -- never send `Referer`.",
          "**`\"origin\"`** -- only send the origin in `Referer`, not the full page URL, e.g. only `http://site.com` instead of `http://site.com/path`.",
          "**`\"origin-when-cross-origin\"`** -- send the full `Referer` to the same origin, but only the origin part for cross-origin requests (as above)."
        ]
      },
      {
        "heading": "mode",
        "paragraphs": [
          "The `mode` option is a safe-guard that prevents occasional cross-origin requests:",
          "This option may be useful when the URL for `fetch` comes from a 3rd-party, and we want a \"power off switch\" to limit cross-origin capabilities."
        ],
        "bulletPoints": [
          "**`\"cors\"`** -- the default, cross-origin requests are allowed, as described in ,",
          "**`\"same-origin\"`** -- cross-origin requests are forbidden,",
          "**`\"no-cors\"`** -- only safe cross-origin requests are allowed."
        ]
      },
      {
        "heading": "credentials",
        "paragraphs": [
          "The `credentials` option specifies whether `fetch` should send cookies and HTTP-Authorization headers with the request."
        ],
        "bulletPoints": [
          "**`\"same-origin\"`** -- the default, don't send for cross-origin requests,",
          "**`\"include\"`** -- always send, requires `Access-Control-Allow-Credentials` from cross-origin server in order for JavaScript to access the response, that was covered in the chapter ,",
          "**`\"omit\"`** -- never send, even for same-origin requests."
        ]
      },
      {
        "heading": "cache",
        "paragraphs": [
          "By default, `fetch` requests make use of standard HTTP-caching. That is, it respects the `Expires` and `Cache-Control` headers, sends `If-Modified-Since` and so on. Just like regular HTTP-requests do.",
          "The `cache` options allows to ignore HTTP-cache or fine-tune its usage:"
        ],
        "bulletPoints": [
          "**`\"default\"`** -- `fetch` uses standard HTTP-cache rules and headers,",
          "**`\"no-store\"`** -- totally ignore HTTP-cache, this mode becomes the default if we set a header `If-Modified-Since`, `If-None-Match`, `If-Unmodified-Since`, `If-Match`, or `If-Range`,",
          "**`\"reload\"`** -- don't take the result from HTTP-cache (if any), but populate the cache with the response (if the response headers permit this action),",
          "**`\"no-cache\"`** -- create a conditional request if there is a cached response, and a normal request otherwise. Populate HTTP-cache with the response,",
          "**`\"force-cache\"`** -- use a response from HTTP-cache, even if it's stale. If there's no response in HTTP-cache, make a regular HTTP-request, behave normally,"
        ]
      },
      {
        "heading": "redirect",
        "paragraphs": [
          "Normally, `fetch` transparently follows HTTP-redirects, like 301, 302 etc.",
          "The `redirect` option allows to change that:"
        ],
        "bulletPoints": [
          "**`\"follow\"`** -- the default, follow HTTP-redirects,",
          "**`\"error\"`** -- error in case of HTTP-redirect,",
          "**`\"manual\"`** -- allows to process HTTP-redirects manually. In case of redirect, we'll get a special response object, with `response.type=\"opaqueredirect\"` and zeroed/empty status and most other properies."
        ]
      },
      {
        "heading": "integrity",
        "paragraphs": [
          "The `integrity` option allows to check if the response matches the known-ahead checksum.",
          "As described in the specification, supported hash-functions are SHA-256, SHA-384, and SHA-512, there might be others depending on the browser.",
          "For example, we're downloading a file, and we know that its SHA-256 checksum is \"abcdef\" (a real checksum is longer, of course).",
          "We can put it in the `integrity` option, like this:",
          "Then `fetch` will calculate SHA-256 on its own and compare it with our string. In case of a mismatch, an error is triggered."
        ],
        "codeExamples": [
          {
            "title": "integrity",
            "code": "fetch('http://site.com/file', {\n  integrity: 'sha256-abcdef'\n});",
            "explanation": "Example demonstrating integrity."
          }
        ]
      },
      {
        "heading": "keepalive",
        "paragraphs": [
          "The `keepalive` option indicates that the request may \"outlive\" the webpage that initiated it.",
          "For example, we gather statistics on how the current visitor uses our page (mouse clicks, page fragments he views), to analyze and improve the user experience.",
          "When the visitor leaves our page -- we'd like to save the data to our server.",
          "We can use the `window.onunload` event for that:",
          "Normally, when a document is unloaded, all associated network requests are aborted. But the `keepalive` option tells the browser to perform the request in the background, even after it leaves the page. So this option is essential for our request to succeed."
        ],
        "codeExamples": [
          {
            "title": "keepalive",
            "code": "window.onunload = function() {\n  fetch('/analytics', {\n    method: 'POST',\n    body: \"statistics\",\n*!*\n    keepalive: true\n*/!*\n  });\n};",
            "explanation": "Example demonstrating keepalive."
          }
        ],
        "bulletPoints": [
          "We can't send megabytes: the body limit for `keepalive` requests is 64KB.",
          "If we need to gather a lot of statistics about the visit, we should send it out regularly in packets, so that there won't be a lot left for the last `onunload` request.",
          "This limit applies to all `keepalive` requests together. In other words, we can perform multiple `keepalive` requests in parallel, but the sum of their body lengths should not exceed 64KB.",
          "We can't handle the server response if the document is unloaded. So in our example `fetch` will succeed due to `keepalive`, but subsequent functions won't work.",
          "In most cases, such as sending out statistics, it's not a problem, as the server just accepts the data and usually sends an empty response to such requests."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Fetch Api",
        "description": "Apply your understanding of Fetch Api. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Fetch Api\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Fetch Api\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Fetch Api in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for fetch api.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Fetch Api is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Fetch Api?",
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
      "Fetch Api is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying fetch api.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "fetch-api"
    ],
    "slug": "fetch-api"
  },
  {
    "title": "Url",
    "description": "The built-in URL class provides a convenient interface for creating and parsing URLs.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The built-in URL class provides a convenient interface for creating and parsing URLs.",
          "There are no networking methods that require exactly a `URL` object, strings are good enough. So technically we don't have to use `URL`. But sometimes it can be really helpful."
        ]
      },
      {
        "heading": "Creating a URL",
        "paragraphs": [
          "The syntax to create a new `URL` object:",
          "For example:",
          "These two URLs are same:",
          "We can easily create a new URL based on the path relative to an existing URL:",
          "The `URL` object immediately allows us to access its components, so it's a nice way to parse the url, e.g.:"
        ],
        "codeExamples": [
          {
            "title": "Creating a URL",
            "code": "new URL(url, [base])",
            "explanation": "Example demonstrating creating a url."
          },
          {
            "title": "Creating a URL",
            "code": "let url = new URL('https://javascript.info/profile/admin');",
            "explanation": "Example demonstrating creating a url."
          }
        ],
        "bulletPoints": [
          "**`url`** -- the full URL or only path (if base is set, see below),",
          "**`base`** -- an optional base URL: if set and `url` argument has only path, then the URL is generated relative to `base`.",
          "`href` is the full url, same as `url.toString()`",
          "`protocol` ends with the colon character `:`",
          "`search` - a string of parameters, starts with the question mark `?`"
        ]
      },
      {
        "heading": "SearchParams \"?...\"",
        "paragraphs": [
          "Let's say we want to create a url with given search params, for instance, `https://google.com/search?query=JavaScript`.",
          "We can provide them in the URL string:",
          "...But parameters need to be encoded if they contain spaces, non-latin letters, etc (more about that below).",
          "So there's a URL property for that: `url.searchParams`, an object of type URLSearchParams.",
          "It provides convenient methods for search parameters:"
        ],
        "codeExamples": [
          {
            "title": "SearchParams \"?...\"",
            "code": "new URL('https://google.com/search?query=JavaScript')",
            "explanation": "Example demonstrating searchparams \"?...\"."
          },
          {
            "title": "SearchParams \"?...\"",
            "code": "let url = new URL('https://google.com/search');\n\nurl.searchParams.set('q', 'test me!'); // added parameter with a space and !\n\nalert(url); // https://google.com/search?q=test+me%21\n\nurl.searchParams.set('tbs', 'qdr:y'); // added parameter with a colon :\n\n// parameters are automatically encoded\nalert(url); // https://google.com/search?q=test+me%21&tbs=qdr%3Ay\n\n// iterate over search parameters (decoded)\nfor(let [name, value] of url.searchParams) {\n  alert(`${name}=${value}`); // q=test me!, then tbs=qdr:y\n}",
            "explanation": "Example demonstrating searchparams \"?...\"."
          }
        ],
        "bulletPoints": [
          "**`append(name, value)`** -- add the parameter by `name`,",
          "**`delete(name)`** -- remove the parameter by `name`,",
          "**`get(name)`** -- get the parameter by `name`,",
          "**`getAll(name)`** -- get all parameters with the same `name` (that's possible, e.g. `?user=John&user=Pete`),",
          "**`has(name)`** -- check for the existence of the parameter by `name`,"
        ]
      },
      {
        "heading": "Encoding",
        "paragraphs": [
          "There's a standard RFC3986 that defines which characters are allowed in URLs and which are not.",
          "Those that are not allowed, must be encoded, for instance non-latin letters and spaces - replaced with their UTF-8 codes, prefixed by `%`, such as `%20` (a space can be encoded by `+`, for historical reasons, but that's an exception).",
          "The good news is that `URL` objects handle all that automatically. We just supply all parameters unencoded, and then convert the `URL` to string:",
          "As you can see, both `\u0422\u0435\u0441\u0442` in the url path and `\u044a` in the parameter are encoded.",
          "The URL became longer, because each cyrillic letter is represented with two bytes in UTF-8, so there are two `%..` entities."
        ],
        "codeExamples": [
          {
            "title": "Encoding",
            "code": "// using some cyrillic characters for this example\n\nlet url = new URL('https://ru.wikipedia.org/wiki/\u0422\u0435\u0441\u0442');\n\nurl.searchParams.set('key', '\u044a');\nalert(url); //https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A",
            "explanation": "Example demonstrating encoding."
          }
        ]
      },
      {
        "heading": "Encoding strings",
        "paragraphs": [
          "In old times, before `URL` objects appeared, people used strings for URLs.",
          "As of now, `URL` objects are often more convenient, but strings can still be used as well. In many cases using a string makes the code shorter.",
          "If we use a string though, we need to encode/decode special characters manually.",
          "There are built-in functions for that:",
          "A natural question is: \"What's the difference between `encodeURIComponent` and `encodeURI`? When we should use either?\""
        ],
        "codeExamples": [
          {
            "title": "Encoding strings",
            "code": "https://site.com:8080/path/page?p1=v1&p2=v2#hash",
            "explanation": "Example demonstrating encoding strings."
          },
          {
            "title": "Encoding strings",
            "code": "// using cyrillic characters in url path\nlet url = encodeURI('http://site.com/\u043f\u0440\u0438\u0432\u0435\u0442');\n\nalert(url); // http://site.com/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82",
            "explanation": "Example demonstrating encoding strings."
          }
        ],
        "bulletPoints": [
          "encodeURI - encodes URL as a whole.",
          "decodeURI - decodes it back.",
          "encodeURIComponent - encodes a URL component, such as a search parameter, or a hash, or a pathname.",
          "decodeURIComponent - decodes it back.",
          "`encodeURI` encodes only characters that are totally forbidden in URL."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Url",
        "description": "Apply your understanding of Url. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Url\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Url\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Url in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for url.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Url is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Url?",
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
      "Url is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying url.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "url"
    ],
    "slug": "url"
  },
  {
    "title": "Xmlhttprequest",
    "description": "`XMLHttpRequest` is a built-in browser object that allows to make HTTP requests in JavaScript.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "`XMLHttpRequest` is a built-in browser object that allows to make HTTP requests in JavaScript.",
          "Despite having the word \"XML\" in its name, it can operate on any data, not only in XML format. We can upload/download files, track progress and much more.",
          "Right now, there's another, more modern method `fetch`, that somewhat deprecates `XMLHttpRequest`.",
          "In modern web-development `XMLHttpRequest` is used for three reasons:",
          "1. Historical reasons: we need to support existing scripts with `XMLHttpRequest`."
        ]
      },
      {
        "heading": "The basics",
        "paragraphs": [
          "XMLHttpRequest has two modes of operation: synchronous and asynchronous.",
          "Let's see the asynchronous first, as it's used in the majority of cases.",
          "To do the request, we need 3 steps:",
          "1. Create `XMLHttpRequest`:",
          "let xhr = new XMLHttpRequest();"
        ],
        "codeExamples": [
          {
            "title": "The basics",
            "code": "// 1. Create a new XMLHttpRequest object\nlet xhr = new XMLHttpRequest();\n\n// 2. Configure it: GET-request for the URL /article/.../load\nxhr.open('GET', '/article/xmlhttprequest/example/load');\n\n// 3. Send the request over the network\nxhr.send();\n\n// 4. This will be called after the response is received\nxhr.onload = function() {\n  if (xhr.status != 200) { // analyze HTTP status of the response\n    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found\n  } else { // show the result\n    alert(`Done, got ${xhr.response.length} bytes`); // response is the server response\n  }\n};\n\nxhr.onprogress = function(event) {\n  if (event.lengthComputable) {\n    alert(`Received ${event.loaded} of ${event.total} bytes`);\n  } else {\n    alert(`Received ${event.loaded} bytes`); // no Content-Length\n  }\n\n};\n\nxhr.onerror = function() {\n  alert(\"Request failed\");\n};",
            "explanation": "Example demonstrating the basics."
          },
          {
            "title": "The basics",
            "code": "xhr.timeout = 10000; // timeout in ms, 10 seconds",
            "explanation": "Example demonstrating the basics."
          }
        ],
        "bulletPoints": [
          "`method` -- HTTP-method. Usually `\"GET\"` or `\"POST\"`.",
          "`URL` -- the URL to request, a string, can be URL object.",
          "`async` -- if explicitly set to `false`, then the request is synchronous, we'll cover that a bit later.",
          "`user`, `password` -- login and password for basic HTTP auth (if required).",
          "`load` -- when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded."
        ]
      },
      {
        "heading": "Response Type",
        "paragraphs": [
          "We can use `xhr.responseType` property to set the response format:",
          "For example, let's get the response as JSON:"
        ],
        "codeExamples": [
          {
            "title": "Response Type",
            "code": "let xhr = new XMLHttpRequest();\n\nxhr.open('GET', '/article/xmlhttprequest/example/json');\n\n*!*\nxhr.responseType = 'json';\n*/!*\n\nxhr.send();\n\n// the response is {\"message\": \"Hello, world!\"}\nxhr.onload = function() {\n  let responseObj = xhr.response;\n  alert(responseObj.message); // Hello, world!\n};",
            "explanation": "Example demonstrating response type."
          },
          {
            "title": "Response Type",
            "code": "In the old scripts you may also find `xhr.responseText` and even `xhr.responseXML` properties.\n\nThey exist for historical reasons, to get either a string or XML document. Nowadays, we should set the format in `xhr.responseType` and get `xhr.response` as demonstrated above.",
            "explanation": "Example demonstrating response type."
          }
        ],
        "bulletPoints": [
          "`\"\"` (default) -- get as string,",
          "`\"text\"` -- get as string,",
          "`\"arraybuffer\"` -- get as `ArrayBuffer` (for binary data, see chapter ),",
          "`\"blob\"` -- get as `Blob` (for binary data, see chapter ),",
          "`\"document\"` -- get as XML document (can use XPath and other XML methods) or HTML document (based on the MIME type of the received data),"
        ]
      },
      {
        "heading": "Ready states",
        "paragraphs": [
          "`XMLHttpRequest` changes between states as it progresses. The current state is accessible as `xhr.readyState`.",
          "All states, as in the specification:",
          "An `XMLHttpRequest` object travels them in the order `0` -> `1` -> `2` -> `3` -> ... -> `3` -> `4`. State `3` repeats every time a data packet is received over the network.",
          "We can track them using `readystatechange` event:",
          "You can find `readystatechange` listeners in really old code, it's there for historical reasons, as there was a time when there were no `load` and other events. Nowadays, `load/error/progress` handlers deprecate it."
        ],
        "codeExamples": [
          {
            "title": "Ready states",
            "code": "UNSENT = 0; // initial state\nOPENED = 1; // open called\nHEADERS_RECEIVED = 2; // response headers received\nLOADING = 3; // response is loading (a data packet is received)\nDONE = 4; // request complete",
            "explanation": "Example demonstrating ready states."
          },
          {
            "title": "Ready states",
            "code": "xhr.onreadystatechange = function() {\n  if (xhr.readyState == 3) {\n    // loading\n  }\n  if (xhr.readyState == 4) {\n    // request finished\n  }\n};",
            "explanation": "Example demonstrating ready states."
          }
        ]
      },
      {
        "heading": "Aborting request",
        "paragraphs": [
          "We can terminate the request at any time. The call to `xhr.abort()` does that:",
          "That triggers `abort` event, and `xhr.status` becomes `0`."
        ],
        "codeExamples": [
          {
            "title": "Aborting request",
            "code": "xhr.abort(); // terminate the request",
            "explanation": "Example demonstrating aborting request."
          }
        ]
      },
      {
        "heading": "Synchronous requests",
        "paragraphs": [
          "If in the `open` method the third parameter `async` is set to `false`, the request is made synchronously.",
          "In other words, JavaScript execution pauses at `send()` and resumes when the response is received. Somewhat like `alert` or `prompt` commands.",
          "Here's the rewritten example, the 3rd parameter of `open` is `false`:",
          "It might look good, but synchronous calls are used rarely, because they block in-page JavaScript till the loading is complete. In some browsers it becomes impossible to scroll. If a synchronous call takes too much time, the browser may suggest to close the \"hanging\" webpage.",
          "Many advanced capabilities of `XMLHttpRequest`, like requesting from another domain or specifying a timeout, are unavailable for synchronous requests. Also, as you can see, no progress indication."
        ],
        "codeExamples": [
          {
            "title": "Synchronous requests",
            "code": "let xhr = new XMLHttpRequest();\n\nxhr.open('GET', '/article/xmlhttprequest/hello.txt', *!*false*/!*);\n\ntry {\n  xhr.send();\n  if (xhr.status != 200) {\n    alert(`Error ${xhr.status}: ${xhr.statusText}`);\n  } else {\n    alert(xhr.response);\n  }\n} catch(err) { // instead of onerror\n  alert(\"Request failed\");\n}",
            "explanation": "Example demonstrating synchronous requests."
          }
        ]
      },
      {
        "heading": "HTTP-headers",
        "paragraphs": [
          "`XMLHttpRequest` allows both to send custom headers and read headers from the response.",
          "There are 3 methods for HTTP-headers:",
          "`setRequestHeader(name, value)`",
          ": Sets the request header with the given `name` and `value`.",
          "For instance:"
        ]
      },
      {
        "heading": "POST, FormData",
        "paragraphs": [
          "To make a POST request, we can use the built-in FormData object.",
          "The syntax:",
          "We create it, optionally fill from a form, `append` more fields if needed, and then:",
          "1. `xhr.open('POST', ...)` \u2013 use `POST` method.",
          "2. `xhr.send(formData)` to submit the form to the server."
        ],
        "codeExamples": [
          {
            "title": "POST, FormData",
            "code": "let formData = new FormData([form]); // creates an object, optionally fill from <form>\nformData.append(name, value); // appends a field",
            "explanation": "Example demonstrating post, formdata."
          },
          {
            "title": "POST, FormData",
            "code": "<form name=\"person\">\n  <input name=\"name\" value=\"John\">\n  <input name=\"surname\" value=\"Smith\">\n</form>\n\n<script>\n  // pre-fill FormData from the form\n  let formData = new FormData(document.forms.person);\n\n  // add one more field\n  formData.append(\"middle\", \"Lee\");\n\n  // send it out\n  let xhr = new XMLHttpRequest();\n  xhr.open(\"POST\", \"/article/xmlhttprequest/post/user\");\n  xhr.send(formData);\n\n  xhr.onload = () => alert(xhr.response);\n</script>",
            "explanation": "Example demonstrating post, formdata."
          }
        ]
      },
      {
        "heading": "Upload progress",
        "paragraphs": [
          "The `progress` event triggers only on the downloading stage.",
          "That is: if we `POST` something, `XMLHttpRequest` first uploads our data (the request body), then downloads the response.",
          "If we're uploading something big, then we're surely more interested in tracking the upload progress. But `xhr.onprogress` doesn't help here.",
          "There's another object, without methods, exclusively to track upload events: `xhr.upload`.",
          "It generates events, similar to `xhr`, but `xhr.upload` triggers them solely on uploading:"
        ],
        "codeExamples": [
          {
            "title": "Upload progress",
            "code": "xhr.upload.onprogress = function(event) {\n  alert(`Uploaded ${event.loaded} of ${event.total} bytes`);\n};\n\nxhr.upload.onload = function() {\n  alert(`Upload finished successfully.`);\n};\n\nxhr.upload.onerror = function() {\n  alert(`Error during the upload: ${xhr.status}`);\n};",
            "explanation": "Example demonstrating upload progress."
          },
          {
            "title": "Upload progress",
            "code": "<input type=\"file\" onchange=\"upload(this.files[0])\">\n\n<script>\nfunction upload(file) {\n  let xhr = new XMLHttpRequest();\n\n  // track upload progress\n*!*\n  xhr.upload.onprogress = function(event) {\n    console.log(`Uploaded ${event.loaded} of ${event.total}`);\n  };\n*/!*\n\n  // track completion: both successful or not\n  xhr.onloadend = function() {\n    if (xhr.status == 200) {\n      console.log(\"success\");\n    } else {\n      console.log(\"error \" + this.status);\n    }\n  };\n\n  xhr.open(\"POST\", \"/article/xmlhttprequest/post/upload\");\n  xhr.send(file);\n}\n</script>",
            "explanation": "Example demonstrating upload progress."
          }
        ],
        "bulletPoints": [
          "`loadstart` -- upload started.",
          "`progress` -- triggers periodically during the upload.",
          "`abort` -- upload aborted.",
          "`error` -- non-HTTP error.",
          "`load` -- upload finished successfully."
        ]
      },
      {
        "heading": "Cross-origin requests",
        "paragraphs": [
          "`XMLHttpRequest` can make cross-origin requests, using the same CORS policy as fetch.",
          "Just like `fetch`, it doesn't send cookies and HTTP-authorization to another origin by default. To enable them, set `xhr.withCredentials` to `true`:",
          "See the chapter for details about cross-origin headers."
        ],
        "codeExamples": [
          {
            "title": "Cross-origin requests",
            "code": "let xhr = new XMLHttpRequest();\n*!*\nxhr.withCredentials = true;\n*/!*\n\nxhr.open('POST', 'http://anywhere.com/request');\n...",
            "explanation": "Example demonstrating cross-origin requests."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Typical code of the GET-request with `XMLHttpRequest`:",
          "There are actually more events, the modern specification lists them (in the lifecycle order):",
          "The `error`, `abort`, `timeout`, and `load` events are mutually exclusive. Only one of them may happen.",
          "The most used events are load completion (`load`), load failure (`error`), or we can use a single `loadend` handler and check the properties of the request object `xhr` to see what happened.",
          "We've already seen another event: `readystatechange`. Historically, it appeared long ago, before the specification settled. Nowadays, there's no need to use it, we can replace it with newer events, but it can often be found in older scripts."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let xhr = new XMLHttpRequest();\n\nxhr.open('GET', '/my/url');\n\nxhr.send();\n\nxhr.onload = function() {\n  if (xhr.status != 200) { // HTTP error?\n    // handle error\n    alert( 'Error: ' + xhr.status);\n    return;\n  }\n\n  // get the response from xhr.response\n};\n\nxhr.onprogress = function(event) {\n  // report progress\n  alert(`Loaded ${event.loaded} of ${event.total}`);\n};\n\nxhr.onerror = function() {\n  // handle non-HTTP error (e.g. network down)\n};",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "`loadstart` -- the request has started.",
          "`progress` -- a data packet of the response has arrived, the whole response body at the moment is in `response`.",
          "`abort` -- the request was canceled by the call `xhr.abort()`.",
          "`error` -- connection error has occurred, e.g. wrong domain name. Doesn't happen for HTTP-errors like 404.",
          "`load` -- the request has finished successfully."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Xmlhttprequest",
        "description": "Apply your understanding of Xmlhttprequest. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Xmlhttprequest\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Xmlhttprequest\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Xmlhttprequest in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for xmlhttprequest.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Xmlhttprequest is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Xmlhttprequest?",
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
      "Xmlhttprequest is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying xmlhttprequest.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "xmlhttprequest"
    ],
    "slug": "xmlhttprequest"
  },
  {
    "title": "Resume Upload",
    "description": "With `fetch` method it's fairly easy to upload a file.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "With `fetch` method it's fairly easy to upload a file.",
          "How to resume the upload after lost connection? There's no built-in option for that, but we have the pieces to implement it.",
          "Resumable uploads should come with upload progress indication, as we expect big files (if we may need to resume). So, as `fetch` doesn't allow to track upload progress, we'll use XMLHttpRequest."
        ]
      },
      {
        "heading": "Not-so-useful progress event",
        "paragraphs": [
          "To resume upload, we need to know how much was uploaded till the connection was lost.",
          "There's `xhr.upload.onprogress` to track upload progress.",
          "Unfortunately, it won't help us to resume the upload here, as it triggers when the data is *sent*, but was it received by the server? The browser doesn't know.",
          "Maybe it was buffered by a local network proxy, or maybe the remote server process just died and couldn't process them, or it was just lost in the middle and didn't reach the receiver.",
          "That's why this event is only useful to show a nice progress bar."
        ]
      },
      {
        "heading": "Algorithm",
        "paragraphs": [
          "1. First, create a file id, to uniquely identify the file we're going to upload:",
          "let fileId = file.name + '-' + file.size + '-' + file.lastModified;",
          "That's needed for resume upload, to tell the server what we're resuming.",
          "If the name or the size or the last modification date changes, then there'll be another `fileId`.",
          "2. Send a request to the server, asking how many bytes it already has, like this:"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Resume Upload",
        "description": "Apply your understanding of Resume Upload. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Resume Upload\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Resume Upload\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Resume Upload in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for resume upload.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Resume Upload is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Resume Upload?",
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
      "Resume Upload is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying resume upload.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "resume-upload"
    ],
    "slug": "resume-upload"
  },
  {
    "title": "Long Polling",
    "description": "Long polling is the simplest way of having persistent connection with server, that doesn't use any specific protocol like WebSocket or Server Sent Events.",
    "difficulty": "intermediate",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Long polling is the simplest way of having persistent connection with server, that doesn't use any specific protocol like WebSocket or Server Sent Events.",
          "Being very easy to implement, it's also good enough in a lot of cases."
        ]
      },
      {
        "heading": "Regular Polling",
        "paragraphs": [
          "The simplest way to get new information from the server is periodic polling. That is, regular requests to the server: \"Hello, I'm here, do you have any information for me?\". For example, once every 10 seconds.",
          "In response, the server first takes a notice to itself that the client is online, and second - sends a packet of messages it got till that moment.",
          "That works, but there are downsides:",
          "1. Messages are passed with a delay up to 10 seconds (between requests).",
          "2. Even if there are no messages, the server is bombed with requests every 10 seconds, even if the user switched somewhere else or is asleep. That's quite a load to handle, speaking performance-wise."
        ]
      },
      {
        "heading": "Long polling",
        "paragraphs": [
          "So-called \"long polling\" is a much better way to poll the server.",
          "It's also very easy to implement, and delivers messages without delays.",
          "The flow:",
          "1. A request is sent to the server.",
          "2. The server doesn't close the connection until it has a message to send."
        ],
        "codeExamples": [
          {
            "title": "Long polling",
            "code": "async function subscribe() {\n  let response = await fetch(\"/subscribe\");\n\n  if (response.status == 502) {\n    // Status 502 is a connection timeout error,\n    // may happen when the connection was pending for too long,\n    // and the remote server or a proxy closed it\n    // let's reconnect\n    await subscribe();\n  } else if (response.status != 200) {\n    // An error - let's show it\n    showMessage(response.statusText);\n    // Reconnect in one second\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    await subscribe();\n  } else {\n    // Get and show the message\n    let message = await response.text();\n    showMessage(message);\n    // Call subscribe() again to get the next message\n    await subscribe();\n  }\n}\n\nsubscribe();",
            "explanation": "Example demonstrating long polling."
          },
          {
            "title": "Long polling",
            "code": "The server architecture must be able to work with many pending connections.\n\nCertain server architectures run one process per connection, resulting in there being as many processes as there are connections, while each process consumes quite a bit of memory. So, too many connections will just consume it all.\n\nThat's often the case for backends written in languages like PHP and Ruby.\n\nServers written using Node.js usually don't have such problems.\n\nThat said, it isn't a programming language issue. Most modern languages, including PHP and Ruby allow to implement a proper backend. Just please make sure that your server architecture works fine with many simultaneous connections.",
            "explanation": "Example demonstrating long polling."
          }
        ]
      },
      {
        "heading": "Demo: a chat",
        "paragraphs": [
          "Here's a demo chat, you can also download it and run locally (if you're familiar with Node.js and can install modules):",
          "[codetabs src=\"longpoll\" height=500]",
          "Browser code is in `browser.js`."
        ]
      },
      {
        "heading": "Area of usage",
        "paragraphs": [
          "Long polling works great in situations when messages are rare.",
          "If messages come very often, then the chart of requesting-receiving messages, painted above, becomes saw-like.",
          "Every message is a separate request, supplied with headers, authentication overhead, and so on.",
          "So, in this case, another method is preferred, such as Websocket or Server Sent Events."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Long Polling",
        "description": "Apply your understanding of Long Polling. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Long Polling\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Long Polling\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Long Polling in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for long polling.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Long Polling is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Long Polling?",
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
      "Long Polling is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying long polling.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "long-polling"
    ],
    "slug": "long-polling"
  },
  {
    "title": "Websocket",
    "description": "The `WebSocket` protocol, described in the specification RFC 6455, provides a way to exchange data between browser and server via a persistent connection. The data can be passed in...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The `WebSocket` protocol, described in the specification RFC 6455, provides a way to exchange data between browser and server via a persistent connection. The data can be passed in both directions as \"packets\", without breaking the connection and the need of additional HTTP-requests.",
          "WebSocket is especially great for services that require continuous data exchange, e.g. online games, real-time trading systems and so on."
        ]
      },
      {
        "heading": "A simple example",
        "paragraphs": [
          "To open a websocket connection, we need to create `new WebSocket` using the special protocol `ws` in the url:",
          "There's also encrypted `wss://` protocol. It's like HTTPS for websockets.",
          "Once the socket is created, we should listen to events on it. There are totally 4 events:",
          "...And if we'd like to send something, then `socket.send(data)` will do that.",
          "Here's an example:"
        ],
        "codeExamples": [
          {
            "title": "A simple example",
            "code": "let socket = new WebSocket(\"*!*ws*/!*://javascript.info\");",
            "explanation": "Example demonstrating a simple example."
          },
          {
            "title": "A simple example",
            "code": "The `wss://` protocol is not only encrypted, but also more reliable.\n\nThat's because `ws://` data is not encrypted, visible for any intermediary. Old proxy servers do not know about WebSocket, they may see \"strange\" headers and abort the connection.\n\nOn the other hand, `wss://` is WebSocket over TLS, (same as HTTPS is HTTP over TLS), the transport security layer encrypts the data at the sender and decrypts it at the receiver. So data packets are passed encrypted through proxies. They can't see what's inside and let them through.",
            "explanation": "Example demonstrating a simple example."
          }
        ],
        "bulletPoints": [
          "**`open`** -- connection established,",
          "**`message`** -- data received,",
          "**`error`** -- websocket error,",
          "**`close`** -- connection closed."
        ]
      },
      {
        "heading": "Opening a websocket",
        "paragraphs": [
          "When `new WebSocket(url)` is created, it starts connecting immediately.",
          "During the connection, the browser (using headers) asks the server: \"Do you support Websocket?\" And if the server replies \"yes\", then the talk continues in WebSocket protocol, which is not HTTP at all.",
          "![](websocket-handshake.svg)",
          "Here's an example of browser headers for a request made by `new WebSocket(\"wss://javascript.info/chat\")`.",
          "If the server agrees to switch to WebSocket, it should send code 101 response:"
        ],
        "codeExamples": [
          {
            "title": "Opening a websocket",
            "code": "GET /chat\nHost: javascript.info\nOrigin: https://javascript.info\nConnection: Upgrade\nUpgrade: websocket\nSec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==\nSec-WebSocket-Version: 13",
            "explanation": "Example demonstrating opening a websocket."
          },
          {
            "title": "Opening a websocket",
            "code": "We can't use `XMLHttpRequest` or `fetch` to make this kind of HTTP-request, because JavaScript is not allowed to set these headers.",
            "explanation": "Example demonstrating opening a websocket."
          }
        ],
        "bulletPoints": [
          "`Origin` -- the origin of the client page, e.g. `https://javascript.info`. WebSocket objects are cross-origin by nature. There are no special headers or other limitations. Old servers are unable to handle WebSocket anyway, so there are no compatibility issues. But the `Origin` header is important, as it allows the server to decide whether or not to talk WebSocket with this website.",
          "`Connection: Upgrade` -- signals that the client would like to change the protocol.",
          "`Upgrade: websocket` -- the requested protocol is \"websocket\".",
          "`Sec-WebSocket-Key` -- a random browser-generated key, used to ensure that the server supports WebSocket protocol. It's random to prevent proxies from caching any following communication.",
          "`Sec-WebSocket-Version` -- WebSocket protocol version, 13 is the current one."
        ]
      },
      {
        "heading": "Extensions and subprotocols",
        "paragraphs": [
          "There may be additional headers `Sec-WebSocket-Extensions` and `Sec-WebSocket-Protocol` that describe extensions and subprotocols.",
          "For instance:",
          "This optional header is set using the second parameter of `new WebSocket`. That's the array of subprotocols, e.g. if we'd like to use SOAP or WAMP:",
          "let socket = new WebSocket(\"wss://javascript.info/chat\", [\"soap\", \"wamp\"]);",
          "The server should respond with a list of protocols and extensions that it agrees to use."
        ],
        "codeExamples": [
          {
            "title": "Extensions and subprotocols",
            "code": "GET /chat\nHost: javascript.info\nUpgrade: websocket\nConnection: Upgrade\nOrigin: https://javascript.info\nSec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==\nSec-WebSocket-Version: 13\n*!*\nSec-WebSocket-Extensions: deflate-frame\nSec-WebSocket-Protocol: soap, wamp\n*/!*",
            "explanation": "Example demonstrating extensions and subprotocols."
          },
          {
            "title": "Extensions and subprotocols",
            "code": "101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=\n*!*\nSec-WebSocket-Extensions: deflate-frame\nSec-WebSocket-Protocol: soap\n*/!*",
            "explanation": "Example demonstrating extensions and subprotocols."
          }
        ],
        "bulletPoints": [
          "`Sec-WebSocket-Extensions: deflate-frame` means that the browser supports data compression. An extension is something related to transferring the data, functionality that extends the WebSocket protocol. The header `Sec-WebSocket-Extensions` is sent automatically by the browser, with the list of all extensions it supports.",
          "`Sec-WebSocket-Protocol: soap, wamp` means that we'd like to transfer not just any data, but the data in SOAP or WAMP (\"The WebSocket Application Messaging Protocol\") protocols. WebSocket subprotocols are registered in the IANA catalogue. So, this header describes the data formats that we're going to use."
        ]
      },
      {
        "heading": "Data transfer",
        "paragraphs": [
          "WebSocket communication consists of \"frames\" -- data fragments, that can be sent from either side, and can be of several kinds:",
          "In the browser, we directly work only with text or binary frames.",
          "**WebSocket `.send()` method can send either text or binary data.**",
          "A call `socket.send(body)` allows `body` in string or a binary format, including `Blob`, `ArrayBuffer`, etc. No settings are required: just send it out in any format.",
          "**When we receive the data, text always comes as string. And for binary data, we can choose between `Blob` and `ArrayBuffer` formats.**"
        ],
        "codeExamples": [
          {
            "title": "Data transfer",
            "code": "socket.binaryType = \"arraybuffer\";\nsocket.onmessage = (event) => {\n  // event.data is either a string (if text) or arraybuffer (if binary)\n};",
            "explanation": "Example demonstrating data transfer."
          }
        ],
        "bulletPoints": [
          "\"text frames\" -- contain text data that parties send to each other.",
          "\"binary data frames\" -- contain binary data that parties send to each other.",
          "\"ping/pong frames\" are used to check the connection, sent from the server, the browser responds to these automatically.",
          "there's also \"connection close frame\" and a few other service frames."
        ]
      },
      {
        "heading": "Rate limiting",
        "paragraphs": [
          "Imagine, our app is generating a lot of data to send. But the user has a slow network connection, maybe on a mobile internet, outside of a city.",
          "We can call `socket.send(data)` again and again. But the data will be buffered (stored) in memory and sent out only as fast as network speed allows.",
          "The `socket.bufferedAmount` property stores how many bytes remain buffered at this moment, waiting to be sent over the network.",
          "We can examine it to see whether the socket is actually available for transmission."
        ],
        "codeExamples": [
          {
            "title": "Rate limiting",
            "code": "// every 100ms examine the socket and send more data  \n// only if all the existing data was sent out\nsetInterval(() => {\n  if (socket.bufferedAmount == 0) {\n    socket.send(moreData());\n  }\n}, 100);",
            "explanation": "Example demonstrating rate limiting."
          }
        ]
      },
      {
        "heading": "Connection close",
        "paragraphs": [
          "Normally, when a party wants to close the connection (both browser and server have equal rights), they send a \"connection close frame\" with a numeric code and a textual reason.",
          "The method for that is:",
          "Then the other party in the `close` event handler gets the code and the reason, e.g.:",
          "Most common code values:",
          "There are other codes like:"
        ],
        "codeExamples": [
          {
            "title": "Connection close",
            "code": "socket.close([code], [reason]);",
            "explanation": "Example demonstrating connection close."
          },
          {
            "title": "Connection close",
            "code": "// closing party:\nsocket.close(1000, \"Work complete\");\n\n// the other party\nsocket.onclose = event => {\n  // event.code === 1000\n  // event.reason === \"Work complete\"\n  // event.wasClean === true (clean close)\n};",
            "explanation": "Example demonstrating connection close."
          }
        ],
        "bulletPoints": [
          "`code` is a special WebSocket closing code (optional)",
          "`reason` is a string that describes the reason of closing (optional)",
          "`1000` -- the default, normal closure (used if no `code` supplied),",
          "`1006` -- no way to set such code manually, indicates that the connection was lost (no close frame).",
          "`1001` -- the party is going away, e.g. server is shutting down, or a browser leaves the page,"
        ]
      },
      {
        "heading": "Connection state",
        "paragraphs": [
          "To get connection state, additionally there's `socket.readyState` property with values:"
        ],
        "bulletPoints": [
          "**`0`** -- \"CONNECTING\": the connection has not yet been established,",
          "**`1`** -- \"OPEN\": communicating,",
          "**`2`** -- \"CLOSING\": the connection is closing,",
          "**`3`** -- \"CLOSED\": the connection is closed."
        ]
      },
      {
        "heading": "Chat example",
        "paragraphs": [
          "Let's review a chat example using browser WebSocket API and Node.js WebSocket module . We'll pay the main attention to the client side, but the server is also simple.",
          "HTML: we need a `` to send messages and a `` for incoming messages:",
          "From JavaScript we want three things:",
          "1. Open the connection.",
          "2. On form submission -- `socket.send(message)` for the message."
        ],
        "codeExamples": [
          {
            "title": "Chat example",
            "code": "<!-- message form -->\n<form name=\"publish\">\n  <input type=\"text\" name=\"message\">\n  <input type=\"submit\" value=\"Send\">\n</form>\n\n<!-- div with messages -->\n<div id=\"messages\"></div>",
            "explanation": "Example demonstrating chat example."
          },
          {
            "title": "Chat example",
            "code": "let socket = new WebSocket(\"wss://javascript.info/article/websocket/chat/ws\");\n\n// send message from the form\ndocument.forms.publish.onsubmit = function() {\n  let outgoingMessage = this.message.value;\n\n  socket.send(outgoingMessage);\n  return false;\n};\n\n// message received - show the message in div#messages\nsocket.onmessage = function(event) {\n  let message = event.data;\n\n  let messageElem = document.createElement('div');\n  messageElem.textContent = message;\n  document.getElementById('messages').prepend(messageElem);\n}",
            "explanation": "Example demonstrating chat example."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "WebSocket is a modern way to have persistent browser-server connections.",
          "The API is simple.",
          "Methods:",
          "Events:",
          "WebSocket by itself does not include reconnection, authentication and many other high-level mechanisms. So there are client/server libraries for that, and it's also possible to implement these capabilities manually."
        ],
        "bulletPoints": [
          "WebSockets don't have cross-origin limitations.",
          "They are well-supported in browsers.",
          "Can send/receive strings and binary data.",
          "`socket.send(data)`,",
          "`socket.close([code], [reason])`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Websocket",
        "description": "Apply your understanding of Websocket. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Websocket\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Websocket\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Websocket in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for websocket.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Websocket is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Websocket?",
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
      "Websocket is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying websocket.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "websocket"
    ],
    "slug": "websocket"
  },
  {
    "title": "Server Sent Events",
    "description": "The Server-Sent Events specification describes a built-in class `EventSource`, that keeps connection with the server and allows to receive events from it.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The Server-Sent Events specification describes a built-in class `EventSource`, that keeps connection with the server and allows to receive events from it.",
          "Similar to `WebSocket`, the connection is persistent.",
          "But there are several important differences:",
          "| `WebSocket` | `EventSource` |",
          "|-------------|---------------|"
        ]
      },
      {
        "heading": "Getting messages",
        "paragraphs": [
          "To start receiving messages, we just need to create `new EventSource(url)`.",
          "The browser will connect to `url` and keep the connection open, waiting for events.",
          "The server should respond with status 200 and the header `Content-Type: text/event-stream`, then keep the connection and write messages into it in the special format, like this:",
          "In practice, complex messages are usually sent JSON-encoded. Line-breaks are encoded as `\\n` within them, so multiline `data:` messages are not necessary.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Getting messages",
            "code": "data: Message 1\n\ndata: Message 2\n\ndata: Message 3\ndata: of two lines",
            "explanation": "Example demonstrating getting messages."
          },
          {
            "title": "Getting messages",
            "code": "data: {\"user\":\"John\",\"message\":\"First line*!*\\n*/!* Second line\"}",
            "explanation": "Example demonstrating getting messages."
          }
        ],
        "bulletPoints": [
          "A message text goes after `data:`, the space after the colon is optional.",
          "Messages are delimited with double line breaks `\\n\\n`.",
          "To send a line break `\\n`, we can immediately send one more `data:` (3rd message above)."
        ]
      },
      {
        "heading": "Cross-origin requests",
        "paragraphs": [
          "`EventSource` supports cross-origin requests, like `fetch` and any other networking methods. We can use any URL:",
          "The remote server will get the `Origin` header and must respond with `Access-Control-Allow-Origin` to proceed.",
          "To pass credentials, we should set the additional option `withCredentials`, like this:",
          "Please see the chapter for more details about cross-origin headers."
        ],
        "codeExamples": [
          {
            "title": "Cross-origin requests",
            "code": "let source = new EventSource(\"https://another-site.com/events\");",
            "explanation": "Example demonstrating cross-origin requests."
          },
          {
            "title": "Cross-origin requests",
            "code": "let source = new EventSource(\"https://another-site.com/events\", {\n  withCredentials: true\n});",
            "explanation": "Example demonstrating cross-origin requests."
          }
        ]
      },
      {
        "heading": "Reconnection",
        "paragraphs": [
          "Upon creation, `new EventSource` connects to the server, and if the connection is broken -- reconnects.",
          "That's very convenient, as we don't have to care about it.",
          "There's a small delay between reconnections, a few seconds by default.",
          "The server can set the recommended delay using `retry:` in response (in milliseconds):",
          "The `retry:` may come both together with some data, or as a standalone message."
        ],
        "codeExamples": [
          {
            "title": "Reconnection",
            "code": "retry: 15000\ndata: Hello, I set the reconnection delay to 15 seconds",
            "explanation": "Example demonstrating reconnection."
          },
          {
            "title": "Reconnection",
            "code": "let eventSource = new EventSource(...);\n\neventSource.close();",
            "explanation": "Example demonstrating reconnection."
          }
        ],
        "bulletPoints": [
          "If the server wants the browser to stop reconnecting, it should respond with HTTP status 204.",
          "If the browser wants to close the connection, it should call `eventSource.close()`:"
        ]
      },
      {
        "heading": "Message id",
        "paragraphs": [
          "When a connection breaks due to network problems, either side can't be sure which messages were received, and which weren't.",
          "To correctly resume the connection, each message should have an `id` field, like this:",
          "When a message with `id:` is received, the browser:"
        ],
        "codeExamples": [
          {
            "title": "Message id",
            "code": "data: Message 1\nid: 1\n\ndata: Message 2\nid: 2\n\ndata: Message 3\ndata: of two lines\nid: 3",
            "explanation": "Example demonstrating message id."
          },
          {
            "title": "Message id",
            "code": "Please note: the `id` is appended below message `data` by the server, to ensure that `lastEventId` is updated after the message is received.",
            "explanation": "Example demonstrating message id."
          }
        ],
        "bulletPoints": [
          "Sets the property `eventSource.lastEventId` to its value.",
          "Upon reconnection sends the header `Last-Event-ID` with that `id`, so that the server may re-send following messages."
        ]
      },
      {
        "heading": "Connection status: readyState",
        "paragraphs": [
          "The `EventSource` object has `readyState` property, that has one of three values:",
          "When an object is created, or the connection is down, it's always `EventSource.CONNECTING` (equals `0`).",
          "We can query this property to know the state of `EventSource`."
        ],
        "codeExamples": [
          {
            "title": "Connection status: readyState",
            "code": "EventSource.CONNECTING = 0; // connecting or reconnecting\nEventSource.OPEN = 1;       // connected\nEventSource.CLOSED = 2;     // connection closed",
            "explanation": "Example demonstrating connection status: readystate."
          }
        ]
      },
      {
        "heading": "Event types",
        "paragraphs": [
          "By default `EventSource` object generates three events:",
          "The server may specify another type of event with `event: ...` at the event start.",
          "For example:",
          "To handle custom events, we must use `addEventListener`, not `onmessage`:"
        ],
        "codeExamples": [
          {
            "title": "Event types",
            "code": "event: join\ndata: Bob\n\ndata: Hello\n\nevent: leave\ndata: Bob",
            "explanation": "Example demonstrating event types."
          },
          {
            "title": "Event types",
            "code": "eventSource.addEventListener('join', event => {\n  alert(`Joined ${event.data}`);\n});\n\neventSource.addEventListener('message', event => {\n  alert(`Said: ${event.data}`);\n});\n\neventSource.addEventListener('leave', event => {\n  alert(`Left ${event.data}`);\n});",
            "explanation": "Example demonstrating event types."
          }
        ],
        "bulletPoints": [
          "`message` -- a message received, available as `event.data`.",
          "`open` -- the connection is open.",
          "`error` -- the connection could not be established, e.g. the server returned HTTP 500 status."
        ]
      },
      {
        "heading": "Full example",
        "paragraphs": [
          "Here's the server that sends messages with `1`, `2`, `3`, then `bye` and breaks the connection.",
          "Then the browser automatically reconnects.",
          "[codetabs src=\"eventsource\"]"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`EventSource` object automatically establishes a persistent connection and allows the server to send messages over it.",
          "It offers:",
          "That makes `EventSource` a viable alternative to `WebSocket`, as the latter is more low-level and lacks such built-in features (though they can be implemented).",
          "In many real-life applications, the power of `EventSource` is just enough.",
          "Supported in all modern browsers (not IE)."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "let source = new EventSource(url, [credentials]);",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "Automatic reconnect, with tunable `retry` timeout.",
          "Message ids to resume events, the last received identifier is sent in `Last-Event-ID` header upon reconnection.",
          "The current state is in the `readyState` property."
        ]
      },
      {
        "heading": "Properties of an `EventSource` object",
        "paragraphs": [
          "`readyState`",
          ": The current connection state: either `EventSource.CONNECTING (=0)`, `EventSource.OPEN (=1)` or `EventSource.CLOSED (=2)`.",
          "`lastEventId`",
          ": The last received `id`. Upon reconnection the browser sends it in the header `Last-Event-ID`."
        ]
      },
      {
        "heading": "Methods",
        "paragraphs": [
          "`close()`",
          ": Closes the connection."
        ]
      },
      {
        "heading": "Events",
        "paragraphs": [
          "`message`",
          ": Message received, the data is in `event.data`.",
          "`open`",
          ": The connection is established.",
          "`error`"
        ]
      },
      {
        "heading": "Server response format",
        "paragraphs": [
          "The server sends messages, delimited by `\\n\\n`.",
          "A message may have following fields:",
          "A message may include one or more fields in any order, but `id:` usually goes the last."
        ],
        "bulletPoints": [
          "`data:` -- message body, a sequence of multiple `data` is interpreted as a single message, with `\\n` between the parts.",
          "`id:` -- renews `lastEventId`, sent in `Last-Event-ID` on reconnect.",
          "`retry:` -- recommends a retry delay for reconnections in ms. There's no way to set it from JavaScript.",
          "`event:` -- event name, must precede `data:`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Server Sent Events",
        "description": "Apply your understanding of Server Sent Events. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Server Sent Events\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Server Sent Events\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Server Sent Events in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for server sent events.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Server Sent Events is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Server Sent Events?",
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
      "Server Sent Events is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying server sent events.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "server-sent-events"
    ],
    "slug": "server-sent-events"
  },
  {
    "title": "Cookie",
    "description": "Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol, defined by the RFC 6265 specification.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol, defined by the RFC 6265 specification.",
          "Cookies are usually set by a web server using the response `Set-Cookie` HTTP header. Then, the browser automatically adds them to (almost) every request to the same domain using the `Cookie` HTTP header.",
          "One of the most widespread use cases is authentication:",
          "1. Upon sign-in, the server uses the `Set-Cookie` HTTP header in the response to set a cookie with a unique \"session identifier\".",
          "2. Next time the request is sent to the same domain, the browser sends the cookie over the net using the `Cookie` HTTP header."
        ]
      },
      {
        "heading": "Reading from document.cookie",
        "paragraphs": [
          "The value of `document.cookie` consists of `name=value` pairs, delimited by `; `. Each one is a separate cookie.",
          "To find a particular cookie, we can split `document.cookie` by `; `, and then find the right name. We can use either a regular expression or array functions to do that.",
          "We leave it as an exercise for the reader. Also, at the end of the chapter, you'll find helper functions to manipulate cookies."
        ],
        "codeExamples": [
          {
            "title": "Reading from document.cookie",
            "code": "Does your browser store any cookies from this site? Let's see:",
            "explanation": "Example demonstrating reading from document.cookie."
          },
          {
            "title": "Reading from document.cookie",
            "code": "Assuming you're on a website, it's possible to see the cookies from it, like this:",
            "explanation": "Example demonstrating reading from document.cookie."
          }
        ]
      },
      {
        "heading": "Writing to document.cookie",
        "paragraphs": [
          "We can write to `document.cookie`. But it's not a data property, it's an accessor (getter/setter). An assignment to it is treated specially.",
          "**A write operation to `document.cookie` updates only the cookie mentioned in it and doesn't touch other cookies.**",
          "For instance, this call sets a cookie with the name `user` and value `John`:",
          "If you run it, you will likely see multiple cookies. That's because the `document.cookie=` operation does not overwrite all cookies. It only sets the mentioned cookie `user`.",
          "Technically, name and value can have any characters. To keep the valid formatting, they should be escaped using a built-in `encodeURIComponent` function:"
        ],
        "codeExamples": [
          {
            "title": "Writing to document.cookie",
            "code": "document.cookie = \"user=John\"; // update only cookie named 'user'\nalert(document.cookie); // show all cookies",
            "explanation": "Example demonstrating writing to document.cookie."
          },
          {
            "title": "Writing to document.cookie",
            "code": "// special characters (spaces) need encoding\nlet name = \"my name\";\nlet value = \"John Smith\"\n\n// encodes the cookie as my%20name=John%20Smith\ndocument.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);\n\nalert(document.cookie); // ...; my%20name=John%20Smith",
            "explanation": "Example demonstrating writing to document.cookie."
          }
        ]
      },
      {
        "heading": "domain",
        "paragraphs": [
          "A domain defines where the cookie is accessible. In practice though, there are limitations. We can't set any domain.",
          "**There's no way to let a cookie be accessible from another 2nd-level domain, so `other.com` will never receive a cookie set at `site.com`.**",
          "It's a safety restriction, to allow us to store sensitive data in cookies that should be available only on one site.",
          "By default, a cookie is accessible only at the domain that set it.",
          "Please note, by default, a cookie is not shared with a subdomain, such as `forum.site.com`."
        ],
        "codeExamples": [
          {
            "title": "domain",
            "code": "// if we set a cookie at site.com website...\ndocument.cookie = \"user=John\"\n\n// ...we won't see it at forum.site.com\nalert(document.cookie); // no user",
            "explanation": "Example demonstrating domain."
          },
          {
            "title": "domain",
            "code": "// at site.com\n// make the cookie accessible on any subdomain *.site.com:\ndocument.cookie = \"user=John; *!*domain=site.com*/!*\"\n\n// later\n\n// at forum.site.com\nalert(document.cookie); // has cookie user=John",
            "explanation": "Example demonstrating domain."
          }
        ],
        "bulletPoints": [
          "**`domain=site.com`**"
        ]
      },
      {
        "heading": "path",
        "paragraphs": [
          "The URL path prefix must be absolute. It makes the cookie accessible for pages under that path. By default, it's the current path.",
          "If a cookie is set with `path=/admin`, it's visible on pages `/admin` and `/admin/something`, but not at `/home`, `/home/admin` or `/`.",
          "Usually, we should set `path` to the root: `path=/` to make the cookie accessible from all website pages. If this attribute is not set the default is calculated using this method."
        ],
        "bulletPoints": [
          "**`path=/mypath`**"
        ]
      },
      {
        "heading": "expires, max-age",
        "paragraphs": [
          "By default, if a cookie doesn't have one of these attributes, it disappears when the browser/tab is closed. Such cookies are called \"session cookies\"",
          "To let cookies survive a browser close, we can set either the `expires` or `max-age` attribute. `max-Age` has precedence if both are set.",
          "The cookie expiration date defines the time when the browser will automatically delete it (according to the browser's time zone).",
          "The date must be exactly in this format, in the GMT timezone. We can use `date.toUTCString` to get it. For instance, we can set the cookie to expire in 1 day:",
          "If we set `expires` to a date in the past, the cookie is deleted."
        ],
        "codeExamples": [
          {
            "title": "expires, max-age",
            "code": "// +1 day from now\nlet date = new Date(Date.now() + 86400e3);\ndate = date.toUTCString();\ndocument.cookie = \"user=John; expires=\" + date;",
            "explanation": "Example demonstrating expires, max-age."
          },
          {
            "title": "expires, max-age",
            "code": "// cookie will die in +1 hour from now\ndocument.cookie = \"user=John; max-age=3600\";\n\n// delete cookie (let it expire right now)\ndocument.cookie = \"user=John; max-age=0\";",
            "explanation": "Example demonstrating expires, max-age."
          }
        ],
        "bulletPoints": [
          "**`expires=Tue, 19 Jan 2038 03:14:07 GMT`**",
          "**`max-age=3600`**"
        ]
      },
      {
        "heading": "secure",
        "paragraphs": [
          "The cookie should be transferred only over HTTPS.",
          "**By default, if we set a cookie at `http://site.com`, then it also appears at `https://site.com` and vice versa.**",
          "That is, cookies are domain-based, they do not distinguish between the protocols.",
          "With this attribute, if a cookie is set by `https://site.com`, then it doesn't appear when the same site is accessed by HTTP, as `http://site.com`. So if a cookie has sensitive content that should never be sent over unencrypted HTTP, the `secure` flag is the right thing."
        ],
        "codeExamples": [
          {
            "title": "secure",
            "code": "// assuming we're on https:// now\n// set the cookie to be secure (only accessible over HTTPS)\ndocument.cookie = \"user=John; secure\";",
            "explanation": "Example demonstrating secure."
          }
        ],
        "bulletPoints": [
          "**`secure`**"
        ]
      },
      {
        "heading": "samesite",
        "paragraphs": [
          "This is another security attribute `samesite`. It's designed to protect from so-called XSRF (cross-site request forgery) attacks.",
          "To understand how it works and when it's useful, let's take a look at XSRF attacks."
        ]
      },
      {
        "heading": "XSRF attack",
        "paragraphs": [
          "Imagine, you are logged into the site `bank.com`. That is: you have an authentication cookie from that site. Your browser sends it to `bank.com` with every request so that it recognizes you and performs all sensitive financial operations.",
          "Now, while browsing the web in another window, you accidentally come to another site `evil.com`. That site has JavaScript code that submits a form `` to `bank.com` with fields that initiate a transaction to the hacker's account.",
          "The browser sends cookies every time you visit the site `bank.com`, even if the form was submitted from `evil.com`. So the bank recognizes you and performs the payment.",
          "![](cookie-xsrf.svg)",
          "This is a so-called \"Cross-Site Request Forgery\" (in short, XSRF) attack."
        ]
      },
      {
        "heading": "Use cookie samesite attribute",
        "paragraphs": [
          "The cookie `samesite` attribute provides another way to protect from such attacks, that (in theory) should not require \"xsrf protection tokens\".",
          "It has two possible values:",
          "A cookie with `samesite=strict` is never sent if the user comes from outside the same site.",
          "In other words, whether a user follows a link from their email, submits a form from `evil.com`, or does any operation that originates from another domain, the cookie is not sent.",
          "If authentication cookies have the `samesite=strict` attribute, then an XSRF attack has no chance of succeeding, because a submission from `evil.com` comes without cookies. So `bank.com` will not recognize the user and will not proceed with the payment."
        ],
        "bulletPoints": [
          "**`samesite=strict`**",
          "**`samesite=lax` (same as `samesite` without value)**",
          "`samesite` is ignored (not supported) by very old browsers, the year 2017 or so."
        ]
      },
      {
        "heading": "httpOnly",
        "paragraphs": [
          "This attribute has nothing to do with JavaScript, but we have to mention it for completeness.",
          "The web server uses the `Set-Cookie` header to set a cookie. Also, it may set the `httpOnly` attribute.",
          "This attribute forbids any JavaScript access to the cookie. We can't see such a cookie or manipulate it using `document.cookie`.",
          "This is used as a precautionary measure, to protect from certain attacks when a hacker injects his own JavaScript code into a page and waits for a user to visit that page. That shouldn't be possible at all, hackers should not be able to inject their code into our site, but there may be bugs that let them do it.",
          "Normally, if such a thing happens, and a user visits a web-page with a hacker's JavaScript code, then that code executes and gains access to `document.cookie` with user cookies containing authentication information. That's bad."
        ]
      },
      {
        "heading": "Appendix: Cookie functions",
        "paragraphs": [
          "Here's a small set of functions to work with cookies, more convenient than a manual modification of `document.cookie`.",
          "There exist many cookie libraries for that, so these are for demo purposes. Fully working though."
        ]
      },
      {
        "heading": "getCookie(name)",
        "paragraphs": [
          "The shortest way to access a cookie is to use a regular expression.",
          "The function `getCookie(name)` returns the cookie with the given `name`:",
          "Here `new RegExp` is generated dynamically, to match `; name=`.",
          "Please note that a cookie value is encoded, so `getCookie` uses a built-in `decodeURIComponent` function to decode it."
        ],
        "codeExamples": [
          {
            "title": "getCookie(name)",
            "code": "// returns the cookie with the given name,\n// or undefined if not found\nfunction getCookie(name) {\n  let matches = document.cookie.match(new RegExp(\n    \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\n  ));\n  return matches ? decodeURIComponent(matches[1]) : undefined;\n}",
            "explanation": "Example demonstrating getcookie(name)."
          }
        ]
      },
      {
        "heading": "setCookie(name, value, attributes)",
        "paragraphs": [
          "Sets the cookie's `name` to the given `value` with `path=/` by default (can be modified to add other defaults):"
        ],
        "codeExamples": [
          {
            "title": "setCookie(name, value, attributes)",
            "code": "function setCookie(name, value, attributes = {}) {\n\n  attributes = {\n    path: '/',\n    // add other defaults here if necessary\n    ...attributes\n  };\n\n  if (attributes.expires instanceof Date) {\n    attributes.expires = attributes.expires.toUTCString();\n  }\n\n  let updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\n\n  for (let attributeKey in attributes) {\n    updatedCookie += \"; \" + attributeKey;\n    let attributeValue = attributes[attributeKey];\n    if (attributeValue !== true) {\n      updatedCookie += \"=\" + attributeValue;\n    }\n  }\n\n  document.cookie = updatedCookie;\n}\n\n// Example of use:\nsetCookie('user', 'John', {secure: true, 'max-age': 3600});",
            "explanation": "Example demonstrating setcookie(name, value, attributes)."
          }
        ]
      },
      {
        "heading": "deleteCookie(name)",
        "paragraphs": [
          "To delete a cookie, we can call it with a negative expiration date:",
          "Together: cookie.js."
        ],
        "codeExamples": [
          {
            "title": "deleteCookie(name)",
            "code": "function deleteCookie(name) {\n  setCookie(name, \"\", {\n    'max-age': -1\n  })\n}",
            "explanation": "Example demonstrating deletecookie(name)."
          },
          {
            "title": "deleteCookie(name)",
            "code": "Please note: when we update or delete a cookie, we should use exactly the same path and domain attributes as when we set it.",
            "explanation": "Example demonstrating deletecookie(name)."
          }
        ]
      },
      {
        "heading": "Appendix: Third-party cookies",
        "paragraphs": [
          "A cookie is called \"third-party\" if it's placed by a domain other than the page the user is visiting.",
          "For instance:",
          "1. A page at `site.com` loads a banner from another site: ``.",
          "2. Along with the banner, the remote server at `ads.com` may set the `Set-Cookie` header with a cookie like `id=1234`. Such a cookie originates from the `ads.com` domain, and will only be visible at `ads.com`:",
          "![](cookie-third-party.svg)"
        ],
        "codeExamples": [
          {
            "title": "Appendix: Third-party cookies",
            "code": "If we load a script from a third-party domain, like `<script src=\"https://google-analytics.com/analytics.js\">`, and that script uses `document.cookie` to set a cookie, then such cookie is not third-party.\n\nIf a script sets a cookie, then no matter where the script came from -- the cookie belongs to the domain of the current webpage.",
            "explanation": "Example demonstrating appendix: third-party cookies."
          }
        ],
        "bulletPoints": [
          "Safari does not allow third-party cookies at all.",
          "Firefox comes with a \"black list\" of third-party domains where it blocks third-party cookies."
        ]
      },
      {
        "heading": "Appendix: GDPR",
        "paragraphs": [
          "This topic is not related to JavaScript at all, it is just something to keep in mind when setting cookies.",
          "There's a legislation in Europe called GDPR, that enforces a set of rules for websites to respect the users' privacy. One of these rules is to require explicit permission for tracking cookies from the user.",
          "Please note, that's only about tracking/identifying/authorizing cookies.",
          "So, if we set a cookie that just saves some information, but neither tracks nor identifies the user, then we are free to do it.",
          "But if we are going to set a cookie with an authentication session or a tracking ID, then a user must allow that."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`document.cookie` provides access to cookies.",
          "Cookie attributes:",
          "Additionally:"
        ],
        "bulletPoints": [
          "Write operations modify only the cookie mentioned in it.",
          "Name/value must be encoded.",
          "One cookie may not exceed 4KB in size. The number of cookies allowed on a domain is around 20+ (varies by browser).",
          "`path=/`, by default current path, makes the cookie visible only under that path.",
          "`domain=site.com`, by default a cookie is visible on the current domain only. If the domain is set explicitly, the cookie becomes visible on subdomains."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Cookie",
        "description": "Apply your understanding of Cookie. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Cookie\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Cookie\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Cookie in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for cookie.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Cookie is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Cookie?",
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
      "Cookie is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying cookie.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "cookie"
    ],
    "slug": "cookie"
  },
  {
    "title": "Localstorage",
    "description": "Web storage objects `localStorage` and `sessionStorage` allow to save key/value pairs in the browser.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Web storage objects `localStorage` and `sessionStorage` allow to save key/value pairs in the browser.",
          "What's interesting about them is that the data survives a page refresh (for `sessionStorage`) and even a full browser restart (for `localStorage`). We'll see that very soon.",
          "We already have cookies. Why additional objects?",
          "Both storage objects provide the same methods and properties:",
          "As you can see, it's like a `Map` collection (`setItem/getItem/removeItem`), but also allows access by index with `key(index)`."
        ],
        "bulletPoints": [
          "Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most modern browsers allow at least 5 megabytes of data (or more) and have settings to configure that.",
          "Also unlike cookies, the server can't manipulate storage objects via HTTP headers. Everything's done in JavaScript.",
          "The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they can't access data from each other.",
          "`setItem(key, value)` -- store key/value pair.",
          "`getItem(key)` -- get the value by key."
        ]
      },
      {
        "heading": "localStorage demo",
        "paragraphs": [
          "The main features of `localStorage` are:",
          "For instance, if you run this code...",
          "...And close/open the browser or just open the same page in a different window, then you can get it like this:",
          "We only have to be on the same origin (domain/port/protocol), the url path can be different.",
          "The `localStorage` is shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one."
        ],
        "codeExamples": [
          {
            "title": "localStorage demo",
            "code": "localStorage.setItem('test', 1);",
            "explanation": "Example demonstrating localstorage demo."
          },
          {
            "title": "localStorage demo",
            "code": "alert( localStorage.getItem('test') ); // 1",
            "explanation": "Example demonstrating localstorage demo."
          }
        ],
        "bulletPoints": [
          "Shared between all tabs and windows from the same origin.",
          "The data does not expire. It remains after the browser restart and even OS reboot."
        ]
      },
      {
        "heading": "Object-like access",
        "paragraphs": [
          "We can also use a plain object way of getting/setting keys, like this:",
          "That's allowed for historical reasons, and mostly works, but generally not recommended, because:",
          "1. If the key is user-generated, it can be anything, like `length` or `toString`, or another built-in method of `localStorage`. In that case `getItem/setItem` work fine, while object-like access fails:",
          "let key = 'length';",
          "localStorage[key] = 5; // Error, can't assign length"
        ],
        "codeExamples": [
          {
            "title": "Object-like access",
            "code": "// set key\nlocalStorage.test = 2;\n\n// get key\nalert( localStorage.test ); // 2\n\n// remove key\ndelete localStorage.test;",
            "explanation": "Example demonstrating object-like access."
          }
        ]
      },
      {
        "heading": "Looping over keys",
        "paragraphs": [
          "As we've seen, the methods provide \"get/set/remove by key\" functionality. But how to get all saved values or keys?",
          "Unfortunately, storage objects are not iterable.",
          "One way is to loop over them as over an array:",
          "Another way is to use `for key in localStorage` loop, just as we do with regular objects.",
          "It iterates over keys, but also outputs few built-in fields that we don't need:"
        ],
        "codeExamples": [
          {
            "title": "Looping over keys",
            "code": "for(let i=0; i<localStorage.length; i++) {\n  let key = localStorage.key(i);\n  alert(`${key}: ${localStorage.getItem(key)}`);\n}",
            "explanation": "Example demonstrating looping over keys."
          },
          {
            "title": "Looping over keys",
            "code": "// bad try\nfor(let key in localStorage) {\n  alert(key); // shows getItem, setItem and other built-in stuff\n}",
            "explanation": "Example demonstrating looping over keys."
          }
        ]
      },
      {
        "heading": "Strings only",
        "paragraphs": [
          "Please note that both key and value must be strings.",
          "If they were any other type, like a number, or an object, they would get converted to a string automatically:",
          "We can use `JSON` to store objects though:",
          "Also it is possible to stringify the whole storage object, e.g. for debugging purposes:"
        ],
        "codeExamples": [
          {
            "title": "Strings only",
            "code": "localStorage.user = {name: \"John\"};\nalert(localStorage.user); // [object Object]",
            "explanation": "Example demonstrating strings only."
          },
          {
            "title": "Strings only",
            "code": "localStorage.user = JSON.stringify({name: \"John\"});\n\n// sometime later\nlet user = JSON.parse( localStorage.user );\nalert( user.name ); // John",
            "explanation": "Example demonstrating strings only."
          }
        ]
      },
      {
        "heading": "sessionStorage",
        "paragraphs": [
          "The `sessionStorage` object is used much less often than `localStorage`.",
          "Properties and methods are the same, but it's much more limited:",
          "Let's see that in action.",
          "Run this code...",
          "...Then refresh the page. Now you can still get the data:"
        ],
        "codeExamples": [
          {
            "title": "sessionStorage",
            "code": "sessionStorage.setItem('test', 1);",
            "explanation": "Example demonstrating sessionstorage."
          },
          {
            "title": "sessionStorage",
            "code": "alert( sessionStorage.getItem('test') ); // after refresh: 1",
            "explanation": "Example demonstrating sessionstorage."
          }
        ],
        "bulletPoints": [
          "The `sessionStorage` exists only within the current browser tab.",
          "Another tab with the same page will have a different storage.",
          "But it is shared between iframes in the same tab (assuming they come from the same origin).",
          "The data survives page refresh, but not closing/opening the tab."
        ]
      },
      {
        "heading": "Storage event",
        "paragraphs": [
          "When the data gets updated in `localStorage` or `sessionStorage`, storage event triggers, with properties:",
          "The important thing is: the event triggers on all `window` objects where the storage is accessible, except the one that caused it.",
          "Let's elaborate.",
          "Imagine, you have two windows with the same site in each. So `localStorage` is shared between them.",
          "If both windows are listening for `window.onstorage`, then each one will react on updates that happened in the other one."
        ],
        "codeExamples": [
          {
            "title": "Storage event",
            "code": "You might want to open this page in two browser windows to test the code below.",
            "explanation": "Example demonstrating storage event."
          },
          {
            "title": "Storage event",
            "code": "// triggers on updates made to the same storage from other documents\nwindow.onstorage = event => { // can also use window.addEventListener('storage', event => {\n  if (event.key != 'now') return;\n  alert(event.key + ':' + event.newValue + \" at \" + event.url);\n};\n\nlocalStorage.setItem('now', Date.now());",
            "explanation": "Example demonstrating storage event."
          }
        ],
        "bulletPoints": [
          "`key` \u2013 the key that was changed (`null` if `.clear()` is called).",
          "`oldValue` \u2013 the old value (`null` if the key is newly added).",
          "`newValue` \u2013 the new value (`null` if the key is removed).",
          "`url` \u2013 the url of the document where the update happened.",
          "`storageArea` \u2013 either `localStorage` or `sessionStorage` object where the update happened."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Web storage objects `localStorage` and `sessionStorage` allow to store key/value pairs in the browser.",
          "| `localStorage` | `sessionStorage` |",
          "|----------------|------------------|",
          "| Shared between all tabs and windows with the same origin | Visible within a browser tab, including iframes from the same origin |",
          "| Survives browser restart | Survives page refresh (but not tab close) |"
        ],
        "bulletPoints": [
          "Both `key` and `value` must be strings.",
          "The limit is 5mb+, depends on the browser.",
          "They do not expire.",
          "The data is bound to the origin (domain/port/protocol).",
          "`setItem(key, value)` -- store key/value pair."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Autosave a form field",
        "description": "Create a `textarea` field that \"autosaves\" its value on every change. So, if the user accidentally closes the page, and opens it again, he'll find his unfinished input at place. Like this: [iframe src=\"solution\" height=120]",
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
        "question": "What is the primary role of Localstorage in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for localstorage.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Localstorage is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Localstorage?",
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
      "Localstorage is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying localstorage.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "localstorage"
    ],
    "slug": "localstorage"
  },
  {
    "title": "Indexeddb",
    "description": "libs:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "libs:",
          "IndexedDB is a database that is built into a browser, much more powerful than `localStorage`.",
          "That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies.",
          "The native interface to IndexedDB, described in the specification , is event-based.",
          "We can also use `async/await` with the help of a promise-based wrapper, like . That's pretty convenient, but the wrapper is not perfect, it can't replace events for all cases. So we'll start with events, and then, after we gain an understanding of IndexedDB, we'll use the wrapper."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "Technically, the data is usually stored in the visitor's home directory, along with browser settings, extensions, etc.\n\nDifferent browsers and OS-level users have each their own independant storage.",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "'https://cdn.jsdelivr.net/npm/idb@3.0.2/build/idb.min.js'",
          "Stores almost any kind of values by keys, multiple key types.",
          "Supports transactions for reliability.",
          "Supports key range queries, indexes.",
          "Can store much bigger volumes of data than `localStorage`."
        ]
      },
      {
        "heading": "Open database",
        "paragraphs": [
          "To start working with IndexedDB, we first need to `open` (connect to) a database.",
          "The syntax:",
          "We can have many databases with different names, but all of them exist within the current origin (domain/protocol/port). Different websites can't access each other's databases.",
          "The call returns `openRequest` object, we should listen to events on it:",
          "**IndexedDB has a built-in mechanism of \"schema versioning\", absent in server-side databases.**"
        ],
        "codeExamples": [
          {
            "title": "Open database",
            "code": "let openRequest = indexedDB.open(name, version);",
            "explanation": "Example demonstrating open database."
          },
          {
            "title": "Open database",
            "code": "let openRequest = indexedDB.open(\"store\", *!*1*/!*);\n\nopenRequest.onupgradeneeded = function() {\n  // triggers if the client had no database\n  // ...perform initialization...\n};\n\nopenRequest.onerror = function() {\n  console.error(\"Error\", openRequest.error);\n};\n\nopenRequest.onsuccess = function() {\n  let db = openRequest.result;\n  // continue working with database using db object\n};",
            "explanation": "Example demonstrating open database."
          }
        ],
        "bulletPoints": [
          "`name` -- a string, the database name.",
          "`version` -- a positive integer version, by default `1` (explained below).",
          "`success`: database is ready, there's the \"database object\" in `openRequest.result`, we should use it for further calls.",
          "`error`: opening failed.",
          "`upgradeneeded`: database is ready, but its version is outdated (see below)."
        ]
      },
      {
        "heading": "Parallel update problem",
        "paragraphs": [
          "As we're talking about versioning, let's tackle a small related problem.",
          "Let's say:",
          "1. A visitor opened our site in a browser tab, with database version `1`.",
          "2. Then we rolled out an update, so our code is newer.",
          "3. And then the same visitor opens our site in another tab."
        ],
        "codeExamples": [
          {
            "title": "Parallel update problem",
            "code": "let openRequest = indexedDB.open(\"store\", 2);\n\nopenRequest.onupgradeneeded = ...;\nopenRequest.onerror = ...;\n\nopenRequest.onsuccess = function() {\n  let db = openRequest.result;\n\n  *!*\n  db.onversionchange = function() {\n    db.close();\n    alert(\"Database is outdated, please reload the page.\")\n  };\n  */!*\n\n  // ...the db is ready, use it...\n};\n\n*!*\nopenRequest.onblocked = function() {\n  // this event shouldn't trigger if we handle onversionchange correctly\n\n  // it means that there's another open connection to the same database\n  // and it wasn't closed after db.onversionchange triggered for it\n};\n*/!*",
            "explanation": "Example demonstrating parallel update problem."
          }
        ]
      },
      {
        "heading": "Object store",
        "paragraphs": [
          "To store something in IndexedDB, we need an *object store*.",
          "An object store is a core concept of IndexedDB. Counterparts in other databases are called \"tables\" or \"collections\". It's where the data is stored. A database may have multiple stores: one for users, another one for goods, etc.",
          "Despite being named an \"object store\", primitives can be stored too.",
          "**We can store almost any value, including complex objects.**",
          "IndexedDB uses the standard serialization algorithm to clone-and-store an object. It's like `JSON.stringify`, but more powerful, capable of storing much more datatypes."
        ],
        "codeExamples": [
          {
            "title": "Object store",
            "code": "db.createObjectStore(name[, keyOptions]);",
            "explanation": "Example demonstrating object store."
          },
          {
            "title": "Object store",
            "code": "db.createObjectStore('books', {keyPath: 'id'});",
            "explanation": "Example demonstrating object store."
          }
        ],
        "bulletPoints": [
          "`name` is the store name, e.g. `\"books\"` for books,",
          "`keyOptions` is an optional object with one of two properties:",
          "`keyPath` -- a path to an object property that IndexedDB will use as the key, e.g. `id`.",
          "`autoIncrement` -- if `true`, then the key for a newly stored object is generated automatically, as an ever-incrementing number."
        ]
      },
      {
        "heading": "Transactions",
        "paragraphs": [
          "The term \"transaction\" is generic, used in many kinds of databases.",
          "A transaction is a group of operations, that should either all succeed or all fail.",
          "For instance, when a person buys something, we need to:",
          "1. Subtract the money from their account.",
          "2. Add the item to their inventory."
        ],
        "codeExamples": [
          {
            "title": "Transactions",
            "code": "db.transaction(store[, type]);",
            "explanation": "Example demonstrating transactions."
          },
          {
            "title": "Transactions",
            "code": "Performance is the reason why transactions need to be labeled either `readonly` and `readwrite`.\n\nMany `readonly` transactions are able to access the same store concurrently, but `readwrite` transactions can't. A `readwrite` transaction \"locks\" the store for writing. The next transaction must wait before the previous one finishes before accessing the same store.",
            "explanation": "Example demonstrating transactions."
          }
        ],
        "bulletPoints": [
          "`store` is a store name that the transaction is going to access, e.g. `\"books\"`. Can be an array of store names if we're going to access multiple stores.",
          "`type` \u2013 a transaction type, one of:",
          "`readonly` -- can only read, the default.",
          "`readwrite` -- can only read and write the data, but not create/remove/alter object stores.",
          "**put(value, [key])**"
        ]
      },
      {
        "heading": "Transactions' autocommit",
        "paragraphs": [
          "In the example above we started the transaction and made `add` request. But as we stated previously, a transaction may have multiple associated requests, that must either all succeed or all fail. How do we mark the transaction as finished, with no more requests to come?",
          "The short answer is: we don't.",
          "In the next version 3.0 of the specification, there will probably be a manual way to finish the transaction, but right now in 2.0 there isn't.",
          "**When all transaction requests are finished, and the microtasks queue is empty, it is committed automatically.**",
          "Usually, we can assume that a transaction commits when all its requests are complete, and the current code finishes."
        ],
        "codeExamples": [
          {
            "title": "Transactions' autocommit",
            "code": "let request1 = books.add(book);\n\nrequest1.onsuccess = function() {\n  fetch('/').then(response => {\n*!*\n    let request2 = books.add(anotherBook); // (*)\n*/!*\n    request2.onerror = function() {\n      console.log(request2.error.name); // TransactionInactiveError\n    };\n  });\n};",
            "explanation": "Example demonstrating transactions' autocommit."
          },
          {
            "title": "Transactions' autocommit",
            "code": "let transaction = db.transaction(\"books\", \"readwrite\");\n\n// ...perform operations...\n\ntransaction.oncomplete = function() {\n  console.log(\"Transaction is complete\");\n};",
            "explanation": "Example demonstrating transactions' autocommit."
          }
        ]
      },
      {
        "heading": "Error handling",
        "paragraphs": [
          "Write requests may fail.",
          "That's to be expected, not only because of possible errors at our side, but also for reasons not related to the transaction itself. For instance, the storage quota may be exceeded. So we must be ready to handle such case.",
          "**A failed request automatically aborts the transaction, canceling all its changes.**",
          "In some situations, we may want to handle the failure (e.g. try another request), without canceling existing changes, and continue the transaction. That's possible. The `request.onerror` handler is able to prevent the transaction abort by calling `event.preventDefault()`.",
          "In the example below a new book is added with the same key (`id`) as the existing one. The `store.add` method generates a `\"ConstraintError\"` in that case. We handle it without canceling the transaction:"
        ],
        "codeExamples": [
          {
            "title": "Error handling",
            "code": "let transaction = db.transaction(\"books\", \"readwrite\");\n\nlet book = { id: 'js', price: 10 };\n\nlet request = transaction.objectStore(\"books\").add(book);\n\nrequest.onerror = function(event) {\n  // ConstraintError occurs when an object with the same id already exists\n  if (request.error.name == \"ConstraintError\") {\n    console.log(\"Book with such id already exists\"); // handle the error\n    event.preventDefault(); // don't abort the transaction\n    // use another key for the book?\n  } else {\n    // unexpected error, can't handle it\n    // the transaction will abort\n  }\n};\n\ntransaction.onabort = function() {\n  console.log(\"Error\", transaction.error);\n};",
            "explanation": "Example demonstrating error handling."
          }
        ]
      },
      {
        "heading": "Event delegation",
        "paragraphs": [
          "Do we need onerror/onsuccess for every request? Not every time. We can use event delegation instead.",
          "**IndexedDB events bubble: `request` -> `transaction` -> `database`.**",
          "All events are DOM events, with capturing and bubbling, but usually only bubbling stage is used.",
          "So we can catch all errors using `db.onerror` handler, for reporting or other purposes:",
          "...But what if an error is fully handled? We don't want to report it in that case."
        ],
        "codeExamples": [
          {
            "title": "Event delegation",
            "code": "db.onerror = function(event) {\n  let request = event.target; // the request that caused the error\n\n  console.log(\"Error\", request.error);\n};",
            "explanation": "Example demonstrating event delegation."
          },
          {
            "title": "Event delegation",
            "code": "request.onerror = function(event) {\n  if (request.error.name == \"ConstraintError\") {\n    console.log(\"Book with such id already exists\"); // handle the error\n    event.preventDefault(); // don't abort the transaction\n    event.stopPropagation(); // don't bubble error up, \"chew\" it\n  } else {\n    // do nothing\n    // transaction will be aborted\n    // we can take care of error in transaction.onabort\n  }\n};",
            "explanation": "Example demonstrating event delegation."
          }
        ]
      },
      {
        "heading": "Searching",
        "paragraphs": [
          "There are two main types of search in an object store:",
          "1. By a key value or a key range. In our \"books\" storage that would be a value or range of values of `book.id`.",
          "2. By another object field, e.g. `book.price`. This required an additional data structure, named \"index\"."
        ]
      },
      {
        "heading": "By key",
        "paragraphs": [
          "First let's deal with the first type of search: by key.",
          "Searching methods support both exact key values and so-called \"ranges of values\" -- IDBKeyRange objects that specify an acceptable \"key range\".",
          "`IDBKeyRange` objects are created using following calls:",
          "We'll see practical examples of using them very soon.",
          "To perform the actual search, there are following methods. They accept a `query` argument that can be either an exact key or a key range:"
        ],
        "codeExamples": [
          {
            "title": "By key",
            "code": "// get one book\nbooks.get('js')\n\n// get books with 'css' <= id <= 'html'\nbooks.getAll(IDBKeyRange.bound('css', 'html'))\n\n// get books with id < 'html'\nbooks.getAll(IDBKeyRange.upperBound('html', true))\n\n// get all books\nbooks.getAll()\n\n// get all keys, where id > 'js'\nbooks.getAllKeys(IDBKeyRange.lowerBound('js', true))",
            "explanation": "Example demonstrating by key."
          },
          {
            "title": "By key",
            "code": "An object store sorts values by key internally.\n\nSo requests that return many values always return them in sorted by key order.",
            "explanation": "Example demonstrating by key."
          }
        ],
        "bulletPoints": [
          "`IDBKeyRange.lowerBound(lower, [open])` means: `\u2265lower` (or `>lower` if `open` is true)",
          "`IDBKeyRange.upperBound(upper, [open])` means: `\u2264upper` (or `<upper` if `open` is true)",
          "`IDBKeyRange.bound(lower, upper, [lowerOpen], [upperOpen])` means: between `lower` and `upper`. If the open flags is true, the corresponding key is not included in the range.",
          "`IDBKeyRange.only(key)` -- a range that consists of only one `key`, rarely used.",
          "`store.get(query)` -- search for the first value by a key or a range."
        ]
      },
      {
        "heading": "By a field using an index",
        "paragraphs": [
          "To search by other object fields, we need to create an additional data structure named \"index\".",
          "An index is an \"add-on\" to the store that tracks a given object field. For each value of that field, it stores a list of keys for objects that have that value. There will be a more detailed picture below.",
          "The syntax:",
          "In our example, we store books keyed by `id`.",
          "Let's say we want to search by `price`."
        ],
        "codeExamples": [
          {
            "title": "By a field using an index",
            "code": "objectStore.createIndex(name, keyPath, [options]);",
            "explanation": "Example demonstrating by a field using an index."
          },
          {
            "title": "By a field using an index",
            "code": "openRequest.onupgradeneeded = function() {\n  // we must create the index here, in versionchange transaction\n  let books = db.createObjectStore('books', {keyPath: 'id'});\n*!*\n  let index = books.createIndex('price_idx', 'price');\n*/!*\n};",
            "explanation": "Example demonstrating by a field using an index."
          }
        ],
        "bulletPoints": [
          "**`name`** -- index name,",
          "**`keyPath`** -- path to the object field that the index should track (we're going to search by that field),",
          "**`option`** -- an optional object with properties:",
          "**`unique`** -- if true, then there may be only one object in the store with the given value at the `keyPath`. The index will enforce that by generating an error if we try to add a duplicate.",
          "**`multiEntry`** -- only used if the value on `keyPath` is an array. In that case, by default, the index will treat the whole array as the key. But if `multiEntry` is true, then the index will keep a list of store objects for each value in that array. So array members become index keys."
        ]
      },
      {
        "heading": "Deleting from store",
        "paragraphs": [
          "The `delete` method looks up values to delete by a query, the call format is similar to `getAll`:",
          "For instance:",
          "If we'd like to delete books based on a price or another object field, then we should first find the key in the index, and then call `delete`:",
          "To delete everything:"
        ],
        "codeExamples": [
          {
            "title": "Deleting from store",
            "code": "// delete the book with id='js'\nbooks.delete('js');",
            "explanation": "Example demonstrating deleting from store."
          },
          {
            "title": "Deleting from store",
            "code": "// find the key where price = 5\nlet request = priceIndex.getKey(5);\n\nrequest.onsuccess = function() {\n  let id = request.result;\n  let deleteRequest = books.delete(id);\n};",
            "explanation": "Example demonstrating deleting from store."
          }
        ],
        "bulletPoints": [
          "**`delete(query)`** -- delete matching values by query."
        ]
      },
      {
        "heading": "Cursors",
        "paragraphs": [
          "Methods like `getAll/getAllKeys` return an array of keys/values.",
          "But an object storage can be huge, bigger than the available memory. Then `getAll` will fail to get all records as an array.",
          "What to do?",
          "Cursors provide the means to work around that.",
          "**A *cursor* is a special object that traverses the object storage, given a query, and returns one key/value at a time, thus saving memory.**"
        ],
        "codeExamples": [
          {
            "title": "Cursors",
            "code": "// like getAll, but with a cursor:\nlet request = store.openCursor(query, [direction]);\n\n// to get keys, not values (like getAllKeys): store.openKeyCursor",
            "explanation": "Example demonstrating cursors."
          },
          {
            "title": "Cursors",
            "code": "let transaction = db.transaction(\"books\");\nlet books = transaction.objectStore(\"books\");\n\nlet request = books.openCursor();\n\n// called for each book found by the cursor\nrequest.onsuccess = function() {\n  let cursor = request.result;\n  if (cursor) {\n    let key = cursor.key; // book key (id field)\n    let value = cursor.value; // book object\n    console.log(key, value);\n    cursor.continue();\n  } else {\n    console.log(\"No more books\");\n  }\n};",
            "explanation": "Example demonstrating cursors."
          }
        ],
        "bulletPoints": [
          "**`query`** is a key or a key range, same as for `getAll`.",
          "**`direction`** is an optional argument, which order to use:",
          "`\"next\"` -- the default, the cursor walks up from the record with the lowest key.",
          "`\"prev\"` -- the reverse order: down from the record with the biggest key.",
          "`\"nextunique\"`, `\"prevunique\"` -- same as above, but skip records with the same key (only for cursors over indexes, e.g. for multiple books with price=5 only the first one will be returned)."
        ]
      },
      {
        "heading": "Promise wrapper",
        "paragraphs": [
          "Adding `onsuccess/onerror` to every request is quite a cumbersome task. Sometimes we can make our life easier by using event delegation, e.g. set handlers on the whole transactions, but `async/await` is much more convenient.",
          "Let's use a thin promise wrapper further in this chapter. It creates a global `idb` object with promisified IndexedDB methods.",
          "Then, instead of `onsuccess/onerror` we can write like this:",
          "So we have all the sweet \"plain async code\" and \"try..catch\" stuff."
        ],
        "codeExamples": [
          {
            "title": "Promise wrapper",
            "code": "let db = await idb.openDB('store', 1, db => {\n  if (db.oldVersion == 0) {\n    // perform the initialization\n    db.createObjectStore('books', {keyPath: 'id'});\n  }\n});\n\nlet transaction = db.transaction('books', 'readwrite');\nlet books = transaction.objectStore('books');\n\ntry {\n  await books.add(...);\n  await books.add(...);\n\n  await transaction.complete;\n\n  console.log('jsbook saved');\n} catch(err) {\n  console.log('error', err.message);\n}",
            "explanation": "Example demonstrating promise wrapper."
          }
        ]
      },
      {
        "heading": "Error handling",
        "paragraphs": [
          "If we don't catch an error, then it falls through, till the closest outer `try..catch`.",
          "An uncaught error becomes an \"unhandled promise rejection\" event on `window` object.",
          "We can handle such errors like this:"
        ],
        "codeExamples": [
          {
            "title": "Error handling",
            "code": "window.addEventListener('unhandledrejection', event => {\n  let request = event.target; // IndexedDB native request object\n  let error = event.reason; //  Unhandled error object, same as request.error\n  ...report about the error...\n});",
            "explanation": "Example demonstrating error handling."
          }
        ]
      },
      {
        "heading": "\"Inactive transaction\" pitfall",
        "paragraphs": [
          "As we already know, a transaction auto-commits as soon as the browser is done with the current code and microtasks. So if we put a *macrotask* like `fetch` in the middle of a transaction, then the transaction won't wait for it to finish. It just auto-commits. So the next request in it would fail.",
          "For a promise wrapper and `async/await` the situation is the same.",
          "Here's an example of `fetch` in the middle of the transaction:",
          "The next `inventory.add` after `fetch` `(*)` fails with an \"inactive transaction\" error, because the transaction is already committed and closed at that time.",
          "The workaround is the same as when working with native IndexedDB: either make a new transaction or just split things apart."
        ],
        "codeExamples": [
          {
            "title": "\"Inactive transaction\" pitfall",
            "code": "let transaction = db.transaction(\"inventory\", \"readwrite\");\nlet inventory = transaction.objectStore(\"inventory\");\n\nawait inventory.add({ id: 'js', price: 10, created: new Date() });\n\nawait fetch(...); // (*)\n\nawait inventory.add({ id: 'js', price: 10, created: new Date() }); // Error",
            "explanation": "Example demonstrating \"inactive transaction\" pitfall."
          }
        ]
      },
      {
        "heading": "Getting native objects",
        "paragraphs": [
          "Internally, the wrapper performs a native IndexedDB request, adding `onerror/onsuccess` to it, and returns a promise that rejects/resolves with the result.",
          "That works fine most of the time. The examples are at the lib page .",
          "In few rare cases, when we need the original `request` object, we can access it as `promise.request` property of the promise:"
        ],
        "codeExamples": [
          {
            "title": "Getting native objects",
            "code": "let promise = books.add(book); // get a promise (don't await for its result)\n\nlet request = promise.request; // native request object\nlet transaction = request.transaction; // native transaction object\n\n// ...do some native IndexedDB voodoo...\n\nlet result = await promise; // if still needed",
            "explanation": "Example demonstrating getting native objects."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "IndexedDB can be thought of as a \"localStorage on steroids\". It's a simple key-value database, powerful enough for offline apps, yet simple to use.",
          "The best manual is the specification, the current one is 2.0, but few methods from 3.0 (it's not much different) are partially supported.",
          "The basic usage can be described with a few phrases:",
          "1. Get a promise wrapper like idb.",
          "2. Open a database: `idb.openDb(name, version, onupgradeneeded)`"
        ],
        "bulletPoints": [
          "Create object storages and indexes in `onupgradeneeded` handler or perform version update if needed.",
          "Create transaction `db.transaction('books')` (readwrite if needed).",
          "Get the object store `transaction.objectStore('books')`.",
          "To search by an object field, create an index."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Indexeddb",
        "description": "Apply your understanding of Indexeddb. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Indexeddb\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Indexeddb\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Indexeddb in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for indexeddb.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Indexeddb is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Indexeddb?",
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
      "Indexeddb is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying indexeddb.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "indexeddb"
    ],
    "slug": "indexeddb"
  },
  {
    "title": "Arraybuffer Binary Arrays",
    "description": "In web-development we meet binary data mostly while dealing with files (create, upload, download). Another typical use case is image processing.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In web-development we meet binary data mostly while dealing with files (create, upload, download). Another typical use case is image processing.",
          "That's all possible in JavaScript, and binary operations are high-performant.",
          "Although, there's a bit of confusion, because there are many classes. To name a few:",
          "Binary data in JavaScript is implemented in a non-standard way, compared to other languages. But when we sort things out, everything becomes fairly simple.",
          "**The basic binary object is `ArrayBuffer` -- a reference to a fixed-length contiguous memory area.**"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let buffer = new ArrayBuffer(16); // create a buffer of length 16\nalert(buffer.byteLength); // 16",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "Let's eliminate a possible source of confusion. `ArrayBuffer` has nothing in common with `Array`:\n- It has a fixed length, we can't increase or decrease it.\n- It takes exactly that much space in the memory.\n- To access individual bytes, another \"view\" object is needed, not `buffer[index]`.",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "`ArrayBuffer`, `Uint8Array`, `DataView`, `Blob`, `File`, etc.",
          "**`Uint8Array`** -- treats each byte in `ArrayBuffer` as a separate number, with possible values from 0 to 255 (a byte is 8-bit, so it can hold only that much). Such value is called a \"8-bit unsigned integer\".",
          "**`Uint16Array`** -- treats every 2 bytes as an integer, with possible values from 0 to 65535. That's called a \"16-bit unsigned integer\".",
          "**`Uint32Array`** -- treats every 4 bytes as an integer, with possible values from 0 to 4294967295. That's called a \"32-bit unsigned integer\".",
          "**`Float64Array`** -- treats every 8 bytes as a floating point number with possible values from 5.0x10-324 to 1.8x10308."
        ]
      },
      {
        "heading": "TypedArray",
        "paragraphs": [
          "The common term for all these views (`Uint8Array`, `Uint32Array`, etc) is TypedArray. They share the same set of methods and properties.",
          "Please note, there's no constructor called `TypedArray`, it's just a common \"umbrella\" term to represent one of views over `ArrayBuffer`: `Int8Array`, `Uint8Array` and so on, the full list will soon follow.",
          "When you see something like `new TypedArray`, it means any of `new Int8Array`, `new Uint8Array`, etc.",
          "Typed arrays behave like regular arrays: have indexes and are iterable.",
          "A typed array constructor (be it `Int8Array` or `Float64Array`, doesn't matter) behaves differently depending on argument types."
        ],
        "codeExamples": [
          {
            "title": "TypedArray",
            "code": "new TypedArray(buffer, [byteOffset], [length]);\nnew TypedArray(object);\nnew TypedArray(typedArray);\nnew TypedArray(length);\nnew TypedArray();",
            "explanation": "Example demonstrating typedarray."
          },
          {
            "title": "TypedArray",
            "code": "let arr8 = new Uint8Array([0, 1, 2, 3]);\n\n// another view on the same data\nlet arr16 = new Uint16Array(arr8.buffer);",
            "explanation": "Example demonstrating typedarray."
          }
        ],
        "bulletPoints": [
          "`buffer` -- references the `ArrayBuffer`.",
          "`byteLength` -- the length of the `ArrayBuffer`.",
          "`Uint8Array`, `Uint16Array`, `Uint32Array` -- for integer numbers of 8, 16 and 32 bits.",
          "`Uint8ClampedArray` -- for 8-bit integers, \"clamps\" them on assignment (see below).",
          "`Int8Array`, `Int16Array`, `Int32Array` -- for signed integer numbers (can be negative)."
        ]
      },
      {
        "heading": "Out-of-bounds behavior",
        "paragraphs": [
          "What if we attempt to write an out-of-bounds value into a typed array? There will be no error. But extra bits are cut-off.",
          "For instance, let's try to put 256 into `Uint8Array`. In binary form, 256 is `100000000` (9 bits), but `Uint8Array` only provides 8 bits per value, that makes the available range from 0 to 255.",
          "For bigger numbers, only the rightmost (less significant) 8 bits are stored, and the rest is cut off:",
          "![](8bit-integer-256.svg)",
          "So we'll get zero."
        ],
        "codeExamples": [
          {
            "title": "Out-of-bounds behavior",
            "code": "let uint8array = new Uint8Array(16);\n\nlet num = 256;\nalert(num.toString(2)); // 100000000 (binary representation)\n\nuint8array[0] = 256;\nuint8array[1] = 257;\n\nalert(uint8array[0]); // 0\nalert(uint8array[1]); // 1",
            "explanation": "Example demonstrating out-of-bounds behavior."
          }
        ]
      },
      {
        "heading": "TypedArray methods",
        "paragraphs": [
          "`TypedArray` has regular `Array` methods, with notable exceptions.",
          "We can iterate, `map`, `slice`, `find`, `reduce` etc.",
          "There are few things we can't do though:",
          "There are two additional methods:",
          "These methods allow us to copy typed arrays, mix them, create new arrays from existing ones, and so on."
        ],
        "bulletPoints": [
          "No `splice` -- we can't \"delete\" a value, because typed arrays are views on a buffer, and these are fixed, contiguous areas of memory. All we can do is to assign a zero.",
          "No `concat` method.",
          "`arr.set(fromArr, [offset])` copies all elements from `fromArr` to the `arr`, starting at position `offset` (0 by default).",
          "`arr.subarray([begin, end])` creates a new view of the same type from `begin` to `end` (exclusive). That's similar to `slice` method (that's also supported), but doesn't copy anything -- just creates a new view, to operate on the given piece of data."
        ]
      },
      {
        "heading": "DataView",
        "paragraphs": [
          "DataView is a special super-flexible \"untyped\" view over `ArrayBuffer`. It allows to access the data on any offset in any format.",
          "The syntax:",
          "For instance, here we extract numbers in different formats from the same buffer:",
          "`DataView` is great when we store mixed-format data in the same buffer. For example, when we store a sequence of pairs (16-bit integer, 32-bit float), `DataView` allows to access them easily."
        ],
        "codeExamples": [
          {
            "title": "DataView",
            "code": "new DataView(buffer, [byteOffset], [byteLength])",
            "explanation": "Example demonstrating dataview."
          },
          {
            "title": "DataView",
            "code": "// binary array of 4 bytes, all have the maximal value 255\nlet buffer = new Uint8Array([255, 255, 255, 255]).buffer;\n\nlet dataView = new DataView(buffer);\n\n// get 8-bit number at offset 0\nalert( dataView.getUint8(0) ); // 255\n\n// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535\nalert( dataView.getUint16(0) ); // 65535 (biggest 16-bit unsigned int)\n\n// get 32-bit number at offset 0\nalert( dataView.getUint32(0) ); // 4294967295 (biggest 32-bit unsigned int)\n\ndataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0",
            "explanation": "Example demonstrating dataview."
          }
        ],
        "bulletPoints": [
          "For typed arrays, the constructor dictates what the format is. The whole array is supposed to be uniform. The i-th number is `arr[i]`.",
          "With `DataView` we access the data with methods like `.getUint8(i)` or `.getUint16(i)`. We choose the format at method call time instead of the construction time.",
          "**`buffer`** -- the underlying `ArrayBuffer`. Unlike typed arrays, `DataView` doesn't create a buffer on its own. We need to have it ready.",
          "**`byteOffset`** -- the starting byte position of the view (by default 0).",
          "**`byteLength`** -- the byte length of the view (by default till the end of `buffer`)."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`ArrayBuffer` is the core object, a reference to the fixed-length contiguous memory area.",
          "To do almost any operation on `ArrayBuffer`, we need a view.",
          "In most cases we create and operate directly on typed arrays, leaving `ArrayBuffer` under cover, as a \"common denominator\". We can access it as `.buffer` and make another view if needed.",
          "There are also two additional terms, that are used in descriptions of methods that operate on binary data:",
          "We'll see these terms in the next chapters. `BufferSource` is one of the most common terms, as it means \"any kind of binary data\" -- an `ArrayBuffer` or a view over it."
        ],
        "bulletPoints": [
          "It can be a `TypedArray`:",
          "`Uint8Array`, `Uint16Array`, `Uint32Array` -- for unsigned integers of 8, 16, and 32 bits.",
          "`Uint8ClampedArray` -- for 8-bit integers, \"clamps\" them on assignment.",
          "`Int8Array`, `Int16Array`, `Int32Array` -- for signed integer numbers (can be negative).",
          "`Float32Array`, `Float64Array` -- for signed floating-point numbers of 32 and 64 bits."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Concatenate typed arrays",
        "description": "Given an array of `Uint8Array`, write a function `concat(arrays)` that returns a concatenation of them into a single array.",
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
        "question": "What is the primary role of Arraybuffer Binary Arrays in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for arraybuffer binary arrays.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Arraybuffer Binary Arrays is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Arraybuffer Binary Arrays?",
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
      "Arraybuffer Binary Arrays is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying arraybuffer binary arrays.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "arraybuffer-binary-arrays"
    ],
    "slug": "arraybuffer-binary-arrays"
  },
  {
    "title": "Text Decoder",
    "description": "What if the binary data is actually a string? For instance, we received a file with textual data.",
    "difficulty": "advanced",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "What if the binary data is actually a string? For instance, we received a file with textual data.",
          "The built-in TextDecoder object allows one to read the value into an actual JavaScript string, given the buffer and the encoding.",
          "We first need to create it:",
          "...And then decode:",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let decoder = new TextDecoder([label], [options]);",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let str = decoder.decode([input], [options]);",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "**`label`** -- the encoding, `utf-8` by default, but `big5`, `windows-1251` and many other are also supported.",
          "**`options`** -- optional object:",
          "**`fatal`** -- boolean, if `true` then throw an exception for invalid (non-decodable) characters, otherwise (default) replace them with character `\\uFFFD`.",
          "**`ignoreBOM`** -- boolean, if `true` then ignore BOM (an optional byte-order Unicode mark), rarely needed.",
          "**`input`** -- `BufferSource` to decode."
        ]
      },
      {
        "heading": "TextEncoder",
        "paragraphs": [
          "TextEncoder does the reverse thing -- converts a string into bytes.",
          "The syntax is:",
          "The only encoding it supports is \"utf-8\".",
          "It has two methods:"
        ],
        "codeExamples": [
          {
            "title": "TextEncoder",
            "code": "let encoder = new TextEncoder();",
            "explanation": "Example demonstrating textencoder."
          },
          {
            "title": "TextEncoder",
            "code": "let encoder = new TextEncoder();\n\nlet uint8Array = encoder.encode(\"Hello\");\nalert(uint8Array); // 72,101,108,108,111",
            "explanation": "Example demonstrating textencoder."
          }
        ],
        "bulletPoints": [
          "**`encode(str)`** -- returns `Uint8Array` from a string.",
          "**`encodeInto(str, destination)`** -- encodes `str` into `destination` that must be `Uint8Array`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Text Decoder",
        "description": "Apply your understanding of Text Decoder. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Text Decoder\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Text Decoder\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Text Decoder in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for text decoder.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Text Decoder is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Text Decoder?",
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
      "Text Decoder is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying text decoder.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "text-decoder"
    ],
    "slug": "text-decoder"
  },
  {
    "title": "Blob",
    "description": "`ArrayBuffer` and views are a part of ECMA standard, a part of JavaScript.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "`ArrayBuffer` and views are a part of ECMA standard, a part of JavaScript.",
          "In the browser, there are additional higher-level objects, described in File API, in particular `Blob`.",
          "`Blob` consists of an optional string `type` (a MIME-type usually), plus `blobParts` -- a sequence of other `Blob` objects, strings and `BufferSource`.",
          "![](blob.svg)",
          "The constructor syntax is:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "new Blob(blobParts, options);",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "// create Blob from a string\nlet blob = new Blob([\"<html>\u2026</html>\"], {type: 'text/html'});\n// please note: the first argument must be an array [...]",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "**`blobParts`** is an array of `Blob`/`BufferSource`/`String` values.",
          "**`options`** optional object:",
          "**`type`** -- `Blob` type, usually MIME-type, e.g. `image/png`,",
          "**`endings`** -- whether to transform end-of-line to make the `Blob` correspond to current OS newlines (`\\r\\n` or `\\n`). By default `\"transparent\"` (do nothing), but also can be `\"native\"` (transform).",
          "**`byteStart`** -- the starting byte, by default 0."
        ]
      },
      {
        "heading": "Blob as URL",
        "paragraphs": [
          "A Blob can be easily used as a URL for ``, `` or other tags, to show its contents.",
          "Thanks to `type`, we can also download/upload `Blob` objects, and the `type` naturally becomes `Content-Type` in network requests.",
          "Let's start with a simple example. By clicking on a link you download a dynamically-generated `Blob` with `hello world` contents as a file:",
          "We can also create a link dynamically in JavaScript and simulate a click by `link.click()`, then download starts automatically.",
          "Here's the similar code that causes user to download the dynamically created `Blob`, without any HTML:"
        ],
        "codeExamples": [
          {
            "title": "Blob as URL",
            "code": "<!-- download attribute forces the browser to download instead of navigating -->\n<a download=\"hello.txt\" href='#' id=\"link\">Download</a>\n\n<script>\nlet blob = new Blob([\"Hello, world!\"], {type: 'text/plain'});\n\nlink.href = URL.createObjectURL(blob);\n</script>",
            "explanation": "Example demonstrating blob as url."
          },
          {
            "title": "Blob as URL",
            "code": "let link = document.createElement('a');\nlink.download = 'hello.txt';\n\nlet blob = new Blob(['Hello, world!'], {type: 'text/plain'});\n\nlink.href = URL.createObjectURL(blob);\n\nlink.click();\n\nURL.revokeObjectURL(link.href);",
            "explanation": "Example demonstrating blob as url."
          }
        ]
      },
      {
        "heading": "Blob to base64",
        "paragraphs": [
          "An alternative to `URL.createObjectURL` is to convert a `Blob` into a base64-encoded string.",
          "That encoding represents binary data as a string of ultra-safe \"readable\" characters with ASCII-codes from 0 to 64. And what's more important -- we can use this encoding in \"data-urls\".",
          "A data url has the form `data:[][;base64],`. We can use such urls everywhere, on par with \"regular\" urls.",
          "For instance, here's a smiley:",
          "The browser will decode the string and show the image:"
        ],
        "codeExamples": [
          {
            "title": "Blob to base64",
            "code": "<img src=\"data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7\">",
            "explanation": "Example demonstrating blob to base64."
          },
          {
            "title": "Blob to base64",
            "code": "let link = document.createElement('a');\nlink.download = 'hello.txt';\n\nlet blob = new Blob(['Hello, world!'], {type: 'text/plain'});\n\n*!*\nlet reader = new FileReader();\nreader.readAsDataURL(blob); // converts the blob to base64 and calls onload\n*/!*\n\nreader.onload = function() {\n  link.href = reader.result; // data url\n  link.click();\n};",
            "explanation": "Example demonstrating blob to base64."
          }
        ]
      },
      {
        "heading": "Image to blob",
        "paragraphs": [
          "We can create a `Blob` of an image, an image part, or even make a page screenshot. That's handy to upload it somewhere.",
          "Image operations are done via `` element:",
          "1. Draw an image (or its part) on canvas using canvas.drawImage.",
          "2. Call canvas method .toBlob(callback, format, quality) that creates a `Blob` and runs `callback` with it when done.",
          "In the example below, an image is just copied, but we could cut from it, or transform it on canvas prior to making a blob:"
        ],
        "codeExamples": [
          {
            "title": "Image to blob",
            "code": "// take any image\nlet img = document.querySelector('img');\n\n// make <canvas> of the same size\nlet canvas = document.createElement('canvas');\ncanvas.width = img.clientWidth;\ncanvas.height = img.clientHeight;\n\nlet context = canvas.getContext('2d');\n\n// copy image to it (this method allows to cut image)\ncontext.drawImage(img, 0, 0);\n// we can context.rotate(), and do many other things on canvas\n\n// toBlob is async operation, callback is called when done\ncanvas.toBlob(function(blob) {\n  // blob ready, download it\n  let link = document.createElement('a');\n  link.download = 'example.png';\n\n  link.href = URL.createObjectURL(blob);\n  link.click();\n\n  // delete the internal blob reference, to let the browser clear memory from it\n  URL.revokeObjectURL(link.href);\n}, 'image/png');",
            "explanation": "Example demonstrating image to blob."
          },
          {
            "title": "Image to blob",
            "code": "let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));",
            "explanation": "Example demonstrating image to blob."
          }
        ]
      },
      {
        "heading": "From Blob to ArrayBuffer",
        "paragraphs": [
          "The `Blob` constructor allows to create a blob from almost anything, including any `BufferSource`.",
          "But if we need to perform low-level processing, we can get the lowest-level `ArrayBuffer` from `blob.arrayBuffer()`:"
        ],
        "codeExamples": [
          {
            "title": "From Blob to ArrayBuffer",
            "code": "// get arrayBuffer from blob\nconst bufferPromise = await blob.arrayBuffer();\n\n// or\nblob.arrayBuffer().then(buffer => /* process the ArrayBuffer */);",
            "explanation": "Example demonstrating from blob to arraybuffer."
          }
        ]
      },
      {
        "heading": "From Blob to stream",
        "paragraphs": [
          "When we read and write to a blob of more than `2 GB`, the use of `arrayBuffer` becomes more memory intensive for us. At this point, we can directly convert the blob to a stream.",
          "A stream is a special object that allows to read from it (or write into it) portion by portion. It's outside of our scope here, but here's an example, and you can read more at . Streams are convenient for data that is suitable for processing piece-by-piece.",
          "The `Blob` interface's `stream()` method returns a `ReadableStream` which upon reading returns the data contained within the `Blob`.",
          "Then we can read from it, like this:"
        ],
        "codeExamples": [
          {
            "title": "From Blob to stream",
            "code": "// get readableStream from blob\nconst readableStream = blob.stream();\nconst stream = readableStream.getReader();\n\nwhile (true) {\n  // for each iteration: value is the next blob fragment\n  let { done, value } = await stream.read();\n  if (done) {\n    // no more data in the stream\n    console.log('all blob processed.');\n    break;\n  }\n\n   // do something with the data portion we've just read from the blob\n  console.log(value);\n}",
            "explanation": "Example demonstrating from blob to stream."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "While `ArrayBuffer`, `Uint8Array` and other `BufferSource` are \"binary data\", a Blob represents \"binary data with type\".",
          "That makes Blobs convenient for upload/download operations, that are so common in the browser.",
          "Methods that perform web-requests, such as XMLHttpRequest, fetch and so on, can work with `Blob` natively, as well as with other binary types.",
          "We can easily convert between `Blob` and low-level binary data types:",
          "Conversion streams are very useful when we need to handle large blob. You can easily create a `ReadableStream` from a blob. The `Blob` interface's `stream()` method returns a `ReadableStream` which upon reading returns the data contained within the blob."
        ],
        "bulletPoints": [
          "We can make a `Blob` from a typed array using `new Blob(...)` constructor.",
          "We can get back `ArrayBuffer` from a Blob using `blob.arrayBuffer()`, and then create a view over it for low-level binary processing."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Blob",
        "description": "Apply your understanding of Blob. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Blob\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Blob\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Blob in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for blob.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Blob is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Blob?",
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
      "Blob is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying blob.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "blob"
    ],
    "slug": "blob"
  },
  {
    "title": "File",
    "description": "A File object inherits from `Blob` and is extended with filesystem-related capabilities.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A File object inherits from `Blob` and is extended with filesystem-related capabilities.",
          "There are two ways to obtain it.",
          "First, there's a constructor, similar to `Blob`:",
          "Second, more often we get a file from `` or drag'n'drop or other browser interfaces. In that case, the file gets this information from OS.",
          "As `File` inherits from `Blob`, `File` objects have the same properties, plus:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "new File(fileParts, fileName, [options])",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "<input type=\"file\" onchange=\"showFile(this)\">\n\n<script>\nfunction showFile(input) {\n  let file = input.files[0];\n\n  alert(`File name: ${file.name}`); // e.g my.png\n  alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824\n}\n</script>",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "**`fileParts`** -- is an array of Blob/BufferSource/String values.",
          "**`fileName`** -- file name string.",
          "**`options`** -- optional object:",
          "**`lastModified`** -- the timestamp (integer date) of last modification.",
          "`name` -- the file name,"
        ]
      },
      {
        "heading": "FileReader",
        "paragraphs": [
          "FileReader is an object with the sole purpose of reading data from `Blob` (and hence `File` too) objects.",
          "It delivers the data using events, as reading from disk may take time.",
          "The constructor:",
          "The main methods:",
          "The choice of `read*` method depends on which format we prefer, how we're going to use the data."
        ],
        "codeExamples": [
          {
            "title": "FileReader",
            "code": "let reader = new FileReader(); // no arguments",
            "explanation": "Example demonstrating filereader."
          },
          {
            "title": "FileReader",
            "code": "<input type=\"file\" onchange=\"readFile(this)\">\n\n<script>\nfunction readFile(input) {\n  let file = input.files[0];\n\n  let reader = new FileReader();\n\n  reader.readAsText(file);\n\n  reader.onload = function() {\n    console.log(reader.result);\n  };\n\n  reader.onerror = function() {\n    console.log(reader.error);\n  };\n\n}\n</script>",
            "explanation": "Example demonstrating filereader."
          }
        ],
        "bulletPoints": [
          "**`readAsArrayBuffer(blob)`** -- read the data in binary format `ArrayBuffer`.",
          "**`readAsText(blob, [encoding])`** -- read the data as a text string with the given encoding (`utf-8` by default).",
          "**`readAsDataURL(blob)`** -- read the binary data and encode it as base64 data url.",
          "**`abort()`** -- cancel the operation.",
          "`readAsArrayBuffer` -- for binary files, to do low-level binary operations. For high-level operations, like slicing, `File` inherits from `Blob`, so we can call them directly, without reading."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`File` objects inherit from `Blob`.",
          "In addition to `Blob` methods and properties, `File` objects also have `name` and `lastModified` properties, plus the internal ability to read from filesystem. We usually get `File` objects from user input, like `` or Drag'n'Drop events (`ondragend`).",
          "`FileReader` objects can read from a file or a blob, in one of three formats:",
          "In many cases though, we don't have to read the file contents. Just as we did with blobs, we can create a short url with `URL.createObjectURL(file)` and assign it to `` or ``. This way the file can be downloaded or shown up as an image, as a part of canvas etc.",
          "And if we're going to send a `File` over a network, that's also easy: network API like `XMLHttpRequest` or `fetch` natively accepts `File` objects."
        ],
        "bulletPoints": [
          "String (`readAsText`).",
          "`ArrayBuffer` (`readAsArrayBuffer`).",
          "Data url, base-64 encoded (`readAsDataURL`)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: File",
        "description": "Apply your understanding of File. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: File\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: File\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of File in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for file.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "File is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with File?",
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
      "File is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying file.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "file"
    ],
    "slug": "file"
  },
  {
    "title": "Popup Windows",
    "description": "A popup window is one of the oldest methods to show additional document to user.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A popup window is one of the oldest methods to show additional document to user.",
          "Basically, you just run:",
          "...And it will open a new window with given URL. Most modern browsers are configured to open url in new tabs instead of separate windows.",
          "Popups exist from really ancient times. The initial idea was to show another content without closing the main window. As of now, there are other ways to do that: we can load content dynamically with fetch and show it in a dynamically generated ``. So, popups is not something we use everyday.",
          "Also, popups are tricky on mobile devices, that don't show multiple windows simultaneously."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "window.open('https://javascript.info/')",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Popup blocking",
        "paragraphs": [
          "In the past, evil sites abused popups a lot. A bad page could open tons of popup windows with ads. So now most browsers try to block popups and protect the user.",
          "**Most browsers block popups if they are called outside of user-triggered event handlers like `onclick`.**",
          "For example:",
          "This way users are somewhat protected from unwanted popups, but the functionality is not disabled totally."
        ],
        "codeExamples": [
          {
            "title": "Popup blocking",
            "code": "// popup blocked\nwindow.open('https://javascript.info');\n\n// popup allowed\nbutton.onclick = () => {\n  window.open('https://javascript.info');\n};",
            "explanation": "Example demonstrating popup blocking."
          }
        ]
      },
      {
        "heading": "window.open",
        "paragraphs": [
          "The syntax to open a popup is: `window.open(url, name, params)`:",
          "url",
          ": An URL to load into the new window.",
          "name",
          ": A name of the new window. Each window has a `window.name`, and here we can specify which window to use for the popup. If there's already a window with such name -- the given URL opens in it, otherwise a new window is opened."
        ],
        "bulletPoints": [
          "Position:",
          "`left/top` (numeric) -- coordinates of the window top-left corner on the screen. There is a limitation: a new window cannot be positioned offscreen.",
          "`width/height` (numeric) -- width and height of a new window. There is a limit on minimal width/height, so it's impossible to create an invisible window.",
          "Window features:",
          "`menubar` (yes/no) -- shows or hides the browser menu on the new window."
        ]
      },
      {
        "heading": "Example: a minimalistic window",
        "paragraphs": [
          "Let's open a window with minimal set of features, just to see which of them browser allows to disable:",
          "Here most \"window features\" are disabled and window is positioned offscreen. Run it and see what really happens. Most browsers \"fix\" odd things like zero `width/height` and offscreen `left/top`. For instance, Chrome open such a window with full width/height, so that it occupies the full screen.",
          "Let's add normal positioning options and reasonable `width`, `height`, `left`, `top` coordinates:",
          "Most browsers show the example above as required.",
          "Rules for omitted settings:"
        ],
        "codeExamples": [
          {
            "title": "Example: a minimalistic window",
            "code": "let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,\nwidth=0,height=0,left=-1000,top=-1000`;\n\nopen('/', 'test', params);",
            "explanation": "Example demonstrating example: a minimalistic window."
          },
          {
            "title": "Example: a minimalistic window",
            "code": "let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,\nwidth=600,height=300,left=100,top=100`;\n\nopen('/', 'test', params);",
            "explanation": "Example demonstrating example: a minimalistic window."
          }
        ],
        "bulletPoints": [
          "If there is no 3rd argument in the `open` call, or it is empty, then the default window parameters are used.",
          "If there is a string of params, but some `yes/no` features are omitted, then the omitted features assumed to have `no` value. So if you specify params, make sure you explicitly set all required features to yes.",
          "If there is no `left/top` in params, then the browser tries to open a new window near the last opened window.",
          "If there is no `width/height`, then the new window will be the same size as the last opened."
        ]
      },
      {
        "heading": "Accessing popup from window",
        "paragraphs": [
          "The `open` call returns a reference to the new window. It can be used to manipulate its properties, change location and even more.",
          "In this example, we generate popup content from JavaScript:",
          "And here we modify the contents after loading:",
          "Please note: immediately after `window.open`, the new window isn't loaded yet. That's demonstrated by `alert` in line `(*)`. So we wait for `onload` to modify it. We could also use `DOMContentLoaded` handler for `newWin.document`."
        ],
        "codeExamples": [
          {
            "title": "Accessing popup from window",
            "code": "let newWin = window.open(\"about:blank\", \"hello\", \"width=200,height=200\");\n\nnewWin.document.write(\"Hello, world!\");",
            "explanation": "Example demonstrating accessing popup from window."
          },
          {
            "title": "Accessing popup from window",
            "code": "let newWindow = open('/', 'example', 'width=300,height=300')\nnewWindow.focus();\n\nalert(newWindow.location.href); // (*) about:blank, loading hasn't started yet\n\nnewWindow.onload = function() {\n  let html = `<div style=\"font-size:30px\">Welcome!</div>`;\n*!*\n  newWindow.document.body.insertAdjacentHTML('afterbegin', html);\n*/!*\n};",
            "explanation": "Example demonstrating accessing popup from window."
          }
        ]
      },
      {
        "heading": "Accessing window from popup",
        "paragraphs": [
          "A popup may access the \"opener\" window as well using `window.opener` reference. It is `null` for all windows except popups.",
          "If you run the code below, it replaces the opener (current) window content with \"Test\":",
          "So the connection between the windows is bidirectional: the main window and the popup have a reference to each other."
        ],
        "codeExamples": [
          {
            "title": "Accessing window from popup",
            "code": "let newWin = window.open(\"about:blank\", \"hello\", \"width=200,height=200\");\n\nnewWin.document.write(\n  \"<script>window.opener.document.body.innerHTML = 'Test'<\\/script>\"\n);",
            "explanation": "Example demonstrating accessing window from popup."
          }
        ]
      },
      {
        "heading": "Closing a popup",
        "paragraphs": [
          "To close a window: `win.close()`.",
          "To check if a window is closed: `win.closed`.",
          "Technically, the `close()` method is available for any `window`, but `window.close()` is ignored by most browsers if `window` is not created with `window.open()`. So it'll only work on a popup.",
          "The `closed` property is `true` if the window is closed. That's useful to check if the popup (or the main window) is still open or not. A user can close it anytime, and our code should take that possibility into account.",
          "This code loads and then closes the window:"
        ],
        "codeExamples": [
          {
            "title": "Closing a popup",
            "code": "let newWindow = open('/', 'example', 'width=300,height=300');\n\nnewWindow.onload = function() {\n  newWindow.close();\n  alert(newWindow.closed); // true\n};",
            "explanation": "Example demonstrating closing a popup."
          }
        ]
      },
      {
        "heading": "Moving and resizing",
        "paragraphs": [
          "There are methods to move/resize a window:",
          "`win.moveBy(x,y)`",
          ": Move the window relative to current position `x` pixels to the right and `y` pixels down. Negative values are allowed (to move left/up).",
          "`win.moveTo(x,y)`",
          ": Move the window to coordinates `(x,y)` on the screen."
        ],
        "codeExamples": [
          {
            "title": "Moving and resizing",
            "code": "To prevent abuse, the browser usually blocks these methods. They only work reliably on popups that we opened, that have no additional tabs.",
            "explanation": "Example demonstrating moving and resizing."
          },
          {
            "title": "Moving and resizing",
            "code": "JavaScript has no way to minify or maximize a window. These OS-level functions are hidden from Frontend-developers.\n\nMove/resize methods do not work for maximized/minimized windows.",
            "explanation": "Example demonstrating moving and resizing."
          }
        ]
      },
      {
        "heading": "Scrolling a window",
        "paragraphs": [
          "We already talked about scrolling a window in the chapter .",
          "`win.scrollBy(x,y)`",
          ": Scroll the window `x` pixels right and `y` down relative the current scroll. Negative values are allowed.",
          "`win.scrollTo(x,y)`",
          ": Scroll the window to the given coordinates `(x,y)`."
        ]
      },
      {
        "heading": "Focus/blur on a window",
        "paragraphs": [
          "Theoretically, there are `window.focus()` and `window.blur()` methods to focus/unfocus on a window. And there are also `focus/blur` events that allow to catch the moment when the visitor focuses on a window and switches elsewhere.",
          "Although, in practice they are severely limited, because in the past evil pages abused them.",
          "For instance, look at this code:",
          "When a user attempts to switch out of the window (`window.onblur`), it brings the window back into focus. The intention is to \"lock\" the user within the `window`.",
          "So browsers had to introduce many limitations to forbid the code like that and protect the user from ads and evils pages. They depend on the browser."
        ],
        "codeExamples": [
          {
            "title": "Focus/blur on a window",
            "code": "window.onblur = () => window.focus();",
            "explanation": "Example demonstrating focus/blur on a window."
          }
        ],
        "bulletPoints": [
          "When we open a popup, it might be a good idea to run `newWindow.focus()` on it. Just in case, for some OS/browser combinations it ensures that the user is in the new window now.",
          "If we want to track when a visitor actually uses our web-app, we can track `window.onfocus/onblur`. That allows us to suspend/resume in-page activities, animations etc. But please note that the `blur` event means that the visitor switched out from the window, but they still may observe it. The window is in the background, but still may be visible."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Popup windows are used rarely, as there are alternatives: loading and displaying information in-page, or in iframe.",
          "If we're going to open a popup, a good practice is to inform the user about it. An \"opening window\" icon near a link or button would allow the visitor to survive the focus shift and keep both windows in mind.",
          "To close the popup: use `close()` call. Also the user may close them (just like any other windows). The `window.closed` is `true` after that."
        ],
        "bulletPoints": [
          "A popup can be opened by the `open(url, name, params)` call. It returns the reference to the newly opened window.",
          "Browsers block `open` calls from the code outside of user actions. Usually a notification appears, so that a user may allow them.",
          "Browsers open a new tab by default, but if sizes are provided, then it'll be a popup window.",
          "The popup may access the opener window using the `window.opener` property.",
          "The main window and the popup can freely read and modify each other if they have the same origin. Otherwise, they can change location of each other and exchange messages."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Popup Windows",
        "description": "Apply your understanding of Popup Windows. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Popup Windows\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Popup Windows\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Popup Windows in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for popup windows.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Popup Windows is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Popup Windows?",
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
      "Popup Windows is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying popup windows.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "popup-windows"
    ],
    "slug": "popup-windows"
  },
  {
    "title": "Cross Window Communication",
    "description": "The \"Same Origin\" (same site) policy limits access of windows and frames to each other.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The \"Same Origin\" (same site) policy limits access of windows and frames to each other.",
          "The idea is that if a user has two pages open: one from `john-smith.com`, and another one is `gmail.com`, then they wouldn't want a script from `john-smith.com` to read our mail from `gmail.com`. So, the purpose of the \"Same Origin\" policy is to protect users from information theft."
        ]
      },
      {
        "heading": "Same Origin [#same-origin]",
        "paragraphs": [
          "Two URLs are said to have the \"same origin\" if they have the same protocol, domain and port.",
          "These URLs all share the same origin:",
          "These ones do not:",
          "The \"Same Origin\" policy states that:"
        ],
        "bulletPoints": [
          "`http://site.com`",
          "`http://site.com/`",
          "`http://site.com/my/page.html`",
          "http://www.site.com (another domain: `www.` matters)",
          "http://site.org (another domain: `.org` matters)"
        ]
      },
      {
        "heading": "In action: iframe",
        "paragraphs": [
          "An `` tag hosts a separate embedded window, with its own separate `document` and `window` objects.",
          "We can access them using properties:",
          "When we access something inside the embedded window, the browser checks if the iframe has the same origin. If that's not so then the access is denied (writing to `location` is an exception, it's still permitted).",
          "For instance, let's try reading and writing to `` from another origin:",
          "The code above shows errors for any operations except:"
        ],
        "codeExamples": [
          {
            "title": "In action: iframe",
            "code": "<iframe src=\"https://example.com\" id=\"iframe\"></iframe>\n\n<script>\n  iframe.onload = function() {\n    // we can get the reference to the inner window\n*!*\n    let iframeWindow = iframe.contentWindow; // OK\n*/!*\n    try {\n      // ...but not to the document inside it\n*!*\n      let doc = iframe.contentDocument; // ERROR\n*/!*\n    } catch(e) {\n      alert(e); // Security Error (another origin)\n    }\n\n    // also we can't READ the URL of the page in iframe\n    try {\n      // Can't read URL from the Location object\n*!*\n      let href = iframe.contentWindow.location.href; // ERROR\n*/!*\n    } catch(e) {\n      alert(e); // Security Error\n    }\n\n    // ...we can WRITE into location (and thus load something else into the iframe)!\n*!*\n    iframe.contentWindow.location = '/'; // OK\n*/!*\n\n    iframe.onload = null; // clear the handler, not to run it after the location change\n  };\n</script>",
            "explanation": "Example demonstrating in action: iframe."
          },
          {
            "title": "In action: iframe",
            "code": "<!-- iframe from the same site -->\n<iframe src=\"/\" id=\"iframe\"></iframe>\n\n<script>\n  iframe.onload = function() {\n    // just do anything\n    iframe.contentDocument.body.prepend(\"Hello, world!\");\n  };\n</script>",
            "explanation": "Example demonstrating in action: iframe."
          }
        ],
        "bulletPoints": [
          "`iframe.contentWindow` to get the window inside the ``.",
          "`iframe.contentDocument` to get the document inside the ``, shorthand for `iframe.contentWindow.document`.",
          "Getting the reference to the inner window `iframe.contentWindow` - that's allowed.",
          "Writing to `location`."
        ]
      },
      {
        "heading": "Windows on subdomains: document.domain",
        "paragraphs": [
          "By definition, two URLs with different domains have different origins.",
          "But if windows share the same second-level domain, for instance `john.site.com`, `peter.site.com` and `site.com` (so that their common second-level domain is `site.com`), we can make the browser ignore that difference, so that they can be treated as coming from the \"same origin\" for the purposes of cross-window communication.",
          "To make it work, each such window should run the code:",
          "That's all. Now they can interact without limitations. Again, that's only possible for pages with the same second-level domain."
        ],
        "codeExamples": [
          {
            "title": "Windows on subdomains: document.domain",
            "code": "document.domain = 'site.com';",
            "explanation": "Example demonstrating windows on subdomains: document.domain."
          },
          {
            "title": "Windows on subdomains: document.domain",
            "code": "The `document.domain` property is in the process of being removed from the [specification](https://html.spec.whatwg.org/multipage/origin.html#relaxing-the-same-origin-restriction). The cross-window messaging (explained soon below) is the suggested replacement.\n\nThat said, as of now all browsers support it. And the support will be kept for the future, not to break old code that relies on `document.domain`.",
            "explanation": "Example demonstrating windows on subdomains: document.domain."
          }
        ]
      },
      {
        "heading": "Iframe: wrong document pitfall",
        "paragraphs": [
          "When an iframe comes from the same origin, and we may access its `document`, there's a pitfall. It's not related to cross-origin things, but important to know.",
          "Upon its creation an iframe immediately has a document. But that document is different from the one that loads into it!",
          "So if we do something with the document immediately, that will probably be lost.",
          "Here, look:",
          "We shouldn't work with the document of a not-yet-loaded iframe, because that's the *wrong document*. If we set any event handlers on it, they will be ignored."
        ],
        "codeExamples": [
          {
            "title": "Iframe: wrong document pitfall",
            "code": "<iframe src=\"/\" id=\"iframe\"></iframe>\n\n<script>\n  let oldDoc = iframe.contentDocument;\n  iframe.onload = function() {\n    let newDoc = iframe.contentDocument;\n*!*\n    // the loaded document is not the same as initial!\n    alert(oldDoc == newDoc); // false\n*/!*\n  };\n</script>",
            "explanation": "Example demonstrating iframe: wrong document pitfall."
          },
          {
            "title": "Iframe: wrong document pitfall",
            "code": "<iframe src=\"/\" id=\"iframe\"></iframe>\n\n<script>\n  let oldDoc = iframe.contentDocument;\n\n  // every 100 ms check if the document is the new one\n  let timer = setInterval(() => {\n    let newDoc = iframe.contentDocument;\n    if (newDoc == oldDoc) return;\n\n    alert(\"New document is here!\");\n\n    clearInterval(timer); // cancel setInterval, don't need it any more\n  }, 100);\n</script>",
            "explanation": "Example demonstrating iframe: wrong document pitfall."
          }
        ]
      },
      {
        "heading": "Collection: window.frames",
        "paragraphs": [
          "An alternative way to get a window object for `` -- is to get it from the named collection `window.frames`:",
          "For instance:",
          "An iframe may have other iframes inside. The corresponding `window` objects form a hierarchy.",
          "Navigation links are:",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Collection: window.frames",
            "code": "<iframe src=\"/\" style=\"height:80px\" name=\"win\" id=\"iframe\"></iframe>\n\n<script>\n  alert(iframe.contentWindow == frames[0]); // true\n  alert(iframe.contentWindow == frames.win); // true\n</script>",
            "explanation": "Example demonstrating collection: window.frames."
          },
          {
            "title": "Collection: window.frames",
            "code": "window.frames[0].parent === window; // true",
            "explanation": "Example demonstrating collection: window.frames."
          }
        ],
        "bulletPoints": [
          "By number: `window.frames[0]` -- the window object for the first frame in the document.",
          "By name: `window.frames.iframeName` -- the window object for the frame with `name=\"iframeName\"`.",
          "`window.frames` -- the collection of \"children\" windows (for nested frames).",
          "`window.parent` -- the reference to the \"parent\" (outer) window.",
          "`window.top` -- the reference to the topmost parent window."
        ]
      },
      {
        "heading": "The \"sandbox\" iframe attribute",
        "paragraphs": [
          "The `sandbox` attribute allows for the exclusion of certain actions inside an `` in order to prevent it executing untrusted code. It \"sandboxes\" the iframe by treating it as coming from another origin and/or applying other limitations.",
          "There's a \"default set\" of restrictions applied for ``. But it can be relaxed if we provide a space-separated list of restrictions that should not be applied as a value of the attribute, like this: ``.",
          "In other words, an empty `\"sandbox\"` attribute puts the strictest limitations possible, but we can put a space-delimited list of those that we want to lift.",
          "Here's a list of limitations:",
          "`allow-same-origin`"
        ],
        "codeExamples": [
          {
            "title": "The \"sandbox\" iframe attribute",
            "code": "The purpose of the `\"sandbox\"` attribute is only to *add more* restrictions. It cannot remove them. In particular, it can't relax same-origin restrictions if the iframe comes from another origin.",
            "explanation": "Example demonstrating the \"sandbox\" iframe attribute."
          }
        ]
      },
      {
        "heading": "Cross-window messaging",
        "paragraphs": [
          "The `postMessage` interface allows windows to talk to each other no matter which origin they are from.",
          "So, it's a way around the \"Same Origin\" policy. It allows a window from `john-smith.com` to talk to `gmail.com` and exchange information, but only if they both agree and call corresponding JavaScript functions. That makes it safe for users.",
          "The interface has two parts."
        ]
      },
      {
        "heading": "postMessage",
        "paragraphs": [
          "The window that wants to send a message calls postMessage method of the receiving window. In other words, if we want to send the message to `win`, we should call `win.postMessage(data, targetOrigin)`.",
          "Arguments:",
          "`data`",
          ": The data to send. Can be any object, the data is cloned using the \"structured serialization algorithm\". IE supports only strings, so we should `JSON.stringify` complex objects to support that browser.",
          "`targetOrigin`"
        ],
        "codeExamples": [
          {
            "title": "postMessage",
            "code": "<iframe src=\"http://example.com\" name=\"example\">\n\n<script>\n  let win = window.frames.example;\n\n  win.postMessage(\"message\", \"http://example.com\");\n</script>",
            "explanation": "Example demonstrating postmessage."
          },
          {
            "title": "postMessage",
            "code": "<iframe src=\"http://example.com\" name=\"example\">\n\n<script>\n  let win = window.frames.example;\n\n*!*\n  win.postMessage(\"message\", \"*\");\n*/!*\n</script>",
            "explanation": "Example demonstrating postmessage."
          }
        ]
      },
      {
        "heading": "onmessage",
        "paragraphs": [
          "To receive a message, the target window should have a handler on the `message` event. It triggers when `postMessage` is called (and `targetOrigin` check is successful).",
          "The event object has special properties:",
          "`data`",
          ": The data from `postMessage`.",
          "`origin`"
        ],
        "codeExamples": [
          {
            "title": "onmessage",
            "code": "window.addEventListener(\"message\", function(event) {\n  if (event.origin != 'http://javascript.info') {\n    // something from an unknown domain, let's ignore it\n    return;\n  }\n\n  alert( \"received: \" + event.data );\n\n  // can message back using event.source.postMessage(...)\n});",
            "explanation": "Example demonstrating onmessage."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "To call methods and access the content of another window, we should first have a reference to it.",
          "For popups we have these references:",
          "For iframes, we can access parent/children windows using:",
          "If windows share the same origin (host, port, protocol), then windows can do whatever they want with each other.",
          "Otherwise, only possible actions are:"
        ],
        "bulletPoints": [
          "From the opener window: `window.open` -- opens a new window and returns a reference to it,",
          "From the popup: `window.opener` -- is a reference to the opener window from a popup.",
          "`window.frames` -- a collection of nested window objects,",
          "`window.parent`, `window.top` are the references to parent and top windows,",
          "`iframe.contentWindow` is the window inside an `` tag."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Cross Window Communication",
        "description": "Apply your understanding of Cross Window Communication. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Cross Window Communication\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Cross Window Communication\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Cross Window Communication in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for cross window communication.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Cross Window Communication is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Cross Window Communication?",
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
      "Cross Window Communication is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying cross window communication.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "cross-window-communication"
    ],
    "slug": "cross-window-communication"
  },
  {
    "title": "Clickjacking",
    "description": "The \"clickjacking\" attack allows an evil page to click on a \"victim site\" *on behalf of the visitor*.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The \"clickjacking\" attack allows an evil page to click on a \"victim site\" *on behalf of the visitor*.",
          "Many sites were hacked this way, including Twitter, Facebook, Paypal and other sites. They have all been fixed, of course."
        ]
      },
      {
        "heading": "The idea",
        "paragraphs": [
          "The idea is very simple.",
          "Here's how clickjacking was done with Facebook:",
          "1. A visitor is lured to the evil page. It doesn't matter how.",
          "2. The page has a harmless-looking link on it (like \"get rich now\" or \"click here, very funny\").",
          "3. Over that link the evil page positions a transparent `` with `src` from facebook.com, in such a way that the \"Like\" button is right above that link. Usually that's done with `z-index`."
        ]
      },
      {
        "heading": "The demo",
        "paragraphs": [
          "Here's how the evil page looks. To make things clear, the `` is half-transparent (in real evil pages it's fully transparent):",
          "The full demo of the attack:",
          "[codetabs src=\"clickjacking-visible\" height=160]",
          "Here we have a half-transparent ``, and in the example we can see it hovering over the button. A click on the button actually clicks on the iframe, but that's not visible to the user, because the iframe is transparent.",
          "As a result, if the visitor is authorized on Facebook (\"remember me\" is usually turned on), then it adds a \"Like\". On Twitter that would be a \"Follow\" button."
        ],
        "codeExamples": [
          {
            "title": "The demo",
            "code": "<style>\niframe { /* iframe from the victim site */\n  width: 400px;\n  height: 100px;\n  position: absolute;\n  top:0; left:-20px;\n*!*\n  opacity: 0.5; /* in real opacity:0 */\n*/!*\n  z-index: 1;\n}\n</style>\n\n<div>Click to get rich now:</div>\n\n<!-- The url from the victim site -->\n*!*\n<iframe src=\"/clickjacking/facebook.html\"></iframe>\n\n<button>Click here!</button>\n*/!*\n\n<div>...And you're cool (I'm a cool hacker actually)!</div>",
            "explanation": "Example demonstrating the demo."
          },
          {
            "title": "The demo",
            "code": "The attack only affects mouse actions (or similar, like taps on mobile).\n\nKeyboard input is much difficult to redirect. Technically, if we have a text field to hack, then we can position an iframe in such a way that text fields overlap each other. So when a visitor tries to focus on the input they see on the page, they actually focus on the input inside the iframe.\n\nBut then there's a problem. Everything that the visitor types will be hidden, because the iframe is not visible.\n\nPeople will usually stop typing when they can't see their new characters printing on the screen.",
            "explanation": "Example demonstrating the demo."
          }
        ]
      },
      {
        "heading": "Old-school defences (weak)",
        "paragraphs": [
          "The oldest defence is a bit of JavaScript which forbids opening the page in a frame (so-called \"framebusting\").",
          "That looks like this:",
          "That is: if the window finds out that it's not on top, then it automatically makes itself the top.",
          "This not a reliable defence, because there are many ways to hack around it. Let's cover a few."
        ],
        "codeExamples": [
          {
            "title": "Old-school defences (weak)",
            "code": "if (top != window) {\n  top.location = window.location;\n}",
            "explanation": "Example demonstrating old-school defences (weak)."
          }
        ]
      },
      {
        "heading": "Blocking top-navigation",
        "paragraphs": [
          "We can block the transition caused by changing `top.location` in beforeunload event handler.",
          "The top page (enclosing one, belonging to the hacker) sets a preventing handler to it, like this:",
          "When the `iframe` tries to change `top.location`, the visitor gets a message asking them whether they want to leave.",
          "In most cases the visitor would answer negatively because they don't know about the iframe - all they can see is the top page, there's no reason to leave. So `top.location` won't change!",
          "In action:"
        ],
        "codeExamples": [
          {
            "title": "Blocking top-navigation",
            "code": "window.onbeforeunload = function() {\n  return false;\n};",
            "explanation": "Example demonstrating blocking top-navigation."
          }
        ]
      },
      {
        "heading": "Sandbox attribute",
        "paragraphs": [
          "One of the things restricted by the `sandbox` attribute is navigation. A sandboxed iframe may not change `top.location`.",
          "So we can add the iframe with `sandbox=\"allow-scripts allow-forms\"`. That would relax the restrictions, permitting scripts and forms. But we omit `allow-top-navigation` so that changing `top.location` is forbidden.",
          "Here's the code:",
          "There are other ways to work around that simple protection too."
        ],
        "codeExamples": [
          {
            "title": "Sandbox attribute",
            "code": "<iframe *!*sandbox=\"allow-scripts allow-forms\"*/!* src=\"facebook.html\"></iframe>",
            "explanation": "Example demonstrating sandbox attribute."
          }
        ]
      },
      {
        "heading": "X-Frame-Options",
        "paragraphs": [
          "The server-side header `X-Frame-Options` can permit or forbid displaying the page inside a frame.",
          "It must be sent exactly as HTTP-header: the browser will ignore it if found in HTML `` tag. So, `` won't do anything.",
          "The header may have 3 values:",
          "`DENY`",
          ": Never ever show the page inside a frame."
        ],
        "codeExamples": [
          {
            "title": "X-Frame-Options",
            "code": "Here's the result:",
            "explanation": "Example demonstrating x-frame-options."
          },
          {
            "title": "X-Frame-Options",
            "code": "<!-- ebook: prerender/ chrome headless dies and timeouts on this iframe -->\n<iframe src=\"https://twitter.com\"></iframe>\n\nDepending on your browser, the `iframe` above is either empty or alerting you that the browser won't permit that page to be navigating in this way.",
            "explanation": "Example demonstrating x-frame-options."
          }
        ]
      },
      {
        "heading": "Showing with disabled functionality",
        "paragraphs": [
          "The `X-Frame-Options` header has a side effect. Other sites won't be able to show our page in a frame, even if they have good reasons to do so.",
          "So there are other solutions... For instance, we can \"cover\" the page with a `` with styles `height: 100%; width: 100%;`, so that it will intercept all clicks. That `` is to be removed if `window == top` or if we figure out that we don't need the protection.",
          "Something like this:",
          "The demo:",
          "[codetabs src=\"protector\"]"
        ],
        "codeExamples": [
          {
            "title": "Showing with disabled functionality",
            "code": "<style>\n  #protector {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 99999999;\n  }\n</style>\n\n<div id=\"protector\">\n  <a href=\"/\" target=\"_blank\">Go to the site</a>\n</div>\n\n<script>\n  // there will be an error if top window is from the different origin\n  // but that's ok here\n  if (top.document.domain == document.domain) {\n    protector.remove();\n  }\n</script>",
            "explanation": "Example demonstrating showing with disabled functionality."
          }
        ]
      },
      {
        "heading": "Samesite cookie attribute",
        "paragraphs": [
          "The `samesite` cookie attribute can also prevent clickjacking attacks.",
          "A cookie with such attribute is only sent to a website if it's opened directly, not via a frame, or otherwise. More information in the chapter .",
          "If the site, such as Facebook, had `samesite` attribute on its authentication cookie, like this:",
          "...Then such cookie wouldn't be sent when Facebook is open in iframe from another site. So the attack would fail.",
          "The `samesite` cookie attribute will not have an effect when cookies are not used. This may allow other websites to easily show our public, unauthenticated pages in iframes."
        ],
        "codeExamples": [
          {
            "title": "Samesite cookie attribute",
            "code": "Set-Cookie: authorization=secret; samesite",
            "explanation": "Example demonstrating samesite cookie attribute."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Clickjacking is a way to \"trick\" users into clicking on a victim site without even knowing what's happening. That's dangerous if there are important click-activated actions.",
          "A hacker can post a link to their evil page in a message, or lure visitors to their page by some other means. There are many variations.",
          "From one perspective -- the attack is \"not deep\": all a hacker is doing is intercepting a single click. But from another perspective, if the hacker knows that after the click another control will appear, then they may use cunning messages to coerce the user into clicking on them as well.",
          "The attack is quite dangerous, because when we engineer the UI we usually don't anticipate that a hacker may click on behalf of the visitor. So vulnerabilities can be found in totally unexpected places."
        ],
        "bulletPoints": [
          "It is recommended to use `X-Frame-Options: SAMEORIGIN` on pages (or whole websites) which are not intended to be viewed inside frames.",
          "Use a covering `` if we want to allow our pages to be shown in iframes, but still stay safe."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Clickjacking",
        "description": "Apply your understanding of Clickjacking. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Clickjacking\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Clickjacking\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Clickjacking in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for clickjacking.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Clickjacking is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Clickjacking?",
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
      "Clickjacking is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying clickjacking.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "clickjacking"
    ],
    "slug": "clickjacking"
  }
];
