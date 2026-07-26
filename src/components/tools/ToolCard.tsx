import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Share2, Download } from 'react-icons/fa';

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({
  name,
  description,
  icon,
  gradient,
  onClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000));

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass rounded-2xl p-6 h-full relative overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 opacity-10 ${gradient} blur-xl group-hover:opacity-20 transition-opacity`}
        />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`mb-4 text-5xl ${gradient}`}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{name}</h3>

        {/* Description */}
        <p className="text-white/60 text-sm mb-4 relative z-10 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <Eye size={16} />
            <span>{Math.floor(Math.random() * 5000)}</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`text-sm flex items-center gap-1 transition-colors ${
                isLiked ? 'text-red-500' : 'text-white/50 hover:text-red-500'
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
              {likes}
            </motion.button>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-dark-900 to-transparent flex gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-3 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
          >
            Launch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <Share2 size={16} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export { ToolCard };
