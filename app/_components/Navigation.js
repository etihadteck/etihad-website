'use client';

import Link from 'next/link';

export default function Navigation({ onNavigate }) {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex flex-col-reverse items-center gap-16 md:flex-row">
        <li>
          <Link
            href="/packages"
            className="bg-accent-500 hover:bg-accent-700 rounded-xl px-6 py-3 transition-colors duration-300"
            onClick={onNavigate}
          >
            سجل الشحنات
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="bg-accent-500 hover:bg-accent-700 md:hover:bg-accent-500 md:border-accent-500 rounded-xl px-6 py-3 transition-colors duration-800 ease-in-out md:border-b md:bg-transparent"
            onClick={onNavigate}
          >
            مـن نـحـــن
          </Link>
        </li>
      </ul>
    </nav>
  );
}
