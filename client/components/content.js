import React from "react"

import OpiReactLogola from "./reactlogo"

const Content = () => {
  return (
    <main className='absolute flex flex-col items-center w-full max-h-max overflow-y-auto'>
      <div className='flex justify-center items-center w-full h-screen bg-gray-700'>
        <ReactLogo />
      </div>
      <div className='w-full h-96 bg-gray-700'>section2</div>
      <div className='w-full h-96 bg-gray-700'>section3</div>
      <div className='w-full h-96'>section4</div>
      <div className='w-full h-96'>section5</div>
    </main>
  )
}

export default Content
