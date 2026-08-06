import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa6';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Lady Victoria Kensington',
      role: 'Chocolate Connoisseur',
      location: 'London, UK',
      rating: 5,
      quote:
        'Nothing in the world comes close to that iconic glass-and-a-half milkiness. Cadbury Dairy Milk has been my supreme comfort chocolate for over 25 years!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      name: 'Chef Antoine Dubois',
      role: 'Pastry & Chocolatier Master',
      location: 'Paris, France',
      rating: 5,
      quote:
        'The melt-in-the-mouth texture is an achievement of pure confectionery art. You can genuinely taste the rich dairy heritage and slow conching in every block.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 3,
      name: 'Sophia Reynolds',
      role: 'Culinary Journalist',
      location: 'Melbourne, Australia',
      rating: 5,
      quote:
        'Unwrapping that iconic purple foil instantly takes me back to childhood moments with family. It is more than chocolate—it is pure nostalgia and warmth.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 4,
      name: 'Marcus Vance',
      role: 'Food & Wine Critic',
      location: 'New York, USA',
      rating: 5,
      quote:
        'Cadbury Dairy Milk remains the gold standard of milk chocolate. Smooth, perfectly sweet, and satisfying in a way no artisanal pretender can match.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const current = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-24 px-6 sm:px-12 relative overflow-hidden bg-cadbury-purple-dark text-white">
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cadbury-purple-light/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-cadbury-gold border border-cadbury-gold/40 px-4 py-1.5 rounded-full inline-block mb-4 bg-cadbury-gold/10"
          >
            Loved Around The World
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4"
          >
            Velvety Praises & <br />
            <span className="text-gold-gradient italic font-normal">Cherished Memories</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="w-full p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-2xl border border-cadbury-gold/40 shadow-2xl relative text-center flex flex-col items-center justify-between"
            >
              <FaQuoteLeft className="w-10 h-10 text-cadbury-gold/30 mb-6" />

              {/* Star Rating */}
              <div className="flex gap-1.5 justify-center mb-6 text-cadbury-gold">
                {[...Array(current.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl font-serif italic text-cadbury-cream leading-relaxed mb-8 max-w-3xl">
                "{current.quote}"
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cadbury-gold shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-lg text-cadbury-gold">
                    {current.name}
                  </h4>
                  <p className="text-xs text-cadbury-cream/70 font-sans">
                    {current.role} • {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous Review"
            className="absolute left-[-20px] sm:left-[-28px] top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-cadbury-purple-deep/90 border border-cadbury-gold text-cadbury-gold shadow-gold-glow hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Next Review"
            className="absolute right-[-20px] sm:right-[-28px] top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-cadbury-purple-deep/90 border border-cadbury-gold text-cadbury-gold shadow-gold-glow hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-cadbury-gold shadow-gold-glow'
                  : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
