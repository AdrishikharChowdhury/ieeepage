# IEEE STCET SB

Official website for the IEEE Student Branch of St. Thomas' College of Engineering & Technology. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, SSG) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + CSS custom properties |
| Animation | [Framer Motion](https://motion.dev/) (entrance/hover), [GSAP](https://gsap.com/) (masonry), [OGL](https://github.com/oframe/ogl) (Aurora WebGL) |
| Carousel | [Swiper](https://swiperjs.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Open Sans (body), Geist Mono / JetBrains Mono (code) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  page.tsx          — Homepage (Banner, Story, Events, Board, Highlights)
  layout.tsx        — Root layout (Navbar, PageLoader, Footer)
  blogs/            — Blog listing + detail pages (SSG)
  board/            — Full board listing page
  events/           — Event listing + detail pages (SSG)
  highlights/       — Highlights masonry gallery page
  story/            — Story/milestones page
components/
  Banner.tsx        — Hero with Aurora WebGL shader
  Navbar.tsx        — Desktop nav + mobile Dock navigation
  Dock.tsx          — macOS-style Dock with magnifying hover
  PageLoader.tsx    — Preloader (preloads critical images)
  Board.tsx         — Homepage board section
  Events.tsx        — Homepage events carousel
  Story.tsx         — Homepage story + stats section
  HighLights.tsx    — Homepage highlights carousel
  Masonry.tsx       — GSAP-powered masonry grid for highlights
  Aurora.tsx        — WebGL aurora shader (OGL)
  Footer.tsx        — Site footer with links + socials
  ui/               — Reusable: ChairCard, EventCard, BlogCard, StatCard, SectionHeader
lib/
  constants.ts      — All content data (events, chairs, stats, nav links, images)
  utils.ts          — cn() utility (clsx + tailwind-merge)
public/
  webp/             — Optimized WebP images (chairs, logos)
  events/webp/      — Optimized event/highlight WebP images
  originals/        — Original JPEG/PNG files (preserved)
```

## Key Features

- **Fully responsive** — mobile, tablet, desktop breakpoints
- **macOS-style Dock** — bottom navigation on mobile/tablet with magnifying hover
- **WebGL Aurora Banner** — animated shader background on hero
- **Image optimization** — WebP + AVIF via Next.js Image, preloaded by PageLoader
- **Animations** — scroll-triggered section entrances, staggered card grids, spring hover effects
- **SSG** — Events, blogs, and board pages pre-rendered at build time

## Pages

| Route | Content |
|-------|---------|
| `/` | Homepage with all sections |
| `/events` | All events grid |
| `/events/[slug]` | Event detail page |
| `/blogs` | Blog listing |
| `/blogs/[slug]` | Blog detail page |
| `/board` | Full board (chairs + advisors) |
| `/highlights` | Masonry image gallery |
| `/story` | Branch story timeline |

## Design Tokens

Defined in `app/globals.css` under `@theme`:

- IEEE brand colors: `ieee-blue`, `ieee-navy`, `ieee-teal`, `ieee-green`, `ieee-red`, `ieee-gold`
- Surface: `light-canvas`, `white-card`
- Text: `ink`
- Radii: `cards` (40px), `pills` (800px), `tags` (20px)
