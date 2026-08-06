/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cadbury: {
          purple: '#4A0E4E',
          'purple-dark': '#2A052D',
          'purple-deep': '#1A021C',
          'purple-light': '#6B1A70',
          gold: '#E5C158',
          'gold-light': '#F8E8A6',
          'gold-dark': '#B89028',
          cream: '#FFF9EF',
          'cream-dark': '#F5EBE0',
          milk: '#FDFBF7',
          chocolate: '#3D1E13',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        accent: ['Cinzel Decorative', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 193, 88, 0.35)',
        'purple-glow': '0 0 30px rgba(74, 14, 78, 0.5)',
      }
    },
  },
  plugins: [],
}
