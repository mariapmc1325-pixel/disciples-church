/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Disciples Church brand palette
        green: '#1C5A38',
        gold: '#B98A32',
        espresso: '#332A1C',
        sand: '#EFE3CC',
        ivory: '#FAF6EC',
        // semantic tokens mapped onto the brand palette
        primary: '#1C5A38',
        'primary-dark': '#144328',
        'primary-light': '#3C7A56',
        accent: '#B98A32',
        'accent-dark': '#96701F',
        background: '#FAF6EC',
        surface: '#FFFFFF',
        ink: '#332A1C',
        muted: '#6B6153',
        divider: '#E4D9C0',
        deep: '#332A1C',
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
