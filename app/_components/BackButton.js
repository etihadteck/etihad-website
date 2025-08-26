'use client';

import { useRouter } from 'next/navigation';
import { HiArrowLeft } from 'react-icons/hi2';

function BackButton({ label = '' }) {
  const router = useRouter();

  function handleBack() {
    // router.back();
    router.push('/packages');
  }
  return (
    <form
      action={handleBack}
      className="flex flex-col items-center justify-center md:flex-row"
    >
      <button
        type="submit"
        className="bg-accent-500 hover:bg-accent-700 rounded-full px-4 py-4 transition-colors"
      >
        {label !== '' ? (
          <span>{label}</span>
        ) : (
          <HiArrowLeft className="h-4 w-4 font-bold md:h-6 md:w-6" />
        )}
      </button>
    </form>
  );
}

export default BackButton;
