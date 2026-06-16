import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import api from "@/lib/api";
import { Settings as SettingsType } from "@/lib/types";

export function Footer() {
  const [settings, setSettings] = useState<SettingsType | null>(null);

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

  const footerSettings = settings?.footer;
  const facebookUrl = settings?.socialLinks?.facebook || "https://www.facebook.com/profile.php?id=61589708774592";
  const linkedinUrl = settings?.socialLinks?.linkedin || "https://www.linkedin.com/company/89t-ca/";
  const instagramUrl = settings?.socialLinks?.instagram || "https://www.instagram.com/89t_ca/";
  const xUrl = settings?.socialLinks?.twitter || "https://x.com/89TCA";

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-lg font-semibold tracking-wide text-background/95 md:text-xl">
              89T Corporate Advisors Private Limited
            </p>
            <p className="mb-4 text-sm italic font-semibold text-slate-400 md:text-[15px]">
              {footerSettings?.tagline || "A Compliant Business is a Confident Business"}
            </p>
            <p className="mb-5 text-sm leading-7 text-slate-300">
              {footerSettings?.description ||
                settings?.siteDescription ||
                "A compliance-focused corporate advisory firm supporting startups and growing businesses with registration, taxation, and business advisory services."}
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-medium text-background/80">{footerSettings?.registeredOfficeLabel || "Registered Office:"}</p>
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
                <span className="font-medium text-background/80">{footerSettings?.emailLabel || "Email:"} </span>
                <a href={`mailto:${settings?.contactEmail || "connect@89TCA.in"}`} className="transition-colors hover:text-background">
                  {settings?.contactEmail || "connect@89TCA.in"}
                </a>
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition hover:bg-white/10 hover:text-[#0A66C2]"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition hover:bg-white/10 hover:text-[#1877F2]"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition hover:bg-white/10 hover:text-[#E4405F]"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                title="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition hover:bg-white/10 hover:text-black"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-300">
          <p>(c) 2026 89T Corporate Advisors Private Limited. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-background/40">Disclaimer:</span> {footerSettings?.disclaimer || "This website is for informational purposes only and does not constitute legal or financial advice."}
          </p>
        </div>
      </div>
    </footer>
  );
}
