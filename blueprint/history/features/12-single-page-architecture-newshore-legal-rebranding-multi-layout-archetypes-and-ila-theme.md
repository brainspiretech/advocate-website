# Feature 12: Single-Page Architecture, Newshore Legal Rebranding, Multi-Layout Archetypes & ILA Chambers Theme

- **Type:** Feature
- **Status:** verified
- **Branch:** feature/single-page-and-ila-themes
- **Build attempt:** 1

## Purpose
Transform the firm's website into a unified single-page application with smooth section anchor navigation, rebrand to Newshore Legal focusing strictly on Immigration Law and General Dispute Resolution, and expand the theme switcher into a multi-layout showcase featuring 15 themes across 6 structural layout archetypes, including an authentic ILA Chambers-inspired slate navy and champagne gold layout (`ilachambers.com`).

## Changes
1. **Single-Page Navigation Architecture (`SinglePageNav.tsx`)**:
   - Replaced multi-page navigation links with smooth-scrolling section anchors (`#hero`, `#about`, `#practice`, `#team`, `#jurisdictions`, `#contact`).
   - Clean horizontal desktop navigation bar where page section buttons are inline and standard, reserving dropdown interaction strictly for the Theme Showcase.
   - Preserved BCI Rule 36 disclaimer modal and legal compliance safeguards.

2. **Rebranding to Newshore Legal & Practice Domain Shift (`firm.ts`)**:
   - Updated legal identity to **Newshore Legal** with tagline `"Excellence in Immigration Law & Dispute Resolution"`.
   - Replaced previous general corporate/tax disciplines with 6 specialized immigration and dispute resolution areas:
     - Global Corporate & Business Immigration
     - Individual Immigration, Residency & Citizenship
     - Immigration Litigation, Appeals & Judicial Review
     - Commercial Dispute Resolution & Arbitration
     - Civil Litigation & Contract Enforcement
     - Mediation & Alternative Dispute Resolution (ADR)
   - Updated partner bios (Rajesh Narayan, Meenakshi Swaminathan, Anand Vardhan Singh) and key forums (FRRO, MHA, Supreme Court, Delhi High Court, Arbitral Tribunals).

3. **6 Structural Layout Archetypes (`src/components/layouts/`)**:
   - `IlaLayout.tsx`: Signature ILA Chambers layout with dark atmospheric hero, centered floating glassmorphic card, and 6-card grid with circular image vignettes.
   - `LuxuryLayout.tsx`: Neo-classical dark luxury layout with glowing badge and centered gold serif titles.
   - `EditorialLayout.tsx`: Clean legal journal publication format with right-hand chambers docket summary card.
   - `HeritageLayout.tsx`: High-contrast brass & forest green judicial crest layout with centered seal.
   - `BrutalistLayout.tsx`: Razor-sharp monospace grid with live coordinate tickers and high-contrast section borders.
   - `CorporateLayout.tsx`: Executive modern corporate interface with interactive chambers metrics dashboard and tabbed practice views.

4. **15 Themes Across Archetypes (`globals.css` & `DesignShowcase.tsx`)**:
   - Added `ila` (ILA Chambers Signature), `sapphire` (Oxford Sapphire), and `kyoto` (Kyoto Minimalist).
   - Dynamic zero-flicker CSS variable system in `globals.css` with client-side persistence in `localStorage`.

## Verification
- `pnpm exec tsc --noEmit`: 0 errors.
- `pnpm lint`: Biome checks passed cleanly with 0 errors.
- `pnpm build`: Next.js 16 webpack static export compiled all static routes successfully.
- Visual browser verification: Validated live at `http://localhost:3000` with screenshots capturing ILA Chambers floating card, 6-pillar circular-vignette grid, and multi-theme switching.

## Try it now
1. Visit `http://localhost:3000/`.
2. Acknowledge the BCI Rule 36 disclaimer.
3. Observe the inline section navigation: click "About", "Practice Areas", "Advocates", "Jurisdictions", or "Contact" to experience smooth scrolling.
4. Click the theme switcher at the top right and select "ILA Chambers (Signature)" to view the boutique slate & champagne gold layout inspired by `ilachambers.com`.
5. Switch between "Oxford Sapphire", "Monochrome Authority", "Ivory & Slate", and "Midnight Obsidian" to see how layout structures dynamically adapt while keeping content synchronized.
