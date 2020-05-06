const os = require('os')
const moment = require('moment')

const signUpApi = (req, res) => {
  const { username, password } = req.body
  const date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
  console.log('DATE', date)

  res.send(`You are registered with username ${username} and password ${password} from ${os.platform}`)
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
