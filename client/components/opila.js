import React from "react"

const Opila = () => {
  return (
    <svg
      className='w-60 h-60 fill-[none]'
      viewBox='0 0 150 150'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#shine)'>
        <rect
          className='stroke-rose-100 stroke-[4]'
          x='10'
          y='10'
          rx='7'
          ry='7'
          width='130'
          height='130'
        />
        <path
          className='stroke-rose-300 stroke-[6]'
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
        <feDropShadow dx='0' dy='0' stdDeviation='4' floodColor='#fce7f3' />
      </filter>
    </svg>
  )
}

export default Opila
