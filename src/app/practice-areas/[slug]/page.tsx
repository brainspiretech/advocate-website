import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
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
import { PracticeAreaIcon } from "@/components/practice-areas/PracticeAreaIcon";
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
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);

  if (!area) {
    return {
      title: `Practice Area Not Found | ${firmConfig.name}`,
    };
  }

  return {
    title: `${area.title} | ${firmConfig.name}`,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const areaIndex = practiceAreas.findIndex((p) => p.slug === slug);

  if (areaIndex === -1) {
    notFound();
  }

  const area = practiceAreas[areaIndex];
  const prevArea =
    areaIndex > 0
      ? practiceAreas[areaIndex - 1]
      : practiceAreas[practiceAreas.length - 1];
  const nextArea =
    areaIndex < practiceAreas.length - 1
      ? practiceAreas[areaIndex + 1]
      : practiceAreas[0];

  // Match relevant advocates based on primaryPractices or related domain keywords
  const relevantAdvocates = advocates.filter((adv) => {
    return adv.primaryPractices.some((practice) => {
      const pLower = practice.toLowerCase();
      const titleLower = area.title.toLowerCase();
      const slugWords = area.slug.split("-");
      return (
        pLower.includes(titleLower) ||
        titleLower.includes(pLower) ||
        slugWords.some((w) => w.length > 3 && pLower.includes(w))
      );
    });
  });

  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. HERO HEADER & BREADCRUMBS */}
      <section
        aria-labelledby="practice-detail-heading"
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
                  href="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-600" />
              </li>
              <li
                aria-current="page"
                className="text-accent font-medium truncate max-w-[200px] sm:max-w-none"
              >
                {area.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Chambers Legal Discipline</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-sm bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                <PracticeAreaIcon name={area.iconName} className="w-7 h-7" />
              </div>
              <h1
                id="practice-detail-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight"
              >
                {area.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl">
              {area.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN EDITORIAL CONTENT GRID */}
      <section
        aria-label="Practice area detailed overview"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: PRIMARY DOSSIER (8 COLUMNS) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Substantive Overview</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Scope of Practice &amp; Counsel
                </h2>
                <div className="prose prose-slate max-w-none text-foreground-muted leading-relaxed text-base space-y-4">
                  <p>{area.detailedOverview}</p>
                  <p>
                    Matters in this domain are conducted in strict compliance
                    with the statutory rules of procedure, limitation standards,
                    and judicial benchmarks set by the Supreme Court of India
                    and relevant High Courts. The chamber undertakes rigorous
                    drafting of original pleadings, writ petitions,
                    interlocutory applications, counter-affidavits, and
                    appellate memoranda.
                  </p>
                </div>
              </div>

              {/* Key Areas / Specific Subjects Handled */}
              <div className="pt-8 border-t border-border">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Subject Matters Handled</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Key Focus Matters &amp; Statutory Applications
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.keyAreas.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-sm bg-surface border border-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Judicial Forums of Appearance */}
              <div className="pt-8 border-t border-border">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Court Jurisdictions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                  Courts &amp; Judicial Forums of Practice
                </h2>
                <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                  Advocates from our chambers appear regularly before the
                  following judicial benches, appellate authorities, and
                  regulatory tribunals in matters concerning {area.title}:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.courts.map((court) => (
                    <div
                      key={court}
                      className="p-4 rounded-sm bg-surface border border-border flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {court}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BCI Regulatory Reminder Banner */}
              <div className="p-6 rounded-sm bg-surface-subtle border border-border border-l-4 border-l-accent">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1">
                      Statutory Rule 36 Disclosure
                    </h3>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      In conformance with the Bar Council of India Rules, this
                      overview provides objective information regarding the
                      chamber&apos;s areas of focus and court appearances. It
                      does not constitute a solicitation, advertisement, or
                      claim of guaranteed legal success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: SIDEBAR (4 COLUMNS) */}
            <aside
              aria-label="Practice details sidebar"
              className="lg:col-span-4 space-y-8"
            >
              {/* Associated Chambers Counsel */}
              <div className="bg-surface border border-border p-6 rounded-sm">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Practicing Counsel</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-4">
                  Chambers Advocates
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-5">
                  The following advocates within {firmConfig.name} represent
                  briefs in {area.title}:
                </p>

                <div className="space-y-4">
                  {relevantAdvocates.map((adv: AdvocateProfile) => (
                    <div
                      key={adv.id}
                      className="p-3.5 rounded-sm bg-background border border-border hover:border-accent/60 transition-colors"
                    >
                      <div className="font-serif font-bold text-sm text-primary">
                        {adv.name}
                      </div>
                      <div className="text-xs text-accent font-medium mb-1.5">
                        {adv.designation}
                      </div>
                      <div className="text-[11px] text-foreground-muted flex items-start gap-1.5 mb-2">
                        <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{adv.barEnrollment}</span>
                      </div>
                      <Link
                        href={`/team#${adv.slug}`}
                        className="text-[11px] font-semibold text-primary hover:text-accent inline-flex items-center gap-1 uppercase tracking-wider"
                      >
                        <span>View Credentials</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chambers Registry & Appointment Protocol */}
              <div className="bg-surface border border-border p-6 rounded-sm">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Prior Appointment</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  Chambers Registry
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                  Consultations and conference sessions are scheduled strictly
                  by prior appointment with the chambers registry in New Delhi.
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

              {/* Other Practice Areas List */}
              <div className="bg-surface border border-border p-6 rounded-sm">
                <h3 className="text-sm font-serif font-bold text-primary uppercase tracking-wider mb-4">
                  Other Practice Areas
                </h3>
                <ul className="space-y-2 text-xs">
                  {practiceAreas.map((p) => {
                    const isCurrent = p.slug === area.slug;
                    return (
                      <li key={p.id}>
                        <Link
                          href={`/practice-areas/${p.slug}`}
                          className={`flex items-center justify-between p-2 rounded-xs transition-colors ${
                            isCurrent
                              ? "bg-accent/15 text-accent font-semibold"
                              : "text-foreground-muted hover:text-primary hover:bg-background"
                          }`}
                        >
                          <span className="truncate pr-2">{p.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
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

      {/* 3. DIRECTIONAL PREV / NEXT PRACTICE NAVIGATION */}
      <section
        aria-label="Discipline pagination navigation"
        className="py-12 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/practice-areas/${prevArea.slug}`}
              className="group p-5 bg-background border border-border hover:border-accent rounded-sm transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block">
                  Previous Discipline
                </span>
                <span className="text-base font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                  {prevArea.title}
                </span>
              </div>
            </Link>

            <Link
              href={`/practice-areas/${nextArea.slug}`}
              className="group p-5 bg-background border border-border hover:border-accent rounded-sm transition-all flex items-center justify-between gap-4 text-right sm:flex-row-reverse"
            >
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block">
                  Next Discipline
                </span>
                <span className="text-base font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                  {nextArea.title}
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Practice Areas Catalog</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
