/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'recyclable': '#2563eb',
        'hazardous': '#dc2626',
        'kitchen': '#16a34a',
        'other': '#9333ea'
      }
    },
  },
  plugins: [],
}