import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { packageList } from '../utils/masterData';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema, getCanonicalUrl } from '../seo/seoConfig';
import {
  ExternalLink,
  Sparkles,
  Package,
  Calendar,
  Cpu,
  ServerOff,
  Zap,
  ShieldCheck,
  Eye,
  Layers,
  HardDrive,
  Code2,
  Play,
  Terminal,
  ArrowRight,
  ArrowDown,
  Lock,
  CheckCircle2,
} from 'lucide-react';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150">
      <SEO
        title="About RunJS - Open Source Architecture & In-Browser IDE Story"
        description="Learn how RunJS works, its 100% in-browser client architecture, WebAssembly compilation, AST loop protection, and open-source foundation."
        canonical="/about"
        keywords={[
          'About RunJS',
          'RunJS architecture',
          'how RunJS works',
          'M R Kishore Kumar',
          'JavaScript playground story',
          'browser IDE open source',
          'WebDJ',
          'client-side compiler',
          'esbuild wasm',
        ]}
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'About', item: '/about' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About RunJS',
            url: getCanonicalUrl('/about'),
            description:
              'Learn how RunJS works, its 100% in-browser client architecture, WebAssembly compilation, and open-source foundation.',
            mainEntity: {
              '@type': 'Person',
              name: 'M R Kishore Kumar',
              jobTitle: 'Creator & Maintainer',
              url: 'https://github.com/mrkishorekumar',
              sameAs: [
                'https://github.com/mrkishorekumar',
                'https://www.linkedin.com/in/mrkishorekumar/',
                'https://youtube.com/mrkishorekumar',
              ],
            },
          },
        ]}
      />
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* Page Title */}
        <div className="pb-8 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind the Project</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            About RunJS
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed max-w-2xl">
            The story, client-side architecture, and open-source foundation
            behind the RunJS in-browser developer playground.
          </p>
        </div>

        {/* Creator & Social Links Card */}
        <section className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold text-xl shadow-sm shrink-0">
                MK
              </div>
              <div>
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  M R Kishore Kumar
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Creator &amp; Maintainer of RunJS
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/mrkishorekumar"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/company/runjs"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-[#0a66c2] transition-colors"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </Link>
            </div>
          </div>
        </section>

        {/* How RunJS Works & Architecture */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>How It Works &amp; Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Under the Hood: 100% In-Browser Engine
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              RunJS is engineered from the ground up to execute entirely inside
              your browser. Here is how your code compiles, executes, and
              outputs with zero remote servers.
            </p>
          </div>

          {/* Simple Words Explanation Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                <ServerOff className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  Your Browser is the Server &amp; Execution Engine
                </h3>
                <p>
                  Most online coding platforms send your code over the internet
                  to remote cloud servers. A remote virtual machine compiles
                  your code and sends output back to your screen. This creates
                  network latency, requires paid server infrastructure, and
                  exposes your private code to third-party computers.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)] font-semibold">
                    RunJS works completely differently:
                  </strong>{' '}
                  It is engineered as a 100% client-side web application. Every
                  step — from Monaco syntax parsing and WebAssembly compilation
                  to sandboxed runtime execution and console visualization —
                  runs entirely on your device inside your web browser. There
                  are no backend execution servers, zero network latency, and
                  complete privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Code Execution Pipeline */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-6">
            <div>
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                Execution Lifecycle
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-1">
                The Journey of Your Code in RunJS
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                From the moment you type a character to the final console
                output, here is how the client-side pipeline works step-by-step:
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Step 1 */}
              <div className="p-5 sm:p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/15 text-amber-500 font-bold text-sm shrink-0 border border-amber-500/20">
                    01
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                        Editor Input &amp; Syntax Analysis
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)]">
                        Monaco Editor + Emmet
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                      You author code in Monaco Editor (the editor core behind
                      VS Code) with syntax highlighting, Emmet abbreviations,
                      intelligent autocompletions, and instant document
                      formatting.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)] shrink-0">
                  <Code2 className="w-5 h-5 text-amber-500" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 sm:p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 font-bold text-sm shrink-0 border border-emerald-500/20">
                    02
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                        AST Parsing &amp; Loop Guard Safety
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)]">
                        Acorn AST Parser
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                      Acorn parses your code into an Abstract Syntax Tree (AST).
                      RunJS automatically injects iteration guards into all
                      loops (for, while, do-while), protecting your browser tab
                      from freezing on accidental infinite loops.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 sm:p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/15 text-blue-500 font-bold text-sm shrink-0 border border-blue-500/20">
                    03
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                        WebAssembly Transpilation
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)]">
                        esbuild-wasm (&lt;10ms)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                      TypeScript code and modern features are transpiled
                      directly into vanilla JavaScript in under 10 milliseconds
                      using a WebAssembly build of esbuild running in-browser —
                      without remote build queues.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)] shrink-0">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 sm:p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-500/15 text-purple-500 font-bold text-sm shrink-0 border border-purple-500/20">
                    04
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                        Isolated Sandbox Execution
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)]">
                        Sandboxed Iframe &amp; Workers
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                      Your code runs inside an isolated sandbox, executing
                      natively on your machine&apos;s browser JavaScript engine
                      (V8 / SpiderMonkey) at maximum raw performance with zero
                      network latency.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)] shrink-0">
                  <Play className="w-5 h-5 text-purple-500" />
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-5 sm:p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/15 text-amber-500 font-bold text-sm shrink-0 border border-amber-500/20">
                    05
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                        Interactive Console &amp; Output Inspection
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)]">
                        Luna Console &amp; Object Viewer
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                      Standard output streams (console.log, warn, error, table)
                      are captured and formatted into interactive, expandable
                      object trees with full theme matching and memory
                      profiling.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)] shrink-0">
                  <Terminal className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Visual Architecture Schematic Box */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                  System Architecture
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-0.5">
                  Client-Side Architecture Diagram
                </h3>
              </div>
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Zero Server Overhead
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface-muted)] font-mono text-xs">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                {/* Input Layer */}
                <div className="w-full md:w-1/3 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-1.5">
                  <div className="text-[11px] text-amber-500 font-bold uppercase tracking-wider">
                    Stage 1: Input Layer
                  </div>
                  <div className="font-semibold text-sm text-[var(--text-primary)]">
                    Code Editor &amp; VFS
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    JS • TS • HTML • React
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center gap-1 text-[var(--text-muted)] shrink-0 px-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className="md:hidden text-[var(--text-muted)]">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* In-Browser Processing */}
                <div className="w-full md:w-1/2 p-4 rounded-xl border border-amber-500/30 bg-[var(--bg-surface)] shadow-xs space-y-2.5">
                  <div className="text-[11px] text-amber-500 font-bold uppercase tracking-wider">
                    Stage 2: In-Browser Processing Core
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)] text-xs">
                      <div className="font-semibold text-[var(--text-primary)]">
                        Acorn AST
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">
                        Loop Protection
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)] text-xs">
                      <div className="font-semibold text-[var(--text-primary)]">
                        esbuild Wasm
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">
                        TypeScript Compiler
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)] text-xs">
                      <div className="font-semibold text-[var(--text-primary)]">
                        Isolated Sandbox
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">
                        Iframe &amp; Workers
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-surface-muted)] border border-[var(--border-subtle)] text-xs">
                      <div className="font-semibold text-[var(--text-primary)]">
                        Simulators
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">
                        Event Loop &amp; Context
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center gap-1 text-[var(--text-muted)] shrink-0 px-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className="md:hidden text-[var(--text-muted)]">
                  <ArrowDown className="w-5 h-5" />
                </div>

                {/* Output & Persistence */}
                <div className="w-full md:w-1/3 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-1.5">
                  <div className="text-[11px] text-amber-500 font-bold uppercase tracking-wider">
                    Stage 3: Output &amp; Storage
                  </div>
                  <div className="font-semibold text-sm text-[var(--text-primary)]">
                    Local Device
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    Luna Console • IndexedDB
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Core Architectural Pillars */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                Core Foundation
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-1">
                6 Architectural Pillars
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Pillar 1 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                    <ServerOff className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      1. 100% In-Browser Execution
                    </h4>
                    <span className="text-xs text-amber-500 font-medium">
                      Zero Backend Servers
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Code execution runs entirely on your local machine using your
                  browser&apos;s native JavaScript engine. No external
                  containers, no queuing for server resources, and zero
                  execution costs.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      2. WebAssembly Native Compiler
                    </h4>
                    <span className="text-xs text-blue-500 font-medium">
                      esbuild-wasm in Milliseconds
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  TypeScript is compiled directly in the browser via a
                  WebAssembly build of esbuild. Compilation finishes in under
                  10ms with full type stripping and ESNext compatibility.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      3. AST Infinite Loop Protection
                    </h4>
                    <span className="text-xs text-emerald-500 font-medium">
                      Acorn Syntax Tree Instrumentation
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Before code runs, Acorn constructs an Abstract Syntax Tree
                  (AST). RunJS automatically injects iteration guards into all
                  loops, protecting your browser from locking up on accidental
                  infinite loops.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      4. Interactive Engine Simulators
                    </h4>
                    <span className="text-xs text-purple-500 font-medium">
                      Event Loop &amp; Execution Context
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Dedicated educational engines parse code and walk step-by-step
                  through Call Stacks, Microtask Queues (Promises), Task Queues
                  (Timers), Hoisting, and Lexical Scopes in real time.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      5. Full React IDE &amp; VFS
                    </h4>
                    <span className="text-xs text-cyan-500 font-medium">
                      Sandpack Bundler &amp; xterm.js Shell
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  An in-browser Virtual File System (VFS), multi-tab editor,
                  in-memory bundler, and real-time interactive terminal shell
                  let you build full React component applications in your
                  browser tab.
                </p>
              </div>

              {/* Pillar 6 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      6. Local-First &amp; Offline Storage
                    </h4>
                    <span className="text-xs text-amber-500 font-medium">
                      100% Private IndexedDB Persistence
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Your playgrounds, code drafts, and solved DSA problem history
                  remain solely on your machine using IndexedDB (`idb`). No
                  passwords or cloud syncing needed — your code belongs to you.
                </p>
              </div>
            </div>
          </div>

          {/* Why In-Browser Architecture Matters (2x2 spacious grid) */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                Key Advantages
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-1">
                Why In-Browser Architecture Matters
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Advantage 1 */}
              <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    Instant Execution Speed
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Zero network round-trips. Code compiles and runs immediately
                  on your computer&apos;s CPU in single-digit milliseconds
                  without waiting in remote server queues.
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    100% Privacy by Design
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Your code, sensitive snippets, and interview challenge
                  solutions never leave your device. No cloud storage, no server
                  tracking, and no third-party inspection.
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    Offline-First Resilience
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  As an offline-capable Progressive Web App (PWA), RunJS works
                  anytime without an internet connection. Continue coding,
                  testing, and learning anywhere.
                </p>
              </div>

              {/* Advantage 4 */}
              <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-3 hover:border-[var(--border-hover)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    Free Forever &amp; Open Source
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Zero server infrastructure costs allows RunJS to remain
                  completely free and open-source under the MIT license, with no
                  subscriptions, ads, or artificial quotas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Behind RunJS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
            <Calendar className="w-4 h-4 text-amber-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              The Story Behind RunJS
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              RunJS began its journey in 2023, inspired by platforms like
              CodePen and JSFiddle where developers could prototype and
              experiment with HTML, CSS, and JavaScript live in the browser.
              What started as an experimental prototype named <em>WebDJ</em>{' '}
              evolved as the need grew for a lightweight, instant JavaScript and
              TypeScript scratchpad free of heavy dev servers or cloud backends.
            </p>
            <p>
              In 2024, the platform was re-architected to execute code directly
              in the client browser with zero server dependencies, capturing
              console logs with high-fidelity Luna output inspectors and
              safeguarding execution with AST-based infinite loop protection.
            </p>
            <p>
              In 2025, RunJS was redesigned from the ground up to adhere to
              modern developer-tool standards, integrating Monaco Editor (VS
              Code core), esbuild WebAssembly compilation, offline IndexedDB
              storage, and Sandpack React container support.
            </p>
            <p>
              In 2026, RunJS expanded beyond playgrounds into a comprehensive{' '}
              <strong className="text-[var(--text-primary)] font-semibold">
                JavaScript Problem Solving &amp; Interview Preparation Platform
              </strong>
              . Featuring a LeetCode-style problem browser, custom test runner,
              real-time submission verification engine, progressive hints, and
              deep complexity analyses — RunJS empowers developers to master
              JavaScript fundamentals, closures, async patterns, and algorithms
              entirely within their browser.
            </p>
          </div>
        </section>

        {/* Dependencies & Technologies */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
              <Package className="w-4 h-4 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Open Source Dependencies
              </h2>
            </div>
            <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)]">
              {packageList.length} core packages
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
            {/* Mobile View: Compact, readable cards eliminating excessive vertical empty space */}
            <div className="sm:hidden divide-y divide-[var(--border-default)]">
              {packageList.map((val, index) => (
                <div
                  key={index}
                  className="p-4 space-y-2 hover:bg-[var(--bg-surface-hover)] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={val.packageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 font-mono text-xs font-semibold break-all"
                    >
                      <span>{val.packageName}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                    </a>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[var(--bg-surface-muted)] border border-[var(--border-default)] text-[var(--text-secondary)] shrink-0">
                      {val.category}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {val.packageDescription}
                  </p>
                </div>
              ))}
            </div>

            {/* Tablet & Desktop View: Structured Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full divide-y divide-[var(--border-default)] text-left text-xs">
                <thead className="bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 w-52">
                      Package
                    </th>
                    <th scope="col" className="px-5 py-3.5 w-40">
                      Category
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      Purpose &amp; Usage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-default)] text-[var(--text-primary)]">
                  {packageList.map((val, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[var(--bg-surface-hover)] transition-colors"
                    >
                      <td className="px-5 py-3.5 font-mono font-medium whitespace-nowrap align-top">
                        <a
                          href={val.packageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>{val.packageName}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap align-top">
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--bg-surface-muted)] border border-[var(--border-default)] text-[var(--text-secondary)]">
                          {val.category}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-[var(--text-secondary)] leading-relaxed align-top">
                        {val.packageDescription}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
