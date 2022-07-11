import React from "react"

const Page = ({ pageText, pageColor, lift }) => {
  const turnThePage = (e) => {
    if (e.target === e.currentTarget) {
      e.target.classList.toggle("[transform:rotateY(-180deg)]")
      e.target.classList.toggle("text-transparent")
    } else {
      e.target.parentNode.classList.toggle("text-transparent")
      e.target.parentNode.classList.toggle("[transform:rotateY(-180deg)]")
    }
  }

  return (
    <button
      type='button'
      className={`absolute h-full w-full rounded-tr-md rounded-br-md border font-semibold border-gray-500 transition-all duration-500 origin-[left_center] ${lift} ${pageColor}`}
      onClick={turnThePage}
    >
      <pre>{pageText}</pre>
    </button>
  )
}

export default Page
