import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        // Brand palette — warm spice red-orange (primary), luxury gold,
        // cream, bright orange accent. The `forest` key is kept as the brand
        // primary token so the whole site reskins from this one scale.
        forest: {
          DEFAULT: '#BE3A2B',
          50: '#FCEFEA',
          100: '#F8D8CD',
          400: '#E07150',
          500: '#D14D31',
          600: '#BE3A2B',
          700: '#8F2A1C',
          900: '#591407',
        },
        gold: {
          DEFAULT: '#C8A04B',
          50: '#FBF6E9',
          100: '#F3E7C4',
          400: '#D4B062',
          500: '#C8A04B',
          600: '#A9843A',
        },
        cream: {
          DEFAULT: '#FBF7EF',
          100: '#FFFDF8',
          200: '#F5EEDF',
        },
        ember: {
          DEFAULT: '#F2682E',
          400: '#F78A52',
          500: '#F2682E',
          600: '#D9531C',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 24px 60px -20px rgba(143, 42, 28, 0.30)',
        card: '0 14px 40px -18px rgba(143, 42, 28, 0.20)',
        gold: '0 12px 36px -14px rgba(200, 160, 75, 0.45)',
      },
      backgroundImage: {
        'gold-sheen':
          'linear-gradient(120deg, #A9843A 0%, #E7CD86 35%, #C8A04B 60%, #A9843A 100%)',
        'forest-radial':
          'radial-gradient(120% 120% at 50% 0%, #D14D31 0%, #BE3A2B 45%, #591407 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
