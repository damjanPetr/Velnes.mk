/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      denum: "#3660B2",
      white: "#000000",
      "marian-blue": "#0E398F",
      "alice-blue": "#F0F5FF",
      lavender: "#D6E5FF",
      "oxford-blue": "#071D48",
      "atomic-tangerine": "#FFA78A",
      celadon: "#A0CE95",
      mindaro: "#CCDC89",
      "mountbatten-pink": "#9B839F",
      "munsell-blue": "#3689A0",
      "rosy brown": "#CD9595",
      straw: "#F7E97C",
      sunset: "#FFCC7E",
      vindigris: "#48B3AD",
      "vista-blue": "#86A2D9",
      jasper: "#E35D4E",
      "mint-green": "#CEF5F2",
      "misty-rose": "#FFEDEB",
      ochre: "#BE7300",
      "papaya-whip": "#FFF0D9",
      "pine-green": "#067069",
      "01": "#7A7E87",
      "02": "#959BA6",
      "03": "#CED1D9",
      "04": "#E4E6EB",
      "05": "#EDF0F5",
      "06": "#F5F5F5",
      "07": "#F7F8FA",
    },
  },
  plugins: [
    plugin(function ({ addVariant, addComponents, addUtilities }) {
      addComponents({});
      addUtilities({
        ".fcen": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("dirChildren", ["& > *"]);
      addVariant("group-open", [":merge(.group).open &"]);
      addVariant("peer-open", [":merge(.peer).open &"]);
    }),
  ],
};
