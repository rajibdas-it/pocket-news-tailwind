/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0adb18",

          secondary: "#5045a5",

          accent: "#8039ba",

          neutral: "#1C161D",

          "base-100": "#E8E9ED",

          info: "#5DABF4",

          success: "#6EDDA2",

          warning: "#935810",

          error: "#DF494B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
