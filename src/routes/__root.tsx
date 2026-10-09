import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { Header } from '../components/Header/Header'
import { CTA } from '../components/CTA/CTA'
import { Footer } from '../components/Footer/Footer'

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Dhaka International Marathon 2026',
  startDate: '2026-02-08T00:00:00+06:00',
  location: {
    '@type': 'Place',
    name: 'Purbachal, Dhaka',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Bangladesh Army',
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        name: 'description',
        content:
          'Welcome to the official page of the Dhaka International Marathon 2026. Run for Unity. Run for Humanity.',
      },
      { title: 'Dhaka International Marathon 2026' },
      { property: 'og:title', content: 'Dhaka International Marathon 2026' },
      {
        property: 'og:description',
        content:
          'Join us in this extraordinary journey of endurance and achievement in Purbachal, Dhaka.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://dhaka-international-marathon-2026.vercel.app/social-banner.jpg',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ...(import.meta.env.PROD
        ? [{ rel: 'stylesheet', href: '/assets/styles.css' }]
        : []),
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(eventJsonLd),
      },
      ...(!import.meta.env.PROD
        ? [
            {
              type: 'module',
              children: `import RefreshRuntime from "/@react-refresh"
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true`,
            },
            {
              type: 'module',
              src: '/@vite/client',
            },
          ]
        : []),
      {
        type: 'module',
        src: import.meta.env.PROD ? '/assets/entry-client.js' : '/src/entry-client.tsx',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const showCta = pathname !== '/contact'

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="app-root">
          <Header />
          <main>
            <Outlet />
          </main>
          {showCta && <CTA />}
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
