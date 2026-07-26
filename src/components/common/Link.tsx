import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  external = false,
  className = '',
}) => {
  if (external) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-primary-400 hover:text-primary-300 transition-colors ${className}`}
        whileHover={{ x: 2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ x: 2 }}>
      <RouterLink
        to={to}
        className={`text-primary-400 hover:text-primary-300 transition-colors ${className}`}
      >
        {children}
      </RouterLink>
    </motion.div>
  );
};
