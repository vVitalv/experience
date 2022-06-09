import React from "react"

import ReactLogo from "./reactlogo"
import Hi from "./section1"
import H1 from "./h1"

const Content = () => {
  return (
    <main className='flex flex-col items-center w-full min-h-fit px-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <ReactLogo />
      <div className='flex flex-col items-center w-full'>
        <H1 hText={`Greetings ${"\uD83D\uDC4B"}`} />
        <Hi />
      </div>
      <div className='flex flex-col items-center w-full'>
        <H1 hText={`Floodary ${"\uD83D\uDC4B"}`} />
        <section className='w-full h-screen'>section4</section>
      </div>
      <div className='flex flex-col items-center w-full'>
        <H1 hText={`Maccarony ${"\uD83D\uDC4B"}`} />
        <section className='w-full h-screen'>section5</section>
      </div>
    </main>
  )
}

export default Content
