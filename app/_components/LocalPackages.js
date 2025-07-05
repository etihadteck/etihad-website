'use client';

import { useEffect, useState } from 'react';

export default function LocalPackages() {
  const [packageIds, setPackageIds] = useState([]);

  useEffect(() => {
    const packageIdsString = localStorage.getItem('packageIds');
    const parsed = packageIdsString ? JSON.parse(packageIdsString) : [];
    setPackageIds(parsed);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {packageIds.length <= 0 ? (
        <p className="text-accent-50 text-md font-medium">
          لا يوجد شحنات مخزنة
        </p>
      ) : (
        packageIds.map((packageId, index) => (
          <div
            key={`${packageId}-${index}`}
            className="bg-accent-50 text-accent-700 flex w-44 flex-col items-center justify-center gap-4 rounded-md px-8 py-4"
          >
            <span>رقم الشحنة</span>
            <span className="bg-accent-200 rounded-md px-4 py-2 font-medium">
              {packageId}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
