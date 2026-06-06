# Caldera × IEEE — Merged Design Reference
> Editorial authority meets engineering precision · Risograph zine on IEEE Blue, anchored by IEEE institutional trust

**Theme:** Light  
**Tone:** Brutalist editorial with technical rigor — the condensed display energy of Caldera's structure and layout, fully powered by the IEEE color system.

---

## Brand Identity

### Logos & Marks
- **Caldera mark** — IEEE Blue (`#006699`) geometric brand mark, used left-anchored in the nav pill and as a standalone icon on dark/light surfaces.
- **IEEE Master Brand** — The IEEE diamond-and-globe logomark in IEEE Blue (`#006699`). Always reproduced at minimum clear-space. Never recolored, never placed on busy backgrounds.
- **Co-brand lockup** — Caldera mark (IEEE Blue) · separator rule · IEEE mark (IEEE Blue), set on Light Canvas (`#f4f4f4`) or White Card (`#ffffff`). Never place both marks on a saturated surface.

### Brand Voice
Caldera's editorial zine energy — oversized condensed headlines, matte printed surfaces, asymmetric hero layout — provides the visual personality and structural DNA. The IEEE color system entirely replaces Caldera's warm-stone palette, bringing institutional authority and a broad multi-color spectrum. The merger reads: **technical publication meets brutalist web, in IEEE blue**.

---

## Color System

### Full Palette

| Name | Value | Token | Role |
|------|-------|-------|------|
| Light Canvas | `#f4f4f4` | `--color-light-canvas` | Page background — replaces Caldera's warm stone |
| White Card | `#ffffff` | `--color-white-card` | Card surfaces, nav, elevated content blocks |
| Ink | `#1a1a1a` | `--color-ink` | Headlines, body text, hairline borders |
| Pure Black | `#000000` | `--color-pure-black` | Icon strokes, densest border work |
| IEEE Blue | `#006699` | `--color-ieee-blue` | Primary action, stat fills, brand accent — replaces Citra Orange |
| IEEE Dark Navy | `#003366` | `--color-ieee-navy` | Deep header bands, hero halftone gradient anchor |
| IEEE Teal | `#009999` | `--color-ieee-teal` | Secondary accent, decorative panels — replaces Ion Violet |
| IEEE Green | `#669900` | `--color-ieee-green` | Tag backgrounds, emphasis blocks — replaces Hazard Yellow |
| IEEE Red | `#cc0000` | `--color-ieee-red` | Alert states, spectrum accent |
| IEEE Purple | `#660099` | `--color-ieee-purple` | Spectrum accent, data visualization |
| IEEE Gold | `#ffcc00` | `--color-ieee-gold` | Award highlights, spectrum accent |
| IEEE Light Blue | `#66b2cc` | `--color-ieee-light-blue` | Muted surface tints, hover states |

> **Color rationing rule:** Most interface surfaces stay near-neutral (light canvas + white card + ink). IEEE Blue fires for all primary actions, active states, and brand-bearing stat fills — exactly where Caldera used orange. IEEE Teal handles decorative and halftone art surfaces. The full IEEE spectrum palette is reserved for data visualization and content-category tagging.

### Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Light Canvas | `#f4f4f4` | Default page background |
| 2 | White Card | `#ffffff` | Cards, nav, metric panels |
| 3 | IEEE Surface | `#006699` | Brand-bearing stat/feature cards (replaces orange) |
| 4 | IEEE Teal Surface | `#009999` | Halftone hero decorative panels (replaces violet) |
| 5 | IEEE Deep | `#003366` | Dark header bands, wedge fills |

### Elevation
Shadowless. All depth comes from surface color shifts (canvas → white → IEEE Blue) and border-radius generosity. No drop shadows, no glows — the flat printed aesthetic is preserved. IEEE Wedge panels use layered flat fills.

---

## Typography

### Font Stack

| Family | Role | Token |
|--------|------|-------|
| PP Neue Corp Compact | Display, all headlines, stat numbers | `--font-pp-neue-corp-compact` |
| DM Sans | Body, subheadings, nav, buttons, labels | `--font-dm-sans` |
| Formata | IEEE institutional display (co-brand headers) | `--font-formata` |
| Adobe Caslon Pro | IEEE serif body (technical documents, white-papers) | `--font-caslon` |
| Cambria | IEEE serif fallback for print-facing content | `--font-cambria` |
| Calibri / Open Sans | IEEE secondary sans for data tables, captions | `--font-calibri` |

**Usage rule:** PP Neue Corp Compact + DM Sans govern all product/web UI surfaces. Formata + Caslon Pro appear only in IEEE-branded document templates, white-papers, and co-branded print collateral. Never mix Caldera display type with IEEE serif body in the same text block.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Font | Token |
|------|------|-------------|----------------|------|-------|
| caption | 12px | 1.2 | — | DM Sans 500 | `--text-caption` |
| body-sm | 14px | 1.55 | — | DM Sans 500 | `--text-body-sm` |
| body | 16px | 1.5 | — | DM Sans 500 | `--text-body` |
| subheading | 18px | 1.25 | — | DM Sans 500 | `--text-subheading` |
| heading-sm | 26px | 1.1 | 0.52px | PP Neue Corp Compact 800 | `--text-heading-sm` |
| heading | 40px | 1.0 | 0.8px | PP Neue Corp Compact 800 | `--text-heading` |
| heading-lg | 64px | 0.95 | 1.28px | PP Neue Corp Compact 800 | `--text-heading-lg` |
| display | 96px | 0.94 | 1.92px | PP Neue Corp Compact 800 | `--text-display` |
| display-xl | 189px | 0.94 | 3.78px | PP Neue Corp Compact 800 | `--text-display-xl` |
| ieee-title | 32px | 1.1 | 0.3px | Formata Bold | `--text-ieee-title` |
| ieee-body | 16px | 1.6 | — | Adobe Caslon Pro Regular | `--text-ieee-body` |

### Font Details

**PP Neue Corp Compact**
- Weights: 800 (Ultrabold only)
- OpenType: `"ss06", "ss10", "blwf", "cv03", "cv04", "cv09", "cv11"`
- Substitute: Oswald 700, Anton, or Bebas Neue
- Never used below 26px; never set at weight 400

**DM Sans**
- Weights: 500 (Medium only — never Regular)
- Sizes: 12, 14, 16, 18px
- Substitute: Inter 500 or General Sans Medium

**Formata** (IEEE co-brand contexts)
- Primary IEEE display face; use where IEEE institutional authority must be foregrounded
- Weights: Regular, Bold
- Substitute: Calibri Bold or Open Sans 700

**Adobe Caslon Pro** (IEEE document contexts)
- Serif body for white-papers, technical reports, and formal IEEE-branded documents
- Pair with Formata headings, never with PP Neue Corp Compact

---

## Spacing & Shape

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 92 | 92px | `--spacing-92` |

### Border Radius

| Element | Value |
|---------|-------|
| tags / badges | 20px |
| cards | 40px |
| pills | 800px |
| inputs | 100px |
| buttons | 40px |
| IEEE wedge panels | 0px (flat, no rounding) |
| IEEE trust badges | 8px |

> **Radius discipline:** The 40px house radius governs all product cards and actions. IEEE Wedge panels intentionally use 0px — their angular geometry signals "institutional data" vs "brand UI."

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 10px

---

## Components

### Navigation Bar
Floating pill nav (radius 800px), White Card `#ffffff` background, centered horizontally. Left: Caldera mark in IEEE Blue `#006699`. Center: DM Sans 14px `#1a1a1a` links. Right: IEEE trust badge (small IEEE Blue pill, 8px radius) + Ghost social icons + IEEE Blue primary pill button.

### Primary Button
`#006699` background · `#ffffff` text · DM Sans 16px 500 · padding 12px 24px · radius 40px. Used for all forward actions. No border, no shadow.

### Ghost Secondary Button
Transparent background · 1px border `#1a1a1a` · `#1a1a1a` text · DM Sans 16px 500 · padding 12px 24px · radius 40px.

### IEEE Wedge Panel
Flat layered bands, 0px radius, no shadow. Primary fill `#006699` (IEEE Blue), secondary fill `#003366` (IEEE Navy). Each band slightly shorter than the one above, creating a staircase-wedge from left to right. Used for section headers on institutional content, co-brand hero sub-panels, and report covers.

### Stat Card
`#006699` background · radius 40px · padding 20–24px. Label DM Sans 14px `#ffffff`; value PP Neue Corp Compact 800 40px `#ffffff`. Used in 4-column metric grids.

### Stat Card (Secondary)
`#003366` background · radius 40px · padding 20–24px. Same typographic treatment. Use to distinguish metric categories within the same grid.

### Blog / Paper Card
`#ffffff` background · radius 40px · 1px hairline border `#1a1a1a20` · 24px padding. Thumbnail top (16:9) uses halftone dot pattern in IEEE Blue `#006699` → IEEE Teal `#009999`. Category tag uses IEEE Green background `#669900` + white text as default; other tag colors from content classification below. Title: PP Neue Corp Compact 26px `#1a1a1a`. Date: DM Sans 14px muted.

**Tag palette for content classification:**
- Product / Announcement → IEEE Green `#669900` + white text
- IEEE Standard / Specification → IEEE Blue `#006699` + white text
- Research / Paper → IEEE Teal `#009999` + white text
- Alert / Critical → IEEE Red `#cc0000` + white text
- Award / Recognition → IEEE Gold `#ffcc00` + ink text

### Hero Halftone Panel
Large rounded rectangle (radius 40px+), ~60% hero width, ~500px height. Halftone dot gradient from IEEE Blue `#006699` → IEEE Teal `#009999`. Replaces the Caldera orange-to-violet halftone — same visual technique, IEEE palette.

### Logo Strip Card
`#ffffff` background · radius 40px · full-width horizontal strip. Partner/member society logos evenly distributed, separated by hairline 1px `#f4f4f4` vertical dividers. IEEE diamond mark anchors the strip left as institutional endorsement.

### Text Input
`#ffffff` background · 1px solid `#1a1a1a` border · radius 100px · padding 12px 20px · DM Sans 16px. On focus: border thickens to 2px in `#006699`. No glow.

### IEEE Trust Badge
Small badge (radius 8px) in `#006699`. White DM Sans 12px text: "IEEE Member", "IEEE Standard", "IEEE Certified", etc. Sits inline with nav or floats on card thumbnails.

---

## Imagery

### Halftone Art
No photography on brand/product surfaces. Halftone dot patterns over a two-stop gradient (IEEE Blue `#006699` → IEEE Teal `#009999`) create a risograph-print feel. Used for blog thumbnails and hero panels — same technique as Caldera, IEEE palette.

### IEEE Photography
Photography permitted in editorial and documentation contexts: people, technology, infrastructure. Always treated with a semi-transparent IEEE Blue wash (`#00669940`) or halftone dot screen to maintain the flat printed aesthetic.

### Icons
Simple line/fill marks in `#1a1a1a`. IEEE-specific iconography (spectrum wedge, standards marks) in `#006699` only.

---

## Layout Patterns

**Full-bleed sections** on Light Canvas (`#f4f4f4`), content centered within 1280px.

**Hero:** Oversized condensed headline left (~40% width) · IEEE Blue halftone gradient panel right (~55% width) · overlapping secondary card geometry below.

**Stats section:** 4-column equal grid of IEEE Blue and IEEE Navy cards. Group by color to preserve semantic clarity — don't alternate arbitrarily.

**Blog/content section:** Horizontal-scroll carousel of equal-width cards. Category tag color signals content type per the tag palette above.

**Navigation:** Floating centered pill bar, not full-width. Detaches from page edges.

**Footer:** Light Canvas background. Dense link grid. Caldera mark + IEEE mark in co-brand lockup, both in IEEE Blue. IEEE compliance text in DM Sans 12px muted.

---

## Do's and Don'ts

### Do
- Use PP Neue Corp Compact 800 for every headline and stat number
- Use Formata Bold for IEEE institutional document headers
- Set headlines with line-height 0.94–1.0 and letter-spacing 0.02em
- Use `#006699` as the sole primary action color — it carries all the work orange did in Caldera
- Use `#009999` for decorative/halftone surfaces — it carries what violet did in Caldera
- Use `#669900` for tag backgrounds — it carries what hazard yellow did in Caldera
- Default all cards and buttons to 40px radius; IEEE wedge panels to 0px
- Keep page background at `#f4f4f4` and card surfaces at `#ffffff`
- Use DM Sans at weight 500 — never 400
- Keep the full IEEE spectrum strictly for data visualization and category tags

### Don't
- Don't bring back any Caldera colors (`#fc5000`, `#524ae9`, `#f5f28e`, `#e2e2df`, `#f7f6f2`) — they are fully replaced
- Don't use box-shadows or elevation glows — the system is flat and printed
- Don't use 8px or 12px radii on cards or buttons — 40px is the house radius
- Don't use colors outside the IEEE palette for actions, surfaces, or accents
- Don't set product headlines in humanist or geometric sans — PP Neue Corp is non-negotiable
- Don't apply `#006699` to body text or hairline borders — it functions only as a filled surface or focused link
- Don't mix PP Neue Corp Compact with Adobe Caslon Pro in the same text block
- Don't use IEEE spectrum colors (red, purple, gold) as button fills or page backgrounds

---

## CSS Custom Properties

```css
:root {
  /* ── Colors ── */
  --color-light-canvas: #f4f4f4;
  --color-white-card: #ffffff;
  --color-ink: #1a1a1a;
  --color-pure-black: #000000;
  --color-ieee-blue: #006699;
  --color-ieee-navy: #003366;
  --color-ieee-teal: #009999;
  --color-ieee-green: #669900;
  --color-ieee-red: #cc0000;
  --color-ieee-purple: #660099;
  --color-ieee-gold: #ffcc00;
  --color-ieee-light-blue: #66b2cc;

  /* ── Surfaces ── */
  --surface-light-canvas: #f4f4f4;
  --surface-white-card: #ffffff;
  --surface-primary: #006699;       /* replaces --surface-citra-surface */
  --surface-decorative: #009999;    /* replaces --surface-ion-surface */
  --surface-deep: #003366;

  /* ── Typography — Families ── */
  --font-pp-neue-corp-compact: 'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif;
  --font-dm-sans: 'DM Sans', 'Inter', sans-serif;
  --font-formata: 'Formata', 'Calibri', 'Open Sans', sans-serif;
  --font-caslon: 'Adobe Caslon Pro', 'Cambria', Georgia, serif;
  --font-calibri: 'Calibri', 'Open Sans', sans-serif;

  /* ── Typography — Scale ── */
  --text-caption: 12px;      --leading-caption: 1.2;
  --text-body-sm: 14px;      --leading-body-sm: 1.55;
  --text-body: 16px;         --leading-body: 1.5;
  --text-subheading: 18px;   --leading-subheading: 1.25;
  --text-heading-sm: 26px;   --leading-heading-sm: 1.1;   --tracking-heading-sm: 0.52px;
  --text-heading: 40px;      --leading-heading: 1;         --tracking-heading: 0.8px;
  --text-heading-lg: 64px;   --leading-heading-lg: 0.95;  --tracking-heading-lg: 1.28px;
  --text-display: 96px;      --leading-display: 0.94;      --tracking-display: 1.92px;
  --text-display-xl: 189px;  --leading-display-xl: 0.94;  --tracking-display-xl: 3.78px;
  --text-ieee-title: 32px;   --leading-ieee-title: 1.1;   --tracking-ieee-title: 0.3px;
  --text-ieee-body: 16px;    --leading-ieee-body: 1.6;

  /* ── Font Weights ── */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-ultrabold: 800;

  /* ── Spacing ── */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-92: 92px;

  /* ── Layout ── */
  --page-max-width: 1280px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 10px;

  /* ── Border Radius ── */
  --radius-tags: 20px;
  --radius-cards: 40px;
  --radius-pills: 800px;
  --radius-inputs: 100px;
  --radius-buttons: 40px;
  --radius-ieee-badge: 8px;
  --radius-ieee-wedge: 0px;
}
```

---

## Similar Brands

- **Arbitrum** — Monochrome + single vivid accent, large condensed display headlines
- **Coinbase Brand Pages** — Bold oversized headlines, pill CTAs, single saturated brand color
- **Layer3** — Halftone/dotted surfaces, risograph aesthetic on a light background
- **Nature Publishing Group** — Institutional authority paired with strong single-color accents
- **ACM Digital Library** — Technical publication with structured color taxonomy for content categories
