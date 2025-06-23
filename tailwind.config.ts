import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        'xl': '1200px',
        'lg': '1000px',
        'md': '800px',
        'sm': '600px',
      }
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#003319', // Fixed: Added missing digit
          200: 'rgba(17,25,40,0.75)',
          300: 'rgba(255,255,255,0.125)',
        },
        white: {
          DEFAULT: '#fff',
          100: '#BEC1DD',
          200: '#C1C2D3', // Fixed: Changed 'CIC2D3' to 'C1C2D3'
        },
        blue: {
          100: '#E4ECFF',
        },
        purple: {
          DEFAULT: '#CBACF9',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config