import React from "react"

const Hi = () => {
  return (
    <p
      onScroll={(e) => {
        const targetPosition = e.target.offsetTop
        const currentPosition = document.querySelector("main").scrollTop
        if (targetPosition === currentPosition) {
          e.target.classList.add("justify-self-start")
        }
      }}
      className='transition duration-300'
    >
      Hi there! This is my Experience Demo
    </p>
  )
}

export default Hi
