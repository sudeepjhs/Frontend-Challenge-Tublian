import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
      screens: {
        lg: "1025px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#121212",
            foreground: "#FEFEFE",
            default: {
              500: "#888888",
              100: "#1E1E1E",
              700: "#B7B7B7",
              200: "#414141",
            },
            primary: {},
            content1: {
              DEFAULT: "#292929",
            },
            warning: {
              DEFAULT: "#FDD649",
            },
          },
        },
      },
    }),
  ],
};
