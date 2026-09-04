import { memo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import IOSSpinner from './IOSSpinner';

function DashboardLoading() {
  return (
    <div
      role="status"
      aria-label="Loading dashboard..."
      className="min-h-screen w-full flex flex-col justify-between bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150"
    >
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center gap-3 text-[var(--text-secondary)]">
          <IOSSpinner size="lg" />
          <span className="text-xs font-medium tracking-wide text-[var(--text-muted)]">
            Loading Dashboard...
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default memo(DashboardLoading);
