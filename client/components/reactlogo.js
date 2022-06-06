import React from "react"

const ReactLogo = () => {
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <svg
        className='w-60 h-60'
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <defs>
          <symbol id='orbits' strokeWidth={2}>
            <ellipse
              stroke='#38bdf8'
              strokeOpacity={0}
              filter='url(#shadow2)'
              id='orbite'
              cx='50'
              cy='50'
              rx='45'
              ry='20'
            >
              <animate
                attributeName='stroke-opacity'
                dur='5s'
                values='0; 0; 1'
                keyTimes='0; 0.9; 1'
                fill='freeze'
              />
            </ellipse>
            <use href='#orbite' transform='rotate(60 50 50)' />
            <use href='#orbite' transform='rotate(-60 50 50)' />
          </symbol>
          <symbol id='stage1'>
            <path
              filter='url(#shadow)'
              stroke='#e0f2fe'
              strokeOpacity={0}
              id='s1-path'
              d='M 27.5,50 A 60 90 0 0 1 39,30.5'
            >
              <animate
                attributeName='stroke-opacity'
                dur='5s'
                values='0; 0; 1; 1; 0'
                keyTimes='0; 0.2; 0.3; 0.9; 1'
              />
            </path>
            <use href='#s1-path' transform='rotate(60 50 50)' />
            <use href='#s1-path' transform='rotate(120 50 50)' />
            <use href='#s1-path' transform='rotate(180 50 50)' />
            <use href='#s1-path' transform='rotate(240 50 50)' />
            <use href='#s1-path' transform='rotate(300 50 50)' />
          </symbol>
          <symbol id='stage2'>
            <path
              filter='url(#shadow)'
              stroke='#e0f2fe'
              strokeOpacity={0}
              id='s2-path'
              d='M 27.5,50 A 60 80 0 0 1 22.5,34 A 70 60 0 0 1 39,30.5'
            >
              <animate
                attributeName='stroke-opacity'
                dur='5s'
                values='0; 0; 1; 1; 0'
                keyTimes='0; 0.4; 0.5; 0.9; 1'
              />
            </path>
            <use href='#s2-path' transform='rotate(60 50 50)' />
            <use href='#s2-path' transform='rotate(120 50 50)' />
            <use href='#s2-path' transform='rotate(180 50 50)' />
            <use href='#s2-path' transform='rotate(240 50 50)' />
            <use href='#s2-path' transform='rotate(300 50 50)' />
          </symbol>
          <symbol id='stage3'>
            <path
              filter='url(#shadow)'
              stroke='#e0f2fe'
              strokeOpacity={0}
              id='s3-path'
              d='M 22.5,34 A 60 22.5 0 0 0 22.5,66'
            >
              <animate
                attributeName='stroke-opacity'
                dur='5s'
                values='0; 0; 1; 1; 0'
                keyTimes='0; 0.6; 0.7; 0.9; 1'
              />
            </path>
            <use href='#s3-path' transform='rotate(60 50 50)' />
            <use href='#s3-path' transform='rotate(120 50 50)' />
            <use href='#s3-path' transform='rotate(180 50 50)' />
            <use href='#s3-path' transform='rotate(240 50 50)' />
            <use href='#s3-path' transform='rotate(300 50 50)' />
          </symbol>
          <path id='light1' d='M 50,56 v 3 l 1 3 l -3 4 l 2 5' />
          <path id='light2' d='M 50,56 v 5 l -2 4 l 1 3 l -1 4' />
          <path id='light3' d='M 50,56 l -2 3 l 4 4 l -1 4 l 1 1 v 6' />
        </defs>

        <circle id='stage0' filter='url(#shadow)' cx='50' cy='50' r='6'>
          <animate attributeName='r' dur='5s' from='0' to='6' />
          <animate
            attributeName='fill'
            dur='6s'
            from='#e0f2fe'
            to='#fbbf24'
            fill='freeze'
          />
        </circle>

        <use href='#orbits' />
        <use href='#stage1' />
        <use href='#stage2' />
        <use href='#stage3' />
        <g
          stroke='white'
          strokeOpacity={0}
          strokeWidth={0.3}
          filter='url(#shadow)'
        >
          <use href='#light1' transform='rotate(50 50 50)'>
            <animate
              attributeName='stroke-opacity'
              begin='6s'
              dur='7.5s'
              values='0; 1; 0; 0; 1; 0; 0'
              keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
              repeatCount='3'
            />
          </use>
          <use href='#light2' transform='rotate(130 50 50)'>
            <animate
              attributeName='stroke-opacity'
              begin='9s'
              dur='8s'
              values='0; 1; 0; 0; 1; 0; 0'
              keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
              repeatCount='3'
            />
          </use>
          <use href='#light3' transform='rotate(220 50 50)'>
            <animate
              attributeName='stroke-opacity'
              begin='7s'
              dur='8.5s'
              values='0; 1; 0; 0; 1; 0; 0'
              keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
              repeatCount='3'
            />
          </use>
          <use href='#light1' transform='rotate(285 50 50)'>
            <animate
              attributeName='stroke-opacity'
              begin='11s'
              dur='8s'
              values='0; 1; 0; 0; 1; 0; 0'
              keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
              repeatCount='3'
            />
          </use>
          <use href='#light3' transform='rotate(25 50 50)'>
            <animate
              attributeName='stroke-opacity'
              begin='13s'
              dur='7.5s'
              values='0; 1; 0; 0; 1; 0; 0'
              keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
              repeatCount='3'
            />
          </use>
        </g>

        <filter id='shadow'>
          <feDropShadow dx='0' dy='0' stdDeviation='1' floodColor='#bae6fd' />
        </filter>
        <filter id='shadow2'>
          <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='#38bdf8' />
        </filter>
      </svg>
    </section>
  )
}

export default ReactLogo
