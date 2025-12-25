export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        fg: '#E6EDF3',
        muted: '#9AA3AD',
        accent: '#4B6B88',
        panel: '#111821',
        line: '#1F2A36',
        ink: '#07101A',
      },
      boxShadow: {
        soft: '0 0 0 1px rgba(31,41,51,0.7)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translate3d(0,10px,0)' },
          '100%': { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
        pulseLine: {
          '0%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '0.35' },
        },
      },
      animation: {
        drift: 'drift 8s ease-in-out infinite',
        fadeUp: 'fadeUp 700ms ease-out both',
        pulseLine: 'pulseLine 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}