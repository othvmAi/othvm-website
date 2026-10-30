import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6C3BFF',
          'purple-glow': '#9B6DFF',
          dark: '#09090D',
          white: '#FFFFFF',
          'soft-white': '#F5F3FA',
        },
      },
      fontFamily: {
        arabic: ['var(--font-noto-kufi)', 'sans-serif'],
        english: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 0.3s infinite',
        'float-delayed-2': 'float 4s ease-in-out 0.6s infinite',
        'float-delayed-3': 'float 4s ease-in-out 0.9s infinite',
        'float-delayed-4': 'float 4s ease-in-out 1.2s infinite',
        'chevron-bounce': 'chevronBounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        chevronBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
