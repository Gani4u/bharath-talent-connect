import {
  Search,
  FileCheck,
  Plane,
  BriefcaseBusiness,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Profile Screening",
    description:
      "We review your profile and match it with suitable international employers.",
  },
  {
    icon: FileCheck,
    title: "2. Interview & Documentation",
    description:
      "Candidates complete interviews and document verification with employer guidance.",
  },
  {
    icon: BriefcaseBusiness,
    title: "3. Offer Letter",
    description:
      "Selected candidates receive official employment offers from verified companies.",
  },
  {
    icon: Plane,
    title: "4. Travel & Joining",
    description:
      "Visa processing, travel assistance and onboarding support until successful joining.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 font-medium text-orange-600">
            Recruitment Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Your Journey Abroad
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We simplify international hiring through a transparent,
            step-by-step recruitment process.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-0 top-16 hidden h-1 w-full bg-gradient-to-r from-blue-600 to-orange-500 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white">

                  <step.icon size={36} />

                </div>

                <h3 className="text-center text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-center leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}