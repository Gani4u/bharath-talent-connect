import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Wrench,
  Truck,
  Coffee
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function RecruitmentManpower({ id = "recruitment-manpower" }: { id?: string }) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const categories = [
    {
      title: "Management & Admin",
      icon: Building2,
      roles: "Production Managers · HR & Admin · Accounts & Finance · Supervisors"
    },
    {
      title: "Engineering & Technical",
      icon: Wrench,
      roles: "Mechanical & Electrical Engineers · Welders · Fabricators · CNC Operators"
    },
    {
      title: "Operations & Support",
      icon: Truck,
      roles: "Heavy/Light Drivers · Warehousing Staff · Skilled Trades · General Workers"
    },
    {
      title: "Hospitality & Services",
      icon: Coffee,
      roles: "Professional Cooks · Kitchen Stewards · Hospitality Support Staff"
    }
  ];

  return (
    <section
      id={id}
      className="bg-transparent py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Two-Column Header Structure */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-4 py-1.5 font-semibold text-secondary uppercase text-xs tracking-wider">
              Secondary Vertical
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Global Recruitment & Manpower Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Through btcconsulting (Bharat-Talent-Connect Consultancy), we bridge skilled Indian professionals with international employers across Africa, the Middle East, and Europe. Our sourcing process is fully verified, ensuring compliant and work-ready candidate deployment.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Why Global Employers Partner with btcconsulting:
            </h3>
            
            {[
              "Zero fee liability for partner employers",
              "No-obligation profile sharing and screening reviews",
              "Access to a comprehensive vetted Indian candidate database",
              "End-to-end documentation, testing, and visa compliance"
            ].map((highlight) => (
              <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-600">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Talent Category Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-secondary/25 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
              >
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">{cat.title}</h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                    {cat.roles}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-16 bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(248,112,5,0.1),transparent_35%)]" />
          
          <div className="relative z-10 max-w-xl text-center sm:text-left">
            <h4 className="text-xl font-bold">Deploy Global Sourcing Capabilities</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Submit your specific manpower request or browse our current active job openings to find the right talent for your operations.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="jobs"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-5">
                View Hot Jobs
              </Button>
            </Link>

            <a
              href="https://wa.me/917099214505?text=Hi,%20I%20want%20to%20submit%20a%20manpower%20requirement%20to%20btcconsulting."
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full bg-secondary text-white hover:bg-secondary/95 font-bold px-6 py-5">
                Submit Requirement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export { RecruitmentManpower };
