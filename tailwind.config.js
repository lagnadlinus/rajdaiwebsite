/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2F855A', // Deep green - trust, nature -- Brand Color
          secondary: '#8B5E3C', // Earthy brown - timber, soil  -- Barnd Color
          accent: '#A3D977', // Fresh leafy green - vitality  -- Brand Color
          highlight: '#F6AD55', // Warm yellow - attention -- Brand Color
          light: '#FAF9F6', // Soft neutral background
          dark: '#1F2937', // Strong deep dark - nav/footer
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },

      fontFamily: {
        sans: ['"Sora"', ...fontFamily.sans],
        display: ['"Space Grotesk"', ...fontFamily.sans],
        code: ['"Source Code Pro"', ...fontFamily.mono],
      },

      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
        'section-lg': '7rem',
        'container': '1.5rem',
      },

      letterSpacing: {
        wider: '.05em',
        widest: '.1em',
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },

      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)',
        focus: '0 0 0 3px rgba(163, 217, 119, 0.5)',
      },

      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.webp')",
        'hero-gradient': "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        'wood-texture': "url('/src/assets/images/wood-texture.webp')",

        'logo': "url('/src/assets/images/logo.svg')",
      },

      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        '.container': {
          '@apply max-w-screen-xl mx-auto px-container': {},
        },
        '.btn-primary': {
          '@apply bg-brand-accent text-brand-dark font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:brightness-110 transition duration-200':
            {},
        },
        '.btn-outline': {
          '@apply border border-brand-accent text-brand-accent px-6 py-3 rounded-xl hover:bg-brand-accent hover:text-brand-dark transition':
            {},
        },
        '.section-title': {
          '@apply font-display text-3xl md:text-4xl font-bold text-brand-primary mb-6':
            {},
        },
        '.card': {
          '@apply bg-white shadow-card rounded-xl p-6 transition hover:shadow-lg':
            {},
        },
      });

      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    }),
  ],
};
