import { motion } from "motion/react"
import { myEvents } from "../../../utils/myEvents"
import { useState } from "react"
interface EventCardProps {
  title: string,
  image: string,
  date: string,
  location: string,
  category: string
}
const EventCard = ({ title, image, date, location, category }: EventCardProps) => {
  return (
    <article className="relative h-full w-80 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
      <img className="min-w-80 h-full object-cover" width='400px' height='100%' src={image} alt={`${title}-${date}`} />
      <div className="px-4 py-8 absolute top-0 left-0 w-full h-full flex flex-col text-white">
        <h3 className="font-bold text-2xl mb-6">{title}</h3>
        <div className="flex items-center gap-1">
          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <p className="overflow-hidden overflow-ellipsis">{location}</p>
        </div>
        <div className="mt-auto rounded-xl bg-[rgba(168,85,247,0.2)] text-[#d8b4fe] w-max px-3 font-medium uppercase text-sm">{category}</div>
      </div>
    </article>
  )
}
const Controls = ({ handlePrevious, handleNext, index }: { handlePrevious: () => void, handleNext: () => void, index: number }) => {
  const condition = index !==0
  return (
    <div className="absolute w-full h-full top-0 right-0 flex sm:items-center items-end justify-between px-4 z-10">
      <div className="absolute w-20 h-full top-0 left-0 min-sm:bg-gradient-to-r from-[#010101] to-transparent"></div>
      <motion.button initial={{visibility:"hidden"}} animate={{ opacity: condition ? 0.2 : 0,visibility:condition? "visible":"hidden" }} onClick={handlePrevious} aria-label="evento anterior" className="max-sm:text-white sm:bg-white rounded-full p-2 shadow-lg cursor-pointer transition-all z-20">
        <svg className="size-6 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>
      <button onClick={handleNext} aria-label="siguiente evento" className="max-sm:text-white sm:bg-white rounded-full p-2 shadow-lg cursor-pointer sm:opacity-30 transition-all">
        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}
export const EventsSlider = () => {
  const [sliderMultiplier, setSliderMultiplier] = useState(0)
  const length = myEvents.length
  const handleNext = () => {
    if (sliderMultiplier <= length - 2) setSliderMultiplier(sliderMultiplier + 1)
  }
  const handlePrevious = () => {
    if (sliderMultiplier > 0) setSliderMultiplier(sliderMultiplier - 1)
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative h-72">
      <div className="overflow-hidden h-72" style={{ mask: "linear-gradient(to right,#000 70%,transparent 100%)" }}>
        <motion.ul animate={{ x: -sliderMultiplier * 336 }} transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }} className="flex gap-4 h-72 sm:py-8 sm:px-8 pt-8" >
          {
            myEvents.map((event, _index) => (
              <li key={`${event.title}-${event.date}`}>
                <EventCard {...event} />
              </li>
            ))
          }
        </motion.ul>
      </div>
      <Controls handlePrevious={handlePrevious} handleNext={handleNext} index={sliderMultiplier}/>
    </motion.div>
  )
}
