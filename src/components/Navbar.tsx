import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../utils/masterData';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex gap-4 pt-4 justify-center">
      {navigation.map((val, index) => {
        if (!location.pathname.includes(val.title.toLocaleLowerCase())) {
          return (
            <Link
              key={index}
              to={val.link}
              className="text-sm font-semibold hover:underline"
            >
              {val.title}
            </Link>
          );
        } else {
          return null;
        }
      })}
    </nav>
  );
}

export default memo(Navbar);
