import React from "react"

const PopUpMsg = ({ msg, status, remove }) => {
  const sign = status === 'err' ? "\u2718" : "\u2714"
  const textColor = status === "err" ? "text-red-300" : "text-green-300"
  return (
    <div
      className={`fixed animate-[popup_4s] right-0 max-w-sm h-fit m-2 p-4 rounded-md text-sm bg-opacity-50 bg-gray-400 ${textColor}`}
      onAnimationEnd={() => remove(false)}
    >
      {sign} {msg}
    </div>
  )
}

export default PopUpMsg
