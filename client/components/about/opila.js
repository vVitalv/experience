import React from "react"

const Opila = () => {
  // const opilaShine =
  //   scrollPosition > window.screen.availHeight * 0.7
  //     ? "stroke-yellow-100 [filter:url(#shine)]"
  //     : "stroke-gray-800"
  return (
    <svg
      className='portrait:min-w-full landscape:max-h-screen stroke-gray-800'
      viewBox='0 0 150 150'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        id='opila'
        className='fill-[none] transition-colors duration-1000 stroke-violet-800 [filter:url(#shine)]'
      >
        <rect
          strokeWidth={4}
          x='10'
          y='10'
          rx='7'
          ry='7'
          width='130'
          height='130'
        />
        <path
          strokeWidth={8}
          strokeLinecap='round'
          d='M 110,125
          l -70 -60
          l 35 -35
          l 35 35
          l -70 60
          '
        />
      </g>
      <filter id='shine'>
        <feDropShadow dx='0' dy='0' stdDeviation='3' floodColor='#fef08a' />
      </filter>
    </svg>
  )
}

export default React.memo(Opila)
