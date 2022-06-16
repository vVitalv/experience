import React from "react"

const PopUpMsg = ({ msg, err, remove }) => {
  const sign = err ? "\u2718" : "\u2714"
  const textColor = err ? "text-red-600" : "text-amber-500"
  return (
    <div
      className={`fixed animate-[popup_4s] right-2 max-w-48 h-fit p-4 rounded-md text-sm bg-opacity-50 bg-gray-400 ${textColor}`}
      onAnimationEnd={() => remove(false)}
    >
      {sign} {msg}
    </div>
  )
}

export default PopUpMsg
