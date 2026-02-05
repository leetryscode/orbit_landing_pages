/**
 * Site configuration.
 *
 * CTA buttons link to the Orbit PWA where users begin onboarding.
 * Override via NEXT_PUBLIC_INSTALL_URL env var if needed.
 */
export const INSTALL_URL =
  process.env.NEXT_PUBLIC_INSTALL_URL ?? "https://www.greenlightmatch.app";
