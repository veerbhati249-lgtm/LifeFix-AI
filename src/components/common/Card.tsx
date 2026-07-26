import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
}) => {
  const component = (
    <div className={`glass rounded-2xl p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
      >
        {component}
      </motion.div>
    );
  }

  return component;
};
