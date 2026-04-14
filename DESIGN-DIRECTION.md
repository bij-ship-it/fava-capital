# FAVA Capital — Design Direction
## "The Vault" × "The Maison" — Purple Edition

**One line:** *Institutional silence, sensory polish, unmistakably FAVA.*

---

## The Purple Philosophy

Purple is FAVA. But purple used like Cadbury, not like a gaming site.

The lattice mark tells us exactly how to use it. Look at the icon: four pillars, each a different shade — from the deepest near-black purple to a brighter violet — bound by a single gold bar. That's the entire design system in one mark:

- **Depth through shade variation**, not through adding more colors
- **Gold as the punctuation**, not the sentence
- **The darkest purple IS the background** — it replaces black
- **The mid-purples are structural** — borders, dividers, subtle surfaces
- **The bright purple is rare** — a hover state, a single active element, a moment of emphasis

Rule: **You should always feel purple without seeing much of it.** The background has a purple undertone. The borders have a purple warmth. The hover states reveal purple. But if you screenshot the page and squint, it looks almost monochrome. The purple is felt, not shouted.

---

## Color System

Derived directly from the lattice mark's palette:

```
┌─────────────────────────────────────────────────────────┐
│  BACKGROUNDS                                            │
│                                                         │
│  Base         #0C0716    Purple-black. THE background.  │
│  Surface      #120E1E    Cards, elevated panels.        │
│  Elevated     #17122A    Hover states on surfaces.      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  BORDERS & STRUCTURE                                    │
│                                                         │
│  Border       #1E1735    Hairline dividers. 1px only.   │
│  Border Hover #2D1B69    Visible on interaction.        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  TEXT                                                   │
│                                                         │
│  Primary      #E8E4EC    Platinum. Body + headlines.    │
│  Secondary    #7B6F8E    Muted purple-grey. Labels.     │
│  Tertiary     #3D3156    Near-invisible. Watermarks.    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  ACCENT                                                 │
│                                                         │
│  Gold         #C4A265    Warm, muted. Lines + moments.  │
│  Gold Hover   #D4B87A    Lift on interaction.           │
│  Bright       #8B5CF6    Rare. Active states only.      │
│  Bright Muted #8B5CF620  At 12% opacity for glows.     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  SUBSIDIARY (within their sections only)                │
│                                                         │
│  Wealth       #059669    Emerald. Sparingly.            │
│  Markets      #14B8A6    Teal. Sparingly.               │
│  Cryptorio    #6366F1    Indigo. Sparingly.              │
│  Commodities  #D97706    Amber. Sparingly.               │
│                                                         │
│  On the HOMEPAGE: subsidiary colors appear ONLY as a    │
│  small dot on hover. Nowhere else.                      │
└─────────────────────────────────────────────────────────┘
```

**The key insight:** #0C0716 (base) is NOT black. It's the darkest purple from the mark, pushed further. Every "dark" element on the page carries that purple DNA. Your eye reads it as dark, but your brain registers warmth. This is what separates FAVA from every site using #000000 or #0D0D0D.

---

## Typography

```
Display        Cormorant Garamond Light Italic    44px / 1.12 / -0.02em
               The signature. Hero statements, vision quotes, brand voice.
               Italic is the differentiator — unexpected in finance,
               impossible to mistake for a template.

Display Alt    Cormorant Garamond Light            44px / 1.12 / -0.02em
               Non-italic variant for subsidiary page heroes where
               italic would feel too editorial.

Section Label  Outfit Medium                       11px / 1.0 / 0.18em / UPPERCASE
               Tiny. Structured. Above every section. The scaffolding.

Subhead        Cormorant Garamond Regular           22px / 1.35 / 0em
               Card titles, article headlines, secondary emphasis.

Body           DM Sans Light                        15px / 1.7 / 0.01em
               Everything that needs to be read. Generous leading.

Caption        DM Sans Regular                      11px / 1.4 / 0.06em / UPPERCASE
               Metadata, dates, tags, categories.

Numbers        Cormorant Garamond Regular            32px / 1.0 / -0.02em
               Statistics. Tabular-nums enabled.
```

**Why italic for display?** Every financial website uses a regular-weight serif for headlines. Every single one. The italic breaks that pattern instantly. It says editorial, considered, authored. It's the difference between a press release and a letter from the founder. It also pairs beautifully with the 11px uppercase labels — the contrast between the flowing italic and the rigid caps creates tension and elegance.

**Why these sizes?** At 44px, the display text commands attention without dominating. At 11px, the labels require you to look — they reward attention. This scale ratio (4:1) creates the visual hierarchy through extreme contrast, not through everything being large.

---

## Layout Rules

```
Max content width:    1160px
Page side padding:    80px desktop / 24px mobile
Section spacing:      140px desktop / 80px mobile
Card internal pad:    28px
Grid:                 12-column, 16px gutter
Border radius:        0px everywhere. Sharp corners. Institutional.
Border width:         1px everywhere. Never 2px.
```

**Asymmetry:** Not everything is centered. The hero is left-aligned. The vision statement is centered. The verticals section is full-width. This variation in alignment creates rhythm — like a magazine layout, not a PowerPoint.

---

## The Homepage — Every Section

### 1. Hero (100vh)

The navbar is **invisible** on the hero. It fades in (opacity 0→1, 300ms) only after you scroll past 80vh. Scroll back to top: it fades out again.

Layout:
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│                                                      │
│                                                      │
│   FAVA CAPITAL GROUP                                 │  ← 11px uppercase, text-secondary
│                                                      │
│   Building Empires.                                  │  ← 44px Cormorant Light Italic
│   Compounding Futures.                               │     text-primary (#E8E4EC)
│                                                      │
│   ━━━━━━━━                                           │  ← 60px gold line, 1px height
│                                                      │
│   Scroll to explore                                  │  ← 11px uppercase, text-tertiary
│                                                      │
│                                                      │
│                                                      │
│                        │                             │  ← 40px gold vertical line, pulsing
│                        │                                   opacity 0.2–0.6, centered bottom
│                                                      │
└──────────────────────────────────────────────────────┘
```

Left-aligned text sitting at roughly 40% from top. The Lattice mark does NOT appear in the hero — it's in the navbar and that's enough. The hero is pure typography.

**Background:** Not a flat color. A radial gradient so subtle you can barely see it:
- Center-left: #120E1E (just slightly lighter than base)
- Edges: #0C0716
- This creates a vignette effect. The text area has the faintest warm glow. Like a reading lamp in a dark room.

**On load:** Text fades in from opacity 0 to 1 over 800ms, with a 4px upward translate. The gold line draws left-to-right over 600ms, starting 200ms after the text. No bounce, no overshoot. EaseOutCubic.

### 2. The Verticals (scrolling rows)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   01 — OUR ECOSYSTEM                                 │  ← 11px label, text-secondary
│                                                      │
│   ─────────────────────────────────────────────────  │  ← 1px border #1E1735
│                                                      │
│   01    FAVA Wealth                                  │
│         Multi-strategy investment fund         →     │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
│   02    FAVA Markets                                 │
│         Institutional FX & CFD execution       →     │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
│   03    Cryptorio                                    │
│         The regulated digital asset exchange   →     │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
│   04    FAVA Commodities                             │
│         Physical & derivative commodity access →     │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Row number: 11px caption, gold
- Name: 22px Cormorant Regular, text-primary
- Descriptor: 15px DM Sans Light, text-secondary
- Arrow: text-tertiary, transitions to gold on hover

**Hover behavior (THIS IS IMPORTANT):**
1. Background shifts to #120E1E (surface) — 300ms
2. A 2px left border in the subsidiary's accent color slides in from top — 400ms
3. The name shifts 4px right — 300ms
4. The arrow shifts 8px right and turns gold — 300ms
5. A tiny dot (4px) in the subsidiary's accent color appears before the number — 300ms

All of these happen simultaneously. The row comes alive without being flashy.

**On scroll-entry:** Each row fades in staggered — 100ms delay between each. From opacity 0, translateX -12px. Subtle. Not dramatic.

### 3. Vision Statement

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│                                                      │
│                                                      │
│          We don't predict markets —                  │  ← 44px Cormorant Light Italic
│        we build the infrastructure                   │     text-primary, centered
│             that moves them.                         │
│                                                      │
│    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │  ← full-width gold line
│                                                      │     gradient: transparent → gold → transparent
│                                                      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Section height: ~50vh. Mostly space.
- Background: #0C0716 with the grain texture overlay at 0.025 opacity
- The em-dash character is in gold (#C4A265)
- The gold line draws from center outward (both directions simultaneously) on scroll-entry, 1000ms

This section exists to make you pause. One thought. Let it land.

### 4. Credibility Metrics

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   02 — BY THE NUMBERS                                │  ← 11px label
│                                                      │
│     5          1,000+       24/7         4           │  ← 32px Cormorant Regular, text-primary
│   ──────     ──────────   ──────      ──────         │  ← 1px gold lines under each number
│  Regulated   Tradeable     Market     Global         │  ← 11px caption, text-secondary
│  Verticals   Instruments   Access    Jurisdictions   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Four columns in a row. Separated by generous space (not lines between them — the space IS the separator).
- Small gold underline beneath each number (30px wide, centered)
- Numbers count up from 0 on scroll-entry using easeOutExpo, 1.5 seconds
- Each metric staggers 150ms after the previous

### 5. Latest Intelligence

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   03 — INSIGHTS                          View all →  │  ← label left, link right
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
│   MARKETS · 12 APR 2026                              │  ← 11px caption, text-secondary
│                                                      │
│   FAVA Markets Launches Zero-Commission              │  ← 22px Cormorant Regular
│   Trading Across 400+ Instruments                    │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
│   CRYPTO · 08 APR 2026                               │
│                                                      │
│   Cryptorio Achieves SOC2 Type II                    │
│   Compliance Certification                           │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
│   COMMODITIES · 01 APR 2026                          │
│                                                      │
│   Q1 Outlook: Supply Constraints                     │
│   Reshape Global Commodity Pricing                   │
│                                                      │
│   ─────────────────────────────────────────────────  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- No cards. No thumbnails. Just beautifully typeset rows.
- Category tag color matches subsidiary accent (MARKETS in teal, CRYPTO in indigo, etc.)
- On hover: title text shifts to gold, 300ms. The border-bottom below that row brightens to #2D1B69. The row shifts right 2px.
- "View all →" in 11px uppercase gold, arrow slides on hover.

### 6. Footer

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  ← 1px gold line, full width fade
│                                                      │
│   [Lattice Mark]  FAVA CAPITAL GROUP                 │  ← 24px mark + 11px text
│                                                      │
│   Wealth · Markets · Cryptorio · Commodities         │  ← 11px, text-secondary
│   About · Careers · News · Partners · Legal          │
│                                                      │
│   ─────────────────────────────────────────────────  │  ← 1px border
│                                                      │
│   FAVA Capital Group and its subsidiaries are        │  ← 11px, text-tertiary
│   regulated financial entities. Trading carries      │
│   significant risk. Past performance does not        │
│   indicate future results.                           │
│                                                      │
│   © 2026 FAVA Capital Group                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Centered. Quiet. ~180px tall.
- The lattice mark is small (24px height). It doesn't need to be big — you've seen it.
- Links are separated by the · character (middot), not organized into columns. One line or two. Simple.
- Regulatory text is almost invisible (#3D3156). It's there because it must be, not because it's design.

---

## The Navbar

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [Lattice Mark] FAVA    Wealth  Markets  Cryptorio   │
│                         Commodities  About  News     │
│                                          Contact →   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Wait — that's too many items. Simplify:

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [Mark + FAVA]     Wealth  Markets  Cryptorio        │  ← 11px Outfit Medium uppercase
│                    Commodities  About                 │
│                                          Contact →   │  ← 11px, gold
│                                                      │
└──────────────────────────────────────────────────────┘
```

Refined:
- Left: Lattice mark (20px) + "FAVA" in 11px uppercase Outfit, tracking 0.2em
- Center: nav links in 11px uppercase Outfit, text-secondary, 32px gaps between
- Right: "Contact" in 11px uppercase gold with → arrow
- Height: 56px total. Tight. Not a chunky bar.
- Background: #0C0716 at 85% opacity + backdrop-blur (12px)
- Bottom border: 1px #1E1735

**Link hover:** Underline animates from left to right using scaleX transform (origin: left). Gold color. 250ms. No color change on the text itself — just the underline appears.

**Active state:** Current page link has a persistent gold underline. No bold, no color change. Just the line.

**Scroll behavior on homepage:**
- At 0vh: navbar is fully transparent, no border. Links still visible but the bar itself is invisible.
- At 80vh: navbar fades in with background + border. 300ms transition.
- This means the hero feels full-screen with no UI chrome.

---

## Global Micro-interactions

### Smooth Scroll
Use Lenis with these settings:
- `lerp: 0.09` (slightly slower than default — silky, not sluggish)
- `smoothWheel: true`
- `wheelMultiplier: 0.8` (slower scroll = more time with each section)

This single change transforms the entire feel. Every financial template scrolls with the browser default. Custom scroll physics = "someone considered this."

### Scroll Progress
A 1px line across the very top of the viewport. Starts at 0 width, ends at 100% width.
- Color: gradient from #8B5CF6 (bright purple) on the left to #C4A265 (gold) on the right
- This is the ONLY place bright purple appears persistently. It ties to the brand without being loud.

### Link Hover
All text links: gold underline draws left→right, 250ms easeOutCubic. The text color does NOT change. The underline IS the feedback.

### Section Entry
Every section fades in on scroll-entry:
- Opacity: 0 → 1
- TranslateY: 16px → 0
- Duration: 600ms
- Trigger: when 15% of the section is in viewport
- Each child element within the section staggers 80ms

NOT translateY 40px. Not translateY 60px. 16px. Subtle. You feel the motion without seeing "an animation."

### Gold Line Draw
Every horizontal gold line on the page:
- Draws from left to right (or center outward for the vision section)
- Duration: 800ms
- Triggered on scroll-entry
- Uses scaleX transform with transform-origin: left (or center)

### Number Count-Up
Statistics count from 0 to final value:
- Duration: 1.5s
- Easing: easeOutExpo (fast start, slow finish — numbers decelerate into place)
- Triggered on scroll-entry via Intersection Observer
- Integers only, no decimals ticking

### Letter-Spacing Breath
On hovering the subsidiary rows (ecosystem section), the name text gains +0.02em letter-spacing over 300ms. It physically opens up. Like the text is taking a breath. You can barely see it but you FEEL it.

### Grain Overlay
SVG filter-based grain across the entire page:
- Opacity: 0.025 (almost invisible)
- `feTurbulence baseFrequency="0.75" numOctaves="4"`
- Fixed position, doesn't scroll with content
- This adds tactile warmth. Screens feel flat without it. Print has paper texture. This is the digital equivalent.

### Subtle Background Pulse
On the hero section only:
- The radial gradient center point shifts position very slowly (over 20 seconds, looping)
- Moves in a small elliptical path (maybe 5% of viewport width)
- You can't consciously perceive it, but the hero feels alive, not static
- CSS animation, not JS

### Cursor Refinement
No custom cursor (too "agency portfolio"). Instead:
- All clickable elements: `cursor: pointer` with a 50ms delay on hover state application
- This tiny delay (imperceptible consciously) makes interactions feel deliberate rather than twitchy

---

## What Makes This "Not AI"

AI-generated sites have tells. Here's how we avoid every one:

1. **Inconsistent spacing? No.** Every measurement derives from an 8px base grid. 8, 16, 24, 32, 40, 56, 80, 120, 160. Nothing arbitrary. Nothing "about 20px."

2. **Generic rounded corners? No.** Border-radius is 0 everywhere. Sharp corners signal precision. Every AI template defaults to rounded.

3. **Symmetrical layouts? Broken intentionally.** The hero is left-aligned. The vision is centered. The footer is centered. This variation IS design. AI loves centering everything.

4. **Blue/purple gradient backgrounds? No.** One flat purple-black. That's it. No gradients you can see. The only gradient is the gold line's left/right fade and the barely-perceptible background vignette.

5. **Big chunky CTAs? No.** The primary CTA in the hero is a TEXT LINK: "Scroll to explore" in 11px. The only button-shaped element is "Contact" in the nav, and it's barely a button (just text + arrow). AI always adds a big bright button.

6. **Card shadows? No.** Zero box-shadows anywhere. Elevation is communicated through background color shifts only. Shadows are a crutch.

7. **Emoji or icons? No.** No Lucide icons, no FontAwesome, no emoji. The only graphic element is the Lattice mark. Everything else is pure typography.

8. **Equal-width grid cards? Mostly no.** The ecosystem is rows, not cards. The insights are rows, not cards. When cards are needed (subsidiary pages), they use the surface background, not an outlined box.

9. **"Powered by" or "Built with"? Never.** No tech stack badges, no framework logos, no "made with Next.js." That's developer vanity, not design.

10. **Hover effects that scream? No.** Nothing scales to 1.05. Nothing lifts 8px. Movements are 2-4px. Color transitions are 250-400ms. Everything is restrained.

---

## The 8px Grid

Everything aligns to multiples of 8:

```
8px    — minimum gap, icon margins
16px   — grid gutter, inline spacing, small gaps
24px   — mobile page padding, card internal small gaps
28px   — card padding (exception: 28 = 24+4 for optical adjustment)
32px   — between related elements within a section
40px   — link spacing in nav
56px   — navbar height
80px   — page side padding desktop, mobile section spacing
120px  — between label and first content in a section
140px  — between sections (desktop)
160px  — hero vertical padding top
```

If a spacing value isn't on this list, it doesn't exist. Period.

---

## Mobile Adaptations

The design doesn't just "respond" — it's reconsidered at each breakpoint.

```
Desktop (1160px+):   Full experience. All micro-interactions.
Tablet (768-1159px): Stack asymmetric layouts. Reduce display to 36px.
Mobile (< 768px):    
  - Display: 32px (still Cormorant Italic — don't lose the signature)
  - Section spacing: 80px
  - Side padding: 24px
  - Navbar: hamburger menu with full-screen overlay (bg-void, 95% opacity)
  - Ecosystem rows: stack vertically, each row taller (56px)
  - Stats: 2×2 grid instead of 1×4
  - Smooth scroll: disabled (iOS fights custom scroll)
  - Grain overlay: disabled (performance)
  - No hover effects (touch devices) — instead, active/tap states
```

**Mobile nav overlay:**
When opened, the menu is a full-screen #0C0716 overlay. Nav links are listed vertically in 22px Cormorant Regular (bigger than desktop — thumb-friendly). Each link has a gold underline. The close button is a simple × in the top-right. Transition: overlay slides up from bottom, 400ms.

---

*Ready to build. Say the word.*
