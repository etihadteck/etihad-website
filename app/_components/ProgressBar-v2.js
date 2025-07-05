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
  const [filledSteps, setFilledSteps] = useState({
    circles: Array(SHIPMENT_STATUS_OPTIONS.length).fill(false),
    lines: Array(SHIPMENT_STATUS_OPTIONS.length - 1).fill(false),
  });

  useEffect(() => {
    const stepIndex = SHIPMENT_STATUS_OPTIONS.findIndex(
      (option) => option.value === dbStatus,
    );
    setCurrentStep(stepIndex);

    // Reset all filled states
    setFilledSteps({
      circles: Array(SHIPMENT_STATUS_OPTIONS.length).fill(false),
      lines: Array(SHIPMENT_STATUS_OPTIONS.length - 1).fill(false),
    });

    // Animate each step sequentially
    if (stepIndex >= 0) {
      const timer = setTimeout(() => {
        animateSteps(stepIndex);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [dbStatus]);

  const animateSteps = (targetStep) => {
    // Animate circles first
    for (let i = 0; i <= targetStep; i++) {
      setTimeout(() => {
        setFilledSteps((prev) => ({
          ...prev,
          circles: prev.circles.map((val, idx) => (idx === i ? true : val)),
        }));

        // Then animate the line after the circle (except for the last step)
        if (i < targetStep) {
          setTimeout(() => {
            setFilledSteps((prev) => ({
              ...prev,
              lines: prev.lines.map((val, idx) => (idx === i ? true : val)),
            }));
          }, 400); // Delay between circle and line
        }
      }, i * 800); // Delay between each step
    }
  };

  return (
    <div className="mt-12 flex items-center justify-center">
      {SHIPMENT_STATUS_OPTIONS.map((status, index, array) => {
        const isCircleFilled =
          filledSteps.circles[index] || index <= currentStep;
        const isLineFilled =
          index < array.length - 1 &&
          (filledSteps.lines[index] || index < currentStep);

        return (
          <div
            key={`${index}`}
            className="flex items-center justify-center transition-colors"
          >
            <div className="mt-6 flex flex-col items-center justify-center gap-1 text-center text-sm font-semibold">
              <div
                className={`${isCircleFilled ? 'bg-accent-700 text-accent-50' : 'bg-accent-50 text-primary-950'} flex h-12 w-12 items-center justify-center rounded-full px-10 py-8.5 transition-all duration-500 ease-in-out`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                {index + 1}
              </div>
              <span className="text-accent-50">{status.label}</span>
            </div>
            {index + 1 < array.length && (
              <div
                className={`${isLineFilled ? 'bg-accent-700' : 'bg-accent-50'} h-1 w-16 px-16 py-1 transition-all duration-500 ease-in-out`}
                style={{
                  transitionDelay: `${index * 0.2 + 0.4}s`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
