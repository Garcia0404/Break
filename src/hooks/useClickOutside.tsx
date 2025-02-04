import { useEffect } from "react"

interface useClickOutsideProps {
  ref:React.RefObject<HTMLElement>
  callback?:() => void
}
export const useClickOutside = ({ref,callback}:useClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if(ref.current && !ref.current.contains(event.target as Node)){
        if(callback) callback();
      }
    }
    document.addEventListener("mousedown",handleClickOutside)
    return () => document.removeEventListener("mousedown",handleClickOutside)
  },[])
}