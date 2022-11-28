import React, { useRef } from "react"

import useTextObserver from "../hooks/showtext"
import lighthouselogo from "../../assets/images/lighthouse.svg"

const ExpDemo = () => {
  const pStyle = "w-full p-2 transition duration-1000"
  const s2p1 = useRef()
  const s2p2 = useRef()
  const s2p3 = useRef()
  const refsArray = [s2p1, s2p2, s2p3]
  useTextObserver(refsArray)
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-min mt-14 text-center font-thin text-xs break-words sm:text-base'>
      <p ref={s2p1} className={pStyle}>
        And <strong>THIS</strong> is my{" "}
        <span className='text-amber-100 font-semibold'>
          &#39;Experience Demo&#39;
        </span>
      </p>
      <p ref={s2p2} className={pStyle}>
        that implemented: responsive design, accessibility, SVG drawing, scroll
        observing, dark-mode
      </p>
      <p ref={s2p3} className={pStyle}>
        Stack used:
      </p>
      <ul className='flex flex-col gap-4 text-left text-gray-300'>
        <li>
          - <span className='font-semibold text-amber-200'>backend</span> -
          Node.JS, Express.JS
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>frontend</span> -
          React.JS
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>layout</span> -
          Tailwind CSS, JSX
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>scroll observe</span>{" "}
          - IntersectionObserver API
        </li>
      </ul>
      <div className='flex items-center my-6 text-gray-300'>
        <img
          src={lighthouselogo}
          className='w-12 h-12 mx-4'
          alt='Lighthouse logo'
        />
        <p>
          Lighthouse <span className='text-green-500'>[94, 100, 100, 100]</span>
        </p>
      </div>
      <div className='flex w-full justify-around mx-4 my-6'>
        <button
          type='button'
          className='w-36 p-2 bg-purple-600 rounded-md text-xs text-gray-200 hover:bg-purple-700 hover:text-amber-200 transition duration-200'
          onClick={() => {
            window.open("https://experience.onrender.com/", "_blank")
          }}
        >
          To app (Render)
        </button>
        <button
          type='button'
          className='w-36 p-2 bg-purple-600 rounded-md text-xs text-gray-200 hover:bg-purple-700 hover:text-amber-200 transition duration-200'
          onClick={() => {
            window.open("https://github.com/vVitalv/experience/", "_blank")
          }}
        >
          To code (GitHub)
        </button>
      </div>
      <p className='text-gray-300 dark:text-gray-500 text-xs mb-16'>
        Note: The delay in loading the application on Render.com is due to the
        server going to sleep after an hour of inactivity
      </p>
    </section>
  )
}

export default ExpDemo
