import React, { useRef } from "react"

import useTextObserver from "../hooks/showtext"
import lighthouselogo from "../../assets/images/lighthouse.svg"

const Maccaroni = () => {
  const pStyle = "w-full p-2 transition duration-1000"
  const s2p1 = useRef()
  const s2p2 = useRef()
  const s2p3 = useRef()
  const refsArray = [s2p1, s2p2, s2p3]
  useTextObserver(refsArray)
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-min mt-14 text-center font-thin text-xs break-words sm:text-base'>
      <p ref={s2p1} className={pStyle}>
        <span className='text-amber-100 font-semibold'>
          &#39;Maccaroni&#39;
        </span>{" "}
        is my pet e-commerce
      </p>
      <p ref={s2p2} className={pStyle}>
        that implemented: responsive design, accessibility, JWT authorization,
        dark-mode, lazy-loading, SVG drawing, sorting/searching, logs, popups
      </p>
      <p ref={s2p3} className={pStyle}>
        Stack used:
      </p>
      <ul className='flex flex-col gap-4 text-left text-gray-300'>
        <li>
          - <span className='font-semibold text-amber-200'>backend</span> -
          Node.JS, Express.JS, JWT
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>data</span> -
          MongoDB, Mongoose
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>frontend</span> -
          React.JS, Redux
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>layout</span> -
          Tailwind CSS, JSX
        </li>
        <li>
          - <span className='font-semibold text-amber-200'>API</span> - REST
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
            window.open("https://maccaroni.herokuapp.com/", "_blank")
          }}
        >
          To app (Heroku)
        </button>
        <button
          type='button'
          className='w-36 p-2 bg-purple-600 rounded-md text-xs text-gray-200 hover:bg-purple-700 hover:text-amber-200 transition duration-200'
          onClick={() => {
            window.open("https://github.com/vVitalv/week14-ecommerce", "_blank")
          }}
        >
          To code (GitHub)
        </button>
      </div>
      <p className='text-gray-500 text-xs mb-4'>
        Note: The delay in loading the application on Heroku is due to the
        server going to sleep after an hour of inactivity
      </p>
    </section>
  )
}

export default Maccaroni
