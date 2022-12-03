export default {
  darkMode: "class", // or 'media' or 'class'
  sourceType: "module",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "grifter": ["Grifter", "sans-serif"],
      },
      backgroundImage: {
        "loginBack": "url('/img/loginFlow.png')",
      },
      backgroundPosition: {
        0: "0",
      },
      colors: {
        "blue": {
          "primary": "#3F87F3",
        },
        "white": {
          "primary": "#EEF2F3",
          "secondary": "#D5D9DD",
        },
        "black": {
          "primary": "#282828",
          "secondary": "#999999",
          "primary-2": "#363C4F",
          "secondary-2": "#4A5060"
        }
      },
    },
  }
};
