import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import serviceDetailData from "@/data/serviceDetailData";
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
  CheckCircle2,
} from "lucide-react";

const toSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const detailSlugMap: Record<string, string[]> = {
  "Starting a Business::Private Limited Company": ["private-limited-company"],
  "Starting a Business::Partnership": ["partnership"],
  "Starting a Business::LLP": ["llp"],
  "Starting a Business::OPC Registration": ["opc-registration"],
  "Starting a Business::Sole Proprietor": ["sole-proprietor"],
  "Starting a Business::Foreign Company Subsidiary": ["foreign-company-subsidiary"],
  "Starting a Business::NBFC": ["nbfc"],
  "Starting a Business::Trust/Societies": ["trust-societies"],
  "Starting a Business::Apartment Association": ["apartment-association"],
  "Compliances::GST": ["gst-compliance", "gst"],
  "Compliances::EPF & ESI": ["epf-compliance", "esi-compliance", "epf-esi"],
  "Compliances::PT": ["pt-compliance", "pt"],
  "Compliances::ITR & TDS": ["itr-and-tds-compliance"],
  "Compliances::MCA": ["mca-compliance"],
  "Compliances::ESI": ["esi-compliance"],
  "Funding::Due Diligence": ["due-diligence"],
  "Funding::Valuation": ["valuation"],
  "Funding::Startup Funding": ["startup-funding"],
  "Funding::FDI Compliance": ["fdi-compliance"],
  "Funding::Bank Finance": ["bank-finance"],
  "Funding::Project Reports": ["project-reports"],
  "Audits::Statutory Audits": ["statutory-audits"],
  "Audits::Income Tax Audit": ["income-tax-audit"],
  "Audits::Internal Audits": ["internal-audits"],
  "Audits::Transfer Pricing Audits": ["transfer-pricing-audits"],
  "Audits::Investigation Audit": ["investigation-audit"],
  "Audits::Compliance Health Check": ["compliance-health-check"],
};

const hasNonCompliance = (sectionTitle: string, label: string) => {
  const slugs = detailSlugMap[`${sectionTitle}::${label}`] ?? [toSlug(label)];
  return slugs.some(
    (slug) =>
      (serviceDetailData as Record<string, { nonComplianceRisks?: string[] }>)[slug]?.nonComplianceRisks?.length
  );
};

const sectionIds: Record<string, string> = {
  "Starting a Business": "starting-business",
  "Support Services": "support-services",
  Compliances: "compliances",
  Funding: "funding",
  Audits: "audits",
};

const sections = [
  {
    title: "Starting a Business",
    description:
      "Starting a business is one of the most significant decisions in an entrepreneur's life. India offers a robust legal framework with multiple entity types to suit every scale and nature of business. Choosing the right structure from day one ensures legal protection, tax efficiency, investor readiness, and long-term sustainability. At 89T Corporate Advisors, we guide you through every step of business formation and allied registrations.",
    items: [
      {
        label: "Private Limited Company",
        description: "Incorporation with ROC support and documentation.",
        icon: Building2,
      },
      {
        label: "Partnership",
        description: "Simple setup for partnership businesses.",
        icon: Users,
      },
      {
        label: "LLP",
        description: "Flexible structure for professionals and founders.",
        icon: Briefcase,
      },
      {
        label: "OPC Registration",
        description: "Single-owner company registration assistance.",
        icon: Building2,
      },
      {
        label: "Sole Proprietor",
        description:
          "A Sole Proprietorship is the simplest and most common form of business in India, ideal for individual entrepreneurs who want full control over their operations. The business and the owner are legally the same entity — the owner personally owns all assets and is personally liable for all debts and obligations. No separate legal entity registration is required; however, registrations such as GST, trade licence, or Shops & Establishments are typically needed to establish business identity. Sole proprietorships are easy to set up, have minimal compliance requirements, and offer complete decision-making authority to the owner. Well-suited for freelancers, small traders, home-based businesses, and service providers who are starting out. Business income is treated as the personal income of the proprietor and taxed at individual slab rates, making returns simpler to file.",
        icon: Users,
      },
      {
        label: "Foreign Company Subsidiary",
        description: "India entry setup and regulatory guidance.",
        icon: Briefcase,
      },
      {
        label: "NBFC",
        description: "Registration and compliance for NBFCs.",
        icon: Building2,
      },
      {
        label: "Trust/Societies",
        description: "Registration and compliance for NGOs.",
        icon: Users,
      },
      {
        label: "Apartment Association",
        description: "Formation and compliance support for associations.",
        icon: Users,
      },
    ],
  },
  {
    title: "Compliances",
    description:
      "Ensure your business stays compliant with regulatory requirements",
    taxItems: [
      {
        label: "GST",
        description: "GST registration, filing, and compliance support.",
      },
      {
        label: "ITR & TDS",
        description: "Accurate income tax returns and TDS filings.",
      },
    ],
    regulatoryItems: [
      {
        label: "EPF",
        description: "Employee provident fund compliance and filings.",
      },
      {
        label: "ESI",
        description: "Employee state insurance registration and compliance.",
      },
      {
        label: "PT",
        description: "Professional tax registration and filings.",
      },
      {
        label: "MCA",
        description: "ROC filings and corporate compliance tracking.",
      },
    ],
    items: [
      {
        label: "GST",
        description: "Registration, filings, and reconciliations.",
        icon: FileCheck,
      },
      {
        label: "EPF & ESI",
        description: "Labour compliance and statutory filings.",
        icon: FileCheck,
      },
      {
        label: "PT",
        description: "Professional tax registration and filing.",
        icon: ClipboardList,
      },
      {
        label: "ITR & TDS",
        description: "Income tax returns and TDS filings.",
        icon: Receipt,
      },
      {
        label: "MCA",
        description: "ROC filings and statutory updates.",
        icon: Building2,
      },
      {
        label: "ESI",
        description: "Employee state insurance compliance.",
        icon: FileCheck,
      },
    ],
  },
  {
    title: "Support Services",
    description:
      "Efficient support solutions to manage and grow your business",
    items: [
      {
        label: "Book Keeping",
        description: "Maintain accurate financial records and reports.",
        icon: Calculator,
      },
      {
        label: "Payroll",
        description: "Manage employee salaries and compliance.",
        icon: Users,
      },
      {
        label: "MIS Reports",
        description: "Data-driven reports for business decisions.",
        icon: Receipt,
      },
      {
        label: "Virtual Accountant",
        description: "Remote accounting support for businesses.",
        icon: Calculator,
      },
      {
        label: "Virtual CFO",
        description: "Strategic financial planning and guidance.",
        icon: Briefcase,
      },
      {
        label: "HR Services",
        description: "Complete HR support and compliance.",
        icon: Users,
      },
    ],
  },
  {
    title: "Funding",
    items: [
      {
        label: "Startup Funding",
        description: "Fundraising readiness and documentation.",
        icon: PiggyBank,
      },
      {
        label: "Due Diligence",
        description: "Financial and compliance review support.",
        icon: ShieldCheck,
      },
      {
        label: "Valuation",
        description: "Business valuation for investors.",
        icon: Receipt,
      },
      {
        label: "FDI Compliance",
        description: "Regulatory guidance for foreign investment.",
        icon: Building2,
      },
      {
        label: "Bank Finance",
        description: "Loan documentation and financial support.",
        icon: PiggyBank,
      },
      {
        label: "Project Reports",
        description: "Detailed reports for lenders and investors.",
        icon: ClipboardList,
      },
    ],
  },
  {
    title: "Audits",
    items: [
      {
        label: "Statutory Audits",
        description: "Audit execution with compliance focus.",
        icon: ShieldCheck,
      },
      {
        label: "Income Tax Audit",
        description: "Tax audit preparation and reporting.",
        icon: Receipt,
      },
      {
        label: "Internal Audits",
        description: "Risk review and control testing.",
        icon: ClipboardList,
      },
      {
        label: "Transfer Pricing Audits",
        description: "TP documentation and review support.",
        icon: FileCheck,
      },
      {
        label: "Investigation Audit",
        description: "Investigation audit coordination and reporting.",
        icon: ShieldCheck,
      },
      {
        label: "Compliance Health Check",
        description: "Quick diagnostic on statutory filings.",
        icon: FileCheck,
      },
    ],
  },
];

const Services = () => {
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
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-base text-muted-foreground text-justify md:text-lg">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {sections.map((section) => {
              const sectionId = sectionIds[section.title] ?? toSlug(section.title);
              return (
                <div
                  key={section.title}
                  id={sectionId}
                  className="scroll-mt-24"
                >
                {section.title === "Compliances" ? (
                  <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm sm:p-8">
                    <div>
                      <p className="text-sm font-semibold text-primary">Compliances</p>
                      <h2 className="mt-2 text-2xl font-semibold text-foreground">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground text-justify">
                        {section.description}
                      </p>
                    </div>
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div className="rounded-xl border border-border bg-background/60 p-5">
                        <p className="text-sm font-semibold text-foreground">
                          Tax Compliances
                        </p>
                        <div className="mt-4 space-y-4">
                          {section.taxItems?.map((item) => (
                            <div key={item.label} className="flex items-start gap-3">
                              <span className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                              <div>
                                <p className="text-sm font-semibold text-foreground">
                                  {item.label}
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground text-justify">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-background/60 p-5">
                        <p className="text-sm font-semibold text-foreground">
                          Regulatory Compliances
                        </p>
                        <div className="mt-4 space-y-4">
                          {section.regulatoryItems?.map((item) => (
                            <div key={item.label} className="flex items-start gap-3">
                              <span className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                              <div>
                                <p className="text-sm font-semibold text-foreground">
                                  {item.label}
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground text-justify">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : section.title === "Support Services" ? (
                  <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm sm:p-8">
                    <div>
                      <p className="text-sm font-semibold text-primary">Support Services</p>
                      <h2 className="mt-2 text-2xl font-semibold text-foreground">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground text-justify">
                        {section.description}
                      </p>
                    </div>
                    <div className="mt-8 grid gap-8 lg:grid-cols-2">
                      <div className="space-y-5">
                        {section.items.slice(0, 3).map((item, index) => (
                          <div
                            key={item.label}
                            className={index === 2 ? "pb-0" : "border-b border-border pb-5"}
                          >
                            <p className="text-sm font-semibold text-foreground">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground text-justify">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-5">
                        {section.items.slice(3).map((item, index) => (
                          <div
                            key={item.label}
                            className={index === 2 ? "pb-0" : "border-b border-border pb-5"}
                          >
                            <p className="text-sm font-semibold text-foreground">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground text-justify">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    {section.description ? (
                      <p className="mt-2 max-w-3xl text-sm text-muted-foreground text-justify">
                        {section.description}
                      </p>
                    ) : null}
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          to={`/services/${toSlug(item.label)}`}
                          className="card-hover group p-4"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground text-justify">
                            {item.description}
                          </p>
                          {hasNonCompliance(section.title, item.label) ? (
                            <span className="mt-3 inline-flex rounded-full bg-rose-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                              Non-Compliance Included
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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


