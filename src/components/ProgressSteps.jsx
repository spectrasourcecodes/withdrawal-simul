// src/components/ProgressSteps.jsx
import React from "react";
import { STEP_INDICATORS } from "../utils/constants";

const ProgressSteps = ({ currentStep }) => {
  const currentIndex = STEP_INDICATORS.findIndex(
    (step) => step.key === currentStep
  );

  const activeIndex = currentIndex >= 0 ? currentIndex : 0;

  return (
    <div className="w-full py-6 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="hidden sm:flex items-center justify-between relative">
          {STEP_INDICATORS.map((step, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;
            const isLast = index === STEP_INDICATORS.length - 1;

            return (
              <React.Fragment key={step.key}>
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-green-600 text-white ring-4 ring-green-200 ring-offset-2"
                          : isCompleted
                          ? "bg-green-400 text-white"
                          : "bg-gray-200 text-gray-500"
                      }
                    `}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`
                      mt-2 text-xs font-medium text-center whitespace-nowrap
                      transition-colors duration-300
                      ${isActive ? "text-green-700" : isCompleted ? "text-green-600" : "text-gray-400"}
                    `}
                  >
                    {step.label}
                  </span>
                </div>

                {!isLast && (
                  <div
                    className={`
                      flex-1 h-0.5 mx-2 transition-all duration-300
                      ${index < activeIndex ? "bg-green-400" : "bg-gray-200"}
                    `}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="sm:hidden flex items-center justify-center gap-2">
          {STEP_INDICATORS.map((step, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <React.Fragment key={step.key}>
                <div
                  className={`
                    w-2.5 h-2.5 rounded-full transition-all duration-300
                    ${isActive ? "w-8 bg-green-600" : ""}
                    ${isCompleted ? "bg-green-400" : ""}
                    ${!isActive && !isCompleted ? "bg-gray-300" : ""}
                  `}
                />
              </React.Fragment>
            );
          })}
        </div>

        <div className="sm:hidden text-center mt-3 text-sm font-medium text-gray-600">
          {STEP_INDICATORS[activeIndex]?.label || ""}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;