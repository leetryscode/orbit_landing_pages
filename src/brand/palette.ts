/**
 * Orbit Brand Palette - Single Source of Truth
 *
 * COPY FROM MAIN ORBIT CODEBASE:
 * - Main app: MatchMakr_v0/src/config/palette.ts
 * - Copy the full `palette` object and paste below, replacing the placeholder.
 * - The main app uses: primary, accent, background, text, border, status, action.
 * - This landing page uses: background.main, text.dark/light, action.primary/hover/active.
 *
 * Current values below are synced from Orbit (Pearl + Ink palette).
 * Design tone: clean, modern, light, calm, premium.
 */

export const palette = {
  primary: {
    blue: '#344B63',
    teal: '#2F7F86',
    'blue-light': '#8E9AA9',
    'teal-light': '#AFCFD1',
  },
  accent: {
    'blue-light': '#8E9AA9',
    'teal-light': '#AFCFD1',
  },
  background: {
    main: '#566B89',
    card: '#5F7696',
    'gradient-start': '#2F3A4A',
    'gradient-end': '#3F6E73',
  },
  text: {
    dark: '#F6F8FC',
    light: '#C9D3E2',
  },
  border: {
    light: 'rgba(255, 255, 255, 0.14)',
  },
  status: {
    paused: '#A39AD6',
    invited: '#B7B0A6',
    needs_attention: '#E0AA3E',
    in_motion: '#5FB58C',
    needs_introduction: '#B7B0A6',
  },
  action: {
    entry: '#FFFFFF',
    'entry-hover': '#F2F5FA',
    'entry-active': '#E7EBF2',
    primary: '#FFFFFF',
    'primary-hover': '#F2F5FA',
    'primary-active': '#E7EBF2',
    secondary: '#E9EDF3',
    'secondary-hover': '#DEE3EB',
  },
} as const;

export const themeColor = palette.primary.blue;
export const backgroundColor = palette.primary.blue;
