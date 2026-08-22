import { Button } from "@/components/ui/button";
import { Briefcase, ArrowUpRight, MapPin, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const jobs = [
  {
    title: "Core Odoo Developer",
    location: "Saudi Arabia",
    openings: "2 Openings Available",
    tag: "Hiring Now",
  },
  {
    title: "Production Manager",
    location: "West Africa",
    openings: "5 Openings Available",
    tag: "Urgent Requirement",
  },
  {
    title: "Chartered Accountant",
    location: "Qatar",
    openings: "1 Opening Available",
    tag: "Hiring Now",
  },
  {
    title: "Civil Engineer",
    location: "Central Europe",
    openings: "3 Openings Available",
    tag: "Profile Screening",
  },
];

export default function Openings() {
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
      id="jobs"
      className="bg-transparent py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 font-semibold text-primary uppercase text-xs tracking-wider">
            Active Placements
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Current Placement Opportunities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            Explore active mandates from our international employer partners. Access fully compliant deployment structures.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, index) => {
            const encodedText = encodeURIComponent(`Hi, I am interested in applying for the ${job.title} position in ${job.location}.`);
            return (
              <motion.div
                key={job.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-secondary/25 transition-all duration-300 min-h-[280px]"
                variants={elementVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5 shrink-0" />
                    </div>
                    <span className="text-[9px] font-black text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded-full">
                      {job.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-950">
                    {job.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{job.openings}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/917099214505?text=${encodedText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block"
                  >
                    <Button variant="outline" className="w-full rounded-full border-slate-350 hover:bg-slate-50 text-slate-800 font-bold text-xs">
                      Apply Via WhatsApp
                      <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}