import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1B2A1E',
        'primary-accent': '#4A7C59',
        'cta': '#D4A037',
        'site-bg': '#FAFAF8',
        'site-text': '#1a1a1a',
        'muted': '#666666',
        'card-bg': '#FFFFFF',
        'border': '#E8E8E4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
