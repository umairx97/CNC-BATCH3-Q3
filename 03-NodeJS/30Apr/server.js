const express = require('express')
const app = express()
const middlewares = require('./middleware')
const api = require('./api')
const jwt = require('jsonwebtoken')

app.use(express.json())


app.get(
  '/health',
  api.health
)

app.get(
  '/login',
  api.loginApi
)

app.post(
  '/signup',
  middlewares.firstMiddleware,
  api.signUpApi
)

module.exports = ({ port, cb }) => {
  app.listen(port, cb)
}
