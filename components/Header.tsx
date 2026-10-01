'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, LayoutGrid, Route, Users, BadgeCheck, Quote, ArrowUpRight, Mail } from 'lucide-react'
import ContactButton from './ContactButton'
import { socials } from './socials'

const NAV_LINKS = [
  { href: '#servicios', label: 'SERVICIOS', name: 'Servicios', icon: LayoutGrid },
  { href: '#proceso', label: 'PROCESO', name: 'Proceso', icon: Route },
  { href: '#nosotros', label: 'NOSOTROS', name: 'Nosotros', icon: Users },
  { href: '#ventajas', label: 'VENTAJAS', name: 'Ventajas', icon: BadgeCheck },
  { href: '#testimonios', label: 'TESTIMONIOS', name: 'Testimonios', icon: Quote },
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
    // Se observan todas las secciones: al entrar en una que no está en el menú (FAQ, Contacto, CTA) se apaga el indicador
    const sections = Array.from(document.querySelectorAll('main section'))
    if (sections.length === 0) return
    const navHrefs = new Set(NAV_LINKS.map((l) => l.href))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const href = `#${entry.target.id}`
          setActiveSection(navHrefs.has(href) ? href : null)
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
          isMobileMenuOpen
            ? 'bg-transparent border-transparent'
            : isScrolled
              ? 'bg-[#06111F] border-white/10 shadow-lg shadow-black/20'
              : 'bg-transparent border-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-8">
              <Link href="/" className="group flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-softnex.png"
                  alt="Softnex"
                  width={575}
                  height={220}
                  fetchPriority="high"
                  className="object-contain origin-left group-hover:scale-105 transition-transform duration-300 h-9 md:h-10 w-auto"
                />
              </Link>

              <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-1 rounded-full border text-[10px] font-bold tracking-[0.12em] transition-all duration-300 ${
                        isActive
                          ? 'text-white bg-softnex-blue/20 border-softnex-blue/40 shadow-[0_0_12px_rgba(0,168,255,0.3)]'
                          : 'text-white/55 border-transparent hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
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
              <Menu
                className={`absolute w-6 h-6 transition-all duration-200 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
              />
              <X
                className={`absolute w-6 h-6 transition-all duration-200 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
              />
            </button>
          </div>

        </nav>
      </header>

      {/* Menú móvil de pantalla completa */}
        <div
          aria-hidden={!isMobileMenuOpen}
          className={`lg:hidden fixed inset-0 z-40 flex flex-col bg-[#06111F]/95 backdrop-blur-xl px-6 pt-24 pb-8 overflow-y-auto transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-softnex-blue/20 rounded-full blur-3xl pointer-events-none" />

          <p className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-4">Menú</p>

          <nav className="relative flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => {
              const Icon = link.icon
              const isActive = activeSection === link.href
              return (
                <div
                  key={link.href}
                  className={`transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${50 + i * 60}ms` : '0ms' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center gap-4 px-4 py-3.5 rounded-2xl border transition-colors ${
                      isActive
                        ? 'bg-softnex-blue/15 border-softnex-blue/40'
                        : 'bg-white/[0.03] border-white/10 active:border-softnex-blue/40'
                    }`}
                  >
                    <span className="w-5 text-[11px] font-black tabular-nums text-softnex-blue/70">0{i + 1}</span>
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                        isActive ? 'bg-softnex-blue border-softnex-blue' : 'bg-softnex-blue/15 border-softnex-blue/30'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-softnex-blue'}`} strokeWidth={2.2} />
                    </span>
                    <span className="flex-1 text-base font-bold text-white">{link.name}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-softnex-blue' : 'text-white/30'}`} />
                  </Link>
                </div>
              )
            })}
          </nav>

          <div
            className={`relative mt-auto pt-8 space-y-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: isMobileMenuOpen ? '400ms' : '0ms' }}
          >
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-softnex-blue text-white text-sm font-bold tracking-[0.12em] shadow-lg shadow-softnex-blue/30"
            >
              <Mail className="w-4 h-4" strokeWidth={2.4} />
              CONTACTAR
            </Link>
            <div className="flex flex-col items-center gap-4">
              <a href="mailto:hola@softnex.cl" className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-softnex-blue" />
                hola@softnex.cl
              </a>
              <div className="flex gap-2.5">
                {socials.map((so) => (
                  <a
                    key={so.label}
                    href={so.href}
                    aria-label={so.label}
                    className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/70" aria-hidden="true">
                      <path d={so.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
