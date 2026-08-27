import { memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchProblem from '../components/SearchProblem';
import ProblemsetTable from '../components/ProblemsetTable';
import { BookOpen } from 'lucide-react';

function Problemset() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="pb-6 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Problemset</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            JavaScript Coding Challenges
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
            Practice foundational algorithms, data structures, and practical
            frontend problems.
          </p>
        </div>

        <div className="my-6">
          <SearchProblem />
        </div>

        <ProblemsetTable />
      </main>

      <Footer />
    </div>
  );
}

export default memo(Problemset);
