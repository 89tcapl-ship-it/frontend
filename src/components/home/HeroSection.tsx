import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building, CheckCircle } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";

const trustBadges = [

];

export function HeroSection() {
  const { getSectionValue, loading } = usePageContent('home');

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-surface">
        <div className="container-custom relative">
          <div className="py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="h-8 w-64 bg-muted animate-pulse rounded mb-6" />
              <div className="h-16 w-full bg-muted animate-pulse rounded mb-6" />
              <div className="h-6 w-3/4 bg-muted animate-pulse rounded mb-10" />
              <div className="w-full aspect-video md:aspect-[21/9] bg-muted animate-pulse rounded-xl" />
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
  const imageUrl = getSectionValue('hero', 'imageUrl', '/hero-section.png');

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      <div className="container-custom relative z-10 w-full">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-white text-sm font-medium mb-8 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Trusted Corporate Advisory Partner
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-sm">
              {title}
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl drop-shadow-sm leading-relaxed">
              {content}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12 w-full sm:w-auto">
              <Button asChild size="lg" className="text-base h-14 sm:min-w-[200px] px-8 shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                <Link to={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-base h-14 sm:min-w-[200px] px-8 shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm"
                >
                  <badge.icon className="h-4 w-4 text-white/70" />
                  <span className="text-sm font-medium text-white/80">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
