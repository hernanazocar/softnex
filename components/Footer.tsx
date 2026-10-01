import { Mail, MapPin, ArrowUp, ArrowRight } from 'lucide-react'
import { socials } from './socials'


const services = [
  'Software SaaS',
  'Sistemas a Medida y ERP',
  'Automatización e Integraciones',
  'Agentes IA',
  'Desarrollo Web',
  'Apps Móviles',
]

const company = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

const linkClass =
  'group inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors duration-200'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={linkClass}>
      <ArrowRight className="w-3 h-3 -ml-4 opacity-0 text-softnex-blue group-hover:ml-0 group-hover:opacity-100 transition-all duration-200" strokeWidth={2.5} />
      {children}
    </a>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#06111F]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-softnex-blue/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[300px] bg-softnex-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="inline-block" aria-label="Softnex - volver al inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-softnex.png" alt="Softnex" width={575} height={220} loading="lazy" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Transformamos ideas en tecnología. Software a medida, apps móviles, ERP y soluciones de IA
              que impulsan el crecimiento de tu negocio.
            </p>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">Síguenos</p>
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href === '#' ? undefined : '_blank'}
                    rel={s.href === '#' ? undefined : 'noopener noreferrer'}
                    className="group w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-softnex-blue hover:border-softnex-blue hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,168,255,0.4)] transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/70 group-hover:fill-white transition-colors" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-softnex-blue mb-5">Servicios</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((item) => (
                <li key={item}>
                  <FooterLink href="#servicios">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa y contacto */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-softnex-blue mb-5">Empresa</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-softnex-blue mb-5">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:hola@softnex.cl" className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 flex-shrink-0 text-softnex-blue" strokeWidth={2} />
                    hola@softnex.cl
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-white/60">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-softnex-blue" strokeWidth={2} />
                  Santiago, Chile
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            © {currentYear} <span className="text-softnex-blue font-semibold">Softnex</span>. Todos los derechos reservados.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white transition-colors"
          >
            Volver arriba
            <span className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-softnex-blue group-hover:border-softnex-blue transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
