import React from "react"

import ReactLogo from "./reactlogo"
import Hi from "./section1"
import Opila from "./opila"

const Content = () => {
  return (
    <main className='absolute w-full h-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 overflow-y-scroll'>
      <article className='flex flex-col items-center w-full min-h-fit'>
        <ReactLogo />
        <div className='sticky top-[80vh] w-full h-4 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-200 opacity-40 shadow-md shadow-amber-200' />
        <Hi />
        <Opila />
        <section className='w-full h-screen'>section3</section>
        <section className='w-full h-screen'>section4</section>
        <section className='w-full h-screen'>section5</section>
      </article>
    </main>
  )
}

export default Content
