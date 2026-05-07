import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube } from "lucide-react";

interface Settings {
  siteName: string;
  siteDescription: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
    showFacebook?: boolean;
    showLinkedin?: boolean;
    showYoutube?: boolean;
    showWhatsapp?: boolean;
  };
}

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.67a11.86 11.86 0 0 0 5.66 1.44h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.37-8.4Zm-8.46 18.28h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.22-3.75.99 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.22C2.17 6.42 6.45 2.14 11.98 2.14c2.68 0 5.2 1.04 7.08 2.92a9.7 9.7 0 0 1 2.92 6.83c0 5.53-4.28 9.87-9.92 9.87Zm5.74-7.84c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.47.14-.62.15-.15.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.34-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.39 4.75.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.11-.29-.18-.6-.34Z" />
  </svg>
);

export function Footer() {
  const [settings, setSettings] = useState<Settings | null>(null);

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

  const whatsappUrl =
    settings?.socialLinks?.whatsapp ||
    `https://wa.me/${(settings?.contactPhone || "+917019557994").replace(/[^0-9]/g, "")}`;
  const facebookUrl = settings?.socialLinks?.facebook || "";
  const linkedinUrl = settings?.socialLinks?.linkedin || "";
  const youtubeUrl = settings?.socialLinks?.youtube || "";
  const showWhatsapp = settings?.socialLinks?.showWhatsapp ?? true;
  const showFacebook = settings?.socialLinks?.showFacebook ?? true;
  const showLinkedin = settings?.socialLinks?.showLinkedin ?? true;
  const showYoutube = settings?.socialLinks?.showYoutube ?? true;

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
              A Compliant Business is a Confident Business
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

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {showWhatsapp ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition hover:bg-white/10 hover:text-[#25D366]"
                >
                  <WhatsAppIcon />
                </a>
              ) : null}

              {showFacebook ? (
                <a
                  href={facebookUrl || undefined}
                  target={facebookUrl ? "_blank" : undefined}
                  rel={facebookUrl ? "noreferrer" : undefined}
                  aria-label="Facebook"
                  title="Facebook"
                  aria-disabled={!facebookUrl}
                  onClick={(e) => {
                    if (!facebookUrl) e.preventDefault();
                  }}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition ${
                    facebookUrl ? "hover:bg-white/10 hover:text-[#1877F2]" : "cursor-not-allowed opacity-55"
                  }`}
                >
                  <Facebook className="h-5 w-5" />
                </a>
              ) : null}

              {showLinkedin ? (
                <a
                  href={linkedinUrl || undefined}
                  target={linkedinUrl ? "_blank" : undefined}
                  rel={linkedinUrl ? "noreferrer" : undefined}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  aria-disabled={!linkedinUrl}
                  onClick={(e) => {
                    if (!linkedinUrl) e.preventDefault();
                  }}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition ${
                    linkedinUrl ? "hover:bg-white/10 hover:text-[#0A66C2]" : "cursor-not-allowed opacity-55"
                  }`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              ) : null}

              {showYoutube ? (
                <a
                  href={youtubeUrl || undefined}
                  target={youtubeUrl ? "_blank" : undefined}
                  rel={youtubeUrl ? "noreferrer" : undefined}
                  aria-label="YouTube"
                  title="YouTube"
                  aria-disabled={!youtubeUrl}
                  onClick={(e) => {
                    if (!youtubeUrl) e.preventDefault();
                  }}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background transition ${
                    youtubeUrl ? "hover:bg-white/10 hover:text-[#FF0000]" : "cursor-not-allowed opacity-55"
                  }`}
                >
                  <Youtube className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-300">
          <p>© 2026 {settings?.siteName || "89T Corporate Advisors Private Limited"}. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-background/40">Disclaimer:</span> This website is for informational purposes only and does not constitute legal or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
