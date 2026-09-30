'use client'

import { useState } from 'react'
import RevealWords from './fx/RevealWords'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessagesSquare, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto tiempo toma desarrollar un proyecto?',
    a: 'Depende del alcance: una landing o MVP simple puede estar lista en 3-4 semanas, mientras que un sistema ERP o una app móvil completa suele tomar entre 2 y 4 meses. En la etapa de descubrimiento te damos un cronograma concreto antes de arrancar.',
  },
  {
    q: '¿Trabajan con empresas que ya tienen un sistema y quieren migrarlo?',
    a: 'Sí, es uno de nuestros casos más frecuentes. Analizamos el sistema actual, planificamos una migración por etapas y evitamos interrumpir la operación diaria del negocio.',
  },
  {
    q: '¿Qué pasa después de que el proyecto se lanza?',
    a: 'Ofrecemos planes de soporte y mantenimiento continuo: monitoreo, corrección de errores, y evolución del producto con nuevas funcionalidades a medida que tu negocio crece.',
  },
  {
    q: '¿Cómo se maneja el presupuesto y los pagos?',
    a: 'Definimos el alcance y el presupuesto en la etapa de descubrimiento, antes de firmar nada. Trabajamos con pagos por hitos, alineados a las entregas del proyecto, para que siempre sepas en qué se está invirtiendo.',
  },
  {
    q: '¿Pueden integrar IA a un sistema que ya tenemos?',
    a: 'Sí. Podemos integrar agentes, automatizaciones o funcionalidades basadas en LLMs sobre tu plataforma existente, sin necesidad de reconstruir todo desde cero.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const helpCard = (
    <div className="relative text-left rounded-2xl border border-softnex-blue/30 bg-gradient-to-br from-softnex-blue/15 via-softnex-blue/5 to-transparent p-6 overflow-hidden max-w-md mx-auto lg:mx-0">
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-softnex-blue/20 rounded-full blur-3xl" />
      <div className="relative flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-softnex-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,168,255,0.5)]">
          <MessagesSquare className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div>
          <p className="text-white font-bold mb-1">¿No encontraste tu respuesta?</p>
          <p className="text-sm text-white/60 mb-4">Escríbenos y te respondemos directamente.</p>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-softnex-blue text-white text-xs font-bold shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Hacer una pregunta
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="faq" className="relative py-16 md:py-28 overflow-hidden bg-softnex-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-softnex-blue/10 rounded-full blur-[120px] drift" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/30 shadow-[0_0_20px_rgba(0,168,255,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff]" />
                <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">PREGUNTAS FRECUENTES</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                <RevealWords text="Dudas" />{' '}<RevealWords text="resueltas" className="text-softnex-blue" delay={0.08} />
              </h2>
              <p className="text-base md:text-lg text-white/60 lg:mb-8 max-w-md mx-auto lg:mx-0">
                Lo que más nos preguntan antes de empezar un proyecto.
              </p>

              <div className="hidden lg:block">{helpCard}</div>
            </div>
          </motion.div>

          {/* Acordeón */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-softnex-blue/50 bg-softnex-blue/[0.07] shadow-[0_10px_40px_-10px_rgba(0,168,255,0.35)]'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-softnex-blue transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 px-5 md:px-6 py-5 text-left"
                  >
                    <span
                      className={`flex-shrink-0 text-sm font-black tabular-nums transition-colors duration-300 ${
                        isOpen ? 'text-softnex-blue' : 'text-white/30'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="flex-1 text-white font-semibold text-sm md:text-base">{item.q}</span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'bg-softnex-blue border-softnex-blue rotate-45 shadow-[0_0_14px_rgba(0,168,255,0.5)]'
                          : 'border-white/15 bg-white/5'
                      }`}
                    >
                      <Plus className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-white/60'}`} strokeWidth={2.5} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pl-[3.25rem] md:pl-14 pr-6 md:pr-16 pb-5 text-white/65 text-sm leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* En móvil la tarjeta va después de las preguntas */}
          <div className="lg:hidden">{helpCard}</div>
        </div>
      </div>
    </section>
  )
}
