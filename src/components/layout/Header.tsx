import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const toSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const startingBusinessMenu = [
  {
    heading: "Entity Formation",
    items: [
      "Sole Proprietor",
      "Partnership",
      "LLP",
      "OPC",
      "Private Limited Company",
      "Foreign Company Subsidiary",
      "NBFC",
      "Trust/Societies",
      "Apartment Association",
    ],
  },
  {
    heading: "Allied Registrations",
    items: [
      "GST",
      "Shops & Establishments (Labour)",
      "EPF & ESI",
      "PT",
      "Trade License",
      "FSSAI",
      "IEC",
      "MSME/UDYAM",
      "DPIIT / StartUp India Registration",
    ],
  },
];

const supportServicesMenu = ["Book Keeping", "Virtual Accountant", "Virtual CFO", "Payroll", "MIS Reports", "HR Services"];
const compliancesMenu = ["GST", "EPF", "ESI", "PT", "ITR & TDS", "MCA"];
const fundingMenu = ["Startup Funding", "Due Diligence", "Valuation", "FDI Compliance", "Bank Finance", "Project Reports"];
const auditsMenu = ["Statutory Audits", "Income Tax Audit", "Internal Audits", "Transfer Pricing Audits", "Investigation Audit", "Compliance Health Check"];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const mobileSections = [
    { key: "starting-business", label: "Starting a Business", items: startingBusinessMenu.flatMap((s) => s.items) },
    { key: "support-services", label: "Support Services", items: supportServicesMenu },
    { key: "compliances", label: "Compliances", items: compliancesMenu },
    { key: "funding", label: "Funding", items: fundingMenu },
    { key: "audits", label: "Audits", items: auditsMenu },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-custom" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="89TCA" className="h-9 w-auto" />
          </Link>

          <div ref={desktopNavRef} className="hidden items-center gap-6 lg:flex">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setOpenMenu((current) => (current === "starting-business" ? null : "starting-business"))}
                aria-expanded={openMenu === "starting-business"}
              >
                Starting a Business
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "starting-business" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "starting-business" && (
                <div className="absolute left-0 top-full z-40 pt-4">
                  <div className="pointer-events-auto w-[min(92vw,56rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                    <div className="grid gap-8 sm:grid-cols-2">
                      {startingBusinessMenu.map((section, index) => (
                        <div
                          key={section.heading}
                          className={`space-y-3 ${index === 0 ? "pl-6 sm:pl-10" : "pl-2 sm:pl-4"}`}
                        >
                          <p className="text-sm font-semibold text-foreground">{section.heading}</p>
                          <ul className={`space-y-2.5 text-sm text-muted-foreground ${index === 0 ? "pl-4 sm:pl-8" : "pl-3 sm:pl-6"}`}>
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link to={`/services/${toSlug(item)}`} className="transition-colors hover:text-primary hover:underline">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-border pt-4">
                      <Link to="/starting-business" className="text-sm font-semibold text-primary hover:underline">
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button type="button" className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" onClick={() => setOpenMenu((current) => (current === "support-services" ? null : "support-services"))} aria-expanded={openMenu === "support-services"}>
                Support Services
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "support-services" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "support-services" && (
                <div className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4">
                  <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                    <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                      {supportServicesMenu.map((item) => (
                        <li key={item}>
                          <Link to={`/services/${toSlug(item)}`} className="transition-colors hover:text-primary hover:underline">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button type="button" className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" onClick={() => setOpenMenu((current) => (current === "compliances" ? null : "compliances"))} aria-expanded={openMenu === "compliances"}>
                Compliances
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "compliances" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "compliances" && (
                <div className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4">
                  <div className="pointer-events-auto w-fit max-w-[92vw] rounded-2xl border border-border bg-white px-5 py-4 shadow-lg">
                    <ul className="flex flex-nowrap items-center gap-5 overflow-x-auto pb-1 text-sm text-muted-foreground whitespace-nowrap">
                      {compliancesMenu.map((item) => (
                        <li key={item} className="shrink-0">
                          <Link to={`/services/${toSlug(item)}`} className="transition-colors hover:text-primary hover:underline">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button type="button" className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" onClick={() => setOpenMenu((current) => (current === "funding" ? null : "funding"))} aria-expanded={openMenu === "funding"}>
                Funding
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "funding" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "funding" && (
                <div className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4">
                  <div className="pointer-events-auto w-[min(92vw,56rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                    <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                      {fundingMenu.map((item) => (
                        <li key={item}>
                          <Link to={`/services/${toSlug(item)}`} className="transition-colors hover:text-primary hover:underline">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button type="button" className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" onClick={() => setOpenMenu((current) => (current === "audits" ? null : "audits"))} aria-expanded={openMenu === "audits"}>
                Audits
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "audits" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "audits" && (
                <div className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4">
                  <div className="pointer-events-auto w-[min(92vw,64rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                    <ul className="flex flex-nowrap items-center gap-5 text-sm text-muted-foreground whitespace-nowrap">
                      {auditsMenu.map((item) => (
                        <li key={item} className="shrink-0">
                          <Link to={`/services/${toSlug(item)}`} className="transition-colors hover:text-primary hover:underline">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link to="/contact" className="btn-primary">
              +918958889589
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col space-y-3">
              {mobileSections.map((section) => {
                const isOpen = mobileOpenMenu === section.key;
                return (
                  <div key={section.key} className="rounded-xl border border-border/60 bg-background">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
                      onClick={() => setMobileOpenMenu((current) => (current === section.key ? null : section.key))}
                    >
                      {section.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/60 px-4 py-3">
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`/services/${toSlug(item)}`}
                                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/about"
                className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link to="/contact" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
