'use client'

import { motion } from 'framer-motion'

interface BarChartIllustrationProps {
  className?: string
  values?: number[]
  colorFrom?: string
  colorTo?: string
}

/**
 * Gráfico ilustrativo de barras de resultados (SVG/CSS).
 * Uso en tarjetas de casos de éxito / métricas.
 */
export default function BarChartIllustration({
  className = '',
  values = [35, 55, 45, 75, 95],
  colorFrom = 'from-softnex-blue/50',
  colorTo = 'to-softnex-cyan',
}: BarChartIllustrationProps) {
  return (
    <div className={`flex items-end gap-1.5 h-full ${className}`} aria-hidden="true">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: `${v}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          className={`flex-1 rounded-t-md bg-gradient-to-t ${colorFrom} ${colorTo} group-hover:opacity-90`}
        />
      ))}
    </div>
  )
}
