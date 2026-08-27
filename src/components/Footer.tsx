import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="pb-4">
      <Link
        to="https://rigial.com/"
        target="_blank"
        className="text-sm font-semibold hover:underline"
      >{`Copyright © ${new Date().getFullYear()}. All rights reserved - Rigial.com`}</Link>
    </footer>
  );
}
