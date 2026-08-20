import { Globe2, ShieldCheck, Handshake, Plane } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Hiring",
    description:
      "Connecting skilled Indian professionals with verified international employers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Process",
    description:
      "Transparent recruitment with complete guidance throughout the hiring journey.",
  },
  {
    icon: Handshake,
    title: "Employer Network",
    description:
      "Growing partnerships across Africa, Gulf countries and Europe.",
  },
  {
    icon: Plane,
    title: "Career Abroad",
    description:
      "Helping candidates build successful international careers.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-primary font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Bharath Talent Connect Consultancy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Bharath Talent Connect Consultancy helps skilled professionals connect with verified employers across Africa, Gulf countries, and Europe, while offering pragmatic business consulting to help enterprises optimize operations, improve margins, and scale profitably.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}