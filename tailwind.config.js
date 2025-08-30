/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'golf-ink': 'var(--color-golf-ink)',
        'golf-paper': 'var(--color-golf-paper)',
        'golf-accent': 'var(--color-golf-accent)',
        'golf-border': 'var(--color-golf-border)',
        'golf-green': 'var(--color-golf-green)',
        'golf-green-2': 'var(--color-golf-green-2)',
        'golf-water': 'var(--color-golf-water)',
      },
      fontFamily: {
        'sans': ['var(--font-sans)'],
        'mono': ['var(--font-mono)'],
        'display': ['var(--font-display)'],
      },
    },
  },
  plugins: [],
}