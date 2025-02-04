import React from 'react'
import { Link } from 'react-router'
interface LogoProps extends SvgProps {
  className?: string
}
interface SvgProps {
  width?: string
  height?: string
  fill?: string
  stroke?:string
}
const Svg:React.FC<LogoProps> = ({...props}) => {
  return(
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 110">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 35L0 43.6603V52.4833V57.5167V66.3397L15 75L0 83.6603V97.5167C0 106.754 10 112.528 18 107.909L57 85.3923C65 80.7735 65 69.2265 57 64.6077L40.359 55L57 45.3923C65 40.7735 65 29.2265 57 24.6077L18 2.09104C10 -2.52777 0 3.24573 0 12.4833V26.3397L15 35Z" />
    </svg>
  )
}
export const Logo:React.FC<LogoProps> = ({...props}) => {
  return (
    <Link to={"/"} className={props.className}>
      <Svg {...props}/>
    </Link>
  )
}
