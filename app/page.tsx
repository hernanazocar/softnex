import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-softnex-dark">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
