/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',       // Darker primary background
        secondary: '#1e1e1e',     // Slightly lighter secondary background (cards, form)
        accent: '#f0f0f0',        // Off-white for text and main accents
        spiritual: '#7c4dff',    // Vibrant spiritual purple accent
        subtle: '#4a4a4a',       // Subtle gray for less important text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // More elegant serif font
      },
      boxShadow: {
        'glow-spiritual': '0 0 20px rgba(124, 77, 255, 0.7)', // Spiritual purple glow
        'card': '0 5px 15px rgba(0,0,0,0.3)', // Card shadow
      },
      transitionDuration: {
        'slow': '300ms', // Custom slow transition duration
      },
    },
  },
  plugins: [],
}
