import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  let hTitle
  switch (title) {
    case "/":
      hTitle = "Home"
      break
    case "/about":
      hTitle = "About a girl \uD83E\uDD18"
      break
    case "/contacts":
      hTitle = "Contacts"
      break
    default:
      hTitle = `${window.location.host}`
      break
  }
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{`Experience - ${hTitle}`}</title>
    </Helmet>
  )
}

export default Head
