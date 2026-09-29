'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { GitBranch, Package, FlaskConical, Rocket, Check, Timer, ShieldCheck } from 'lucide-react'
import Float, { floatCard } from './Float'

const lines = [
  { t: '$ git push origin main', c: 'text-white' },
  { t: '→ Pipeline iniciado', c: 'text-white/40' },
  { t: '✓ Build completado en 1.2s', c: 'text-emerald-400' },
  { t: '✓ 248 tests aprobados', c: 'text-emerald-400' },
  { t: '$ softnex deploy --prod', c: 'text-white' },
  { t: '↑ Subiendo 128 archivos...', c: 'text-white/40' },
  { t: '✓ Live en producción', c: 'text-softnex-blue' },
]

const steps = [
  { icon: GitBranch, label: 'Código', at: 1 },
  { icon: Package, label: 'Build', at: 3 },
  { icon: FlaskConical, label: 'Tests', at: 4 },
  { icon: Rocket, label: 'Deploy', at: 7 },
]

const TOTAL = lines.length + 3

export default function PipelineTerminal() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(reduce ? lines.length : 0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setTick((t) => (t + 1) % TOTAL), 850)
    return () => clearInterval(id)
  }, [reduce])

  const visible = Math.min(tick, lines.length)
  const done = steps.filter((s) => tick >= s.at).length

  return (
    <div className="relative w-full max-w-[540px] h-[460px] mx-auto" aria-hidden="true">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-softnex-blue/20 rounded-full blur-[100px]" />

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute left-4 right-4 top-10 rounded-2xl border border-white/10 bg-[#070d1a]/95 backdrop-blur-xl shadow-2xl shadow-softnex-blue/10 overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-[10px] font-mono text-white/40">softnex — zsh</span>
        </div>

        <div className="p-4 font-mono text-[12px] leading-6 h-[200px]">
          {lines.slice(0, visible).map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className={l.c}>
              {l.t}
            </motion.div>
          ))}
          <span className="inline-block w-2 h-4 align-middle bg-softnex-blue animate-pulse" />
        </div>

        {/* Pipeline */}
        <div className="px-5 pb-5 pt-2 border-t border-white/5">
          <div className="relative flex justify-between">
            <div className="absolute left-5 right-5 top-5 h-0.5 bg-white/10">
              <motion.div
                className="h-full bg-softnex-blue shadow-[0_0_8px_#00a8ff]"
                animate={{ width: `${(Math.max(done - 1, 0) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {steps.map((s, i) => {
              const Icon = s.icon
              const isDone = i < done
              const isActive = i === done
              return (
                <div key={s.label} className="relative z-10 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isDone
                        ? 'bg-softnex-blue border-softnex-blue text-white shadow-lg shadow-softnex-blue/40'
                        : isActive
                          ? 'bg-[#0b1426] border-softnex-blue text-softnex-blue animate-pulse'
                          : 'bg-[#0b1426] border-white/10 text-white/30'
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4" strokeWidth={3} /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDone ? 'text-white' : 'text-white/40'}`}>
                    {s.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      <Float delay={0.6} className={`${floatCard} top-0 -right-2`}>
        <div className="w-8 h-8 rounded-lg bg-softnex-blue/20 flex items-center justify-center">
          <Timer className="w-4 h-4 text-softnex-blue" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Deploy en 42s</p>
          <p className="text-[10px] text-white/40">CI/CD automatizado</p>
        </div>
      </Float>

      <Float delay={1.2} distance={12} className={`${floatCard} bottom-0 -left-3`}>
        <div className="w-8 h-8 rounded-lg bg-emerald-400/15 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Cobertura 96%</p>
          <p className="text-[10px] text-white/40">248/248 tests OK</p>
        </div>
      </Float>
    </div>
  )
}
