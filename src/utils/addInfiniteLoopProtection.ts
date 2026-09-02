/**
 * Injects infinite loop protection into user code.
 * Masks literals, normalizes unbraced loops, and tracks iterations per loop ID.
 */
export function addInfiniteLoopProtection(
  code: string,
  maxIterations = 10000
): string {
  if (!code || !code.trim()) return code;

  try {
    const tokens: string[] = [];
    const placeholder = (idx: number) => `___RUNJS_LITERAL_${idx}___`;
    const literalRegex =
      /(\/\*[\s\S]*?\*\/|\/\/[^\r\n]*|(?<![\w$])\/(?:\\.|[^/\\\r\n])+\/[gimsuy]*|`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g;

    const masked = code.replace(literalRegex, (match) => {
      const idx = tokens.length;
      tokens.push(match);
      return placeholder(idx);
    });

    // Normalize empty loops with immediate semicolons: while(true); -> while(true) {}
    let normalized = masked
      .replace(/\b(while\s*\([^{};]*\))\s*;/g, '$1 {}')
      .replace(/\b(for\s*\([^)]*\))\s*;/g, '$1 {}');

    // Normalize single-statement loops without braces: while(x) y(); -> while(x) { y(); }
    normalized = normalized
      .replace(/\b(while\s*\([^{};]*\))\s*([^{};]+;)/g, '$1 { $2 }')
      .replace(/\b(for\s*\([^)]*\))\s*([^{};]+;)/g, '$1 { $2 }');

    let loopId = 0;
    const transformed = normalized.replace(
      /\b(for\s*\([^{}]*\)|while\s*\([^{}]*\)|do)\s*\{/g,
      (match) => {
        const id = loopId++;
        return `${match} __runjs_check_loop(${id}, ${maxIterations});`;
      }
    );

    if (loopId === 0) return code;

    const helper = `
const __runjs_loop_data = new Map();
function __runjs_check_loop(id, max = ${maxIterations}) {
  let rec = __runjs_loop_data.get(id);
  const now = Date.now();
  if (!rec || now - rec.lastTime > 500) {
    rec = { count: 0, lastTime: now };
    __runjs_loop_data.set(id, rec);
  }
  rec.lastTime = now;
  if (++rec.count > max) {
    throw new RangeError('Potential infinite loop detected: exceeded ' + max + ' iterations.');
  }
}
`;

    const unmasked = transformed.replace(
      /___RUNJS_LITERAL_(\d+)___/g,
      (_, idxStr) => tokens[Number(idxStr)] ?? ''
    );

    return `${helper}\n${unmasked}`;
  } catch {
    return code;
  }
}
