'use client'

import { useEffect } from 'react'

// Un solo listener para todas las tarjetas con la clase .spotlight: guarda la posición del cursor en variables CSS
export default function SpotlightTracker() {
  useEffect(() => {
    // Indica que React ya tomó control: desactiva el respaldo CSS que muestra el contenido si el JS tarda
    document.documentElement.classList.add('hydrated')
    if (!window.matchMedia('(hover: hover)').matches) return
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.spotlight') as HTMLElement | null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
  return null
}
