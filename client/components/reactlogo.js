import React from "react"

const ReactLogo = () => {
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      strokeWidth={1}
    >
      <g strokeWidth={2}>
        <ellipse
          stroke='#38bdf8'
          filter='url(#shadow2)'
          id='myCircle'
          cx='50'
          cy='50'
          rx='45'
          ry='20'
        >
          <animate
            attributeName='stroke-opacity'
            dur='6s'
            values='0; 0; 1'
            keyTimes='0; 0.9; 1'
          />
        </ellipse>
        <use href='#myCircle' transform='rotate(60 50 50)' />
        <use href='#myCircle' transform='rotate(-60 50 50)' />
      </g>
      <circle id='stage0' filter='url(#shadow)' cx='50' cy='50' r='6'>
        <animate attributeName='r' dur='6s' from='0' to='6' />
        <animate
          attributeName='fill'
          dur='6s'
          from='#e0f2fe'
          to='#38bdf8'
          fill='freeze'
        />
      </circle>
      <g>
        <path
          filter='url(#shadow)'
          stroke='#e0f2fe'
          strokeOpacity={0}
          id='stage1'
          d='M 27.5,50
          A 60 90 0 0 1 39,30.5
          '
        >
          <animate
            attributeName='stroke-opacity'
            dur='6s'
            values='0; 0; 1; 1; 0'
            keyTimes='0; 0.2; 0.3; 0.9; 1'
          />
        </path>
        <use href='#stage1' transform='rotate(60 50 50)' />
        <use href='#stage1' transform='rotate(120 50 50)' />
        <use href='#stage1' transform='rotate(180 50 50)' />
        <use href='#stage1' transform='rotate(240 50 50)' />
        <use href='#stage1' transform='rotate(300 50 50)' />
      </g>
      <g>
        <path
          filter='url(#shadow)'
          stroke='#e0f2fe'
          strokeOpacity={0}
          id='stage2'
          d='M 27.5,50
          A 60 80 0 0 1 22.5,34
          A 70 60 0 0 1 39,30.5
          '
        >
          <animate
            attributeName='stroke-opacity'
            dur='6s'
            values='0; 0; 1; 1; 0'
            keyTimes='0; 0.4; 0.5; 0.9; 1'
          />
        </path>
        <use href='#stage2' transform='rotate(60 50 50)' />
        <use href='#stage2' transform='rotate(120 50 50)' />
        <use href='#stage2' transform='rotate(180 50 50)' />
        <use href='#stage2' transform='rotate(240 50 50)' />
        <use href='#stage2' transform='rotate(300 50 50)' />
      </g>
      <g>
        <path
          filter='url(#shadow)'
          stroke='#e0f2fe'
          strokeOpacity={0}
          id='stage3'
          d='M 22.5,34
          A 60 22.5 0 0 0 22.5,66
          '
        >
          <animate
            attributeName='stroke-opacity'
            dur='6s'
            values='0; 0; 1; 1; 0'
            keyTimes='0; 0.6; 0.7; 0.9; 1'
          />
        </path>
        <use href='#stage3' transform='rotate(60 50 50)' />
        <use href='#stage3' transform='rotate(120 50 50)' />
        <use href='#stage3' transform='rotate(180 50 50)' />
        <use href='#stage3' transform='rotate(240 50 50)' />
        <use href='#stage3' transform='rotate(300 50 50)' />
      </g>
      <filter id='shadow'>
        <feDropShadow dx='0' dy='0' stdDeviation='1' floodColor='#bae6fd' />
      </filter>
      <filter id='shadow2'>
        <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='#38bdf8' />
      </filter>
    </svg>
  )
}

export default ReactLogo
