import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "489px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        redone: "#9a0000",
        orangeone: "#ff6634",
      },
      fontFamily: {
        header: '"Lobster Two", sans-serif',
        main: '"Lato", sans-serif',
        second: '"Playball", cursive',
      },
    },
  },
  daisyui: {
    // themes: [
    //   {
    //     mytheme: {
    //       primary: "#9a0000",
    //     },
    //   },
    // ],
  },
  plugins: [daisyui],
};
