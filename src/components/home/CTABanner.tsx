import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaTarget?: string;
}

export function CTABanner({ headline, subheadline, ctaLabel, ctaTarget }: CTABannerProps) {
  const { getSectionValue, loading } = usePageContent('home');

  const title = headline || getSectionValue('cta', 'title', 'Ready to get started?');
  const subtitle = subheadline || getSectionValue('cta', 'subtitle', 'Let us handle your compliance while you focus on growth');
  const buttonText = ctaLabel || getSectionValue('cta', 'buttonText', 'Contact Us Today');
  const buttonLink = ctaTarget || getSectionValue('cta', 'buttonLink', '/contact');

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/80">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {loading ? (
            <>
              <div className="h-10 w-96 bg-primary-foreground/20 animate-pulse rounded mx-auto mb-4" />
              <div className="h-6 w-full bg-primary-foreground/20 animate-pulse rounded mx-auto mb-8" />
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                {title}
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                {subtitle}
              </p>
            </>
          )}
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base"
          >
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
