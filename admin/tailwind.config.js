/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // includes all JS/TSX/JSX files inside src
  ],
  theme: {
    extend: {
        colors:{
            'primary':"#5F6FFF"
        }
    },
  },
  plugins: [],
};
