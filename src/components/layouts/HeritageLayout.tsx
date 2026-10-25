"use client";

import {
  BookMarked,
  CheckCircle,
  Crown,
  GraduationCap,
  Scale,
  Scroll,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { advocates, firmConfig, practiceAreas } from "@/config/firm";

export function HeritageLayout() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* ========================================================
          HERO: TRADITIONAL HIGH COURT MONUMENTAL CREST
          ======================================================== */}
      <section
        id="hero"
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-accent/40 bg-surface-subtle"
      >
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Classical Coat of Arms Crest */}
          <div className="w-16 h-16 rounded-full border-2 border-accent bg-surface flex items-center justify-center text-accent shadow-xl mb-6">
            <Scale className="w-8 h-8" />
          </div>

          <div className="inline-block px-4 py-1 border-y border-accent/40 text-accent font-serif tracking-widest text-xs uppercase font-bold mb-4">
            Est. {firmConfig.establishedYear} • New Delhi Chambers
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-foreground tracking-tight mb-4">
            {firmConfig.name}
          </h1>

          <div className="flex items-center justify-center gap-3 w-48 mx-auto my-3">
            <div className="h-px bg-accent/50 flex-1" />
            <Crown className="w-4 h-4 text-accent" />
            <div className="h-px bg-accent/50 flex-1" />
          </div>

          <p className="font-serif italic text-lg sm:text-2xl text-accent mb-6">
            "{firmConfig.tagline}"
          </p>

          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed font-serif">
            {firmConfig.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              type="button"
              onClick={() => scrollTo("practice")}
              className="px-8 py-3.5 bg-primary text-primary-foreground border border-accent/40 font-serif font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-all shadow-md cursor-pointer"
            >
              Consult Practice Disciplines
            </button>
            <button
              type="button"
              onClick={() => scrollTo("team")}
              className="px-8 py-3.5 border-2 border-accent text-accent font-serif font-bold text-xs uppercase tracking-wider hover:bg-accent/10 transition-all cursor-pointer"
            >
              Chambers Counsel
            </button>
          </div>

          {/* Stately Heraldic Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl border-2 border-accent/30 p-6 bg-surface shadow-md">
            <div>
              <div className="font-serif text-3xl font-bold text-accent">
                {firmConfig.establishedYear}
              </div>
              <div className="text-[10px] font-serif uppercase tracking-widest text-foreground-muted">
                Year Founded
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-accent">
                {practiceAreas.length}
              </div>
              <div className="text-[10px] font-serif uppercase tracking-widest text-foreground-muted">
                Core Disciplines
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-accent">
                {firmConfig.jurisdictions.length}
              </div>
              <div className="text-[10px] font-serif uppercase tracking-widest text-foreground-muted">
                Judicial Forums
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-accent">
                Rule 36
              </div>
              <div className="text-[10px] font-serif uppercase tracking-widest text-foreground-muted">
                Bar Council Rules
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT: MONUMENTAL PEDIMENT & PILLARS
          ======================================================== */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-serif uppercase tracking-widest font-bold mb-2">
              <Scroll className="w-4 h-4" />
              <span>Chambers Charter</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Institutional Heritage & Creed
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="p-8 border-2 border-accent/20 bg-surface mb-12 shadow-sm">
            <p className="font-serif text-base sm:text-lg leading-relaxed text-foreground/90 text-center italic max-w-4xl mx-auto">
              "{firmConfig.fullDescription}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmConfig.corePrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="p-6 border-2 border-border bg-surface text-center flex flex-col items-center hover:border-accent transition-all group"
              >
                <div className="w-10 h-10 rounded-full border border-accent text-accent font-serif font-bold flex items-center justify-center mb-4">
                  0{index + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs text-foreground-muted font-serif leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PRACTICE: CERTIFICATE-STYLE FRAMED CARDS
          ======================================================== */}
      <section
        id="practice"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-serif uppercase tracking-widest font-bold mb-2">
              <BookMarked className="w-4 h-4" />
              <span>Litigation Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Core Practice Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="p-6 border-2 border-accent/30 bg-surface shadow-md flex flex-col justify-between hover:border-accent transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-accent/20">
                    <span className="font-serif font-bold text-xs uppercase tracking-wider text-accent">
                      Practice Certificate
                    </span>
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-xs font-serif text-foreground-muted leading-relaxed mb-6">
                    {area.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="text-[10px] font-serif uppercase tracking-widest text-accent font-semibold mb-2">
                    Appellate Jurisdiction
                  </div>
                  <div className="space-y-1">
                    {area.courts.map((c) => (
                      <div
                        key={c}
                        className="text-xs font-serif text-foreground/80 flex items-center gap-1.5"
                      >
                        <span className="text-accent">•</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM: BARRISTER & COUNSEL REGISTRY
          ======================================================== */}
      <section
        id="team"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-serif uppercase tracking-widest font-bold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Chambers Counsel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Advocates & Chambers Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="p-6 border-2 border-border bg-surface text-center flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full mb-6 border-2 border-accent/40 shadow-inner overflow-hidden">
                    {advocate.image ? (
                      <Image
                        src={advocate.image}
                        alt={advocate.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-3xl font-bold text-accent bg-surface-muted">
                        {advocate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-accent font-bold">
                    {advocate.designation}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-foreground mt-1 mb-1">
                    {advocate.name}
                  </h3>
                  <div className="text-xs font-serif italic text-foreground-muted mb-4">
                    Enrolment: {advocate.barEnrollment}
                  </div>
                  <p className="text-xs font-serif text-foreground-muted leading-relaxed">
                    {advocate.biography}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border font-serif text-xs text-accent font-medium">
                  {advocate.education.join(" • ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          JURISDICTIONS & CONTACT
          ======================================================== */}
      <section
        id="jurisdictions"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Principal Court Appearances
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {firmConfig.jurisdictions.map((j) => (
              <div
                key={j}
                className="p-4 border border-accent/30 bg-surface flex items-center gap-3 font-serif text-xs sm:text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>{j}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4 font-serif">
            <h2 className="text-3xl font-bold text-foreground">
              Chambers Registry & Location
            </h2>
            <p className="text-sm text-foreground-muted">
              {firmConfig.office.addressLine1}, {firmConfig.office.addressLine2}
              , {firmConfig.office.city}, {firmConfig.office.state}
            </p>
            <p className="text-sm text-foreground-muted">
              Telephone: {firmConfig.office.phone.join(" • ")}
            </p>
            <p className="text-sm text-foreground-muted">
              Email: {firmConfig.office.email}
            </p>
            <p className="text-sm text-foreground-muted">
              Hours: {firmConfig.office.hours}
            </p>
          </div>
          <div className="lg:col-span-7 border-2 border-border h-80 overflow-hidden">
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

      <section
        id="disclaimer"
        className="py-6 px-4 border-t border-border bg-surface text-xs font-serif text-foreground-muted"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span>
            Strictly informational publication compliant with{" "}
            {firmConfig.bciCompliance.ruleReference}.
          </span>
          <span className="text-accent font-semibold">
            Bar Council of India Rule 36 Compliant
          </span>
        </div>
      </section>
    </div>
  );
}
