# Archive — Slide-deck implementation

This folder contains the previous slide-deck style landing page implementation, preserved for potential restoration.

## Contents

- **slide-deck/** — Components and styles for the vertical scroll-snap narrative
  - `StorySection.tsx` — Slide content with staged line reveal
  - `ForkCards.tsx` — Sponsor vs Single fork cards
  - `SwipeUpAffordance.tsx` — Swipe-up hint
  - `more-page.tsx` — The `/more` route content
  - `globals-slide-deck.css` — Scroll-snap and animation rules

## Restoring the slide-deck

1. Copy `StorySection.tsx`, `ForkCards.tsx`, `SwipeUpAffordance.tsx` back to `src/components/`
2. Restore `src/app/more/page.tsx` from `more-page.tsx` (update imports to use `@/components`)
3. Merge `globals-slide-deck.css` into `src/app/globals.css`
4. Restore `src/app/page.tsx` from git history or a backup
