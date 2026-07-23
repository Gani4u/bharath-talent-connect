import {
  Mail,
  MapPin,
  Phone,
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
              +91 70992 14505 / +91 9106912718
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

        <div className="mt-16 flex justify-center text-center">

          <a
            href="https://wa.me/917099214505"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="flex items-center gap-2 rounded-full px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contact On Whatsapp
            </Button>
          </a>

        </div>

      </div>
    </section>
  );
}