import { BookOpen, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

export default function Resources() {
  return (
    <section
      id="guides"
      className="bg-white py-24 text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 font-medium text-primary">
            <BookOpen size={18} />
            Career Resources
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground">
            Career Guides & Job Resources
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Read our helpful articles and guides to prepare for successful overseas employment.
          </p>
        </div>

        {/* Article Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-secondary/15 px-4 py-1 text-xs font-semibold text-secondary">
                  {article.category}
                </span>
                <span className="text-xs text-slate-500">{article.readTime}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground line-clamp-2">
                {article.title}
              </h3>

              <p className="mt-4 flex-grow text-slate-600 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>

              <div className="mt-8 border-t border-border/60 pt-6">
                <a
                  href={`/guides/${article.id}`}
                  className="flex items-center gap-2 font-semibold text-primary transition-colors hover:text-secondary cursor-pointer"
                >
                  Read Full Guide
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
