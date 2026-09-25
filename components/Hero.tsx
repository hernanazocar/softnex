'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = 'rgba(0, 168, 255, 0.6)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 168, 255, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#050b15] via-softnex-dark to-[#0a1628]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(0, 168, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }} />

      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-softnex-blue/20 to-softnex-cyan/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-softnex-purple/20 to-softnex-pink/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-full opacity-50 group-hover:opacity-100 blur transition duration-500" />
            <div className="relative px-8 py-3 glass-card rounded-full border border-softnex-blue/30">
              <p className="text-xs tracking-[0.3em] text-softnex-blue font-bold uppercase flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-softnex-blue rounded-full animate-pulse" />
                Soluciones para el futuro
                <span className="w-2 h-2 bg-softnex-cyan rounded-full animate-pulse" />
              </p>
            </div>
          </div>

          {/* TÍTULO CON AZUL CORPORATIVO */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block text-white mb-2">Transformamos</span>
            <span className="block text-white mb-2">ideas en</span>
            <span className="block" style={{
              color: '#00a8ff',
              textShadow: '0 0 40px rgba(0, 168, 255, 0.6), 0 0 80px rgba(0, 168, 255, 0.4), 0 0 120px rgba(0, 168, 255, 0.2)'
            }}>
              tecnología
            </span>
          </h1>

          <div className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            <p>
              Desarrollo de <span className="text-softnex-cyan font-semibold">software a medida</span>,
              <span className="text-softnex-purple font-semibold"> aplicaciones móviles</span>,
              <span className="text-softnex-pink font-semibold"> sistemas ERP</span> y
              soluciones de <span className="text-softnex-blue font-semibold">automatización con IA</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="#contacto"
              className="group relative px-10 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-110"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-full opacity-75 blur" />
              <div className="relative px-8 py-3 bg-gradient-to-r from-softnex-blue to-softnex-cyan rounded-full text-white font-bold text-base tracking-wide flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Comienza tu proyecto
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            <a
              href="#servicios"
              className="group relative px-10 py-4 rounded-full border-2 border-softnex-blue/30 hover:border-softnex-blue transition-all duration-300 hover:scale-105"
            >
              <span className="relative text-white font-semibold text-base tracking-wide flex items-center gap-2">
                Conoce nuestros servicios
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </a>
          </div>

          {/* STATS ARREGLADAS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '50+', label: 'Proyectos' },
              { value: '30+', label: 'Clientes' },
              { value: '5+', label: 'Años' },
              { value: '24/7', label: 'Soporte' },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-softnex-blue/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="relative glass-card p-8 rounded-2xl hover:scale-110 transition-all duration-300 border border-white/10">
                  <div className="text-4xl md:text-5xl font-black text-softnex-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 tracking-wider uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-softnex-blue rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-softnex-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 bg-softnex-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-softnex-blue via-softnex-cyan to-transparent" />
      </div>

      {/* Gradient transition to next section - organic blend */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-20" style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(249, 250, 251, 0.3) 40%, rgba(249, 250, 251, 0.7) 70%, rgb(249, 250, 251) 100%)'
      }} />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  )
}
