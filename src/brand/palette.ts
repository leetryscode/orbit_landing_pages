/**
 * Orbit Brand Palette — Navy Classic
 *
 * Matches MatchMakr_v0 navy-classic theme:
 * - globals.css :root / data-theme="navy-classic"
 * - Deep navy canvas (#0C1F35), light text, white CTA
 */

export const palette = {
  primary: {
    blue: "#0C1F35", // canvas
    teal: "#2F7F86",
    "blue-light": "#8E9AA9",
    "teal-light": "#AFCFD1",
  },
  background: {
    main: "#0C1F35", // orbit-canvas
    card: "#1E3A5C", // orbit-surface-2
  },
  text: {
    dark: "#F2F4F7", // orbit-text
    light: "#C7D2E0", // orbit-text-2
    muted: "#8FA3BA", // orbit-muted
  },
  border: {
    light: "rgba(55, 86, 120, 0.8)", // orbit-border
  },
  action: {
    primary: "#FFFFFF",
    "primary-hover": "#F2F5FA",
    "primary-active": "#E7EBF2",
  },
} as const;

export const themeColor = palette.background.main;
export const backgroundColor = palette.background.main;
