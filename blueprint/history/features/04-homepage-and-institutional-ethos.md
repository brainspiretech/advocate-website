# Feature: Homepage & Institutional Ethos

**From build-plan:** feature 4
**Build attempt:** 1
**Branch:** `feature/homepage-and-institutional-ethos`
**Status:** verified

## Goal
Replace the default boilerplate page with an authoritative, dignified institutional homepage for Apex Chambers. The homepage must embody the chambers' ethos ("Precision. Integrity. Perspective."), present factual legal practice disciplines and leadership profiles, highlight court jurisdictions and chamber proximity to the Supreme Court of India, and strictly adhere to Bar Council of India Rule 36.

## Design reference
Inspired by dignified legal chamber portals (such as ILA Chambers), featuring editorial typography (Cormorant Garamond serif headings, Plus Jakarta Sans body text), deep regal navy (`--primary`), subtle warm brass/gold accents (`--accent`), off-white structured cards, and precise, non-promotional hierarchy.

## In scope
- Authoritative Hero section in `src/app/page.tsx` featuring chamber establishment details (Estd. 2012, New Delhi), motto ("Precision. Integrity. Perspective."), dignified institutional overview, and direct links to `/practice-areas`, `/about`, and `/team`.
- Institutional Ethos & Core Principles section presenting the three founding tenets from `firmConfig.corePrinciples`: "Integrity & Independence", "Analytical Precision", and "Strategic Advocacy".
- Practice Disciplines Highlights grid showcasing the 6 core practice areas from `src/config/firm.ts` with discipline descriptions, key forums/courts badges, and contextual navigation to `/practice-areas`.
- Chambers Leadership Introduction section introducing Founder & Managing Counsel Rajesh Narayan and Partners Meenakshi Swaminathan and Anand Vardhan Singh with academic pedigree, Bar enrollment details, and link to `/team`.
- Court Jurisdictions & Chambers Proximity section featuring the Supreme Court of India, Delhi High Court, NCLT/NCLAT, and chamber consultation coordinates with a link to `/contact`.
- Factual BCI statutory disclaimer footer note ensuring full regulatory compliance.
- Responsive design across mobile, tablet, and desktop viewports with rich accessibility, semantic landmarks (`<section aria-labelledby="...">`), and pure static generation support.

## Out of scope
- Dynamic blog/news feeds or external CMS connectors.
- Interactive booking or client fee inquiry forms (strictly prohibited under BCI Rule 36).
- Marketing testimonials, promotional client reviews, or outcome claims.
- Standalone practice area detail views or individual advocate bios (covered in subsequent Features 6 and 7).

## Build loop
- Workflow setting: `workflow.stepReview: "feature"` (single review packet after completing implementation steps).
- Checkpoint commits: `disabled`.

## Build steps
- [x] 1. **Develop Homepage Section Components in `src/app/page.tsx`**:
   - Construct the Hero section with chamber insignia, motto, and navigation pathways.
   - Construct the Core Principles section rendering `firmConfig.corePrinciples` in structured editorial cards.
   - Construct the Practice Highlights grid with icons, summaries, and forum tags.
   - Construct the Leadership Preview cards with advocate designations, bar credentials, and academic qualifications.
   - Construct the Jurisdictions and Proximity section detailing court appearances and chamber office address.
   - Done when: `src/app/page.tsx` renders all 5 factual sections without placeholder text or hydration issues.
- [x] 2. **Quality, Style Polish & Semantic Accessibility**:
   - Ensure clean contrast ratios, responsive grid arrangements (1 col mobile, 2/3 col desktop), proper `<section>` landmarks, and heading hierarchy (`h1` for hero, `h2` for section titles, `h3` for cards).
   - Ensure no marketing puffery or non-compliant terminology is introduced.
   - Done when: `pnpm lint` and `pnpm format` succeed with zero errors and clean layout across viewport sizes.
- [x] 3. **Static Build & Typecheck Verification**:
   - Run `pnpm exec tsc --noEmit` and `pnpm build` to confirm static export renders `out/index.html` cleanly with zero errors.
   - Done when: `pnpm exec tsc --noEmit` and `pnpm build` succeed with exit code 0.

## Files / areas
- `src/app/page.tsx`: Primary landing page implementation.
- `src/config/firm.ts`: Source of truth for firm data (`firmConfig`, `practiceAreas`, `advocates`).

## Data / contracts
- Data consumed strictly from `firmConfig`, `practiceAreas`, and `advocates` in `src/config/firm.ts`.
- Pure static HTML generation compatible with `output: 'export'`.
- Internal navigation links target `/about`, `/practice-areas`, `/team`, `/contact`, and `/disclaimer`.

## Testing
- Automated Typecheck: `pnpm exec tsc --noEmit`.
- Automated Lint: `pnpm lint`.
- Automated Static Build: `pnpm build` (ensuring `out/index.html` is generated).

## Notes for the AI
- Keep all language strictly factual, dignified, and compliant with Bar Council of India Rule 36.
- Leverage `lucide-react` icons (Scale, Building2, Landmark, ShieldAlert, Briefcase, FileText, ArrowRight, Compass, Award, MapPin) matching the practice area configuration.
- Use semantic HTML tags (`<section>`, `<article>`, `<header>`, `<h2>`, `<p>`) and accessible ARIA attributes.
