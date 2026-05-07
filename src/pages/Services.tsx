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

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.67a11.86 11.86 0 0 0 5.66 1.44h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.37-8.4Zm-8.46 18.28h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.22-3.75.99 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.22C2.17 6.42 6.45 2.14 11.98 2.14c2.68 0 5.2 1.04 7.08 2.92a9.7 9.7 0 0 1 2.92 6.83c0 5.53-4.28 9.87-9.92 9.87Zm5.74-7.84c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.47.14-.62.15-.15.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.34-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.39 4.75.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.11-.29-.18-.6-.34Z" />
  </svg>
);

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
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              );
            })}
          </div>

          <div className="mt-12">
            <div className="rounded-[28px] border border-border bg-gradient-to-r from-primary/10 via-white to-emerald-50 p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Need help choosing a service?
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    Talk to us on WhatsApp for quick guidance
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We can help you pick the right service and explain the next steps before you get started.
                  </p>
                </div>
                <a
                  href="https://wa.me/917019557994?text=Hi%2089TCA,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1fb85a]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

