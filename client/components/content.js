import React, { useState } from "react"

import ReactLogo from "./reactlogo"
import Hi from "./section1"
import Opila from "./opila"

const Content = () => {
  const [scrollPosition, setScroll] = useState(0)

  return (
    <main
      className='absolute w-full h-full overflow-y-scroll'
      onScroll={(e) => {
        setScroll(e.target.scrollTop)
      }}
    >
      <article className='flex flex-col items-center w-full min-h-fit bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
        <ReactLogo />
        <Hi scrollPosition={scrollPosition} />
        <Opila scrollPosition={scrollPosition} />
        <section className='w-full h-screen'>section3</section>
        <section className='w-full h-screen'>section4</section>
        <section className='w-full h-screen'>section5</section>
      </article>
    </main>
  )
}

export default Content
