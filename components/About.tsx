'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react'

const techStack = [
  { name: 'React', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', gradient: 'from-slate-200 to-slate-400' },
  { name: 'Node.js', gradient: 'from-green-400 to-emerald-600' },
  { name: 'TypeScript', gradient: 'from-blue-400 to-blue-600' },
  { name: 'Python', gradient: 'from-yellow-400 to-blue-500' },
  { name: 'Flutter', gradient: 'from-blue-400 to-cyan-400' },
  { name: 'PostgreSQL', gradient: 'from-blue-600 to-indigo-600' },
  { name: 'AWS', gradient: 'from-orange-400 to-orange-600' },
  { name: 'Docker', gradient: 'from-blue-500 to-sky-600' },
]

const pillars = [
  {
    icon: Sparkles,
    title: 'Innovación constante',
    desc: 'Adoptamos tecnología nueva solo cuando resuelve un problema real, no por moda.',
  },
  {
    icon: ShieldCheck,
    title: 'Código de calidad',
    desc: 'Arquitecturas escalables, testeadas y documentadas: pensadas para durar.',
  },
  {
    icon: HeartHandshake,
    title: 'Compromiso total',
    desc: 'Acompañamos cada proyecto de punta a punta, incluso después del lanzamiento.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-softnex-dark via-softnex-dark-light to-softnex-dark">
      {/* Dark background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-softnex-cyan/10 to-softnex-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-6 py-2 glass rounded-full">
                <p className="text-xs tracking-[0.25em] text-softnex-purple/80 font-semibold">
                  NOSOTROS
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Construimos el <span className="text-softnex-blue">futuro digital</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed">
                Somos un equipo de desarrolladores, diseñadores y estrategas digitales
                especializado en llevar ideas de negocio a software real, medible y en
                producción.
              </p>

              <p className="text-base text-white/60 leading-relaxed">
                Trabajamos con metodologías ágiles y entregas incrementales: vas a ver
                avances desde la primera semana, no recién al final del proyecto.
              </p>

              <div className="space-y-4 pt-2">
                {pillars.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-softnex-blue/10 border border-softnex-blue/20 flex items-center justify-center">
                        <Icon className="w-[18px] h-[18px] text-softnex-blue" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right - Tech stack */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-softnex-blue/20 to-softnex-cyan/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Stack <span className="text-softnex-blue">Tecnológico</span>
                  </h3>

                  <div className="grid grid-cols-3 gap-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="glass p-3 rounded-lg text-center hover:scale-105 hover:border-softnex-blue/30 transition-all duration-300"
                      >
                        <p className="text-white/80 font-medium text-sm">{tech.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
