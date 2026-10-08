import path from 'node:path'
import express from 'express'

const isProd = process.argv.includes('--prod') || process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 3000

export async function createServer() {
  const app = express()
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

const app = await createServer()
app.listen(port, () => {
  console.info(`SSR server at http://localhost:${port}`)
})
