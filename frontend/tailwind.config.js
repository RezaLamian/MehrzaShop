/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        unset: "unset",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: (theme) => ({
        "dark-gradient": "linear-gradient(135deg, black 50%, #cb1a42 50%)",
        "light-gradient": "linear-gradient(135deg, white 50%, #cb1a42 50%)",
      }),
    },
  },
  variants: {
    scrollbar: ["rounded", "dark"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
  darkMode: "class",
};
