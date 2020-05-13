const os = require('os')
const User = require('./models/User')

const signUpApi = async (req, res) => {
  const { username, password, name, lastName } = req.body
  try {
    const newUser = await new User({
      username,
      password,
      name,
      lastName
    }).save()

    // SQL QUERY EXAMPLE
    // FIND * FROM TABLE1 JOIN TABLE2 WHERE USER=UMAIR. ID=123
    res.send({ success: true, user: newUser })
  } catch (err) {
    res.status(500).send({ success: false, message: err.message })
  }
}

const loginApi = async (req, res) => {
  const { username, password } = req.body
  try {
    const findUser = await User.find({ username, password })

    if (!findUser) {
      return res.status(404).send('User not found')
    }

    res.send('You are logged in')
  } catch (err) {
    res.status(500).send('Server Error, please try again')
  }
}

const editUser = async (req, res) => {
  const { username, password, newPassword } = req.body
  try {
    const findUser = await User.find({ username, password })

    if (!findUser) {
      return res.status(404).send('User not found')
    }

    await User.findOneAndUpdate({ username }, {
      $set: {
        password: newPassword
      }
    })

    res.send('Your password has been updated')
  } catch (err) {
    res.status(500).send('Server Error, please try again')
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.body
  try {
    await User.findOneAndRemove({ _id: id })

    res.send('Your account has been removed')
  } catch (err) {
    res.status(500).send('Server Error, please try again')
  }
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
  getUser,
  editUser,
  deleteUser
}
