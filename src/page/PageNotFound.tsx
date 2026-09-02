import { Link } from 'react-router';
import SEO from '../seo/SEO';
import { Home, Play } from 'lucide-react';

function PageNotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--bg-app)] text-[var(--text-primary)] p-4">
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be found."
        noIndex={true}
        noFollow={true}
      />
      <div className="w-full max-w-md rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-card overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-surface-muted)] border-b border-[var(--border-default)] text-xs select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="ml-2 font-mono text-[var(--text-secondary)] text-[11px]">
              runtime-error • 404.ts
            </span>
          </div>
          <span className="text-[10px] font-mono text-red-500 font-semibold uppercase">
            Error 404
          </span>
        </div>

        {/* Terminal Error Content */}
        <div className="p-6 font-mono text-xs space-y-4">
          <div className="space-y-1">
            <h1 className="text-red-500 font-bold">
              NotFoundException: Page or resource does not exist.
            </h1>
            <div className="text-[var(--text-muted)] text-[11px]">
              at Router.resolveRoute (src/AppRouter.tsx:41:11)
            </div>
            <div className="text-[var(--text-muted)] text-[11px]">
              at ClientSession.navigate (window.location.pathname)
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[var(--bg-app)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
            <p>
              The playground or route you are looking for might have been
              deleted, renamed, or moved.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-xs font-semibold shadow-xs transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/js"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] text-xs font-medium transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>New Playground</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
