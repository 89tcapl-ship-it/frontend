import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { useMemo } from "react";
import { usePublicServicesCatalog } from "@/hooks/usePublicServicesCatalog";

export function ServicesPreview() {
  const { services } = usePublicServicesCatalog();

  const previewServices = useMemo(
    () => services.slice(0, 6),
    [services]
  );

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Core Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive business services designed to help startups and growing companies stay compliant and thrive.
          </p>
        </div>

        {previewServices.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No services available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((service, index) => (
              <Link
                key={service.slug || service.title}
                to={service.slug ? `/services/${service.slug}` : "/services"}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
