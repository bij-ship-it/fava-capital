# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

FAVA Capital — marketing/holding-company website.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript 5.8
- Tailwind CSS 4 (uses `@theme` in `src/app/globals.css` for design tokens)
- Framer Motion (animation), Lenis (smooth scroll)

## Scripts

```bash
npm run dev        # dev server
npm run build      # production build
npm run start      # serve production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

## Directory layout

- `src/app/` — App Router pages (26 routes: home, about, careers, crypto/*, commodities/*, markets/*, payments, etc.)
- `src/components/ui/` — shared primitives (logo, badges, icons)
- `src/components/sections/` — page-level sections, grouped by feature (home, crypto, commodities, markets)
- `src/components/layout/` — layout shells
- `src/app/globals.css` — design tokens live here via Tailwind `@theme`
- `public/fonts`, `public/images` — assets
## Design system

- `DESIGN-SYSTEM.md` — canonical. Type scale, color tokens (with hex reference), spacing, component patterns, page patterns, global design rules.
- `DESIGN-DIRECTION.md`, `DESIGN-OPTIONS.md` — visual direction / exploration.

Before UI work: read `DESIGN-SYSTEM.md`. Don't introduce new color/type values without checking tokens in `src/app/globals.css` first.

## Conventions

- UI changes: run `npm run dev` and view the page in a browser before claiming done. Type-checks don't prove a feature works.
- Branches: feature branches off `main` (e.g. `feat/hero-redesign`, `fix/nav-mobile`). Don't commit to `main` directly.
- Commits/pushes: only when the user explicitly asks. Draft messages about *why*, not *what*.
- Don't touch `.vercel/` or production config without confirmation — this is a deployed site.

## CI

`.github/workflows/ci.yml` runs on PRs and `main` pushes: `lint`, `typecheck`, `build`. Keep these green.

## Not yet set up (don't assume these exist)

- No tests / test runner
- No pre-commit hooks
- No `.env.example` (no env vars in use yet — ask before adding one)
