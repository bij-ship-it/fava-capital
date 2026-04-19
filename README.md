# FAVA Capital

Marketing site for FAVA Capital. Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Dev server: http://localhost:3000

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint (Next.js config) |
| `npm run typecheck` | TypeScript check, no emit |

## Structure

- `src/app/` — App Router routes
- `src/components/{ui,sections,layout}/` — components
- `src/app/globals.css` — Tailwind `@theme` design tokens
- `public/` — static assets

## Design system

`DESIGN-SYSTEM.md` is the single source of truth (type scale, color tokens with hex, spacing, component patterns, global rules). `DESIGN-DIRECTION.md` and `DESIGN-OPTIONS.md` cover visual direction and exploration.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs `lint`, `typecheck`, and `build` on every PR and on pushes to `main`.

## Deployment

Deployed on Vercel.
