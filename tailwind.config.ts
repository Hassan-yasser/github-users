import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'], // ← التعديل هنا
  theme: {
    extend: {
      colors: {
        primary: "#FF7701",
      },
    },
  },
  plugins: [],
};

export default config;
