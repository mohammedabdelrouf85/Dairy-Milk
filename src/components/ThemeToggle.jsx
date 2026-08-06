import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.12, rotate: 12 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label="Toggle Dark/Light Theme"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full shadow-2xl transition-all duration-200 border-2 bg-white/90 dark:bg-cadbury-purple-dark/95 backdrop-blur-md border-cadbury-gold/60 dark:border-cadbury-gold text-cadbury-purple dark:text-cadbury-gold shadow-gold-glow flex items-center justify-center cursor-pointer group"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <FaSun className="w-5 h-5 group-hover:text-amber-300 transition-colors" />
        ) : (
          <FaMoon className="w-5 h-5 group-hover:text-cadbury-purple-light transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
};
