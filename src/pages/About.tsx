import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";

const founders = [
  {
    key: "mahitha",
    name: "CA Mahitha N, ACA",
    brief:
      "Focused on direct taxation, litigation support, transfer pricing audits, and tax planning for corporates and HNIs. Her experience includes hands-on exposure to assessment proceedings and tax advisory.",
  },
  {
    key: "diwakar",
    name: "CA Diwakar Reddy D, FCA, DISA",
    brief:
      "A seasoned advisor over a decade of experience in financial consulting and business strategy. His expertise spans business advisory, startup structuring, investment planning, and FDI regulatory advisory. He has worked closely with founders and growth-stage businesses on capital structuring and long-term financial strategy.",
  },
  {
    key: "surendranath",
    name: "CA Surendranath Reddy M, FCA, DISA",
    brief:
      "Brings strong experience in statutory audits, bank audits, corporate governance, and internal control systems. His background includes working with banks and corporates on compliance frameworks and risk-based audit environments.",
  },
  {
    key: "lokesh",
    name: "CA MSS Lokesh, FCA, DISA",
    brief:
      "Specialist in indirect taxation and regulatory compliance, with significant exposure to GST, customs, and business structuring advisory. He has advised businesses on optimizing tax structures while ensuring regulatory adherence.",
  },
  {
    key: "jyothi",
    name: "CA Jyothi K, FCA",
    brief:
      "Experienced in SOX compliance, internal controls, risk assessment, and financial reporting. She has worked with leading MNCs including Grant Thornton, AIG, Accenture, and State Street, bringing global compliance exposure into advisory practice.",
  },
];

const approachFallback = [
  "Strategic thinking with regulatory precision",
  "Big-firm exposure with partner-level involvement",
  "Compliance discipline with commercial practicality",
];

const About = () => {
  const { getSectionValue } = usePageContent("about");

  const introTitle = getSectionValue("intro", "title", "About Us") as string;
  const introContent = getSectionValue(
    "intro",
    "content",
    "Built on deep professional expertise and extensive industry experience, 89TCA offers comprehensive services across advisory, audit, taxation, and regulatory consulting. Backed by a team of seasoned Chartered Accountants, the approach combines institutional knowledge with entrepreneurial agility to deliver practical, business-focused solutions."
  ) as string;
  const introContent2 = getSectionValue(
    "intro",
    "subtitle",
    "The promoters collectively bring over four decades of combined experience across financial consulting, compliance, risk management, and strategic advisory."
  ) as string;

  const foundersHeading = getSectionValue("founders-heading", "title", "Founders' Background") as string;
  const approachTitle = getSectionValue("approach", "title", "Our Approach") as string;
  const approachPrefix = getSectionValue("approach-combine-label", "content", "We combine:") as string;
  const approachIntro = getSectionValue(
    "approach",
    "content",
    "The firm is driven by the belief that sound financial structuring and proactive compliance are critical to sustainable growth. Every engagement is led with accountability, technical depth, and long-term perspective."
  ) as string;
  const approachPoints = [
    getSectionValue("approach-point-1", "content", approachFallback[0]) as string,
    getSectionValue("approach-point-2", "content", approachFallback[1]) as string,
    getSectionValue("approach-point-3", "content", approachFallback[2]) as string,
  ];

  return (
    <Layout>
      <SEO
        title="About 89TCA | Chartered Accountants"
        description="Learn about 89TCA, a trusted team of Chartered Accountants delivering advisory, audit, taxation, and compliance services."
        keywords="about 89TCA, chartered accountants, advisory, audit, taxation, compliance"
      />

      <section className="pt-8 pb-4 md:pt-10 md:pb-6 bg-gradient-to-b from-secondary/40 to-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {introTitle}
            </h1>
            <p className="mt-6 text-justify text-base leading-7 text-muted-foreground md:text-lg">
              {introContent}
            </p>
            <p className="mt-4 text-justify text-base leading-7 text-muted-foreground md:text-lg">
              {introContent2}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-6 md:pt-6 md:pb-8">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div>
              <h2 className="mt-0 text-3xl font-semibold tracking-tight text-foreground">{foundersHeading}</h2>
            </div>

            <div className="mt-4 space-y-6">
              {founders.map((founder) => {
                const title = (getSectionValue(`founder-${founder.key}`, "title", founder.name) as string);
                const brief = (getSectionValue(`founder-${founder.key}`, "content", founder.brief) as string);
                const imageUrl = (getSectionValue(`founder-${founder.key}`, "imageUrl", "") as string);
                return (
                  <div
                    key={founder.key}
                    className="overflow-hidden rounded-[30px] border border-border bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="grid gap-0 lg:grid-cols-[280px_minmax(0,1fr)]">
                      <div className="flex min-h-[220px] items-center justify-center border-b border-border bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 lg:border-b-0 lg:border-r">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={title}
                            className="h-full min-h-[180px] w-full rounded-2xl object-cover"
                          />
                        ) : (
                          <div className="flex h-full min-h-[180px] w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 text-lg font-medium text-slate-500">
                            Photo
                          </div>
                        )}
                      </div>
                      <div className="p-6 sm:p-8">
                        <p className="text-lg font-semibold tracking-tight text-foreground">
                          {title}
                        </p>
                        <p className="mt-3 text-justify text-sm leading-7 text-muted-foreground md:text-base">
                          {brief}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-0 text-3xl font-semibold tracking-tight text-foreground">
              {approachTitle}
            </h2>

            <div className="mt-4 rounded-[30px] border border-border bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-sm font-semibold text-foreground">{approachPrefix}</p>
              <ul className="mt-4 space-y-4">
                {approachPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600 md:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-justify text-base leading-7 text-muted-foreground md:text-lg">
              {approachIntro}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
