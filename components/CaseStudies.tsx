'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import FloatingBlob from './graphics/FloatingBlob'
import BarChartIllustration from './graphics/BarChartIllustration'

const cases = [
  {
    title: '[PLACEHOLDER - Sistema de Gestión]',
    description: '[PLACEHOLDER] Plataforma ERP completa para control de inventario, ventas y reportes en tiempo real. Migración desde Excel con integración de API de facturación.',
    metric: '300% aumento en velocidad de procesos',
    tech: 'React, Node.js, PostgreSQL, AWS',
    gradient: 'from-softnex-blue to-softnex-cyan',
    icon: TrendingUp,
    chart: [30, 45, 55, 70, 95],
  },
  {
    title: '[PLACEHOLDER - App Móvil]',
    description: '[PLACEHOLDER] Aplicación cross-platform para gestión de servicios a domicilio con geolocalización en tiempo real y sistema de pagos integrado.',
    metric: '10,000+ usuarios activos mensuales',
    tech: 'React Native, Firebase, Stripe',
    gradient: 'from-softnex-purple to-softnex-pink',
    icon: Users,
    chart: [50, 40, 65, 60, 85],
  },
  {
    title: '[PLACEHOLDER - E-commerce]',
    description: '[PLACEHOLDER] Marketplace B2B con catálogo dinámico, checkout optimizado y panel de administración con analytics en tiempo real.',
    metric: '250% crecimiento en conversiones',
    tech: 'Next.js, PostgreSQL, Vercel',
    gradient: 'from-softnex-cyan to-softnex-blue',
    icon: Zap,
    chart: [25, 50, 45, 80, 90],
  },
]

export default function CaseStudies() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <FloatingBlob
          className="bottom-0 right-1/4"
          color="from-softnex-purple/6 to-softnex-blue/3"
          size={500}
          duration={22}
        />
        <FloatingBlob
          className="top-0 left-1/4"
          color="from-softnex-cyan/6 to-transparent"
          size={350}
          duration={16}
          delay={3}
          reverse
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-softnex-purple/5 border border-softnex-purple/20 rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-purple font-bold">
              CASOS DE ÉXITO
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Proyectos que <span className="text-softnex-blue">transforman</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones reales que generan resultados medibles
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((case_, index) => {
            const Icon = case_.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden relative"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${case_.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Gráfico de resultados ilustrativo, reemplaza el placeholder de imagen */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 p-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${case_.gradient} opacity-[0.04] group-hover:opacity-10 transition-opacity`} />
                  <div className="absolute top-2 right-2 z-10">
                    <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200">
                      <p className="text-xs font-bold bg-gradient-to-r from-softnex-blue to-softnex-purple bg-clip-text text-transparent">
                        PROYECTO
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-gray-400" strokeWidth={2} />
                  </div>
                  <div className="relative z-0 h-full px-1 pt-6 pb-1">
                    <BarChartIllustration
                      values={case_.chart}
                      colorFrom={`${case_.gradient.split(' ')[0]}/30`}
                      colorTo={case_.gradient.split(' ')[1]}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-softnex-blue transition-colors">
                  {case_.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {case_.description}
                </p>

                {/* Metric */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${case_.gradient} bg-opacity-10 rounded-full mb-4`}>
                  <p className="text-sm font-bold bg-gradient-to-r from-softnex-blue to-softnex-purple bg-clip-text text-transparent">
                    {case_.metric}
                  </p>
                </div>

                {/* Tech stack */}
                <p className="text-xs text-gray-500 mb-4">
                  <span className="font-semibold">Tech:</span> {case_.tech}
                </p>

                {/* CTA */}
                <div className="flex items-center text-softnex-blue font-semibold text-sm group-hover:gap-2 transition-all">
                  Ver más
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            ¿Quieres conocer más detalles de estos proyectos?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-softnex-purple to-softnex-pink text-white rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicita casos de estudio completos
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
