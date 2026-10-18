# Feature: Practice Areas Index & Static Detail Views

**From build-plan:** feature 6
**Build attempt:** 1
**Branch:** feature/practice-areas-index-and-static-detail-views
**Status:** verified

## Goal

Provide a comprehensive, dignified catalog of legal disciplines at `/practice-areas` and individual static detail pages at `/practice-areas/[slug]`, pre-rendered at build time with `generateStaticParams()`, strictly adhering to BCI Rule 36 non-promotional guidelines.

## Design reference

Consistent with the editorial aesthetic established in `/about` and `/`:
- Deep regal navy (`#0b192c`, `bg-primary-dark`, `bg-primary`)
- Warm crisp surfaces (`bg-surface`, `bg-background`)
- Refined gold/brass accents (`text-accent`, `border-accent`, `#c5a880`)
- Serif display headings (`font-serif`) and sans body text (`font-sans`)
- Clean borders, subtle radial gradient patterns, dignified typography

## In scope

- Icon helper component for mapping icon names (`Scale`, `Building2`, `FileText`, `ShieldAlert`, `Briefcase`, `Landmark`) to Lucide icons.
- Practice areas index page at `src/app/practice-areas/page.tsx` with breadcrumbs, hero header, 6 discipline cards with focus areas and courts, filter navigation, and BCI compliance notice.
- Static detail pages at `src/app/practice-areas/[slug]/page.tsx` using `generateStaticParams()`, `generateMetadata()`, and `notFound()`.
- Deep-dive sections on each detail page: scope overview, specific key focus areas list, courts and forums of practice, matching chamber advocates who practice in this domain, and navigation between disciplines.
- Static export build verification with `pnpm build` ensuring all 6 detail routes (`/practice-areas/commercial-disputes-arbitration/`, etc.) generate cleanly in `out/`.

## Out of scope

- Direct booking or commercial inquiry forms (solicitation prohibited under BCI rules).
- Advocate profile detail pages (`/team/[slug]` is Feature 7).
- Outcome guarantees or client testimonials.

## Build loop

- `workflow.stepReview`: feature
- `workflow.checkpointCommits`: disabled

## Build steps

- [x] 1. Create `PracticeAreaIcon` component to render the appropriate Lucide icon for any practice area.
- [x] 2. Build the Practice Areas Index page at `src/app/practice-areas/page.tsx` with breadcrumbs, authoritative header, catalog grid, and compliance notice.
- [x] 3. Build the dynamic Practice Area Detail page at `src/app/practice-areas/[slug]/page.tsx` with `generateStaticParams()`, `generateMetadata()`, detailed overview, key areas, forums, associated counsel, and directional navigation.
- [x] 4. Run typecheck, lint, and production static build to verify full static HTML export for `/practice-areas` and all 6 detail routes.

## Files / areas

- `src/components/practice-areas/PracticeAreaIcon.tsx` (new)
- `src/app/practice-areas/page.tsx` (new)
- `src/app/practice-areas/[slug]/page.tsx` (new)

## Data / contracts

- Reuses `practiceAreas`, `advocates`, `firmConfig` from `src/config/firm.ts`.
- `generateStaticParams()` returns `{ slug: string }[]` for all 6 items.

## Testing

- Typecheck: `pnpm exec tsc --noEmit`
- Linter: `pnpm lint`
- Static Build & Export: `pnpm build` proving generation of static HTML files in `out/practice-areas/`
