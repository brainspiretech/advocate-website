# Fix: Remove Redundant Bar Council of India Rule 36 Compliant Line

- **Type:** Fix
- **Status:** verified
- **Branch:** fix/remove-redundant-bci-rule-36-line

## The Problem
In the site footer and layout disclaimer sections, there was an unnecessary and repetitive secondary line reading "Bar Council of India Rule 36 Compliant" alongside the standard statutory notice:
`Strictly informational publication compliant with Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules.`
The user requested removing the redundant "Bar Council of India Rule 36 Compliant" label so the disclaimer remains clean, minimal, and dignified without repetitive compliance badges.

## The Fix
1. Removed `<span className="text-accent font-semibold">Bar Council of India Rule 36 Compliant</span>` from `HeritageLayout.tsx` and `LuxuryLayout.tsx`.
2. Removed the repetitive `<div className="inline-flex ...">...<span>Bar Council of India Rule 36 Compliant</span>...</div>` badge from `Footer.tsx`.
3. Standardized the disclaimer text across all layouts (`HeritageLayout`, `LuxuryLayout`, `IlaLayout`, `CorporateLayout`, `EditorialLayout`) to:
   `Strictly informational publication compliant with {firmConfig.bciCompliance.ruleReference}.`
4. Centered the single statutory disclosure notice in all layout disclaimer sections.

## Build Steps
1. [x] **Step 1: Update disclaimer bars and footer**
   - In `src/components/layout/Footer.tsx`, removed the Rule 36 compliance badge block.
   - In `HeritageLayout.tsx`, `LuxuryLayout.tsx`, `IlaLayout.tsx`, `CorporateLayout.tsx`, `EditorialLayout.tsx`, and `BrutalistLayout.tsx`, removed the redundant secondary compliance badge/pill and standardized the notice to: `Strictly informational publication compliant with {firmConfig.bciCompliance.ruleReference}.`

## Verify
- `pnpm format && pnpm lint && pnpm exec tsc --noEmit`: 0 errors.
- `pnpm build`: Next.js 16 webpack static export compiled successfully.
- Verified disclaimer bars across all layouts to confirm clean rendering of the streamlined single statutory sentence.
