export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-softnex-dark">
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-softnex-blue/8 to-softnex-cyan/4 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-black tracking-tight">
                <span className="text-white">softnex</span>
                <span className="text-softnex-blue">.</span>
              </div>
            </div>
            <p className="text-xs tracking-[0.25em] text-white/50 font-semibold">
              SOLUCIONES PARA EL FUTURO
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Transformamos ideas en tecnología. Creamos soluciones digitales
              innovadoras que impulsan el crecimiento de tu negocio.
            </p>

            {/* Social links */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: '📧', href: 'mailto:contacto@softnex.com' },
                { icon: '🔗', href: '#' },
                { icon: '💼', href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide">SERVICIOS</h3>
            <ul className="space-y-2.5">
              {[
                'Desarrollo Web',
                'Apps Móviles',
                'Software a Medida',
                'Sistemas ERP',
                'Automatización',
                'Agentes IA',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#servicios"
                    className="text-white/60 hover:text-softnex-blue text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide">EMPRESA</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-softnex-cyan text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            © {currentYear} <span className="text-softnex-blue">Softnex</span>. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-softnex-blue text-sm transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-white/40 hover:text-softnex-cyan text-sm transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
