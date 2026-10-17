import {
  AlertTriangle,
  ArrowLeft,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { firmConfig } from "@/config/firm";

export const metadata: Metadata = {
  title: "Statutory Disclaimer & Regulatory Notice",
  description:
    "Mandatory regulatory disclosure under Rule 36 of the Bar Council of India Rules.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground-muted hover:text-primary transition-colors tracking-wide uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>

        {/* Header Section */}
        <header className="border-b border-border pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-subtle border border-border-subtle rounded-full text-xs font-medium text-accent mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Advocates Act, 1961 Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight">
            Statutory Disclaimer & Regulatory Notice
          </h1>
          <p className="mt-3 text-base text-foreground-muted leading-relaxed">
            Prescribed notice under Rule 36, Section IV, Chapter II, Part VI of
            the Bar Council of India Rules governing advocate communications.
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-8 text-foreground-muted text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 bg-surface border border-border rounded-sm shadow-sm">
            <h2 className="text-lg font-serif font-semibold text-primary flex items-center gap-2.5 mb-3">
              <Scale className="w-5 h-5 text-accent" />
              1. Prohibition on Advertisement & Solicitation
            </h2>
            <p>
              Under the provisions of the <strong>Advocates Act, 1961</strong>{" "}
              and the standards of professional conduct prescribed by the{" "}
              <strong>Bar Council of India (BCI)</strong>, advocates and law
              firms in India are strictly prohibited from soliciting work,
              advertising, or circulating promotional material in any public
              domain or electronic medium.
            </p>
            <p className="mt-2.5">
              This website is maintained solely as an informational resource.
              Neither {firmConfig.name} nor any of its partners, associates, or
              members intend to advertise their legal practice, solicit legal
              representation, or offer inducements of any kind through this
              platform.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-serif font-semibold text-primary flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-accent" />
              2. Voluntary Access & Informational Intent
            </h2>
            <p>
              Any person visiting this website acknowledges and undertakes that
              they are accessing the pages of their own free will and volition,
              solely for the purpose of acquiring factual information regarding
              the chamber&apos;s areas of practice, partner qualifications, and
              office contact coordinates.
            </p>
            <p>
              No communication or transmission of information via this website
              constitutes an invitation or offer to enter into any legal
              contract or agreement for legal services.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-serif font-semibold text-primary flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-accent" />
              3. No Advocate-Client Relationship
            </h2>
            <p>
              The receipt, access, or transmission of information from or to
              this website does not create, constitute, or establish an
              advocate-client or attorney-client relationship between the user
              and {firmConfig.name} or any of its advocates.
            </p>
            <p>
              Legal representation is established exclusively following personal
              consultation, formal conflicts clearance, execution of a formal
              vakalatnama or engagement letter, and mutually agreed terms of
              retainer.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-serif font-semibold text-primary">
              4. Disclaimer of Legal Advice & Liability
            </h2>
            <p>
              The content provided across this platform is compiled for
              educational and informational orientation only. It does not
              constitute formal legal opinion or substantive advice on any
              matter whatsoever. Laws and judicial precedents evolve
              continuously, and material on this site may not reflect the most
              recent statutory amendments or judicial pronouncements.
            </p>
            <p>
              {firmConfig.name} disclaims all liability to any person, entity,
              or corporation in respect of any consequence, loss, or damage
              arising directly or indirectly from any action taken or omitted to
              be taken in reliance upon the whole or any part of the contents of
              this website. Users facing legal issues must obtain independent,
              formal legal advice from qualified counsel.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-serif font-semibold text-primary">
              5. Intellectual Property Rights
            </h2>
            <p>
              All text, layout, typography, logos, and organizational
              compilation on this website are the intellectual property of{" "}
              {firmConfig.name}. Unauthorized copying, commercial reproduction,
              republication, or distribution of any material without express
              prior written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-6 bg-surface-subtle border border-border-subtle rounded-sm text-xs space-y-2">
            <h3 className="font-semibold text-primary uppercase tracking-wider">
              Chamber Jurisdictional Details
            </h3>
            <p>
              <strong>Firm:</strong> {firmConfig.name}
            </p>
            <p>
              <strong>Address:</strong> {firmConfig.office.addressLine1},{" "}
              {firmConfig.office.addressLine2}, {firmConfig.office.city},{" "}
              {firmConfig.office.state} - {firmConfig.office.postalCode}
            </p>
            <p>
              <strong>Email:</strong> {firmConfig.office.email}
            </p>
            <p>
              <strong>Regulatory Reference:</strong>{" "}
              {firmConfig.bciCompliance.ruleReference}
            </p>
            <p className="text-foreground-subtle pt-2 border-t border-border-subtle">
              Notice Version: {firmConfig.bciCompliance.noticeVersion} • Last
              Reviewed: October 2026
            </p>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-6 border-t border-border flex justify-between items-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary-light text-xs font-semibold rounded-sm transition-colors shadow-sm"
          >
            Acknowledge & Proceed to Home
          </Link>
          <span className="text-xs text-foreground-subtle">
            {firmConfig.name} • {firmConfig.office.city}
          </span>
        </div>
      </div>
    </main>
  );
}
