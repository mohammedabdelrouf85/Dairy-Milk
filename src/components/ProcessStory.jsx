import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaGlassWater, FaFire, FaGift } from 'react-icons/fa6';

export const ProcessStory = () => {
  const steps = [
    {
      step: '01',
      title: 'Sustainably Harvested Cocoa',
      subtitle: 'From Cocoa Life Farms',
      desc: 'Selected from certified 100% sustainable cocoa farms in Ghana and West Africa, ensuring fair livelihoods for local farming communities.',
      icon: FaSeedling,
      image: '/assets/images/cadbury-cocoa-beans.png',
    },
    {
      step: '02',
      title: 'A Glass & A Half of Milk',
      subtitle: 'Pure Dairy Richness',
      desc: 'Fresh liquid milk sourced from local British dairy farms is condensed and poured directly into every batch, creating Cadbury\'s signature creamy melt.',
      icon: FaGlassWater,
      image: '/assets/images/cadbury-luxury-table.jpg',
    },
    {
      step: '03',
      title: 'Velvety Conching & Refining',
      subtitle: 'Mastering Flavor & Texture',
      desc: 'Slowly stirred and aerated for hours to develop that velvety smooth, melt-in-the-mouth texture unique to Cadbury Dairy Milk.',
      icon: FaFire,
      image: '/assets/images/cadbury-conching-melt.png',
    },
    {
      step: '04',
      title: 'The Iconic Purple Wrapper',
      subtitle: 'Sealed for Pure Joy',
      desc: 'Wrapped in our legendary Royal Purple and Gold foil pack, preserving freshness and tradition since 1905.',
      icon: FaGift,
      image: '/assets/images/cadbury-truffles-flatlay.jpg',
    },
  ];

  return (
    <section id="story" className="py-28 px-6 sm:px-12 relative overflow-hidden bg-cadbury-milk dark:bg-cadbury-purple-deep transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-cadbury-purple dark:text-cadbury-gold border border-cadbury-gold/40 px-4 py-1.5 rounded-full inline-block mb-4 bg-cadbury-gold/10"
          >
            Bean to Bar Craftsmanship
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-cadbury-purple dark:text-white mb-6 leading-tight"
          >
            The Journey of <br />
            <span className="text-gold-gradient italic font-normal">Pure Chocolate Perfection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cadbury-chocolate/80 dark:text-cadbury-cream/80 text-lg leading-relaxed"
          >
            Discover how raw cocoa beans are transformed into the world’s most beloved purple chocolate bar through a legacy of passion.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          
          {/* Steps */}
          <div className="space-y-20 lg:space-y-24">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="text-3xl font-accent font-bold text-cadbury-gold">
                        {item.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-cadbury-purple/10 dark:bg-cadbury-gold/15 text-cadbury-purple dark:text-cadbury-gold border border-cadbury-gold/30">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cadbury-purple dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-serif italic text-cadbury-gold-dark dark:text-cadbury-gold mb-4 font-semibold">
                      {item.subtitle}
                    </p>
                    <p className="text-cadbury-chocolate/80 dark:text-cadbury-cream/80 text-base leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: isEven ? 1.5 : -1.5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-cadbury-gold/40 group aspect-[4/3]"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cadbury-purple-deep/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic">
                        Cadbury Craftsmanship • Step {item.step}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
