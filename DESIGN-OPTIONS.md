# FAVA Capital — Design Directions

Three distinct approaches. Each solves the same brief differently:
*Make sophisticated investors and everyday people alike feel that FAVA is where serious money belongs.*

---

## What's wrong with the current design

Before the options — let's name the problems honestly:

- **Everything screams.** Hero text at 8xl, section headings at 5xl — nothing has hierarchy when everything is big. The eye has nowhere to rest.
- **Generic "dark crypto" aesthetic.** Purple gradients + big text + cards = every Web3 site from 2022. It signals "startup" not "institution."
- **No rhythm.** Every section is the same: heading, grid of cards, repeat. No variation in pacing or density. No moments of breath.
- **Missing the details that signal craft.** No custom cursor behavior, no considered hover states, no typographic finesse, no scroll choreography. These are the things humans notice subconsciously — their absence says "template."
- **The spacing is loose and floaty.** Luxury is tight. Precision. Every pixel justified. Right now it feels like elements are swimming in space rather than placed with intent.

---

## Direction A: "The Vault"

**Thesis:** *Confidence is quiet. The most powerful institutions in the world don't shout — they whisper, and the room leans in.*

Think: Vanguard's authority + Aesop's restraint + Cartier's precision. Near-monochrome with gold as the sole accent. Information-dense but never cluttered. The kind of site where every single pixel has been argued over.

### Color

Strip back dramatically. Purple becomes a deep, almost-black background tone — not a feature color.

```
Background:    #08060E  (near-black with purple undertone — NOT pure black)
Surface:       #0F0B18  (cards, elevated elements — barely lighter)
Border:        #1A1525  (1px lines only — hairline dividers)
Text Primary:  #E8E4EC  (platinum — not pure white, easier on eyes)
Text Secondary:#6B6478  (muted purple-grey — for labels, dates, metadata)
Text Tertiary: #3D3650  (barely visible — for decorative text, watermarks)
Gold:          #C4A265  (warmer, more muted than current — old money, not crypto)
Gold Hover:    #D4B87A  (subtle lift on interaction)
```

No subsidiary accent colors on the homepage. Those live within each subsidiary section only. The holding company is monochrome + gold. Period.

### Typography Scale (desktop)

**This is where we fix the "everything is big" problem.**

```
Display:       Cormorant Garamond Light — 48px / 1.1 leading / -0.02em tracking
               (NOT 96px. Restraint. Let the words do the work.)

Section Head:  Outfit Medium — 13px / 1.0 leading / 0.15em tracking / UPPERCASE
               (Yes, 13px. Small labels above sections. Think luxury fashion.)

Body:          DM Sans Light — 15px / 1.65 leading / 0.01em tracking
               (Generous line-height. Reads like a prospectus, not a billboard.)

Caption:       DM Sans Regular — 11px / 1.5 leading / 0.08em tracking / UPPERCASE
               (For metadata, dates, categories. Almost whispered.)

Numbers:       Cormorant Garamond Regular — 36px / 1.0 leading / -0.03em tracking
               (Stats and figures. Slightly larger. Numbers deserve presence.)
```

**Key principle:** The display font at 48px on a 1440px screen feels confident but not aggressive. The section labels at 13px uppercase create a Swiss-poster tension between small and large. This contrast IS the design.

### Layout & Spacing

```
Max width:        1200px (NOT 1280. Tighter. Content doesn't need to stretch.)
Page margins:     80px sides on desktop, 24px mobile
Section padding:  120px vertical (not 96px — breathe between sections)
Grid:             12-column, 20px gutter
Card padding:     32px (consistent, never more)
```

### The Homepage — Section by Section

**1. Hero (100vh)**

No gradient. No animation on load. Just:
- The Lattice mark at 40px height, top-left area, faded to 30% opacity (watermark, not feature)
- Two lines of 48px Cormorant Garamond, vertically centered, left-aligned (NOT centered):
  ```
  Building Empires.
  Compounding Futures.
  ```
- Below the text, a single gold hairline, 60px wide
- Below that, in 11px uppercase DM Sans: `SCROLL TO EXPLORE`
- No button. No CTA. The scroll instruction IS the CTA.
- The entire hero is almost empty. That emptiness is the statement.

**2. The Ecosystem (not "Ecosystem Grid")**

- Section label: `01 — OUR VERTICALS` in 13px uppercase, left-aligned, text-secondary color
- Below: four rows (not cards, ROWS). Each row is a horizontal band:
  ```
  [Number]  [Name]                    [One-line descriptor]           [→]
  01        FAVA Wealth               Multi-strategy investment fund   →
  02        FAVA Markets              Institutional FX & CFD access    →
  03        Cryptorio                 The regulated exchange           →
  04        FAVA Commodities          Physical & derivative exposure   →
  ```
- Each row separated by a 1px border-bottom in #1A1525
- On hover: the row's background shifts to #0F0B18, the arrow slides right 8px, and the name color transitions to gold. Duration: 400ms ease-out.
- No icons. No accent colors. No cards. Just information, beautifully typeset.

**3. Vision Statement**

- A single line of 48px Cormorant Garamond, spanning full width:
  ```
  We don't predict markets — we build the infrastructure that moves them.
  ```
- The em-dash in gold.
- Below it: a 1px gold line, full width, fading to transparent at both ends.
- That's it. One sentence. One line. The section is 400px tall — mostly space.

**4. Credibility Metrics**

- Four numbers in a row, each in 36px Cormorant Garamond:
  ```
  5              1,000+          24/7            4
  Verticals      Instruments     Access          Jurisdictions
  ```
- Numbers in platinum. Labels in 11px uppercase text-secondary.
- Numbers animate on scroll — they count up from 0 using easeOutExpo over 2 seconds. Not flashy, just precise.
- Separated by vertical 1px gold hairlines, not gutters.

**5. Latest Intelligence**

- Section label: `05 — INSIGHTS`
- Three items, no cards. Just:
  ```
  MARKETS · 12 APR 2026                    Q1 Commodities Outlook: Supply
                                            Constraints Reshape Pricing →
  ```
- Date + category on the left in caption style. Title on the right in body style with arrow.
- Hover: title shifts to gold.

**6. Footer**

- Dramatically simplified. One section:
  - Left: Lattice mark (20px) + "FAVA Capital Group" in 11px uppercase
  - Right: Single row of links in 11px uppercase, spaced 40px apart
  - Below: 1px border, then regulatory text in text-tertiary (barely visible, as it should be)
- Total footer height: ~160px. Not a landing page. A footer.

### Micro-interactions & Subtle Details

These are what make a $500K site feel different from a template:

- **Custom cursor:** On desktop, replace the default cursor with a small (8px) gold dot. On hovering interactive elements, the dot expands to 40px with a gold ring and the element name appears in 9px uppercase inside. Feels like a precision instrument.
- **Scroll progress:** A 1px gold line at the very top of the viewport that fills left-to-right as you scroll. No number, no percentage. Just a line.
- **Page transitions:** When navigating between pages, the current content fades to 0 opacity over 200ms, then the new content fades in from 0 over 300ms. Subtle, not theatrical.
- **Link hover underlines:** Don't use color change alone. Add a gold underline that animates from left-to-right on hover (clip-path or scaleX transform). 300ms.
- **Number entry animation:** Any statistic on any page counts up from 0 when it enters the viewport. Use Intersection Observer + requestAnimationFrame. EaseOutExpo curve.
- **Parallax depth:** On the hero, the text moves at 0.95x scroll speed. The Lattice watermark moves at 0.85x. Creates subtle depth without being gimmicky.
- **Grain texture:** A very subtle film grain overlay (opacity: 0.03) on the entire page. Creates warmth and texture that differentiates from the flatness of CSS-only sites. Use an SVG filter, not an image.
- **Hover on rows:** Elements don't just change color. They shift 2px to the right. Physical. Like pushing a drawer.
- **Loading state:** Before the page renders, show just the Lattice mark at 20% opacity, centered, for 400ms. Then fade into the page. First impression: the mark, alone, confident.

### Why This Works

Institutional investors see: restraint, precision, seriousness. Nothing frivolous.
Retail investors see: "this feels like a real bank, not a startup."
Everyone feels: "these people care about every detail. I trust them with my money."

---

## Direction B: "The Ledger"

**Thesis:** *Finance is information. Present data so beautifully that it becomes the design itself. Bloomberg meets Monocle — density done right.*

Think: Financial Times' web presence + Swiss typographic grids + the precision of a well-set annual report. More content-forward than Direction A. Information IS the aesthetic.

### Color

Warmer, with a subtle shift toward charcoal rather than purple-black.

```
Background:    #0A0A0F  (neutral near-black — no purple tint)
Surface:       #111116  (warm dark grey)
Surface Alt:   #16161C  (alternating rows, subtle differentiation)
Border:        #222228  (slightly more visible than Direction A)
Text Primary:  #E2E0E6  (warm platinum)
Text Secondary:#7A7880  (neutral grey — no purple)
Gold:          #B89B5E  (muted, antique gold — like an old ledger stamp)
Teal Data:     #5BA69E  (for positive numbers, up-trends)
Rose Data:     #C47272  (for negative numbers, down-trends — not aggressive red)
```

### Typography Scale

```
Display:       Cormorant Garamond Regular — 40px / 1.15 leading / -0.01em
               (Regular weight, not Light. More authoritative.)

Section Head:  Outfit Semibold — 11px / 1.0 / 0.2em tracking / UPPERCASE
               (Even smaller. Tabs and labels.)

Subhead:       Cormorant Garamond Regular — 24px / 1.3 / 0em
               (For card titles, article headlines within sections.)

Body:          DM Sans Light — 14px / 1.7 / 0.005em
               (Slightly smaller than Direction A. Denser.)

Data:          DM Sans Mono or tabular — 13px / 1.4 / 0.02em
               (For numbers in tables. Monospaced alignment.)

Caption:       Outfit Medium — 10px / 1.4 / 0.12em / UPPERCASE
               (Tiny. For timestamps, tags, metadata.)
```

### The Homepage — Section by Section

**1. Hero (100vh, split layout)**

Left 60% of the screen:
- 11px section label: `FAVA CAPITAL GROUP`
- 40px display: `Building Empires.` / `Compounding Futures.`
- 14px body text, 3 lines max: the elevator pitch
- A text link (not button): `Explore our ecosystem →` in 11px uppercase gold

Right 40%:
- A real-time-styled data panel (static but designed to look live):
  ```
  ┌─────────────────────────┐
  │ MARKET PULSE            │
  │                         │
  │ XAU/USD    2,341.50  ▲  │
  │ EUR/USD    1.0892    ▼  │
  │ BTC/USD   67,432.00  ▲  │
  │ BRENT      78.52     ▲  │
  │                         │
  │ Last updated: 14:32 UTC │
  └─────────────────────────┘
  ```
- Monospaced numbers. Teal for up, rose for down. 1px border panel.
- This immediately says "we are a financial company" not "we are a brand."

**2. Verticals as Data Cards**

A 2x2 grid, but not the typical "icon + title + description" cards:

Each card is structured like a financial summary:
```
┌──────────────────────────────┐
│ FAVA WEALTH                  │
│ Investment Fund              │
│                              │
│ Strategy     Multi-asset     │
│ Horizon      Long-term       │
│ Min. Entry   On application  │
│                              │
│ Learn more →                 │
└──────────────────────────────┘
```
- Key-value pairs. Like a term sheet summary. No prose.
- Hover: border shifts to gold. A subtle background gradient appears (radial, from top-left corner, gold at 3% opacity).

**3. Performance Ribbon**

A horizontal scrolling ticker (or static ribbon) showing key figures:
```
AUM $2.4B  ·  Markets 40+  ·  Instruments 1,000+  ·  Jurisdictions 4  ·  Team 120+
```
- Single line. 13px DM Sans. Gold dots as separators.
- Sits between sections as a divider, not its own section.

**4. Insights Grid (Editorial)**

Three columns. Each article presented as:
```
12 APR 2026
COMMODITIES

Q1 Outlook: Supply
Constraints Are
Reshaping Pricing
Dynamics

A 4-min read →
```
- Date and category in 10px caption.
- Title in 24px Cormorant Garamond, left-aligned.
- Read time at the bottom.
- Hover: the entire card shifts up 4px (translateY). No color change needed.

**5. Footer**

Two-column:
- Left: Logo, one-line tagline, regulatory text
- Right: Three columns of links in 11px uppercase

### Micro-interactions

- **Table row hover:** On any data row, hover causes a 1px left gold border to appear (slide in from top). Like a ledger being annotated.
- **Number formatting:** All numbers use tabular figures (font-variant-numeric: tabular-nums). Decimal points vertically align. This tiny detail signals that someone who understands finance built this.
- **Scroll-linked header:** As you scroll past the hero, the navbar gains a subtle 1px bottom border and the background opacity increases from 60% to 90%. Smooth, 200ms.
- **Data shimmer:** The Market Pulse panel has a very subtle shimmer animation on its numbers — a horizontal gradient that sweeps across once every 8 seconds, suggesting liveness. CSS keyframes, not JS.
- **Card border animation:** On hover, card borders don't just change color. The gold color "draws" around the card — top, right, bottom, left — over 500ms using border-image or pseudo-elements.
- **Section entry:** Sections don't fade in from below (generic). Instead, a 1px horizontal line draws from left to right at the top of each section as it enters the viewport, then the content appears. Like a page being printed.

### Why This Works

Institutional investors see: data density, financial fluency, Bloomberg-tier seriousness.
Retail investors see: "these people clearly know their numbers."
Everyone feels: "this is a company that lives and breathes markets."

---

## Direction C: "The Maison"

**Thesis:** *Apply the language of fashion-house luxury to finance. Hermès sells leather goods at 10x their material value through brand experience. We sell financial trust the same way.*

Think: Bottega Veneta's website + Aman Resorts + the calm authority of a private bank in Zurich. Smooth, sensory, cinematic. More white space than either A or B. Slower pace. Every scroll feels intentional.

### Color

Invert the paradigm. NOT dark mode by default. Use a warm, off-dark palette that's softer.

```
Background:    #0C0B10  (soft dark — almost warm)
Surface:       #14131A  (subtle lift)
Divider:       rgba(255, 255, 255, 0.06)  (barely-there lines)
Text Primary:  #F0EDE4  (warm ivory — NOT cool white)
Text Secondary:#8A8590  (lavender grey)
Text Muted:    #4A4652  (for decorative elements)
Gold:          #C9A96E  (warm, Hermès-adjacent)
Cream Accent:  #E8DFD0  (for select hover states — warmth)
```

### Typography Scale

This direction uses contrast more dramatically — VERY small meets moderately large.

```
Display:       Cormorant Garamond Light Italic — 44px / 1.15 / -0.02em
               (ITALIC. This is the key differentiator. Italic serif = 
               editorial luxury. Every fashion house does this.)

Section Label: Outfit Regular — 10px / 1.0 / 0.2em / UPPERCASE
               (Tiny labels. Almost invisible. You have to look.)

Subhead:       Cormorant Garamond Regular — 22px / 1.35 / 0em
               (For secondary headlines.)

Body:          DM Sans Light — 14.5px / 1.75 / 0.01em
               (Very generous line height. Reads like a coffee table book.)

Accent Text:   Cormorant Garamond Light Italic — 18px / 1.5 / 0.01em
               (For pull quotes, descriptions. Italics carry the brand voice.)
```

**The italic serif is the signature.** Every hero, every pull quote, every moment of brand voice uses Cormorant Garamond Light Italic. It's unexpected in finance, which is exactly the point.

### Layout

```
Max width:     1100px (narrower than both A and B. Luxurious constraint.)
Grid:          Asymmetric. 40/60 or 30/70 splits. NOT equal columns.
Section gaps:  160px (more space than you think you need. Then more.)
```

### The Homepage — Section by Section

**1. Hero (100vh+, full-screen cinematic)**

- The first thing you see: nothing. Dark screen for 600ms.
- Then the Lattice mark fades in, centered, at 50% opacity. Holds for 800ms.
- Then it scales down to 30px and moves to where the navbar logo sits, AND simultaneously the headline types out character by character:
  ```
  Building Empires.
  Compounding Futures.
  ```
- The type-out is in Cormorant Garamond Light Italic, 44px. NOT instant. Each character appears over 40ms. Total animation: ~2.5 seconds.
- Below the headline, after a pause, a single line appears: `Est. 2024 · London · Dubai` in 10px uppercase Outfit.
- Scroll indicator: a single thin vertical gold line (40px tall) that pulses (opacity 0.3 to 0.8) at the bottom center.

**This is a 4-second experience before the user scrolls.** Like walking into a hotel lobby — you pause, you take it in, you feel the space.

**2. The Verticals (Staggered reveal)**

As you scroll, each subsidiary reveals one at a time, not in a grid:

```
                                    FAVA Wealth
                                    Investment Fund

        We compound returns across market cycles through
        conviction-driven, multi-strategy allocation.

                                    Explore →
```

- Asymmetric layout. Text block sits right-of-center.
- On scroll, the text slides in from the right (translateX 40px to 0) with opacity fade. 600ms.
- Between each subsidiary: 200px of empty space. You scroll through them like pages of a book.
- Each subsidiary's name is in 22px Cormorant Regular. Description in 18px italic.
- The "Explore →" is in 10px uppercase gold Outfit.

**3. A Full-Screen Moment**

Between the verticals and the stats, insert a full-viewport section that is just:

```


                  "Capital flows where conviction leads."

                             — FAVA Capital


```

- 44px italic Cormorant. Centered. Gold quotation marks (the " characters are in gold, the rest in ivory).
- The attribution in 10px uppercase, text-secondary.
- Background: a very slow-moving gradient that shifts hue by about 5 degrees over 20 seconds. Purple-to-slightly-more-purple. You can barely tell it's moving. But you FEEL it.

**4. Credibility (Minimal)**

Not a row of big numbers. Instead:

```
  01    Five regulated verticals across three continents.
  02    Over one thousand tradeable instruments.
  03    Twenty-four-hour market access, every day.
  04    Four jurisdictional licences and counting.
```

- Numbers in 10px gold uppercase. Statements in 18px italic Cormorant.
- Numbers are written out as words ("Five" not "5"). This is a luxury brand choice. Hermès doesn't put "€9,500" on their site — they write "nine thousand five hundred."
- Each line reveals on scroll, staggered 150ms apart.

**5. News (Editorial)**

Single column. Each article:
```
                              12 April 2026

        FAVA Markets Launches Zero-Commission
        Trading Across 400+ Instruments

        A new chapter in accessible institutional-grade
        execution for retail and professional traders.

                              Read →
```

- Title in 22px Cormorant Regular. Excerpt in 14.5px DM Sans Light.
- Centered. Single column. Like a broadsheet newspaper.
- On hover: the "Read →" arrow slides right. That's it.

**6. Footer**

- Almost nothing. Centered layout:
  - Lattice mark at 24px height
  - `FAVA Capital Group` in 10px uppercase, 0.2em tracking
  - `London · Dubai` below
  - One row of links: `Wealth · Markets · Cryptorio · Commodities · About · Legal · Contact`
  - Gold hairline
  - Regulatory text in 10px text-muted
- Total height: 200px.

### Micro-interactions

- **Smooth scroll:** The ENTIRE site uses Lenis or similar smooth-scroll library. Not just "smooth," but with a custom easing curve that decelerates slowly — like pushing through silk. Friction: 0.07, lerp: 0.1.
- **Cursor:** No custom cursor (unlike Direction A). Instead, on hovering any link, the link text gains 1px of letter-spacing over 300ms. The text physically b r e a t h e s. Subtle. Luxurious.
- **Image treatment:** If any images are added later (team photos, office shots), they should have a desaturation filter (90% saturation) and a subtle warm color overlay. Nothing looks "stock photo."
- **Scroll-triggered parallax:** Each text block has a barely perceptible parallax (0.98x speed). You can't consciously see it, but it creates depth.
- **Gold line animations:** Every gold hairline on the page draws from left-to-right as it enters the viewport. 800ms, easeInOutCubic.
- **Nav behavior:** The navbar is invisible on the hero. It fades in (opacity 0 to 1) only after you scroll past the first viewport height. Scroll back to top: it disappears again.
- **Page transitions:** When clicking a link, the current page content splits — top half slides up, bottom half slides down — revealing the new page beneath. 400ms. Cinematic.
- **Subsidiary color bleed:** When you hover over a subsidiary name, a tiny (2px) dot of their accent color appears to the left of the name. That's the ONLY place subsidiary colors appear on the homepage.
- **Scroll-aware typography:** As the hero text scrolls up and out of view, its letter-spacing increases by 0.05em and opacity decreases. The text dissolves as you leave it behind.

### Why This Works

Institutional investors see: "This is a private bank, not a tech company."
Retail investors see: "This feels premium. My money is in good hands."
Everyone feels: "Someone with taste built this. I want to be part of this world."

---

## Comparison Matrix

| Dimension            | A: The Vault              | B: The Ledger              | C: The Maison              |
|----------------------|---------------------------|----------------------------|----------------------------|
| **Personality**      | Silent confidence         | Intelligent density        | Sensory luxury             |
| **Display font size**| 48px                      | 40px                       | 44px italic                |
| **Label size**       | 13px                      | 11px                       | 10px                       |
| **Content density**  | Low (space IS the design) | High (data IS the design)  | Low (pace IS the design)   |
| **Layout**           | Left-aligned, vertical    | Grid-based, structured     | Centered, cinematic        |
| **Signature detail** | Gold custom cursor         | Drawing card borders       | Text letter-spacing hover  |
| **Hero approach**    | Near-empty, 2 lines       | Split: brand + data panel  | Animated entrance sequence |
| **Color usage**      | Monochrome + gold only    | Neutral + data colors      | Warm dark + gold + cream   |
| **Scroll behavior**  | Standard w/ parallax      | Section line-draw entry    | Smooth scroll (Lenis)      |
| **Nav visibility**   | Always visible             | Evolves on scroll          | Hidden until scroll        |
| **Footer**           | Minimal one-line          | Two-column structured      | Centered, barely there     |
| **Closest real-world**| Aesop + Vanguard         | FT + Bloomberg             | Bottega Veneta + Aman      |
| **Risk**             | Could feel too cold       | Could feel too dense       | Could feel too slow        |
| **Audience skew**    | Institutional-first       | Balanced                   | Retail/aspirational-first  |

---

## My Recommendation

**Direction A with selective elements from C.**

Here's why:

A's restraint is the strongest signal of institutional credibility. The near-empty hero, the row-based ecosystem, the quiet typography — these choices say "we don't need to impress you, we already are impressive." That's the energy BlackRock and Bridgewater project.

But steal from C:
- The **smooth scroll** (Lenis). It's the single highest-impact UX improvement and costs nothing in design coherence.
- The **italic serif** for brand-voice moments (the vision statement, pull quotes). Not everywhere — just the emotional beats.
- The **invisible navbar on hero** that fades in on scroll.
- The **subsidiary color dot** on hover — it's brilliant restraint.
- The **letter-spacing hover** on links instead of (or in addition to) the custom cursor.

Skip C's entrance animation (too slow for repeat visitors) and B's data panel on the hero (signals "fintech" more than "holding company").

This hybrid gives you: **institutional authority (A) with sensory polish (C).**

---

*Pick a direction (or confirm the hybrid) and I'll rebuild every component from scratch.*
