import Link from 'next/link';

function NotFound() {
  return (
    <main className="mt-4 space-y-10 text-center">
      <h1 className="text-3xl font-semibold">الصفحة غير موجودة 🥲</h1>
      <Link
        href="/"
        className="bg-accent-500 text-primary-800 inline-block px-6 py-3 text-lg"
      >
        الرجوع للصفحة الرئيسية
      </Link>
    </main>
  );
}

export default NotFound;
