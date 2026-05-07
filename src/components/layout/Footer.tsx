import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";

interface Settings {
  siteName: string;
  siteDescription: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
}

export function Footer() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const { getSectionValue } = usePageContent("footer");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const api = (await import("@/lib/api")).default;
        const response: any = await api.get("/settings");
        setSettings(response.data);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      }
    };

    fetchSettings();
  }, []);

  const footerTagline = (getSectionValue("tagline", "content", "A compliant business is a confident business") as string) || "";
  const disclaimer = (getSectionValue("disclaimer", "content", "This website is for informational purposes only and does not constitute legal or financial advice.") as string) || "";

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="flex flex-col items-center">
            <Link to="/" className="mb-4 inline-block" aria-label="89TCA home">
              <span className="text-sm font-extrabold tracking-[0.34em] text-cyan-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] md:text-base">
                {settings?.siteName || "89TCA"}
              </span>
            </Link>
            <p className="mb-2 text-lg font-semibold tracking-wide text-background/95 md:text-xl">
              {settings?.siteName || "89T Corporate Advisors Private Limited"}
            </p>
            <p className="mb-4 text-sm italic font-semibold text-slate-400 md:text-[15px]">
              {footerTagline || "A Compliant Business is a Confident Business"}
            </p>
            <p className="mb-5 text-sm leading-7 text-slate-300">
              {settings?.siteDescription ||
                "A compliance-focused corporate advisory firm supporting startups and growing businesses with registration, taxation, and business advisory services."}
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-medium text-background/80">Registered Office:</p>
              {settings?.address ? (
                <div className="whitespace-pre-line">{settings.address}</div>
              ) : (
                <>
                  <p>No.226/400, Sapthagiri Arc, Block No.206,</p>
                  <p>2nd Floor, Hoodi, Bangalore - 560048</p>
                </>
              )}
            </div>

            <div className="space-y-2 text-sm text-background/70">
              <p>
                <span className="font-medium text-background/80">Email: </span>
                <a href={`mailto:${settings?.contactEmail || "hr@89TCA.in"}`} className="transition-colors hover:text-background">
                  {settings?.contactEmail || "hr@89TCA.in"}
                </a>
              </p>
              <p>
                <span className="font-medium text-background/80">Phone: </span>
                <a href={`tel:${settings?.contactPhone || "+917019557994"}`} className="transition-colors hover:text-background">
                  {settings?.contactPhone || "+91 70195 57994"}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-300">
          <p>
            © 2026 {settings?.siteName || "89T Corporate Advisors Private Limited"}.
            All rights reserved.
          </p>
          <p className="mt-2">
            <span className="text-background/40">Disclaimer:</span> {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
