import { useState } from "react";
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
  "Bank Audits",
  "Compliance Health Check",
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <Link
                to="/starting-business"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Starting a Business
                <ChevronDown className="h-4 w-4 text-muted-foreground/70 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="grid gap-8 sm:grid-cols-2">
                    {startingBusinessMenu.map((section) => (
                      <div key={section.heading} className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                          {section.heading}
                        </p>
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

            <div className="relative group">
              <Link
                to="/support-services"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Support Services
                <ChevronDown className="h-4 w-4 text-muted-foreground/70 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                      Support Services
                    </p>
                    <ul className="grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
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

            <div className="relative group">
              <Link
                to="/compliances"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Compliances
                <ChevronDown className="h-4 w-4 text-muted-foreground/70 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                      Compliances
                    </p>
                    <ul className="grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
                      {compliancesMenu.map((item) => (
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

            <div className="relative group">
              <Link
                to="/funding"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Funding
                <ChevronDown className="h-4 w-4 text-muted-foreground/70 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                      Funding
                    </p>
                    <ul className="grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
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

            <div className="relative group">
              <Link
                to="/audits"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Audits
                <ChevronDown className="h-4 w-4 text-muted-foreground/70 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                <div className="pointer-events-auto w-[min(90vw,48rem)] rounded-2xl border border-border bg-white p-6 shadow-lg">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                      Audits
                    </p>
                    <ul className="grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
                      {auditsMenu.map((item) => (
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                      {section.heading}
                    </p>
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

