import React from 'react';
import { motion } from 'framer-motion';
import { Message } from '@/types';
import { Copy, RefreshCw } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ChatMessageProps {
  message: Message;
  onCopy?: () => void;
  onRegenerate?: () => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onCopy,
  onRegenerate,
}) => {
  const isAssistant = message.role === 'assistant';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-4 mb-4 ${
        isAssistant ? 'justify-start' : 'justify-end flex-row-reverse'
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${
          isAssistant
            ? 'bg-gradient-to-br from-primary-500 to-primary-700'
            : 'bg-gradient-to-br from-blue-500 to-cyan-500'
        }`}
      >
        {isAssistant ? '⚡' : '👤'}
      </div>

      {/* Message Content */}
      <div className={`max-w-md lg:max-w-2xl`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isAssistant
              ? 'glass-dark text-white'
              : 'bg-primary-500 text-white'
          }`}
        >
          <ReactMarkdown
            className="prose prose-invert max-w-none"
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>

        {/* Actions */}
        {isAssistant && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="flex gap-2 mt-2 opacity-0 hover:opacity-100 transition-opacity"
          >
            {onCopy && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCopy}
                className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Copy message"
              >
                <Copy size={16} />
              </motion.button>
            )}
            {onRegenerate && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRegenerate}
                className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Regenerate response"
              >
                <RefreshCw size={16} />
              </motion.button>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export { ChatMessage };
