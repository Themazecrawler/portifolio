/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Plus Jakarta Sans', 'sans-serif'],
        pixel: ['Pixelify Sans', 'Syne', 'sans-serif'],
      },
      colors: {
        // Brand accent family — values come from :root in src/index.css
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-deep': 'var(--color-accent-deep)',
        'accent-light': 'var(--color-accent-light)',
        'accent-soft': 'var(--color-accent-soft)',
        // Secondary duotone pop accent (retro-arcade partner to pink)
        pop: 'var(--color-pop)',
        'pop-dark': 'var(--color-pop-dark)',
        'pop-light': 'var(--color-pop-light)',
        // Neutrals
        bg: 'var(--color-bg)',
        ink: 'var(--color-ink)',
        surface: 'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-faint': 'var(--color-text-faint)',
      },
      borderRadius: {
        chunky: 'var(--radius-chunky)',
        card: 'var(--radius-card)',
        input: 'var(--radius-input)',
      },
    },
  },
  plugins: [],
};
