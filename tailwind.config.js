/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'euphoria': ['Allura', 'cursive'],
      },
      maxWidth: {
        'custom': '300px',
      }
    }
  }
}

