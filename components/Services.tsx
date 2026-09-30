'use client'

import { motion } from 'framer-motion'
import RevealWords from './fx/RevealWords'
import {
  Globe,
  Smartphone,
  Boxes,
  Workflow,
  Bot,
  LayoutDashboard,
  ArrowRight,
  MessagesSquare,
} from 'lucide-react'

const services = [
  {
    icon: LayoutDashboard,
    title: 'Software SaaS',
    anim: 'icon-pop',
    description:
      'Plataformas por suscripción listas para vender: usuarios, planes, pagos y panel de administración.',
    features: ['Suscripciones y pagos', 'Multiusuario', 'Panel de administración'],
  },
  {
    icon: Boxes,
    title: 'Sistemas a Medida y ERP',
    anim: 'icon-bounce',
    description:
      'Software para los procesos reales de tu negocio: desde sistemas a medida hasta ERP que integran ventas, inventario, contabilidad y RRHH.',
    features: ['Arquitectura escalable', 'Módulos integrados', 'Reportes en tiempo real'],
  },
  {
    icon: Workflow,
    title: 'Automatización e Integraciones',
    anim: 'icon-spin',
    description:
      'Eliminamos tareas manuales y conectamos tus sistemas, pasarelas de pago y herramientas para que todo trabaje en conjunto.',
    features: ['Workflows automáticos', 'APIs y pasarelas de pago', 'RPA'],
  },
  {
    icon: Bot,
    title: 'Agentes IA',
    anim: 'icon-wiggle',
    description:
      'Asistentes autónomos impulsados por LLMs, entrenados con el contexto de tu empresa para atender y resolver.',
    features: ['LLMs avanzados', 'RAG & fine-tuning', 'Chatbots inteligentes'],
  },
  {
    icon: Globe,
    title: 'Desarrollo Web',
    anim: 'icon-spin',
    description:
      'Sitios y plataformas web de alto rendimiento con React y Next.js, desde landing pages hasta aplicaciones complejas.',
    features: ['React & Next.js', 'UI/UX de nivel producto', 'SEO técnico'],
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    anim: 'icon-wiggle',
    description:
      'Aplicaciones para iOS y Android con foco en rendimiento y experiencias fluidas que retienen usuarios.',
    features: ['React Native', 'Flutter', 'Publicación en tiendas'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-softnex-blue/10 rounded-full blur-[120px] drift" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/25">
            <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff] animate-pulse" />
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">
              SERVICIOS
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            <RevealWords text="Tecnología que" />{' '}<RevealWords text="impulsa" className="text-softnex-blue" delay={0.16} />
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Seis soluciones conectadas, un solo equipo. Elegimos la tecnología correcta para
            cada problema, no al revés.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 max-w-6xl mx-auto">
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
                className="spotlight group relative flex flex-col bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,168,255,0.35)] hover:border-softnex-blue/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-softnex-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-softnex-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="absolute top-5 right-5 text-3xl font-black text-gray-100 group-hover:text-softnex-blue/15 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl mb-3 sm:mb-5 bg-softnex-blue/10 border border-softnex-blue/20 group-hover:bg-softnex-blue group-hover:shadow-[0_0_20px_rgba(0,168,255,0.45)] transition-all duration-300">
                  <Icon className={`w-6 h-6 text-softnex-blue group-hover:text-white transition-colors duration-300 ${service.anim}`} strokeWidth={1.8} />
                </div>

                <h3 className="relative text-lg font-bold text-gray-900 mb-2">{service.title}</h3>

                <p className="relative text-gray-500 text-sm leading-relaxed sm:mb-5">{service.description}</p>

                <div className="relative mt-auto hidden sm:flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[11px] font-medium text-gray-600 group-hover:bg-softnex-blue/5 group-hover:border-softnex-blue/20 group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
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
          className="max-w-7xl mx-auto mt-10"
        >
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 rounded-2xl bg-softnex-dark px-6 md:px-8 py-6 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-60 h-60 bg-softnex-blue/25 rounded-full blur-3xl" />
            <div className="relative flex items-center gap-4">
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-softnex-blue/20 border border-softnex-blue/40 items-center justify-center">
                <MessagesSquare className="w-6 h-6 text-softnex-blue" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-white">¿No sabes qué solución necesitas?</p>
                <p className="text-sm text-white/60">Te asesoramos sin costo y te recomendamos el camino correcto.</p>
              </div>
            </div>
            <a
              href="#contacto"
              className="relative group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-softnex-blue text-white rounded-full font-bold text-sm shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicita una consultoría gratuita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
