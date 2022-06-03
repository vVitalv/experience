import express from "express"
import cookieParser from "cookie-parser"

import config from "./config"
import Html from "../client/html"

const { resolve } = require("path")

const server = express()

const PORT = config.port

const middleware = [
  cookieParser(),
  express.json({ limit: "50kb" }),
  express.static(resolve(__dirname, "../dist")),
]

middleware.forEach((it) => server.use(it))

server.get("/", (req, res) => {
  res.send("Express Server")
})

server.get("/*", (req, res) => {
  const initialState = {
    location: req.url,
  }

  return res.send(
    Html({
      body: "",
      initialState,
    })
  )
})

server.use("/api/", (req, res) => {
  res.status(404)
  res.end()
})

server.listen(PORT)

console.log(`Serving at http://localhost:${PORT}`)
