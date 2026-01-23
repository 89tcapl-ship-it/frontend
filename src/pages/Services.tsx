import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/lib/api";
import { SEO } from "@/hooks/useSEO";
import { Skeleton } from "@/components/ui/skeleton";

interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  features: string[];
  isActive: boolean;
  order: number;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response: any = await api.get('/services');
        // Only show active services, sorted by order
        const activeServices = response.data
          .filter((s: Service) => s.isActive)
          .sort((a: Service, b: Service) => a.order - b.order);
        setServices(activeServices);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Layout>
      <SEO
        title="Our Services | Company Registration, MCA Compliance, GST & Tax Services"
        description="Comprehensive corporate services including company registration, MCA compliance, GST services, income tax filing, accounting, and business advisory for startups and growing businesses."
        keywords="company registration services, MCA compliance services, GST registration, income tax filing, business advisory, accounting services, ROC filing, startup services"
      />
      <PageHero
        title="Our Services"
        subtitle="Structured, reliable and compliance-led business services."
        pageName="services"
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 md:p-8 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-4 mb-6">
                    <Skeleton className="w-12 h-12 rounded-lg" />
                    <Skeleton className="h-8 w-48" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service._id}
                  className="p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-elevated transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                  )}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline group"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        headline="Not sure what service you need?"
        subheadline="Book a quick call with our advisor and get a clear action plan."
        ctaLabel="Book Consultation"
        ctaTarget="/contact"
      />
    </Layout >
  );
};

export default Services;
