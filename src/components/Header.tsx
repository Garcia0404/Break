import { NavLink, useLocation } from "react-router";
import { Logo } from "./Logo"
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SvgLocation } from "./ui/SvgLocation";
import { SvgSearch } from "./ui/SvgSearch";
import { districts } from "../utils/districts";
import { MobileMenu } from "./ui/MobileMenu";
import { useClickOutside } from "../hooks/useClickOutside";
interface NavLinkProps {
  href: string;
  children: string;
  index: number
}
const navItemWidth = 144
const navItemHeight = 60
const navColor = '#18181B'
const navActiveColor = 'gray'
const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/favoritos', label: 'Favoritos' },
  { href: '/sugerencias', label: 'Sugerencias' }
]
const Link: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className="grid place-content-center z-30"
      style={{ width: navItemWidth, height: navItemHeight }}>
      <NavLink to={href}
        className="rounded-3xl w-full h-full"
        style={{ padding: navItemHeight / 4 }}>
        <span className="z-10">{children}</span>
      </NavLink>
    </li>
  )
}
const Navbar = () => {
  const location = useLocation()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const i = navItems.findIndex(item => item.href === location.pathname)
    if (i >= 0) setIndex(i)
  }, [location])
  return (
    <nav className="lg:flex hidden">
      <div className="rounded-3xl relative"
        style={{ backgroundColor: navColor }}>
        <motion.div
          animate={{ x: navItemWidth * index }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ width: navItemWidth, backgroundColor: navActiveColor, opacity: 0.3 }}
          className="absolute rounded-3xl top-0 left-0 h-full z-0"></motion.div>
        <ul className="flex">
          {
            navItems.map((item, index) => (
              <Link key={index} href={item.href} index={index}>{item.label}</Link>))
          }
        </ul>
      </div>
    </nav>
  )
}

const Search = () => {
  const [selectLocation, setSelectLocation] = useState("Centro de Lima")
  const [isOpenLocation, setIsOpenLocation] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const refLocation = useRef(null)
  const refSearch = useRef(null)
  useClickOutside({ ref: refLocation, callback: () => setIsOpenLocation(false) })
  useClickOutside({ ref: refSearch, callback: () => setIsOpenSearch(false) })
  useEffect(() => {
    //Enviar al backend la ubicación
    console.log(selectLocation)
  }, [selectLocation])
  useEffect(() => {
    console.log(open)
  }, [])
  return (
    <div className="flex-grow basis-0 justify-end lg:flex gap-2 hidden">
      <div className="relative" ref={refLocation}>
        <button onClick={() => setIsOpenLocation(!isOpenLocation)} aria-label="Seleccionar ubicación" className="p-3 rounded-full cursor-pointer" style={{ backgroundColor: navColor }}>
          <SvgLocation />
        </button>
        <motion.ul
          initial="closed"
          animate={isOpenLocation ? "open" : "closed"}
          variants={{
            closed: {
              opacity: 0,
              scale: 0.8,
              display: "none",
              transition: { duration: 0.1 }
            },
            open: {
              opacity: 1,
              scale: 1,
              display: "block"
            }
          }}
          className="origin-top-right absolute right-0 top-full bg-[#18181B] p-2 mt-3 rounded-lg">
          {
            districts.map((district, index) => (
              <motion.li key={index} onClick={() => { setSelectLocation(district); setIsOpenLocation(false) }} className="hover:bg-[#373739] py-2 px-6 rounded-lg cursor-pointer">{district}</motion.li>
            ))
          }
        </motion.ul>
      </div>
      <motion.div ref={refSearch} className="flex relative justify-end rounded-full overflow-hidden" animate={{ width: isOpenSearch ? 260 : "auto" }}>
        <motion.form animate={{ x: isOpenSearch ? 0 : 25 }} className="flex h-full w-full absolute -left-6 rounded-s-3xl top-0 bg-[#18181B]">
          <input type="text" className="ps-12 outline-0" placeholder="Buscar evento ..." />
        </motion.form>
        <button aria-label="Buscar lugar" onClick={() => setIsOpenSearch(!isOpenSearch)} className="p-3 rounded-full cursor-pointer z-20" style={{ backgroundColor: navColor }}>
          <SvgSearch />
        </button>
      </motion.div>
    </div>
  )
}
export const Header = () => {
  return (
    <header className="flex sticky top-0 left-0 z-50 bg-[rgba(1,1,1,0.7)] backdrop-blur-md text-white justify-between items-center p-4 whitespace-nowrap gap-2">
      <Logo width="25" height="100%" fill="white" className="flex-grow basis-0" />
      <Navbar />
      <Search />
      <MobileMenu navItems={navItems} />
    </header>
  )
}
