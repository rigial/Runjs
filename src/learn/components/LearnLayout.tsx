import { memo, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LearnSidebar, { SidebarToggle } from './LearnSidebar';
import { LearnProgressProvider } from '../context/LearnProgressContext';

interface LearnLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

function LearnLayoutInner({ children, showSidebar = true }: LearnLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--bg-app)] text-[var(--text-primary)] transition-colors duration-150">
      <Navbar />

      {showSidebar ? (
        <div className="flex-1 flex">
          {/* Sidebar */}
          <LearnSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Mobile sidebar toggle */}
            <div className="lg:hidden px-4 py-2 border-b border-[var(--border-subtle)]">
              <SidebarToggle onClick={() => setSidebarOpen(true)} />
            </div>

            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      ) : (
        <main className="flex-1">{children}</main>
      )}

      <Footer />
    </div>
  );
}

/** Wraps children in the progress provider + layout */
function LearnLayout({ children, showSidebar }: LearnLayoutProps) {
  return (
    <LearnProgressProvider>
      <LearnLayoutInner showSidebar={showSidebar}>
        {children}
      </LearnLayoutInner>
    </LearnProgressProvider>
  );
}

export default memo(LearnLayout);
