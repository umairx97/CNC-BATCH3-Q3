const os = require('os')
const User = require('./models/User')

const signUpApi = async (req, res) => {
  const { username, password, name, lastName } = req.body
  const userId = '5eba92bef7a5da2a854a139f'

  // await new User({
  //   username,
  //   password,
  //   name,
  //   lastName
  // }).save()

  // SQL QUERY EXAMPLE
  // FIND * FROM TABLE1 JOIN TABLE2 WHERE USER=UMAIR. ID=123
  const FindUser = await User.findOne({ name })

  if (!FindUser) {
    return res.send('User not found')
  }

  res.send(FindUser)
}

const loginApi = (req, res) => {
  res.send('Welcome to login')
}

const getUser = (req, res) => {
  const users = [
    {
      PIAIC123: 'PIAIC123',
      name: 'umair'
    },
    {
      PIAIC245: 'PIAIC245',
      name: 'osama'
    }
  ]
  const filteredUser = users.find(user =>
    user[req.query.id] === req.query.id &&
    user.name === req.query.name
  )
  res.send(filteredUser)
}

const health = (req, res) => {
  res.send({
    status: 200,
    health: 'OK',
    uptime: process.uptime(),
    platform: process.platform
  })
}
module.exports = {
  signUpApi,
  loginApi,
  health,
  getUser
}
