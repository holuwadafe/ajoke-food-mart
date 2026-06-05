import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fffdf0",
          100: "#fff8d6",
          200: "#ffeea3",
          300: "#ffe16b",
          400: "#ffd33d",
          500: "#D4AF37",
          600: "#C49B2A",
          700: "#A87D1D",
          800: "#8A5F12",
          900: "#6C4209",
        },
        obsidian: {
          50:  "#f2f2f2",
          100: "#e0e0e0",
          200: "#bdbdbd",
          300: "#9e9e9e",
          400: "#757575",
          500: "#3D3D3D",
          600: "#2A2A2A",
          700: "#1A1A1A",
          800: "#111111",
          900: "#080808",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Jost", "sans-serif"],
        accent: ["Cinzel", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #FFE06B 50%, #C49B2A 100%)",
        "gold-shine":    "linear-gradient(90deg, #C49B2A 0%, #FFE06B 30%, #FFD700 50%, #FFE06B 70%, #C49B2A 100%)",
        "dark-gradient": "linear-gradient(135deg, #080808 0%, #1A1A1A 50%, #0d0d0d 100%)",
        "glass-gold":    "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(255,224,107,0.04) 100%)",
      },
      boxShadow: {
        gold:     "0 0 30px rgba(212, 175, 55, 0.3), 0 4px 20px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 0 60px rgba(212, 175, 55, 0.4), 0 8px 40px rgba(212, 175, 55, 0.2)",
        glass:    "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 8s ease-in-out infinite",
        "pulse-gold":   "pulseGold 2s ease-in-out infinite",
        "shimmer":      "shimmer 2.5s linear infinite",
        "particle":     "particle 15s linear infinite",
        "spin-slow":    "spin 8s linear infinite",
        "bounce-slow":  "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%":      { boxShadow: "0 0 50px rgba(212,175,55,0.7), 0 0 80px rgba(212,175,55,0.3)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        particle: {
          "0%":   { transform: "translateY(100vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateY(-10vh) translateX(100px) rotate(720deg)", opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
