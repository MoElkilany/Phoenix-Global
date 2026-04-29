import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CEOMessage from './components/CEOMessage'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProjects from './components/FeaturedProjects'
import Investment from './components/Investment'
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
        <CEOMessage />
        <Services />
        <WhyChooseUs />
        <FeaturedProjects />
        <Investment />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App