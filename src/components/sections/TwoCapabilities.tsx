import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function TwoCapabilities() {
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
    <section className="bg-transparent py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Dual Capabilities
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Two Capabilities. One BTC.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            We operate at the intersection of business performance consulting and strategic international staffing, aligning operational capability with talent access to drive sustainable growth.
          </p>
        </div>

        {/* Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* BUSINESS CONSULTING: Flagship Panel (7/12 Width on Desktop) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-between rounded-[2.5rem] bg-slate-900 p-8 md:p-10 text-white shadow-xl relative overflow-hidden group min-h-[400px] lg:min-h-[440px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Visual background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(3,78,138,0.2),transparent_45%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white mb-6 shadow-md">
                <TrendingUp size={24} />
              </div>
              
              <span className="text-[10px] font-black tracking-widest text-primary-foreground/75 uppercase">
                Primary Flagship Vertical
              </span>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl text-white">
                Business Transformation Consulting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-350">
                Pragmatic management advisory focusing on margin expansion, operational waste elimination, process standardization, and scalable KPI control systems.
              </p>

              {/* Targets list */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="text-[10px] font-extrabold text-primary-foreground/90 uppercase tracking-widest mb-3">
                  Targeted Improvements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>EBITDA Margin Growth</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Process Standardization</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Working Capital Release</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>KPI Performance Scorecards</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <Link
                to="business-consulting"
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer inline-block"
              >
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-6 py-4 text-xs">
                  Explore Consulting Solutions
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* GLOBAL RECRUITMENT: Secondary Panel (5/12 Width on Desktop) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-secondary/20 transition-all duration-300 min-h-[350px] lg:min-h-[440px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(248,112,5,0.04),transparent_40%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary mb-6 shadow-xs">
                <Users size={24} />
              </div>
              
              <span className="text-[10px] font-black tracking-widest text-secondary uppercase">
                Secondary Staffing Vertical
              </span>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900">
                Global Manpower & Staffing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Connecting international employers with fully vetted, work-ready Indian professionals. Direct placement pipelines with zero employer fee liability.
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <Link
                to="recruitment-manpower"
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer w-full block"
              >
                <Button variant="outline" className="w-full rounded-full border-slate-350 text-slate-800 hover:bg-slate-50 font-bold py-4 text-xs">
                  Explore Recruitment Sourcing
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
