import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import SpotlightTracker from '@/components/fx/SpotlightTracker'

export default function Home() {
  return (
    <>
      <SpotlightTracker />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
