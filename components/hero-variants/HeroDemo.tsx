'use client'

import { useState } from 'react'
import { LayoutDashboard, BrainCircuit, Terminal, Globe2, Smartphone } from 'lucide-react'
import Hero from '@/components/Hero'
import HeroVisual from '@/components/HeroVisual'
import AINetwork from './AINetwork'
import PipelineTerminal from './PipelineTerminal'
import DataGlobe from './DataGlobe'
import MobileApp from './MobileApp'

const options = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, Component: HeroVisual },
  { id: 'ai', label: 'Red IA', icon: BrainCircuit, Component: AINetwork },
  { id: 'pipeline', label: 'Pipeline', icon: Terminal, Component: PipelineTerminal },
  { id: 'globe', label: 'Globo de datos', icon: Globe2, Component: DataGlobe },
  { id: 'mobile', label: 'App móvil', icon: Smartphone, Component: MobileApp },
]

export default function HeroDemo() {
  const [selected, setSelected] = useState(options[0].id)
  const current = options.find((o) => o.id === selected) ?? options[0]
  const Visual = current.Component

  return (
    <>
      <Hero visual={<Visual key={current.id} />} />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-2xl border border-white/10 bg-[#0b1426]/90 backdrop-blur-xl shadow-2xl">
        <span className="hidden md:block px-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
          Opción
        </span>
        {options.map((o, i) => {
          const Icon = o.icon
          const active = o.id === selected
          return (
            <button
              key={o.id}
              onClick={() => setSelected(o.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                active ? 'bg-softnex-blue text-white shadow-lg shadow-softnex-blue/30' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">
                {i + 1}. {o.label}
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}
