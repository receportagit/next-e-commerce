import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        openSans: ["var(--font-open-sans)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        primary: "#05172B",
        secondary: "#1C2E40",
        lightPrimary: "#13315C",
        lightSecondary: "#475D7E",
        neutral: "#AAB7B7",
        light: "#F5F5F5",
        dark: "#1A1A1A",
        accent: "#FB8C00",
        danger: "#D32F2F",
        success: "#388E3C",
        warning: "#FBC02D",
        info: "#1976D2",
      },
    },
  },
  plugins: [],
} satisfies Config;
