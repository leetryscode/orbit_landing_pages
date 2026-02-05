/**
 * Analytics stub - no vendor integration yet.
 *
 * TODO: Integrate with your analytics provider (e.g. Vercel Analytics,
 * Plausible, PostHog, Google Analytics). Replace the no-op implementations
 * below with actual tracking calls.
 */

export function trackPageView(path: string): void {
  // TODO: Send pageview to analytics provider
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics] pageview:", path);
  }
}

export function trackEvent(
  name: string,
  props?: Record<string, unknown>
): void {
  // TODO: Send event to analytics provider
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics] event:", name, props);
  }
}
