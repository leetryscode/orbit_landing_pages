/**
 * Orbit Brand Palette - Single Source of Truth
 *
 * COPY FROM MAIN ORBIT CODEBASE:
 * - Main app: MatchMakr_v0/src/config/palette.ts
 * - Synced with Orbit (Pearl + Ink): blue-grey canvas, white text, white CTA buttons.
 */

export const palette = {
  primary: {
    blue: "#344B63",
    teal: "#2F7F86",
    "blue-light": "#8E9AA9",
    "teal-light": "#AFCFD1",
  },
  background: {
    main: "#566B89",
    card: "#5F7696",
  },
  text: {
    dark: "#F6F8FC",
    light: "#C9D3E2",
  },
  border: {
    light: "rgba(255, 255, 255, 0.14)",
  },
  action: {
    primary: "#FFFFFF",
    "primary-hover": "#F2F5FA",
    "primary-active": "#E7EBF2",
  },
} as const;

export const themeColor = palette.primary.blue;
export const backgroundColor = palette.background.main;
