import { createFileRoute } from '@tanstack/react-router'
import { RefundPolicy } from '../components/RefundPolicy/RefundPolicy'

export const Route = createFileRoute('/refund-policy')({
  component: RefundPolicyComponent,
})

function RefundPolicyComponent() {
  return (
    <div className="home-page">
      <RefundPolicy />
    </div>
  )
}
