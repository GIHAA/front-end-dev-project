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
        primary: "#6B3CC9",
        secondary: "#F28D35",
        Analogous1 : "#6A44F2",
        Analogous2 : "#F24444",
        Triadic: "#52378Ci",
        textdark : "#2F2F2Fi",
        textlight : "#535A75",
        textgray : "#9C9991",
        error : "#FF0335i",
        success : "#5EB30B"
      },
    },
  },
  plugins: [],
};
