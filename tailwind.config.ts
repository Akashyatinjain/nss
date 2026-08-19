import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nss: {
          navy: {
            DEFAULT: "#0B1F3A",
            dark: "#061224",
            light: "#122E54",
            subtle: "#183B6B",
          },
          blue: {
            DEFAULT: "#123B63",
            light: "#1D548C",
            accent: "#2A75C7",
            soft: "#EAF2FA",
          },
          red: {
            DEFAULT: "#D62828",
            bright: "#E63946",
            dark: "#B71C1C",
            soft: "#FDE8E9",
          },
          gold: {
            DEFAULT: "#F4A261",
            light: "#F7B267",
          },
          warm: {
            white: "#FAFAF7",
            bg: "#F8F9FA",
          },
          soft: {
            gray: "#F1F3F5",
            border: "#E2E8F0",
          },
          text: {
            dark: "#111827",
            muted: "#64748B",
            light: "#F8FAFC",
          }
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Manrope", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 31, 58, 0.12)",
        "glass-lg": "0 12px 48px 0 rgba(11, 31, 58, 0.18)",
        "glass-red": "0 8px 32px 0 rgba(214, 40, 40, 0.2)",
        "card-hover": "0 20px 40px -15px rgba(11, 31, 58, 0.15)",
        "glow-red": "0 0 25px rgba(230, 57, 70, 0.4)",
        "glow-navy": "0 0 35px rgba(18, 59, 99, 0.6)",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "spin-reverse-slow": "spinReverse 80s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
      },
      backgroundImage: {
        "radial-navy": "radial-gradient(circle at center, #123B63 0%, #0B1F3A 70%, #061224 100%)",
        "hero-glow": "radial-gradient(circle at 75% 30%, rgba(214, 40, 40, 0.15) 0%, rgba(18, 59, 99, 0.3) 40%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
