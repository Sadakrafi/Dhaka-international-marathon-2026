import { createFileRoute } from '@tanstack/react-router'
import { ContactUs } from '../components/ContactUs/ContactUs'

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
})

function ContactComponent() {
  return (
    <div className="home-page">
      <div style={{ paddingTop: '150px' }}>
        <ContactUs />
      </div>
    </div>
  )
}
