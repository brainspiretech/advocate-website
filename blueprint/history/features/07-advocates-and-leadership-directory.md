# Feature: Advocates & Leadership Directory

**From build-plan:** feature 7
**Build attempt:** 1
**Branch:** feature/advocates-and-leadership-directory
**Status:** verified

## Goal

Provide a prestigious, factual directory of chambers advocates at `/team` and individual static profile pages at `/team/[slug]`, pre-rendered at build time with `generateStaticParams()`, detailing bar enrollments, court admissions, qualifications, and areas of focus in strict compliance with BCI Rule 36.

## Design reference

Consistent with the established design system:
- Deep regal navy (`#0b192c`, `bg-primary-dark`, `bg-primary`)
- Warm crisp surfaces (`bg-surface`, `bg-background`)
- Warm subtle brass accents (`text-accent`, `border-accent`, `#c5a880`)
- Editorial typography: serif display headings (`font-serif`) and clean sans text (`font-sans`)
- Refined borders, monogram badge treatment, dignified badges

## In scope

- Build `/team` index page at `src/app/team/page.tsx` with breadcrumbs, authoritative header, advocate cards grid showing bar enrollments, education, court admissions, primary practices, and BCI ethical notice.
- Build static detail profile pages at `src/app/team/[slug]/page.tsx` using `generateStaticParams()`, `generateMetadata()`, and `notFound()`.
- Profile sections: substantive career biography, academic credentials, court admissions, linked practice disciplines, registry consultation box, and previous/next counsel navigation.
- Static export build verification with `pnpm build` ensuring `/team/` and all 3 advocate profiles (`/team/rajesh-narayan/`, etc.) pre-render cleanly in `out/`.

## Out of scope

- Direct online booking or fee quotations (solicitation strictly prohibited under BCI rules).
- Promotional ratings, client recommendations, or subjective superlatives.

## Build loop

- `workflow.stepReview`: feature
- `workflow.checkpointCommits`: disabled

## Build steps

- [x] 1. Build the Counsel Directory index page at `src/app/team/page.tsx` with breadcrumbs, authoritative header, advocate profile cards, and compliance disclosure.
- [x] 2. Build the dynamic Advocate Profile page at `src/app/team/[slug]/page.tsx` with `generateStaticParams()`, `generateMetadata()`, biography, bar enrollments, court admissions, education, linked practices, and directional navigation.
- [x] 3. Run typecheck, lint, and production static build to verify full static HTML export for `/team` and all 3 advocate routes.

## Files / areas

- `src/app/team/page.tsx` (new)
- `src/app/team/[slug]/page.tsx` (new)

## Data / contracts

- Reuses `advocates`, `practiceAreas`, `firmConfig` from `src/config/firm.ts`.
- `generateStaticParams()` returns `{ slug: string }[]` for all 3 advocates.

## Testing

- Typecheck: `pnpm exec tsc --noEmit`
- Linter: `pnpm lint`
- Static Build & Export: `pnpm build` proving generation of static HTML files in `out/team/`
