'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Bot,
  CheckCircle2,
  Activity,
  TrendingUp,
  Zap,
} from 'lucide-react'

const bars = [40, 65, 45, 80, 55, 90, 70, 95]

const codeLines = [
  [{ t: 'const ', c: 'text-softnex-blue' }, { t: 'app', c: 'text-white' }, { t: ' = ', c: 'text-white/50' }, { t: 'softnex', c: 'text-emerald-400' }, { t: '()', c: 'text-white/50' }],
  [{ t: 'app', c: 'text-white' }, { t: '.deploy', c: 'text-softnex-blue' }, { t: '({ ', c: 'text-white/50' }, { t: 'ai', c: 'text-white' }, { t: ': ', c: 'text-white/50' }, { t: 'true', c: 'text-amber-300' }, { t: ' })', c: 'text-white/50' }],
  [{ t: '// ✓ listo en producción', c: 'text-white/30' }],
]

function Float({ children, className, delay = 0, distance = 10 }: { children: React.ReactNode; className: string; delay?: number; distance?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -distance, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function HeroVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative w-full max-w-[540px] h-[460px] mx-auto" aria-hidden="true">
      {/* Anillos orbitales */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-softnex-blue/15 animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-softnex-blue/10 animate-[spin_25s_linear_infinite_reverse]">
          <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-softnex-blue shadow-[0_0_12px_#00a8ff]" />
        </div>
        <div className="absolute w-72 h-72 bg-softnex-blue/20 rounded-full blur-[100px]" />
      </div>

      {/* Ventana principal: dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute left-6 right-6 top-14 rounded-2xl border border-white/10 bg-[#0b1426]/90 backdrop-blur-xl shadow-2xl shadow-softnex-blue/10 overflow-hidden"
      >
        {/* Barra superior */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-[10px] font-mono text-white/40">softnex.app/dashboard</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="flex flex-col items-center gap-3 py-4 px-2.5 border-r border-white/5">
            {[LayoutDashboard, BarChart3, Users, Settings].map((Icon, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  i === 0 ? 'bg-softnex-blue/20 text-softnex-blue' : 'text-white/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
            ))}
          </div>

          {/* Contenido */}
          <div className="flex-1 p-4 space-y-4">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <p className="text-[10px] text-white/40 mb-1">Ventas del mes</p>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-black text-white">$48.2K</span>
                  <span className="flex items-center text-[10px] font-bold text-emerald-400">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    +24%
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <p className="text-[10px] text-white/40 mb-1">Procesos automatizados</p>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-black text-white">1,284</span>
                  <Zap className="w-3.5 h-3.5 text-softnex-blue" />
                </div>
              </div>
            </div>

            {/* Gráfico */}
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] text-white/40">Rendimiento</p>
                <span className="text-[10px] text-softnex-blue font-semibold">Últimos 8 meses</span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-softnex-blue/40 to-softnex-blue"
                    initial={{ height: '10%' }}
                    animate={reduce ? { height: `${h}%` } : { height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }}
                    transition={
                      reduce
                        ? { duration: 0.6 }
                        : { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }
                    }
                  />
                ))}
              </div>
            </div>

            {/* Código */}
            <div className="rounded-xl border border-white/5 bg-black/30 p-3 font-mono text-[11px] leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.4, duration: 0.4 }}
                >
                  <span className="text-white/20 mr-2 select-none">{i + 1}</span>
                  {line.map((seg, j) => (
                    <span key={j} className={seg.c}>{seg.t}</span>
                  ))}
                  {i === codeLines.length - 1 && (
                    <span className="inline-block w-1.5 h-3 ml-1 align-middle bg-softnex-blue animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tarjeta flotante: deploy */}
      <Float delay={0.6} className="absolute -top-1 right-0 z-10 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0b1426]/95 backdrop-blur-xl px-3.5 py-2.5 shadow-xl">
        <div className="w-8 h-8 rounded-lg bg-emerald-400/15 flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Deploy exitoso</p>
          <p className="text-[10px] text-white/40">v2.4.0 · hace 2 min</p>
        </div>
      </Float>

      {/* Tarjeta flotante: agente IA */}
      <Float delay={1.2} distance={12} className="absolute bottom-2 -left-2 z-10 flex items-center gap-2.5 rounded-xl border border-softnex-blue/30 bg-[#0b1426]/95 backdrop-blur-xl px-3.5 py-2.5 shadow-xl shadow-softnex-blue/10">
        <div className="w-8 h-8 rounded-lg bg-softnex-blue/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-softnex-blue" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Agente IA activo</p>
          <p className="flex items-center gap-1 text-[10px] text-white/40">
            Procesando pedidos
            <span className="flex gap-0.5">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="w-1 h-1 rounded-full bg-softnex-blue animate-bounce"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </span>
          </p>
        </div>
      </Float>

      {/* Chip flotante: uptime */}
      <Float delay={1.8} distance={8} className="absolute bottom-16 -right-3 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1426]/95 backdrop-blur-xl px-3 py-1.5 shadow-xl">
        <Activity className="w-3.5 h-3.5 text-softnex-blue" />
        <span className="text-[10px] font-bold text-white">99.9% uptime</span>
      </Float>
    </div>
  )
}
