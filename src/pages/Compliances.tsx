import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { BadgeCheck, ClipboardList, FileText, ShieldCheck } from "lucide-react";

const taxCompliances = [
  {
    title: "GST",
    description: "Registration, filing, and compliance support.",
    icon: BadgeCheck,
    slug: "gst",
  },
  {
    title: "ITR & TDS",
    description: "Accurate income tax returns and TDS filings.",
    icon: FileText,
    slug: "itr-and-tds",
  },
];

const regulatoryCompliances = [
  {
    title: "EPF",
    description: "Employee provident fund compliance and filings.",
    icon: ShieldCheck,
    slug: "epf",
  },
  {
    title: "ESI",
    description: "Employee state insurance registration and compliance.",
    icon: ShieldCheck,
    slug: "esi",
  },
  {
    title: "PT",
    description: "Professional tax registration and filings.",
    icon: ClipboardList,
    slug: "pt",
  },
  {
    title: "MCA",
    description: "ROC filings and corporate compliance tracking.",
    icon: FileText,
    slug: "mca",
  },
];

const Compliances = () => {
  return (
    <Layout>
      <SEO
        title="Compliances | 89TCA"
        description="Ensure your business stays compliant with regulatory requirements"
        keywords="compliances, gst, epf, esi, mca"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
              Compliances
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Ensure your business stays compliant with regulatory requirements
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Tax Compliances</p>
              <div className="mt-5 space-y-4">
                {taxCompliances.map((item) => (
                  <a
                    key={item.title}
                    href={`/services/${item.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4 transition-shadow hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="mt-2 inline-flex text-sm font-semibold text-primary">
                        Learn More &rarr;
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Regulatory Compliances</p>
              <div className="mt-5 space-y-4">
                {regulatoryCompliances.map((item) => (
                  <a
                    key={item.title}
                    href={`/services/${item.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4 transition-shadow hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="mt-2 inline-flex text-sm font-semibold text-primary">
                        Learn More &rarr;
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Compliances;



