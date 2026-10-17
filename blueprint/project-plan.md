# Project Plan: Indian Law Firm & Chambers Platform

> Source of truth for advocate-website. Designed for strict compliance with Rule 36 of the Bar Council of India (BCI) Rules, modeled on premier legal chamber platforms like ILA Chambers, and architected as a pure static HTML export.

## 1. Problem - What problem are we solving?
Indian legal practitioners are prohibited under the Advocates Act, 1961 from advertising or soliciting work. Law firms need a dignified, professional, and compliant digital presence that provides factual information regarding their practice areas, advocate profiles, and office locations to visitors seeking information of their own accord, without violating BCI regulations. The site must be 100% exportable as static HTML for flexible, serverless hosting on any CDN or static server.

## 2. Users - Who is this for?
- **Prospective Corporate & Individual Clients:** Looking for factual information about specific legal expertise (e.g., corporate litigation, arbitration, real estate, white-collar crime) and advocate qualifications.
- **In-House Legal Teams & Briefing Counsels:** Seeking chamber jurisdiction, court appearances (Supreme Court, High Courts, Tribunals), and partner experience.
- **The Law Firm / Managing Partners:** Requiring an easily maintainable, prestigious website where firm branding, colors, practice areas, and advocate profiles can be updated effortlessly in a central file.

## 3. Features - What does the MVP need?
- **BCI Rule 36 Compliance Entry Gate:** Un-bypassable disclaimer modal upon first visit requiring voluntary consent before accessing site content, with persistent session acknowledgment (`localStorage`).
- **Homepage:** Authoritative hero with firm philosophy, practice highlights, partner overview, and clean navigation.
- **About the Firm (`/about`):** History, founding ethos, chamber values (Integrity, Precision, Perspective), and court jurisdictions.
- **Practice Areas (`/practice-areas` and `/practice-areas/[slug]`):** Factual, comprehensive discipline pages covering dispute resolution, commercial litigation, corporate advisory, arbitration, etc., pre-rendered via `generateStaticParams()`.
- **Advocate & Team Directory (`/team` and `/team/[slug]`):** Individual advocate profiles with bar council enrollment, qualifications, educational pedigree, and practice domains, pre-rendered via `generateStaticParams()`.
- **Contact & Chambers Location (`/contact`):** Physical chamber address, landmark, phone/email, office hours, and interactive location map.
- **Centralized Theme & Branding System:** Design tokens in `globals.css` and firm data in `src/config/firm.ts` ensuring colors, typography, and firm details are modifiable in one spot without touching UI components.
- **Dedicated Standalone Disclaimer (`/disclaimer`):** Permanent reference page detailing BCI terms and conditions.
- **Static HTML Export Support:** Fully static output via `output: 'export'` generating a self-contained `out/` bundle.

### Explicit Non-Goals / Deferred for Later Milestones:
- Blog / Legal Insights publishing (deferred until client decides on content pipeline).
- Online client inquiry / intake forms (deferred until client confirms notification channels).
- Client portal, case tracking, or online fee payments.
- Client reviews, testimonials, or promotional comparative claims (strictly prohibited under BCI rules).

## 4. Data - What are we storing?
- **Static Firm Config (`src/config/firm.ts`):** Firm metadata, branding strings, partner credentials, practice area descriptions, and office details.
- **Client Session State (`localStorage`):** Timestamped BCI disclaimer consent acknowledgment token.

## 5. Tech - What stack are we using?
- **Framework:** Next.js 16 (App Router, React 19, TypeScript).
- **Export Mode:** Pure static HTML export (`output: 'export'`, `images: { unoptimized: true }`).
- **Styling:** Tailwind CSS v4 with custom CSS variables / design tokens.
- **Tooling:** Biome (linting & formatting).
- **Icons & Assets:** Lucide React (clean, minimalist legal and UI icons).

## 6. UI/UX - How should this look and feel?
- **Aesthetic:** Authoritative, prestigious, and editorial. Avoid generic SaaS or AI-generated styling.
- **Palette:** Deep regal navy/midnight slate base, crisp warm off-white surfaces, and warm muted brass/gold accents.
- **Typography:** Refined editorial serif for titles (e.g., Cormorant / Playfair style) paired with clean, accessible sans-serif for body text.
- **Responsiveness & Motion:** Fully responsive across mobile, tablet, and desktop with subtle micro-interactions and transitions.

## 7. Deployment - Where and how will this ship?
- **Platform:** Any static hosting / CDN (Cloudflare Pages, GitHub Pages, Netlify, Vercel, S3/CloudFront, or Nginx).
- **Build command:** `pnpm build`
- **Output:** Static HTML directory (`out/`).
