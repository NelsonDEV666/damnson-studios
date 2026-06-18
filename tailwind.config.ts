import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void:    "#0c0c0e",
        ash:     "#121212",
        neon:    "#b44fff",
        surface: "#18181b",
        border:  "#262626",
        text:    "#f5f5f5",
        muted:   "#a3a3a3",
      },
      fontFamily: {
        display: ["Bebas Neue", "Anton", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        neon: "0 0 30px rgba(180,79,255,.45)",
        glow: "0 0 60px rgba(180,79,255,.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        pulseNeon: {
          "0%,100%": { opacity: "1",   boxShadow: "0 0 15px rgba(180,79,255,.4)" },
          "50%":     { opacity: ".75", boxShadow: "0 0 45px rgba(180,79,255,.8)" },
        },
        flicker: {
          "0%,18%,22%,25%,53%,57%,100%": { opacity: "1"  },
          "20%,24%,55%":                  { opacity: ".3" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
      },
      animation: {
        pulseNeon: "pulseNeon 2.5s infinite",
        flicker:   "flicker 4s infinite",
        slideUp:   "slideUp .8s ease forwards",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
