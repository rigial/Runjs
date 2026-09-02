import * as acorn from 'acorn';
import {
  ExecutionContext,
  MemoryVariable,
  ContextCallStackFrame,
  ContextConsoleLog,
  ContextActionType,
  ContextExecutionStep,
  ContextSimulationResult,
} from './types';

const MAX_STEPS = 500;
const MAX_LOOP_ITERATIONS = 150;
const MAX_STACK_DEPTH = 30;

const TDZ_SYMBOL = Symbol('TDZ');

interface SimulatedFunction {
  __isSimulatedFunction: true;
  name: string;
  params: string[];
  body: acorn.Node;
  declarationLine: number | null;
  parentContextId: string;
}

function formatValue(val: unknown): string {
  if (val === TDZ_SYMBOL) return '<uninitialized>';
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';
  if (typeof val === 'string') return `"${val}"`;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (typeof val === 'function') return 'ƒ ()';
  if (typeof val === 'object') {
    if (val && (val as SimulatedFunction).__isSimulatedFunction) {
      const fn = val as SimulatedFunction;
      return `ƒ ${fn.name}(${fn.params.join(', ')})`;
    }
    if (Array.isArray(val)) {
      try {
        const items = val.map((item) => formatValue(item)).join(', ');
        return `[${items}]`;
      } catch {
        return '[Array]';
      }
    }
    try {
      const entries = Object.entries(val as Record<string, unknown>).map(
        ([k, v]) => `${k}: ${formatValue(v)}`
      );
      return `{ ${entries.join(', ')} }`;
    } catch {
      return '[Object]';
    }
  }
  return String(val);
}

class ContextInterpreter {
  private steps: ContextExecutionStep[] = [];
  private callStack: ContextCallStackFrame[] = [];
  private contextsMap: Map<string, ExecutionContext> = new Map();
  private contextHierarchy: Map<string, string | null> = new Map(); // childContextId -> parentContextId
  private activeContextId: string = 'gec';
  private logs: ContextConsoleLog[] = [];
  private idCounter = 1;
  private loopIterations = 0;

  private generateId(prefix: string): string {
    return `${prefix}-${this.idCounter++}`;
  }

  private getActiveContext(): ExecutionContext {
    const ctx = this.contextsMap.get(this.activeContextId);
    if (!ctx) {
      throw new Error(`Active context ${this.activeContextId} not found`);
    }
    return ctx;
  }

  private cloneContexts(): ExecutionContext[] {
    const result: ExecutionContext[] = [];
    for (const ctx of this.contextsMap.values()) {
      const clonedVars: Record<string, MemoryVariable> = {};
      for (const [key, memVar] of Object.entries(ctx.variables)) {
        clonedVars[key] = { ...memVar };
      }
      result.push({
        ...ctx,
        variables: clonedVars,
      });
    }
    return result;
  }

  private cloneCallStack(): ContextCallStackFrame[] {
    return this.callStack.map((frame) => ({ ...frame }));
  }

  private cloneLogs(): ContextConsoleLog[] {
    return this.logs.map((log) => ({ ...log, args: [...log.args] }));
  }

  private snapshot(
    title: string,
    phase: 'memory' | 'execution' | 'idle',
    actionType: ContextActionType,
    explanation: string,
    activeLine: number | null,
    updatedVarName?: string,
    updatedContextId?: string
  ): void {
    if (this.steps.length >= MAX_STEPS) {
      throw new Error(
        `Simulation limit of ${MAX_STEPS} steps reached. Possible infinite recursion or loop.`
      );
    }

    this.steps.push({
      stepIndex: this.steps.length,
      title,
      phase,
      actionType,
      explanation,
      activeLine,
      callStack: this.cloneCallStack(),
      contexts: this.cloneContexts(),
      activeContextId: this.activeContextId,
      updatedVariableName: updatedVarName,
      updatedContextId: updatedContextId,
      logs: this.cloneLogs(),
    });
  }

  // Look up a variable in the scope chain starting from current context
  private lookupVariable(name: string): {
    context: ExecutionContext;
    variable: MemoryVariable;
  } | null {
    let currId: string | null = this.activeContextId;
    while (currId) {
      const ctx = this.contextsMap.get(currId);
      if (ctx && Object.prototype.hasOwnProperty.call(ctx.variables, name)) {
        return { context: ctx, variable: ctx.variables[name] };
      }
      currId = this.contextHierarchy.get(currId) || null;
    }
    return null;
  }

  public run(code: string): ContextSimulationResult {
    this.steps = [];
    this.callStack = [];
    this.contextsMap.clear();
    this.contextHierarchy.clear();
    this.logs = [];
    this.idCounter = 1;
    this.loopIterations = 0;

    try {
      const ast = acorn.parse(code, {
        ecmaVersion: 'latest',
        locations: true,
        sourceType: 'script',
      }) as unknown as { body: acorn.Node[] };

      // Initialize Global Execution Context (GEC)
      const gecId = 'gec';
      this.activeContextId = gecId;
      this.contextHierarchy.set(gecId, null);

      const gec: ExecutionContext = {
        id: gecId,
        type: 'global',
        name: 'Global Execution Context',
        phase: 'creation',
        variables: {
          this: {
            name: 'this',
            kind: 'this',
            value: 'window',
            rawValue: 'window',
            status: 'initialized',
            declarationLine: 1,
          },
        },
        callLine: 1,
        depth: 1,
        thisBinding: 'window',
        scopeName: 'Global Scope',
      };
      this.contextsMap.set(gecId, gec);

      const gecFrame: ContextCallStackFrame = {
        id: 'frame-gec',
        contextId: gecId,
        name: 'Global Execution Context',
        type: 'global',
        phase: 'creation',
        line: 1,
        depth: 1,
        isActive: true,
      };
      this.callStack.push(gecFrame);

      // Snapshot 0: GEC Created on Call Stack
      this.snapshot(
        'Global Execution Context Created',
        'memory',
        'GEC_CREATE',
        'JavaScript engine wraps the entire script in the Global Execution Context (GEC) and pushes it onto the Call Stack. Phase 1 (Memory Allocation) begins.',
        1
      );

      // Phase 1: Memory Allocation Phase for Global Code
      this.runMemoryAllocationPhase(ast.body, gec);

      // GEC transitions to Phase 2: Code Execution
      gec.phase = 'execution';
      gecFrame.phase = 'execution';
      this.snapshot(
        'Memory Phase Complete → Code Execution Phase Begins',
        'execution',
        'MEMORY_COMPLETE',
        'Phase 1 (Memory Creation) is complete. The JS engine now executes synchronous code line-by-line on the Thread of Execution.',
        ast.body.length > 0
          ? ((ast.body[0] as { loc?: { start: { line: number } } }).loc?.start
              .line ?? 1)
          : 1
      );

      // Phase 2: Code Execution Phase for Global Statements
      for (const statement of ast.body) {
        this.executeStatement(statement);
      }

      // Script complete: Pop GEC from Call Stack
      gec.phase = 'completed';
      this.callStack.pop();

      this.snapshot(
        'Global Execution Complete',
        'idle',
        'COMPLETE',
        'All synchronous statements have finished executing. The Global Execution Context is popped off the Call Stack, and memory is released.',
        null
      );

      return {
        success: true,
        steps: this.steps,
        error: null,
        errorLine: null,
      };
    } catch (err: unknown) {
      const error = err as Error & { loc?: { line: number } };
      return {
        success: false,
        steps: this.steps,
        error: error.message || 'Error executing code',
        errorLine: error.loc?.line ?? null,
      };
    }
  }

  // ==========================================
  // PHASE 1: MEMORY ALLOCATION (HOISTING)
  // ==========================================
  private runMemoryAllocationPhase(
    body: acorn.Node[],
    targetContext: ExecutionContext
  ): void {
    // 1. First scan for function declarations (they are hoisted with their bodies)
    for (const node of body) {
      if (node.type === 'FunctionDeclaration') {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const fnNode = node as any;
        const fnName = fnNode.id?.name;
        if (!fnName) continue;

        const params: string[] = fnNode.params.map((p: any) =>
          p.type === 'Identifier' ? p.name : 'param'
        );
        const line = fnNode.loc?.start.line ?? null;

        const simulatedFn: SimulatedFunction = {
          __isSimulatedFunction: true,
          name: fnName,
          params,
          body: fnNode.body,
          declarationLine: line,
          parentContextId: targetContext.id,
        };

        const fnDisplay = `ƒ ${fnName}(${params.join(', ')})`;
        targetContext.variables[fnName] = {
          name: fnName,
          kind: 'function',
          value: fnDisplay,
          rawValue: simulatedFn,
          status: 'initialized',
          declarationLine: line ?? undefined,
        };

        this.snapshot(
          `Memory Allocated: function ${fnName}()`,
          'memory',
          'MEMORY_ALLOCATE',
          `Function declaration '${fnName}' is hoisted into memory with its entire function definition. It can be invoked before its declaration in code.`,
          line,
          fnName,
          targetContext.id
        );
      }
    }

    // 2. Next scan for variable declarations (var vs let/const)
    for (const node of body) {
      if (node.type === 'VariableDeclaration') {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const varDecl = node as any;
        const kind = varDecl.kind as 'var' | 'let' | 'const';
        const line = varDecl.loc?.start.line ?? null;

        for (const declarator of varDecl.declarations) {
          const varName = declarator.id?.name;
          if (!varName) continue;

          // If a function declaration with this name already hoisted, var does not overwrite it in creation phase
          if (
            targetContext.variables[varName] &&
            targetContext.variables[varName].kind === 'function' &&
            kind === 'var'
          ) {
            continue;
          }

          if (kind === 'var') {
            targetContext.variables[varName] = {
              name: varName,
              kind: 'var',
              value: 'undefined',
              rawValue: undefined,
              status: 'initialized',
              declarationLine: line ?? undefined,
            };

            this.snapshot(
              `Memory Allocated: var ${varName} = undefined`,
              'memory',
              'MEMORY_ALLOCATE',
              `Variable '${varName}' declared with 'var' is allocated in memory and initialized to 'undefined' (classic hoisting).`,
              line,
              varName,
              targetContext.id
            );
          } else {
            // let or const: allocated in Temporal Dead Zone (TDZ)
            targetContext.variables[varName] = {
              name: varName,
              kind: kind,
              value: '<uninitialized>',
              rawValue: TDZ_SYMBOL,
              status: 'uninitialized',
              declarationLine: line ?? undefined,
            };

            this.snapshot(
              `Memory Allocated: ${kind} ${varName} (TDZ)`,
              'memory',
              'MEMORY_ALLOCATE',
              `Variable '${varName}' declared with '${kind}' is allocated in memory in the Temporal Dead Zone (<uninitialized>). Accessing it before assignment throws a ReferenceError.`,
              line,
              varName,
              targetContext.id
            );
          }
        }
      }
    }
  }

  // ==========================================
  // PHASE 2: CODE EXECUTION
  // ==========================================
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  private executeStatement(node: acorn.Node): {
    isReturn?: boolean;
    returnValue?: unknown;
  } {
    if (!node) return {};

    switch (node.type) {
      case 'VariableDeclaration':
        this.executeVariableDeclaration(node as any);
        return {};

      case 'ExpressionStatement': {
        const expr = (node as any).expression;
        this.evaluateExpression(expr);
        return {};
      }

      case 'FunctionDeclaration':
        // Function declarations were already processed in Phase 1 (Memory Allocation)
        return {};

      case 'ReturnStatement': {
        const retNode = node as any;
        const line = retNode.loc?.start.line ?? null;
        let retVal: unknown = undefined;

        if (retNode.argument) {
          retVal = this.evaluateExpression(retNode.argument);
        }

        const formattedVal = formatValue(retVal);
        const currContext = this.getActiveContext();
        currContext.returnValue = formattedVal;

        this.snapshot(
          `Return: ${formattedVal}`,
          'execution',
          'RETURN',
          `Evaluating return statement on line ${line}. Returning ${formattedVal} to the calling context.`,
          line
        );

        return { isReturn: true, returnValue: retVal };
      }

      case 'IfStatement': {
        const ifNode = node as any;
        const line = ifNode.loc?.start.line ?? null;
        const testVal = this.evaluateExpression(ifNode.test);

        this.snapshot(
          `Evaluate if condition: ${Boolean(testVal)}`,
          'execution',
          'CODE_EXECUTE',
          `Evaluating if-condition on line ${line}: resulting in ${Boolean(testVal)}.`,
          line
        );

        if (testVal) {
          return this.executeStatement(ifNode.consequent);
        } else if (ifNode.alternate) {
          return this.executeStatement(ifNode.alternate);
        }
        return {};
      }

      case 'WhileStatement': {
        const whileNode = node as any;
        while (this.evaluateExpression(whileNode.test)) {
          this.checkLoopIterations();
          const res = this.executeStatement(whileNode.body);
          if (res.isReturn) return res;
        }
        return {};
      }

      case 'ForStatement': {
        const forNode = node as any;
        if (forNode.init) {
          if (forNode.init.type === 'VariableDeclaration') {
            this.executeVariableDeclaration(forNode.init);
          } else {
            this.evaluateExpression(forNode.init);
          }
        }

        while (
          forNode.test ? Boolean(this.evaluateExpression(forNode.test)) : true
        ) {
          this.checkLoopIterations();
          const res = this.executeStatement(forNode.body);
          if (res.isReturn) return res;
          if (forNode.update) {
            this.evaluateExpression(forNode.update);
          }
        }
        return {};
      }

      case 'BlockStatement': {
        const blockNode = node as any;
        for (const stmt of blockNode.body) {
          const res = this.executeStatement(stmt);
          if (res.isReturn) return res;
        }
        return {};
      }

      default:
        return {};
    }
  }

  private checkLoopIterations(): void {
    this.loopIterations++;
    if (this.loopIterations > MAX_LOOP_ITERATIONS) {
      throw new Error(
        `Loop exceeded limit of ${MAX_LOOP_ITERATIONS} iterations. Protection against infinite loops activated.`
      );
    }
  }

  private executeVariableDeclaration(node: any): void {
    const line = node.loc?.start.line ?? null;
    const kind = node.kind as 'var' | 'let' | 'const';

    for (const declarator of node.declarations) {
      const varName = declarator.id?.name;
      if (!varName) continue;

      const currContext = this.getActiveContext();

      if (declarator.init) {
        const value = this.evaluateExpression(declarator.init);
        const prevVar = currContext.variables[varName];
        const prevFormatted = prevVar ? prevVar.value : 'undefined';
        const formattedVal = formatValue(value);

        currContext.variables[varName] = {
          name: varName,
          kind: kind,
          value: formattedVal,
          rawValue: value,
          previousValue: prevFormatted,
          status: 'updated',
          isUpdated: true,
          declarationLine: line ?? undefined,
        };

        this.snapshot(
          `Assign: ${kind} ${varName} = ${formattedVal}`,
          'execution',
          'VARIABLE_ASSIGN',
          `Line ${line}: Evaluating expression for '${varName}'. Memory value updated from '${prevFormatted}' to '${formattedVal}'.`,
          line,
          varName,
          currContext.id
        );
      } else {
        // Declaration without initializer: e.g. `let x;`
        if (kind === 'let') {
          currContext.variables[varName] = {
            name: varName,
            kind: 'let',
            value: 'undefined',
            rawValue: undefined,
            previousValue: '<uninitialized>',
            status: 'updated',
            isUpdated: true,
            declarationLine: line ?? undefined,
          };
          this.snapshot(
            `Initialize: let ${varName} = undefined`,
            'execution',
            'VARIABLE_ASSIGN',
            `Line ${line}: Variable '${varName}' leaves TDZ and is initialized with 'undefined'.`,
            line,
            varName,
            currContext.id
          );
        }
      }
    }
  }

  // ==========================================
  // EXPRESSION EVALUATION
  // ==========================================
  private evaluateExpression(node: any): unknown {
    if (!node) return undefined;

    switch (node.type) {
      case 'Literal':
        return node.value;

      case 'Identifier': {
        const name = node.name;
        const line = node.loc?.start.line ?? null;

        if (name === 'undefined') return undefined;
        if (name === 'null') return null;
        if (name === 'NaN') return NaN;
        if (name === 'Infinity') return Infinity;

        const found = this.lookupVariable(name);
        if (!found) {
          throw new Error(
            `ReferenceError: ${name} is not defined (Line ${line})`
          );
        }

        if (found.variable.rawValue === TDZ_SYMBOL) {
          throw new Error(
            `ReferenceError: Cannot access '${name}' before initialization (Temporal Dead Zone at Line ${line})`
          );
        }

        return found.variable.rawValue;
      }

      case 'BinaryExpression': {
        const left = this.evaluateExpression(node.left);
        const right = this.evaluateExpression(node.right);
        switch (node.operator) {
          case '+':
            return typeof left === 'string' || typeof right === 'string'
              ? String(left) + String(right)
              : (left as number) + (right as number);
          case '-':
            return (left as number) - (right as number);
          case '*':
            return (left as number) * (right as number);
          case '/':
            return (left as number) / (right as number);
          case '%':
            return (left as number) % (right as number);
          case '==':
            return left == right;
          case '!=':
            return left != right;
          case '===':
            return left === right;
          case '!==':
            return left !== right;
          case '<':
            return (left as number) < (right as number);
          case '<=':
            return (left as number) <= (right as number);
          case '>':
            return (left as number) > (right as number);
          case '>=':
            return (left as number) >= (right as number);
          default:
            return undefined;
        }
      }

      case 'LogicalExpression': {
        const left = this.evaluateExpression(node.left);
        if (node.operator === '&&') {
          return left ? this.evaluateExpression(node.right) : left;
        } else if (node.operator === '||') {
          return left ? left : this.evaluateExpression(node.right);
        }
        return undefined;
      }

      case 'UnaryExpression': {
        const arg = this.evaluateExpression(node.argument);
        switch (node.operator) {
          case '!':
            return !arg;
          case '-':
            return -(arg as number);
          case '+':
            return +(arg as number);
          case 'typeof':
            return typeof arg;
          default:
            return undefined;
        }
      }

      case 'UpdateExpression': {
        const line = node.loc?.start.line ?? null;
        if (node.argument.type === 'Identifier') {
          const varName = node.argument.name;
          const found = this.lookupVariable(varName);
          if (!found) {
            throw new Error(`ReferenceError: ${varName} is not defined`);
          }
          const currentVal = Number(found.variable.rawValue) || 0;
          const newVal =
            node.operator === '++' ? currentVal + 1 : currentVal - 1;

          found.variable.previousValue = found.variable.value;
          found.variable.rawValue = newVal;
          found.variable.value = formatValue(newVal);
          found.variable.status = 'updated';
          found.variable.isUpdated = true;

          this.snapshot(
            `Update: ${varName}${node.operator} -> ${newVal}`,
            'execution',
            'VARIABLE_ASSIGN',
            `Line ${line}: Updating variable '${varName}' in memory to ${newVal}.`,
            line,
            varName,
            found.context.id
          );

          return node.prefix ? newVal : currentVal;
        }
        return undefined;
      }

      case 'AssignmentExpression': {
        const line = node.loc?.start.line ?? null;
        const rhsVal = this.evaluateExpression(node.right);

        if (node.left.type === 'Identifier') {
          const varName = node.left.name;
          let found = this.lookupVariable(varName);

          if (!found) {
            // Assigning to undeclared variable: create on active context (or global)
            const activeCtx = this.getActiveContext();
            activeCtx.variables[varName] = {
              name: varName,
              kind: 'var',
              value: formatValue(rhsVal),
              rawValue: rhsVal,
              status: 'updated',
              isUpdated: true,
              declarationLine: line ?? undefined,
            };
            found = {
              context: activeCtx,
              variable: activeCtx.variables[varName],
            };
          } else {
            const prevFormatted = found.variable.value;
            const newFormatted = formatValue(rhsVal);

            found.variable.previousValue = prevFormatted;
            found.variable.rawValue = rhsVal;
            found.variable.value = newFormatted;
            found.variable.status = 'updated';
            found.variable.isUpdated = true;
          }

          this.snapshot(
            `Assign: ${varName} = ${formatValue(rhsVal)}`,
            'execution',
            'VARIABLE_ASSIGN',
            `Line ${line}: Updating variable '${varName}' in memory to ${formatValue(rhsVal)}.`,
            line,
            varName,
            found.context.id
          );

          return rhsVal;
        }
        return rhsVal;
      }

      case 'CallExpression':
        return this.executeCallExpression(node);

      case 'FunctionExpression':
      case 'ArrowFunctionExpression': {
        const line = node.loc?.start.line ?? null;
        const fnName = node.id?.name || 'anonymous';
        const params: string[] = node.params.map((p: any) =>
          p.type === 'Identifier' ? p.name : 'param'
        );

        const simulatedFn: SimulatedFunction = {
          __isSimulatedFunction: true,
          name: fnName,
          params,
          body: node.body,
          declarationLine: line,
          parentContextId: this.activeContextId,
        };
        return simulatedFn;
      }

      case 'ArrayExpression':
        return node.elements.map((el: any) => this.evaluateExpression(el));

      case 'MemberExpression': {
        // Support console.log, Math.floor, etc.
        const objName = node.object?.name;
        const propName = node.property?.name;
        if (objName === 'console') {
          return { __isConsole: true, method: propName };
        }
        if (objName === 'Math') {
          return (Math as any)[propName];
        }
        const objVal = this.evaluateExpression(node.object);
        if (objVal && typeof objVal === 'object') {
          return (objVal as any)[propName];
        }
        return undefined;
      }

      default:
        return undefined;
    }
  }

  // ==========================================
  // FUNCTION INVOCATION & FUNCTION EXECUTION CONTEXT (FEC)
  // ==========================================
  private executeCallExpression(node: any): unknown {
    const line = node.loc?.start.line ?? null;

    // Handle console.log / warn / error
    if (
      node.callee.type === 'MemberExpression' &&
      node.callee.object?.name === 'console'
    ) {
      const method = node.callee.property?.name || 'log';
      const argsEvaluated: string[] = node.arguments.map((arg: any) => {
        const val = this.evaluateExpression(arg);
        return typeof val === 'string' ? val : formatValue(val);
      });

      const logEntry: ContextConsoleLog = {
        id: this.generateId('log'),
        args: argsEvaluated,
        line,
        type:
          method === 'error'
            ? 'error'
            : method === 'warn'
              ? 'warn'
              : method === 'info'
                ? 'info'
                : 'log',
      };
      this.logs.push(logEntry);

      this.snapshot(
        `console.${method}(${argsEvaluated.join(', ')})`,
        'execution',
        'CONSOLE_LOG',
        `Line ${line}: Outputting to console: "${argsEvaluated.join(' ')}"`,
        line
      );
      return undefined;
    }

    // Custom function call
    let calleeVal: unknown;
    let calleeName = 'anonymous';

    if (node.callee.type === 'Identifier') {
      calleeName = node.callee.name;
      const found = this.lookupVariable(calleeName);
      if (!found) {
        throw new Error(
          `ReferenceError: ${calleeName} is not defined (Line ${line})`
        );
      }
      calleeVal = found.variable.rawValue;
    } else {
      calleeVal = this.evaluateExpression(node.callee);
    }

    if (!calleeVal || !(calleeVal as SimulatedFunction).__isSimulatedFunction) {
      throw new Error(
        `TypeError: ${calleeName} is not a function (Line ${line})`
      );
    }

    const fn = calleeVal as SimulatedFunction;

    // Check call stack depth
    if (this.callStack.length >= MAX_STACK_DEPTH) {
      throw new Error(
        `RangeError: Maximum call stack size of ${MAX_STACK_DEPTH} frames exceeded.`
      );
    }

    // Evaluate arguments
    const argsEvaluated: unknown[] = node.arguments.map((arg: any) =>
      this.evaluateExpression(arg)
    );
    const argsFormatted = argsEvaluated
      .map((val) => formatValue(val))
      .join(', ');

    // 1. Create new Function Execution Context (FEC)
    const fecId = this.generateId('fec');
    const callingContextId = this.activeContextId;
    this.contextHierarchy.set(fecId, fn.parentContextId || callingContextId);

    const fecName = `${fn.name}(${argsFormatted})`;
    const fec: ExecutionContext = {
      id: fecId,
      type: 'function',
      name: fecName,
      phase: 'creation',
      variables: {
        this: {
          name: 'this',
          kind: 'this',
          value: 'window',
          rawValue: 'window',
          status: 'initialized',
          declarationLine: line ?? undefined,
        },
        arguments: {
          name: 'arguments',
          kind: 'arguments',
          value: `[${argsFormatted}]`,
          rawValue: argsEvaluated,
          status: 'initialized',
          declarationLine: line ?? undefined,
        },
      },
      callLine: line,
      depth: this.callStack.length + 1,
      thisBinding: 'window',
      scopeName: `Local (${fn.name})`,
    };
    this.contextsMap.set(fecId, fec);

    // Deactivate previous top frame
    if (this.callStack.length > 0) {
      this.callStack[this.callStack.length - 1].isActive = false;
    }

    // Push new frame to call stack
    const fecFrame: ContextCallStackFrame = {
      id: `frame-${fecId}`,
      contextId: fecId,
      name: fecName,
      type: 'function',
      phase: 'creation',
      line,
      depth: this.callStack.length + 1,
      isActive: true,
      argsFormatted,
    };
    this.callStack.push(fecFrame);

    this.activeContextId = fecId;

    this.snapshot(
      `Call Stack Push: ${fecName}`,
      'execution',
      'FEC_CREATE',
      `Line ${line}: Function '${fn.name}' invoked with argument(s) [${argsFormatted}]. A new Function Execution Context is created and pushed to the Call Stack.`,
      line
    );

    // 2. FEC Phase 1: Memory Allocation
    // Allocate parameters
    fn.params.forEach((paramName, index) => {
      const argVal = argsEvaluated[index];
      const formattedArg = formatValue(argVal);
      fec.variables[paramName] = {
        name: paramName,
        kind: 'param',
        value: formattedArg,
        rawValue: argVal,
        status: 'initialized',
        declarationLine: fn.declarationLine ?? undefined,
      };

      this.snapshot(
        `FEC Memory: param ${paramName} = ${formattedArg}`,
        'memory',
        'MEMORY_ALLOCATE',
        `Parameter '${paramName}' is allocated in the Function Execution Context and bound to passed argument ${formattedArg}.`,
        fn.declarationLine,
        paramName,
        fecId
      );
    });

    // Scan function body for local declarations
    let bodyStatements: acorn.Node[] = [];
    if (fn.body.type === 'BlockStatement') {
      bodyStatements = (fn.body as any).body;
    } else {
      // Arrow function expression body e.g. `x => x * 2`
      bodyStatements = [
        {
          type: 'ReturnStatement',
          argument: fn.body,
          loc: fn.body.loc,
        } as any,
      ];
    }

    this.runMemoryAllocationPhase(bodyStatements, fec);

    // Transition FEC to Phase 2: Code Execution
    fec.phase = 'execution';
    fecFrame.phase = 'execution';

    this.snapshot(
      `FEC Phase 1 Complete → Executing ${fn.name}()`,
      'execution',
      'MEMORY_COMPLETE',
      `Memory allocation complete for '${fn.name}()'. Beginning line-by-line execution inside the function body.`,
      bodyStatements.length > 0
        ? ((bodyStatements[0] as any).loc?.start.line ?? line)
        : line
    );

    // 3. FEC Phase 2: Execute function body statements
    let functionReturnVal: unknown = undefined;
    for (const stmt of bodyStatements) {
      const res = this.executeStatement(stmt);
      if (res.isReturn) {
        functionReturnVal = res.returnValue;
        break;
      }
    }

    // 4. FEC Completes: Pop from Call Stack
    fec.phase = 'completed';
    const poppedFrame = this.callStack.pop();

    // Restore caller as active context
    this.activeContextId = callingContextId;
    if (this.callStack.length > 0) {
      this.callStack[this.callStack.length - 1].isActive = true;
    }

    const returnFormatted = formatValue(functionReturnVal);
    this.snapshot(
      `Call Stack Pop: ${poppedFrame?.name || fn.name}`,
      'execution',
      'FEC_POP',
      `Function '${fn.name}' has finished execution with return value ${returnFormatted}. Its Function Execution Context is popped off the Call Stack, and control returns to the caller.`,
      line
    );

    return functionReturnVal;
  }
}

export function simulateExecutionContext(
  code: string
): ContextSimulationResult {
  const interpreter = new ContextInterpreter();
  return interpreter.run(code);
}
