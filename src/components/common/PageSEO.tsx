import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

export default function PageSEO({
  title,
  description,
  canonicalPath,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots,
  structuredData,
}: PageSEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create a meta tag in head
    const updateMeta = (nameOrProperty: string, value: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.head.querySelector(`meta[${attr}="${nameOrProperty}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, nameOrProperty);
        meta.setAttribute("data-dynamic-seo", "true");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    };

    // Helper to update or create a link tag in head
    const updateLink = (rel: string, href: string) => {
      let link = document.head.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        link.setAttribute("data-dynamic-seo", "true");
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Set description, keywords, robots, and canonical
    updateMeta("description", description);
    if (keywords) {
      updateMeta("keywords", keywords);
    } else {
      updateMeta("keywords", "Bharat Talent Connect, recruitment consultancy India, staffing consultancy India, recruitment agency India, global hiring, manpower recruitment");
    }
    updateMeta("robots", robots || "index, follow, max-image-preview:large");
    updateLink("canonical", `https://btcconsulting.in${canonicalPath}`);

    // 3. Set Open Graph (Facebook) Tags
    updateMeta("og:title", ogTitle || title, true);
    updateMeta("og:description", ogDescription || description, true);
    updateMeta("og:url", `https://btcconsulting.in${canonicalPath}`, true);
    updateMeta("og:type", ogType || "website", true);
    updateMeta("og:image", ogImage || "https://btcconsulting.in/imresizer-btc-logo.jpg", true);
    updateMeta("og:site_name", "Bharat Talent Connect Consultancy", true);

    // 4. Set Twitter Card Tags
    updateMeta("twitter:card", twitterCard || "summary_large_image");
    updateMeta("twitter:title", twitterTitle || title);
    updateMeta("twitter:description", twitterDescription || description);
    updateMeta("twitter:image", twitterImage || "https://btcconsulting.in/imresizer-btc-logo.jpg");

    // 5. Ingest JSON-LD Structured Data
    // Clean up any existing dynamic scripts
    const oldScripts = document.head.querySelectorAll('script[data-dynamic-seo="true"]');
    oldScripts.forEach((script) => script.remove());

    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-dynamic-seo", "true");
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup dynamically added script on unmount
      const scripts = document.head.querySelectorAll('script[data-dynamic-seo="true"]');
      scripts.forEach((script) => script.remove());
    };
  }, [
    title,
    description,
    canonicalPath,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    robots,
    structuredData,
  ]);

  return null;
}
