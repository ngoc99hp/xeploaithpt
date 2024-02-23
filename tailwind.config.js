/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0083C2'
      }
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 1024px) { ... }
      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      // "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      // smallTablet: "600px",
    },
  },
  plugins: [],
}