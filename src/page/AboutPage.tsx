import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { packageList } from '../utils/masterData';
import { ExternalLink, Sparkles, Package, Calendar } from 'lucide-react';

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

function YoutubeIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="pb-6 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind the Project</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            About RunJS
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
            The story, motivation, and open-source foundation behind the RunJS
            developer playground.
          </p>
        </div>

        {/* Creator & Social Links Card */}
        <section className="my-8 p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold text-lg shadow-sm">
                MK
              </div>
              <div>
                <h2 className="text-base font-bold text-[var(--text-primary)]">
                  M R Kishore Kumar
                </h2>
                <p className="text-xs text-[var(--text-secondary)]">
                  Creator & Maintainer of RunJS
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/mrkishorekumar"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/mrkishorekumar/"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-[#0a66c2] transition-colors"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://youtube.com/mrkishorekumar?sub_confirmation=1"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-red-500 transition-colors"
              >
                <YoutubeIcon />
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </Link>
            </div>
          </div>
        </section>

        {/* Story Behind RunJS */}
        <section className="my-8 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
            <Calendar className="w-4 h-4 text-amber-500" />
            <h2>The Story Behind RunJS</h2>
          </div>

          <div className="p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              RunJS began its journey in 2023, inspired by platforms like
              CodePen where developers could compile and experiment with HTML,
              CSS, and JavaScript live in the browser. What started as an
              experimental prototype named <em>WebDJ</em> evolved as the need
              grew for a lightweight, standalone JavaScript and TypeScript
              execution playground.
            </p>
            <p>
              In October 2024, the platform was re-architected to execute code
              directly in the client browser with zero server dependencies,
              capturing console logs with high-fidelity output viewers and
              safeguarding execution with infinite-loop AST protection.
            </p>
            <p>
              By 2025, RunJS was redesigned from the ground up to follow modern
              developer-tool design standards, featuring VS Code Monaco
              integration, esbuild WebAssembly compilation, offline IndexedDB
              storage, and Sandpack React support.
            </p>
          </div>
        </section>

        {/* Dependencies & Technologies */}
        <section className="my-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
              <Package className="w-4 h-4 text-amber-500" />
              <h2>Open Source Dependencies</h2>
            </div>
            <span className="text-xs text-[var(--text-muted)]">
              {packageList.length} core packages
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[var(--border-default)] text-left text-xs">
                <thead className="bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Package
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Purpose & Usage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-primary)]">
                  {packageList.map((val, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[var(--bg-surface-hover)] transition-colors"
                    >
                      <td className="px-4 py-3 font-mono font-medium">
                        <a
                          href={val.packageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                        >
                          <span>{val.packageName}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">
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
