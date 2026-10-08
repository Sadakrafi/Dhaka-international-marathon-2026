import { render } from '../dist/server/entry-server.js'

export default async function handler(req, res) {
  try {
    const host = req.headers.host || 'localhost'
    const proto = headerValue(req.headers['x-forwarded-proto']) || 'https'
    const request = new Request(new URL(requestPath(req), `${proto}://${host}`), {
      method: req.method,
      headers: toHeaders(req.headers),
    })
    const response = await render({ request })
    res.status(response.status)
    response.headers.forEach((value, name) => {
      res.setHeader(name, value)
    })
    res.end(await response.text())
  } catch (error) {
    console.error(error)
    res.status(500).end(error instanceof Error ? error.stack : String(error))
  }
}

function requestPath(req) {
  if (req.query && Object.prototype.hasOwnProperty.call(req.query, 'pathname')) {
    return toPathname(req.query.pathname)
  }

  const original = headerValue(req.headers['x-vercel-original-url'])
    || headerValue(req.headers['x-invoke-path'])
    || headerValue(req.headers['x-forwarded-uri'])
  if (original) {
    try {
      const parsed = original.startsWith('http') ? new URL(original) : new URL(original, 'http://localhost')
      return `${parsed.pathname}${parsed.search}`
    } catch {
      return original.startsWith('/') ? original : `/${original}`
    }
  }

  const url = req.url || '/'
  if (url.startsWith('/api/ssr')) return '/'
  return url
}

function toPathname(value) {
  if (value == null || value === '') return '/'
  const raw = Array.isArray(value) ? value.join('/') : String(value)
  if (!raw) return '/'
  const decoded = decodeURIComponent(raw)
  return decoded.startsWith('/') ? decoded : `/${decoded}`
}

function headerValue(value) {
  if (Array.isArray(value)) return value[0]
  return typeof value === 'string' ? value : ''
}

function toHeaders(incoming) {
  const headers = new Headers()
  for (const [key, value] of Object.entries(incoming)) {
    if (Array.isArray(value)) headers.set(key, value.join(', '))
    else if (typeof value === 'string') headers.set(key, value)
  }
  return headers
}
