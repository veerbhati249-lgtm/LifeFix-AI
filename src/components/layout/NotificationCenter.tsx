import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'react-icons/fa';
import { Notification } from '@/types';

const NotificationCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      userId: 'user1',
      type: 'message',
      title: 'New Message',
      content: 'You have a new message from AI',
      read: false,
      createdAt: new Date(),
    },
    {
      id: '2',
      userId: 'user1',
      type: 'update',
      title: 'Feature Update',
      content: 'New Image Generator available',
      read: false,
      createdAt: new Date(),
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'message':
        return 'border-l-blue-500';
      case 'update':
        return 'border-l-green-500';
      case 'alert':
        return 'border-l-red-500';
      case 'subscription':
        return 'border-l-purple-500';
      default:
        return 'border-l-primary-500';
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <Bell size={20} className="text-white/70" />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold"
          >
            {unreadCount}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-12 right-0 w-80 glass-dark rounded-lg p-4 z-40 max-h-96 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white">Notifications</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/50 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {notifications.length === 0 ? (
                <p className="text-white/50 text-sm py-8 text-center">No notifications</p>
              ) : (
                <div className="space-y-3">
                  {notifications.map((notif) => (
                    <motion.div
                      key={notif.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onClick={() => markAsRead(notif.id)}
                      className={`p-3 rounded-lg border-l-4 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors ${getTypeColor(
                        notif.type
                      )}`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="font-medium text-white text-sm">{notif.title}</p>
                          <p className="text-white/60 text-xs mt-1">{notif.content}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notif.id);
                          }}
                          className="text-white/50 hover:text-white"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export { NotificationCenter };
