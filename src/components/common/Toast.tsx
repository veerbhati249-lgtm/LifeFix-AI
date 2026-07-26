import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'react-icons/fa';
import clsx from 'clsx';

interface ToastProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: () => void;
}

const typeClasses = {
  success: 'bg-green-500/20 border-green-500/50 text-green-400',
  error: 'bg-red-500/20 border-red-500/50 text-red-400',
  info: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
  warning: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400',
};

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  onClose,
}) => {
  const Icon = icons[type];

  React.useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={clsx(
        'fixed bottom-4 right-4 max-w-md px-4 py-3 rounded-lg border',
        'flex items-center gap-3 backdrop-blur-md z-50',
        typeClasses[type]
      )}
    >
      <Icon size={20} />
      <p className="flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-current/70 hover:text-current transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};
