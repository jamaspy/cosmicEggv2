// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
      },
      colors: {
        rust: "#b6643a",
        petrol: "#2e5b69",
        oyster: "#dbd1cc",
        "dove-gray": "#a7a9ac",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
