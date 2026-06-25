import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  '#4D59B7',
          green: '#9BC74A',
          pink:  '#CC00BE',
          dark:  '#060D2A',
          gray:  '#F4F6FF',
        },
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
      },
      animation: {
        'float-slow':   'float 30s ease-in-out infinite',
        'float-medium': 'float 20s ease-in-out infinite',
        'float-fast':   'float 15s ease-in-out infinite',
        marquee:        'marquee 30s linear infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'spin-slow':    'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)',    opacity: '0.08' },
          '25%':      { transform: 'translateY(-30px) rotate(90deg)', opacity: '0.15' },
          '50%':      { transform: 'translateY(-15px) rotate(180deg)',opacity: '0.06' },
          '75%':      { transform: 'translateY(-45px) rotate(270deg)',opacity: '0.12' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(77,89,183,0.3)' },
          '50%':      { boxShadow: '0 0 60px rgba(77,89,183,0.6), 0 0 100px rgba(155,199,74,0.2)' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4D59B7 0%, #CC00BE 100%)',
        'gradient-green': 'linear-gradient(135deg, #9BC74A 0%, #4D59B7 100%)',
      },
      boxShadow: {
        'card-hover': '0 20px 60px rgba(77,89,183,0.25)',
        card:         '0 4px 24px rgba(77,89,183,0.08)',
        'glow-pink':  '0 0 30px rgba(204,0,190,0.4)',
        'glow-blue':  '0 0 30px rgba(77,89,183,0.4)',
      },
    },
  },
  plugins: [],
}

export default config

