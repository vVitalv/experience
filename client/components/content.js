import React, { useRef } from "react"

import ReactLogo from "./reactlogo"
import Hi from "./section1"
import H1 from "./h1"
import useProgressObserver from "./hooks/progress"

const Content = () => {
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s1Width = useProgressObserver(s1)
  const s2Width = useProgressObserver(s2)
  const s3Width = useProgressObserver(s3)
  return (
    <main className='flex flex-col items-center w-full min-h-fit px-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <ReactLogo />
      <div ref={s1} className='flex flex-col items-center w-full'>
        <H1 hText={`Greetings ${"\uD83D\uDC4B"}`} width={s1Width} />
        <Hi />
      </div>
      <div ref={s2} className='flex flex-col items-center w-full'>
        <H1 hText={`Floodary ${"\uD83D\uDC4B"}`} width={s2Width} />
        <section className='w-full h-screen'>section4</section>
      </div>
      <div ref={s3} className='flex flex-col items-center w-full'>
        <H1 hText={`Maccarony ${"\uD83D\uDC4B"}`} width={s3Width} />
        <section className='w-full h-screen'>section5</section>
      </div>
    </main>
  )
}

export default Content
