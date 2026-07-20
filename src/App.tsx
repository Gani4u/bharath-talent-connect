import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "./components/layout/Footer";
import Openings from "./components/sections/Openings";
import Countries from "./components/sections/Countries";
import Process from "./components/sections/Process";
import WhyChoose from "./components/sections/WhyChoose";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />
        <Openings />
        <Countries />
        <Process />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;