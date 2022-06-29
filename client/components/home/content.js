import React, { useRef } from "react"

import useProgressObserver from "../hooks/progress"
import ReactLogo from "./reactlogo"
import H1 from "./h1"
import Hi from "../section1/greetings"
import Floodary from "../section2/floodary"
import Maccaroni from "../section3/maccaroni"
import ExpDemo from "../section4/expdemo"

const Content = () => {
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s4 = useRef()
  const s1Width = useProgressObserver(s1)
  const s2Width = useProgressObserver(s2)
  const s3Width = useProgressObserver(s3)
  const s4Width = useProgressObserver(s4)
  return (
    <main className='flex flex-col items-center w-full h-fit px-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <ReactLogo />
      <div ref={s1} className='flex flex-col items-center w-full'>
        <H1 hText={`Greetings ${"\uD83D\uDC4B"}`} width={s1Width} />
        <Hi />
      </div>
      <div ref={s2} className='flex flex-col items-center w-full'>
        <H1 hText={`Floodary ${"\uD83D\uDC44"}`} width={s2Width} />
        <Floodary />
      </div>
      <div ref={s3} className='flex flex-col items-center w-full'>
        <H1 hText={`Maccarony ${"\uD83C\uDF5C"}`} width={s3Width} />
        <Maccaroni />
      </div>
      <div ref={s4} className='flex flex-col items-center w-full'>
        <H1 hText={`Experience Demo ${"\uD83C\uDF1F"}`} width={s4Width} />
        <ExpDemo />
      </div>
    </main>
  )
}

export default Content
