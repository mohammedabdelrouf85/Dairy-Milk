import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Impact & Sales', href: '#impact' },
    { name: 'Craft Journey', href: '#story' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-cadbury-cream/90 dark:bg-cadbury-purple-dark/90 border-b border-cadbury-gold/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <span className="font-accent text-xl sm:text-3xl font-bold tracking-wider text-cadbury-purple dark:text-cadbury-gold group-hover:scale-105 transition-transform">
            Cadbury
          </span>
          <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cadbury-gold/20 text-cadbury-purple dark:text-cadbury-gold border border-cadbury-gold/30">
            Dairy Milk
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-cadbury-purple/90 dark:text-cadbury-cream/90 hover:text-cadbury-gold dark:hover:text-cadbury-gold transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cadbury-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#impact"
            className="px-5 py-2.5 rounded-full bg-gold-gradient text-cadbury-purple-dark font-bold text-xs shadow-md hover:shadow-gold-glow transition-all duration-300"
          >
            Explore Joy
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2.5 rounded-xl bg-cadbury-gold/20 text-cadbury-purple dark:text-cadbury-gold border border-cadbury-gold/30 active:scale-95 transition-transform"
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cadbury-purple-dark text-white border-b border-cadbury-gold/30 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-serif py-2 text-cadbury-cream hover:text-cadbury-gold border-b border-white/5 active:bg-white/5 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#impact"
                onClick={() => setIsOpen(false)}
                className="mt-2 py-3 rounded-full bg-gold-gradient text-cadbury-purple-dark font-bold text-sm shadow-md text-center"
              >
                Explore Joy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
