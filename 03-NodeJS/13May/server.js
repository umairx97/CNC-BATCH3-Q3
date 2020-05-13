const express = require('express')
const app = express()
const middlewares = require('./middleware')
const api = require('./api')

app.use(express.json())

app.get(
  '/health',
  api.health
)

app.post(
  '/login',
  api.loginApi
)

app.post(
  '/signup',
  // middlewares.firstMiddleware,
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

app.put('/user-edit', api.editUser)
app.delete('/user-delete', api.deleteUser)
module.exports = ({ port, cb }) => {
  app.listen(port, cb)
}
