import Link from 'next/link';

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        {/* <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            من نكون
          </Link>
        </li> */}
        <li>
          <Link
            href="/packages"
            className="bg-accent-500 hover:bg-accent-700 rounded-xl px-6 py-3 transition-colors"
          >
            ابحث عن شحنتك
          </Link>
        </li>
      </ul>
    </nav>
  );
}
