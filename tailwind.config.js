/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        pulse: "pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
