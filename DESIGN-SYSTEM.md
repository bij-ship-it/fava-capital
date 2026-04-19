# FAVA Capital — Design System v2

## Typography Scale

Seven levels. Nothing else. Every text element maps to one of these.

```
Level 1 — DISPLAY        44px  bold 700  Cormorant Garamond
           Page hero headlines. One per page. The loudest thing on screen.
           Classes: .text-display (italic) / .text-display-alt (normal)

Level 2 — HEADING        22px  bold 700  Cormorant Garamond
           Section headlines (h2). Card titles. Blockquote text.
           Class: .text-subhead

Level 3 — BODY           15px  light 300  DM Sans
           Default paragraph text. Descriptions. Form inputs.
           No class needed — it's the body default.
           Color: text-secondary (descriptions) or text-primary (emphasis)

Level 4 — BODY SMALL     13px  regular 400  DM Sans
           Compact descriptions in cards, table cells, team bios,
           excerpts. When body text needs to be quieter.
           Class: .text-sm (new)

Level 5 — NUMBERS        32px  bold 700  Cormorant Garamond
           Statistics, metrics, large data callouts.
           Class: .text-numbers

Level 6 — LABEL          11px  medium 500  Outfit  UPPERCASE
           Section labels, nav items, CTA button text, tags.
           Class: .text-label

Level 7 — CAPTION        11px  regular 400  DM Sans  UPPERCASE
           Metadata: dates, stat sublabels, status indicators.
           Class: .text-caption
```

### Accent Typography (special use)
```
ACCENT          18px  regular 400  Cormorant Garamond  italic
                Pull quotes, taglines, brand voice moments.
                Class: .text-accent

TICKER NUMBER   15px  regular 400  DM Sans  tabular-nums
                Inline prices, ticker data, small numerical displays.
                Class: .text-ticker (new)
```

### Rules
- NEVER add Tailwind weight classes (font-light, font-bold, etc.) to elements using typography classes
- NEVER use arbitrary pixel sizes (text-[14px], text-[17px]) — use the scale
- Body text is EITHER text-secondary (standard) or text-primary (emphasis) — never text-primary/60 or /70

---

## Color Usage

### Text Colors — Only These Four
| Token | Use For |
|---|---|
| `text-primary` | Headlines, important body text, table values, names |
| `text-secondary` | ALL description/paragraph text, form labels |
| `text-tertiary` | Fine print, disclaimers, metadata that should barely be seen |
| `text-gold` | Accent moments: special numbers, brand punctuation, key metrics |

### BANNED Patterns
- `text-primary/60` — use `text-secondary` instead
- `text-primary/70` — use `text-secondary` instead
- `text-secondary/50` — use `text-tertiary` instead
- Any opacity modifier on text — use the semantic token

### Subsidiary Colors
Used ONLY for: channel badges, CTA buttons/links, accent lines, status indicators.
NEVER for body text or descriptions.

### Color Tokens — Hex Reference

Backgrounds
| Token | Hex | Usage |
|---|---|---|
| `bg-base` | #0C0716 | Page background |
| `bg-surface` | #120E1E | Cards, panels, alternating sections |
| `bg-elevated` | #17122A | Hover states on surfaces |

Borders
| Token | Hex | Usage |
|---|---|---|
| `border-border` | #1E1735 | All dividers, card borders (1px only) |
| `border-border-hover` | #2D1B69 | Hover state on borders |

Text
| Token | Hex |
|---|---|
| `text-primary` | #E8E4EC |
| `text-secondary` | #7B6F8E |
| `text-tertiary` | #3D3156 |
| `text-gold` | #C4A265 |

Subsidiaries
| Token | Hex | Channel |
|---|---|---|
| `wealth` | #059669 | FAVA Wealth |
| `markets` | #14B8A6 | FAVA Markets |
| `payments` | #0EA5E9 | FAVA Payments |
| `crypto` | #6366F1 | FAVA Digital |
| `commodities` | #D97706 | FAVA Commodities |

Each subsidiary token works as `text-*`, `bg-*`, `border-*`.

---

## Spacing System

### Section Spacing — Two Sizes Only
| Size | Use For | Classes |
|---|---|---|
| Standard | Content sections below hero | `py-[100px] max-md:py-16` |
| Compact | Strips, stat bars, trust badges | `py-10` to `py-12` |

Hero sections don't use py — they use `pt-32` and `pb-[140px]`.

### Card Padding — Two Sizes Only
| Size | Use For | Classes |
|---|---|---|
| Standard | All content cards, feature panels | `p-8 max-lg:p-6` |
| Large | CTA panels, featured content | `p-14 max-lg:p-8` |

### Content Gaps
| Size | Use For |
|---|---|
| `gap-6` | Cards in a grid |
| `gap-12` | Between content sections within a page section |
| `gap-[1px] bg-border` | Seamless grid cards with hairline dividers |

---

## Line Height — Two Values Only
| Value | Use For |
|---|---|
| `leading-[1.7]` | ALL body text, descriptions, paragraphs |
| `leading-[1.4]` | Blockquotes, pull quotes, compact headlines |

Nothing else. No 1.5, 1.6, 1.65, 1.75.

---

## Component Patterns

### Page Structure (Stream Pages)
```
Hero (bg-base, pt-32)
  └─ ChannelBadge + Display headline + Body description + CTA link + Icon

Stats Strip (bg-surface, full-width, compact py-10)
  └─ 4 stats in a row with vertical dividers

Content Section (bg-base, py-[100px])
  └─ Label (text-label) + Heading (text-subhead) + Content in bg-surface panel

Featured Panel (bg-surface, full-width, py-[100px])
  └─ Split layout or centered content

CTA Panel (bg-base, py-[100px])
  └─ bg-surface p-14 box: Display-alt headline + Caption subtitle + Button + Text link
```

### Card
```html
<div className="bg-surface p-8 max-lg:p-6">
  <div className="w-full h-[2px] bg-{color} mb-6" />  <!-- accent line -->
  <h3 className="text-subhead text-primary">Title</h3>
  <p className="text-secondary leading-[1.7] mt-3">Description</p>
</div>
```

### CTA Button
```html
<Link className="inline-block border border-{color} text-{color} text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-{color}/10 transition-colors">
  Button Text
</Link>
```

### CTA Text Link
```html
<Link className="text-label text-secondary link-hover hover:text-primary transition-colors">
  Link Text →
</Link>
```

### Stat
```html
<div>
  <p className="text-numbers text-primary">1,000+</p>
  <p className="text-caption text-secondary mt-2">LABEL</p>
</div>
```

### Section Label
```html
<p className="text-label text-secondary mb-8">SECTION NAME</p>
```

---

## Interactive States

### Links
- Default: `text-secondary`
- Hover: `text-primary` (transition-colors)
- Branded: `text-{subsidiary-color}` with `link-hover` (gold underline)

### Cards
- Default: `bg-surface border border-border` (or no border in seamless grids)
- Hover: `hover:bg-elevated transition-colors` or accent line appears

### Buttons
- Default: `border border-{color} text-{color}`
- Hover: `hover:bg-{color}/10`
- No border-radius. Ever.
- No shadows. Ever.

---

## Layout

- Max width: `max-w-[1160px] mx-auto px-20 max-lg:px-6`
- Border radius: 0px everywhere
- Borders: 1px only, `border-border`
- Accent lines: 2px, subsidiary color

---

## Design Rules (global)

1. **Border radius: 0px.** No exceptions.
2. **Shadows: none.** Ever.
3. **Border width: 1px.** Except 2px accent lines on cards/rows.
4. **No hardcoded hex colors** in components — use theme tokens.
5. **No inline `style={}` for fonts or colors** — use CSS classes.
6. **No arbitrary pixel sizes** (`text-[14px]`) — use the type scale.
7. **No Tailwind weight classes** on typography classes — weights are baked in.

---

## Page Structure — Reference Patterns

### Hero Section
- Label: `text-label` + subsidiary color (via `ChannelBadge`)
- Headline: `text-display` (italic, holding co) or `text-display-alt` (subsidiary pages)
- Description: body default, `text-secondary`
- CTA: `text-label` + subsidiary color + `link-hover`
- Icon: `SubsidiaryIcon` at 160px, `opacity-20`, right-aligned on desktop

### Section Label + Headline
- Label: `text-label text-secondary`
- Headline: `text-subhead text-primary`

### Bottom CTA Section
- Background: `bg-surface border-t border-border`
- Headline: `text-display-alt text-primary`
- Subtitle: `text-caption text-secondary`
- Primary button: subsidiary-colored bordered button (see CTA Button pattern above)
- Secondary link: `text-label text-secondary link-hover hover:text-primary`

