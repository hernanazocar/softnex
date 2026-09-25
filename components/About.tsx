export default function About() {
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

  return (
    <section id="nosotros" className="relative py-20 overflow-hidden bg-gradient-to-br from-softnex-dark via-softnex-dark-light to-softnex-dark">
      {/* Dark background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-softnex-cyan/10 to-softnex-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 glass rounded-full">
                <p className="text-xs tracking-[0.25em] text-softnex-purple/80 font-semibold">
                  NOSOTROS
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Construimos el <span className="text-softnex-blue">futuro digital</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed">
                Equipo de desarrolladores, diseñadores y estrategas digitales apasionados
                por crear soluciones que transforman negocios.
              </p>

              <p className="text-base text-white/60 leading-relaxed">
                Con años de experiencia, combinamos las últimas tecnologías con metodologías
                ágiles para entregar proyectos que superan expectativas.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'Innovación constante', desc: 'Siempre a la vanguardia tecnológica' },
                  { title: 'Código de calidad', desc: 'Arquitecturas escalables y mantenibles' },
                  { title: 'Compromiso total', desc: 'Tu éxito es nuestro éxito' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-1.5 bg-softnex-blue rounded-full" />
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Tech stack */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-softnex-blue/20 to-softnex-cyan/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Stack <span className="text-softnex-blue">Tecnológico</span>
                  </h3>

                  <div className="grid grid-cols-3 gap-3">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="glass p-3 rounded-lg text-center hover:scale-105 transition-all duration-300"
                      >
                        <p className="text-white/80 font-medium text-sm">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
