'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'contacto@softnex.com' },
    { icon: '📱', title: 'Teléfono', value: '+56 9 XXXX XXXX' },
    { icon: '📍', title: 'Ubicación', value: 'Santiago, Chile' },
  ]

  return (
    <section id="contacto" className="relative py-20 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-softnex-purple/5 to-softnex-pink/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-softnex-pink/5 border border-softnex-pink/20 rounded-full">
              <p className="text-xs tracking-[0.25em] text-softnex-pink font-bold">
                CONTACTO
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Hablemos de tu <span className="text-softnex-blue">proyecto</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cuéntanos tu idea y te ayudaremos a hacerla realidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h3 className="text-gray-900 font-bold text-base mb-1">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-5 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-medium">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-cyan focus:ring-2 focus:ring-softnex-cyan/20 transition-all"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-purple focus:ring-2 focus:ring-softnex-purple/20 transition-all"
                      placeholder="+56 9 XXXX XXXX"
                    />
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
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-softnex-blue focus:ring-2 focus:ring-softnex-blue/20 transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-gradient-to-r from-softnex-blue to-softnex-purple text-white rounded-lg font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-softnex-blue/30"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
