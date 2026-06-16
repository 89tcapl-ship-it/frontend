import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";

const founderDefaults = [
  {
    id: "founder-mahitha",
    name: "CA Mahitha N, ACA",
    imageUrl: "/founders/mahitha.jpeg",
    brief:
      "Focused on direct taxation, litigation support, transfer pricing audits, and tax planning for corporates and HNIs. Her experience includes hands-on exposure to assessment proceedings, tax advisory, and regulatory compliance matters. She has assisted clients in responding to departmental notices, managing tax scrutiny proceedings, and implementing effective tax planning strategies. With a practical and solution-oriented approach, she helps businesses and individuals navigate complex tax regulations while ensuring compliance and long-term tax efficiency.",
  },
  {
    id: "founder-diwakar",
    name: "CA Diwakar Reddy D, FCA, DISA",
    imageUrl: "/founders/diwakar.png",
    brief:
      "A seasoned advisor with over a decade of experience in financial consulting and business strategy. His expertise spans business advisory, startup structuring, investment planning, and FDI regulatory advisory. He has worked closely with founders and growth-stage businesses on capital structuring and long-term financial strategy. He also advises businesses on governance, scalability, and strategic decision-making to support sustainable growth.",
  },
  {
    id: "founder-surendranath",
    name: "CA Surendranath Reddy M, FCA, DISA",
    imageUrl: "/founders/surendra.png",
    brief:
      "Brings strong experience in statutory audits, bank audits, corporate governance, and internal control systems. His background includes working with banks and corporates on compliance frameworks and risk-based audit environments. He has been involved in evaluating internal financial controls, strengthening governance processes, and supporting organizations in enhancing operational efficiency and regulatory compliance. His practical understanding of audit and risk management enables clients to build robust control frameworks and sustainable business practices.",
  },
  {
    id: "founder-lokesh",
    name: "CA MSS Lokesh, FCA, DISA",
    imageUrl: "/founders/lokesh.jpeg",
    brief:
      "Specialist in indirect taxation and regulatory compliance, with significant exposure to GST, customs, and business structuring advisory. He has advised businesses on optimizing tax structures while ensuring regulatory adherence. His experience includes handling GST audits, assessments, and compliance reviews across diverse industries. He works closely with clients to address evolving indirect tax challenges and implement practical compliance frameworks.",
  },
  {
    id: "founder-jyothi",
    name: "CA Jyothi K, FCA",
    imageUrl: "/founders/jyothi.png",
    brief:
      "Experienced in SOX compliance, internal controls, risk assessment, and financial reporting. She has worked with leading MNCs including Grant Thornton, AIG, Accenture, and State Street, bringing global compliance exposure into advisory practice. Her expertise includes designing and evaluating internal control frameworks, process reviews, and risk management initiatives aligned with global governance standards. She has supported organizations in strengthening compliance processes, enhancing operational effectiveness, and meeting evolving regulatory requirements across complex business environments.",
  },
];

const About = () => {
  const { getSectionValue } = usePageContent("about");

  const introTitle = getSectionValue("intro", "title", "About Us");
  const introSubtitle = getSectionValue("intro", "subtitle", "The promoters collectively bring over four decades of combined experience across financial consulting, compliance, risk management, and strategic advisory.");
  const introContent = getSectionValue("intro", "content", "Built on deep professional expertise and extensive industry experience, 89TCA offers comprehensive services across advisory, audit, taxation, and regulatory consulting. Backed by a team of seasoned Chartered Accountants, the approach combines institutional knowledge with entrepreneurial agility to deliver practical, business-focused solutions.");
  const foundersHeading = getSectionValue("founders-heading", "title", "Founders' Background");
  const approachCombineLabel = getSectionValue("approach-combine-label", "content", "We combine:");
  const approachTitle = getSectionValue("approach", "title", "Our Approach");
  const approachContent = getSectionValue("approach", "content", "The firm is driven by the belief that sound financial structuring and proactive compliance are critical to sustainable growth. Every engagement is led with accountability, technical depth, and long-term perspective.");
  const approachPoints = [
    getSectionValue("approach-point-1", "content", "Strategic thinking with regulatory precision"),
    getSectionValue("approach-point-2", "content", "Big-firm exposure with partner-level involvement"),
    getSectionValue("approach-point-3", "content", "Compliance discipline with commercial practicality"),
  ].filter(Boolean);

  const founders = founderDefaults.map((founder) => ({
    name: getSectionValue(founder.id, "title", founder.name),
    brief: getSectionValue(founder.id, "content", founder.brief),
    imageUrl: getSectionValue(founder.id, "imageUrl", founder.imageUrl),
  }));

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
              {introSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-6 md:pt-6 md:pb-8">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div>
              <h2 className="mt-0 text-3xl font-semibold tracking-tight text-foreground">
                {foundersHeading}
              </h2>
            </div>

            <div className="mt-4 space-y-6">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="overflow-hidden rounded-[30px] border border-border bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:min-h-[280px]"
                >
                  <div className="grid h-full gap-0 lg:grid-cols-[280px_minmax(0,1fr)]">
                    <div className="border-b border-border bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 lg:border-b-0 lg:border-r lg:p-6">
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        {founder.imageUrl ? (
                          <img
                            src={founder.imageUrl}
                            alt={founder.name}
                            className="h-full w-full min-h-[220px] object-cover object-top"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex min-h-[220px] items-center justify-center text-lg font-medium text-slate-500">
                            Photo
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex h-full flex-col items-center justify-center p-6 text-center sm:p-8">
                      <p className="text-lg font-semibold tracking-tight text-foreground">
                        {founder.name}
                      </p>
                      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                        {founder.brief}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              <p className="text-sm font-semibold text-foreground">{approachCombineLabel}</p>
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
              {approachContent}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
