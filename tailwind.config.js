/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: "repeat(auto-fill, minmax(270px, 1fr))",
      },
      colors: {
        notionTagDefault: "#E3E2E080",
        notionTagGray: "#E3E2E0",
        notionTagBrown: "#EEE0DA",
        notionTagOrange: "#FADEC9",
        notionTagYellow: "#FEDCC8",
        notionTagGreen: "#DBEDDB",
        notionTagBlue: "#D3E5EF",
        notionTagPurple: "#E8DEEE",
        notionTagPink: "#F5E0E9",
        notionTagRed: "#FFE2DD",
      },
    },
  },
  plugins: [],
};
