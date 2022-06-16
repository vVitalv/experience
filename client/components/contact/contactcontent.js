import React, { useState } from "react"
import { createPortal } from "react-dom"

import PopUpMsg from "../popupmsg"

const ContactContent = () => {
  const [popup, togglePopup] = useState(false)
  return (
    <main className='flex flex-col w-full h-full px-4 py-24 text-gray-200 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <div>
        E-mail{" "}
        <button
          type='button'
          onClick={(e) => {
            navigator.clipboard
              .writeText(e.target.innerText)
              .then(() => togglePopup(true))
          }}
        >
          vitalvital@bk.ru
        </button>
        {popup &&
          createPortal(
            <PopUpMsg
              msg='email copied to clipboard'
              err={false}
              remove={togglePopup}
            />,
            document.body
          )}
      </div>
      <div>
        Telegram <span>@dustonthedust</span>
      </div>
    </main>
  )
}

export default ContactContent
