import { AttendeesSvg } from "../../../components/ui/AttendeesSvg"
import { CalendarSvg } from "../../../components/ui/CalendarSvg"
import { recommendedEvents } from "../../../utils/recommendedEvents"

const Card = ({ title, date, attendees, image }: { title: string, date: string, attendees: number, image: string }) => {
  return (
    <li className="min-w-full h-full relative">
      <article className="h-full w-full">
        <img src={image} alt={`${title}-${date}`} className="min-w-full min-h-[550px] h-full object-cover z-10 group-hover/item:scale-150" />
        <div className="absolute top-[50%] px-10 left-0 z-40 ">
          <h2 className="z-50 text-white text-5xl font-bold">{title}</h2>
          <div className="flex gap-4 my-6">
            <div className="flex items-center gap-1 bg-[rgba(234,179,8,0.2)] text-[#fde047] px-3 rounded-xl">
              <CalendarSvg size="4"/>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1 bg-[rgba(168,85,247,0.2)] text-[#d8b4fe] px-3 rounded-xl">
              <AttendeesSvg size="4"/>
              <span>{attendees} asistentes</span>
            </div>
          </div>
          <button className="bg-[#EAB308] text-black px-8 py-2 rounded-lg cursor-pointer">Asistiré</button>
        </div>
      </article>
    </li>
  )
}
export const RecommendedEvents = () => {
  return (
    <section className="relative text-white bg-[#18181B] md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-3 overflow-hidden">
      <div className="z-40 absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] group/item"></div>
      <h2 className="absolute top-0 left-0 text-4xl font-bold p-8 z-40">⭐ Eventos Recomendados</h2>
      <ul className="flex overflow-hidden h-full w-full">
        {
          recommendedEvents.map(event => (
            <Card key={`${event.title}-${event.date}`} {...event} />
          ))
        }
      </ul>
    </section>
  )
}
