import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../components/home"
import About from "../components/about/about"
import Contact from "../components/contact/contact"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
