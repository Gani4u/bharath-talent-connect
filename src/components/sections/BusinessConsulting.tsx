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
  { letter: "P", name: "Probe", label: "DIAGNOSE", desc: "Understand the business." },
  { letter: "R", name: "Reframe", label: "PRIORITIZE", desc: "Identify the highest-value opportunities." },
  { letter: "I", name: "Ignite", label: "DESIGN", desc: "Develop practical solutions." },
  { letter: "S", name: "Steer", label: "IMPLEMENT", desc: "Work with your team to execute." },
  { letter: "M", name: "Multiply", label: "MEASURE & SUSTAIN", desc: "Track business results and sustain." }
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
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-semibold text-primary uppercase text-xs tracking-wider mb-4">
              How We Work - Our Methodology
            </span>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-8">
              The BTC PRISM Approach
            </h3>
            
            {/* PRISM horizontal layout */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, idx) => (
                <div 
                  key={step.letter} 
                  className="relative rounded-3xl border border-slate-150 bg-slate-50/50 p-6 flex flex-col items-center text-center shadow-xs"
                >
                  {/* Big Letter Circle */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-black mb-4 shadow-sm">
                    {step.letter}
                  </div>

                  {/* Step Phase Banner style */}
                  <div className="bg-secondary/15 text-secondary text-xs font-bold uppercase px-3 py-1 rounded-full mb-3">
                    {step.name}
                  </div>

                  {/* Step Label (e.g. DIAGNOSE) */}
                  <h4 className="text-sm font-black text-slate-800 tracking-wider">
                    {step.label}
                  </h4>

                  {/* Step description */}
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>

                  {/* Arrow for Desktop */}
                  {idx < 4 && (
                    <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 text-slate-300 hidden lg:block select-none z-10">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tagline Banner */}
            <div className="mt-8 inline-block rounded-full bg-slate-100 px-6 py-2.5 text-sm font-medium text-slate-700 border border-slate-200">
              We don't stop at recommendations. We help implement the change and sustain.
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
