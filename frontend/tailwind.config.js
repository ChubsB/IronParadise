module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "signin-image":
          "url('https://cdn.dribbble.com/users/537594/screenshots/18079832/media/73dc88448e6a53a783a46f626674b8be.png')",
      }),
      colors: {
        primary: "#182277",
        primaryDark: "#10185e",
        secondary: "#FFB7E4",
        secondaryDark: "#de8cbf",
        star: "#3500D3",
        backgrnd: "#282828",
        supporta: "#240090",
        supportb: "#190061",
        supportc: "#0C0032",
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
