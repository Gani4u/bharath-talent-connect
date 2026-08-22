import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Briefcase
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Entrance animations for initial page load
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <div 
      id="home"
      className="relative w-full bg-gradient-to-b from-blue-50/40 via-slate-50/60 to-slate-50 overflow-hidden py-16 lg:py-28"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:flex-row lg:px-8 gap-12 z-10">
        
        {/* LEFT COLUMN: Brand Copy */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="mb-6 inline-flex self-start items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase"
          >
            <Activity className="h-3.5 w-3.5 text-primary animate-pulse" />
            Executive Business Solutions
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Business Growth. <br />
            Global Talent. <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              One Trusted Partner.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-650 font-normal"
          >
            We provide high-impact Business Management Consulting to help growing enterprises optimize operations and increase margins—alongside trusted international recruitment and manpower solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="business-consulting"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/95 font-bold shadow-sm px-7"
              >
                Explore Business Consulting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link
              to="recruitment-manpower"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer"
            >
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full border-slate-350 hover:bg-slate-50 text-slate-800 font-bold px-7"
              >
                Find the Right Talent
              </Button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-250/50 pt-8 max-w-xl"
          >
            <div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-5.5 w-5.5 text-primary" />
                <span className="text-xl font-bold text-slate-900 sm:text-2xl">8</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Advisory Areas
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-5.5 w-5.5 text-secondary" />
                <span className="text-xl font-bold text-slate-900 sm:text-2xl">10+</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Global Partners
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <Globe className="h-5.5 w-5.5 text-primary" />
                <span className="text-xl font-bold text-slate-900 sm:text-2xl">8+</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Countries Served
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Visuals */}
        <motion.div 
          className="w-full lg:w-5/12 flex flex-col gap-6"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* BUSINESS PERFORMANCE CARD (Flagship) */}
          <div className="relative rounded-[2.5rem] border border-slate-200 bg-white/90 p-7 shadow-lg flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 filter blur-3xl" />
            
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-full">
                  Flagship Capability
                </span>
                <h3 className="mt-3.5 text-xl font-black text-slate-955">
                  Business Performance Consulting
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-sm">
                  Strategic interventions to scale revenue, optimize workflows, and build resilient management systems for MSMEs.
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0 shadow-xs">
                <TrendingUp className="h-5.5 w-5.5" />
              </div>
            </div>

            {/* Performance Indicators Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 bg-slate-50/70 rounded-2xl p-4 border border-slate-100 relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Cost Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Margin Unlocked</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Productivity Up</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-slate-700">KPI-Driven Systems</span>
              </div>
            </div>
          </div>

          {/* GLOBAL RECRUITMENT CARD (Secondary) */}
          <div className="relative rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-md flex items-center justify-between hover:shadow-lg hover:border-secondary/20 transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(248,112,5,0.04),transparent_40%)] pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary shrink-0">
                <Briefcase className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold tracking-widest text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded-full">
                  International Staffing
                </span>
                <h4 className="mt-1 text-base font-bold text-slate-900">
                  Global Manpower Solutions
                </h4>
                <p className="text-xs text-slate-500">
                  Verified candidate profiles, zero cost to employers.
                </p>
              </div>
            </div>
            
            <Link
              to="recruitment-manpower"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-primary transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-slate-100/50 border border-slate-150 rounded-2xl text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>Verified Employers Only</span>
            </div>
            <span className="text-slate-350">|</span>
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-primary shrink-0" />
              <span>Compliant Deployment</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}