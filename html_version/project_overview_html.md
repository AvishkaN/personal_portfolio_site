# HTML Version — Project Overview & Conversion Tracker

This folder (`html_version/`) is a plain **HTML + CSS + JS** rebuild of the React portfolio site
located at `../src/`. No build tools, no frameworks, no dependencies — open any `.html` file
directly in a browser and it works.

---

## About the Site

**Owner:** Avishka Nirmitha — AI Engineer specialising in Deep Learning, Computer Vision, Robotics, ROS2.

**Design language:** Futuristic "cyber/tech" aesthetic — glowing text, CRT scan lines, terminal
snippets (`TARGET_DETECTED`, `ACTIVE_CORE_01`, `SYNC_COMPLETE`), dark navy palette, blue primary
accent, glass-morphism cards.

**Pages to convert (6 total):**

| # | Page | Source file | HTML file | Status |
|---|------|-------------|-----------|--------|
| 1 | Home | `src/pages/HomePage.tsx` + `Timeline.tsx` | `index.html` | ✅ Done |
| 2 | Projects list | `src/pages/ProjectsPage.tsx` | `projects.html` | ✅ Done |
| 3 | Project detail | `src/pages/ProjectDetailPage.tsx` | `projects/[slug].html` (×5) | ✅ Done |
| 4 | Awards | `src/pages/AwardsPage.tsx` | `awards.html` | ✅ Done |
| 5 | Contact | `src/pages/ContactPage.tsx` | `contact.html` | ✅ Done |
| 6 | 404 | `src/pages/NotFound.tsx` | `404.html` | ⬜ Next |

---

## Current File Structure

```
html_version/
├── index.html                  ✅ Home page (hero + timeline + header + footer)
├── projects.html               ✅ Projects listing (filter tabs + 5 project cards)
├── awards.html                 ✅ Awards grid + row toggle + modal lightbox
├── contact.html                ✅ Terminal animation + 2 contact cards
├── css/
│   └── styles.css              ✅ All styles (shared + all page styles)
├── js/
│   └── main.js                 ✅ Mobile menu, active nav, timeline, gallery, filter, modal, layout toggle
├── projects/
│   ├── intelligent-robotic-arm.html         ✅ 4-image gallery + overview + tech stack
│   ├── self-driving-car-pipeline.html       ✅ Single image + 4 LinkedIn posts + overview + tech stack
│   ├── fire-detection-model.html            ✅ Single image + 1 LinkedIn post + overview + tech stack
│   ├── high-accuracy-face-recognition.html  ✅ Single image + overview + tech stack
│   └── local-llm-fine-tuning-pipeline.html  ✅ Placeholder (no image) + overview + tech stack
└── project_overview_html.md    ✅ This file
```

**Remaining (404 only):**
```
html_version/
└── 404.html                    ⬜ Simple not-found page with "Go Home" link
```

---

## What Was Done — Page 1: `index.html` (Home)

### Files created
| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | ~200 | Full home page markup |
| `css/styles.css` | ~550 | All styles (shared foundation for future pages) |
| `js/main.js` | ~130 | Runtime interactivity |

### `index.html` — sections
- **`<head>`** — Full SEO: title, description, keywords, Open Graph, Twitter Card, canonical,
  JSON-LD structured data (Person + WebSite schemas). Google Fonts (Space Grotesk, Dancing Script,
  Material Symbols Outlined).
- **`<header class="header glass-nav">`** — Fixed glass navbar. Logo → `index.html`. Desktop nav
  (Home, Awards, Projects, Contact). LinkedIn CTA button (desktop only). Hamburger button (mobile only).
- **`#mobileDrawer`** — Slide-in drawer panel (right side, 280 px). Overlay backdrop. Same nav links.
  Close button + overlay click to dismiss.
- **`.hero-container`** — Two-column grid (stacked on mobile, side-by-side on lg+).
  - **Left:** `<h1>` with gradient "nirmitha", experience badge (hidden on xs, shown sm+),
    tagline with left blue border, description paragraph, two CTA buttons, six skill badges.
  - **Right:** Decorative visual box — blue glow blur, carbon-fibre texture overlay, corner
    brackets, two scan lines, terminal text (top-left + bottom-right), concentric circles,
    gradient fade overlay, `ACTIVE_CORE_01` floating badge.
- **`#timeline`** — Career timeline section. Heading ("My Journey"). Prev/Next chevron buttons.
  Track with year dots (active, past, future states + animated ping on active). Progress line
  animates to active position. Glass card showing selected year's title + bullet points.
- **`<footer>`** — Dancing Script signature, "AI & Robotics Engineer" subtitle, copyright,
  location tagline.

### `css/styles.css` — what's inside
- **CSS custom properties** — full color system (`--background`, `--foreground`, `--primary`,
  `--secondary`, `--muted-fg`, `--border`, `--blue-400`).
- **Base reset** — box-sizing, margin, padding, antialiasing.
- **Custom component classes** (copied verbatim from `src/index.css`) — `.glass-nav`,
  `.glass-card`, `.hero-gradient`, `.name-glow`, `.scan-line`, `.exp-badge-glow`,
  `.font-signature`, `.gradient-text`.
- **All animations** — `@keyframes ping`, `pulse`, `bounce-subtle`, `typing`, `blink`.
- **Full component CSS** — header, mobile drawer, hero left/right, skill badges, visual box
  (corners, scan lines, terminal text, glow), timeline (track, dots, progress line, card), footer.
- **Responsive breakpoints** — `sm` (640 px), `md` (768 px), `lg` (1024 px).

### `js/main.js` — what's inside
- **Mobile menu** — open/close `#mobileDrawer`, body scroll lock, overlay + close-button handlers,
  auto-close on nav link click.
- **Active nav** — reads `window.location.pathname`, marks matching `.nav-link` and `.drawer-link`
  as `.active` (runs on every page).
- **Timeline carousel** — `events[]` array (8 entries: 2017 → Future), `activeIndex` / `startIndex`
  state, prev/next button logic, click-on-dot navigation, progress line width update,
  animated ping dot on active item, glass card content render.

---

## Shared Infrastructure (carries to all future pages)

The `css/styles.css` and `js/main.js` files are **already complete for the shared parts** —
every future page just links them and gets the header, drawer, footer, and active-nav for free.

Future pages only need to:
1. Copy the `<head>`, `<header>`, `#mobileDrawer`, and `<footer>` blocks from `index.html`
   (update `<title>`, meta description, canonical URL, and active nav link).
2. Add page-specific CSS sections to `styles.css`.
3. Add page-specific JS to `main.js` (or a separate file if large).

---

## What to Do Next

### Page 2 — `projects.html` ✅ Done

**Source:** `src/pages/ProjectsPage.tsx` + `src/data/projects.ts`

**What was built:**
- Page heading with `name-glow` title and subtitle paragraph.
- 4-tab filter bar (All Systems / Robotics / Computer Vision / Open Source LLMs) — filter
  logic handled in `main.js` via `data-filter` / `data-category` attributes; no page reload.
- 5 project cards — horizontal layout (column mobile → row at lg 1024px+).
  - Left 55%: background-image div with zoom-on-hover, gradient overlay, status badge.
  - Right 45%: tags, title, description, "View Project" button → `projects/[slug].html`.
- Status badges: `status-ongoing` (blue), `status-finished` (green).
- Tag variants: `.project-tag.featured` (blue tint, for `featured: true` projects),
  `.project-tag.standard` (grey, for non-featured).
- LLM project has no image — renders a styled `.project-no-image` placeholder div.

**CSS added to `styles.css`:** `.projects-page`, `.projects-heading`, `.projects-filters`,
`.filter-tab`, `.projects-list`, `.project-card`, `.project-card-image`,
`.project-card-image-inner`, `.project-card-gradient`, `.project-status-badge`,
`.status-ongoing`, `.status-finished`, `.project-card-body`, `.project-tags`,
`.project-tag`, `.project-card-title`, `.project-card-desc`, `.project-card-actions`,
`.btn-view-project`, `.project-no-image`. Responsive rules added inside the existing
`md` and `lg` breakpoint blocks.

**JS added to `main.js`:** Projects filter IIFE at the bottom — no-op on pages without
`.filter-tab` elements.

---

### Page 3 — `projects/[slug].html` × 5 ✅ Done

**Source:** `src/pages/ProjectDetailPage.tsx` + data from `src/data/projects.ts`

**Shared layout per page:**
- Back link → `../projects.html`.
- Header: category badge + status badge, title (`detail-title`), description, year + role meta row.
- Gallery: `#galleryMainImg` (16:9 aspect-ratio box) + thumbnail row (only when >1 image).
  Thumb click swaps main image via gallery IIFE in `main.js`. Placeholder shown when no image.
- LinkedIn iframes (1–4 posts) in a 1-col → 2-col grid. Only rendered if the project has posts.
- `detail-content-grid` (1-col → 2/3+1/3 at lg): Overview + Key Features left; sticky Tech Stack sidebar right.
  GitHub button in sidebar if `githubUrl` is set.

**Per-project notes:**
- `intelligent-robotic-arm` — 4 gallery images (all 4 from `project_images/`); no LinkedIn; no GitHub shown.
- `self-driving-car-pipeline` — 1 image (gallery deduped); 4 LinkedIn posts; GitHub button → `github.com/AvishkaN`.
- `fire-detection-model` — 1 image; 1 LinkedIn post; no GitHub.
- `high-accuracy-face-recognition` — uses `face recognition.png` (the file that exists; source references `face recognition1.png` which is missing); no LinkedIn; no GitHub.
- `local-llm-fine-tuning-pipeline` — no image, shows `.gallery-placeholder`; no LinkedIn; no GitHub.

**CSS added to `styles.css`:** `.detail-page`, `.back-link`, `.detail-header`, `.detail-badges`,
`.badge-category`, `.badge-status`, `.detail-title`, `.detail-description`, `.detail-meta`,
`.detail-meta-item`, `.gallery-section`, `.gallery-main`, `.gallery-placeholder`,
`.gallery-thumbs`, `.gallery-thumb`, `.detail-section`, `.detail-section-title`,
`.linkedin-grid`, `.linkedin-card`, `.detail-content-grid`, `.detail-overview-title`,
`.detail-long-desc`, `.detail-features-title`, `.features-list`, `.feature-item`,
`.tech-sidebar-card`, `.tech-sidebar-header`, `.tech-sidebar-heading`, `.tech-list`,
`.tech-item`, `.tech-name`, `.tech-purpose`, `.sidebar-actions`, `.btn-github`.
Responsive rules added inside the existing `md` and `lg` breakpoint blocks.

**JS added to `main.js`:** Gallery switcher IIFE — no-op on pages without `.gallery-thumb` elements.

---

### Page 4 — `awards.html` (Awards)

**Source:** `src/pages/AwardsPage.tsx`

**Content to convert:**
- Page heading ("Awards & Recognition").
- Awards grid — each award: image thumbnail, title, year, issuing organisation,
  "View Moment" button.
- **Modal/lightbox** — clicking "View Moment" opens a full-screen image overlay
  with title and description. Close on backdrop click or Escape key.

**CSS to add:** `.awards-grid`, `.award-card`, `.award-img`, `.modal-overlay`,
`.modal-panel`, `.modal-img`.

**JS to add:** Modal open/close logic (similar to mobile drawer pattern).
- Click "View Moment" → set `data-src` on modal `<img>` → add `.open` to modal overlay.
- Click overlay or press Escape → remove `.open`.

**Images available:**
```
../public/images/awards/Avishka Nirmitha Best Software Developer 2022 Spera.jpeg
../public/images/awards/Avishka Nirmitha Exceptional Contributor of the year 2024 Spera .jpeg
```

---

### Page 5 — `contact.html` (Contact)

**Source:** `src/pages/ContactPage.tsx`

**Content to convert:**
- Page heading ("Get In Touch" or similar).
- Secure-terminal-themed contact grid — direct links (no form):
  - LinkedIn profile link with icon + description.
  - GitHub profile link with icon + description.
  - (Email if present in source.)
- Each link styled as a glass card with hover glow.

**CSS added to `styles.css`:** `.contact-page`, `.contact-inner`, `.contact-terminal`,
`.terminal-bar`, `.terminal-dots`, `.terminal-dot` (`.red`, `.amber`, `.green`),
`.terminal-label`, `.terminal-body`, `.terminal-line`, `.typing-line-1/2/3`,
`@keyframes term-appear`, `.contact-status-badge`, `.badge-ping-wrap`, `.badge-ping`,
`.badge-dot`, `.contact-heading`, `.contact-subtext`, `.contact-cards`, `.contact-card`,
`.contact-card-inner`, `.contact-card-icon`, `.contact-card-label`, `.contact-card-value`.
Responsive rules added in separate `md` and `lg` blocks.

**JS:** None needed — page is purely static.

**What was built:**
- CSS-only staggered terminal animation: 3 lines appear sequentially via `term-appear` keyframe
  with delays of `0.4s`, `1.2s`, `2s`. Lines 1–2 in `--blue-400`, line 3 in emerald green.
- Status ping badge (pure CSS `ping` animation, already defined in shared keyframes).
- Heading: "Let's Connect, **Avishka**" with `gradient-text` span.
- Two `glass-card` contact cards (LinkedIn + GitHub) — centered flex-wrap layout, 100% wide on
  mobile, `calc(50% - 0.75rem)` at `md`.

---

### Page 6 — `404.html`

**Source:** `src/pages/NotFound.tsx`

Simple 404 page with a "Go Home" link. Minimal effort.

---

## Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `hsl(222, 47%, 6%)` | Page background (very dark navy) |
| `--foreground` | `hsl(210, 40%, 98%)` | Body text (off-white) |
| `--primary` | `hsl(218, 86%, 55%)` | Accent blue (headings, buttons, glows) |
| `--secondary` | `hsl(217, 33%, 17%)` | Card/button backgrounds (dark slate) |
| `--muted-fg` | `hsl(215, 20%, 65%)` | Subdued text (descriptions, labels) |
| `--border` | `hsl(217, 33%, 17%)` | Borders, dividers |
| `--blue-400` | `hsl(213, 93%, 68%)` | Gradient end colour (lighter blue) |

**Fonts:**
- `'Space Grotesk'` — all body and display text
- `'Dancing Script'` — footer signature only (`.font-signature`)
- `'Material Symbols Outlined'` — icon font (used as text: `<span class="material-symbols-outlined">code</span>`)

**Breakpoints:**
- `sm` = 640 px (show exp badge, row CTA)
- `md` = 768 px (show desktop nav, larger text, show LinkedIn button)
- `lg` = 1024 px (2-column hero grid, left-align text)

---

## How to Test Each Page

1. Open the `.html` file directly in a browser (no server required for basic testing).
2. For images to load correctly, serve from the project root:
   ```bash
   # from 8_personal_website/ root
   npx serve html_version
   # or
   python -m http.server 3000 --directory html_version
   ```
3. Verify:
   - Fonts load (Google Fonts CDN — needs internet).
   - Material Symbols icons render as icons not text.
   - Hamburger menu opens/closes drawer.
   - Active nav link is highlighted correctly.
   - Timeline dots and card render on load; prev/next and dot-click work.
   - Page is responsive at 320 px, 768 px, and 1280 px viewport widths.
