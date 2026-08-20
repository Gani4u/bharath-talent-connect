import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Openings from "@/components/sections/Openings";
import Countries from "@/components/sections/Countries";
import Process from "@/components/sections/Process";
import WhyChoose from "@/components/sections/WhyChoose";
// import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";
import JobDetail from "@/components/sections/JobDetail";
import GuideDetail from "@/components/sections/GuideDetail";
import NotFound from "@/components/sections/NotFound";
import Consulting from "@/components/sections/Consulting";
import PageSEO from "@/components/common/PageSEO";
import BusinessConsulting from "@/components/sections/BusinessConsulting";

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bharat Talent Connect Consultancy",
    "alternateName": [
      "BTC",
      "BTC Consultancy",
      "BTC Consulting",
      "Bharat Talent Connect",
      "BTC Recruitment",
      "BTC Recruitment Consultancy",
      "BTC Manpower",
      "BTC Manpower Consultancy"
    ],
    "url": "https://btcconsulting.in/"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bharat Talent Connect Consultancy",
    "alternateName": ["BTC", "BTC Consultancy", "BTC Consulting", "Bharat Talent Connect"],
    "url": "https://btcconsulting.in/",
    "logo": "https://btcconsulting.in/imresizer-btc-logo.jpg",
    "description": "Recruitment, staffing, and talent acquisition consultancy connecting businesses with skilled Indian professionals and candidates with international career opportunities.",
    "email": "contact@bharathtalentconnect.com",
    "telephone": "+91-70992-14505",
    "sameAs": [
      "https://www.linkedin.com/company/bharat-talent-connect-consultancy",
      "https://www.facebook.com/bharattalentconnect",
      "https://www.instagram.com/bharattalentconnect"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-70992-14505",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "International Recruitment Services",
    "provider": {
      "@type": "Organization",
      "name": "Bharat Talent Connect Consultancy",
      "url": "https://btcconsulting.in/"
    },
    "description": "Connecting skilled Indian professionals with verified international employers across Africa, the Middle East, and Europe."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manpower Recruitment & Staffing",
    "provider": {
      "@type": "Organization",
      "name": "Bharat Talent Connect Consultancy",
      "url": "https://btcconsulting.in/"
    },
    "description": "Vetted and compliant manpower solutions for industries including Logistics, Construction, Manufacturing, and Engineering."
  }
];

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Global click listener to intercept local <a> tags and route them as SPA transitions
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && !target.target) {
        const url = new URL(target.href);
        if (url.origin === window.location.origin) {
          const path = url.pathname;
          const isFile = /\.[a-zA-Z0-9]+$/.test(path);
          if (!isFile) {
            e.preventDefault();
            window.history.pushState(null, "", path);
            window.dispatchEvent(new PopStateEvent("popstate"));
            
            // Only scroll to top if entering a subpage
            const isSubpage = path.startsWith("/jobs/") || path.startsWith("/guides/") || path === "/consulting" || path.startsWith("/consulting/");
            if (isSubpage) {
              window.scrollTo(0, 0);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Handle cross-page scrolling back to homepage sections
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem("scrollToSection");
    const isHome = currentPath === "/" || currentPath === "/index.html";
    if (scrollToSection && isHome) {
      setTimeout(() => {
        const targetId = scrollToSection.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToSection");
      }, 200);
    }
  }, [currentPath]);

  // Parse path and render appropriate view
  if (currentPath === "/" || currentPath === "/index.html") {
    return (
      <>
        <PageSEO
          title="Bharat Talent Connect Consultancy | International Recruitment & Manpower"
          description="Bharat Talent Connect Consultancy (BTC) connects skilled Indian professionals with trusted international employers across Africa, the Middle East, and Europe."
          canonicalPath="/"
          structuredData={homeStructuredData}
        />
        <Hero />
        <About />
        <BusinessConsulting id="business-consulting" />
        <Openings />
        <Countries />
        <Process />
        <WhyChoose />
        {/* <Resources /> */}
        <Contact />
      </>
    );
  }

  if (currentPath.startsWith("/jobs/")) {
    const jobId = currentPath.replace("/jobs/", "");
    return <JobDetail jobId={jobId} />;
  }

  if (currentPath.startsWith("/guides/")) {
    const guideId = currentPath.replace("/guides/", "");
    return <GuideDetail guideId={guideId} />;
  }

  if (currentPath === "/consulting" || currentPath.startsWith("/consulting/")) {
    return <Consulting />;
  }

  // Fallback to 404 Page
  return <NotFound />;
}
export { Router };
