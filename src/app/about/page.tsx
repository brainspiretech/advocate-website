import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileCheck,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { firmConfig } from "@/config/firm";

export const metadata: Metadata = {
  title: `About Firm | ${firmConfig.name}`,
  description: `Institutional profile, founding philosophy, litigation standards, and court jurisdictions of ${firmConfig.name}, New Delhi.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. PAGE HEADER & BREADCRUMBS */}
      <section
        aria-labelledby="about-heading"
        className="relative bg-primary-dark text-white border-b border-primary-light/50 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors flex items-center gap-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-600" />
              </li>
              <li aria-current="page" className="text-accent font-medium">
                About Firm
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                Chambers Profile • Established {firmConfig.establishedYear}
              </span>
            </div>

            <h1
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Institutional Profile &amp; Ethos
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              An independent law chambers based in New Delhi, founded upon
              rigorous jurisprudence, procedural propriety, and unwavering
              fidelity to the administration of justice.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FOUNDING NARRATIVE & INSTITUTIONAL HERITAGE */}
      <section
        aria-labelledby="heritage-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-foreground-muted leading-relaxed text-base">
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>Founding Philosophy</span>
              </div>
              <h2
                id="heritage-heading"
                className="text-2xl sm:text-3xl font-serif font-bold text-primary tracking-tight leading-snug"
              >
                Rooted in the Classical Chambers Tradition
              </h2>

              <p>
                Established in {firmConfig.establishedYear} adjacent to the
                Supreme Court of India, {firmConfig.name} was instituted with a
                distinct vision: to function as a modern dispute resolution and
                advisory practice while faithfully preserving the highest
                traditions of the Indian Bar.
              </p>

              <p>
                In an era of commercialized legal practices, our chambers
                maintains an uncompromising posture on professional ethics. We
                view advocacy not merely as a commercial enterprise, but as a
                solemn constitutional calling. Every advocate within the chamber
                acts first and foremost as an officer of the court, bound by
                duty to uphold truth, institutional fairness, and the rule of
                law.
              </p>

              <p>
                Over more than a decade of practice, the chambers has developed
                a reputation for analytical thoroughness in complex commercial
                disputes, insolvency proceedings, constitutional writs, and
                economic penal defense. Our advocates regularly represent public
                and private enterprises, statutory authorities, and individuals
                before trial courts, specialized regulatory tribunals, and the
                apex court.
              </p>
            </div>

            {/* Right: Chambers Credo Callout */}
            <div className="lg:col-span-5 bg-background border border-border border-l-4 border-l-accent p-8 rounded-sm">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                Chambers Credo
              </div>
              <blockquote className="font-serif italic text-lg sm:text-xl text-primary leading-relaxed mb-6">
                &ldquo;Precision in the brief, absolute candor before the Bench,
                and unwavering independence in counsel.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-border-subtle space-y-3 text-xs text-foreground-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Solemn fidelity to the Constitution of India</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Strict adherence to BCI professional ethics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Non-partisan fiduciary commitment to clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LITIGATION & ADVISORY STANDARDS */}
      <section
        aria-labelledby="standards-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Operational Rigour</span>
            </div>
            <h2
              id="standards-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Litigation &amp; Advisory Standards
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Every brief entrusted to our chambers undergoes a rigorous
              multi-stage analytical examination to ensure evidentiary soundness
              and persuasive statutory coherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">
                1. Meticulous Brief Scrutiny
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Prior to drafting pleadings or making oral submissions, our team
                conducts an exhaustive audit of lower court trial records,
                evidence exhibits, deposition transcripts, and statutory
                provisions. We identify latent evidentiary gaps and procedural
                vulnerabilities before trial commences.
              </p>
            </div>

            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">
                2. Jurisprudential Depth
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Legal research is treated as an exact science. Our arguments are
                grounded in the constitutional benchmarks of the Supreme Court
                of India, binding precedents of State High Courts, authoritative
                scholarly treatises, and comparative common-law jurisprudence.
              </p>
            </div>

            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">
                3. Ethical Independence &amp; Candor
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                We believe in providing clients with objective, unvarnished
                legal opinions. We counsel settlement when litigation is
                commercially or legally unviable, and vigorously resist hopeless
                litigation driven solely by client passions or commercial
                speculation.
              </p>
            </div>

            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">
                4. Procedural &amp; Listing Precision
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Appellate outcomes often depend upon adherence to court filing
                protocols. The chambers registry meticulously tracks limitation
                periods, caveat filings, urgent mentioning lists, and registry
                defect curations across judicial registries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE PRINCIPLES BREAKDOWN */}
      <section
        aria-labelledby="principles-detail-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Institutional Tenets</span>
            </div>
            <h2
              id="principles-detail-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Founding Principles of Our Practice
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Our day-to-day counsel and courtroom representations are guided by
              three immutable institutional principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmConfig.corePrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="bg-background border border-border border-t-2 border-t-accent p-8 rounded-sm"
              >
                <div className="text-xs font-serif font-bold text-accent/80 tracking-widest uppercase mb-4">
                  0{index + 1} • TENET
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COURTS & TRIBUNALS OF PRACTICE */}
      <section
        aria-labelledby="courts-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Landmark className="w-3.5 h-3.5" />
              <span>Court Appearances</span>
            </div>
            <h2
              id="courts-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Judicial Forums &amp; Appellate Jurisdictions
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Our advocates appear daily before constitutional benches,
              appellate divisions, and statutory regulators across the National
              Capital Region and throughout India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface border border-border p-6 rounded-sm">
              <div className="flex items-center gap-2 text-accent font-serif font-semibold text-lg mb-2">
                <Landmark className="w-5 h-5 shrink-0" />
                <span>Supreme Court of India</span>
              </div>
              <p className="text-foreground-muted text-xs leading-relaxed">
                Appellate jurisdiction, Special Leave Petitions (SLPs) under
                Article 136, Writ Petitions under Article 32, and Transfer
                Petitions across civil, commercial, criminal, and constitutional
                matters.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-sm">
              <div className="flex items-center gap-2 text-accent font-serif font-semibold text-lg mb-2">
                <Building2 className="w-5 h-5 shrink-0" />
                <span>High Court of Delhi</span>
              </div>
              <p className="text-foreground-muted text-xs leading-relaxed">
                Original Commercial Division suits, appellate references, Writ
                Petitions under Article 226, Section 9 and 11 applications under
                the Arbitration Act, and Section 482 CrPC petitions.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-sm">
              <div className="flex items-center gap-2 text-accent font-serif font-semibold text-lg mb-2">
                <Scale className="w-5 h-5 shrink-0" />
                <span>NCLT &amp; NCLAT</span>
              </div>
              <p className="text-foreground-muted text-xs leading-relaxed">
                National Company Law Tribunal (Principal &amp; Regional Benches)
                and NCLAT: Corporate Insolvency Resolution Processes (CIRP),
                avoidance applications, and corporate scheme approvals under the
                Companies Act, 2013.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-sm">
              <div className="flex items-center gap-2 text-accent font-serif font-semibold text-lg mb-2">
                <Landmark className="w-5 h-5 shrink-0" />
                <span>National Green Tribunal (NGT)</span>
              </div>
              <p className="text-foreground-muted text-xs leading-relaxed">
                Representation before the Principal Bench in environmental
                clearance challenges, air and water pollution statutory appeals,
                and forest conservation regulatory matters.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-sm">
              <div className="flex items-center gap-2 text-accent font-serif font-semibold text-lg mb-2">
                <Briefcase className="w-5 h-5 shrink-0" />
                <span>DRT &amp; DRAT</span>
              </div>
              <p className="text-foreground-muted text-xs leading-relaxed">
                Debts Recovery Tribunals and Appellate Tribunals: Debt recovery
                litigation, securitization enforcement challenges under the
                SARFAESI Act, and corporate guarantee litigations.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-sm">
              <div className="flex items-center gap-2 text-accent font-serif font-semibold text-lg mb-2">
                <Scale className="w-5 h-5 shrink-0" />
                <span>Arbitral Tribunals</span>
              </div>
              <p className="text-foreground-muted text-xs leading-relaxed">
                Sole and three-member tribunals under institutional frameworks
                including DIAC, ICA, and ICC, as well as ad-hoc commercial
                arbitrations concerning construction and joint-venture
                contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATUTORY COMPLIANCE STATEMENT */}
      <section
        aria-labelledby="compliance-statement-heading"
        className="py-16 bg-surface-subtle border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2
            id="compliance-statement-heading"
            className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4"
          >
            Statutory Notice &amp; Ethical Commitment
          </h2>
          <p className="text-foreground-muted text-sm leading-relaxed max-w-3xl mx-auto mb-6">
            Under {firmConfig.bciCompliance.ruleReference}, advocates are
            strictly prohibited from soliciting work or advertising. The
            contents of this page and website are intended solely to provide
            factual information regarding the profile, experience, and practice
            disciplines of {firmConfig.name} to persons seeking such information
            voluntarily.
          </p>
          <Link
            href="/disclaimer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase"
          >
            <span>Review Full Statutory Disclosures</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. DIRECTIONAL NAVIGATION PATHWAYS */}
      <section aria-label="Explore other sections" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/practice-areas"
              className="group p-6 bg-background border border-border hover:border-accent transition-all rounded-sm"
            >
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                Legal Domains
              </div>
              <h3 className="text-xl font-serif font-bold text-primary group-hover:text-primary-light mb-2 flex items-center justify-between">
                <span>Practice Areas</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-foreground-muted">
                Explore our six core disciplines across civil, commercial, and
                regulatory laws.
              </p>
            </Link>

            <Link
              href="/team"
              className="group p-6 bg-background border border-border hover:border-accent transition-all rounded-sm"
            >
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                Advocates
              </div>
              <h3 className="text-xl font-serif font-bold text-primary group-hover:text-primary-light mb-2 flex items-center justify-between">
                <span>Our Counsel</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-foreground-muted">
                Review qualifications, bar council admissions, and court
                experience of our practitioners.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group p-6 bg-background border border-border hover:border-accent transition-all rounded-sm"
            >
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                Contact &amp; Location
              </div>
              <h3 className="text-xl font-serif font-bold text-primary group-hover:text-primary-light mb-2 flex items-center justify-between">
                <span>Chambers Coordinates</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-foreground-muted">
                Chamber address at Bhagwan Das Road, contact numbers, and
                appointment protocols.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
