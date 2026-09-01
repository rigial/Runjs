import { addInfiniteLoopProtection } from './addInfiniteLoopProtection';

export interface CompileHtmlOptions {
  html: string;
  css: string;
  javascript: string;
  enableLoopProtection?: boolean;
}

export const SENDER_KEY = 'runjs-html-preview';

/**
 * Client harness script injected into the preview iframe.
 * Intercepts console logs, unhandled runtime errors, promise rejections,
 * and passes them via window.parent.postMessage to the RunJS host.
 */
const HARNESS_SCRIPT = `
<script>
(function() {
  const SENDER = '${SENDER_KEY}';

  function safeSerialize(val, depth, seen) {
    if (depth === undefined) depth = 0;
    if (seen === undefined) seen = new WeakSet();

    if (depth > 3) return '[Object]';
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';

    const type = typeof val;
    if (type === 'number' || type === 'string' || type === 'boolean') {
      return val;
    }
    if (type === 'symbol') {
      return val.toString();
    }
    if (type === 'bigint') {
      return val.toString() + 'n';
    }
    if (type === 'function') {
      return '[Function: ' + (val.name || 'anonymous') + ']';
    }
    if (val instanceof Error) {
      return {
        __isError: true,
        name: val.name,
        message: val.message,
        stack: val.stack
      };
    }
    if (type === 'object') {
      if (seen.has(val)) {
        return '[Circular]';
      }
      seen.add(val);

      if (Array.isArray(val)) {
        return val.slice(0, 100).map(function(item) {
          return safeSerialize(item, depth + 1, seen);
        });
      }
      if (val instanceof HTMLElement) {
        return '<' + val.tagName.toLowerCase() + (val.id ? ' id="' + val.id + '"' : '') + (val.className ? ' class="' + val.className + '"' : '') + '>';
      }

      var obj = {};
      var keys = Object.keys(val).slice(0, 100);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        try {
          obj[k] = safeSerialize(val[k], depth + 1, seen);
        } catch (e) {
          obj[k] = '[Unserializable]';
        }
      }
      return obj;
    }
    return String(val);
  }

  function postToHost(message) {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(message, '*');
      }
    } catch (e) {
      // Ignored if postMessage is blocked
    }
  }

  // Intercept Console APIs
  var originalConsole = window.console || {};
  var methods = ['log', 'info', 'warn', 'error', 'debug', 'table'];

  var customConsole = {};
  methods.forEach(function(method) {
    customConsole[method] = function() {
      var args = Array.prototype.slice.call(arguments);
      var serialized = args.map(function(arg) {
        return safeSerialize(arg);
      });
      postToHost({
        source: SENDER,
        type: 'console',
        method: method,
        args: serialized,
        timestamp: Date.now()
      });
      if (typeof originalConsole[method] === 'function') {
        try {
          originalConsole[method].apply(originalConsole, arguments);
        } catch (e) {}
      }
    };
  });

  customConsole.clear = function() {
    postToHost({
      source: SENDER,
      type: 'clear',
      timestamp: Date.now()
    });
    if (typeof originalConsole.clear === 'function') {
      try {
        originalConsole.clear();
      } catch (e) {}
    }
  };

  window.console = Object.assign({}, originalConsole, customConsole);

  // Global uncaught runtime errors
  window.addEventListener('error', function(event) {
    var errorObj = event.error;
    var message = (errorObj && errorObj.message) || event.message || 'Script error';
    var stack = errorObj && errorObj.stack;

    postToHost({
      source: SENDER,
      type: 'error',
      method: 'error',
      message: message,
      stack: stack,
      lineno: event.lineno,
      colno: event.colno,
      args: [stack || (message + (event.lineno ? ' (at line ' + event.lineno + ')' : ''))],
      timestamp: Date.now()
    });
  });

  // Global unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    var reason = event.reason;
    var message = reason instanceof Error ? (reason.stack || reason.message) : String(reason || 'Unhandled Promise Rejection');

    postToHost({
      source: SENDER,
      type: 'error',
      method: 'error',
      message: message,
      args: ['Unhandled Promise Rejection: ' + message],
      timestamp: Date.now()
    });
  });
})();
</script>
`;

/**
 * Combines HTML, CSS, and JS into a standalone, sandboxed HTML document string.
 */
export function compileHtmlDocument({
  html,
  css,
  javascript,
  enableLoopProtection = true,
}: CompileHtmlOptions): string {
  // Apply infinite loop protection to JavaScript if enabled
  let processedJs = javascript;
  if (enableLoopProtection && javascript.trim()) {
    try {
      processedJs = addInfiniteLoopProtection(javascript);
    } catch {
      processedJs = javascript;
    }
  }

  const safeStyleTag = `<style id="runjs-user-styles">\n${css || ''}\n</style>`;
  const safeScriptTag = `<script id="runjs-user-scripts">
try {
${processedJs}
} catch (error) {
  console.error(error);
}
</script>`;

  const trimmedHtml = (html || '').trim();
  const hasHtmlTag = /<html[\s>]/i.test(trimmedHtml);
  const hasHeadTag = /<head[\s>]/i.test(trimmedHtml);
  const hasBodyTag = /<body[\s>]/i.test(trimmedHtml);

  if (hasHtmlTag || hasHeadTag || hasBodyTag) {
    let fullDoc = trimmedHtml;

    // Inject harness and styles into <head> or at top of <html>
    if (hasHeadTag) {
      fullDoc = fullDoc.replace(
        /<head([^>]*)>/i,
        `<head$1>\n${HARNESS_SCRIPT}\n${safeStyleTag}`
      );
    } else if (hasHtmlTag) {
      fullDoc = fullDoc.replace(
        /<html([^>]*)>/i,
        `<html$1><head>\n${HARNESS_SCRIPT}\n${safeStyleTag}</head>`
      );
    } else {
      fullDoc = `<head>\n${HARNESS_SCRIPT}\n${safeStyleTag}</head>\n${fullDoc}`;
    }

    // Inject scripts before </body> or at end
    if (hasBodyTag && /<\/body>/i.test(fullDoc)) {
      fullDoc = fullDoc.replace(/<\/body>/i, `${safeScriptTag}\n</body>`);
    } else {
      fullDoc = `${fullDoc}\n${safeScriptTag}`;
    }

    return fullDoc;
  }

  // Fragment mode (most common CodePen style snippet)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preview</title>
  ${HARNESS_SCRIPT}
  ${safeStyleTag}
</head>
<body>
  ${trimmedHtml}
  ${safeScriptTag}
</body>
</html>`;
}
