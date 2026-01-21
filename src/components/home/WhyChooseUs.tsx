import { usePageContent } from "@/hooks/usePageContent";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const defaultReasons = [
  {
    icon: Target,
    title: "Compliance-First Approach",
    description: "We ensure every filing is accurate, timely, and fully compliant with regulations.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A dedicated advisor for your business, always available to answer your queries.",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "No hidden costs. Clear pricing for every service, upfront.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented",
    description: "We help you scale by handling compliance so you can focus on business.",
  },
];

export function WhyChooseUs() {
  const { getSectionValue, loading } = usePageContent('home');

  const title = getSectionValue('why-choose-us', 'title', 'Why Choose Us');
  const subtitle = getSectionValue('why-choose-us', 'subtitle', 'Professional Excellence');
  const content = getSectionValue('why-choose-us', 'content', 'Dedicated support for your business compliance needs');

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {loading ? <div className="h-10 w-64 bg-muted animate-pulse rounded mx-auto" /> : title}
          </h2>
          <div className="text-lg text-muted-foreground">
            {loading ? <div className="h-6 w-96 bg-muted animate-pulse rounded mx-auto" /> : content}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultReasons.map((reason, index) => (
            <div
              key={reason.title}
              className="p-6 rounded-xl bg-background border border-border hover:shadow-elevated transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
