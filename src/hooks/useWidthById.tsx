import { useEffect,useState } from "react"

export const useWidthById = (id:string) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const getWidth = () => {
      const WIDTH = document.getElementById(id)?.offsetWidth
      if (WIDTH) setWidth(WIDTH)
    }
    getWidth()
    window.addEventListener('resize', getWidth)
    return () => window.removeEventListener('resize', getWidth)
  },[])
  return {
    width
  }
}
