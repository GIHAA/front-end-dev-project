module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        Bebas: ["Kdam Thmor Pro"],
      },
      colors: {
        new: "#FF6363",
      },
    },
  },
  plugins: [],
};
