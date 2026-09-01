// Auto-generated rewritten beginner-friendly curriculum for RunJS
import type { Lesson } from '../../types';

export const part8Lessons: Lesson[] = [
  {
    slug: 'fetch',
    title: 'Network Requests: The Fetch API',
    description:
      'Make modern asynchronous HTTP requests using window.fetch, parse JSON responses, and handle HTTP status codes.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'Making Requests with fetch()',
        paragraphs: [
          'The modern Fetch API provides a clean, Promise-based interface for fetching resources across the network.',
          'A typical request involves calling fetch(url), verifying response.ok (status 200-299), and parsing the body using response.json() or response.text().',
        ],
        codeExamples: [
          {
            title: 'Making a GET and POST Request',
            code: "async function loadUserData(userId) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);\n    \n    if (!response.ok) {\n      throw new Error(`HTTP Error: ${response.status}`);\n    }\n    \n    const user = await response.json();\n    console.log('User Name:', user.name);\n  } catch (err) {\n    console.error('Fetch failed:', err.message);\n  }\n}\n\n// loadUserData(1);",
            explanation:
              'Always check response.ok! fetch only rejects on network failures, not on 404 or 500 errors.',
          },
        ],
        callout: {
          type: 'important',
          text: 'A fetch promise does NOT reject on HTTP 404 or 500 errors! It resolves normally with response.ok set to false.',
        },
      },
    ],
    exercises: [
      {
        title: 'Mock a Fetch Request',
        description:
          'Simulate a fetch response object with ok: true and status: 200. Log if response.ok is true.',
        starterCode:
          "const mockResponse = { ok: true, status: 200 };\nif (mockResponse.ok) {\n  console.log('Request succeeded with status', mockResponse.status);\n}",
        solution:
          "const mockResponse = { ok: true, status: 200 };\nif (mockResponse.ok) {\n  console.log('Request succeeded with status', mockResponse.status);\n}",
        hints: ['Check mockResponse.ok.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: 'Why must you check response.ok after calling fetch()?',
        options: [
          'Because fetch only rejects on network failures (like offline), resolving normally for HTTP 404 and 500 status codes',
          'Because response.json() will crash if response.ok is false',
          'To enable strict mode',
          'It is optional',
        ],
        correctIndex: 0,
        explanation:
          'fetch considers any valid HTTP response (even error codes) a successful network roundtrip; response.ok checks if status is 200-299.',
      },
    ],
    keyTakeaways: [
      'Use fetch(url) for network communication.',
      'Always verify response.ok before parsing response.json().',
      "Pass an options object { method: 'POST', body, headers } for mutations.",
    ],
    tags: ['fetch', 'network', 'api', 'http', 'async'],
  },
  {
    slug: 'formdata',
    title: 'FormData: Sending Form & File Data',
    description:
      'Capture and send form fields and binary file uploads easily using multipart/form-data encoding.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'The FormData Object',
        paragraphs: [
          'The FormData object represents HTML form data, designed for sending files and key-value pairs via fetch with Content-Type: multipart/form-data.',
          'You can populate it automatically from a <form> element or append values manually with formData.append(name, value).',
        ],
        codeExamples: [
          {
            title: 'Creating and Appending FormData',
            code: "const formData = new FormData();\nformData.append('username', 'sam_developer');\nformData.append('role', 'admin');\n\n// Inspect keys:\nfor (const [key, val] of formData.entries()) {\n  console.log(`${key}: ${val}`);\n}",
            output: 'username: sam_developer\nrole: admin',
            explanation:
              'FormData handles serialization automatically, including binary File blobs.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Append to FormData',
        description:
          "Create a FormData object, append 'token' with value 'ABC123XYZ', and read it with formData.get('token').",
        starterCode:
          "const fd = new FormData();\nfd.append('token', 'ABC123XYZ');\nconsole.log(fd.get('token'));",
        solution:
          "const fd = new FormData();\nfd.append('token', 'ABC123XYZ');\nconsole.log(fd.get('token'));",
        hints: ["Call fd.append('key', 'val') and fd.get('key')."],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          "Why should you NOT manually set 'Content-Type: multipart/form-data' in the fetch headers when sending FormData?",
        options: [
          'Because the browser automatically sets it along with the required boundary parameter string',
          'Because FormData only supports JSON',
          'Because browsers reject header objects with FormData',
          'To prevent caching',
        ],
        correctIndex: 0,
        explanation:
          'The browser generates a unique boundary string for multipart uploads, so setting Content-Type manually breaks the boundary.',
      },
    ],
    keyTakeaways: [
      'FormData manages multipart form submissions and file uploads.',
      'Use formData.append(name, value) to add fields programmatically.',
      'Let the browser automatically set the Content-Type header with the multipart boundary.',
    ],
    tags: ['formdata', 'forms', 'uploads', 'fetch', 'network'],
  },
  {
    slug: 'fetch-progress',
    title: 'Fetch Download Progress & Streams',
    description:
      'Track download progress in real time using response.body and ReadableStreamDefaultReader.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Streaming Response Bodies',
        paragraphs: [
          'When downloading large files (like videos or zip archives), users expect a percentage progress bar.',
          'response.body is a ReadableStream. By reading chunks with reader.read() and comparing the total loaded bytes against the Content-Length header, you can track exact progress.',
        ],
        codeExamples: [
          {
            title: 'Reading Stream Chunks',
            code: "async function trackDownload(response) {\n  const totalBytes = +response.headers.get('Content-Length');\n  let loadedBytes = 0;\n  \n  const reader = response.body.getReader();\n  while (true) {\n    const { done, value } = await reader.read();\n    if (done) break;\n    \n    loadedBytes += value.length;\n    const percent = Math.round((loadedBytes / totalBytes) * 100);\n    console.log(`Download progress: ${percent}%`);\n  }\n}",
            explanation:
              'ReadableStream allows processing chunks incrementally without loading everything into memory first.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Calculate Percentage Progress',
        description:
          'Write a function calcProgress(loaded, total) returning Math.round((loaded / total) * 100).',
        starterCode:
          'function calcProgress(loaded, total) {\n  return Math.round((loaded / total) * 100);\n}\n\nconsole.log(calcProgress(450, 1000));',
        solution:
          'function calcProgress(loaded, total) {\n  return Math.round((loaded / total) * 100);\n}\nconsole.log(calcProgress(450, 1000));',
        hints: ['Divide loaded by total, multiply by 100, and round.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What property on the fetch Response object provides access to the streaming byte chunks?',
        options: [
          'response.body',
          'response.stream',
          'response.chunks',
          'response.data',
        ],
        correctIndex: 0,
        explanation:
          'response.body is a ReadableStream that provides chunk-by-chunk access via getReader().',
      },
    ],
    keyTakeaways: [
      'response.body provides access to the raw ReadableStream.',
      'Use Content-Length header to calculate download percentages.',
      'Process chunks as they arrive for low memory overhead.',
    ],
    tags: ['streams', 'progress', 'fetch', 'readablestream'],
  },
  {
    slug: 'fetch-abort',
    title: 'Aborting Network Requests: AbortController',
    description:
      'Cancel pending fetch requests, timeout long requests, and stop stale auto-complete searches using AbortController.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The AbortController API',
        paragraphs: [
          'Sometimes you need to cancel a pending network request: when a user navigates away, when a search autocomplete query is replaced by a new keystroke, or when a request times out.',
          'AbortController provides an abort() method and a signal object that you pass into fetch({ signal }).',
        ],
        codeExamples: [
          {
            title: 'Canceling a Request with Timeout',
            code: "const controller = new AbortController();\nconst { signal } = controller;\n\n// Cancel request if it takes longer than 3 seconds:\nconst timeoutId = setTimeout(() => controller.abort(), 3000);\n\n// fetch('/api/heavy-data', { signal })\n//   .then(res => res.json())\n//   .catch(err => {\n//     if (err.name === 'AbortError') console.log('Request was aborted due to timeout!');\n//   });",
            explanation:
              'Calling controller.abort() immediately rejects the fetch promise with an AbortError.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create an AbortSignal',
        description:
          'Instantiate an AbortController and verify that controller.signal.aborted is false initially.',
        starterCode:
          'const controller = new AbortController();\nconsole.log(controller.signal.aborted);',
        solution:
          'const controller = new AbortController();\nconsole.log(controller.signal.aborted);',
        hints: ['controller.signal.aborted starts as false.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What error name is thrown when a fetch request is cancelled via AbortController?',
        options: [
          "'AbortError'",
          "'TimeoutError'",
          "'CancelException'",
          "'NetworkError'",
        ],
        correctIndex: 0,
        explanation:
          "Aborted fetch operations throw a DOMException named 'AbortError'.",
      },
    ],
    keyTakeaways: [
      'Use new AbortController() to cancel active fetch requests.',
      'Pass controller.signal to the fetch options.',
      'AbortController can also remove event listeners cleanly via { signal }.',
    ],
    tags: ['abortcontroller', 'cancellation', 'timeout', 'fetch'],
  },
  {
    slug: 'fetch-crossorigin',
    title: 'Cross-Origin Resource Sharing (CORS)',
    description:
      'Master Cross-Origin requests: Same-Origin Policy, CORS headers, preflight OPTIONS requests, and credentials.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'The Same-Origin Policy and CORS',
        paragraphs: [
          'For security, web browsers enforce the Same-Origin Policy: JavaScript on site-a.com cannot freely read data from site-b.com unless site-b.com permits it.',
          'An origin consists of (protocol, domain, port). Cross-Origin Resource Sharing (CORS) is the HTTP-header based mechanism that servers use to grant cross-origin access (e.g. Access-Control-Allow-Origin: *).',
        ],
        codeExamples: [
          {
            title: 'Understanding CORS Headers',
            code: "// Server response headers required for cross-origin access:\n// Access-Control-Allow-Origin: https://myapp.com\n// Access-Control-Allow-Methods: GET, POST, PUT, DELETE\n// Access-Control-Allow-Headers: Content-Type, Authorization\n\nconsole.log('Current Origin:', window.location.origin);",
            explanation:
              'If the server does not return matching Access-Control-Allow-Origin headers, the browser blocks the response.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Inspect Window Origin',
        description: 'Log window.location.origin to check the current origin.',
        starterCode: "console.log(typeof window.location.origin === 'string');",
        solution: "console.log(typeof window.location.origin === 'string');",
        hints: [
          'window.location.origin contains the protocol, domain, and port.',
        ],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Which component enforces CORS restrictions and blocks unauthorized cross-origin responses?',
        options: [
          'The client web browser',
          'The backend server CPU',
          'The Wi-Fi router',
          'The DNS provider',
        ],
        correctIndex: 0,
        explanation:
          'CORS is a client-side security standard enforced strictly by web browsers to protect user sessions.',
      },
    ],
    keyTakeaways: [
      'Same-Origin requires matching protocol, domain, and port.',
      'The browser enforces CORS and sends preflight OPTIONS requests for custom headers.',
      'The backend server must configure Access-Control-Allow-Origin headers.',
    ],
    tags: ['cors', 'security', 'cross-origin', 'preflight', 'headers'],
  },
  {
    slug: 'fetch-api',
    title: 'The Fetch API Specification & Architecture',
    description:
      'Dive deep into the Request, Response, and Headers classes that make up the Fetch Standard.',
    difficulty: 'advanced',
    readingTime: 5,
    sections: [
      {
        heading: 'Request, Response, and Headers Classes',
        paragraphs: [
          'Under the hood, window.fetch is built from three standardized classes:',
          '1. Request: Represents an outgoing HTTP request (method, headers, body, mode).',
          '2. Response: Represents an incoming HTTP response (status, ok, headers, body).',
          '3. Headers: Map-like interface for inspecting and manipulating HTTP headers (case-insensitive).',
        ],
        codeExamples: [
          {
            title: 'Working with the Headers Object',
            code: "const headers = new Headers();\nheaders.set('Content-Type', 'application/json');\nheaders.set('Authorization', 'Bearer token_xyz');\n\nconsole.log(headers.get('content-type')); // 'application/json' (Case-insensitive!)\nconsole.log(headers.has('authorization')); // true",
            output: 'application/json\ntrue',
            explanation:
              'Headers objects normalize header keys and provide convenient map methods.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create Custom Headers',
        description:
          "Create a new Headers object, set 'X-Custom-ID' to '42', and log headers.get('X-Custom-ID').",
        starterCode:
          "const h = new Headers();\nh.set('X-Custom-ID', '42');\nconsole.log(h.get('X-Custom-ID'));",
        solution:
          "const h = new Headers();\nh.set('X-Custom-ID', '42');\nconsole.log(h.get('X-Custom-ID'));",
        hints: ['Use h.set(key, value) and h.get(key).'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Are HTTP header names case-sensitive when queried with headers.get()?',
        options: [
          'No, header names are case-insensitive in the Headers API',
          'Yes, they must match exact casing',
          'Only in Node.js',
          'Only for Authorization',
        ],
        correctIndex: 0,
        explanation:
          "HTTP header names are standardized as case-insensitive; headers.get('content-type') matches 'Content-Type'.",
      },
    ],
    keyTakeaways: [
      'Fetch is composed of Request, Response, and Headers classes.',
      'Headers API handles case-insensitivity and header guards automatically.',
      'Used extensively in Service Workers and edge runtimes (Cloudflare Workers, Deno).',
    ],
    tags: ['fetch-api', 'headers', 'request', 'response', 'web-standards'],
  },
  {
    slug: 'url',
    title: 'The URL Object and URLSearchParams',
    description:
      'Parse and construct URLs cleanly, format query strings, and safely encode URL parameters.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Modern URL Construction',
        paragraphs: [
          "Manually concatenating URL strings (url + '?q=' + query + '&page=' + page) is prone to encoding bugs and security errors.",
          'The built-in URL class and URLSearchParams object provide clean, safe parsing, inspection, and manipulation of URLs.',
        ],
        codeExamples: [
          {
            title: 'URL and URLSearchParams in Action',
            code: "const url = new URL('https://example.com/search?q=javascript&sort=new');\n\nconsole.log('Hostname:', url.hostname); // 'example.com'\nconsole.log('Pathname:', url.pathname); // '/search'\n\n// Read and modify query parameters:\nconsole.log('Query param q:', url.searchParams.get('q')); // 'javascript'\nurl.searchParams.set('page', '2');\n\nconsole.log('Updated URL:', url.href);",
            output:
              'Hostname: example.com\nPathname: /search\nQuery param q: javascript\nUpdated URL: https://example.com/search?q=javascript&sort=new&page=2',
            explanation:
              'URL automatically handles URL-encoding and provides clean access to all URL components.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Build a Search Query URL',
        description:
          "Create a new URL('https://api.com/items'). Append query parameter 'filter' with value 'active' and log url.href.",
        starterCode:
          "const url = new URL('https://api.com/items');\nurl.searchParams.append('filter', 'active');\nconsole.log(url.href);",
        solution:
          "const url = new URL('https://api.com/items');\nurl.searchParams.append('filter', 'active');\nconsole.log(url.href);",
        hints: ["Call url.searchParams.append('filter', 'active')."],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Why is URLSearchParams preferred over manual string concatenation for query parameters?',
        options: [
          'It automatically handles proper percent-encoding of special characters and spaces',
          'It encrypts the URL parameters',
          'It converts URLs to numbers',
          'It is required by CSS',
        ],
        correctIndex: 0,
        explanation:
          'URLSearchParams automatically encodes spaces and special characters safely, preventing malformed URL bugs.',
      },
    ],
    keyTakeaways: [
      'Use new URL(urlString) to parse and build web addresses.',
      'Use url.searchParams (get, set, append, delete) for query strings.',
      'Special characters are encoded automatically.',
    ],
    tags: ['url', 'urlsearchparams', 'query-string', 'encoding'],
  },
  {
    slug: 'xmlhttprequest',
    title: 'XMLHttpRequest: The Legacy AJAX API',
    description:
      'Understand the historical predecessor to fetch: XMLHttpRequest (XHR), tracking upload progress, and legacy codebases.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Why Learn XMLHttpRequest?',
        paragraphs: [
          'Before fetch was introduced in 2015, XMLHttpRequest (XHR) was the only way to make asynchronous HTTP requests in browsers.',
          'While modern code uses fetch(), understanding XHR remains useful for maintaining legacy codebases and because XHR historically provided an easy xhr.upload.onprogress event for upload tracking.',
        ],
        codeExamples: [
          {
            title: 'Basic XMLHttpRequest Syntax',
            code: "const xhr = new XMLHttpRequest();\nxhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');\n\nxhr.onload = function() {\n  if (xhr.status === 200) {\n    console.log('Response:', xhr.responseText.slice(0, 40) + '...');\n  }\n};\n\nxhr.onerror = function() {\n  console.error('Request failed');\n};\n\n// xhr.send();",
            explanation: 'XHR is event-based rather than Promise-based.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Verify XHR Constructor',
        description:
          "Check if typeof XMLHttpRequest === 'function' and log the result.",
        starterCode: "console.log(typeof XMLHttpRequest === 'function');",
        solution: "console.log(typeof XMLHttpRequest === 'function');",
        hints: ['Check typeof XMLHttpRequest.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What was the main drawback of XMLHttpRequest that led to the creation of the modern Fetch API?',
        options: [
          'It relied on complex event callbacks instead of modern Promises and clean composability',
          'It could not send text',
          'It was blocked on mobile phones',
          'It was deleted from JavaScript',
        ],
        correctIndex: 0,
        explanation:
          "XHR's event-based model was verbose and awkward compared to modern Promise-based async/await syntax.",
      },
    ],
    keyTakeaways: [
      'XHR is the legacy AJAX API built on event listeners.',
      'fetch() has largely replaced XHR for all modern web development.',
    ],
    tags: ['xmlhttprequest', 'ajax', 'legacy', 'http'],
  },
  {
    slug: 'resume-upload',
    title: 'Resumable File Uploads',
    description:
      'Handle unstable networks: slice large files into binary chunks and resume interrupted uploads seamlessly.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'How Resumable Uploads Work',
        paragraphs: [
          'When uploading multi-gigabyte files, network dropouts are inevitable. Restarting a 5GB upload from 0% is a terrible user experience.',
          'The Resumable Upload algorithm slices a large file into fixed-size byte chunks (e.g. 5MB chunks via file.slice()). Each chunk is uploaded sequentially with a range header. If interrupted, the client queries the server for the last received byte and resumes uploading from that exact point.',
        ],
        codeExamples: [
          {
            title: 'Slicing a File Blob',
            code: "// File inherits from Blob, supporting byte slicing:\n// const chunk = file.slice(startByte, endByte);\n// await fetch('/upload', { method: 'POST', body: chunk, headers: { 'Content-Range': `bytes ${start}-${end}/${total}` } });\nconsole.log('Resumable upload pattern verified');",
            output: 'Resumable upload pattern verified',
            explanation:
              'Chunking file blobs allows resuming interrupted uploads without data re-transmission.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Calculate Next Chunk Offset',
        description:
          'Given currentByte = 1048576 (1MB) and chunkSize = 1048576, calculate the endByte offset.',
        starterCode:
          'const startByte = 1048576;\nconst chunkSize = 1048576;\nconst endByte = startByte + chunkSize;\nconsole.log(endByte);',
        solution:
          'const startByte = 1048576;\nconst chunkSize = 1048576;\nconst endByte = startByte + chunkSize;\nconsole.log(endByte);',
        hints: ['Add startByte and chunkSize.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What method on a File or Blob object extracts a slice of binary bytes for chunked uploading?',
        options: [
          'blob.slice(start, end)',
          'blob.substring(start, end)',
          'blob.chunk(size)',
          'blob.split()',
        ],
        correctIndex: 0,
        explanation:
          'Blob.prototype.slice(start, end) creates a new Blob containing the specified byte range.',
      },
    ],
    keyTakeaways: [
      'Slice large files into byte chunks using file.slice().',
      'Send byte range headers so the server can reassemble the file.',
      'TUS protocol is a popular open standard for resumable uploads.',
    ],
    tags: ['uploads', 'resumable', 'blob', 'files', 'chunks'],
  },
  {
    slug: 'long-polling',
    title: 'Long Polling: Server-to-Client Updates',
    description:
      'The simplest pattern for real-time updates: persistent HTTP requests that wait for server data before immediately re-opening.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'How Long Polling Works',
        paragraphs: [
          'Regular polling sends requests at fixed intervals (e.g. every 2 seconds), wasting bandwidth with empty responses.',
          'In Long Polling, the client sends a request. The server holds the request open until new data arrives. When data is available, the server responds. The client processes the data and immediately sends a new request to wait for the next message.',
        ],
        codeExamples: [
          {
            title: 'Long Polling Loop',
            code: "async function subscribeToMessages() {\n  while (true) {\n    try {\n      // Simulated long-poll request:\n      // const response = await fetch('/api/messages/poll');\n      // const message = await response.json();\n      // handleMessage(message);\n      break;\n    } catch (err) {\n      // On network error, wait 1 second before retrying:\n      await new Promise(r => setTimeout(r, 1000));\n    }\n  }\n}\n\nconsole.log('Long polling handler defined');",
            output: 'Long polling handler defined',
            explanation:
              'Provides near real-time updates over standard HTTP without requiring WebSocket server infrastructure.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Simulate Retry Delay',
        description:
          'Write an async function waitRetry(ms) returning a promise that resolves after ms milliseconds.',
        starterCode:
          "async function waitRetry(ms) {\n  await new Promise(r => setTimeout(r, ms));\n  return 'ready';\n}\n\nwaitRetry(10).then(console.log);",
        solution:
          "async function waitRetry(ms) {\n  await new Promise(r => setTimeout(r, ms));\n  return 'ready';\n}\nwaitRetry(10).then(console.log);",
        hints: ['Use new Promise(r => setTimeout(r, ms)).'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'How does Long Polling differ from traditional Regular Polling?',
        options: [
          'In long polling, the server keeps the HTTP connection open until new data is ready rather than replying immediately with empty responses',
          'Long polling requires binary data only',
          'Long polling is built into CSS',
          'Long polling only works on localhost',
        ],
        correctIndex: 0,
        explanation:
          'Long polling minimizes empty responses by holding the request until new events occur.',
      },
    ],
    keyTakeaways: [
      'Long polling provides real-time updates over standard HTTP.',
      'Simple to deploy through existing load balancers and proxies.',
      'For high-frequency bidirectional updates, WebSockets are preferred.',
    ],
    tags: ['long-polling', 'real-time', 'http', 'networking'],
  },
  {
    slug: 'websocket',
    title: 'WebSockets: Full-Duplex Real-Time Communication',
    description:
      'Establish persistent, bidirectional, low-latency connections for multiplayer games, chat apps, and live dashboards.',
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'What is a WebSocket?',
        paragraphs: [
          'While HTTP is request-response based (the client always initiates), WebSockets provide a persistent, two-way (full-duplex) communication channel over a single TCP connection.',
          'Once established (ws:// or secure wss://), both client and server can send text or binary frames at any time with minimal overhead.',
        ],
        codeExamples: [
          {
            title: 'WebSocket Client Lifecycle',
            code: "// const socket = new WebSocket('wss://chat.example.com/ws');\n// socket.onopen = () => socket.send(JSON.stringify({ type: 'join' }));\n// socket.onmessage = (event) => console.log('Message from server:', event.data);\n// socket.onclose = () => console.log('Connection closed');\n\nconsole.log('WebSocket API standard available in browser');",
            output: 'WebSocket API standard available in browser',
            explanation:
              'WebSockets transmit messages with near-zero latency, eliminating HTTP header overhead.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Verify WebSocket Protocol Prefix',
        description:
          'Write a function getWsUrl(domain) that returns `wss://${domain}`.',
        starterCode:
          "function getWsUrl(domain) {\n  return `wss://${domain}`;\n}\n\nconsole.log(getWsUrl('echo.websocket.org'));",
        solution:
          "function getWsUrl(domain) {\n  return `wss://${domain}`;\n}\nconsole.log(getWsUrl('echo.websocket.org'));",
        hints: ['Use template literals: `wss://${domain}`.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What protocol scheme is used for secure encrypted WebSocket connections?',
        options: ['wss://', 'https://', 'ws://', 'tcp://'],
        correctIndex: 0,
        explanation:
          'wss:// stands for WebSocket Secure, encrypted using TLS/SSL.',
      },
    ],
    keyTakeaways: [
      'WebSockets provide full-duplex persistent connections.',
      'Use wss:// for secure encrypted communication.',
      'Ideal for chat applications, live financial tickers, and multiplayer games.',
    ],
    tags: ['websocket', 'real-time', 'networking', 'full-duplex'],
  },
  {
    slug: 'server-sent-events',
    title: 'Server-Sent Events (SSE): EventSource',
    description:
      'Stream server-to-client updates over standard HTTP using the built-in EventSource API with automatic reconnection.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The EventSource API',
        paragraphs: [
          'When you only need one-way server-to-client streaming (e.g. live AI streaming responses, stock price feeds, or status alerts), Server-Sent Events (SSE) are vastly simpler than WebSockets.',
          'SSE operates over standard HTTP (Content-Type: text/event-stream) and includes automatic reconnection and message IDs out of the box.',
        ],
        codeExamples: [
          {
            title: 'Listening to Server-Sent Events',
            code: "// const eventSource = new EventSource('/api/live-stream');\n// eventSource.onmessage = (event) => {\n//   console.log('New event from server:', event.data);\n// };\n// eventSource.onerror = () => console.log('Reconnecting...');\n\nconsole.log('EventSource is natively supported in all modern browsers');",
            output: 'EventSource is natively supported in all modern browsers',
            explanation:
              'EventSource reconnects automatically if the connection is temporarily lost.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Verify EventSource Class',
        description:
          "Check if typeof EventSource === 'function' and log the result.",
        starterCode: "console.log(typeof EventSource === 'function');",
        solution: "console.log(typeof EventSource === 'function');",
        hints: ['Check typeof EventSource.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What is a major advantage of Server-Sent Events (SSE) over WebSockets for one-way server-to-client feeds?',
        options: [
          'SSE operates over standard HTTP with built-in automatic reconnection and message ID tracking',
          'SSE sends messages faster than light',
          "SSE doesn't require a server",
          'SSE works without internet',
        ],
        correctIndex: 0,
        explanation:
          'SSE runs over standard HTTP, works seamlessly with existing HTTP proxies, and auto-reconnects natively.',
      },
    ],
    keyTakeaways: [
      'Use SSE (EventSource) for server-to-client streaming (e.g. AI token streaming).',
      'Supports automatic reconnection and custom event types.',
      'Simpler to configure than WebSockets when client-to-server messaging is not needed.',
    ],
    tags: ['sse', 'eventsource', 'streaming', 'real-time', 'http'],
  },
  {
    slug: 'cookie',
    title: 'Cookies and document.cookie',
    description:
      'Manage browser cookies: expiration dates, path, secure/SameSite attributes, and the difference from Web Storage.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Reading and Setting Cookies',
        paragraphs: [
          'Cookies are small strings of data stored in the browser and automatically sent to the server with every HTTP request under the Cookie header.',
          'In JavaScript, you can read and set cookies via document.cookie. Modern cookies must configure attributes like SameSite, Secure, and max-age.',
        ],
        codeExamples: [
          {
            title: 'Setting a Cookie',
            code: "// Set a cookie valid for 7 days with SameSite=Lax and Secure:\nconst expires = 7 * 24 * 60 * 60; // 7 days in seconds\n// document.cookie = `theme=dark; max-age=${expires}; path=/; SameSite=Lax; Secure`;\n\nconsole.log('Cookie configuration string prepared');",
            output: 'Cookie configuration string prepared',
            explanation:
              'Always use max-age, path, and SameSite attributes to keep cookies secure.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Format Cookie Key-Value',
        description:
          'Write a function makeCookie(name, val) that returns `${name}=${encodeURIComponent(val)}; path=/`.',
        starterCode:
          "function makeCookie(name, val) {\n  return `${name}=${encodeURIComponent(val)}; path=/`;\n}\n\nconsole.log(makeCookie('user', 'John Doe'));",
        solution:
          "function makeCookie(name, val) {\n  return `${name}=${encodeURIComponent(val)}; path=/`;\n}\nconsole.log(makeCookie('user', 'John Doe'));",
        hints: ['Use encodeURIComponent to safely escape values.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What attribute prevents JavaScript from accessing a sensitive session cookie, protecting it from XSS theft?',
        options: [
          'HttpOnly (set by the server)',
          'Secure',
          'SameSite',
          'max-age',
        ],
        correctIndex: 0,
        explanation:
          'HttpOnly cookies cannot be read or modified via document.cookie in JavaScript, safeguarding authentication tokens from XSS.',
      },
    ],
    keyTakeaways: [
      'Cookies are sent automatically with every HTTP request to matching domains.',
      'Use HttpOnly cookies for sensitive auth tokens.',
      'Use SameSite=Lax/Strict to protect against CSRF attacks.',
    ],
    tags: ['cookies', 'storage', 'security', 'httponly', 'samesite'],
  },
  {
    slug: 'localstorage',
    title: 'localStorage and sessionStorage',
    description:
      'Persist key-value data across browser restarts with localStorage, and scope session data with sessionStorage.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Web Storage: localStorage vs sessionStorage',
        paragraphs: [
          'Web Storage provides persistent, origin-scoped key-value storage in the browser without sending data over network requests like cookies do.',
          '1. localStorage: Persists forever until explicitly cleared by the user or code.',
          '2. sessionStorage: Scoped to the current browser tab; destroyed when the tab is closed.',
        ],
        codeExamples: [
          {
            title: 'Storing Objects in localStorage',
            code: "// localStorage stores strings only! Use JSON.stringify:\nconst userPreferences = { theme: 'dark', fontSize: 16 };\nlocalStorage.setItem('prefs', JSON.stringify(userPreferences));\n\n// Retrieve and parse:\nconst saved = JSON.parse(localStorage.getItem('prefs') || '{}');\nconsole.log('Saved theme:', saved.theme); // 'dark'\n\n// Clean up:\nlocalStorage.removeItem('prefs');",
            output: 'Saved theme: dark',
            explanation:
              'Always serialize objects with JSON.stringify before storing them in localStorage.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Save and Retrieve Item',
        description:
          "Save 'token' with value 'xyz-123' to localStorage, read it, and log it.",
        starterCode:
          "localStorage.setItem('token', 'xyz-123');\nconsole.log(localStorage.getItem('token'));\nlocalStorage.removeItem('token');",
        solution:
          "localStorage.setItem('token', 'xyz-123');\nconsole.log(localStorage.getItem('token'));\nlocalStorage.removeItem('token');",
        hints: ['Use setItem and getItem.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What happens to data stored in localStorage when the user closes their browser window?',
        options: [
          'The data remains saved and will still be there when they return',
          'The data is deleted immediately',
          'It is sent to the server',
          'It is encrypted with a password',
        ],
        correctIndex: 0,
        explanation:
          'localStorage persists across browser sessions and tab closes until cleared.',
      },
    ],
    keyTakeaways: [
      'localStorage stores up to ~5MB of key-value data per origin.',
      'Values are always strings; use JSON.stringify and JSON.parse for objects.',
      'sessionStorage clears automatically when the tab is closed.',
    ],
    tags: ['localstorage', 'sessionstorage', 'web-storage', 'persistence'],
  },
  {
    slug: 'indexeddb',
    title: 'IndexedDB: In-Browser NoSQL Database',
    description:
      'Store large structured datasets, files, and blobs offline using the powerful IndexedDB transactional database.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Why IndexedDB?',
        paragraphs: [
          'While localStorage is limited to ~5MB of synchronous strings, IndexedDB is a full-fledged client-side NoSQL object database.',
          'IndexedDB supports gigabytes of data, indexes for ultra-fast querying, atomic transactions, and storing raw File/Blob binary objects directly.',
        ],
        codeExamples: [
          {
            title: 'IndexedDB Architecture',
            code: "// Opening a database connection:\n// const request = indexedDB.open('AppDatabase', 1);\n// request.onupgradeneeded = (e) => {\n//   const db = e.target.result;\n//   db.createObjectStore('users', { keyPath: 'id' });\n// };\nconsole.log('IndexedDB is supported in all modern browsers');",
            output: 'IndexedDB is supported in all modern browsers',
            explanation:
              'IndexedDB uses transactions and object stores, making it the foundation for Progressive Web Apps (PWAs).',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Verify IndexedDB Availability',
        description:
          "Check if 'indexedDB' in window is true and log the boolean.",
        starterCode: "console.log('indexedDB' in window);",
        solution: "console.log('indexedDB' in window);",
        hints: ["Check 'indexedDB' in window."],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question: 'What type of database is IndexedDB in the browser?',
        options: [
          'An asynchronous, transactional NoSQL object store',
          'A relational SQL database with tables',
          'A key-value cache limited to 5MB',
          'A cloud database that requires AWS',
        ],
        correctIndex: 0,
        explanation:
          'IndexedDB is a transactional NoSQL object store that holds JavaScript objects and binary data.',
      },
    ],
    keyTakeaways: [
      'IndexedDB provides large-scale client-side storage for offline web applications.',
      'Supports indexing and atomic transactions.',
      "Libraries like 'idb' provide comfortable Promise wrappers around IndexedDB.",
    ],
    tags: ['indexeddb', 'database', 'offline', 'pwa', 'storage'],
  },
  {
    slug: 'arraybuffer-binary-arrays',
    title: 'ArrayBuffer and Typed Arrays: Binary Data',
    description:
      'Work with raw memory buffers in JavaScript using ArrayBuffer, TypedArrays (Uint8Array, Float64Array), and DataView.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Raw Memory and Typed Arrays',
        paragraphs: [
          'An ArrayBuffer is a fixed-length contiguous block of raw memory bytes. It is not an array; you cannot read or write to it directly.',
          'To manipulate the bytes inside an ArrayBuffer, you must create a View: a TypedArray (like Uint8Array, Int32Array, Float64Array) or a DataView.',
        ],
        codeExamples: [
          {
            title: 'Creating and Writing to Typed Arrays',
            code: "// Allocate 16 bytes of memory:\nconst buffer = new ArrayBuffer(16);\n\n// Create a view interpreting the memory as 8-bit unsigned integers (0-255):\nconst uint8View = new Uint8Array(buffer);\nuint8View[0] = 255;\nuint8View[1] = 128;\n\nconsole.log('Byte 0:', uint8View[0]); // 255\nconsole.log('Byte 1:', uint8View[1]); // 128\nconsole.log('Byte 2:', uint8View[2]); // 0 (Zero-initialized)",
            output: 'Byte 0: 255\nByte 1: 128\nByte 2: 0',
            explanation:
              'TypedArrays allow high-performance binary data manipulation for WebGL, WebAssembly, and audio processing.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Uint8Array',
        description:
          'Create a new Uint8Array([10, 20, 30]) and log its length and byteLength.',
        starterCode:
          'const bytes = new Uint8Array([10, 20, 30]);\nconsole.log(bytes.length, bytes.byteLength);',
        solution:
          'const bytes = new Uint8Array([10, 20, 30]);\nconsole.log(bytes.length, bytes.byteLength);',
        hints: ['new Uint8Array([10, 20, 30]) creates a 3-byte array.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Can you directly access or assign elements on a raw ArrayBuffer object (e.g. buffer[0] = 5)?',
        options: [
          'No, ArrayBuffer is an opaque memory container; you must use a TypedArray or DataView to read or write bytes',
          'Yes, ArrayBuffer works just like a standard array',
          'Only in WebAssembly',
          'Only for numbers under 100',
        ],
        correctIndex: 0,
        explanation:
          'ArrayBuffer represents raw memory; views (TypedArrays/DataView) provide the interpretation and methods.',
      },
    ],
    keyTakeaways: [
      'ArrayBuffer allocates contiguous memory bytes.',
      'TypedArrays (Uint8Array, Float32Array) interpret the buffer into typed numbers.',
      'Essential for WebGL, canvas manipulation, cryptography, and WebAssembly.',
    ],
    tags: ['binary', 'arraybuffer', 'typedarrays', 'uint8array', 'memory'],
  },
  {
    slug: 'text-decoder',
    title: 'TextDecoder and TextEncoder: Bytes to Strings',
    description:
      'Convert strings to UTF-8 byte streams with TextEncoder and decode binary buffers back into strings with TextDecoder.',
    difficulty: 'intermediate',
    readingTime: 4,
    sections: [
      {
        heading: 'Encoding and Decoding Text',
        paragraphs: [
          'TextEncoder converts JavaScript strings into an array of UTF-8 encoded bytes (Uint8Array).',
          'TextDecoder reads an ArrayBuffer or Uint8Array of bytes and converts it back into a standard JavaScript string.',
        ],
        codeExamples: [
          {
            title: 'TextEncoder and TextDecoder in Action',
            code: "const encoder = new TextEncoder();\nconst encodedBytes = encoder.encode('Hello, Web Explorer! 🚀');\n\nconsole.log('Encoded byte count:', encodedBytes.length);\nconsole.log('First 5 bytes:', [...encodedBytes.slice(0, 5)]);\n\nconst decoder = new TextDecoder();\nconst originalText = decoder.decode(encodedBytes);\nconsole.log('Decoded text:', originalText);",
            output:
              'Encoded byte count: 26\nFirst 5 bytes: [\n  72,\n  101,\n  108,\n  108,\n  111\n]\nDecoded text: Hello, Web Explorer! 🚀',
            explanation:
              'TextEncoder and TextDecoder handle full multi-byte UTF-8 encoding seamlessly.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Encode and Decode a String',
        description:
          "Encode 'RunJS' to bytes using TextEncoder, then decode back to a string using TextDecoder. Log the result.",
        starterCode:
          "const bytes = new TextEncoder().encode('RunJS');\nconst decoded = new TextDecoder().decode(bytes);\nconsole.log(decoded);",
        solution:
          "const bytes = new TextEncoder().encode('RunJS');\nconst decoded = new TextDecoder().decode(bytes);\nconsole.log(decoded);",
        hints: [
          'Use new TextEncoder().encode() and new TextDecoder().decode().',
        ],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What character encoding does TextEncoder use by default in JavaScript?',
        options: ['UTF-8', 'ASCII', 'UTF-16', 'ISO-8859-1'],
        correctIndex: 0,
        explanation:
          'The TextEncoder specification exclusively uses UTF-8 encoding.',
      },
    ],
    keyTakeaways: [
      'TextEncoder converts strings to UTF-8 Uint8Arrays.',
      'TextDecoder converts binary byte buffers back into strings.',
      'Standard API supported across browsers and Node.js.',
    ],
    tags: ['textdecoder', 'textencoder', 'utf-8', 'binary', 'encoding'],
  },
  {
    slug: 'blob',
    title: 'Blob: Binary Large Objects & Object URLs',
    description:
      'Work with immutable raw binary data using Blob, create download links with URL.createObjectURL(), and convert formats.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'What is a Blob?',
        paragraphs: [
          'A Blob (Binary Large Object) represents immutable, raw data with an optional MIME type. Images, audio files, and downloaded archives are typically represented as Blobs.',
          'You can generate downloadable files on the client side without a server using new Blob([data], { type }) and URL.createObjectURL(blob).',
        ],
        codeExamples: [
          {
            title: 'Creating an In-Memory Download Link',
            code: "const text = 'Invoice Report: Total = $500';\nconst blob = new Blob([text], { type: 'text/plain' });\n\nconst blobUrl = URL.createObjectURL(blob);\nconsole.log('Generated Blob URL:', blobUrl);\n\n// Clean up memory when done:\nURL.revokeObjectURL(blobUrl);",
            explanation:
              'URL.createObjectURL creates a temporary unique URL (blob:http://...) pointing to the in-memory data.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Text Blob',
        description:
          "Create a Blob containing 'Hello World' with type 'text/plain'. Log blob.size and blob.type.",
        starterCode:
          "const b = new Blob(['Hello World'], { type: 'text/plain' });\nconsole.log(b.size, b.type);",
        solution:
          "const b = new Blob(['Hello World'], { type: 'text/plain' });\nconsole.log(b.size, b.type);",
        hints: ["Pass ['Hello World'] and { type: 'text/plain' }."],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Why is it important to call URL.revokeObjectURL(url) after you finish using a Blob URL?',
        options: [
          'To free the referenced Blob memory and prevent memory leaks',
          "To delete the user's hard drive file",
          'Because Blob URLs expire after 1 second anyway',
          'To close the browser tab',
        ],
        correctIndex: 0,
        explanation:
          'The browser retains the Blob in memory as long as its Blob URL is active; calling revokeObjectURL frees the memory.',
      },
    ],
    keyTakeaways: [
      'Blob stores immutable binary data with a MIME type.',
      'Use URL.createObjectURL(blob) to generate URLs for images or downloads.',
      'Call URL.revokeObjectURL(url) to release memory.',
    ],
    tags: ['blob', 'binary', 'object-url', 'files', 'download'],
  },
  {
    slug: 'file',
    title: 'File and FileReader: Reading Local Files',
    description:
      "Access user-selected files from <input type='file'> or drag-and-drop, and read them asynchronously with FileReader.",
    difficulty: 'intermediate',
    readingTime: 6,
    sections: [
      {
        heading: 'The File and FileReader APIs',
        paragraphs: [
          'The File object inherits all capabilities of Blob, adding file-specific metadata like name, size, and lastModified timestamp.',
          "FileReader allows web applications to asynchronously read the contents of files stored on the user's computer (as text, Data URLs for images, or ArrayBuffers).",
        ],
        codeExamples: [
          {
            title: 'Reading a File as Data URL (Image Preview)',
            code: "function previewFile(file) {\n  const reader = new FileReader();\n  \n  reader.onload = function(e) {\n    const dataUrl = e.target.result;\n    console.log('File read as Data URL:', dataUrl.slice(0, 30) + '...');\n  };\n  \n  // reader.readAsDataURL(file);\n}\n\nconsole.log('FileReader ready for local file access');",
            output: 'FileReader ready for local file access',
            explanation:
              'readAsDataURL converts files to base64 strings ideal for instant local image previews.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Create a Mock File',
        description:
          "Instantiate a File object with content ['data'], filename 'test.txt', and log file.name.",
        starterCode:
          "const f = new File(['data'], 'test.txt', { type: 'text/plain' });\nconsole.log(f.name);",
        solution:
          "const f = new File(['data'], 'test.txt', { type: 'text/plain' });\nconsole.log(f.name);",
        hints: ['new File([content], filename, options) creates a File.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Which FileReader method reads a file and produces a Base64-encoded string suitable for an <img src> attribute?',
        options: [
          'reader.readAsDataURL(file)',
          'reader.readAsText(file)',
          'reader.readAsArrayBuffer(file)',
          'reader.readAsBinaryString(file)',
        ],
        correctIndex: 0,
        explanation:
          'readAsDataURL() produces a data: URI with base64 data, ideal for immediate image previews.',
      },
    ],
    keyTakeaways: [
      'File inherits from Blob with additional metadata (name, lastModified).',
      'Use FileReader to read contents as text, Data URLs, or ArrayBuffers.',
      'Modern fetch also supports direct file reading with file.text() and file.arrayBuffer().',
    ],
    tags: ['file', 'filereader', 'uploads', 'data-url', 'images'],
  },
  {
    slug: 'popup-windows',
    title: 'Popup Windows and window.open',
    description:
      'Open auxiliary browser windows with window.open, control dimensions, and manage opener references safely.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'Opening Windows with window.open',
        paragraphs: [
          'The window.open(url, target, features) method opens a new browser window or tab.',
          'Modern browsers restrict popups to direct user actions (like a button click) to prevent annoying spam ads.',
        ],
        codeExamples: [
          {
            title: 'Opening a Controlled Window',
            code: "// Open a 400x500 popup dialog:\n// const popup = window.open('/login', 'AuthWindow', 'width=400,height=500');\n// if (popup) popup.focus();\n\nconsole.log('window.open is available for user-initiated dialogs');",
            output: 'window.open is available for user-initiated dialogs',
            explanation:
              'Popup blockers block window.open unless invoked inside a user interaction handler.',
          },
        ],
        callout: {
          type: 'warning',
          text: "Always use rel='noopener noreferrer' on external links to prevent the target window from accessing your window.opener property!",
        },
      },
    ],
    exercises: [
      {
        title: 'Verify window.open Method',
        description:
          "Check if typeof window.open === 'function' and log the result.",
        starterCode: "console.log(typeof window.open === 'function');",
        solution: "console.log(typeof window.open === 'function');",
        hints: ['Check typeof window.open.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'Why do modern browsers block calls to window.open() that occur outside user events (e.g. inside a setTimeout)?',
        options: [
          'To protect users from unsolicited popup advertisements and malicious redirects',
          'Because popups are deprecated in HTML5',
          'To save battery power',
          'Popups only work in Node.js',
        ],
        correctIndex: 0,
        explanation:
          'Browsers permit popups only in direct response to trusted user gestures (clicks, taps).',
      },
    ],
    keyTakeaways: [
      'Call window.open only within user click handlers to avoid popup blockers.',
      'Use noopener to prevent security vulnerabilities via window.opener.',
    ],
    tags: ['window', 'popups', 'security', 'noopener'],
  },
  {
    slug: 'cross-window-communication',
    title: 'Cross-Window Messaging: window.postMessage',
    description:
      'Communicate safely between different windows, tabs, and iframes across different origins using postMessage and message listeners.',
    difficulty: 'advanced',
    readingTime: 6,
    sections: [
      {
        heading: 'Safe Cross-Origin Messaging',
        paragraphs: [
          "Due to the Same-Origin Policy, windows from different domains cannot access each other's DOM or variables.",
          'window.postMessage(message, targetOrigin) provides a secure bridge for sending messages between windows, popups, and iframes.',
          'The receiver verifies event.origin before processing any incoming message data.',
        ],
        codeExamples: [
          {
            title: 'Sending and Receiving Messages',
            code: "// Sender:\n// targetWindow.postMessage({ type: 'AUTH_SUCCESS', token: '123' }, 'https://trusted-site.com');\n\n// Receiver:\nwindow.addEventListener('message', (event) => {\n  // Always verify origin for security!\n  // if (event.origin !== 'https://trusted-site.com') return;\n  console.log('Received safe message:', event.data);\n});\n\nconsole.log('postMessage listener registered');",
            output: 'postMessage listener registered',
            explanation:
              "Always specify the exact targetOrigin rather than '*' to prevent message interception.",
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Verify postMessage Support',
        description:
          "Check if typeof window.postMessage === 'function' and log the result.",
        starterCode: "console.log(typeof window.postMessage === 'function');",
        solution: "console.log(typeof window.postMessage === 'function');",
        hints: ['Check typeof window.postMessage.'],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          "Why is it critical to check event.origin inside a window 'message' event listener?",
        options: [
          'Because any site or malicious iframe could post messages to your window, so origin verification ensures data comes from a trusted source',
          'To convert the data from XML to JSON',
          'To make the message run in strict mode',
          'It is optional',
        ],
        correctIndex: 0,
        explanation:
          'Checking event.origin protects against receiving unauthorized commands or payload injections from malicious domains.',
      },
    ],
    keyTakeaways: [
      'Use window.postMessage() for cross-origin communication between iframes and windows.',
      'Always specify the exact targetOrigin when sending.',
      'Always verify event.origin before trusting incoming message payloads.',
    ],
    tags: ['postmessage', 'cross-origin', 'iframes', 'security', 'messaging'],
  },
  {
    slug: 'clickjacking',
    title: 'Clickjacking Attacks and Defenses',
    description:
      'Understand the UI redressing security attack and defend your applications with the X-Frame-Options and CSP frame-ancestors headers.',
    difficulty: 'advanced',
    readingTime: 5,
    sections: [
      {
        heading: 'What is Clickjacking?',
        paragraphs: [
          'Clickjacking is a malicious technique where an attacker embeds your website inside a transparent <iframe> on their malicious site, layering deceptive buttons over it.',
          "When a visitor clicks what appears to be a free video game button, they are actually clicking 'Delete Account' or 'Transfer Funds' on your authenticated website.",
        ],
        codeExamples: [
          {
            title: 'Server Headers to Block Framing',
            code: "// 1. Modern Content Security Policy (CSP):\n// Content-Security-Policy: frame-ancestors 'none'; // Disallow all framing\n// Content-Security-Policy: frame-ancestors 'self' https://trusted.com;\n\n// 2. Legacy header:\n// X-Frame-Options: DENY\n\nconsole.log('Security headers configured against clickjacking');",
            output: 'Security headers configured against clickjacking',
            explanation:
              'frame-ancestors blocks browsers from rendering your application inside foreign iframes.',
          },
        ],
      },
    ],
    exercises: [
      {
        title: 'Frame Busting Verification',
        description:
          'Write code that checks if window.self !== window.top (detecting if the page is running inside an iframe).',
        starterCode:
          'const isFramed = window.self !== window.top;\nconsole.log(isFramed);',
        solution:
          'const isFramed = window.self !== window.top;\nconsole.log(isFramed);',
        hints: [
          'window.self !== window.top indicates the page is inside a frame.',
        ],
        difficulty: 'beginner',
      },
    ],
    quiz: [
      {
        question:
          'What is the most secure modern HTTP header to prevent an application from being embedded inside malicious iframes?',
        options: [
          "Content-Security-Policy: frame-ancestors 'self'",
          'X-Anti-Clickjack: true',
          'Access-Control-Allow-Origin: none',
          'Cache-Control: no-frame',
        ],
        correctIndex: 0,
        explanation:
          'The CSP frame-ancestors directive is the modern standard for controlling iframe embedding permissions.',
      },
    ],
    keyTakeaways: [
      'Clickjacking tricks users into clicking hidden framed UI elements.',
      "Use CSP frame-ancestors 'none' or 'self' to block unauthorized framing.",
      'Use SameSite cookie attributes as an additional layer of protection.',
    ],
    tags: ['clickjacking', 'security', 'csp', 'iframes', 'x-frame-options'],
  },
];
