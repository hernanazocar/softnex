'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Globe2, Zap } from 'lucide-react'
import Float, { floatCard } from './Float'

const SIZE = 440
const N = 520
const HUBS = [25, 90, 160, 240, 315, 395, 470]
const ARCS: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 4], [2, 6], [1, 5]]

type V = { x: number; y: number; z: number }

const basePoints: V[] = Array.from({ length: N }, (_, i) => {
  const y = 1 - (i / (N - 1)) * 2
  const r = Math.sqrt(1 - y * y)
  const theta = Math.PI * (3 - Math.sqrt(5)) * i
  return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r }
})

export default function DataGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = SIZE * dpr
    canvas.height = SIZE * dpr
    ctx.scale(dpr, dpr)

    const R = SIZE * 0.38
    const C = SIZE / 2
    const tilt = 0.35
    let angle = 0
    let frame = 0
    let raf = 0

    const rotate = (p: V): V => {
      const cosA = Math.cos(angle), sinA = Math.sin(angle)
      const x1 = p.x * cosA + p.z * sinA
      const z1 = -p.x * sinA + p.z * cosA
      const cosT = Math.cos(tilt), sinT = Math.sin(tilt)
      return { x: x1, y: p.y * cosT - z1 * sinT, z: p.y * sinT + z1 * cosT }
    }
    const proj = (p: V) => ({ x: C + p.x * R, y: C + p.y * R })

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE)

      const glow = ctx.createRadialGradient(C, C, R * 0.2, C, C, R * 1.3)
      glow.addColorStop(0, 'rgba(0,168,255,0.12)')
      glow.addColorStop(1, 'rgba(0,168,255,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, SIZE, SIZE)

      ctx.strokeStyle = 'rgba(0,168,255,0.25)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(C, C, R, 0, Math.PI * 2)
      ctx.stroke()

      const rotated = basePoints.map(rotate)
      for (const p of rotated) {
        const s = proj(p)
        const a = p.z > 0 ? 0.25 + p.z * 0.6 : 0.07
        ctx.fillStyle = `rgba(0,168,255,${a})`
        ctx.fillRect(s.x - 0.9, s.y - 0.9, 1.8, 1.8)
      }

      ctx.setLineDash([4, 5])
      ctx.lineDashOffset = -frame * 0.4
      for (const [ai, bi] of ARCS) {
        const a = rotated[HUBS[ai]], b = rotated[HUBS[bi]]
        if (a.z < -0.1 || b.z < -0.1) continue
        const m = { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }
        const len = Math.hypot(m.x, m.y, m.z) || 1
        const lift = 1.45
        const ctrl = proj({ x: (m.x / len) * lift, y: (m.y / len) * lift, z: 0 })
        const pa = proj(a), pb = proj(b)
        ctx.strokeStyle = `rgba(0,212,255,${0.35 + Math.min(a.z, b.z) * 0.5})`
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(pa.x, pa.y)
        ctx.quadraticCurveTo(ctrl.x, ctrl.y, pb.x, pb.y)
        ctx.stroke()
      }
      ctx.setLineDash([])

      HUBS.forEach((idx, i) => {
        const p = rotated[idx]
        if (p.z < 0) return
        const s = proj(p)
        const phase = ((frame + i * 20) % 90) / 90
        ctx.strokeStyle = `rgba(0,168,255,${0.6 * (1 - phase)})`
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.arc(s.x, s.y, 4 + phase * 12, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fillStyle = '#00a8ff'
        ctx.shadowColor = '#00a8ff'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(s.x, s.y, 3.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })
    }

    const loop = () => {
      angle += 0.0035
      frame++
      draw()
      raf = requestAnimationFrame(loop)
    }

    if (reduce) draw()
    else loop()

    return () => cancelAnimationFrame(raf)
  }, [reduce])

  return (
    <div className="relative w-full max-w-[520px] h-[460px] mx-auto flex items-center justify-center" aria-hidden="true">
      <canvas ref={canvasRef} style={{ width: SIZE, height: SIZE }} />

      <Float delay={0.6} className={`${floatCard} top-6 right-0`}>
        <div className="w-8 h-8 rounded-lg bg-softnex-blue/20 flex items-center justify-center">
          <Globe2 className="w-4 h-4 text-softnex-blue" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Infraestructura global</p>
          <p className="text-[10px] text-white/40">12 regiones activas</p>
        </div>
      </Float>

      <Float delay={1.2} distance={12} className={`${floatCard} bottom-8 left-0`}>
        <div className="w-8 h-8 rounded-lg bg-emerald-400/15 flex items-center justify-center">
          <Zap className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">Latencia 24ms</p>
          <p className="text-[10px] text-white/40">1.2M requests/día</p>
        </div>
      </Float>
    </div>
  )
}
