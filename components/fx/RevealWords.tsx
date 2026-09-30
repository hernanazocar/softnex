'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  // El desenfoque animado es costoso en celulares: solo se usa en escritorio
  const [blur, setBlur] = useState(false)
  useEffect(() => {
    setBlur(window.matchMedia('(min-width: 1024px)').matches)
  }, [])

  if (reduce) return <span className={className}>{text}</span>

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={blur ? { opacity: 0, y: '0.35em', filter: 'blur(6px)' } : { opacity: 0, y: '0.35em' }}
          whileInView={blur ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: 'easeOut' }}
        >
          {word}
          {i < words.length - 1 && ' '}
        </motion.span>
      ))}
    </span>
  )
}
