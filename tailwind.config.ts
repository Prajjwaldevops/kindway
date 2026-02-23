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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: "var(--secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        card: {
          DEFAULT: "var(--card-bg)",
          border: "var(--card-border)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        surface: "var(--bg-surface)",
        "brand-blue": "var(--accent-blue)",
        "brand-emerald": "var(--accent-emerald)",
        "brand-amber": "var(--accent-amber)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "orb-1": "orb-drift-1 15s ease-in-out infinite",
        "orb-2": "orb-drift-2 18s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".8", transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(108.82deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "orb-gradient-1":
          "radial-gradient(circle at center, rgba(37, 99, 235, 0.25) 0%, transparent 70%)",
        "orb-gradient-2":
          "radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
