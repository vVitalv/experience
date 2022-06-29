import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../components/home"
import About from "../components/about/about"
import Contacts from "../components/contact/contacts"
import Content from "../components/content"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Content />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
