import {
  TrendingUp,
  Wrench,
  Activity,
  BarChart3,
  Sliders,
  Globe
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    icon: TrendingUp,
    title: "Business-First",
    desc: "We focus directly on tangible business outcomes, margin expansion, and financial optimization.",
  },
  {
    icon: Wrench,
    title: "Practical Interventions",
    desc: "Solutions are co-designed for real, frontline operating environments, avoiding consulting jargon.",
  },
  {
    icon: Activity,
    title: "Implementation-Focused",
    desc: "We work hand-in-hand on the operating floor to install processes, establish reviews, and lock in improvements.",
  },
  {
    icon: BarChart3,
    title: "Measurable Gains",
    desc: "Operational improvements are measured against baseline scorecards and verified through clear KPIs.",
  },
  {
    icon: Sliders,
    title: "Flexible Engagement",
    desc: "From short diagnostics and improvement projects to full transformation programs and monthly advisory services.",
  },
  {
    icon: Globe,
    title: "Global Talent Access",
    desc: "Direct access to an extensive database of screened, work-ready Indian professionals for international roles.",
  },
];

export default function WhyChoose() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section
      id="why"
      className="bg-transparent py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 font-semibold text-primary uppercase text-xs tracking-wider">
            Why Partner with BTC
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Delivering Strategic Value & Operational Capability
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500">
            We combine operational diagnostics, process engineering, and global recruitment network access under one brand to provide complete growth support.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-xs">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-500 font-medium">
                    {item.desc}
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