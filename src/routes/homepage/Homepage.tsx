import { Promotions } from "./components/Promotions"
import { Events } from "./components/Events"
import { Hour } from "./components/Hour"
import { RecommendedEvents } from "./components/RecommendedEvents"
import { MyEvents } from "./components/MyEvents"
import { motion } from "motion/react"
import { Tendencies } from "./components/Tendencies"
import { EventsSlider } from "./components/EventsSlider"

const VIEWPORT_HEIGHT = window.innerHeight
export const Homepage = () => {
  const MIN_HEIGHT = VIEWPORT_HEIGHT - 72
  return (
    <>
      <EventsSlider />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="flex flex-col md:grid md:grid-cols-13 md:grid-rows-4 sm:p-4 gap-4 mt-4"
        style={{ minHeight: MIN_HEIGHT }}>
        <RecommendedEvents />
        <Hour />
        <MyEvents />
        <Events />
        <Promotions />
        <Tendencies />
      </motion.div>
    </>
  )
}
