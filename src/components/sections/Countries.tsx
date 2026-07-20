import {
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";

const countries = [
  { code: "TG", name: "Togo", region: "West Africa" },
  { code: "CI", name: "Côte d'Ivoire", region: "West Africa" },
  { code: "NG", name: "Nigeria", region: "West Africa" },
  { code: "KE", name: "Kenya", region: "East Africa" },
  { code: "GH", name: "Ghana", region: "West Africa" },
  { code: "SN", name: "Senegal", region: "West Africa" },
  { code: "ML", name: "Mali", region: "West Africa" },
  { code: "BF", name: "Burkina Faso", region: "West Africa" },
  { code: "SA", name: "Saudi Arabia", region: "Middle East" },
  { code: "QA", name: "Qatar", region: "Middle East" },
  { code: "CZ", name: "Czech Republic", region: "Europe" },
];

export default function Countries() {
  return (
    <section
      id="countries"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700">

            <Globe size={18} />

            Global Presence

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Countries We Recruit For

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-8">

            We recruit skilled professionals for leading companies across
            Africa, the Middle East and Europe through trusted employer
            partnerships.

          </p>

        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {countries.map((country) => (

            <div
              key={country.code}
              className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-700 to-orange-500 text-2xl font-bold text-white">

                {country.code}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {country.name}

              </h3>

              <div className="mt-4 flex items-center gap-2 text-slate-500">

                <MapPin
                  size={18}
                  className="text-orange-500"
                />

                {country.region}

              </div>

              <div className="mt-8">

                {/* <button className="flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-3">

                  Explore Jobs

                  <ArrowRight size={18} />

                </button> */}

              </div>

            </div>

          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-orange-500 p-10 text-white shadow-xl">

          <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">

            <div>

              <h3 className="text-5xl font-bold">
                10+
              </h3>

              <p className="mt-2 opacity-90">
                Countries
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold">
                50+
              </h3>

              <p className="mt-2 opacity-90">
                Placements
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold">
                10+
              </h3>

              <p className="mt-2 opacity-90">
                Employers
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold">
                100%
              </h3>

              <p className="mt-2 opacity-90">
                Verified
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}