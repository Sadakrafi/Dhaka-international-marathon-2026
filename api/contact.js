const RECIPIENT = 'rokykhan002030@gmail.com'
const FROM = 'Dhaka International Marathon <onboarding@resend.dev>'
const recentSends = new Map()

export async function handleContactRequest(body) {
  const fields = readFields(body)
  if (!fields.ok) return { status: 400, payload: { error: fields.error } }

  if (isDuplicate(fields.value)) {
    return { status: 429, payload: { error: 'This message was just sent. Please wait a moment before trying again.' } }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { status: 500, payload: { error: 'Email is not configured on the server.' } }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [RECIPIENT],
      reply_to: fields.value.email,
      subject: fields.value.subject,
      text: [
        `Name: ${fields.value.name}`,
        `Email: ${fields.value.email}`,
        '',
        fields.value.message,
      ].join('\n'),
    }),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok || !data?.id) {
    return { status: 502, payload: { error: resendErrorMessage(response.status, data) } }
  }

  rememberSend(fields.value)
  return { status: 200, payload: { ok: true } }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const result = await handleContactRequest(parseBody(req.body))
    res.status(result.status).json(result.payload)
  } catch {
    console.error('Contact form send failed')
    res.status(500).json({ error: "We couldn't send your message. Please try again." })
  }
}

function parseBody(body) {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body)
    } catch {
      return null
    }
  }
  return body
}

function readFields(body) {
  const name = cleanLine(body?.name, 200)
  const email = cleanLine(body?.email, 200)
  const subject = cleanLine(body?.subject, 200)
  const message = cleanMessage(body?.message, 5000)
  if (!name || !email || !subject || !message) {
    return { ok: false, error: 'Enter your name, email, subject, and message.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Enter a valid email address.' }
  }
  return { ok: true, value: { name, email, subject, message } }
}

function cleanLine(value, max) {
  if (typeof value !== 'string') return ''
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max)
}

function cleanMessage(value, max) {
  if (typeof value !== 'string') return ''
  return value.replace(/\r\n/g, '\n').trim().slice(0, max)
}

function isDuplicate(fields) {
  const key = `${fields.email}\n${fields.subject}\n${fields.message}`
  const sentAt = recentSends.get(key)
  return typeof sentAt === 'number' && Date.now() - sentAt < 20000
}

function rememberSend(fields) {
  const key = `${fields.email}\n${fields.subject}\n${fields.message}`
  recentSends.set(key, Date.now())
  if (recentSends.size > 100) {
    const oldest = recentSends.keys().next().value
    recentSends.delete(oldest)
  }
}

function resendErrorMessage(status, data) {
  const message = typeof data?.message === 'string' ? data.message : ''
  if (status === 403 && message.toLowerCase().includes('testing emails')) {
    return 'Resend can only deliver test mail to the Gmail address on the Resend account. Verify a domain at resend.com/domains to deliver messages to the marathon inbox.'
  }
  if (status === 401 || status === 403) {
    return 'The email service rejected the request. Check the server API key.'
  }
  return "We couldn't send your message. Please try again."
}
