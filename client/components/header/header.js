import React, { useState } from "react"
import { createPortal } from "react-dom"

import HeaderMenu from "./headermenu"

const Header = () => {
  const [isDroped, toggleMenu] = useState(false)
  const themeToggle = () => {
    document.documentElement.classList.toggle("dark")
    document
      .querySelector("#theme_btn")
      .classList.toggle("[transform:rotate3d(0,1,0,-90deg)]")
  }
  return (
    <header className='fixed z-50 flex justify-between items-center font-semibold w-full h-16 px-6 bg-neutral-600 text-gray-500 dark:text-gray-200 bg-opacity-10 backdrop-blur-md'>
      <p>
        <span>E X P </span>
        <span className='text-amber-300'>D E M {"\u16DF"}</span>
      </p>
      <div className='flex justify-between items-end h-full w-28'>
        <div
          id='theme_btn'
          className='relative w-10 h-10 mb-3 [transform-style:preserve-3d] transition-all duration-500'
        >
          <button
            type='button'
            className='absolute text-base h-full w-full border border-gray-500 hover:border-yellow-300 transition-colors rounded-md [transform:translateZ(20px)]'
            onClick={themeToggle}
          >
            {"\uD83C\uDF1E"}
          </button>
          <button
            type='button'
            className='absolute text-base h-full w-full border border-gray-400 hover:border-purple-600 transition-colors rounded-md [transform:rotateY(90deg)_translateZ(20px)]'
            onClick={themeToggle}
          >
            {"\uD83C\uDF1A"}
          </button>
        </div>
        <button
          type='button'
          className='w-8 h-[52px] pb-3 stroke-gray-500 dark:stroke-gray-400 outline-none'
          onClick={() => toggleMenu(!isDroped)}
          onMouseEnter={() => toggleMenu(true)}
          onMouseLeave={() => toggleMenu(false)}
        >
          <svg
            className={`${isDroped && "rotate-90"} duration-100`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              id='line1'
              strokeLinecap='round'
              x1='2'
              y1='4'
              x2='18'
              y2='4'
            />
            <use href='#line1' y='6' />
            <use href='#line1' y='12' />
          </svg>
        </button>
      </div>
      {isDroped &&
        createPortal(
          <HeaderMenu toggleMenu={toggleMenu} />,
          document.querySelector("#viewport")
        )}
    </header>
  )
}

export default Header
