import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  TrendingDown, 
  Workflow, 
  Zap, 
  Wallet, 
  Truck, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SolutionArea {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const solutionAreas: SolutionArea[] = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Grow revenue profitably."
  },
  {
    icon: DollarSign,
    title: "Profit Improvement",
    desc: "Find and improve margin opportunities."
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    desc: "Reduce unnecessary costs."
  },
  {
    icon: Workflow,
    title: "Process Improvement",
    desc: "Make work faster and simpler."
  },
  {
    icon: Zap,
    title: "Productivity Improvement",
    desc: "Get more output from existing resources."
  },
  {
    icon: Wallet,
    title: "Working Capital",
    desc: "Unlock cash from inventory and receivables."
  },
  {
    icon: Truck,
    title: "Supply Chain",
    desc: "Improve planning, inventory and supplier performance."
  },
  {
    icon: BarChart3,
    title: "Management Systems",
    desc: "Build KPIs, dashboards and management routines."
  }
];

const steps = [
  { label: "Diagnose", desc: "Identify opportunities" },
  { label: "Prioritize", desc: "Focus on high-value areas" },
  { label: "Improve", desc: "Implement pragmatic changes" },
  { label: "Measure", desc: "Track performance & ROI" }
];

interface BusinessConsultingProps {
  id?: string;
  isSubpage?: boolean;
}

export default function BusinessConsulting({ id = "business-consulting", isSubpage = false }: BusinessConsultingProps) {
  return (
    <section
      id={id}
      className={`py-24 text-foreground ${isSubpage ? "bg-transparent animate-fade-in" : "bg-white border-t border-border/40"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 font-medium text-primary uppercase text-xs tracking-wider">
            Business Consulting
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-foreground sm:text-5xl tracking-tight leading-tight max-w-4xl mx-auto">
            Make Your Business More Profitable. More Productive. More Scalable.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Practical business improvement support for MSMEs and growing businesses—helping identify opportunities across profitability, costs, productivity, processes, working capital, supply chain and management systems.
          </p>
        </div>

        {/* 8 Business Solution Areas Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutionAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/20 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* "How We Help" Micro Section */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
              Our Methodology
            </h3>
            
            {/* Minimal Horizontal Process Flow */}
            <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
              {steps.map((step, idx) => (
                <div key={step.label} className="relative flex flex-col items-center p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700 mb-3 border border-slate-200">
                    {idx + 1}
                  </div>
                  <span className="text-base font-bold text-slate-800">{step.label}</span>
                  <span className="text-xs text-slate-500 text-center mt-1 hidden sm:block">{step.desc}</span>
                  
                  {/* Arrow Indicator */}
                  {idx < 3 && (
                    <div className="absolute top-9 -right-2 text-slate-300 hidden md:block select-none">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Health Check CTA Banner */}
        <div className="mt-16 rounded-3xl border border-primary/20 bg-slate-50 p-8 md:p-10 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Start a Business Health Check
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Identify where your business may have its highest-value improvement opportunities.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/917099214505?text=Hi,%20I%20am%20interested%20in%20starting%20a%20Business%20Health%20Check%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/95 font-bold px-8 py-5 text-sm cursor-pointer shadow-sm transition">
                Start Health Check
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export { BusinessConsulting };
