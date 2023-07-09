/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'center': '0 0 15px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        'light-background': '#fca5a5', // color corresponding to rose-300
        'light-text': '#111827', // color corresponding to gray-900
        'light-accent': '#7379BF', // dark blue
        'light-accent-hover': '#97A0FC', // blue
        'light-secondary': '#FC8B8B', // pink
        'light-secondary-hover': '#BF7C7C', // dark pink
        'light-nav-text': '#1f2937', // color corresponding to gray-800
        'light-nav-hover': '#6b7280', // color corresponding to gray-500
        'bonus-color': '#8BFCAB', // green

        'dark-background': '#e11d48', // color corresponding to rose-600
        'dark-accent': '#5eead4', // color corresponding to sky-300
        'dark-accent-hover': '#0d9488', // color corresponding to sky-600
        'dark-secondary': '#f3f4f6', // color corresponding to rose-300
        'dark-secondary-hover': '#ef4444', // color corresponding to rose-500
        'dark-text': '#f3f4f6', // color corresponding to gray-100
        'dark-nav-text': '#e5e7eb', // color corresponding to gray-200
        'dark-nav-hover': '#6b7280', // color corresponding to gray-500
        'bonus-color': '#8BFCAB' // green
      }
    }
  }
}

