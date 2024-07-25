/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary':"#FF1493",
        "white-primary":"#FFFAFA",
        "dark-primary":"#474554",
        "blue-primary":"#0000FF",

    }},
  },
  plugins: [],
}

