import React from "react"

const H1 = ({ hText, width }) => {
  const styleWidth = { width: `${width}%` }
  return (
    <div className='sticky top-16 w-full z-10'>
      <div className='relative w-full rounded-full text-gray-200'>
        <div
          className='absolute h-full [background-image:linear-gradient(45deg,#ff000020,#ffa50020,#ffff0020,#00800020,#0000ff20,#4b008220,#ee82ee20)] rounded-full bg-opacity-10'
          style={styleWidth}
        />
        <h1 className='p-2'>{hText}</h1>
      </div>
    </div>
  )
}

export default React.memo(H1)
