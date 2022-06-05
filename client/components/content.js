import React, { useState } from "react"

import ReactLogo from "./reactlogo"
import Hi from "./section1"

const Content = () => {
  const [scrollPosition, setScroll] = useState(0)
  if (scrollPosition > window.screen.availHeight / 2) {
    const section1P = document.querySelector("#section1-p")
    section1P.classList.add("-translate-y-60")
    section1P.classList.add("scale-150")
  }
  return (
    <main
      className='absolute w-full h-full overflow-y-scroll'
      onScroll={(e) => {
        setScroll(e.target.scrollTop)
      }}
    >
      <article className='flex flex-col w-full min-h-fit bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
        <section className='flex justify-center items-center w-full h-screen '>
          <ReactLogo />
        </section>
        <section
          id='section1'
          className='flex justify-center items-center w-full h-screen'
        >
          <Hi />
        </section>
        <section className='w-full h-screen'>section3</section>
        <section className='w-full h-screen'>section4</section>
        <section className='w-full h-screen'>section5</section>
      </article>
    </main>
  )
}

export default Content
