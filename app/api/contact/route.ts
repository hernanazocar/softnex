import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 3
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  )
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return false
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiados mensajes enviados. Por favor esperá un momento.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Verificar que existe la API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada')
      return NextResponse.json(
        { error: 'El servicio de email no está configurado. Por favor contacta al administrador.' },
        { status: 500 }
      )
    }

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Enviar email
    const data = await resend.emails.send({
      from: 'Softnex Landing <onboarding@resend.dev>',
      to: ['hernaneduardo.azocar@gmail.com'],
      subject: `Nuevo contacto desde Softnex: ${escapeHtml(name)}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone || 'No proporcionado')}</p>
        <p><strong>Servicio de interés:</strong> ${escapeHtml(service || 'No especificado')}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intenta nuevamente.' },
      { status: 500 }
    )
  }
}
