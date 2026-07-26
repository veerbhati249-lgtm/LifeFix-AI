import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'AI Chat', path: '/tools/chat' },
    { label: 'Tools', path: '/tools' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <RouterLink
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-gradient"
            >
              <span className="text-primary-500">⚡</span>
              LifeFix AI
            </RouterLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <RouterLink
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </RouterLink>
              </motion.div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Auth Buttons */}
            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <RouterLink
                  to="/dashboard"
                  className="px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors"
                >
                  Dashboard
                </RouterLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <RouterLink
                  to="/login"
                  className="px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors"
                >
                  Login
                </RouterLink>
                <RouterLink
                  to="/signup"
                  className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                >
                  Sign Up
                </RouterLink>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <RouterLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/70 hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </RouterLink>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {user ? (
                    <>
                      <RouterLink
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors"
                      >
                        Dashboard
                      </RouterLink>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <RouterLink
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors"
                      >
                        Login
                      </RouterLink>
                      <RouterLink
                        to="/signup"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                      >
                        Sign Up
                      </RouterLink>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gradient mb-4">LifeFix AI</h3>
            <p className="text-white/60 text-sm">Premium AI platform for solving everyday problems.</p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/tools" className="text-white/60 hover:text-white transition-colors">AI Tools</a></li>
              <li><a href="/pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/docs" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-white/60 hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" className="text-white/60 hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" className="text-white/60 hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://discord.com" className="text-white/60 hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center text-white/50 text-sm"
        >
          <p>&copy; 2024 LifeFix AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-900">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export { Navigation, Footer, Layout };
