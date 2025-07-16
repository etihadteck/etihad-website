import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import PackageDetails from '@/app/_components/PackageDetails';

export default async function Page({ params }) {
  const { packageId } = await params;

  return (
    <main className="text-accent-100 text-center font-bold lg:mt-4">
      <Suspense fallback={<Spinner />}>
        <PackageDetails packageId={packageId} />
      </Suspense>
    </main>
  );
}
