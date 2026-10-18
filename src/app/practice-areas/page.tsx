import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PracticeAreaIcon } from "@/components/practice-areas/PracticeAreaIcon";
import { firmConfig, practiceAreas } from "@/config/firm";

export const metadata: Metadata = {
  title: `Practice Areas | ${firmConfig.name}`,
  description: `Factual overview of legal disciplines, trial advocacy, and appellate representations undertaken by ${firmConfig.name}, New Delhi.`,
};

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. PAGE HEADER & BREADCRUMBS */}
      <section
        aria-labelledby="practice-areas-heading"
        className="relative bg-primary-dark text-white border-b border-primary-light/50 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
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
                Practice Areas
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Disciplines of Law • Factual Overview</span>
            </div>

            <h1
              id="practice-areas-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Practice Areas &amp; Jurisdictions
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              A comprehensive overview of legal domains in which{" "}
              {firmConfig.name} provides dispute resolution, trial
              representation, appellate advocacy, and advisory counsel across
              Indian courts and regulatory tribunals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DISCIPLINE FAST-NAV */}
      <section
        aria-label="Practice areas quick links"
        className="py-4 bg-surface border-b border-border text-xs text-foreground-muted sticky top-16 z-20 backdrop-blur-md bg-surface/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-semibold text-primary uppercase tracking-wider text-[11px] mr-1">
              Select Domain:
            </span>
            {practiceAreas.map((area) => (
              <a
                key={area.id}
                href={`#${area.slug}`}
                className="px-2.5 py-1 rounded-sm bg-background border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {area.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS CATALOG GRID */}
      <section
        aria-labelledby="catalog-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Chambers Competencies</span>
            </div>
            <h2
              id="catalog-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Core Practice Domains
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Every brief undertaken by the chamber is handled with specialized
              statutory grounding, evidentiary rigor, and adherence to
              established procedural standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <article
                key={area.id}
                id={area.slug}
                className="group flex flex-col justify-between bg-surface border border-border hover:border-accent/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 rounded-sm p-6 sm:p-8 shadow-xs scroll-mt-32 overflow-hidden"
              >
                <div>
                  {/* Visual Photography Card */}
                  {area.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs mb-6 border border-border group-hover:border-accent/40 transition-colors bg-primary-dark">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-95"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/25 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xs bg-primary/90 backdrop-blur-xs border border-accent/40 text-accent flex items-center justify-center shadow-xs">
                          <PracticeAreaIcon
                            name={area.iconName}
                            className="w-4 h-4"
                          />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-white/90 uppercase px-2.5 py-0.5 rounded-xs bg-primary-dark/80 backdrop-blur-xs border border-white/10">
                          Discipline
                        </span>
                      </div>
                    </div>
                  )}

                  {!area.image && (
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                        <PracticeAreaIcon
                          name={area.iconName}
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="text-[11px] font-mono tracking-widest text-accent/80 uppercase px-2 py-0.5 rounded-sm bg-background border border-border">
                        Discipline
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary group-hover:text-accent-hover transition-colors mb-3">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="hover:underline"
                    >
                      {area.title}
                    </Link>
                  </h3>

                  <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                    {area.shortDescription}
                  </p>

                  {/* Key Areas Preview */}
                  <div className="mb-6 pt-4 border-t border-border-subtle">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      Key Matter Types:
                    </h4>
                    <ul className="space-y-2">
                      {area.keyAreas.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-foreground-muted"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {area.keyAreas.length > 3 && (
                        <li className="text-[11px] text-accent font-medium pl-5">
                          + {area.keyAreas.length - 3} additional focus areas
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Judicial Forums */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Primary Forums:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {area.courts.map((court) => (
                        <span
                          key={court}
                          className="px-2 py-0.5 text-[11px] rounded-xs bg-background text-foreground-muted border border-border"
                        >
                          {court}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border mt-auto">
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase transition-colors"
                  >
                    <span>Examine Scope &amp; Legal Precedents</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY & RIGOUR */}
      <section
        aria-labelledby="methodology-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Chambers Practice Doctrine</span>
            </div>
            <h2
              id="methodology-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Institutional Case Preparation Protocol
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              In accordance with classical legal practice standards, matters
              across all disciplines pass through a disciplined three-stage
              evaluation before court representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-8 rounded-sm">
              <div className="text-xs font-serif font-bold text-accent/80 tracking-widest uppercase mb-4">
                STAGE 01
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Evidentiary &amp; Factual Audit
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Primary records, contractual clauses, financial records, and
                evidentiary exhibits are rigorously cataloged and tested for
                admissibility under the Indian Evidence Act / Bharatiya Sakshya
                Adhiniyam.
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-sm">
              <div className="text-xs font-serif font-bold text-accent/80 tracking-widest uppercase mb-4">
                STAGE 02
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Precedential Research
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Formulation of legal propositions grounded in binding rulings of
                the Supreme Court of India, High Court precedents, and
                authoritative legal commentaries.
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-sm">
              <div className="text-xs font-serif font-bold text-accent/80 tracking-widest uppercase mb-4">
                STAGE 03
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Procedural Scrutiny
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Registry checks, limitation calculations, caveat alerts, and
                filing verification to ensure defect-free presentation before
                the judicial bench.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COURTS JURISDICTION OVERVIEW */}
      <section
        aria-labelledby="jurisdictions-heading"
        className="py-16 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-border p-8 lg:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Standing Practice</span>
                </div>
                <h2
                  id="jurisdictions-heading"
                  className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4"
                >
                  Standing Appearances Across Forums
                </h2>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  The advocates of {firmConfig.name} hold regular standing
                  before apex constitutional benches, commercial appellate
                  divisions, and specialized tribunals.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {firmConfig.jurisdictions.map((court) => (
                  <div
                    key={court}
                    className="flex items-center gap-3 p-3.5 rounded-sm bg-background border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-primary">
                      {court}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATUTORY COMPLIANCE STATEMENT */}
      <section
        aria-labelledby="bci-notice-heading"
        className="py-16 bg-surface-subtle border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2
            id="bci-notice-heading"
            className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4"
          >
            Statutory Notice under Bar Council of India Rules
          </h2>
          <p className="text-foreground-muted text-sm leading-relaxed max-w-3xl mx-auto mb-6">
            Under {firmConfig.bciCompliance.ruleReference}, Indian advocates are
            not permitted to solicit work, advertise, or provide guarantees
            regarding legal outcomes. The practice descriptions on this page are
            provided solely for factual orientation to individuals and
            institutional entities who voluntarily seek information regarding
            the chamber's qualifications and areas of competence.
          </p>
          <Link
            href="/disclaimer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase"
          >
            <span>Review Formal Regulatory Disclaimer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. DIRECTIONAL NAVIGATION PATHWAYS */}
      <section aria-label="Explore other sections" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/about"
              className="group p-6 bg-background border border-border hover:border-accent transition-all rounded-sm"
            >
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                Chambers Profile
              </div>
              <h3 className="text-xl font-serif font-bold text-primary group-hover:text-primary-light mb-2 flex items-center justify-between">
                <span>About the Firm</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-foreground-muted">
                Learn about our founding philosophy, litigation standards, and
                institutional ethos.
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
                Review bar enrollments, qualifications, and court appearances of
                our practitioners.
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
