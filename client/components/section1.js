import React, { useLayoutEffect, useRef } from "react"

function Hi() {
  const ref = useRef()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle("text-yellow-200")
        }
      })
    },
    { rootMargin: "0px 0px -80px 0px", threshold: 0.5 }
  )
  useLayoutEffect(() => {
    observer.observe(ref.current)
  })

  return (
    <section className='flex flex-col justify-center items-center w-full h-80 text-center font-thin text-xs sm:text-base break-words'>
      <p ref={ref} className='transition duration-1000'>
        Hi there! My name is Vital
      </p>
      <br />
      <p id='s1-p2' className='transition duration-1000'>
        And this is my Experience Demo
      </p>
    </section>
  )
}

export default Hi
