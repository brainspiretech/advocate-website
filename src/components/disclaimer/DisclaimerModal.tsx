"use client";

import { AlertCircle, ExternalLink, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { firmConfig } from "@/config/firm";

const CONSENT_STORAGE_KEY = "bci_disclaimer_consent";

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If the visitor is on the standalone disclaimer page, allow reading without modal obstruction
    if (pathname === "/disclaimer") {
      setIsOpen(false);
      return;
    }

    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (
          parsed.accepted === true &&
          parsed.version === firmConfig.bciCompliance.noticeVersion
        ) {
          setIsOpen(false);
          return;
        }
      }
    } catch {
      // In case of parsing error, require consent
    }

    setIsOpen(true);
  }, [pathname]);

  const handleAccept = () => {
    if (!isChecked) return;
    try {
      const consentData = {
        accepted: true,
        acceptedAt: new Date().toISOString(),
        version: firmConfig.bciCompliance.noticeVersion,
      };
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
    } catch {
      // Ignore storage errors in restrictive environments
    }
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/80 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-2xl bg-surface border border-border shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header Banner */}
        <div className="bg-primary px-6 py-5 border-b border-border/20 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-widest text-accent flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Bar Council of India
                Compliance
              </span>
            </div>
            <h2
              id="disclaimer-title"
              className="text-xl sm:text-2xl font-serif text-primary-foreground font-semibold mt-0.5"
            >
              Disclaimer & User Undertaking
            </h2>
          </div>
        </div>

        {/* Scrollable Notice Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-foreground-muted leading-relaxed">
          <div className="p-3 bg-surface-subtle border border-border-subtle rounded-sm text-xs text-foreground/80 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p>
              As per the rules of the Bar Council of India (Rule 36, Section IV,
              Chapter II, Part VI), advocates and law firms in India are
              strictly prohibited from soliciting work or advertising in any
              manner.
            </p>
          </div>

          <p className="font-medium text-foreground">
            By proceeding further and accessing this website, you voluntarily
            acknowledge and agree to the following terms:
          </p>

          <ul className="space-y-3 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">
                  Voluntary Information:
                </strong>{" "}
                You are seeking information relating to {firmConfig.name} of
                your own accord, solely for personal information and
                professional knowledge.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">No Solicitation:</strong>{" "}
                There has been no advertisement, personal communication,
                solicitation, invitation, or inducement of any sort whatsoever
                from {firmConfig.name} or any of its advocates to solicit work
                through this website.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">
                  No Advocate-Client Relationship:
                </strong>{" "}
                The material on this website is for informational purposes only
                and does not constitute legal advice. Accessing or downloading
                any information does not establish an advocate-client
                relationship.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">
                  Independent Legal Counsel:
                </strong>{" "}
                {firmConfig.name} is not liable for any consequence of any
                action taken by the user relying on material provided herein. In
                all cases involving legal issues, users must seek independent
                legal counsel.
              </span>
            </li>
          </ul>

          <div className="pt-2 text-xs text-foreground-subtle border-t border-border-subtle">
            For more details regarding our statutory compliance, read our full{" "}
            <Link
              href="/disclaimer"
              onClick={() => setIsOpen(false)}
              className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
            >
              Statutory Disclaimer <ExternalLink className="w-3 h-3" />
            </Link>
            .
          </div>
        </div>

        {/* Footer Actions & Consent Checkbox */}
        <div className="p-6 bg-surface-subtle border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-start sm:items-center gap-3 cursor-pointer select-none text-xs text-foreground font-medium">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-4 h-4 rounded border-border text-primary focus:ring-accent accent-accent mt-0.5 sm:mt-0 cursor-pointer"
            />
            <span>
              I have read, understood, and agree to the disclaimer terms
            </span>
          </label>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2 text-xs font-medium text-foreground-muted hover:text-foreground bg-surface border border-border hover:border-foreground-muted/40 transition-colors rounded-sm cursor-pointer"
            >
              Decline & Exit
            </button>
            <button
              type="button"
              disabled={!isChecked}
              onClick={handleAccept}
              className={`px-5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-2 cursor-pointer ${
                isChecked
                  ? "bg-primary text-primary-foreground hover:bg-primary-light shadow-sm"
                  : "bg-surface-muted text-foreground-subtle cursor-not-allowed border border-border"
              }`}
            >
              Accept & Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
