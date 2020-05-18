const os = require('os')
const User = require('./models/User')
const Album = require('./models/Albums')
const Track = require('./models/Tracks')

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

const createAlbum = async (req, res) => {
  const { title, singers, tracks } = req.body
  try {
    const newAlbum = await new Album({ title, singers, tracks }).save()
    res.send({ message: 'Album created!', album: newAlbum })
  } catch ({ message }) {
    res.status(500).send(message)
  }
}

const createTrack = async (req, res) => {
  try {
    const newTrack = await new Track(req.body).save()
    res.send({ message: 'Track created!', track: newTrack })
  } catch ({ message }) {
    res.status(500).send(message)
  }
}

const search = async (req, res) => {
  try {
    if (req.query.type === 'track') {
      // const searchTrack = await Track.find({
      //   'singer.name': {
      //     $eq: req.query.name
      //   }
      // })

      const searchTrack = await Track.find({
        $and: [
          { 'singer.name': req.query.name },
          {
            'singer.age': {
              // $gt: parseInt(req.query.age)
              $in: [23, 24]
            }
          }
        ]
      })

      res.send(searchTrack)
    } else {
      // another query
    }
  } catch ({ message }) {
    res.status(500).send(message)
  }
}
module.exports = {
  search,
  signUpApi,
  loginApi,
  health,
  getUser,
  editUser,
  deleteUser,
  createAlbum,
  createTrack
}
