# Feature: Heritage Color Palette Theme Switcher & Mahogany Library Hero

**From build-plan:** feature 11
**Build attempt:** 1
**Branch:** feature/heritage-color-palette-theme-switcher-and-mahogany-library-hero
**Status:** complete

## Goal

Provide visitors and chamber partners with an interactive, dignified heritage color palette theme switcher (toggling between Imperial Navy & Brass, Oxford Burgundy & Amber, and Heritage Forest Green & Bronze) with persistent `localStorage` preference and zero-flicker client-side rendering, and replace the homepage hero background with a rich dark mahogany legal library asset.

## Design reference

Consistent with premier legal institutions and Oxford/Cambridge collegiate chambers:
- Three dignified legal heritage colorways:
  1. **Imperial Navy & Warm Brass** *(Default)*: `#0b192c` primary, `#070f1b` primary-dark, `#c5a880` accent.
  2. **Oxford Burgundy & Warm Amber**: `#2b141a` primary, `#1b0b0f` primary-dark, `#d4a373` accent.
  3. **Heritage Forest Green & Bronze**: `#132a1e` primary, `#0a1710` primary-dark, `#c29b63` accent.
- Smooth CSS theme transitions (`transition-colors duration-300`)
- Accessible theme switcher in header navigation and mobile drawer with visual color swatch indicators
- Anti-flicker inline head script preventing flash of unstyled theme on page load
- Curated dark neoclassical mahogany legal library photograph with atmospheric vignette for hero backdrop

## In scope

- Curate and download a high-resolution dark neoclassical law library image to `public/images/hero/mahogany-library.jpg`.
- Update `src/config/firm.ts` `heroImage` reference to the new mahogany library asset.
- Update `src/app/globals.css` with dynamic CSS custom property mappings for `:root`, `[data-theme="navy"]`, `[data-theme="burgundy"]`, and `[data-theme="green"]`.
- Create `src/components/theme/ThemeSwitcher.tsx` with dropdown menu, active theme indicator, and `localStorage` persistence.
- Add anti-flicker theme initialization script to `src/app/layout.tsx`.
- Integrate `ThemeSwitcher` into `src/components/layout/Header.tsx` (desktop header and mobile menu).
- Verify typecheck, lint, and production static build.

## Out of scope

- Arbitrary custom RGB/hex color pickers (only dignified, curated legal heritage palettes).
- Server-side cookie sessions (must maintain 100% static HTML export compatibility).

## Build loop

- `workflow.stepReview`: feature
- `workflow.checkpointCommits`: disabled

## Build steps

- [x] 1. Curate and download the dark neoclassical mahogany legal library image to `public/images/hero/mahogany-library.jpg` and update `firmConfig.heroImage`.
- [x] 2. Configure dynamic theme CSS custom properties in `src/app/globals.css` for Navy, Burgundy, and Green palettes.
- [x] 3. Create `src/components/theme/ThemeSwitcher.tsx` and integrate into `Header.tsx` and mobile drawer.
- [x] 4. Add anti-flicker theme script to `src/app/layout.tsx`.
- [x] 5. Run typecheck, lint, and production static export build to verify full export with themes.

## Files / areas

- `public/images/hero/mahogany-library.jpg` (new)
- `src/config/firm.ts` (modified)
- `src/app/globals.css` (modified)
- `src/components/theme/ThemeSwitcher.tsx` (new)
- `src/components/layout/Navbar.tsx` (modified)
- `src/app/layout.tsx` (modified)

## Data / contracts

- `localStorage.getItem('apex_theme')`: `"navy" | "burgundy" | "green"`
- `document.documentElement.setAttribute('data-theme', theme)`

## Testing

- Typecheck: `pnpm exec tsc --noEmit`
- Linter: `pnpm lint`
- Static Build & Export: `pnpm build:zip` proving zero build regression and clean static packaging
