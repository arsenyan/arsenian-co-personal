import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: '1440px',
        },
      },
      fontFamily: { 
        serif: ["var(--font-kommuna-serif)", "serif"],
        sans: ["var(--font-stratos-sans)", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        accent: "#ff4d26",
      },
      fontSize: {
        base: "1.1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
