'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function Float({
  children,
  className,
  delay = 0,
  distance = 10,
}: {
  children: React.ReactNode
  className: string
  delay?: number
  distance?: number
}) {
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

export const floatCard =
  'absolute z-10 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0b1426]/95 backdrop-blur-xl px-3.5 py-2.5 shadow-xl'
