import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Starting a Business", target: "/starting-business" },
    { label: "Support Services", target: "/support-services" },
    { label: "Compliances", target: "/compliances" },
    { label: "Funding", target: "/funding" },
    { label: "Audits", target: "/audits" },
  ],
  services: [
    { label: "Company Registration", target: "/starting-business" },
    { label: "MCA Compliance", target: "/compliances" },
    { label: "GST Services", target: "/services/gst" },
    { label: "Income Tax Filing", target: "/services/itr-and-tds" },
  ],
};

interface Settings {
  siteName: string;
  siteDescription: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export function Footer() {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const api = (await import('@/lib/api')).default;
        const response: any = await api.get('/settings');
        setSettings(response.data);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const socialIcons = [
    { name: 'facebook', icon: Facebook, url: settings?.socialLinks?.facebook },
    { name: 'twitter', icon: Twitter, url: settings?.socialLinks?.twitter },
    { name: 'linkedin', icon: Linkedin, url: settings?.socialLinks?.linkedin },
    { name: 'instagram', icon: Instagram, url: settings?.socialLinks?.instagram },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.6fr] lg:gap-12">
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src="/logo.png"
                alt="89T Corporate Advisors"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-background/70 text-sm max-w-md">
              {settings?.siteDescription ||
                'A compliance-focused corporate advisory firm supporting startups and growing businesses with registration, taxation, and business advisory services.'}
            </p>
            <div className="text-sm text-background/60 mt-6">
              <p className="font-medium text-background/80 mb-2">Registered Office:</p>
              {settings?.address ? (
                <div className="whitespace-pre-line">{settings.address}</div>
              ) : (
                <>
                  <p>No.226/400, Sapthagiri Arc, Block No.206,</p>
                  <p>2nd Floor, Hoodi, Bangalore - 560048</p>
                </>
              )}
            </div>

            <div className="text-sm text-background/70 mt-5 space-y-2">
              <p>
                <span className="text-background/80 font-medium">Email: </span>
                <a href="mailto:89tcapl@gmail.com" className="hover:text-background transition-colors">
                  89tcapl@gmail.com
                </a>
              </p>
              <p>
                <span className="text-background/80 font-medium">Phone: </span>
                <a href="tel:+919398857595" className="hover:text-background transition-colors">
                  +91 93988 57595
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-background/80 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-background/80 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.target}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} {settings?.siteName || '89T Corporate Advisors'}. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-background/40">Disclaimer:</span> This website is for informational purposes only and does not constitute legal or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
