import { Button } from "@/components/ui/button";
import logo from "@/assets/logos/btc-logo.png";
import {
  ArrowRight,
  Globe,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50"
    >
      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20 lg:px-8">

        {/* LEFT */}

        <div className="w-full lg:w-1/2">

          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Trusted by 10+ International Employers
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">

            Connecting Skilled Indian Talent

            <span className="block bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent">
              with Global Career Opportunities
            </span>

          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">

            Bharath Talent Connect Consultancy helps skilled professionals
            connect with verified employers across Africa, the Gulf,
            and Europe through transparent recruitment and dedicated support.

          </p>

          <div className="flex flex-wrap gap-4">

            <Button
              size="lg"
              className="rounded-full bg-blue-700 hover:bg-blue-800"
            >
              Explore Hot Jobs

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <a
                href="https://wa.me/917099214505"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-5">

            <div className="rounded-2xl bg-white p-5 shadow-lg">

              <Users className="mb-3 h-8 w-8 text-blue-700" />

              <h3 className="text-2xl font-bold">10+</h3>

              <p className="text-sm text-gray-500">
                Employer Partners
              </p>

            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg">

              <BriefcaseBusiness className="mb-3 h-8 w-8 text-orange-500" />

              <h3 className="text-2xl font-bold">50+</h3>

              <p className="text-sm text-gray-500">
                Placements
              </p>

            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg">

              <Globe className="mb-3 h-8 w-8 text-green-600" />

              <h3 className="text-2xl font-bold">8+</h3>

              <p className="text-sm text-gray-500">
                Countries
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden w-1/2 items-center justify-center lg:flex">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-30"></div>

            <img
              src={logo}
              alt="BTC Logo"
              className="relative w-[360px] drop-shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}