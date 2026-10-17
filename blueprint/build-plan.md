# Build Plan

## Milestone 1: Regulatory Foundation & Static Design System
- [x] 1. **Static Export Configuration & Centralized Brand Design System** - Configure `next.config.ts` for static HTML export (`output: 'export'`), establish `src/config/firm.ts` with extensible dummy firm data, and configure CSS design tokens in `globals.css` so branding and colors can be customized centrally.
- [x] 2. **BCI Rule 36 Disclaimer Gate & Standalone Page** - Build the mandatory pre-entry disclaimer modal with consent checkbox, "Accept & Proceed" and "Exit" actions, session persistence (`localStorage`), and the standalone `/disclaimer` route.
- [ ] 3. **Site Shell, Header & Institutional Footer** - Create a responsive navigation bar, mobile drawer, and institutional footer with firm details, compliance disclosures, and navigation links.

## Milestone 2: Core Firm Experiences & Static Generation
- [ ] 4. **Homepage & Institutional Ethos** - Implement the primary landing page featuring an authoritative hero section, core values, practice highlights, leadership introduction, and office jurisdiction.
- [ ] 5. **About Firm Page** - Build `/about` detailing the chamber's founding philosophy, litigation and advisory standards, jurisdictions (Supreme Court, High Courts, Tribunals), and institutional principles.
- [ ] 6. **Practice Areas Index & Static Detail Views** - Build `/practice-areas` catalog and dynamic `/practice-areas/[slug]` pages pre-rendered via `generateStaticParams()` for in-depth, factual descriptions of each legal domain.
- [ ] 7. **Advocates & Leadership Directory** - Build `/team` and `/team/[slug]` pre-rendered via `generateStaticParams()` showcasing advocate qualifications, bar admissions, areas of expertise, and professional backgrounds.
- [ ] 8. **Contact & Chambers Location Page** - Build `/contact` with direct contact cards (phone, email, hours), court proximity information, and an interactive location map embed.
