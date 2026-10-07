import { createFileRoute } from '@tanstack/react-router'
import { DeliveryPolicy } from '../components/DeliveryPolicy/DeliveryPolicy'

export const Route = createFileRoute('/delivery-policy')({
  component: DeliveryPolicyComponent,
})

function DeliveryPolicyComponent() {
  return (
    <div className="home-page">
      <DeliveryPolicy />
    </div>
  )
}
