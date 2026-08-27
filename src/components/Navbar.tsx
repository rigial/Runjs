import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { navigation } from '../utils/masterData';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const filteredNav = navigation.filter(
    (val) => location.pathname !== val.link
  );

  const MenuIcon = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const CloseIcon = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <nav className="w-full px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">RunJS.in</div>

        <div className="md:hidden">
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? CloseIcon : MenuIcon}
          </button>
        </div>

        <div className="hidden md:flex gap-4">
          {filteredNav.map((val, index) => (
            <Link
              key={index}
              to={val.link}
              className="text-sm font-medium hover:underline"
            >
              {val.title}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 px-2">
          {filteredNav.map((val, index) => (
            <Link
              key={index}
              to={val.link}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium hover:underline"
            >
              {val.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default memo(Navbar);
