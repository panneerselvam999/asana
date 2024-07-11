/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sms: "375px",
        sml: "500px",
        sm560: "560px",
        sm640: "640px",
        mdl: "850px",
        lgs: "960px",
        xl: "1120px",
        xlAbove: "1150px",
      },
      fontSize: {
        "clamp-lg": "clamp(1.5rem, 4vw, 2.5rem)",
      },
      borderRadius: {
        btn: "3px",
      },
      width: {
        'fluid': 'clamp(1rem, 2.5vw, 4rem)', // Example usage
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
};
