import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-black py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-white/10 px-5 py-2 text-blue-300">
            Contact BTC
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Ready to Work Abroad?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Connect with Bharath Talent Connect today and discover verified
            international career opportunities.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">

            <Phone className="mb-5 text-orange-400" size={34} />

            <h3 className="text-xl font-bold text-white">
              Call / WhatsApp
            </h3>

            <p className="mt-3 text-slate-300">
              +91 70992 14505
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">

            <Mail className="mb-5 text-orange-400" size={34} />

            <h3 className="text-xl font-bold text-white">
              Email
            </h3>

            <p className="mt-3 text-slate-300 break-all">
              bharattalentconnect@gmail.com
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">

            <MapPin className="mb-5 text-orange-400" size={34} />

            <h3 className="text-xl font-bold text-white">
              Headquarters
            </h3>

            <p className="mt-3 text-slate-300">
              Rajasthan, India
            </p>

          </div>

        </div>

        <div className="mt-16 text-center">

          <Button
            size="lg"
            className="rounded-full bg-orange-500 hover:bg-orange-600"
            asChild
          >
            <a
              href="https://wa.me/917099214505"
              target="_blank"
              rel="noreferrer"
            >
              Contact on WhatsApp

              <ArrowRight className="ml-2 h-4 w-4"/>

            </a>
          </Button>

        </div>

      </div>
    </section>
  );
}