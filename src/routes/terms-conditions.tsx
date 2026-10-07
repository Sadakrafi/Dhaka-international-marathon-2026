import { createFileRoute } from '@tanstack/react-router'
import { TermsConditions } from '../components/TermsConditions/TermsConditions'

export const Route = createFileRoute('/terms-conditions')({
  component: TermsConditionsComponent,
})

function TermsConditionsComponent() {
  return (
    <div className="home-page">
      <TermsConditions />
    </div>
  )
}
