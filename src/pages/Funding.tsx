import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { Banknote, ClipboardList, PiggyBank, ShieldCheck } from "lucide-react";

const fundingServices = [
  {
    title: "Startup Funding",
    description: "Capital raising support for growth-stage businesses.",
    icon: PiggyBank,
    slug: "startup-funding",
  },
  {
    title: "Due Diligence",
    description: "Financial and compliance review support.",
    icon: ShieldCheck,
    slug: "due-diligence",
  },
  {
    title: "Valuation",
    description: "Business valuation for investors and stakeholders.",
    icon: Banknote,
    slug: "valuation",
  },
  {
    title: "FDI Compliance",
    description: "Regulatory guidance for foreign investment.",
    icon: ShieldCheck,
    slug: "fdi-compliance",
  },
  {
    title: "Bank Finance",
    description: "Loan documentation and finance support.",
    icon: Banknote,
    slug: "bank-finance",
  },
  {
    title: "Project Reports",
    description: "Detailed reports for lenders and investors.",
    icon: ClipboardList,
    slug: "project-reports",
  },
];

const Funding = () => {
  return (
    <Layout>
      <SEO
        title="Funding | 89TCA"
        description="Funding support to help you grow your business"
        keywords="funding, startup funding, valuation, due diligence"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
              Funding
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Funding support to help you grow your business
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fundingServices.map((item) => (
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
                <p className="mt-2 text-sm text-muted-foreground">
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

export default Funding;
