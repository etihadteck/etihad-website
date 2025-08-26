'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchForm() {
  const router = useRouter();
  const [packageId, setPackageId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (packageId.trim()) {
      router.push(`/packages/${packageId.trim()}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center text-sm sm:text-xl"
    >
      <input
        type="text"
        value={packageId}
        onChange={(e) => setPackageId(e.target.value)}
        placeholder="أدخل رقم السند"
        className="bg-accent-50 text-primary-950 rounded-r-xl py-2 pr-5 pl-15 placeholder:text-start focus:outline-none sm:py-3 sm:pr-10 sm:pl-55 md:py-4 md:pr-12 md:pl-80"
      />
      <button
        type="submit"
        className="bg-accent-500 hover:bg-accent-700 text-accent-50 rounded-l-xl px-3 py-2 transition-colors sm:px-6 sm:py-3 md:py-4"
      >
        ابحث
      </button>
    </form>
  );
}

export default SearchForm;
