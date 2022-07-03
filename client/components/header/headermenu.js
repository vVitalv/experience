import React from "react"
import { Link } from "react-router-dom"

const HeaderMenu = ({ toggleMenu }) => {
  return (
    <nav
      className='fixed flex flex-col top-16 z-50 right-0 w-52 text-gray-600 dark:text-gray-200 bg-neutral-600 bg-opacity-10 backdrop-blur-sm'
      role='navigation'
      aria-label='main navigation'
      onMouseEnter={() => {
        toggleMenu(true)
      }}
      onMouseLeave={() => {
        toggleMenu(false)
      }}
    >
      <Link
        className='w-full p-4 hover:bg-neutral-600 dark:hover:bg-neutral-400 hover:text-yellow-300 hover:bg-opacity-30 dark:hover:bg-opacity-30'
        to='/'
      >
        Home
      </Link>
      <Link
        className='w-full p-4 hover:bg-neutral-600 dark:hover:bg-neutral-400 hover:text-yellow-300 hover:bg-opacity-30 dark:hover:bg-opacity-30'
        to='/about'
      >
        About
      </Link>
      <Link
        className='w-full p-4 hover:bg-neutral-600 dark:hover:bg-neutral-400 hover:text-yellow-300 hover:bg-opacity-30 dark:hover:bg-opacity-30'
        to='/contacts'
      >
        Contact
      </Link>
    </nav>
  )
}

export default HeaderMenu
