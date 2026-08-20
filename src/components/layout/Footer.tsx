import logo from "@/assets/logos/btc-logo.png";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          <div>

            <img
              src={logo}
              alt="Bharat Talent Connect Consultancy Logo"
              className="mb-4 h-20 object-contain"
              loading="lazy"
              width="80"
              height="80"
            />

            <p className="text-slate-300 leading-7">
              Bharath Talent Connect Consultancy provides global recruitment solutions and business transformation consulting to help candidates build careers and enterprises optimize operations.
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <Mail size={18} />

                <a
                  href="mailto:info@btcconsulting.in"
                  className="hover:text-secondary transition-colors"
                >
                  info@btcconsulting.in
                </a>

              </div>

              <div className="flex gap-3">

                <Phone size={18} />

                <a
                  href="https://wa.me/917099214505"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  +91 70992 14505
                </a>

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                <span>
                  Rajasthan, India
                </span>

              </div>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Countries
            </h3>

            <div className="grid grid-cols-2 gap-3 text-slate-300">

              <span>Togo</span>
              <span>Ghana</span>
              <span>Nigeria</span>
              <span>Kenya</span>
              <span>Saudi Arabia</span>
              <span>Qatar</span>
              <span>Mali</span>
              <span>Senegal</span>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">

          © {new Date().getFullYear()} Bharath Talent Connect Consultancy.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}