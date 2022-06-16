import React, { useState } from "react"

import Opila from "./opila"

const AboutContent = () => {
  const [mouseX, setX] = useState(0)
  const [mouseY, setY] = useState(0)
  return (
    <main
      className='flex flex-col justify-center items-center w-full h-full px-2 py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'
      onMouseMove={(e) => {
        setX(e.clientX)
        setY(e.clientY)
      }}
    >
      <Opila mouseX={mouseX} mouseY={mouseY} />
    </main>
  )
}

export default AboutContent
