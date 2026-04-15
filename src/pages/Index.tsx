import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import {
  Building2,
  FileCheck,
  Receipt,
  ClipboardList,
  Briefcase,
  Users,
  Calculator,
  BadgeCheck,
} from "lucide-react";

const startingBusiness = [
  {
    title: "Private Limited Company",
    description: "Structured incorporation with clear documentation.",
    icon: Building2,
  },
  {
    title: "LLP Registration",
    description: "Flexible entity setup with compliance support.",
    icon: Briefcase,
  },
  {
    title: "Partnership Firm",
    description: "Simple partnership registration and advisory.",
    icon: Users,
  },
  {
    title: "OPC Registration",
    description: "One-person company incorporation assistance.",
    icon: BadgeCheck,
  },
];

const taxCompliance = [
  {
    title: "GST",
    description: "Registration, filings, and compliance guidance.",
    icon: FileCheck,
  },
  {
    title: "Income Tax Filing",
    description: "Accurate returns for individuals and businesses.",
    icon: Receipt,
  },
  {
    title: "TDS Filing",
    description: "Timely deductions and quarterly filings.",
    icon: ClipboardList,
  },
  {
    title: "MCA Compliance",
    description: "ROC filings and statutory compliance tracking.",
    icon: Building2,
  },
];

const businessSupport = [
  {
    title: "Book Keeping",
    description: "Monthly accounting with clean records.",
    icon: Calculator,
  },
  {
    title: "Payroll",
    description: "Salary processing and compliance support.",
    icon: Users,
  },
  {
    title: "Virtual CFO",
    description: "Financial oversight and strategic guidance.",
    icon: Briefcase,
  },
];

const whyChooseUs = [
  {
    title: "Experienced Chartered Accountants",
    icon: BadgeCheck,
  },
  {
    title: "End-to-end business support",
    icon: Users,
  },
  {
    title: "Trusted & compliant solutions",
    icon: ClipboardList,
  },
  {
    title: "Client-focused approach",
    icon: Briefcase,
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="89TCA | Chartered Accountants for Growing Businesses"
        description="89TCA provides professional tax, audit, and compliance services to help businesses grow with confidence."
        keywords="chartered accountant, compliance, GST, audits, business advisory"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="max-w-2xl lg:pr-4">
              <p className="text-xs font-semibold text-muted-foreground">
                Trusted Chartered Accountants & Advisors
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
                Professional Tax & Compliance Services
              </h1>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                Helping businesses stay compliant and grow with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="btn-primary text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline text-center"
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Serving startups, SMEs & enterprises across India
              </p>
            </div>

            <div className="relative lg:pl-2">
              <div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -left-4 bottom-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
              <div className="card-soft p-8">
                <div className="space-y-6">
                  <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                    <p className="text-xs font-semibold text-primary">Filings</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">GST & TDS Filings</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Accurate filings, reconciliations, and on-time compliance.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                    <p className="text-xs font-semibold text-primary">Advisory</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">Business Advisory</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Practical guidance for growth, structure, and decisions.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                    <p className="text-xs font-semibold text-primary">Assurance</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">Audit & Compliance</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Audit-ready records and governance support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div>
            <p className="text-sm font-semibold text-primary">Our Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Our Services</h2>
            <p className="mt-3 text-muted-foreground">
              Explore tailored services across incorporation, compliance, and business support.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Starting a Business</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {startingBusiness.map((item) => (
                  <Link
                    key={item.title}
                    to={`/services/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="card-hover group p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Tax & Compliance</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {taxCompliance.map((item) => (
                  <Link
                    key={item.title}
                    to={`/services/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="card-hover group p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">Business Support</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {businessSupport.map((item) => (
                  <Link
                    key={item.title}
                    to={`/services/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="card-hover group p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="btn-outline inline-flex"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-primary">About 89TCA</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">About 89TCA</h2>
              <p className="mt-4 text-muted-foreground">
                Backed by 40+ years of combined experience, we provide expert advisory,
                audit, taxation, and compliance services.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                to="/about"
                className="btn-outline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div>
            <p className="text-sm font-semibold text-primary">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Why Choose Us</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="card-hover p-6 text-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-4 font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="card-soft p-8 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                Need help with your business compliance?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team is ready to guide you through the next steps.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary mt-6 inline-flex md:mt-0"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
