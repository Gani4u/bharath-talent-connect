import {
  BadgeCheck,
  Globe,
  Users,
  ShieldCheck,
  PhoneCall,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Recruitment",
    desc: "Hiring opportunities across Africa, Gulf countries and Europe.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Employers",
    desc: "Every employer is verified before candidate submission.",
  },
  {
    icon: Users,
    title: "Personal Guidance",
    desc: "Dedicated support throughout the recruitment process.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Roles",
    desc: "Warehouse, Logistics, Construction, Manufacturing and Engineering.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Process",
    desc: "No hidden recruitment process. Complete documentation support.",
  },
  {
    icon: PhoneCall,
    title: "Quick Communication",
    desc: "Fast WhatsApp updates and interview scheduling.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-primary/10 px-5 py-2 font-medium text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Why Companies & Candidates Trust BTC
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Bharath Talent Connect bridges skilled professionals with trusted international employers, while helping organizations transform and scale with dedicated business improvement consulting.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-secondary text-white">

                <item.icon size={30} />

              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}