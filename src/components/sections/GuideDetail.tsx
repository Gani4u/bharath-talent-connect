import { ArrowLeft, BookOpen, Calendar, Clock, Share2 } from "lucide-react";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/common/PageSEO";

interface GuideDetailProps {
  guideId: string;
}

export default function GuideDetail({ guideId }: GuideDetailProps) {
  // Normalize ID
  let normalizedId = guideId.toLowerCase();
  if (normalizedId.includes("mechanic")) normalizedId = "mechanic-guide";
  if (normalizedId.includes("warehouse")) normalizedId = "warehouse-guide";
  if (normalizedId.includes("manager") || normalizedId.includes("store")) normalizedId = "store-manager-guide";

  const article = articles.find((art) => art.id === normalizedId);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-2xl font-bold">Guide Not Found</h2>
        <p className="mt-4 text-slate-500">The requested career guide does not exist or has been relocated.</p>
        <a href="/" className="mt-8 inline-block text-primary hover:underline">
          Back to Home
        </a>
      </div>
    );
  }

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const canonicalUrl = `https://btcconsulting.in/guides/${normalizedId}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://btcconsulting.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://btcconsulting.in/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <PageSEO
        title={`${article.title} | BTC Consulting`}
        description={article.summary}
        canonicalPath={`/guides/${normalizedId}`}
        structuredData={breadcrumbSchema}
      />
      <article className="bg-slate-50 py-16 text-foreground min-h-[85vh]">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Back navigation */}
        <a
          href="/"
          className="inline-flex items-center gap-2 font-medium text-primary hover:text-secondary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Home Page
        </a>

        {/* Article Container */}
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-12 shadow-md">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-6 mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="rounded-full bg-secondary/15 px-4 py-1 text-xs font-semibold text-secondary">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <Clock size={14} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <Calendar size={14} />
                August 2026
              </span>
            </div>

            <button
              onClick={sharePage}
              className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-secondary transition-colors cursor-pointer border border-border/50 rounded-full px-3 py-1 bg-slate-50"
            >
              <Share2 size={13} />
              Share
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-foreground lg:text-4xl leading-tight">
            {article.title}
          </h1>

          {/* Summary Callout */}
          <div className="mt-8 rounded-2xl bg-slate-50 border-l-4 border-secondary p-5 text-[1.05rem] text-slate-600 leading-relaxed italic">
            {article.summary}
          </div>

          {/* Main Body Paragraphs */}
          <div className="mt-8 space-y-6 text-slate-700 leading-8 text-[1.08rem]">
            {article.content.map((paragraph, index) => {
              // Format lists dynamically if they start with numbers
              if (/^[0-9]\./.test(paragraph)) {
                return (
                  <div key={index} className="pl-4 border-l-2 border-primary/20 py-1">
                    <p className="font-bold text-foreground mb-1">{paragraph.split(":")[0]}:</p>
                    <p>{paragraph.split(":").slice(1).join(":")}</p>
                  </div>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Practical Call To Action Banner */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 text-center">
            <BookOpen className="mx-auto text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-foreground">Looking for Opportunities Abroad?</h3>
            <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm leading-6">
              Our verified recruiters at btcconsulting (Bharat-Talent-Connect Consultancy) specialize in matching candidates with top employers across Africa, the Gulf, and Europe.
            </p>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a href="/contact">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/95 px-6 font-semibold">
                  Get In Touch
                </Button>
              </a>
              <a
                href="https://wa.me/917099214505?text=Hi%2C%20I%20have%20read%20your%20career%20guide%20and%20want%20to%20apply%20for%20jobs."
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="rounded-full border-border hover:bg-slate-100 px-6">
                  Apply on WhatsApp
                </Button>
              </a>
            </div>
          </div>

        </div>

      </div>
    </article>
    </>
  );
}
