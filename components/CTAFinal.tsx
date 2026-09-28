'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, Users, Headset } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-softnex-dark via-[#0a0e1a] to-softnex-dark">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-softnex-blue/15 via-softnex-purple/10 to-softnex-pink/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-softnex-blue animate-pulse" />
            <span className="text-sm font-bold text-softnex-cyan tracking-wider uppercase">
              Comencemos algo grande
            </span>
            <Sparkles className="w-5 h-5 text-softnex-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            ¿Tienes un proyecto{' '}
            <span className="bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple bg-clip-text text-transparent">
              en mente?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed"
          >
            Hablemos y transformemos tu idea en{' '}
            <span className="text-softnex-cyan font-semibold">realidad digital</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="group relative px-10 py-5 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="relative px-8 py-3 bg-gradient-to-r from-softnex-blue to-softnex-cyan rounded-full text-white font-bold text-lg tracking-wide flex items-center gap-3">
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>

            <a
              href="#servicios"
              className="text-white/70 hover:text-white font-semibold text-base transition-colors flex items-center gap-2"
            >
              Ver nuestros servicios
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Stats mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-8"
          >
            <div className="text-center">
              <Rocket className="w-5 h-5 text-softnex-blue mx-auto mb-2" strokeWidth={2} />
              <div className="text-3xl font-black text-softnex-blue mb-1">50+</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Proyectos</div>
            </div>
            <div className="text-center border-x border-white/10">
              <Users className="w-5 h-5 text-softnex-cyan mx-auto mb-2" strokeWidth={2} />
              <div className="text-3xl font-black text-softnex-cyan mb-1">30+</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Clientes</div>
            </div>
            <div className="text-center">
              <Headset className="w-5 h-5 text-softnex-purple mx-auto mb-2" strokeWidth={2} />
              <div className="text-3xl font-black text-softnex-purple mb-1">24/7</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Soporte</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
