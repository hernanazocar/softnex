'use client'

import { motion } from 'framer-motion'

/**
 * Ilustración abstracta de red/conectividad (nodos + líneas) en SVG.
 * Uso decorativo para reforzar secciones de servicios/tecnología.
 */
export default function NetworkIllustration({ className = '' }: { className?: string }) {
  const nodes = [
    { x: 40, y: 30 }, { x: 140, y: 15 }, { x: 220, y: 60 },
    { x: 60, y: 110 }, { x: 160, y: 130 }, { x: 240, y: 150 },
  ]
  const edges = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4], [4, 5], [2, 5]]

  return (
    <svg
      viewBox="0 0 260 170"
      className={className}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x} cy={n.y} r={5}
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
        >
          <animate attributeName="r" values="5;6.5;5" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
        </motion.circle>
      ))}
    </svg>
  )
}
