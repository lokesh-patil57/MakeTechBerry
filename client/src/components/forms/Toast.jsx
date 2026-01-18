import { CheckCircle, XCircle } from "lucide-react";

/**
 * Toast notification component
 */
const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-16 sm:top-20 right-2 sm:right-4 left-2 sm:left-auto z-40 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg animate-slide-in max-w-sm sm:max-w-md ${
        type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
      ) : (
        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
      )}
      <p className={`font-medium text-sm sm:text-base flex-1 ${type === "success" ? "text-green-800" : "text-red-800"}`}>
        {message}
      </p>
      <button
        onClick={onClose}
        className="ml-1 sm:ml-2 text-gray-400 hover:text-gray-600 flex-shrink-0"
      >
        <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default Toast;
