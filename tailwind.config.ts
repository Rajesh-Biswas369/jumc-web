// tailwind.config.ts
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
        acoustic: {
          bg: '#F7EBD0',
          surface: '#FFF6E3',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          muted: '#4A4A4A',
        },
        crimson: {
          DEFAULT: '#E60026',
          glow: 'rgba(230, 0, 38, 0.2)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
