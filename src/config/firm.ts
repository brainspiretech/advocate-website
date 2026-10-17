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
}

export const firmConfig: FirmConfig = {
  name: "Apex Chambers",
  shortName: "Apex Chambers",
  tagline: "Precision. Integrity. Perspective.",
  establishedYear: 2012,
  shortDescription:
    "A full-service litigation and advisory chamber based in New Delhi, representing clients before the Supreme Court of India, Delhi High Court, and specialized judicial tribunals.",
  fullDescription:
    "Apex Chambers is an established Indian law chamber providing comprehensive legal counsel and dispute resolution services. Anchored by dedication to rigorous jurisprudence, the chamber represents corporate enterprises, statutory bodies, and individuals across diverse civil, commercial, constitutional, and criminal matters. The chambers practice strictly adheres to the ethical standards prescribed by the Bar Council of India.",
  jurisdictions: [
    "Supreme Court of India",
    "High Court of Delhi",
    "National Company Law Tribunal (NCLT & NCLAT)",
    "National Green Tribunal (NGT)",
    "Debts Recovery Appellate Tribunal (DRAT)",
    "Arbitral Tribunals (Domestic & International)",
  ],
  corePrinciples: [
    {
      title: "Integrity & Independence",
      description:
        "Upholding absolute fiduciary duty to clients while preserving unwavering institutional fidelity to the administration of justice.",
    },
    {
      title: "Analytical Precision",
      description:
        "Every brief is examined with meticulous factual scrutiny, thorough statutory interpretation, and deep research into authoritative judicial precedents.",
    },
    {
      title: "Strategic Advocacy",
      description:
        "Formulating realistic, pragmatic legal strategies tailored to commercial imperatives and constitutional guarantees.",
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
    email: "contact@apexchambers.in",
    hours: "Monday – Saturday: 09:30 AM – 07:30 PM (By Prior Appointment)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Supreme+Court+of+India+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com",
  },
  bciCompliance: {
    ruleReference:
      "Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules",
    noticeVersion: "2026.1",
  },
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "commercial-disputes-arbitration",
    slug: "commercial-disputes-arbitration",
    title: "Commercial Litigation & Arbitration",
    shortDescription:
      "Representation in complex contractual disputes, domestic and international commercial arbitrations, and enforcement proceedings under the Arbitration and Conciliation Act, 1996.",
    detailedOverview:
      "Apex Chambers maintains a substantial practice in commercial dispute resolution, advising and representing public and private sector corporations, multinational enterprises, and infrastructure developers. Our advocates regularly appear before Sole Arbitrators, Three-Member Tribunals, and High Courts in Section 9 (interim relief), Section 11 (appointment of arbitrators), Section 34 (setting aside awards), and Section 36 (enforcement) proceedings.",
    keyAreas: [
      "Domestic & International Commercial Arbitration",
      "EPC, Infrastructure & Construction Contract Disputes",
      "Shareholder Agreements & Joint Venture Disputes",
      "Enforcement & Execution of Foreign Arbitral Awards",
      "Commercial Summary Suits under the Commercial Courts Act, 2015",
    ],
    courts: [
      "Supreme Court of India",
      "High Court of Delhi (Commercial Division)",
      "Delhi International Arbitration Centre (DIAC)",
      "Indian Council of Arbitration (ICA)",
    ],
    iconName: "Scale",
  },
  {
    id: "corporate-insolvency-ibc",
    slug: "corporate-insolvency-ibc",
    title: "Insolvency & Bankruptcy (IBC)",
    shortDescription:
      "Counseling financial creditors, operational creditors, and corporate debtors in insolvency resolution, liquidation processes, and Section 7, 9, and 10 proceedings under the IBC, 2016.",
    detailedOverview:
      "The chamber routinely represents financial institutions, operational creditors, resolution applicants, and promoters before the National Company Law Tribunal (NCLT) and the National Company Law Appellate Tribunal (NCLAT). Our team advises on pre-insolvency stress resolution, Section 7/9 filings, approval of Resolution Plans, liquidation proceedings, and avoidance transaction litigation under Sections 43, 45, and 66 of the Code.",
    keyAreas: [
      "Corporate Insolvency Resolution Process (CIRP) Representation",
      "Resolution Plan Scrutiny and Objections",
      "Preferential, Undervalued & Fraudulent Transaction Claims",
      "Personal Guarantor Insolvency Proceedings",
      "Debt Recovery Proceedings before DRT / DRAT",
    ],
    courts: [
      "National Company Law Tribunal (Principal & Regional Benches)",
      "National Company Law Appellate Tribunal (NCLAT, New Delhi)",
      "Debts Recovery Tribunal (DRT, Delhi)",
    ],
    iconName: "Building2",
  },
  {
    id: "white-collar-crime-defense",
    slug: "white-collar-crime-defense",
    title: "White-Collar Crime & Special Acts",
    shortDescription:
      "Defense and trial advocacy in economic offences, prevention of corruption cases, money laundering (PMLA), company fraud (SFIO), and regulatory penal investigations.",
    detailedOverview:
      "Apex Chambers provides dedicated trial and appellate defense in corporate criminal liability, anti-corruption, and economic crime investigations initiated by regulatory and investigative bodies including the Enforcement Directorate (ED), Central Bureau of Investigation (CBI), and Serious Fraud Investigation Office (SFIO). Our practice emphasizes statutory compliance, bail jurisprudence, and quashing of non-cognizable or vexatious complaints under Section 482 of the CrPC / Section 528 of the Bharatiya Nagarik Suraksha Sanhita (BNSS).",
    keyAreas: [
      "Prevention of Money Laundering Act (PMLA) Defense & Provisional Attachment",
      "Prevention of Corruption Act (PC Act) Defense",
      "Serious Fraud Investigation Office (SFIO) Inquiries",
      "Cheque Dishonour Litigation under Section 138 NI Act",
      "Anticipatory Bail, Regular Bail & Section 482 CrPC Quashing",
    ],
    courts: [
      "Special PMLA Courts & Special CBI Courts (Rouse Avenue, New Delhi)",
      "High Court of Delhi",
      "Supreme Court of India",
      "Appellate Tribunal for PMLA (ATFP)",
    ],
    iconName: "ShieldAlert",
  },
  {
    id: "constitutional-administrative-law",
    slug: "constitutional-administrative-law",
    title: "Constitutional & Administrative Law",
    shortDescription:
      "Writ litigation under Articles 32 and 226 of the Constitution of India concerning fundamental rights, tenders, executive overreach, and statutory challenges.",
    detailedOverview:
      "Our advocates possess deep grounding in constitutional jurisprudence, having represented civic groups, trade associations, and individuals in landmark writ petitions. The chamber regularly challenges arbitrary government policy, tender cancellations, blacklisting orders, and unauthorized executive actions before the Supreme Court of India and various High Courts.",
    keyAreas: [
      "Writ Petitions under Article 32 & Article 226",
      "Public Procurement, Government Tenders & Blacklisting Disputes",
      "Service & Administrative Matters before Central Administrative Tribunal (CAT)",
      "Judicial Review of Regulatory & Statutory Authority Actions",
      "Fundamental Rights & Liberty Enforcement Petitions",
    ],
    courts: [
      "Supreme Court of India",
      "High Court of Delhi",
      "Central Administrative Tribunal (Principal Bench, New Delhi)",
    ],
    iconName: "Landmark",
  },
  {
    id: "real-estate-rera-property",
    slug: "real-estate-rera-property",
    title: "Real Estate & RERA Litigation",
    shortDescription:
      "Adjudication of property title disputes, partition suits, builder-buyer contracts, and developer compliance before the Real Estate Regulatory Authority (RERA).",
    detailedOverview:
      "Apex Chambers advises institutional developers, high-net-worth property owners, and homebuyer consortiums on property laws across the National Capital Region (NCR). Our practice covers developer obligations under RERA, specific performance suits, partition litigation, land acquisition compensation challenges, and title verification documentation.",
    keyAreas: [
      "Complaints before RERA Authority & Appellate Tribunal (REAT)",
      "Specific Performance of Contracts & Injunction Suits",
      "Partition, Declaration of Title & Succession Disputes",
      "Commercial Lease Agreement Drafting & Eviction Petitions",
      "Land Acquisition & Fair Compensation References",
    ],
    courts: [
      "Delhi Real Estate Regulatory Authority & Appellate Tribunal",
      "District Courts of Delhi & NCR",
      "High Court of Delhi",
    ],
    iconName: "Briefcase",
  },
  {
    id: "intellectual-property-technology",
    slug: "intellectual-property-technology",
    title: "Intellectual Property & Technology",
    shortDescription:
      "Litigation and advisory regarding trademark infringement, copyright protection, patent disputes, trade secrets, and emerging digital technology law.",
    detailedOverview:
      "The chamber represents brand owners and technology ventures in protecting proprietary IP assets. Our advocates handle trademark opposition, passing-off suits, Anton Piller (search & seizure) applications, John Doe injunctions in piracy matters, and domain name disputes before the Intellectual Property Division of the High Court.",
    keyAreas: [
      "Trademark Infringement & Passing-Off Actions",
      "Copyright Protection, Software Licensing & Anti-Piracy Injunctions",
      "Patent Validity & Revocation Proceedings",
      "Trade Secrets & Confidential Information Enforcement",
      "Commercial IP Division Litigation",
    ],
    courts: [
      "Intellectual Property Division, High Court of Delhi",
      "Trade Marks Registry, New Delhi",
      "District Commercial Courts",
    ],
    iconName: "FileText",
  },
];

export const advocates: AdvocateProfile[] = [
  {
    id: "rajesh-narayan",
    slug: "rajesh-narayan",
    name: "Rajesh Narayan",
    designation: "Founder & Managing Counsel",
    barEnrollment: "Enrolled with the Bar Council of Delhi (D/1482/2004)",
    education: [
      "B.A. LL.B. (Hons.), National Law School of India University (NLSIU), Bengaluru",
      "LL.M. in International Dispute Settlement, University of Cambridge, UK",
    ],
    primaryPractices: [
      "Commercial Litigation & Arbitration",
      "Constitutional & Administrative Law",
      "Insolvency & Bankruptcy Code",
    ],
    admissions: [
      "Supreme Court of India (Advocate-on-Record)",
      "High Court of Delhi",
      "Chartered Institute of Arbitrators (MCIArb)",
    ],
    biography:
      "With over two decades of trial and appellate experience, Rajesh Narayan leads the chambers' commercial dispute and constitutional law practices. He has argued extensively before the Supreme Court of India, multiple State High Courts, and Arbitral Tribunals in high-value infrastructure, corporate, and constitutional matters. Prior to founding Apex Chambers, he trained with senior advocates at the Supreme Court of India.",
  },
  {
    id: "meenakshi-swaminathan",
    slug: "meenakshi-swaminathan",
    name: "Meenakshi Swaminathan",
    designation: "Partner - Corporate & Insolvency Practice",
    barEnrollment: "Enrolled with the Bar Council of Delhi (D/2210/2009)",
    education: [
      "B.B.A. LL.B. (Hons.), Symbiosis Law School, Pune",
      "Post-Graduate Diploma in Corporate Law & Governance, ILI, New Delhi",
    ],
    primaryPractices: [
      "Corporate Insolvency & Liquidation (IBC)",
      "Company Law & Mergers",
      "Banking & Financial Regulatory Advisory",
    ],
    admissions: [
      "Supreme Court of India",
      "High Court of Delhi",
      "National Company Law Tribunal & Appellate Tribunal (NCLAT)",
    ],
    biography:
      "Meenakshi Swaminathan oversees the chambers' corporate restructuring and insolvency advisory. She regularly appears before the Principal and Regional Benches of the NCLT and NCLAT on behalf of institutional creditors and resolution applicants. She brings significant domain expertise in navigating stressed asset acquisitions and complex shareholder agreements.",
  },
  {
    id: "anand-vardhan-singh",
    slug: "anand-vardhan-singh",
    name: "Anand Vardhan Singh",
    designation: "Partner - White-Collar Crime & Special Litigation",
    barEnrollment:
      "Enrolled with the Bar Council of Uttar Pradesh & Delhi (D/3115/2012)",
    education: [
      "B.A. LL.B., Faculty of Law, University of Delhi (CLC)",
      "Diploma in Cyber Law & Forensics",
    ],
    primaryPractices: [
      "White-Collar Crime Defense",
      "PMLA & Special Acts Litigation",
      "Commercial Property & RERA Disputes",
    ],
    admissions: [
      "Supreme Court of India",
      "High Court of Delhi",
      "Special CBI & PMLA Courts (Rouse Avenue, New Delhi)",
    ],
    biography:
      "Anand Vardhan Singh focuses on corporate penal liability, economic offences, and complex trials under special statutes. He has successfully represented corporate directors and professionals in investigations conducted by statutory enforcement agencies. His advocacy pairs aggressive trial strategy with deep procedural expertise in statutory criminal jurisprudence.",
  },
];
