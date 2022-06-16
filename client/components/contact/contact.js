import React from "react"
import Div100vh from "react-div-100vh"

import Head from "../head"
import Header from "../header"
import ContactContent from "./contactcontent"
import Footer from "../footer"

const Contact = () => {
  return (
    <Div100vh>
      <Head title='Contacts' />
      <div
        id='viewport'
        className='flex flex-col w-full h-full font-mono font-semibold'
      >
        <Header />
        <ContactContent />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Contact
