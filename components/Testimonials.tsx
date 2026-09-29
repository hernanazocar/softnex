'use client'

import { motion } from 'framer-motion'
import { Quote, Workflow, MessagesSquare, RefreshCw } from 'lucide-react'

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
    tagIcon: MessagesSquare,
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
  return (
    <section id="testimonios" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-softnex-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-4 px-6 py-2 glass rounded-full border border-gray-200">
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">TESTIMONIOS</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-softnex-blue">clientes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reales de empresas que confiaron en nosotros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto items-stretch">
          {testimonials.map((t, index) => {
            const featured = index === 1
            const TagIcon = t.tagIcon
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-2xl p-7 border overflow-hidden hover:-translate-y-1.5 transition-all duration-300 ${
                  featured
                    ? 'bg-softnex-dark border-softnex-blue/30 shadow-[0_20px_50px_-15px_rgba(0,168,255,0.45)] md:-translate-y-3 md:hover:-translate-y-4'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,168,255,0.35)] hover:border-softnex-blue/40'
                }`}
              >
                {featured && (
                  <>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-softnex-blue/25 rounded-full blur-3xl" />
                  </>
                )}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-softnex-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Quote
                  className={`absolute top-6 right-6 w-12 h-12 ${featured ? 'text-softnex-blue/25' : 'text-softnex-blue/10'}`}
                  strokeWidth={1.5}
                />

                <span
                  className={`relative self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold mb-5 ${
                    featured
                      ? 'bg-softnex-blue/20 border border-softnex-blue/40 text-softnex-blue'
                      : 'bg-softnex-blue/10 border border-softnex-blue/20 text-softnex-blue'
                  }`}
                >
                  <TagIcon className="w-3 h-3" strokeWidth={2.5} />
                  {t.tag}
                </span>

                <p className={`relative text-[15px] leading-relaxed mb-6 ${featured ? 'text-white/85' : 'text-gray-700'}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className={`relative mt-auto pt-5 border-t flex items-center gap-3 ${featured ? 'border-white/10' : 'border-gray-100'}`}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-softnex-blue to-[#0060b0] flex items-center justify-center text-white text-sm font-black shadow-lg shadow-softnex-blue/30">
                    {t.initials}
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${featured ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                    <p className={`text-xs ${featured ? 'text-white/50' : 'text-gray-500'}`}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
