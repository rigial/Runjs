import { memo } from 'react';
import { Link, useLocation } from 'react-router';
import { Code2 } from 'lucide-react';

interface FooterProps {
  className?: string;
  hasMarginTop?: boolean;
}

function Footer({ className = '', hasMarginTop }: FooterProps) {
  const location = useLocation();
  const isLearnPage = location.pathname.startsWith('/learn');
  const applyMarginTop =
    hasMarginTop !== undefined ? hasMarginTop : !isLearnPage;

  return (
    <footer
      className={`w-full border-t border-[var(--border-default)] bg-[var(--bg-surface)] py-6 transition-colors duration-150 ${
        applyMarginTop ? 'mt-12' : 'mt-0'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)]">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-semibold text-[var(--text-primary)]">
              RunJS
            </span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>In-browser JavaScript, TypeScript & React Playground</span>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2">
          <Link
            to="/privacy"
            className="hover:text-[var(--text-primary)] transition-colors hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-[var(--text-primary)] transition-colors hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/kishorekumar"
            className="hover:text-[var(--text-primary)] transition-colors hover:underline"
          >
            Creator
          </Link>
          <Link
            to="/about"
            className="hover:text-[var(--text-primary)] transition-colors hover:underline"
          >
            About & Credits
          </Link>
          <Link
            to="https://www.linkedin.com/company/runjs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors hover:underline"
          >
            LinkedIn
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
