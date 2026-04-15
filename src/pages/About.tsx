import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { BadgeCheck, Briefcase, ShieldCheck, Users } from "lucide-react";

const teamMembers = [
  {
    name: "CA Mahitha N",
    focus: "Direct taxation, litigation support, transfer pricing, tax planning",
  },
  {
    name: "CA Diwakar Reddy D",
    focus: "Business advisory, startup structuring, investment planning, FDI advisory",
  },
  {
    name: "CA Surendranath Reddy M",
    focus: "Statutory audits, bank audits, corporate governance",
  },
  {
    name: "CA MSS Lokesh",
    focus: "GST, indirect taxation, regulatory compliance",
  },
  {
    name: "CA Jyothi K",
    focus: "SOX compliance, risk assessment, financial reporting",
  },
];

const approach = [
  {
    title: "Strategic thinking with regulatory precision",
    icon: Briefcase,
  },
  {
    title: "Big-firm exposure with partner-level involvement",
    icon: BadgeCheck,
  },
  {
    title: "Compliance discipline with commercial practicality",
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About 89TCA | Chartered Accountants"
        description="Learn about 89TCA, a trusted team of Chartered Accountants delivering advisory, audit, taxation, and compliance services."
        keywords="about 89TCA, chartered accountants, advisory, audit, taxation, compliance"
      />

      <section className="section-padding bg-gradient-to-b from-secondary/40 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">About 89TCA</p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
              Trusted Chartered Accountants & Advisors
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Practical, compliance-led advisory for growing businesses and established
              enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-foreground">Who We Are</h2>
              <p className="mt-4 text-muted-foreground">
                Built on deep professional expertise and extensive industry experience,
                89TCA offers comprehensive services across advisory, audit, taxation,
                and regulatory consulting. Backed by a team of seasoned Chartered
                Accountants, we deliver practical, business-focused solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    40+ Years of Combined Experience
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Partner-led delivery with senior oversight.
                  </p>
                </div>
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">
                  Advisory, audit, taxation, and regulatory consulting with a focus on
                  clarity, accountability, and long-term outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div>
            <p className="text-sm font-semibold text-primary">Our Approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Our Approach</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Our Team</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Our Team</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-white/80 p-5 shadow-sm"
              >
                <p className="text-base font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-2xl border border-border bg-white/80 p-8 shadow-sm">
            <p className="text-base text-muted-foreground">
              Sound financial structuring and proactive compliance are critical to
              sustainable business growth. Every engagement is driven by accountability,
              technical depth, and long-term perspective.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
