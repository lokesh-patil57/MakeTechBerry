import { CheckCircle, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import Input from "../forms/Input";
import ProgressSteps from "./ProgressSteps";
import { validateProjectStep, validateProject } from "../../utils/validation";
import { registerProject } from "../../services/project.service";

/**
 * Project registration form component
 */
const ProjectForm = ({ data, errors, step, loading, onChange, onStepChange, onLoadingChange, onErrorsChange, showToast, onSuccess }) => {
  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const stepErrors = validateProjectStep(data, step);
    onErrorsChange(stepErrors);
    
    if (Object.keys(stepErrors).length === 0) {
      onStepChange(Math.min(step + 1, 3));
    }
  };

  const handlePrev = () => {
    onStepChange(Math.max(step - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only allow submission on the final review step (step 3)
    if (step !== 3) {
      // If form is submitted earlier (e.g. pressing Enter), prevent submission and move to next step
      handleNext(e);
      return;
    }
    
    const formErrors = validateProject(data);
    onErrorsChange(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      showToast("Please fix the errors before submitting", "error");
      return;
    }

    onLoadingChange(true);
    
    try {
      const response = await registerProject(data);
      
      if (response.data.success) {
        showToast("Project submitted successfully! We'll contact you soon.", "success");
        if (onSuccess) {
          onSuccess();
        }
        return true; // Indicate success for parent to reset form
      }
    } catch (error) {
      showToast(
        error.response?.data?.message || "Submission failed. Please try again.",
        "error"
      );
    } finally {
      onLoadingChange(false);
    }
    
    return false;
  };

  const stepLabels = ["Company Info", "Project Details", "Review Details"];
 
  return (
    <form onSubmit={handleSubmit}>
      <ProgressSteps steps={[1, 2, 3]} currentStep={step} stepLabels={stepLabels} />
 
      {/* Step 1: Company Information */}
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-slide-in">
          <Input
            label="Company Name"
            placeholder="Company / Startup name"
            value={data.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            error={errors.companyName}
            required
          />
          <Input
            label="Contact Person"
            placeholder="Your name"
            value={data.contactPerson}
            onChange={(e) => onChange("contactPerson", e.target.value)}
            error={errors.contactPerson}
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="company@email.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            error={errors.email}
            required
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Contact number"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value.replace(/\D/g, ""))}
            error={errors.phone}
            required
          />
        </div>
      )}
 
      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-slide-in">
          <Input
            label="Project Title"
            placeholder="Project name"
            value={data.projectTitle}
            onChange={(e) => onChange("projectTitle", e.target.value)}
            error={errors.projectTitle}
            required
          />
          <Input
            label="Tech Stack"
            placeholder="React, Node, MongoDB..."
            value={data.techStack}
            onChange={(e) => onChange("techStack", e.target.value)}
            error={errors.techStack}
            required
          />
          <div className="md:col-span-2">
            <label className="block text-xs sm:text-sm font-medium mb-1">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              value={data.projectDescription}
              onChange={(e) => onChange("projectDescription", e.target.value)}
              className={`w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#9062FF] ${
                errors.projectDescription ? "border-red-500" : ""
              }`}
              placeholder="Describe your project briefly"
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.projectDescription}</p>
            )}
          </div>
          <Input
            label="Budget (Optional)"
            placeholder="e.g., $5000 - $10000"
            value={data.budget}
            onChange={(e) => onChange("budget", e.target.value)}
          />
        </div>
      )}
 
      {/* Step 3: Review Details */}
      {step === 3 && (
        <div className="animate-slide-in space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">Review your project details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Company Name</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.companyName}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Contact Person</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.contactPerson}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Email</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.email}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Phone</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.phone}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Project Title</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.projectTitle}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Tech Stack</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.techStack}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs sm:text-sm text-gray-500">Project Description</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.projectDescription}</p>
            </div>
            {data.budget && (
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Budget</p>
                <p className="text-sm sm:text-base font-medium text-gray-900">{data.budget}</p>
              </div>
            )}
          </div>
        </div>
      )}
 
      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
        <button
          type="button"
          onClick={handlePrev}
          disabled={step === 1}
          className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm sm:text-base ${
            step === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        
        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-[#9062FF] text-white rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-2 bg-[#9062FF] text-white rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-60 text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="hidden sm:inline">Submitting...</span>
                <span className="sm:hidden">Submitting</span>
              </>
            ) : (
              <>
                Submit Project
                <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default ProjectForm;
