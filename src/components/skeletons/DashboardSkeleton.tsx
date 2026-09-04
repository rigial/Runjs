import { memo } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Search, Plus, Star, FolderCode } from 'lucide-react';

function DashboardSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading dashboard..."
      className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150"
    >
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-default)]">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Workspace & Playgrounds
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Manage your local projects, code snippets, and interview
              solutions.
            </p>
          </div>

          {/* Quick Stats Chips Skeleton */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs">
              <FolderCode className="w-3.5 h-3.5 text-amber-500/70" />
              <span className="text-[var(--text-secondary)]">Total:</span>
              <span className="w-6 h-3.5 rounded bg-[var(--border-default)] animate-pulse inline-block" />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs">
              <Star className="w-3.5 h-3.5 text-amber-500/70 fill-amber-500/70" />
              <span className="text-[var(--text-secondary)]">Starred:</span>
              <span className="w-6 h-3.5 rounded bg-[var(--border-default)] animate-pulse inline-block" />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500/70" />
              <span className="text-[var(--text-secondary)]">React:</span>
              <span className="w-5 h-3.5 rounded bg-[var(--border-default)] animate-pulse inline-block" />
              <span className="text-[var(--text-muted)] mx-0.5">/</span>
              <span className="w-2 h-2 rounded-full bg-amber-500/70" />
              <span className="text-[var(--text-secondary)]">JS:</span>
              <span className="w-5 h-3.5 rounded bg-[var(--border-default)] animate-pulse inline-block" />
              <span className="text-[var(--text-muted)] mx-0.5">/</span>
              <span className="w-2 h-2 rounded-full bg-blue-500/70" />
              <span className="text-[var(--text-secondary)]">TS:</span>
              <span className="w-5 h-3.5 rounded bg-[var(--border-default)] animate-pulse inline-block" />
            </div>
          </div>
        </div>

        {/* Search & Actions Bar Skeleton */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 my-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <div className="w-full h-9.5 pl-10 pr-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs flex items-center">
              <div className="w-28 h-3.5 rounded bg-[var(--border-default)] animate-pulse" />
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="w-9 h-9 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-center">
              <Star className="w-4 h-4 text-[var(--text-muted)]" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/80 text-black text-xs font-semibold shadow-xs">
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>New Playground</span>
            </div>
          </div>
        </section>

        {/* Table Skeleton */}
        <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] my-6 shadow-xs">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[var(--border-default)] text-left text-xs">
              <thead className="bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Playground
                  </th>
                  <th scope="col" className="px-4 py-3 hidden sm:table-cell">
                    Language
                  </th>
                  <th scope="col" className="px-4 py-3 hidden md:table-cell">
                    Tag
                  </th>
                  <th scope="col" className="px-4 py-3 hidden lg:table-cell">
                    Modified
                  </th>
                  <th scope="col" className="px-4 py-3 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-default)] bg-[var(--bg-surface)]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="animate-pulse">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--border-default)]/60 shrink-0" />
                        <div className="space-y-1.5 flex-1">
                          <div className="w-32 sm:w-48 h-3.5 rounded bg-[var(--border-default)]/80" />
                          <div className="w-20 sm:w-28 h-2.5 rounded bg-[var(--border-default)]/40" />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      <div className="w-14 h-5 rounded bg-[var(--border-default)]/60" />
                    </td>
                    <td className="px-4 py-3.5 hidden md:table-cell">
                      <div className="w-16 h-5 rounded-md bg-[var(--border-default)]/50" />
                    </td>
                    <td className="px-4 py-3.5 hidden lg:table-cell">
                      <div className="w-24 h-3 rounded bg-[var(--border-default)]/50" />
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <div className="w-7 h-7 rounded-md bg-[var(--border-default)]/40" />
                        <div className="w-7 h-7 rounded-md bg-[var(--border-default)]/40" />
                        <div className="w-7 h-7 rounded-md bg-[var(--border-default)]/40" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default memo(DashboardSkeleton);
