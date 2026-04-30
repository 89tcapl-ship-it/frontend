import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navigation = [
  { label: "About", target: "/about" },
];

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
      "Trade Mark",
    ],
  },
];

const supportServicesMenu = [
  "Book Keeping",
  "Virtual Accountant",
  "Virtual CFO",
  "Payroll",
  "MIS Reports",
  "HR Services",
];

const compliancesMenu = [
  "GST",
  "EPF",
  "ESI",
  "PT",
  "ITR & TDS",
  "MCA",
];

const fundingMenu = [
  "Startup Funding",
  "Due Diligence",
  "Valuation",
  "FDI Compliance",
  "Bank Finance",
  "Project Reports",
];

const auditsMenu = [
  "Statutory Audits",
  "Income Tax Audit",
  "Internal Audits",
  "Transfer Pricing Audits",
  "Investigation Audit",
  "Compliance Health Check",
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-custom" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="89TCA"
              className="h-9 w-auto"
            />
          </Link>

          <div ref={desktopNavRef} className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() =>
                  setOpenMenu((current) => (current === "starting-business" ? null : "starting-business"))
                }
                aria-expanded={openMenu === "starting-business"}
                aria-controls="starting-business-menu"
              >
                Starting a Business
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/70 transition-transform ${
                    openMenu === "starting-business" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id="starting-business-menu"
                className={`absolute left-0 top-full z-40 pt-4 ${
                  openMenu === "starting-business" ? "block" : "hidden"
                }`}
              >
                <div className="pointer-events-auto w-[min(92vw,56rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="grid gap-8 sm:grid-cols-2">
                    {startingBusinessMenu.map((section) => (
                      <div key={section.heading} className="space-y-3">
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          {section.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`/services/${toSlug(item)}`}
                                className="transition-colors hover:text-primary hover:underline"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <Link
                      to="/starting-business"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() =>
                  setOpenMenu((current) => (current === "support-services" ? null : "support-services"))
                }
                aria-expanded={openMenu === "support-services"}
                aria-controls="support-services-menu"
              >
                Support Services
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/70 transition-transform ${
                    openMenu === "support-services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id="support-services-menu"
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 ${
                  openMenu === "support-services" ? "block" : "hidden"
                }`}
              >
                <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                      {supportServicesMenu.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/services/${toSlug(item)}`}
                            className="transition-colors hover:text-primary hover:underline"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() =>
                  setOpenMenu((current) => (current === "compliances" ? null : "compliances"))
                }
                aria-expanded={openMenu === "compliances"}
                aria-controls="compliances-menu"
              >
                Compliances
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/70 transition-transform ${
                    openMenu === "compliances" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id="compliances-menu"
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 ${
                  openMenu === "compliances" ? "block" : "hidden"
                }`}
              >
                <div className="pointer-events-auto w-fit max-w-[92vw] rounded-2xl border border-border bg-white px-5 py-4 shadow-lg">
                  <div className="space-y-3">
                    <ul className="flex flex-nowrap items-center gap-5 overflow-x-auto pb-1 text-sm text-muted-foreground whitespace-nowrap">
                      {compliancesMenu.map((item) => (
                        <li key={item} className="shrink-0">
                          <Link
                            to={`/services/${toSlug(item)}`}
                            className="transition-colors hover:text-primary hover:underline"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setOpenMenu((current) => (current === "funding" ? null : "funding"))}
                aria-expanded={openMenu === "funding"}
                aria-controls="funding-menu"
              >
                Funding
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/70 transition-transform ${
                    openMenu === "funding" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id="funding-menu"
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 ${
                  openMenu === "funding" ? "block" : "hidden"
                }`}
              >
                <div className="pointer-events-auto w-[min(92vw,56rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                      {fundingMenu.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/services/${toSlug(item)}`}
                            className="transition-colors hover:text-primary hover:underline"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setOpenMenu((current) => (current === "audits" ? null : "audits"))}
                aria-expanded={openMenu === "audits"}
                aria-controls="audits-menu"
              >
                Audits
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/70 transition-transform ${
                    openMenu === "audits" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id="audits-menu"
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 ${
                  openMenu === "audits" ? "block" : "hidden"
                }`}
              >
                <div className="pointer-events-auto w-[min(92vw,64rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <ul className="flex flex-nowrap items-center gap-5 text-sm text-muted-foreground whitespace-nowrap">
                      {auditsMenu.map((item) => (
                        <li key={item} className="shrink-0">
                          <Link
                            to={`/services/${toSlug(item)}`}
                            className="transition-colors hover:text-primary hover:underline"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/starting-business"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Starting a Business
              </Link>
              <div className="space-y-4">
                {startingBusinessMenu.map((section) => (
                  <div key={section.heading} className="space-y-2">
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/services/${toSlug(item)}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                to="/support-services"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support Services
              </Link>
              <Link
                to="/compliances"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliances
              </Link>
              <Link
                to="/funding"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Funding
              </Link>
              <Link
                to="/audits"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Audits
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


