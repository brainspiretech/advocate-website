import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Compass,
  GraduationCap,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { advocates, firmConfig } from "@/config/firm";

export const metadata: Metadata = {
  title: `Our Counsel & Advocates | ${firmConfig.name}`,
  description: `Professional credentials, Bar Council registrations, academic qualifications, and court admissions of advocates at ${firmConfig.name}, New Delhi.`,
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. HERO HEADER & BREADCRUMBS */}
      <section
        aria-labelledby="team-heading"
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
                Our Counsel
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Chambers Advocates • Bar Council Enrolled</span>
            </div>

            <h1
              id="team-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Chambers Leadership &amp; Counsel
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              A factual record of the academic qualifications, professional
              enrollment details, court admissions, and areas of practice of the
              advocates at {firmConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ADVOCATE DIRECTORY GRID */}
      <section
        aria-labelledby="advocates-list-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Practicing Barristers &amp; Counsels</span>
            </div>
            <h2
              id="advocates-list-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Advocates of the Chambers
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Every counsel in our chambers is duly registered with their
              respective State Bar Council and maintains regular appearance
              standing before constitutional courts and tribunals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advocates.map((adv) => (
              <article
                key={adv.id}
                id={adv.slug}
                className="group flex flex-col justify-between bg-surface border border-border hover:border-accent/80 transition-all rounded-sm p-8 shadow-xs scroll-mt-24"
              >
                <div>
                  {/* Monogram / Header Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary border-2 border-accent/40 text-accent flex items-center justify-center font-serif text-lg font-bold tracking-wider shrink-0 shadow-xs">
                      {getInitials(adv.name)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                        <Link
                          href={`/team/${adv.slug}`}
                          className="hover:underline"
                        >
                          {adv.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-accent font-medium mt-0.5">
                        {adv.designation}
                      </p>
                    </div>
                  </div>

                  {/* Official Bar Enrollment */}
                  <div className="mb-6 p-3 rounded-sm bg-background border border-border flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                        Bar Council Registration
                      </div>
                      <div className="text-xs font-mono text-primary font-medium">
                        {adv.barEnrollment}
                      </div>
                    </div>
                  </div>

                  {/* Biography Preview */}
                  <p className="text-foreground-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {adv.biography}
                  </p>

                  {/* Academic Credentials */}
                  <div className="mb-5 pt-4 border-t border-border-subtle">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      <GraduationCap className="w-3.5 h-3.5 text-accent" />
                      <span>Education &amp; Qualifications</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-foreground-muted">
                      {adv.education.map((degree) => (
                        <li key={degree} className="line-clamp-1">
                          • {degree}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Practice Disciplines */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      <Scale className="w-3.5 h-3.5 text-accent" />
                      <span>Primary Practices</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {adv.primaryPractices.map((practice) => (
                        <span
                          key={practice}
                          className="px-2 py-0.5 text-[11px] rounded-xs bg-background text-foreground-muted border border-border"
                        >
                          {practice}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border mt-auto">
                  <Link
                    href={`/team/${adv.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase transition-colors"
                  >
                    <span>View Professional Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ETHICAL TRADITION & BENCH FIDELITY */}
      <section
        aria-labelledby="ethics-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Chambers Code of Practice</span>
            </div>
            <h2
              id="ethics-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Professional Standards &amp; Fiduciary Duties
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Advocates at {firmConfig.name} conduct every brief with
              institutional independence, absolute fidelity to judicial candor,
              and compliance with the Advocates Act, 1961.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Officers of the Court
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                An advocate&apos;s primary duty is to assist the court in the
                administration of justice. We decline to present claims that
                lack statutory basis or misstate judicial precedent.
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Continuous Jurisprudence
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Our advocates engage in ongoing legal scholarship, tracking
                legislative amendments, constitutional bench decisions, and
                comparative jurisprudence across common-law jurisdictions.
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Client Privilege &amp; Candor
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Absolute confidentiality and fiduciary privilege are preserved
                for every brief, coupled with candid, unvarnished advice on the
                realistic legal merits of every matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATUTORY BCI COMPLIANCE DISCLOSURE */}
      <section
        aria-labelledby="team-bci-notice-heading"
        className="py-16 bg-surface-subtle border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2
            id="team-bci-notice-heading"
            className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4"
          >
            Statutory Disclosure under Bar Council of India Rules
          </h2>
          <p className="text-foreground-muted text-sm leading-relaxed max-w-3xl mx-auto mb-6">
            Under {firmConfig.bciCompliance.ruleReference}, advocates are
            prohibited from advertising or soliciting clients. The details on
            this page represent factual information regarding the
            qualifications, bar council enrollments, and professional admissions
            of the advocates of {firmConfig.name}, provided solely to
            individuals seeking such information voluntarily.
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

      {/* 5. DIRECTIONAL NAVIGATION PATHWAYS */}
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
