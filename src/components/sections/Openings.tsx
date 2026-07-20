import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const jobs = [
  {
    title: "Truck Mechanic",
    openings: "5 Openings",
  },
  {
    title: "Forklift Mechanic",
    openings: "5 Openings",
  },
  {
    title: "Warehouse Worker",
    openings: "Hiring Now",
  },
  {
    title: "Store Manager",
    openings: "Urgent Requirement",
  },
];

export default function Openings() {
  return (
    <section
      id="jobs"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Hot Jobs
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Current Overseas Openings
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Explore the latest overseas opportunities with trusted
            international employers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {jobs.map((job) => (

            <div
              key={job.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">

                <BriefcaseBusiness className="h-7 w-7 text-blue-700" />

              </div>

              <h3 className="text-xl font-semibold">
                {job.title}
              </h3>

              <p className="mt-2 text-slate-500">
                {job.openings}
              </p>

              {/* <Button
                asChild
                className="mt-8 w-full rounded-full"
              >
                <a
                  href="https://wa.me/917099214505"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now

                  <ArrowUpRight className="ml-2 h-4 w-4" />

                </a>
              </Button> */}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}