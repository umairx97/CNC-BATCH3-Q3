const express = require('express')
const app = express()
const middleware = require('./middleware')
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
  api.signUpApi
)

app.get(
  '/user',
  middleware.uniqueId,
  api.getUser
)

app.put(
  '/user-edit',
  middleware.uniqueId,
  api.editUser
)

app.delete(
  '/user-delete',
  middleware.uniqueId,
  api.deleteUser
)

app.post(
  '/create-album',
  middleware.uniqueId,
  api.createAlbum
)

app.post(
  '/create-track',
  middleware.uniqueId,
  api.createTrack
)

app.get('/search', api.search)

module.exports = ({ port, cb }) => {
  app.listen(port, cb)
}
