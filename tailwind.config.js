/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ovo: ["var(--font-ovo)", "serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors:{
        lightHover:'#fcf4ff',
        darkHover:"#2a004a",
        darkTheme:'#11001f'
      },
    },
  },
  plugins: [],
};
