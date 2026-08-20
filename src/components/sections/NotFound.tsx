import PageSEO from "@/components/common/PageSEO";
import { ArrowLeft, Home, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const handleHomeRedirect = () => {
    window.history.pushState(null, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="bg-slate-50 py-24 text-foreground min-h-[75vh] flex items-center justify-center">
      <PageSEO
        title="Page Not Found | BTC Consulting"
        description="The page you are looking for does not exist on Bharat Talent Connect Consultancy."
        canonicalPath="/404"
        robots="noindex, nofollow"
      />

      <div className="mx-auto max-w-xl px-6 text-center">
        <span className="text-sm font-extrabold tracking-wider text-secondary uppercase bg-secondary/15 rounded-full px-4 py-1.5">
          Error 404
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Sorry, we couldn’t find the page you are looking for. It might have been moved, updated, or deleted.
        </p>

        {/* Navigation actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={handleHomeRedirect}
            className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/95 flex items-center justify-center gap-2 px-6 py-5 cursor-pointer"
          >
            <Home size={18} />
            Back to Home
          </Button>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem("scrollToSection", "jobs");
              handleHomeRedirect();
            }}
            className="w-full sm:w-auto text-slate-700 hover:text-primary font-medium flex items-center justify-center gap-2 border border-border bg-white rounded-full px-6 py-2.5 transition-colors cursor-pointer"
          >
            <Briefcase size={18} className="text-secondary" />
            Explore Jobs
          </a>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem("scrollToSection", "guides");
              handleHomeRedirect();
            }}
            className="w-full sm:w-auto text-slate-700 hover:text-primary font-medium flex items-center justify-center gap-2 border border-border bg-white rounded-full px-6 py-2.5 transition-colors cursor-pointer"
          >
            <FileText size={18} className="text-secondary" />
            Read Guides
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Go Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}
export { NotFound };
