# Orbit Landing Page

Minimal marketing site for Orbit — trusted introductions, without pressure.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

### Set INSTALL_URL

The "Install Orbit" button links to your app store or PWA install URL.

**Option 1: Environment variable (recommended for production)**

Create `.env.local`:

```
NEXT_PUBLIC_INSTALL_URL=https://your-app-url.com/install
```

**Option 2: Edit directly**

Edit `src/config.ts` and replace the default value:

```ts
export const INSTALL_URL = "https://your-app-url.com/install";
```

## Brand Tokens (Copy from Main Orbit Codebase)

To keep the landing page in sync with the main Orbit app:

### Palette (colors)

- **Source:** `MatchMakr_v0/src/config/palette.ts`
- **Paste into:** `src/brand/palette.ts`
- Copy the full `palette` object. The landing page uses `background.main`, `text.dark`, `text.light`, `action.primary`, `action.primary-hover`, `action.primary-active`, and `primary.blue` (for button text).

### Typography (fonts)

- **Source:** `MatchMakr_v0/tailwind.config.ts` (fontFamily) and `globals.css` (type-* classes)
- **Paste into:** `src/brand/type.ts`
- The main app uses Source Sans Pro and Bahnschrift. Add a Google Fonts import in `layout.tsx` or `globals.css` if switching from the default system stack.

## Deploy to Vercel

1. Push this repo to GitHub (or connect your Git provider).
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Vercel auto-detects Next.js. Click Deploy.
4. Add environment variables in Project Settings → Environment Variables:
   - `NEXT_PUBLIC_INSTALL_URL` — your app install URL
   - `NEXT_PUBLIC_SITE_URL` — your landing page URL (e.g. `https://orbit.app`) for OG image resolution

**CLI:**

```bash
npm i -g vercel
vercel
```

## SEO

- Add a 1200×630px image at `public/og.png` for Open Graph / Twitter cards.
- Title and description are set in `src/app/layout.tsx`.

## Analytics

Stub functions in `src/lib/analytics.ts`:

- `trackPageView(path)` — call on route change
- `trackEvent(name, properties)` — e.g. `trackEvent('install_click')`

The "Install Orbit" button already calls `trackEvent('install_click')`. Replace the stubs with your analytics provider (Vercel Analytics, Plausible, PostHog, etc.).
