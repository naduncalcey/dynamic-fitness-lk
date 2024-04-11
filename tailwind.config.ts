import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand": {
          "primary": "rgb(var(--brand-primary))",
          "secondary": "rgb(var(--brand-secondary))",
          "ternary": "rgb(var(--brand-ternary))"
        }
      }
    },
  },
  plugins: [],
};
export default config;
