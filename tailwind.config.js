module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      primary: "var(--font-family-primary)",
    },
    screens: {
      "2xs": "300px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
