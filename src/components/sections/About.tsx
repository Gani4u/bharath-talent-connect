import { TrendingUp, BarChart3, Globe, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    description: "Deploying pragmatic business consulting to identify value leakages, streamline processes, and improve profit margins."
  },
  {
    icon: BarChart3,
    title: "Management Systems",
    description: "Installing KPI dashboards and operating review routines to sustain gains and support enterprise scalability."
  },
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description: "Connecting international employers with fully vetted, work-ready Indian professionals across diverse industrial sectors."
  },
  {
    icon: ShieldCheck,
    title: "Compliant Deployment",
    description: "Ensuring end-to-end regulatory compliance, trade testing, and deployment support for overseas placements."
  }
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const elementVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section
      id="about"
      className="bg-transparent py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Corporate Profile
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Dual-Vertical Advisory Partner
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-650">
            BTC — Business Transformation Consulting bridges the gap between executive-level business advisory and compliant global staffing. Through the related btcconsulting (Bharat-Talent-Connect Consultancy) brand, we empower growing enterprises to scale operations efficiently while supplying vetted talent to international markets.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                variants={elementVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-xs">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-550 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}