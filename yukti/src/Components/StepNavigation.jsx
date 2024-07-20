import React from "react";

const StepNavigation = ({ currentStep, setStep }) => {
  return (
    <div className="flex justify-center mt-4 mb-4">
      {[1, 2, 3].map((step) => (
        <button
          key={step}
          onClick={() => setStep(step)}
          className={`w-10 h-10 flex items-center justify-center rounded-full mx-2 text-blue-500 font-bold ${
            currentStep === step ? "bg-orange-500" : "bg-gray-200"
          }`}
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default StepNavigation;
