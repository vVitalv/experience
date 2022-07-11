import React, { useEffect } from "react"

import Page from "./page"

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    return () => {}
  })
  const pages = {
    name: "About A Girl",
    coupl1: `E5 G E5 G
I need an easy friend
E5 G E5 G
I do with a hand to lend
E5 G E5 G
I do think you fit this shoe
E5 G E5 G
I do what you have a clue
`,
    chorus: `C# G#5 F#m
I'll take advantage while
C# G#5 F#m
You hang me out to dry
E5 A5 C5
But I can't see you every night
E5 G E5 G
Free
E5 G E5 G I do`,
    coupl2: `E5 G E5 G
I'm standing in your light
E5 G E5 G
I do hope you have the time
E5 G E5 G
I do pick up number two
E5 G E5 G
I do keep a date with you`,
    solo: `Solo:
Repeat 3x
E|-------------------------|
B|-------------------------|
G|----------------7--7/9-9-|
D|-----5-7-7/9--9----------|
A|-7-7---------------------|
E|-------------------------|`,
    end: `E5 A5 C5
I can't see you every night
E5 G E5 G
Free
E5 G E5 G
I do,
E5 G E5 G
I do,
E5 G E5 G
I do`,
  }

  return (
    <main className='flex flex-col justify-around items-center w-full h-full py-20 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900'>
      <div className='relative w-60 h-80 text-xs select-none [transform-style:preserve-3d] [transform:rotate3d(1,0,0,30deg)] [perspective:800px]'>
        <Page
          pageText={pages.name}
          lift='[transform:translateZ(16px)]'
          pageColor='bg-emerald-800'
        />
        <Page
          pageText={pages.coupl1}
          lift='[transform:translateZ(14px)]'
          pageColor='bg-gray-300'
        />
        <Page
          pageText={pages.chorus}
          lift='[transform:translateZ(12px)]'
          pageColor='bg-gray-300'
        />
        <Page
          pageText={pages.coupl2}
          lift='[transform:translateZ(10px)]'
          reverse={8}
          pageColor='bg-gray-300'
        />
        <Page
          pageText={pages.chorus}
          lift='[transform:translateZ(8px)]'
          pageColor='bg-gray-300'
        />
        <Page
          pageText={pages.solo}
          lift='[transform:translateZ(6px)]'
          pageColor='bg-gray-300'
        />
        <Page
          pageText={pages.coupl1}
          lift='[transform:translateZ(4px)]'
          pageColor='bg-gray-300'
        />
        <Page
          pageText={pages.end}
          lift='[transform:translateZ(2px)]'
          pageColor='bg-gray-300'
        />
        <div className='absolute h-full w-full bg-emerald-800' />
      </div>
    </main>
  )
}

export default About
