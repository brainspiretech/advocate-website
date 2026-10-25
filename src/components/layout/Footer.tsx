import {
  Building2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { firmConfig, practiceAreas } from "@/config/firm";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Firm Overview & Ethos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-primary-light border border-accent/30 flex items-center justify-center text-accent shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl tracking-tight text-primary-foreground">
                  {firmConfig.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-accent font-medium">
                  {firmConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-primary-foreground/75 leading-relaxed">
              {firmConfig.shortDescription}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-dark/80 border border-primary-light/50 rounded-sm text-[11px] text-accent">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Bar Council of India Rule 36 Compliant</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Practice Disciplines */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-accent border-b border-primary-light/50 pb-2">
              Practice Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-primary-foreground/75">
              {practiceAreas.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <a
                    href="#practice"
                    className="hover:text-accent transition-colors flex items-center justify-between group"
                  >
                    <span>{area.title}</span>
                    <span className="text-accent/40 group-hover:text-accent transition-colors">
                      →
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#practice"
                  className="text-accent hover:underline inline-flex items-center gap-1 font-medium text-xs"
                >
                  View All Disciplines <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Links & Jurisdictions */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-accent border-b border-primary-light/50 pb-2">
              Institutional Overview
            </h4>
            <ul className="space-y-2 text-xs text-primary-foreground/75">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About the Chambers
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-accent transition-colors">
                  Advocates & Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact & Chambers
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  className="text-accent hover:underline font-medium inline-flex items-center gap-1"
                >
                  Statutory Disclaimer
                </a>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-primary-foreground/60 border-t border-primary-light/30 space-y-1">
              <p className="font-medium text-primary-foreground/80 uppercase tracking-wider text-[10px]">
                Primary Court Appearances
              </p>
              <p>• Supreme Court of India</p>
              <p>• High Court of Delhi</p>
              <p>• NCLT, NCLAT & Arbitral Tribunals</p>
            </div>
          </div>

          {/* Column 4: Chambers Address & Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-accent border-b border-primary-light/50 pb-2">
              Chambers Location
            </h4>
            <div className="space-y-3 text-xs text-primary-foreground/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p>{firmConfig.office.addressLine1}</p>
                  <p>{firmConfig.office.addressLine2}</p>
                  <p className="text-primary-foreground/60 text-[11px]">
                    {firmConfig.office.landmark}
                  </p>
                  <p>
                    {firmConfig.office.city}, {firmConfig.office.state} -{" "}
                    {firmConfig.office.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>{firmConfig.office.phone[0]}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{firmConfig.office.email}</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-primary-foreground/60">
                <Building2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>{firmConfig.office.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statutory Notice & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-light/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p className="text-center md:text-left">
            © {currentYear} {firmConfig.name}. All rights reserved.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            Information provided on this website is for informational
            orientation only, as permitted under Rule 36 of the Bar Council of
            India Rules. Accessing this website creates no advocate-client
            relationship. Read our{" "}
            <a href="#disclaimer" className="text-accent hover:underline">
              Statutory Disclaimer
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
