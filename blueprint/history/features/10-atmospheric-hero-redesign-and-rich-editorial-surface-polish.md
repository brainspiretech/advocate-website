# Feature: Atmospheric Hero Redesign & Rich Editorial Surface Polish

**From build-plan:** feature 10
**Build attempt:** 1
**Branch:** feature/atmospheric-hero-redesign-and-rich-editorial-surface-polish
**Status:** complete

## Goal

Elevate the website's visual prestige and atmosphere by transforming the homepage hero with a neoclassical judicial architecture backdrop and deep navy vignette overlay, enriching `/about` with legal library and chambers imagery, incorporating visual photography cards into `/practice-areas` and `/practice-areas/[slug]`, and refining hover elevations and micro-interactions across the site in full compliance with BCI Rule 36.

## Design reference

Consistent with premier legal chambers (Cyril Amarchand Mangaldas, ILA Chambers):
- Deep authoritative navy canvas (`#0b192c`, `#070f1b`, `bg-primary-dark`)
- Neoclassical judicial architecture imagery with layered gradient overlays (`linear-gradient(to right, rgba(11, 25, 44, 0.95), rgba(11, 25, 44, 0.75))`)
- Warm brass/gold framing (`border-accent/30`, `text-accent`)
- High-resolution editorial photography for disciplines and legal library
- Subtle micro-interactions: smooth translateY on card hover (`hover:-translate-y-1 hover:shadow-lg transition-all duration-300`)
- Seamless static export compatibility (`output: 'export'`) with unoptimized local Next.js images

## In scope

- Upgrade homepage hero (`src/app/page.tsx`): replace flat solid navy background with a rich atmospheric backdrop using `/images/hero/court-columns.jpg`, multi-layered dark gradient overlay, and enhanced typography legibility.
- Enrich `/about` (`src/app/about/page.tsx`): integrate chambers library photography (`/images/chambers/library.jpg`) alongside the founding narrative with gold-accent framing and an institutional caption.
- Enhance `/practice-areas` catalog (`src/app/practice-areas/page.tsx`): add curated practice discipline photography cards with image aspect ratio, subtle hover zoom, dark scrim, and category badge.
- Enhance `/practice-areas/[slug]` detail page (`src/app/practice-areas/[slug]/page.tsx`): integrate the practice area's specific photographic banner/header.
- Refine interactive cards across all pages with smooth elevation transitions, subtle brass highlights, and accessible focus states.
- Run typecheck, lint, and production static build to verify clean static export and error-free rendering.

## Out of scope

- Flashy promotional commercial animations or marketing popups prohibited by BCI Rule 36.
- External hotlinked CDN assets (all images must be locally served from `/public/images/`).

## Build loop

- `workflow.stepReview`: feature
- `workflow.checkpointCommits`: disabled

## Build steps

- [x] 1. Redesign homepage hero in `src/app/page.tsx` with atmospheric judicial photography and multi-stage gradient overlay.
- [x] 2. Enrich `/about` founding narrative in `src/app/about/page.tsx` with chambers library photography.
- [x] 3. Enhance `/practice-areas` catalog and `/practice-areas/[slug]` detail views with visual discipline photography.
- [x] 4. Polish hover micro-interactions, border elevations, and card transitions across the site.
- [x] 5. Run typecheck, lint, and production static export build to verify all pages and assets.

## Files / areas

- `src/app/page.tsx` (modified)
- `src/app/about/page.tsx` (modified)
- `src/app/practice-areas/page.tsx` (modified)
- `src/app/practice-areas/[slug]/page.tsx` (modified)
- `src/app/team/page.tsx` (modified)
- `src/app/contact/page.tsx` (modified)

## Data / contracts

- `firmConfig.heroImage` -> `/images/hero/court-columns.jpg`
- `firmConfig.aboutImage` -> `/images/chambers/library.jpg`
- `PracticeArea.image` -> `/images/practice/[slug].jpg`

## Testing

- Typecheck: `pnpm exec tsc --noEmit`
- Linter: `pnpm lint`
- Static Build & Export: `pnpm build:zip` proving generation of static HTML files in `out/` and zip package
