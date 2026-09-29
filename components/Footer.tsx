import Image from 'next/image'
import { Mail, MapPin, ArrowUp, ArrowRight } from 'lucide-react'

// Reemplazar '#' por las URLs reales de cada red
const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  },
  {
    label: 'X',
    href: '#',
    path: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41z',
  },
  {
    label: 'GitHub',
    href: '#',
    path: 'M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3',
  },
]

const services = [
  'Desarrollo Web',
  'Apps Móviles',
  'Sistemas a Medida',
  'Sistemas ERP',
  'Automatización',
  'Agentes IA',
  'Cloud',
  'Integraciones',
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
              <Image src="/logo-header-crop.png" alt="Softnex" width={575} height={220} className="h-10 w-auto object-contain" />
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
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-8">
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
                  <a href="mailto:contacto@softnex.com" className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-softnex-blue" strokeWidth={2} />
                    contacto@softnex.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-white/60">
                  <MapPin className="w-4 h-4 text-softnex-blue" strokeWidth={2} />
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
