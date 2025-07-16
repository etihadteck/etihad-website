'use client';

import { useEffect, useState } from 'react';
import {
  HiCheck,
  HiInboxArrowDown, // for collected-in-china
  HiTruck, // for in-ocean
  HiBuildingLibrary, // for reached-harbor
  HiCheckCircle,
} from 'react-icons/hi2';

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
      }, 200); // Longer circle fill duration (1 second)
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
        }, 50); // Longer line fill duration (1 second)
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
      setTimeout(() => {
        animateStepsSequentially(stepIndex, setFilledSteps);
      }, 0);
    };

    if (document.readyState === 'complete') {
      handleLoad(); // Already loaded
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad, { once: true });
  }, [dbStatus]);

  return (
    <div className="xs:text-sm mt-8 flex flex-col text-xs lg:text-base">
      {SHIPMENT_STATUS_OPTIONS.map((status, index, array) => {
        const isCircleFilled = filledSteps.circles[index];
        const isLineFilled =
          index < array.length - 1 && filledSteps.lines[index];

        return (
          <div key={`${index}`} className="grid grid-cols-[2fr_1fr]">
            <div
              className={`${isCircleFilled ? 'text-accent-500' : ''} grid grid-cols-[0.5fr_2fr] lg:grid-cols-[0.5fr_1fr] lg:gap-8 lg:text-lg`}
            >
              <div className="lg:justify-self-end">{status.icon}</div>
              <p className="py-2 text-wrap lg:justify-self-start">
                {status.label}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center transition-colors">
              {/* Circle */}
              <div
                className={`${isCircleFilled ? 'text-accent-50 bg-accent-700' : 'bg-accent-50 text-primary-950'} aspect-square scale-105 rounded-full px-2 py-2 transition-all duration-75 ease-in-out md:px-4 md:py-4`}
              >
                {isCircleFilled ? (
                  <HiCheck className="trans h-6 w-6 font-bold transition-opacity duration-75 lg:h-6 lg:w-6" />
                ) : (
                  <HiCheck className="h-6 w-6 font-bold opacity-0 transition-opacity duration-75 lg:h-6 lg:w-6" />
                )}
              </div>

              {/* Line */}
              {index + 1 < array.length && (
                <div
                  className={`${isLineFilled ? 'bg-accent-700' : 'bg-accent-50'} h-full px-1 py-8 transition-all duration-75 ease-in-out`}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
