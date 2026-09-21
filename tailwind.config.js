/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0F202C',
          primary: '#163146',
          medium: '#20435E',
          light: '#2E597B',
          subtle: '#EDF3F7',
        },
        gold: {
          primary: '#D4B583',
          light: '#EBDCBF',
          dark: '#AA8852',
          glow: 'rgba(212, 181, 131, 0.15)',
        },
        clinical: {
          bg: '#F6F8FA',
          surface: '#FFFFFF',
          border: '#E3E9EE',
          muted: '#5A7387',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(22, 49, 70, 0.05)',
        'elevated': '0 12px 32px -4px rgba(22, 49, 70, 0.08), 0 2px 6px -1px rgba(22, 49, 70, 0.04)',
        'floating': '0 20px 48px -8px rgba(15, 32, 44, 0.12), 0 4px 12px rgba(212, 181, 131, 0.08)',
        'gold-glow': '0 0 30px rgba(212, 181, 131, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
