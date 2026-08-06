import React from 'react';
import { motion } from 'framer-motion';
import { FaWandMagicSparkles, FaArrowRight } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';

export const Hero = () => {
  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 350, damping: 25 },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 px-6 sm:px-12 bg-gradient-to-b from-transparent via-cadbury-purple/5 to-transparent dark:via-cadbury-purple-dark/30">
      
      {/* Decorative 2D Splash & Glow Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cadbury-purple/20 dark:bg-cadbury-purple-light/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cadbury-gold/15 dark:bg-cadbury-gold/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Floating 2D Chocolate & Milk Drops SVG Art */}
      <motion.svg
        className="absolute top-12 left-[8%] w-16 h-16 text-cadbury-gold/40 dark:text-cadbury-gold/30 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-24 left-[5%] w-24 h-24 text-cadbury-purple/20 dark:text-cadbury-gold/20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 15 C30 15 20 40 20 60 C20 80 35 90 50 90 C65 90 80 80 80 60 C80 40 70 15 50 15 Z" />
      </motion.svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        
        {/* Left Column: Premium Text & Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cadbury-gold/15 dark:bg-cadbury-gold/10 border border-cadbury-gold/40 text-cadbury-purple dark:text-cadbury-gold text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm">
            <FaWandMagicSparkles className="w-3.5 h-3.5 text-cadbury-gold animate-pulse" />
            <span>Crafting Pure Joy Since 1905</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-cadbury-purple dark:text-white leading-[1.1] tracking-tight mb-6"
          >
            A Glass and a Half of <br />
            <span className="text-gold-gradient font-normal italic relative inline-block">
              Pure Joy
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-cadbury-gold/60" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-cadbury-chocolate/80 dark:text-cadbury-cream/90 max-w-xl font-sans leading-relaxed mb-8"
          >
            Indulge in the iconic, velvet-smooth taste of real milk chocolate. Made with fresh glass-and-a-half milk from British farms for over a century.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <motion.a
              href="#impact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 py-4 rounded-full bg-gold-gradient text-cadbury-purple-dark font-bold text-base shadow-lg shadow-cadbury-gold/30 hover:shadow-gold-glow flex items-center justify-center gap-3 transition-shadow duration-300"
            >
              <span>Explore Legacy</span>
              <FaArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#story"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 py-4 rounded-full bg-cadbury-purple/10 dark:bg-white/10 text-cadbury-purple dark:text-white font-semibold text-base border border-cadbury-purple/30 dark:border-white/20 backdrop-blur-md flex items-center justify-center gap-2 hover:bg-cadbury-purple/20 dark:hover:bg-white/20 transition-colors"
            >
              <FaHeart className="w-4 h-4 text-cadbury-purple dark:text-cadbury-gold" />
              <span>Our Process</span>
            </motion.a>
          </motion.div>

          {/* Key Metrics Pill */}
          <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-cadbury-purple/10 dark:border-white/10 flex items-center gap-8 text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-cadbury-purple dark:text-cadbury-gold">100%</p>
              <p className="text-xs uppercase tracking-wider text-cadbury-purple/70 dark:text-cadbury-cream/70 font-semibold">Sustainably Sourced</p>
            </div>
            <div className="h-8 w-px bg-cadbury-purple/20 dark:bg-white/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-cadbury-purple dark:text-cadbury-gold">1.5</p>
              <p className="text-xs uppercase tracking-wider text-cadbury-purple/70 dark:text-cadbury-cream/70 font-semibold">Glasses of Milk / Bar</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Fully Visible Static Luxury Cadbury Showcase Image */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Ambient Glow Disk */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cadbury-purple/40 to-cadbury-gold/30 rounded-3xl blur-2xl transform scale-95" />

          {/* Main Card Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md p-3 sm:p-4 rounded-3xl bg-white/10 dark:bg-cadbury-purple-dark/90 backdrop-blur-xl border-2 border-cadbury-gold/50 shadow-2xl overflow-hidden group"
          >
            {/* Card Image Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cadbury-purple-deep flex items-center justify-center">
              <img
                src="./assets/images/cadbury-luxury-table.jpg"
                alt="Cadbury Dairy Milk Luxury Chocolate Table"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-cadbury-purple-deep/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Gold Badge on Card */}
              <div className="absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-xl bg-cadbury-purple-dark/90 backdrop-blur-md border border-cadbury-gold/60 text-center shadow-xl">
                <p className="text-xs font-serif font-bold text-cadbury-gold tracking-widest uppercase">
                  Milk Chocolate • Velvety Smooth
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
