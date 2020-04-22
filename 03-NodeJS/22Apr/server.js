const express = require('express')
const app = express()
const middlewares = require('./middleware')
const api = require('./api')

app.use(express.json())

app.get(
  '/login',
  middlewares.firstMiddleware,
  middlewares.secondMiddleware,
  api.loginApi
)

app.post(
  '/signup',
  middlewares.firstMiddleware,
  middlewares.secondMiddleware,
  api.signUpApi
)

module.exports = ({ port, cb }) => {
  app.listen(port, cb)
}
