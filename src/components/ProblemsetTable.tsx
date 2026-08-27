import { memo } from 'react';
import { BookOpen } from 'lucide-react';

function ProblemsetTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] my-6 shadow-xs transition-colors">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--border-default)] text-left text-xs">
          <thead className="bg-[var(--bg-surface-muted)] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
            <tr>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Star
              </th>
              <th scope="col" className="px-4 py-3">
                Problem
              </th>
              <th scope="col" className="px-4 py-3">
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-primary)]">
            <tr>
              <td
                colSpan={4}
                className="px-6 py-12 text-center text-xs text-[var(--text-muted)]"
              >
                <div className="flex flex-col items-center gap-2">
                  <BookOpen className="w-8 h-8 opacity-40" />
                  <p>
                    Problem sets are currently being curated for the v2.0
                    release.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default memo(ProblemsetTable);
