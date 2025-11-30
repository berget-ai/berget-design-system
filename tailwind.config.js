/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--berget-border) / <alpha-value>)',
        input: 'hsl(var(--berget-input) / <alpha-value>)',
        ring: 'hsl(var(--berget-ring) / <alpha-value>)',
        background: 'hsl(var(--berget-background) / <alpha-value>)',
        foreground: 'hsl(var(--berget-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--berget-primary) / <alpha-value>)',
          foreground: 'hsl(var(--berget-primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--berget-secondary) / <alpha-value>)',
          foreground: 'hsl(var(--berget-secondary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--berget-accent) / <alpha-value>)',
          foreground: 'hsl(var(--berget-accent-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--berget-muted) / <alpha-value>)',
          foreground: 'hsl(var(--berget-muted-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--berget-card) / <alpha-value>)',
          foreground: 'hsl(var(--berget-card-foreground) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['Ovo', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}