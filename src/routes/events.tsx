import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon/ComingSoon'

export const Route = createFileRoute('/events')({
  component: EventsComponent,
})

function EventsComponent() {
  return <ComingSoon pageName="Events" />
}
