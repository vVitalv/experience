import React from "react"

const Hi = ({ scrollPosition }) => {
  const isShown = { "#s1-p1": false, "#s1-p2": false }
  const textIDs = Object.keys(isShown)
  function showText(elementID, scrollLevel, classesArray) {
    if (scrollPosition > window.screen.availHeight * scrollLevel) {
      const textElement = document.querySelector(elementID)
      classesArray.forEach((newClass) => textElement.classList.add(newClass))
      isShown[elementID] = true
    }
  }
  if (!isShown[textIDs[0]]) {
    showText([textIDs[0]], 0.3, [
      "text-yellow-200",
      "-translate-y-44",
      "scale-150",
    ])
  }
  if (!isShown[textIDs[1]]) {
    showText([textIDs[1]], 0.4, [
      "text-yellow-200",
      "-translate-y-44",
      "scale-150",
    ])
  }
  return (
    <section className='flex flex-col justify-center items-center w-full h-80 text-center font-thin text-xs sm:text-base break-words'>
      <p id='s1-p1' className='transition duration-1000'>
        Hi there! My name is Vital
      </p>
      <br />
      <p id='s1-p2' className='transition duration-1000'>
        And this is my Experience Demo
      </p>
    </section>
  )
}

export default React.memo(Hi)
