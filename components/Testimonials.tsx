'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Quote, Workflow, Layers, RefreshCw } from 'lucide-react'

const ROTATE_MS = 7000

const testimonials = [
  {
    quote:
      'Necesitábamos digitalizar procesos que hacíamos a mano en planillas. El equipo entendió el negocio antes de escribir una línea de código, y el resultado se nota en el día a día.',
    name: 'Gerencia de Operaciones',
    role: 'Empresa de logística (referencia interna)',
    initials: 'GO',
    tag: 'Automatización',
    tagIcon: Workflow,
  },
  {
    quote:
      'Lo que más valoro es la comunicación: siempre supimos en qué etapa estaba el proyecto y qué faltaba. Cero sorpresas al final.',
    name: 'Dirección Comercial',
    role: 'Empresa de retail (referencia interna)',
    initials: 'DC',
    tag: 'Sistema a medida',
    tagIcon: Layers,
  },
  {
    quote:
      'Pasamos de un sistema legado lento a una plataforma moderna sin detener la operación ni un solo día.',
    name: 'Gerencia General',
    role: 'Empresa de servicios (referencia interna)',
    initials: 'GG',
    tag: 'Migración de sistema',
    tagIcon: RefreshCw,
  },
]

export default function Testimonials() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const id = setTimeout(() => setActive((a) => (a + 1) % testimonials.length), ROTATE_MS)
    return () => clearTimeout(id)
  }, [active, paused, reduce])

  const t = testimonials[active]
  const TagIcon = t.tagIcon

  return (
    <section id="testimonios" className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-softnex-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/25">
            <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff] animate-pulse" />
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">TESTIMONIOS</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-softnex-blue">clientes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reales de empresas que confiaron en nosotros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 rounded-3xl bg-white border border-gray-200 shadow-[0_30px_80px_-30px_rgba(0,168,255,0.35)] overflow-hidden"
        >
          {/* Cita destacada */}
          <div className="relative lg:col-span-3 p-6 sm:p-8 md:p-12 flex flex-col min-h-[300px] sm:min-h-[340px]">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-softnex-blue via-softnex-blue/40 to-transparent" />
            <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-20 sm:h-20 text-softnex-blue/10" strokeWidth={1.2} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative flex-1 flex flex-col"
              >
                <span className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-softnex-blue/10 border border-softnex-blue/20 text-xs font-semibold text-softnex-blue mb-6">
                  <TagIcon className="w-3.5 h-3.5" strokeWidth={2.4} />
                  {t.tag}
                </span>

                <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-snug tracking-tight mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-auto flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-softnex-blue to-[#0060b0] flex items-center justify-center text-white text-sm font-black shadow-lg shadow-softnex-blue/30">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector de testimonios */}
          <div className="relative lg:col-span-2 bg-softnex-dark p-4 md:p-5 flex flex-col gap-2 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-softnex-blue/25 rounded-full blur-3xl" />
            <p className="relative px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Casos de clientes
            </p>
            {testimonials.map((item, i) => {
              const isActive = i === active
              const Icon = item.tagIcon
              return (
                <button
                  key={item.name}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`relative text-left rounded-xl p-4 border overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'bg-softnex-blue/15 border-softnex-blue/50 shadow-[0_0_24px_rgba(0,168,255,0.25)]'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-colors duration-300 ${
                        isActive ? 'bg-softnex-blue text-white' : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-white/70'}`}>{item.name}</p>
                      <p className="flex items-center gap-1 text-xs text-softnex-blue">
                        <Icon className="w-3 h-3" strokeWidth={2.4} />
                        {item.tag}
                      </p>
                    </div>
                  </div>
                  {isActive && !reduce && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                      <motion.div
                        key={`${active}-${paused}`}
                        className="h-full bg-softnex-blue"
                        initial={{ width: '0%' }}
                        animate={{ width: paused ? '0%' : '100%' }}
                        transition={{ duration: paused ? 0 : ROTATE_MS / 1000, ease: 'linear' }}
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
