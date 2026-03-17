import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "dark-gray": "#232227",
        blue: "#007BFC",
        "light-gray": "#A5A5A5",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Satoshi", "sans-serif"],
        ui: ["General Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Exo 2", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
