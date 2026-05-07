import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";
import { useServicesCatalog } from "@/hooks/useServicesCatalog";
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
    slug: "private-limited-company",
    fallbackTitle: "Private Limited Company",
    fallbackDescription: "Structured incorporation with clear documentation.",
    icon: Building2,
  },
  {
    slug: "llp",
    fallbackTitle: "LLP Registration",
    fallbackDescription: "Flexible entity setup with compliance support.",
    icon: Briefcase,
  },
  {
    slug: "partnership",
    fallbackTitle: "Partnership Firm",
    fallbackDescription: "Simple partnership registration and advisory.",
    icon: Users,
  },
  {
    slug: "opc-registration",
    fallbackTitle: "OPC Registration",
    fallbackDescription: "One-person company incorporation assistance.",
    icon: BadgeCheck,
  },
];

const taxCompliance = [
  {
    slug: "gst",
    fallbackTitle: "GST",
    fallbackDescription: "Registration, filings, and compliance guidance.",
    icon: FileCheck,
  },
  {
    slug: "itr-and-tds",
    fallbackTitle: "Income Tax Filing",
    fallbackDescription: "Accurate returns for individuals and businesses.",
    icon: Receipt,
  },
  {
    slug: "tds-filing",
    fallbackTitle: "TDS Filing",
    fallbackDescription: "Timely deductions and quarterly filings.",
    icon: ClipboardList,
  },
  {
    slug: "mca",
    fallbackTitle: "MCA Compliance",
    fallbackDescription: "ROC filings and statutory compliance tracking.",
    icon: Building2,
  },
];

const businessSupport = [
  {
    slug: "virtual-accountant",
    fallbackTitle: "Virtual Accountant",
    fallbackDescription:
      "Dedicated remote accounting support for books, reconciliations, and reporting.",
    icon: Calculator,
  },
  {
    slug: "book-keeping",
    fallbackTitle: "Book Keeping",
    fallbackDescription: "Monthly accounting with clean records.",
    icon: Calculator,
  },
  {
    slug: "payroll",
    fallbackTitle: "Payroll",
    fallbackDescription: "Salary processing and compliance support.",
    icon: Users,
  },
  {
    slug: "virtual-cfo",
    fallbackTitle: "Virtual CFO",
    fallbackDescription: "Financial oversight and strategic guidance.",
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

const sectionValue = (
  getSectionValue: ReturnType<typeof usePageContent>["getSectionValue"],
  sectionId: string,
  field: "title" | "subtitle" | "content" | "buttonText" | "buttonLink" | "imageUrl",
  defaultValue: string
) => getSectionValue(sectionId, field, defaultValue) as string;

const Index = () => {
  const { getSectionValue } = usePageContent("home");
  const { getServiceBySlug } = useServicesCatalog();

  const heroTitle = sectionValue(
    getSectionValue,
    "hero",
    "title",
    "End-to-End Finance and Compliance Support for Growing Businesses"
  );
  const heroSubtitle = sectionValue(
    getSectionValue,
    "hero",
    "subtitle",
    "Led by seasoned Chartered Accountants, 89TCA delivers structured solutions that empower businesses to operate efficiently and scale with confidence."
  );
  const heroContent = sectionValue(
    getSectionValue,
    "hero",
    "content",
    "Trusted Chartered Accountants • 10 Years Experience • Serving Startups, SMEs & Enterprises Across India"
  );
  const heroButtonText = sectionValue(getSectionValue, "hero", "buttonText", "Get Started");
  const heroButtonLink = sectionValue(getSectionValue, "hero", "buttonLink", "/contact");

  const servicesTitle = sectionValue(getSectionValue, "services-intro", "title", "Our Services");
  const servicesIntro = sectionValue(
    getSectionValue,
    "services-intro",
    "content",
    "Explore tailored services across incorporation, compliance, and business support."
  );

  const aboutTitle = sectionValue(getSectionValue, "about", "title", "About 89TCA");
  const aboutContent = sectionValue(
    getSectionValue,
    "about",
    "content",
    "Backed by 40+ years of combined experience, we provide expert advisory, audit, taxation, and compliance services."
  );

  const whyChooseTitle = sectionValue(getSectionValue, "why-choose-us", "title", "Why Choose Us");

  const ctaTitle = sectionValue(
    getSectionValue,
    "cta",
    "title",
    "Need help with your business compliance?"
  );
  const ctaContent = sectionValue(
    getSectionValue,
    "cta",
    "content",
    "Our team is ready to guide you through the next steps."
  );
  const ctaButtonText = sectionValue(getSectionValue, "cta", "buttonText", "Contact Now");
  const ctaButtonLink = sectionValue(getSectionValue, "cta", "buttonLink", "/contact");

  const renderServiceCard = (item: typeof startingBusiness[number]) => {
    const service = getServiceBySlug(item.slug);
    const title = service?.title || item.fallbackTitle;
    const description = service?.shortDescription || item.fallbackDescription;
    return (
      <Link
        key={item.slug}
        to={`/services/${item.slug}`}
        className="card-hover group p-4"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <item.icon className="h-5 w-5 text-primary" />
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
          {title}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {description}
        </p>
      </Link>
    );
  };

  return (
    <Layout>
      <SEO
        title="89TCA | Chartered Accountants for Growing Businesses"
        description="89TCA provides professional tax, audit, and compliance services to help businesses grow with confidence."
        keywords="chartered accountant, compliance, GST, audits, business advisory"
      />

      <section className="bg-white">
        <div className="container-custom px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1200px] text-center">
            <div className="mx-auto max-w-[1100px] pt-4 sm:pt-6 lg:pt-8">
              <h1 className="mx-auto max-w-[980px] text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] xl:text-[2.9rem]">
                {heroTitle}
              </h1>
              <p className="mx-auto mt-6 max-w-[980px] text-base leading-[1.6] text-muted-foreground md:text-lg">
                {heroSubtitle}
              </p>

              <div className="mx-auto mt-7 max-w-[1400px] rounded-full border border-slate-200 bg-[#f8fafc] px-6 py-4 text-center shadow-[0_1px_5px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-medium text-slate-700 md:text-base lg:text-[1.02rem]">
                  {heroContent}
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
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
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{servicesTitle}</h2>
            <p className="mt-3 text-muted-foreground">{servicesIntro}</p>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Starting a Business</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {startingBusiness.map(renderServiceCard)}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Tax & Compliance</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {taxCompliance.map((item) => {
                  const service = getServiceBySlug(item.slug);
                  const title = service?.title || item.fallbackTitle;
                  const description = service?.shortDescription || item.fallbackDescription;
                  return (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      className="card-hover group p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                        {title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Business Support</h3>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                {sectionValue(
                  getSectionValue,
                  "business-support",
                  "content",
                  "Our flagship remote accounting service is built to help businesses stay financially organized without the overhead of a full-time hire."
                )}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {businessSupport.map((item) => {
                  const service = getServiceBySlug(item.slug);
                  const title = service?.title || item.fallbackTitle;
                  const description = service?.shortDescription || item.fallbackDescription;
                  return (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      className={`card-hover group p-4 ${item.slug === "virtual-accountant" ? "ring-1 ring-primary/20 bg-primary/5 shadow-[0_8px_30px_rgba(37,99,235,0.08)]" : ""}`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                        {title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link to="/services" className="btn-outline inline-flex">
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
              <p className="mt-4 text-muted-foreground">{aboutContent}</p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link to="/about" className="btn-outline">
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
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{whyChooseTitle}</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card-hover p-6 text-sm">
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
            <Link to={ctaButtonLink} className="btn-primary mt-6 inline-flex md:mt-0">
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
