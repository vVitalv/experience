import React from "react"
import { NavLink } from "react-router-dom"

const HeaderMenu = ({ toggleMenu }) => {
  return (
    <nav
      className='fixed flex flex-col top-14 right-0 w-40 bg-neutral-300 bg-opacity-10 backdrop-blur-sm'
      role='navigation'
      aria-label='main navigation'
      onMouseEnter={() => {
        toggleMenu(true)
      }}
      onMouseLeave={() => {
        toggleMenu(false)
      }}
    >
      <NavLink
        className='w-full p-4 hover:bg-neutral-300 hover:bg-opacity-30'
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className='w-full p-4 hover:bg-neutral-300 hover:bg-opacity-30'
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        className='w-full p-4 hover:bg-neutral-300 hover:bg-opacity-30'
        to='/contact'
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default HeaderMenu
