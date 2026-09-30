'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, HeartHandshake, CalendarCheck, KeyRound, MessagesSquare, BadgeCheck } from 'lucide-react'

const stackGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', logo: 'react' },
      { name: 'Next.js', logo: 'nextjs' },
      { name: 'TypeScript', logo: 'typescript' },
    ],
  },
  {
    category: 'Backend & Datos',
    items: [
      { name: 'Node.js', logo: 'nodejs' },
      { name: 'Python', logo: 'python' },
      { name: 'PostgreSQL', logo: 'postgresql' },
    ],
  },
  {
    category: 'Mobile & Cloud',
    items: [
      { name: 'Flutter', logo: 'flutter' },
      { name: 'AWS', logo: 'amazonwebservices' },
      { name: 'Docker', logo: 'docker' },
    ],
  },
]

const extraTools = [
  { name: 'Vercel', logo: 'vercel' },
  { name: 'Supabase', logo: 'supabase' },
  { name: 'Figma', logo: 'figma' },
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

const commitments = [
  { icon: CalendarCheck, label: 'Demos semanales' },
  { icon: KeyRound, label: 'El código es tuyo' },
  { icon: MessagesSquare, label: 'Comunicación directa' },
]

export default function About() {
  return (
    <section id="nosotros" className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-softnex-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/25">
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">NOSOTROS</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Construimos el <span className="text-softnex-blue">futuro digital</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Un equipo de desarrolladores, diseñadores y estrategas que lleva ideas de negocio a
            software real, medible y en producción.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {commitments.map((c) => {
              const Icon = c.icon
              return (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-softnex-blue/20 shadow-sm text-xs font-semibold text-gray-800"
                >
                  <Icon className="w-3.5 h-3.5 text-softnex-blue" strokeWidth={2.2} />
                  {c.label}
                </span>
              )
            })}
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Pilares */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {pillars.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group relative flex-1 flex items-center gap-4 rounded-2xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,168,255,0.35)] hover:border-softnex-blue/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-softnex-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 right-4 text-3xl font-black text-gray-100 group-hover:text-softnex-blue/15 transition-colors duration-300">
                    0{index + 1}
                  </span>

                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-softnex-blue/10 border border-softnex-blue/20 flex items-center justify-center group-hover:bg-softnex-blue group-hover:shadow-[0_0_20px_rgba(0,168,255,0.45)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-softnex-blue group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <div className="relative pr-8">
                    <h3 className="text-gray-900 font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stack tecnológico */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative h-full rounded-2xl bg-white border border-gray-200 shadow-sm p-5 sm:p-6 md:p-7 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-softnex-blue/10 rounded-full blur-3xl" />

              <div className="relative flex flex-wrap items-start justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-black text-gray-900">
                    Stack <span className="text-softnex-blue">Tecnológico</span>
                  </h3>
                  <p className="text-sm text-gray-500">Herramientas modernas, elegidas según cada proyecto.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-softnex-blue text-white text-[11px] font-bold shadow-lg shadow-softnex-blue/30">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Probado en producción
                </span>
              </div>

              <div className="relative space-y-4">
                {stackGroups.map((group, gi) => (
                  <div key={group.category}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-softnex-blue mb-2">
                      {group.category}
                    </p>
                    <div className="grid grid-cols-3 gap-2.5">
                      {group.items.map((tech, ti) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: (gi * 3 + ti) * 0.05 }}
                          className="group flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-softnex-blue/40 hover:shadow-md hover:shadow-softnex-blue/10 hover:-translate-y-0.5 transition-all duration-300"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/tech/${tech.logo}.svg`}
                            alt=""
                            className="w-6 h-6 flex-shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className="text-[11px] sm:text-sm font-semibold text-gray-700 sm:truncate">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 mr-1">También:</span>
                {extraTools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/tech/${tool.logo}.svg`} alt="" className="w-3.5 h-3.5 object-contain" loading="lazy" />
                    {tool.name}
                  </span>
                ))}
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-softnex-blue/10 text-xs font-semibold text-softnex-blue">
                  OpenAI · Claude
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
