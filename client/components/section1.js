import React, { useRef } from "react"

import useTextObserver from "./hooks/showtext"
import jslogo from "../assets/images/js.svg"
import nodelogo from "../assets/images/nodejs.svg"
import reactlogo from "../assets/images/react.svg"
import expresslogo from "../assets/images/express.svg"
import mongologo from "../assets/images/mongodb.svg"
import reduxlogo from "../assets/images/redux.svg"
import socketlogo from "../assets/images/socketio.svg"
import tailwindlogo from "../assets/images/tailwindcss.svg"
import htmllogo from "../assets/images/html.svg"
import csslogo from "../assets/images/css.svg"
import sasslogo from "../assets/images/sass.svg"

const Hi = () => {
  const pStyle = "w-full p-2 transition duration-1000"
  const liStyle = "flex items-center"
  const svgStyle = "w-12 h-12 mx-4"
  const p1 = useRef()
  const p2 = useRef()
  const p3 = useRef()
  const li1 = useRef()
  const li2 = useRef()
  const li3 = useRef()
  const li4 = useRef()
  const li5 = useRef()
  const li6 = useRef()
  const li7 = useRef()
  const li8 = useRef()
  const li9 = useRef()
  const li10 = useRef()
  const li11 = useRef()
  const refsArray = [
    p1,
    p2,
    p3,
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7,
    li8,
    li9,
    li10,
    li11,
  ]
  useTextObserver(refsArray)
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-min mt-14 text-center font-thin text-xs break-words sm:text-base'>
      <p ref={p1} className={pStyle}>
        Hi there! My name is Vital
      </p>
      <p ref={p2} className={pStyle}>
        And this is my Experience Demo {"\uD83D\uDE4C"}
      </p>
      <p ref={p3} className={pStyle}>
        My current stack is:
      </p>
      <ul className='flex flex-col gap-4'>
        <li ref={li1} className={liStyle}>
          <img src={jslogo} className={svgStyle} alt='Vanilla JS logo' />
          Vanilla JS
        </li>
        <li ref={li2} className={liStyle}>
          <img src={nodelogo} className={svgStyle} alt='Node.JS logo' /> Node.JS
        </li>
        <li ref={li3} className={liStyle}>
          <img src={reactlogo} className={svgStyle} alt='React.JS logo' />
          React.JS
        </li>
        <li ref={li4} className={liStyle}>
          <img src={expresslogo} className={svgStyle} alt='Express.JS logo' />
          Express.JS
        </li>
        <li ref={li5} className={liStyle}>
          <img src={mongologo} className={svgStyle} alt='Mongo DB logo' /> Mongo
          DB
        </li>
        <li ref={li6} className={liStyle}>
          <img src={reduxlogo} className={svgStyle} alt='Redux logo' /> Redux
        </li>
        <li ref={li7} className={liStyle}>
          <img src={socketlogo} className={svgStyle} alt='Socket.io logo' />
          Socket.io
        </li>
        <li ref={li8} className={liStyle}>
          <img
            src={tailwindlogo}
            className={svgStyle}
            alt='Tailwind CSS logo'
          />{" "}
          Tailwind CSS
        </li>
        <li ref={li9} className={liStyle}>
          <img src={htmllogo} className={svgStyle} alt='HTML5 logo' /> HTML5
        </li>
        <li ref={li10} className={liStyle}>
          <img src={csslogo} className={svgStyle} alt='CSS3 logo' /> CSS3
        </li>
        <li ref={li11} className={liStyle}>
          <img src={sasslogo} className={svgStyle} alt='SASS logo' /> SASS
        </li>
      </ul>
    </section>
  )
}

export default Hi
