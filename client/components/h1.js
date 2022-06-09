import React from "react"

const H1 = ({ hText, width }) => {
  const style = { width: `${width}%` }
  return (
    <div className='sticky top-16 w-full rounded-full border border-purple-400'>
      <div
        className='absolute h-full bg-purple-600 transition duration-300 rounded-full bg-opacity-20'
        style={style}
      />
      <h1 className='p-4'>{hText}</h1>
    </div>
  )
}

export default H1
