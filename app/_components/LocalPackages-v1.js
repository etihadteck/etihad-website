'use client';

function LocalPackages() {
  const packageIdsString = localStorage.getItem('packageIds');

  // Parse the string to array, or use empty array if null/undefined
  const packageIds = packageIdsString ? JSON.parse(packageIdsString) : [];

  if (packageIds.length <= 0) {
    return (
      <p className="text-accent-50 text-xl font-medium">لا يوجد شحنات مخزنة</p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {packageIds.map((packageId, index) => (
        <div
          key={`${packageId}-${index}`}
          className="bg-accent-50 text-accent-700 flex w-44 flex-col items-center justify-center gap-4 rounded-md px-8 py-4"
        >
          <span>رقم الشحنة</span>
          <span className="bg-accent-200 rounded-md px-4 py-2 font-medium">
            {packageId}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LocalPackages;
