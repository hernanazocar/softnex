'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-strong shadow-lg shadow-softnex-blue/5 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="text-2xl font-black tracking-tight">
              <span className="text-white group-hover:text-softnex-blue transition-colors">
                softnex
              </span>
              <span className="text-softnex-blue group-hover:text-softnex-cyan transition-colors">
                .
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '#servicios', label: 'SERVICIOS' },
              { href: '#nosotros', label: 'NOSOTROS' },
            ].map((link, index) => (
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
              className="px-6 py-2.5 bg-gradient-to-r from-softnex-blue to-softnex-cyan text-white rounded-full text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-softnex-blue/30"
            >
              CONTACTO
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-white"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-strong rounded-xl p-4 space-y-3">
            {[
              { href: '#servicios', label: 'SERVICIOS' },
              { href: '#nosotros', label: 'NOSOTROS' },
              { href: '#contacto', label: 'CONTACTO' },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white text-sm font-bold tracking-wide transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
