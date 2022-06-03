import React from "react"

import ReactLogo from "./reactlogo"

const Content = () => {
  return (
    <main className='absolute flex flex-col items-center w-full min-h-max overflow-y-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <div className='flex justify-center items-center w-full h-screen '>
        <ReactLogo />
      </div>
      <div className='w-full h-96'>section2</div>
      <div className='w-full h-96'>section3</div>
      <div className='w-full h-96'>section4</div>
      <div className='w-full h-96'>section5</div>
    </main>
  )
}

export default Content
