"use client";

import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  FileText,
  Landmark,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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

export function CorporateLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const filteredAreas =
    selectedCategory === "All"
      ? practiceAreas
      : practiceAreas.filter((a) =>
          a.title.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

  return (
    <div className="flex flex-col w-full bg-background text-foreground font-sans">
      {/* ========================================================
          HERO: CORPORATE EXECUTIVE SPLIT
          ======================================================== */}
      <section
        id="hero"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-surface-subtle via-background to-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Commercial & Appellate Litigation Chambers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Strategic Legal Counsel for Complex Disputes
            </h1>

            <p className="text-lg text-accent font-medium">
              {firmConfig.tagline}
            </p>

            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed max-w-xl">
              {firmConfig.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo("practice")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
              >
                <span>View Practice Disciplines</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface hover:bg-surface-subtle text-foreground font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                <span>Chamber Contact</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Corporate Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl border border-border bg-surface shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground-muted font-semibold">
                    Chambers Snapshot
                  </div>
                  <div className="text-lg font-bold text-foreground">
                    {firmConfig.name} Profile
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-subtle border border-border/50">
                  <div className="text-3xl font-bold text-foreground">
                    {firmConfig.establishedYear}
                  </div>
                  <div className="text-xs text-foreground-muted mt-1">
                    Foundation Year
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-subtle border border-border/50">
                  <div className="text-3xl font-bold text-accent">
                    {practiceAreas.length}
                  </div>
                  <div className="text-xs text-foreground-muted mt-1">
                    Practice Disciplines
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-subtle border border-border/50">
                  <div className="text-3xl font-bold text-foreground">
                    {firmConfig.jurisdictions.length}
                  </div>
                  <div className="text-xs text-foreground-muted mt-1">
                    Court Jurisdictions
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-subtle border border-border/50">
                  <div className="text-xl font-bold text-accent mt-1">
                    Rule 36
                  </div>
                  <div className="text-xs text-foreground-muted mt-1">
                    BCI Compliance
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-foreground-muted flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Supreme Court of India & High Court Representation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT: CORPORATE GOVERNANCE & VALUE SYSTEM
          ======================================================== */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
              Chambers Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              A Structured Commitment to Legal Excellence
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
              {firmConfig.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firmConfig.corePrinciples.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-xl border border-border bg-surface hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PRACTICE: TABBED & FILTERABLE CARDS
          ======================================================== */}
      <section
        id="practice"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
                Core Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Practice Disciplines
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["All", "Litigation", "Insolvency", "Crime"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-accent text-accent-foreground font-semibold"
                      : "bg-surface-subtle border border-border text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAreas.map((area) => {
              const Icon = practiceIconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="rounded-xl border border-border bg-surface p-6 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
                      {area.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/60">
                    <div className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-2">
                      Key Appearances
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {area.courts.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] px-2 py-0.5 rounded bg-surface-subtle text-foreground-muted border border-border/40"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM: EXECUTIVE LEADERSHIP
          ======================================================== */}
      <section
        id="team"
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
              Chambers Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Advocates & Counsel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full bg-surface-muted">
                    {advocate.image ? (
                      <Image
                        src={advocate.image}
                        alt={advocate.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-2xl text-accent">
                        {advocate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      {advocate.designation}
                    </span>
                    <h3 className="font-bold text-xl text-foreground mt-1 mb-1">
                      {advocate.name}
                    </h3>
                    <div className="text-xs text-foreground-muted mb-3">
                      Enrolment: {advocate.barEnrollment}
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {advocate.biography}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-border/40 mt-4 text-xs font-medium text-accent">
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
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-foreground">
              Appellate & Regulatory Jurisdictions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {firmConfig.jurisdictions.map((j) => (
              <div
                key={j}
                className="p-4 rounded-lg border border-border bg-surface flex items-center gap-3 text-xs sm:text-sm font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>{j}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Chambers Address & Coordinates
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-foreground-muted">
              <p>{firmConfig.office.addressLine1}</p>
              <p>{firmConfig.office.addressLine2}</p>
              <p>
                {firmConfig.office.city}, {firmConfig.office.state} -{" "}
                {firmConfig.office.postalCode}
              </p>
              <p className="pt-2 font-semibold text-foreground">
                Phone: {firmConfig.office.phone.join(" • ")}
              </p>
              <p className="font-semibold text-foreground">
                Email: {firmConfig.office.email}
              </p>
              <p>Hours: {firmConfig.office.hours}</p>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-xl border border-border overflow-hidden h-80 shadow-md">
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
        className="py-6 px-4 border-t border-border bg-surface text-xs text-foreground-muted"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span>
              Strictly non-solicitous compliance with{" "}
              {firmConfig.bciCompliance.ruleReference}.
            </span>
          </div>
          <span className="font-semibold text-accent">
            Rule 36 Compliance Verified
          </span>
        </div>
      </section>
    </div>
  );
}
