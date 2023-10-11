/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f0f0f5",
        lavender: "#e0e0eb",
        white: "#fff",
        lightsteelblue: {
          "100": "#c9c9da",
          "200": "#aaaac5",
        },
        gray: "#181823",
        steelblue: "#6e6e9b",
        whitesmoke: "#f5f5f5",
        dodgerblue: "#537fe7",
        lightslategray: "#8c8cb0",
        gainsboro: "#e7e7ee",
        royalblue: {
          "100": "#5374e7",
          "200": "rgba(83, 116, 231, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "21xl": "40px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
