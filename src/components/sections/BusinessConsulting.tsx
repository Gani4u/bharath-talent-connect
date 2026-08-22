import { useState } from "react";
import type { ElementType } from "react";
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
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

interface SolutionArea {
  icon: ElementType;
  title: string;
  desc: string;
}

const solutionAreas: SolutionArea[] = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Develop and deploy scalable strategies to expand market share and accelerate top-line revenue profitably."
  },
  {
    icon: DollarSign,
    title: "Profit Improvement",
    desc: "Perform granular pricing, cost-to-serve, and transaction-level analyses to capture immediate margin opportunities."
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    desc: "Systematically eliminate operational waste, redundant workflows, and overhead leaks without compromising quality."
  },
  {
    icon: Workflow,
    title: "Process Improvement",
    desc: "Re-engineer and document key operational processes to eliminate bottlenecks and simplify daily business execution."
  },
  {
    icon: Zap,
    title: "Productivity Improvement",
    desc: "Maximize capacity and labor productivity through labor planning, resource scheduling, and time-and-motion studies."
  },
  {
    icon: Wallet,
    title: "Working Capital",
    desc: "Unlock liquidity by streamlining billing cycles, shortening collection timelines, and optimizing inventory turns."
  },
  {
    icon: Truck,
    title: "Supply Chain",
    desc: "Optimize end-to-end logistics, demand planning, warehouse footprint, and supplier performance metrics (OTIF)."
  },
  {
    icon: BarChart3,
    title: "Management Systems",
    desc: "Deploy executive KPI dashboards, operational review structures, and clear management feedback loops."
  }
];

const prismSteps = [
  { letter: "P", name: "Probe", phase: "DIAGNOSE", desc: "Thoroughly inspect the baseline operations and identify core performance constraints." },
  { letter: "R", name: "Reframe", phase: "PRIORITIZE", desc: "Model financial impacts and prioritize the highest-leverage value opportunities." },
  { letter: "I", name: "Ignite", phase: "DESIGN", desc: "Collaboratively engineer practical, standard methods tailored to the operating floor." },
  { letter: "S", name: "Steer", phase: "IMPLEMENT", desc: "Work side-by-side with frontline supervisors and managers to install processes." },
  { letter: "M", name: "Multiply", phase: "MEASURE & SUSTAIN", desc: "Lock in results through dashboard reviews, standard audits, and management coaching." }
];

const leakages = [
  { metric: "5–10%", title: "Revenue Leakage", desc: "Caused by unoptimized pricing, customer churn, or unbilled service scopes.", val: 65 },
  { metric: "3–8%", title: "Cost Leakage", desc: "Lost in manual procurement cycles, redundant overheads, and inventory waste.", val: 45 },
  { metric: "10–20%", title: "Productivity Leakage", desc: "Caused by unbalanced line capacity, wait times, and manual workflow dependencies.", val: 80 },
  { metric: "5–15%", title: "Inventory Leakage", desc: "Sunk in excess safety stock, poor forecasting, or obsolete warehouse storage.", val: 70 },
  { metric: "10–25%", title: "Process Inefficiency", desc: "Lost in constant rework cycles, complex supervisor handoffs, and lack of SOPs.", val: 85 },
  { metric: "5–15%", title: "Working Capital Leakage", desc: "Unnecessarily locked in slow collections, bad supplier terms, or overproduction.", val: 60 }
];

const comparisonData = [
  { before: "Decisions based on assumptions and gut feel", after: "Decisions driven by real-time operational data" },
  { before: "Owner constantly firefighting daily crises", after: "Sustained management systems that run independently" },
  { before: "Significant gaps in product/cost visibility", after: "Granular cost transparency and margin control" },
  { before: "Work flows dependent on specific individuals", after: "Standardized processes and robust documentation" },
  { before: "Consistent working capital and cash pressure", after: "Optimized cash cycles and unlocked liquidity" },
  { before: "Reactive adjustments to external pressures", after: "Proactive, metrics-driven performance management" },
  { before: "Company growth breeds internal complexity & chaos", after: "Growth balanced with operational scalability" }
];

const outcomes = [
  { label: "GROW PROFIT", title: "Grow Profitability", desc: "We inspect pricing structures, sales workflows, and product portfolios to identify and unlock margins." },
  { label: "REDUCE COST", title: "Reduce Operating Costs", desc: "BTC identifies procurement leaks, workflow redundancies, and non-value-added overheads to streamline operating expenses." },
  { label: "IMPROVE PRODUCTIVITY", title: "Improve Operations & Resource Yield", desc: "We measure capacities and implement labor/resource scheduling grids to boost overall productivity." },
  { label: "FREE CASH", title: "Free Sunk Cash Flows", desc: "We accelerate collection cycles and adjust raw stock parameters to recover cash locked in working capital." },
  { label: "IMPROVE OPERATIONS", title: "Enhance Operation Routines", desc: "We standardize handoffs, mapping processes step-by-step to optimize shop floor workflow and logistics." },
  { label: "RETAIN CUSTOMERS", title: "Retain Key Customers", desc: "We establish service metrics (OTIF) and key customer controls to assure delivery and client retention." },
  { label: "SCALE", title: "Systematize Operational Scale", desc: "We build dashboard review routines and structured KPIs to support scalable growth without chaos." }
];

export default function BusinessConsulting({ id = "business-consulting", isSubpage = false }: { id?: string; isSubpage?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  // Active indices for interactive elements
  const [activeOutcome, setActiveOutcome] = useState(0);
  const [activeDiagnostic, setActiveDiagnostic] = useState<number | null>(null);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section
      id={id}
      className={`text-foreground py-20 lg:py-24 ${isSubpage ? "bg-transparent animate-fade-in" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 font-semibold text-primary uppercase text-xs tracking-wider">
            Flagship Consultancy
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight leading-tight max-w-4xl mx-auto">
            Business Transformation Consulting (BTC)
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            We partner with MSMEs and middle-market organizations to systematically turn operational and structural challenges into measurable improvements in profit, productivity, and scalability.
          </p>
        </motion.div>

        {/* 1. What BTC Helps You Improve (Outcomes - Interactive Tab Grid) */}
        <div className="w-full bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-xl mb-24 border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(3,78,138,0.2),transparent_50%)] pointer-events-none" />
          
          <div className="relative z-10 w-full">
            <div className="text-center mb-10">
              <span className="text-xs font-black tracking-widest text-primary-foreground/75 uppercase bg-white/10 px-3.5 py-1 rounded-full">
                Core Interventions
              </span>
              <h3 className="text-2xl font-black mt-4 text-white">What BTC Helps You Improve</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Outcomes Sidebar Tabs */}
              <div className="lg:col-span-5 flex flex-col gap-2.5">
                {outcomes.map((item, idx) => {
                  const isActive = idx === activeOutcome;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveOutcome(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isActive 
                          ? "bg-primary border-primary text-white shadow-md scale-102 font-bold" 
                          : "bg-white/5 border-white/10 text-slate-400 font-semibold hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive ? "bg-white text-primary" : "bg-white/10 text-white"
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="text-xs tracking-wider">{item.label}</span>
                      </div>
                      {isActive && <CheckCircle2 className="h-4 w-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Central explanation display panel */}
              <div className="lg:col-span-7 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 min-h-[260px] flex flex-col justify-center relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none pointer-events-none">
                  {activeOutcome + 1}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeOutcome}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/20 px-2.5 py-1 rounded-full">
                      Strategic Focus {activeOutcome + 1}
                    </span>
                    <h4 className="text-xl font-black mt-4 text-white uppercase tracking-wide">
                      {outcomes[activeOutcome].title}
                    </h4>
                    <p className="mt-4 text-sm text-slate-300 leading-relaxed font-medium">
                      {outcomes[activeOutcome].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

        {/* 2. 8 Consulting Solutions (Responsive Static Grid) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Solution Directory</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">
              Where We Create Business Value
            </h3>
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              BTC operates across eight targeted business transformation areas to optimize MSME operations and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionAreas.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  className="rounded-3xl border border-slate-200/80 bg-white p-6 flex flex-col justify-between hover:shadow-md hover:border-primary/30 transition-all duration-300 group min-h-[250px] shadow-xs"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
                >
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-5.5 w-5.5 shrink-0" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">{solution.title}</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                      {solution.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Business Health Check Diagnostic (Interactive list + details layout) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs mb-24">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary bg-primary/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Diagnostic Assessment
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-4">
              Where Is Your Business Losing Value?
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-sm text-slate-500">
              A structured performance audit maps operations against target baselines to locate critical leakage ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Leakages lists */}
            <div className="lg:col-span-6 space-y-3.5">
              {leakages.map((item, idx) => {
                const isActive = activeDiagnostic === idx;
                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border bg-slate-50/50 p-4 shadow-xs transition-all duration-300 cursor-pointer ${
                      isActive ? "border-secondary bg-white shadow-sm scale-[1.01]" : "border-slate-200/80 hover:border-slate-350"
                    }`}
                    onMouseEnter={() => setActiveDiagnostic(idx)}
                    onMouseLeave={() => setActiveDiagnostic(null)}
                    onClick={() => setActiveDiagnostic(activeDiagnostic === idx ? null : idx)}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                      <span>{item.title}</span>
                      <span className="text-secondary font-extrabold">{item.metric} Leakage*</span>
                    </div>
                    {/* Visual Bar Indicator */}
                    <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-secondary origin-left"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Leakage detail panel */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 flex flex-col justify-center shadow-xs">
              <AnimatePresence mode="wait">
                {activeDiagnostic !== null ? (
                  <motion.div
                    key={activeDiagnostic}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-secondary shrink-0" />
                      {leakages[activeDiagnostic].title}
                    </h4>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed font-semibold">
                      {leakages[activeDiagnostic].desc}
                    </p>
                    <div className="mt-5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Typical range measured during diagnostic
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-6 text-slate-400 flex flex-col items-center justify-center"
                  >
                    <HelpCircle className="h-10 w-10 text-slate-350 mb-3" />
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Select or Hover on a leakage indicator
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 max-w-xs font-medium">
                      Hover or tap on each leakage block to inspect typical operational impacts.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          <div className="text-center mt-8 text-[9px] text-slate-400 font-bold tracking-wider">
            * ILLUSTRATIVE RANGES COLLECTED FROM REPRESENTATIVE INDUSTRY DATA AND DO NOT IMPLY GUARANTEED INDIVIDUAL DIAGNOSTIC VALUES.
          </div>

          {/* Diagnostic Invitation block */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-slate-50/50 p-6 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Audit Duration: 2–4 Weeks</span>
                </div>
                <h4 className="text-lg font-extrabold text-slate-900">
                  BTC Business Performance Diagnostic
                </h4>
                <p className="mt-2 text-xs text-slate-550 leading-relaxed font-semibold">
                  Our performance assessment maps operations across ten diagnostic dimensions. You receive: Business Health Scorecard, Top 10 Improvement Opportunities, Prioritized Action Plan, and 90-Day Transformation Roadmap.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-end">
                <a
                  href="https://wa.me/917099214505?text=Hi,%20I%20am%20interested%20in%20starting%20a%20Business%20Performance%20Diagnostic."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/95 text-white font-bold px-6 py-5 text-xs shadow-sm">
                    Start Your Diagnostic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4. The BTC PRISM Approach (Static Timelines) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Methodology</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">The BTC PRISM Approach</h3>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500">
              A structured execution roadmap that ensures new workflows are deployed, tracked, and sustained.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5 relative">
            {/* Connecting line */}
            <div className="absolute top-[38px] left-[10%] right-[10%] hidden h-[2px] bg-slate-200/80 lg:block z-0" />

            {prismSteps.map((step) => (
              <div 
                key={step.letter}
                className="relative z-10 flex flex-col items-center text-center rounded-3xl border border-slate-200/80 p-6 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 shadow-xs"
              >
                {/* Circle step label */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full text-white text-lg font-black bg-primary mb-4 shadow-sm">
                  {step.letter}
                </div>

                <span className="text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-3 text-secondary bg-secondary/10">
                  {step.name}
                </span>

                <h4 className="text-xs font-extrabold tracking-wider text-slate-950 uppercase mb-2">
                  {step.phase}
                </h4>

                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-2.5 text-xs font-bold text-slate-700 border border-slate-200/80">
              <Sparkles className="h-3.5 w-3.5 text-slate-500" />
              We do not stop at advisory reports. We implement processes and lock in results.
            </div>
          </div>
        </div>

        {/* 5. Before vs After (Responsive Comparison Grid) */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">The Transformation</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">The Value of Working with BTC</h3>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xs overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-2 bg-slate-900 border-b border-slate-700 p-4 font-bold text-xs uppercase tracking-wider text-slate-350">
              <div>Without Structured Improvement</div>
              <div>With BTC Intervention</div>
            </div>
            
            <div className="divide-y divide-slate-150">
              {comparisonData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-2 p-4 text-xs items-center gap-4 hover:bg-slate-50 transition-all duration-150"
                >
                  <div className="flex items-start gap-2.5 text-slate-550">
                    <AlertCircle className="h-4.5 w-4.5 text-slate-350 shrink-0 mt-0.5" />
                    <span className="font-semibold">{item.before}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-900 font-bold">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export { BusinessConsulting };
