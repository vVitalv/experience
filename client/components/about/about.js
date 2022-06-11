import React from "react"
import Div100vh from "react-div-100vh"

import Head from "../head"
import Header from "../header"
import AboutContent from "./aboutcontent"
import Footer from "../footer"

const About = () => {
  return (
    <Div100vh>
      <Head title='About' />
      <div
        id='viewport'
        className='flex flex-col w-full h-full font-mono font-semibold'
      >
        <Header />
        <AboutContent />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default About
