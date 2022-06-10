import React from "react"

const H1 = ({ hText, width }) => {
  const styleWidth = { width: `${width}%` }
  return (
    <div className='sticky top-16 w-full z-10 rounded-full text-gray-200 border border-purple-400'>
      <div
        className='absolute h-full bg-purple-600 rounded-full bg-opacity-30'
        style={styleWidth}
      />
      <h1 className='p-2 z-20'>{hText}</h1>
    </div>
  )
}

export default React.memo(H1)
