'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Search, LayoutTemplate, Code2, Rocket, Check, Clock } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Descubrimiento',
    desc: 'Entendemos tu negocio, objetivos y necesidades antes de escribir código.',
    duration: '1–2 semanas',
    deliverables: ['Levantamiento de requerimientos', 'Alcance y presupuesto definidos'],
  },
  {
    icon: LayoutTemplate,
    title: 'Diseño',
    desc: 'Creamos prototipos y validamos la experiencia con tu equipo.',
    duration: '1–2 semanas',
    deliverables: ['Prototipo navegable', 'Flujos validados'],
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    desc: 'Construimos la solución con las mejores prácticas y entregas incrementales.',
    duration: 'Sprints semanales',
    deliverables: ['Demos funcionales', 'Código testeado'],
  },
  {
    icon: Rocket,
    title: 'Entrega y Soporte',
    desc: 'Lanzamos a producción y acompañamos el crecimiento del producto.',
    duration: 'Continuo',
    deliverables: ['Lanzamiento a producción', 'Mejoras y mantenimiento'],
  },
]

export default function Process() {
  const reduce = useReducedMotion()

  return (
    <section id="proceso" className="relative py-16 md:py-28 overflow-hidden bg-softnex-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-softnex-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/30 shadow-[0_0_20px_rgba(0,168,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff] animate-pulse" />
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">CÓMO TRABAJAMOS</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Un proceso <span className="text-softnex-blue">claro y transparente</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            De la idea a producción en cuatro etapas, con entregables concretos en cada una.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Línea de tiempo (desktop) */}
          <div className="hidden lg:block absolute top-[46px] left-[12.5%] right-[12.5%] h-px bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-softnex-blue/40 via-softnex-blue to-softnex-blue/40"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
            />
            {!reduce && (
              <motion.span
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-softnex-blue shadow-[0_0_14px_4px_rgba(0,168,255,0.6)]"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative flex flex-col"
                >
                  {/* Nodo de la línea de tiempo */}
                  <div className="relative z-10 hidden sm:flex justify-center mb-5">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-softnex-blue/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-[92px] h-[92px] rounded-2xl bg-[#0b1426] border border-softnex-blue/30 flex items-center justify-center shadow-lg shadow-black/30 group-hover:border-softnex-blue group-hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-softnex-blue/15 flex items-center justify-center group-hover:bg-softnex-blue transition-colors duration-300">
                          <Icon className="w-7 h-7 text-softnex-blue group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                        </div>
                      </div>
                      <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-softnex-blue text-white text-[11px] font-black flex items-center justify-center shadow-[0_0_14px_rgba(0,168,255,0.6)] border-2 border-softnex-dark">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Tarjeta */}
                  <div className="relative flex-1 flex flex-col rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group-hover:border-softnex-blue/40 group-hover:shadow-[0_10px_40px_-10px_rgba(0,168,255,0.35)] transition-all duration-300">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-softnex-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="sm:hidden relative flex-shrink-0 w-10 h-10 rounded-xl bg-softnex-blue/15 border border-softnex-blue/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-softnex-blue" strokeWidth={1.8} />
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-softnex-blue text-white text-[9px] font-black flex items-center justify-center border-2 border-softnex-dark">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-softnex-blue/10 border border-softnex-blue/20 text-[10px] font-semibold text-softnex-blue whitespace-nowrap">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-5">{step.desc}</p>

                    <div className="mt-auto pt-4 border-t border-white/10 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Entregables</p>
                      {step.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-white/80">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-softnex-blue/20 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-softnex-blue" strokeWidth={3.5} />
                          </span>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
