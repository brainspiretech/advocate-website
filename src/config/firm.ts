export interface OfficeLocation {
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string[];
  email: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  keyAreas: string[];
  courts: string[];
  iconName:
    | "Scale"
    | "Building2"
    | "FileText"
    | "ShieldAlert"
    | "Briefcase"
    | "Landmark";
  image?: string;
}

export interface AdvocateProfile {
  id: string;
  slug: string;
  name: string;
  designation: string;
  barEnrollment: string;
  education: string[];
  primaryPractices: string[];
  admissions: string[];
  biography: string;
  image?: string;
}

export interface CorePrinciple {
  title: string;
  description: string;
}

export interface FirmConfig {
  name: string;
  shortName: string;
  tagline: string;
  establishedYear: number;
  shortDescription: string;
  fullDescription: string;
  jurisdictions: string[];
  corePrinciples: CorePrinciple[];
  office: OfficeLocation;
  socialLinks: {
    linkedin?: string;
  };
  bciCompliance: {
    ruleReference: string;
    noticeVersion: string;
  };
  heroImage?: string;
  aboutImage?: string;
}

export const firmConfig: FirmConfig = {
  name: "Newshore Legal",
  shortName: "Newshore Legal",
  tagline: "Excellence in Immigration Law & Dispute Resolution",
  establishedYear: 2012,
  shortDescription:
    "A premier law firm specializing in Global Corporate Immigration, Residency & Citizenship, Commercial Dispute Resolution, and Appellate Litigation.",
  fullDescription:
    "Newshore Legal is an established Indian and international legal practice providing specialized counsel in immigration law, citizenship advisory, and comprehensive dispute resolution. Anchored by strategic foresight and ethical dedication, the firm represents multinational corporations, high-net-worth individuals, global enterprises, and private clients across immigration appeals, cross-border commercial arbitration, civil litigation, and judicial review before constitutional courts and specialized tribunals.",
  jurisdictions: [
    "Supreme Court of India",
    "High Court of Delhi",
    "Foreigners Regional Registration Office (FRRO) & MHA",
    "International & Domestic Commercial Arbitral Tribunals",
    "National Company Law Appellate Tribunal (NCLAT)",
    "Central Administrative Tribunal (CAT, Principal Bench)",
  ],
  corePrinciples: [
    {
      title: "Global Mobility & Compliance",
      description:
        "Navigating intricate international immigration statutes, corporate visa frameworks, and cross-border regulatory compliance with meticulous strategic precision.",
    },
    {
      title: "Decisive Dispute Resolution",
      description:
        "Formulating realistic, assertive litigation and arbitration strategies tailored to protect commercial interests and resolve complex contractual conflicts.",
    },
    {
      title: "High Partner Involvement",
      description:
        "Providing bespoke counsel characterized by direct senior advocate engagement, strict confidentiality, and tailored solutions standing firm in complexity.",
    },
  ],
  office: {
    addressLine1: "Chamber Suite 402, Lawyers Chambers Block",
    addressLine2: "Bhagwan Das Road, Mandi House",
    landmark: "Adjacent to Supreme Court of India",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110001",
    phone: ["+91 11 2338 0000", "+91 98110 00000"],
    email: "contact@newshorelegal.com",
    hours: "Monday – Saturday: 09:30 AM – 07:30 PM (By Prior Appointment)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Supreme+Court+of+India+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/newshorelegal",
  },
  bciCompliance: {
    ruleReference:
      "Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules",
    noticeVersion: "2026.1",
  },
  heroImage: "/images/hero/mahogany-library.jpg",
  aboutImage: "/images/chambers/library.jpg",
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "global-corporate-immigration",
    slug: "global-corporate-immigration",
    title: "Global Corporate & Business Immigration",
    shortDescription:
      "Advising multinational enterprises and corporate leaders on intra-company transfers, business visas, work permits, sponsor licences, and statutory workforce mobility audits.",
    detailedOverview:
      "Newshore Legal maintains a specialized corporate immigration practice assisting global enterprises, technology firms, and multinational leadership in navigating cross-border employee mobility. We provide end-to-end counsel on employment visas, sponsor compliance, intra-company transfers, and strategic workforce deployment adhering to international immigration statutes.",
    keyAreas: [
      "Corporate Work Permits & Intra-Company Transfers (ICT)",
      "Business & Investor Visas (Global Entry & Residency)",
      "Employer Sponsorship Licences & Compliance Audits",
      "Statutory Expatriate Tax & Immigration Coordination",
      "Executive Relocation & Cross-Border Advisory",
    ],
    courts: [
      "Ministry of Home Affairs (Foreigners Division)",
      "Foreigners Regional Registration Office (FRRO)",
      "High Court of Delhi (Writ Jurisdiction)",
      "High Commissions & Consular Visa Sections",
    ],
    iconName: "Briefcase",
    image: "/images/practice/commercial-disputes-arbitration.jpg",
  },
  {
    id: "citizenship-residency-private-client",
    slug: "citizenship-residency-private-client",
    title: "Individual Immigration, Residency & Citizenship",
    shortDescription:
      "Counseling high-net-worth individuals and families in acquiring residency by investment, dual citizenship, golden visas, naturalization, and overseas citizenship registration.",
    detailedOverview:
      "Our private client immigration team advises individuals, entrepreneurs, and families seeking international residency and citizenship solutions. We assist with Overseas Citizen of India (OCI) applications, complex renunciation of Indian citizenship, citizenship restoration, family reunification, and strategic golden visa programs across Europe, North America, and the Middle East.",
    keyAreas: [
      "Overseas Citizenship of India (OCI) & Card Issuance",
      "Citizenship by Investment & Permanent Residency (Golden Visas)",
      "Citizenship Renunciation & Surrender Certificate Processes",
      "Spouse, Dependent & Family Reunification Visas",
      "Long-term Residency & Naturalization Applications",
    ],
    courts: [
      "Ministry of Home Affairs (Citizenship Division)",
      "FRRO Regional Headquarters (New Delhi)",
      "High Court of Delhi",
    ],
    iconName: "Landmark",
    image: "/images/practice/constitutional-administrative-law.jpg",
  },
  {
    id: "immigration-litigation-appeals",
    slug: "immigration-litigation-appeals",
    title: "Immigration Litigation, Appeals & Judicial Review",
    shortDescription:
      "Courtroom advocacy and judicial review challenging visa refusals, deportation orders, citizenship revocations, blacklisting, and unlawful travel bans.",
    detailedOverview:
      "When administrative avenues fail, Newshore Legal provides aggressive courtroom advocacy before constitutional courts. Our advocates file Article 226 and Article 32 writ petitions challenging arbitrary visa revocations, unjust deportation directives, Look Out Circulars (LOCs), and detention actions by immigration authorities.",
    keyAreas: [
      "Writ Petitions Challenging Arbitrary Visa Refusals & Blacklisting",
      "Look Out Circular (LOC) Quashing & Travel Permission",
      "Deportation & Detention Defense before Appellate Courts",
      "Judicial Review of Regulatory Immigration Orders",
      "Asylum & Human Rights Appellate Proceedings",
    ],
    courts: [
      "Supreme Court of India",
      "High Court of Delhi (Appellate & Writ Jurisdiction)",
      "Central Administrative Tribunal (CAT)",
    ],
    iconName: "ShieldAlert",
    image: "/images/practice/white-collar-crime-defense.jpg",
  },
  {
    id: "commercial-dispute-resolution-arbitration",
    slug: "commercial-dispute-resolution-arbitration",
    title: "Commercial Dispute Resolution & Arbitration",
    shortDescription:
      "Representation in complex commercial disputes, domestic and international arbitrations, and enforcement of foreign awards under the Arbitration and Conciliation Act, 1996.",
    detailedOverview:
      "Newshore Legal maintains a premier commercial dispute resolution practice, advising public and private sector corporations and multinational enterprises. Our advocates regularly appear before Sole Arbitrators, Multi-Member Tribunals, and High Courts in Section 9 interim relief, Section 11 arbitrator appointments, Section 34 challenge proceedings, and Section 36 enforcement actions.",
    keyAreas: [
      "Domestic & International Commercial Arbitration (ICC, SIAC, LCIA, DIAC)",
      "Shareholder Agreements & Joint Venture Disputes",
      "Enforcement & Execution of Foreign Arbitral Awards",
      "Cross-Border Contractual Breach & Specific Performance",
      "Commercial Summary Suits under the Commercial Courts Act, 2015",
    ],
    courts: [
      "Supreme Court of India",
      "High Court of Delhi (Commercial Division)",
      "Delhi International Arbitration Centre (DIAC)",
      "Singapore International Arbitration Centre (SIAC)",
    ],
    iconName: "Scale",
    image: "/images/practice/corporate-insolvency-ibc.jpg",
  },
  {
    id: "civil-litigation-contract-enforcement",
    slug: "civil-litigation-contract-enforcement",
    title: "Civil Litigation & Contract Enforcement",
    shortDescription:
      "Trial advocacy and appellate representation across contractual enforcement, corporate recovery, asset preservation, injunctions, and appellate challenges.",
    detailedOverview:
      "Our advocates possess comprehensive trial and appellate acumen across diverse civil and commercial jurisdictions. We represent corporate entities and individuals in complex contractual litigation, declaratory actions, recovery suits, injunction proceedings, and regulatory compliance litigation before High Courts and appellate tribunals.",
    keyAreas: [
      "Breach of Commercial Contracts & Damages Claims",
      "Injunction Applications & Asset Freezing Orders",
      "Corporate Debt Recovery & Summary Suits",
      "Shareholder Oppression & Management Disputes (NCLT)",
      "Appellate Appeals before Division Benches & Supreme Court",
    ],
    courts: [
      "Supreme Court of India",
      "High Court of Delhi",
      "National Company Law Appellate Tribunal (NCLAT)",
      "District Courts of New Delhi & NCR",
    ],
    iconName: "Building2",
    image: "/images/practice/real-estate-rera-property.jpg",
  },
  {
    id: "alternative-dispute-resolution-mediation",
    slug: "alternative-dispute-resolution-mediation",
    title: "Mediation & Alternative Dispute Resolution (ADR)",
    shortDescription:
      "Structured commercial mediation, pre-litigation settlement negotiations, and consensual dispute facilitation preserving enterprise relationships.",
    detailedOverview:
      "Recognizing that prolonged litigation can erode enterprise value, Newshore Legal provides dedicated Alternative Dispute Resolution (ADR) and mediation services. Our certified mediators and advocates guide clients through confidential negotiations, dispute avoidance protocols, and legally binding settlement agreements.",
    keyAreas: [
      "Pre-Litigation Mediation under Commercial Courts Act",
      "Commercial Contract Settlement Conferences",
      "Cross-Border Business & Investor Mediation",
      "Drafting & Registration of Legally Binding Settlement Deeds",
      "Dispute Avoidance Counsel for Strategic Joint Ventures",
    ],
    courts: [
      "Delhi High Court Mediation and Conciliation Centre (Samadhan)",
      "Private Institutional Mediation Tribunals",
      "Arbitration & Conciliation Forums",
    ],
    iconName: "FileText",
    image: "/images/practice/intellectual-property-technology.jpg",
  },
];

export const advocates: AdvocateProfile[] = [
  {
    id: "rajesh-narayan",
    slug: "rajesh-narayan",
    name: "Rajesh Narayan",
    designation: "Managing Partner & Counsel",
    barEnrollment: "Enrolled with the Bar Council of Delhi (D/1482/2004)",
    education: [
      "B.A. LL.B. (Hons.), National Law School of India University (NLSIU)",
      "LL.M. in International Dispute Settlement, University of Cambridge, UK",
    ],
    primaryPractices: [
      "Commercial Dispute Resolution & Arbitration",
      "Immigration Litigation & Judicial Review",
      "Cross-Border Contract Enforcement",
    ],
    admissions: [
      "Supreme Court of India (Advocate-on-Record)",
      "High Court of Delhi",
      "Chartered Institute of Arbitrators (MCIArb)",
    ],
    biography:
      "With over two decades of trial and appellate experience, Rajesh Narayan leads Newshore Legal's dispute resolution and cross-border practice. He has argued extensively before the Supreme Court of India, multiple State High Courts, and Arbitral Tribunals in high-value commercial, immigration, and regulatory matters.",
    image: "/images/advocates/rajesh-narayan.jpg",
  },
  {
    id: "meenakshi-swaminathan",
    slug: "meenakshi-swaminathan",
    name: "Meenakshi Swaminathan",
    designation: "Partner - Global Immigration & Compliance",
    barEnrollment: "Enrolled with the Bar Council of Delhi (D/2210/2009)",
    education: [
      "B.B.A. LL.B. (Hons.), Symbiosis Law School, Pune",
      "Post-Graduate Diploma in International Law & Human Rights, ILI",
    ],
    primaryPractices: [
      "Global Corporate & Business Immigration",
      "Citizenship & Residency by Investment",
      "FRRO Compliance & Visa Regulatory Advisory",
    ],
    admissions: [
      "Supreme Court of India",
      "High Court of Delhi",
      "International Bar Association (Immigration & Nationality Section)",
    ],
    biography:
      "Meenakshi Swaminathan oversees Newshore Legal's immigration law and cross-border mobility practice. She regularly counsels multinational corporations, expatriates, and high-net-worth families on corporate intra-company transfers, residency by investment, citizenship renunciation, and FRRO statutory compliance.",
    image: "/images/advocates/meenakshi-swaminathan.jpg",
  },
  {
    id: "anand-vardhan-singh",
    slug: "anand-vardhan-singh",
    name: "Anand Vardhan Singh",
    designation: "Partner - Civil Litigation & Mediation",
    barEnrollment:
      "Enrolled with the Bar Council of Uttar Pradesh & Delhi (D/3115/2012)",
    education: [
      "B.A. LL.B., Faculty of Law, University of Delhi (CLC)",
      "Certified Commercial Mediator (Samadhan / IIAM)",
    ],
    primaryPractices: [
      "Civil & Commercial Litigation",
      "Mediation & ADR Settlement",
      "Immigration Writs & Appellate Advocacy",
    ],
    admissions: [
      "Supreme Court of India",
      "High Court of Delhi",
      "Delhi High Court Mediation Centre",
    ],
    biography:
      "Anand Vardhan Singh focuses on civil litigation, commercial contract enforcement, and Alternative Dispute Resolution. A trained commercial mediator, he has successfully resolved contentious disputes out of court while maintaining an aggressive appellate practice before the High Court of Delhi and Supreme Court.",
    image: "/images/advocates/anand-vardhan-singh.jpg",
  },
];
