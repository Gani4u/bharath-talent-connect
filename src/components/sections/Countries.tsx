import { Globe, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const regions = [
  {
    name: "Africa Operations",
    market: "West & East Africa",
    countries: ["Togo", "Côte d'Ivoire", "Ghana", "Nigeria", "Kenya", "Senegal", "Mali", "Burkina Faso"],
    details: "Key placement markets for manufacturing, operations, and logistics infrastructure projects."
  },
  {
    name: "Middle East Operations",
    market: "Gulf Countries",
    countries: ["Saudi Arabia", "Qatar"],
    details: "Focusing on administrative management, finance, engineering, and technical trade placements."
  },
  {
    name: "European Markets",
    market: "Central Europe",
    countries: ["Czech Republic"],
    details: "Targeted placements in technical engineering, IT development, and specialized production roles."
  }
];

export default function Countries() {
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
      id="countries"
      className="bg-transparent py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 font-semibold text-primary uppercase text-xs tracking-wider">
            Global Reach
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Sourcing & Placement Markets
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            BTC coordinates candidate sourcing and deployment pipelines across established international growth markets.
          </p>
        </div>

        {/* Regional Groupings Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {regions.map((region, index) => {
            return (
              <motion.div
                key={region.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
                variants={elementVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
              >
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide border-b border-slate-100 pb-4 mb-4">
                    <Globe className="h-4.5 w-4.5" />
                    <span>{region.name}</span>
                  </div>
                  
                  <span className="text-[10px] font-black text-secondary tracking-widest uppercase bg-secondary/10 px-2 py-0.5 rounded-full">
                    {region.market}
                  </span>
                  
                  <p className="text-xs text-slate-550 leading-relaxed font-semibold mt-4 mb-6">
                    {region.details}
                  </p>

                  <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-3">
                    Active Countries:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                    {region.countries.map((country) => (
                      <div key={country} className="flex items-center gap-2 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-secondary shrink-0" />
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic placement statistics banner */}
        <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(3,78,138,0.15),transparent_40%)]" />
          <div className="relative z-10 grid grid-cols-2 gap-8 text-center lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-6 lg:pt-0">
              <h3 className="text-4xl font-extrabold md:text-5xl text-white">10+</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Countries</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <h3 className="text-4xl font-extrabold md:text-5xl text-white">50+</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Overseas Placements</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <h3 className="text-4xl font-extrabold md:text-5xl text-white">10+</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Employer Partners</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <h3 className="text-4xl font-extrabold md:text-5xl text-white">100%</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Compliance & Trust</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}