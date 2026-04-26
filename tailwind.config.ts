import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        pearl: 'var(--bg-pearl)',
        dark: 'var(--bg-dark)',
        blush: 'var(--blush)',
        rose: 'var(--rose)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slowZoom 24s ease-in-out infinite alternate',
        grain: 'grain 0.8s steps(1) infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        grain: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '10%': { backgroundPosition: '-5% -10%' },
          '30%': { backgroundPosition: '-15% 5%' },
          '50%': { backgroundPosition: '7% -25%' },
          '70%': { backgroundPosition: '20% 10%' },
          '90%': { backgroundPosition: '-1% 15%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
