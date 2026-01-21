import { usePageContent } from "@/hooks/usePageContent";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  pageName?: string;
}

export function PageHero({ title, subtitle, pageName = 'contact' }: PageHeroProps) {
  const { getSectionValue, loading } = usePageContent(pageName);

  const displayTitle = title || getSectionValue('header', 'title', 'Get in Touch');
  const displaySubtitle = subtitle || getSectionValue('header', 'subtitle', 'We\'re here to help');

  return (
    <section className="relative overflow-hidden bg-surface border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container-custom relative">
        <div className="py-16 md:py-20 text-center">
          {loading ? (
            <>
              <div className="h-12 w-96 bg-muted animate-pulse rounded mx-auto mb-4" />
              <div className="h-6 w-full max-w-2xl bg-muted animate-pulse rounded mx-auto" />
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {displayTitle}
              </h1>
              {displaySubtitle && (
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  {displaySubtitle}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
