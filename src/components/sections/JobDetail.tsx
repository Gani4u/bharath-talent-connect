import { ArrowLeft, Briefcase, Calendar, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobDetailItem {
  profile: string;
  company: string;
  openings: number;
}

interface JobData {
  title: string;
  category: string;
  location: string;
  salary: string;
  openingsText: string;
  description: string;
  subRoles: JobDetailItem[];
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const jobDetailsData: Record<string, JobData> = {
  "retail-management": {
    title: "Stores & Retail Management",
    category: "Retail & Management",
    location: "Gulf & International Locations (Overseas Placement)",
    salary: "Competitive Management Scale + Incentives",
    openingsText: "40 Openings Available",
    description:
      "We are recruiting experienced Retail and Stores Management professionals to oversee warehouse stores, retail outlets, and inventory management for leading international groups.",
    subRoles: [
      { profile: "Stores Manager", company: "Regal Group", openings: 20 },
      { profile: "Stores Manager", company: "Fronext overseas Pvt Ltd", openings: 19 },
      { profile: "Stationary shop manager", company: "Regal Group", openings: 1 }
    ],
    responsibilities: [
      "Manage daily retail or warehouse store operations, cash handling, and stock audits.",
      "Track and achieve store sales targets, visual merchandising compliance, and service KPIs.",
      "Train, schedule, and lead sales associates and store supervisors.",
      "Monitor stock levels, plan inventory replenishments, and handle billing registers.",
      "Resolve customer queries and complaints to maintain brand reputation."
    ],
    requirements: [
      "2-5+ years of experience in retail store management, shop supervision, or stockroom control.",
      "Familiarity with modern Point of Sale (POS) software and inventory reporting.",
      "Excellent communication and team leadership skills.",
      "Bachelor's degree, Diploma in Retail Management, or equivalent experience.",
      "Valid passport (minimum 1-year validity) and readiness to relocate."
    ],
    benefits: [
      "Tax-free monthly basic salary.",
      "Company-provided housing/accommodation and transport.",
      "Free medical insurance and health coverage.",
      "Return flight tickets and annual leave.",
      "Complete visa processing and emigration support."
    ]
  },
  "sales-marketing": {
    title: "Sales & Marketing Specialists",
    category: "Sales & E-Commerce",
    location: "Global Locations (Overseas Placement)",
    salary: "Attractive Basic + Commissions",
    openingsText: "17 Openings",
    description:
      "Looking for dynamic, target-oriented Sales and E-Commerce professionals to manage corporate accounts, retail showrooms, and online sales platforms.",
    subRoles: [
      { profile: "Sales Representatives", company: "Regal Group", openings: 10 },
      { profile: "Sales Representatives", company: "Shop Mao", openings: 2 },
      { profile: "Sales Representatives", company: "Pinku Brothers", openings: 2 },
      { profile: "Sales Representatives", company: "RAHA Group", openings: 2 },
      { profile: "E-Commerce sales manager", company: "Fronext overseas Pvt Ltd", openings: 1 }
    ],
    responsibilities: [
      "Engage customers, conduct product demonstrations, and close sales opportunities.",
      "For E-Commerce: Manage digital product listings, customer service, and order processing.",
      "Develop client relationships to drive repeat business and hit sales quotas.",
      "Prepare sales reports, track market trends, and maintain product inventory catalogs.",
      "Cooperate with logistics teams to ensure prompt product dispatch and delivery."
    ],
    requirements: [
      "1-3+ years of experience in retail sales, corporate marketing, or e-commerce shop operations.",
      "Good command of English (additional local language skills are a plus).",
      "Confidence in customer interaction and negotiations.",
      "Familiarity with digital e-commerce storefronts or POS machines.",
      "Valid passport and clean background check."
    ],
    benefits: [
      "Tax-free monthly basic salary + attractive commissions on sales targets.",
      "Shared accommodation and transport allowance.",
      "Full medical care and insurance coverage.",
      "Standard contract visa and travel flight tickets.",
      "Comprehensive pre-departure training."
    ]
  },
  "mechanic-technical": {
    title: "Diesel & 3-Wheeler Mechanics",
    category: "Technical & Maintenance",
    location: "West Africa & Gulf Regions (Overseas Placement)",
    salary: "Standard Overseas Technical Scale",
    openingsText: "2 Openings",
    description:
      "Seeking qualified automotive and diesel engine mechanics to repair, maintain, and overhaul diesel fleets and three-wheeler vehicles for transport companies.",
    subRoles: [
      { profile: "Diesel Mechanic", company: "Fronext overseas Pvt Ltd", openings: 1 },
      { profile: "3 Wheeler mechanic", company: "Regal Group", openings: 1 }
    ],
    responsibilities: [
      "Inspect, diagnose, and repair diesel engines, transmissions, and mechanical layouts.",
      "Troubleshoot electrical wiring, engine starters, and fuel injection systems.",
      "Perform regular maintenance (oil changes, filters, wheel alignment, brake adjustments).",
      "Interpret schematic blueprints and workshop diagnostic manuals.",
      "Verify workshop safety standards and ensure clean tool storage."
    ],
    requirements: [
      "ITI Certification, Diploma in Automobile Engineering, or 3+ years of equivalent mechanic experience.",
      "Strong understanding of engine systems, transmissions, and electrical circuits.",
      "Ability to troubleshoot faults and work with basic hand/power tools.",
      "Valid passport and readiness to relocate.",
      "Basic English or Hindi communications."
    ],
    benefits: [
      "Tax-free basic salary with overtime payments.",
      "Free food, bachelor housing, and transport.",
      "Workplace safety insurance and medical care.",
      "Annual return tickets and visa sponsorship.",
      "Contract renewal option after 2 years."
    ]
  },
  "engineering-operations": {
    title: "Engineering & Industrial Plant Operations",
    category: "Heavy Industry & Engineering",
    location: "Hercules Industrial Plants (Overseas Placement)",
    salary: "Attractive Package Based on Experience",
    openingsText: "4 Openings",
    description:
      "Recruiting technical operators, supervisors, and civil engineers to manage plant machinery, metal casting, rolling lines, and infrastructure projects for Hercules.",
    subRoles: [
      { profile: "Civil Engineer", company: "Hercules", openings: 1 },
      { profile: "Oil plant operator", company: "Hercules", openings: 1 },
      { profile: "Cold rolling operator", company: "Hercules", openings: 1 },
      { profile: "Aluminum melting plant incharge", company: "Hercules", openings: 1 }
    ],
    responsibilities: [
      "Civil: Supervise structural layouts, civil works, and check safety compliance at construction sites.",
      "Oil & Rolling: Monitor automated machinery gauges, flow valves, and run melting furnace logs.",
      "Plant Incharge: Manage shifts, ensure safety protocols, and oversee productivity metrics.",
      "Troubleshoot machinery breakdowns and request maintenance engineers.",
      "Maintain strict adherence to industrial health and safety standards."
    ],
    requirements: [
      "B.Tech/Diploma in Civil, Mechanical, or Metallurgical Engineering (or related experience for operators).",
      "2-5+ years of experience in heavy manufacturing, metal plants, or construction sites.",
      "Strong command of plant control panels, tools, or engineering drawings.",
      "Familiarity with plant safety guidelines (PPE, fire safety, chemical handling).",
      "Valid passport and medical fitness certificate."
    ],
    benefits: [
      "Tax-free competitive monthly salary.",
      "Free food, accommodation, and laundry services.",
      "Workplace accident cover and medical card.",
      "Paid annual leaves with flight tickets.",
      "Employment visa, ticketing, and transition support."
    ]
  },
  "office-admin": {
    title: "Office Administration, HR & Finance",
    category: "Corporate & Finance",
    location: "International Corporate Offices",
    salary: "Professional Grade Salary Scale",
    openingsText: "4 Openings Available",
    description:
      "We are seeking detail-oriented HR, Accounting, and Ticketing coordinators to manage back-office processes, client relations, travel bookings, and compliance.",
    subRoles: [
      { profile: "Travel Ticket Coordinator", company: "Greenluck tours and travels", openings: 2 },
      { profile: "HR (Human Resources)", company: "Fronext overseas Pvt Ltd", openings: 1 },
      { profile: "CA (Chartered Accountant)", company: "TCSONS Trading SARL (Tarachand & Sons)", openings: 1 }
    ],
    responsibilities: [
      "CA: Manage accounting ledger inputs, tax audits, compliance, and prepare profit sheets.",
      "HR: Handle employee files, attendance tracking, recruitment support, and payroll validation.",
      "Ticketing: Handle airline ticket bookings, seat distributions, visa checks, and client itineraries.",
      "Manage incoming office mail, database entries, and phone calls.",
      "Ensure alignment with local government labor policies and regulations."
    ],
    requirements: [
      "Graduate Degree: B.Com, MBA in HR, or CA/Chartered Accountant certification.",
      "2+ years of experience in accounts, office administration, travel ticketing, or HR departments.",
      "High proficiency in MS Excel, Accounting tools (Tally, QuickBooks), or GDS booking portals (Amadeus, Galileo).",
      "Fluent English communication skills.",
      "Valid passport and clean legal background."
    ],
    benefits: [
      "Tax-free professional salary scale.",
      "Housing allowance or free executive bachelor accommodation.",
      "Full health insurance cover.",
      "Standard leave cycles and travel allowances.",
      "Complete visa processing, emigration, and flight ticketing."
    ]
  },
  "it-software": {
    title: "IT & Software Development (Core Odoo)",
    category: "Information Technology",
    location: "TCSONS Trading SARL (Tarachand & Sons) Hubs",
    salary: "Premium IT Specialist Salary Scale",
    openingsText: "1 Opening Available",
    description:
      "Seeking a skilled Core Odoo Developer to design, customize, and deploy Odoo ERP modules, database integrations, and manage platform stability.",
    subRoles: [
      { profile: "Core Odoo Developer", company: "TCSONS Trading SARL (Tarachand & Sons)", openings: 1 }
    ],
    responsibilities: [
      "Develop, customize, and deploy Odoo ERP custom modules (Sales, CRM, Accounting, Inventory).",
      "Write clean, testable, and reusable Python code and structure PostgreSQL database schemas.",
      "Integrate Odoo modules with external portals, e-commerce stores, and third-party APIs.",
      "Troubleshoot bugs, resolve performance bottlenecks, and update modules to newer versions.",
      "Provide support and train team members on custom Odoo workflows."
    ],
    requirements: [
      "2-4+ years of hands-on experience in Odoo (OpenERP) development and Python programming.",
      "Deep understanding of Odoo framework, MVC architecture, XML layouts, and PostgreSQL databases.",
      "Familiarity with Git version control and JavaScript (for Odoo web client modifications).",
      "Bachelor's degree in Computer Science, IT, or equivalent engineering background.",
      "Valid passport and readiness for overseas deployment."
    ],
    benefits: [
      "Highly competitive basic tax-free IT specialist salary.",
      "Free executive accommodation, meals, and transport.",
      "Premium health insurance and annual flight tickets.",
      "Opportunity to work with global trade operations.",
      "Complete employment visa sponsorship and flight ticketing."
    ]
  }
};

interface JobDetailProps {
  jobId: string;
}

export default function JobDetail({ jobId }: JobDetailProps) {
  const normalizedId = jobId.toLowerCase().trim();
  const job = jobDetailsData[normalizedId];

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-2xl font-bold">Job Role Not Found</h2>
        <p className="mt-4 text-slate-500">The requested job page does not exist or has been filled.</p>
        <a href="/" className="mt-8 inline-block text-primary hover:underline">
          Back to Home
        </a>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in applying for the ${job.title} roles (such as ${job.subRoles[0].profile} for ${job.subRoles[0].company}) at Bharat Talent Connect. Please guide me.`
  );

  return (
    <div className="bg-slate-50 py-16 text-foreground min-h-[85vh]">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Back navigation */}
        <a
          href="/"
          className="inline-flex items-center gap-2 font-medium text-primary hover:text-secondary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Home Page
        </a>

        {/* Header Block */}
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-10 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
              {job.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-secondary animate-pulse">
              <Calendar size={14} />
              {job.openingsText}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-foreground lg:text-4xl leading-tight">
            {job.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500 border-t border-border/60 pt-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-secondary" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={16} className="text-secondary" />
              {job.salary}
            </span>
          </div>
        </div>

        {/* Content Columns */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          
          {/* Main Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground border-b border-border/50 pb-4 mb-4">
                Job Overview
              </h2>
              <p className="text-slate-600 leading-8 mb-6">
                {job.description}
              </p>

              {/* Real vacancies list */}
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Current Direct Vacancies:
              </h3>
              <div className="space-y-3">
                {job.subRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-border/40">
                    <div>
                      <p className="font-bold text-foreground">{role.profile}</p>
                      <p className="text-xs text-slate-500">Company: {role.company}</p>
                    </div>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {role.openings} {role.openings === 1 ? "Opening" : "Openings"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground border-b border-border/50 pb-4 mb-4">
                Key Duties & Responsibilities
              </h2>
              <ul className="space-y-4">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 leading-7">
                    <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground border-b border-border/50 pb-4 mb-4">
                Skills & Experience Required
              </h2>
              <ul className="space-y-4">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 leading-7">
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            
            {/* Action Box */}
            <div className="rounded-3xl border border-border bg-primary text-primary-foreground p-8 shadow-md">
              <h3 className="text-lg font-bold">Apply Internationally</h3>
              <p className="mt-3 text-sm opacity-90 leading-6">
                Connect with our dedicated recruitment team immediately to process your visa application.
              </p>
              
              <a
                href={`https://wa.me/917099214505?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block"
              >
                <Button className="w-full rounded-full bg-white text-primary hover:bg-slate-100 font-bold py-5">
                  Apply via WhatsApp
                </Button>
              </a>

              <div className="mt-6 flex items-center gap-2 text-xs opacity-80 justify-center">
                <ShieldCheck size={14} />
                <span>100% Free Consultation</span>
              </div>
            </div>

            {/* Benefits Box */}
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground border-b border-border/50 pb-4 mb-4">
                Company Benefits
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed list-disc list-inside">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
