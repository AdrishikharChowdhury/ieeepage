# IEEE STCET SB — Project Context

## Overview

Official website for the **IEEE Student Branch of St. Thomas' College of Engineering & Technology (STCET), Kolkata**. Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **TypeScript**. Fully static site (SSG).

## Routes

| Route | Page |
|-------|------|
| `/` | Homepage — Banner, Story, Events, Board, Highlights sections |
| `/story` | About IEEE STCET SB + STCET history |
| `/events` | All events grid |
| `/events/[slug]` | Event detail — agenda, organiser, tags, registration link |
| `/blogs` | Blog listing grid |
| `/blogs/[slug]` | Blog post detail |
| `/board` | Chairs + Branch Advisors |
| `/highlights` | Photo masonry gallery |

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` block in `globals.css`)
- **Animations:** GSAP (Masonry), Framer Motion (Dock, carousel entrance), OGL (Aurora WebGL)
- **Carousel:** Swiper.js with creative effects
- **Skeleton Loader:** `@aejkatappaja/phantom-ui` (web component)
- **Icons:** lucide-react, inline SVGs
- **State / Data:** All static — no API, no database, no auth

## Key Architecture

```
app/                  # Next.js App Router pages
├── blogs/            # Blog listing + [slug] detail
├── events/           # Event listing + [slug] detail
├── board/            # Board members
├── highlights/        # Photo masonry
├── story/            # About page
└── layout.tsx        # Root layout (Navbar + PageLoader + Footer)

components/
├── Navbar.tsx         # Fixed top nav + mobile Dock
├── Footer.tsx         # Site footer
├── PageLoader.tsx     # Full-screen % loader
├── SkeletonWrapper.tsx # phantom-ui shimmer wrapper
├── Banner.tsx         # Hero with Aurora WebGL
├── Story.tsx          # Homepage story section
├── Events.tsx         # Homepage events section
├── Board.tsx          # Homepage board section
├── HighLights.tsx     # Homepage highlights carousel
├── Masonry.tsx        # GSAP masonry grid
├── Aurora.tsx         # WebGL aurora effect
├── Dock.tsx           # macOS-style mobile nav
└── ui/                # Primitives (SectionHeader, ChairCard, BlogCard, EventCard, etc.)
```

## Data Layer

All content lives in **`lib/constants.ts`** — no CMS or database.

| Export | Type | Content |
|--------|------|---------|
| `blogs` | `BlogPost[]` | 10 blog posts with slug, title, date, description, author, email, tag |
| `events` | `Event[]` | 7 events with slug, title, date, time, description, agenda, details, organiser, tags, picture, registrationLink |
| `chairs` | `Chair[]` | 3 student chairs |
| `branchAdvisors` | `Chair[]` | 3 faculty advisors |
| `milestones` | `object[]` | 3 historical milestones |
| `stats` | `object[]` | 5 branch statistics |
| `eventImages` | `object[]` | 18 highlight images with varied heights for masonry |
| `navLinks` | `object[]` | 5 navigation items |
| `footerLinkGroups` | `FooterLinkGroup[]` | 3 footer link groups |

## Design System

**Primary brand colors** (defined as CSS variables in `globals.css`):
- IEEE Blue `#006699` — primary actions
- IEEE Navy `#003366` — deep headers
- IEEE Teal `#009999` — research tags
- IEEE Green `#669900` — workshop tags
- IEEE Red `#cc0000` — alert tags
- IEEE Purple `#660099` — summit tags
- IEEE Gold `#ffcc00` — award tags

**Typography:** Headlines use PP Neue Corp Compact (inline font-family), body uses Open Sans (via `next/font`).

**Philosophy:** Flat, shadowless design from `design.md`. Depth from surface color shifts and border radius.

## External Services

- **DiceBear** (`api.dicebear.com`) — blog author avatars
- **Google Forms** — event registration links (external hrefs only)

## Build & Dev

```bash
npm run dev      # Next.js dev server
npm run build    # Static export (SSG)
npm run start    # Serve built static files
```

## Content Management

Blogs and events are hardcoded in `lib/constants.ts`. Adding content requires editing that file and rebuilding. The "Create a Blog" button uses a `mailto:` link to `ieeestcet@stcet.ac.in` for submissions.
