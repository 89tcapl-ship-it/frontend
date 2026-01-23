import { usePageContent } from "@/hooks/usePageContent";
import { Skeleton } from "@/components/ui/skeleton";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  pageName?: string;
  imageUrl?: string;
}

export function PageHero({ title, subtitle, pageName = 'contact', imageUrl: propImageUrl }: PageHeroProps) {
  const { getSectionValue, loading } = usePageContent(pageName);

  const displayTitle = title || getSectionValue('header', 'title', 'Get in Touch');
  const displaySubtitle = subtitle || getSectionValue('header', 'subtitle', "We're here to help");
  const imageUrl = propImageUrl || getSectionValue('header', 'imageUrl', `/${pageName}-hero.png`);

  return (
    <section
      className="relative min-h-[50vh] flex items-center overflow-hidden bg-cover bg-center border-b border-border"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      <div className="container-custom relative z-10 w-full">
        <div className="py-20 md:py-28 text-center flex flex-col items-center">
          {loading ? (
            <div className="max-w-3xl w-full flex flex-col items-center">
              <Skeleton className="h-12 w-96 bg-white/20 mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl bg-white/10" />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 animate-fade-in drop-shadow-sm">
                {displayTitle}
              </h1>
              {displaySubtitle && (
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in drop-shadow-sm leading-relaxed" style={{ animationDelay: "0.1s" }}>
                  {displaySubtitle}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
