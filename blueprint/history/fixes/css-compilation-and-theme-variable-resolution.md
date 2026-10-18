# Fix: CSS Compilation and Theme Variable Resolution

- **Type:** Fix
- **Status:** verified
- **Branch:** fix/css-compilation-and-theme-variable-resolution

## The Problem
1. When building for production via `next build --webpack`, Next.js 16 Webpack does not process Tailwind CSS v4 `@import "tailwindcss";` without `@tailwindcss/postcss`.
2. As a consequence, `globals.css` is emitted into `out/_next/static/css/` with raw uncompiled `@theme inline` declarations, and Tailwind utility classes (`bg-primary`, `text-accent`, `bg-surface`, etc.) are completely absent from the production stylesheet.
3. This breaks styling on the deployed site and in `cpanel-deploy.zip`.

## The Fix
1. Install `@tailwindcss/postcss` and `postcss` as dev dependencies.
2. Add `postcss.config.mjs` configured with `@tailwindcss/postcss`.
3. Normalize `next.config.ts` so PostCSS processes CSS cleanly for both dev and static export builds.
4. Verify `pnpm run build:zip` successfully generates fully compiled CSS with all Tailwind utility classes and packages all images and assets into `cpanel-deploy.zip`.
5. Test live browser appearance and theme color switching.

## Build Steps
1. [x] **Step 1: Install PostCSS plugin and configure build pipeline**
   - Install `@tailwindcss/postcss` and `postcss`.
   - Add `postcss.config.mjs`.
   - Update `next.config.ts` and `package.json` build scripts if needed.
   - *Done when:* `pnpm build` succeeds and `out/_next/static/css/` contains compiled `.bg-primary` and `.text-accent` classes.

2. [x] **Step 2: Generate and verify cPanel deployment package**
   - Run `pnpm run build:zip`.
   - Inspect `cpanel-deploy.zip` contents to ensure all images and compiled CSS are properly packaged.
   - *Done when:* `cpanel-deploy.zip` is created with valid checksum and all required assets.

3. [x] **Step 3: Live verification in browser**
   - Test `http://localhost:3000` to verify design fidelity and theme switching (Navy, Burgundy, Green).
   - *Done when:* CSS styles and theme switching visually apply without errors.

## Verify
- Run `pnpm lint`, `pnpm format`, `pnpm exec tsc --noEmit`.
- Run `pnpm run build:zip`.
- Check compiled CSS for Tailwind utility classes.
- Verify browser rendering and theme switching.
