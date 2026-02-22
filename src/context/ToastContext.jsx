import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 4000) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-green-600 min-w-5" size={20} />;
      case "error":
        return <AlertCircle className="text-red-600 min-w-5" size={20} />;
      case "info":
      default:
        return <Info className="text-blue-600 min-w-5" size={20} />;
    }
  };

  const getToastStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-900";
      case "error":
        return "bg-red-50 border-red-200 text-red-900";
      case "info":
      default:
        return "bg-blue-50 border-blue-200 text-blue-900";
    }
  };

  const getCloseButtonStyles = (type) => {
    switch (type) {
      case "success":
        return "text-green-500 hover:text-green-700 hover:bg-green-100";
      case "error":
        return "text-red-500 hover:text-red-700 hover:bg-red-100";
      case "info":
      default:
        return "text-blue-500 hover:text-blue-700 hover:bg-blue-100";
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`${getToastStyles(
                toast.type,
              )} px-4 py-3 rounded-lg shadow-xl border flex items-start gap-3 w-80 max-w-[90vw] pointer-events-auto`}
            >
              <div className="mt-0.5">{getIcon(toast.type)}</div>
              <div className="flex-1 text-sm font-medium break-words mt-0.5">
                {toast.message}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className={`${getCloseButtonStyles(
                  toast.type,
                )} p-1 -m-1 rounded-md transition-colors`}
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
