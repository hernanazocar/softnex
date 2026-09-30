'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/#%&*'
const FRAME_MS = 45

type Char = { ch: string; done: boolean }

const resolvedChars = (text: string): Char[] => [...text].map((ch) => ({ ch, done: true }))

export default function ScrambleText({ text, duration = 800 }: { text: string; duration?: number }) {
  const [out, setOut] = useState<Char[]>(() => resolvedChars(text))
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(resolvedChars(text))
      return
    }

    const letters = [...text]
    const start = performance.now()
    let last = 0
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      if (now - last >= FRAME_MS || progress === 1) {
        last = now
        const resolved = Math.floor(progress * letters.length)
        setOut(
          letters.map((ch, i) =>
            i < resolved ? { ch, done: true } : { ch: CHARS[Math.floor(Math.random() * CHARS.length)], done: false }
          )
        )
      }
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, duration])

  return (
    <>
      {out.map((c, i) => (
        <span key={i} className={c.done ? undefined : 'opacity-50'}>
          {c.ch}
        </span>
      ))}
    </>
  )
}
