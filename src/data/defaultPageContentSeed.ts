export interface ContentSectionSeed {
  sectionId: string;
  title?: string;
  subtitle?: string;
  content?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  order: number;
  isActive: boolean;
}

export interface PageContentSeed {
  page: "home" | "about" | "contact";
  sections: ContentSectionSeed[];
}

export const defaultPageContentSeed: PageContentSeed[] = [
  {
    page: "home",
    sections: [
      {
        sectionId: "hero",
        title: "End-to-End Finance and Compliance Support for Growing Businesses",
        subtitle: "Led by seasoned Chartered Accountants, 89TCA delivers structured solutions that empower businesses to operate efficiently and scale with confidence.",
        content: "Trusted Chartered Accountants • 10 Years Experience • Serving Startups, SMEs & Enterprises Across India",
        buttonText: "Get Started",
        buttonLink: "/contact",
        order: 1,
        isActive: true,
      },
      {
        sectionId: "hero-secondary-cta",
        buttonText: "Contact Us",
        buttonLink: "/contact",
        order: 3,
        isActive: true,
      },
      {
        sectionId: "services-intro",
        title: "Our Services",
        content: "Explore tailored services across incorporation, compliance, and business support.",
        order: 4,
        isActive: true,
      },
      {
        sectionId: "starting-business-heading",
        title: "Starting a Business",
        order: 5,
        isActive: true,
      },
      {
        sectionId: "tax-compliance-heading",
        title: "Tax & Compliance",
        order: 6,
        isActive: true,
      },
      {
        sectionId: "business-support-heading",
        title: "Business Support",
        order: 7,
        isActive: true,
      },
      {
        sectionId: "business-support",
        content: "Our flagship remote accounting service is built to help businesses stay financially organized without the overhead of a full-time hire.",
        order: 8,
        isActive: true,
      },
      {
        sectionId: "about",
        title: "About 89TCA",
        content: "Backed by 40+ years of combined experience, we provide expert advisory, audit, taxation, and compliance services.",
        order: 9,
        isActive: true,
      },
      {
        sectionId: "about-overline",
        content: "About 89TCA",
        order: 10,
        isActive: true,
      },
      {
        sectionId: "why-choose-us-item-1",
        title: "Experienced Chartered Accountants",
        content: "",
        order: 11,
        isActive: true,
      },
      {
        sectionId: "why-choose-us-item-2",
        title: "End-to-end business support",
        content: "",
        order: 12,
        isActive: true,
      },
      {
        sectionId: "why-choose-us-item-3",
        title: "Trusted & compliant solutions",
        content: "",
        order: 13,
        isActive: true,
      },
      {
        sectionId: "why-choose-us-item-4",
        title: "Client-focused approach",
        content: "",
        order: 14,
        isActive: true,
      },
      {
        sectionId: "why-choose-us-overline",
        content: "Why Choose Us",
        order: 15,
        isActive: true,
      },
      {
        sectionId: "why-choose-us",
        title: "Why Choose Us",
        subtitle: "",
        content: "",
        order: 16,
        isActive: true,
      },
      {
        sectionId: "cta",
        title: "Need help with your business compliance?",
        content: "Our team is ready to guide you through the next steps.",
        buttonText: "Contact Now",
        buttonLink: "/contact",
        order: 17,
        isActive: true,
      },
      {
        sectionId: "home-services-cta",
        buttonText: "Explore All Services",
        buttonLink: "/services",
        order: 18,
        isActive: true,
      },
    ],
  },
  {
    page: "about",
    sections: [
      {
        sectionId: "intro",
        title: "About Us",
        content: "Built on deep professional expertise and extensive industry experience, 89TCA offers comprehensive services across advisory, audit, taxation, and regulatory consulting. Backed by a team of seasoned Chartered Accountants, the approach combines institutional knowledge with entrepreneurial agility to deliver practical, business-focused solutions.",
        subtitle: "The promoters collectively bring over four decades of combined experience across financial consulting, compliance, risk management, and strategic advisory.",
        order: 1,
        isActive: true,
      },
      {
        sectionId: "founders-heading",
        title: "Founders' Background",
        order: 2,
        isActive: true,
      },
      {
        sectionId: "approach-combine-label",
        content: "We combine:",
        order: 4,
        isActive: true,
      },
      {
        sectionId: "approach",
        title: "Our Approach",
        content: "The firm is driven by the belief that sound financial structuring and proactive compliance are critical to sustainable growth. Every engagement is led with accountability, technical depth, and long-term perspective.",
        order: 5,
        isActive: true,
      },
      { sectionId: "founder-mahitha", title: "CA Mahitha N, ACA", content: "Focused on direct taxation, litigation support, transfer pricing audits, and tax planning for corporates and HNIs. Her experience includes hands-on exposure to assessment proceedings and tax advisory.", order: 6, isActive: true },
      { sectionId: "founder-diwakar", title: "CA Diwakar Reddy D, FCA, DISA", content: "A seasoned advisor over a decade of experience in financial consulting and business strategy. His expertise spans business advisory, startup structuring, investment planning, and FDI regulatory advisory. He has worked closely with founders and growth-stage businesses on capital structuring and long-term financial strategy.", order: 7, isActive: true },
      { sectionId: "founder-surendranath", title: "CA Surendranath Reddy M, FCA, DISA", content: "Brings strong experience in statutory audits, bank audits, corporate governance, and internal control systems. His background includes working with banks and corporates on compliance frameworks and risk-based audit environments.", order: 8, isActive: true },
      { sectionId: "founder-lokesh", title: "CA MSS Lokesh, FCA, DISA", content: "Specialist in indirect taxation and regulatory compliance, with significant exposure to GST, customs, and business structuring advisory. He has advised businesses on optimizing tax structures while ensuring regulatory adherence.", order: 9, isActive: true },
      { sectionId: "founder-jyothi", title: "CA Jyothi K, FCA", content: "Experienced in SOX compliance, internal controls, risk assessment, and financial reporting. She has worked with leading MNCs including Grant Thornton, AIG, Accenture, and State Street, bringing global compliance exposure into advisory practice.", order: 10, isActive: true },
      { sectionId: "approach-point-1", content: "Strategic thinking with regulatory precision", order: 11, isActive: true },
      { sectionId: "approach-point-2", content: "Big-firm exposure with partner-level involvement", order: 12, isActive: true },
      { sectionId: "approach-point-3", content: "Compliance discipline with commercial practicality", order: 13, isActive: true },
    ],
  },
  {
    page: "contact",
    sections: [
      {
        sectionId: "header",
        title: "Contact Us",
        subtitle: "Get in touch with our experts for your business needs",
        order: 1,
        isActive: true,
      },
      { sectionId: "contact-overline", content: "Contact", order: 1, isActive: true },
      { sectionId: "contact-email", title: "Email", content: "hr@89TCA.in", order: 2, isActive: true },
      { sectionId: "contact-phone", title: "Phone", content: "+91 70195 57994", order: 3, isActive: true },
      { sectionId: "contact-address", title: "Registered Office", content: "No.226/400, Sapthagiri Arc, Block No.206,\n2nd Floor, Hoodi, Bangalore, Bangalore North,\nKarnataka, India - 560048", order: 4, isActive: true },
      { sectionId: "form", title: "Send us a message", buttonText: "Submit Request", order: 5, isActive: true },
      { sectionId: "form-name", title: "Full Name *", content: "Your full name", order: 6, isActive: true },
      { sectionId: "form-email", title: "Email *", content: "your@email.com", order: 7, isActive: true },
      { sectionId: "form-phone", title: "Phone Number *", content: "+91 98765 43210", order: 8, isActive: true },
      { sectionId: "form-service", title: "Service Interested In *", content: "Select a service\nStarting a Business\nSupport Services\nCompliances\nFunding\nAudits", order: 9, isActive: true },
      { sectionId: "form-message", title: "Message *", content: "Tell us about your requirements...", order: 10, isActive: true },
      {
        sectionId: "map",
        title: "Open in Maps",
        buttonLink: "https://maps.google.com/?q=Hoodi%2C%20Bangalore%20560048",
        imageUrl: "https://www.google.com/maps?q=Hoodi%2C%20Bangalore%20560048&output=embed",
        order: 11,
        isActive: true,
      },
    ],
  },
];
