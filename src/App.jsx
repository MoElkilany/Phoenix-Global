import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProjects from './components/FeaturedProjects'
import Investment from './components/Investment'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <FeaturedProjects />
        <Investment />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App