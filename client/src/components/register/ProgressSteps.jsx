/**
 * Progress steps indicator component
 */
const ProgressSteps = ({ steps, currentStep, stepLabels }) => {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center justify-between mb-3 sm:mb-4 px-1">
        {steps.map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base transition-all ${
                  currentStep >= step
                    ? "bg-[#9062FF] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
              <p className="text-[10px] xs:text-xs mt-1 sm:mt-2 text-gray-600 text-center px-0.5">
                {stepLabels[step - 1]}
              </p>
            </div>
            {step < steps.length && (
              <div
                className={`h-0.5 sm:h-1 flex-1 mx-1 sm:mx-2 ${
                  currentStep > step ? "bg-[#9062FF]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
