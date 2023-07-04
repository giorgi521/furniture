/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      textHv: "#1FD4AB",
      gold: "#c19a83",
      gray: "	#707070",
      darkGray:"#F1F2F2",
      lightGray:"rgba(0,0,0,0.07)",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};