/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Piedra Quieta brand palette
        graphite: '#33312C',
        sage: '#7C8567',
        clay: '#C98358',
        cream: '#FBF8F2',
        sand: '#F2ECDF',
        // semantic tokens mapped onto the brand palette
        primary: '#C98358',
        'primary-dark': '#A56B48',
        'primary-light': '#DAAB8D',
        accent: '#7C8567',
        'accent-dark': '#666D54',
        background: '#FBF8F2',
        surface: '#FFFFFF',
        ink: '#33312C',
        muted: '#6C6962',
        divider: '#E7E1D4',
        deep: '#33312C',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'system-ui', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
        body: ['"Karla"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
