'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, MessageCircle, User, MessageSquare } from 'lucide-react'

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
    { icon: Mail, title: 'Email', value: 'contacto@softnex.com' },
    { icon: Phone, title: 'Teléfono', value: '+56 9 XXXX XXXX' },
    { icon: MapPin, title: 'Ubicación', value: 'Santiago, Chile' },
  ]

  return (
    <section id="contacto" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-softnex-purple/5 to-softnex-pink/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-softnex-pink/5 border border-softnex-pink/20 rounded-full">
              <p className="text-xs tracking-[0.25em] text-softnex-pink font-bold flex items-center justify-center gap-2">
                <MessageCircle className="w-3.5 h-3.5" />
                CONTACTO
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Hablemos de tu <span className="text-softnex-blue">proyecto</span>
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
              className="space-y-4"
            >
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.title}
                    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-softnex-blue/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-softnex-blue" strokeWidth={2} />
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-1">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                )
              })}
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
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
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-5 border border-gray-100">
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
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-cyan focus:ring-2 focus:ring-softnex-cyan/20 transition-all"
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
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-purple focus:ring-2 focus:ring-softnex-purple/20 transition-all"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-softnex-pink focus:ring-2 focus:ring-softnex-pink/20 transition-all"
                      >
                        <option value="">Selecciona...</option>
                        <option value="web">Desarrollo Web</option>
                        <option value="mobile">Apps Móviles</option>
                        <option value="custom">Software a Medida</option>
                        <option value="erp">Sistema ERP</option>
                        <option value="automation">Automatización</option>
                        <option value="ai">Agentes IA</option>
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
                    className="group relative w-full px-8 py-4 overflow-hidden rounded-xl font-bold text-lg tracking-wide transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {/* Glow animado de fondo */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple rounded-xl opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />

                    {/* Gradiente del botón con animación */}
                    <div className="absolute inset-0 bg-gradient-to-r from-softnex-blue via-softnex-cyan to-softnex-purple opacity-100 group-hover:opacity-90 transition-opacity"
                      style={{
                        backgroundSize: '200% 100%',
                        animation: 'gradientShift 3s ease infinite'
                      }}
                    />

                    {/* Brillo superior */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                    {/* Contenido */}
                    <span className="relative flex items-center gap-3 text-white">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all" />
                          Enviar mensaje
                          <Sparkles className="w-5 h-5 group-hover:-rotate-12 group-hover:scale-110 transition-all" />
                        </>
                      )}
                    </span>
                  </button>

                  <style jsx>{`
                    @keyframes gradientShift {
                      0%, 100% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                    }
                  `}</style>

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
