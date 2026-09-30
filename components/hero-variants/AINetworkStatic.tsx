import { Globe, Smartphone, Boxes, Workflow, Bot, LayoutDashboard } from 'lucide-react'

// Versión estática y liviana de la Red IA para celular: se dibuja con el HTML, sin esperar JavaScript
const W = 520
const H = 480
const CX = W / 2
const CY = H / 2
const R = 180

const nodes = [
  { icon: LayoutDashboard, label: 'Software' },
  { icon: Boxes, label: 'Sistemas' },
  { icon: Workflow, label: 'Automatización' },
  { icon: Bot, label: 'Agentes IA' },
  { icon: Globe, label: 'Webs' },
  { icon: Smartphone, label: 'Apps' },
].map((n, i) => {
  const rad = ((-90 + i * 60) * Math.PI) / 180
  return { ...n, x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) }
})

export default function AINetworkStatic() {
  return (
    <div className="relative" style={{ width: W, height: H }} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,168,255,0.22), transparent 45%)' }}
      />
      <div
        className="absolute rounded-full border border-dashed border-softnex-blue/25"
        style={{ width: R * 2, height: R * 2, left: CX - R, top: CY - R }}
      />
      <div
        className="absolute rounded-full border border-softnex-blue/15"
        style={{ width: 240, height: 240, left: CX - 120, top: CY - 120 }}
      />

      <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length]
          return (
            <g key={n.label}>
              <line x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="#00a8ff" strokeOpacity={0.12} strokeWidth={1} />
              <line x1={CX} y1={CY} x2={n.x} y2={n.y} stroke="#00a8ff" strokeOpacity={0.45} strokeWidth={1.5} strokeDasharray="4 6" />
            </g>
          )
        })}
      </svg>

      <div
        className="absolute w-32 h-32 rounded-full bg-[#06111F] border-2 border-softnex-blue/60 flex items-center justify-center shadow-[0_0_50px_rgba(0,168,255,0.5)]"
        style={{ left: CX - 64, top: CY - 64 }}
      >
        <div className="absolute inset-2 rounded-full border border-softnex-blue/20" />
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <defs>
            <linearGradient id="xs-a" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1ab8ff" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="xs-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e88f5" />
              <stop offset="100%" stopColor="#2f6df0" />
            </linearGradient>
          </defs>
          <polygon points="6,4 30,4 94,96 70,96" fill="url(#xs-b)" />
          <polygon points="70,4 94,4 30,96 6,96" fill="url(#xs-a)" />
        </svg>
      </div>

      {nodes.map((n) => {
        const Icon = n.icon
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center"
            style={{ left: n.x, top: n.y, transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0b1426] border border-softnex-blue/40 flex items-center justify-center shadow-lg shadow-black/30">
              <Icon className="w-6 h-6 text-softnex-blue" strokeWidth={1.8} />
            </div>
            <span className="absolute top-full mt-2 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0b1426] border border-white/10 text-white/70">
              {n.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
