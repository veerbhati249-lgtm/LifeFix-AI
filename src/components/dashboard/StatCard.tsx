import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap } from 'react-icons/fa';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  trend,
  gradient,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className={`absolute inset-0 opacity-5 ${gradient} blur-xl`} />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-lg ${gradient} bg-opacity-10`}>{icon}</div>
          {trend !== undefined && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`flex items-center gap-1 text-sm font-semibold ${
                trend > 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              <TrendingUp size={16} />
              {trend > 0 ? '+' : ''}{trend}%
            </motion.div>
          )}
        </div>
        <p className="text-white/60 text-sm mb-2">{label}</p>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
};

export { StatCard };
