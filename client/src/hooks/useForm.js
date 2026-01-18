import { useState } from "react";

/**
 * Custom hook for managing form state and validation
 */
export const useForm = (initialValues, validateStep, validateAll) => {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateCurrentStep = () => {
    const stepErrors = validateStep(data, step);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateForm = () => {
    const formErrors = validateAll(data);
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const nextStep = (maxSteps) => {
    if (validateCurrentStep()) {
      setStep((prev) => Math.min(prev + 1, maxSteps));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setData(initialValues);
    setErrors({});
    setStep(1);
    setLoading(false);
  };

  return {
    data,
    errors,
    step,
    loading,
    setData,
    setErrors,
    setStep,
    setLoading,
    handleChange,
    validateCurrentStep,
    validateForm,
    nextStep,
    prevStep,
    resetForm,
  };
};
