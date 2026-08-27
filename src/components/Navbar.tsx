import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { navigation } from '../utils/masterData';
import ThemeSelector from './ThemeSelector';
import { Menu, X, Play, Code2 } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-default)] bg-[var(--bg-surface)]/80 backdrop-blur-md transition-colors duration-150">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-black shadow-sm group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-[var(--text-primary)]">
                Run<span className="text-amber-500">JS</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                v2.0
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((val, index) => {
              const isActive = location.pathname === val.link;
              return (
                <Link
                  key={index}
                  to={val.link}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-semibold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                  }`}
                >
                  {val.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Play button if not on playground */}
          {!['/js', '/ts', '/react'].includes(location.pathname) && (
            <Link
              to="/js"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black text-xs font-semibold shadow-sm transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>Start Coding</span>
            </Link>
          )}

          {/* Theme Selector */}
          <ThemeSelector />

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-md border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]/40"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border-default)] bg-[var(--bg-surface-elevated)] px-4 py-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            {navigation.map((val, index) => {
              const isActive = location.pathname === val.link;
              return (
                <Link
                  key={index}
                  to={val.link}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[var(--bg-surface-active)] text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                  }`}
                >
                  {val.title}
                </Link>
              );
            })}
            <div className="pt-2 mt-1 border-t border-[var(--border-subtle)]">
              <Link
                to="/js"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-md bg-amber-500 hover:bg-amber-600 text-black text-sm font-semibold shadow-sm transition-colors"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Start Coding Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Navbar);
