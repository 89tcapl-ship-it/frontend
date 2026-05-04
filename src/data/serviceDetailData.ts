export interface ServiceDetailData {
  title: string;
  description: string;
  keyBenefits?: string[];
  limitations?: string[];
  support?: string[];
  nonComplianceRisks?: string[];
  offers?: string[];
}

export const serviceDetailData: Record<string, ServiceDetailData> = {
  "sole-proprietor": {
    title: "Sole Proprietorship",
    description: "A Sole Proprietorship is the simplest and most common form of business in India, ideal for individual entrepreneurs who want full control over their operations. The business and the owner are legally the same entity — the owner personally owns all assets and is personally liable for all debts and obligations. No separate legal entity registration is required; however, registrations such as GST, trade licence, or Shops & Establishments are typically needed to establish business identity. Sole proprietorships are easy to set up, have minimal compliance requirements, and offer complete decision-making authority to the owner. Well-suited for freelancers, small traders, home-based businesses, and service providers who are starting out. Business income is treated as the personal income of the proprietor and taxed at individual slab rates, making returns simpler to file.",
    keyBenefits: [
      "Extremely easy and low-cost to set up — no complex registration or fees for the entity itself.",
      "Complete ownership and control — no need to consult partners or shareholders for decisions.",
      "Simple tax filing — business income is clubbed with personal income, requiring only ITR-3 or ITR-4.",
      "Flexibility to wind up or convert to a larger entity as the business grows.",
      "Ideal entry point for first-time entrepreneurs to test business ideas with minimal overhead.",
    ],
    limitations: [
      "Personal assets are at risk — creditors can attach your home, savings, and personal property to recover business debts.",
      "Cannot raise equity investment or bring in formal partners, limiting business growth potential.",
      "Without proper registrations (GST, trade licence), you may face fines, penalties, and difficulty opening business bank accounts.",
      "Business lacks separate legal identity — limits credibility with large clients, banks, and government agencies.",
    ],
    support: [
      "We assess your business model and advise whether a sole proprietorship is the right starting structure.",
      "We handle all allied registrations — GST, trade licence, Shops & Establishments — to give your business legal standing.",
      "We provide ongoing bookkeeping and ITR filing so you stay compliant from day one.",
      "We guide you on the ideal time to upgrade your business structure as you scale.",
    ],
  },

  "partnership": {
    title: "Partnership",
    description: "A Partnership firm is a business structure where two or more individuals agree to share the profits and losses of a business carried on together. Governed by the Indian Partnership Act, 1932, this structure is popular among professionals, family businesses, and small traders. The partnership is established through a Partnership Deed outlining each partner's roles, capital contribution, and profit-sharing ratio. While registration is not mandatory, an unregistered firm cannot sue third parties or enforce contractual rights in court. Partners are jointly and severally liable for the firm's debts — personal assets are exposed to business liabilities. A registered partnership firm is taxed at a flat rate of 30%, and partners receive their share of profit tax-free.",
    keyBenefits: [
      "Simple to form with minimal registration cost — a well-drafted Partnership Deed is the primary requirement.",
      "Flexible profit-sharing and management structure adaptable to the needs of the partners.",
      "Registered partnership firms are taxed at 30% flat, and partners receive profit tax-free — often efficient for higher incomes.",
      "Easier to pool resources and complementary skills compared to a solo venture.",
      "Suitable for professionals (CA firms, law firms) who want a formal practice without corporate complexity.",
    ],
    limitations: [
      "Partners face unlimited personal liability — a failing business can lead to attachment of personal assets.",
      "An unregistered partnership cannot file suits to enforce contractual rights — severe legal disadvantage in disputes.",
      "Absence of a formal deed can lead to serious disputes over profit-sharing, capital, and authority.",
      "Lack of separate legal identity makes it difficult to open accounts, obtain loans, or attract investors.",
    ],
    support: [
      "We draft comprehensive Partnership Deeds tailored to your business, covering all essential clauses.",
      "We register the firm with the Registrar of Firms and complete all allied registrations (GST, PAN, TAN).",
      "We advise on profit-sharing structures that are tax-efficient and dispute-free.",
      "We handle annual tax filings and compliance requirements for the firm.",
    ],
  },

  "llp": {
    title: "LLP (Limited Liability Partnership)",
    description: "A Limited Liability Partnership (LLP) is a hybrid business structure that combines the flexibility of a partnership with the limited liability protection of a private limited company. Introduced under the LLP Act, 2008, an LLP is a body corporate with a separate legal identity distinct from its partners. Partners are not personally liable for the misconduct or negligence of other partners, and their liability is limited to their agreed contribution. An LLP is governed by an LLP Agreement and must have at least two Designated Partners, one of whom must be a resident of India. LLPs must file annual returns and financial statements with the MCA. Popular among CAs, Architects, Lawyers, Consultants, and startups. Taxed at a flat 30% with no dividend distribution tax on profits distributed to partners.",
    keyBenefits: [
      "Partners enjoy limited liability protection — personal assets are safe from business creditors.",
      "Separate legal entity — the LLP can own assets, enter contracts, and sue/be sued independently.",
      "Lower compliance burden and cost compared to a private limited company.",
      "Tax efficiency — taxed at 30% flat with no dividend distribution tax on profit distributed to partners.",
      "Credibility and recognition — LLPs are preferred by banks, clients, and government agencies over unregistered entities.",
    ],
    limitations: [
      "Non-filing of annual returns (Form 8 and Form 11) attracts penalties of Rs. 100 per day per form.",
      "Cannot raise equity investment — LLPs cannot issue shares, limiting access to venture capital or angel funding.",
      "Conversion to a company (for fundraising or IPO purposes) involves a more complex process than converting a partnership.",
      "Less familiar to international investors compared to a private limited company structure.",
    ],
    support: [
      "We handle end-to-end LLP incorporation — DPIN, DSC, name approval, LLP Agreement, and Certificate of Incorporation.",
      "We draft a comprehensive LLP Agreement tailored to your business and partner structure.",
      "We manage all annual compliance — Form 8, Form 11, ITR-5, and GST returns.",
      "We advise on converting existing partnerships or proprietorships into LLPs for better protection and credibility.",
    ],
  },

  "opc-registration": {
    title: "OPC (One Person Company)",
    description: "A One Person Company (OPC) allows a single individual to operate a company with limited liability — combining the simplicity of a sole proprietorship with the legal protection of a private limited company. Introduced under the Companies Act, 2013, an OPC must have a nominee director specified in the MoA, who will take over in the event of the sole member's death or incapacity. OPCs are exempt from holding Annual General Meetings (AGMs), reducing compliance burden. However, they must convert to a private limited company if turnover exceeds Rs. 2 crore or paid-up capital exceeds Rs. 50 lakh. OPCs are taxed at the standard corporate tax rate (currently 22% under Section 115BAA for domestic companies).",
    keyBenefits: [
      "Complete limited liability protection — personal assets are fully protected from business creditors.",
      "Corporate credibility — OPCs are viewed more favourably by banks, vendors, and clients than sole proprietorships.",
      "Lower tax rate — taxed at corporate rate, which can be more efficient than individual slab rates.",
      "Separate legal identity enables the OPC to own property, sign contracts, and raise debt in its own name.",
      "Simpler compliance compared to a private limited company — no AGM requirement.",
    ],
    limitations: [
      "Mandatory conversion on crossing Rs. 2 crore turnover or Rs. 50 lakh paid-up capital — triggers additional compliance.",
      "Cannot raise equity from more than one shareholder — cannot have angel or VC investors in this structure.",
      "Only Indian citizen residents can incorporate an OPC — limits cross-border business ownership.",
      "Nominee arrangements need careful documentation to avoid complications in case of unforeseen events.",
    ],
    support: [
      "We handle OPC incorporation from start to finish — DIN, DSC, name approval, MoA/AoA, and Certificate of Incorporation.",
      "We advise on nominee director selection and ensure all nominee-related documentation is in place.",
      "We manage all annual compliances — ROC filings, ITR, GST returns, and board resolutions.",
      "We monitor turnover thresholds and guide you on conversion to a private limited company when required.",
    ],
  },

  "private-limited-company": {
    title: "Private Limited Company",
    description: "A Private Limited Company is the most popular business structure among startups, SMEs, and growth-oriented businesses in India. Governed by the Companies Act, 2013, it is a separate legal entity with a distinct existence from its shareholders and directors. Requires a minimum of two directors and two shareholders (who may be the same persons), with a maximum of 200 shareholders. The structure restricts share transfers and prohibits public subscription. It has perpetual succession, separate legal identity, and the ability to raise equity funding from angels and VCs. Must hold annual general meetings, maintain statutory registers, file annual returns with the ROC, and have accounts audited by a CA. Taxed at the flat corporate tax rate.",
    keyBenefits: [
      "The most investor-friendly structure — VCs, angels, and institutions prefer to invest in private limited companies.",
      "Limited liability for all shareholders — personal wealth is fully protected from company debts.",
      "Separate legal identity — the company can own property, sue and be sued, and enter contracts independently.",
      "Ability to issue ESOPs to attract top talent and retain key employees.",
      "High credibility with banks (better loan terms), clients, government departments, and international partners.",
    ],
    limitations: [
      "Higher compliance burden compared to LLP or partnership — mandatory board meetings, AGM, ROC filings, and statutory audit.",
      "At least two directors and shareholders required — cannot be a single-person structure.",
      "Cannot make a public offer of shares — raises capital only through private placements.",
      "Director disqualification risk if filings are not done — impacts the director's ability to serve on other boards.",
    ],
    support: [
      "We handle end-to-end incorporation — DIN, DSC, name approval, MoA, AoA, and Certificate of Incorporation.",
      "We provide ongoing statutory compliance — board meetings, annual returns, ROC filings, and share allotments.",
      "We conduct mandatory statutory audits and prepare financials as per Companies Act requirements.",
      "We assist with ESOP structuring, shareholder agreements, and investor-ready documentation.",
    ],
  },

  "foreign-company-subsidiary": {
    title: "Foreign Company – Subsidiary",
    description: "A Foreign Company Subsidiary is a private limited company incorporated in India that is wholly or majority-owned by a foreign parent company. Under the Companies Act, 2013 and FEMA, foreign companies can establish a 100% owned subsidiary in India in sectors where FDI is permitted under the automatic route. The subsidiary is a separate legal entity — it has its own PAN, GST, bank accounts, and is subject to Indian laws. Setting up requires compliance with both Indian corporate law and FEMA regulations governing FDI: obtaining a FIRC as evidence of capital brought in, filing FC-GPR with the RBI within 30 days of share allotment, and compliance with transfer pricing regulations. Annual compliance includes FLA returns with RBI and regular corporate filings.",
    keyBenefits: [
      "Enables the foreign parent to establish a full-fledged operational presence in the world's fastest growing major economy.",
      "100% ownership allowed in most sectors under the automatic FDI route — no government approval needed.",
      "Profits and dividends can be repatriated to the parent company after applicable TDS.",
      "Access to India's large skilled workforce, growing consumer market, and government incentives.",
      "Strong legal framework protects the parent company's intellectual property and business interests.",
    ],
    support: [
      "We provide end-to-end support for subsidiary incorporation — from DSC procurement to Certificate of Incorporation.",
      "We advise on the suitable FDI route for your sector and ensure all RBI/FEMA compliances are met.",
      "We handle transfer pricing documentation, FLA filings, and APR submissions.",
      "We provide ongoing corporate compliance, tax filing, and statutory audit services for the subsidiary.",
    ],
  },

  "nbfc": {
    title: "NBFC (Non-Banking Financial Company)",
    description: "A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act, 2013 engaged in the business of loans, advances, acquisition of securities, leasing, hire-purchase, or chit business. NBFCs are regulated by the Reserve Bank of India (RBI) under the RBI Act, 1934. Unlike banks, NBFCs cannot accept demand deposits or issue cheques. They play a crucial role in extending credit to underserved segments — small businesses, rural populations, and individuals with limited access to traditional banking. Categories include NBFC-MFI, NBFC-P2P, NBFC-ICC, Housing Finance Companies, and more. To register, a company must have a minimum Net Owned Fund (NOF) of Rs. 10 crore and obtain a Certificate of Registration (CoR) from the RBI before commencing activities.",
    keyBenefits: [
      "Ability to offer financial products — loans, investments, leasing — under a legitimate RBI-approved framework.",
      "Access to public funds through NCDs (Non-Convertible Debentures) and other market instruments.",
      "Credibility and trust with borrowers, investors, and business partners.",
      "Eligibility for co-lending arrangements with banks under RBI guidelines.",
      "Ability to raise equity from domestic and foreign investors under the fintech-friendly regulatory framework.",
    ],
    support: [
      "We advise on the most suitable NBFC category for your business model and guide you on meeting eligibility criteria.",
      "We prepare and file the RBI registration application and liaise with RBI on your behalf.",
      "We set up all requisite compliance systems — Fair Practice Code, KYC norms, and internal audit framework.",
      "We handle ongoing RBI reporting obligations — NBS returns, annual audits, and FPC-related disclosures.",
    ],
  },

  "trust-societies": {
    title: "Trust / Society",
    description: "A Trust or Society is a non-profit legal entity formed for charitable, educational, religious, or social objectives. Trusts are governed by the Indian Trusts Act, 1882 or state-specific public trust acts; societies are registered under the Societies Registration Act, 1860. A trust is formed by a Trust Deed; a society requires a Memorandum of Association and Bye-Laws signed by at least seven persons. Both can receive donations, apply for tax-exempt status under Section 12A, and receive foreign contributions under FCRA registration. Organisations registered under Section 80G can offer donors a tax deduction. NGOs, educational institutions, hospitals, religious bodies, and community organisations typically use these structures.",
    keyBenefits: [
      "Enjoy income tax exemption under Section 12A on income applied for charitable purposes.",
      "80G registration enables donors to claim tax deductions — significantly boosting fundraising ability.",
      "Eligible to receive CSR funds from companies under the Companies Act, 2013.",
      "Access to FCRA registration to receive foreign donations legitimately.",
      "Legal recognition and public trust that enhances credibility with government bodies, donors, and beneficiaries.",
    ],
    support: [
      "We draft Trust Deeds and Societies' Memoranda that are legally sound and aligned with your objectives.",
      "We handle registration with the Sub-Registrar (trust) or Registrar of Societies and obtain necessary certifications.",
      "We apply for Section 12A, 80G, and FCRA registrations to maximise your eligibility for funding.",
      "We provide ongoing compliance support — annual returns, audits, and renewal of registrations.",
    ],
  },

  "apartment-association": {
    title: "Apartment Association",
    description: "An Apartment Association (Residents' Welfare Association / RWA) is a legal entity formed by residents of an apartment complex to manage common areas, services, and funds collectively. Typically registered under the Societies Registration Act, 1860 or relevant state co-operative society laws. The association maintains common areas such as lobbies, lifts, parking, gardens, and security. Members pay monthly maintenance charges managed by the association. A registered apartment association can open bank accounts, file income tax returns, enter into legal agreements, and enforce maintenance payment from defaulting residents. Income up to a certain threshold from members is treated as a mutual receipt and is not taxable.",
    keyBenefits: [
      "Legal standing to open dedicated bank accounts, enforce bye-laws, and enter contracts with vendors.",
      "Tax efficiency — maintenance received from members is generally treated as mutual receipts and not taxable.",
      "Ability to negotiate with builders, municipal authorities, and government departments as a recognised legal body.",
      "Transparency and accountability in fund management builds resident trust and long-term community harmony.",
      "Eligibility to apply for water connections, electricity in common areas, and other civic services in the association's name.",
    ],
    support: [
      "We assist with registration of your apartment association under the applicable state law.",
      "We draft Memorandum, Bye-Laws, and Committee resolutions tailored to your residential complex's needs.",
      "We set up accounting systems to manage maintenance collections, expense tracking, and bank reconciliations.",
      "We handle GST registration (if applicable), ITR filing, and all regulatory compliance for the association.",
    ],
  },

  "gst": {
    title: "GST Registration",
    description: "Goods and Services Tax (GST) is a unified indirect tax that replaced multiple cascading taxes like VAT, service tax, and excise duty, effective July 1, 2017. Registration is mandatory for businesses with aggregate annual turnover exceeding Rs. 40 lakh (goods) or Rs. 20 lakh (services), or Rs. 10 lakh in special category states. Additionally, businesses involved in inter-state supply, e-commerce operations, or acting as agents must register regardless of turnover. GST registration provides a unique 15-digit GSTIN that allows the business to collect GST, avail Input Tax Credit (ITC) on purchases, and file periodic returns (GSTR-1, GSTR-3B, GSTR-9). GST has become increasingly automated with e-invoicing mandates, e-way bills, and real-time data matching between buyers and sellers.",
    keyBenefits: [
      "Ability to collect GST from customers and avail ITC on all business purchases — directly reduces tax outflow.",
      "Legal recognition and market credibility — B2B clients and government departments require GSTIN of vendors.",
      "Eligible to supply goods and services across India without restriction.",
      "Access to refund of ITC in case of exports or inverted duty structure.",
      "Real-time compliance data helps businesses maintain clean financial records, improving bankability.",
    ],
    support: [
      "We obtain GST registration for your business promptly, including GSTIN linked to your preferred place of business.",
      "We file all GST returns (GSTR-1, GSTR-3B, GSTR-9) on time to avoid late fees and ITC mismatches.",
      "We handle e-invoicing setup, e-way bill generation, and monthly GST reconciliation.",
      "We represent you in GST notices, assessments, audits, and refund claims.",
    ],
    nonComplianceRisks: [
      "Operating without mandatory GST registration is a punishable offence — penalty of 10% of the tax amount or Rs. 10,000, whichever is higher.",
      "Inability to claim Input Tax Credit on purchases — increases effective cost of operations.",
      "Your buyers cannot claim ITC against purchases from you — making you uncompetitive in B2B markets.",
      "Risk of GST scrutiny, assessment, and recovery proceedings with interest at 18% per annum on unpaid taxes.",
    ],
  },

  "shops-establishments": {
    title: "Shops & Establishments (Labour) Registration",
    description: "The Shops and Commercial Establishments Act is a state-level legislation regulating working conditions of employees in shops, hotels, restaurants, offices, and other commercial establishments. Every business must obtain a Shops & Establishments licence from the local municipal authority or labour department within 30 days of commencement. The registration covers working hours, rest intervals, overtime, weekly holidays, annual leave with wages, and employment of children and women. The licence must be prominently displayed and renewed periodically. Many banks require it to open current accounts, and it serves as basic proof of business existence and address. In several states the process has been digitised, making online registration quick and straightforward.",
    keyBenefits: [
      "Basic legal recognition for your business — required by banks, vendors, and government agencies.",
      "Clear regulatory framework for employment — reduces risk of labour disputes and inspector action.",
      "Demonstrates compliance to clients and employees — enhances business credibility.",
      "Foundation for other labour law registrations such as PF, ESI, and PT.",
      "Protects the employer with a documented framework for leave, working hours, and employee conduct.",
    ],
    support: [
      "We obtain Shops & Establishments registration from the relevant state authority, online or offline as applicable.",
      "We handle annual renewal and maintain records on your behalf.",
      "We advise on state-specific provisions and ensure your employment practices comply with the Act.",
      "We handle related labour compliances — muster rolls, attendance registers, and wage registers.",
    ],
    nonComplianceRisks: [
      "Failure to register attracts financial penalties under the state Shops Act.",
      "Banks may refuse to open current accounts without the Shops & Establishments certificate.",
      "Labour inspector can issue notices, conduct inspections, and penalise for non-maintenance of registers and records.",
      "Employees can raise complaints regarding working hours, overtime pay, and leave — exposing the employer to legal proceedings.",
    ],
  },

  "epf-esi": {
    title: "EPF & ESI Registration",
    description: "The Employees' Provident Fund (EPF) and Employees' State Insurance (ESI) are two of the most important social security schemes in India. EPF registration is mandatory for establishments with 20 or more employees; 12% of basic salary is contributed by each — the employee and the employer. ESI registration is mandatory for establishments with 10 or more employees where some employees draw wages up to Rs. 21,000 per month; contributions are 0.75% from the employee and 3.25% from the employer. ESI provides comprehensive medical, maternity, disability, and family pension benefits. Both EPF and ESI require monthly filings and payment of contributions by the 15th of the following month. Employees view EPF and ESI compliance as a mark of the employer's credibility and commitment to their welfare.",
    keyBenefits: [
      "Builds trust and loyalty among employees — retirement savings and health coverage are key benefits.",
      "Competitive employer brand — EPF and ESI compliance is expected by quality talent.",
      "Employees can access emergency PF advances for medical, housing, and education purposes.",
      "ESI provides cashless medical treatment at ESI hospitals — a valuable benefit in the absence of private insurance.",
      "Compliance certificates are required for government tenders, bank loans, and client due diligence.",
    ],
    support: [
      "We register your establishment with EPFO and ESIC and complete all initial formalities.",
      "We calculate monthly contributions, prepare ECR for PF, and file ESI returns every month.",
      "We assist employees with UAN activation, KYC updates, and PF claim settlements.",
      "We represent you in EPFO/ESIC inspections and respond to show cause notices on your behalf.",
    ],
    nonComplianceRisks: [
      "Non-registration when eligible is a punishable offence — liable for damages up to 100% of arrears and prosecution.",
      "Late payment of PF contributions attracts interest at 12% per annum plus damages.",
      "Employees can complain to EPFO/ESIC, triggering inspections, assessments, and recovery proceedings.",
      "Non-compliance disqualifies you from government tenders and contracts requiring PF/ESI compliance certificates.",
    ],
  },

  "pt": {
    title: "PT (Professional Tax) Registration",
    description: "Professional Tax is a state-level tax levied on all salaried and self-employed individuals, as well as companies employing staff. The tax is deducted by the employer from the employee's salary and remitted to the state government. Rates vary by state — in Karnataka, for example, the tax is Rs. 200 per month for employees earning above a specified threshold. Employers must obtain both an Employer Registration Certificate (RC) and an Enrollment Certificate (EC). PT is deductible as a business expense and also deductible from the employee's taxable income under Section 16 of the Income Tax Act. Multi-state employers must manage separate registrations and compliance calendars for each applicable state.",
    keyBenefits: [
      "Professional tax deducted is a legitimate business expense, reducing your taxable income.",
      "Employees can claim PT deduction from their gross salary, reducing personal income tax liability.",
      "Low financial outgo — PT rates are nominal (typically Rs. 200/month per employee in most states).",
      "Demonstrates regulatory compliance to employees, auditors, and potential investors.",
      "Avoids cumulative liability — timely payment prevents arrears from building up over years.",
    ],
    support: [
      "We obtain PT Registration (Employer RC and EC) with the relevant state authority.",
      "We calculate monthly PT liability per employee, deduct from salaries, and file PT returns.",
      "We handle PT compliance for multi-state operations where different state rules apply.",
      "We assist with PT assessments and resolve any notices from the state PT authority.",
    ],
    nonComplianceRisks: [
      "Arrears of PT plus penalty and interest from the state PT department — small individually but significant when accumulated.",
      "State tax inspectors can conduct enforcement actions for non-compliant establishments.",
      "Statutory auditors flag PT non-compliance — creates adverse audit observations in the annual report.",
      "Liability surfaces during investor due diligence or M&A transactions — creating friction and escrow requirements.",
    ],
  },

  "trade-license": {
    title: "Trade Licence",
    description: "A Trade Licence is a permission granted by the local municipal authority allowing a business to carry on a specific trade or activity at a specific location. It certifies that the activity is safe, non-hazardous, and compliant with local laws and regulations. Every business — shops, restaurants, factories, offices, hotels, entertainment venues — requires a trade licence. Requirements, fees, and renewal timelines vary by municipality. The Municipal Corporation verifies that premises comply with building bye-laws, health and safety norms, and zoning regulations before issuing the licence. The licence is granted for one year and must be renewed annually. It is often required by banks, landlords, and government agencies as proof of legitimate business activity at a particular location.",
    keyBenefits: [
      "Legal permission to operate your specific type of business at your specific location.",
      "Required document for bank account opening, GST registration, and other business registrations.",
      "Demonstrates compliance with local municipal laws — builds trust with landlords, clients, and vendors.",
      "Protects you from complaints by neighbours or competitors who may report you to municipal authorities.",
      "Enables your business to appear in municipal records — facilitates obtaining water connections, electricity, and waste disposal.",
    ],
    support: [
      "We identify the correct municipal authority and trade licence category applicable to your business.",
      "We prepare the application, compile required documents, and submit for trade licence on your behalf.",
      "We handle annual renewal to ensure your licence is always current.",
      "We advise on trade licence requirements if you operate from multiple locations across different municipalities.",
    ],
    nonComplianceRisks: [
      "Municipal authorities can seal and shut down business premises operating without a valid trade licence.",
      "Operating without a trade licence attracts daily fines — and in some municipalities, criminal prosecution.",
      "Banks may refuse to open current accounts or renew overdraft facilities without a valid trade licence.",
      "Vendors and clients conducting due diligence may disengage from businesses that cannot produce a valid trade licence.",
    ],
  },

  "fssai": {
    title: "FSSAI Registration / Licence",
    description: "The Food Safety and Standards Authority of India (FSSAI) is the apex regulator for food businesses in India. Any entity engaged in manufacturing, processing, storage, distribution, or sale of food products must obtain FSSAI registration or licence. Small food businesses with turnover up to Rs. 12 lakh per annum require Basic Registration; businesses with turnover between Rs. 12 lakh and Rs. 20 crore require a State Licence; large manufacturers, importers, exporters, and multi-state businesses require a Central Licence. The FSSAI number must be printed on all food products and displayed at the place of business. FSSAI sets standards for food safety, labelling, additives, contaminants, and hygiene, and conducts inspections to verify compliance.",
    keyBenefits: [
      "Legal permission to manufacture, sell, and distribute food products across India.",
      "Consumer trust — the FSSAI logo on your product signals quality and safety assurance.",
      "Mandatory for listing on major e-commerce and food delivery platforms — critical for digital food businesses.",
      "Enables export — FSSAI compliance is a prerequisite for exporting food products.",
      "Access to government procurement opportunities — government canteens and institutions require FSSAI-certified vendors.",
    ],
    support: [
      "We assess your business scale and nature to determine whether Basic, State, or Central FSSAI licence is required.",
      "We prepare the FSSAI application, compile all required documents, and file with the appropriate authority.",
      "We assist with annual renewal and modification of licence for changes in address, products, or capacity.",
      "We advise on FSSAI labelling requirements and food safety compliance systems.",
    ],
    nonComplianceRisks: [
      "Operating a food business without FSSAI registration/licence is an offence attracting fines up to Rs. 5 lakh.",
      "Unsafe food causing harm can result in imprisonment of up to 6 years for the food business operator.",
      "Non-compliant product labelling (missing FSSAI number) attracts penalty of Rs. 3 lakh.",
      "E-commerce platforms (Swiggy, Zomato, Amazon) require valid FSSAI licence to list food products — no registration means no online sales.",
    ],
  },

  "iec": {
    title: "IEC (Import Export Code)",
    description: "The Import Export Code (IEC) is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT) that is mandatory for any person or entity intending to import or export goods from India. Without IEC, customs authorities will not permit clearance of goods. IEC registration is a one-time process with no expiry — however, it must be updated annually on the DGFT portal by September 30. IEC is linked to the entity's PAN and is the identity in the international trade ecosystem. It is required to open an export-import business bank account, avail DGFT schemes (advance authorisation, EPCG, Rodtep, Rosctl), participate in foreign trade, and receive export proceeds through banking channels.",
    keyBenefits: [
      "Gateway to international trade — no imports or exports without IEC.",
      "One-time registration with lifetime validity — minimal ongoing administrative burden.",
      "Eligibility for DGFT export promotion schemes — advance authorisation, duty drawback, and export incentives.",
      "Enables business to expand market reach globally — significant revenue and growth potential.",
      "Required for receiving foreign exchange from exports — essential for FEMA compliance.",
    ],
    support: [
      "We register your entity on the DGFT portal and obtain IEC within 2–3 working days.",
      "We assist with annual IEC renewal on the DGFT portal to keep it active.",
      "We advise on DGFT export promotion schemes applicable to your business and assist with applications.",
      "We handle any DGFT notices or IEC-related issues on your behalf.",
    ],
    nonComplianceRisks: [
      "Importing or exporting goods without IEC is a violation — customs can seize goods and initiate penal action under the Customs Act.",
      "Banks will not process foreign remittances (import payments or export proceeds) without a valid IEC.",
      "Ineligibility to avail export incentive schemes (Rodtep, MEIS, SEIS) — significant revenue loss for exporters.",
      "Non-update of IEC annually on the DGFT portal can render it inactive, blocking all import/export operations.",
    ],
  },

  "msme-udyam": {
    title: "MSME / UDYAM Registration",
    description: "MSME stands for Micro, Small, and Medium Enterprises — classified based on investment in plant and machinery and annual turnover. Micro: investment up to Rs. 1 crore, turnover up to Rs. 5 crore. Small: up to Rs. 10 crore investment, Rs. 50 crore turnover. Medium: up to Rs. 50 crore investment, Rs. 250 crore turnover. Udyam Registration is a free, online, self-declaration-based process on udyamregistration.gov.in linked to Aadhaar and PAN. It unlocks priority sector lending at concessional rates, protection under MSME Development Act against delayed payments (MSME Samadhaan), access to government tenders reserved for MSMEs, and eligibility for central and state government schemes including ECLGS and CGTMSE.",
    keyBenefits: [
      "Access to collateral-free loans up to Rs. 2 crore under CGTMSE guarantee scheme.",
      "Legal protection against delayed payments — MSME Samadhaan provides fast-track dispute resolution.",
      "Preference in government procurement — tenders below Rs. 200 crore are reserved for Indian MSMEs.",
      "Subsidies on patent registration, industrial promotion, and technology upgradation.",
      "Priority sector lending status — banks offer lower interest rates and better terms to MSMEs.",
    ],
    support: [
      "We register your business on the Udyam portal and obtain the Udyam Registration Certificate (URC) promptly.",
      "We advise on the correct classification (Micro/Small/Medium) to optimise scheme eligibility.",
      "We assist with MSME Samadhaan filings for delayed payment recovery from large buyers.",
      "We keep you informed of new government schemes, subsidies, and tenders available to MSME entities.",
    ],
    nonComplianceRisks: [
      "Failure to register means missing out on government subsidies, preferential loan rates, and scheme benefits.",
      "Without URC, you cannot file MSME Samadhaan complaints for delayed payments from large buyers.",
      "Missing tender opportunities reserved exclusively for MSMEs — a significant market segment.",
      "Ineligibility for priority sector classification by banks — results in higher interest rates on business loans.",
    ],
  },

  "dpiit-startup-india": {
    title: "DPIIT / StartUp India Registration",
    description: "DPIIT recognition under the Startup India initiative is a government certification for qualifying startups that unlocks tax incentives, regulatory relaxations, and funding benefits. A startup can apply if it is incorporated as a private limited company, LLP, or registered partnership; is not more than 10 years old; has annual turnover not exceeding Rs. 100 crore; and is working towards innovation, development, or improvement of products or services. Benefits include: 3-year income tax exemption under Section 80-IAC, exemption from Angel Tax (Section 56(2)(viib)), self-certification compliance under 9 labour and 3 environment laws, access to Fund of Funds managed by SIDBI, and rebates on patent (80%) and trademark (50%) filing fees.",
    keyBenefits: [
      "3-year income tax exemption — keep more cash in the business during the critical growth phase.",
      "Angel Tax exemption — no tax on equity investments received above FMV from eligible investors.",
      "Self-certification under labour and environment laws — reduced compliance burden for early-stage operations.",
      "Rebates on patent and trademark filing fees — encourages IP creation.",
      "Access to government tenders without prior experience requirements and earnest money deposit.",
    ],
    support: [
      "We prepare and file your DPIIT recognition application with a compelling business innovation narrative.",
      "We assist with 80-IAC application to the Income Tax Department for the 3-year tax holiday.",
      "We advise on Angel Tax exemption structuring and documentation for investor transactions.",
      "We guide you on Startup India's self-certification benefits and assist with IP filings.",
    ],
    nonComplianceRisks: [
      "Missing the 80-IAC tax holiday means paying full corporate tax during the critical early years when cash flow is most constrained.",
      "Without DPIIT recognition, investors funding your startup above FMV creates an Angel Tax liability under Section 56(2)(viib).",
      "Loss of self-certification benefits means compliance with 9 labour laws from day one — adds cost for early-stage startups.",
      "Ineligibility for government tender exemptions available to DPIIT startups — restricts B2G market access.",
    ],
  },

  "book-keeping": {
    title: "Book Keeping",
    description: "Bookkeeping is the systematic recording, organising, and maintaining of all financial transactions of a business. It forms the foundation of the entire accounting and financial management ecosystem. Accurate bookkeeping captures day-to-day activity — sales invoices, purchase invoices, bank transactions, payroll entries, and expense vouchers — using accounting software such as Tally, QuickBooks, or Zoho Books, following the double-entry system. These ledgers are used to prepare the Trial Balance, Profit & Loss Account, and Balance Sheet. In the GST era, accurate bookkeeping is directly linked to GST compliance — sales and purchase data in the books must match data filed in GST returns. Banks require up-to-date books for loan applications; investors expect clean books as a due diligence prerequisite.",
    keyBenefits: [
      "Real-time visibility into business performance — sales, expenses, profitability, and cash position at any time.",
      "Clean books are the foundation for timely GST filing, accurate ITR, and hassle-free audits.",
      "Investor and bank readiness — organised financial records accelerate due diligence and funding processes.",
      "Identifies cost overruns, revenue leakages, and unpaid receivables — directly improves profitability.",
      "Provides a historical financial record invaluable for business decisions, valuations, and planning.",
    ],
    support: [
      "We maintain your books of accounts on your preferred accounting platform — Tally, QuickBooks, or Zoho Books.",
      "We record all transactions — sales, purchases, bank entries, payroll, and expenses — on a daily or weekly basis.",
      "We prepare monthly MIS reports showing P&L, Balance Sheet, and cash flow for management review.",
      "We reconcile your books with GST data, bank statements, and vendor ledgers every month.",
    ],
  },

  "virtual-accountant": {
    title: "Virtual Accountant",
    description: "A Virtual Accountant is a qualified accounting professional who provides full-fledged accounting and financial management services to your business remotely, without being a physical employee on your payroll. This model is particularly powerful for startups, small businesses, and growing SMEs that need the expertise of a skilled CA or accountant but cannot justify the cost of a full-time in-house hire. A virtual accountant handles end-to-end accounting — bookkeeping, bank reconciliation, payroll processing, GST return filing, TDS compliance, advance tax calculation, and financial statement preparation. Using cloud-based accounting software, both the business and accountant have real-time access to financial data from anywhere. The model is cost-effective, scalable, and expertise-rich.",
    keyBenefits: [
      "Access to CA-level expertise at a fraction of the cost of an in-house hire.",
      "Scalable — easily adjust the scope of services as your business grows.",
      "All accounting, GST, TDS, payroll, and compliance managed by one accountable professional.",
      "Cloud-based tools give you real-time visibility into your finances from anywhere.",
      "Frees up founders and management to focus on core business instead of back-office functions.",
    ],
    support: [
      "We assign a dedicated virtual accountant to your business — a qualified CA or experienced accounting professional.",
      "Your virtual accountant handles all accounting entries, bank reconciliations, payroll processing, and compliance filings.",
      "We provide monthly financial reports and a quarterly performance review call.",
      "You get a responsive team — not just one person — ensuring continuity during leaves or transitions.",
    ],
  },

  "virtual-cfo": {
    title: "Virtual CFO",
    description: "A Virtual CFO (Chief Financial Officer) is a senior finance professional who provides strategic financial guidance, planning, and oversight to a business on a part-time or retainer basis. While a Virtual Accountant handles day-to-day bookkeeping and compliance, a Virtual CFO operates at the strategic layer — financial planning and analysis (FP&A), fundraising support, investor relations, cash flow management, profitability improvement, cost optimisation, and board-level financial reporting. Most startups and growing SMEs cannot afford a full-time CFO. A Virtual CFO provides the same strategic value at a fraction of that cost. The Virtual CFO works closely with the founder/CEO to model business scenarios, build financial forecasts, prepare investor decks, structure funding rounds, manage banking relationships, and present at board meetings.",
    keyBenefits: [
      "Strategic financial oversight without the cost of a full-time CFO — typically 80–90% cost savings.",
      "Investor-ready financial models, MIS, and board presentations that meet institutional standards.",
      "Proactive cash flow management — never run out of runway unexpectedly.",
      "Expert guidance on fundraising — from round structuring to term sheet negotiation.",
      "Board-level credibility — a Virtual CFO attends board meetings and provides independent financial oversight.",
    ],
    support: [
      "We assign a senior finance professional as your Virtual CFO with hands-on experience in your industry.",
      "Your Virtual CFO works with you on budgeting, forecasting, investor decks, and board reporting.",
      "We support you through fundraising — from financial model preparation to investor due diligence.",
      "We conduct monthly financial review calls and provide actionable insights on P&L, cash flow, and working capital.",
    ],
  },

  "payroll": {
    title: "Payroll",
    description: "Payroll management is the process of calculating and disbursing employee salaries, wages, bonuses, and deductions accurately and on time, in compliance with all applicable labour laws and tax regulations. A robust payroll function covers: collection of attendance and leave data, calculation of gross salary based on CTC structure, deduction of TDS, PF, ESI, PT, and LWF, disbursement of net salary, generation of payslips, filing of TDS returns (Form 24Q), and issuance of Form 16 at year end. India's multi-layered compliance environment — annually changing TDS slabs, separate PF/ESI deadlines, and state-specific PT — makes payroll complex. The introduction of the New Tax Regime has added another layer, requiring employees to choose between old and new regimes.",
    keyBenefits: [
      "Accurate, timely salary disbursements build employee trust and satisfaction.",
      "Full compliance with TDS, PF, ESI, PT — no late fees, interest, or inspector action.",
      "Automated payslip generation and Form 16 issuance — saves HR bandwidth.",
      "Single-point accountability for all payroll compliance — clarity on who owns the process.",
      "Clean payroll records are required for statutory audits, PF/ESI inspections, and investor due diligence.",
    ],
    support: [
      "We manage end-to-end payroll processing — from attendance collection to net salary disbursement.",
      "We handle all TDS computation, deduction, deposit, and Form 24Q filing each quarter.",
      "We generate payslips, PF/ESI challans, and Form 16 for each financial year.",
      "We advise employees on old vs new tax regime choice and optimise your salary structure for tax efficiency.",
    ],
  },

  "mis-reports": {
    title: "MIS Reports",
    description: "Management Information System (MIS) Reports are structured, periodic financial and operational reports designed to give business owners and management accurate, timely, and actionable information to support decision-making. MIS reports translate raw financial data into meaningful summaries revealing the true health and trajectory of the business. A well-designed MIS report package includes: Profit & Loss Statement (monthly, quarterly, YTD), Balance Sheet, Cash Flow Statement, Accounts Receivable and Payable Ageing, Sales Analysis, Expense Analysis, Budget vs Actuals, and Key Performance Indicators such as gross margin, EBITDA margin, burn rate, and working capital cycle. For investor-backed companies, monthly MIS reports are typically mandated by investors as part of the shareholders' agreement.",
    keyBenefits: [
      "Real-time business intelligence — know exactly how your business is performing at any point in time.",
      "Identifies profitable products, underperforming segments, and cost overruns before they become crises.",
      "Investor and board confidence — professional MIS reporting signals strong financial discipline.",
      "Supports better decision-making on pricing, hiring, capex, and expansion.",
      "Enables early corrective action — problems identified in month 1 can be fixed before they compound.",
    ],
    support: [
      "We design a customised MIS report package specific to your business — industry, stage, and management needs.",
      "We prepare and deliver MIS reports every month, backed by up-to-date bookkeeping data.",
      "We present MIS findings in a board/management review call and highlight key action items.",
      "We evolve the MIS framework as your business grows — adding new metrics, segments, and dashboards.",
    ],
  },

  "hr-services": {
    title: "HR Services",
    description: "Human Resources (HR) services encompass the full lifecycle of employee management — from hiring and onboarding to performance management, compliance, and exit. Core HR services include: drafting employment offer and appointment letters, creating HR policies (leave policy, code of conduct, anti-sexual harassment policy, IT policy), maintaining employee records, setting up HRMS software, managing leave and attendance, handling performance appraisals, ensuring POSH (Prevention of Sexual Harassment at Workplace) Act compliance, and processing full and final settlements. POSH compliance is mandatory — every company with 10 or more employees must constitute an Internal Complaints Committee (ICC) and submit an annual POSH report. HR services also extend to drafting NDAs, non-compete clauses, and consultancy agreements.",
    keyBenefits: [
      "Compliant HR framework — employment contracts, policies, and POSH compliance protect the company legally.",
      "Professional employee experience from day one — structured onboarding, clear policies, and timely payroll builds loyalty.",
      "HRMS implementation automates attendance, leave, and payroll — reduces manual effort and errors.",
      "Investor-ready people operations — institutional investors look for HR maturity as part of operational due diligence.",
      "Reduced attrition — structured HR processes are directly correlated with employee satisfaction and retention.",
    ],
    support: [
      "We draft all employment documents — offer letters, appointment letters, NDAs, and consultancy agreements.",
      "We create a comprehensive HR policy handbook aligned with Indian labour laws.",
      "We set up and train your team on HRMS tools and automate attendance, leave, and payroll workflows.",
      "We handle POSH compliance — ICC constitution, annual reports, and employee training.",
    ],
  },

  "gst-compliance": {
    title: "GST Compliance",
    description: "GST compliance encompasses the ongoing obligations under the Goods and Services Tax regime — from maintaining proper books and generating e-invoices to filing accurate periodic returns and handling departmental audits. Every registered person must file GSTR-1 (outward supplies, by 11th), GSTR-3B (monthly summary, by 20th), and GSTR-9 (annual return, by December 31). GST compliance also involves ensuring accurate ITC claims are supported by valid tax invoices, e-invoicing for eligible taxpayers, and e-way bills for goods movement. The GST department increasingly uses data analytics to identify mismatches between GSTR-1, GSTR-3B, and GSTR-2B — businesses must reconcile these proactively every month.",
    keyBenefits: [
      "Accurate ITC reconciliation ensures you claim every rupee of eligible credit — directly reduces tax outflow.",
      "Timely filing avoids late fees, interest, and the distraction of departmental notices.",
      "Clean GST records improve your credit rating with banks and vendor credibility with B2B customers.",
      "Proactive compliance reduces the risk of GST audits and departmental scrutiny.",
      "E-invoicing and e-way bill compliance ensures smooth movement of goods without delays at check-posts.",
    ],
    support: [
      "We file all GST returns — GSTR-1, GSTR-3B, GSTR-9, GSTR-9C — on time every month and year.",
      "We perform monthly ITC reconciliation between GSTR-2B and your purchase register — flag mismatches proactively.",
      "We set up e-invoicing and e-way bill systems for your business and train your team.",
      "We draft responses to GST notices, represent you in GST audits, and file appeals against demand orders.",
    ],
    nonComplianceRisks: [
      "Late filing of GSTR-3B attracts interest at 18% per annum on unpaid tax plus late fees of Rs. 50 per day.",
      "ITC claimed without corresponding supplier filing is disallowed — creating tax liability plus 24% interest.",
      "Non-generation of e-invoices when mandatory attracts penalty of Rs. 10,000 per invoice.",
      "Failure to respond to GST notices can lead to ex-parte assessments — best-judgment orders with large additions.",
    ],
  },

  "epf-compliance": {
    title: "EPF Compliance",
    description: "EPF (Employees' Provident Fund) compliance involves the ongoing obligations of an employer registered with EPFO under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. Monthly EPF compliance requires calculating PF contributions for all eligible employees, depositing by the 15th of the following month, and filing the Electronic Challan cum Return (ECR) on the EPFO portal. The ECR captures each employee's UAN, name, gross wages, PF wages, and contribution breakdowns. EPFO conducts periodic inspections and can review payroll records for the past 5 years. Employers must also facilitate employee KYC (Aadhaar, PAN, bank account) linking to UAN to prevent delays in PF claim settlements.",
    keyBenefits: [
      "On-time PF compliance builds employee trust and loyalty — retirement savings are a key financial concern.",
      "Employees can avail PF advances for emergencies — medical, housing, education — providing a safety net.",
      "Compliance certificates required for government tenders, bank loans, and client due diligence are always available.",
      "Clean EPFO records reduce the risk of inspector visits and assessment proceedings.",
      "Employer's PF contribution is a deductible business expense — reduces taxable income.",
    ],
    support: [
      "We calculate monthly PF contributions for all employees and deposit by the 15th of every month.",
      "We file the ECR on the EPFO portal and generate contribution statements for your records.",
      "We assist employees with UAN activation, KYC linking, and PF claim settlements.",
      "We represent you in EPFO inspections and respond to show cause notices.",
    ],
    nonComplianceRisks: [
      "Late deposit of PF contributions attracts interest at 12% per annum and damages of up to 100% of the arrears.",
      "EPFO inspectors can initiate recovery proceedings for unpaid contributions covering the past 5 years.",
      "Incomplete employee KYC leads to delayed claim settlements — serious employee grievance and potential labour court action.",
      "Non-compliance can disqualify the business from government contracts and tenders.",
    ],
  },

  "esi-compliance": {
    title: "ESI Compliance",
    description: "ESI (Employees' State Insurance) compliance involves the ongoing obligations of an employer registered with ESIC under the Employees' State Insurance Act, 1948. Monthly ESI compliance includes calculating contributions for all employees drawing wages up to Rs. 21,000 per month, depositing contributions (3.25% employer + 0.75% employee) by the 15th, and filing the monthly ESI Return on the ESIC portal. ESI provides covered employees and their dependents with medical benefits, maternity benefits, sickness benefits, disablement benefits, and dependent benefits. ESIC conducts regular inspections and can review records for past years. Changes in employee headcount, wages, and employment status must be updated on the ESIC portal in real time.",
    keyBenefits: [
      "ESI provides comprehensive cashless medical coverage to employees and their families — a significant benefit.",
      "Maternity benefit under ESI (26 weeks salary) reduces employer's direct maternity leave cost.",
      "ESI compliance certificate is required for government contracts, bank loans, and client due diligence.",
      "Sickness benefit under ESI provides financial protection to employees during illness — reduces absenteeism-related disputes.",
      "Employer's ESI contribution is a deductible business expense.",
    ],
    support: [
      "We calculate monthly ESI contributions for all eligible employees and deposit by the 15th.",
      "We file monthly ESI returns on the ESIC portal and maintain all related records.",
      "We assist employees with IP card issuance and claim procedures.",
      "We handle ESIC inspections and respond to notices on your behalf.",
    ],
    nonComplianceRisks: [
      "Late deposit of ESI contributions attracts interest at 12% per annum and penalties from ESIC.",
      "ESIC inspectors can initiate assessment for uncovered employees and unpaid contributions — creating large retrospective liability.",
      "Employees denied ESI benefits due to employer non-compliance can file grievances with ESIC — leading to legal proceedings.",
      "Non-compliance disqualifies the business from government tenders requiring ESI compliance certificates.",
    ],
  },

  "pt-compliance": {
    title: "PT Compliance",
    description: "Professional Tax (PT) compliance involves the ongoing obligation of registered employers to deduct PT from employees' salaries and remit it to the state government. Compliance requirements, rates, filing frequencies, and penalties vary significantly across states. Multi-state employers must manage separate PT registrations, compliance calendars, and remittances for each state in which they have employees. PT compliance also requires maintaining a PT register showing employee-wise deductions and remittances. Employers must also pay PT on their own entity (Enrollment Certificate) in addition to deducting from employees. PT is a small but important compliance obligation frequently overlooked by growing businesses, surfacing as a liability during audits or due diligence.",
    keyBenefits: [
      "Nominal cost of compliance — PT rates are small but non-compliance costs are disproportionate.",
      "PT deducted is a deductible expense for employees — reduces their income tax liability.",
      "Clean compliance record across all state PT registrations — no surprises during audits or due diligence.",
      "Demonstrates attention to detail in multi-state compliance management.",
      "Avoids cumulative liability building over years of inadvertent non-compliance.",
    ],
    support: [
      "We register your entity and employees for PT in all applicable states.",
      "We calculate monthly PT deductions per employee by state, deposit remittances, and file returns.",
      "We maintain the PT register and all related documentation.",
      "We handle PT assessments and represent you in proceedings before the state PT authority.",
    ],
    nonComplianceRisks: [
      "Arrears of PT plus penalty and interest from the state PT department — small individually but significant when accumulated.",
      "State tax inspectors can conduct enforcement actions for non-compliant establishments.",
      "Statutory auditors flag PT non-compliance — creates adverse audit observations.",
      "Liability surfaces during investor due diligence or M&A transactions — creating friction.",
    ],
  },

  "itr-and-tds-compliance": {
    title: "ITR & TDS Compliance",
    description: "Income Tax Return (ITR) filing and Tax Deducted at Source (TDS) compliance form the core of every business's direct tax obligations. TDS is a mechanism by which the payer deducts tax at the prescribed rate at the source of income before making payment to the payee. Businesses must deduct TDS on salary payments (Section 192), contractor payments (Section 194C), professional fees (Section 194J), rent (Section 194I), interest (Section 194A), and other specified payments. TDS must be deposited by the 7th of the following month and quarterly TDS returns (Form 24Q, 26Q, 27Q) must be filed. On the ITR side, every entity must file annually by the applicable due date, computing advance tax in four tranches (June, September, December, March) to avoid interest under Sections 234B and 234C.",
    keyBenefits: [
      "Accurate TDS deduction and deposit ensures zero interest liability — keeps the tax account clean.",
      "Timely ITR filing enables carry-forward of losses to offset against future income — significant tax saving.",
      "Advance tax planning avoids interest under Sections 234B and 234C.",
      "Clean TDS compliance improves vendor relationships — payees receive TDS credit on time in Form 26AS.",
      "Timely filings and clean tax records build credibility with income tax department, banks, and investors.",
    ],
    support: [
      "We calculate TDS liability for all applicable payments, deposit by the 7th, and file quarterly TDS returns.",
      "We issue Form 16 (salary) and Form 16A (other deductions) to all deductees on time.",
      "We calculate and facilitate advance tax payments in four tranches every year.",
      "We prepare and file ITR for your company, LLP, partnership, or personal income — optimising deductions legally.",
    ],
    nonComplianceRisks: [
      "Non-deduction of TDS attracts interest at 1% per month and disallowance of the entire expense in ITR.",
      "Late deposit of TDS attracts interest at 1.5% per month.",
      "Failure to file TDS returns attracts late fees of Rs. 200 per day plus penalty up to the TDS amount.",
      "Non-filing of ITR results in notice under Section 142(1), best judgment assessment, and penalty up to 200% of tax evaded.",
    ],
  },

  "mca-compliance": {
    title: "MCA Compliance",
    description: "MCA (Ministry of Corporate Affairs) compliance refers to the ongoing statutory obligations that companies and LLPs must fulfil annually and on an event-driven basis. Annual compliance for a private limited company includes: holding of Board Meetings (minimum 4 per year), Annual General Meeting (AGM) by September 30, filing of financial statements in Form AOC-4 (within 30 days of AGM), Annual Return in Form MGT-7 (within 60 days of AGM), Director KYC in Form DIR-3 KYC (by September 30), and Form MSME-1 half-yearly. Event-based filings are triggered by change of directors, registered office, share allotment, capital increase, and auditor appointments. LLPs must file Form 8 (by October 30) and Form 11 (by May 30) annually.",
    keyBenefits: [
      "Clean compliance record with ROC — essential for raising funding, bank loans, and government tenders.",
      "Directors avoid disqualification — protecting their ability to serve on other company boards.",
      "Timely filings ensure the company's registered status is always active and in good standing.",
      "Demonstrates corporate governance maturity — valued by investors, banks, and business partners.",
      "Avoids the massive late fees that accumulate rapidly for even short delays in ROC filings.",
    ],
    support: [
      "We prepare a customised MCA compliance calendar for your company covering all annual and event-based filings.",
      "We draft board resolutions, AGM notices, and minutes, and file all required forms with ROC.",
      "We monitor director KYC, MSME-1, and other periodic compliance requirements proactively.",
      "We handle event-based MCA filings — share allotment, director changes, registered office change.",
    ],
    nonComplianceRisks: [
      "Non-filing of annual returns attracts Rs. 100 per day per form — running into lakhs within months for delayed filings.",
      "Director disqualification under Section 164(2) for companies not filing financial statements for 3 consecutive years.",
      "Companies struck off by ROC cannot be revived easily — assets are forfeited to the government in extreme cases.",
      "Non-compliant companies cannot open bank accounts, raise funding, or bid for government tenders.",
    ],
  },

  "due-diligence": {
    title: "Due Diligence",
    description: "Due Diligence is the comprehensive process of investigation, audit, and verification that a potential investor, acquirer, or lender conducts before committing capital to a business. It covers three dimensions: Financial Due Diligence (review of financials, tax returns, GST filings, bank statements, receivables, payables, and cash flow), Legal Due Diligence (corporate documents, shareholder agreements, contracts, litigation, and IP ownership), and Commercial Due Diligence (market sizing, competitive landscape, customer base, and unit economics). From the target company's perspective, being well-prepared is as important as the DD itself. Investors and acquirers reduce valuations or walk away when they encounter disorganised data rooms, unreconciled books, pending compliances, or undisclosed liabilities. A well-run sell-side DD process requires a comprehensive, clean, and complete data room.",
    support: [
      "We prepare your sell-side data room — organising financial, legal, HR, compliance, and commercial documents.",
      "We identify and resolve compliance gaps before your DD process begins — tax arrears, pending ROC filings, ESIC/EPFO gaps.",
      "We assist with financial due diligence by preparing clean, reconciled financials that answer investor questions proactively.",
      "We advise and represent you during buy-side due diligence for acquisitions and mergers.",
    ],
  },

  "valuation": {
    title: "Valuation",
    description: "Valuation is the process of determining the economic value of a business, asset, or equity stake using established financial methodologies. It is required in a wide range of contexts: equity fundraising, ESOP grants (Fair Market Value), related party transactions (arm's length pricing), mergers and acquisitions, buy-sell agreements between shareholders, and regulatory requirements (RBI mandated FMV for FDI/FPI investments). Common valuation methods include: Discounted Cash Flow (DCF), Comparable Company Method, Precedent Transaction Method, Net Asset Value, and Revenue or EBITDA multiples. A SEBI-registered Category I Merchant Banker or a qualified CA is required to issue a valuation certificate for regulatory purposes. We work with qualified valuers to provide defensible, regulatory-compliant valuation reports.",
    support: [
      "We prepare comprehensive valuation reports using DCF, CCA, and other methodologies appropriate to your business.",
      "We coordinate with SEBI-registered Merchant Bankers for FDI-compliant valuation certificates.",
      "We advise on ESOP pool sizing and FMV determination for each grant cycle.",
      "We support M&A transaction pricing on both buy-side and sell-side with independent valuation analysis.",
    ],
  },

  "startup-funding": {
    title: "Start-up Funding",
    description: "Start-up funding refers to the process of raising capital from investors at various stages — from initial ideation (Pre-Seed) through early traction (Seed), growth (Series A, B, C), and eventual exit (IPO or M&A). India's startup ecosystem is one of the most dynamic in the world, with over 100,000 DPIIT-recognised startups. At the Pre-Seed and Seed stage, startups raise from angel investors, angel networks, accelerators, and government schemes. At Series A and beyond, institutional VCs lead rounds. The fundraising process involves preparing a pitch deck, building a financial model, creating a data room, identifying and approaching investors, negotiating term sheets, and navigating due diligence and legal documentation (SHA, SSA, board resolutions, ROC filings). Most first-time founders underestimate the time and complexity of this process.",
    support: [
      "We prepare your investor-ready package — pitch deck, financial model, and data room.",
      "We advise on fundraising strategy — the right amount, right valuation, and right investor profile for your stage.",
      "We assist in term sheet review and negotiation — protecting founder interests on key clauses.",
      "We manage FEMA compliance for foreign investment — FC-GPR filings, valuation certificates, and RBI reporting.",
    ],
  },

  "fdi-compliance": {
    title: "FDI Compliance",
    description: "Foreign Direct Investment (FDI) compliance refers to the regulatory framework governing inflow of foreign investment into Indian businesses under FEMA, 1999 and the FDI Policy notified by DPIIT. India permits 100% FDI under the automatic route in most sectors without prior government approval. Sectors like defence, telecom, media, insurance, and retail have specific caps or approval requirements. Key compliance obligations upon receiving FDI include: obtaining a Fair Market Value certificate from a SEBI Category I Merchant Banker, reporting FDI to RBI by filing Form FC-GPR within 30 days of share issuance, filing the Annual Return on Foreign Liabilities and Assets (FLA Return) by July 15 every year, and filing APR for overseas direct investment. All FDI must come through the banking channel — informal receipt of foreign investment is illegal.",
    support: [
      "We advise on the correct FDI route — automatic or government — for your sector and investment structure.",
      "We obtain the required FMV valuation certificate and manage FC-GPR filing with RBI within 30 days.",
      "We handle annual FLA return filings and advise on downstream investment compliance.",
      "We resolve FEMA compounding applications for past violations and ensure clean compliance going forward.",
    ],
  },

  "bank-finance": {
    title: "Bank Finance",
    description: "Bank Finance refers to the range of credit products that commercial banks and financial institutions provide to businesses — Cash Credit / Overdraft for working capital, Term Loans for capex, Letters of Credit for trade finance, Bank Guarantees for performance obligations, MUDRA Loans (collateral-free up to Rs. 10 lakh), and CGTMSE Loans (collateral-free credit up to Rs. 2 crore for MSMEs). Accessing bank finance requires preparation of a detailed loan application package — audited financials (3 years), projected financials, banking details, KYC documents, property papers (for secured loans), and sometimes a Detailed Project Report (DPR). Banks assess creditworthiness using CIBIL score, financial ratios (DSCR, current ratio, debt-equity ratio), management quality, and business prospects.",
    support: [
      "We prepare the complete loan application package — financials, projections, and DPR tailored to the bank's requirements.",
      "We advise on the right banking product and bank for your credit requirement — CC, term loan, CGTMSE, or MUDRA.",
      "We assist with improving your CIBIL score and financial ratios before approaching banks.",
      "We liaise with banks on your behalf and support you through the sanction and disbursement process.",
    ],
  },

  "project-reports": {
    title: "Project Reports",
    description: "A Project Report (Detailed Project Report / DPR) is a comprehensive document that articulates the business case, technical feasibility, financial viability, and market potential of a proposed business or expansion project. It is the primary document submitted to banks, financial institutions, and government agencies when seeking project finance, term loans, MSME scheme benefits, or government grants. A well-prepared DPR covers: Executive Summary, Company and Promoter Profile, Project Description, Market Analysis, Technical Details (plant layout, machinery, production process), Financial Projections (5–7 years), Funding Mix, Financial Ratios (DSCR, IRR, NPV, Break-Even), Risk Analysis, and Approvals required. Banks use the DPR to assess technical feasibility, financial viability, and the promoter's repayment capacity.",
    support: [
      "We prepare comprehensive, bank-format DPRs covering all technical, financial, and market aspects.",
      "We build integrated financial models — P&L, balance sheet, cash flow, DSCR, IRR — customised for your project.",
      "We align the DPR with specific bank or government scheme requirements and formats.",
      "We present the DPR to banks and financial institutions on your behalf and address their queries.",
    ],
  },

  "statutory-audits": {
    title: "Statutory Audits",
    description: "A Statutory Audit is a legally mandated examination of a company's financial records and accounts by an independent Chartered Accountant. Under the Companies Act, 2013, every company — private limited, public limited, or OPC — must have its annual accounts audited by a CA. LLPs with turnover exceeding Rs. 40 lakh or capital contribution exceeding Rs. 25 lakh are also required to have statutory audits. The auditor examines financial statements — P&L, Balance Sheet, Cash Flow, and Notes — and expresses an opinion on whether they give a true and fair view in accordance with Indian Accounting Standards. The audit also covers compliance with the Companies Act provisions, related party disclosures, and internal financial controls. The audit report is filed with the ROC as part of annual compliance.",
    keyBenefits: [
      "Independent assurance on financial statements — builds trust with banks, investors, vendors, and regulators.",
      "Identifies errors, discrepancies, and internal control weaknesses — protects against fraud and financial mismanagement.",
      "Mandatory for ROC annual filing — keeps the company in good regulatory standing.",
      "Audited financials are a prerequisite for bank credit, government tenders, and investor due diligence.",
      "Audit process often identifies tax planning opportunities and accounting improvements that benefit the business.",
    ],
    support: [
      "We provide statutory audit services by qualified CAs with experience across industries and company sizes.",
      "We conduct the audit efficiently and minimise disruption to your team — using technology for document collection.",
      "We issue a clean audit report and detailed management letter with actionable recommendations.",
      "We file the audited financial statements with the ROC and provide the Audit Report in the required format.",
    ],
    nonComplianceRisks: [
      "Non-appointment of auditor at the AGM is a violation of the Companies Act — attracts penalties on the company and its officers.",
      "Non-audited financial statements cannot be filed with the ROC — the company becomes non-compliant.",
      "Banks will not renew or enhance credit limits without audited financial statements.",
      "Investors and potential acquirers require 3 years of audited financials — absence blocks fundraising and M&A.",
    ],
  },

  "income-tax-audit": {
    title: "Income Tax Audit",
    description: "An Income Tax Audit under Section 44AB of the Income Tax Act is a mandatory audit of a taxpayer's books of accounts by a CA when business income exceeds Rs. 1 crore (or Rs. 10 crore if cash transactions are less than 5% of total transactions) or professional income exceeds Rs. 50 lakh. The tax auditor issues Form 3CA/3CB and Form 3CD — a detailed checklist of 41 clauses covering the taxpayer's financial position, tax compliance, related party transactions, loans and advances, capital gains, deductions claimed, and international transactions. The Form 3CD must be uploaded on the Income Tax Department's portal by September 30 of the assessment year. Tax audit verifies that income declared in the ITR matches the books, all applicable TDS was deducted, and related party transactions were at arm's length.",
    keyBenefits: [
      "Ensures the ITR correctly reflects book income and all eligible deductions — reduces risk of tax demand in assessment.",
      "Comprehensive Form 3CD acts as a compliance health check — identifies areas of risk before the IT department does.",
      "Tax audit report is accepted by courts and tribunals as credible evidence — valuable in disputes.",
      "Proactive identification of tax planning opportunities by the auditor — reduces tax outflow legally.",
      "Audited records accepted by banks, courts, and regulatory authorities as reliable financial information.",
    ],
    support: [
      "We conduct the income tax audit for businesses and professionals who cross the Section 44AB threshold.",
      "We prepare the Form 3CA/3CB and detailed Form 3CD and upload it on the IT portal by the due date.",
      "We advise on tax planning opportunities identified during the audit process.",
      "We represent you in income tax assessments and respond to notices related to audit observations.",
    ],
    nonComplianceRisks: [
      "Failure to get a mandatory tax audit done attracts penalty of 0.5% of turnover or Rs. 1.5 lakh, whichever is less — per year.",
      "Inaccurate or incomplete Form 3CD can be used by the assessing officer to make additions — leading to higher tax demand.",
      "Tax audit threshold crossing without audit signals non-compliance — triggers income tax scrutiny notices.",
      "Missing the September 30 filing deadline attracts late filing fees and penalties.",
    ],
  },

  "internal-audits": {
    title: "Internal Audits",
    description: "An Internal Audit is an independent, objective assurance and consulting activity designed to add value and improve an organisation's operations. It is required under the Companies Act for certain categories (listed companies, public companies with large paid-up capital or borrowings, and companies with certain turnover thresholds). Beyond compliance, progressive businesses use internal audit to assess and improve the effectiveness of risk management, internal controls, and governance. The internal auditor examines whether company processes — procurement, payroll, accounts payable, inventory, sales, and IT — are executed in accordance with company policies and regulatory requirements, identifying control gaps, process inefficiencies, fraud risks, and regulatory non-compliances.",
    keyBenefits: [
      "Proactive identification of fraud, inefficiencies, and control gaps — prevents losses before they escalate.",
      "Process improvement recommendations — internal audit often identifies significant cost savings and revenue recovery.",
      "Board and investor confidence — a functioning internal audit signals governance maturity.",
      "Prepares the organisation for external regulatory audits — internal audit findings are fixed before the regulator finds them.",
      "Reduces cost of statutory audit — cleaner processes and records make statutory audit faster and cheaper.",
    ],
    support: [
      "We design and execute an internal audit programme tailored to your business's size, risk profile, and industry.",
      "We conduct process audits across key functions — procurement, payroll, accounts, inventory, and sales.",
      "We issue detailed internal audit reports with findings, risk ratings, and actionable recommendations.",
      "We track management's implementation of audit recommendations and report to the board/audit committee.",
    ],
    nonComplianceRisks: [
      "Companies required to have internal audit under the Companies Act that don't have it face ROC non-compliance and penalties.",
      "Without internal audit, fraud risks go undetected — financial misappropriation by employees can run for years.",
      "Banks with large credit exposures often require internal audit reports — absence may affect credit limits.",
      "Investors conducting due diligence rate companies with no internal audit as higher-risk — affects valuation.",
    ],
  },

  "transfer-pricing-audits": {
    title: "Transfer Pricing Audits",
    description: "Transfer Pricing (TP) refers to the pricing of transactions between related parties — typically between a company and its subsidiary, holding company, or fellow subsidiary — located in different tax jurisdictions. Under Sections 92 to 92F of the Income Tax Act, 1961, all international transactions between associated enterprises must be at the arm's length price (ALP). Companies with international transactions above Rs. 1 crore must maintain contemporaneous TP documentation, obtain a Transfer Pricing Audit Report in Form 3CEB from a CA by October 31, and report all international transactions in the ITR. The Transfer Pricing Officer (TPO) has the power to adjust the ALP and make additions to income if prices are found to be non-arm's length — TP adjustments tend to be very large.",
    keyBenefits: [
      "Robust TP documentation is the best defence against TPO adjustments — contemporaneous records carry strong evidentiary weight.",
      "Advance Pricing Agreements (APAs) with the income tax department provide certainty on TP for 5 years.",
      "Proper TP structuring optimises the overall group tax position within the arm's length framework.",
      "Clean TP compliance is a requirement for foreign investors — MNCs and PE funds expect defensible TP policies.",
      "Avoids double taxation — properly documented TP reduces risk of income being taxed in both India and the foreign jurisdiction.",
    ],
    support: [
      "We conduct TP documentation study — benchmarking, functional analysis, and comparability analysis for all specified transactions.",
      "We prepare and certify Form 3CEB and file it with the income tax department by October 31.",
      "We represent you before the TPO, DRP, and ITAT in TP assessments and appeals.",
      "We advise on APA applications and BEPS compliance for multinational groups.",
    ],
    nonComplianceRisks: [
      "Non-filing of Form 3CEB attracts penalty of 2% of the transaction value — can be crores for multinational companies.",
      "Inadequate TP documentation results in the TPO making best-judgment additions — typically very unfavourable.",
      "TP additions are assessed with interest at 12% per annum from the date of filing to the date of assessment.",
      "Penalty for concealment or underreporting of TP income can be up to 300% of the tax on adjusted income.",
    ],
  },

  "investigation-audit": {
    title: "Investigation Audit",
    description: "An Investigation Audit (Forensic Audit) is a specialised audit conducted to investigate suspected financial fraud, embezzlement, misappropriation of funds, accounting irregularities, or financial misconduct within an organisation. Unlike routine audits, it is commissioned when there are specific red flags — whistleblower complaints, unexplained inventory shortages, unusual transaction patterns, vendor irregularities, or management suspicion of employee fraud. The investigation auditor uses forensic accounting techniques — data analysis, document examination, digital forensics, interviews, and transaction tracing — to establish the facts, identify perpetrators, quantify financial loss, and preserve evidence for legal proceedings. Investigation audits are also commissioned by regulators (SEBI, NCLT, RBI) or courts. The output is a detailed report with findings, evidence, conclusions, and recommendations that can be used in disciplinary proceedings, civil recovery actions, criminal complaints, and insurance claims.",
    support: [
      "We conduct investigation audits using forensic accounting techniques, digital forensics, and structured interviews.",
      "We prepare a detailed, court-quality investigation report with findings, evidence annexures, and recommendations.",
      "We advise on legal options — civil recovery, criminal complaint, insurance claim — based on investigation findings.",
      "We liaise with regulators, law enforcement, and courts where the investigation has a regulatory or criminal dimension.",
    ],
  },

  "compliance-health-check": {
    title: "Compliance Health Check",
    description: "A Compliance Health Check is a comprehensive, periodic review of a business's regulatory and statutory compliance position across all applicable laws — corporate law (MCA), direct tax (Income Tax), indirect tax (GST), labour laws (PF, ESI, PT), FEMA, and sector-specific regulations. It assesses whether all required registrations are in place and active, all returns and filings are current, any outstanding demands or notices from regulators exist, internal processes are designed for ongoing compliance, and whether historical compliance gaps could surface as liabilities during future due diligence, audits, or regulatory inspections. For businesses preparing for an investment round, an acquisition, an IPO, or a bank loan, the Compliance Health Check identifies and resolves all compliance gaps before formal due diligence begins — significantly de-risking the transaction and protecting the valuation.",
    support: [
      "We conduct a comprehensive compliance health check across all applicable laws for your business.",
      "We provide a detailed health check report — red, amber, green status for each compliance area with prioritised action items.",
      "We implement the resolution plan — clearing pending filings, making overdue payments, and regularising compliance.",
      "We set up a compliance calendar and monitoring system to ensure you stay compliant on an ongoing basis.",
    ],
  },

};

serviceDetailData["epf-and-esi"] = serviceDetailData["epf-esi"];
serviceDetailData["epf"] = serviceDetailData["epf-compliance"];
serviceDetailData["esi"] = serviceDetailData["esi-compliance"];
serviceDetailData["itr-and-tds"] = serviceDetailData["itr-and-tds-compliance"];
serviceDetailData["mca"] = serviceDetailData["mca-compliance"];

export default serviceDetailData;
