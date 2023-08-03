/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "intro-mobile": "url('/images/bg-intro-mobile.png')",
        "intro-desktop": "url('/images/bg-intro-desktop.png')",
      },
      colors: {
        "primary-1": "hsl(0, 100%, 74%)",
        "primary-2": "hsl(154, 59%, 51%)",
        "primary-2-dark": "hsl(154, 59%, 40%)",
        accent: "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
      },
    },
  },
  plugins: [],
};
