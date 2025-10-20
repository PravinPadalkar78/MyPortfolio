/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',    // blue
        secondary: '#10b981',  // green
        accent: '#f97316'      // orange
      }
    }
  },
  plugins: []
}
