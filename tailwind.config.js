/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1120px",
        xlAbove: "1150px",
      },
      fontSize: {
        'clamp-lg': 'clamp(1.5rem, 4vw, 2.5rem)',
      },
      borderRadius: {
        "btn": "3px"
      }
    },
  },
  plugins: [],
};
