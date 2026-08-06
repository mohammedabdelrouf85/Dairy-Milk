import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGlobe, FaAward, FaSeedling, FaGlassWater } from 'react-icons/fa6';

const Counter = ({ value, suffix = '', duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = parseFloat(value);
    const isFloat = value.toString().includes('.');
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export const GlobalImpact = () => {
  const stats = [
    {
      id: 'sales',
      number: 350,
      suffix: 'M+',
      label: 'Bars Sold Annually',
      desc: 'Distributed across over 70 countries worldwide',
      icon: FaGlobe,
    },
    {
      id: 'heritage',
      number: 1905,
      suffix: '',
      label: 'Crafting Joy Since',
      desc: 'Over 120 years of chocolate innovation',
      icon: FaAward,
    },
    {
      id: 'sustainability',
      number: 100,
      suffix: '%',
      label: 'Sustainable Cocoa',
      desc: 'Partnered with Cocoa Life for ethical farming',
      icon: FaSeedling,
    },
    {
      id: 'milk',
      number: 1.5,
      suffix: ' Glasses',
      label: 'Pure Milk / Bar',
      desc: 'Fresh glass and a half in every bar',
      icon: FaGlassWater,
    },
  ];

  return (
    <section id="impact" className="py-24 px-6 sm:px-12 relative overflow-hidden bg-cadbury-purple-dark dark:bg-cadbury-purple-deep text-white">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cadbury-purple-light/20 via-transparent to-transparent pointer-events-none" />

      {/* Decorative Gold Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-cadbury-gold/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-cadbury-gold border border-cadbury-gold/40 px-4 py-1.5 rounded-full inline-block mb-4 bg-cadbury-gold/10"
          >
            Global Impact & Heritage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Bringing Smiles Across <br />
            <span className="text-gold-gradient italic font-normal">The Entire Globe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cadbury-cream/80 text-lg leading-relaxed"
          >
            From Bournville, Birmingham to millions of homes around the world, our commitment to quality and joy remains unbroken.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-cadbury-gold/30 hover:border-cadbury-gold shadow-xl hover:shadow-gold-glow transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cadbury-gold/20 text-cadbury-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cadbury-gold group-hover:text-cadbury-purple-dark transition-all duration-300 border border-cadbury-gold/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-serif font-bold text-cadbury-gold mb-2 tracking-tight">
                    <Counter value={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xl font-serif font-semibold text-white mb-2">
                    {stat.label}
                  </p>
                </div>
                <p className="text-sm text-cadbury-cream/70 font-sans leading-relaxed pt-4 border-t border-white/10">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
