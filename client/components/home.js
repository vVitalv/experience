import React from "react"
import Div100vh from "react-div-100vh"

import Head from "./head"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

const Home = () => {
  return (
    <Div100vh>
      <Head title='Home' />
      <div id='viewport' className='flex flex-col w-full h-full font-mono font-semibold'>
        <Header />
        <Content />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Home
