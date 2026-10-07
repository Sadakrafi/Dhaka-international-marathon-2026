import { createFileRoute } from '@tanstack/react-router'
import { AboutUs } from '../components/AboutUs/AboutUs'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="home-page">
      <div style={{ paddingTop: '150px' }}>
        <AboutUs />
      </div>
    </div>
  )
}
