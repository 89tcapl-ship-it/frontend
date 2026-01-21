import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building, CheckCircle } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";

const trustBadges = [
  { icon: Building, text: "Private Limited Company" },
  { icon: Shield, text: "ROC Bangalore Registered" },
  { icon: CheckCircle, text: "Active MCA Status" },
];

export function HeroSection() {
  const { getSectionValue, loading } = usePageContent('home');

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-surface">
        <div className="container-custom relative">
          <div className="py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl">
              <div className="h-8 w-64 bg-muted animate-pulse rounded mb-6" />
              <div className="h-16 w-full bg-muted animate-pulse rounded mb-6" />
              <div className="h-6 w-3/4 bg-muted animate-pulse rounded mb-8" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const title = getSectionValue('hero', 'title', 'Your Trusted Partner in Corporate Compliance');
  const subtitle = getSectionValue('hero', 'subtitle', 'Expert guidance for startups and growing businesses');
  const content = getSectionValue('hero', 'content', 'We provide comprehensive corporate advisory services including company registration, MCA compliance, GST, and taxation support.');
  const buttonText = getSectionValue('hero', 'buttonText', 'Get Started');
  const buttonLink = getSectionValue('hero', 'buttonLink', '/contact');

  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container-custom relative">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Trusted Corporate Advisory Partner
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {title}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {content}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="text-base">
                <Link to={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border"
                >
                  <badge.icon className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
