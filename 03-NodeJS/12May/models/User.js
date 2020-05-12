const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },

  lastName: {
    type: String,
    default: '',
    trim: true,
    required: true
  },

  username: {
    type: String,
    default: '',
    trim: true,
    required: true,
    unique: true
  },

  // 12345
  // abs123
  // abc@123
  password: {
    type: String,
    trim: true,
    required: true
  }

  // // 02-08-1997
  // DOB: {
  //   type: String,
  //   trim: true,
  //   required: true
  // }
})

const User = mongoose.model('User', userSchema)

module.exports = User
