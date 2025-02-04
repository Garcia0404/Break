import { motion } from "motion/react"
import { nearbyEvents } from "../../../utils/nearbyEvents"
import { useWidthById } from "../../../hooks/useWidthById"
import { useEffect, useState } from "react"
const Card = ({ title, image }: { title: string, image: string }) => {
  return (
    <li className="min-w-full h-full relative">
      <article className="h-full w-full relative">
        <img width="800px" height="100%" src={image} alt={`event-${title}`} className="min-w-full h-full object-cover" />
        <motion.h3 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="absolute bottom-0 text-white z-30 my-3 mx-6 text-2xl font-medium">{title}</motion.h3>
      </article>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-full z-10"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ background: 'linear-gradient(transparent 100%, #000 100%)' }}
        animate={{ background: 'linear-gradient(transparent 50%, #000 100%)' }}
      ></motion.div>
    </li>
  )
}
export const Events = () => {
  const { width } = useWidthById("nearbyEvents")
  const [ind, setInd] = useState(0)
  const length = nearbyEvents.length
  useEffect(() => {
    const interval = setInterval(() => {
      setInd(i => {
        if (i === length - 1) return 0
        else return i + 1
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section id='nearbyEvents' className="max-md:my-8 h-[270px] bg-gradient-to-l to-gray-800 text-white overflow-hidden md:col-start-7 md:col-end-14 xl:col-end-12">
      <motion.ul className="flex h-full w-full"
        animate={{ x: -ind * width }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {
          nearbyEvents.map(event => (
            <Card key={`${event.title}-${event.date}`} title={event.title} image={event.image} />
          ))
        }
      </motion.ul>
    </section>
  )
} 
