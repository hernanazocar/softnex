import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MessageSquare, Mail } from 'lucide-react'

export type ContactVariant = 'minimal' | 'outline' | 'arrow' | 'status'

export default function ContactButton({ variant = 'minimal' }: { variant?: ContactVariant }) {
  if (variant === 'minimal') {
    return (
      <Link
        href="#contacto"
        className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-softnex-blue text-white text-[10px] font-bold tracking-[0.12em] shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 hover:-translate-y-0.5 transition-all duration-300"
      >
        <Mail className="w-3.5 h-3.5" strokeWidth={2.4} />
        CONTACTAR
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.8} />
      </Link>
    )
  }

  if (variant === 'outline') {
    return (
      <Link
        href="#contacto"
        className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-softnex-blue text-softnex-blue text-[13px] font-semibold overflow-hidden hover:text-white transition-colors duration-300"
      >
        <span className="absolute inset-0 bg-softnex-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        <MessageSquare className="relative w-4 h-4" strokeWidth={2.2} />
        <span className="relative">Contacto</span>
      </Link>
    )
  }

  if (variant === 'arrow') {
    return (
      <Link
        href="#contacto"
        className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-softnex-blue text-white text-[13px] font-semibold shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 transition-all duration-300"
      >
        Hablemos
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-300">
          <ArrowRight className="w-3.5 h-3.5 text-softnex-blue" strokeWidth={2.8} />
        </span>
      </Link>
    )
  }

  return (
    <Link
      href="#contacto"
      className="group inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full bg-softnex-blue text-white text-[13px] font-semibold shadow-[0_4px_16px_rgba(0,168,255,0.4)] hover:shadow-[0_6px_24px_rgba(0,168,255,0.6)] hover:-translate-y-0.5 transition-all duration-300"
    >
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-300" />
      </span>
      Disponibles · Contactar
    </Link>
  )
}
