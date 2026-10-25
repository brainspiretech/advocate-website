# Build Plan

## Milestone 1: Regulatory Foundation & Static Design System
- [x] 1. **Static Export Configuration & Centralized Brand Design System** - Configure `next.config.ts` for static HTML export (`output: 'export'`), establish `src/config/firm.ts` with extensible dummy firm data, and configure CSS design tokens in `globals.css` so branding and colors can be customized centrally.
- [x] 2. **BCI Rule 36 Disclaimer Gate & Standalone Page** - Build the mandatory pre-entry disclaimer modal with consent checkbox, "Accept & Proceed" and "Exit" actions, session persistence (`localStorage`), and the standalone `/disclaimer` route.
- [x] 3. **Site Shell, Header & Institutional Footer** - Create a responsive navigation bar, mobile drawer, and institutional footer with firm details, compliance disclosures, and navigation links.

## Milestone 2: Core Firm Experiences & Static Generation
- [x] 4. **Homepage & Institutional Ethos** - Implement the primary landing page featuring an authoritative hero section, core values, practice highlights, leadership introduction, and office jurisdiction.
- [x] 5. **About Firm Page** - Build `/about` detailing the chamber's founding philosophy, litigation and advisory standards, jurisdictions (Supreme Court, High Courts, Tribunals), and institutional principles.
- [x] 6. **Practice Areas Index & Static Detail Views** - Build `/practice-areas` catalog and dynamic `/practice-areas/[slug]` pages pre-rendered via `generateStaticParams()` for in-depth, factual descriptions of each legal domain.
- [x] 7. **Advocates & Leadership Directory** - Build `/team` and `/team/[slug]` pre-rendered via `generateStaticParams()` showcasing advocate qualifications, bar admissions, areas of expertise, and professional backgrounds.
- [x] 8. **Contact & Chambers Location Page** - Build `/contact` with direct contact cards (phone, email, hours), court proximity information, and an interactive location map embed.

## Milestone 3: Visual Identity & Editorial UX Elevation
- [x] 9. **Curated Legal Photographic Assets & Advocate Portrait Integration** - Curate and download high-resolution, royalty-free legal imagery into `/public/images/` (courtroom architecture, chambers library, and professional advocate portraits for all three counsels), update `src/config/firm.ts` with image references, and integrate authentic advocate photography into `/team`, `/team/[slug]`, and homepage leadership teasers.
- [x] 10. **Atmospheric Hero Redesign & Rich Editorial Surface Polish** - Elevate the homepage hero with an atmospheric neoclassical judicial backdrop and gradient overlay, enrich `/about` with classical chambers library imagery, add visual discipline cards to `/practice-areas`, and refine card hover elevations and micro-interactions across the site.
- [x] 11. **Heritage Color Palette Theme Switcher & Mahogany Library Hero** - Implement a dynamic client-side theme switcher supporting 3 curated legal heritage palettes (Imperial Navy, Oxford Burgundy, Heritage Forest Green) stored in `localStorage`, integrate an accessible selector in the site navigation, and upgrade the homepage hero to a dark mahogany legal library asset.

## Milestone 4: Single-Page Experience, Rebranding & Multi-Theme Architecture
- [x] 12. **Single-Page Architecture, Newshore Legal Rebranding, Multi-Layout Archetypes & ILA Chambers Theme** - Transition the site to a single-page website with smooth section scrolling, rebrand to Newshore Legal focusing on Immigration Law and General Dispute Resolution, introduce a 15-theme selector spanning 6 unique structural layout archetypes, including an authentic ILA Chambers-inspired slate & champagne gold layout.

