import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePublicServicesCatalog } from "@/hooks/usePublicServicesCatalog";
import {
  Building2,
  Briefcase,
  Users,
  Landmark,
  Home,
  Globe,
  ShieldCheck,
  FileBadge,
  Store,
  Factory,
  BadgeCheck,
  ClipboardList,
} from "lucide-react";

const entityFormation = [
  { title: "Private Limited Company", description: "Limited liability structure with stronger credibility for funding and growth.", icon: Building2, slug: "private-limited-company" },
  { title: "Partnership", description: "Shared ownership model with flexible management and pooled resources.", icon: Users, slug: "partnership" },
  { title: "LLP", description: "Partnership flexibility with limited liability and separate legal status.", icon: Briefcase, slug: "llp" },
  { title: "OPC Registration", description: "Single-owner company format with limited liability protection.", icon: Landmark, slug: "opc-registration" },
  { title: "Sole Proprietor", description: "Simple setup for individual-owned businesses with full control and minimal formalities.", icon: Users, slug: "sole-proprietor" },
  { title: "Foreign Company Subsidiary", description: "Indian subsidiary setup for foreign businesses entering India.", icon: Globe, slug: "foreign-company-subsidiary" },
  { title: "NBFC", description: "Regulated financial entity for lending and financial services.", icon: ShieldCheck, slug: "nbfc" },
  { title: "Trust/Societies", description: "Legal structure for non-profit, charitable, or social work.", icon: Home, slug: "trust-societies" },
  { title: "Apartment Association", description: "Registered association for managing residential communities.", icon: Home, slug: "apartment-association" },
];

const alliedRegistrations = [
  { title: "GST", description: "Registration, filing, and compliance support.", icon: FileBadge, slug: "gst" },
  { title: "Shops & Establishments", description: "State-level labor compliance for offices and shops.", icon: Store, slug: "shops-establishments" },
  { title: "EPF & ESI", description: "Employee welfare registrations and filings.", icon: BadgeCheck, slug: "epf-and-esi" },
  { title: "PT", description: "Professional tax registration and remittance.", icon: ClipboardList, slug: "pt" },
  { title: "Trade License", description: "Municipal approval to operate a business.", icon: Store, slug: "trade-license" },
  { title: "FSSAI", description: "Food safety license for food businesses.", icon: BadgeCheck, slug: "fssai" },
  { title: "IEC", description: "Import-export registration for global trade.", icon: Factory, slug: "iec" },
  { title: "MSME / UDYAM", description: "Udyam registration for MSME benefits.", icon: FileBadge, slug: "msme-udyam" },
  { title: "DPIIT / StartUp India Registration", description: "Recognition under the Startup India initiative for eligible startups with tax, regulatory, and funding benefits.", icon: BadgeCheck, slug: "dpiit-startup-india" },
];

const StartingBusiness = () => {
  const { getServiceBySlug } = usePublicServicesCatalog();

  const renderServiceCard = (item: typeof entityFormation[number], compact = false) => {
    const service = getServiceBySlug(item.slug);
    const displayTitle = service?.title || item.title;
    const displayDescription = service?.shortDescription || item.description;

    return compact ? (
      <Link
        key={item.slug}
        to={`/services/${item.slug}`}
        className="group block cursor-pointer rounded-xl border border-border bg-white px-4 py-4 transition-shadow hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <item.icon className="h-4 w-4 text-primary" />
          </span>
          <p className="text-sm font-semibold text-foreground">{displayTitle}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{displayDescription}</p>
        <span className="mt-3 inline-flex text-sm font-semibold text-primary">Learn More &rarr;</span>
      </Link>
    ) : (
      <Link
        key={item.slug}
        to={`/services/${item.slug}`}
        className="card-hover group block cursor-pointer p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <item.icon className="h-5 w-5 text-primary" />
        </div>
        <p className="mt-4 text-sm font-semibold text-foreground">{displayTitle}</p>
        <p
          className="mt-2 text-sm text-muted-foreground"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          {displayDescription}
        </p>
        <span className="mt-3 inline-flex text-sm font-semibold text-primary">Learn More &rarr;</span>
      </Link>
    );
  };

  return (
    <Layout>
      <SEO
        title="Starting a Business | 89TCA"
        description="Complete support to start and register your business in India"
        keywords="starting a business, entity formation, allied registrations"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Starting a Business</h1>
            <p className="mt-4 text-base text-muted-foreground text-justify md:text-lg">
              Starting a business is one of the most significant decisions in an entrepreneur's life. India offers a robust legal framework with multiple entity types to suit every scale and nature of business. Choosing the right structure from day one ensures legal protection, tax efficiency, investor readiness, and long-term sustainability. At 89T Corporate Advisors, we guide you through every step of business formation and allied registrations.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Entity Formation</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {entityFormation.map((item) => renderServiceCard(item))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">Allied Registrations</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {alliedRegistrations.map((item) => renderServiceCard(item, true))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartingBusiness;
