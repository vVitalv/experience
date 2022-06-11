import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../components/home"
import About from "../components/about/about"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
