import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  advocates,
  firmConfig,
  type PracticeArea,
  practiceAreas,
} from "@/config/firm";

// Map string icon names to Lucide icon components
const practiceIconMap: Record<PracticeArea["iconName"], React.ElementType> = {
  Scale,
  Building2,
  ShieldAlert,
  Landmark,
  Briefcase,
  FileText,
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-primary-dark text-white border-b border-primary-light/50 overflow-hidden"
      >
        {/* Subtle background ornamentation */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Regulatory badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Advocates & Legal Consultants • New Delhi</span>
            </div>

            {/* Chamber Name & Motto */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15] mb-6"
            >
              {firmConfig.name}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-accent italic mt-2">
                &ldquo;{firmConfig.tagline}&rdquo;
              </span>
            </h1>

            {/* Factual Institutional Summary */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans mb-10 max-w-2xl">
              {firmConfig.shortDescription}
            </p>

            {/* Directional Action Pathways */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-primary font-medium text-sm rounded-sm transition-colors shadow-sm"
              >
                <span>Practice Disciplines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-light/80 hover:bg-primary-light text-white border border-slate-700 font-medium text-sm rounded-sm transition-colors"
              >
                <span>Chambers Profile</span>
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-slate-300 hover:text-white hover:bg-white/5 font-medium text-sm rounded-sm transition-colors"
              >
                <span>Advocates Directory</span>
              </Link>
            </div>
          </div>

          {/* Factual Institutional Metrics Bar */}
          <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
            <div>
              <div className="text-2xl font-serif font-bold text-accent">
                {firmConfig.establishedYear}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Established Year
              </div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-accent">
                {practiceAreas.length} Disciplines
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Litigation & Advisory
              </div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-accent">
                Supreme Court
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                & Delhi High Court
              </div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-accent">
                Rule 36
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                BCI Ethical Standard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ETHOS & CORE PRINCIPLES */}
      <section
        aria-labelledby="principles-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Institutional Ethos</span>
            </div>
            <h2
              id="principles-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Founding Principles of Our Practice
            </h2>
            <p className="mt-3 text-foreground-muted text-base sm:text-lg leading-relaxed">
              Apex Chambers is governed by a steadfast commitment to procedural
              propriety, jurisprudence, and non-partisan fidelity to the courts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmConfig.corePrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="relative bg-background border border-border border-t-2 border-t-accent p-8 rounded-sm hover:border-slate-300 transition-colors"
              >
                <div className="text-xs font-serif font-bold text-accent/80 tracking-widest uppercase mb-4">
                  0{index + 1} • ETHOS
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

      {/* 3. PRACTICE DISCIPLINES HIGHLIGHTS */}
      <section
        aria-labelledby="practices-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                <Scale className="w-3.5 h-3.5" />
                <span>Practice Areas</span>
              </div>
              <h2
                id="practices-heading"
                className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
              >
                Key Practice Disciplines
              </h2>
              <p className="mt-3 text-foreground-muted text-base leading-relaxed">
                Our advocates provide specialized representation before apex,
                appellate, and statutory tribunals across distinct legal
                sectors.
              </p>
            </div>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              <span>View All Practice Disciplines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const IconComponent = practiceIconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="group bg-surface border border-border p-6 rounded-sm hover:border-accent/60 transition-all hover:shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-primary transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2.5">
                      {area.title}
                    </h3>
                    <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                      {area.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Common Courts Badges */}
                    <div className="pt-4 border-t border-border-subtle mb-4">
                      <div className="text-[11px] uppercase tracking-wider text-foreground-subtle font-medium mb-2">
                        Common Appearance Forums:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {area.courts.slice(0, 2).map((court) => (
                          <span
                            key={court}
                            className="inline-block text-[11px] px-2 py-0.5 bg-surface-subtle border border-border text-foreground-muted rounded-xs"
                          >
                            {court}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/practice-areas"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase transition-colors"
                    >
                      <span>Explore Discipline Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CHAMBERS LEADERSHIP PREVIEW */}
      <section
        aria-labelledby="leadership-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                <Landmark className="w-3.5 h-3.5" />
                <span>Advocates & Counsel</span>
              </div>
              <h2
                id="leadership-heading"
                className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
              >
                Chambers Leadership
              </h2>
              <p className="mt-3 text-foreground-muted text-base leading-relaxed">
                Led by seasoned practitioners with extensive appellate and trial
                advocacy credentials before constitutional courts.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              <span>View Full Advocates Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="bg-background border border-border rounded-sm p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Name and Designation */}
                  <div className="w-12 h-12 rounded-sm bg-primary text-accent font-serif font-bold text-lg flex items-center justify-center mb-4">
                    {advocate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary">
                    {advocate.name}
                  </h3>
                  <div className="text-xs font-medium text-accent mt-0.5 mb-3">
                    {advocate.designation}
                  </div>

                  {/* Enrollment details */}
                  <div className="text-xs text-foreground-subtle bg-surface-subtle p-2.5 rounded-xs border border-border-subtle mb-4 leading-normal">
                    <span className="font-medium text-foreground-muted block mb-0.5">
                      Bar Council Record:
                    </span>
                    {advocate.barEnrollment}
                  </div>

                  {/* Education */}
                  <div className="mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-foreground-subtle font-medium mb-1.5 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-accent" />
                      <span>Academic Background:</span>
                    </div>
                    <ul className="text-xs text-foreground-muted space-y-1">
                      {advocate.education.map((edu) => (
                        <li key={edu} className="line-clamp-1">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-subtle">
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover tracking-wider uppercase transition-colors"
                  >
                    <span>View Professional Record</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JURISDICTIONS & CHAMBERS PROXIMITY */}
      <section
        aria-labelledby="jurisdictions-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Court Jurisdictions */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
                <Landmark className="w-3.5 h-3.5" />
                <span>Courts of Practice</span>
              </div>
              <h2
                id="jurisdictions-heading"
                className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight mb-4"
              >
                Judicial & Arbitral Jurisdictions
              </h2>
              <p className="text-foreground-muted text-base leading-relaxed mb-8">
                Apex Chambers maintains daily courtroom practice and regular
                appearances before the following judicial bodies and specialized
                appellate tribunals:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {firmConfig.jurisdictions.map((court) => (
                  <div
                    key={court}
                    className="flex items-start gap-3 p-3.5 bg-surface border border-border rounded-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {court}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Chambers Location & Contact */}
            <div className="lg:col-span-5 bg-primary-dark text-white p-8 rounded-sm border border-primary-light/50">
              <div className="text-xs font-semibold tracking-wider text-accent uppercase mb-2">
                Chambers Coordinate
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                New Delhi Chambers
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">
                      {firmConfig.office.addressLine1}
                    </div>
                    <div>{firmConfig.office.addressLine2}</div>
                    <div className="text-accent text-xs mt-0.5 font-medium">
                      {firmConfig.office.landmark}
                    </div>
                    <div>
                      {firmConfig.office.city}, {firmConfig.office.state} –{" "}
                      {firmConfig.office.postalCode}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Chambers Hours</div>
                    <div className="text-xs text-slate-400">
                      {firmConfig.office.hours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Telephones</div>
                    <div className="text-xs text-slate-400">
                      {firmConfig.office.phone.join(" • ")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">
                      Official Registry
                    </div>
                    <div className="text-xs text-slate-400">
                      {firmConfig.office.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-hover text-primary font-medium text-sm rounded-sm transition-colors"
                >
                  <span>Chambers Directions & Location Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATUTORY DISCLAIMER FOOTNOTE */}
      <section
        aria-label="Statutory compliance notice"
        className="py-8 bg-surface-subtle border-t border-border text-xs text-foreground-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <p>
              Strictly non-solicitous informational resource published in
              accordance with {firmConfig.bciCompliance.ruleReference}.
            </p>
          </div>
          <Link
            href="/disclaimer"
            className="text-accent hover:underline font-medium shrink-0"
          >
            Read Statutory Notice & Disclosures
          </Link>
        </div>
      </section>
    </div>
  );
}
