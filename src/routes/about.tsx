import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon/ComingSoon'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return <ComingSoon pageName="About us" />
}
