/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(0.5deg)" },
          "40%": { transform: "rotate(-0.5deg)" },
          "60%": { transform: "rotate(0.5deg)" },
          "80%": { transform: "rotate(-0.5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
