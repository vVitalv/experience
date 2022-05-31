import React from "react"
import { Switch, Route } from "react-router-dom"

import Startup from "./startup"
import Main from "../components/main"

const Root = () => {
  return (
    <Startup>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
      </Switch>
    </Startup>
  )
}

export default Root
