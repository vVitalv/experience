import React from "react"
import Div100vh from "react-div-100vh"

import Head from "./head"
import Header from "./header"
import Content from "./content"

const Home = () => {
  return (
    <Div100vh>
      <Head title='Home' />
      <div id='viewport' className='relative flex flex-col w-full h-full font-mono font-semibold text-gray-200'>
        <Header />
        <Content />
      </div>
    </Div100vh>
  )
}

export default Home
