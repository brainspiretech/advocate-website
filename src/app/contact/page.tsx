import {
  ArrowRight,
  ChevronRight,
  Clock,
  Compass,
  ExternalLink,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Scale,
  ShieldCheck,
  Train,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { firmConfig } from "@/config/firm";

export const metadata: Metadata = {
  title: `Chambers Coordinates & Location | ${firmConfig.name}`,
  description: `Physical chamber address, official registry telephone lines, email, judicial proximity to Supreme Court of India, and consultation appointment protocols for ${firmConfig.name}, New Delhi.`,
};

export default function ContactPage() {
  const { office } = firmConfig;

  return (
    <div className="flex flex-col flex-1 w-full bg-background text-foreground">
      {/* 1. HERO HEADER & BREADCRUMBS */}
      <section
        aria-labelledby="contact-heading"
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
                Chambers Coordinates
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Chambers Registry • New Delhi</span>
            </div>

            <h1
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Chambers Coordinates &amp; Location
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              Physical address, telephone and electronic registry lines,
              judicial proximity to apex courts, and appointment scheduling
              protocols for {firmConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFORMATION CARDS */}
      <section
        aria-labelledby="coordinates-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Registry Channels</span>
            </div>
            <h2
              id="coordinates-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Chambers Contact Details
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Official communication channels for client consultations, briefing
              counsels, and judicial registry communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address Card */}
            <div className="bg-surface border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-primary mb-2">
                  Chambers Address
                </h3>
                <address className="not-italic text-xs text-foreground-muted space-y-1 leading-relaxed">
                  <p className="font-medium text-primary">
                    {office.addressLine1}
                  </p>
                  <p>{office.addressLine2}</p>
                  <p>
                    {office.city}, {office.state} – {office.postalCode}
                  </p>
                  <p className="text-accent font-medium pt-1">
                    Landmark: {office.landmark}
                  </p>
                </address>
              </div>
              <div className="pt-4 mt-6 border-t border-border-subtle text-[11px] text-foreground-muted">
                Supreme Court Enclave
              </div>
            </div>

            {/* Telephone Card */}
            <div className="bg-surface border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-primary mb-2">
                  Telephone Lines
                </h3>
                <div className="text-xs text-foreground-muted space-y-2 leading-relaxed">
                  <p className="font-mono text-primary font-semibold text-sm">
                    {office.phone[0]}
                  </p>
                  {office.phone[1] && (
                    <p className="font-mono text-primary font-semibold text-sm">
                      {office.phone[1]}
                    </p>
                  )}
                  <p className="text-[11px] text-foreground-muted pt-1">
                    Chambers Reception &amp; Listing Registry
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-border-subtle text-[11px] text-foreground-muted">
                Telephonic inquiries during office hours
              </div>
            </div>

            {/* Electronic Mail Card */}
            <div className="bg-surface border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-primary mb-2">
                  Official Registry Email
                </h3>
                <div className="text-xs text-foreground-muted space-y-1 leading-relaxed">
                  <a
                    href={`mailto:${office.email}`}
                    className="font-mono text-primary hover:text-accent font-medium text-xs break-all transition-colors"
                  >
                    {office.email}
                  </a>
                  <p className="text-[11px] text-foreground-muted pt-2">
                    For formal case brief submissions and judicial service
                    documents.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-border-subtle text-[11px] text-foreground-muted">
                Official electronic communications
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-surface border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-5">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-primary mb-2">
                  Consultation Hours
                </h3>
                <div className="text-xs text-foreground-muted space-y-1.5 leading-relaxed">
                  <p className="font-medium text-primary">{office.hours}</p>
                  <p className="text-[11px] text-accent font-medium pt-1">
                    Conferences Strictly by Prior Appointment
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-border-subtle text-[11px] text-foreground-muted">
                In compliance with BCI guidelines
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP & COURT PROXIMITY MATRIX */}
      <section
        aria-labelledby="location-matrix-heading"
        className="py-16 lg:py-24 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Navigation className="w-3.5 h-3.5" />
              <span>Geographic Proximity</span>
            </div>
            <h2
              id="location-matrix-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Chambers Location &amp; Court Proximity
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              Situated in the core institutional legal enclave of New Delhi,
              adjacent to the Supreme Court of India, facilitating immediate
              presence before apex benches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: MAP EMBED (7 COLS) */}
            <div className="lg:col-span-7 bg-background border border-border rounded-sm overflow-hidden p-2 shadow-xs">
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-xs overflow-hidden bg-slate-100">
                <iframe
                  title="Apex Chambers Location Map"
                  src={office.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[25%] contrast-[105%]"
                />
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-background">
                <div className="text-foreground-muted">
                  <span className="font-semibold text-primary">
                    GPS Reference:
                  </span>{" "}
                  Bhagwan Das Road, Mandi House, New Delhi
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${office.addressLine1}, ${office.addressLine2}, ${office.city}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover font-semibold uppercase tracking-wider text-[11px]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* RIGHT: PROXIMITY MILESTONES (5 COLS) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-background border border-border p-6 rounded-sm">
                <div className="flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
                  <Landmark className="w-4 h-4" />
                  <span>Judicial Forum Distances</span>
                </div>

                <ul className="space-y-4 text-xs">
                  <li className="flex items-center justify-between pb-3 border-b border-border-subtle">
                    <div>
                      <div className="font-serif font-bold text-sm text-primary">
                        Supreme Court of India
                      </div>
                      <div className="text-foreground-muted text-[11px]">
                        Tilak Marg Gate
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-accent/10 border border-accent/20 text-accent font-semibold font-mono text-xs">
                      50 m • 2 min walk
                    </span>
                  </li>

                  <li className="flex items-center justify-between pb-3 border-b border-border-subtle">
                    <div>
                      <div className="font-serif font-bold text-sm text-primary">
                        High Court of Delhi
                      </div>
                      <div className="text-foreground-muted text-[11px]">
                        Sher Shah Road
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-surface border border-border text-foreground-muted font-mono text-xs">
                      3.5 km • 8 mins
                    </span>
                  </li>

                  <li className="flex items-center justify-between pb-3 border-b border-border-subtle">
                    <div>
                      <div className="font-serif font-bold text-sm text-primary">
                        Rouse Avenue Court Complex
                      </div>
                      <div className="text-foreground-muted text-[11px]">
                        Special CBI &amp; PMLA Courts
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-surface border border-border text-foreground-muted font-mono text-xs">
                      2.0 km • 5 mins
                    </span>
                  </li>

                  <li className="flex items-center justify-between pb-3 border-b border-border-subtle">
                    <div>
                      <div className="font-serif font-bold text-sm text-primary">
                        NCLT &amp; NCLAT Principal Benches
                      </div>
                      <div className="text-foreground-muted text-[11px]">
                        CGO Complex, Lodhi Road
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-surface border border-border text-foreground-muted font-mono text-xs">
                      5.5 km • 12 mins
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <div>
                      <div className="font-serif font-bold text-sm text-primary">
                        National Green Tribunal (NGT)
                      </div>
                      <div className="text-foreground-muted text-[11px]">
                        Faridkot House, Copernicus Marg
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-surface border border-border text-foreground-muted font-mono text-xs">
                      1.0 km • 3 mins
                    </span>
                  </li>
                </ul>
              </div>

              {/* Transit & Metro Connectivity */}
              <div className="bg-background border border-border p-6 rounded-sm">
                <div className="flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
                  <Train className="w-4 h-4" />
                  <span>Metro &amp; Transit Access</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-sm bg-surface border border-border">
                    <div className="font-bold text-primary">
                      Mandi House Metro
                    </div>
                    <div className="text-[11px] text-accent font-medium">
                      Blue &amp; Violet Lines
                    </div>
                    <div className="text-foreground-muted text-[11px] mt-1">
                      300 meters • Exit Gate 1
                    </div>
                  </div>

                  <div className="p-3 rounded-sm bg-surface border border-border">
                    <div className="font-bold text-primary">
                      Supreme Court Metro
                    </div>
                    <div className="text-[11px] text-accent font-medium">
                      Blue Line (Pragati Maidan)
                    </div>
                    <div className="text-foreground-muted text-[11px] mt-1">
                      400 meters • Exit Gate 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION & BRIEF PROTOCOL GUIDE */}
      <section
        aria-labelledby="protocol-heading"
        className="py-16 lg:py-24 bg-background border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Chambers Administration</span>
            </div>
            <h2
              id="protocol-heading"
              className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight"
            >
              Consultation &amp; Engagement Protocol
            </h2>
            <p className="mt-3 text-foreground-muted text-base leading-relaxed">
              In adherence to Bar Council of India conventions, client
              consultations and case evaluations proceed according to a formal
              structured registry process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="text-xs font-serif font-bold text-accent tracking-widest uppercase mb-4">
                STAGE 01 • INTAKE
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Appointment Scheduling
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                Contact the chambers registry by phone or email to request a
                consultation slot. State the judicial forum, matter
                classification, and urgent dates (e.g., limitation or listing
                dates).
              </p>
              <div className="text-xs text-accent font-medium flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Call {office.phone[0]}</span>
              </div>
            </div>

            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="text-xs font-serif font-bold text-accent tracking-widest uppercase mb-4">
                STAGE 02 • BRIEFING
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Record Submission
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                Provide certified copies of lower court orders, trial record
                sets, impugned notifications, and a chronological summary of
                facts for preliminary review prior to conference.
              </p>
              <div className="text-xs text-accent font-medium flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Documentation Checklist</span>
              </div>
            </div>

            <div className="bg-surface border border-border p-8 rounded-sm">
              <div className="text-xs font-serif font-bold text-accent tracking-widest uppercase mb-4">
                STAGE 03 • EVALUATION
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3">
                Chambers Conference
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                In-person or secure virtual consultation with designated counsel
                to evaluate statutory merits, evidentiary weight, precedential
                prospects, and judicial strategy.
              </p>
              <div className="text-xs text-accent font-medium flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                <span>Objective Legal Opinion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATUTORY BCI COMPLIANCE NOTICE */}
      <section
        aria-labelledby="contact-bci-notice-heading"
        className="py-16 bg-surface-subtle border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2
            id="contact-bci-notice-heading"
            className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4"
          >
            Statutory Notice under Bar Council of India Rules
          </h2>
          <p className="text-foreground-muted text-sm leading-relaxed max-w-3xl mx-auto mb-6">
            Under {firmConfig.bciCompliance.ruleReference}, advocates are
            prohibited from soliciting work or advertising. The coordinates and
            details provided on this page are published solely for the
            convenience of clients, briefing counsels, and individuals who
            voluntarily seek information regarding the chambers registry and
            office location. Transmission of email or inquiry does not create an
            advocate-client relationship.
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

      {/* 6. DIRECTIONAL NAVIGATION PATHWAYS */}
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
              href="/team"
              className="group p-6 bg-background border border-border hover:border-accent transition-all rounded-sm"
            >
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                Advocates
              </div>
              <h3 className="text-xl font-serif font-bold text-primary group-hover:text-primary-light mb-2 flex items-center justify-between">
                <span>Our Counsel</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-foreground-muted">
                Review qualifications, bar council admissions, and court
                experience of our practitioners.
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
          </div>
        </div>
      </section>
    </div>
  );
}
