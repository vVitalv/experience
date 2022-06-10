import React, { useRef } from "react"

import useTextObserver from "../hooks/showtext"
import jslogo from "../../assets/images/js.svg"
import nodelogo from "../../assets/images/nodejs.svg"
import reactlogo from "../../assets/images/react.svg"
import expresslogo from "../../assets/images/express.svg"
import mongologo from "../../assets/images/mongodb.svg"
import reduxlogo from "../../assets/images/redux.svg"
import socketlogo from "../../assets/images/socketio.svg"
import tailwindlogo from "../../assets/images/tailwindcss.svg"
import htmllogo from "../../assets/images/html.svg"
import csslogo from "../../assets/images/css.svg"
import sasslogo from "../../assets/images/sass.svg"

const Hi = () => {
  const pStyle = "w-full p-2 transition duration-1000"
  const liStyle = "flex items-center"
  const svgStyle = "w-12 h-12 mx-4"
  const s1p1 = useRef()
  const s1p2 = useRef()
  const s1p3 = useRef()
  const refsArray = [s1p1, s1p2, s1p3]
  useTextObserver(refsArray)
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-min m-14 text-center font-thin text-xs break-words sm:text-base'>
      <p ref={s1p1} className={pStyle}>
        Hi there! My name is Vital
      </p>
      <p ref={s1p2} className={pStyle}>
        And this is my Experience Demo {"\uD83D\uDE4C"}
      </p>
      <p ref={s1p3} className={pStyle}>
        My current stack is:
      </p>
      <ul className='flex flex-col gap-4 text-gray-300'>
        <li className={liStyle}>
          <img src={jslogo} className={svgStyle} alt='Vanilla JS logo' />
          Vanilla JS
        </li>
        <li className={liStyle}>
          <img src={nodelogo} className={svgStyle} alt='Node.JS logo' /> Node.JS
        </li>
        <li className={liStyle}>
          <img src={reactlogo} className={svgStyle} alt='React.JS logo' />
          React.JS
        </li>
        <li className={liStyle}>
          <img src={expresslogo} className={svgStyle} alt='Express.JS logo' />
          Express.JS
        </li>
        <li className={liStyle}>
          <img src={mongologo} className={svgStyle} alt='Mongo DB logo' /> Mongo
          DB
        </li>
        <li className={liStyle}>
          <img src={reduxlogo} className={svgStyle} alt='Redux logo' /> Redux
        </li>
        <li className={liStyle}>
          <img src={socketlogo} className={svgStyle} alt='Socket.io logo' />
          Socket.io
        </li>
        <li className={liStyle}>
          <img src={tailwindlogo} className={svgStyle} alt='Tailwind logo' />
          Tailwind CSS
        </li>
        <li className={liStyle}>
          <img src={htmllogo} className={svgStyle} alt='HTML5 logo' /> HTML5
        </li>
        <li className={liStyle}>
          <img src={csslogo} className={svgStyle} alt='CSS3 logo' /> CSS3
        </li>
        <li className={liStyle}>
          <img src={sasslogo} className={svgStyle} alt='SASS logo' /> SASS
        </li>
      </ul>
    </section>
  )
}

export default Hi
