# Orbit Landing Page

Mobile-first vertical narrative landing site for Orbit. Introductions replace algorithms.

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

Edit `src/config.ts` and replace the default value. The fallback is `#` when not set.

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
- `trackEvent(name, props)` — e.g. `trackEvent('install_click')`, `trackEvent('sponsor_click')`

The "Install Orbit" and "Become a Sponsor" buttons already call these. Replace the stubs with your analytics provider (Vercel Analytics, Plausible, PostHog, etc.).
