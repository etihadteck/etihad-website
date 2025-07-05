'use client';

import { useEffect, useState } from 'react';

export const SHIPMENT_STATUS_OPTIONS = [
  { value: 'collected-in-china', label: 'في الصين' },
  { value: 'in-ocean', label: 'في البحر' },
  { value: 'reached-harbor', label: 'وصلت الميناء' },
  { value: 'in-storage-ready', label: 'في المستودع' },
];

function ProgressBar({ status: dbStatus }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(
      SHIPMENT_STATUS_OPTIONS.findIndex((option) => option.value === dbStatus),
    );
    console.log(currentStep);
  }, [dbStatus, currentStep]);

  return (
    <div className="mt-12 flex items-center justify-center">
      {SHIPMENT_STATUS_OPTIONS.map((status, index, arraySize) => {
        return (
          <div
            key={`${index}`}
            className="flex items-center justify-center transition-colors"
          >
            <div className="mt-6 flex flex-col items-center justify-center gap-1 text-center text-sm font-semibold">
              <div
                className={`${index <= currentStep ? 'bg-accent-700 text-accent-50' : 'bg-accent-50 text-primary-950'} rounded-full px-10 py-8.5 duration-${index + 1 * 400 + 50}`}
              >
                {index + 1}
              </div>
              <span className="text-accent-50">{status.label}</span>
            </div>
            {index + 1 < arraySize.length && (
              <div
                className={`${index <= currentStep ? 'bg-accent-700' : 'bg-accent-50'} px-18 py-1 text-center text-sm font-semibold duration-${index + 1 * 400 + 400}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
