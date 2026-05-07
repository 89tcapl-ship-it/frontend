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

const sectionCardStyles =
  "relative overflow-hidden rounded-[28px] border border-border/70 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-6";

const ConsultationSidebar = ({
  buttonLink,
}: {
  buttonLink: string;
}) => (
  <div className="overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
    <div className="relative aspect-[4/5] min-h-[520px]">
      <img
        src="/services-hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/15 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <div className="inline-flex w-fit items-center rounded-full border border-cyan-500/20 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-700 shadow-sm backdrop-blur">
          Expert Guidance
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/88 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-6">
          <h3 className="text-[1.7rem] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[2rem]">
            Talk to Our CA Experts About Your Specific Needs
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-[1rem]">
            From queries to execution, we guide you through each stage of compliance, making the process simple, structured, and stress-free.
          </p>
          <Link
            to={buttonLink}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0e6f8f] px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(14,111,143,0.22)] transition hover:bg-[#0b5d77]"
          >
            Get Free Consultation
          </Link>
        </div>
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

    const seededService = defaultServiceSeed.find((entry) => entry.slug === slug);
    const localService = serviceData[slug];

    const title =
      seededService?.title ||
      localService?.title ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const description =
      seededService?.description ||
      seededService?.shortDescription ||
      localService?.description ||
      defaultService.description;

    const support = seededService?.features?.length ? seededService.features : localService?.support;

    return {
      ...defaultService,
      ...(localService || {}),
      title,
      description,
      support,
      offers: seededService?.features?.length ? seededService.features : localService?.offers,
    } satisfies ServiceDetailData;
  }, [slug]);

  const consultationCta = useMemo(() => {
    const record = services.find((item) => item.slug === SERVICE_CONSULTATION_CTA_SLUG);
    return {
      buttonText: record?.consultationButtonText || defaultServiceConsultationCta.buttonText,
      buttonLink: record?.consultationButtonLink || defaultServiceConsultationCta.buttonLink,
    };
  }, [services]);

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

                {service.offers && service.offers.length > 0 ? (
                  <div className={sectionCardStyles}>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-500" />
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold tracking-tight text-foreground">Highlights</h2>
                      <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700">Editable</span>
                    </div>
                    {renderBullets(service.offers, "No highlights provided in the current service copy.")}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="hidden lg:block lg:relative">
              <div className="sticky top-24 z-20 w-[360px] xl:w-[380px]">
                <ConsultationSidebar buttonLink={consultationCta.buttonLink} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
