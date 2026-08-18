import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Openings from "@/components/sections/Openings";
import Countries from "@/components/sections/Countries";
import Process from "@/components/sections/Process";
import WhyChoose from "@/components/sections/WhyChoose";
import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";
import JobDetail from "@/components/sections/JobDetail";
import GuideDetail from "@/components/sections/GuideDetail";

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
          const isRoute = path === "/" || path.startsWith("/jobs/") || path.startsWith("/guides/");
          if (isRoute) {
            e.preventDefault();
            window.history.pushState(null, "", path);
            window.dispatchEvent(new PopStateEvent("popstate"));
            
            // Only scroll to top if entering a subpage
            const isSubpage = path.startsWith("/jobs/") || path.startsWith("/guides/");
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
    const isHome = currentPath === "/";
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
  if (currentPath.startsWith("/jobs/")) {
    const jobId = currentPath.replace("/jobs/", "");
    return <JobDetail jobId={jobId} />;
  }

  if (currentPath.startsWith("/guides/")) {
    const guideId = currentPath.replace("/guides/", "");
    return <GuideDetail guideId={guideId} />;
  }

  // Home Page
  return (
    <>
      <Hero />
      <About />
      <Openings />
      <Countries />
      <Process />
      <WhyChoose />
      <Resources />
      <Contact />
    </>
  );
}
export { Router };
