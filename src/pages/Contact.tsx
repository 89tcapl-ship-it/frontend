import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { usePageContent } from "@/hooks/usePageContent";
import api from "@/lib/api";
import { Mail, Phone, MapPin } from "lucide-react";

interface Settings {
  siteName: string;
  siteDescription: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
}

const Contact = () => {
  const { getSectionValue } = usePageContent("contact");
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response: any = await api.get("/settings");
        setSettings(response.data);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      }
    };

    fetchSettings();
  }, []);

  const title = getSectionValue("header", "title", "Contact Us") as string;
  const subtitle = getSectionValue("header", "subtitle", "Get in touch with our experts for your business needs") as string;
  const emailLabel = getSectionValue("contact-email", "title", "Email") as string;
  const phoneLabel = getSectionValue("contact-phone", "title", "Phone") as string;
  const addressLabel = getSectionValue("contact-address", "title", "Registered Office") as string;
  const formTitle = getSectionValue("form", "title", "Send us a message") as string;
  const submitText = getSectionValue("form", "buttonText", "Submit Request") as string;
  const mapTitle = getSectionValue("map", "title", "Open in Maps") as string;
  const mapQuery = getSectionValue("map", "buttonLink", "https://maps.google.com/?q=Hoodi%2C%20Bangalore%20560048") as string;
  const embeddedMap = getSectionValue("map", "imageUrl", "https://www.google.com/maps?q=Hoodi%2C%20Bangalore%20560048&output=embed") as string;

  return (
    <Layout>
      <SEO
        title="Contact Us | 89TCA"
        description="Get in touch with our experts for your business needs."
        keywords="contact 89TCA, chartered accountant contact"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="card-soft p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{emailLabel}</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {settings?.contactEmail || "hr@89TCA.in"}
                </p>
              </div>

              <div className="card-soft p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{phoneLabel}</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {settings?.contactPhone || "+91 70195 57994"}
                </p>
              </div>

              <div className="card-soft p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{addressLabel}</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground whitespace-pre-line">
                  {settings?.address ||
                    "No.226/400, Sapthagiri Arc, Block No.206, 2nd Floor, Hoodi, Bangalore, Bangalore North, Karnataka, India - 560048"}
                </p>
              </div>

              <div className="card-soft overflow-hidden">
                <div className="h-64 w-full bg-muted">
                  <iframe
                    title="Map"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={embeddedMap}
                  />
                </div>
                <div className="px-6 py-4">
                  <a
                    href={mapQuery}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    {mapTitle}
                  </a>
                </div>
              </div>
            </div>

            <div className="card-soft p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground">{formTitle}</h2>
              <form className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">
                      Service Interested In *
                    </label>
                    <select className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary">
                      <option>Select a service</option>
                      <option>Starting a Business</option>
                      <option>Support Services</option>
                      <option>Compliances</option>
                      <option>Funding</option>
                      <option>Audits</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  {submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
