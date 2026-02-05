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
        accent: palette.accent,
        background: palette.background,
        text: palette.text,
        border: palette.border,
        action: palette.action,
      },
      fontFamily: {
        sans: [...fontStack],
        // TODO: Add Orbit brand font when available.
        // Main app uses: font-source-sans (Source Sans Pro), font-brand (Bahnschrift)
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.08)",
        card: "0 4px 12px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
