import { createFileRoute } from '@tanstack/react-router'
import { Blog } from '../components/Blog/Blog'

export const Route = createFileRoute('/blog')({
  component: BlogComponent,
})

function BlogComponent() {
  return (
    <div className="home-page">
      <div style={{ paddingTop: '150px' }}>
        <Blog />
      </div>
    </div>
  )
}
