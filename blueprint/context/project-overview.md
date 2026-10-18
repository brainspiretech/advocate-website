# advocate-website - Project Overview

<!-- blueprint:source-hash fdf66e4e47c15f266c8dc78e97654a22ecdb3dd1e2b593f95d513e92c1d9c193 -->

> Dignified, authoritative Indian law firm website engineered for strict compliance with Rule 36 of the Bar Council of India (BCI) Rules, modeled on leading chambers like ILA Chambers, and output as pure static HTML.

## Problem

Under the Advocates Act, 1961 and Bar Council of India rules, advocates in India are strictly prohibited from soliciting work or publishing commercial advertisements. Law firms and chambers need an authoritative, compliant digital presence to present their legal practice areas, advocate credentials, court jurisdictions, and contact information to visitors who seek this information voluntarily, without exposing the firm to disciplinary regulatory risk.

## Users

- **Prospective Corporate & Institutional Clients:** Seeking factual competence details in commercial litigation, arbitration, regulatory compliance, and corporate advisory.
- **Individual Litigants & Briefing Counsels:** Inquiring about chamber jurisdiction, High Court / Supreme Court representation, and senior advocate experience.
- **Managing Partners & Chamber Administrators:** Maintaining firm information, practice descriptions, and lawyer directories via a single, easily configurable data file.

## Usage model

- **Strict Regulatory Compliance:** Bar Council of India (BCI) Rule 36 compliance is the core legal boundary.
- **Pre-Entry Consent Gate:** An un-bypassable modal enforces explicit acknowledgment of voluntary access before viewing firm information.
- **Strictly Non-Promotional:** No client reviews, outcome guarantees, comparative marketing ("best", "top"), fee quotes, or commercial discounts.
- **Session Privacy & Offline/Static Reachability:** User acknowledgment is recorded client-side in `localStorage`. The site runs entirely as static files without tracking scripts or server dependencies.

## Features

1. **Static Export Configuration & Centralized Brand Design System** - Configure Next.js static HTML export (`output: 'export'`), create centralized `src/config/firm.ts` data layer, and establish CSS design tokens in `globals.css` for instant theme customization.
2. **BCI Rule 36 Disclaimer Gate & Standalone Page** - Full-screen entry modal with consent checkbox, "Accept & Proceed" and "Exit" actions, session persistence, and permanent `/disclaimer` reference route.
3. **Site Shell, Header & Institutional Footer** - Header navigation, mobile drawer, and institutional footer with compliance notices, court jurisdictions, and chamber details.
4. **Homepage & Institutional Ethos** - Authoritative landing page featuring firm philosophy (Precision, Integrity, Perspective), practice area highlights, senior leadership introduction, and office jurisdiction.
5. **About Firm Page (`/about`)** - Narrative on founding ethos, litigation standards, court appearances (Supreme Court, High Courts, Tribunals), and professional ethics.
6. **Practice Areas Index & Static Detail Views (`/practice-areas`, `/practice-areas/[slug]`)** - Comprehensive discipline catalog with dynamic routes pre-rendered via `generateStaticParams()`.
7. **Advocates & Leadership Directory (`/team`, `/team/[slug]`)** - Advocate profiles detailing Bar Council enrollment, academic qualifications, practice focus, and court experience pre-rendered via `generateStaticParams()`.
8. **Contact & Chambers Location Page (`/contact`)** - Direct contact cards (phones, official emails, operating hours), court proximity information, and interactive location map embed.
9. **Curated Legal Photographic Assets & Advocate Portraits** - Download royalty-free legal photography to `public/images/` and integrate authentic advocate portraits for all three partners across `/team`, `/team/[slug]`, and homepage.
10. **Atmospheric Hero Redesign & Rich Editorial Surfaces** - Neoclassical judicial hero backdrop with gradient lighting, legal library imagery on `/about`, visual practice cards, and elevated card hover micro-interactions.
11. **Heritage Color Palette Theme Switcher & Mahogany Library Hero** - Dynamic client-side theme switcher supporting 3 curated legal heritage palettes (Imperial Navy, Oxford Burgundy, Heritage Forest Green) stored in `localStorage`, navigation bar selector, and dark mahogany legal library hero backdrop.

## Data model

Data is structured in `src/config/firm.ts` as strongly typed TypeScript models, enabling instant updates to firm branding, lawyers, and legal domains without modifying UI components.

### `FirmConfig`
- `name`: string - Legal firm/chambers name (e.g. "Apex Chambers")
- `tagline`: string - Institutional motto (e.g. "Precision. Integrity. Perspective.")
- `established`: number - Founding year
- `description`: string - Factual institutional summary
- `jurisdictions`: string[] - Primary courts (e.g. Supreme Court of India, High Court of Delhi)
- `office`: `OfficeLocation` - Physical chamber address, phone numbers, email, hours
- `socialLinks`: Record<string, string> - Professional links (e.g. LinkedIn, Bar Association)

### `PracticeArea`
- `id`: string - Unique identifier
- `slug`: string - URL path segment (e.g. "commercial-litigation")
- `title`: string - Discipline name
- `shortDescription`: string - Card summary
- `detailedOverview`: string - Factual scope of legal services
- `keyAreas`: string[] - Specific matters handled (e.g., "Contractual Disputes", "Insolvency & Bankruptcy Code")
- `courts`: string[] - Common forums (e.g. "NCLT", "High Courts", "Arbitral Tribunals")

### `AdvocateProfile`
- `id`: string - Unique identifier
- `slug`: string - URL path segment (e.g. "vikram-sharma")
- `name`: string - Advocate name
- `designation`: string - Role (e.g. "Founding Partner", "Senior Associate")
- `barEnrollment`: string - Official State Bar Council registration details
- `education`: string[] - Law degrees and universities
- `primaryPractices`: string[] - Key practice areas
- `admissions`: string[] - Courts of practice
- `biography`: string - Objective professional trajectory

### `OfficeLocation`
- `addressLine1`: string - Chamber suite / building
- `addressLine2`: string - Street / Sector
- `city`: string - City (e.g. "New Delhi")
- `state`: string - State & postal code
- `phone`: string[] - Chambers telephone numbers
- `email`: string - Official chambers email
- `hours`: string - Working days and consultation hours
- `mapEmbedUrl`: string - Google Maps embed coordinate URL

### `DisclaimerConsent` (Client-side `localStorage`)
- `accepted`: boolean - Whether consent was granted
- `acceptedAt`: string - ISO timestamp of agreement
- `version`: string - Disclaimer legal version tag

## Tech stack

- **Next.js 16 (App Router, React 19):** Core application framework configured for static export (`output: 'export'`).
- **Tailwind CSS v4:** Modern styling via CSS-first design tokens in `globals.css` with zero runtime CSS overhead.
- **TypeScript:** Strict type contracts for firm configurations and component props.
- **Biome:** Project linter and formatter (`pnpm lint`, `pnpm format`).
- **Lucide React:** Minimalist, dignified iconography for legal symbols, navigation, and contact elements.

## Monetization

Not applicable. Institutional website for an Indian legal practice; direct online fees and commercial monetization are prohibited under BCI rules.

## UI/UX

- **Aesthetic Direction:** Dignified, prestigious, and editorial. Uses deep regal navy base (`#0b192c`), crisp warm white card surfaces (`#ffffff`), warm subtle brass/gold accent tokens (`#c5a880`), and refined serif display typography for headings.
- **Routes:**
  - `/` - Main landing page with hero, institutional ethos, practice highlights, leadership teaser, and chamber location.
  - `/about` - Detailed chamber background, philosophy, and court jurisdiction.
  - `/practice-areas` - Comprehensive legal expertise index.
  - `/practice-areas/[slug]` - Deep-dive static page for individual legal disciplines.
  - `/team` - Advocates and partners directory.
  - `/team/[slug]` - Individual advocate profile and bar enrollment details.
  - `/contact` - Direct contact cards, jurisdiction details, and interactive map.
  - `/disclaimer` - Full regulatory disclaimer under BCI Rule 36.

## Deployment

- **Target:** Any static hosting / CDN platform (Cloudflare Pages, Vercel, Netlify, GitHub Pages, AWS S3/CloudFront, or Nginx).
- **Build Command:** `pnpm build`
- **Output Directory:** `out/` (self-contained static HTML, CSS, and client bundles).
- **Environment Variables:** None required for static runtime.
