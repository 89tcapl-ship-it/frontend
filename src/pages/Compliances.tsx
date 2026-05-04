import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";
import { BadgeCheck, ClipboardList, FileText, ShieldCheck } from "lucide-react";

const taxCompliances = [
  {
    title: "GST",
    description: "Registration, filing, and compliance support.",
    icon: BadgeCheck,
    slug: "gst",
  },
  {
    title: "ITR & TDS",
    description: "Accurate income tax returns and TDS filings.",
    icon: FileText,
    slug: "itr-and-tds",
  },
];

const regulatoryCompliances = [
  {
    title: "EPF",
    description: "Employee provident fund compliance and filings.",
    icon: ShieldCheck,
    slug: "epf",
  },
  {
    title: "ESI",
    description: "Employee state insurance registration and compliance.",
    icon: ShieldCheck,
    slug: "esi",
  },
  {
    title: "PT",
    description: "Professional tax registration and filings.",
    icon: ClipboardList,
    slug: "pt",
  },
  {
    title: "MCA",
    description: "ROC filings and corporate compliance tracking.",
    icon: FileText,
    slug: "mca",
  },
];

const introParagraph =
  "Regulatory compliance is not optional — it is the foundation on which every legitimate business must operate. Non-compliance exposes businesses to financial penalties, criminal liability, and reputational damage. 89T Corporate Advisors provides comprehensive compliance services across GST, EPF, ESI, PT, ITR & TDS, and MCA — ensuring your business is always current on every regulatory obligation.";

const complianceDetails = [
  {
    title: "GST Compliance",
    description:
      "GST compliance encompasses the ongoing obligations under the Goods and Services Tax regime — from maintaining proper books and generating e-invoices to filing accurate periodic returns and handling departmental audits. Every registered person must file GSTR-1 (outward supplies, by 11th), GSTR-3B (monthly summary, by 20th), and GSTR-9 (annual return, by December 31). GST compliance also involves ensuring accurate ITC claims are supported by valid tax invoices, e-invoicing for eligible taxpayers, and e-way bills for goods movement. The GST department increasingly uses data analytics to identify mismatches between GSTR-1, GSTR-3B, and GSTR-2B — businesses must reconcile these proactively every month.",
    benefits: [
      "Accurate ITC reconciliation ensures you claim every rupee of eligible credit — directly reduces tax outflow.",
      "Timely filing avoids late fees, interest, and the distraction of departmental notices.",
      "Clean GST records improve your credit rating with banks and vendor credibility with B2B customers.",
      "Proactive compliance reduces the risk of GST audits and departmental scrutiny.",
      "E-invoicing and e-way bill compliance ensures smooth movement of goods without delays at check-posts.",
    ],
    risks: [
      "Late filing of GSTR-3B attracts interest at 18% per annum on unpaid tax plus late fees of Rs. 50 per day.",
      "ITC claimed without corresponding supplier filing is disallowed — creating tax liability plus 24% interest.",
      "Non-generation of e-invoices when mandatory attracts penalty of Rs. 10,000 per invoice.",
      "Failure to respond to GST notices can lead to ex-parte assessments — best-judgment orders with large additions.",
    ],
    support: [
      "We file all GST returns — GSTR-1, GSTR-3B, GSTR-9, GSTR-9C — on time every month and year.",
      "We perform monthly ITC reconciliation between GSTR-2B and your purchase register — flag mismatches proactively.",
      "We set up e-invoicing and e-way bill systems for your business and train your team.",
      "We draft responses to GST notices, represent you in GST audits, and file appeals against demand orders.",
    ],
  },
  {
    title: "EPF Compliance",
    description:
      "EPF (Employees' Provident Fund) compliance involves the ongoing obligations of an employer registered with EPFO under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. Monthly EPF compliance requires calculating PF contributions for all eligible employees, depositing by the 15th of the following month, and filing the Electronic Challan cum Return (ECR) on the EPFO portal. The ECR captures each employee's UAN, name, gross wages, PF wages, and contribution breakdowns. EPFO conducts periodic inspections and can review payroll records for the past 5 years. Employers must also facilitate employee KYC (Aadhaar, PAN, bank account) linking to UAN to prevent delays in PF claim settlements.",
    benefits: [
      "On-time PF compliance builds employee trust and loyalty — retirement savings are a key financial concern.",
      "Employees can avail PF advances for emergencies — medical, housing, education — providing a safety net.",
      "Compliance certificates required for government tenders, bank loans, and client due diligence are always available.",
      "Clean EPFO records reduce the risk of inspector visits and assessment proceedings.",
      "Employer's PF contribution is a deductible business expense — reduces taxable income.",
    ],
    risks: [
      "Late deposit of PF contributions attracts interest at 12% per annum and damages of up to 100% of the arrears.",
      "EPFO inspectors can initiate recovery proceedings for unpaid contributions covering the past 5 years.",
      "Incomplete employee KYC leads to delayed claim settlements — serious employee grievance and potential labour court action.",
      "Non-compliance can disqualify the business from government contracts and tenders.",
    ],
    support: [
      "We calculate monthly PF contributions for all employees and deposit by the 15th of every month.",
      "We file the ECR on the EPFO portal and generate contribution statements for your records.",
      "We assist employees with UAN activation, KYC linking, and PF claim settlements.",
      "We represent you in EPFO inspections and respond to show cause notices.",
    ],
  },
  {
    title: "ESI Compliance",
    description:
      "ESI (Employees' State Insurance) compliance involves the ongoing obligations of an employer registered with ESIC under the Employees' State Insurance Act, 1948. Monthly ESI compliance includes calculating contributions for all employees drawing wages up to Rs. 21,000 per month, depositing contributions (3.25% employer + 0.75% employee) by the 15th, and filing the monthly ESI Return on the ESIC portal. ESI provides covered employees and their dependents with medical benefits, maternity benefits, sickness benefits, disablement benefits, and dependent benefits. ESIC conducts regular inspections and can review records for past years. Changes in employee headcount, wages, and employment status must be updated on the ESIC portal in real time.",
    benefits: [
      "ESI provides comprehensive cashless medical coverage to employees and their families — a significant benefit.",
      "Maternity benefit under ESI (26 weeks salary) reduces employer's direct maternity leave cost.",
      "ESI compliance certificate is required for government contracts, bank loans, and client due diligence.",
      "Sickness benefit under ESI provides financial protection to employees during illness — reduces absenteeism-related disputes.",
      "Employer's ESI contribution is a deductible business expense.",
    ],
    risks: [
      "Late deposit of ESI contributions attracts interest at 12% per annum and penalties from ESIC.",
      "ESIC inspectors can initiate assessment for uncovered employees and unpaid contributions — creating large retrospective liability.",
      "Employees denied ESI benefits due to employer non-compliance can file grievances with ESIC — leading to legal proceedings.",
      "Non-compliance disqualifies the business from government tenders requiring ESI compliance certificates.",
    ],
    support: [
      "We calculate monthly ESI contributions for all eligible employees and deposit by the 15th.",
      "We file monthly ESI returns on the ESIC portal and maintain all related records.",
      "We assist employees with IP card issuance and claim procedures.",
      "We handle ESIC inspections and respond to notices on your behalf.",
    ],
  },
  {
    title: "PT Compliance",
    description:
      "Professional Tax (PT) compliance involves the ongoing obligation of registered employers to deduct PT from employees' salaries and remit it to the state government. Compliance requirements, rates, filing frequencies, and penalties vary significantly across states. Multi-state employers must manage separate PT registrations, compliance calendars, and remittances for each state in which they have employees. PT compliance also requires maintaining a PT register showing employee-wise deductions and remittances. Employers must also pay PT on their own entity (Enrollment Certificate) in addition to deducting from employees. PT is a small but important compliance obligation frequently overlooked by growing businesses, surfacing as a liability during audits or due diligence.",
    benefits: [
      "Nominal cost of compliance — PT rates are small but non-compliance costs are disproportionate.",
      "PT deducted is a deductible expense for employees — reduces their income tax liability.",
      "Clean compliance record across all state PT registrations — no surprises during audits or due diligence.",
      "Demonstrates attention to detail in multi-state compliance management.",
      "Avoids cumulative liability building over years of inadvertent non-compliance.",
    ],
    risks: [
      "Arrears of PT plus penalty and interest from the state PT department — small individually but significant when accumulated.",
      "State tax inspectors can conduct enforcement actions for non-compliant establishments.",
      "Statutory auditors flag PT non-compliance — creates adverse audit observations.",
      "Liability surfaces during investor due diligence or M&A transactions — creating friction.",
    ],
    support: [
      "We register your entity and employees for PT in all applicable states.",
      "We calculate monthly PT deductions per employee by state, deposit remittances, and file returns.",
      "We maintain the PT register and all related documentation.",
      "We handle PT assessments and represent you in proceedings before the state PT authority.",
    ],
  },
  {
    title: "ITR & TDS Compliance",
    description:
      "Income Tax Return (ITR) filing and Tax Deducted at Source (TDS) compliance form the core of every business's direct tax obligations. TDS is a mechanism by which the payer deducts tax at the prescribed rate at the source of income before making payment to the payee. Businesses must deduct TDS on salary payments (Section 192), contractor payments (Section 194C), professional fees (Section 194J), rent (Section 194I), interest (Section 194A), and other specified payments. TDS must be deposited by the 7th of the following month and quarterly TDS returns (Form 24Q, 26Q, 27Q) must be filed. On the ITR side, every entity must file annually by the applicable due date, computing advance tax in four tranches (June, September, December, March) to avoid interest under Sections 234B and 234C.",
    benefits: [
      "Accurate TDS deduction and deposit ensures zero interest liability — keeps the tax account clean.",
      "Timely ITR filing enables carry-forward of losses to offset against future income — significant tax saving.",
      "Advance tax planning avoids interest under Sections 234B and 234C.",
      "Clean TDS compliance improves vendor relationships — payees receive TDS credit on time in Form 26AS.",
      "Timely filings and clean tax records build credibility with income tax department, banks, and investors.",
    ],
    risks: [
      "Non-deduction of TDS attracts interest at 1% per month and disallowance of the entire expense in ITR.",
      "Late deposit of TDS attracts interest at 1.5% per month.",
      "Failure to file TDS returns attracts late fees of Rs. 200 per day plus penalty up to the TDS amount.",
      "Non-filing of ITR results in notice under Section 142(1), best judgment assessment, and penalty up to 200% of tax evaded.",
    ],
    support: [
      "We calculate TDS liability for all applicable payments, deposit by the 7th, and file quarterly TDS returns.",
      "We issue Form 16 (salary) and Form 16A (other deductions) to all deductees on time.",
      "We calculate and facilitate advance tax payments in four tranches every year.",
      "We prepare and file ITR for your company, LLP, partnership, or personal income — optimising deductions legally.",
    ],
  },
  {
    title: "MCA Compliance",
    description:
      "MCA (Ministry of Corporate Affairs) compliance refers to the ongoing statutory obligations that companies and LLPs must fulfil annually and on an event-driven basis. Annual compliance for a private limited company includes: holding of Board Meetings (minimum 4 per year), Annual General Meeting (AGM) by September 30, filing of financial statements in Form AOC-4 (within 30 days of AGM), Annual Return in Form MGT-7 (within 60 days of AGM), Director KYC in Form DIR-3 KYC (by September 30), and Form MSME-1 half-yearly. Event-based filings are triggered by change of directors, registered office, share allotment, capital increase, and auditor appointments. LLPs must file Form 8 (by October 30) and Form 11 (by May 30) annually.",
    benefits: [
      "Clean compliance record with ROC — essential for raising funding, bank loans, and government tenders.",
      "Directors avoid disqualification — protecting their ability to serve on other company boards.",
      "Timely filings ensure the company's registered status is always active and in good standing.",
      "Demonstrates corporate governance maturity — valued by investors, banks, and business partners.",
      "Avoids the massive late fees that accumulate rapidly for even short delays in ROC filings.",
    ],
    risks: [
      "Non-filing of annual returns attracts Rs. 100 per day per form — running into lakhs within months for delayed filings.",
      "Director disqualification under Section 164(2) for companies not filing financial statements for 3 consecutive years.",
      "Companies struck off by ROC cannot be revived easily — assets are forfeited to the government in extreme cases.",
      "Non-compliant companies cannot open bank accounts, raise funding, or bid for government tenders.",
    ],
    support: [
      "We prepare a customised MCA compliance calendar for your company covering all annual and event-based filings.",
      "We draft board resolutions, AGM notices, and minutes, and file all required forms with ROC.",
      "We monitor director KYC, MSME-1, and other periodic compliance requirements proactively.",
      "We handle event-based MCA filings — share allotment, director changes, registered office change.",
    ],
  },
];

const Compliances = () => {
  return (
    <Layout>
      <SEO
        title="Compliances | 89TCA"
        description="Ensure your business stays compliant with regulatory requirements"
        keywords="compliances, gst, epf, esi, mca"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
              Compliances
            </h1>
            <p className="mt-4 text-justify text-base leading-7 text-muted-foreground md:text-lg">
              {introParagraph}
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {complianceDetails.map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-[30px] border border-border bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="border-b border-border bg-secondary/20 px-6 py-5 sm:px-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-justify text-sm leading-7 text-muted-foreground md:text-base">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-0 lg:grid-cols-3">
                  <div className="border-b border-border p-6 lg:border-b-0 lg:border-r sm:p-8">
                    <p className="text-sm font-semibold text-foreground">Key Benefits</p>
                    <ul className="mt-4 space-y-3">
                      {section.benefits.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span className="text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-b border-border p-6 lg:border-b-0 lg:border-r sm:p-8">
                    <p className="text-sm font-semibold text-foreground">Non-Compliance Risks</p>
                    <ul className="mt-4 space-y-3">
                      {section.risks.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                          <span className="text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold text-foreground">How we Support</p>
                    <ul className="mt-4 space-y-3">
                      {section.support.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                          <span className="text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Tax Compliances</p>
              <div className="mt-5 space-y-4">
                {taxCompliances.map((item) => (
                  <a
                    key={item.title}
                    href={`/services/${item.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4 transition-shadow hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground text-justify">
                        {item.description}
                      </p>
                      <span className="mt-2 inline-flex text-sm font-semibold text-primary">
                        Learn More &rarr;
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Regulatory Compliances</p>
              <div className="mt-5 space-y-4">
                {regulatoryCompliances.map((item) => (
                  <a
                    key={item.title}
                    href={`/services/${item.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4 transition-shadow hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground text-justify">
                        {item.description}
                      </p>
                      <span className="mt-2 inline-flex text-sm font-semibold text-primary">
                        Learn More &rarr;
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Compliances;




