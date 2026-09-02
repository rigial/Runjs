import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeIdeDemo from '../components/HomeIdeDemo';
import SEO from '../seo/SEO';
import { getWebApplicationSchema, getWebSiteSchema } from '../seo/seoConfig';
import {
  Play,
  Zap,
  ShieldCheck,
  Sparkles,
  Database,
  Layers,
  BookOpen,
  Cpu,
  GraduationCap,
} from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150">
      <SEO
        title="RunJS - In-Browser JavaScript, TypeScript & React Playground"
        description="Run, practice, and master JavaScript, TypeScript, and React directly in your browser. Zero setup, Monaco editor, esbuild WebAssembly compilation, and interactive coding challenges."
        canonical="/"
        keywords={[
          'JavaScript playground',
          'online JS compiler',
          'TypeScript online',
          'React playground',
          'coding challenges',
          'esbuild wasm',
          'web IDE',
        ]}
        structuredData={[getWebApplicationSchema(), getWebSiteSchema()]}
      />
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Top Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RunJS 2.0 • Modern In-Browser Developer Playground</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            Run, Practice & Master{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              JavaScript
            </span>{' '}
            in Your Browser
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            A fast, lightweight, and professional developer playground with zero
            setup. Write ES2024+, compile TypeScript with esbuild, build React
            components, and prepare for technical coding interviews.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-sm font-semibold shadow-sm transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Learn JavaScript 0 → Hero</span>
            </Link>

            <Link
              to="/problems"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] text-sm font-medium transition-all duration-150"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Explore Coding Challenges</span>
            </Link>

            <Link
              to="/js"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] text-sm font-medium transition-all duration-150"
            >
              <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Open Playground</span>
            </Link>
          </div>
        </section>

        {/* Language & Problem Cards Quick Links */}
        <section className="mt-14 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full text-left">
            {/* Learn JS Card */}
            <Link
              to="/learn"
              className="group p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 hover:border-amber-500/60 hover:from-amber-500/10 hover:to-yellow-500/10 transition-all duration-150 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 border border-amber-500/25 font-bold text-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    New
                  </span>
                </div>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                  Learn JavaScript
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Go from zero to hero with interactive lessons, runnable
                  examples, quizzes & exercises.
                </p>
              </div>
            </Link>

            {/* Coding Problems Card */}
            <Link
              to="/problems"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-amber-500/50 hover:bg-[var(--bg-surface-hover)] transition-all duration-150 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-sm">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    Interactive
                  </span>
                </div>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                  Coding Challenges
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  LeetCode-style JS challenges with test runner, progressive
                  hints, and submission history.
                </p>
              </div>
            </Link>

            {/* JavaScript Card */}
            <Link
              to="/js"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-amber-500/50 hover:bg-[var(--bg-surface-hover)] transition-all duration-150 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-sm">
                    JS
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    Instant
                  </span>
                </div>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                  JavaScript Sandbox
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Monaco IDE with infinite loop guard, interactive Luna console,
                  and custom font controls.
                </p>
              </div>
            </Link>

            {/* TypeScript Card */}
            <Link
              to="/ts"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-blue-500/50 hover:bg-[var(--bg-surface-hover)] transition-all duration-150 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 font-bold text-sm">
                    TS
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400">
                    esbuild
                  </span>
                </div>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">
                  TypeScript Sandbox
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Zero-lag WebAssembly esbuild compilation directly inside your
                  browser tab.
                </p>
              </div>
            </Link>

            {/* React Card */}
            <Link
              to="/react"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-cyan-500/50 hover:bg-[var(--bg-surface-hover)] transition-all duration-150 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 font-bold text-base">
                    ⚛️
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                    Sandpack
                  </span>
                </div>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-cyan-500 transition-colors">
                  React Sandpack
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Multi-file explorer, live component previews, and full
                  in-browser React bundler support.
                </p>
              </div>
            </Link>

            {/* HTML/CSS/JS Card */}
            <Link
              to="/html"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-orange-500/50 hover:bg-[var(--bg-surface-hover)] transition-all duration-150 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20 font-bold text-sm">
                    &lt;/&gt;
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400">
                    CodePen
                  </span>
                </div>
                <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-orange-500 transition-colors">
                  HTML/CSS/JS
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  CodePen-style playground with 3-pane Monaco editors, sandboxed
                  live preview, and console.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* IDE UI Preview Animated Demo */}
        <section className="mt-16 sm:mt-20 max-w-6xl mx-auto w-full">
          <HomeIdeDemo />
        </section>

        {/* Feature Grid */}
        <section className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Engineered for Speed & Developer Focus
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              Everything you need to write, test, format, and share code without
              heavy IDE overhead or server latency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Instant In-Browser Execution
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                Code runs locally in the browser sandbox. No backend servers, no
                spin-up cold starts, instant feedback.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Wasm-Powered TypeScript
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                Uses esbuild compiled to WebAssembly for sub-millisecond
                TypeScript transformation.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-3">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Persistent IndexedDB Storage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                Organize projects with tags, star your favorites, and manage
                workspaces safely offline.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Infinite Loop Protection
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                AST instrumentation prevents accidental `while(true)` browser
                tab freezes and crashes.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Interview Prep Questions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                Curated JavaScript and TypeScript interview questions with
                syntax-highlighted explanations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Dark & Light Theme System
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                Flawless dark and light themes with automatic OS preference
                detection and seamless IDE synchronization.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
