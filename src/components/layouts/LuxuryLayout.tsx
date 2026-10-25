"use client";

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
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import {
  advocates,
  firmConfig,
  type PracticeArea,
  practiceAreas,
} from "@/config/firm";

const practiceIconMap: Record<PracticeArea["iconName"], React.ElementType> = {
  Scale,
  Building2,
  ShieldAlert,
  Landmark,
  Briefcase,
  FileText,
};

export function LuxuryLayout() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================
          HERO: ULTRA-DARK LUXURY FULL-VIEWPORT
          ======================================================== */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-surface-subtle text-accent text-xs font-semibold tracking-widest uppercase mb-8 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advocates & Legal Counsel • New Delhi</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            {firmConfig.name}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-accent font-normal mb-8 max-w-2xl leading-relaxed">
            "{firmConfig.tagline}"
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            {firmConfig.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              type="button"
              onClick={() => scrollTo("practice")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-sm rounded-md transition-all shadow-xl hover:shadow-accent/20 cursor-pointer"
            >
              <span>Explore Practice Areas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-accent text-foreground font-medium text-sm rounded-md transition-all bg-surface/40 hover:bg-surface cursor-pointer"
            >
              <span>Chamber Inquiries</span>
            </button>
          </div>

          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl border border-accent/20 bg-surface/80 backdrop-blur-md shadow-2xl">
            <div className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">
                {firmConfig.establishedYear}
              </div>
              <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wider mt-1">
                Founded
              </div>
            </div>
            <div className="text-center p-3 border-l border-border/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">
                {practiceAreas.length}
              </div>
              <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wider mt-1">
                Core Disciplines
              </div>
            </div>
            <div className="text-center p-3 border-t md:border-t-0 md:border-l border-border/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">
                {firmConfig.jurisdictions.length}
              </div>
              <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wider mt-1">
                Courts & Tribunals
              </div>
            </div>
            <div className="text-center p-3 border-t md:border-t-0 md:border-l border-border/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">
                Rule 36
              </div>
              <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wider mt-1">
                BCI Compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT: ASYMMETRIC SPLIT WITH STATEMENT QUOTE
          ======================================================== */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                <Compass className="w-4 h-4" />
                <span>Institutional Ethos</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
                Rigorous Advocacy Rooted in Constitutional Integrity
              </h2>
              <p className="text-foreground-muted leading-relaxed text-sm sm:text-base">
                {firmConfig.fullDescription}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {firmConfig.corePrinciples.map((p, idx) => (
                <div
                  key={p.title}
                  className="p-6 rounded-lg border border-border bg-surface hover:border-accent/50 transition-all group"
                >
                  <div className="text-accent font-serif text-2xl font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PRACTICE AREAS: LUXURY 3-COLUMN CARDS WITH IMAGES
          ======================================================== */}
      <section
        id="practice"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              <Scale className="w-4 h-4" />
              <span>Core Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Practice Disciplines
            </h2>
            <p className="text-foreground-muted text-sm sm:text-base">
              Specialized representation before the Supreme Court of India, High
              Courts, and judicial tribunals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const Icon = practiceIconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="rounded-xl border border-border bg-surface overflow-hidden group hover:border-accent/60 transition-all shadow-lg flex flex-col"
                >
                  {area.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-md bg-surface/90 border border-accent/40 flex items-center justify-center text-accent">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
                        {area.shortDescription}
                      </p>
                    </div>
                    <div className="space-y-2 pt-4 border-t border-border/50">
                      <div className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                        Key Forums
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {area.courts.map((court) => (
                          <span
                            key={court}
                            className="text-[11px] px-2.5 py-1 rounded bg-surface-subtle text-foreground-muted border border-border/60"
                          >
                            {court}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM: LEADERSHIP GALLERY
          ======================================================== */}
      <section
        id="team"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Chambers Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Advocates & Counsel
            </h2>
            <p className="text-foreground-muted text-sm">
              Distinguished practitioners with appellate and constitutional
              credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="rounded-xl border border-border bg-surface overflow-hidden group hover:border-accent transition-all shadow-md"
              >
                <div className="relative h-72 w-full overflow-hidden bg-surface-muted">
                  {advocate.image ? (
                    <Image
                      src={advocate.image}
                      alt={advocate.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-3xl font-bold text-accent">
                      {advocate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-surface/90 px-2 py-0.5 rounded border border-accent/20">
                      {advocate.designation}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                    {advocate.name}
                  </h3>
                  <p className="text-xs text-foreground-subtle mb-3">
                    Enrolment: {advocate.barEnrollment}
                  </p>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    {advocate.biography}
                  </p>
                  <div className="pt-3 border-t border-border/40 text-[11px] text-accent font-medium">
                    {advocate.education.join(" • ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          JURISDICTIONS: TICKER & FORUM TILES
          ======================================================== */}
      <section
        id="jurisdictions"
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              <Landmark className="w-4 h-4" />
              <span>Court Appearances</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Appellate & Judicial Forums
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {firmConfig.jurisdictions.map((court) => (
              <div
                key={court}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/60 bg-surface hover:border-accent/50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {court}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT: CHAMBERS & INTERACTIVE MAP
          ======================================================== */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase">
                <MapPin className="w-4 h-4" />
                <span>Chambers Location</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Visit Our Chambers
              </h2>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Located adjacent to the Supreme Court of India, our chambers are
                accessible for in-person consultations by prior appointment.
              </p>

              <div className="space-y-4 pt-4 border-t border-border/40">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-foreground">
                    <div>{firmConfig.office.addressLine1}</div>
                    <div>{firmConfig.office.addressLine2}</div>
                    <div className="text-foreground-muted text-xs">
                      {firmConfig.office.landmark}
                    </div>
                    <div>
                      {firmConfig.office.city}, {firmConfig.office.state} -{" "}
                      {firmConfig.office.postalCode}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs sm:text-sm text-foreground">
                    {firmConfig.office.phone.join(" • ")}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs sm:text-sm text-foreground">
                    {firmConfig.office.email}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs sm:text-sm text-foreground-muted">
                    {firmConfig.office.hours}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-80 sm:h-96">
                <iframe
                  src={firmConfig.office.mapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chambers Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DISCLAIMER STRIP
          ======================================================== */}
      <section
        id="disclaimer"
        className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border bg-surface text-xs text-foreground-muted"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span>
              Strictly non-solicitous informational resource published under{" "}
              {firmConfig.bciCompliance.ruleReference}.
            </span>
          </div>
          <span className="text-accent font-medium">
            Bar Council of India Rule 36 Compliant
          </span>
        </div>
      </section>
    </div>
  );
}
