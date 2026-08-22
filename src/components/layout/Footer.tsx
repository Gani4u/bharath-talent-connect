import logo from "@/assets/logos/btc-logo.png";
import { Link } from "react-scroll";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const isHome = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '/index.html');

  const handleNavClick = (to: string, e: React.MouseEvent) => {
    if (!isHome) {
      e.preventDefault();
      sessionStorage.setItem("scrollToSection", to);
      window.history.pushState(null, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          
          {/* Brand Details */}
          <div>
            <img
              src={logo}
              alt="BTC & btcconsulting Logo"
              className="mb-5 h-16 object-contain"
              loading="lazy"
              width="64"
              height="64"
            />
            <h3 className="text-sm font-extrabold text-white tracking-wide uppercase mb-3">
              BTC & btcconsulting
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              BTC (Business Transformation Consulting) provides our flagship management advisory solutions, while btcconsulting (Bharat-Talent-Connect Consultancy) manages international recruitment and talent pipelines.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-slate-350 uppercase mb-5">
              Contact Info
            </h4>
            <div className="space-y-4 text-xs text-slate-400 font-medium">
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-slate-500 shrink-0" />
                <a
                  href="mailto:info@btcconsulting.in"
                  className="hover:text-secondary transition-colors"
                >
                  info@btcconsulting.in
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-slate-500 shrink-0" />
                <a
                  href="https://wa.me/917099214505"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  +91 70992 14505
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <MapPin size={16} className="text-slate-500 shrink-0" />
                <span>Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-slate-350 uppercase mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-xs text-slate-400 font-medium">
              {[
                { title: "About Us", href: "about" },
                { title: "Business Consulting", href: "business-consulting" },
                { title: "Hot Jobs", href: "jobs" },
                { title: "Countries", href: "countries" },
                { title: "Recruitment Process", href: "process" },
                { title: "Why BTC", href: "why" },
                { title: "Contact", href: "contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={(e: React.MouseEvent) => handleNavClick(link.href, e)}
                  className="cursor-pointer hover:text-secondary transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Countries / Global Markets */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-slate-350 uppercase mb-5">
              Placement Markets
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-400 font-medium">
              <span>Saudi Arabia</span>
              <span>Qatar</span>
              <span>Togo</span>
              <span>Ghana</span>
              <span>Nigeria</span>
              <span>Kenya</span>
              <span>Senegal</span>
              <span>Czech Republic</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Bharath Talent Connect Consultancy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}