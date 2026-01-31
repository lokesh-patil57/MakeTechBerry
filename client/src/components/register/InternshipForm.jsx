import { CheckCircle, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import FileUpload from "../forms/FileUpload";
import ProgressSteps from "./ProgressSteps";
import { validateInternStep, validateInternship } from "../../utils/validation";
import { registerInternship } from "../../services/internship.service";

/**
 * Internship registration form component
 */
const InternshipForm = ({ data, errors, step, loading, onChange, onStepChange, onLoadingChange, onErrorsChange, showToast, onSuccess }) => {

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const stepErrors = validateInternStep(data, step);
    onErrorsChange(stepErrors);
    
    if (Object.keys(stepErrors).length === 0) {
      onStepChange(Math.min(step + 1, 4));
    }
  };

  const handlePrev = () => {
    onStepChange(Math.max(step - 1, 1));
  };

  const submitInternship = async () => {
    const formErrors = validateInternship(data);
    onErrorsChange(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      showToast("Please fix the errors before continuing", "error");
      return false;
    }

    onLoadingChange(true);
    
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("college", data.college);
      formData.append("domain", data.domain);
      formData.append("duration", data.duration);
      formData.append("resume", data.resume);

      const response = await registerInternship(formData);
      
      if (response.data.success) {
        showToast("Internship registration successful! We'll contact you soon.", "success");
        if (onSuccess) {
          onSuccess();
        }
        return true;
      }
    } catch (error) {
      showToast(
        error.response?.data?.message || "Registration failed. Please try again.",
        "error"
      );
    } finally {
      onLoadingChange(false);
    }
    
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only allow submission on the final review step (step 4)
    if (step !== 4) {
      // If form is submitted earlier (e.g. pressing Enter), prevent submission and move to next step
      handleNext(e);
      return;
    }
    
    // Only proceed with submission if we're on step 4
    await submitInternship();
  };

  const stepLabels = ["Personal Info", "Details", "Resume", "Verify Details"];
 
  return (
    <form onSubmit={handleSubmit}>
      <ProgressSteps steps={[1, 2, 3, 4]} currentStep={step} stepLabels={stepLabels} />
 
      {/* Step 1: Personal Information */}
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-slide-in">
          <Input
            label="Full Name"
            placeholder="Your full name"
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            error={errors.fullName}
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@email.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            error={errors.email}
            required
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="10 digit mobile number"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value.replace(/\D/g, ""))}
            error={errors.phone}
            required
          />
        </div>
      )}
 
      {/* Step 2: Education & Domain */}
      {step === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-slide-in">
          <Input
            label="College Name"
            placeholder="Your college"
            value={data.college}
            onChange={(e) => onChange("college", e.target.value)}
            error={errors.college}
            required
          />
          <Select
            label="Domain"
            options={["MERN Stack", "Web Development", "AI / ML", "Cybersecurity"]}
            value={data.domain}
            onChange={(e) => onChange("domain", e.target.value)}
            error={errors.domain}
            required
          />
          <Select
            label="Duration"
            options={["1 Month", "3 Months"]}
            value={data.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            error={errors.duration}
            required
          />
        </div>
      )}
 
      {/* Step 3: Resume Upload */}
      {step === 3 && (
        <div className="animate-slide-in">
          <FileUpload
            file={data.resume}
            onChange={(file) => onChange("resume", file)}
            error={errors.resume}
          />
        </div>
      )}
 
      {/* Step 4: Review Details */}
      {step === 4 && (
        <div className="animate-slide-in space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">Review your details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Full Name</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.fullName}</p>
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
              <p className="text-xs sm:text-sm text-gray-500">College</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.college}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Domain</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.domain}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Duration</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">{data.duration}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs sm:text-sm text-gray-500">Resume</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">
                {data.resume?.name || "No file selected"}
              </p>
            </div>
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
        
        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-[#9062FF] text-white rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {step === 3 ? "Verify Details" : "Next"}
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
                <span className="hidden sm:inline">Register for Internship</span>
                <span className="sm:hidden">Register</span>
                <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default InternshipForm;
