import React, { useRef } from "react"

import useTextObserver from "./hooks/showtext"

const Hi = () => {
  const pStyle = "w-full p-2 transition duration-1000"
  const p1 = useRef()
  const p2 = useRef()
  const p3 = useRef()
  const p4 = useRef()
  const refsArray = [p1, p2, p3, p4]
  useTextObserver(refsArray)
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-screen text-center font-thin text-xs break-words sm:text-base'>
      <p ref={p1} className={pStyle}>
        Hi there! My name is Vital
      </p>
      <p ref={p2} className={pStyle}>
        And this is my Experience Demo
      </p>
      <p ref={p3} className={pStyle}>
        My current stack is:
      </p>
      <p ref={p4} className={pStyle}>
        vanilla js, node, react, express, mongodb, redux, socket.io, tailwind,
        html, css, sass
      </p>
    </section>
  )
}

export default Hi
