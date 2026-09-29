'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Globe, Smartphone, Boxes, Workflow, Bot, Cloud, Sparkles, Layers } from 'lucide-react'
import Float, { floatCard } from './Float'

const W = 520
const H = 480
const CX = W / 2
const CY = H / 2
const R = 180

const nodes = [
  { icon: Globe, label: 'Web' },
  { icon: Smartphone, label: 'Apps' },
  { icon: Boxes, label: 'Sistemas y ERP' },
  { icon: Workflow, label: 'Automatización' },
  { icon: Bot, label: 'Agentes IA' },
  { icon: Cloud, label: 'Cloud' },
].map((n, i) => {
  const rad = ((-90 + i * 60) * Math.PI) / 180
  return { ...n, x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) }
})

function LogoX() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="x-a" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1ab8ff" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="x-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e88f5" />
          <stop offset="100%" stopColor="#2f6df0" />
        </linearGradient>
      </defs>
      <polygon points="6,4 30,4 94,96 70,96" fill="url(#x-b)" />
      <polygon points="70,4 94,4 30,96 6,96" fill="url(#x-a)" />
    </svg>
  )
}

export default function AINetwork() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setActive((a) => (a + 1) % nodes.length), 1600)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="relative mx-auto origin-center lg:scale-[0.85] xl:scale-100" style={{ width: W, height: H }} aria-hidden="true">
      {/* Fondo: glow y órbitas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-80 h-80 bg-softnex-blue/20 rounded-full blur-[100px]" />
        <div
          className="absolute rounded-full border border-dashed border-softnex-blue/20 animate-[spin_60s_linear_infinite]"
          style={{ width: R * 2, height: R * 2 }}
        />
        <div className="absolute w-[240px] h-[240px] rounded-full border border-softnex-blue/10 animate-[spin_30s_linear_infinite_reverse]">
          <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-softnex-blue shadow-[0_0_10px_#00a8ff]" />
          <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full bg-softnex-blue/70" />
        </div>
      </div>

      {/* Conexiones */}
      <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length]
          return (
            <line key={`ring-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="#00a8ff" strokeOpacity={0.1} strokeWidth={1} />
          )
        })}
        {nodes.map((n, i) => {
          const isActive = i === active
          return (
            <g key={n.label}>
              <motion.line
                x1={CX}
                y1={CY}
                x2={n.x}
                y2={n.y}
                stroke="#00a8ff"
                strokeWidth={isActive ? 2 : 1.2}
                strokeOpacity={isActive ? 0.9 : 0.3}
                strokeDasharray="4 6"
                animate={reduce ? undefined : { strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                style={{ transition: 'stroke-opacity 0.4s, stroke-width 0.4s' }}
              />
              {!reduce && (
                <motion.circle
                  r={3.5}
                  fill="#00a8ff"
                  style={{ filter: 'drop-shadow(0 0 6px #00a8ff)' }}
                  animate={{ cx: [CX, n.x], cy: [CY, n.y], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Núcleo con la X de Softnex */}
      <div className="absolute" style={{ left: CX, top: CY, transform: 'translate(-50%, -50%)' }}>
        {!reduce &&
          [0, 1].map((d) => (
            <motion.div
              key={d}
              className="absolute inset-0 rounded-full border-2 border-softnex-blue"
              animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: d * 1.2, ease: 'easeOut' }}
            />
          ))}
        <div className="relative w-32 h-32 rounded-full bg-[#06111F] flex items-center justify-center shadow-[0_0_60px_rgba(0,168,255,0.55)] border-2 border-softnex-blue/60">
          <div className="absolute inset-2 rounded-full border border-softnex-blue/20" />
          <motion.div
            className="w-16 h-16"
            style={{ filter: 'drop-shadow(0 0 12px rgba(0,168,255,0.7))' }}
            animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LogoX />
          </motion.div>
        </div>
      </div>

      {/* Nodos de servicio */}
      {nodes.map((n, i) => {
        const Icon = n.icon
        const isActive = i === active
        return (
          <motion.div
            key={n.label}
            className="absolute flex flex-col items-center"
            style={{ left: n.x, top: n.y, x: '-50%', y: '-50%' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: isActive ? 1.12 : 1 }}
            transition={{ opacity: { delay: 0.2 + i * 0.08, duration: 0.5 }, scale: { duration: 0.4 } }}
          >
            <div
              className={`relative w-14 h-14 rounded-2xl flex items-center justify-center border backdrop-blur-xl transition-all duration-500 ${
                isActive
                  ? 'bg-softnex-blue border-softnex-blue shadow-[0_0_30px_rgba(0,168,255,0.6)]'
                  : 'bg-[#0b1426]/95 border-softnex-blue/35 shadow-lg shadow-black/30'
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
              <Icon className={`relative w-6 h-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-softnex-blue'}`} strokeWidth={1.8} />
            </div>
            <span
              className={`absolute top-full mt-2 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-500 ${
                isActive
                  ? 'bg-softnex-blue/20 border-softnex-blue/50 text-white'
                  : 'bg-[#0b1426]/80 border-white/10 text-white/60'
              }`}
            >
              {n.label}
            </span>
          </motion.div>
        )
      })}

      <Float delay={0.8} className={`${floatCard} top-2 -left-6`}>
        <div className="w-8 h-8 rounded-lg bg-softnex-blue/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-softnex-blue" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">IA integrada</p>
          <p className="text-[10px] text-emerald-400 font-semibold">en cada solución</p>
        </div>
      </Float>

      <Float delay={1.4} distance={8} className={`${floatCard} -bottom-14 -right-10`}>
        <div className="w-8 h-8 rounded-lg bg-softnex-blue/20 flex items-center justify-center">
          <Layers className="w-4 h-4 text-softnex-blue" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">6 soluciones</p>
          <p className="text-[10px] text-emerald-400 font-semibold">conectadas en un ecosistema</p>
        </div>
      </Float>
    </div>
  )
}
