import React, { useEffect } from "react"

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    return () => {}
  })
  const round = (e) => {
    e.target.onpointermove = () => {
      document.querySelector('#boil').classList.add("[transform:rotate3d(1,0,0,45deg)]")
    }
  }
  return (
    <main className='flex flex-col justify-center items-center w-full h-full py-20 text-gray-200 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900'>
      <h2 className='text-amber-400 font-semibold'>About A Girl</h2>
      <div
        id='boil'
        onPointerDown={round}
        className='relative w-60 h-40 text-xs select-none [transform-style:preserve-3d] transition-all duration-500'
      >
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:translateZ(210px)]'>
          {/* eslint-disable react/jsx-indent, react/no-unescaped-entities */}
          <pre>
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I need an easy friend
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do with a hand to lend
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do think you fit this shoe
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do what you have a clue
            <br />
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(45deg)_translateZ(210px)]'>
          <pre>
            <b>C#</b> <b>G#5</b> <b>F#m</b>
            <br />
            I'll take advantage while
            <br />
            <b>C#</b> <b>G#5</b> <b>F#m</b>
            <br />
            You hang me out to dry
            <br />
            <b>E5</b> <b>A5</b> <b>C5</b>
            <br />
            But I can't see you every night
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            Free
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />I do
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(90deg)_translateZ(210px)]'>
          <pre>
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I'm standing in your light
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do hope you have the time
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do pick up number two
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />I do keep a date with you
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(135deg)_translateZ(210px)]'>
          <pre>
            <b>C#</b> <b>G#5</b> <b>F#m</b>
            <br />
            I'll take advantage while
            <br />
            <b>C#</b> <b>G#5</b> <b>F#m</b>
            <br />
            You hang me out to dry
            <br />
            <b>E5</b> <b>A5</b> <b>C5</b>
            <br />
            But I can't see you every night
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            Free
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />I do
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(180deg)_translateZ(210px)]'>
          <pre>
            Solo: Repeat 3x
            <br />
            E|-------------------------|
            <br />
            B|-------------------------|
            <br />
            G|----------------7--7/9-9-|
            <br />
            D|-----5-7-7/9--9----------|
            <br />
            A|-7-7---------------------|
            <br />
            E|-------------------------|
            <br />
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(225deg)_translateZ(210px)]'>
          <pre>
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I need an easy friend
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do with a hand to lend
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do think you fit this shoe
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />I do what you have a clue
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(270deg)_translateZ(210px)]'>
          <pre>
            <b>C#</b> <b>G#5</b> <b>F#m</b>
            <br />
            I'll take advantage while
            <br />
            <b>C#</b> <b>G#5</b> <b>F#m</b>
            <br />
            You hang me out to dry
            <br />
            <b>E5</b> <b>A5</b> <b>C5</b>
            <br />
            But I can't see you every night
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            Free
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />I do
          </pre>
        </div>
        <div className='absolute bg-purple-900 p-2 h-full w-full [transform:rotateX(315deg)_translateZ(210px)]'>
          <pre>
            <b>E5</b> <b>A5</b> <b>C5</b>
            <br />
            I can't see you every night
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            Free
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do,
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />
            I do,
            <br />
            <b>E5</b> <b>G</b> <b>E5</b> <b>G</b>
            <br />I do
          </pre>
          {/* eslint-enable react/jsx-indent, react/no-unescaped-entities */}
        </div>
      </div>
    </main>
  )
}

export default About
