import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { NavLink } from "react-router"
const SvgBars = ({ isOpen }: { isOpen: boolean }) => {
  const [open, setOpen] = useState(isOpen)
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  return (
    <motion.svg initial="closed" animate={open ? "open" : "closed"} onClick={() => setOpen(!open)} className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
      <motion.path variants={{
        closed: { d: "M 2 2.5 L 20 2.5" },
        open: { d: "M 3 16.5 L 17 2.5" },
      }} strokeLinecap="round" strokeLinejoin="round" />
      <motion.path d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }} strokeLinecap="round" strokeLinejoin="round" />
      <motion.path variants={{
        closed: { d: "M 2 16.346 L 20 16.346" },
        open: { d: "M 3 2.5 L 17 16.346" },
      }} strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

interface NavItemsProps {
  navItems: {
    href: string
    label: string
  }[]
}
export const MobileMenu = ({ navItems }: NavItemsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden pt-2 z-50">
        <SvgBars isOpen={isOpen} />
      </div>
      <motion.div animate={{ display: isOpen ? "block" : "none" }} className="absolute top-0 right-0 w-80 min-h-screen overflow-x-hidden -z-20 lg:hidden">
        <motion.div initial="closed" animate={isOpen ? "open" : "closed"} variants={{
          closed: {
            x: 320, display: "none", transition: {
              duration: 0.3
            }
          },
          open: {
            x: 0, display: "block", transition: {
              duration: 0.6,
              ease: [0.45, 0, 0.55, 1]
            }
          }
        }} className="w-80 absolute top-0 right-0 bg-[#212121] min-h-screen z-40">
          <ul className="py-40 ps-16 grid gap-3">
            {
              navItems.map((item, index) => (
                <li key={index} className="grid text-2xl">
                  <NavLink to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-3xl w-min h-full">
                    <span className="z-10">{item.label}</span>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </motion.div>
      </motion.div>
    </>
  )
}