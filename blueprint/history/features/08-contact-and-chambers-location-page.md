# Feature: Contact & Chambers Location Page

**From build-plan:** feature 8
**Build attempt:** 1
**Branch:** feature/contact-and-chambers-location-page
**Status:** verified

## Goal

Build an authoritative, dignified Chambers Coordinates & Location page at `/contact` featuring direct contact cards (physical address, official phones, email, consultation hours), interactive Google Maps embed, judicial proximity details (distance to Supreme Court, Delhi High Court, Tribunals, Metro stations), consultation protocol guide, and BCI Rule 36 compliance disclosures.

## Design reference

Consistent with the established design system:
- Deep regal navy (`#0b192c`, `bg-primary-dark`, `bg-primary`)
- Warm crisp surfaces (`bg-surface`, `bg-background`)
- Warm subtle brass accents (`text-accent`, `border-accent`, `#c5a880`)
- Editorial typography: serif display headings (`font-serif`) and clean sans text (`font-sans`)
- Refined borders, dignified icons, accessible card containers

## In scope

- Create `src/app/contact/page.tsx` as a pure static server component.
- Page Header with breadcrumbs (`Home / Chambers Coordinates`), institutional badge, and H1.
- Direct contact cards for physical chamber address, telephone numbers, official email, and working hours with prior appointment requirement.
- Interactive Google Maps embed with lazy loading, secure sandbox attributes, and external directions link.
- Court Proximity Matrix highlighting proximity to Supreme Court of India, High Court of Delhi, NCLT/NCLAT, and Metro transit stations.
- Appointment Protocol section explaining consultation prerequisites (brief preparation, certified copies, timeline).
- Full BCI Rule 36 statutory disclosure statement.
- Directional navigation pathways linking to `/about`, `/practice-areas`, and `/team`.

## Out of scope

- Direct online consultation booking forms or fee transaction systems (solicitation prohibited under BCI rules).
- Real-time chat widgets or tracking scripts.

## Build loop

- `workflow.stepReview`: feature
- `workflow.checkpointCommits`: disabled

## Build steps

- [x] 1. Build the Contact & Chambers Location page at `src/app/contact/page.tsx` with breadcrumbs, contact cards, court proximity section, map embed, consultation guide, and compliance notice.
- [x] 2. Run typecheck, lint, and production static build to verify full static HTML export for `/contact`.

## Files / areas

- `src/app/contact/page.tsx` (new)

## Data / contracts

- Reuses `firmConfig` from `src/config/firm.ts`.
- Pure static HTML export compatible with `output: 'export'`.

## Testing

- Typecheck: `pnpm exec tsc --noEmit`
- Linter: `pnpm lint`
- Static Build & Export: `pnpm build` proving generation of static HTML file in `out/contact/`
