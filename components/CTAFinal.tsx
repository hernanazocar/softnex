'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Users, Headset } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section className="relative pt-16 md:pt-24 pb-2 md:pb-4 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-softnex-blue/10 to-softnex-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge azul oscuro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-softnex-dark via-softnex-dark-light to-softnex-dark px-6 py-8 md:px-10 md:py-10 shadow-2xl max-w-3xl mx-auto"
          >
            {/* Efectos internos del badge */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/30 shadow-[0_0_20px_rgba(0,168,255,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff] animate-pulse" />
                <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold uppercase">Comencemos algo grande</p>
              </div>

              {/* Main heading */}
              <h2 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
                ¿Tienes un proyecto{' '}
                <span className="text-softnex-blue">
                  en mente?
                </span>
              </h2>

              <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
                Hablemos y transformemos tu idea en{' '}
                <span className="text-softnex-blue font-semibold">realidad digital</span>
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a
                  href="#contacto"
                  className="group relative px-6 py-3 overflow-hidden rounded-full bg-softnex-blue text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3"
                >
                  <span>Hablemos de tu proyecto</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </a>

                <a
                  href="#servicios"
                  className="text-white/70 hover:text-white font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  Ver nuestros servicios
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Stats mini */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-5 max-w-md mx-auto">
                <div className="text-center">
                  <Rocket className="w-4 h-4 text-softnex-blue mx-auto mb-2" strokeWidth={2} />
                  <div className="text-xl font-black text-softnex-blue">50+</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider">Proyectos</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <Users className="w-4 h-4 text-softnex-blue mx-auto mb-2" strokeWidth={2} />
                  <div className="text-xl font-black text-softnex-blue">30+</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider">Clientes</div>
                </div>
                <div className="text-center">
                  <Headset className="w-4 h-4 text-softnex-blue mx-auto mb-2" strokeWidth={2} />
                  <div className="text-xl font-black text-softnex-blue">24/7</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider">Soporte</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
