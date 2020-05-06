const express = require('express')
const app = express()
const middlewares = require('./middleware')
const api = require('./api')

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

// app.get(
//   '/user/:userId/:name',
//   api.getUser
// )

app.get(
  '/user',
  api.getUser
)

module.exports = ({ port, cb }) => {
  app.listen(port, cb)
}
