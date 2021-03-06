import React, { useState } from "react"
import { createPortal } from "react-dom"

import useRotate from "../hooks/rotate"
import PopUpMsg from "../popupmsg"

const Contacts = () => {
  const [mouseX, setX] = useState(0)
  const [mouseY, setY] = useState(0)
  const [popup, togglePopup] = useState(false)
  const [msgStatus, setStatus] = useState("ok")
  const [rotateX, rotateY] = useRotate(mouseX, mouseY)
  const rotateStyle = {
    transform: `perspective(200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transitionDuration: "1s",
  }
  const msgs = {
    email: {
      ok: "Email address copied to clipboard",
      err: "Copy error",
    },
    telegram: {
      ok: "Telegram account name copied to clipboard",
      err: "Copy error",
    },
  }
  function showPopup(e, type) {
    navigator.clipboard
      .writeText(e.target.innerText)
      .then(() => {
        togglePopup(type)
        setStatus("ok")
      })
      .catch(() => {
        togglePopup(type)
        setStatus("err")
      })
  }

  return (
    <main
      className='flex justify-center items-center w-full h-full text-gray-200 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900'
      onMouseMove={(e) => {
        setX(e.clientX)
        setY(e.clientY)
      }}
    >
      <div
        className='flex flex-col gap-4 w-72 sm:w-80 px-4 py-4 bg-purple-500 dark:bg-purple-300 shadow-md shadow-purple-400 bg-opacity-50 dark:bg-opacity-50 rounded-md'
        style={rotateStyle}
      >
        <div className='flex w-full justify-between'>
          <p>E-mail </p>
          <button
            className='text-gray-300 hover:text-amber-400 transition duration-300'
            type='button'
            onClick={(e) => showPopup(e, "email")}
          >
            vitalvital@bk.ru {"\uD83D\uDCCB"}
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p>Telegram </p>
          <button
            className='text-gray-300 hover:text-amber-400 transition duration-300'
            type='button'
            onClick={(e) => showPopup(e, "telegram")}
          >
            @dustonthedust {"\uD83D\uDCCB"}
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p>GitHub </p>
          <button
            className='text-gray-300 hover:text-amber-400 transition duration-300'
            type='button'
            onClick={() => window.open("https://github.com/vVitalv/", "_blank")}
          >
            github.com {"\uD83C\uDF0D"}
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p>LinkedIn </p>
          <button
            className='text-gray-300 hover:text-amber-400 transition duration-300'
            type='button'
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vitaly-volkov-988aa81b7/",
                "_blank"
              )
            }
          >
            linkedin.com {"\uD83C\uDF0D"}
          </button>
        </div>
      </div>
      {popup &&
        createPortal(
          <PopUpMsg
            msg={msgStatus === "ok" ? msgs[popup].ok : msgs[popup].err}
            err={msgStatus}
            remove={togglePopup}
          />,
          document.body
        )}
    </main>
  )
}

export default Contacts
