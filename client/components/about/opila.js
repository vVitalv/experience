import React from "react"

const Opila = ({ x, y }) => {
  const width = document.body.clientWidth
  const height = document.body.clientHeight
  const skewX =
    y < height / 2
      ? Math.round((y / height) * 35)
      : Math.round(-(1 - y / height) * 35)
  const skewY =
    x < width / 2
      ? Math.round(-(x / width) * 35)
      : Math.round((1 - x / width) * 35)
  const opilaSkew = {
    transform: `perspective(200px) rotateX(${skewX}deg) rotateY(${skewY}deg)`,
    "transition-duration": "0.6s",
  }
  return (
    <div
      className='portrait:min-w-full landscape:max-h-screen stroke-gray-800'
      style={opilaSkew}
    >
      <svg
        className='w-44 h-44'
        viewBox='0 0 150 150'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          id='opila'
          filter='url(#shine)'
          className='fill-[none] stroke-violet-800'
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
          <feDropShadow dx='0' dy='0' stdDeviation='3' floodColor='#a78bfa' />
        </filter>
      </svg>
    </div>
  )
}

export default React.memo(Opila)
