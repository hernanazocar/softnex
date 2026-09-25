export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados. Desde landing pages hasta aplicaciones web complejas.',
      features: ['React & Next.js', 'UI/UX Premium', 'SEO Avanzado'],
      gradient: 'from-softnex-blue to-softnex-cyan',
    },
    {
      icon: '📱',
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y multiplataforma para iOS y Android con experiencias fluidas.',
      features: ['React Native', 'Flutter', 'Apps híbridas'],
      gradient: 'from-softnex-cyan to-softnex-purple',
    },
    {
      icon: '⚙️',
      title: 'Software a Medida',
      description: 'Soluciones personalizadas diseñadas específicamente para las necesidades únicas de tu negocio.',
      features: ['Arquitectura escalable', 'Código limpio', 'Documentación completa'],
      gradient: 'from-softnex-purple to-softnex-pink',
    },
    {
      icon: '📊',
      title: 'Sistemas ERP',
      description: 'Sistemas empresariales para gestión integral: ventas, inventarios, contabilidad y RRHH.',
      features: ['Módulos integrados', 'Reportes en tiempo real', 'Cloud & On-premise'],
      gradient: 'from-softnex-pink to-softnex-orange',
    },
    {
      icon: '🤖',
      title: 'Automatización',
      description: 'Automatiza procesos repetitivos y optimiza flujos de trabajo con tecnología inteligente.',
      features: ['RPA', 'Workflows automáticos', 'Integración de APIs'],
      gradient: 'from-softnex-orange to-softnex-blue',
    },
    {
      icon: '🧠',
      title: 'Agentes IA',
      description: 'Asistentes inteligentes y agentes autónomos powered by IA para múltiples aplicaciones.',
      features: ['LLMs avanzados', 'RAG & Fine-tuning', 'Chatbots inteligentes'],
      gradient: 'from-softnex-blue to-softnex-purple',
    },
  ]

  return (
    <section id="servicios" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Subtle background for light theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-softnex-blue/5 to-softnex-purple/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-softnex-blue/5 border border-softnex-blue/20 rounded-full">
            <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">
              SERVICIOS
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Tecnología que <span className="text-softnex-blue">impulsa</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
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
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-500">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-softnex-purple to-softnex-pink text-white rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-softnex-purple/30"
          >
            Solicita una consultoría gratuita
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Gradient transition to next section - organic blend */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 22, 40, 0.3) 40%, rgba(10, 22, 40, 0.7) 70%, rgb(10, 22, 40) 100%)'
      }} />
    </section>
  )
}
