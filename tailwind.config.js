/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alabaster': '#FDFBF7',      // Primary background
        'parchment': '#EFEAE2',      // Secondary panels/footer
        'saddle-brown': '#8B4513',   // Accent
        'dark-lava': '#4A2C2A',      // Primary text
        'beaver': '#7E6C6C',         // Secondary text
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}