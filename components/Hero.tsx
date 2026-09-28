'use client'

import { useEffect, useRef, useState, memo } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import DashboardMockup from './graphics/DashboardMockup'

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const isVisibleRef = useRef(true)
  const [isMounted, setIsMounted] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  const words = ['TECNOLOGÍA', 'INNOVACIÓN', 'SOLUCIONES', 'SOFTWARE']

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Respetar preferencia de reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Dejar la primera palabra fija si el usuario prefiere menos movimiento
      return
    }

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isMounted) return

    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false })
    if (!ctx) return

    // Optimización: usar devicePixelRatio para pantallas de alta densidad
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Usar objeto mutable para dimensiones que se puede actualizar en resize
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const resizeCanvas = () => {
      dimensions.width = window.innerWidth
      dimensions.height = window.innerHeight
      canvas.width = dimensions.width * dpr
      canvas.height = dimensions.height * dpr
      canvas.style.width = `${dimensions.width}px`
      canvas.style.height = `${dimensions.height}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      depth: number // Para efecto de profundidad

      constructor() {
        this.x = Math.random() * dimensions.width
        this.y = Math.random() * dimensions.height
        this.vx = (Math.random() - 0.5) * (0.4 + Math.random() * 0.4) // Velocidad variable 0.4-0.8
        this.vy = (Math.random() - 0.5) * (0.4 + Math.random() * 0.4)
        this.depth = Math.random()
        this.size = 2 + this.depth * 2 // Nodos sutiles: 2-4px
        this.opacity = 0.3 + this.depth * 0.4 // Opacidad sutil: 0.3-0.7
      }

      update() {
        this.x += this.vx * (0.4 + this.depth * 0.2)
        this.y += this.vy * (0.4 + this.depth * 0.2)

        // Bounce usando dimensiones actuales
        if (this.x < 0 || this.x > dimensions.width) this.vx *= -1
        if (this.y < 0 || this.y > dimensions.height) this.vy *= -1

        // Mantener partículas dentro de los límites después de resize
        this.x = Math.max(0, Math.min(dimensions.width, this.x))
        this.y = Math.max(0, Math.min(dimensions.height, this.y))
      }

      draw() {
        if (!ctx) return

        // Glow sutil
        const glowGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2.5)
        glowGradient.addColorStop(0, `rgba(0, 212, 255, ${this.opacity * 0.2})`)
        glowGradient.addColorStop(1, 'rgba(0, 212, 255, 0)')
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2)
        ctx.fill()

        // Nodo minimalista
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity * 0.9})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Borde sutil
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    let particles: Particle[] = []

    const initParticles = () => {
      particles = []
      // Optimización: menos partículas en mobile y tablets
      const particleCount = dimensions.width < 640 ? 20 : dimensions.width < 1024 ? 30 : 50
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    initParticles()

    // Optimización: pre-calcular valores constantes
    const maxDistance = 180 // Aumentado para más conexiones visibles
    const maxDistanceSquared = maxDistance * maxDistance

    function animate() {
      if (!ctx || !canvas || !isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Efecto de mouse glow sutil (solo desktop)
      if (dimensions.width >= 1024) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 200
        )
        gradient.addColorStop(0, 'rgba(0, 168, 255, 0.15)')
        gradient.addColorStop(0.5, 'rgba(0, 168, 255, 0.05)')
        gradient.addColorStop(1, 'rgba(0, 168, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, dimensions.width, dimensions.height)
      }

      // Optimización: evitar nested loops cuando sea posible
      const len = particles.length
      for (let i = 0; i < len; i++) {
        const particle = particles[i]
        particle.update()
        particle.draw()

        // Líneas de conexión con gradiente
        for (let j = i + 1; j < len; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distSquared = dx * dx + dy * dy

          if (distSquared < maxDistanceSquared) {
            const dist = Math.sqrt(distSquared)
            const alpha = 0.5 * (1 - dist / maxDistance) * Math.min(particle.opacity, other.opacity)

            // Conexión destacada como red de nodos
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y)
            gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha * 1.1})`)
            gradient.addColorStop(0.5, `rgba(0, 168, 255, ${alpha * 1.3})`)
            gradient.addColorStop(1, `rgba(99, 102, 241, ${alpha})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.8
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Optimización: debounce del resize
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
        initParticles() // Reinicializar partículas con nuevas dimensiones
      }, 150)
    }

    // Optimización: pausar animación cuando no está visible
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden
    }

    // Seguimiento de mouse (solo desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (dimensions.width >= 1024) {
        mouseRef.current = { x: e.clientX, y: e.clientY }
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)
    if (dimensions.width >= 1024) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isMounted])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020408] via-[#0a0e1a] to-[#050b15]">
      {/* Canvas con partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      />

      {/* Grid animado principal */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 168, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 168, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
          willChange: 'transform'
        }}
      />

      {/* Grid secundario más sutil (parallax) */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          animation: 'gridMoveSlow 40s linear infinite',
          willChange: 'transform'
        }}
      />

      {/* Viñeta sutil en los bordes */}
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-transparent via-transparent to-softnex-dark/60" />

      {/* Mesh gradients modernos */}
      <div
        className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-softnex-blue/20 via-softnex-cyan/10 to-transparent rounded-full blur-[120px]"
        style={{ animation: 'float 15s ease-in-out infinite', willChange: 'transform' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-softnex-purple/15 via-softnex-pink/8 to-transparent rounded-full blur-[100px]"
        style={{ animation: 'float 12s ease-in-out infinite reverse', willChange: 'transform' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-softnex-cyan/10 via-softnex-blue/5 to-transparent rounded-full blur-[90px]"
        style={{ animation: 'float 18s ease-in-out infinite', willChange: 'transform', animationDelay: '5s' }}
      />

      {/* Capas de brillo dinámico */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-softnex-blue/5 to-transparent opacity-30"
        style={{ animation: 'pulse 8s ease-in-out infinite' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-softnex-dark/50 via-transparent to-softnex-dark/80" />

      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-36">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center text-center lg:text-left">
        <div>
          {/* Optimización: reducir blur en el badge */}
          <div className="inline-block mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-full opacity-50 group-hover:opacity-100 blur-sm transition duration-300" />
            <div className="relative px-8 py-3 glass-card rounded-full border border-softnex-blue/30">
              <p className="text-xs tracking-[0.3em] text-softnex-blue font-bold uppercase flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-softnex-blue rounded-full animate-pulse" />
                Soluciones para el futuro
                <span className="w-2 h-2 bg-softnex-cyan rounded-full animate-pulse" />
              </p>
            </div>
          </div>

          {/* TÍTULO - PALABRA DINÁMICA */}
          <h1 className="font-black mb-8 leading-tight">
            <span className="block text-white text-4xl md:text-6xl lg:text-7xl mb-2">Transformamos</span>
            <span className="block text-white text-4xl md:text-6xl lg:text-7xl mb-4">ideas en</span>
            <span
              className="block text-4xl md:text-6xl lg:text-7xl relative transition-all duration-500 ease-in-out"
              style={{
                color: '#00a8ff',
                letterSpacing: '0.02em'
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              {words[currentWord]}
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

          {/* Optimización: CTAs con blur reducido */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="#contacto"
              className="group relative px-10 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-[1.05]"
            >
              {/* Glow animado más pronunciado */}
              <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-full opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg group-hover:-inset-2 transition-all duration-300" />

              {/* Gradiente del botón con animación */}
              <div className="absolute inset-0 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-full"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 3s ease infinite'
                }}
              />

              {/* Brillo superior */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />

              {/* Contenido */}
              <div className="relative px-8 py-3 text-white font-bold text-base tracking-wide flex items-center gap-3">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all" />
                Comienza tu proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>

            <a
              href="#servicios"
              className="group text-white/80 hover:text-white font-semibold text-base transition-colors flex items-center gap-2"
            >
              Conoce nuestros servicios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Optimización: stats con blur reducido y transiciones más rápidas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto lg:mx-0 mb-16">
            {[
              { value: '50+', label: 'Proyectos' },
              { value: '30+', label: 'Clientes' },
              { value: '5+', label: 'Años' },
              { value: '24/7', label: 'Soporte' },
            ].map((stat, index) => (
              <div key={stat.label} className="group relative">
                <div className="absolute -inset-0.5 bg-softnex-blue/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300" />
                <div className="relative glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-200 border border-white/10">
                  <div className="text-3xl md:text-4xl font-black text-softnex-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70 tracking-wider uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Mockup de producto: refuerza la promesa con algo visual y tangible */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow" aria-hidden="true">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-softnex-blue rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-softnex-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 bg-softnex-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-softnex-blue via-softnex-cyan to-transparent" />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        @keyframes gridMoveSlow {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(120px) translateX(60px); }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}

export default memo(Hero)
