import { useState } from "react";

/**
 * Custom hook for managing toast notifications
 */
export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const hideToast = () => {
    setToast(null);
  };

  return { toast, showToast, hideToast };
};
