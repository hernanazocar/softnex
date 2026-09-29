'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ContactButton from './ContactButton'

const NAV_LINKS = [
  { href: '#servicios', label: 'SERVICIOS' },
  { href: '#proceso', label: 'PROCESO' },
  { href: '#nosotros', label: 'NOSOTROS' },
  { href: '#ventajas', label: 'VENTAJAS' },
  { href: '#testimonios', label: 'TESTIMONIOS' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))

    const clearOnTop = () => {
      if (window.scrollY < 200) setActiveSection(null)
    }
    window.addEventListener('scroll', clearOnTop, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', clearOnTop)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 pt-1 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#06111F]/95 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent border-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-8">
              <Link href="/" className="group flex items-center">
                <Image
                  src="/logo-header-crop.png"
                  alt="Softnex"
                  width={575}
                  height={220}
                  className="object-contain mix-blend-screen origin-left group-hover:scale-105 transition-transform duration-300 h-9 md:h-10 w-auto"
                  priority
                />
              </Link>

              <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/55 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-softnex-blue/20 border border-softnex-blue/40 shadow-[0_0_12px_rgba(0,168,255,0.3)]"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden md:block ml-auto lg:ml-0">
              <ContactButton variant="minimal" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden relative w-9 h-9 ml-3 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'max-h-[28rem] mt-4 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="glass-strong rounded-xl p-4 space-y-1">
              {[...NAV_LINKS, { href: '#contacto', label: 'CONTACTO' }].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/80 hover:text-white text-sm font-bold tracking-wide transition-colors py-2.5 px-2 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
