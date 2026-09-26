'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { href: '#servicios', label: 'SERVICIOS' },
  { href: '#proceso', label: 'PROCESO' },
  { href: '#nosotros', label: 'NOSOTROS' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Barra superior con color exacto del fondo del logo (#06111F) */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-[#06111F] z-[60]" />

      <header
        className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 bg-[#06111F] ${
          isScrolled
            ? 'shadow-lg shadow-softnex-blue/5 border-b border-white/10'
            : 'border-b border-white/5'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <Image
                src="/logo.png"
                alt="Softnex"
                width={220}
                height={220}
                className="object-contain group-hover:scale-105 transition-transform duration-300 h-16 md:h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group relative text-white/70 hover:text-white transition-colors text-xs font-bold tracking-wider"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-softnex-blue group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              <Link
                href="#contacto"
                className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-softnex-blue to-softnex-cyan text-white rounded-full text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-softnex-blue/30"
              >
                CONTACTO
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden relative w-9 h-9 flex items-center justify-center text-white"
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
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
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
