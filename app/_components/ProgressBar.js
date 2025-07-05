'use client';

import { useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi2';
import { SHIPMENT_STATUS_OPTIONS } from '@/app/_lib/constants';

const animateStepsSequentially = async (targetStep, setFilledSteps) => {
  for (let i = 0; i <= targetStep; i++) {
    // Fill circle (slower transition - 1000ms)
    await new Promise((resolve) => {
      setTimeout(() => {
        setFilledSteps((prev) => ({
          ...prev,
          circles: prev.circles.map((val, idx) => (idx === i ? true : val)),
        }));
        resolve();
      }, 1500); // Longer circle fill duration (1 second)
    });

    // Fill line (slower transition - 1000ms, except after last circle)
    if (i < targetStep) {
      await new Promise((resolve) => {
        setTimeout(() => {
          setFilledSteps((prev) => ({
            ...prev,
            lines: prev.lines.map((val, idx) => (idx === i ? true : val)),
          }));
          resolve();
        }, 1500); // Longer line fill duration (1 second)
      });
    }
  }
};

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

    const handleLoad = () => {
      animateStepsSequentially(stepIndex, setFilledSteps);
    };

    if (document.readyState === 'complete') {
      handleLoad(); // Already loaded
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [dbStatus]);

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
                className={`${isCircleFilled ? 'text-accent-50 bg-green-600' : 'bg-accent-50 text-primary-950'} rounded-full px-10 py-8.5 transition-colors duration-1000 ease-in-out`}
              >
                {isCircleFilled ? (
                  <HiCheck className="h-6 w-6 font-bold" />
                ) : (
                  index + 1
                )}
              </div>
              <span className="text-accent-50">{status.label}</span>
            </div>
            {index + 1 < array.length && (
              <div
                className={`${isLineFilled ? 'bg-green-600' : 'bg-accent-50'} px-18 py-1 transition-colors duration-1000 ease-in-out`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
