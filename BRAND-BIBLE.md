# FAVA Capital — Brand Bible

## Typography System

### Font Families
| Token | Font | Usage |
|---|---|---|
| `--font-display` | Cormorant Garamond | Headlines, numbers, accent text |
| `--font-heading` | Outfit | Labels, navigation, buttons |
| `--font-body` | DM Sans | Body copy, descriptions, form inputs |

### Typography Scale (CSS Classes)
| Class | Font | Weight | Size | Style | Use For |
|---|---|---|---|---|---|
| `.text-display` | Cormorant Garamond | 600 | 44px (32px mobile) | italic | Page hero headlines (holding company pages) |
| `.text-display-alt` | Cormorant Garamond | 600 | 44px (32px mobile) | normal | Page hero headlines (subsidiary pages), bottom CTA headlines |
| `.text-subhead` | Cormorant Garamond | 600 | 22px (20px mobile) | normal | Section headlines (h2), card titles, blockquotes |
| `.text-numbers` | Cormorant Garamond | 600 | 32px (28px mobile) | normal | Statistics, metrics, large data points |
| `.text-label` | Outfit | 500 | 11px | uppercase | Section labels, nav items, CTA buttons, tags |
| `.text-caption` | DM Sans | 400 | 11px | uppercase | Metadata, dates, stat sublabels, status text |
| `.text-accent` | Cormorant Garamond | 400 | 18px | italic | Pull quotes, taglines, brand voice moments |
| (body default) | DM Sans | 300 | 15px | normal | All body paragraphs, descriptions, form text |

### Rules
1. **NEVER combine `font-light`, `font-medium`, `font-bold`, or `font-semibold` with a typography class.** The class defines the weight. Adding a Tailwind weight class overrides it.
2. **NEVER use inline `text-[Npx]` for sizes that have a class.** Headlines are `.text-display-alt`, section heads are `.text-subhead`, stats are `.text-numbers`.
3. **Body text needs no size class.** The default 15px is set on `body`. Just use `text-primary` or `text-secondary` for color.
4. **Small text (12-13px) is acceptable** for metadata, fine print, and deliberately de-emphasised content. Use `text-[12px]` or `text-[13px]` sparingly.

---

## Color System

### Backgrounds
| Token | Hex | Usage |
|---|---|---|
| `bg-base` | #0C0716 | Page background |
| `bg-surface` | #120E1E | Cards, panels, alternating sections |
| `bg-elevated` | #17122A | Hover states on surfaces |

### Borders
| Token | Hex | Usage |
|---|---|---|
| `border-border` | #1E1735 | All dividers, card borders (1px only) |
| `border-border-hover` | #2D1B69 | Hover state on borders |

### Text
| Token | Hex | Usage |
|---|---|---|
| `text-primary` | #E8E4EC | Headlines, primary body text |
| `text-secondary` | #7B6F8E | Descriptions, secondary body text |
| `text-tertiary` | #3D3156 | Fine print, watermarks, near-invisible text |
| `text-gold` | #C4A265 | Accent moments, special numbers, brand punctuation |

### Subsidiary Colors (use sparingly — CTAs, accent lines, active states)
| Token | Hex | Channel |
|---|---|---|
| `text-wealth` / `bg-wealth` / `border-wealth` | #059669 | FAVA Wealth |
| `text-markets` / `bg-markets` / `border-markets` | #14B8A6 | FAVA Markets |
| `text-payments` / `bg-payments` / `border-payments` | #0EA5E9 | FAVA Payments |
| `text-crypto` / `bg-crypto` / `border-crypto` | #6366F1 | FAVA Digital |
| `text-commodities` / `bg-commodities` / `border-commodities` | #D97706 | FAVA Commodities |

---

## Page Structure Patterns

### Hero Section
- **Label:** `text-label` + subsidiary color (via ChannelBadge component)
- **Headline:** `text-display` (italic, holding co pages) or `text-display-alt` (non-italic, subsidiary pages)
- **Description:** body default (`text-secondary`)
- **CTA:** `text-label` + subsidiary color + `link-hover`
- **Icon:** SubsidiaryIcon at 160px, `opacity-20`, right-aligned on desktop

### Section Label + Headline
- **Label:** `text-label text-secondary` (e.g. "OUR ECOSYSTEM", "WHY FAVA MARKETS")
- **Headline:** `text-subhead text-primary`

### Stats/Numbers
- **Number:** `text-numbers text-primary` (or `text-gold` for emphasis)
- **Label:** `text-caption text-secondary`

### Bottom CTA Section
- **Background:** `bg-surface border-t border-border`
- **Headline:** `text-display-alt text-primary`
- **Subtitle:** `text-caption text-secondary`
- **Primary button:** `border border-{color} text-{color} text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-{color}/10`
- **Secondary link:** `text-label text-secondary link-hover hover:text-primary`

### Body Text
- **Default:** `text-secondary` (inherits 15px light from body)
- **Emphasis:** `text-primary` (same size, lighter color)
- **Small/meta:** `text-[13px] text-secondary` or `text-caption`

---

## Design Rules

1. **Border radius:** 0px everywhere. No exceptions.
2. **Shadows:** None. Ever.
3. **Border width:** 1px only (except 2px accent lines on cards/rows).
4. **Max width:** `max-w-[1160px] mx-auto px-20 max-lg:px-6`
5. **Section spacing:** `py-[120px] max-md:py-20` (or `py-[100px]` for shorter sections)
6. **No hardcoded hex colors.** Use theme tokens exclusively.
7. **No inline `style={}` for fonts or colors.** Use CSS classes.
