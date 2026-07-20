import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section id="home" className="min-h-screen">
          {/* Hero section will go here */}
        </section>

        <section id="about">
          {/* About section */}
        </section>

        <section id="countries">
          {/* Countries section */}
        </section>

        <section id="openings">
          {/* Hot Jobs section */}
        </section>

        <section id="process">
          {/* Recruitment process section */}
        </section>

        <section id="contact">
          {/* Contact section */}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App