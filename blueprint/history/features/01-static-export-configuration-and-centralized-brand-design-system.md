# Feature: Static Export Configuration & Centralized Brand Design System

**From build-plan:** feature 1
**Build attempt:** 1
**Branch:** feature/static-export-configuration-and-centralized-brand-design-system
**Status:** verified

## Goal
Establish the static export architecture, configure the bespoke legal design system tokens and typography in CSS, and provide a single typed source of truth (`src/config/firm.ts`) for firm identity, practice areas, advocate profiles, and office locations so the entire website can be branded and edited centrally.

## In scope
- Configure `next.config.ts` for static HTML export (`output: 'export'`, `images: { unoptimized: true }`).
- Install `lucide-react` for dignified, minimalist iconography.
- Configure legal editorial typography in `src/app/layout.tsx` (e.g., Cormorant Garamond for headings and Inter / Plus Jakarta Sans for body).
- Define CSS design tokens in `src/app/globals.css` (primary navy, warm slate, muted brass/gold accent, crisp card surfaces, borders) and bind to Tailwind CSS v4 `@theme`.
- Create `src/config/firm.ts` with complete TypeScript interfaces (`FirmConfig`, `PracticeArea`, `AdvocateProfile`, `OfficeLocation`) and comprehensive, realistic dummy data for an Indian chambers (New Delhi jurisdiction, 6 core practice areas, 3 advocate profiles, office coordinates).
- Verify clean TypeScript compilation, linting, and static HTML production build outputting to `out/`.

## Out of scope
- Pre-entry disclaimer modal (Feature 2).
- Header, navigation bar, and institutional footer (Feature 3).
- Individual page layouts or routes (`/about`, `/practice-areas`, etc. - Features 4-8).

## Build loop
Follow the configured workflow:
- `workflow.stepReview`: `"feature"` (single comprehensive review packet at the end of implementation).
- `workflow.checkpointCommits`: `"disabled"` (no intermediate step commit prompts).
- Run typecheck and linting after each step.

## Build steps
- [x] 1. **Configure Static Export & Install Lucide Icons** - Update `next.config.ts` with `output: 'export'` and `images: { unoptimized: true }`. Install `lucide-react`. Ensure Next.js build options remain compatible with static export.
  - *Done when:* `next.config.ts` has `output: 'export'`, `lucide-react` is in `package.json`, and `pnpm exec tsc --noEmit` succeeds.
- [x] 2. **Establish Centralized Firm Data Contract (`src/config/firm.ts`)** - Create typed data structures for firm metadata, practice areas, advocates, and chambers offices. Populate with realistic Indian legal dummy data (e.g., "Apex Chambers", Delhi High Court & Supreme Court jurisdiction, 6 practice areas, 3 advocate profiles).
  - *Done when:* `src/config/firm.ts` exports `firmConfig`, `practiceAreas`, `advocates`, and type definitions with zero TypeScript errors.
- [x] 3. **Implement Brand Design System & Editorial Typography** - Configure Google Fonts in `src/app/layout.tsx` (Cormorant Garamond and Plus Jakarta Sans). Define CSS variables for colors, surfaces, borders, and typography in `src/app/globals.css` and integrate with Tailwind v4 `@theme`. Update metadata to derive from `firmConfig`.
  - *Done when:* `globals.css` defines the palette tokens (navy, slate, brass/gold), `layout.tsx` binds the fonts, and `pnpm lint` and `pnpm build` successfully produce the static `out/` export.

## Files / areas
- `next.config.ts`
- `package.json`
- `src/config/firm.ts` (new)
- `src/app/globals.css`
- `src/app/layout.tsx`

## Data / contracts
- `FirmConfig`: `name`, `tagline`, `shortDescription`, `fullDescription`, `jurisdictions`, `office`, `socialLinks`.
- `PracticeArea`: `id`, `slug`, `title`, `shortDescription`, `detailedOverview`, `keyAreas`, `courts`.
- `AdvocateProfile`: `id`, `slug`, `name`, `designation`, `barEnrollment`, `education`, `primaryPractices`, `admissions`, `biography`.
- `OfficeLocation`: `addressLine1`, `addressLine2`, `city`, `state`, `postalCode`, `phone`, `email`, `hours`, `mapEmbedUrl`.

## Testing
- `pnpm exec tsc --noEmit` for static type checking.
- `pnpm lint` for Biome lint compliance.
- `pnpm build` to verify that `output: 'export'` succeeds and generates the `out/` directory.

## Notes for the AI
- Tailwind CSS v4 uses CSS-first configuration (`@theme inline` in `globals.css`). Do not create a `tailwind.config.js`.
- Make sure `next.config.ts` does not contain options incompatible with `output: 'export'` (such as experimental `partialPrefetching: true`, which requires a Node.js server).
- Keep all firm text in `src/config/firm.ts` strictly factual and compliant with BCI Rule 36 (no "top lawyer" or "best firm" claims).
