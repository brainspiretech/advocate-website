# Feature: Curated Legal Photographic Assets & Advocate Portrait Integration

**From build-plan:** feature 9
**Build attempt:** 1
**Branch:** feature/curated-legal-photographic-assets-and-advocate-portrait-integration
**Status:** complete

## Goal

Curate and download authentic, high-resolution, royalty-free legal photography into `/public/images/` (advocate portraits for all three partners, chambers library, and court architecture), update data contracts in `src/config/firm.ts`, and integrate advocate photography across `/team`, `/team/[slug]`, and the homepage leadership section in strict adherence to BCI Rule 36.

## Design reference

Consistent with premier chambers (ILA Chambers, Cyril Amarchand Mangaldas):
- High-fidelity real portraits of counsel in formal dark courtroom attire
- Warm brass/gold accent framing (`border-accent/40`, `shadow-md`)
- Elegant aspect ratios (`aspect-[4/5]` for portraits, rounded-xs/sm)
- Smooth hover zoom transitions (`transition-transform duration-300 group-hover:scale-105`)
- Seamless static export without external image optimization dependencies

## In scope

- Curate and download verified high-resolution, royalty-free photography into `public/images/advocates/`, `public/images/hero/`, `public/images/chambers/`, and `public/images/practice/`.
- Update `src/config/firm.ts` types and arrays with local image paths.
- Upgrade `src/app/team/page.tsx` with advocate portrait cards featuring dual-state image rendering (crisp photo + initials fallback).
- Upgrade `src/app/team/[slug]/page.tsx` with high-resolution dossier portraits and badges.
- Upgrade `src/app/page.tsx` leadership introduction section with real advocate portraits.
- Run typecheck, lint, and production static build to verify all static routes export cleanly with local image assets.

## Out of scope

- External hotlinking to CDN images (all assets must be locally stored in `/public/images/` for offline/static independence).
- Commercial promotional graphics, client testimonials, or outcome claims.

## Build loop

- `workflow.stepReview`: feature
- `workflow.checkpointCommits`: disabled

## Build steps

- [x] 1. Download and organize curated royalty-free legal and portrait images into `/public/images/`.
- [x] 2. Update `src/config/firm.ts` data models and advocate/firm entries with local image paths.
- [x] 3. Integrate real advocate portraits into `/team`, `/team/[slug]`, and the homepage leadership section.
- [x] 4. Run typecheck, lint, and production static build to verify full static HTML export with bundled images.

## Files / areas

- `public/images/` (new directories and image files)
- `scripts/download-images.mjs` (asset retrieval helper)
- `src/config/firm.ts` (modified)
- `src/app/team/page.tsx` (modified)
- `src/app/team/[slug]/page.tsx` (modified)
- `src/app/page.tsx` (modified)

## Data / contracts

- `AdvocateProfile.image`: `/images/advocates/[slug].jpg`
- `PracticeArea.image`: `/images/practice/[slug].jpg`
- `FirmConfig.heroImage`: `/images/hero/court-columns.jpg`
- `FirmConfig.aboutImage`: `/images/chambers/library.jpg`

## Testing

- Typecheck: `pnpm exec tsc --noEmit`
- Linter: `pnpm lint`
- Static Build & Export: `pnpm build` proving generation of static HTML files in `out/` with bundled images
