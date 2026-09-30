'use client'

import { useEffect, useRef, useState } from 'react'

const GLITCH_MS = 450

export default function GlitchText({ text }: { text: string }) {
  const [glitching, setGlitching] = useState(false)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    setGlitching(true)
    const id = setTimeout(() => setGlitching(false), GLITCH_MS)
    return () => clearTimeout(id)
  }, [text])

  return (
    <span className="relative inline-block">
      <span className={glitching ? 'glitch-main' : undefined}>{text}</span>
      {glitching && (
        <>
          <span aria-hidden="true" className="glitch-layer glitch-layer-1">
            {text}
          </span>
          <span aria-hidden="true" className="glitch-layer glitch-layer-2">
            {text}
          </span>
        </>
      )}
    </span>
  )
}
