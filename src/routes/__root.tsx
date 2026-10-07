import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header/Header'

export const Route = createRootRoute({
  component: () => (
    <div className="app-root">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer component will go here in a later Phase */}
    </div>
  ),
})
