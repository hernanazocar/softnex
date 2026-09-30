'use client'

import { motion } from 'framer-motion'
import { Gauge, Users, Code, Headset, Check, X, ArrowRight } from 'lucide-react'

const differentiators = [
  {
    icon: Gauge,
    title: 'Entregas rápidas y medibles',
    desc: 'Sprints cortos con demos reales cada semana. Progreso tangible desde el día uno, no promesas.',
  },
  {
    icon: Code,
    title: 'Ingeniería, no solo diseño',
    desc: 'Experiencia real en producción: rendimiento, seguridad y escalabilidad desde el primer commit.',
  },
  {
    icon: Users,
    title: 'Trato directo',
    desc: 'Hablas con quienes construyen tu producto, sin capas comerciales que distorsionan el mensaje.',
  },
  {
    icon: Headset,
    title: 'Soporte post-lanzamiento',
    desc: 'El proyecto no termina en el deploy. Seguimos contigo con mantenimiento y mejoras.',
  },
]

const comparison = [
  { them: 'Plantillas genéricas', us: 'Software a medida de tu negocio' },
  { them: 'Ves el resultado al final', us: 'Demos funcionales cada semana' },
  { them: 'Intermediarios comerciales', us: 'Trato directo con el equipo' },
  { them: 'Soporte limitado o con costo extra', us: 'Acompañamiento post-lanzamiento' },
  { them: 'Código cerrado', us: 'El código es 100% tuyo' },
]

export default function WhyUs() {
  return (
    <section id="ventajas" className="relative py-16 md:py-28 overflow-hidden bg-softnex-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-softnex-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-softnex-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/30 shadow-[0_0_20px_rgba(0,168,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff] animate-pulse" />
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">POR QUÉ ELEGIRNOS</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            No somos una <span className="text-softnex-blue">fábrica de templates</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Cada decisión técnica está atada a un objetivo de negocio concreto.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Comparación */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden flex flex-col lg:order-2"
          >
            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="px-3 sm:px-5 md:px-6 py-3.5 sm:py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Agencia tradicional</p>
              </div>
              <div className="px-3 sm:px-5 md:px-6 py-3.5 sm:py-4 bg-softnex-blue/10 border-l border-softnex-blue/30 flex items-center gap-2">
                <svg viewBox="0 0 100 100" className="w-3.5 h-3.5" aria-hidden="true">
                  <polygon points="6,4 30,4 94,96 70,96" fill="#00a8ff" />
                  <polygon points="70,4 94,4 30,96 6,96" fill="#33c3ff" />
                </svg>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-softnex-blue">Con Softnex</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              {comparison.map((row, i) => (
                <motion.div
                  key={row.us}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                  className="flex-1 grid grid-cols-2 border-b border-white/5"
                >
                  <div className="px-3 sm:px-5 md:px-6 py-3.5 sm:py-4 flex items-center gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                      <X className="w-3 h-3 text-white/30" strokeWidth={3} />
                    </span>
                    <span className="text-xs sm:text-sm text-white/40 line-through decoration-white/20">{row.them}</span>
                  </div>
                  <div className="px-3 sm:px-5 md:px-6 py-3.5 sm:py-4 flex items-center gap-2.5 bg-softnex-blue/[0.06] border-l border-softnex-blue/30">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-softnex-blue flex items-center justify-center shadow-[0_0_10px_rgba(0,168,255,0.5)]">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{row.us}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cierre con CTA */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-5 md:px-6 py-5 bg-gradient-to-r from-softnex-blue/15 via-softnex-blue/5 to-transparent">
              <div>
                <p className="text-sm font-bold text-white">¿Listo para trabajar distinto?</p>
                <p className="text-xs text-white/50">Cuéntanos tu idea y te proponemos un plan concreto.</p>
              </div>
              <a
                href="#contacto"
                className="group flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-softnex-blue text-white text-xs font-bold shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Hablemos
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Diferenciadores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-1">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-softnex-blue/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,168,255,0.35)] transition-all duration-300"
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-softnex-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-softnex-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="absolute top-5 right-5 text-3xl font-black text-white/[0.06] group-hover:text-softnex-blue/20 transition-colors duration-300">
                    0{index + 1}
                  </span>

                  <div className="relative w-11 h-11 rounded-xl bg-softnex-blue/15 border border-softnex-blue/30 flex items-center justify-center mb-5 group-hover:bg-softnex-blue group-hover:shadow-[0_0_20px_rgba(0,168,255,0.5)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-softnex-blue group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h3 className="relative text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="relative text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
