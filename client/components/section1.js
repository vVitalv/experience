import React, { useEffect, useRef } from "react"

// const TextContent = forwardRef(() => {})
// TextContent.displayName = "TextContent"
function Hi() {
  // const isShown = { "#s1-p1": false, "#s1-p2": false }
  // const textIDs = Object.keys(isShown)
  // function showText(elementID, classesArray) {
  //   const textElement = document.querySelector(elementID)
  //   if (
  //     scrollPosition >
  //     textElement.offsetTop - window.screen.availHeight / 2
  //   ) {
  //     classesArray.forEach((newClass) => textElement.classList.add(newClass))
  //     isShown[elementID] = true
  //   }
  // }

  // textIDs.forEach((textID) => {
  //   if (!isShown.textID) {
  //     showText(textID, ["text-yellow-200", "scale-150"])
  //   }
  // })
  const ref = useRef()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle("text-yellow-200")
        }
      })
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0.5 }
  )
  useEffect(() => {
    observer.observe(ref.current)
  })

  return (
    <section className='flex flex-col justify-center items-center w-full h-80 text-center font-thin text-xs sm:text-base break-words'>
      <p ref={ref} className='transition duration-1000'>
        Hi there! My name is Vital
      </p>
      <br />
      <p id='s1-p2' className='transition duration-1000'>
        And this is my Experience Demo
      </p>
    </section>
  )
}

export default Hi
