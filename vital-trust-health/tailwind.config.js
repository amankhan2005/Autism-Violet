/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F5D5E",   // teal vibe 🔥
        secondary: "#F5F7F6",
      },
    },
  },
  plugins: [],
}