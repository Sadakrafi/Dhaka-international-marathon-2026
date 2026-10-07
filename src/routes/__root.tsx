import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header/Header'
import { CTA } from '../components/CTA/CTA'
import { Footer } from '../components/Footer/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="app-root">
      <Header />
      <main>
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </div>
  ),
})
