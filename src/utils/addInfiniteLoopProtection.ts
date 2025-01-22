export function addInfiniteLoopProtection(code: string): string {
    const MAX_ITERATIONS = 1500;
    const loopProtectionCode = `
        let __iterations = 0;
        const __checkIterations = () => {
          if (++__iterations > ${MAX_ITERATIONS}) {
            throw new RangeError('Potential infinite loop: exceeded ${MAX_ITERATIONS} iterations.');
          }
        };
      `;

    // Inject the protection code at the beginning
    let protectedCode = loopProtectionCode + code;

    // Add iteration checks for 'for', 'while', and 'do-while' loops
    protectedCode = protectedCode
        .replace(/for\s*\((.*?)\)\s*{/g, `for ($1) { __checkIterations();`)
        .replace(/while\s*\((.*?)\)\s*{/g, `while ($1) { __checkIterations();`)
        .replace(/do\s*{/g, `do { __checkIterations();`);

    return protectedCode;
}
