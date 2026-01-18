/**
 * Validation utilities for registration forms
 */

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (10 digits)
const PHONE_REGEX = /^[0-9]{10}$/;

/**
 * Validates internship form data
 * @param {Object} data - Internship form data
 * @returns {Object} Validation errors object
 */
export const validateInternship = (data) => {
  const errors = {};
  
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  }
  
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!data.phone || !PHONE_REGEX.test(data.phone.replace(/\D/g, ""))) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }
  
  if (!data.college || data.college.trim().length < 2) {
    errors.college = "College name is required";
  }
  
  if (!data.domain) {
    errors.domain = "Please select a domain";
  }
  
  if (!data.duration) {
    errors.duration = "Please select a duration";
  }
  
  if (!data.resume || !data.resume.name) {
    errors.resume = "Please upload your resume (PDF only)";
  } else if (data.resume.type !== "application/pdf") {
    errors.resume = "Resume must be a PDF file";
  }
  
  return errors;
};

/**
 * Validates project form data
 * @param {Object} data - Project form data
 * @returns {Object} Validation errors object
 */
export const validateProject = (data) => {
  const errors = {};
  
  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = "Company name must be at least 2 characters";
  }
  
  if (!data.contactPerson || data.contactPerson.trim().length < 2) {
    errors.contactPerson = "Contact person name is required";
  }
  
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!data.phone || !PHONE_REGEX.test(data.phone.replace(/\D/g, ""))) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }
  
  if (!data.projectTitle || data.projectTitle.trim().length < 3) {
    errors.projectTitle = "Project title must be at least 3 characters";
  }
  
  if (!data.techStack || data.techStack.trim().length < 2) {
    errors.techStack = "Tech stack is required";
  }
  
  if (!data.projectDescription || data.projectDescription.trim().length < 10) {
    errors.projectDescription = "Project description must be at least 10 characters";
  }
  
  return errors;
};

/**
 * Validates a specific step of the internship form
 * @param {Object} data - Internship form data
 * @param {number} step - Step number (1, 2, or 3)
 * @returns {Object} Validation errors object for the step
 */
export const validateInternStep = (data, step) => {
  const errors = {};
  
  if (step === 1) {
    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters";
    }
    if (!data.email || !EMAIL_REGEX.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!data.phone || !PHONE_REGEX.test(data.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
  } else if (step === 2) {
    if (!data.college || data.college.trim().length < 2) {
      errors.college = "College name is required";
    }
    if (!data.domain) {
      errors.domain = "Please select a domain";
    }
    if (!data.duration) {
      errors.duration = "Please select a duration";
    }
  } else if (step === 3) {
    if (!data.resume || !data.resume.name) {
      errors.resume = "Please upload your resume (PDF only)";
    } else if (data.resume.type !== "application/pdf") {
      errors.resume = "Resume must be a PDF file";
    }
  }
  
  return errors;
};

/**
 * Validates a specific step of the project form
 * @param {Object} data - Project form data
 * @param {number} step - Step number (1 or 2)
 * @returns {Object} Validation errors object for the step
 */
export const validateProjectStep = (data, step) => {
  const errors = {};
  
  if (step === 1) {
    if (!data.companyName || data.companyName.trim().length < 2) {
      errors.companyName = "Company name must be at least 2 characters";
    }
    if (!data.contactPerson || data.contactPerson.trim().length < 2) {
      errors.contactPerson = "Contact person name is required";
    }
    if (!data.email || !EMAIL_REGEX.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!data.phone || !PHONE_REGEX.test(data.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
  } else if (step === 2) {
    if (!data.projectTitle || data.projectTitle.trim().length < 3) {
      errors.projectTitle = "Project title must be at least 3 characters";
    }
    if (!data.techStack || data.techStack.trim().length < 2) {
      errors.techStack = "Tech stack is required";
    }
    if (!data.projectDescription || data.projectDescription.trim().length < 10) {
      errors.projectDescription = "Project description must be at least 10 characters";
    }
  }
  
  return errors;
};
