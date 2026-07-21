import { Button } from "@/components/ui/button";
import logo from "@/assets/logos/btc-logo.png";
import {
  ArrowRight,
  Globe,
  BriefcaseBusiness,
  Users,
  Wrench,
  Boxes,
  Store,
  ShieldCheck,
  Handshake
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

            <a
              href="https://wa.me/917099214505"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full px-5">
                Whatsapp Us
              </Button>
            </a>

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

       {/* RIGHT */}
        <div className="hidden w-1/2 items-center justify-center lg:flex">
          <div className="relative w-full max-w-md rounded-[2rem] border border-white bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
            
            {/* Header */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
              <span className="text-xs font-bold tracking-widest text-slate-500">
                HOT JOBS
              </span>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Mechanic (Trucks & Forklifts)
                    </h4>
                    <p className="text-xs text-slate-500">Overseas placement</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Job 2 */}
              <div className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Warehouse Staff
                    </h4>
                    <p className="text-xs text-slate-500">Overseas placement</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Job 3 */}
              <div className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Store className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Store Manager
                    </h4>
                    <p className="text-xs text-slate-500">Overseas placement</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Footer Badges */}
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50/80 p-4">
              <div className="flex w-1/3 flex-col items-center justify-center gap-1 border-r border-gray-200">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">Trusted</span>
              </div>
              <div className="flex w-1/3 flex-col items-center justify-center gap-1 border-r border-gray-200">
                <Handshake className="h-5 w-5 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">Verified</span>
              </div>
              <div className="flex w-1/3 flex-col items-center justify-center gap-1">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">Global</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}