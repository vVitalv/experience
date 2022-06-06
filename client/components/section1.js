import React from "react"
import Opila from "./opila"

const Hi = ({ scrollPosition }) => {
  // if (scrollPosition > window.screen.availHeight * 0.3) {
  //   const section1P1 = document.querySelector("#s1-p1")
  //   section1P1.classList.add("-translate-y-44")
  //   section1P1.classList.add("scale-150")
  // }
  // if (scrollPosition > window.screen.availHeight * 0.4) {
  //   const section1P2 = document.querySelector("#s1-p2")
  //   section1P2.classList.add("-translate-y-32")
  //   section1P2.classList.add("scale-150")
  // }
  const p1Show = scrollPosition > window.screen.availHeight * 0.3 ? '-translate-y-44 scale-150' : null
  const p2Show = scrollPosition > window.screen.availHeight * 0.4 ? '-translate-y-32 scale-150' : null
  return (
    <section className='flex flex-col justify-center items-center w-full h-screen text-center font-thin text-xs sm:text-base break-words'>
      <p id='s1-p1' className={`transition duration-1000 ${p1Show}`}>
        Hi there! My name is Vital
      </p>
      <br />
      <p id='s1-p2' className={`transition duration-1000 ${p2Show}`}>
        And this is my Experience Demo
      </p>
      <Opila scrollPosition={scrollPosition} />
    </section>
  )
}

export default Hi
