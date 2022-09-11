/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#38414F',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
