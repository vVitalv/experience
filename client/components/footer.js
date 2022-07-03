import React from "react"

const Footer = () => {
  return (
    <footer className='fixed bottom-0 z-50 w-full bg-neutral-500 text-gray-500 dark:text-gray-300 text-sm font-medium bg-opacity-10 backdrop-blur-md'>
      <div className='flex items-center px-4 w-full h-8'>
        <span>2022 CPL.Risitas </span>
        <a
          className='ml-2 bg-gradient-to-b from-blue-500 to-yellow-500 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
          href='https://skillcrucial.com'
          target='_blank'
          rel='noreferrer'
        >
          SkillCrucial
        </a>
      </div>
    </footer>
  )
}

export default Footer
