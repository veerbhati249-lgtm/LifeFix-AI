import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Mic, Plus } from 'react-icons/fa';
import { Input, Button } from '@/components/common';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled = false,
  isLoading = false,
}) => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div
        className={`glass rounded-2xl p-4 transition-all duration-300 ${
          isFocused ? 'ring-2 ring-primary-500 border-primary-500' : ''
        }`}
      >
        <div className="flex gap-3 items-end">
          {/* File/Input Buttons */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={disabled}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white disabled:opacity-50"
            >
              <Plus size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={disabled}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white disabled:opacity-50"
            >
              <Paperclip size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={disabled}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white disabled:opacity-50"
            >
              <Mic size={20} />
            </motion.button>
          </div>

          {/* Input */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask LifeFix AI anything..."
            disabled={disabled || isLoading}
            className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-lg disabled:opacity-50"
          />

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={disabled || isLoading || !message.trim()}
            className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </motion.button>
        </div>

        {/* Helper Text */}
        <p className="text-white/40 text-xs mt-2">Ctrl + Enter to send</p>
      </div>
    </motion.div>
  );
};

export { ChatInput };
