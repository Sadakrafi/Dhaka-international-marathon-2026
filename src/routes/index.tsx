import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero/Hero'
import { BannerSlider } from '../components/BannerSlider/BannerSlider'
import { UpcomingEvents } from '../components/UpcomingEvents/UpcomingEvents'
import { AboutEvents } from '../components/AboutEvents/AboutEvents'
import { PastEvents } from '../components/PastEvents/PastEvents'
import { ManageTickets } from '../components/ManageTickets/ManageTickets'
import { FAQ } from '../components/FAQ/FAQ'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="home-page">
      <Hero />
      <BannerSlider />
      <UpcomingEvents />
      <AboutEvents />
      <PastEvents />
      <ManageTickets />
      <FAQ />
    </div>
  )
}
