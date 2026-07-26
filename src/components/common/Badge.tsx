import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'error';
}

const variantClasses = {
  primary: 'bg-primary-500/20 text-primary-400 border-primary-500/50',
  success: 'bg-green-500/20 text-green-400 border-green-500/50',
  warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  error: 'bg-red-500/20 text-red-400 border-red-500/50',
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
}) => {
  return (
    <motion.span
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${variantClasses[variant]}`}
    >
      {label}
    </motion.span>
  );
};
