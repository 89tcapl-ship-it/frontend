import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
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
        description: "Quick setup for individual-owned businesses.",
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
        label: "Bank Audits",
        description: "Bank audit coordination and reporting.",
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
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
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
                      <p className="mt-2 text-sm text-muted-foreground">
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
                                <p className="mt-1 text-sm text-muted-foreground">
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
                                <p className="mt-1 text-sm text-muted-foreground">
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
                      <p className="mt-2 text-sm text-muted-foreground">
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
                            <p className="mt-1 text-sm text-muted-foreground">
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
                            <p className="mt-1 text-sm text-muted-foreground">
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
                          <p className="mt-1 text-xs text-muted-foreground">
                            {item.description}
                          </p>
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
