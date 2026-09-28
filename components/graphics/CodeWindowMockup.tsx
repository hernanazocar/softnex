'use client'

import { motion } from 'framer-motion'

/**
 * Mockup ilustrativo de un editor de código (SVG/CSS a mano).
 * Refuerza el mensaje "ingeniería real" en About.
 */
export default function CodeWindowMockup({ className = '' }: { className?: string }) {
  const lines = [
    { w: '45%', color: 'bg-softnex-purple/60' },
    { w: '70%', color: 'bg-white/20' },
    { w: '30%', color: 'bg-softnex-cyan/60' },
    { w: '85%', color: 'bg-white/15' },
    { w: '55%', color: 'bg-softnex-blue/60' },
    { w: '40%', color: 'bg-white/20' },
    { w: '65%', color: 'bg-softnex-purple/40' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden ${className}`}
      style={{ willChange: 'transform' }}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-[11px] text-white/40 font-mono">app.ts</span>
      </div>
      <div className="p-5 space-y-2.5 font-mono">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className="flex items-center gap-2 origin-left"
          >
            <span className="text-[10px] text-white/25 w-4">{i + 1}</span>
            <div className={`h-2.5 rounded-full ${line.color}`} style={{ width: line.w }} />
          </motion.div>
        ))}
        <motion.span
          className="inline-block w-2 h-4 bg-softnex-cyan ml-6"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}
