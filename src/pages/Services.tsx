import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";
import { useServicesCatalog } from "@/hooks/useServicesCatalog";
import {
  Building2,
  Briefcase,
  Users,
  FileCheck,
  Receipt,
  ClipboardList,
  Calculator,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

const toSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const sectionIds: Record<string, string> = {
  "Starting a Business": "starting-business",
  "Support Services": "support-services",
  Compliances: "compliances",
  Funding: "funding",
  Audits: "audits",
};

const serviceCardClass =
  "card-hover group flex h-full flex-col p-5 transition-all duration-200 hover:-translate-y-0.5";

const lineClampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical" as const,
  WebkitLineClamp: 2,
  overflow: "hidden",
};

const sections = [
  {
    title: "Starting a Business",
    description:
      "Starting a business is one of the most significant decisions in an entrepreneur's life. India offers a robust legal framework with multiple entity types to suit every scale and nature of business. Choosing the right structure from day one ensures legal protection, tax efficiency, investor readiness, and long-term sustainability. At 89T Corporate Advisors, we guide you through every step of business formation and allied registrations.",
    items: [
      { label: "Private Limited Company", description: "Incorporation with ROC support and documentation.", icon: Building2 },
      { label: "Partnership", description: "Simple setup for partnership businesses.", icon: Users },
      { label: "LLP", description: "Flexible structure for professionals and founders.", icon: Briefcase },
      { label: "OPC Registration", description: "Single-owner company registration assistance.", icon: Building2 },
      { label: "Sole Proprietor", description: "Simple setup for individual-owned businesses with full control and minimal formalities.", icon: Users },
      { label: "Foreign Company Subsidiary", description: "India entry setup and regulatory guidance.", icon: Briefcase },
      { label: "NBFC", description: "Registration and compliance for NBFCs.", icon: Building2 },
      { label: "Trust/Societies", description: "Registration and compliance for NGOs.", icon: Users },
      { label: "Apartment Association", description: "Formation and compliance support for associations.", icon: Users },
    ],
  },
  {
    title: "Compliances",
    description: "Ensure your business stays compliant with regulatory requirements",
    items: [
      { label: "GST", description: "Registration, filings, and reconciliations.", icon: FileCheck },
      { label: "EPF & ESI", description: "Labour compliance and statutory filings.", icon: FileCheck },
      { label: "PT", description: "Professional tax registration and filing.", icon: ClipboardList },
      { label: "ITR & TDS", description: "Income tax returns and TDS filings.", icon: Receipt },
      { label: "MCA", description: "ROC filings and statutory updates.", icon: Building2 },
      { label: "ESI", description: "Employee state insurance compliance.", icon: FileCheck },
    ],
  },
  {
    title: "Support Services",
    description: "Efficient support solutions to manage and grow your business",
    items: [
      { label: "Book Keeping", description: "Maintain accurate financial records and reports.", icon: Calculator },
      { label: "Payroll", description: "Manage employee salaries and compliance.", icon: Users },
      { label: "MIS Reports", description: "Data-driven reports for business decisions.", icon: Receipt },
      { label: "Virtual Accountant", description: "Remote accounting support for businesses.", icon: Calculator },
      { label: "Virtual CFO", description: "Strategic financial planning and guidance.", icon: Briefcase },
      { label: "HR Services", description: "Complete HR support and compliance.", icon: Users },
    ],
  },
  {
    title: "Funding",
    items: [
      { label: "Startup Funding", description: "Fundraising readiness and documentation.", icon: PiggyBank },
      { label: "Due Diligence", description: "Financial and compliance review support.", icon: ShieldCheck },
      { label: "Valuation", description: "Business valuation for investors.", icon: Receipt },
      { label: "FDI Compliance", description: "Regulatory guidance for foreign investment.", icon: Building2 },
      { label: "Bank Finance", description: "Loan documentation and financial support.", icon: PiggyBank },
      { label: "Project Reports", description: "Detailed reports for lenders and investors.", icon: ClipboardList },
    ],
  },
  {
    title: "Audits",
    items: [
      { label: "Statutory Audits", description: "Audit execution with compliance focus.", icon: ShieldCheck },
      { label: "Income Tax Audit", description: "Tax audit preparation and reporting.", icon: Receipt },
      { label: "Internal Audits", description: "Risk review and control testing.", icon: ClipboardList },
      { label: "Transfer Pricing Audits", description: "TP documentation and review support.", icon: FileCheck },
      { label: "Investigation Audit", description: "Investigation audit coordination and reporting.", icon: ShieldCheck },
      { label: "Compliance Health Check", description: "Quick diagnostic on statutory filings.", icon: FileCheck },
    ],
  },
];

const Services = () => {
  const { getSectionValue } = usePageContent("services");
  const { getServiceBySlug } = useServicesCatalog();

  const pageTitle = getSectionValue("header", "title", "Our Services") as string;
  const pageIntro = getSectionValue("header", "content", "Comprehensive solutions for your business needs") as string;

  const renderItems = (sectionTitle: string, items: typeof sections[number]["items"]) =>
    items.map((item) => {
      const service = getServiceBySlug(toSlug(item.label));
      const Icon = item.icon;
      return (
        <Link
          key={item.label}
          to={`/services/${toSlug(item.label)}`}
          className={serviceCardClass}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
            {service?.title || item.label}
          </p>
          <p className="mt-1 text-xs text-muted-foreground text-justify" style={lineClampStyle}>
            {service?.shortDescription || item.description}
          </p>
        </Link>
      );
    });

  return (
    <Layout>
      <SEO
        title="Our Services | 89TCA"
        description="Comprehensive solutions for your business needs."
        keywords="business services, compliance, audits, funding, entity formation"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">{pageTitle}</h1>
            <p className="mt-4 text-base text-muted-foreground text-justify md:text-lg">
              {pageIntro}
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {sections.map((section) => {
              const sectionId = sectionIds[section.title] ?? toSlug(section.title);
              const sectionContent = getSectionValue(sectionId, "content", section.description || "") as string;
              const sectionHeading = getSectionValue(sectionId, "title", section.title) as string;

              return (
                <div key={section.title} id={sectionId} className="scroll-mt-24">
                  <div>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-semibold text-foreground">{sectionHeading}</h2>
                        {sectionContent ? (
                          <p className="mt-2 max-w-3xl text-sm text-muted-foreground text-justify">
                            {sectionContent}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className={`mt-5 grid gap-4 ${section.title === "Starting a Business" ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
                      {renderItems(section.title, section.items)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
