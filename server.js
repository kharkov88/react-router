import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StaticRouter from 'react-router'
import App from './src/App'

import express from 'express'
let app = express()
let server = require('http').Server(app)
let port = 3001
const context = {}

app.use(express.static(__dirname + '/build'))

app.get('/', function (req, res) {
  res.redirect('/')
})

app.get('/about', function (req, res) {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <App />
  )
  console.log(html)
  res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `)
  res.end()
})

app.get('/topics', function (req, res) {
  const html = ReactDOMServer.renderToString(
    <div>
      <p>Topics component must be here....</p>
      <App />
    </div>
  )
  res.send(html)
})

server.listen(port)
