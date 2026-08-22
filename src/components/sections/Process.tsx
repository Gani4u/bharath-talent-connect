import { 
  ClipboardList, 
  Search, 
  UserCheck, 
  Send, 
  PlaneTakeoff 
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const steps = [
  {
    icon: ClipboardList,
    title: "01 Understand Requirement",
    desc: "We analyze client requirements, detailing job roles, technical skills, compliance metrics, and operational needs.",
  },
  {
    icon: Search,
    title: "02 Source Candidates",
    desc: "Leveraging our database and network, we source candidates matching the technical profile.",
  },
  {
    icon: UserCheck,
    title: "03 Screen & Verify",
    desc: "Every candidate undergoes initial screening, credentials check, and skills assessment to confirm suitability.",
  },
  {
    icon: Send,
    title: "04 Share Profiles",
    desc: "We share vetted, work-ready profiles with the employer, setting up scheduling for final selections.",
  },
  {
    icon: PlaneTakeoff,
    title: "05 Deploy & Support",
    desc: "End-to-end guidance through travel documentation, medical tests, and onboarding until successful joining.",
  },
];

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="process"
      className="relative w-full bg-transparent py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-4 py-1.5 font-semibold text-secondary uppercase text-xs tracking-wider">
            Staffing Workflow
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Recruitment Process Timeline
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            We structure our recruitment activities into a clear, compliant sourcing timeline to ensure rapid, high-quality international deployment.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          
          {/* Center Line for desktop */}
          <div className="absolute left-[38px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-150 -translate-x-1/2 hidden md:block" />

          {/* Steps list */}
          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={step.title}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                >
                  
                  {/* Panel Left/Right (description text) */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-secondary/20 hover:shadow-md transition-all duration-300">
                      <h4 className="text-base font-extrabold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed font-semibold">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Badge Center (Circle) */}
                  <div className="absolute left-[38px] lg:left-1/2 top-2 md:top-auto md:bottom-auto -translate-x-1/2 z-20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 bg-secondary border-secondary text-white shadow-sm">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                  </div>

                  {/* Placeholder on opposite side for desktop layout balance */}
                  <div className="hidden md:block w-[45%]" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
export { Process };