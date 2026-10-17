# Fix: Refine Typography and Font Hierarchy for Law Chambers UI/UX

**Type:** Fix
**Status:** verified
**Branch:** `fix/refine-typography-and-font-hierarchy`

## The problem
The existing typography configuration relies on Cormorant Garamond with delicate hairlines and Plus Jakarta Sans, and globally forces all headings (`h1` through `h6`) to serif. On screens, Cormorant Garamond appears overly spindly, faint, and ornate at small-to-mid sizes (card headers, widgets, badges), reducing visual contrast and legibility. Indiscriminate serif styling across all heading levels degrades UI hierarchy, making cards, lists, and footer titles look cluttered rather than dignified and authoritative.

## The fix
1. Upgrade the serif font from `Cormorant_Garamond` to `Lora` (with italic support), a prestigious, contemporary serif with sturdy stems, generous x-height, and exceptional digital readability tailored for legal and editorial publications.
2. Pair with `Inter` for maximum clarity, geometric precision, and legibility across body text, badges, cards, navigation, and tabular data.
3. Fix heading hierarchy in `src/app/globals.css`: restrict default `font-serif` styling to primary display titles (`h1`, `h2`), while allowing `h3`-`h6` to use clean, crisp `font-sans font-semibold` by default, with explicit `font-serif` opt-in only where editorial styling is warranted.
4. Refine line heights, letter-spacing tokens, and card heading weights across `Navbar.tsx`, `Footer.tsx`, `src/app/page.tsx`, and `src/app/about/page.tsx`.

## Build steps
- [x] 1. **Update Font Loading in `src/app/layout.tsx` and Design Tokens in `src/app/globals.css`**:
   - Replace `Cormorant_Garamond` with `Lora` (weights 400, 500, 600, 700 with italic) and pair with `Inter` in `layout.tsx`.
   - Update CSS theme variables and refine heading hierarchy rules in `globals.css` so `h1` and `h2` are editorial serif while `h3`-`h6` retain clean sans-serif legibility.
   - Done when: Fonts load cleanly without hydration warnings and typography rules apply correctly.
- [x] 2. **Refine Component Typography Across Pages & Layout**:
   - Audit and polish heading classes in `Navbar.tsx`, `Footer.tsx`, `src/app/page.tsx`, and `src/app/about/page.tsx` for optimal optical size, contrast, and font weight.
   - Done when: Text hierarchy is harmonious, legible, and authoritative across all viewport sizes.
- [x] 3. **Static Build & Typecheck Verification**:
   - Run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` to confirm zero lint errors, clean types, and successful static export.
   - Done when: Static build succeeds and renders updated typography with exit code 0.

## Verify
- Open `http://localhost:3000` and `http://localhost:3000/about`.
- Verify the firm title, hero tagline, section headings, and card titles.
- Confirm high contrast, sturdy stems, effortless legibility, and refined legal elegance.
