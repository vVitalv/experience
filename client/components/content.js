import React, { useRef, useEffect, useState } from "react"

import ReactLogo from "./reactlogo"
import Hi from "./section1"
import H1 from "./h1"

const Content = () => {
  const s1 = useRef()
  const [s1Width, setS1Width] = useState(0)
  const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setS1Width(Math.round(entries[0].intersectionRatio * 100))
      console.log(s1Width)
    }
  }
  const observerOptions = {
    rootMargin: "50% 0px 0px 0px",
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    if (s1.current) observer.observe(s1.current)
    return () => {
      if (s1.current) observer.unobserve(s1.current)
    }
  }, [s1, observerOptions])

  return (
    <main className='flex flex-col items-center w-full min-h-fit px-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <ReactLogo />
      <div ref={s1} className='flex flex-col items-center w-full'>
        <H1 hText={`Greetings ${"\uD83D\uDC4B"}`} width={s1Width} />
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
