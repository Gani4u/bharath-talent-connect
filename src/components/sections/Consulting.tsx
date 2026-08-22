import PageSEO from "@/components/common/PageSEO";
import { ArrowLeft } from "lucide-react";
import BusinessConsulting from "@/components/sections/BusinessConsulting";

export default function Consulting() {
  const handleHomeRedirect = () => {
    window.history.pushState(null, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="bg-slate-50 py-16 text-foreground min-h-[85vh]">
      <PageSEO
        title="Business Transformation & Management Consulting | BTC"
        description="Flagship business management consulting and transformation services by BTC — helping MSMEs grow profitably, optimize costs, improve productivity, and build KPI dashboards."
        canonicalPath="/consulting"
      />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Back navigation */}
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleHomeRedirect();
            }}
            className="inline-flex items-center gap-2 font-medium text-primary hover:text-secondary transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft size={18} />
            Back to Home Page
          </a>
        </div>

        <BusinessConsulting isSubpage={true} />

      </div>
    </div>
  );
}

export { Consulting };
