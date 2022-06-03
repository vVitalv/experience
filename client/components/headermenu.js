import React from "react"

const HeaderMenu = ({ toggleMenu }) => {
  return (
    <div
      className='fixed top-14 right-0 w-40 bg-yellow-300'
      onMouseEnter={() => {
        toggleMenu(true)
      }}
      onMouseLeave={() => {
        toggleMenu(false)
      }}
    >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default HeaderMenu
