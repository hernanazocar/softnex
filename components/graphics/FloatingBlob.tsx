'use client'

import { motion } from 'framer-motion'

interface FloatingBlobProps {
  className?: string
  color?: string
  size?: number
  duration?: number
  delay?: number
  reverse?: boolean
}

/**
 * Blob de gradiente con movimiento sutil en loop.
 * Reutilizable como fondo decorativo animado en cualquier sección.
 */
export default function FloatingBlob({
  className = '',
  color = 'from-softnex-blue/15 to-softnex-cyan/5',
  size = 500,
  duration = 16,
  delay = 0,
  reverse = false,
}: FloatingBlobProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full bg-gradient-to-br ${color} blur-[100px] pointer-events-none ${className}`}
      style={{ width: size, height: size, willChange: 'transform' }}
      animate={{
        x: reverse ? [0, -40, 0] : [0, 40, 0],
        y: reverse ? [0, 30, 0] : [0, -30, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
