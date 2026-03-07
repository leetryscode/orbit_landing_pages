import type { Config } from "tailwindcss";
import { palette } from "./src/brand/palette";
import { fontStack } from "./src/brand/type";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: palette.primary,
        background: palette.background,
        text: palette.text,
        border: palette.border,
        action: palette.action,
        // orbit.* for navy-classic alignment with MatchMakr
        orbit: {
          canvas: palette.background.main,
          text: palette.text.dark,
          text2: palette.text.light,
          muted: palette.text.muted,
          border: "rgb(55 86 120 / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: [...fontStack],
        "orbit-heading": [
          "Bahnschrift Light",
          "Bahnschrift",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        narrative: "34rem",
        "narrative-lg": "42.5rem", // ~680px for editorial column
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
