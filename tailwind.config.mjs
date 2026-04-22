/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Geist', 'sans-serif'],
        display: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        cream: '#f7f4ef',
        ink: '#1a1a18',
        muted: '#6b6b65',
        accent: '#2d6a4f',
        'accent-light': '#d8f3dc',
      },
    },
  },
  plugins: [],
}
