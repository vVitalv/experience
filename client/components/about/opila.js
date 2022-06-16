import React from "react"

const Opila = ({ mouseX, mouseY }) => {
  const width = document.body.clientWidth
  const height = document.body.clientHeight
  const rotateX =
    mouseY < height / 2
      ? Math.round((mouseY / height) * 25)
      : Math.round(-(1 - mouseY / height) * 25)
  const rotateY =
    mouseX < width / 2
      ? Math.round(-(mouseX / width) * 25)
      : Math.round((1 - mouseX / width) * 25)
  const opilaSkew = {
    transform: `perspective(200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transitionDuration: "0.6s",
  }
  return (
    <div className='w-44 h-44 md:w-1/4 lg:w-1/6 md:h-fit' style={opilaSkew}>
      <svg
        className='w-full h-full'
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
