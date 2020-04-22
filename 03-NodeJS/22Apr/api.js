const os = require('os')

const signUpApi = (req, res) => {
  const { username, password } = req.body
  console.log('ENDPOINT WAS CALLED and unique id is', req.uniqueId)
  res.send(`You are registered with username ${username} and password ${password} from ${os.platform}`)
}

const loginApi = (req, res) => {
  res.send('Welcome to login')
}

module.exports = {
  signUpApi,
  loginApi
}
