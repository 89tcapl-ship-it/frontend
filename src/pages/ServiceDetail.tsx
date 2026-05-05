import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import serviceData, { type ServiceDetailData } from "@/data/serviceDetailData";

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

const consultationSidebar = (
  <div className="overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-br from-primary/10 via-white to-cyan-50 p-5 shadow-[0_12px_34px_rgba(15,23,42,0.08)] sm:p-6">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Get Consultation</p>
    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
      Talk to our experts about your specific service requirements.
    </h3>
    <p className="mt-3 text-justify text-sm leading-6 text-slate-600">
      We will help you understand the right next step and what documents or compliance support you need.
    </p>
    <div className="mt-6 space-y-3">
      <Link to="/contact" className="btn-primary inline-flex w-full justify-center shadow-lg shadow-primary/20">
        Get Consultation
      </Link>
      <a
        href="https://wa.me/917019557994"
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-[#20c05c]"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 shrink-0 fill-current"
        >
          <path d="M20.5 11.9a8.5 8.5 0 0 1-12.7 7.4l-4.1 1.1 1.1-4A8.5 8.5 0 1 1 20.5 11.9Zm-8.5-6.7a6.7 6.7 0 0 0-5.7 10.3l-.7 2.6 2.7-.7a6.7 6.7 0 1 0 3.7-12.2Zm3.9 8.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.8 1c-.1.1-.3.2-.5.1a5.5 5.5 0 0 1-2.4-1.8 5.7 5.7 0 0 1-1.3-2.5c0-.2 0-.4.1-.5l.6-.7c.1-.1.1-.3 0-.5l-.6-1.5c-.1-.3-.3-.3-.4-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.7 2.7 4.1 3.8.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.2.5 0 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2Z" />
        </svg>
        WhatsApp
      </a>
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

  const service = useMemo(() => {
    if (!slug) return defaultService;

    return (
      serviceData[slug] ?? {
        ...defaultService,
        title: slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      }
    );
  }, [slug]);

  const hasKeyBenefits = Boolean(service.keyBenefits && service.keyBenefits.length > 0);
  const hasLimitations = Boolean(service.limitations && service.limitations.length > 0);
  const hasNonComplianceRisks = Boolean(service.nonComplianceRisks && service.nonComplianceRisks.length > 0);
  const useCompactLayout = !hasKeyBenefits && !hasLimitations && !hasNonComplianceRisks;

  useEffect(() => {
    setExpandedDescription(false);
  }, [slug]);

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
                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {service.title}
                </h1>
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
                          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                            Non-Compliance Risks
                          </h2>
                          <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700">
                            Risks
                          </span>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {service.nonComplianceRisks.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>

            <div className="hidden lg:block lg:relative">
              <div className="sticky top-24 z-20 w-[360px] xl:w-[380px]">
                {consultationSidebar}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
