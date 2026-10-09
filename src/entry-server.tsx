import './index.css'
import { StrictMode } from 'react'
import {
  RouterServer,
  createRequestHandler,
  renderRouterToString,
} from '@tanstack/react-router/ssr/server'
import { createRouter } from './router'

export async function render({ request }: { request: Request }) {
  const handler = createRequestHandler({
    request,
    createRouter,
  })

  const response = await handler(({ responseHeaders, router }) =>
    renderRouterToString({
      responseHeaders,
      router,
      children: (
        <StrictMode>
          <RouterServer router={router} />
        </StrictMode>
      ),
    }),
  )

  const html = await response.text()
  const body = /<!doctype html>/i.test(html) ? html : `<!DOCTYPE html>${html}`
  const headers = new Headers(response.headers)
  headers.delete('content-length')
  headers.set('content-type', 'text/html; charset=utf-8')

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}
