import React from "react"

const ReactLogo = () => {
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <svg
        className='w-96 h-auto'
        fill='none'
        viewBox='-50 -50 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <g id='start-light1'>
            <path d='M 50,50 l -4 5 l -1 3 l -2 3 l 6 3 v 4 l -3 2 l -4 5 v 4 l -3 6 l 5 8 v 5 l 3 4 l -7 5 v 7 l -2 4 l -4 5 v 4 l 4 3 l 3 4 l 2 5 v 9 l -6 6 l -2 4 v 8 l 6 9 v 5 l 2 7' />
            <path
              strokeWidth={0.5}
              d='M 34,127 l -4 3 l -4 4 l 3 4 l -2 3 v 6 l -4 6 M 27,134 l -6 3 l -4 5 l -6 2 M 44,60 l -8 5'
            />
          </g>
          <g id='start-light2'>
            <path d='M 50,50 l 3 2 l 3 3 l 2 3 l 5 3 v 4 l -3 6 l -4 5 v 4 l 3 6 l -2 4 v 5 l 3 4 l -2 5 v 5 l -2 4 l -4 5 v 4 l 4 3 l 5 6 l -2 5 v 4 l 6 2 l -2 4 v 8 l -6 4 v 5 l -2 5 v 6 l -6 8' />
            <path
              strokeWidth={0.5}
              d='M 65,142 l 5 3 l 4 4 l -1 4 l 1 1 v 6 l 4 6 M 61,60 l 8 3 l 1 11 M 52,122 l -4 3 v 6 l -8 8'
            />
          </g>
          <g id='start-light3'>
            <path d='M 50,50 l 4 5 l -1 6 l -2 3 l 5 3 v 4 l 3 6 l -4 5 v 4 l 3 6 l -2 8 v 5 l 3 4 l -7 5 v 7 l -2 4 l -4 5 v 4 l 4 3 l 5 2 l 2 5 v 9 l -6 6 l -2 4 v 8 l 6 9 v 5 l -2 7 M 59,109 l 6 5 v 10 l 7 3 l 9 8 v 6 l 11 3' />
            <path
              strokeWidth={0.5}
              d='M 52,63 l -5 6 l -4 4 l -1 4 l -1 3 v 6 l -4 6 M 47,130 l -6 3 l -4 5 l -6 8'
            />
          </g>
        </defs>

        <g strokeOpacity={0} stroke='white' filter='url(#shadow1)'>
          <use href='#start-light1' transform='rotate(135 50 50)'>
            <animate
              id='sl1a'
              attributeName='stroke-opacity'
              begin='1s'
              dur='0.4s'
              values='0; 1; 0'
              keyTimes='0; 0.1; 1'
            />
          </use>
          <use href='#start-light2' transform='rotate(220 50 50)'>
            <animate
              id='sl2a'
              attributeName='stroke-opacity'
              begin='s1a.end'
              dur='0.4s'
              values='0; 1; 0'
              keyTimes='0; 0.1; 1'
            />
          </use>
          <use href='#start-light3' transform='rotate(15 50 50)'>
            <animate
              id='sl3a'
              attributeName='stroke-opacity'
              begin='s2a.end'
              dur='0.4s'
              values='0; 1; 0'
              keyTimes='0; 0.1; 1'
            />
          </use>
        </g>

        <filter id='shadow1'>
          <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='#38bdf8' />
        </filter>

        <svg
          width={100}
          height={100}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
        >
          <defs>
            <symbol id='orbits' strokeWidth={2}>
              <ellipse
                id='orbite'
                stroke='#38bdf8'
                strokeOpacity={0}
                filter='url(#shadow2)'
                cx='50'
                cy='50'
                rx='45'
                ry='20'
              >
                <animate
                  attributeName='stroke-opacity'
                  begin='s3a.end'
                  dur='2s'
                  values='0; 1'
                  keyTimes='0; 1'
                  fill='freeze'
                />
              </ellipse>
              <use href='#orbite' transform='rotate(60 50 50)' />
              <use href='#orbite' transform='rotate(-60 50 50)' />
            </symbol>
            <symbol id='stage1'>
              <path
                id='s1-path'
                filter='url(#shadow)'
                stroke='#e0f2fe'
                strokeOpacity={0}
                d='M 27.5,50 A 60 90 0 0 1 39,30.5'
              >
                <animate
                  id='s1a'
                  attributeName='stroke-opacity'
                  begin='1s'
                  dur='1s'
                  values='0; 1; 1; 0'
                  keyTimes='0; 0.2; 0.8; 1'
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
                  id='s2a'
                  attributeName='stroke-opacity'
                  begin='s1a.end'
                  dur='1s'
                  values='0; 1; 1; 0'
                  keyTimes='0; 0.2; 0.8; 1'
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
                  id='s3a'
                  attributeName='stroke-opacity'
                  begin='s2a.end'
                  dur='1s'
                  values='0; 1; 1; 0'
                  keyTimes='0; 0.2; 0.8; 1'
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
            <animate id='s0a' attributeName='r' dur='5s' from='0' to='6' />
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
                id='l1a'
                attributeName='stroke-opacity'
                begin='s0a.end'
                dur='7.5s'
                values='0; 1; 0; 0; 1; 0; 0'
                keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
                repeatCount='3'
              />
            </use>
            <use href='#light2' transform='rotate(130 50 50)'>
              <animate
                id='l2a'
                attributeName='stroke-opacity'
                begin='s0a.end+1s'
                dur='8s'
                values='0; 1; 0; 0; 1; 0; 0'
                keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
                repeatCount='3'
              />
            </use>
            <use href='#light3' transform='rotate(220 50 50)'>
              <animate
                id='l3a'
                attributeName='stroke-opacity'
                begin='s0a.end+1.3s'
                dur='8.5s'
                values='0; 1; 0; 0; 1; 0; 0'
                keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
                repeatCount='3'
              />
            </use>
            <use href='#light1' transform='rotate(285 50 50)'>
              <animate
                id='l4a'
                attributeName='stroke-opacity'
                begin='s0a.end+2.3s'
                dur='8s'
                values='0; 1; 0; 0; 1; 0; 0'
                keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
                repeatCount='3'
              />
            </use>
            <use href='#light3' transform='rotate(25 50 50)'>
              <animate
                id='l5a'
                attributeName='stroke-opacity'
                begin='s0a.end+4s'
                dur='7.5s'
                values='0; 1; 0; 0; 1; 0; 0'
                keyTimes='0; 0.02; 0.05; 0.75; 0.77; 0.8; 1'
                repeatCount='3'
              />
            </use>
            <use href='#light2' transform='rotate(165 50 50)'>
              <animate
                id='l6a'
                attributeName='stroke-opacity'
                begin='s0a.end+3.6s'
                dur='7.8s'
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
      </svg>
    </section>
  )
}

export default ReactLogo
