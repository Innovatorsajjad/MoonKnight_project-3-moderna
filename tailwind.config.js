/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#244256",
          secondary: "#75A5C5",
          accent: "#F2F3F4",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light`",
      "cupcake",
    ],
  },
   plugins: [require("daisyui")],
}