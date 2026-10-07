import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon/ComingSoon'

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
})

function ContactComponent() {
  return <ComingSoon pageName="Contact us" />
}
