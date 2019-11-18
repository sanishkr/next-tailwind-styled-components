module.exports = {
  theme: {
    extend: {},
  },
  // corePlugins: ["margin", "padding", "preflight", "container"],
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
  // plugins: [require("tailwindcss")]
  plugins: [require('tailwindcss-dir')()],
};
