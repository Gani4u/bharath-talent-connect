import PageSEO from "@/components/common/PageSEO";
import { ArrowLeft, BarChart3, TrendingUp, DollarSign, Settings, ShieldAlert, Cpu, Truck, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Strategic expansion consulting to help businesses scale globally and capture new markets."
  },
  {
    icon: DollarSign,
    title: "Profit Improvement",
    desc: "Analytical financial modeling and target reviews to maximize operating margins."
  },
  {
    icon: ShieldAlert,
    title: "Cost Optimization",
    desc: "Identifying overhead redundancies, waste, and structure adjustments to reduce costs."
  },
  {
    icon: Settings,
    title: "Process Improvement",
    desc: "Streamlining standard operating procedures and workflows for friction-free operations."
  },
  {
    icon: Cpu,
    title: "Productivity Improvement",
    desc: "Assessing workforce efficiency, tool integrations, and operational output metrics."
  },
  {
    icon: LayoutDashboard,
    title: "Working Capital",
    desc: "Optimizing asset cash flow cycles, accounts receivable/payable, and liquidity reserves."
  },
  {
    icon: Truck,
    title: "Supply Chain",
    desc: "Reviewing distribution paths, procurement operations, and inventory turns for global trade."
  },
  {
    icon: BarChart3,
    title: "Management Systems",
    desc: "Implementing ISO-compliant compliance structures, KPI dashboards, and audit controls."
  }
];

export default function Consulting() {
  const handleHomeRedirect = () => {
    window.history.pushState(null, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="bg-slate-50 py-16 text-foreground min-h-[85vh]">
      <PageSEO
        title="Business Management Consulting | BTC Consulting"
        description="Future business management consulting services by BTC Consulting - including Business Growth, Cost Optimization, Profit Improvement, and Supply Chain management."
        canonicalPath="/consulting"
      />

      <div className="mx-auto max-w-4xl px-6">
        
        {/* Back navigation */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleHomeRedirect();
          }}
          className="inline-flex items-center gap-2 font-medium text-primary hover:text-secondary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Home Page
        </a>

        {/* Hero Section */}
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-10 shadow-md text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase">
            Consulting Division (Coming Soon)
          </span>

          <h1 className="mt-6 text-3xl font-extrabold text-foreground lg:text-4xl leading-tight">
            Business Management Consulting
          </h1>

          <p className="mt-6 text-slate-600 leading-8">
            BTC is future-proofing our capability network to offer strategic corporate advisory services. We will connect organizations with expert frameworks to streamline efficiency, minimize waste, and drive global growth.
          </p>
        </div>

        {/* Grid Categories */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex gap-4 items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-3xl border border-primary/20 bg-primary text-primary-foreground p-8 text-center max-w-2xl mx-auto shadow-md">
          <h3 className="text-xl font-bold">Partner with Our Consulting Team</h3>
          <p className="mt-3 text-sm opacity-90 leading-6">
            If you are interested in discussing business consulting partnerships or early corporate advisory projects, reach out to our team.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/917099214505?text=Hi,%20I%20am%20interested%20in%20learning%20more%20about%20your%20Business%20Management%20Consulting%20services."
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full bg-white text-primary hover:bg-slate-100 font-bold px-6">
                Consult via WhatsApp
              </Button>
            </a>
            <a
              href="mailto:contact@bharathtalentconnect.com?subject=Business%20Management%20Consulting%20Inquiry"
              className="rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-2.5 transition-colors font-semibold text-sm flex items-center justify-center bg-transparent"
            >
              Send Email Inquiry
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
export { Consulting };
