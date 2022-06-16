import React, { useState } from "react"
import { createPortal } from "react-dom"

import PopUpMsg from "../popupmsg"

const ContactContent = () => {
  const [popup, togglePopup] = useState(false)
  const [msgStatus, setStatus] = useState("ok")
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
    <main className='flex justify-center items-center w-full h-full text-gray-200 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <div className='flex flex-col gap-4 w-72 sm:w-80 px-4 py-24'>
        <div className='flex w-full justify-between'>
          <p>E-mail </p>
          <button
            className='text-gray-400 hover:text-purple-400 transition duration-300'
            type='button'
            onClick={(e) => showPopup(e, "email")}
          >
            vitalvital@bk.ru {"\uD83D\uDCCB"}
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p>Telegram </p>
          <button
            className='text-gray-400 hover:text-purple-400 transition duration-300'
            type='button'
            onClick={(e) => showPopup(e, "telegram")}
          >
            @dustonthedust {"\uD83D\uDCCB"}
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p>GitHub </p>
          <button
            className='text-gray-400 hover:text-purple-400 transition duration-300'
            type='button'
            onClick={() => window.open("https://github.com/vVitalv/", "_blank")}
          >
            github.com {"\uD83C\uDF0D"}
          </button>
        </div>
        <div className='flex w-full justify-between'>
          <p>LinkedIn </p>
          <button
            className='text-gray-400 hover:text-purple-400 transition duration-300'
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
        {popup &&
          createPortal(
            <PopUpMsg
              msg={msgStatus === "ok" ? msgs[popup].ok : msgs[popup].err}
              err={msgStatus}
              remove={togglePopup}
            />,
            document.body
          )}
      </div>
    </main>
  )
}

export default ContactContent
