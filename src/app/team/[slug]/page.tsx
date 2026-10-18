import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  FileCheck,
  GraduationCap,
  Landmark,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type AdvocateProfile,
  advocates,
  firmConfig,
  practiceAreas,
} from "@/config/firm";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return advocates.map((adv) => ({
    slug: adv.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const advocate = advocates.find((a) => a.slug === slug);

  if (!advocate) {
    return {
      title: `Advocate Not Found | ${firmConfig.name}`,
    };
  }

  return {
    title: `${advocate.name} - ${advocate.designation} | ${firmConfig.name}`,
    description: `Professional credentials, bar enrollment details, and areas of practice of ${advocate.name}, ${advocate.designation} at ${firmConfig.name}, New Delhi.`,
  };
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default async function AdvocateProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const advIndex = advocates.findIndex((a) => a.slug === slug);

  if (advIndex === -1) {
    notFound();
  }

  const advocate = advocates[advIndex];
  const prevAdvocate =
    advIndex > 0 ? advocates[advIndex - 1] : advocates[advocates.length - 1];
  const nextAdvocate =
    advIndex < advocates.length - 1 ? advocates[advIndex + 1] : advocates[0];

  // Map primary practices to full practiceArea objects if matching
  const matchedPractices = practiceAreas.filter((pArea) =>
    advocate.primaryPractices.some(
      (practice) =>
        practice.toLowerCase().includes(pArea.title.toLowerCase()) ||
        pArea.title.toLowerCase().includes(practice.toLowerCase()) ||
        pArea.slug
          .split("-")
          .some((w) => w.length > 3 && practice.toLowerCase().includes(w)),
    ),
  );

  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. HERO HEADER & BREADCRUMBS */}
      <section
        aria-labelledby="advocate-heading"
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
              <li>
                <Link
                  href="/team"
                  className="hover:text-accent transition-colors"
                >
                  Our Counsel
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-600" />
              </li>
              <li
                aria-current="page"
                className="text-accent font-medium truncate max-w-[200px] sm:max-w-none"
              >
                {advocate.name}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Chambers Advocate Profile</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary border-2 border-accent text-accent flex items-center justify-center font-serif text-2xl font-bold tracking-wider shrink-0 shadow-md">
                {getInitials(advocate.name)}
              </div>
              <div>
                <h1
                  id="advocate-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight mb-2"
                >
                  {advocate.name}
                </h1>
                <p className="text-base sm:text-lg text-accent font-medium">
                  {advocate.designation}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-mono">{advocate.barEnrollment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN DOSSIER & SIDEBAR */}
      <section
        aria-label="Advocate professional details"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: PRIMARY BIOGRAPHICAL DOSSIER (8 COLUMNS) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Professional Biography */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Professional Background</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Biography &amp; Courtroom Practice
                </h2>
                <div className="prose prose-slate max-w-none text-foreground-muted leading-relaxed text-base space-y-4">
                  <p>{advocate.biography}</p>
                  <p>
                    In accordance with the standards of the chambers,{" "}
                    {advocate.name} maintains unwavering fidelity to rigorous
                    statutory research, meticulous evidentiary preparation, and
                    reasoned advocacy before the Bench.
                  </p>
                </div>
              </div>

              {/* Education & Academic Credentials */}
              <div className="pt-8 border-t border-border">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Qualifications</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Education &amp; Credentials
                </h2>
                <div className="space-y-3">
                  {advocate.education.map((degree) => (
                    <div
                      key={degree}
                      className="flex items-start gap-3 p-4 rounded-sm bg-surface border border-border"
                    >
                      <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground-muted">
                        {degree}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Court Admissions & Standing */}
              <div className="pt-8 border-t border-border">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Judicial Standing</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Court Admissions &amp; Bar Standing
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advocate.admissions.map((admission) => (
                    <div
                      key={admission}
                      className="p-4 rounded-sm bg-surface border border-border flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {admission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Practice Disciplines */}
              <div className="pt-8 border-t border-border">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Practice Competencies</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Core Disciplines &amp; Areas of Practice
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {matchedPractices.length > 0
                    ? matchedPractices.map((p) => (
                        <Link
                          key={p.id}
                          href={`/practice-areas/${p.slug}`}
                          className="group p-5 rounded-sm bg-surface border border-border hover:border-accent transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-accent font-semibold mb-1">
                              Legal Domain
                            </div>
                            <h3 className="font-serif font-bold text-base text-primary group-hover:text-primary-light transition-colors mb-2">
                              {p.title}
                            </h3>
                            <p className="text-xs text-foreground-muted line-clamp-2">
                              {p.shortDescription}
                            </p>
                          </div>
                          <div className="pt-3 mt-3 border-t border-border-subtle inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                            <span>View Discipline Scope</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      ))
                    : advocate.primaryPractices.map((practice) => (
                        <div
                          key={practice}
                          className="p-4 rounded-sm bg-surface border border-border flex items-center gap-3"
                        >
                          <Scale className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-sm font-medium text-foreground-muted">
                            {practice}
                          </span>
                        </div>
                      ))}
                </div>
              </div>

              {/* Statutory BCI Rule 36 Reminder */}
              <div className="p-6 rounded-sm bg-surface-subtle border border-border border-l-4 border-l-accent">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1">
                      Statutory Rule 36 Disclosure
                    </h3>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      This profile is published strictly in compliance with the
                      Bar Council of India Rules. It contains objective
                      information regarding {advocate.name}&apos;s
                      qualifications, admissions, and practice disciplines, and
                      does not constitute an advertisement, solicitation, or
                      outcome guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: SIDEBAR (4 COLUMNS) */}
            <aside
              aria-label="Counsel sidebar"
              className="lg:col-span-4 space-y-8"
            >
              {/* Registry Contact & Appointment Protocol */}
              <div className="bg-surface border border-border p-6 rounded-sm">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Prior Appointment</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  Chambers Registry
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                  Conferences and consultation sessions with {advocate.name} are
                  arranged through the chambers registry by prior appointment
                  only.
                </p>

                <div className="space-y-2 text-xs text-foreground-muted pt-3 border-t border-border-subtle">
                  <div className="font-semibold text-primary">
                    {firmConfig.office.addressLine1}
                  </div>
                  <div>
                    {firmConfig.office.addressLine2}, {firmConfig.office.city}
                  </div>
                  <div className="text-accent font-mono pt-1">
                    {firmConfig.office.phone[0]}
                  </div>
                  <div className="text-foreground-muted pt-1">
                    {firmConfig.office.email}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border-subtle">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-primary text-white hover:bg-primary-light transition-colors rounded-sm"
                  >
                    Chambers Coordinates
                  </Link>
                </div>
              </div>

              {/* Other Chambers Counsel Navigation */}
              <div className="bg-surface border border-border p-6 rounded-sm">
                <h3 className="text-sm font-serif font-bold text-primary uppercase tracking-wider mb-4">
                  Other Chambers Counsel
                </h3>
                <ul className="space-y-3 text-xs">
                  {advocates.map((adv: AdvocateProfile) => {
                    const isCurrent = adv.slug === advocate.slug;
                    return (
                      <li key={adv.id}>
                        <Link
                          href={`/team/${adv.slug}`}
                          className={`flex items-center justify-between p-3 rounded-xs border transition-colors ${
                            isCurrent
                              ? "bg-accent/15 border-accent text-accent font-semibold"
                              : "border-border text-foreground-muted hover:text-primary hover:bg-background"
                          }`}
                        >
                          <div>
                            <div className="font-bold text-primary">
                              {adv.name}
                            </div>
                            <div className="text-[11px] text-accent/90">
                              {adv.designation}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. DIRECTIONAL PREV / NEXT ADVOCATE NAVIGATION */}
      <section
        aria-label="Advocate pagination navigation"
        className="py-12 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/team/${prevAdvocate.slug}`}
              className="group p-5 bg-background border border-border hover:border-accent rounded-sm transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block">
                  Previous Counsel
                </span>
                <span className="text-base font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                  {prevAdvocate.name}
                </span>
              </div>
            </Link>

            <Link
              href={`/team/${nextAdvocate.slug}`}
              className="group p-5 bg-background border border-border hover:border-accent rounded-sm transition-all flex items-center justify-between gap-4 text-right sm:flex-row-reverse"
            >
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block">
                  Next Counsel
                </span>
                <span className="text-base font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                  {nextAdvocate.name}
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Counsel Directory</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
