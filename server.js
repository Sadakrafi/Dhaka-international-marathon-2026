import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import { handleContactRequest } from './api/contact.js'

loadEnvFile()

const isProd = process.argv.includes('--prod') || process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 3000

export async function createServer() {
  const app = express()
  app.post('/api/contact', express.json({ limit: '32kb' }), async (req, res) => {
    try {
      const result = await handleContactRequest(req.body)
      res.status(result.status).json(result.payload)
    } catch {
      console.error('Contact form send failed')
      res.status(500).json({ error: "We couldn't send your message. Please try again." })
    }
  })
  app.use((error, req, res, next) => {
    if (error?.type === 'entity.parse.failed') {
      res.status(400).json({ error: 'Enter your name, email, subject, and message.' })
      return
    }
    next(error)
  })
  /** @type {import('vite').ViteDevServer | undefined} */
  let vite

  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root: process.cwd(),
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use(express.static(path.resolve('dist/client'), { index: false }))
  }

  app.use('/{*splat}', async (req, res) => {
    try {
      const url = req.originalUrl || req.url || '/'
      if (path.posix.extname(url.split('?')[0]) !== '') {
        res.status(404).end('Not found')
        return
      }

      const entry = isProd
        ? await import('./dist/server/entry-server.js')
        : await vite.ssrLoadModule('/src/entry-server.tsx')

      const host = req.headers.host || `localhost:${port}`
      const request = new Request(new URL(url, `http://${host}`), {
        method: req.method,
        headers: toHeaders(req.headers),
      })

      const response = await entry.render({ request })
      await sendResponse(res, response)
    } catch (error) {
      if (!isProd && vite) vite.ssrFixStacktrace(error)
      console.error(error)
      res.status(500).end(error instanceof Error ? error.stack : String(error))
    }
  })

  return app
}

function toHeaders(incoming) {
  const headers = new Headers()
  for (const [key, value] of Object.entries(incoming)) {
    if (Array.isArray(value)) headers.set(key, value.join(', '))
    else if (typeof value === 'string') headers.set(key, value)
  }
  return headers
}

async function sendResponse(res, response) {
  res.status(response.status)
  response.headers.forEach((value, name) => {
    res.setHeader(name, value)
  })
  res.end(await response.text())
}

function loadEnvFile() {
  const file = path.resolve('.env')
  if (!fs.existsSync(file)) return
  const text = fs.readFileSync(file, 'utf8')
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq <= 0) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = value
  }
}

const app = await createServer()
app.listen(port, () => {
  console.info(`SSR server at http://localhost:${port}`)
})
