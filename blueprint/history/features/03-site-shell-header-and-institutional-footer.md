# Feature: Site Shell, Header & Institutional Footer

**From build-plan:** feature 3
**Build attempt:** 1
**Branch:** feature/site-shell-header-and-institutional-footer
**Status:** verified

## Goal
Build the authoritative, responsive site shell featuring an editorial header with sticky navigation and mobile drawer, and a prestigious institutional footer adhering to Bar Council of India Rule 36 disclosures, linking all core routes (`/`, `/about`, `/practice-areas`, `/team`, `/contact`, `/disclaimer`).

## In scope
- Build `src/components/layout/Navbar.tsx` client component:
  - Firm emblem/branding with firm name and subtitle.
  - Desktop navigation items (`Home`, `About Firm`, `Practice Areas`, `Advocates`, `Contact`) with active link detection via `usePathname()`.
  - Mobile hamburger toggle with animated slide-over drawer and automatic drawer close on navigation.
  - Sticky header styling with subtle backdrop blur and hairline border.
- Build `src/components/layout/Footer.tsx`:
  - Deep regal navy background (`bg-primary text-primary-foreground`) with warm gold accent highlights.
  - Four structured columns: Firm Identity & BCI notice, Practice Area shortcuts, Institutional links, and Chambers Address & Contact coordinates.
  - Bottom copyright bar with statutory informational notice and `/disclaimer` reference.
- Update `src/app/layout.tsx` to wrap page content in the standard structural layout: `<Navbar />` at top, `<main className="flex-1">` in middle, and `<Footer />` at bottom.
- Ensure strict static export compatibility (`output: 'export'`), clean TypeScript compilation, and Biome lint passing.

## Out of scope
- Homepage bespoke hero, values, and teaser sections (Feature 4).
- Dedicated `/about` page narrative (Feature 5).
- Practice area index and dynamic detail routes (Feature 6).
- Advocates index and profile routes (Feature 7).
- Contact page and interactive map embed (Feature 8).

## Build loop
Follow the configured workflow:
- `workflow.stepReview`: `"feature"` (single review packet at the end of implementation).
- `workflow.checkpointCommits`: `"disabled"` (no intermediate step commit prompts).
- Run typecheck and linting after each step.

## Build steps
- [x] 1. **Build Responsive Header & Navigation (`src/components/layout/Navbar.tsx`)** - Create the navigation bar with firm branding, active path indicators, and mobile responsive drawer.
  - *Done when:* Component renders on desktop and mobile, highlights active routes, toggles mobile menu cleanly, and passes TypeScript checks.
- [x] 2. **Build Institutional Footer (`src/components/layout/Footer.tsx`)** - Build the multi-column institutional footer populated dynamically from `firmConfig` and `practiceAreas`, featuring court jurisdictions, contact information, and mandatory BCI compliance disclosures.
  - *Done when:* Component renders statically with proper typography and styling, links to all main routes and `/disclaimer`, and passes type checks.
- [x] 3. **Integrate Site Shell in RootLayout & Verify Static Build** - Update `src/app/layout.tsx` to structure all pages with `<Navbar />`, `<main className="flex-1">`, and `<Footer />`. Verify static generation via `pnpm build`, ensuring `out/index.html` and `out/disclaimer.html` contain the complete site shell and pass linting.
  - *Done when:* `pnpm build` succeeds with zero errors, `pnpm lint` and `pnpm exec tsc --noEmit` pass, and the site shell renders on all pages.

## Files / areas
- `src/components/layout/Navbar.tsx` (new)
- `src/components/layout/Footer.tsx` (new)
- `src/app/layout.tsx`

## Data / contracts
- Navigation routes:
  - `Home`: `/`
  - `About Firm`: `/about`
  - `Practice Areas`: `/practice-areas`
  - `Advocates`: `/team`
  - `Contact`: `/contact`
  - `Statutory Disclaimer`: `/disclaimer`
- Data sources: `firmConfig` and `practiceAreas` from `src/config/firm.ts`.

## Testing
- `pnpm exec tsc --noEmit` for static type checking.
- `pnpm lint` for Biome lint compliance.
- `pnpm build` to verify static HTML export compiles cleanly and pre-renders the updated shell.

## Notes for the AI
- Avoid generic SaaS navbar designs; style with stately, editorial legal dignity (serif accents, clean hairline borders, warm gold highlights).
- In mobile view, lock body scroll or close drawer smoothly when navigating.
- Footer must prominently reference BCI Rule 36 compliance and provide a direct link to `/disclaimer`.
