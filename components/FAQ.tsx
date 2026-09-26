'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

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
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden bg-softnex-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-softnex-blue/10 to-softnex-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-4 px-6 py-2 glass rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">
              PREGUNTAS FRECUENTES
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Dudas <span className="text-softnex-blue">resueltas</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Si tu pregunta no está acá, escribinos directamente.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-card rounded-xl overflow-hidden border border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3 text-white font-semibold text-sm md:text-base">
                    <HelpCircle className="w-[18px] h-[18px] text-softnex-blue flex-shrink-0" strokeWidth={2} />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-softnex-blue' : ''
                    }`}
                  />
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
                      <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
