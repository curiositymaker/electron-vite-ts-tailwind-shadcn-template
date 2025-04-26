// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/renderer/index.html', // Path to the main HTML file
    './src/renderer/src/**/*.{js,ts,jsx,tsx}', // Path to renderer source files
    './src/renderer/src/components/**/*.{js,ts,jsx,tsx}' // Add/Ensure this specifically targets components
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
