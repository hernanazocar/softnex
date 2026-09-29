'use client'

import { useEffect, useState, memo } from 'react'
import { ArrowRight, Rocket, LayoutGrid, FolderKanban, Users, Award, Headset } from 'lucide-react'
import AINetwork from './hero-variants/AINetwork'

const stats = [
  { value: '50+', label: 'Proyectos', icon: FolderKanban },
  { value: '30+', label: 'Clientes', icon: Users },
  { value: '5+', label: 'Años', icon: Award },
  { value: '24/7', label: 'Soporte', icon: Headset },
]

function Hero({ visual }: { visual?: React.ReactNode }) {
  const [currentWord, setCurrentWord] = useState(0)

  const words = ['TECNOLOGÍA', 'INNOVACIÓN', 'SOLUCIONES', 'SOFTWARE']

  useEffect(() => {
    // Respetar preferencia de reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Dejar la primera palabra fija si el usuario prefiere menos movimiento
      return
    }

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#06111F] via-[#0a0e1a] to-[#050b15]">
      {/* Grid animado principal */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 168, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 168, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
          willChange: 'transform'
        }}
      />

      {/* Grid secundario más sutil (parallax) */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          animation: 'gridMoveSlow 40s linear infinite',
          willChange: 'transform'
        }}
      />

      {/* Viñeta sutil en los bordes */}
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-transparent via-transparent to-softnex-dark/60" />

      {/* Mesh gradients modernos */}
      <div
        className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-softnex-blue/20 via-softnex-cyan/10 to-transparent rounded-full blur-[120px]"
        style={{ animation: 'float 15s ease-in-out infinite', willChange: 'transform' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-softnex-purple/15 via-softnex-pink/8 to-transparent rounded-full blur-[100px]"
        style={{ animation: 'float 12s ease-in-out infinite reverse', willChange: 'transform' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-softnex-cyan/10 via-softnex-blue/5 to-transparent rounded-full blur-[90px]"
        style={{ animation: 'float 18s ease-in-out infinite', willChange: 'transform', animationDelay: '5s' }}
      />

      {/* Capas de brillo dinámico */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-softnex-blue/5 to-transparent opacity-30"
        style={{ animation: 'pulse 8s ease-in-out infinite' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-softnex-dark/50 via-transparent to-softnex-dark/80" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 md:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1 glass-card rounded-full border border-softnex-blue/30">
            <span className="relative flex w-2 h-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" /><span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" /></span>
            <p className="text-[10px] tracking-[0.2em] text-softnex-blue font-bold uppercase">
              Soluciones para el futuro
            </p>
          </div>

          {/* TÍTULO - PALABRA DINÁMICA */}
          <h1 className="font-black mb-5 leading-[1.05] tracking-tight">
            <span className="block text-white text-3xl sm:text-4xl xl:text-5xl">Transformamos</span>
            <span className="block text-white text-3xl sm:text-4xl xl:text-5xl">ideas en</span>
            <span
              className="block relative mt-1 text-5xl sm:text-6xl xl:text-7xl transition-all duration-500 ease-in-out"
              style={{
                color: '#00a8ff',
                letterSpacing: '0.02em'
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              {words[currentWord]}
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/70 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Desarrollo de <span className="text-softnex-blue font-semibold">software a medida</span>,
            <span className="text-white font-semibold"> aplicaciones móviles</span>,
            <span className="text-white font-semibold"> sistemas ERP</span> y
            soluciones de <span className="text-softnex-blue font-semibold">automatización con IA</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-10">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-softnex-blue text-white text-[13px] font-bold tracking-wide shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Rocket className="w-3.5 h-3.5" strokeWidth={2.5} />
              Comienza tu proyecto
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </a>

            <a
              href="#servicios"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-[13px] font-semibold hover:border-softnex-blue hover:text-white hover:bg-softnex-blue/10 transition-all duration-300"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-softnex-blue" strokeWidth={2.5} />
              Ver servicios
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto lg:mx-0">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="group flex items-center min-w-0 gap-2 glass-card px-2.5 py-2 rounded-xl border border-white/10 hover:border-softnex-blue/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-md bg-softnex-blue/15 border border-softnex-blue/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5 text-softnex-blue" strokeWidth={2.2} />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-base font-black text-white">{stat.value}</div>
                    <div className="text-[9px] text-white/50 tracking-wide uppercase font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="hidden lg:block">
          {visual ?? <AINetwork />}
        </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        @keyframes gridMoveSlow {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(120px) translateX(60px); }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}

export default memo(Hero)
