import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Router from "@/components/common/Router";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Router />
      </main>

      <Footer />

      {/* Floating WhatsApp overlay */}
      <FloatingWhatsApp />
    </>
  );
}

export default App;