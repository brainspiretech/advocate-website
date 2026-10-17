# Feature: About Firm Page

**From build-plan:** feature 5
**Build attempt:** 1
**Branch:** `feature/about-firm-page`
**Status:** verified

## Goal
Build a dedicated `/about` page establishing Apex Chambers' institutional identity, founding philosophy, litigation and advisory standards, regular judicial appearances, and strict adherence to Bar Council of India ethics. The page must provide a factual, prestigious narrative that upholds the dignity of legal practice without promotional puffery.

## Design reference
Consistent with the design system established in Feature 1: Cormorant Garamond serif headings, Plus Jakarta Sans body text, deep regal navy surfaces (`--primary`, `--primary-dark`), warm muted brass accents (`--accent`), off-white structured sections, and clear semantic layout with breadcrumbs and accessible landmarks.

## In scope
- Create `src/app/about/page.tsx` as a pure static server component.
- Page Header with breadcrumbs (`Home / About Firm`), institutional badge, and title.
- Founding Narrative section detailing the chamber's heritage (Estd. 2012 in New Delhi), courtroom philosophy, and officer-of-the-court ethos.
- Four Litigation & Advisory Standards cards (Meticulous Brief Scrutiny, Jurisprudential Depth, Ethical Independence, Procedural Rigour).
- Detailed Core Principles breakdown rendering `firmConfig.corePrinciples`.
- Comprehensive Judicial Jurisdictions section detailing regular appearance forums (Supreme Court of India, Delhi High Court, NCLT/NCLAT, NGT, DRAT, Arbitral Tribunals) with descriptions of jurisdictional scope.
- Professional Ethics & Regulatory Compliance section clarifying BCI Rule 36 principles and chambers duties.
- Directional navigation pathways linking to `/practice-areas`, `/team`, and `/contact`.
- Full SEO metadata (title, description).

## Out of scope
- Dynamic CMS or database fetching (pure static export `output: 'export'`).
- Marketing testimonials, promotional client accolades, or win-rate statistics (strictly prohibited by BCI Rule 36).
- Contact inquiry form submissions (Feature 8 handles static contact directory).

## Build loop
- Workflow setting: `workflow.stepReview: "feature"` (single review packet after completing implementation steps).
- Checkpoint commits: `disabled`.

## Build steps
- [x] 1. **Develop `src/app/about/page.tsx` Layout & Sections**:
   - Build breadcrumb header, founding narrative, and litigation standards.
   - Build core principles cards, judicial appearance forums grid, and BCI ethical standards callout.
   - Include directional links to practice areas, advocates, and chambers contact.
   - Done when: `/about` renders all sections with factual copy, correct tokens, and no placeholder text.
- [x] 2. **Quality, Style Polish & Semantic Accessibility**:
   - Ensure clean responsive behavior (mobile, tablet, desktop), valid semantic tags (`<main>`, `<section>`, `<article>`, `<h1>`, `<h2>`, `<h3>`), and proper contrast ratios.
   - Ensure `pnpm lint` and `pnpm format` succeed with zero errors.
   - Done when: Biome checks and formatting pass cleanly with exit code 0.
- [x] 3. **Static Build & Typecheck Verification**:
   - Run `pnpm exec tsc --noEmit` and `pnpm build` to verify `/about` generates static `out/about/index.html` (or `out/about.html`) with zero errors.
   - Done when: Static build succeeds and creates static output with exit code 0.

## Files / areas
- `src/app/about/page.tsx`: About page implementation.
- `src/config/firm.ts`: Firm data source.

## Data / contracts
- Data consumed strictly from `firmConfig` in `src/config/firm.ts`.
- Pure static HTML generation compatible with `output: 'export'`.
- Internal navigation links target `/`, `/practice-areas`, `/team`, `/contact`, and `/disclaimer`.

## Testing
- Automated Typecheck: `pnpm exec tsc --noEmit`.
- Automated Lint: `pnpm lint`.
- Automated Static Build: `pnpm build`.

## Notes for the AI
- Maintain strict BCI Rule 36 compliance: factual, dignified, no outcome guarantees or promotional puffery.
- Use Lucide icons: `Scale`, `Landmark`, `ShieldCheck`, `Compass`, `FileText`, `CheckCircle2`, `ArrowRight`, `Building2`.
