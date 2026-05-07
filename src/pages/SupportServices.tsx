import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";
import { useServicesCatalog } from "@/hooks/useServicesCatalog";
import { Briefcase, ClipboardList, FileText, Users } from "lucide-react";

const leftColumn = [
  { title: "Book Keeping", description: "Maintain accurate financial records and reports.", icon: FileText, slug: "book-keeping" },
  { title: "Virtual Accountant", description: "Remote accounting support for businesses.", icon: ClipboardList, slug: "virtual-accountant" },
  { title: "Virtual CFO", description: "Strategic financial planning and guidance.", icon: Briefcase, slug: "virtual-cfo" },
];

const rightColumn = [
  { title: "Payroll", description: "Manage employee salaries and compliance.", icon: Users, slug: "payroll" },
  { title: "MIS Reports", description: "Data-driven reports for decision making.", icon: FileText, slug: "mis-reports" },
  { title: "HR Services", description: "Complete HR support and compliance.", icon: Users, slug: "hr-services" },
];

const SupportServices = () => {
  const { getSectionValue } = usePageContent("support-services");
  const { getServiceBySlug } = useServicesCatalog();

  const title = getSectionValue("header", "title", "Support Services") as string;
  const subtitle = getSectionValue("header", "content", "Efficient solutions to manage your business operations") as string;

  const renderCard = (item: typeof leftColumn[number]) => {
    const service = getServiceBySlug(item.slug);
    const displayTitle = service?.title || item.title;
    const displayDescription = service?.shortDescription || item.description;

    return (
      <a
        key={item.slug}
        href={`/services/${item.slug}`}
        className="group block rounded-2xl border border-border bg-white/80 p-5 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <item.icon className="h-4 w-4 text-primary" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{displayTitle}</p>
            <p className="mt-1 text-sm text-muted-foreground text-justify">{displayDescription}</p>
            <span className="mt-2 inline-flex text-sm font-semibold text-primary">Learn More &rarr;</span>
          </div>
        </div>
      </a>
    );
  };

  return (
    <Layout>
      <SEO
        title="Support Services | 89TCA"
        description="Efficient solutions to manage your business operations"
        keywords="support services, bookkeeping, payroll, virtual cfo"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">{title}</h1>
            <p className="mt-4 text-base text-muted-foreground text-justify md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[leftColumn, rightColumn].map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-5">
                {column.map((item) => renderCard(item))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportServices;
