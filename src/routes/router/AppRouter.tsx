import { Route, Routes } from "react-router"
import { Homepage } from "../homepage/Homepage"
import { Header } from "../../components/Header"
// import { MouseEffect } from "../../components/MouseEffect"

export const AppRouter = () => {
  return (
    <>
      {/* <MouseEffect/> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rock" element={<div>rock</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  )
}
