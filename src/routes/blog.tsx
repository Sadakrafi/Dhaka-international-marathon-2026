import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon/ComingSoon'

export const Route = createFileRoute('/blog')({
  component: BlogComponent,
})

function BlogComponent() {
  return <ComingSoon pageName="Blog" />
}
