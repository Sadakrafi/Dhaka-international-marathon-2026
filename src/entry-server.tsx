import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory, RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export async function render(url: string) {
  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  })

  const router = createRouter({
    routeTree,
    history: memoryHistory,
  })

  // Wait for router to resolve current route
  await router.load()

  const html = renderToString(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )

  return html
}
