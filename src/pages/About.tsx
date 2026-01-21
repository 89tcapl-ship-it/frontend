import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { User, Target, Eye, Building } from "lucide-react";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";
import { Skeleton } from "@/components/ui/skeleton";
import { getSectionContent, getSectionTitle } from "@/hooks/usePageContent";

const leaders = [
  {
    name: "Mahitha Nasolla",
    role: "Director (Promoter)",
    bio: "Leads strategic advisory and compliance operations with a growth-oriented consulting mindset.",
  },
  {
    name: "Varalakshmi Macharam",
    role: "Director (Promoter)",
    bio: "Drives process excellence, documentation governance and client success across services.",
  },
];

const companyInfo = [
  { label: "Legal Name", value: "89T CORPORATE ADVISORS PRIVATE LIMITED" },
  { label: "CIN", value: "U69201KA2025PTC213011" },
  { label: "ROC", value: "ROC Bangalore" },
  { label: "Status", value: "Active" },
  { label: "Registered Office", value: "No.226/400, Sapthagiri Arc, Block No.206, 2nd Floor, Hoodi, Bangalore, Bangalore North, Karnataka, India - 560048" },
];

const About = () => {
  const { content: pageContent, loading } = usePageContent('about');

  return (
    <Layout>
      <SEO
        title="About Us | 89T Corporate Advisors - Your Trusted Business Partner"
        description="Learn about 89T Corporate Advisors, a compliance-focused corporate advisory firm in Bangalore. Meet our team and discover our mission to simplify business operations for startups and SMEs."
        keywords="about 89T, corporate advisors Bangalore, business advisory team, company profile, CIN U69201KA2025PTC213011"
      />
      <PageHero
        title="About Us"
        subtitle="A compliance-focused corporate advisory firm supporting startups and growing businesses."
        pageName="about"
      />

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-48 mb-6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {getSectionTitle(pageContent, 'intro') || 'Our Story'}
                </h2>
                <div className="space-y-4 text-muted-foreground whitespace-pre-line">
                  {getSectionContent(pageContent, 'intro') || (
                    <>
                      <p>
                        89T Corporate Advisors Pvt. Ltd. is a registered Private Limited Company under ROC Bangalore.
                      </p>
                      <p>
                        We support businesses with corporate registrations, statutory compliance, taxation support and advisory services.
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading ? (
              <>
                <div className="p-8 rounded-xl bg-card border border-border space-y-4">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="p-8 rounded-xl bg-card border border-border space-y-4">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </>
            ) : (
              <>
                <div className="p-8 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {getSectionTitle(pageContent, 'mission') || 'Our Mission'}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {getSectionContent(pageContent, 'mission') || 'To simplify business operations by enabling systematic, compliance-first advisory and filings.'}
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {getSectionTitle(pageContent, 'values') || 'Our Vision'}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {getSectionContent(pageContent, 'values') || 'To be a reliable one-stop corporate advisory partner for startups and SMEs across India.'}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {leader.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Company Information
            </h2>
          </div>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {companyInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col md:flex-row md:items-center p-4 md:p-6"
                >
                  <span className="text-sm font-medium text-muted-foreground md:w-1/4 mb-1 md:mb-0">
                    {item.label}
                  </span>
                  <span className="text-foreground md:w-3/4">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to work with us?"
        subheadline="Get in touch to discuss your business compliance needs."
        ctaLabel="Contact Us"
        ctaTarget="/contact"
      />
    </Layout>
  );
};

export default About;
