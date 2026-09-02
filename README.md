# RunJS ⚡

> **The Fast, In-Browser JavaScript, TypeScript & React Playground + Learning Platform**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-runjs.in-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white)](https://runjs.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📖 Overview

**RunJS** ([runjs.in](https://runjs.in)) is a modern, privacy-first, client-side web development utility, playground, and learning environment.

Unlike traditional online sandboxes that send your source code to remote servers for compilation and execution, **RunJS runs 100% locally in your browser**. Using in-browser WebAssembly transpilation and isolated sandboxed runtimes, RunJS ensures instant execution feedback, offline readiness, and complete privacy.

---

## ✨ Key Features

### 🚀 Interactive Playgrounds

- **JavaScript Scratchpad (`/js`)**: Instant execution for modern JavaScript (ES2024+), equipped with Monaco Editor, AST-based infinite loop protection, and interactive Luna console object inspection.
- **TypeScript Studio (`/ts`)**: Client-side TypeScript compilation powered by WebAssembly esbuild (`esbuild-wasm`) with live compiler diagnostics and zero server dependencies.
- **React + Vite Sandbox (`/react`)**: In-browser IDE powered by Sandpack with a multi-file explorer, live component bundling, responsive preview, and xterm terminal.
- **HTML / CSS / JS Preview Studio (`/html`)**: Real-time frontend web studio with live reload, console drawer, and responsive viewport toggles.

### 🧠 Learning & Problem Solving

- **Coding Challenges & DSA (`/problems`)**: LeetCode-style algorithm and JavaScript problems with real-time test runner, submission verification, hints, and time/space complexity analyses.
- **Interactive JavaScript Curriculum (`/learn`)**: 175+ comprehensive lessons spanning language fundamentals, objects, closures, prototypes, asynchronous programming, DOM APIs, and modern web standards.
- **JavaScript Technical Interview Q&A (`/interview`)**: Curated questions and in-depth solutions covering closures, event loop, promises, prototypes, and system design patterns.

### 🔒 Privacy & Offline Architecture

- **Zero Remote Execution**: Code is never sent to, compiled on, or saved on backend execution servers.
- **Offline Persistence**: Workspaces, snippets, and problem submission histories are saved locally on your device via browser IndexedDB and LocalStorage.
- **Recycle Bin (`/bin`)**: Safe deletion and permanent purge controls for saved snippets.
- **Export Capabilities**: Download snippets or full multi-file React projects as local files or ZIP archives at any time.

---

## 📜 Legal & Policies

RunJS is designed with complete transparency and user data sovereignty:

- **[Privacy Policy](https://runjs.in/privacy)**: Details our client-side execution model, zero-tracking policy, and local data persistence mechanisms.
- **[Terms and Conditions](https://runjs.in/terms)**: Outlines terms of service, acceptable use guidelines, open-source licensing, and our guarantee that **you own 100% of your code**.

---

## 🛠️ Tech Stack

- **Framework & Routing**: [React 19](https://react.dev/), [React Router 8](https://reactrouter.com/)
- **Build Tool**: [Vite 7](https://vitejs.dev/) with `@tailwindcss/vite`
- **Code Editors & Terminal**: [Monaco Editor](https://microsoft.github.io/monaco-editor/), [@xterm/xterm](https://xtermjs.org/)
- **In-Browser Compilers**: [esbuild-wasm](https://esbuild.github.io/), [@codesandbox/sandpack-react](https://sandpack.codesandbox.io/)
- **Console & Inspector**: [luna-console](https://luna.liriliri.io/), [luna-object-viewer](https://luna.liriliri.io/)
- **Storage & Utilities**: [idb](https://github.com/jakearchibald/idb), [lucide-react](https://lucide.dev/), [jszip](https://stuk.github.io/jszip/)
- **Hosting**: Cloudflare Pages (`wrangler`)

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `>= 20.19.0`
- **pnpm**: `>= 12.0.0` (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/rigial/Runjs.git

# Navigate into the project folder
cd Runjs

# Install dependencies
pnpm install
```

### Development

```bash
# Start local development server with HMR
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Verification

```bash
# Generate sitemap, compile TypeScript, build Vite bundle, and prerender routes
pnpm run build

# Run automated SEO, metadata, and sitemap verification
pnpm run verify:seo

# Run Prettier and ESLint code checks
pnpm run check

# Preview production build locally
pnpm run preview
```

---

## 📂 Project Structure

```text
Runjs/
├── public/                  # Static assets (favicons, manifests, sitemap.xml, robots.txt)
├── scripts/
│   ├── generate-sitemap.js  # Dynamic XML sitemap generator
│   ├── prerender-routes.js  # Static HTML prerenderer with route-specific SEO tags
│   └── verify-seo.js        # Automated SEO & sitemap test suite
├── src/
│   ├── components/          # Reusable UI components (Navbar, Footer, Modals, Editor)
│   ├── context/             # Theme & global state contexts
│   ├── db/                  # IndexedDB schema and operations
│   ├── hook/                # Custom React hooks (useTheme, useMediaQuery, etc.)
│   ├── ide/                 # Multi-file React playground & Sandpack integration
│   ├── learn/               # Interactive JavaScript curriculum & lesson registry
│   ├── page/                # Top-level page views (Playgrounds, Problems, Privacy, Terms)
│   ├── problem-engine/      # Coding challenge test evaluator & problem definitions
│   ├── seo/                 # Centralized SEO tags, structured data, and useSEO hook
│   ├── utils/               # Master data, AST loop protection, themes, and helpers
│   ├── AppRouter.tsx        # React Router routes and code-splitting configuration
│   └── main.tsx             # Application entry point
├── package.json
└── vite.config.ts
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 👤 Author & Credits

Created and maintained by **M R Kishore Kumar**:

- **GitHub**: [@mrkishorekumar](https://github.com/mrkishorekumar)
- **LinkedIn**: [RunJS](https://www.linkedin.com/company/runjs/)
- **Website**: [runjs.in](https://runjs.in)
