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
  health
}
