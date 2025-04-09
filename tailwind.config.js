// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
        sm: '340px',
        lg: '1024px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    plugins: [],
  }
  