'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import FloatingBlob from './graphics/FloatingBlob'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Descubrimiento',
    desc: 'Entendemos tu negocio, objetivos y necesidades',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Diseño',
    desc: 'Creamos prototipos y validamos la experiencia',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Desarrollo',
    desc: 'Construimos la solución con las mejores prácticas',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Entrega y Soporte',
    desc: 'Lanzamos y acompañamos el crecimiento',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 md:py-28 overflow-hidden bg-softnex-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <FloatingBlob
          className="top-0 right-1/4"
          color="from-softnex-purple/10 to-softnex-blue/5"
          size={450}
          duration={19}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 glass rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-cyan font-bold">
              CÓMO TRABAJAMOS
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Un proceso <span className="text-softnex-cyan">claro y transparente</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Un proceso claro y colaborativo en cada etapa
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-softnex-blue/30 to-transparent" />
          {/* Pulso animado que recorre el conector, refuerza la idea de flujo/proceso */}
          <motion.div
            className="hidden lg:block absolute top-[54px] w-2.5 h-2.5 rounded-full bg-softnex-cyan shadow-[0_0_12px_rgba(0,212,255,0.8)]"
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative mb-5">
                    <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue to-softnex-cyan rounded-2xl opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-2xl glass-card border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-softnex-blue" strokeWidth={2} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-softnex-blue/20 border border-softnex-blue/40 text-[10px] font-black text-softnex-blue flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
