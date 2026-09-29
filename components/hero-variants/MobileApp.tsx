'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Home, BarChart3, Bell, User, ShoppingBag, TrendingUp, CheckCircle2, Truck, Star, Users } from 'lucide-react'
import Float, { floatCard } from './Float'

const orders = [
  { name: 'Pedido #1282', amount: '$84.00' },
  { name: 'Pedido #1283', amount: '$126.50' },
  { name: 'Pedido #1284', amount: '$42.90' },
]

function ScreenHome() {
  return (
    <div className="space-y-3">
      <p className="text-[10px] text-white/40">Hola, Andrea</p>
      <div className="rounded-2xl bg-gradient-to-br from-softnex-blue to-[#0060b0] p-3.5 shadow-lg shadow-softnex-blue/30">
        <p className="text-[9px] text-white/70 uppercase tracking-wider">Ventas hoy</p>
        <p className="text-xl font-black text-white">$3.240</p>
        <p className="flex items-center text-[10px] text-white/90 font-semibold">
          <TrendingUp className="w-3 h-3 mr-1" /> +18% vs ayer
        </p>
      </div>
      <p className="text-[10px] font-bold text-white/70">Últimos pedidos</p>
      {orders.map((o, i) => (
        <motion.div
          key={o.name}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 * i }}
          className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/5 p-2"
        >
          <div className="w-7 h-7 rounded-lg bg-softnex-blue/15 flex items-center justify-center">
            <ShoppingBag className="w-3.5 h-3.5 text-softnex-blue" />
          </div>
          <span className="flex-1 text-[10px] text-white/80">{o.name}</span>
          <span className="text-[10px] font-bold text-white">{o.amount}</span>
        </motion.div>
      ))}
    </div>
  )
}

function ScreenAnalytics() {
  const bars = [35, 60, 45, 80, 65, 95]
  const circ = 2 * Math.PI * 34
  return (
    <div className="space-y-4">
      <p className="text-[11px] font-bold text-white">Analítica</p>
      <div className="relative flex items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 90 90" className="-rotate-90">
          <circle cx="45" cy="45" r="34" stroke="rgba(255,255,255,0.08)" strokeWidth="9" fill="none" />
          <motion.circle
            cx="45" cy="45" r="34" stroke="#00a8ff" strokeWidth="9" fill="none" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ * 0.28 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute text-center">
          <p className="text-lg font-black text-white">72%</p>
          <p className="text-[8px] text-white/40 uppercase">Meta</p>
        </div>
      </div>
      <div className="flex items-end gap-1.5 h-20 rounded-xl bg-white/[0.04] border border-white/5 p-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-softnex-blue/40 to-softnex-blue"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  )
}

function ScreenOrder() {
  return (
    <div className="flex flex-col items-center text-center pt-6 space-y-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 15 }}
        className="w-16 h-16 rounded-full bg-emerald-400/15 flex items-center justify-center"
      >
        <CheckCircle2 className="w-9 h-9 text-emerald-400" />
      </motion.div>
      <p className="text-sm font-black text-white">Pedido confirmado</p>
      <p className="text-[10px] text-white/50">#1284 · Llega en 25 min</p>
      <div className="w-full rounded-xl bg-white/[0.04] border border-white/5 p-3 space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-white/80">
          <Truck className="w-3.5 h-3.5 text-softnex-blue" /> En camino
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-softnex-blue"
            initial={{ width: '10%' }}
            animate={{ width: '70%' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  )
}

const screens = [ScreenHome, ScreenAnalytics, ScreenOrder]
const tabs = [Home, BarChart3, Bell, User]

export default function MobileApp() {
  const reduce = useReducedMotion()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setIdx((i) => (i + 1) % screens.length), 3200)
    return () => clearInterval(id)
  }, [reduce])

  const Screen = screens[idx]

  return (
    <div className="relative w-full max-w-[520px] h-[480px] mx-auto flex items-center justify-center" aria-hidden="true">
      <div className="absolute w-72 h-72 bg-softnex-blue/25 rounded-full blur-[100px]" />
      <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-softnex-blue/15 animate-[spin_50s_linear_infinite]" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.8 }}
        className="relative w-[230px] h-[460px] rounded-[2.4rem] border-[6px] border-[#1c2a44] bg-[#070d1a] shadow-2xl shadow-softnex-blue/20 overflow-hidden"
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-20" />
        <div className="relative h-full pt-10 px-4 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 inset-x-0 flex justify-around py-3 border-t border-white/5 bg-[#0b1426]">
          {tabs.map((Icon, i) => (
            <Icon key={i} className={`w-4 h-4 transition-colors ${i === idx ? 'text-softnex-blue' : 'text-white/30'}`} />
          ))}
        </div>
      </motion.div>

      <Float delay={0.6} className={`${floatCard} top-10 -left-2`}>
        <div className="w-8 h-8 rounded-lg bg-softnex-blue/20 flex items-center justify-center">
          <Bell className="w-4 h-4 text-softnex-blue" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Nuevo pedido</p>
          <p className="text-[10px] text-white/40">#1284 recibido</p>
        </div>
      </Float>

      <Float delay={1} distance={8} className={`${floatCard} top-24 -right-2`}>
        <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
        <span className="text-[11px] font-bold text-white">4.9 en tiendas</span>
      </Float>

      <Float delay={1.4} distance={12} className={`${floatCard} bottom-10 right-0`}>
        <div className="w-8 h-8 rounded-lg bg-emerald-400/15 flex items-center justify-center">
          <Users className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">+3.2K usuarios</p>
          <p className="text-[10px] text-white/40">activos este mes</p>
        </div>
      </Float>
    </div>
  )
}
