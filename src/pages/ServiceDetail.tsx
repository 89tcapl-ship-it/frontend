import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/hooks/useSEO";

const serviceData: Record<
  string,
  {
    title: string;
    description: string;
    offers: string[];
  }
> = {
  "private-limited-company": {
    title: "Private Limited Company",
    description:
      "A private limited company is one of the most common structures for startups and growing businesses in India. It offers limited liability, a separate legal identity, and better credibility for fundraising, contracts, and scaling. Investors often prefer this structure because ownership can be transferred more easily and governance is clearly defined. However, a private limited company has higher compliance obligations, including filings, board records, and statutory maintenance. If these are ignored, the company can face penalties, legal notices, and reputational damage. Poor compliance can also affect funding, banking, and long-term business growth.",
    offers: [
      "Limited liability and separate legal identity",
      "Structured ownership and governance",
      "Higher credibility with banks and investors",
      "Compliance calendar and statutory support",
    ],
  },
  "partnership": {
    title: "Partnership",
    description:
      "A partnership is a business structure where two or more people operate a business together and share profits, losses, and responsibilities. It is suitable for businesses where owners want shared control and flexible management. A written partnership deed is highly recommended because it defines rights, duties, capital contribution, and dispute resolution. Without proper documentation, conflicts between partners can become difficult to manage and may lead to legal disputes. Compliance with tax and registration requirements is also important because improper structuring can create avoidable liability and credibility issues with banks, vendors, and authorities.",
    offers: [
      "Flexible management and shared control",
      "Partnership deed drafting and advisory",
      "Registration and tax compliance guidance",
      "Dispute-prevention structuring",
    ],
  },
  "llp": {
    title: "LLP",
    description:
      "A Limited Liability Partnership, or LLP, combines the flexibility of a partnership with limited liability protection for partners. It is often preferred by professional firms, service businesses, and startups that want a formal structure without the heavier compliance of a company. An LLP is a separate legal entity, so partners are generally not personally responsible for business debts beyond their contribution. If annual filings and statutory compliance are missed, the LLP can face penalties, late fees, and even restrictions on business operations. Proper maintenance of records and filings is essential for legal protection and professional credibility.",
    offers: [
      "Separate legal entity with limited liability",
      "Lower compliance vs company structures",
      "Partner contribution and agreement support",
      "Annual filing and compliance assistance",
    ],
  },
  "opc-registration": {
    title: "OPC Registration",
    description:
      "An One Person Company, or OPC, is a business structure designed for a single owner who wants the benefits of a company format. It provides limited liability and a separate legal identity, making it a strong choice for solo entrepreneurs who want a formal and scalable setup. OPCs are useful when the owner wants better recognition with banks, clients, and vendors. Non-compliance with company law filings can lead to penalties and loss of good standing. If not maintained properly, the business may lose legal benefits and face difficulty raising money, opening accounts, or expanding into larger operations.",
    offers: [
      "Single-owner company structure",
      "Limited liability protection",
      "Improved credibility for clients and banks",
      "ROC filings and compliance support",
    ],
  },
  "sole-proprietor": {
    title: "Sole Proprietor",
    description:
      "A sole proprietorship is the simplest business structure, owned and managed by one person. It is commonly used by freelancers, traders, and small local businesses because it is easy to start and has lower compliance requirements. However, it does not create a separate legal entity, so the owner and business are treated as the same for liability purposes. This means personal assets may be at risk if the business faces debts or legal claims. Proper registrations and tax compliance are still important to avoid penalties, notices, and restrictions on banking or government-related transactions.",
    offers: [
      "Fast setup with minimal formalities",
      "Ideal for freelancers and small businesses",
      "Basic registrations and tax guidance",
      "Compliance checklist for smooth operations",
    ],
  },
  "foreign-company-subsidiary": {
    title: "Foreign Company Subsidiary",
    description:
      "A foreign company subsidiary is an Indian company controlled by a foreign parent company. It is used by international businesses that want to establish operations in India while keeping a separate legal presence. This structure helps manage local business activities, taxes, employee compliance, and customer relationships under Indian law. It is important because cross-border businesses must comply with Indian company, tax, and regulatory requirements. If not set up or maintained correctly, the business may face regulatory action, tax exposure, transfer pricing issues, and operational delays. Proper compliance is essential for lawful and efficient market entry.",
    offers: [
      "India market entry structuring",
      "Local compliance and tax setup",
      "Employee and operational registrations",
      "Ongoing regulatory support",
    ],
  },
  "nbfc": {
    title: "NBFC",
    description:
      "A Non-Banking Financial Company, or NBFC, is a financial institution that provides loans, credit, investment, or financial services without holding a banking license. NBFCs are regulated because they deal with public money and lending activities. Registration and compliance are required to ensure financial stability, transparency, and consumer protection. Without proper registration and ongoing regulatory adherence, the entity can face severe penalties, cancellation of approval, and restrictions on conducting financial business. Since NBFCs are heavily regulated, proper governance, reporting, and compliance systems are critical for maintaining trust and avoiding regulatory risk.",
    offers: [
      "Regulatory registration guidance",
      "Compliance framework setup",
      "Governance and reporting support",
      "Ongoing regulatory maintenance",
    ],
  },
  "trust-societies": {
    title: "Trust/Societies",
    description:
      "Trusts and societies are commonly used for charitable, educational, religious, or social welfare activities. They help organize non-profit activities in a structured and legally recognized form. Registration is important because it creates legitimacy, helps with tax benefits, and enables the organization to open accounts, receive donations, and enter agreements. If proper registration and compliance are not done, the organization may struggle to prove its legal status, access exemptions, or receive institutional funding. Poor recordkeeping can also create issues with regulators, donors, and beneficiaries. Ongoing compliance helps preserve transparency and public trust.",
    offers: [
      "Non-profit entity registration",
      "Tax benefit and exemption support",
      "Compliance and record maintenance",
      "Governance best practices",
    ],
  },
  "apartment-association": {
    title: "Apartment Association",
    description:
      "An apartment association is formed by residents to manage common areas, maintenance, payments, and community governance in a residential complex. It helps organize building upkeep, security, vendor management, and resident coordination in a lawful way. Registration is often important for opening bank accounts, collecting maintenance charges, signing vendor contracts, and resolving ownership or management matters. If not properly formed or maintained, disputes over maintenance, accounts, and responsibilities can become difficult to settle. Lack of compliance can also create problems with taxation, contracts, and legal enforceability of the association's decisions.",
    offers: [
      "Association formation and registration",
      "Bank account and vendor contracts support",
      "Governance and compliance guidance",
      "Maintenance and recordkeeping structure",
    ],
  },
  "gst": {
    title: "GST",
    description:
      "GST, or Goods and Services Tax, is the indirect tax system applied to the supply of goods and services in India. Registration is required when a business crosses the threshold limit or falls under mandatory registration categories. It allows businesses to collect tax legally and claim input tax credit on purchases. Without GST registration where required, a business may face tax demand, penalties, blocked input credits, and difficulty working with larger customers or marketplaces. Non-compliance can also affect invoice validity and lead to notices from tax authorities. Proper GST filing keeps the business compliant and operationally smooth.",
    offers: [
      "GST registration and advisory",
      "Return filing and compliance support",
      "Input tax credit guidance",
      "Notice handling and reconciliation",
    ],
  },
  "shops-establishments": {
    title: "Shops & Establishments",
    description:
      "Shops and Establishments registration is a state-level labor compliance required for offices, shops, and commercial establishments. It regulates working hours, leave, employment terms, and workplace conditions. This registration helps prove the business is operating lawfully and is often needed for opening bank accounts, hiring staff, or obtaining other registrations. If not done, businesses may face penalties, inspection issues, and trouble during labor or municipal checks. It can also create problems in employee compliance and contract enforceability. Maintaining this registration supports labor law compliance and improves business credibility.",
    offers: [
      "State-specific registration support",
      "Labor compliance documentation",
      "Renewals and record maintenance",
      "Advisory for inspections",
    ],
  },
  "epf-esi": {
    title: "EPF & ESI",
    description:
      "EPF and ESI are employee welfare compliances in India. EPF, or Employees' Provident Fund, provides retirement savings, while ESI, or Employees' State Insurance, offers medical and social security benefits to eligible employees. These registrations are required once a business meets the applicable employee and wage thresholds. They are important because they protect employees and keep the employer compliant with labor laws. If not followed, the business may face penalties, interest, prosecution risk, and employee disputes. Non-compliance can also affect hiring credibility and expose the employer to backdated contributions and notices.",
    offers: [
      "Registration and threshold guidance",
      "Monthly filings and remittances",
      "Employee compliance management",
      "Support for audits and notices",
    ],
  },
  "epf-and-esi": {
    title: "EPF & ESI",
    description:
      "EPF and ESI are employee welfare compliances in India. EPF, or Employees' Provident Fund, provides retirement savings, while ESI, or Employees' State Insurance, offers medical and social security benefits to eligible employees. These registrations are required once a business meets the applicable employee and wage thresholds. They are important because they protect employees and keep the employer compliant with labor laws. If not followed, the business may face penalties, interest, prosecution risk, and employee disputes. Non-compliance can also affect hiring credibility and expose the employer to backdated contributions and notices.",
    offers: [
      "Registration and threshold guidance",
      "Monthly filings and remittances",
      "Employee compliance management",
      "Support for audits and notices",
    ],
  },
  "itr-and-tds": {
    title: "ITR & TDS",
    description:
      "ITR and TDS compliance is essential for reporting income and deducting tax at source where applicable. ITR, or Income Tax Return, declares income and taxes, while TDS, or Tax Deducted at Source, requires deduction and deposit of tax on certain payments. These are critical for businesses, directors, professionals, and employers. If missed or filed incorrectly, the entity can face penalties, interest, scrutiny, and disallowance of expenses. Non-compliance also affects refund processing and vendor payments. Proper income tax compliance reduces risk and keeps the business financially clean.",
    offers: [
      "Income tax return filing",
      "TDS deduction and deposits",
      "Compliance tracking and support",
      "Notice response assistance",
    ],
  },
  "epf": {
    title: "EPF",
    description:
      "EPF compliance means deducting, depositing, and reporting provident fund contributions for eligible employees on time. It is a statutory employee benefit obligation and must be followed once the business crosses the threshold or becomes otherwise covered. This compliance builds employee security and protects the employer from future liabilities. If not followed, the business may face interest, penalties, and enforcement actions. Employees may also raise disputes if contributions are not deposited correctly. EPF compliance is both a legal and employee welfare requirement.",
    offers: [
      "Provident fund registration",
      "Monthly contribution filings",
      "Employee benefit compliance",
      "Audit and notice support",
    ],
  },
  "esi": {
    title: "ESI",
    description:
      "ESI compliance covers registration, contribution deduction, and timely remittance under the Employees' State Insurance scheme. It provides medical and social protection to eligible workers and is mandatory for qualifying establishments. This compliance is important because it supports employee welfare and meets statutory labor requirements. If ignored, the business may face penalties, prosecution risk, and retrospective demands. Employees can also suffer loss of benefits if contributions are not maintained properly. ESI compliance helps protect both the workforce and the business.",
    offers: [
      "ESI registration and setup",
      "Monthly contributions and filings",
      "Employee benefit compliance",
      "Support for inspections",
    ],
  },
  "pt": {
    title: "PT",
    description:
      "PT, or Professional Tax, is a state-level tax applicable to individuals earning income through employment, profession, or business, depending on the state. Businesses are often required to register, deduct, and remit this tax for eligible employees. It is a statutory obligation and part of routine payroll compliance. If professional tax is not registered or paid properly, the business may face penalties, interest, and compliance notices. Repeated non-compliance can create issues during audits and inspections. Proper PT compliance ensures smooth payroll processing and prevents avoidable legal and financial exposure.",
    offers: [
      "State registration and setup",
      "Payroll compliance integration",
      "Timely deductions and filings",
      "Notice and audit support",
    ],
  },
  "mca": {
    title: "MCA",
    description:
      "MCA compliance refers to statutory filings and obligations under the Ministry of Corporate Affairs for companies and LLPs. This may include annual returns, financial statements, event-based filings, and record maintenance. It is essential for preserving the legal standing of the business and keeping corporate records updated. If MCA filings are delayed or missed, the company can face late fees, penalties, disqualification risks, and problems with directors' compliance status. Proper MCA compliance is critical for corporate governance and future transactions.",
    offers: [
      "Annual returns and filings",
      "Event-based compliance support",
      "Record maintenance guidance",
      "Director compliance tracking",
    ],
  },
  "startup-funding": {
    title: "Startup Funding",
    description:
      "Startup funding refers to capital raised from founders, investors, lenders, or institutions to launch or scale a business. It can include equity, debt, grants, or hybrid structures depending on the stage and business model. Funding is important because it supports product development, hiring, marketing, and expansion. Without adequate funding, startups may struggle to sustain operations or compete effectively. Poorly structured funding can also cause dilution, control issues, or legal complications. Proper planning and documentation improve investor confidence and long-term business stability.",
    offers: [
      "Fundraising strategy and readiness",
      "Pitch and documentation support",
      "Investor communication guidance",
      "Financial structure planning",
    ],
  },
  "due-diligence": {
    title: "Due Diligence",
    description:
      "Due diligence is the process of checking financial, legal, operational, and compliance aspects before an investment, acquisition, or major transaction. It helps buyers, investors, and lenders understand risks and verify the accuracy of business claims. This step is required to avoid hidden liabilities and bad decisions. Without due diligence, a party may invest in a business with tax issues, legal disputes, weak assets, or misleading records. Proper due diligence reduces risk and supports informed decision-making. It is one of the most important steps before funding or acquisition.",
    offers: [
      "Financial and legal review",
      "Risk identification and mitigation",
      "Document verification support",
      "Investor/lender readiness",
    ],
  },
  "valuation": {
    title: "Valuation",
    description:
      "Valuation is the process of estimating the fair value of a business, shareholding, asset, or project. It is used during fundraising, mergers, acquisitions, ESOP planning, tax reporting, and restructuring. A proper valuation helps determine what a business is worth and supports negotiations with investors or buyers. Without a credible valuation, deals may be unfair, disputed, or poorly structured. In regulated transactions, an unsupported value can also create compliance and tax problems. Valuation provides a rational basis for major business decisions.",
    offers: [
      "Business valuation reports",
      "Investor-ready documentation",
      "Transaction support and advisory",
      "Regulatory compliance alignment",
    ],
  },
  "fdi-compliance": {
    title: "FDI Compliance",
    description:
      "FDI compliance relates to the rules governing foreign direct investment into Indian businesses. It includes sectoral restrictions, reporting requirements, valuation norms, and approval or filing obligations where applicable. This compliance is essential for companies receiving foreign investment or dealing with overseas shareholders. If not followed properly, the business may face regulatory action, reporting defects, and transfer or ownership issues. Improper FDI handling can also create tax and legal complications. Correct compliance ensures foreign investment is lawful, transparent, and future-ready.",
    offers: [
      "FDI policy and sector guidance",
      "Reporting and filings support",
      "Valuation and documentation",
      "Ongoing compliance monitoring",
    ],
  },
  "bank-finance": {
    title: "Bank Finance",
    description:
      "Bank finance refers to loans, credit facilities, and other funding arrangements provided by banks to businesses. It is used for working capital, expansion, equipment, inventory, or project funding. Businesses often need strong financial statements, projections, and compliance records to secure bank financing. Without proper documentation and repayment planning, loan applications can be rejected or the business may face stress after borrowing. Missed repayments can lead to penalties, recovery actions, and credit damage. Bank finance is useful when managed with discipline and planning.",
    offers: [
      "Loan documentation support",
      "Financial statement preparation",
      "Projection and repayment planning",
      "Bank liaison assistance",
    ],
  },
  "project-reports": {
    title: "Project Reports",
    description:
      "Project reports present the business plan, financial assumptions, market opportunity, and execution roadmap for a specific project or expansion. They are often required by banks, investors, and government agencies before approving finance or support. A well-prepared project report helps explain viability, expected returns, and repayment ability. Without a proper report, funding applications may be rejected or delayed. Weak projections can also create credibility issues with lenders and stakeholders. Project reports are important for securing approvals and demonstrating readiness.",
    offers: [
      "Project feasibility documentation",
      "Financial assumptions and modeling",
      "Bank and investor-ready reports",
      "Approval and submission support",
    ],
  },
  "statutory-audits": {
    title: "Statutory Audits",
    description:
      "A statutory audit is a legally required examination of financial statements by an independent auditor. It ensures that accounts are prepared in accordance with applicable laws and accounting standards. Companies and other entities may need it based on legal thresholds or specific regulatory requirements. If statutory audit is not done where required, the entity can face penalties, filing issues, and loss of legal compliance. Audit reports also support trust with investors, lenders, and regulators. Statutory audits are important for accountability and transparency.",
    offers: [
      "Audit planning and execution",
      "Compliance-focused review",
      "Statutory reporting support",
      "Stakeholder-ready deliverables",
    ],
  },
  "income-tax-audit": {
    title: "Income Tax Audit",
    description:
      "An income tax audit is a detailed review required under the Income Tax Act for certain businesses or professionals based on turnover or other conditions. It helps verify that books, transactions, and tax positions are accurate and properly documented. This audit is important because it supports correct tax reporting and reduces dispute risk. If not conducted when required, the business may face penalties and scrutiny from the tax department. Non-compliance can also affect return filing and future assessments. Income tax audit ensures tax discipline and compliance.",
    offers: [
      "Tax audit preparation",
      "Documentation and reporting",
      "Compliance review support",
      "Assistance with filings",
    ],
  },
  "internal-audits": {
    title: "Internal Audits",
    description:
      "Internal audits are independent reviews of a business's internal controls, processes, records, and risk management. They help identify errors, inefficiencies, fraud risks, and compliance gaps before they become bigger problems. Internal audits are valuable for improving operations and strengthening governance. Without them, businesses may continue with weak controls, financial leakage, and unmanaged risks. Internal audit findings help management take corrective action early. This is especially useful for growing organizations that need stronger oversight.",
    offers: [
      "Control and process review",
      "Risk identification and mitigation",
      "Operational efficiency insights",
      "Governance improvement guidance",
    ],
  },
  "transfer-pricing-audits": {
    title: "Transfer Pricing Audits",
    description:
      "Transfer pricing audits review transactions between related parties, especially across borders, to ensure they are priced fairly and comply with tax rules. They are important for multinational businesses and companies with cross-border related-party dealings. Proper transfer pricing documentation helps prove that prices are arm's length and defensible. If not maintained properly, the business can face tax adjustments, penalties, and prolonged disputes with authorities. Transfer pricing compliance is critical for managing international tax risk and regulatory scrutiny.",
    offers: [
      "TP documentation support",
      "Benchmarking and analysis",
      "Audit defense preparation",
      "Cross-border compliance guidance",
    ],
  },
  "bank-audits": {
    title: "Bank Audits",
    description:
      "A bank audit is conducted to examine financial records, loan accounts, security documents, and compliance related to banking transactions. It is often required by lenders to verify the health of a borrower's accounts and adherence to loan conditions. Bank audits help protect both the lender and borrower by identifying irregularities early. If not done properly, the business may face loan covenant issues, delayed financing, or disputes over account status. Accurate bank audit support improves financing transparency and lender confidence.",
    offers: [
      "Loan account review support",
      "Documentation and compliance checks",
      "Lender communication assistance",
      "Audit readiness guidance",
    ],
  },
  "pt": {
    title: "PT",
    description:
      "PT, or Professional Tax, is a state-level tax applicable to individuals earning income through employment, profession, or business, depending on the state. Businesses are often required to register, deduct, and remit this tax for eligible employees. It is a statutory obligation and part of routine payroll compliance. If professional tax is not registered or paid properly, the business may face penalties, interest, and compliance notices. Repeated non-compliance can create issues during audits and inspections. Proper PT compliance ensures smooth payroll processing and prevents avoidable legal and financial exposure.",
    offers: [
      "State registration and setup",
      "Payroll compliance integration",
      "Timely deductions and filings",
      "Notice and audit support",
    ],
  },
  "trade-license": {
    title: "Trade License",
    description:
      "A trade license is a permission issued by the local authority to carry on a specific business activity in a particular location. It helps ensure the business meets municipal rules, zoning requirements, and public safety standards. Many businesses need it before starting operations, especially shops, restaurants, and service businesses. Without a trade license, authorities can impose fines, stop operations, or deny other approvals. It also creates issues during inspections, insurance claims, and contract execution. A valid trade license supports lawful and uninterrupted business activity.",
    offers: [
      "Municipal application support",
      "Document preparation and filing",
      "Renewals and compliance guidance",
      "Inspection readiness support",
    ],
  },
  "fssai": {
    title: "FSSAI",
    description:
      "FSSAI registration or license is required for businesses involved in food manufacturing, storage, distribution, sale, or service. It ensures the business complies with food safety and hygiene standards under Indian law. This registration is important because it builds consumer trust and allows lawful operation in the food sector. Without it, businesses can face heavy penalties, seizure of goods, closure orders, and reputational damage. It can also affect partnerships with delivery platforms, retailers, and institutional buyers. Proper FSSAI compliance is essential for safety, legality, and market acceptance.",
    offers: [
      "Registration and license support",
      "Food safety compliance guidance",
      "Renewals and updates handling",
      "Partner onboarding readiness",
    ],
  },
  "iec": {
    title: "IEC",
    description:
      "IEC, or Import Export Code, is required for businesses engaged in import or export activities in India. It is a key identification number issued for cross-border trade transactions and is often needed to clear shipments, receive foreign payments, and deal with customs. Without IEC, import-export operations cannot be carried out legally in most cases. Businesses without proper IEC may face shipment delays, banking issues, and customs rejection. It is an essential registration for any company looking to expand into international trade and global markets.",
    offers: [
      "IEC application and issuance",
      "Customs and banking readiness",
      "International trade compliance",
      "Ongoing advisory support",
    ],
  },
  "msme-udyam": {
    title: "MSME / UDYAM",
    description:
      "MSME registration under Udyam gives official recognition to micro, small, and medium enterprises in India. It helps businesses access government schemes, credit support, subsidy benefits, and priority in some procurement opportunities. Registration is useful for improving business credibility and financial support options. Without MSME recognition, businesses may miss out on beneficial schemes, easier loan terms, and certain payment protections. It can also limit access to government incentives and formal support systems. Proper registration helps small businesses grow with institutional backing.",
    offers: [
      "Udyam registration assistance",
      "Access to schemes and benefits",
      "Documentation and eligibility support",
      "Renewal and updates guidance",
    ],
  },
  "trademark": {
    title: "Trademark",
    description:
      "A trademark protects a brand name, logo, symbol, or slogan that identifies a business's products or services. It is important because it prevents others from using a confusingly similar brand and helps build long-term brand value. Registration gives legal rights and strengthens a business's position in disputes or infringement matters. Without trademark protection, competitors may copy the brand, causing customer confusion and loss of goodwill. In some cases, the business may even lose the right to use a name it has already built. Trademark registration is a key step in brand protection.",
    offers: [
      "Name search and filing support",
      "Class selection and documentation",
      "Application tracking and responses",
      "Brand protection guidance",
    ],
  },
  "book-keeping": {
    title: "Book Keeping",
    description:
      "Bookkeeping is the process of recording and organizing all financial transactions of a business. It is essential for understanding income, expenses, cash flow, taxes, and profitability. Accurate bookkeeping helps businesses make better decisions and stay prepared for audits, filings, and funding discussions. If records are not maintained properly, the business may face tax errors, missed deductions, delayed filings, and financial confusion. Poor books can also weaken credibility with banks, investors, and authorities. Good bookkeeping is the foundation of sound financial management.",
    offers: [
      "Monthly bookkeeping and ledgers",
      "Reconciliations and reporting",
      "Audit-ready financial records",
      "Insights for decision making",
    ],
  },
  "virtual-accountant": {
    title: "Virtual Accountant",
    description:
      "A virtual accountant provides remote accounting support without requiring a full-time in-house accountant. Services may include ledger maintenance, reconciliations, financial reporting, and compliance support. This is useful for businesses that want expert support at lower cost and with greater flexibility. A virtual accountant helps reduce errors and keeps finances organized and timely. Without proper accounting support, businesses may miss tax deadlines, make reporting mistakes, and face cash flow problems. A virtual accountant adds structure, efficiency, and financial visibility.",
    offers: [
      "Remote accounting support",
      "Ledger and reconciliation upkeep",
      "Compliance-ready reporting",
      "Flexible and cost-effective setup",
    ],
  },
  "virtual-cfo": {
    title: "Virtual CFO",
    description:
      "A virtual CFO is a part-time or remote senior finance expert who provides strategic financial guidance to a business. They help with budgeting, forecasting, working capital, financial controls, fundraising preparation, and business planning. This service is valuable for growing companies that need CFO-level insight without hiring a full-time executive. Without strategic financial oversight, businesses may struggle with poor planning, weak controls, and unstructured decision-making. A virtual CFO helps improve financial discipline, investor readiness, and long-term growth planning.",
    offers: [
      "Budgeting and forecasting",
      "Cash flow and working capital planning",
      "Investor readiness support",
      "Strategic financial guidance",
    ],
  },
  "payroll": {
    title: "Payroll",
    description:
      "Payroll is the process of calculating and paying employee salaries while ensuring compliance with applicable deductions and statutory obligations. It includes salary computation, leave adjustments, tax deductions, PF, ESI, professional tax, and payslip generation. Accurate payroll is important for employee trust and legal compliance. If payroll is mishandled, the company may face salary disputes, penalties, tax issues, and employee dissatisfaction. Errors in payroll can also affect statutory filings and create compliance gaps. Proper payroll management keeps the workforce paid correctly and the business legally protected.",
    offers: [
      "Salary processing and compliance",
      "Statutory deductions and filings",
      "Payslip generation and records",
      "Error-free payroll management",
    ],
  },
  "mis-reports": {
    title: "MIS Reports",
    description:
      "MIS reports, or Management Information System reports, present business data in a structured way for decision-making. They may include sales trends, expenses, cash flow, profitability, receivables, and performance analysis. These reports help management understand what is working and where corrective action is needed. Without regular MIS reporting, businesses may make decisions blindly and miss early warning signs. Poor reporting can lead to cash shortages, operational inefficiency, and weak strategy. MIS reports are important for control, planning, and informed growth.",
    offers: [
      "Performance dashboards and summaries",
      "Cash flow and profitability tracking",
      "Receivables and expense analysis",
      "Management-ready insights",
    ],
  },
  "hr-services": {
    title: "HR Services",
    description:
      "HR services support employee hiring, onboarding, policies, records, attendance, compliance, and internal communication. They help businesses manage people systems professionally and maintain a healthy workplace structure. HR support is important because employment issues can quickly become costly if handled poorly. Without proper HR processes, businesses may face disputes, compliance errors, poor retention, and inconsistent employee management. Good HR systems also help with payroll, labor law compliance, and culture building. HR services make the organization more stable and scalable.",
    offers: [
      "HR policies and documentation",
      "Onboarding and attendance systems",
      "Compliance and record keeping",
      "Employee engagement support",
    ],
  },
  "compliance-health-check": {
    title: "Compliance Health Check",
    description:
      "A compliance health check is a broad review of a business's legal, tax, labor, and corporate compliance status. It identifies gaps, missed filings, expired registrations, and potential risk areas before they lead to penalties. This service is useful for companies that want a preventive review of their compliance position. Without it, businesses may unknowingly continue with hidden non-compliance and face notices, fines, or operational disruptions. A health check helps management correct issues proactively and maintain good standing.",
    offers: [
      "End-to-end compliance review",
      "Gap identification and remediation",
      "Preventive risk assessment",
      "Actionable compliance roadmap",
    ],
  },
};

const defaultService = {
  title: "Service Detail",
  description:
    "Professional advisory and compliance support tailored to your business requirements.",
  offers: [
    "Requirement assessment and scoping",
    "Dedicated engagement support",
    "Clear compliance timelines",
    "Documentation and reporting assistance",
  ],
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = useMemo(() => {
    if (!slug) return defaultService;
    return serviceData[slug] || {
      ...defaultService,
      title: slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    };
  }, [slug]);

  return (
    <Layout>
      <SEO
        title={`${service.title} | 89TCA`}
        description={service.description}
        keywords={`${service.title}, chartered accountant, compliance`}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">Service</p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-soft p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">What We Offer</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-muted-foreground">
                {service.offers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card-soft p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Why Choose Us</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Experience</li>
                <li>Expertise</li>
                <li>Compliance-focused approach</li>
              </ul>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground">
                  Get Consultation
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Talk to our experts about your specific service requirements.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary mt-4 inline-flex"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
