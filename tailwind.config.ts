import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          2: 'var(--color-paper-2)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          2: 'var(--color-ink-2)',
        },
        accent: {
          pear: 'var(--color-accent-pear)',
          cyan: 'var(--color-accent-cyan)',
          coral: 'var(--color-accent-coral)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px -10px var(--color-shadow)',
      },
      borderRadius: {
        card: '12px',
        input: '8px',
        pill: '999px',
      }
    }
  }
}
