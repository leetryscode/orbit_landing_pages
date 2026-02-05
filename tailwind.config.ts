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
      },
      fontFamily: {
        sans: [...fontStack],
      },
      maxWidth: {
        narrative: "34rem",
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
