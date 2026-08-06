import React from 'react';
import { FaHeart, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-cadbury-purple-deep text-cadbury-cream py-16 px-6 sm:px-12 border-t border-cadbury-gold/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        
        {/* Brand info */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-accent text-3xl font-bold text-cadbury-gold">Cadbury</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cadbury-gold/20 text-cadbury-gold border border-cadbury-gold/30">
              Dairy Milk
            </span>
          </div>
          <p className="text-cadbury-cream/70 font-sans text-sm max-w-sm leading-relaxed">
            Crafted with a glass and a half of pure fresh milk since 1905. Bringing velvety smooth joy to families worldwide.
          </p>
          <div className="flex gap-4 mt-2">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 text-cadbury-gold border border-cadbury-gold/30 flex items-center justify-center hover:bg-cadbury-gold hover:text-cadbury-purple-dark transition-all duration-300 shadow-md"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="font-serif font-bold text-lg text-cadbury-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cadbury-cream/70">
            <li><a href="#impact" className="hover:text-cadbury-gold transition-colors">Global Impact</a></li>
            <li><a href="#story" className="hover:text-cadbury-gold transition-colors">Crafting Process</a></li>
            <li><a href="#reviews" className="hover:text-cadbury-gold transition-colors">Customer Reviews</a></li>
            <li><a href="#" className="hover:text-cadbury-gold transition-colors">Sustainability & Cocoa Life</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4">
          <h4 className="font-serif font-bold text-lg text-cadbury-gold mb-4">Unwrap Pure Joy</h4>
          <p className="text-xs text-cadbury-cream/70 mb-4">
            Subscribe for exclusive recipes, seasonal edition releases, and Cadbury stories.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 rounded-full bg-white/10 text-white placeholder-cadbury-cream/40 border border-cadbury-gold/30 text-sm flex-grow focus:outline-none focus:border-cadbury-gold"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-gold-gradient text-cadbury-purple-dark font-bold text-xs shadow-md hover:shadow-gold-glow transition-all"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-cadbury-cream/60 gap-4">
        <p>© {new Date().getFullYear()} Mondelēz International / Cadbury Dairy Milk. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <FaHeart className="w-3.5 h-3.5 text-red-400 inline" /> for chocolate lovers everywhere
        </p>
      </div>
    </footer>
  );
};
