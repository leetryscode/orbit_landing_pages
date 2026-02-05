/**
 * Orbit Brand Typography - Single Source of Truth
 *
 * COPY FROM MAIN ORBIT CODEBASE:
 * - Main app: MatchMakr_v0/tailwind.config.ts (fontFamily) + globals.css (type-* classes)
 * - Font stack: tailwind.config.ts theme.extend.fontFamily
 *   - brand: ['Bahnschrift Light', 'Bahnschrift', '-apple-system', ...]
 *   - source-sans: ['Source Sans Pro', 'sans-serif']
 *   - inter: ['Inter', 'sans-serif']
 *   - raleway: ['Raleway', 'sans-serif']
 * - Typography scale: globals.css .type-display, .type-section, .type-body, .type-meta
 *
 * TODO: Replace fontStack below with Orbit's actual brand font if different.
 * Current: system-ui stack for minimal setup. Orbit app uses Source Sans Pro + Bahnschrift.
 */

/** Font stack - modern, readable. Swap for Orbit brand font when available. */
export const fontStack = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'sans-serif',
] as const;

/** Typography scale (rem) - comfortable reading, mobile-first */
export const typeScale = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',  // 14px
  base: '1rem',    // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
} as const;
