import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Div100vh from "react-div-100vh"

import Head from "./head"
import Header from "./header/header"
import Footer from "./footer"

const Home = () => {
  const { pathname } = useLocation()
  return (
    <Div100vh>
      <Head title={pathname} />
      <div
        id='viewport'
        className='w-full h-full font-mono'
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Home
