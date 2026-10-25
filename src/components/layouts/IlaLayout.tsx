"use client";

import {
  Briefcase,
  Building2,
  CheckCircle2,
  FileText,
  Landmark,
  Scale,
  ShieldAlert,
  ShieldCheck,
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

// 6 Signature Pillars modeled after ILA Chambers
const ilaPillars = [
  {
    title: "Deliver Sharp, Business-Aligned Counsel",
    desc: "Clear, researched, and strategically sound advice across immigration statutes and commercial disputes.",
    img: "/images/practice/commercial-disputes-arbitration.jpg",
  },
  {
    title: "High Partner Involvement",
    desc: "Every mandate led with senior partner accountability, discipline, and consistent strategic oversight.",
    img: "/images/practice/constitutional-administrative-law.jpg",
  },
  {
    title: "End-to-End Legal Support",
    desc: "Immigration compliance, corporate mobility, arbitration, and appellate litigation delivered seamlessly.",
    img: "/images/practice/corporate-insolvency-ibc.jpg",
  },
  {
    title: "Integrity & Confidentiality",
    desc: "Uncompromised ethical standards and strict fiduciary discretion in every high-stakes engagement.",
    img: "/images/practice/white-collar-crime-defense.jpg",
  },
  {
    title: "Long-Term Client Value",
    desc: "Solutions aligned with strategic cross-border objectives, not merely immediate administrative outcomes.",
    img: "/images/practice/real-estate-rera-property.jpg",
  },
  {
    title: "Precision in Advocacy",
    desc: "Meticulous attention to statutory detail across visa filings, tribunal hearings, and appellate pleadings.",
    img: "/images/practice/intellectual-property-technology.jpg",
  },
];

export function IlaLayout() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground font-sans">
      {/* ========================================================
          HERO: ILA CHAMBERS SIGNATURE FLOATING GLASS CARD
          ======================================================== */}
      <section
        id="hero"
        className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-slate-950"
      >
        {/* Atmospheric Office / Boardroom Background Image with Dark Vignette */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/mahogany-library.jpg"
            alt="Newshore Legal Chambers"
            fill
            priority
            className="object-cover opacity-30 filter blur-[1px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        </div>

        {/* Centered Floating Glassmorphic Card (exact ILA Chambers treatment) */}
        <div className="relative z-10 max-w-3xl w-full mx-auto p-8 sm:p-14 rounded-2xl border border-white/15 bg-slate-900/75 backdrop-blur-xl shadow-2xl text-center text-white">
          <div className="inline-block mb-3 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase border border-accent/40 bg-accent/10 text-accent">
            Advocates & Legal Consultants
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-wide leading-tight mb-4 text-white">
            {firmConfig.name}
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-accent/90 mb-6 font-light">
            "{firmConfig.tagline}"
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            {firmConfig.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="px-6 py-3 bg-accent text-accent-foreground font-medium text-xs sm:text-sm rounded-md hover:opacity-90 transition-opacity cursor-pointer shadow-md"
            >
              Discover the Firm
            </button>
            <button
              type="button"
              onClick={() => scrollTo("practice")}
              className="px-6 py-3 border border-white/30 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              Our Expertise
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT: EXACT ILA CHAMBERS ETHOS + 6 VIGNETTE CARDS
          ======================================================== */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          {/* Centered Title with ILA Divider Line */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground mb-4">
              About {firmConfig.name}
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />

            <div className="space-y-4 text-xs sm:text-sm text-foreground-muted leading-relaxed font-light">
              <p>
                {firmConfig.name} is a boutique law firm based in New Delhi,
                offering a seamless blend of global corporate immigration,
                residency advisory, civil litigation, and commercial dispute
                resolution. The Firm brings together seasoned advocates offering
                a cohesive blend of courtroom trial experience and strategic
                cross-border insight.
              </p>
              <p>
                With a full-service capability spanning international mobility,
                statutory immigration appeals, arbitral tribunals, and High
                Court advocacy, {firmConfig.name} serves as a trusted counsel to
                multinational corporations, high-net-worth families, and global
                entrepreneurs navigating complex legal landscapes.
              </p>
            </div>
          </div>

          {/* 6 ILA Signature Steel-Blue Cards with Circular Vignettes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ilaPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-xl bg-primary text-primary-foreground text-center shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center group"
              >
                {/* Circular Photo Vignette */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/40 mb-6 shadow-md shrink-0">
                  <Image
                    src={pillar.img}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="64px"
                  />
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-primary-foreground mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-primary-foreground/75 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          EXPERTISE: PRACTICE AREAS
          ======================================================== */}
      <section
        id="practice"
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground mb-3">
              Areas of Expertise
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-4" />
            <p className="text-xs sm:text-sm text-foreground-muted font-light">
              Specialized counsel across immigration law, cross-border mobility,
              commercial arbitration, and civil dispute resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const Icon = practiceIconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="rounded-xl border border-border bg-surface p-8 shadow-sm hover:shadow-md hover:border-accent/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-primary text-accent flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6 font-light">
                      {area.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-accent mb-2">
                      Key Jurisdictions & Bodies
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM: ADVOCATES & PARTNERS
          ======================================================== */}
      <section
        id="team"
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-surface-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground mb-3">
              Chambers Leadership
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-4" />
            <p className="text-xs sm:text-sm text-foreground-muted font-light">
              Distinguished practitioners with appellate, constitutional, and
              international immigration credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 w-full bg-slate-800">
                    {advocate.image ? (
                      <Image
                        src={advocate.image}
                        alt={advocate.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-3xl text-accent">
                        {advocate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent">
                      {advocate.designation}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-foreground mt-1 mb-1">
                      {advocate.name}
                    </h3>
                    <div className="text-xs text-foreground-muted mb-3 font-light">
                      Enrolment: {advocate.barEnrollment}
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed font-light">
                      {advocate.biography}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-border/40 mt-4 text-xs text-accent font-medium">
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
            <h2 className="text-3xl font-serif font-normal text-foreground mb-2">
              Appellate & Regulatory Jurisdictions
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
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
          <div className="lg:col-span-5 space-y-4 font-light">
            <h2 className="text-3xl font-serif font-normal text-foreground">
              Contact & Chambers Location
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-foreground-muted">
              <p>{firmConfig.office.addressLine1}</p>
              <p>{firmConfig.office.addressLine2}</p>
              <p>
                {firmConfig.office.city}, {firmConfig.office.state} -{" "}
                {firmConfig.office.postalCode}
              </p>
              <p className="pt-2 font-medium text-foreground">
                Phone: {firmConfig.office.phone.join(" • ")}
              </p>
              <p className="font-medium text-foreground">
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
        className="py-6 px-4 border-t border-border bg-surface text-xs text-foreground-muted font-light"
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
