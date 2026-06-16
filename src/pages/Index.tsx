import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";
import {
  Building2,
  FileCheck,
  Receipt,
  ClipboardList,
  Briefcase,
  Users,
  Calculator,
  BadgeCheck,
} from "lucide-react";

const startingBusiness = [
  {
    title: "Private Limited Company",
    description: "Structured incorporation with clear documentation.",
    icon: Building2,
  },
  {
    title: "LLP Registration",
    description: "Flexible entity setup with compliance support.",
    icon: Briefcase,
  },
  {
    title: "Partnership Firm",
    description: "Simple partnership registration and advisory.",
    icon: Users,
  },
  {
    title: "OPC Registration",
    description: "One-person company incorporation assistance.",
    icon: BadgeCheck,
  },
];

const taxCompliance = [
  {
    title: "GST",
    description: "Registration, filings, and compliance guidance.",
    icon: FileCheck,
  },
  {
    title: "Income Tax Filing",
    description: "Accurate returns for individuals and businesses.",
    icon: Receipt,
  },
  {
    title: "TDS Filing",
    description: "Timely deductions and quarterly filings.",
    icon: ClipboardList,
  },
  {
    title: "MCA Compliance",
    description: "ROC filings and statutory compliance tracking.",
    icon: Building2,
  },
];

const businessSupport = [
  {
    title: "Virtual Accountant",
    description: "Dedicated remote accounting support for books, reconciliations, and reporting.",
    icon: Calculator,
  },
  {
    title: "Book Keeping",
    description: "Monthly accounting with clean records.",
    icon: Calculator,
  },
  {
    title: "Payroll",
    description: "Salary processing and compliance support.",
    icon: Users,
  },
  {
    title: "Virtual CFO",
    description: "Financial oversight and strategic guidance.",
    icon: Briefcase,
  },
];

const whyChooseUs = [
  {
    title: "Experienced Chartered Accountants",
    icon: BadgeCheck,
  },
  {
    title: "End-to-end business support",
    icon: Users,
  },
  {
    title: "Trusted & compliant solutions",
    icon: ClipboardList,
  },
  {
    title: "Client-focused approach",
    icon: Briefcase,
  },
];

const serviceSlugs: Record<string, string> = {
  "Private Limited Company": "private-limited-company",
  "LLP Registration": "llp",
  "Partnership Firm": "partnership",
  "OPC Registration": "opc-registration",
  "Income Tax Filing": "itr-and-tds-compliance",
  "TDS Filing": "itr-and-tds-compliance",
  "GST": "gst",
  "MCA Compliance": "mca-compliance",
  "Book Keeping": "book-keeping",
  "Virtual Accountant": "virtual-accountant",
  "Payroll": "payroll",
  "Virtual CFO": "virtual-cfo",
};

const Index = () => {
  const { getSectionValue } = usePageContent("home");

  const heroTitle = getSectionValue("hero", "title", "End-to-End Finance and Compliance Support for Growing Businesses");
  const heroSubtitle = getSectionValue("hero", "subtitle", "Led by seasoned Chartered Accountants, 89TCA delivers structured solutions that empower businesses to operate efficiently and scale with confidence.");
  const heroContent = getSectionValue("hero", "content", "Trusted Chartered Accountants • 10 Years Experience • Serving Startups, SMEs & Enterprises Across India");
  const heroButtonText = getSectionValue("hero", "buttonText", "Get Started");
  const heroButtonLink = getSectionValue("hero", "buttonLink", "/contact");

  const servicesIntroTitle = getSectionValue("services-intro", "title", "Our Services");
  const servicesIntroContent = getSectionValue("services-intro", "content", "Explore tailored services across incorporation, compliance, and business support.");
  const businessSupportIntro = getSectionValue("business-support", "content", "Our flagship remote accounting service is built to help businesses stay financially organized without the overhead of a full-time hire.");
  const aboutTitle = getSectionValue("about", "title", "About 89TCA");
  const aboutContent = getSectionValue("about", "content", "Backed by 40+ years of combined experience, we provide expert advisory, audit, taxation, and compliance services.");
  const whyChooseUsTitle = getSectionValue("why-choose-us", "title", "Why Choose Us");
  const whyChooseUsSubtitle = getSectionValue("why-choose-us", "subtitle", "");
  const whyChooseUsContent = getSectionValue("why-choose-us", "content", "");
  const ctaTitle = getSectionValue("cta", "title", "Need help with your business compliance?");
  const ctaContent = getSectionValue("cta", "content", "Our team is ready to guide you through the next steps.");
  const ctaButtonText = getSectionValue("cta", "buttonText", "Contact Now");
  const ctaButtonLink = getSectionValue("cta", "buttonLink", "/contact");

  return (
    <Layout>
      <SEO
        title="89TCA | Chartered Accountants for Growing Businesses"
        description="89TCA provides professional tax, audit, and compliance services to help businesses grow with confidence."
        keywords="chartered accountant, compliance, GST, audits, business advisory"
      />

      <section className="bg-white">
        <div className="container-custom px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="mx-auto max-w-[1180px] text-center">
            <div className="mx-auto max-w-[1080px] pt-5 sm:pt-8 lg:pt-10">
              <h1 className="mx-auto max-w-[940px] text-3xl font-bold leading-[1.22] tracking-[-0.03em] text-foreground md:text-4xl lg:text-[2.7rem] xl:text-[2.85rem]">
                <span className="block pb-2">End-to-End Finance and Compliance</span>
                <span className="block">Support for Growing Businesses</span>
              </h1>
              <p className="mx-auto mt-8 max-w-[920px] text-base leading-[1.7] text-muted-foreground md:text-lg">
                Led by seasoned Chartered Accountants, 89TCA delivers structured solutions that empower businesses to operate efficiently and scale with confidence.
              </p>

              <div className="mx-auto mt-10 max-w-[1400px] rounded-full border border-slate-200 bg-[#f8fafc] px-8 py-4 text-center shadow-[0_1px_5px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-medium text-slate-700 md:text-base lg:text-[1.02rem]">
                  {heroContent}
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  to={heroButtonLink}
                  className="btn-primary h-12 min-w-[168px] inline-flex items-center justify-center text-center transition-transform hover:-translate-y-0.5"
                >
                  {heroButtonText}
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline h-12 min-w-[168px] inline-flex items-center justify-center text-center transition-transform hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{servicesIntroTitle}</h2>
            <p className="mt-3 text-muted-foreground">
              {servicesIntroContent}
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Starting a Business</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {startingBusiness.map((item) => (
                  <Link
                    key={item.title}
                    to={`/services/${serviceSlugs[item.title] ?? item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="card-hover group p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Tax & Compliance</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {taxCompliance.map((item) => (
                  <Link
                    key={item.title}
                    to={`/services/${serviceSlugs[item.title] ?? item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="card-hover group p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Business Support</h3>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                {businessSupportIntro}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {businessSupport.map((item) => (
                  <Link
                    key={item.title}
                    to={`/services/${serviceSlugs[item.title] ?? item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className={`card-hover group p-4 ${item.title === "Virtual Accountant" ? "ring-1 ring-primary/20 bg-primary/5 shadow-[0_8px_30px_rgba(37,99,235,0.08)]" : ""}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="btn-outline inline-flex"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-primary">About 89TCA</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{aboutTitle}</h2>
              <p className="mt-4 text-muted-foreground">
                {aboutContent}
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                to="/about"
                className="btn-outline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div>
            <p className="text-sm font-semibold text-primary">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{whyChooseUsTitle}</h2>
          </div>
          {whyChooseUsSubtitle ? <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{whyChooseUsSubtitle}</p> : null}
          {whyChooseUsContent ? <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{whyChooseUsContent}</p> : null}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="card-hover p-6 text-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-4 font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card-soft p-8 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                {ctaTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-justify">
                {ctaContent}
              </p>
            </div>
            <Link
              to={ctaButtonLink}
              className="btn-primary mt-6 inline-flex md:mt-0"
            >
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


