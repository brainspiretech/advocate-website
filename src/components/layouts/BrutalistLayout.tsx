"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { advocates, firmConfig, practiceAreas } from "@/config/firm";

export function BrutalistLayout() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground font-mono">
      {/* ========================================================
          HERO: SWISS BRUTALIST GRID & MONOSPACE INDEX
          ======================================================== */}
      <section id="hero" className="relative border-b-2 border-foreground">
        <div className="border-b border-foreground/30 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] uppercase tracking-wider text-foreground-muted">
          <span>{"//"} NEWSHORE LEGAL • IMMIGRATION & DISPUTE COUNSEL</span>
          <span>LAT: 28.6139° N • LON: 77.2090° E</span>
          <span className="font-bold text-accent">[RULE 36 VERIFIED]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x-2 divide-foreground">
          {/* Main Title Block */}
          <div className="lg:col-span-8 p-6 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-block px-2 py-1 bg-foreground text-background font-bold text-xs uppercase tracking-widest">
                LEGAL COUNSEL {"//"} IMMIGRATION & DISPUTE RESOLUTION
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tighter uppercase leading-[0.95]">
                NEWSHORE
                <br />
                LEGAL
              </h1>

              <div className="text-xl sm:text-2xl font-sans font-bold text-accent tracking-tight">
                {"//"} {firmConfig.tagline}
              </div>

              <p className="text-xs sm:text-sm font-mono text-foreground-muted max-w-xl leading-relaxed">
                {firmConfig.shortDescription}
              </p>
            </div>

            <div className="pt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("practice")}
                className="px-6 py-3.5 bg-foreground text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>[PRACTICE AREAS]</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="px-6 py-3.5 border-2 border-foreground font-mono font-bold text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors cursor-pointer"
              >
                [CONTACT DOCKET]
              </button>
            </div>
          </div>

          {/* Right Modular Data Block */}
          <div className="lg:col-span-4 divide-y divide-foreground flex flex-col justify-between">
            <div className="p-6">
              <div className="text-[10px] text-foreground-muted uppercase tracking-widest mb-1">
                [SYSTEM METRICS]
              </div>
              <div className="text-4xl font-sans font-black text-accent">
                {firmConfig.establishedYear}
              </div>
              <div className="text-xs text-foreground mt-1">
                ESTABLISHED FOUNDATION
              </div>
            </div>

            <div className="p-6">
              <div className="text-[10px] text-foreground-muted uppercase tracking-widest mb-1">
                [JURISDICTION CODES]
              </div>
              <div className="text-4xl font-sans font-black text-accent">
                0{firmConfig.jurisdictions.length}
              </div>
              <div className="text-xs text-foreground mt-1">
                APPELLATE TRIBUNALS
              </div>
            </div>

            <div className="p-6">
              <div className="text-[10px] text-foreground-muted uppercase tracking-widest mb-1">
                [CORE DISCIPLINES]
              </div>
              <div className="text-4xl font-sans font-black text-accent">
                0{practiceAreas.length}
              </div>
              <div className="text-xs text-foreground mt-1">LEGAL SECTORS</div>
            </div>

            <div className="p-6 bg-surface-subtle">
              <div className="text-[10px] font-bold text-accent uppercase tracking-widest">
                [STATUTORY NOTICE]
              </div>
              <div className="text-xs text-foreground-muted mt-2 leading-relaxed">
                NON-SOLICITOUS REGISTRY UNDER BCI RULE 36.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT: MODULAR BRUTALIST PRINCIPLES GRID
          ======================================================== */}
      <section id="about" className="border-b-2 border-foreground">
        <div className="border-b border-foreground px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-widest text-accent">
            {"[SECTION 02 // INSTITUTIONAL ETHOS]"}
          </span>
          <span className="text-[10px] text-foreground-muted">
            INDEX: ETHOS-PRINCIPLES
          </span>
        </div>

        <div className="p-8 sm:p-12 border-b border-foreground bg-surface-subtle">
          <p className="text-sm sm:text-base leading-relaxed text-foreground max-w-4xl">
            {firmConfig.fullDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-foreground">
          {firmConfig.corePrinciples.map((p, idx) => (
            <div key={p.title} className="p-6 sm:p-8 space-y-3">
              <div className="text-xs font-bold text-accent">
                [TENET 0{idx + 1}]
              </div>
              <h3 className="font-sans font-black text-lg uppercase text-foreground">
                {p.title}
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          PRACTICE: MODULAR 2X3 DENSE DATA MATRIX
          ======================================================== */}
      <section id="practice" className="border-b-2 border-foreground">
        <div className="border-b border-foreground px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-widest text-accent">
            {"[SECTION 03 // PRACTICE DISCIPLINES]"}
          </span>
          <span className="text-[10px] text-foreground-muted">
            TOTAL: {practiceAreas.length} SECTORS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-foreground border-b border-foreground">
          {practiceAreas.map((area, index) => (
            <div
              key={area.id}
              className={`p-8 flex flex-col justify-between hover:bg-surface-subtle transition-colors ${
                index % 3 !== 2 ? "lg:border-r border-foreground" : ""
              } ${index < 3 ? "border-b border-foreground" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-accent">
                    [0{index + 1}]
                  </span>
                  <span className="text-[10px] text-foreground-muted uppercase">
                    ACTIVE
                  </span>
                </div>
                <h3 className="font-sans font-black text-xl uppercase text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-6 font-mono">
                  {area.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-foreground/30 space-y-1">
                <div className="text-[10px] text-foreground-muted uppercase font-bold">
                  FORUMS:
                </div>
                {area.courts.map((c) => (
                  <div
                    key={c}
                    className="text-[11px] text-foreground flex items-center gap-1.5"
                  >
                    <span>&gt;</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          TEAM: DOSSIER MATRIX
          ======================================================== */}
      <section id="team" className="border-b-2 border-foreground">
        <div className="border-b border-foreground px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-widest text-accent">
            {"[SECTION 04 // COUNSEL DOSSIERS]"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-foreground">
          {advocates.map((advocate) => (
            <div
              key={advocate.id}
              className="p-8 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full mb-6 border border-foreground overflow-hidden">
                  {advocate.image ? (
                    <Image
                      src={advocate.image}
                      alt={advocate.name}
                      fill
                      className="object-cover grayscale contrast-125"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-black text-2xl bg-foreground text-background">
                      {advocate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-foreground text-background text-[10px] font-bold px-2 py-0.5">
                    [FILE: {advocate.id.toUpperCase()}]
                  </div>
                </div>

                <div className="text-[10px] text-accent font-bold uppercase mb-1">
                  {advocate.designation}
                </div>
                <h3 className="font-sans font-black text-2xl uppercase text-foreground mb-1">
                  {advocate.name}
                </h3>
                <div className="text-xs text-foreground-muted mb-4">
                  Enrolment: {advocate.barEnrollment}
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed font-mono">
                  {advocate.biography}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-foreground text-[10px] font-bold text-foreground">
                CREDENTIALS: {advocate.education.join(" // ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          JURISDICTIONS & CONTACT
          ======================================================== */}
      <section id="jurisdictions" className="border-b-2 border-foreground p-8">
        <div className="text-xs font-bold text-accent uppercase tracking-widest mb-6">
          {"[SECTION 05 // APPELLATE FORUM CODES]"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {firmConfig.jurisdictions.map((j) => (
            <div
              key={j}
              className="p-3 border border-foreground flex items-center gap-2 text-xs font-bold"
            >
              <span className="text-accent">[+]</span>
              <span>{j}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-b-2 border-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x-2 divide-foreground">
          <div className="lg:col-span-5 p-8 space-y-4">
            <div className="text-xs font-bold text-accent uppercase tracking-widest">
              {"[SECTION 06 // LOCATION COORDINATES]"}
            </div>
            <h2 className="font-sans font-black text-2xl uppercase">
              NEW DELHI CHAMBERS
            </h2>
            <div className="text-xs text-foreground-muted space-y-2">
              <p>{firmConfig.office.addressLine1}</p>
              <p>{firmConfig.office.addressLine2}</p>
              <p>
                {firmConfig.office.city}, {firmConfig.office.state} -{" "}
                {firmConfig.office.postalCode}
              </p>
              <p className="pt-2 font-bold text-foreground">
                PH: {firmConfig.office.phone.join(" // ")}
              </p>
              <p className="font-bold text-foreground">
                MAIL: {firmConfig.office.email}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 h-80">
            <iframe
              src={firmConfig.office.mapEmbedUrl}
              className="w-full h-full border-0 grayscale contrast-125"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chambers Location Map"
            />
          </div>
        </div>
      </section>

      <section
        id="disclaimer"
        className="p-4 bg-foreground text-background text-xs text-center"
      >
        <span>
          {"//"} STRICTLY INFORMATIONAL PUBLICATION COMPLIANT WITH{" "}
          {firmConfig.bciCompliance.ruleReference.toUpperCase()}
        </span>
      </section>
    </div>
  );
}
