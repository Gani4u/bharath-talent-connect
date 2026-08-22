import { Mail, MapPin, Phone, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const businessWhatsAppText = encodeURIComponent("Hi, I want to discuss business consulting and transformation solutions with BTC.");
  const employerWhatsAppText = encodeURIComponent("Hi, I want to discuss international recruitment and manpower requirements with btcconsulting.");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-24 text-white"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(3,78,138,0.2),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-semibold text-secondary uppercase text-xs tracking-wider">
            Partner with BTC & btcconsulting
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Let's Build What's Next.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Select the appropriate pathway below to connect directly with our advisory or placement teams.
          </p>
        </div>

        {/* Two Dual-Purpose Conversion Pathways */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          
          {/* Pathway 1: For Growing Businesses */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white mb-6">
                <MessageSquare className="h-5 w-5 shrink-0" />
              </div>
              <h3 className="text-lg font-bold text-white">For Growing Businesses</h3>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed font-medium">
                Identify value leakages, optimize operating costs, and implement management dashboards to scale operations profitably.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href={`https://wa.me/917099214505?text=${businessWhatsAppText}`}
                target="_blank"
                rel="noreferrer"
                className="w-full block"
              >
                <Button className="w-full rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-xs py-5">
                  Start a Business Conversation
                </Button>
              </a>
            </div>
          </div>

          {/* Pathway 2: For International Employers */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between hover:border-secondary/30 transition-all duration-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white mb-6">
                <Briefcase className="h-5 w-5 shrink-0" />
              </div>
              <h3 className="text-lg font-bold text-white">For International Employers</h3>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed font-medium">
                Source vetted, compliant, and work-ready Indian professionals for management, technical, operations, and service roles through btcconsulting (Bharat-Talent-Connect Consultancy).
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href={`https://wa.me/917099214505?text=${employerWhatsAppText}`}
                target="_blank"
                rel="noreferrer"
                className="w-full block"
              >
                <Button className="w-full rounded-full bg-secondary hover:bg-secondary/95 text-white font-bold text-xs py-5">
                  Submit a Manpower Requirement
                </Button>
              </a>
            </div>
          </div>

        </div>

        {/* Contact Info Footer Grid */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto border-t border-white/10 pt-12">
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-secondary shrink-0">
              <Phone className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call / WhatsApp</h4>
              <p className="text-xs font-semibold text-white mt-0.5">+91 70992 14505</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-secondary shrink-0">
              <Mail className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Support</h4>
              <p className="text-xs font-semibold text-white mt-0.5 break-all">
                <a href="mailto:info@btcconsulting.in" className="hover:text-secondary transition-colors">
                  info@btcconsulting.in
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-secondary shrink-0">
              <MapPin className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Headquarters</h4>
              <p className="text-xs font-semibold text-white mt-0.5">Rajasthan, India</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}