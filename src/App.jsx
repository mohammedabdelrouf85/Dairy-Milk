import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlobalImpact } from './components/GlobalImpact';
import { ProcessStory } from './components/ProcessStory';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cadbury-milk dark:bg-cadbury-purple-deep text-cadbury-chocolate dark:text-cadbury-cream transition-colors duration-300 relative overflow-x-hidden selection:bg-cadbury-gold selection:text-cadbury-purple-dark">
        {/* Sticky Glassmorphism Header */}
        <Navbar />

        {/* Core Animated Sections */}
        <main>
          <Hero />
          <GlobalImpact />
          <ProcessStory />
          <Testimonials />
        </main>

        {/* Luxury Footer */}
        <Footer />

        {/* Fixed Bottom-Right Theme Toggle */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
