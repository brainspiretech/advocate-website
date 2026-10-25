"use client";

import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Compass,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { advocates, firmConfig, practiceAreas } from "@/config/firm";

export function EditorialLayout() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* ========================================================
          HERO: EDITORIAL ASYMMETRIC JOURNAL SPLIT
          ======================================================== */}
      <section
        id="hero"
        className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border/80"
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Gazette Dateline Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b-2 border-double border-border text-xs text-foreground-muted font-serif">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-wider text-accent">
                Legal Gazette & Chambers Journal
              </span>
              <span>•</span>
              <span>New Delhi Edition</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-sans">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {currentDate}
              </span>
              <span>•</span>
              <span className="text-accent font-semibold">
                Est. {firmConfig.establishedYear}
              </span>
            </div>
          </div>

          {/* Asymmetric Editorial Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 Columns: Editorial Headline & Proclamation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-serif italic text-xs tracking-wide">
                Special Appellate Report
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground leading-[1.08] tracking-tight">
                Precision in Counsel. Integrity in Practice.
              </h1>

              <div className="h-0.5 w-24 bg-accent/60" />

              <p className="text-base sm:text-lg text-foreground-muted font-serif leading-relaxed italic">
                "{firmConfig.tagline}"
              </p>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl">
                {firmConfig.shortDescription}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo("practice")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-serif text-sm hover:opacity-90 transition-opacity rounded-sm shadow-sm cursor-pointer"
                >
                  <span>Review Practice Areas</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("about")}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent font-serif text-sm text-foreground transition-colors rounded-sm cursor-pointer"
                >
                  <span>Read Institutional Ethos</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Chambers Docket Briefing Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-sm border-2 border-border bg-surface shadow-lg relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-md">
                  Chambers Docket
                </div>

                <div className="font-serif font-bold text-lg text-foreground border-b pb-3 mb-6 flex items-center justify-between">
                  <span>Chambers Summary</span>
                  <BookOpen className="w-4 h-4 text-accent" />
                </div>

                <div className="space-y-4 text-xs font-serif divide-y divide-border/60">
                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-foreground-muted">Jurisdiction</span>
                    <span className="font-semibold text-foreground">
                      Supreme Court of India
                    </span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-foreground-muted">
                      Appellate Bench
                    </span>
                    <span className="font-semibold text-foreground">
                      Delhi High Court
                    </span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-foreground-muted">
                      Active Disciplines
                    </span>
                    <span className="font-semibold text-accent">
                      {practiceAreas.length} Practice Areas
                    </span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-foreground-muted">
                      BCI Regulatory
                    </span>
                    <span className="font-semibold text-foreground">
                      Rule 36 Compliance
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-dashed border-border flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center font-serif text-accent font-bold text-sm shrink-0">
                    NL
                  </div>
                  <div className="text-[11px] font-serif text-foreground-muted leading-tight">
                    <div className="font-bold text-foreground">
                      {firmConfig.name}
                    </div>
                    <div>Advocates & Legal Consultants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT: MAGAZINE ARTICLE WITH DROP-CAP & ROMAN NUMERALS
          ======================================================== */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-serif uppercase tracking-widest font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Article I • Chambers Creed</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                A Tradition of Legal Scholarship and Diligent Advocacy
              </h2>
              <div className="text-sm sm:text-base text-foreground/80 leading-relaxed space-y-4 font-serif">
                <p className="first-letter:float-left first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:mr-3 first-letter:text-accent first-letter:leading-none">
                  {firmConfig.fullDescription}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-widest font-serif font-semibold text-accent border-b pb-2">
                Core Institutional Tenets
              </div>
              <div className="space-y-4">
                {firmConfig.corePrinciples.map((principle, index) => {
                  const romanNumerals = ["I", "II", "III", "IV"];
                  return (
                    <div
                      key={principle.title}
                      className="p-5 border border-border bg-surface rounded-sm hover:border-accent transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-serif font-bold text-accent text-sm">
                          Section {romanNumerals[index] || index + 1}.
                        </span>
                        <h3 className="font-serif font-bold text-base text-foreground">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="text-xs text-foreground-muted font-serif leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PRACTICE: EDITORIAL STRUCTURED LEDGER / INDEX TABLE
          ======================================================== */}
      <section
        id="practice"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b-2 border-border pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-serif uppercase tracking-widest text-accent font-semibold mb-1">
                Discipline Directory
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Practice Areas & Statutory Scope
              </h2>
            </div>
            <span className="text-xs font-serif text-foreground-muted">
              {practiceAreas.length} Primary Practice Sectors
            </span>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {practiceAreas.map((area, idx) => (
              <div
                key={area.id}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 hover:bg-surface-subtle transition-colors px-4 group"
              >
                <div className="lg:col-span-1 font-serif text-lg font-bold text-accent">
                  № 0{idx + 1}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {area.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {area.courts.map((court) => (
                      <span
                        key={court}
                        className="text-[10px] px-2 py-0.5 bg-surface border border-border text-foreground-muted"
                      >
                        {court}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm font-serif text-foreground-muted leading-relaxed">
                    {area.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM: EDITORIAL DIRECTORY
          ======================================================== */}
      <section
        id="team"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase font-serif tracking-widest text-accent font-semibold mb-2">
              Chambers Registry
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Advocates & Counsel Profiles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="p-6 bg-surface border border-border rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full mb-6 border border-border overflow-hidden">
                    {advocate.image ? (
                      <Image
                        src={advocate.image}
                        alt={advocate.name}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-2xl font-bold text-accent bg-surface-muted">
                        {advocate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-accent mb-1 font-serif">
                    {advocate.designation}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                    {advocate.name}
                  </h3>
                  <div className="text-xs font-serif italic text-foreground-muted mb-4">
                    Enrolment: {advocate.barEnrollment}
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed font-serif">
                    {advocate.biography}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-serif text-accent">
                  {advocate.education.join(" • ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          JURISDICTIONS: EDITORIAL GAZETTE
          ======================================================== */}
      <section
        id="jurisdictions"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase font-serif tracking-widest text-accent font-semibold mb-2">
              Appellate Gazette
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Primary Judicial Jurisdictions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {firmConfig.jurisdictions.map((jurisdiction) => (
              <div
                key={jurisdiction}
                className="p-4 border border-border bg-surface flex items-start gap-3"
              >
                <Landmark className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-serif font-medium text-foreground">
                  {jurisdiction}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT & LOCATION
          ======================================================== */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase font-serif tracking-widest text-accent font-semibold">
              Chambers Address
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">
              New Delhi Registry & Chambers
            </h2>
            <div className="text-xs sm:text-sm font-serif text-foreground-muted space-y-3">
              <p>{firmConfig.office.addressLine1}</p>
              <p>{firmConfig.office.addressLine2}</p>
              <p>
                {firmConfig.office.city}, {firmConfig.office.state} -{" "}
                {firmConfig.office.postalCode}
              </p>
              <div className="pt-2 border-t border-border">
                <p>Telephone: {firmConfig.office.phone.join(" / ")}</p>
                <p>Email: {firmConfig.office.email}</p>
                <p>Hours: {firmConfig.office.hours}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 border border-border h-80 overflow-hidden shadow-sm">
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
      </section>

      {/* ========================================================
          DISCLAIMER
          ======================================================== */}
      <section
        id="disclaimer"
        className="py-6 px-4 border-t border-border bg-surface text-xs font-serif text-foreground-muted"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
          <span>
            Strictly informational publication compliant with{" "}
            {firmConfig.bciCompliance.ruleReference}.
          </span>
        </div>
      </section>
    </div>
  );
}
