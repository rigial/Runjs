import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.log('dist/index.html not found, skipping prerender.');
  process.exit(0);
}

const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
const baseUrl = process.env.VITE_SITE_URL || 'https://runjs.in';

const routes = [
  {
    path: '/learn',
    title: 'Learn JavaScript - 175+ Interactive Lessons | RunJS',
    description:
      'Master modern JavaScript from fundamentals to advanced concepts with 175+ interactive lessons, coding exercises, and instant browser execution.',
  },
  {
    path: '/problems',
    title: 'JavaScript Coding Challenges & Algorithm Practice | RunJS',
    description:
      'Practice JavaScript algorithms, data structures, closures, promises, and polyfills with instant in-browser test execution, hints, and complexity analysis.',
  },
  {
    path: '/js',
    title: 'Online JavaScript Compiler & Scratchpad (ES2024+) | RunJS',
    description:
      'Interactive in-browser JavaScript sandbox with Monaco editor, infinite loop protection, custom font controls, and interactive Luna console.',
  },
  {
    path: '/ts',
    title: 'Online TypeScript Playground with esbuild Wasm | RunJS',
    description:
      'Fast, client-side TypeScript compiler powered by esbuild WebAssembly. Type check, compile, and execute TypeScript directly in your browser.',
  },
  {
    path: '/react',
    title: 'Online React & Vite Playground (Sandpack) | RunJS',
    description:
      'In-browser React development environment with multi-file explorer, Sandpack live bundler, interactive preview, and xterm terminal.',
  },
  {
    path: '/html',
    title: 'Online HTML & CSS Preview Studio | RunJS',
    description:
      'Interactive in-browser HTML, CSS, and JavaScript preview studio with live reload, console drawer, and responsive viewport controls.',
  },
  {
    path: '/interview',
    title: 'JavaScript Technical Interview Questions & Answers | RunJS',
    description:
      'Master JavaScript technical interviews with curated questions and detailed solutions covering closures, event loop, promises, prototypes, and async/await.',
  },
  {
    path: '/output-questions',
    title: 'JavaScript Output Questions — Predict the Output Quiz | RunJS',
    description:
      'Test your JavaScript knowledge with 100 output-based MCQ questions covering closures, hoisting, promises, async/await, prototypes, type coercion, and more.',
  },
  {
    path: '/about',
    title: 'About RunJS - Open Source In-Browser IDE Story | RunJS',
    description:
      'The story, motivation, and open-source foundation behind the RunJS developer playground and creator M R Kishore Kumar.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy - RunJS Developer Playground | RunJS',
    description:
      'Privacy Policy for RunJS. Understand how our client-side, zero-server-tracking architecture keeps your code and data private in your browser.',
  },
  {
    path: '/terms',
    title: 'Terms and Conditions - RunJS Developer Playground | RunJS',
    description:
      'Terms and Conditions for RunJS. Review user guidelines, code ownership guarantees, open-source licensing, and acceptable use policy.',
  },
];

// Extract problem challenges
const problemsFilePath = path.join(
  rootDir,
  'src/problem-engine/data/problems.ts'
);
if (fs.existsSync(problemsFilePath)) {
  const problemsContent = fs.readFileSync(problemsFilePath, 'utf-8');
  const problemRegex = /slug:\s*'([^']+)',\s*title:\s*'([^']+)'/g;
  let match;
  while ((match = problemRegex.exec(problemsContent)) !== null) {
    const slug = match[1];
    const title = match[2];
    routes.push({
      path: `/problems/${slug}`,
      title: `${title} - JavaScript Coding Challenge | RunJS`,
      description: `Solve "${title}" in JavaScript with instant in-browser test verification and hints on RunJS.`,
    });
  }
}

// Extract curriculum lessons
const curriculumFilePath = path.join(rootDir, 'src/learn/data/curriculum.ts');
if (fs.existsSync(curriculumFilePath)) {
  const curriculumContent = fs.readFileSync(curriculumFilePath, 'utf-8');
  const lessonGroupRegex = /lessonSlugs:\s*\[([\s\S]*?)\]/g;
  let groupMatch;
  while ((groupMatch = lessonGroupRegex.exec(curriculumContent)) !== null) {
    const itemRegex = /'([^']+)'/g;
    let itemMatch;
    while ((itemMatch = itemRegex.exec(groupMatch[1])) !== null) {
      const slug = itemMatch[1];
      const humanTitle = slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      routes.push({
        path: `/learn/${slug}`,
        title: `${humanTitle} - JavaScript Tutorial | RunJS`,
        description: `Learn ${humanTitle} in JavaScript with interactive explanations, examples, and coding exercises on RunJS.`,
      });
    }
  }
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;');
}

function prerenderRoute(route) {
  const canonicalUrl = `${baseUrl}${route.path}`;

  let html = templateHtml;
  // Replace <title>
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace canonical link
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description"[\s\S]*?content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(route.description)}">`
  );

  // Replace og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta property="og:description"[\s\S]*?content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta name="twitter:description"[\s\S]*?content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`
  );

  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
}

for (const route of routes) {
  prerenderRoute(route);
}

console.log(
  `Prerendered ${routes.length} route HTML files with static metadata in dist/.`
);
