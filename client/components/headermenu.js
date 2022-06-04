import React from "react"
import { NavLink } from "react-router-dom"

const HeaderMenu = ({ toggleMenu }) => {
  return (
    <nav
      className='fixed top-14 right-0 w-40 bg-neutral-300 bg-opacity-10 backdrop-blur-md'
      role='navigation'
      aria-label='main navigation'
      onMouseEnter={() => {
        toggleMenu(true)
      }}
      onMouseLeave={() => {
        toggleMenu(false)
      }}
    >
      <ul>
        <li className='w-full p-4 hover:bg-neutral-300 hover:bg-opacity-30'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='w-full p-4 hover:bg-neutral-300 hover:bg-opacity-30'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='w-full p-4 hover:bg-neutral-300 hover:bg-opacity-30'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu
