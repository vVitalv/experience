import React, { useState } from "react"
import { createPortal } from "react-dom"

import HeaderMenu from "./headermenu"

const Header = () => {
  const [isDroped, toggleMenu] = useState(false)
  return (
    <header className='fixed z-50 flex justify-between items-center font-semibold w-full h-14 px-6 bg-neutral-500 text-gray-200 bg-opacity-10 backdrop-blur-md'>
      <p>
        <span>E X P </span>
        <span className='text-amber-300'>D E M {"\u16DF"}</span>
      </p>
      <button
        type='button'
        className='self-end w-7 h-10 pb-3 stroke-gray-200 outline-none'
        onClick={() => toggleMenu(!isDroped)}
        onMouseEnter={() => toggleMenu(true)}
        onMouseLeave={() => toggleMenu(false)}
      >
        <svg
          className={`${isDroped && "rotate-90"} duration-100`}
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line id='line1' strokeLinecap='round' x1='2' y1='4' x2='18' y2='4' />
          <use href='#line1' y='6' />
          <use href='#line1' y='12' />
        </svg>
      </button>
      {isDroped &&
        createPortal(
          <HeaderMenu toggleMenu={toggleMenu} />,
          document.querySelector("#viewport")
        )}
    </header>
  )
}

export default Header
