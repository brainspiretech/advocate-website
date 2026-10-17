# Feature: BCI Rule 36 Disclaimer Gate & Standalone Page

**From build-plan:** feature 2
**Build attempt:** 1
**Branch:** feature/bci-rule-36-disclaimer-gate-and-standalone-page
**Status:** verified

## Goal
Implement the mandatory Bar Council of India (BCI) Rule 36 regulatory disclaimer gate to ensure the website strictly complies with Indian legal advertising prohibitions. The gate presents an un-bypassable modal on first visit requiring explicit acknowledgment that the visitor is accessing the site voluntarily for informational purposes, with session persistence (`localStorage`) and a standalone `/disclaimer` reference page.

## In scope
- Create `src/components/disclaimer/DisclaimerModal.tsx` client component.
- Implement voluntary access agreement text compliant with BCI Rule 36, Section IV, Chapter II, Part VI of the BCI Rules under the Advocates Act, 1961.
- Provide explicit acknowledgment checkbox and two distinct actions:
  - **"Accept & Proceed"**: Stores timestamped agreement with version tag in `localStorage` (`bci_disclaimer_consent`) and unlocks the site.
  - **"Decline & Exit"**: Redirects the user away from the site (`https://www.google.com`).
- Prevent hydration mismatch during static HTML generation and client hydration.
- Build permanent standalone `/disclaimer` page at `src/app/disclaimer/page.tsx` for in-depth statutory terms and reference.
- Mount `<DisclaimerModal />` in `src/app/layout.tsx` so the compliance gate protects the entire application.
- Verify with `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` (producing `out/disclaimer/index.html`).

## Out of scope
- Header, navigation bar, and institutional footer (Feature 3).
- Homepage content and sections (Feature 4).
- Practice areas and advocate profiles (Features 5-8).

## Build loop
Follow the configured workflow:
- `workflow.stepReview`: `"feature"` (single review packet at the end of implementation).
- `workflow.checkpointCommits`: `"disabled"` (no intermediate step commit prompts).
- Run typecheck and linting after each step.

## Build steps
- [x] 1. **Create BCI Disclaimer Component (`src/components/disclaimer/DisclaimerModal.tsx`)** - Build the client-side compliance gate modal with frosted backdrop, dignified legal notice, acknowledgment checkbox, "Accept & Proceed" and "Decline & Exit" buttons, and safe `localStorage` persistence.
  - *Done when:* Component compiles with strict TypeScript, safely checks `localStorage` after mount without hydration mismatch, and updates state on consent.
- [x] 2. **Build Standalone Regulatory Page (`src/app/disclaimer/page.tsx`)** - Create `/disclaimer` detailing the Advocates Act, 1961, Rule 36 provisions, informational scope, no attorney-client relationship clause, and firm contact information.
  - *Done when:* Route compiles, exports cleanly as static HTML, and renders full statutory text using design tokens.
- [x] 3. **Integrate Disclaimer Modal into Site Shell & Verify Static Build** - Mount `<DisclaimerModal />` into `src/app/layout.tsx`. Verify static export generation via `pnpm build`, ensuring `out/disclaimer/index.html` is generated, typecheck passes, and lint check passes.
  - *Done when:* `pnpm build` succeeds, `out/disclaimer/index.html` is generated, and `pnpm lint` and `pnpm exec tsc --noEmit` pass with 0 errors.

## Files / areas
- `src/components/disclaimer/DisclaimerModal.tsx` (new)
- `src/app/disclaimer/page.tsx` (new)
- `src/app/layout.tsx`

## Data / contracts
- `DisclaimerConsent` schema in `localStorage` under key `bci_disclaimer_consent`:
  - `accepted`: boolean (`true`)
  - `acceptedAt`: string (ISO 8601 timestamp)
  - `version`: string (from `firmConfig.bciCompliance.noticeVersion`)

## Testing
- `pnpm exec tsc --noEmit` for static type checking.
- `pnpm lint` for Biome compliance.
- `pnpm build` to verify static HTML export generates both `out/index.html` and `out/disclaimer/index.html`.

## Notes for the AI
- Ensure client-side `localStorage` access is wrapped in `useEffect` or state hook to prevent Next.js SSR/static export hydration mismatch.
- Keep the design dignified and authoritative: deep navy headers, muted gold accents, clean hairline borders, and clear readability.
- The modal must not close on outside click or Escape key without explicit acceptance.
