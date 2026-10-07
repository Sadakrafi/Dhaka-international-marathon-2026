import { createFileRoute } from '@tanstack/react-router'
import { AboutEvents } from '../components/AboutEvents/AboutEvents'
import { UpcomingEvents } from '../components/UpcomingEvents/UpcomingEvents'
import { PastEvents } from '../components/PastEvents/PastEvents'

export const Route = createFileRoute('/events')({
  component: EventsComponent,
})

function EventsComponent() {
  return (
    <div className="home-page">
      <div style={{ paddingTop: '150px' }}>
        <UpcomingEvents />
        <PastEvents />
      </div>
    </div>
  )
}
