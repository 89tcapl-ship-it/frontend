import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { CheckCircle2, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";

const auditServices = [
  {
    title: "Statutory Audits",
    description: "Audit execution with compliance focus.",
    icon: ShieldCheck,
    slug: "statutory-audits",
  },
  {
    title: "Income Tax Audit",
    description: "Tax audit preparation and reporting.",
    icon: FileText,
    slug: "income-tax-audit",
  },
  {
    title: "Internal Audits",
    description: "Risk review and control testing.",
    icon: ClipboardCheck,
    slug: "internal-audits",
  },
  {
    title: "Transfer Pricing Audits",
    description: "TP documentation and review support.",
    icon: FileText,
    slug: "transfer-pricing-audits",
  },
  {
    title: "Investigation Audit",
    description: "Investigation audit coordination and reporting.",
    icon: ShieldCheck,
    slug: "investigation-audit",
  },
  {
    title: "Compliance Health Check",
    description: "Quick diagnostic on statutory filings.",
    icon: CheckCircle2,
    slug: "compliance-health-check",
  },
];

const Audits = () => {
  return (
    <Layout>
      <SEO
        title="Audits | 89TCA"
        description="Audit support to keep your business compliant"
        keywords="audits, statutory audit, internal audit, investigation audit"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
              Audits
            </h1>
            <p className="mt-4 text-base text-muted-foreground text-justify md:text-lg">
              Audit support to keep your business compliant
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {auditServices.map((item) => (
              <a
                key={item.title}
                href={`/services/${item.slug}`}
                className="group rounded-2xl border border-border bg-white/80 p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground text-justify">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex text-sm font-semibold text-primary">
                  Learn More &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audits;




