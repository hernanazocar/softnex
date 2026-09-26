'use client'

import { motion } from 'framer-motion'
import { Gauge, Users, Code, Headset, Quote } from 'lucide-react'

const differentiators = [
  {
    icon: Gauge,
    title: 'Entregas rápidas y medibles',
    desc: 'Sprints cortos con demos reales cada semana. Ves progreso tangible desde el día uno, no promesas.',
  },
  {
    icon: Code,
    title: 'Ingeniería, no solo diseño',
    desc: 'Equipo con experiencia real en producción: performance, seguridad y escalabilidad desde el primer commit.',
  },
  {
    icon: Users,
    title: 'Trato directo, sin intermediarios',
    desc: 'Hablás directo con quienes construyen tu producto. Sin capas comerciales que distorsionan el mensaje.',
  },
  {
    icon: Headset,
    title: 'Soporte post-lanzamiento real',
    desc: 'El proyecto no termina cuando se despliega. Seguimos disponibles para mantenimiento y mejoras.',
  },
]

const testimonials = [
  {
    quote:
      'Necesitábamos digitalizar procesos que hacíamos a mano en planillas. El equipo entendió el negocio antes de escribir una línea de código, y el resultado se nota en el día a día.',
    name: 'Gerencia de Operaciones',
    role: 'Empresa de logística (referencia interna)',
  },
  {
    quote:
      'Lo que más valoro es la comunicación: siempre supimos en qué etapa estaba el proyecto y qué faltaba. Cero sorpresas al final.',
    name: 'Dirección Comercial',
    role: 'Empresa de retail (referencia interna)',
  },
  {
    quote:
      'Pasamos de un sistema legado lento a una plataforma moderna sin detener la operación ni un solo día.',
    name: 'Gerencia General',
    role: 'Empresa de servicios (referencia interna)',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-softnex-cyan/5 to-softnex-blue/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Why us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-softnex-purple/5 border border-softnex-purple/20 rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-purple font-bold">
              POR QUÉ ELEGIRNOS
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            No somos una <span className="text-softnex-purple">fábrica de templates</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada decisión técnica está atada a un objetivo de negocio concreto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-softnex-purple/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-softnex-purple" strokeWidth={2} />
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-softnex-blue/5 border border-softnex-blue/20 rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">
              TESTIMONIOS
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Lo que dicen quienes trabajaron con nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-8 h-8 text-softnex-blue/20 mb-3" strokeWidth={2} />
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
