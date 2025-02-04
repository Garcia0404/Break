import { myEvents } from "../../../utils/myEvents"
import { motion } from "motion/react";
import { useState } from "react";
interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    price: number;
    category: string;
  }
}
const EventCard = ({ event }: EventCardProps) => {
  return (
    <article key={event.id} className="bg-[#18181B] text-white rounded-lg p-4 min-w-80">
      <img src={event.image} alt={`${event.title}-${event.date}`} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-bold my-2">{event.title}</h3>
      <div className="text-sm text-gray-400 flex items-center gap-1">
        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        <span className="font-light">{event.date} - {event.time}</span>
      </div>
      <div className="text-sm text-gray-400 flex items-center gap-1">
        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <span className="font-light overflow-hidden whitespace-nowrap overflow-ellipsis">{event.location}</span>
      </div>
        <p className="text-sm mt-2 overflow-hidden mb-1" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 4 }}>{event.description}</p>
      <span className="text-xs mt-2 bg-[rgba(168,85,247,0.2)] text-[#d8b4fe] px-2 py-1 rounded-lg w-max font-medium uppercase">{event.category}</span>
    </article>
  )
}
const BUTTONS_COLOR = "#fff"
export const MyEvents = () => {
  const [position, setPosition] = useState(0)
  return (
    <section
      className="text-black md:col-start-7 md:col-end-14 md:row-start-2 md:row-end-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between z-40"
        style={{ boxShadow: "inset 10px 0px 10px rgba(0,0,0,0.5)" }}>
        <button aria-label="evento anterior" onClick={() => setPosition(position + 330)} style={{ backgroundColor: BUTTONS_COLOR }} className="border opacity-20 hover:opacity-100 transition-opacity rounded-full p-2 m-2 cursor-pointer rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button aria-label="siguiente evento" onClick={() => setPosition(position - 330)} style={{ backgroundColor: BUTTONS_COLOR }} className="border opacity-20 hover:opacity-100 transition-opacity rounded-full p-2 m-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="absolute top-0 right-0 w-30 h-full z-30" style={{ background: "linear-gradient(to left, #010101,transparent" }}></div>
      <h2 className="text-4xl text-white font-bold mb-6">🎟️ Mis Eventos</h2>
      <motion.div animate={{ x: position }} className="flex gap-4">
        {myEvents.map((event, index) => (
          <EventCard key={`${event.id}-${index}`} event={event} />
        ))}
      </motion.div>
      <div className="hidden md:flex z-40 absolute bottom-0 left-0 w-full h-[0.5px] bg-[rgba(255,255,255,0.2)] -translate-5"></div>
    </section>
  )
}
