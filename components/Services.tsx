'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Settings,
  BarChart3,
  Bot,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description:
      'Sitios y plataformas web de alto rendimiento, construidos con React y Next.js. De landing pages a aplicaciones complejas con lógica de negocio real.',
    features: ['React & Next.js', 'UI/UX de nivel producto', 'SEO técnico y Core Web Vitals'],
    gradient: 'from-softnex-blue to-softnex-cyan',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description:
      'Aplicaciones nativas y multiplataforma para iOS y Android, con foco en performance, offline-first y experiencias fluidas que retienen usuarios.',
    features: ['React Native', 'Flutter', 'Publicación en tiendas'],
    gradient: 'from-softnex-cyan to-softnex-purple',
  },
  {
    icon: Settings,
    title: 'Software a Medida',
    description:
      'Sistemas diseñados desde cero para los procesos reales de tu negocio, no plantillas genéricas. Arquitectura pensada para crecer con vos.',
    features: ['Arquitectura escalable', 'Código mantenible', 'Documentación técnica'],
    gradient: 'from-softnex-purple to-softnex-pink',
  },
  {
    icon: BarChart3,
    title: 'Sistemas ERP',
    description:
      'Plataformas de gestión integral que centralizan ventas, inventario, contabilidad y RRHH en un solo lugar, con datos en tiempo real.',
    features: ['Módulos integrados', 'Reportes en tiempo real', 'Cloud u on-premise'],
    gradient: 'from-softnex-pink to-softnex-orange',
  },
  {
    icon: Bot,
    title: 'Automatización',
    description:
      'Eliminamos tareas manuales repetitivas conectando tus herramientas entre sí, con flujos que ahorran horas de trabajo cada semana.',
    features: ['RPA', 'Workflows automáticos', 'Integración de APIs'],
    gradient: 'from-softnex-orange to-softnex-blue',
  },
  {
    icon: BrainCircuit,
    title: 'Agentes IA',
    description:
      'Asistentes y agentes autónomos impulsados por LLMs, entrenados con el contexto de tu empresa para atender, resolver y escalar.',
    features: ['LLMs avanzados', 'RAG & fine-tuning', 'Chatbots inteligentes'],
    gradient: 'from-softnex-blue to-softnex-purple',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Subtle background for light theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-softnex-blue/5 to-softnex-purple/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-softnex-blue/5 border border-softnex-blue/20 rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">
              SERVICIOS
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Tecnología que <span className="text-softnex-blue">impulsa</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seis frentes de trabajo, un solo equipo. Elegimos el stack correcto para cada
            problema, no al revés.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 overflow-hidden"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-softnex-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-softnex-purple to-softnex-pink text-white rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-softnex-purple/30"
          >
            Solicita una consultoría gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
