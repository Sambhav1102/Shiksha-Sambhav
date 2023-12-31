module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_b2: "#ffffffb2",
          A700: "#ffffff",
          A700_5e: "#ffffff5e",
          A700_01: "#fbfdff",
        },
        light_blue: { 50: "#ecfdff", 300: "#55c6ff" },
        blue: { 50: "#ecf9ff", "50_cc": "#ecf9ffcc", "50_01": "#dbe8ff" },
        indigo: {
          50: "#dae5f7",
          100: "#c7c7fb",
          A100: "#7d89ff",
          A200: "#6a78f6",
        },
        amber: {
          300: "#ffd164",
          A100: "#ffe17d",
          A400: "#ffbf00",
          A400_01: "#fdbf00",
        },
        teal: {
          50: "#e1ebf0",
          100: "#b4d2d7",
          A700: "#0ac1a7",
          A400_19: "#00e5cc19",
          A400_01: "#01e4cb",
          A400: "#00e5cc",
        },
        gray: {
          900: "#05053f",
          "900_0c": "#0606400c",
          "900_0f": "#0606400f",
          "900_5e": "#05053f5e",
          "900_5f": "#05053f5f",
          "900_01": "#060640",
          "900_07": "#06064007",
        },
        black: {
          900: "#000000",
          "900_01": "#00000b",
          "900_06": "#00001f",
          "900_03": "#00000a",
          "900_02": "#020225",
          "900_05": "#0c0202",
          "900_04": "#040a06",
        },
        green: { A700: "#00aa63", A400: "#00dd7f" },
        red: {
          300: "#e6646e",
          500: "#ff3032",
          "500_33": "#ff4f3833",
          A200_01: "#ff3650",
          A200: "#ff5d70",
          A100: "#ff8087",
        },
        blue_gray: {
          50: "#edf6f3",
          100: "#d0dbee",
          300: "#8f8fa6",
          400: "#818196",
          "400_01": "#6fa5aa",
        },
        orange: { 50: "#fff6d8", 300: "#ffc350", A400: "#ff9100" },
      },
      boxShadow: {
        bs: "0px 10px  30px 0px #00e5cc19",
        bs1: "0px 30px  50px 0px #020225",
        bs3: "0px 4.4px  50px 0px #0606400c",
        bs2: "0px 10px  30px 0px #06064007",
        bs4: "0px 3.57px  26px 0px #0606400f",
      },
      fontFamily: { ruda: "Ruda", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
