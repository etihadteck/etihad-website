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
      className="flex items-center justify-center text-xl"
    >
      <input
        type="text"
        value={packageId}
        onChange={(e) => setPackageId(e.target.value)}
        placeholder="ابحث عن شحنتك"
        className="bg-accent-50 text-primary-950 rounded-r-xl py-4 pr-12 pl-80 placeholder:text-start focus:outline-none"
      />
      <button
        type="submit"
        className="bg-accent-500 hover:bg-accent-700 text-accent-50 rounded-l-xl px-6 py-4 transition-colors"
      >
        ابحث
      </button>
    </form>
  );
}

export default SearchForm;
