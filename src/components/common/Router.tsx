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
import TwoCapabilities from "@/components/sections/TwoCapabilities";
import RecruitmentManpower from "@/components/sections/RecruitmentManpower";

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BTC — Business Transformation Consulting",
    "alternateName": [
      "BTC",
      "btcconsulting",
      "Bharat-Talent-Connect Consultancy",
      "BTC Consulting",
      "Bharat Talent Connect"
    ],
    "url": "https://btcconsulting.in/"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BTC — Business Transformation Consulting",
    "alternateName": [
      "BTC",
      "btcconsulting",
      "Bharat-Talent-Connect Consultancy",
      "Bharat Talent Connect"
    ],
    "url": "https://btcconsulting.in/",
    "logo": "https://btcconsulting.in/imresizer-btc-logo.jpg",
    "description": "BTC helps growing businesses improve profitability, productivity, and operational excellence, while btcconsulting connects international employers with skilled Indian talent.",
    "email": "info@btcconsulting.in",
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
    "name": "Business Transformation Consulting",
    "provider": {
      "@type": "Organization",
      "name": "BTC — Business Transformation Consulting",
      "url": "https://btcconsulting.in/"
    },
    "description": "Pragmatic management consulting for MSMEs and growing businesses. Covering business growth, profit improvement, cost optimization, process improvement, productivity, working capital, supply chain, and management systems."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "International Recruitment Services",
    "provider": {
      "@type": "Organization",
      "name": "btcconsulting — Bharat-Talent-Connect Consultancy",
      "url": "https://btcconsulting.in/"
    },
    "description": "Connecting skilled Indian professionals with verified international employers across Africa, the Middle East, and Europe through btcconsulting."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manpower Recruitment & Staffing",
    "provider": {
      "@type": "Organization",
      "name": "btcconsulting — Bharat-Talent-Connect Consultancy",
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
      const targetId = scrollToSection.replace("#", "");
      let attempts = 0;

      const performScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollToSection");
        } else if (attempts < 15) {
          attempts++;
          requestAnimationFrame(performScroll);
        } else {
          sessionStorage.removeItem("scrollToSection");
        }
      };

      requestAnimationFrame(performScroll);
    }
  }, [currentPath]);

  // Parse path and render appropriate view
  if (currentPath === "/" || currentPath === "/index.html") {
    return (
      <>
        <PageSEO
          title="BTC | Business Transformation Consulting & Global Talent Solutions"
          description="BTC — Business Transformation Consulting helps growing businesses improve profitability, productivity, and operational excellence, while btcconsulting connects international employers with skilled Indian talent."
          canonicalPath="/"
          structuredData={homeStructuredData}
        />
        <Hero />
        <TwoCapabilities />
        <About />
        <BusinessConsulting id="business-consulting" />
        <RecruitmentManpower id="recruitment-manpower" />
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
