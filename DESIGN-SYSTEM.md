# FAVA Capital — Design System

**Single source of truth.** This doc describes the design system as it actually ships in the codebase. Before adding new patterns, read this doc and use the existing tokens, primitives, and rules. If you find yourself adding a new colour, font, size, or component, ask first whether it really doesn't already exist.

---

## Brand voice

Modern-institutional. Serious without being stiff; warm without being startup-casual. Picks: Stripe's clarity, Partners Group's weight, Linear's craft. Avoids: *disrupt*, *revolutionize*, empty superlatives.

**Positioning**: FAVA is a *connected financial ecosystem* — five regulated businesses (Wealth, Markets, Payments, Digital, Commodities) on one platform, where each business strengthens the others. Marketing copy speaks to the *client*, never about the client.

---

## Type system

Three families, all loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables.

| Variable | Family | Use |
|---|---|---|
| `--font-display` | **Fraunces** (variable) | Display, headings, accent. Has `opsz` (optical size), `SOFT`, and `WONK` axes. |
| `--font-body` | **Inter** | Body copy, body small, ticker numbers. |
| `--font-heading` | **JetBrains Mono** | Labels, button text. Subtle infrastructure feel. |

Three weights. Nothing else: **400 / 500 / 700.**

### Type scale (desktop ≥ 1160px)

Every text element maps to one of these classes. Defined in `src/app/globals.css`.

| Class | Family | Weight | Size | Line-height | Tracking | Notes |
|---|---|---|---|---|---|---|
| `.text-display` | Fraunces | 700 | 88px | 1.05 | -0.02em | **Italic.** Hero headlines. opsz 144, SOFT 20. |
| `.text-display-alt` | Fraunces | 700 | 88px | 1.05 | -0.02em | Upright. Subsidiary heroes, CTA panels. |
| `.text-subhead` | Fraunces | 700 | 32px | 1.2 | -0.01em | Section headlines (h2). opsz 48. |
| `.text-numbers` | Fraunces | 700 | 48px | 1.0 | -0.02em | Stats, metrics. tabular-nums. opsz 72. |
| `.text-accent` | Fraunces | 400 | 22px | 1.45 | — | **Italic.** Pull quotes, taglines. |
| (body default) | Inter | 400 | 16px | 1.6 | 0 | Body, descriptions, form text. |
| `.text-sm-body` | Inter | 400 | 14px | 1.6 | — | Card descriptions, captions. |
| `.text-ticker` | Inter | 500 | 16px | — | -0.01em | Inline prices, ticker rows. tabular-nums. |
| `.text-label` | JetBrains Mono | 500 | 12px | 1.0 | 0.18em | Section labels, CTA buttons, tags. **UPPERCASE.** |
| `.text-caption` | Inter | 400 | 12px | 1.4 | 0.08em | Metadata, dates, status. **UPPERCASE.** |

### Responsive scale

| Breakpoint | Display | Subhead | Numbers | Accent |
|---|---|---|---|---|
| ≥ 1160px (desktop) | 88px | 32px | 48px | 22px |
| 768–1159px (tablet) | 64px | 28px | 40px | 22px |
| < 768px (mobile) | 44px | 24px | 32px | 18px |

### Type rules

1. **Never** use Tailwind weight classes (`font-light`, `font-bold`, etc.) on typography classes — weights are baked in.
2. **Never** use arbitrary pixel sizes (`text-[14px]`). Use the scale.
3. **Never** use opacity modifiers on text (`text-primary/60`). Use the semantic colour token.
4. Long words in display sizes break and hyphenate via `overflow-wrap: break-word; hyphens: auto` — already on `.text-display` and `.text-display-alt`.

---

## Colour system

All tokens defined in `src/app/globals.css` `@theme` block.

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `bg-base` | `#0D0B14` | Page background. Warmer than pure black; barely-violet hint. |
| `bg-surface` | `#141121` | Cards, panels, alternating sections. |
| `bg-elevated` | `#1A162D` | Hover state on surfaces. |

### Borders

| Token | Hex | Use |
|---|---|---|
| `border-border` | `#22192E` | All dividers, card borders. **1px only.** |
| `border-border-hover` | `#2D1B69` | Hover state. |

### Text (WCAG AA contrast on `#0D0B14`)

| Token | Hex | Contrast | Use |
|---|---|---|---|
| `text-primary` | `#E8E4EC` | 13.5 : 1 | Headlines, important body text, table values, names. |
| `text-secondary` | `#9C90B4` | 5.4 : 1 | All description / paragraph text, form labels. |
| `text-tertiary` | `#6E6388` | 3.1 : 1 | Fine print, disclaimers, metadata. |
| `text-gold` | `#D9B166` | 7.2 : 1 | Brand accent moments — special numbers, brand punctuation, key metrics. |

`text-gold-hover` (`#E3BD7A`) for hover states on gold elements.

### Subsidiary palette

Custom, not Tailwind defaults. Each picked for character and WCAG AA. Used **only** for: channel badges, CTA buttons/links, accent lines, status indicators. **Never** for body text or descriptions.

| Token | Hex | Channel | Character |
|---|---|---|---|
| `wealth` | `#3D8158` | FAVA Wealth | muted forest — patient capital |
| `markets` | `#3B82F6` | FAVA Markets | electric blue — data, precision |
| `payments` | `#0891B2` | FAVA Payments | deep cyan — rails, flow |
| `crypto` | `#7C6EF3` | FAVA Digital | tuned violet — cool, technical |
| `commodities` | `#C47A3C` | FAVA Commodities | copper — earthy, material |

Each token works as `text-*`, `bg-*`, `border-*`, `border-t-*`, and Tailwind opacity modifiers (`bg-wealth/10`).

### Brand accents

| Token | Hex | Use |
|---|---|---|
| `bright` | `#8B5CF6` | Selection background, scroll progress gradient. Brand violet. |

### Banned colour patterns

- `text-primary/60`, `text-primary/70`, `text-secondary/50` — use the semantic token (`text-secondary`, `text-tertiary`).
- Any opacity modifier on text colour.
- Hardcoded hex anywhere outside `globals.css` (e.g. `bg-[#D97706]`). Use the token.
- Inline `style={{ color, fontFamily, fontSize }}` for fonts or colours. Use a class.

---

## Layout

### Container

`max-w-[1280px] mx-auto px-20 max-lg:px-6` — defined in the `<Container>` primitive (`src/components/ui/Container.tsx`). Use this everywhere instead of recreating the pattern.

### Section spacing

| Size | Use | Classes |
|---|---|---|
| Hero | Top of every page | `pt-32 pb-[140px] max-md:pt-24 max-md:pb-20` |
| Generous | Signature sections (flywheel) | `py-[200px] max-md:py-28` |
| Standard | Most content sections | `py-[100px] max-md:py-16` |
| Compact | Stat strips, ticker bars | `py-10` to `py-12` |

Vary section rhythm — don't make every section the same height. Generous sections signal *importance*.

### Card padding

| Size | Use | Classes |
|---|---|---|
| Standard | Most cards | `p-8 max-lg:p-6` |
| Large | CTA panels, featured content | `p-14 max-lg:p-8` |

### Content gaps

| Size | Use |
|---|---|
| `gap-6` | Cards in a grid |
| `gap-y-12 lg:gap-12` | Between content sections within a page section (mobile-safe) |
| `gap-px bg-border` | Seamless grid cards with hairline dividers |

### Line height

Two values:
- `leading-[1.6]` — body text (already on body and `.text-sm-body`)
- `leading-[1.4]` to `leading-[1.45]` — pull quotes, accent text

### Mobile gotcha (important)

**Never** use `gap-12` (or larger) on `grid-cols-12` without restricting it to large viewports. With 11 column gaps × 48px = 528px, on a 327px mobile content area the grid is forced 200px wider than the viewport.

**Always use:** `grid grid-cols-12 gap-y-12 lg:gap-12` — row gap on mobile, both axes on `lg+`.

---

## Component primitives

Located in `src/components/ui/`. Use these instead of recreating layouts.

| Primitive | Use |
|---|---|
| `<Container>` | Standard centred max-width wrapper. |
| `<Section>` | Section wrapper with size variants (standard / compact / hero). |
| `<SectionHeader>` | Eyebrow + title + description trio. |
| `<Card>` | Surface card with optional channel accent line. Sizes: standard / large. |
| `<CTAButton>` | Outlined channel-coloured button. Variants: each `ChannelSlug` + `gold` + `neutral`. |
| `<CTALink>` | Text link with arrow. Same variants. |
| `<CTAPanel>` | Bottom-of-page CTA section with eyebrow, title, description, primary + secondary CTA. |
| `<Stat>` / `<StatsStrip>` | Single stat / 2-up or 4-up stat strip. |
| `<SubsidiaryHero>` | Subsidiary page hero. Channel badge + display headline + description + CTAs + iconwith colour-matched glow. |
| `<SubNav>` | Sticky in-page nav for long-form pages. Scroll-spy, horizontal scroll on mobile. |
| `<EcosystemConnections>` | Cross-surfacing block at the bottom of subsidiary pages. Two siblings + narrative. |
| `<Flywheel>` | Five-channel orbit diagram with three loops. The signature visual. |
| `<ChannelBadge>` | Coloured 2px bar + uppercase label. |
| `<FavaLogo>` | Brand logo. Variants: `nav` (mark + FAVA), `full` (mark + FAVA CAPITAL). |

Channel data and helpers in `src/lib/channels.ts`. Cross-connection narratives in `src/lib/ecosystem.ts`.

---

## Standard page structure (subsidiary stream pages)

```
<SubsidiaryHero/>      Hero — channel badge + display headline + body + CTAs + icon glow
<StatsStrip/>          Compact strip with 4 numbers
<SubNav/>              Sticky in-page nav (scroll-spy)
<Section/>             Why / value proposition
<Section/>             What / products / capabilities
<Section/>             How / process / pricing
<Section/>             Trust — security / compliance
<EcosystemConnections/>  Two sibling subsidiaries with narrative
<CTAPanel/>            Bottom CTA in channel colour
```

The home page deviates: hero → ecosystem rows → vision statement → flywheel section → trust → stats bar → latest insights → gold CTA panel.

---

## Interactive states

### Links
- Default: `text-secondary`
- Hover: `text-primary` (with `transition-colors`)
- Branded: `text-{channel}` with `link-hover` (gold underline animation, defined in `globals.css`)

### Cards
- Default: `bg-surface` (with `border border-border` if needed)
- Hover: `hover:bg-elevated transition-colors` or accent line appears

### Buttons
- Default: `border border-{channel} text-{channel}`
- Hover: `hover:bg-{channel}/10`
- **No border-radius. Ever.**
- **No shadows. Ever.**

### Animations
- Hero lattice: CSS keyframes (`hero-bar-grow`, `hero-bar-draw`, `hero-sheen`) in `globals.css`. Respects `prefers-reduced-motion`.
- Section reveals: `framer-motion` with `whileInView` for scroll-triggered fade-up.
- Flywheel: `framer-motion` with `animate` (NOT `whileInView` — failed on small SVGs).

---

## Global design rules

1. **Border radius: 0px.** No exceptions.
2. **Shadows: none.** Ever.
3. **Border width: 1px** — except 2px accent lines on cards/rows.
4. **No hardcoded hex** in components; use tokens.
5. **No inline `style={}`** for fonts or colours; use classes.
6. **No arbitrary pixel sizes** in components (`text-[14px]`); use the type scale.
7. **No Tailwind weight classes** on type classes; weights are baked in.
8. **No `gap-N` on `grid-cols-12`** without `lg:` prefix; use `gap-y-N lg:gap-N`.

---

## Logos

Eight SVG files live in `public/logos/`. Use them directly when an `<img>` source is needed; for inline React rendering use the `<FavaLogo>` and `<*Icon>` components in `src/components/ui/`.

### Brand mark + wordmark

| File | Use |
|---|---|
| `public/logos/fava-icon.svg` | Mark only (favicon, social avatar, watermark). |
| `public/logos/fava-icon-wordmark.svg` | Mark + FAVA. **Default for nav and small placements.** |
| `public/logos/fava-icon-wordmark-capital.svg` | Mark + FAVA CAPITAL. **Default for hero / footer / formal placements.** |

The mark itself: four ascending bars in a violet gradient (`#C4B5FD → #6B3FA0`) with a gold crossbar (`#D9B166`) threading through. Bars represent compounding; the crossbar is the connector across the businesses.

### Stream icons

Five subsidiary icons in `public/logos/streams/`. Each shares the violet purple base with a single accent line in the channel's colour.

| File | Channel | Accent | Concept |
|---|---|---|---|
| `streams/wealth.svg` | FAVA Wealth | `#3D8158` | Ascending stepped bars + growth line |
| `streams/markets.svg` | FAVA Markets | `#3B82F6` | Candlestick chart + dashed price marker |
| `streams/payments.svg` | FAVA Payments | `#0891B2` | Card with money-flow arrows + contactless waves |
| `streams/digital.svg` | FAVA Digital | `#7C6EF3` | Connected blocks (blockchain nodes) |
| `streams/commodities.svg` | FAVA Commodities | `#C47A3C` | Stacked ingot layers + copper top |

### Notes for design-tool use

The wordmark SVGs (`fava-icon-wordmark*.svg`) include `@import` for Google Fonts so they render correctly in browsers. For print, Figma, or Illustrator use, **outline the text to paths** to avoid font-dependency.

The mark and stream icons are pure shape — no text, no fonts. They render identically everywhere.

---

## Mobile safety nets (in `globals.css`)

- `html, body { overflow-x: clip }` — anything escaping a parent gets clipped instead of forcing a horizontal scrollbar.
- `.grid > *, .flex > div, .flex > p, .flex > article, .flex > section, .flex > h1, .flex > h2, .flex > h3 { min-width: 0 }` — prevents min-content inflation. Targeted at div/p children of flex so anchor-based scrolling navs (SubNav) keep their natural width.
- `.text-display, .text-display-alt { overflow-wrap: break-word; hyphens: auto }` — long words don't blow out narrow viewports at 88px.

---

## Where the system lives

| File | Owns |
|---|---|
| `src/app/globals.css` | Tokens, type classes, base styles, animations, mobile safety nets. |
| `src/app/layout.tsx` | Font loading (`next/font/google`), metadata, root layout, JSON-LD. |
| `src/lib/channels.ts` | Channel slugs, names, hrefs, colours, taglines. |
| `src/lib/ecosystem.ts` | Cross-connection narratives between channels. |
| `src/lib/site.ts` | Site name, URL, tagline, description. |
| `src/components/ui/` | All primitives. |
| `src/components/layout/` | Navbar + Footer. |
| `public/logos/` | Distributable SVG logo variants. |
