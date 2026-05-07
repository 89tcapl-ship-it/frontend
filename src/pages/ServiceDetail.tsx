import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import serviceData, { type ServiceDetailData } from "@/data/serviceDetailData";
import { defaultServiceSeed } from "@/data/defaultServiceSeed";
import { defaultServiceConsultationCta, SERVICE_CONSULTATION_CTA_SLUG } from "@/data/serviceConsultationCta";
import { useServicesCatalog } from "@/hooks/useServicesCatalog";

const defaultService: ServiceDetailData = {
  title: "Service Detail",
  description: "Professional advisory and compliance support tailored to your business requirements.",
  offers: [
    "Requirement assessment and scoping",
    "Dedicated engagement support",
    "Clear compliance timelines",
    "Documentation and reporting assistance",
  ],
};

const slugAliases: Record<string, string> = {
  "dpiit-startup-india-registration": "dpiit-startup-india",
  "opc-registration": "opc-registration",
  "epf-and-esi": "epf-and-esi",
  "itr-and-tds": "itr-and-tds",
  "mca": "mca",
};

const sectionCardStyles =
  "relative overflow-hidden rounded-[28px] border border-border/70 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-6";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.67a11.86 11.86 0 0 0 5.66 1.44h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.37-8.4Zm-8.46 18.28h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.22-3.75.99 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.22C2.17 6.42 6.45 2.14 11.98 2.14c2.68 0 5.2 1.04 7.08 2.92a9.7 9.7 0 0 1 2.92 6.83c0 5.53-4.28 9.87-9.92 9.87Zm5.74-7.84c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.47.14-.62.15-.15.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.34-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.39 4.75.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.11-.29-.18-.6-.34Z" />
  </svg>
);

const ConsultationSidebar = ({
  overline,
  title,
  subtitle,
  buttonText,
  buttonLink,
  whatsappText,
  whatsappLink,
}: {
  overline: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  whatsappText: string;
  whatsappLink: string;
}) => (
  <div className="overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
    <div className="bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef8f6_100%)] p-5 sm:p-6">
      <div className="space-y-4 rounded-[28px] border border-white/60 bg-white/85 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-6">
        <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-700 shadow-sm">
          {overline}
        </div>
        <h3 className="whitespace-pre-line text-[1.6rem] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[2rem]">
          {title}
        </h3>
        <p className="max-w-[34ch] text-[0.95rem] leading-7 text-slate-600 sm:text-[1.02rem]">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#0e6f8f] px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(14,111,143,0.22)] transition hover:bg-[#0b5d77]"
        >
          {buttonText}
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.22)] transition hover:bg-[#1fb85a]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {whatsappText}
        </a>
      </div>
    </div>
  </div>
);

const renderBullets = (items: string[], emptyMessage: string) => {
  if (items.length === 0) {
    return <p className="mt-4 text-sm text-muted-foreground">{emptyMessage}</p>;
  }

  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [expandedDescription, setExpandedDescription] = useState(false);
  const { services } = useServicesCatalog();

  const service = useMemo(() => {
    if (!slug) return defaultService;

    const canonicalSlug = slugAliases[slug] || slug;
    const seededService =
      defaultServiceSeed.find((entry) => entry.slug === canonicalSlug) ||
      defaultServiceSeed.find((entry) => entry.slug === slug);
    const localService = serviceData[canonicalSlug] || serviceData[slug];

    const title =
      localService?.title ||
      seededService?.title ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const description =
      localService?.description ||
      seededService?.description ||
      seededService?.shortDescription ||
      defaultService.description;

    const support = localService?.support?.length ? localService.support : seededService?.features;

    return {
      ...defaultService,
      ...(localService || {}),
      title,
      description,
      support,
      offers: localService?.offers?.length ? localService.offers : seededService?.features,
    } satisfies ServiceDetailData;
  }, [slug]);

  const consultationCta = useMemo(() => {
    const record = services.find((item) => item.slug === SERVICE_CONSULTATION_CTA_SLUG);
    const whatsappMessage = encodeURIComponent(
      `Hi 89TCA, I would like to know more about ${service.title}.`
    );
    return {
      overline: record?.consultationOverline || defaultServiceConsultationCta.overline,
      title: record?.title || defaultServiceConsultationCta.title,
      subtitle: record?.shortDescription || record?.description || defaultServiceConsultationCta.subtitle,
      buttonText: record?.consultationButtonText || defaultServiceConsultationCta.buttonText,
      buttonLink: record?.consultationButtonLink || defaultServiceConsultationCta.buttonLink,
      whatsappText: "WhatsApp",
      whatsappLink: `https://wa.me/917019557994?text=${whatsappMessage}`,
    };
  }, [services, service.title]);

  useEffect(() => {
    setExpandedDescription(false);
  }, [slug]);

  const hasKeyBenefits = Boolean(service.keyBenefits && service.keyBenefits.length > 0);
  const hasLimitations = Boolean(service.limitations && service.limitations.length > 0);
  const hasNonComplianceRisks = Boolean(service.nonComplianceRisks && service.nonComplianceRisks.length > 0);
  const useCompactLayout = !hasKeyBenefits && !hasLimitations && !hasNonComplianceRisks;

  return (
    <Layout showConsultationWidget={false} showWhatsAppWidget={false}>
      <SEO
        title={`${service.title} | 89TCA`}
        description={service.description}
        keywords={`${service.title}, chartered accountant, compliance`}
      />

      <section className="relative overflow-visible pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_28%)]" />
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(320px,3fr)] lg:items-stretch">
            <div className="space-y-6">
              <div className="rounded-[32px] border border-border/70 bg-white/85 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Service Detail
                </div>
                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{service.title}</h1>
                <p
                  className="mt-5 max-w-3xl text-justify text-sm leading-7 text-slate-600 md:text-base"
                  style={
                    expandedDescription
                      ? undefined
                      : {
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                          overflow: "hidden",
                        }
                  }
                >
                  {service.description}
                </p>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                  onClick={() => setExpandedDescription((current) => !current)}
                >
                  {expandedDescription ? "Read less" : "Read more"}
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedDescription ? "rotate-90" : ""}`} />
                </button>
              </div>

              <div className="space-y-3">
                {useCompactLayout ? (
                  <div className="overflow-hidden rounded-[32px] border border-border/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                    <div className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we Support</h2>
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">Support</span>
                      </div>
                      <div className="mt-2">
                        {renderBullets(service.support ?? [], "No support steps provided in the current service copy.")}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {hasKeyBenefits ? (
                      <div className={sectionCardStyles}>
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-cyan-400" />
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Key Benefits</h2>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Highlights</span>
                        </div>
                        {renderBullets(service.keyBenefits, "No key benefits provided in the current service copy.")}
                      </div>
                    ) : null}

                    <div className={sectionCardStyles}>
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we Support</h2>
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">Support</span>
                      </div>
                      {renderBullets(service.support ?? [], "No support steps provided in the current service copy.")}
                    </div>

                    {hasLimitations ? (
                      <div className={sectionCardStyles}>
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Limitations</h2>
                          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700">Consider</span>
                        </div>
                        {renderBullets(service.limitations, "No limitations provided in the current service copy.")}
                      </div>
                    ) : null}

                    {hasNonComplianceRisks ? (
                      <div className={sectionCardStyles}>
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 to-red-500" />
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Non-Compliance Risks</h2>
                          <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700">Risks</span>
                        </div>
                        {renderBullets(service.nonComplianceRisks, "No non-compliance risks provided in the current service copy.")}
                      </div>
                    ) : null}
                  </>
                )}

              </div>
            </div>

            <div className="hidden lg:block lg:relative">
              <div className="sticky top-24 z-20 w-[360px] xl:w-[380px]">
                <ConsultationSidebar
                  overline={consultationCta.overline}
                  title={consultationCta.title}
                  subtitle={consultationCta.subtitle}
                  buttonText={consultationCta.buttonText}
                  buttonLink={consultationCta.buttonLink}
                  whatsappText={consultationCta.whatsappText}
                  whatsappLink={consultationCta.whatsappLink}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
