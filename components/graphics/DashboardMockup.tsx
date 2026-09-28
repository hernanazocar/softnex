'use client'

import { motion } from 'framer-motion'

/**
 * Mockup ilustrativo de un dashboard de producto (SVG a mano).
 * Da sensación de "producto real" en Hero/About sin depender de fotos.
 */
export default function DashboardMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
        style={{ willChange: 'transform' }}
      >
        {/* Glow detrás del mockup */}
        <div className="absolute -inset-6 bg-gradient-to-br from-softnex-blue/25 via-softnex-cyan/15 to-softnex-purple/20 blur-3xl rounded-3xl" />

        <div className="relative glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Barra de título tipo browser */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <div className="ml-3 flex-1 h-5 rounded-full bg-white/5" />
          </div>

          <div className="p-5 grid grid-cols-3 gap-4">
            {/* KPI cards */}
            {[
              { label: 'Ingresos', value: '+42%', color: 'text-softnex-blue' },
              { label: 'Usuarios', value: '12.4k', color: 'text-softnex-cyan' },
              { label: 'Uptime', value: '99.9%', color: 'text-softnex-purple' },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 p-3"
              >
                <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">{kpi.label}</p>
                <p className={`text-lg font-black ${kpi.color}`}>{kpi.value}</p>
              </motion.div>
            ))}

            {/* Gráfico de línea */}
            <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-4">
              <svg viewBox="0 0 200 70" className="w-full h-16" preserveAspectRatio="none">
                <motion.polyline
                  points="0,55 25,45 50,50 75,30 100,35 125,15 150,22 175,8 200,12"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00a8ff" />
                    <stop offset="100%" stopColor="#00d4ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Gráfico de barras */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-end gap-1.5 h-[92px]">
              {[40, 65, 35, 80, 55, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-softnex-blue/40 to-softnex-cyan"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Badge flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-2.5 border border-softnex-cyan/30 shadow-lg"
        >
          <p className="text-[11px] text-white/60">Estado</p>
          <p className="text-sm font-bold text-softnex-cyan flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-softnex-cyan animate-pulse" />
            En producción
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
