export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  activeFile: string;
  openFiles: string[];
  files: Record<string, string>;
}

export const VITE_REACT_TEMPLATE: ProjectTemplate = {
  id: 'vite-react',
  name: 'React + Vite (JavaScript)',
  description:
    'Fast, lightweight React playground powered by Vite and ES Modules',
  icon: '⚛️',
  activeFile: '/src/App.jsx',
  openFiles: ['/src/App.jsx', '/src/App.css', '/package.json'],
  files: {
    '/package.json': JSON.stringify(
      {
        name: 'vite-react-app',
        private: true,
        version: '0.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'vite build',
          preview: 'vite preview',
        },
        dependencies: {
          react: '^19.0.0',
          'react-dom': '^19.0.0',
          'lucide-react': '^1.34.0',
          'canvas-confetti': '^1.9.4',
        },
        devDependencies: {
          '@vitejs/plugin-react': '^4.4.0',
          vite: '^6.0.0',
        },
      },
      null,
      2
    ),
    '/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RunJS React IDE</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
    '/vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`,
    '/src/main.jsx': `import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}`,
    '/src/App.jsx': `import React, { useState } from 'react';
import { Sparkles, Code2, Terminal, Layers, Plus, RotateCcw, PackageCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState(['App initialized in RunJS IDE']);

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    
    // Log message captured by the Luna console below!
    console.log('Counter increased to:', nextCount, { timestamp: new Date().toISOString() });
    setLogs((prev) => [\`Incremented count to \${nextCount}\`, ...prev.slice(0, 3)]);

    if (nextCount % 5 === 0) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleReset = () => {
    setCount(0);
    console.info('Counter reset');
    setLogs((prev) => ['Counter reset to 0', ...prev.slice(0, 3)]);
  };

  return (
    <div className="container">
      <header className="hero">
        <div className="badge">
          <Sparkles className="icon-sm text-amber" />
          <span>React + Vite Browser IDE</span>
        </div>
        <h1>
          Welcome to <span className="gradient-text">RunJS IDE</span>
        </h1>
        <p className="subtitle">
          Full browser-based React development with Live HMR, File Explorer, Terminal, and NPM package installs.
        </p>
      </header>

      <div className="card counter-card">
        <div className="count-display">
          <span className="count-label">Interactive Counter</span>
          <span className="count-value">{count}</span>
        </div>

        <div className="button-group">
          <button onClick={handleIncrement} className="btn btn-primary">
            <Plus className="icon-sm" />
            <span>Increment</span>
          </button>
          <button onClick={handleReset} className="btn btn-outline">
            <RotateCcw className="icon-sm" />
            <span>Reset</span>
          </button>
        </div>

        <div className="log-preview">
          <div className="log-title">
            <Terminal className="icon-xs" />
            <span>Recent Activity (Check Luna Console below):</span>
          </div>
          <ul>
            {logs.map((log, idx) => (
              <li key={idx}>❯ {log}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <Code2 className="icon-md text-amber" />
          <h3>Virtual File System</h3>
          <p>Create, rename, and organize folders & components directly on the left.</p>
        </div>
        <div className="feature-item">
          <PackageCheck className="icon-md text-cyan" />
          <h3>In-Browser NPM</h3>
          <p>Run <code>npm install &lt;pkg&gt;</code> in the terminal to add any package.</p>
        </div>
        <div className="feature-item">
          <Layers className="icon-md text-purple" />
          <h3>Vite Fast HMR</h3>
          <p>Edits in Monaco instantly update this preview in real time.</p>
        </div>
      </div>
    </div>
  );
}`,
    '/src/index.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  min-height: 100vh;
  padding: 1.5rem;
}`,
    '/src/App.css': `.container {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.25);
  color: #fbbf24;
  font-size: 0.75rem;
  font-weight: 600;
}

h1 {
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.025em;
}

.gradient-text {
  background: linear-gradient(135deg, #f59e0b 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 0.875rem;
  color: #94a3b8;
  max-width: 480px;
  line-height: 1.45;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.counter-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.count-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.count-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  font-weight: 600;
}

.count-value {
  font-size: 3.5rem;
  font-weight: 800;
  color: #38bdf8;
  line-height: 1;
}

.button-group {
  display: flex;
  gap: 0.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;
}

.btn-primary {
  background: #f59e0b;
  color: #0f172a;
}
.btn-primary:hover {
  background: #d97706;
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  border: 1px solid #475569;
  color: #cbd5e1;
}
.btn-outline:hover {
  background: #334155;
}

.log-preview {
  width: 100%;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-family: monospace;
  font-size: 0.75rem;
}

.log-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #94a3b8;
  margin-bottom: 0.4rem;
}

.log-preview ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #38bdf8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.feature-item {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.75rem;
  padding: 1rem;
}

.feature-item h3 {
  font-size: 0.85rem;
  margin: 0.5rem 0 0.25rem 0;
  color: #f8fafc;
}

.feature-item p {
  font-size: 0.75rem;
  color: #94a3b8;
  line-height: 1.35;
}

.feature-item code {
  background: #0f172a;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  color: #fbbf24;
}

.icon-xs { width: 14px; height: 14px; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 22px; height: 22px; }
.text-amber { color: #f59e0b; }
.text-cyan { color: #38bdf8; }
.text-purple { color: #c084fc; }`,
  },
};

export const VITE_REACT_TS_TEMPLATE: ProjectTemplate = {
  id: 'vite-react-ts',
  name: 'React + Vite (TypeScript)',
  description:
    'TypeScript-first React workspace with strong types and Vite bundling',
  icon: '🔷',
  activeFile: '/src/App.tsx',
  openFiles: ['/src/App.tsx', '/src/types.ts', '/package.json'],
  files: {
    '/package.json': JSON.stringify(
      {
        name: 'vite-react-ts-app',
        private: true,
        version: '0.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'tsc && vite build',
        },
        dependencies: {
          react: '^19.0.0',
          'react-dom': '^19.0.0',
          'lucide-react': '^1.34.0',
        },
        devDependencies: {
          '@types/react': '^19.0.0',
          '@types/react-dom': '^19.0.0',
          '@vitejs/plugin-react': '^4.4.0',
          typescript: '^5.7.0',
          vite: '^6.0.0',
        },
      },
      null,
      2
    ),
    '/tsconfig.json': JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          useDefineForClassFields: true,
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          skipLibCheck: true,
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: 'react-jsx',
          strict: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noFallthroughCasesInSwitch: true,
        },
        include: ['src'],
      },
      null,
      2
    ),
    '/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RunJS React TypeScript IDE</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
    '/src/types.ts': `export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}`,
    '/src/main.tsx': `import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}`,
    '/src/App.tsx': `import React, { useState } from 'react';
import { CheckCircle2, Circle, Plus, Trash2, ShieldCheck } from 'lucide-react';
import { TodoItem } from './types';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: '1',
      title: 'Build React IDE components',
      completed: true,
      priority: 'high',
      createdAt: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      title: 'Test NPM package manager in browser',
      completed: false,
      priority: 'medium',
      createdAt: new Date().toLocaleDateString(),
    },
  ]);
  const [input, setInput] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now().toString(),
      title: input.trim(),
      completed: false,
      priority: 'medium',
      createdAt: new Date().toLocaleDateString(),
    };

    setTodos([newTodo, ...todos]);
    setInput('');
    console.log('Added TypeScript Todo:', newTodo);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="ts-container">
      <header className="ts-header">
        <div className="badge-ts">
          <ShieldCheck className="icon-sm" />
          <span>TypeScript 5.7 • Strict Mode</span>
        </div>
        <h2>TypeScript Task Manager</h2>
        <p>Type-safe state and props with zero compile delay in RunJS.</p>
      </header>

      <form onSubmit={addTodo} className="ts-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="ts-input"
        />
        <button type="submit" className="ts-btn">
          <Plus className="icon-sm" />
          <span>Add</span>
        </button>
      </form>

      <div className="ts-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={\`ts-item \${todo.completed ? 'completed' : ''}\`}
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className="check-btn"
            >
              {todo.completed ? (
                <CheckCircle2 className="icon-sm text-emerald" />
              ) : (
                <Circle className="icon-sm text-muted" />
              )}
            </button>
            <span className="todo-text">{todo.title}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              <Trash2 className="icon-xs" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    '/src/index.css': `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0b1120;
  color: #f1f5f9;
  min-height: 100vh;
  padding: 1.5rem;
}`,
    '/src/App.css': `.ts-container {
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ts-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.badge-ts {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  font-size: 0.75rem;
  font-weight: 600;
}

.ts-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
}

.ts-header p {
  font-size: 0.8rem;
  color: #94a3b8;
}

.ts-form {
  display: flex;
  gap: 0.5rem;
}

.ts-input {
  flex: 1;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  padding: 0.6rem 0.85rem;
  color: #f8fafc;
  font-size: 0.85rem;
  outline: none;
}
.ts-input:focus {
  border-color: #3b82f6;
}

.ts-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}
.ts-btn:hover {
  background: #2563eb;
}

.ts-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ts-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  padding: 0.65rem 0.85rem;
  transition: all 150ms ease;
}

.ts-item.completed .todo-text {
  text-decoration: line-through;
  color: #64748b;
}

.todo-text {
  flex: 1;
  font-size: 0.85rem;
}

.check-btn, .delete-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #94a3b8;
}

.delete-btn:hover {
  color: #ef4444;
}

.icon-xs { width: 14px; height: 14px; }
.icon-sm { width: 16px; height: 16px; }
.text-emerald { color: #10b981; }
.text-muted { color: #64748b; }`,
  },
};

export const TEMPLATES: ProjectTemplate[] = [
  VITE_REACT_TEMPLATE,
  VITE_REACT_TS_TEMPLATE,
];
