'use client'

import { useState } from 'react'
import RevealWords from './fx/RevealWords'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, User, MessageSquare, ArrowUpRight, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el mensaje')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'hola@softnex.cl', href: 'mailto:hola@softnex.cl' },
    { icon: Phone, title: 'Teléfono', value: '+56 9 XXXX XXXX', href: null },
    { icon: MapPin, title: 'Ubicación', value: 'Santiago, Chile', href: null },
  ]

  const perks = ['Consultoría inicial sin costo', 'Propuesta concreta y sin compromiso']

  return (
    <section id="contacto" className="relative pt-16 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-softnex-blue/10 rounded-full blur-[120px] drift" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-softnex-blue/10 border border-softnex-blue/25">
              <span className="w-1.5 h-1.5 rounded-full bg-softnex-blue shadow-[0_0_8px_#00a8ff]" />
              <p className="text-xs tracking-[0.25em] text-softnex-blue font-bold">
                CONTACTO
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              <RevealWords text="Hablemos de tu" />{' '}<RevealWords text="proyecto" className="text-softnex-blue" delay={0.24} />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contanos tu idea y te respondemos con una propuesta concreta, no un genérico
              &ldquo;te contactamos pronto&rdquo;.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="h-full order-2 lg:order-1"
            >
              <div className="relative h-full flex flex-col rounded-2xl bg-softnex-dark p-7 md:p-8 overflow-hidden shadow-xl shadow-softnex-dark/20">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-softnex-blue/25 rounded-full blur-3xl" />
                <svg viewBox="0 0 100 100" className="absolute -bottom-6 -right-6 w-40 h-40 opacity-[0.07]" aria-hidden="true">
                  <polygon points="6,4 30,4 94,96 70,96" fill="#00a8ff" />
                  <polygon points="70,4 94,4 30,96 6,96" fill="#00a8ff" />
                </svg>

                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-white mb-1">Información de contacto</h3>
                  <p className="text-sm text-white/50 mb-7">Elige el canal que prefieras.</p>

                  <div className="space-y-2">
                    {contactInfo.map((info) => {
                      const Icon = info.icon
                      const content = (
                        <>
                          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-softnex-blue/15 border border-softnex-blue/30 flex items-center justify-center group-hover:bg-softnex-blue transition-colors duration-300">
                            <Icon className="w-5 h-5 text-softnex-blue group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{info.title}</p>
                            <p className="text-sm font-semibold text-white truncate">{info.value}</p>
                          </div>
                          {info.href && (
                            <ArrowUpRight className="w-4 h-4 text-softnex-blue opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          )}
                        </>
                      )
                      const cls = 'group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors duration-300'
                      return info.href ? (
                        <a key={info.title} href={info.href} className={cls}>
                          {content}
                        </a>
                      ) : (
                        <div key={info.title} className={cls}>
                          {content}
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="border-t border-white/10 pt-6 space-y-3">
                      {perks.map((perk) => (
                        <div key={perk} className="flex items-center gap-2.5 text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-softnex-blue flex-shrink-0" strokeWidth={2.2} />
                          {perk}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 h-full order-1 lg:order-2"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 min-h-[320px]">
                  <CheckCircle2 className="w-14 h-14 text-softnex-blue mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-600 text-sm max-w-sm">
                    Gracias por escribirnos. Vamos a revisar tu mensaje y te contactamos a la
                    brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full bg-white p-7 md:p-8 rounded-2xl shadow-xl space-y-5 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-medium">
                        Nombre completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all"
                          placeholder="Juan Pérez"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all"
                          placeholder="juan@empresa.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm font-medium">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all"
                          placeholder="+56 9 XXXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2 text-sm font-medium">
                        Servicio de interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all"
                      >
                        <option value="">Selecciona...</option>
                        <option value="software">Software a Medida</option>
                        <option value="erp">Sistemas de Gestión y ERP</option>
                        <option value="automation">Automatización e Integraciones</option>
                        <option value="ai">Agentes IA</option>
                        <option value="web">Desarrollo Web</option>
                        <option value="mobile">Apps Móviles</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 text-sm font-medium">
                      Mensaje
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-softnex-blue text-white font-bold text-base shadow-lg shadow-softnex-blue/30 hover:shadow-softnex-blue/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                  {/* Success message */}
                  {isSubmitted && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-semibold">¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
                    </div>
                  )}

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">
                      <span className="text-lg flex-shrink-0">⚠️</span>
                      <p className="text-sm font-semibold">{error}</p>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
